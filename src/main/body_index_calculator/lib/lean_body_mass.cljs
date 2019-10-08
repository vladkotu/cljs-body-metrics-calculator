(ns body-index-calculator.lib.lean-body-mass
  " ;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; LBM - lean body mass ;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;"
  (:require [body-index-calculator.lib.body-mass-index :refer [calc-body-mass-index]]))

(defn lean-body-mass-dispatcher [person]
  (let [method (if (>= (calc-body-mass-index person) 35) :boer :hume)]
    [method (:gender person)]))

(defmulti calc-lean-body-mass #'lean-body-mass-dispatcher)

(defmethod calc-lean-body-mass
  [:boer :male]
  [{:keys [weight height]}]
  (- (+ (* 0.407 weight)
        (* 0.267 height))
     19.2))

(defmethod calc-lean-body-mass
  [:boer :female]
  [{:keys [weight height]}]
  (- (+ (* 0.252 weight)
        (* 0.473 height))
     48.3))

(defmethod calc-lean-body-mass
  [:hume :male]
  [{:keys [weight height]}]
  (- (+ (* 0.32810 weight)
        (* 0.33929 height))
     40.5336))

(defmethod calc-lean-body-mass
  [:hume :female]
  [{:keys [weight height]}]
  (- (+ (* 0.29569 weight)
        (* 0.41813 height))
     43.2933))

(defmethod calc-lean-body-mass
  :default
  [_]
  "N/A")
