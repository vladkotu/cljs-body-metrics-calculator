(ns body-index-calculator.devcards.material-grids
  (:require [devcards.core :refer-macros [defcard defcard-rg defcard-doc]]
            [reagent.core :as r]
            [body-index-calculator.mui-theme :refer [js-theme spacing]]
            [body-index-calculator.components.common :refer [spacing-paper with-theme]]
            [body-index-calculator.components.dash :refer [status-icon]]
            ["@material-ui/icons/CheckCircle" :default CheckCircleIcon]
            ["@material-ui/icons/HighlightOff" :default  HighlightOffIcon]
            ["@material-ui/core" :refer [CssBaseline
                                         Grid
                                         Container
                                         Box
                                         Paper]]))

(def styles
  {:space {:margin (spacing 2 3 2 3)
           :padding (spacing 3)
           :width "100%"}
   :paper {:padding (spacing 2)}})

(defcard-rg ready-not-ready-icons
  ""
  (fn [done _]
    [with-theme
     [:> Paper {:style (:space styles)}
      [:> Grid {:container true :direction "column" :spacing 3}
       [:> Grid {:item true :xs 6}
        [:button {:on-click #(swap! done not)
                  :style {:width (spacing 10)}}
         (if @done "Undone" "Done")]]
       [:> Grid {:item true :xs 6}
        [:> Grid {:container true :direction "row" :spacing 2}
         [:> Grid {:item true :xs 3}
          [status-icon {:done? @done
                        :label "BMI"
                        :help-text "What is BMI"}]]
         [:> Grid {:item true :xs 3}
          [status-icon {:done? (not @done)
                        :label "LBM"
                        :help-text "What is LBM"}]]]]]]])
  (r/atom true)
  {:inspect-data true})

(defcard-rg spacing-grid
  "
Playing with example from material ui site.
"
  (fn [_ _]
    [with-theme
     [:> Grid {:container true
               :justify "center"
               :spacing 3}
      [:> Grid {:item true
                :xs 12
                :style (:space styles)}
       [:> Paper {:style (:paper styles)}
        [:> Grid {:container true
                  :justify "space-around"
                  :spacing 3}
         (for [x [{:done? true :label "BMI"}
                  {:done? false :label "BMR"}
                  {:done? false :label "LBM?"}]]
           ^{:key (str "name-" (:label x))}
           [:> Grid {:item true :xs 4}
            [status-icon x]])]]]]]))
