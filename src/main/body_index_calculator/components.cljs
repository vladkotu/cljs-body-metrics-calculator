(ns body-index-calculator.components
  (:require  ["@material-ui/core" :refer [Typography]]))


(defn h* [n]
  (fn [& children] [:> Typography {:variant (str "h" n)}
                    children]))

(def h1 (h* 1))
(def h2 (h* 2))
(def h3 (h* 3))
(def h4 (h* 4))
(def h5 (h* 5))
