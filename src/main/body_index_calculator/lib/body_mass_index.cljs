(ns body-index-calculator.lib.body-mass-index
  ";;;;;;;;;;;;;;;;;;;;;;;;;;;
   ;; BMI - body mass index ;;
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;")

(defn calc-body-mass-index
  [weight height]
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
  (let [[_ _ class _]
        (first (filter (fn [[from to]]
                         (and (< from bmi)
                              (<= bmi to)))
                       body-mass-ranges-table))]
    class))

(defn classify-body-mass-person
  [weight height]
  (let [bmi (Math/floor (calc-body-mass-index weight height))
        class (classify-body-mass-index bmi)]
    [bmi class]))

(def units
  [:span "kg/m" [:sup 2]])
