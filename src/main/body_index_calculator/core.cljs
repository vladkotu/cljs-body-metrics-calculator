(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.events]
            [body-index-calculator.subscriptions]
            [body-index-calculator.events :as e]
            [body-index-calculator.components.app :refer [app]]))

(defn render []
  (rf/clear-subscription-cache!)
  (r/render [app] (js/document.getElementById "core")))

(defn init []
  (prn "start initialisation")
  (rf/dispatch-sync [::e/init])
  (prn "db initialisation finished")
  (render)
  (println "app rendered"))
