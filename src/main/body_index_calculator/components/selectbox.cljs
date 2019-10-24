(ns body-index-calculator.components.selectbox
  (:require
   [body-index-calculator.components.common :refer [form-control-props form-label-styles]]
   [body-index-calculator.helpers :refer [evalue react-key]]
   ["@material-ui/core/FormControl" :default FormControl]
   ["@material-ui/core/FormLabel" :default FormLabel]
   ["@material-ui/core/MenuItem" :default MenuItem]
   ["@material-ui/core/Select" :default Select]))

(defn selectbox [{:keys [value options on-change label]}]
  (let [com-id (react-key label)]
    [:> FormControl (merge form-control-props
                           {:style {:margin "0px 0 20px 0"}})
     [:> FormLabel {:component "label"
                    :html-for  com-id
                    :style     form-label-styles}
      label]
     [:> Select {:value       value
                 :input-props {:id com-id}
                 :on-change   #(on-change (evalue %))
                 :Menu-props  {:Paper-props
                               {:style
                                {:max-height (* 45 4.5)}}}}
      (for [a options]
        ^{:key (str "option-" a)}
        [:> MenuItem {:value a} a])]]))
