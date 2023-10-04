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

(s/def ::error boolean?)
(s/def ::error-code (s/nilable (s/coll-of keyword?)))
(s/def ::utype #{:time :len :mass})
(s/def ::active? boolean?)
(s/def ::visited? boolean?)
(s/def :gender/value (s/nilable ::specs/gender))
(s/def ::gender (s/keys :req-un [::visited?
                                 ::active?
                                 ::name
                                 ::error
                                 ::error-code
                                 :gender/value]))

(s/def ::age (s/keys :req-un [::visited?
                              ::active?
                              ::utype
                              ::name
                              ::error
                              ::error-code
                              ::value]))

(s/def ::weight (s/keys :req-un [::visited?
                                 ::active?
                                 ::utype
                                 ::name
                                 ::error
                                 ::error-code
                                 ::value]))

(s/def ::height (s/keys :req-un [::visited?
                                 ::active?
                                 ::utype
                                 ::name
                                 ::error
                                 ::error-code
                                 ::value]))

(s/def ::waist (s/keys :req-un [::visited?
                                ::active?
                                ::utype
                                ::name
                                ::error
                                ::error-code
                                ::value]))

(s/def ::hip (s/keys :req-un [::visited?
                              ::active?
                              ::utype
                              ::name
                              ::error
                              ::error-code
                              ::value]))

(s/def ::form (s/keys :req-un [::gender
                               ::age
                               ::weight
                               ::height
                               ::hip
                               ::waist]))

(s/def ::system #{:metric :imperial})
(s/def ::locale #{:en :ua})
(s/def ::theme #{:light :dark})
(s/def ::db (s/keys :req-un [::form
                             ::system
                             ::locale
                             ::theme]))

(def default-db-with-values
  {:system :metric
   :locale :en
   :theme  :dark
   :form   {:gender {:name       :gender
                     :visited?   false
                     :active?    false
                     :error      false
                     :error-code nil
                     :value      :female}
            :age    {:name       :age
                     :visited?   false
                     :active?    false
                     :error      false
                     :error-code nil
                     :value      "33"
                     :utype      :time}
            :weight {:name       :weight
                     :visited?   false
                     :value      "82"
                     :active?    false
                     :error      false
                     :error-code nil
                     :utype      :mass}
            :height {:name       :height
                     :visited?   false
                     :active?    false
                     :error      false
                     :error-code nil
                     :value      "179"
                     :utype      :len}
            :waist  {:name       :waist
                     :visited?   false
                     :active?    false
                     :value      "88"
                     :error      false
                     :error-code nil
                     :utype      :len}
            :hip    {:name       :hip
                     :visited?   false
                     :active?    false
                     :error      false
                     :error-code nil
                     :value      "99"
                     :utype      :len}}})

(def default-db
  {:system :metric
   :locale :en
   :theme  :dark
   :form   {:gender {:name     :gender
                     :visited? false
                     :active?  false
                     :error      false
                     :error-code nil
                     :value nil}
            :age    {:name     :age
                     :visited? false
                     :active?  false
                     :error      false
                     :error-code nil
                     :value    nil
                     :utype    :time}
            :weight {:name     :weight
                     :visited? false
                     :value    nil
                     :active?  false
                     :error      false
                     :error-code nil
                     :utype    :mass}
            :height {:name     :height
                     :visited? false
                     :active?  false
                     :error      false
                     :error-code nil
                     :value    nil
                     :utype    :len}
            :waist  {:name     :waist
                     :visited? false
                     :active?  false
                     :error      false
                     :error-code nil
                     :value    nil
                     :utype    :len}
            :hip    {:name     :hip
                     :visited? false
                     :active?  false
                     :error      false
                     :error-code nil
                     :value    nil
                     :utype    :len}}})
