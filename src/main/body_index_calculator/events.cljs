(ns body-index-calculator.events
  (:require
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.db :as db]))

(def ^:dynamic *trace-events* false)

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

(def check-spec-after-interceptor (rf/after (partial check-and-throw ::db/db)))
(def common-interseptors (if *trace-events*
                           [rf/debug
                            check-spec-after-interceptor]
                           [check-spec-after-interceptor]))

(rf/reg-event-db
 ::init
 (fn [_ _] db/default-db))

(rf/reg-event-db
 ::system
 (fn [db [_ system]]
   (assoc db :system system)))

(defn make-form-event-handler [path]
  (fn [db [_ new-val]]
    (update-in
     db
     path
     (fn [val] (merge val new-val)))))

(def form-events
  [{:a-key ::gender
    :path  [:form :gender]}
   {:a-key ::age
    :path  [:form :age]}
   {:a-key ::weight
    :path  [:form :weight]}
   {:a-key ::height
    :path  [:form :height]}
   {:a-key ::waist
    :path  [:form :waist]}
   {:a-key ::hip
    :path  [:form :hip]}])

(doall (for [{:keys [a-key path]} form-events]
         (rf/reg-event-db
          a-key
          common-interseptors
          (make-form-event-handler path))))

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
