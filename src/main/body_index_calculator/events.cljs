(ns body-index-calculator.events
  (:require
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.helpers :as helpers]
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
 (fn [{:keys [system] :as db} [_ new-system]]
   (-> db
       (assoc :system new-system)
       (update :form
               #(helpers/convert-form-values system new-system %)))))

(defn make-form-event-handler [path]
  (fn [{:keys [system] :as db} [_ new-val]]
    #_(let [{:keys [raw-value]} new-val

            {:keys [utype]} (get-in db path)

            norm-val
            (if raw-value
              (assoc new-val
                     :value
                     (helpers/normilize-value system utype raw-value))
              new-val)])
    (update-in
     db
     path
     (fn [val] (merge val new-val)))))

(doall
 (for [ev-name [::gender ::age
                ::weight ::height
                ::waist  ::hip]]
   (let [path [:form (keyword (name ev-name))]]
     (rf/reg-event-db
      ev-name
      common-interseptors
      (make-form-event-handler path)))))

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
