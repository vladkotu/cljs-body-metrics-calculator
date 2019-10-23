(ns body-index-calculator.components.result
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [react-key as-int as-float]]
   ["@material-ui/core/Table" :default Table]
   ["@material-ui/core/TableBody" :default TableBody]
   ["@material-ui/core/TableCell" :default TableCell]
   ["@material-ui/core/TableHead" :default TableHead]
   ["@material-ui/core/TableRow" :default TableRow]))

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
        (for [{:keys [abbr raw-value? title units value conclusion]} @res]
          ^{:key (react-key "table-row" title)}
          [:> TableRow
           [cell [:span title " (" abbr  ") " "/ " units]]
           [cell [:span (if raw-value? (as-float value 4) (as-int value))]]
           [cell [:strong conclusion]]])]])))
