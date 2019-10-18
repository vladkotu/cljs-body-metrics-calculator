(ns body-index-calculator.lib.specs
  (:require [cljs.spec.alpha :as s]))

(def me {:gender :male
         :age 36
         :weight 85
         :height 179})

(s/def ::gender #{:male :female})

(s/def ::int (s/nilable int?))

(s/def ::age-lt #(< % 99))
(s/def ::age-gt (s/nilable #(< 12 %)))
(s/def ::age (s/and ::int ::age-gt ::age-lt))

(s/def ::lt-300 #(< % 300))
(s/def ::weight-gt #(< 30 %))
(s/def ::weight (s/and ::int ::lt-300 ::weight-gt))

(s/def ::height-gt #(< 100 %))
(s/def ::height (s/and ::int ::lt-300 ::height-gt))

;; what are real max and min values known?
(s/def ::waist-gt #(< 40 %))
(s/def ::waist-lt #(< % 200))
(s/def ::waist (s/and ::int ::waist-lt ::waist-gt))

(s/def ::form (s/keys :req-un [::height ::weight]))

(def weight-error-messages
  {[::weight] "Something wrong with your weight but we don't know what."
   [::weight ::lt-300] "300 kg is fairly maximum."
   [::weight ::weight-gt] "Nobody can be so skinny. Start from 30 kg."
   [::weight ::int] "Please enter you weight as number in kg."})

(def height-error-messages
  {[::height] "Something wrong with your height but we don't know what."
   [::height ::lt-300] "People cannot be higher than 3m (300cm)."
   [::height ::height-gt] "Humans cannot be lower than 1m (100cm)."
   [::height ::int] "Please enter you height as number in cm."})

(def age-error-messages
  {[::age] "Something wrong with your age."
   [::age ::age-lt] "Age should be less than 99 years (sorry long livers.)"
   [::age ::age-gt] "You have to be older than 12 years old (sorry teens)."
   [::age ::int] "Only numbers allowed."})

(def form-error-messages
  (let [root-form-error
        {[::form] "Form invalid. looks like some of required fields are missing."}]
    (->> (concat height-error-messages weight-error-messages)
         (map (fn [[path title]] {(vec (conj (seq path) ::form)) title}))
         (concat root-form-error)
         (into {}))))

(def all-error-messages (merge age-error-messages
                               height-error-messages
                               weight-error-messages
                               form-error-messages))

(defn spec-some-fail
  [spec value]
  (when-let [errors (:cljs.spec.alpha/problems
                     (s/explain-data spec value))]
    (distinct (map :via errors))))

(defn validate [messages spec value]
  (let [errors (spec-some-fail spec value)]
    (map (partial get messages) errors)))

(validate all-error-messages ::age "10")
(validate all-error-messages ::form {:weight 3})
