(ns body-index-calculator.mui-theme
  (:require
   [body-index-calculator.helpers :refer [to-clj]]
   ["@material-ui/core/styles" :refer [createMuiTheme]]
   ["@material-ui/core/colors" :refer [deepOrange amber]]))

(def js-theme (createMuiTheme
               (clj->js {:palette {:primary deepOrange
                                   :secondary amber}})))

(def theme (to-clj js-theme))

(defn primary-color []
  (get-in theme [:palette :primary :main]))

(defn secondary-color []
  (get-in theme [:palette :secondary :main]))
