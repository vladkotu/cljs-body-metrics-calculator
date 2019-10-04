(ns body-index-calculator.mui-theme
  (:require [goog.object :as gobj]
            [reagent.core :as r]
            [body-index-calculator.helpers :refer [to-clj]]
            ["@material-ui/core/styles" :refer [withStyles createMuiTheme]]
            ["@material-ui/core/colors" :refer [lightBlue cyan deepOrange amber]]))

(def js-theme (createMuiTheme
               (clj->js {:palette
                         {:type "dark"
                          :primary lightBlue
                          :secondary cyan}})))

(def theme (to-clj js-theme))

(defn primary-color []
  (get-in theme [:palette :primary :main]))

(defn secondary-color []
  (get-in theme [:palette :secondary :main]))

(defn spacing
  ([n]   (.spacing js-theme n))
  ([n m] (.spacing js-theme n m)))
