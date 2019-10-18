(ns body-index-calculator.components.form
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.age    :refer [age]]
   [body-index-calculator.components.weight :refer [weight]]
   [body-index-calculator.components.waist :refer [waist]]
   [body-index-calculator.components.height :refer [height]]))

(defn gender []
  (let [value (rf/subscribe [::s/gender])]
    (fn []
      [radio-group
       {:value         (or @value "")
        :label         "Gender"
        :radio-buttons [{:label "Female" :value "female"}
                        {:label "Male" :value "male"}]
        :on-change     #(rf/dispatch
                         [::e/gender
                          {:visited? true
                           :value    (keyword %)}])}])))

(defn form []
  [:form {:name "index-calculator"
          :no-validate true
          :auto-complete "off"}
   [gender]
   [age]
   [weight]
   [height]
   [waist]])
