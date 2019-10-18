(ns body-index-calculator.components.waist
  (:require [re-frame.core :as rf]
            [body-index-calculator.components.input  :refer [input]]
            [body-index-calculator.subscriptions :as s]
            [body-index-calculator.events :as e]
            [body-index-calculator.helpers :refer [->int]]))

(defn waist []
  (let [db (rf/subscribe [::s/waist])]
    (fn []
      [input
       {:label     "Your Waist Circumference"
        :value     (:value @db)
        :required  true
        :units     "Sm"
        :on-change
        #(rf/dispatch
          [::e/waist
           {:value (->int %)}])
        :on-focus
        #(rf/dispatch
          [::e/waist
           {:active? true
            :visited? true}])
        :on-blur
        #(rf/dispatch
          [::e/waist
           {:active? false}])}])))
