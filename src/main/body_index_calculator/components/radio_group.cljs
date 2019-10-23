(ns body-index-calculator.components.radio-group
  (:require
   [reagent.core :as r]
   [body-index-calculator.helpers :refer [evalue]]
   ["@material-ui/core/FormControl" :default FormControl]
   ["@material-ui/core/FormControlLabel" :default FormControlLabel]
   ["@material-ui/core/FormLabel" :default FormLabel]
   ["@material-ui/core/Radio" :default Radio]
   ["@material-ui/core/RadioGroup" :default RadioGroup]))

(defn hidden-radio []
  [:div {:style {:visibility "hidden "}}
   [:> FormControlLabel {:value ""
                         :label ""
                         :control (r/as-element [:> Radio])}]])

(defn radio-group [{:keys [add-hidden? value name on-change label radio-buttons]}]
  [:> FormControl
   [:> FormLabel {:component "legend"} label]
   [:> RadioGroup {:name      name
                   :value     value
                   :on-change #(on-change (evalue %))
                   :row       true}
    (for [radio radio-buttons]
      ^{:key (str (:label radio))}
      [:> FormControlLabel
       (assoc radio :control (r/as-element [:> Radio]))])
    (when add-hidden? [hidden-radio])]])
