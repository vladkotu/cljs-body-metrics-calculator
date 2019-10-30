(ns body-index-calculator.components.form
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [body-index-calculator.i18n :refer [tr]]
   [body-index-calculator.mui-theme :refer [spacing]]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [loc]]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.input  :refer [input double-input]]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/Divider" :default Divider]))

(defn meassuring-system []
  (let [value (rf/subscribe [::s/system])]
    (fn []
      [radio-group
       {:value         (or @value "")
        :name          "system"
        :add-hidden?   false
        :radio-buttons [{:label "Metric" :value :metric}
                        {:label "Imperial" :value :imperial}]
        :on-change     #(rf/dispatch
                         [::e/system (keyword %)])}])))

(defn gender []
  (let [value  (rf/subscribe [::s/gender])
        locale (rf/subscribe [::s/locale])]
    (fn []
      (js/console.log @value)
      [radio-group
       {:value         (or (:value @value) "")
        :name          "gender"
        :add-hidden?   true
        :radio-buttons [{:label (tr [@locale] [:form.gender/male])
                         :value :male}
                        {:label (tr [@locale] [:form.gender/female])
                         :value :female}]
        :on-change     #(rf/dispatch
                         [::e/gender
                          {:visited? true
                           :value    (keyword %)}])}])))

(defn input-with-dispatchers [{:keys [value ev-key label units]}]
  [input
   {:label     label
    :value     (or value "")
    :units     units
    :on-change #(rf/dispatch
                 [ev-key {:value %}])
    :on-focus  #(rf/dispatch
                 [ev-key {:visited? true :active? true}])
    :on-blur   #(rf/dispatch
                 [ev-key {:active? false}])}])

(defn double-input-with-dispatchers [{:keys [value ev-key label units]}]
  (r/with-let [local-state (r/atom {:ft/value (first value)
                                    :in/value (second value)})]
    (letfn [(dispatch-change [state]
              (rf/dispatch [ev-key {:value [(:ft/value state) (:in/value state)]}]))
            (dispatch-focus [] (rf/dispatch [ev-key {:visited? true :active? true}]))
            (dispatch-blur [] (rf/dispatch [ev-key {:active? false}]))]
      [double-input
       label
       {:value     (or (first value) "")
        :units     (first units)
        :on-change #(do (swap! local-state assoc :ft/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}
       {:value     (or (second value) "")
        :units     (second units)
        :on-change #(do (swap! local-state assoc :in/value %)
                        (dispatch-change @local-state))
        :on-focus  dispatch-focus
        :on-blur   dispatch-blur}])))

(defn input-with-subscription [props]
  (r/with-let [field  (rf/subscribe [(:sub-key props)])
               locale (rf/subscribe [::s/locale])
               system (rf/subscribe [::s/system])]
    (let [{:keys [value utype]} @field
          units                 (tr [@locale] (loc [:system @system :units utype]))
          common-props          {:value value
                                 :label (tr [@locale] [(:label props) "unknown label"])}]
      (if (and (= :len utype) (= :imperial @system))
        [double-input-with-dispatchers (merge props {:units (rest units)} common-props)]
        [input-with-dispatchers (merge props {:units units} common-props)]))))

(defn hip []
  [input-with-subscription
   {:label   :form/hip
    :sub-key ::s/hip
    :ev-key  ::e/hip}])

(defn age []
  [input-with-subscription
   {:label   :form/age
    :sub-key ::s/age
    :ev-key  ::e/age}])

(defn weight []
  [input-with-subscription
   {:label   :form/weight
    :sub-key ::s/weight
    :ev-key  ::e/weight}])

(defn height []
  [input-with-subscription
   {:label   :form/height
    :sub-key ::s/height
    :ev-key  ::e/height}])

(defn waist []
  [input-with-subscription
   {:label   :form/waist
    :sub-key ::s/waist
    :ev-key  ::e/waist}])

(defn form []
  [:form {:name          "index-calculator"
          :no-validate   true
          :auto-complete "off"}
   [:> Box {:min-height (spacing 6.5)}]
   [:> Divider]
   [:> Box {:my 1.5}
    [gender]]
   [:> Box {:my 1.5}
    [age]]
   [:> Box {:my 1.5}
    [weight]]
   [:> Box {:my 1.5}
    [height]]
   [:> Box {:my 1.5}
    [waist]]
   [:> Box {:my 1.5}
    [hip]]])
