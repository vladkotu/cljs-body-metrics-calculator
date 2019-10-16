(ns body-index-calculator.components.dash
  (:require
   [body-index-calculator.helpers   :refer [with-styles-react]]
   [body-index-calculator.mui-theme :refer [js-theme spacing]]
   ["@material-ui/core" :refer [CssBaseline
                                Grid
                                Paper]]))

(def spacing-paper
  (with-styles-react
    {:root {:margin  (spacing 2 3)
            :padding (spacing 2 2)}}
    Paper))

(defn dash []
  (fn []
    [:> Grid {:item true}
     [:> spacing-paper
      [:> Grid {:container true
                :justify "space-around"
                :spacing 3}
       (for [x [1 2 3 4 5]]
         ^{:key (str "name-" x)}
         [:> Grid {:item true}
          [:> Paper x]])]]]))
