(ns body-index-calculator.components.input
  (:require [reagent.core :as r]
            [body-index-calculator.config    :refer [form-control-props]]
            [body-index-calculator.helpers   :refer [evalue with-styles-react]]
            [body-index-calculator.components.headings :refer [h5]]
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

(defn input [{:keys [on-change
                     units
                     label
                     value
                     required]
              :or   {value ""
                     required false}}]
  (let [id (str "intput-" (.toLowerCase label))]
    [:> FormControl form-control-props
     [:> FormLabel {:component "label"
                    :html-for id} label]
     [:> OutlinedInput {:id id
                        :value value
                        :on-change #(on-change (evalue %))
                        :endAdornment
                        (r/as-element
                         [:> InputAdornment
                          {:position "end"} units])}]]))
