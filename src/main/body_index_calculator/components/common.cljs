(ns body-index-calculator.components.common
  (:require
   [body-index-calculator.helpers   :refer [with-styles-react]]
   [body-index-calculator.mui-theme :refer [spacing]]
   ["@material-ui/core" :refer [Paper]]))

(def spacing-paper
  (with-styles-react
    {:root {:margin  (spacing 2 3)
            :padding (spacing 2 2)}}
    Paper))
