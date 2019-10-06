(ns body-index-calculator.components.form
  (:require [body-index-calculator.components.gender :refer [gender]]
            [body-index-calculator.components.age    :refer [age]]
            [body-index-calculator.components.weight :refer [weight]]
            [body-index-calculator.components.height :refer [height]]))

(defn form []
  [:form {:name "index-calculator"
          :no-validate true
          :auto-complete "off"}
   [gender]
   [age]
   [weight]
   [height]])
