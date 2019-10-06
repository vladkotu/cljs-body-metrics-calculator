(ns body-index-calculator.components.gender
  (:require [reagent.core :as r]
            [body-index-calculator.components.styles :refer [form-control-props]]
            [body-index-calculator.helpers :refer [evalue]]
            ["@material-ui/core" :refer [FormControl
                                         FormControlLabel
                                         FormLabel
                                         Radio
                                         RadioGroup]]))

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
