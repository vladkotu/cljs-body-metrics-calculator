(ns body-index-calculator.lib.basal-matabolic-rate
  " ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; BMR - basal metabolic rate ;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
  (:require [body-index-calculator.lib.lean-body-mass :refer [calc-lean-body-mass]]))

(defn mifflin-jeor
  [{:keys [gender age weight height]}]
  (let [gender-kf (if (= :male gender) 5 -161)]
    (int (Math/floor
          (- (+ (* weight 10)
                (* height 6.25)
                gender-kf)
             (* age 5))))))

(defn katch-macardle
  [person]
  (let [lean-body-mass (calc-lean-body-mass person)]
    (+ 370 (* 21.6 lean-body-mass))))
