(ns body-index-calculator.utils.jsonp
  (:import
   ;; [goog.html TrustedResourceUrl]
   ;; [goog.string Const]
   [goog.net Jsonp])
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async]))

(defn jsonp [url {:keys [timeout]}]
  (let [channel     (async/chan)
        jsonp       (Jsonp. url #_(->> url
                                       Const/from
                                       TrustedResourceUrl/fromConstant))]
    (.setRequestTimeout jsonp timeout)
    (let [req (.send jsonp nil
                     (fn success-callback [data]
                       (async/put! channel (js->clj data :keywordize-keys true)))
                     (fn error-callback []
                       (async/close! channel)))])
    channel))

;; example:
(comment
  (go (let [res (async/<! (jsonp
                           "http://ajaxhttpheaders.appspot.com"
                           {:timeout 3000}))]
        (prn res))))
