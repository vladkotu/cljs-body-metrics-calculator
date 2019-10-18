(ns body-index-calculator.lib.body-fat
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.specs :as specs]
   [body-index-calculator.lib.lib :as lib]
   [body-index-calculator.lib.body-mass-index  :refer [calc-body-mass-index]]))

(s/def ::person (s/keys :req-un [::specs/height
                                 ::specs/weight
                                 ::specs/age
                                 ::specs/gender]))

(defn calc-body-fat
  "Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage"
  [person]
  (let [bfp (calc-body-mass-index person)
        {:keys [age gender]} person
        sex (if (:male gender) 1 0)]
    (- (- (+ (* 1.39 bfp)
             (* 0.16 age))
          (* 10.34 sex))
       9)))

(def body-fat-ranges-table
  {:female
   [[10   13   "Essintial fat"]
    [14   20   "Athletes Level"]
    [21   25   "Fitness Person"]
    [26   31   "Average Level"]
    [32   100  "Obese"]]
   :male
   [[3    5    "Essintial fat"]
    [6    13   "Athletes Level"]
    [14   17   "Fitness Person"]
    [18   24   "Average Level"]
    [25   100  "Obese"]]})

(defn classify-fat-percentage-person
  [person]
  (->> person
       calc-body-fat
       Math/round
       (#(lib/classify-value-by-table-ranges
          (get body-fat-ranges-table (:gender person))
          %))))
