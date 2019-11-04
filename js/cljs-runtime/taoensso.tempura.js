goog.provide('taoensso.tempura');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.tempura.impl');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(86),(1)], null));
taoensso.tempura._STAR_tr_opts_STAR_ = null;
taoensso.tempura._STAR_tr_scope_STAR_ = null;
/**
 * Good general-purpose resource compiler.
 *   Supports output of text, and Hiccup forms with simple Markdown styles.
 */
taoensso.tempura.get_default_resource_compiler = taoensso.encore.memoize_((function (p__68388){
var map__68389 = p__68388;
var map__68389__$1 = (((((!((map__68389 == null))))?(((((map__68389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68389):map__68389);
var escape_html_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword(null,"escape-html?","escape-html?",-397605100));
var esc1 = (cljs.core.truth_(escape_html_QMARK_)?taoensso.tempura.impl.escape_html:cljs.core.identity);
var esc2 = (cljs.core.truth_(escape_html_QMARK_)?taoensso.tempura.impl.vec_escape_html_in_strs:cljs.core.identity);
return taoensso.encore.memoize_(((function (esc1,esc2,map__68389,map__68389__$1,escape_html_QMARK_){
return (function (res){
if(cljs.core.fn_QMARK_(res)){
return res;
} else {
if(typeof res === 'string'){
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((esc1.cljs$core$IFn$_invoke$arity$1 ? esc1.cljs$core$IFn$_invoke$arity$1(res) : esc1.call(null,res)));
} else {
if(cljs.core.vector_QMARK_(res)){
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((function (){var G__68393 = taoensso.tempura.impl.vec_explode_args_in_strs(taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1(taoensso.tempura.impl.vec__GT_vtag(res)));
return (esc2.cljs$core$IFn$_invoke$arity$1 ? esc2.cljs$core$IFn$_invoke$arity$1(G__68393) : esc2.call(null,G__68393));
})());
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
});})(esc1,esc2,map__68389,map__68389__$1,escape_html_QMARK_))
);
}));
taoensso.tempura.default_tr_opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"dict","dict",-1629964473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"missing","missing",362507769),"[Missing tr resource]"], null)], null),new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860),(function (){
return taoensso.tempura._STAR_tr_scope_STAR_;
}),new cljs.core.Keyword(null,"cache-dict?","cache-dict?",2012653536),true,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885),true,new cljs.core.Keyword(null,"cache-resources?","cache-resources?",-247492358),false,new cljs.core.Keyword(null,"resource-compiler","resource-compiler",579506905),(function (){var G__68397 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"escape-html?","escape-html?",-397605100),false], null);
return (taoensso.tempura.get_default_resource_compiler.cljs$core$IFn$_invoke$arity$1 ? taoensso.tempura.get_default_resource_compiler.cljs$core$IFn$_invoke$arity$1(G__68397) : taoensso.tempura.get_default_resource_compiler.call(null,G__68397));
})(),new cljs.core.Keyword(null,"missing-resource-fn","missing-resource-fn",523544311),null], null);
taoensso.tempura.example_dictionary = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en-GB","en-GB",-786195262),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing","missing",362507769),":en-GB missing text",new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"greet","greet",-535473050),"Good day %1!"], null)], null),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"missing","missing",362507769),":en missing text",new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"greet","greet",-535473050),"Hello %1",new cljs.core.Keyword(null,"farewell","farewell",-2116288955),"Goodbye %1",new cljs.core.Keyword(null,"foo","foo",1268894036),"foo",new cljs.core.Keyword(null,"bar","bar",-1386246584),"bar",new cljs.core.Keyword(null,"bar-copy","bar-copy",-676753162),new cljs.core.Keyword("en.example","bar","en.example/bar",526133603),new cljs.core.Keyword(null,"baz","baz",-1134894686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is a **Hiccup** form"], null),new cljs.core.Keyword(null,"qux","qux",-326845933),(function (p__68400){
var vec__68401 = p__68400;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401,(0),null);
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg2)].join('');
})], null),new cljs.core.Keyword(null,"example-copy","example-copy",1574229778),new cljs.core.Keyword("en","example","en/example",-1755784625),new cljs.core.Keyword(null,"import-example","import-example",1886140967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__load-resource","__load-resource",-1900012152),"resources/i18n.clj"], null)], null)], null);
taoensso.tempura.merge_into_default_opts = taoensso.encore.memoize_((function (opts,dynamic_opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([taoensso.tempura.default_tr_opts,opts,dynamic_opts], 0));
}));
taoensso.tempura.scoped = taoensso.encore.memoize_((function (locale,_QMARK_scope,resid){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale,_QMARK_scope,resid], null));
}));
/**
 * loc1 res1 var1 var2 ... base
 *      res2 var1 var2 ... base
 *      ...
 * loc2 res1 var1 var2 ... base
 *      res2 var1 var2 ... base
 *      ...
 */
