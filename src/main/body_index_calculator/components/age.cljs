(ns body-index-calculator.components.age
  (:require [body-index-calculator.components.styles :refer [form-control-props form-label-styles]]
            [body-index-calculator.helpers   :refer [evalue]]
            ["@material-ui/core" :refer [FormControl
                                         FormLabel
                                         MenuItem
                                         Select]]))

(defn age [{:keys [value]}]
  (let [a-ages (range 12 (inc 99))
        default-age (nth a-ages (Math/floor (/ (count a-ages) 4)))]
    [:> FormControl form-control-props
     [:> FormLabel {:component "label"
                    :html-for "age-native"
                    :style form-label-styles}
      "Age"]
     [:> Select {:value (or value default-age)
                 :input-props {:name "age" :id "age-native"}
                 :on-change #(prn (evalue %))
                 :Menu-props
                 {:Paper-props
                  {:style
                   {:max-height (* 45 4.5)}}}}
      (for [a a-ages]
        ^{:key (str "age-" a)}
        [:> MenuItem {:value a} a])]]))
