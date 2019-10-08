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
   (let [default-props {:title "Body Mass Index (BMI)"
                        :units [:span "kg/m" [:sup 2]]
                        :value "N/A"
                        :conclusion "N/A"}]
     (if (not (some :active? [weight height]))
       (merge default-props
              (bmi/classify-body-mass-person
               {:weight (:value weight)
                :height (:value height)}))
       default-props))))

(rf/reg-sub
 :lbm
 :<- [:weight]
 :<- [:height]
 :<- [:gender]
 (fn [[weight height gender] _]
   (let [default-props {:title "Lean Body Mass (LBM)"
                        :units [:span "kg"]
                        :value "N/A"
                        :conclusion "N/A"}]
     (if (not (some :active? [weight height]))
       (assoc default-props
              :value
              (lbm/calc-lean-body-mass
               {:weight (:value weight)
                :height (:value height)
                :gender (:value gender)}))
       default-props))))

(rf/reg-sub
 :result-table
 :<- [:bmi]
 :<- [:lbm]
 (fn [[bmi lbm]_] [bmi lbm]))
