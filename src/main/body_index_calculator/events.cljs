(ns body-index-calculator.events
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.db :as db]))


(rf/reg-event-db
 ::init
 (fn [_ _] db/default-db))

(defn make-form-event-handler [path]
  (fn [db [_ new-val]]
    (update-in
     db
     path
     (fn [val] (merge val new-val)))))

(rf/reg-event-db
 ::gender
 (make-form-event-handler [:form :gender]))

(rf/reg-event-db
 ::age
 (make-form-event-handler [:form :age]))

(rf/reg-event-db
 ::weight
 (make-form-event-handler [:form :weight]))

(rf/reg-event-db
 ::height
 (make-form-event-handler [:form :height]))
