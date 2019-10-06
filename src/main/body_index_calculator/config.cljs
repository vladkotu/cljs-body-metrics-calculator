(ns body-index-calculator.config)

(def available-ages (range 12 (inc 99)))

(defn default-age []
  (nth available-ages (Math/floor (/ (count available-ages) 4))))

(def config
  {:genres [:male :female]
   :ages available-ages
   :default-age (default-age)})
