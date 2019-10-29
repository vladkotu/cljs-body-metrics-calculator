(ns body-index-calculator.components.side-menu
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.events :as ev]
   [body-index-calculator.helpers :refer [react-key]]
   [body-index-calculator.i18n :refer [tr]]
   [body-index-calculator.mui-theme :refer [spacing]]
   ["@material-ui/icons/Menu" :default MenuIcon]
   ["@material-ui/icons/Language" :default LanguageIcon]
   ["@material-ui/icons/ColorLens" :default ColorLensIcon]
   ["@material-ui/icons/Straighten" :default StraightenIcon]
   ["@material-ui/core/Divider" :default Divider]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Drawer" :default Drawer]
   ["@material-ui/core/Typography" :default Typography]
   ["@material-ui/core/ListSubheader" :default ListSubheader]
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

(defn items [locale {:keys [active? label on-click]}]
  [(r/adapt-react-class Button)
   {:variant  (if active? "contained" "outlined")
    :key (react-key label)
    :on-click on-click}
   (tr [@locale] label)])

(def button (r/adapt-react-class Button))
(def button-group (r/adapt-react-class ButtonGroup))

(defn button-picker [props]
  (r/with-let [locale (rf/subscribe [::s/locale])]
    (into
     [button-group {:size "small"}
      (for [{:keys [active? label on-click]} (:items props)]
        ^{:key (react-key label)}
        [button {:variant  (if active? "contained" "outlined")
                 :on-click on-click}
         (tr [@locale] label)])])))

(defn theme-picker []
  (r/with-let [theme (rf/subscribe [::s/theme])]
    [button-picker
     {:items [{:label    [:theme.light/label]
               :active?  (= :light @theme)
               :on-click #(rf/dispatch [::ev/theme :light])}
              {:label    [:theme.dark/label]
               :active?  (= :dark @theme)
               :on-click #(rf/dispatch [::ev/theme :dark])}]}]))

(defn language-picker []
  (r/with-let [locale (rf/subscribe [::s/locale])]
    [button-picker
     {:items [{:label    [:locale.en/label]
               :active?  (= :en @locale)
               :on-click #(rf/dispatch [::ev/locale :en])}
              {:label    [:locale.ru/label]
               :active?  (= :ru @locale)
               :on-click #(rf/dispatch [::ev/locale :ru])}]}]))

(defn units-picker []
  (r/with-let [system (rf/subscribe [::s/system])]
    [button-picker
     {:items [{:label    [:system.metric/label]
               :active?  (= :metric @system)
               :on-click #(rf/dispatch [::ev/system :metric])}
              {:label    [:system.imperial/label]
               :active?  (= :imperial @system)
               :on-click #(rf/dispatch [::ev/system :imperial])}]}]))

(defn side-menu [{:keys [open on-close]}]
  (r/with-let [locale (rf/subscribe [::s/locale])]
    [:> Drawer {:open     open
                :on-close on-close}
     [:> Box {:pt    (spacing (/ 1 4))
              :style {:width (spacing 40)}}
      [menu-header]
      (into
       [:div]
       (for [{:keys [label icon controls l]}
             [{:label    #_[:locale/label] (tr [@locale] [:locale/label])
               :icon     LanguageIcon
               :controls language-picker}
              {:label    #_[:system/label] (tr [@locale] [:system/label])
               :icon     StraightenIcon
               :controls units-picker}
              {:label    #_[:theme/label] (tr [@locale] [:theme/label])
               :icon     ColorLensIcon
               :controls theme-picker}]]
         [:> Box {:m 3 :display "flex" :flex-direction "row" :key (str label)}
          [:> Box {:mr 2 :color "text.secondary"}
           [:> icon {:font-size "large"}]]
          [:> Box {:display "flex" :flex-direction "column"}
           [:> Typography {:variant "h6" :element "div"}
            (str label)]
           [:> Box {:mt 1} [controls]]]]))]]))
