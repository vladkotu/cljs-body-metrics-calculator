(ns body-index-calculator.validation
  (:require
   [cljs.spec.alpha :as s]
   [cljs.spec.test.alpha :as ts]
   [body-index-calculator.helpers :refer [rcast]]))

(def config {:age    {:max 99
                      :min 12}
             :weight {:max 300
                      :min 30}})

(defn is [comparator ref-value]
  (fn [value]
    (comparator
     (rcast value)
     ref-value)))

(s/def ::number    (s/nilable (s/and string? #(not (re-find #"[^0-9.]+" %)))))
(s/def ::age-lt    (is < (-> config :age :max)))
(s/def ::age-gt    (is > (-> config :age :min)))
(s/def ::weight-lt (is < (-> config :weight :max)))
(s/def ::weight-gt (is > (-> config :weight :min)))

(def rules {:age    {:as-you-type [::number]
                     :finaly      [::age-lt ::age-gt]}
            :weight {:as-you-type [::number]
                     :finaly      [::weight-lt ::weight-gt]}})

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
(s/def ::value string?)
(s/def ::error-text (s/nilable (s/coll-of keyword?)))
(s/def ::error (s/keys :req-un [::error ::error-text]))
(s/def ::field (s/keys :req-un [::visited? ::active? ::name ::value]))

(defn validate
  [{:keys [visited? active?] :as field}]
  (cond
    (false? visited?) (valid)
    (false? active?)  (validate-with-rules :all field)
    (true? active?)   (validate-with-rules :as-you-type field)
    :else             (throw (ex-info "cannot validate" {}))))

(s/fdef validate
  :args (s/cat :field ::field)
  :ret  ::error)

(ts/instrument 'validate)
