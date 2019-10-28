(ns body-index-calculator.components.common
  (:require
   [body-index-calculator.mui-theme :refer [create-js-theme]]
   ["@material-ui/styles/ThemeProvider" :default ThemeProvider]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/CssBaseline" :default CssBaseline]))

(defn with-theme [{:keys [theme]} & children]
  [:> ThemeProvider {:theme (create-js-theme {:type theme})}
   [:> CssBaseline
    (into [:<>] children)]])

(defn item-box-paper [props & children]
  [:> Grid (merge (:item props) {:item true})
   [:> Box (:outer props)
    [:> Paper (:paper props)
     [:> Box (:inner props)
      (into [:<>] children)]]]])
