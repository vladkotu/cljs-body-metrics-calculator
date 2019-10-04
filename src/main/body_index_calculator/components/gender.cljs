(ns body-index-calculator.components.gender
  (:require [reagent.core :as r]
            [body-index-calculator.config    :refer [form-control-props]]
            [body-index-calculator.helpers   :refer [evalue with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.headings :refer [h5]]
            [body-index-calculator.components.input :refer [input]]
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


(defn gender [{:keys [value]}]
  [:> FormControl form-control-props
   [:> FormLabel {:component "legend"} "Gender"]
   [:> RadioGroup {:aria-label "gender"
                   :name "gender"
                   :value value
                   :on-change #(prn (evalue %))
                   :row true}
    [:> FormControlLabel {:value "female"
                          :label "Female"
                          :control (r/as-element [:> Radio])}]
    [:> FormControlLabel {:value "male"
                          :label "Male"
                          :control (r/as-element [:> Radio])}]]])
