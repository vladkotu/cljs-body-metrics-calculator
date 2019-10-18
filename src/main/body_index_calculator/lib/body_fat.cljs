(ns body-index-calculator.lib.body-fat
  " ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; Body Fat Percentage based on BMI measurement ;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; "
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.specs :as specs]
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
    [21   24   "Fitness Person"]
    [26   31   "Average Level"]
    [32   100  "Obese"]]
   :male
   [[3    5    "Essintial fat"]
    [6    13   "Athletes Level"]
    [14   17   "Fitness Person"]
    [18   24   "Average Level"]
    [25   100  "Obese"]]})

(defn classify-body-fat-index
  [person bfp]
  (let [classes (-> body-fat-ranges-table
                    ((:gender person)))
        class   (->> classes
                     (filter (fn [[from to]]
                               (and (< from bfp)
                                    (<= bfp to))))
                     first
                     last)]
    class))

(defn classify-fat-percentage-person
  [person]
  (->> person
       calc-body-fat
       Math/floor
       ((partial classify-body-fat-index person))))
