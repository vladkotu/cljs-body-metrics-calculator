(ns body-index-calculator.lib.body-mass-index
  ";;;;;;;;;;;;;;;;;;;;;;;;;;;
   ;; BMI - body mass index ;;
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;")

(defn calc-body-mass-index
  [{:keys [weight height]}]
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

(defn classify-body-mass-person
  [person]
  (let [bmi (Math/floor (calc-body-mass-index person))
        class (classify-body-mass-index bmi)]
    {:value bmi
     :conclusion class}))
