(ns body-index-calculator.subscriptions
  (:require
   [re-frame.core :as rf]
   [cljs.spec.alpha :as s]
   [body-index-calculator.helpers :refer [as-float form->person as-int]]
   [body-index-calculator.lib.body-fat :as bfp]
   [body-index-calculator.lib.body-mass-index :as bmi]
   [body-index-calculator.lib.wais-hip-ratio :as whr]
   [body-index-calculator.lib.basal-matabolic-rate :as bmr]
   [body-index-calculator.lib.body-shape-index :as bsi]
   [body-index-calculator.lib.lean-body-mass :as lbm]))

(def cider-have-to-have-at-least-one-def-in-a-file nil)

(rf/reg-sub
 ::system
 (fn [db _] (:system db)))

(rf/reg-sub
 ::form
 (fn [db _] (:form db)))

(doall
 (for [sub-name [::gender ::age
                 ::weight ::height
                 ::waist  ::hip]]
   (let [path [(keyword (name sub-name)) :value]]
     (rf/reg-sub
      sub-name
      :<- [::system]
      :<- [::form]
      (fn [[system form] _]
        [system (get-in form path)])))))

(defn form->metric-result
  [form {:keys [spec value conclusion] :as metric}]
  (try
    (let [person (form->person form)
          valid? (s/valid? spec person)
          a-value (if valid? (value person) nil)
          a-conclusion (if valid? (and conclusion (conclusion person)) nil)]
      (-> metric
          (assoc :value a-value)
          (assoc :conclusion a-conclusion)))
    (catch js/Object e
      (prn e))))

(def metrics
  [{:a-key      ::bmi
    :spec       ::bmi/person
    :value      #'bmi/calc-body-mass-index
    :conclusion #'bmi/classify-body-mass-person
    :abbr       "BMI"
    :title      "Body Mass Index"
    :units      [:span "kg·m" [:sup -2]]}

   {:a-key      ::bsi
    :spec       ::bsi/person
    :raw-value? true
    :value      #'bsi/calc-body-shape-z-score
    :conclusion #'bsi/classify-body-shape-person
    :title      "A Body Shape Index"
    :abbr       "ABSI"
    :units      [:span "m" [:sup "11/6"] "kg" [:sup "-2/3"]]}

   {:a-key      ::bmr
    :spec       ::bmr/person
    :value      #'bmr/mifflin-jeor
    :conclusion nil
    :title      "Basal Metabolic Rate [Mefflin St Jeor]"
    :abbr       "BMR"
    :units      [:span "kcal/day"]}

   {:a-key      ::lbm
    :spec       ::lbm/person
    :value      #'lbm/calc-lean-body-mass
    :conslusion nil
    :title      "Lean Body Mass"
    :abbr       "LBM"
    :units      [:span "kg"]}

   {:a-key      ::bfp
    :spec       ::bfp/person
    :value      #'bfp/calc-body-fat
    :conclusion #'bfp/classify-fat-percentage-person
    :title      "Body Fat Percentage"
    :abbr       "BF"
    :units      [:span "%"]}

   {:a-key      ::whr
    :spec       ::whr/person
    :raw-value? true
    :value      #'whr/calc-waist-hip-ratio
    :conclusion #'whr/classify-waist-hip-ratio
    :title      "Waist to Hip Ratio"
    :abbr       "WHR"
    :units      [:span ""]}])

(rf/reg-sub
 ::result
 :<- [::form]
 (fn [form _]
   (map (partial form->metric-result form)
        metrics)))
