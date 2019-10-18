(ns body-index-calculator.components.gender
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.components.styles :refer [form-control-props]]
            [body-index-calculator.helpers :refer [evalue]]
            [body-index-calculator.subscriptions :as s]
            [body-index-calculator.events :as e]
            ["@material-ui/core" :refer [FormControl
                                         FormControlLabel
                                         FormLabel
                                         Radio
                                         RadioGroup]]))

(defn gender-comp [{:keys [value on-change]}]
  [:> FormControl form-control-props
   [:> FormLabel {:component "legend"} "Gender"]
   [:> RadioGroup {:aria-label "gender"
                   :name "gender"
                   :value value
                   :on-change #(on-change (evalue %))
                   :row true}
    [:> FormControlLabel {:value "female"
                          :label "Female"
                          :control (r/as-element [:> Radio])}]
    [:> FormControlLabel {:value "male"
                          :label "Male"
                          :control (r/as-element [:> Radio])}]
    [:div {:style {:visibility "hidden "}}
     [:> FormControlLabel {:value ""
                           :label ""
                           :control (r/as-element [:> Radio])}]]]])

(defn gender []
  (let [db (rf/subscribe [::s/gender])]
    (fn []
      [gender-comp
       {:value (or (:value @db) "")
        :on-change #(rf/dispatch
                     [::e/gender
                      {:visited? true
                       :value (keyword %)}])}])))
