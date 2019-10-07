(ns body-index-calculator.lib.lean-body-mass
  " ;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; LBM - lean body mass ;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;"
  (:require [body-index-calculator.lib.body-mass-index :refer [calc-body-mass-index]]))

(defn calc-boer-lean-body-mass
  [{:keys [weight height]}]
  (- (+ (* 0.407 weight)
        (* 0.267 height))
     19.2))

(defn calc-hume-lean-body-mass
  [{:keys [weight height]}]
  (- (+ (* 0.252 weight)
        (* 0.473 height))
     48.3))

(defn calc-lean-body-mass [person]
  (let [bmi (calc-body-mass-index person)]
    (if (>= bmi 35)
      (calc-boer-lean-body-mass person)
      (calc-hume-lean-body-mass person))))
