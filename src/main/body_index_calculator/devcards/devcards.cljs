(ns body-index-calculator.devcards.devcards
  (:require-macros [devcards.core :as dc
                    :refer [defcard defcard-rg]])
  (:require
   [devcards.core :as dc]
   [reagent.core :as r]
   [body-index-calculator.mui-theme :refer [spacing]]
   [body-index-calculator.components.common :refer [with-theme]]
   [body-index-calculator.components.dash :refer [status-icon]]
   [body-index-calculator.components.side-menu :refer [menu-button
                                                       side-menu
                                                       language-picker
                                                       units-picker
                                                       theme-picker]]
   ["@material-ui/icons/Menu" :default MenuIcon]
   ["@material-ui/core/IconButton" :default IconButton]
   ["@material-ui/icons/HighlightOff" :default  HighlightOffIcon]
   ["@material-ui/core" :refer [Grid
                                Drawer
                                List
                                ListItem
                                ListItemIcon
                                ListItemText
                                Box
                                Paper]]))

;; [with-theme {:theme "light"}
;;  [:> Box {:m (spacing 1)}]]

(defcard-rg language-picker-card ""
  (fn [_ _]
    [with-theme {:theme "light"}
     [:> Box {:m (spacing 1)}
      [:span "language picker was here"]]]))

;; (defcard-rg units-picker-card ""
;;   (fn [_ _]
;;     [with-theme {:theme "light"}
;;      [:> Box {:m (spacing 1)}
;;       [units-picker]]]))

;; (defcard-rg theme-picker-card ""
;;   (fn [_ _]
;;     [with-theme {:theme "light"}
;;      [:> Box {:m (spacing 1)}
;;       [theme-picker]]]))

;; #_(defcard-rg setings-menu ""
;;   (fn [db _]
;;     [with-theme {:theme "light"}
;;      [side-menu {:open     (:side-menu @db)
;;                  :on-close #(swap! db update :side-menu not)}]
;;      [:> Box {:m (spacing 1)}
;;       [menu-button {:on-click #(swap! db update :side-menu not)}]]])

;;   (r/atom {:side-menu false})
;;   {:inspect-data true})

;; (defcard-rg ready-not-ready-icons ""
;;   (fn [done _]
;;     [with-theme {:theme "light"}
;;      [:> Box {:m (spacing (/ 1 4))}
;;       [:> Grid {:container true :direction "column" :spacing 3}
;;        [:> Grid {:item true :xs 6}
;;         [:button {:on-click #(swap! done not)
;;                   :style {:width (spacing 10)}}
;;          (if @done "Undone" "Done")]]
;;        [:> Grid {:item true :xs 6}
;;         [:> Grid {:container true :direction "row" :spacing 2}
;;          [:> Grid {:item true :xs 3}
;;           [status-icon {:done? @done
;;                         :label "BMI"
;;                         :help-text "What is BMI"}]]
;;          [:> Grid {:item true :xs 3}
;;           [status-icon {:done? (not @done)
;;                         :label "LBM"
;;                         :help-text "What is LBM"}]]]]]]])
;;   (r/atom true)
;;   {:inspect-data true})

;; (defcard-rg icons-in-a-grid-grid
;;   (fn [_ _]
;;     [with-theme {:theme "light"}
;;      [:> Box {:m (spacing (/ 1 4))}
;;       [:> Grid {:container true
;;                 :justify "center"
;;                 :spacing 3}
;;        [:> Grid {:item true
;;                  :xs 12}
;;         [:> Paper
;;          [:> Grid {:container true
;;                    :justify "space-around"
;;                    :spacing 3}
;;           (for [x [{:done? true :label "BMI"}
;;                    {:done? false :label "BMR"}
;;                    {:done? false :label "LBM?"}]]
;;             ^{:key (str "name-" (:label x))}
;;             [:> Grid {:item true :xs 4}
;;              [status-icon x]])]]]]]]))

(defn main []
  (dc/start-devcard-ui!))
