(ns body-index-calculator.i18n
  (:require-macros
   [body-index-calculator.tempura :refer [get-dict]])
  (:require
   [taoensso.tempura :as tempura]))

(def dictionary  (get-dict))

(def tr (partial tempura/tr {:dict dictionary}))
