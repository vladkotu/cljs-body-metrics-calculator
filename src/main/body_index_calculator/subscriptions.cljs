(ns body-index-calculator.subscriptions
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.lib.body-mass-index :as bmi]
   [body-index-calculator.lib.lean-body-mass :as lbm]))

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
   (if (not (some :active? [weight height]))
     (conj
      (bmi/classify-body-mass-person
       {:weight (:value weight)
        :height (:value height)})
      bmi/units)
     [0 "N/A" bmi/units])))

(rf/reg-sub
 :lbm
 :<- [:weight]
 :<- [:height]
 :<- [:gender]
 (fn [[weight height gender] _]
   (if (not (some :active? [weight height]))
     [(lbm/calc-lean-body-mass
       {:weight (:value weight)
        :height (:value height)
        :gender (:value gender)})
      "N/A"
      lbm/units]
     [0 "N/A" lbm/units])))
