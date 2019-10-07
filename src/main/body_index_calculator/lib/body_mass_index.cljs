(ns body-index-calculator.lib.body-mass-index
  ";;;;;;;;;;;;;;;;;;;;;;;;;;;
   ;; BMI - body mass index ;;
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;")

(defn calc-body-mass-index
  [weight height]
  (/ weight (Math/pow (/ height 100) 2)))

(def body-mass-ranges-table
  [[0    18.5 :under]
   [18.5 25   :normal]
   [25   30   :over]
   [30   35   :obes :Level-I]
   [35   40   :obes :Level-II]
   [40   80   :obes :Level-III]])

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
    [bmi class `[:span ~bmi "kg/m" [:sup 2]]]))
