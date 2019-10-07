(ns body-index-calculator.subscriptions
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.lib.body-mass-index
    :refer [classify-body-mass-person] ]))

(rf/reg-sub
 :form
 (fn [db _] (:form db)))

(rf/reg-sub
 :gender
 :<- [:form]
 (fn [db _] (:gender db)))

(rf/reg-sub
 :age
 :<- [:form]
 (fn [db _] (:age db)))

(rf/reg-sub
 :weight
 :<- [:form]
 (fn [db _] (:weight db)))

(rf/reg-sub
 :height
 :<- [:form]
 (fn [db _] (:height db)))

(rf/reg-sub
 :visited?
 :<- [:form]
 (fn [db _] (map (comp :visited? second) db)))

(rf/reg-sub
 :bmi
 :<- [:weight]
 :<- [:height]
 (fn [[weight height] _]
   (classify-body-mass-person weight height)))
