(ns body-index-calculator.components.header
  (:require
   ["@material-ui/core" :refer [AppBar
                                Grid
                                Toolbar
                                Typography]]))

(defn header-content []
  [:> AppBar {:position "static"
              :style {:background "#006064"}}
   [:> Toolbar
    [:> Typography {:variant "h5" :component "h1"}
     "Body Indexes Calculator"]]])

(defn header []
  [:> Grid {:item true} [header-content]])
