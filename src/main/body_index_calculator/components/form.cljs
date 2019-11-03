(ns body-index-calculator.components.form
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.i18n :refer [tr]]
   [body-index-calculator.mui-theme :refer [spacing]]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [loc react-key]]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.input  :refer [input double-input]]
   ["@material-ui/icons/ArrowDownward" :default ArrowDownIcon]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Typography" :default Typography]
   ["@material-ui/core/Divider" :default Divider]))

(defn pprn [& args]
  (doseq [av args]
    (cljs.pprint/pprint av)))

;; it is not used but will leave it here for a dev process
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

(defn gender [{:keys [locale value ev-key label]}]
  [radio-group
   {:value         (or value "")
    :label         label
    :name          "gender"
    :add-hidden?   true
    :radio-buttons [{:label (tr [locale] [:form.gender/male])
                     :value :male}
                    {:label (tr [locale] [:form.gender/female])
                     :value :female}]
    :on-change     #(rf/dispatch
                     [ev-key
                      {:visited? true
                       :value    (keyword %)}])}])

(defn input-with-dispatchers [{:keys [value
                                      ev-key
                                      label
                                      units
                                      error
                                      error-text]
                               :or   {error false}
                               :as   props}]
  [input
   {:label      label
    :value      (or value "")
    :units      units
    :error      error
    :error-text error-text
    :on-change  #(rf/dispatch
                  [ev-key {:value %}])
    :on-focus   #(rf/dispatch
                  [ev-key {:active? true}])
    :on-blur    #(rf/dispatch
                  [ev-key {:visited? true :active? false}])}])

(defn double-input-with-dispatchers [{:keys [value ev-key label units] :as props}]
  (r/with-let [local-state (r/atom {:ft/value (first value)
                                    :in/value (second value)})]
    (letfn [(dispatch-change [state]
              (rf/dispatch [ev-key {:value [(:ft/value state) (:in/value state)]}]))
            (dispatch-focus [] (rf/dispatch [ev-key {:active? true}]))
            (dispatch-blur [] (rf/dispatch [ev-key {:visited? true :active? false}]))]
      [double-input
       label
       {:value     (or (first value) "")
        :units     (second units)
        :on-change #(do (swap! local-state assoc :ft/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}
       {:value     (or (second value) "")
        :units     (last units)
        :on-change #(do (swap! local-state assoc :in/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}
       (select-keys props [:error :error-text])])))

(defn input-with-subscription [{:keys [sub-key ev-key label] :as props}]
  (r/with-let [field  (rf/subscribe [sub-key])
               locale (rf/subscribe [::s/locale])
               system (rf/subscribe [::s/system])]
    ;; (pprn @field)
    (let [{:keys [value
                  utype
                  error-text]} @field
          units                (tr [@locale] (loc [:system @system :units utype]))
          common-props         (-> @field
                                   ;; (assoc :error-text (tr [@locale] (loc error-text)))
                                   (assoc :ev-key ev-key)
                                   (assoc :units units)
                                   (assoc :locale @locale)
                                   (assoc :label (tr [@locale] [label])))]
      (cond
        (and (= :len utype) (= :imperial @system))
        [double-input-with-dispatchers common-props
         #_(merge props {:units (rest units)} common-props)]

        (nil? utype)
        [gender common-props
         #_(merge props common-props)]

        :else
        [input-with-dispatchers (merge props {:units units} common-props)]))))

(def inputs
  [{:label   :form.gender/label
    :sub-key ::s/gender
    :ev-key  ::e/gender}

   {:label   :form/age
    :sub-key ::s/age
    :ev-key  ::e/age}

   {:label   :form/weight
    :sub-key ::s/weight
    :ev-key  ::e/weight}

   {:label   :form/height
    :sub-key ::s/height
    :ev-key  ::e/height}

   {:label   :form/waist
    :sub-key ::s/waist
    :ev-key  ::e/waist}

   {:label   :form/hip
    :sub-key ::s/hip
    :ev-key  ::e/hip}])

(defn i18n [path]
  (r/with-let [locale (rf/subscribe [::s/locale])]
    [:span (tr [@locale] (if (= 1 (count path))
                           path
                           (loc path)))]))

(defn form []
  [:form {:name          "index-calculator"
          :no-validate   true
          :auto-complete "off"}
   ;; form header
   [:> Box {:min-height      (spacing 6.5)
            :display         "flex"
            :flex-direction  "row"
            :justify-content "center"
            :align-items     "center"}
    [:> Box {:mr 1.5}
     [:> ArrowDownIcon {:font-size "small"}]]
    [:> Typography {:variant "h6" :component "h2"}
     [i18n [:form/call-to-action]]]]
   [:> Divider]
   [meassuring-system]
   ;; form fields
   (into
    [:> Box]
    (for [props inputs]
      [:> Box {:my 1.5 :key (react-key (:label props))}
       [input-with-subscription props]]))])
