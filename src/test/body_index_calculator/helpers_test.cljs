(ns body-index-calculator.helpers-test
  (:require [cljs.test :refer (deftest is testing)]
            [body-index-calculator.helpers :refer [rcast]]))

(deftest r-aka-reverse-cast
  (testing "rcast casts string to number"
    (doseq [[a-str a-exp] [["2" 2] [" 2.92  " 2.92] ["0.2" 0.2]]]
      (is (= (rcast a-str) a-exp))))
  (testing "rcast casts numbers to string"
    (doseq [[a-exp a-num] [["2" 2] ["2.92" 2.92] ["0.2" 0.2]]]
      (is (= (rcast a-num) a-exp))))
  (testing "rcast casts vector of string to vector of numbers"
    (is (= (rcast ["2." " 2.92  " "0.2"]) [2 2.92 0.2])))
  (testing "rcast casts vector of numbers to vector of strings"
    (is (= (rcast [2 2.92 0.2]) ["2" "2.92" "0.2"])))
  (testing "nil condition"
    (is (= (rcast nil) nil))))
