(ns body-index-calculator.db
  (:require [body-index-calculator.config :refer [config]]))

(def default-db
  {:form {:gender {:visited? false
                   :active?  false
                   :value    (second (:genres config))}
          :age    {:visited? false
                   :active?  false
                   :value    (:default-age config)}
          :weight {:visited? false
                   :value    80}
          :height {:visited? false
                   :value    180}}})
