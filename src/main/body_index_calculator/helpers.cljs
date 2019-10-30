(ns body-index-calculator.helpers
  (:require [goog.object  :as gobj]
            [reagent.core :as r]
            [clojure.string :refer [replace trim join]]
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

(defn str->num [v]
  (-> v (js/parseFloat 10)))

(defn as-float
  ([n] (as-float n 2))
  ([n m] (when (number? n) (js/parseFloat (.toFixed n m)))))

(def to-fixed #'as-float)

(defn as-int
  [n]
  (when (number? n)
    (Math/round n)))

(defn react-key [& ss]
  (->> ss
       (map str)
       (map trim)
       (join "-")
       (#(replace %  #"\s+" "-"))))

(defn lb->kg [m] (Math/round (/ m 0.45359237)))
(defn kg->lb [m] (Math/round (* m 0.45359237)))
(defn cm->ft-in [sm]
  (let [in (/ sm 2.54)]
    [(quot in 12)
     (to-fixed (rem in 12))]))
(defn ft-in->sm [[ft in]]
  (Math/round
   (+ (* ft 30.48)
      (* in 2.54))))

(defprotocol FormValueRCast
  (rcast [this]))

(extend-protocol FormValueRCast
  string           (rcast [this] (js/parseFloat (if (empty? this) "0" this) 10))
  number           (rcast [this] (str this))
  PersistentVector (rcast [this] (mapv rcast this))
  nil              (rcast [this] this)
  Keyword          (rcast [this] this))

(type :a)
(defn rcast-value-with [with this]
  (update this :value #(-> % rcast with rcast)))

(defn convert-field-value [system field]
  (case [system (:utype field)]
    [:metric :len]    (rcast-value-with ft-in->sm field)
    [:imperial :len]  (rcast-value-with cm->ft-in field)
    [:metric :mass]   (rcast-value-with kg->lb field)
    [:imperial :mass] (rcast-value-with lb->kg field)
    (identity field)))

(defn convert-form-values [system form]
  (->> form
       (map (fn [[key field]]
              [key (convert-field-value system field)]))
       (into {})))

(defn form->person [form]
  (->> form
       (map (fn [[k {:keys [value]}]] {k (rcast value)}))
       (into {})))

(defn loc [path]
  (let [strify (comp str name)
        path   (reduce
                (fn [agg val]
                  (if (qualified-keyword? val)
                    (conj agg (-> val namespace strify) (-> val name strify))
                    (conj agg (-> val strify)))) [] path)]
    [(keyword (clojure.string/join "." (butlast path))
              (last path))]))
