goog.provide('body_index_calculator.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
goog.require('body_index_calculator.events');
goog.require('body_index_calculator.utils.lang');
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
var done = (function (){var opts94743 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts94743){
return (function (ret__69801__auto__,p__94744){
var vec__94745 = p__94744;
var ___69802__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94745,(0),null);
var f__69803__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94745,(1),null);
var sym__69804__auto__ = (f__69803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__69803__auto__.cljs$core$IFn$_invoke$arity$0() : f__69803__auto__.call(null));
var G__94748 = ret__69801__auto__;
if(cljs.core.truth_(sym__69804__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__94748,sym__69804__auto__);
} else {
return G__94748;
}
});})(opts94743))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts94743){
return (function (p1__69800__69805__auto__){
var G__94750 = cljs.core.first(p1__69800__69805__auto__);
var fexpr__94749 = orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts94743);
return (fexpr__94749.cljs$core$IFn$_invoke$arity$1 ? fexpr__94749.cljs$core$IFn$_invoke$arity$1(G__94750) : fexpr__94749.call(null,G__94750));
});})(opts94743))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null)),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null)),cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts94743){
return (function (){
var checked__69768__auto__ = (function (){var G__94752 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null));
var G__94753 = new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.calc_body_mass_index;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"calc-body-mass-index","calc-body-mass-index",-418297513,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),"",(cljs.core.truth_(body_index_calculator.lib.body_mass_index.calc_body_mass_index)?body_index_calculator.lib.body_mass_index.calc_body_mass_index.cljs$lang$test:null)]));
var G__94754 = opts94743;
var fexpr__94751 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",20,1,155,155,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__94751.cljs$core$IFn$_invoke$arity$3 ? fexpr__94751.cljs$core$IFn$_invoke$arity$3(G__94752,G__94753,G__94754) : fexpr__94751.call(null,G__94752,G__94753,G__94754));
})();
if(cljs.core.truth_(checked__69768__auto__)){
body_index_calculator.lib.body_mass_index.calc_body_mass_index = checked__69768__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null);
});})(opts94743))
,((function (opts94743){
return (function (){
var checked__69768__auto__ = (function (){var G__94756 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null)], null));
var G__94757 = new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.classify_body_mass_person;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"classify-body-mass-person","classify-body-mass-person",1175699996,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,26,26,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_mass_index.classify_body_mass_person)?body_index_calculator.lib.body_mass_index.classify_body_mass_person.cljs$lang$test:null)]));
var G__94758 = opts94743;
var fexpr__94755 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",20,1,155,155,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__94755.cljs$core$IFn$_invoke$arity$3 ? fexpr__94755.cljs$core$IFn$_invoke$arity$3(G__94756,G__94757,G__94758) : fexpr__94755.call(null,G__94756,G__94757,G__94758));
})();
if(cljs.core.truth_(checked__69768__auto__)){
body_index_calculator.lib.body_mass_index.classify_body_mass_person = checked__69768__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null);
});})(opts94743))
,((function (opts94743){
return (function (){
var checked__69768__auto__ = (function (){var G__94760 = cljs.core.with_meta(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null)], null));
var G__94761 = new cljs.core.Var(function(){return body_index_calculator.validation.validate;},new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.validation","body-index-calculator.validation",-1152046134,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null),"body_index_calculator/validation.cljs",15,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visited?","visited?",-1398663160,null),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"error-code","error-code",1821028759,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"field","field",338095027,null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.validation.validate)?body_index_calculator.validation.validate.cljs$lang$test:null)]));
var G__94762 = opts94743;
var fexpr__94759 = new cljs.core.Var(function(){return orchestra_cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("orchestra-cljs.spec.test","instrument-1*","orchestra-cljs.spec.test/instrument-1*",-2055392167,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"orchestra-cljs.spec.test","orchestra-cljs.spec.test",-7792857,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"orchestra_cljs/spec/test.cljs",20,1,155,155,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(orchestra_cljs.spec.test.instrument_1_STAR_)?orchestra_cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__94759.cljs$core$IFn$_invoke$arity$3 ? fexpr__94759.cljs$core$IFn$_invoke$arity$3(G__94760,G__94761,G__94762) : fexpr__94759.call(null,G__94760,G__94761,G__94762));
})();
if(cljs.core.truth_(checked__69768__auto__)){
body_index_calculator.validation.validate = checked__69768__auto__;
} else {
}

return new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null);
});})(opts94743))
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
var G__94763_94764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__94763_94764) : re_frame.core.dispatch_sync.call(null,G__94763_94764));

body_index_calculator.utils.lang.put_detect_lang_to_store_BANG_(new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992));

body_index_calculator.core.render();

body_index_calculator.core.instrument_specs();

return body_index_calculator.core.log("Done\n\n");
});

//# sourceMappingURL=body_index_calculator.core.js.map
