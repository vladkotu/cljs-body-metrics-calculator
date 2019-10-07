(ns body-index-calculator.components.input
  (:require [reagent.core :as r]
            [body-index-calculator.components.styles :refer [form-control-props form-label-styles]]
            [body-index-calculator.helpers :refer [evalue]]
            ["@material-ui/core" :refer [FormControl
                                         FormLabel
                                         InputAdornment
                                         OutlinedInput]]))

(defn input [{:keys [on-change
                     on-blur
                     on-focus
                     units
                     label
                     value]
              :or   {value ""
                     on-change #()
                     on-focus #()
                     on-blur #()}}]
  (let [id (str "intput-" (.toLowerCase label))]
    [:> FormControl form-control-props
     [:> FormLabel {:component "label"
                    :html-for id
                    :style form-label-styles}
      label]
     [:> OutlinedInput {:id id
                        :value value
                        :on-change #(on-change (evalue %))
                        :on-blur #(on-blur)
                        :on-focus #(on-focus)
                        :endAdornment
                        (r/as-element
                         [:> InputAdornment
                          {:position "end"} units])}]]))
