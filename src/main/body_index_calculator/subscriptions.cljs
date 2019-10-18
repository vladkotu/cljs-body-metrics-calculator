(ns body-index-calculator.subscriptions
  (:require
   [re-frame.core :as rf]
   [cljs.spec.alpha :as s]
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

(defn form->metric-result
  [form {:keys [spec value conclusion] :as metric}]
  (try
    (let [person (form->person form)
          valid? (s/valid? spec person)
          a-value (if valid? (value person) nil)
          a-conclusion (if valid? (and conclusion (conclusion a-value)) nil)]
      (-> metric
          (assoc :value a-value)
          (assoc :conclusion a-conclusion)))
    (catch js/Object e
      (prn e))))

(def metrics
  [{:a-key ::bmi
    :spec ::bmi/person
    :value #'bmi/calc-body-mass-index
    :conclusion #'bmi/classify-body-mass-index
    :abbr "BMI"
    :title "Body Mass Index"
    :units [:span "kg/m" [:sup 2]]}
   {:a-key ::lbm
    :spec ::lbm/person
    :value #'lbm/calc-lean-body-mass
    :conslusion nil
    :title "Lean Body Mass"
    :abbr "LBM"
    :units [:span "kg"]}
   {:a-key ::bmr
    :spec ::bmr/person
    :value #'bmr/mifflin-jeor
    :conclusion nil
    :title "Basal Metabolic Rate [Mefflin St Jeor]"
    :abbr "BMR"
    :units [:span "kcal/day"]}])

(rf/reg-sub
 ::result
 :<- [::form]
 (fn [form _]
   (map (partial form->metric-result form)
        metrics)))
