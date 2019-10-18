(ns body-index-calculator.components.radio-group
  (:require [reagent.core :as r]
            [body-index-calculator.components.common :refer [form-control-props]]
            [body-index-calculator.helpers :refer [evalue]]
            ["@material-ui/core" :refer [FormControl
                                         FormControlLabel
                                         FormLabel
                                         Radio
                                         RadioGroup]]))

(defn hidden-radio []
  [:div {:style {:visibility "hidden "}}
   [:> FormControlLabel {:value ""
                         :label ""
                         :control (r/as-element [:> Radio])}]])

(defn radio-group [{:keys [value on-change label radio-buttons]}]
  [:> FormControl form-control-props
   [:> FormLabel {:component "legend"} label]
   [:> RadioGroup {:name "gender"
                   :value value
                   :on-change #(on-change (evalue %))
                   :row true}
    (for [radio radio-buttons]
      ^{:key (str (:label radio))}
      [:> FormControlLabel
       (assoc radio :control (r/as-element [:> Radio]))])
    [hidden-radio]]])
