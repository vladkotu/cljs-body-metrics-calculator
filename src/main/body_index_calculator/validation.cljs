(ns body-index-calculator.validation
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.helpers :refer [loc rcast]]
   [body-index-calculator.i18n :refer [tr]]))

(defn fail-spec
  [spec value]
  (->> (s/explain-data spec value)
       :cljs.spec.alpha/problems
       (map :via)
       distinct
       last
       (mapv (comp keyword name))))

(defn make-range-pred [comparator ref-value]
  (fn [[prev-spec value]]
    (comparator ref-value
                (if (= :num-string prev-spec)
                  (rcast value)
                  value))))

(def config
  {:age    {:max 99
            :min 12}
   :weight {:max 300
            :min 30}})

(s/def ::number
  (s/or :number
        float?
        :num-string
        (s/and string?
               #(not (re-find #"[^0-9.]+" %)))))

(s/def ::age-lt    (make-range-pred > (-> config :age :max)))
(s/def ::age-gt    (make-range-pred < (-> config :age :min)))
(s/def ::weight-lt (make-range-pred > (-> config :weight :max)))
(s/def ::weight-gt (make-range-pred < (-> config :weight :min)))

(def rules {:age    {:input [::number]
                     :range [::age-lt ::age-gt]}
            :weight {:input [::numer]
                     :range [::weight-lt ::weight-gt]}})

(defn get-failed-spec-chain [{:keys [value name]}]
  (when-let [field-spec (get rules name)]
    (let [spec-chain (fail-spec field-spec value)]
      (if (empty? spec-chain)
        nil
        (into [:validation] spec-chain)))))

(defn not-valid? [{:keys [value name]}]
  (when-let [field-spec (get rules name)]
    (not (s/valid? field-spec value))))

(defn validate [system {:keys [value name utype] :as field}]
  (merge field
         {:error      (not-valid? field)
          :error-text (get-failed-spec-chain field)}))

(validate :system {:name :age :value "8"})

(tr [:en] (loc [:validation :height :int])
    [[:div "ololo"] (tr [:en] (loc [:system :imperial :units :len]))])

(tr [:en] (loc [:validation :age :age-gt]) [12])
