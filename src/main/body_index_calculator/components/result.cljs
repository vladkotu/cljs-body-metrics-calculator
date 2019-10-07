(ns body-index-calculator.components.result
  (:require [re-frame.core :as rf]
            ["@material-ui/core" :refer [Table
                                         TableBody
                                         TableCell
                                         TableHead
                                         TableRow]]))

(defn form->person [db]
  (->> db
       (map (fn [[k {:keys [value]}]] [k value]))
       (into {})))

(defn result-table []
  (let [db (rf/subscribe [:bmi])]
    (fn []
      [:> Table
       [:> TableHead
        [:> TableRow
         [:> TableCell {:align "right"} "Metric name / Units"]
         [:> TableCell {:align "right"} "Value"]
         [:> TableCell {:align "right"} "Conclusion"]]]
       [:> TableBody
        [:> TableRow
         [:> TableCell {:align "right"}
          [:span "Body Mass Index (BMI) / kg/m" [:sup 2]]]
         [:> TableCell 80]
         [:> TableCell [:strong "Obese"]]]
          ;; [:> TableCell {:align "right"} "Body Fat"]
          ;; [:> TableCell {:align "right"} "Lean Body Mass"]
          ;; [:> TableCell {:align "right"} "Basal Metabolic rate"]
        ]])))
