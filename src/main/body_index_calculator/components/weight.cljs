(ns body-index-calculator.components.weight
  (:require [re-frame.core :as rf]
            [body-index-calculator.helpers :refer [->int]]
            [body-index-calculator.components.input  :refer [input]]))

(defn weight []
  (let [db (rf/subscribe [:weight])]
    (fn []
      [input
       {:label     "Your Weight"
        :value     (:value @db)
        :required  true
        :units     "Kg"
        :on-change
        #(rf/dispatch
          [:weight
           {:value (->int %)}])
         :on-focus
        #(rf/dispatch
          [:weight
           {:visited? true
            :active? true}])
        :on-blur
        #(rf/dispatch
          [:weight
           {:active? false}])}])))
