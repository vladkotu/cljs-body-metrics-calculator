(ns body-index-calculator.components.form
  (:require
   [reagent.core :as r]
   [body-index-calculator.i18n :refer [tr]]
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :as helpers :refer [->int]]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.input  :refer [input double-input]]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Divider" :default Divider]))

(defn meassuring-system []
  (let [value (rf/subscribe [::s/system])]
    (fn []
      [radio-group
       {:value         (or @value "")
        :name          "system"
        :add-hidden?   false
        :radio-buttons [{:label "Metric" :value :metric}
                        {:label "Imperial" :value :imperial}]
        :on-change     #(rf/dispatch
                         [::e/system (keyword %)])}])))

(defn gender []
  (let [value (rf/subscribe [::s/gender])]
    (fn []
      [radio-group
       {:value         (or @value "")
        :name          "gender"
        :add-hidden?   true
        :radio-buttons [{:label "Male" :value "male"}
                        {:label "Female" :value "female"}]
        :on-change     #(rf/dispatch
                         [::e/gender
                          {:visited? true
                           :value    (keyword %)}])}])))

(def unit-types {:imperial
                 {:length ["ft" "in"]
                  :weight "lb"
                  :age    "yrs"}
                 :metric
                 {:length "cm"
                  :weight "kg"
                  :age    "yrs"}})

(defn input-with-subscription [{:keys [value ev-key label units]}]
  [input
   {:label     label
    :value     (or value "")
    :units     units
    :on-change #(rf/dispatch
                 [ev-key {:value [(->int %)]}])
    :on-focus  #(rf/dispatch
                 [ev-key {:visited? true :active? true}])
    :on-blur   #(rf/dispatch
                 [ev-key {:active? false}])}])

(defn double-input-with-subscription [{:keys [value ev-key label units]}]
  (r/with-let [local-state (r/atom {:ft/value (first value)
                                    :in/value (second value)})]
    (letfn [(dispatch-change [state]
              (rf/dispatch [ev-key {:value (mapv ->int [(:ft/value state) (:in/value state)])}]))
            (dispatch-focus [] (rf/dispatch [ev-key {:visited? true :active? true}]))
            (dispatch-blur [] (rf/dispatch [ev-key {:active? false}]))]
      [double-input
       label
       {:value     (or (first value) "")
        :units     (first units)
        :on-change #(do (swap! local-state assoc :ft/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}
       {:value     (or (second value) "")
        :units     (second units)
        :on-change #(do (swap! local-state assoc :in/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}])))

(defn unit-type-dispatcher [{:keys [unit-type]} props]
  (r/with-let [sub-value (rf/subscribe [(:sub-key props)])]
    (let [[system value] @sub-value
          units          (get-in unit-types [system unit-type])
          full-props     (merge props {:units units :value value})]
      (if (= PersistentVector (type units))
        [double-input-with-subscription full-props]
        [input-with-subscription full-props]))))

(defn hip []
  [unit-type-dispatcher
   {:unit-type :length}
   {:label   "Hip Circumference"
    :sub-key ::s/hip
    :ev-key  ::e/hip}])

(defn age []
  [input-with-subscription
   {:label     "Age"
    :sub-key   ::s/age
    :ev-key    ::e/age
    :unit-type :age}])

(defn weight []
  [input-with-subscription
   {:label     "Weight"
    :sub-key   ::s/weight
    :ev-key    ::e/weight
    :unit-type :weight}])

(defn height []
  [input-with-subscription
   {:label     "Height"
    :sub-key   ::s/height
    :ev-key    ::e/height
    :unit-type :length}])

(defn waist []
  [input-with-subscription
   {:label     "Waist Circumference"
    :sub-key   ::s/waist
    :ev-key    ::e/waist
    :unit-type :length}])

(def ddb {:system :metric
          :form   {:gender {:visited? false
                            :active?  false
                            :value    nil
                            :utype    nil}
                   :age    {:visited? false
                            :active?  false
                            :value    nil
                            :utype    :time}
                   :weight {:visited? false
                            :value    nil
                            :active?  [nil]
                            :utype    :mass}
                   :height {:visited? false
                            :active?  false
                            :value    [nil nil]
                            :utype    :len}
                   :waist  {:visited? false
                            :active?  false
                            :value    [1 2]
                            :utype    :len}
                   :hip    {:visited? false
                            :active?  false
                            :value    [23]
                            :utype    :len}}})

(defn compound-type [system value]
  (when-let [utype (:utype value)]
    (keyword system utype)))

(def system-converters
  {:metric/len    #'helpers/ft-in->sm
   :imperial/len  #'helpers/sm->ft-in
   :metric/mass   #'helpers/lb->kg
   :imperial/mass #'helpers/kg->lb})


(js/console.log
 "!!!!!!!!!!!!!"
 (tr [:ru] [:imperial/mass])
 )


(let [{:keys [system form]} ddb]
  (map (fn [[_ field]]
         (let [comp-type     (compound-type system field)
               sys-converter (or (get system-converters comp-type) #'identity)
               title         (when comp-type (tr [:en] [comp-type]))
               derrived-val  (merge field {:compound-type comp-type :value (sys-converter (:value field)) :old-value (:value field)})]
           (cljs.pprint/pprint
            [comp-type sys-converter title derrived-val])))
       form))

(defn form []
  [:form {:name          "index-calculator"
          :no-validate   true
          :auto-complete "off"}
   [:> Box {:my 1.5}
    [meassuring-system]
    [:> Divider]]
   ;; [:> Box {:my 1.5}
   ;;  [gender]]
   ;; [:> Box {:my 1.5}
   ;;  [age]]
   ;; [:> Box {:my 1.5}
   ;;  [weight]]
   ;; [:> Box {:my 1.5}
   ;;  [height]]
   ;; [:> Box {:my 1.5}
   ;;  [waist]]
   [:> Box {:my 1.5}
    [hip]]])
