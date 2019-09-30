(ns body-index-calculator.core
  (:require
   [reagent.core :as reagent]
   [body-index-calculator.components :refer [h5]]
   ["@material-ui/core" :refer [CssBaseline
                                AppBar
                                Toolbar
                                Typography
                                BottomNavigation
                                BottomNavigationAction
                                Grid]]))

(defn footer []
  [:> BottomNavigation {:value 0
                        :showLabels true}
   [:> BottomNavigationAction {:label "Copy"}]
   [:> BottomNavigationAction {:label "Authors"}]
   [:> BottomNavigationAction {:label "etc..."}]])

(defn header []
  [:> AppBar {:position "static" :color "primary"}
   [:> Toolbar
    [h5 "Body Indexes Calculator"]]])

(defn app []
  [:<>
   [:> CssBaseline]
   [:> Grid {:container true
             :direction :column
             :spacing 4}
    [:> Grid {:item true} [header]]
    [:> Grid {:item true} [:div.content "Content"]]
    [:> Grid {:item true} [footer]]]])

(defn init []
  (reagent/render [app]
                  (js/document.getElementById "core"))
  (println "App init done"))