taoensso.tempura.search_resids_STAR_ = (function taoensso$tempura$search_resids_STAR_(dict,locale_splits,_QMARK_scope,resids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,locale_split){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,resid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$2,lvar){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dict,(taoensso.tempura.scoped.cljs$core$IFn$_invoke$arity$3 ? taoensso.tempura.scoped.cljs$core$IFn$_invoke$arity$3(lvar,_QMARK_scope,resid) : taoensso.tempura.scoped.call(null,lvar,_QMARK_scope,resid)));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return cljs.core.reduced(cljs.core.reduced(cljs.core.reduced(res)));
} else {
return null;
}
}),acc__$1,locale_split);
}),acc,resids);
}),null,locale_splits);
});
taoensso.tempura.search_resids_STAR__cached = taoensso.encore.memoize_(taoensso.tempura.search_resids_STAR_);
taoensso.tempura.search_resids = (function taoensso$tempura$search_resids(cache_QMARK_,dict,locale_splits,_QMARK_scope,resids){
if(cljs.core.truth_(cache_QMARK_)){
return (taoensso.tempura.search_resids_STAR__cached.cljs$core$IFn$_invoke$arity$4 ? taoensso.tempura.search_resids_STAR__cached.cljs$core$IFn$_invoke$arity$4(dict,locale_splits,_QMARK_scope,resids) : taoensso.tempura.search_resids_STAR__cached.call(null,dict,locale_splits,_QMARK_scope,resids));
} else {
return taoensso.tempura.search_resids_STAR_(dict,locale_splits,_QMARK_scope,resids);
}
});
var merge_into_default_opts_68453 = taoensso.tempura.merge_into_default_opts;
var scoped_68454 = taoensso.tempura.scoped;
var search_resids_STAR__68455 = taoensso.tempura.search_resids_STAR_;
var search_resids_STAR__cached_68456 = taoensso.tempura.search_resids_STAR__cached;
var search_resids_68457 = taoensso.tempura.search_resids;
/**
 * Next gen Taoensso (tr)anslation API:
 * 
 *  (tr
 *    ;; Opts map to control behaviour:
 *    {:default-locale :en
 *     :dict ; Resource dictionary
 *     {:en {:missing "Missing translation"
 *           :example {:greet "Hello %1"
 *                     :farewell "Goodbye %1, it was nice to meet you!"}}}}
 * 
 *    ;; Descending-preference locales to try:
 *    [:fr-FR :en-GB-variation1]
 * 
 *    ;; Descending-preference dictionary resorces to try. May contain a
 *    ;; final non-keyword fallback:
 *    [:example/how-are-you? "How are you, %1?"]
 * 
 *    ;; Optional arbitrary args for insertion into compiled resource:
 *    ["Steve"])
 * 
 *  => "How are you, Steve?"
 * 
 * 
 *  Common opts (see `tempura/default-tr-opts` for default vals):
 * 
 *    :default-locale      ; Optional fallback locale to try when given
 *                         ; locales don't have the requested resource/s.
 * 
 *    :dict                ; Dictionary map of resources,
 *                         ; {<locale> {<k1> ... {<kn> <resource>}}}.
 *                         ; See also `tempura/example-dictionary`.
 * 
 *    :resource-compiler   ; (fn [resource]) -> [(fn [vargs]) -> <compiled-resource>].
 *                         ; Useful if you want to customize any part of how
 *                         ; dictionary resources are compiled.
 * 
 *    :missing-resource-fn ; (fn [{:keys [opts locales resource-ids resource-args]}]).
 *                         ; Called when requested resource/s cannot be
 *                         ; found. Useful for logging, etc. May return a
 *                         ; non-nil fallback resource value.
 * 
 *    :cache-dict?         ; Only reason you'd want this off is if
 *                         ; you're using :__load-resource imports and
 *                         ; and want dictionary to pick up changes.
 * 
 *    :cache-locales?      ; Client will usu. be dealing with a small
 *                         ; number of locales, the server often a
 *                         ; large number in the general case. `tr`
 *                         ; partials may want to enable cached locale
 *                         ; expansion (e.g. in the context of a
 *                         ; particular user's Ring request, etc.).
 * 
 *    :cache-resources?    ; For the very highest possible performance
 *                         ; when using a limited domain of locales +
 *                         ; resource ids.
 */
