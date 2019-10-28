(ns body-index-calculator.components.side-menu
  (:require
   [reagent.core :as r]
   [body-index-calculator.mui-theme :refer [spacing]]
   ["@material-ui/icons/Menu" :default MenuIcon]
   ["@material-ui/icons/Language" :default LanguageIcon]
   ["@material-ui/icons/ColorLens" :default ColorLensIcon]
   ["@material-ui/icons/Straighten" :default StraightenIcon]
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/Divider" :default Divider]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Drawer" :default Drawer]
   ["@material-ui/core/Typography" :default Typography]
   ["@material-ui/core/List" :default List]
   ["@material-ui/core/ListSubheader" :default ListSubheader]
   ["@material-ui/core/ListItem" :default ListItem]
   ["@material-ui/core/ListItemText" :default ListItemText]
   ["@material-ui/core/ListItemIcon" :default ListItemIcon]
   ["@material-ui/core/IconButton" :default IconButton]))

(defn menu-button [{:keys [on-click]}]
  [:> IconButton {:edge     "start"
                  :color    "inherit"
                  :on-click on-click}
   [:> MenuIcon]])

(defn menu-header []
  [:> ListSubheader
   [:> Box {:pt (spacing (/ 1 3))
            :p  (spacing (/ 1 4))}
    [:> Typography  {:variant "h5"} "Settings"]]
   [:> Divider]])

(defn side-menu [props]
  [:> Drawer props
   [:> Box {:pt    (spacing (/ 1 4))
            :pr    (spacing (/ 1 4))
            :style {:width "auto"}}
    [:> List {:subheader (r/as-element (menu-header))
              :style     {:width (spacing 40)}}
     [:> ListItem {:align-items "flex-start"}
      [:> ListItemIcon [:> LanguageIcon {:font-size "large"}]]
      [:> ListItemText {:primary   "Pick your language"
                        :secondary (r/as-element [:> Button "button"])}]]]]])
