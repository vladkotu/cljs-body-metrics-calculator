(ns body-index-calculator.db
  (:require
   [cljs.spec.alpha :as s]
   [body-index-calculator.lib.specs :as specs]))

(s/def :gender/value (s/nilable ::specs/gender))
(s/def :db/gender (s/keys :req-un [::visited?
                                   ::active?
                                   :gender/value]))

(s/def :age/value ::specs/age)
(s/def :db/age (s/keys :req-un [::visited?
                                ::active?
                                :age/value]))

(s/def :weight/value (s/nilable int?))
(s/def :db/weight (s/keys :req-un [::visited?
                                   ::active?
                                   :weight/value]))

(s/def :height/value (s/nilable int?))
(s/def :db/height (s/keys :req-un [::visited?
                                   ::active?
                                   :height/value]))

(s/def :db/form (s/keys :req-un [:db/gender
                                 :db/age
                                 :db/weight
                                 :db/height]))

(s/def ::db (s/keys :req-un [:db/form]))

(def default-db
  {:form {:gender {:visited? false
                   :active?  false
                   :value    nil}
          :age    {:visited? false
                   :active?  false
                   :value    nil}
          :weight {:visited? false
                   :value    nil
                   :active?  false}
          :height {:visited? false
                   :active?  false
                   :value    nil}}})