taoensso.tempura.tr = ((function (merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457){
return (function taoensso$tempura$tr(var_args){
var G__68420 = arguments.length;
switch (G__68420) {
case 3:
return taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457))
;

taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$3 = ((function (merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457){
return (function (opts,locales,resource_ids){
return taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$4(opts,locales,resource_ids,null);
});})(merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457))
;

taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$4 = ((function (merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457){
return (function (opts,locales,resource_ids,resource_args){
var e_68471 = (function (){try{if(cljs.core.vector_QMARK_(resource_ids)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68421){if((e68421 instanceof Error)){
var e = e68421;
return e;
} else {
throw e68421;

}
}})();
if((e_68471 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura",262,"(vector? resource-ids)",resource_ids,e_68471,null);
}

if(cljs.core.seq(resource_ids)){
var opts__$1 = (merge_into_default_opts_68453.cljs$core$IFn$_invoke$arity$2 ? merge_into_default_opts_68453.cljs$core$IFn$_invoke$arity$2(opts,taoensso.tempura._STAR_tr_opts_STAR_) : merge_into_default_opts_68453.call(null,opts,taoensso.tempura._STAR_tr_opts_STAR_));
var map__68423 = opts__$1;
var map__68423__$1 = (((((!((map__68423 == null))))?(((((map__68423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68423):map__68423);
var default_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761));
var dict = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"dict","dict",-1629964473));
var scope_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860));
var cache_dict_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"cache-dict?","cache-dict?",2012653536));
var cache_locales_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885));
var cache_resources_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword(null,"cache-resources?","cache-resources?",-247492358));
var locales__$1 = (((locales == null))?cljs.core.PersistentVector.EMPTY:(function (){var e = (function (){try{if(cljs.core.vector_QMARK_(locales)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68429){if((e68429 instanceof Error)){
var e = e68429;
return e;
} else {
throw e68429;

}
}})();
if((e == null)){
return locales;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura",273,"(vector? locales)",locales,e,null);
}
})());
var dict__$1 = (taoensso.tempura.impl.compile_dictionary.cljs$core$IFn$_invoke$arity$2 ? taoensso.tempura.impl.compile_dictionary.cljs$core$IFn$_invoke$arity$2(cache_dict_QMARK_,dict) : taoensso.tempura.impl.compile_dictionary.call(null,cache_dict_QMARK_,dict));
var locale_splits = (function (){var G__68431 = cache_locales_QMARK_;
var G__68432 = taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(locales__$1,default_locale);
return (taoensso.tempura.impl.expand_locales.cljs$core$IFn$_invoke$arity$2 ? taoensso.tempura.impl.expand_locales.cljs$core$IFn$_invoke$arity$2(G__68431,G__68432) : taoensso.tempura.impl.expand_locales.call(null,G__68431,G__68432));
})();
var _QMARK_fb_resource = (function (){var last_res = cljs.core.peek(resource_ids);
if((last_res instanceof cljs.core.Keyword)){
return null;
} else {
return last_res;
}
})();
var resource_ids__$1 = (cljs.core.truth_(_QMARK_fb_resource)?cljs.core.pop(resource_ids):resource_ids);
var resid_scope = (function (){var temp__5739__auto__ = scope_fn;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
})();
var _QMARK_matching_resource = (function (){var or__4131__auto__ = ((cljs.core.seq(resource_ids__$1))?(search_resids_68457.cljs$core$IFn$_invoke$arity$5 ? search_resids_68457.cljs$core$IFn$_invoke$arity$5(cache_resources_QMARK_,dict__$1,locale_splits,resid_scope,resource_ids__$1) : search_resids_68457.call(null,cache_resources_QMARK_,dict__$1,locale_splits,resid_scope,resource_ids__$1)):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = _QMARK_fb_resource;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__$1,new cljs.core.Keyword(null,"missing-resource-fn","missing-resource-fn",523544311));
if(cljs.core.truth_(temp__5735__auto__)){
var mrf = temp__5735__auto__;
var G__68436 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1,new cljs.core.Keyword(null,"locales","locales",1785635955),locales__$1,new cljs.core.Keyword(null,"resource-ids","resource-ids",709857638),resource_ids__$1,new cljs.core.Keyword(null,"resource-args","resource-args",-1316782806),resource_args], null);
return (mrf.cljs$core$IFn$_invoke$arity$1 ? mrf.cljs$core$IFn$_invoke$arity$1(G__68436) : mrf.call(null,G__68436));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var G__68437 = cache_resources_QMARK_;
var G__68438 = dict__$1;
var G__68439 = locale_splits;
var G__68440 = null;
var G__68441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing","missing",362507769)], null);
return (search_resids_68457.cljs$core$IFn$_invoke$arity$5 ? search_resids_68457.cljs$core$IFn$_invoke$arity$5(G__68437,G__68438,G__68439,G__68440,G__68441) : search_resids_68457.call(null,G__68437,G__68438,G__68439,G__68440,G__68441));
}
}
}
})();
var temp__5735__auto__ = _QMARK_matching_resource;
if(cljs.core.truth_(temp__5735__auto__)){
var r = temp__5735__auto__;
var resource_compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__$1,new cljs.core.Keyword(null,"resource-compiler","resource-compiler",579506905));
var vargs = (function (){var temp__5737__auto__ = resource_args;
if((temp__5737__auto__ == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
var args = temp__5737__auto__;
return taoensso.tempura.impl.vargs(args);
}
})();
var fexpr__68443 = (resource_compiler.cljs$core$IFn$_invoke$arity$1 ? resource_compiler.cljs$core$IFn$_invoke$arity$1(r) : resource_compiler.call(null,r));
return (fexpr__68443.cljs$core$IFn$_invoke$arity$1 ? fexpr__68443.cljs$core$IFn$_invoke$arity$1(vargs) : fexpr__68443.call(null,vargs));
} else {
return null;
}
} else {
return null;
}
});})(merge_into_default_opts_68453,scoped_68454,search_resids_STAR__68455,search_resids_STAR__cached_68456,search_resids_68457))
;

taoensso.tempura.tr.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=taoensso.tempura.js.map
