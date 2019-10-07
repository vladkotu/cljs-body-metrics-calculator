(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.components.app :refer [app]]
            [body-index-calculator.config :refer [config]]))

(rf/reg-event-db
 :init
 (fn [_ _]
   {:form {:gender {:visited? false
                    :value    (second (:genres config))}
           :age    {:visited? false
                    :value    (:default-age config)}
           :weight {:visited? false
                    :value    80}
           :height {:visited? false
                    :value    180}}}))

(defn value->int [a-map]
  (update a-map
          :value
          #(-> % (clojure.string/replace #"[^0-9]+" "") (js/parseInt 10))))

(defn value->keyword [a-map]
  (update a-map :value keyword))

(defn value->string [a-map]
  (update a-map :value #(if (keyword? %) (name %) (str %))))

(rf/reg-event-db :gender (fn [db [_ gender]] (assoc-in db [:form :gender] (value->keyword gender))))
(rf/reg-event-db :age    (fn [db [_ age]]    (assoc-in db [:form :age] age)))
(rf/reg-event-db :weight (fn [db [_ weight]] (assoc-in db [:form :weight] (value->int weight))))
(rf/reg-event-db :height (fn [db [_ height]] (assoc-in db [:form :height] (value->int height))))

(rf/reg-sub :form                 (fn [db _] (:form db)))
(rf/reg-sub :gender   :<- [:form] (fn [db _] (value->string (:gender db))))
(rf/reg-sub :age      :<- [:form] (fn [db _] (:age db)))
(rf/reg-sub :weight   :<- [:form] (fn [db _] (value->string (:weight db))))
(rf/reg-sub :height   :<- [:form] (fn [db _] (value->string (:height db))))
(rf/reg-sub :visited? :<- [:form] (fn [db _] (map (comp :visited? second) db)))

(let [vs @(rf/subscribe [:visited?])]
  (prn vs))

(defn render []
  (r/render [app] (js/document.getElementById "core")))

(defn init []
  (prn "start initialisation")
  (rf/dispatch-sync [:init])
  (prn "db initialisation finished")
  (render)
  (println "app rendered"))
