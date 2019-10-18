(ns body-index-calculator.components.weight
  (:require [re-frame.core :as rf]
            [body-index-calculator.helpers :refer [->int]]
            [body-index-calculator.subscriptions :as s]
            [body-index-calculator.events :as e]
            [body-index-calculator.components.input  :refer [input]]))

(defn weight []
  (let [db (rf/subscribe [::s/weight])]
    (fn []
      [input
       {:label     "Your Weight"
        :value     (or (:value @db) "")
        :required  true
        :units     "Kg"
        :on-change
        #(rf/dispatch
          [::e/weight
           {:value (->int %)}])
        :on-focus
        #(rf/dispatch
          [::e/weight
           {:visited? true
            :active? true}])
        :on-blur
        #(rf/dispatch
          [::e/weight
           {:active? false}])}])))
