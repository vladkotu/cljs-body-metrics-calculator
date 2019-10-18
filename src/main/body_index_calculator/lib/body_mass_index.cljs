(ns body-index-calculator.lib.body-mass-index
  (:require
   [body-index-calculator.lib.specs :as local-specs]
   [body-index-calculator.lib.lib :as lib]
   [cljs.spec.alpha :as s]
   [orchestra.core :refer-macros [defn-spec]]))

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

(s/fdef classify-body-mass-person
  :args (s/cat :person ::person))

(defn classify-body-mass-person
  [person]
  (->> person
       calc-body-mass-index
       Math/floor
       (#(lib/classify-value-by-table-ranges
          body-mass-ranges-table %))))
