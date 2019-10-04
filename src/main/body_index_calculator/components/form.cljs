(ns body-index-calculator.components.form
  (:require [body-index-calculator.components.gender :refer [gender]]
            [body-index-calculator.components.input  :refer [input]]
            [body-index-calculator.components.age    :refer [age]]))

(defn form []
  [:form {:name "index-calculator"
          :no-validate true
          :auto-complete "off"}
   [gender]
   [age]
   [input {:label "Your Weight"
           :value ""
           :required true
           :units "Kg"
           :on-change #(prn %)}]
   [input {:label "Your Height"
           :value ""
           :required true
           :units "Sm"
           :on-change #(prn %)}]])
