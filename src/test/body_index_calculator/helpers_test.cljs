(ns body-index-calculator.helpers-test
  (:require [cljs.test :refer (deftest is testing)]
            [body-index-calculator.helpers :refer [rcast convert-field-value]]))

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

(deftest convert-field-value-test
  (testing "5' 7'' is average American height and equal 170 cm"
    (is (= (convert-field-value
            :metric {:utype :len :value ["5" "7"]})
           {:utype :len :value "170"})))
  (testing "diameter of soccer ball is 70 cm which is 2' and 3.56''"
    (is (= (convert-field-value
            :imperial {:utype :len :value "70"})
           {:utype :len :value ["2" "3.56"]})))
  (testing "world record of weight lifting is 216 kg or 476 lb"
    (is (= (convert-field-value
            :imperial {:utype :mass :value "216"})
           {:utype :mass :value "476"})))
  (testing "average weight of American is 197 pounds or 89 kg"
    (is (= (convert-field-value
            :metric {:utype :mass :value "197"})
           {:utype :mass :value "89"}))))
