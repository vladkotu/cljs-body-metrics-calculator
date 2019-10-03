(ns body-index-calculator.core
  (:require
   [reagent.core :as r]
   [body-index-calculator.helpers :refer [js-theme with-styles-react]]
   [body-index-calculator.components.header :refer [header]]
   [body-index-calculator.components.footer :refer [footer]]
   [body-index-calculator.components.headings :refer [h5]]
   [body-index-calculator.components.input :refer [input]]
   ["@material-ui/styles" :refer [withStyles ThemeProvider]]
   ["@material-ui/core" :refer [AppBar
                                BottomNavigation
                                BottomNavigationAction
                                CssBaseline
                                Grid
                                ;; ThemeProvider
                                Toolbar
                                Typography]]))

(defn container [& children]
  [:> (with-styles-react
        {:root {:min-height "100vh"}}
        Grid) {:container true
               :direction "column"}
   (into [:<>] children)])

(defn App [_]
  [:<>
   [:> CssBaseline]
   [container
    [header]
    [:> Grid {:item true} [input]]
    [footer]]])

(defn app-with-theme []
  [:> ThemeProvider {:theme js-theme}
   [App]])

(defn init []
  (r/render [app-with-theme] (js/document.getElementById "core"))
  (println "App init"))
