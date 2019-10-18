(ns body-index-calculator.components.result
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   ["@material-ui/core" :refer [Table
                                TableBody
                                TableCell
                                TableHead
                                TableRow]]))

(defn cell [child]
  [:> TableCell {:align "right"} child])

(defn react-key [& ss]
  (-> (clojure.string/join "-" ss)
      (clojure.string/trim)
      (clojure.string/replace #"\s+" "-")))

(defn result-table []
  (let [res (rf/subscribe [::s/result])]
    (fn []
      (js/console.log @res)
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
           [cell [:span (:title row) " / " (:units row)]]
           [cell [:span (:value row)]]
           [cell [:strong (:conclusion row)]]])]])))
