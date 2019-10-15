(ns body-index-calculator.components.height
  (:require [re-frame.core :as rf]
            [body-index-calculator.components.input  :refer [input]]
            [body-index-calculator.subscriptions :as s]
            [body-index-calculator.events :as e]
            [body-index-calculator.helpers :refer [->int]]))

(defn height []
  (let [db (rf/subscribe [::s/height])]
    (fn []
      [input
       {:label     "Your Height"
        :value     (:value @db)
        :required  true
        :units     "Sm"
        :on-change
        #(rf/dispatch
          [::e/height
           {:value (->int %)}])
        :on-focus
        #(rf/dispatch
          [::e/height
           {:active? true
            :visited? true}])
        :on-blur
        #(rf/dispatch
          [::e/height
           {:active? false}])}])))
