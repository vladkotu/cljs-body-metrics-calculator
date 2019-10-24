(ns body-index-calculator.components.dash
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Typography" :default Typography]
   ["@material-ui/icons/CheckCircle" :default CheckCircleIcon]
   ["@material-ui/icons/HighlightOff" :default  HighlightOffIcon]))

(defn ready-icon []
  [:> CheckCircleIcon
   {:color "action"
    :font-size "small"}])

(defn not-ready-icon []
  [:> HighlightOffIcon
   {:color "disabled"
    :font-size "small"}])

(defn status-icon [{:keys [done? label] :or {done? false}}]
  [:> Typography {:vairant "caption"
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
  (let [res (rf/subscribe [::s/result])]
    (fn []
      [:> Box {:p 1}
       [:> Grid {:container true
                 :justify "space-around"
                 :spacing 3}
        (for [x @res]
          ^{:key (str "name-" (:title x))}
          [status-icon {:done? (not (nil? (:value x)))
                        :label (:abbr x)}])]])))
