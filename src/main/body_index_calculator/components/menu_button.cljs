(ns body-index-calculator.components.menu-button
  (:require

   ["@material-ui/icons/Menu" :default MenuIcon]
   ["@material-ui/core/IconButton" :default IconButton]
   ))

(defn menu-button [{:keys [on-click]}]
  [:> IconButton {:edge     "start"
                  :color    "inherit"
                  :on-click on-click}
   [:> MenuIcon]])
