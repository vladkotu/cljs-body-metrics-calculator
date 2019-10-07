(ns body-index-calculator.components.height
  (:require [re-frame.core :as rf]
            [body-index-calculator.components.input  :refer [input]]
            [body-index-calculator.helpers :refer [->int]]))

(defn height []
  (let [db (rf/subscribe [:height])]
    (fn []
      [input
       {:label     "Your Height"
        :value     (:value @db)
        :required  true
        :units     "Sm"
        :on-change
        #(rf/dispatch
          [:height
           {:value (->int %)}])
        :on-focus
        #(rf/dispatch
          [:height
           {:active? true
            :visited? true}])
        :on-blur
        #(rf/dispatch
          [:height
           {:active? false}])}])))
