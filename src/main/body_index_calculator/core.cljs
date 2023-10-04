(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [reagent.dom :as rm]
            [re-frame.core :as rf]
            [body-index-calculator.subscriptions]
            [body-index-calculator.events :as e]
            [body-index-calculator.utils.lang :as lang]
            [body-index-calculator.components.app :refer [app error-boundary]]
            [orchestra-cljs.spec.test :as st]))

(defn log [m]
  (when js/goog.DEBUG
    (js/console.log m)))

(defn render []
  (rm/render [error-boundary [app]] (js/document.getElementById "core"))
  (log "app render"))

(defn instrument-specs []
  (let [done (st/instrument)]
    (log (str (count done) " functions found and instrumented"))))

(defn on-hmr-reload []
  (rf/clear-subscription-cache!)
  (log "re-frame cache clean")
  (instrument-specs)
  (render)
  (log "Reload done\n\n"))

(defn init []
  (rf/dispatch-sync [::e/init])
  (lang/put-detect-lang-to-store! ::e/locale)
  (render)
  (instrument-specs)
  (log "Done\n\n"))
