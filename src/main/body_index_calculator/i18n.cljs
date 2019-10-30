(ns body-index-calculator.i18n
  (:require-macros
   [body-index-calculator.tempura :refer [get-dict]])
  (:require
   [taoensso.tempura :as tempura]))

;; (def dictionary  (get-dict))

(def local-dictionary
  {:en {:missing "missing text"

        :validation {:age
                     {:age-lt [:div "Age should be less than ~~%1~~ years."]
                      :age-gt [:div "You have to be older than *%1* years old."]
                      :number [:div "Only *numbers* allowed for ~~Age~~ field."]}

                     :height
                     {:lt-300    "People cannot be higher than 3m (300cm)."
                      :height-gt "Humans cannot be lower than 1m (100cm)."
                      :number    [:div "Please enter you height as ~~number~~ in %1."]}}

        :form {:call-to-action "Measure You Body"
               :hip            "Hip Circumference"
               :waist          "Waist Circumference"
               :height         "Height"
               :weight         "Weight"
               :age            "Age"
               :gender         {:label  "Gender"
                                :male   "Male"
                                :female "Female"}}

        :locale {:label "Language"
                 :en    {:label "En"
                         :title "English"}
                 :ru    {:label "Ru"
                         :title "Russian"}}

        :theme  {:label "Color Theme"
                 :light {:label "Light"}
                 :dark  {:label "Dark"}}

        :system {:label "Measurement system"
                 :metric
                 {:label "Metric"
                  :units
                  {:len  "cm"
                   :time "years"
                   :mass "kg"}}
                 :imperial
                 {:label "Imperial"
                  :units
                  {:len  ["ft" "in"]
                   :time :en.system.metric.units/time
                   :mass "lb"}}}}

   :ru {:missing "Нэту тэкста"
        :form    {:call-to-action "Измерьте свое тело"
                  :hip            "Окружность бедер"
                  :waist          "Обхват а талии"
                  :height         "Рост"
                  :weight         "Вес"
                  :age            "Возраст"
                  :gender         {:label  "Пол"
                                   :male   "Мужской"
                                   :female "Женский"}}
        :locale  {:label "Выбор языка"
                  :en    {:label "En"
                          :title "Английский"}
                  :ru    {:label "Ru"
                          :title "Русский"}}

        :theme   {:label "Цветовая тема"
                  :light {:label "Светлая"}
                  :dark  {:label "Темная"}}

        :system  {:label "Система исчисления"
                  :metric
                  {:label "Метрическая"
                   :units
                   {:len  "cм"
                    :time "лет"
                    :mass "кг"}
                   :imperial
                   {:label "Имперская"
                    :units
                    {:len  "футы"
                     :time :ru.system.metric.units/time
                     :mass "фунты"}}}}}})

(def tr (partial tempura/tr {:dict local-dictionary}))
