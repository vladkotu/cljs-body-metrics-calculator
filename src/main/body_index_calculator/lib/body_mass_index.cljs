(ns body-index-calculator.lib.body-mass-index
  ";;;;;;;;;;;;;;;;;;;;;;;;;;;
   ;; BMI - body mass index ;;
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;"
  (:require
   [body-index-calculator.lib.specs :as local-specs]
   [cljs.spec.alpha :as s]
   [orchestra.core :refer-macros [defn-spec]]
   [orchestra-cljs.spec.test :as st]))

(s/def ::person (s/keys :req-un [::local-specs/height
                                 ::local-specs/weight]))

(defn-spec calc-body-mass-index number?
  [{:keys [weight height]} ::person]
  (/ weight (Math/pow (/ height 100) 2)))

(def body-mass-ranges-table
  [[0    18.5 "Underweight"]
   [18.5 25   "Normal Weight"]
   [25   30   "Overweight"]
   [30   35   "Severe Obesity"]
   [35   40   "Morbid Obesity"]
   [40   80   "Super Obesity"]])

(defn classify-body-mass-index
  [bmi]
  (let [[_ _ class]
        (->> body-mass-ranges-table
             (filter
              (fn [[from to]]
                (and (< from bmi)
                     (<= bmi to))))
             first)]
    class))

(s/fdef classify-body-mass-person
  :args (s/cat :person ::person))

(defn classify-body-mass-person
  [person]
  (->> person
       calc-body-mass-index
       Math/floor
       classify-body-mass-index))
