(ns body-index-calculator.components.result
  (:require [re-frame.core :as rf]
            ["@material-ui/core" :refer [Table
                                         TableBody
                                         TableCell
                                         TableHead
                                         TableRow]]))

(defn form->person [bmi]
  (->> bmi
       (map (fn [[k {:keys [value]}]] [k value]))
       (into {})))

(defn result-table []
  (let [bmi (rf/subscribe [:bmi])]
    (fn []
      (let [[score class unit] @bmi]
        [:> Table
         [:> TableHead
          [:> TableRow
           [:> TableCell {:align "right"} "Metric name / Units"]
           [:> TableCell {:align "right"} "Value"]
           [:> TableCell {:align "right"} "Conclusion"]]]
         [:> TableBody
          [:> TableRow
           [:> TableCell {:align "right"}
            [:span "Body Mass Index (BMI) / " unit]]
           [:> TableCell {:align "right"} score]
           [:> TableCell {:align "right"} [:strong class]]]
          ;; [:> TableCell {:align "right"} "Body Fat"]
          ;; [:> TableCell {:align "right"} "Lean Body Mass"]
          ;; [:> TableCell {:align "right"} "Basal Metabolic rate"]
          ]]))))
