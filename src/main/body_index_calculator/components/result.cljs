(ns body-index-calculator.components.result
  (:require [re-frame.core :as rf]
            ["@material-ui/core" :refer [Table
                                         TableBody
                                         TableCell
                                         TableHead
                                         TableRow]]))

(defn cell [child]
  [:> TableCell {:align "right"} child])

(defn result-table []
  (let [bmi (rf/subscribe [:bmi])
        lbm (rf/subscribe [:lbm])]
    (fn []
      (let [bmi @bmi
            lbm @lbm]
        [:> Table
         [:> TableHead
          [:> TableRow
           [cell "Metric name / Units"]
           [cell "Value"]
           [cell "Conclusion"]]]
         [:> TableBody
          [:> TableRow
           [cell [:span "Body Mass Index (BMI) / "
                  (last bmi)]]
           [cell (first bmi)]
           [cell [:strong (second bmi)]]]
          [:> TableRow
           [cell [:span "Lean Body Mass (LBM)"
                  (last lbm)]]
           [cell (first lbm)]
           [cell [:strong (second lbm)]]]]]))))
