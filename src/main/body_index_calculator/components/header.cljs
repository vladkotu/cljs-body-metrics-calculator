(ns body-index-calculator.components.header
  (:require
   [body-index-calculator.components.side-menu :refer [menu-button side-menu]]
   ["@material-ui/core/AppBar" :default AppBar]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Toolbar" :default Toolbar]
   ["@material-ui/core/Typography" :default Typography]
   [reagent.core :as r]))

(defn header-content []
  (r/with-let [open? (r/atom false)]
    [:> AppBar {:position "static"
                :style    {:background "#006064"}}
     [:> Toolbar
      [side-menu {:open @open? :on-close #(swap! open? not)}]
      [menu-button {:on-click #(swap! open? not)}]

      [:> Typography {:variant "h5" :component "h1"}
       "Body Indexes Calculator"]]]))

(defn header []
  [:> Grid {:item true} [header-content]])
