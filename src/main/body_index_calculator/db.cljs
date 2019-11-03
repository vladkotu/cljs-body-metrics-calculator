(ns body-index-calculator.db
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.specs :as specs]))

(s/def ::number (s/nilable float?))
(s/def ::name keyword?)
(s/def ::res-value (s/nilable
                    (s/or :number ::number
                          :coll-of-nubmers
                          (s/coll-of ::number :kind vector? :count 2))))

(s/def ::str-number (s/nilable string?))
(s/def ::value (s/or :str-number ::str-number
                     :coll-of-str-nubmers
                     (s/coll-of ::str-number :kind vector? :count 2)))

(s/def ::utype #{:time :len :mass})
(s/def ::active? boolean?)
(s/def ::visited? boolean?)
(s/def :gender/value (s/nilable ::specs/gender))
(s/def :db/gender (s/keys :req-un [::visited?
                                   ::active?
                                   ::name
                                   :gender/value]))

(s/def :db/age (s/keys :req-un [::visited?
                                ::active?
                                ::utype
                                ::name
                                ::value]))

(s/def :db/weight (s/keys :req-un [::visited?
                                   ::active?
                                   ::utype
                                   ::name
                                   ::value]))

(s/def :db/height (s/keys :req-un [::visited?
                                   ::active?
                                   ::utype
                                   ::name
                                   ::value]))

(s/def :db/waist (s/keys :req-un [::visited?
                                  ::active?
                                  ::utype
                                  ::name
                                  ::value]))

(s/def :db/hip (s/keys :req-un [::visited?
                                ::active?
                                ::utype
                                ::name
                                ::value]))

(s/def :db/form (s/keys :req-un [:db/gender
                                 :db/age
                                 :db/weight
                                 :db/height
                                 :db/hip
                                 :db/waist]))

(s/def :db/system #{:metric :imperial})
(s/def :db/locale #{:en :ru})
(s/def :db/theme #{:light :dark})
(s/def ::db (s/keys :req-un [:db/form
                             :db/system
                             :db/locale
                             :db/theme]))

(def default-db-with-values
  {:system :metric
   :locale :en
   :theme  :dark
   :form   {:gender {:name     :gender
                     :visited? false
                     :active?  false
                     :value    :female}
            :age    {:name     :age
                     :visited? false
                     :active?  false
                     :value    "33"
                     :utype    :time}
            :weight {:name     :weight
                     :visited? false
                     :value    "82"
                     :active?  false
                     :utype    :mass}
            :height {:name     :height
                     :visited? false
                     :active?  false
                     :value    "179"
                     :utype    :len}
            :waist  {:name     :waist
                     :visited? false
                     :active?  false
                     :value    "88"
                     :utype    :len}
            :hip    {:name     :hip
                     :visited? false
                     :active?  false
                     :value    "99"
                     :utype    :len}}})

(def default-db
  {:system :metric
   :locale :en
   :theme  :dark
   :form   {:gender {:name     :gender
                     :visited? false
                     :active?  false
                     :value nil}
            :age    {:name     :age
                     :visited? false
                     :active?  false
                     :value    nil
                     :utype    :time}
            :weight {:name     :weight
                     :visited? false
                     :value    nil
                     :active?  false
                     :utype    :mass}
            :height {:name     :height
                     :visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}
            :waist  {:name     :waist
                     :visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}
            :hip    {:name     :hip
                     :visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}}})
