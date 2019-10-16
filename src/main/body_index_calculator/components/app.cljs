(ns body-index-calculator.components.app
  (:require [body-index-calculator.helpers   :refer [with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme]]
            [body-index-calculator.components.header   :refer [header]]
            [body-index-calculator.components.footer   :refer [footer]]
            [body-index-calculator.components.form     :refer [form]]
            [body-index-calculator.components.dash     :refer [dash]]
            [body-index-calculator.components.result   :refer [result-table]]
            [body-index-calculator.components.common :refer [spacing-paper]]
            ["@material-ui/styles" :refer [ThemeProvider]]
            ["@material-ui/core" :refer [CssBaseline
                                         Grid]]))

(def styled-grid
  (with-styles-react
    {:root {:min-height "100vh"}}
    Grid))

(defn container [& children]
  [:> styled-grid {:container true
                   :direction "column"}
   (into [:<>] children)])

(defn content []
  [:> Grid {:item true}
   [dash]
   [:> spacing-paper
    [form]
    [result-table]]])

(defn app []
  [:> ThemeProvider {:theme js-theme}
   [:> CssBaseline]
   [container
    [header]
    [content]
    [footer]]])
