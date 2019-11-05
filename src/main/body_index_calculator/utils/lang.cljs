(ns body-index-calculator.utils.lang
  (:import [goog.html TrustedResourceUrl]
           [goog.string Const]
           [goog.net Jsonp])
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [re-frame.core :as rf]
   [cljs.spec.alpha :as s]
   [body-index-calculator.db :as db]
   [body-index-calculator.events :as e]
   [body-index-calculator.utils.jsonp :refer [jsonp]]
   [cljs.core.async :as async :refer [<!]]))

(defn lang-keyword [lang-code]
  (-> lang-code
      (subs 0 2)
      keyword))

(defn get-nav-lang! []
  (let [nav            (.-navigator js/window)
        lang-nav-props ["languages"
                        "language"
                        "browserLanguage"
                        "systemLanguage"
                        "userLanguage"]
        lang-code      (->> lang-nav-props
                            (map #(aget nav %))
                            (js->clj)
                            (flatten)
                            (remove nil?)
                            (first))]
    (when lang-code
      (lang-keyword lang-code))))

(defn dispatch-supported-locale [lang-code]
  (when (s/valid? ::db/locale lang-code)
    (rf/dispatch [::e/locale lang-code])))

(defn put-detect-lang-to-store! []
  (if-let [lang-code (get-nav-lang!)]
    (dispatch-supported-locale lang-code)
    (go (let [res (<! (jsonp
                       "http://ajaxhttpheaders.appspot.com"
                       {:timeout 3000}))]
          (->> res
               :Accept-Language
               lang-keyword
               dispatch-supported-locale)))))
