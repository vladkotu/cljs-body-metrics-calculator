(ns body-index-calculator.form
  (:require [reagent.core :as r]
            [body-index-calculator.helpers :refer [js-theme with-styles-react spacing]]
            [body-index-calculator.components.headings :refer [h5]]
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

(def form-control-props {:full-width true
                         :variant "outlined"
                         :style {:margin "20px 0 20px 0"}})

(defn evalue [ev] (-> ev .-target .-value))

(defn input [{:keys [on-change
                     units
                     label
                     value
                     required]
              :or   {value ""
                     required false}}]
  (let [id (str "intput-" (.toLowerCase label))]
    [:> FormControl form-control-props
     [:> FormLabel {:component "label"
                    :html-for id} label]
     [:> OutlinedInput {:id id
                        :value value
                        :on-change #(on-change (evalue %))
                        :endAdornment
                        (r/as-element
                         [:> InputAdornment
                          {:position "end"} units])}]]))

(defn gender [{:keys [value]}]
  [:> FormControl form-control-props
   [:> FormLabel {:component "legend"} "Gender"]
   [:> RadioGroup {:aria-label "gender"
                   :name "gender"
                   :value value
                   :on-change #(prn (evalue %))
                   :row true}
    [:> FormControlLabel {:value "female"
                          :label "Female"
                          :control (r/as-element [:> Radio])}]
    [:> FormControlLabel {:value "male"
                          :label "Male"
                          :control (r/as-element [:> Radio])}]]])

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

(defn form []
  [:form {:name "index-calculator"
          :no-validate true
          :auto-complete "off"}
   [gender]
   [age]
   [input {:label "Your Weight"
           :value ""
           :required true
           :units "Kg"
           :on-change #(prn %)}]
   [input {:label "Your Height"
           :value ""
           :required true
           :units "Sm"
           :on-change #(prn %)}]])
