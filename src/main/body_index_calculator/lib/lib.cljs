(ns body-index-calculator.lib.lib)

(defn classify-value-by-table-ranges
  [ranges value]
  (let [inside? (fn [[from to]] (and (< from value) (<= value to)))
        class (->> ranges
                   (filter inside?)
                   first
                   last)]
    class))
