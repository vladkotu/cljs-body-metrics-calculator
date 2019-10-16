(ns body-index-calculator.devcards.material-grids
  (:require [devcards.core :refer-macros [defcard defcard-rg defcard-doc]]
            [devcards.core :as dc]
            [reagent.core :as r]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            ["@material-ui/core" :refer [CssBaseline
                                         Grid
                                         Paper]]))

(def styles
  {:space {:margin (spacing 2 3 2 3)
           :padding 0}
   :paper {:padding (spacing 2)}})

(defcard-rg spacing-grid
  "
"
  (fn [_ _]
    [:<>
     [:> CssBaseline]
     [:> Grid {:container true
               :justify "center"
               :spacing 3}
      [:> Grid {:item true?
                :xs 12
                :style (:space styles)}
       [:> Paper {:style (:paper styles)}
        [:> Grid {:container true
                  :justify "space-around"
                  :spacing 3}
         (for [x [1 2 3 4 5]]
           ^{:key (str "name-" x)}
           [:> Grid {:item true}
            [:> Paper {:style (:paper styles)}]])]]]]]))
