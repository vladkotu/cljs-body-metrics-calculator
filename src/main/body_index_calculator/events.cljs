(ns body-index-calculator.events
  (:require
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.db :as db]))

(defn set-all-paths [db paths a-vals]
  (loop [paths paths
         a-vals a-vals
         m db]
    (if (empty? paths)
      m
      (recur (rest paths)
             (rest a-vals)
             (assoc-in m
                       (first paths)
                       (first a-vals))))))

(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

;; now we create an interceptor using `after`
(def check-spec-after-interceptor (rf/after (partial check-and-throw ::db/db)))
(def form-interseptor (rf/path :form))

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
 [rf/debug check-spec-after-interceptor]
 (make-form-event-handler [:form :gender]))

(rf/reg-event-db
 ::age
 [rf/debug check-spec-after-interceptor]
 (make-form-event-handler [:form :age]))

#_(rf/reg-event-db
   ::weight
   (make-form-event-handler [:form :weight]))

(rf/reg-event-fx
 ::weight
 [rf/debug check-spec-after-interceptor]
 (fn [cofx [_ new-val]]
   {:db (update-in
         (:db cofx)
         [:form :weight]
         (fn [val] (merge val new-val)))}))

(rf/reg-event-db
 ::height
 [rf/debug check-spec-after-interceptor]
 (make-form-event-handler [:form :height]))

(defonce timeouts (r/atom {}))

(rf/reg-fx
 :timeout
 (fn [{:keys [id event time]}]
   (when-some [existing (get @timeouts id)]
     (js/clearTimeout existing)
     (swap! timeouts dissoc id))
   (when (some? event)
     (swap! timeouts assoc id
            (js/setTimeout
             (fn []
               (rf/dispatch event))
             time)))))
