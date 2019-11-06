goog.provide('body_index_calculator.utils.jsonp');
goog.require('cljs.core');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
body_index_calculator.utils.jsonp.jsonp = (function body_index_calculator$utils$jsonp$jsonp(url,p__95993){
var map__95994 = p__95993;
var map__95994__$1 = (((((!((map__95994 == null))))?(((((map__95994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95994):map__95994);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95994__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(url));
jsonp.setRequestTimeout(timeout);

var req_95996 = jsonp.send(null,((function (channel,jsonp,map__95994,map__95994__$1,timeout){
return (function body_index_calculator$utils$jsonp$jsonp_$_success_callback(data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});})(channel,jsonp,map__95994,map__95994__$1,timeout))
,((function (channel,jsonp,map__95994,map__95994__$1,timeout){
return (function body_index_calculator$utils$jsonp$jsonp_$_error_callback(){
return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__95994,map__95994__$1,timeout))
);

return channel;
});

//# sourceMappingURL=body_index_calculator.utils.jsonp.js.map
