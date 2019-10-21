(ns body-index-calculator.lib.wais-hip-ratio
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.lib :as lib]
   [body-index-calculator.helpers :as util]
   [body-index-calculator.lib.specs :as specs]))

(s/def ::person (s/keys :req-un [::specs/waist
                                 ::specs/hip]))

(defn calc-waist-hip-ratio
  [{:keys [waist hip]}]
  (util/as-float (/ waist hip) 2))

(def wais-hip-ranges-table
  {:male
   [[0.5  0.9  "Normal Weight"]
    [0.9  0.99 "Overweight"]
    [0.99 1.9  "Obesity"]]
   :female
   [[0.5  0.8  "Normal Weight"]
    [0.8  0.84 "Overweight"]
    [0.84 1.9  "Severe Obesity"]]})

(defn classify-waist-hip-ratio [person]
  (->> person
       calc-waist-hip-ratio
       (#(lib/classify-value-by-table-ranges
          (get wais-hip-ranges-table (:gender person)) %))))
