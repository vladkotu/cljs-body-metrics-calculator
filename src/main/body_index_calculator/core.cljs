(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.subscriptions]
            [body-index-calculator.events :as e]
            [body-index-calculator.components.app :refer [app error-boundary]]
            [orchestra-cljs.spec.test :as st]))

(defn render []
  (r/render [error-boundary [app]] (js/document.getElementById "core"))
  (js/console.log "app rendered\n\n"))

(defn instrument-specs []
  (let [done (st/instrument)]
    (js/console.log (str (count done) " functions found and instrumented"))))

(defn on-hmr-reload []
  (js/console.log :on-hmr-reload)
  (rf/clear-subscription-cache!)
  (js/console.log "re-frame cache clean")
  (instrument-specs)
  (render))

(defn init []
  (js/console.log "start initialisation")
  (rf/dispatch-sync [::e/init])
  (js/console.log "db initialisation finished")
  (render)
  (instrument-specs))
