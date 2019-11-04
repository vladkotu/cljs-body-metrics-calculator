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
var done = (function (){var opts50474 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts50474){
return (function (ret__50322__auto__,p__50475){
var vec__50476 = p__50475;
var ___50323__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(0),null);
var f__50324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(1),null);
var sym__50325__auto__ = (f__50324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50324__auto__.cljs$core$IFn$_invoke$arity$0() : f__50324__auto__.call(null));
var G__50479 = ret__50322__auto__;
if(cljs.core.truth_(sym__50325__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50479,sym__50325__auto__);
} else {
return G__50479;
}
});})(opts50474))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts50474){
return (function (p1__50321__50326__auto__){
var G__50481 = cljs.core.first(p1__50321__50326__auto__);
var fexpr__50480 = orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts50474);
return (fexpr__50480.cljs$core$IFn$_invoke$arity$1 ? fexpr__50480.cljs$core$IFn$_invoke$arity$1(G__50481) : fexpr__50480.call(null,G__50481));
});})(opts50474))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null)),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null)),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts50474){
return (function (){
var checked__50289__auto__ = (function (){var G__50483 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null));
var G__50484 = new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.calc_body_mass_index;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"calc-body-mass-index","calc-body-mass-index",-418297513,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),"",(cljs.core.truth_(body_index_calculator.lib.body_mass_index.calc_body_mass_index)?body_index_calculator.lib.body_mass_index.calc_body_mass_index.cljs$lang$test:null)]));
var G__50485 = opts50474;
var fexpr__50482 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",(20),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__50482.cljs$core$IFn$_invoke$arity$3 ? fexpr__50482.cljs$core$IFn$_invoke$arity$3(G__50483,G__50484,G__50485) : fexpr__50482.call(null,G__50483,G__50484,G__50485));
})();
if(cljs.core.truth_(checked__50289__auto__)){
body_index_calculator.lib.body_mass_index.calc_body_mass_index = checked__50289__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null);
});})(opts50474))
,((function (opts50474){
return (function (){
var checked__50289__auto__ = (function (){var G__50487 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null));
var G__50488 = new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.classify_body_mass_person;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"classify-body-mass-person","classify-body-mass-person",1175699996,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,26,26,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_mass_index.classify_body_mass_person)?body_index_calculator.lib.body_mass_index.classify_body_mass_person.cljs$lang$test:null)]));
var G__50489 = opts50474;
var fexpr__50486 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",(20),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__50486.cljs$core$IFn$_invoke$arity$3 ? fexpr__50486.cljs$core$IFn$_invoke$arity$3(G__50487,G__50488,G__50489) : fexpr__50486.call(null,G__50487,G__50488,G__50489));
})();
if(cljs.core.truth_(checked__50289__auto__)){
body_index_calculator.lib.body_mass_index.classify_body_mass_person = checked__50289__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null);
});})(opts50474))
,((function (opts50474){
return (function (){
var checked__50289__auto__ = (function (){var G__50491 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null));
var G__50492 = new cljs.core.Var(function(){return body_index_calculator.validation.validate;},new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null),"body_index_calculator/validation.cljs",15,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visited?","visited?",-1398663160,null),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"error-code","error-code",1821028759,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"field","field",338095027,null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.validation.validate)?body_index_calculator.validation.validate.cljs$lang$test:null)]));
var G__50493 = opts50474;
var fexpr__50490 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",(20),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__50490.cljs$core$IFn$_invoke$arity$3 ? fexpr__50490.cljs$core$IFn$_invoke$arity$3(G__50491,G__50492,G__50493) : fexpr__50490.call(null,G__50491,G__50492,G__50493));
})();
if(cljs.core.truth_(checked__50289__auto__)){
body_index_calculator.validation.validate = checked__50289__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null);
});})(opts50474))
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
var G__50494_50495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__50494_50495) : re_frame.core.dispatch_sync.call(null,G__50494_50495));

body_index_calculator.core.render();

body_index_calculator.core.instrument_specs();

return body_index_calculator.core.log("Done\n\n");
});

//# sourceMappingURL=body_index_calculator.core.js.map
