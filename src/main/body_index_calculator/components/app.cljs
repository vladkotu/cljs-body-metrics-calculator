(ns body-index-calculator.components.app
  (:require [body-index-calculator.helpers   :refer [with-styles-react]]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.header   :refer [header]]
            [body-index-calculator.components.footer   :refer [footer]]
            [body-index-calculator.components.form     :refer [form]]
            [body-index-calculator.components.result   :refer [result-table]]
            ["@material-ui/styles" :refer [ThemeProvider]]
            ["@material-ui/core" :refer [CssBaseline
                                         Grid
                                         Paper]]))

(defn container [& children]
  [:> (with-styles-react
        {:root {:min-height "100vh"}}
        Grid) {:container true
               :direction "column"}
   (into [:<>] children)])

(defn content []
  [:> Grid {:item true}
   [:> (with-styles-react
         {:root {:margin  (spacing 2 3)
                 :padding (spacing 2 2)}}
         Paper) [:<>
                 [form]
                 [result-table]]]])

(defn app []
  [:> ThemeProvider {:theme js-theme}
   [:> CssBaseline]
   [container
    [header]
    [content]
    [footer]]])
