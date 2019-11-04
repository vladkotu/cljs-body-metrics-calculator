(ns body-index-calculator.i18n
  (:require
   [taoensso.tempura :as tempura]))

(def local-dictionary
  {:en {:missing "missing text"

        :units
        {:imperial
         {:short {:len  ["ft" "in"]
                  :time "yr"
                  :mass "lb"}
          :long  {:len  ["feet" "inches"]
                  :time "years"
                  :mass "pounds"}}
         :metric
         {:short {:len  "cm"
                  :time "yr"
                  :mass "kg"}
          :long  {:len  "centimetres"
                  :time "years"
                  :mass "kilograms"}}}

        :validation
        ;; all titles under validation will receive unified arguments as below
        ;; [max min units]
        {:age
         {:imperial :en.validation.age.metric
          :metric
          {:age-lt (fn [[max]] [:span "Age should be " [:b "less"] " than " [:b max] " years."])
           :age-gt (fn [[min]] [:span "Age should be " [:b "more"] " than " [:b min] " years."])
           :number [:span "Only *numbers* allowed for *Age* field."]}}

         :weight
         {:imperial :en.validation.weight.metric
          :metric
          {:weight-lt (fn [[max _ units]]
                        [:span "Weight should be " [:b "less"] " than " [:b max] " " units "."])
           :weight-gt (fn [[_ min units]]
                        [:span "Weight should be " [:b "more"] " than " [:b min] " " units "."])
           :number    [:span "Only **numbers** allowed for **Weight** field."]}}

         :height
         {:imperial
          {:height-lt (fn [[max _ units]]
                        [:span "People " [:b "cannot"] " be " [:b "higher"] " than "
                         (into [:b] (->> (rest units) (interleave max) (interpose " "))) "."])
           :height-gt (fn [[_ min units]]
                        [:span "People " [:b "cannot"] " be " [:b "lower"] " than "
                         (into [:b] (->> (rest units) (interleave min) (interpose " "))) "."])
           :number    (fn [[_ _ units]]
                        [:span "Please enter you height as " [:b "number"] " in "
                         (->> (rest units) (interpose " and ") (into [:b])) "."])}
          :metric
          {:height-lt (fn [[max _ units]]
                        [:span "People " [:b "cannot"] " be " [:b "higher"] " than " [:b max] " " units "."])
           :height-gt (fn [[_ min units]]
                        [:span "People " [:b "cannot"] " be " [:b "lower"] " than " [:b min] " " units "."])
           :number    [:span "Please enter you height as number in %3."]}}}

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

        :theme {:label "Color Theme"
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

        :theme {:label "Цветовая тема"
                :light {:label "Светлая"}
                :dark  {:label "Темная"}}

        :system {:label "Система исчисления"
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
