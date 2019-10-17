(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.events]
            [body-index-calculator.subscriptions]
            [body-index-calculator.events :as e]
            [body-index-calculator.components.app :refer [app]]
            [orchestra-cljs.spec.test :as st]))



(defn render []
  (r/render [app] (js/document.getElementById "core"))
  (println "app rendered"))

(defn instrument-specs []
  (let [done (st/instrument)]
    (prn (str (count done) " functions found and instrumented"))))

(defn on-hmr-reload []
  (prn :on-hmr-reload)
  (rf/clear-subscription-cache!)
  (prn "re-frame cache clean")
  (instrument-specs)
  (render))

(defn init []
  (prn "start initialisation")
  (rf/dispatch-sync [::e/init])
  (prn "db initialisation finished")
  (render)
  (instrument-specs))
