(ns body-index-calculator.helpers
  (:require [goog.object  :as gobj]
            [reagent.core :as r]
            ["@material-ui/core/styles" :refer [withStyles]]))

(defn to-clj
  "simplified js->clj for JSON data, :key-fn default to keyword"
  ([x] (to-clj x {}))
  ([x opts]
   (cond
     (nil? x)
     x

     (number? x)
     x

     (string? x)
     x

     (boolean? x)
     x

     (array? x)
     (into [] (map #(to-clj % opts)) (array-seq x))

     :else ;; object
     (reduce
      (fn [result key]
        (let [value
              (gobj/get x key)

              key-fn
              (get opts :key-fn keyword)]

          (assoc result (key-fn (to-clj key opts)) (to-clj value opts))))
      {}
      (gobj/getKeys x)))))

(defn read-str [str opts]
  (to-clj (js/JSON.parse str) opts))

(defn write-str [obj]
  (-> (clj->js obj)
      (js/JSON.stringify)))

(defn with-styles
  " With-styles wraps `@material-ui.styles/withStyles` HoC
  so that it is easier and convenient to use for reagent components.
  API differences:
  'withStyles(styles)(HoC);'
  '(with-styles styles hoc)'
  `styles` should be cljs object with proper JSS rules in or function if you want to operate with `theme` object
  `body-comp` reagent component
  Usage example:
  `[:div
    [(with-styles
      {:content
      {:background
        \"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)\"}}
      [:button \"This is button\"])]] `"
  [styles body-comp]
  (let [hoc (withStyles (if (fn? styles)
                          (comp clj->js (fn [theme] (styles (js->clj theme))))
                          (clj->js styles)))
        js->clj-wrapper (fn [{:keys [children] :as props}]
                          [body-comp (js->clj (dissoc props :children)
                                              :keywordize-keys true)
                           children])]
    (->> js->clj-wrapper
         r/reactify-component
         hoc
         r/adapt-react-class)))

(defn with-styles-react [styles react-comp]
  (let [hoc (withStyles (clj->js styles))]
    (hoc react-comp)))

(defn evalue [ev] (-> ev .-target .-value))

(defn ->int [v]
  (when-not (nil? v)
    (let [v (-> (str v)
                (clojure.string/trim)
                (clojure.string/replace #"[^0-9.]+" ""))]
      (if-not (zero? (count v))
        (js/parseFloat v 10)
        nil))))

(defn as-float
  ([n] (as-float n 2))
  ([n m] (when (number? n) (js/parseFloat (.toFixed n m)))))

(defn as-int
  [n]
  (when (number? n)
    (Math/round n)))

(defn form->person [form]
  (->> form
       (map (fn [[k {:keys [value]}]] {k value}))
       (into {})))

(defn react-key [& ss]
  (-> (clojure.string/join "-" ss)
      (clojure.string/trim)
      (clojure.string/replace #"\s+" "-")))

(defn lb->kg [m] (/ m 0.45359237))
(defn kg->lb [m] (* m 0.45359237))
(defn sm->ft-in [sm]
  (let [in (/ sm 2.54)]
    [(quot in 12)
     (as-float (rem in 12))]))
(defn ft-in->sm [[ft in]]
  (Math/round
   (+ (* ft 30.48)
      (* in 2.54))))
