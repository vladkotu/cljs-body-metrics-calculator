(ns body-index-calculator.tempura
  (:require
   [clojure.java.io :as io]
   [taoensso.tempura :refer [tr]]
   [taoensso.tempura.impl :as impl]
   [clojure.string :as s]))

(def translations-path "translations")

(defn file->dict-opts [file]
  (let [fname (.getName file)]
    {(keyword (first (s/split fname #"\.")))
     (impl/load-resource (str translations-path "/" fname))}))

(defmacro get-dict [] (->> translations-path
                           io/resource
                           io/file
                           file-seq
                           (filter #(.isFile %))
                           (map file->dict-opts)
                           (into {})))
