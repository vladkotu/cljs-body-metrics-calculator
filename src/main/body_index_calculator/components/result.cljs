(ns body-index-calculator.components.result
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [react-key as-int]]
   ["@material-ui/core" :refer [Table
                                TableBody
                                TableCell
                                TableHead
                                TableRow]]))

(defn cell [child]
  [:> TableCell {:align "right"} child])

(defn result-table []
  (let [res (rf/subscribe [::s/result])]
    (fn []
      [:> Table
       [:> TableHead
        [:> TableRow
         [cell "Metric name / Units"]
         [cell "Value"]
         [cell "Conclusion"]]]
       [:> TableBody
        (for [row @res]
          ^{:key (react-key "table-row" (:title row))}
          [:> TableRow
           [cell [:span (:title row) " (" (:abbr row)  ") " "/ " (:units row)]]
           [cell [:span (as-int (:value row))]]
           [cell [:strong (:conclusion row)]]])]])))
