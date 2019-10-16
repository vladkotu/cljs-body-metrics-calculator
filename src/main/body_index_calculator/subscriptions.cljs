(ns body-index-calculator.subscriptions
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.helpers :refer [as-float form->person as-int]]
   [body-index-calculator.lib.body-mass-index :as bmi]
   [body-index-calculator.lib.basal-matabolic-rate :as bmr]
   [body-index-calculator.lib.lean-body-mass :as lbm]))

(def cider-have-to-have-at-least-one-def-in-a-file nil)

(rf/reg-sub
 ::form
 (fn [db _] (:form db)))

(rf/reg-sub
 ::gender
 :<- [::form]
 (fn [db _] (:gender db)))

(rf/reg-sub
 ::age
 :<- [::form]
 (fn [db _] (:age db)))

(rf/reg-sub
 ::weight
 :<- [::form]
 (fn [db _] (:weight db)))

(rf/reg-sub
 ::height
 :<- [::form]
 (fn [db _] (:height db)))

(rf/reg-sub
 ::bmi
 :<- [::form]
 (fn [form _]
   (bmi/calc-body-mass-index (form->person form))))

(rf/reg-sub
 ::lbm
 :<- [::form]
 (fn [form _]
   (lbm/calc-lean-body-mass (form->person form))))

(rf/reg-sub
 ::bmr
 :<- [::form]
 (fn [form _]
   (bmr/mifflin-jeor (form->person form))))

(rf/reg-sub
 ::result
 :<- [::bmi]
 :<- [::lbm]
 :<- [::bmr]
 (fn [[bmi lbm bmr] _]
   {:bmi bmi :lbm lbm :bmr bmr}))

(rf/reg-sub
 ::result-table
 :<- [::bmi]
 :<- [::lbm]
 :<- [::bmr]
 (fn [[bmi lbm bmr] _]
   [{:title "Body Mass Index (BMI)"
     :units [:span "kg/m" [:sup 2]]
     :value (or (as-int bmi) "N/A")
     :conclusion (or (bmi/classify-body-mass-index bmi) "N/A")}
    {:title "Lean Body Mass (LBM)"
     :units [:span "kg"]
     :value (or (as-float lbm) "N/A")
     :conclusion "N/A"}
    {:title "Basal Metabolic Rate (BMR) [Mefflin St Jeor]"
     :units [:span "kcal/day"]
     :value (or (as-int bmr) "N/A")
     :conclusion "N/A"}]))
