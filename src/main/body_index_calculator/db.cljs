(ns body-index-calculator.db
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.specs :as specs]))

(s/def ::number (s/nilable float?))
(s/def ::res-value (s/nilable
                    (s/or :number ::number
                          :coll-of-nubmers
                          (s/coll-of ::number :kind vector? :count 2))))

(s/def ::str-number (s/nilable string?))
(s/def ::value (s/or :str-number ::str-number
                         :coll-of-str-nubmers
                         (s/coll-of ::str-number :kind vector? :count 2)))

(s/def ::utype #{:time :len :mass})

(s/def :gender/value (s/nilable ::specs/gender))
(s/def :db/gender (s/keys :req-un [::visited?
                                   ::active?
                                   :gender/value]))

(s/def :db/age (s/keys :req-un [::visited?
                                ::active?
                                ::utype
                                ::value]))

(s/def :db/weight (s/keys :req-un [::visited?
                                   ::active?
                                   ::utype
                                   ::value]))

(s/def :db/height (s/keys :req-un [::visited?
                                   ::active?
                                   ::utype
                                   ::value]))

(s/def :db/waist (s/keys :req-un [::visited?
                                  ::active?
                                  ::utype
                                  ::value]))

(s/def :db/hip (s/keys :req-un [::visited?
                                ::active?
                                ::utype
                                ::value]))

(s/def :db/form (s/keys :req-un [:db/gender
                                 :db/age
                                 :db/weight
                                 :db/height
                                 :db/hip
                                 :db/waist]))

(s/def :db/system #{:metric :imperial})
(s/def ::db (s/keys :req-un [:db/form
                             :db/system]))

(def default-db
  {:system :metric
   :form   {:gender {:visited? false
                     :active?  false
                     :value    nil}
            :age    {:visited? false
                     :active?  false
                     :value    ""
                     :utype    :time}
            :weight {:visited? false
                     :value    nil
                     :active?  nil
                     :utype    :mass}
            :height {:visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}
            :waist  {:visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}
            :hip    {:visited? false
                     :active?  false
                     :value    nil
                     :utype    :len}}})
