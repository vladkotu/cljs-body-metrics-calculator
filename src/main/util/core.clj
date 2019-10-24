(ns util.core
  (:require [hiccup-bridge.core :as hicv]
            [clojure.java.io :as io]
            [taoensso.tempura.impl :as impl]
            [clojure.string :as s])
  (:import java.io.File))

(def translations-path "translations")
(defn file->dict-opts [file]
  (let [fname (.getName file)]
    {(keyword (first (s/split fname #"\.")))
     {:__load-resource (str translations-path "/" fname)}}))

(def dictionary (->> translations-path
                     io/resource
                     io/file
                     file-seq
                     (filter #(.isFile %))
                     (map file->dict-opts)
                     (into {})))

(def tempura-opts {:dict (impl/compile-dictionary false dictionary)})


(defmacro embed-svg [file-dest]
  (let [[result] (hicv/html->hiccup (slurp file-dest))]
    `~result))
