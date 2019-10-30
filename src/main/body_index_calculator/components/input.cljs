(ns body-index-calculator.components.input
  (:require
   [reagent.core :as r]
   [body-index-calculator.helpers :refer [evalue react-key]]
   ["@material-ui/core/FormControl" :default FormControl]
   ["@material-ui/core/FormHelperText" :default FormHelperText]
   ["@material-ui/core/InputLabel" :default InputLabel]
   ["@material-ui/core/InputAdornment" :default InputAdornment]
   ["@material-ui/core/FilledInput" :default FilledInput]
   ["@material-ui/core/Grid" :default Grid]))

(defn shared-input [{:keys [on-change
                            on-blur
                            on-focus
                            units
                            id
                            label
                            error
                            error-text
                            value
                            input-style]
                     :or   {on-change #()
                            on-focus  #()
                            on-blur   #()}}]
  [:> FormControl {:error error :style {:width "100%" :position "initial"}}
   [:> InputLabel {:html-for id :variant "filled"}
    label]
   [:> FilledInput {:id        id
                    :value     (or value "")
                    :on-change #(on-change (evalue %))
                    :on-blur   #(on-blur)
                    :on-focus  #(on-focus)
                    :style     input-style
                    :endAdornment
                    (r/as-element
                     [:> InputAdornment
                      {:position "end"
                       :style {:align-items "baseline"}}
                      units])}]
   (when error-text [:> FormHelperText error-text])])

(defn input [props]
  (let [id (react-key "input-" (:label props))]
    [:> Grid {:container true :xs 12 :item true :style {:position "relative"}}
     [shared-input (assoc props :id id)]]))

(defn double-input [label props1 props2]
  (r/with-let [active       (r/atom 1)
               id           (react-key "input-" label)
               reset-active (fn [n] (fn [on-focus]
                                      #(do (reset! active n)
                                           (on-focus))))]
    [:> Grid {:container true :xs 12 :item true :style {:position "relative"}}
     (let [props (-> props1
                     (assoc :label (when (= 1 @active) label))
                     (assoc :id (str "1-" id))
                     (update :on-focus (reset-active 1)))]
       [:> Grid {:item true :xs 6}
        [shared-input
         (merge props {:input-style {:border-top-right-radius 0}})]])
     (let [props (-> props2
                     (assoc :label (when (= 2 @active) label))
                     (assoc :id (str "2-" id))
                     (update :on-focus (reset-active 2)))]
       [:> Grid {:item true :xs 6}
        [shared-input
         (merge props {:input-style {:border-top-left-radius 0}})]])]))
