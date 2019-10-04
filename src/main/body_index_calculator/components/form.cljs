(ns body-index-calculator.components.form
  (:require [reagent.core :as r]
            [body-index-calculator.config    :refer [form-control-props]]
            [body-index-calculator.helpers   :refer [evalue with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.headings :refer [h5]]
            [body-index-calculator.components.gender   :refer [gender]]
            [body-index-calculator.components.input    :refer [input]]
            [body-index-calculator.components.age      :refer [age]]
            ["@material-ui/core" :refer [FormControl
                                         FormControlLabel
                                         FormLabel
                                         InputAdornment
                                         MenuItem
                                         OutlinedInput
                                         Radio
                                         RadioGroup
                                         Select
                                         TextField]]))


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
