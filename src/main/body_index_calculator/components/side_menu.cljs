(ns body-index-calculator.components.side-menu
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.events :as ev]
   [body-index-calculator.mui-theme :refer [spacing]]
   ["@material-ui/icons/Menu" :default MenuIcon]
   ["@material-ui/icons/Language" :default LanguageIcon]
   ["@material-ui/icons/ColorLens" :default ColorLensIcon]
   ["@material-ui/icons/Straighten" :default StraightenIcon]
   ["@material-ui/core/Divider" :default Divider]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Drawer" :default Drawer]
   ["@material-ui/core/Typography" :default Typography]
   ["@material-ui/core/List" :default List]
   ["@material-ui/core/ListSubheader" :default ListSubheader]
   ["@material-ui/core/ListItem" :default ListItem]
   ["@material-ui/core/ListItemText" :default ListItemText]
   ["@material-ui/core/ListItemIcon" :default ListItemIcon]

   ["@material-ui/core/ButtonGroup" :default ButtonGroup]
   ["@material-ui/core/Button" :default Button]
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

(defn button-picker [props]
  [:> ButtonGroup {:size "small"}
   (for [{:keys [active? label on-click]} (:items props)]
     [(r/adapt-react-class Button)
      {:variant (if active? "contained" "outlined")
       :key label
       :on-click on-click}
      label])])

(defn language-picker []
  [button-picker
   {:items [{:label "Eng" :active? true}
            {:label "Ru"  :active? false}]}])

(defn units-picker []
  [button-picker
   {:items [{:label "Metric" :active? true}
            {:label "Imperial" :active? false}]}])

(defn theme-picker []
  (r/with-let [theme (rf/subscribe [::s/theme])]
    [button-picker
     {:items [{:label "Light"
               :active? (= :light @theme)
               :on-click #(rf/dispatch [::ev/theme :light])}
              {:label "Dark"
               :active? (= :dark @theme)
               :on-click #(rf/dispatch [::ev/theme :dark])}]}]))

(defn side-menu [{:keys [open on-close]}]
  [:> Drawer {:open     open
              :on-close on-close}
   [:> Box {:pt    (spacing (/ 1 4))
            :style {:width (spacing 40)}}
    [menu-header]
    (for [item [{:label    "Pick your language"
                 :icon     LanguageIcon
                 :controls [language-picker]}
                {:label    "System Units"
                 :icon     StraightenIcon
                 :controls [units-picker]}
                {:label    "Theme"
                 :icon     ColorLensIcon
                 :controls [theme-picker]}]]
      ^{:key (:label item)}
      [:> Box {:m 3 :display "flex" :flex-direction "row"}
       [:> Box {:mr 2 :color "text.secondary"}
        [:> (:icon item) {:font-size "large"}]]
       [:> Box {:display "flex" :flex-direction "column"}
        [:> Typography {:variant "h6" :element "div"}
         (:label item)]
        [:> Box {:mt 1} [r/as-element (:controls item)]]]])]])
