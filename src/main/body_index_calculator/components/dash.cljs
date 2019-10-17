(ns body-index-calculator.components.dash
  (:require
   [body-index-calculator.mui-theme :refer [js-theme spacing]]
   [body-index-calculator.components.common :refer [spacing-paper]]
   ["@material-ui/core" :refer [Box Grid Paper Typography]]
   ["@material-ui/icons/CheckCircle" :default CheckCircleIcon]
   ["@material-ui/icons/HighlightOff" :default  HighlightOffIcon]))

(defn ready-icon []
  [:> CheckCircleIcon {:color "action"
                       :font-size "medium"}])

(defn not-ready-icon []
  [:> HighlightOffIcon {:color "disabled"
                        :font-size "medium"}])
(defn status-icon [{:keys [done? label] :or {done? false}}]
  [:> Typography {:vairant "overline"
                  :component "div"
                  :style   {:display     "flex"
                            :align-items "center"}}
   (if done?
     [ready-icon]
     [not-ready-icon])
   [:> Box {:pt 0.5 :pl 0.5
            :color (if done? "text.primary" "text.disabled")}
    label]])

(defn dash []
  (fn []
    [:> Box {:p 1}
     [:> Grid {:container true
               :justify "space-around"
               :spacing 3}
      (for [x [{:done? true :label "BMI"}
               {:done? false :label "BMR"}
               {:done? false :label "LBM?"}]]
        ^{:key (str "name-" (:label x))}
        [status-icon x])]]))
