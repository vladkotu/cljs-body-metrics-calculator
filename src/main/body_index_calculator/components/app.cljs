(ns body-index-calculator.components.app
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [clojure.string :refer [split]]
   [body-index-calculator.components.header   :refer [header]]
   [body-index-calculator.components.footer   :refer [footer]]
   [body-index-calculator.components.form     :refer [form]]
   [body-index-calculator.components.dash     :refer [dash]]
   [body-index-calculator.components.result   :refer [result-table]]
   [body-index-calculator.components.common :refer [item-box-paper with-theme]]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Container" :default Container]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Hidden" :default Hidden]))

(defn error-boundary [& comps]
  (let [error (r/atom nil)]
    (r/create-class
     {:get-derived-state-from-error
      (fn [e] (reset! error e) #js {:error true})
      :component-did-catch
      (fn [_ error _]
        (prn :component-did-catch)
        (doseq [r (split (str (.-message error)) "\n")]
          (prn r)))
      :reagent-render
      (fn [] (if @error
               [:div "Something went wrong."
                [:button {:on-click #(reset! error nil)} "Try again"]]
               (into [:<>] comps)))})))

(defn app []
  (r/with-let [theme (rf/subscribe [::s/theme])]
    [with-theme {:theme (name @theme)}
     [header]
     [:> Container {:fixed false}
      [:> Box {:my {:xs 1 :md 2}}
       [:> Grid {:container true :direction "row"}
        [:> Hidden {:lg-up true}
         [item-box-paper {:item  {:xs 12}
                          :outer {:my {:xs 1 :md 2}}
                          :inner {:p 2}}
          [dash]]]
        [item-box-paper {:item  {:xs 12 :md 4}
                         :outer {:my {:xs 1 :md 2} :mr {:md 2}}
                         :inner {:p 2}}
         [form]]
        [item-box-paper {:item  {:xs 12 :md 8}
                         :outer {:my {:xs 1 :md 2} :ml {:md 2}}
                         :inner {:p 2}}
         [result-table]]]]]
     [footer]]))
