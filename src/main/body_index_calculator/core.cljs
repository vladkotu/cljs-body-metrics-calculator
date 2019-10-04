(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [body-index-calculator.helpers   :refer [with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.header   :refer [header]]
            [body-index-calculator.components.footer   :refer [footer]]
            [body-index-calculator.components.form     :refer [form]]
            ["@material-ui/styles" :refer [ThemeProvider]]
            ["@material-ui/core" :refer [CssBaseline
                                         Grid
                                         Paper]]))

(defn container [& children]
  [:> (with-styles-react
        {:root {:min-height "100vh"}}
        Grid) {:container true
               :direction "column"}
   (into [:<>] children)])

(defn content []
  [:> Grid {:item true}
   [:> (with-styles-react
         {:root {:margin  (spacing 2 3)
                 :padding (spacing 2 2)}}
         Paper) [form]]])

(defn App [_]
  [:<>
   [:> CssBaseline]
   [container
    [header]
    [content]
    [footer]]])

(defn app-with-theme []
  [:> ThemeProvider {:theme js-theme}
   [App]])

(defn init []
  (r/render [app-with-theme] (js/document.getElementById "core"))
  (println "App init"))
