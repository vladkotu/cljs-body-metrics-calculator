(ns body-index-calculator.validation-test
  (:require [cljs.test :refer (deftest is testing)]
            [body-index-calculator.validation :refer [validate]]))

(defn submap [a-submap a-map]
  (reduce-kv
   (fn [agg k v]
     (conj agg (when (= v (get a-map k :no-match)) [k v])))
   {}
   a-submap))

(defn =submap [a-submap a-map]
  (= a-submap
     (submap a-submap a-map)))

(deftest validate-field

  (testing "validation as you type (active? field is true)"
    (testing "if no rules found - no error produced"
      (is (=submap {:error      false
                    :error-code nil}
                   (validate
                    {:name     :not-exists
                     :value    "any"
                     :visited? true
                     :active?  true}))))

    (testing "no error possible if field was not visited"
      (is (=submap {:error      false
                    :error-code nil}
                   (validate
                    {:visited? false
                     :active?  true}))))

    (testing "dot is allowed as separator"
      (is (=submap {:error      false
                    :error-code nil}
                   (validate
                    {:name     :age
                     :value    "2."
                     :visited? true
                     :active?  true}))))

    (testing "should warn if user typed not a number character"
      (is (=submap {:error      true
                    :error-code [:number]}
                   (validate
                    {:name     :age
                     :value    "a"
                     :visited? true
                     :active?  true})))))

  (testing "validation when typing finished"

    (testing "nilable values are ok"
      (is (=submap {:error      false
                    :error-code nil}
                   (validate
                    {:name     :age
                     :value    nil
                     :visited? true
                     :active?  true}))))

    (testing "too low age"
      (is (=submap {:error      true
                    :error-code [:age-gt]}
                   (validate
                    {:name     :age
                     :value    "2"
                     :visited? true
                     :active?  false}))))
    (testing "not realistic huge age"
      (is (=submap {:error      true
                    :error-code [:age-lt]}
                   (validate
                    {:name     :age
                     :value    "222"
                     :visited? true
                     :active?  false}))))))

(def mass-variants
  [{:visited? false
    :value    nil
    :active?  nil
    :utype    :mass}

   {:visited? true
    :active?  false
    :value    :female}

   {:visited? true
    :active?  false
    :value    :female}])
