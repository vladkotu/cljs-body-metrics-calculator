goog.provide('body_index_calculator.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
goog.require('body_index_calculator.events');
goog.require('body_index_calculator.components.app');
goog.require('orchestra_cljs.spec.test');
body_index_calculator.core.log = (function body_index_calculator$core$log(m){
if(cljs.core.truth_(goog.DEBUG)){
return console.log(m);
} else {
return null;
}
});
body_index_calculator.core.render = (function body_index_calculator$core$render(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.app.error_boundary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.app.app], null)], null),document.getElementById("core"));

return body_index_calculator.core.log("app render");
});
body_index_calculator.core.instrument_specs = (function body_index_calculator$core$instrument_specs(){
var done = (function (){var opts51024 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts51024){
return (function (ret__49605__auto__,p__51027){
var vec__51029 = p__51027;
var ___49606__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51029,(0),null);
var f__49607__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51029,(1),null);
var sym__49608__auto__ = (f__49607__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49607__auto__.cljs$core$IFn$_invoke$arity$0() : f__49607__auto__.call(null));
var G__51033 = ret__49605__auto__;
if(cljs.core.truth_(sym__49608__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51033,sym__49608__auto__);
} else {
return G__51033;
}
});})(opts51024))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts51024){
return (function (p1__49604__49609__auto__){
var G__51036 = cljs.core.first(p1__49604__49609__auto__);
var fexpr__51035 = orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts51024);
return (fexpr__51035.cljs$core$IFn$_invoke$arity$1 ? fexpr__51035.cljs$core$IFn$_invoke$arity$1(G__51036) : fexpr__51035.call(null,G__51036));
});})(opts51024))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null)),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts51024){
return (function (){
return null;
});})(opts51024))
,((function (opts51024){
return (function (){
return null;
});})(opts51024))
,((function (opts51024){
return (function (){
return null;
});})(opts51024))
,((function (opts51024){
return (function (){
return null;
});})(opts51024))
,((function (opts51024){
return (function (){
return null;
});})(opts51024))
], null)))));
})();
return body_index_calculator.core.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(done))," functions found and instrumented"].join(''));
});
body_index_calculator.core.on_hmr_reload = (function body_index_calculator$core$on_hmr_reload(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

body_index_calculator.core.log("re-frame cache clean");

body_index_calculator.core.instrument_specs();

body_index_calculator.core.render();

return body_index_calculator.core.log("Reload done\n\n");
});
body_index_calculator.core.init = (function body_index_calculator$core$init(){
var G__51058_51091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__51058_51091) : re_frame.core.dispatch_sync.call(null,G__51058_51091));

body_index_calculator.core.render();

body_index_calculator.core.instrument_specs();

return body_index_calculator.core.log("Done\n\n");
});

//# sourceMappingURL=body_index_calculator.core.js.map
