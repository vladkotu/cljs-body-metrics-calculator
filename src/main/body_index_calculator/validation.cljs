(ns body-index-calculator.validation
  (:require
   [cljs.spec.alpha :as s]
   [cljs.spec.test.alpha :as ts]
   [body-index-calculator.i18n :refer [tr]]
   [body-index-calculator.lib.specs :as specs]
   [body-index-calculator.config :refer [config]]
   [body-index-calculator.helpers :refer [loc convert-single-value]]))

(def rules {:age    {:as-you-type [::specs/number ::specs/age-lt]
                     :finaly      [::specs/age-gt]}
            :weight {:as-you-type [::specs/number ::specs/weight-lt]
                     :finaly      [::specs/weight-gt]}
            :height {:as-you-type [::specs/number ::specs/height-lt]
                     :finaly      [::specs/height-gt]}
            :waist  {:as-you-type [::specs/number ::specs/waist-lt]
                     :finaly      [::specs/waist-gt]}
            :hip    {:as-you-type [::specs/number ::specs/hip-lt]
                     :finaly      [::specs/hip-gt]}})

(defn fail-spec
  [spec value]
  (->> (s/explain-data spec value)
       :cljs.spec.alpha/problems
       (map :via)
       distinct
       last
       (mapv (comp keyword name))))

(defn get-rules [select name]
  (if (= :all select)
    (apply concat (vals (-> rules name)))
    (-> rules name select)))
(comment
  (get-rules :all :age)
  (get-rules :as-you-type :age)
  (get-rules :finaly :age))

(defn apply-rules [rules value]
  (->> rules
       (map #(fail-spec % value))
       (remove empty?)
       (first)))
(comment
  (apply-rules (get-rules :all :age)
               {:value "33"})
  (apply-rules (get-rules :all :age)
               {:value "222.a"})
  (apply-rules (get-rules :as-you-type :age)
               {:value "11.a"}))

(defn valid []
  {:error false
   :error-code nil})

(defn invalid [fails]
  {:error true
   :error-code fails})

(defn validate-with-rules [select {:keys [value name]}]
  (if-let [fails (apply-rules (get-rules select name) value)]
    (invalid fails)
    (valid)))

(s/def ::error boolean?)
(s/def ::active? boolean?)
(s/def ::visited? boolean?)
(s/def ::name keyword?)
(s/def ::value (s/nilable any?))
(s/def ::error-code (s/nilable (s/coll-of keyword?)))
(s/def ::field (s/keys :req-un [::visited? ::active? ::name ::value]
                       :opt-un [::error ::error-code]))
(s/def ::validation-error (s/keys :req-un [::error ::error-code]))

(defn not-validate? [{:keys [value]}]
  (or (nil? value)
      (keyword? value)
      (empty? value)))

(defn validate
  [{:keys [visited? active? error error-code] :as field}]
  (cond
    (false? visited?)     (valid)
    (not-validate? field) (valid)
    (or (false? active?)
        (true? error))    (validate-with-rules :all field)

    (and  (true? active?)
          (false? error)) (validate-with-rules :as-you-type field)
    :else                 {:error      error
                           :error-code error-code}))

(s/fdef validate
  :args (s/cat :field ::field)
  :ret  ::validation-error)

(defn get-argv [system locale name utype]
  (let [units     (tr [locale] (loc [:units system :long utype]))
        conf-vals (vals (get config name))
        argv      (if (= :imperial system)
                    (mapv #(convert-single-value system utype %) conf-vals)
                    (vec conf-vals))]
    (into argv [units])))

(defn localize-error-code [system locale {:keys [name error-code utype]}]
  (if error-code
    (let [path (into [] (concat [:validation name system] error-code))
          argv (get-argv system locale name utype)]
      {:error-text (tr [locale] (conj (loc path) "Incorrect input") argv)})
    {:error-text nil}))

(ts/instrument 'validate)
