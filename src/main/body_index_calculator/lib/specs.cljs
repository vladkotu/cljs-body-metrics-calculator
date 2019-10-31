(ns body-index-calculator.lib.specs
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.helpers :refer [rcast]]
   [body-index-calculator.config :refer [config]]))

(defn check [comparator field key]
  (let [ref-value (-> config field key)]
    (fn [value]
      (comparator
       (rcast value)
       ref-value))))

(s/def ::number    (s/nilable
                    (s/or :number int?
                          :string (s/and string? #(not (re-find #"[^0-9.]+" %))))))

(s/def ::gender    #{:male :female})
(s/def ::age-lt    (check < :age :max))
(s/def ::age-gt    (check > :age :min))
(s/def ::weight-lt (check < :weight :max))
(s/def ::weight-gt (check > :weight :min))
(s/def ::height-lt (check < :height :max))
(s/def ::height-gt (check > :height :min))
(s/def ::waist-gt  (check < :waist :max))
(s/def ::waist-lt  (check > :waist :min))
(s/def ::hip-gt    (check < :hip :max))
(s/def ::hip-lt    (check > :hip :min))

(s/def ::int       (s/nilable int?))
(s/def ::age       (s/and ::int ::age-lt ::age-gt))
(s/def ::weight    (s/and ::int ::weight-lt ::weight-gt))
(s/def ::height    (s/and ::int ::height-lt ::height-gt))
(s/def ::waist     (s/and ::int ::waist-lt ::waist-gt))
(s/def ::hip       (s/and ::int ::hip-lt ::hip-gt))
