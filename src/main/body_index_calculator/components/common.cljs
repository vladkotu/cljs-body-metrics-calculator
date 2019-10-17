(ns body-index-calculator.components.common
  (:require
   [body-index-calculator.mui-theme :refer [js-theme spacing]]
   ["@material-ui/styles" :refer [ThemeProvider]]
   [body-index-calculator.helpers   :refer [with-styles-react]]
   ["@material-ui/core" :refer [Grid Paper Box CssBaseline]]))

(def spacing-paper
  (with-styles-react
    {:root {:margin  (spacing 2 3)
            :padding (spacing 2 2)}}
    Paper))

(defn with-theme [& children]
  [:> ThemeProvider {:theme js-theme}
   [:> CssBaseline
    (into [:<>] children)]])

(defn item-box-paper [props & children]
  [:> Grid (merge (:item props) {:item true})
   [:> Box (:outer props)
    [:> Paper (:paper props)
     [:> Box (:inner props)
      (into [:<>] children)]]]])
