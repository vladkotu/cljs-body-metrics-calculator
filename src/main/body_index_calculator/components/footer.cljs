(ns body-index-calculator.components.footer
  (:require
   [reagent.core :as r]
   [body-index-calculator.helpers   :refer [with-styles-react]]
   [body-index-calculator.mui-theme :refer [primary-color]]
   ["@material-ui/icons" :refer [CopyrightTwoTone]]
   ["@material-ui/core" :refer [BottomNavigation
                                BottomNavigationAction
                                Grid]]))

(def copy-icon (r/as-element
                [:> CopyrightTwoTone {:htmlColor (primary-color)}]))

(defn footer-content []
  [:> BottomNavigation {:value 0
                        :showLabels true}
   (for [thing [{:label "Copy" :icon copy-icon}
                {:label "Authors"}
                {:label "etc..."}]]
     ^{:key (:label thing)}
     [:> BottomNavigationAction thing])])

(defn footer []
  [:> (with-styles-react
        {:item {:width "100%"}}
        Grid) {:item true} [footer-content]])
