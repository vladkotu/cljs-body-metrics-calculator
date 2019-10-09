(ns body-index-calculator.lib.body-fat
  " ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; Body Fat Percentage based on BMI measurement ;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; "
  (:require [body-index-calculator.lib.body-mass-index  :refer [calc-body-mass-index]]))

(def me {:gender :male
         :age 36
         :body-fat 26
         :weight 85
         :height 179})

(def she {:gender :male
          :age 36
          :body-fat 16
          :weight 55
          :height 164})

(def normal-male {:gender :male
                  :age 30
                  :weight 65
                  :height 182})

(def normal-female {:gender :female
                    :age 24
                    :weight 50
                    :height 162})
(defn calc-body-fat
  "Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage"
  [person]
  (let [bmi (calc-body-mass-index person)
        {:keys [age gender]} person
        sex (if (:male gender) 1 0)]
    (- (- (+ (* 1.39 bmi)
             (* 0.16 age))
          (* 10.34 sex))
       9)))

(def body-fat-ranges-table
  [[0    18.5 :under]
   [18.5 25   :normal]
   [25   30   :over]
   [30   35   :obes :Level-I]
   [35   40   :obes :Level-II]
   [40   80   :obes :Level-III]])
