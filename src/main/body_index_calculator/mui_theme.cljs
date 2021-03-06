(ns body-index-calculator.mui-theme
  (:require [body-index-calculator.helpers :refer [to-clj]]
            ["@material-ui/core/styles/createMuiTheme" :default createMuiTheme]
            ["@material-ui/core/colors/lightBlue" :default lightBlue]
            ["@material-ui/core/colors/cyan" :default cyan]))

(defn create-js-theme [{:keys [type primary secondary]
                        :or {type "dark" primary lightBlue secondary cyan}}]
  (createMuiTheme
   (clj->js {:palette
             {:type type
              :primary primary
              :secondary secondary}})))

(def js-theme (create-js-theme {}))

(def theme (to-clj js-theme))

(defn primary-color []
  (get-in theme [:palette :primary :main]))

(defn secondary-color []
  (get-in theme [:palette :secondary :main]))

(defn spacing [& args]
  (apply (.-spacing js-theme) args))
