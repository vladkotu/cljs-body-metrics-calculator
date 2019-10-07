(ns body-index-calculator.components.age
  (:require [re-frame.core :as rf]
            [body-index-calculator.components.styles :refer [form-control-props form-label-styles]]
            [body-index-calculator.helpers :refer [evalue]]
            [body-index-calculator.config  :refer [config]]
            ["@material-ui/core" :refer [FormControl
                                         FormLabel
                                         MenuItem
                                         Select]]))

(defn age-comp [{:keys [value options on-change]}]
  [:> FormControl (merge form-control-props {:style {:margin "0px 0 20px 0"}})
   [:> FormLabel {:component "label"
                  :html-for "age-native"
                  :style form-label-styles}
    "Age"]
   [:> Select {:value value
               :input-props {:name "age" :id "age-native"}
               :on-change #(on-change (evalue %))
               :Menu-props
               {:Paper-props
                {:style
                 {:max-height (* 45 4.5)}}}}
    (for [a options]
      ^{:key (str "age-" a)}
      [:> MenuItem {:value a} a])]])

(defn age []
  (let [age (rf/subscribe [:age])]
    (fn []
      [age-comp
       {:value (:value @age)
        :options (:ages config)
        :on-change
        #(rf/dispatch
          [:age
           {:visited? true
            :value %}])}])))
