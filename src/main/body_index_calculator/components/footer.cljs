(ns body-index-calculator.components.footer
  (:require
   [body-index-calculator.with-styles :refer [with-styles-react]]
   ["@material-ui/core" :refer [BottomNavigation
                                BottomNavigationAction
                                Grid]]))

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
        Grid) {:item true} [footer-content]])
