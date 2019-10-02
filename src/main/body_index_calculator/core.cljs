(ns body-index-calculator.core
  (:require
   [reagent.core :as r]
   [body-index-calculator.components :refer [h5]]
   [body-index-calculator.with-styles :refer [with-styles with-styles-react]]
   ["@material-ui/styles" :refer [withStyles]]
   ["@material-ui/core" :refer [AppBar
                                BottomNavigation
                                BottomNavigationAction
                                CssBaseline
                                createMuiTheme
                                Grid
                                ThemeProvider
                                Toolbar
                                Typography]]))

(defn header-content []
  [:> AppBar {:position "static" :color "primary"}
   [:> Toolbar
    [(with-styles
       {:title {:color "#CCC"}}
       (fn [{:keys [classes]}]
         [h5 {:class (:title classes)}
          "Body Indexes Calculator"]))]]])

(defn header []
  [:> Grid {:item true} [header-content]])

(defn footer-content []
  [:> BottomNavigation {:value 0
                        :showLabels true}
   [:> BottomNavigationAction {:label "Copy"}]
   [:> BottomNavigationAction {:label "Authors"}]
   [:> BottomNavigationAction {:label "etc..."}]])

(defn footer []
  [:> (with-styles-react
        {:item {:width "100%"
                :bottom "0"
                :position "absolute"}}
        Grid) {:item true} [footer]])

(defn App [_]
  [:<>
   [:> CssBaseline]
   [:> (with-styles-react
         {:root {:min-height "100vh"}}
         Grid) {:container true
                :direction "column"}
    [header]
    [:> Grid {:item true} [:div {:class "content"} "Content"]]
    [footer]]])

(defn init []
  (r/render [App] (js/document.getElementById "core"))
  (println "App init"))
