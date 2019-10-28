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
   [:> Box {:p (spacing (/ 1 3))}
    [:> Typography  {:variant "h5"} "Settings"]]
   [:> Divider]])

(defn language-picker []
  [:span "lang picker"])

(defn units-picker []
  [:span "units picker"])

(defn theme-picker []
  [:span "theme picker"])

(defn side-menu [{:keys [open on-close]}]
  [:> Drawer {:open     open
              :on-close on-close}
   [:> Box {:pt    (spacing (/ 1 4))
            :style {:width "auto"}}
    [:> List {:subheader (r/as-element (menu-header))
              :style     {:width (spacing 40)}}
     (for [item [{:label    "Pick your language"
                  :icon     LanguageIcon
                  :controls (r/as-element [:> Button "button"])}
                 {:label    "System Units"
                  :icon     StraightenIcon
                  :controls (r/as-element [:> Button "button"])}
                 {:label    "Theme"
                  :icon     ColorLensIcon
                  :controls (r/as-element [:> Button "button"])}]]
       ^{:key (:label item)}
       [:> ListItem {:align-items "flex-start"}
        [:> ListItemIcon [:> (:icon item) {:font-size "large"}]]
        [:> ListItemText {:primary   (:label item)
                          :secondary (:controls item)}]])]]])
