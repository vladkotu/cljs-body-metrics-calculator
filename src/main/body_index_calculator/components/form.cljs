(ns body-index-calculator.components.form
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [->int]]
   [body-index-calculator.mui-theme :refer [spacing]]
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

(def unit-types {:imperial {:length ["ft" "in"]
                            :weight "lb"
                            :age    "yrs"}
                 :metric {:length "cm"
                          :weight "kg"
                          :age    "yrs"}})

(defn input-with-subscription [{:keys [sub-key ev-key label unit-type]}]
  (let [system (rf/subscribe [::s/system])
        value  (rf/subscribe [sub-key])]
    (fn []
      (let [units  (get-in unit-types [@system unit-type])]
        (if (= PersistentVector (type units))
          [double-input
           label
           {:value     (or (first @value) "")
            :units     (first units)
            :on-change #()
            :on-focus  #()
            :on-blur   #()}
           {:value     (or (second @value) "")
            :units     (second units)
            :on-change #()
            :on-focus  #()
            :on-blur   #()}]
          [input
           {:label     label
            :value     (or @value "")
            :units     units
            :on-change #(rf/dispatch
                         [ev-key {:value (->int %)}])
            :on-focus  #(rf/dispatch
                         [ev-key {:visited? true :active? true}])
            :on-blur   #(rf/dispatch
                         [ev-key {:active? false}])}])))))

(defn hip []
  [input-with-subscription
   {:label     "Hip Circumference"
    :sub-key   ::s/hip
    :ev-key    ::e/hip
    :unit-type :length}])

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
    :unit-type :length}]

  #_(fn []
      (if (= :metric @units)

        [double-input
         "Waist Circumference"
         {:value     5
          :units     "ft"
          :on-change #()
          :on-focus  #()
          :on-blur   #()}
         {:value     3
          :units     "in"
          :on-change #()
          :on-focus  #()
          :on-blur   #()}])))

(defn form []
  [:form {:name          "index-calculator"
          :no-validate   true
          :auto-complete "off"}
   [:> Box {:my 1.5}
    [meassuring-system]
    [:> Divider]]
   [:> Box {:my 1.5}
    [gender]]
   [:> Box {:my 1.5}
    [age]]
   [:> Box {:my 1.5}
    [weight]]
   [:> Box {:my 1.5}
    [height]]
   [:> Box {:my 1.5}
    [waist]]
   [:> Box {:my 1.5}
    [hip]]])
