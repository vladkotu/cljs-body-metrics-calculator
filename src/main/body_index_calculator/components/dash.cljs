(ns body-index-calculator.components.dash
  (:require
   [body-index-calculator.components.common :refer [spacing-paper]]
   ["@material-ui/core" :refer [Grid Paper]]))

(defn dash []
  (fn []
    [:> Grid {:container true
              :justify "space-around"
              :spacing 3}
     (for [x [1 2 3 4 5]]
       ^{:key (str "name-" x)}
       [:> Grid {:item true}
        [:> Paper x]])]))
