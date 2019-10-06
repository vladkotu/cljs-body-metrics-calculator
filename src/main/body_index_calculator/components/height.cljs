(ns body-index-calculator.components.height
  (:require [re-frame.core :as rf]
            [body-index-calculator.components.input  :refer [input]]))

(defn height []
  (let [db (rf/subscribe [:height])]
    (fn [] [input {:label "Your Height"
                   :value (:value @db)
                   :required true
                   :units "Sm"
                   :on-change #(rf/dispatch [:height {:visited? true
                                                      :value %}])}])))
