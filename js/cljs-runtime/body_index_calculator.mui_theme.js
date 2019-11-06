goog.provide('body_index_calculator.mui_theme');
goog.require('cljs.core');
goog.require('body_index_calculator.helpers');
var module$node_modules$$material_ui$core$styles$createMuiTheme=shadow.js.require("module$node_modules$$material_ui$core$styles$createMuiTheme", {});
var module$node_modules$$material_ui$core$colors$lightBlue=shadow.js.require("module$node_modules$$material_ui$core$colors$lightBlue", {});
var module$node_modules$$material_ui$core$colors$cyan=shadow.js.require("module$node_modules$$material_ui$core$colors$cyan", {});
body_index_calculator.mui_theme.create_js_theme = (function body_index_calculator$mui_theme$create_js_theme(p__69005){
var map__69006 = p__69005;
var map__69006__$1 = (((((!((map__69006 == null))))?(((((map__69006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69006):map__69006);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69006__$1,new cljs.core.Keyword(null,"type","type",1174270348),"dark");
var primary = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69006__$1,new cljs.core.Keyword(null,"primary","primary",817773892),module$node_modules$$material_ui$core$colors$lightBlue.default);
var secondary = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69006__$1,new cljs.core.Keyword(null,"secondary","secondary",-669381460),module$node_modules$$material_ui$core$colors$cyan.default);
var G__69009 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"primary","primary",817773892),primary,new cljs.core.Keyword(null,"secondary","secondary",-669381460),secondary], null)], null));
return module$node_modules$$material_ui$core$styles$createMuiTheme.default(G__69009);
});
body_index_calculator.mui_theme.js_theme = body_index_calculator.mui_theme.create_js_theme(cljs.core.PersistentArrayMap.EMPTY);
body_index_calculator.mui_theme.theme = body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$1(body_index_calculator.mui_theme.js_theme);
body_index_calculator.mui_theme.primary_color = (function body_index_calculator$mui_theme$primary_color(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body_index_calculator.mui_theme.theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"main","main",-2117802661)], null));
});
body_index_calculator.mui_theme.secondary_color = (function body_index_calculator$mui_theme$secondary_color(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body_index_calculator.mui_theme.theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"main","main",-2117802661)], null));
});
body_index_calculator.mui_theme.spacing = (function body_index_calculator$mui_theme$spacing(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69021 = arguments.length;
var i__4731__auto___69022 = (0);
while(true){
if((i__4731__auto___69022 < len__4730__auto___69021)){
args__4736__auto__.push((arguments[i__4731__auto___69022]));

var G__69023 = (i__4731__auto___69022 + (1));
i__4731__auto___69022 = G__69023;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body_index_calculator.mui_theme.js_theme.spacing,args);
});

body_index_calculator.mui_theme.spacing.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
body_index_calculator.mui_theme.spacing.cljs$lang$applyTo = (function (seq69014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69014));
});


//# sourceMappingURL=body_index_calculator.mui_theme.js.map
