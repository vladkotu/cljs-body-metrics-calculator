(ns body-index-calculator.validation
  (:require
   [cljs.spec.alpha :as s]
   [cljs.spec.test.alpha :as ts]
   [body-index-calculator.i18n :refer [tr]]
   [body-index-calculator.helpers :refer [rcast loc convert-single-value]]
   [body-index-calculator.helpers :as helpers]))

(def config {:age    {:max 99
                      :min 12}
             :weight {:max 300
                      :min 30}
             :height {:max 300
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
(s/def ::height-lt (is < (-> config :height :max)))
(s/def ::height-gt (is > (-> config :height :min)))

(def rules {:age    {:as-you-type [::number]
                     :finaly      [::age-lt ::age-gt]}
            :weight {:as-you-type [::number]
                     :finaly      [::weight-lt ::weight-gt]}
            :height {:as-you-type [::number]
                     :finaly      [::height-lt ::height-gt]}})

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
(s/def ::error-code (s/nilable (s/coll-of keyword?)))
(s/def ::error (s/keys :req-un [::error ::error-code]))
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
