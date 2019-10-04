(ns body-index-calculator.components.age
  (:require [reagent.core :as r]
            [body-index-calculator.config    :refer [form-control-props]]
            [body-index-calculator.helpers   :refer [evalue with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.headings :refer [h5]]
            [body-index-calculator.components.input    :refer [input]]
            [body-index-calculator.components.gender   :refer [gender]]
            ["@material-ui/core" :refer [FormControl
                                         FormControlLabel
                                         FormLabel
                                         InputAdornment
                                         MenuItem
                                         OutlinedInput
                                         Radio
                                         RadioGroup
                                         Select
                                         TextField]]))

(defn age [{:keys [value]}]
  (let [a-ages (range 12 (inc 99))
        default-age (nth a-ages (Math/floor (/ (count a-ages) 4)))]
    [:> FormControl form-control-props
     [:> FormLabel {:component "label" :html-for "age-native"}
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
