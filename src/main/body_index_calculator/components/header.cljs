(ns body-index-calculator.components.header
  (:require
   [body-index-calculator.components.menu-button :refer [menu-button]]
   ["@material-ui/core/AppBar" :default AppBar]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Toolbar" :default Toolbar]
   ["@material-ui/core/Typography" :default Typography]))

(defn header-content []
  [:> AppBar {:position "static"
              :style    {:background "#006064"}}
   [:> Toolbar
    [menu-button {:on-click #(js/console.log "menu button")}]
    [:> Typography {:variant "h5" :component "h1"}
     "Body Indexes Calculator"]]])

(defn header []
  [:> Grid {:item true} [header-content]])
