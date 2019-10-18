(ns body-index-calculator.components.form
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.config  :refer [config]]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [->int]]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.selectbox :refer [selectbox]]
   [body-index-calculator.components.input  :refer [input]]))

(defn age []
  (let [value (rf/subscribe [::s/age])]
    (fn []
      [selectbox
       {:value   (or @value "")
        :label "Age"
        :options (:ages config)
        :on-change
        #(rf/dispatch
          [::e/age {:visited? true
                    :value    %}])}])))

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

(defn weight []
  (let [value (rf/subscribe [::s/weight])]
    (fn []
      [input
       {:label     "Your Weight"
        :value     (or @value "")
        :units     "Kg"
        :on-change #(rf/dispatch
                     [::e/weight
                      {:value (->int %)}])
        :on-focus  #(rf/dispatch
                     [::e/weight
                      {:visited? true
                       :active?  true}])
        :on-blur   #(rf/dispatch
                     [::e/weight
                      {:active? false}])}])))

(defn height []
  (let [db (rf/subscribe [::s/height])]
    (fn []
      [input
       {:label     "Your Height"
        :value     (:value @db)
        :required  true
        :units     "Sm"
        :on-change #(rf/dispatch
                     [::e/height
                      {:value (->int %)}])
        :on-focus  #(rf/dispatch
                     [::e/height
                      {:active?  true
                       :visited? true}])
        :on-blur   #(rf/dispatch
                     [::e/height
                      {:active? false}])}])))

(defn waist []
  (let [db (rf/subscribe [::s/waist])]
    (fn []
      [input
       {:label    "Your Waist Circumference"
        :value    (:value @db)
        :required true
        :units    "Sm"
        :on-change
        #(rf/dispatch [::e/waist
                       {:value (->int %)}])
        :on-focus
        #(rf/dispatch [::e/waist
                       {:active?  true
                        :visited? true}])
        :on-blur
        #(rf/dispatch [::e/waist
                       {:active? false}])}])))

(defn form []
  [:form {:name "index-calculator"
          :no-validate true
          :auto-complete "off"}
   [gender]
   [age]
   [weight]
   [height]
   [waist]])
