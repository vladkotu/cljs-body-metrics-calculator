goog.provide('body_index_calculator.components.common');
goog.require('cljs.core');
goog.require('body_index_calculator.mui_theme');
var module$node_modules$$material_ui$styles$ThemeProvider$index=shadow.js.require("module$node_modules$$material_ui$styles$ThemeProvider$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
var module$node_modules$$material_ui$core$Paper$index=shadow.js.require("module$node_modules$$material_ui$core$Paper$index", {});
var module$node_modules$$material_ui$core$Box$index=shadow.js.require("module$node_modules$$material_ui$core$Box$index", {});
var module$node_modules$$material_ui$core$CssBaseline$index=shadow.js.require("module$node_modules$$material_ui$core$CssBaseline$index", {});
body_index_calculator.components.common.with_theme = (function body_index_calculator$components$common$with_theme(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50126 = arguments.length;
var i__4731__auto___50127 = (0);
while(true){
if((i__4731__auto___50127 < len__4730__auto___50126)){
args__4736__auto__.push((arguments[i__4731__auto___50127]));

var G__50129 = (i__4731__auto___50127 + (1));
i__4731__auto___50127 = G__50129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return body_index_calculator.components.common.with_theme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

body_index_calculator.components.common.with_theme.cljs$core$IFn$_invoke$arity$variadic = (function (p__50111,children){
var map__50112 = p__50111;
var map__50112__$1 = (((((!((map__50112 == null))))?(((((map__50112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50112):map__50112);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50112__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$styles$ThemeProvider$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),body_index_calculator.mui_theme.create_js_theme(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),theme], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$CssBaseline$index.default,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null)], null);
});

body_index_calculator.components.common.with_theme.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
body_index_calculator.components.common.with_theme.cljs$lang$applyTo = (function (seq50108){
var G__50109 = cljs.core.first(seq50108);
var seq50108__$1 = cljs.core.next(seq50108);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50109,seq50108__$1);
});

body_index_calculator.components.common.item_box_paper = (function body_index_calculator$components$common$item_box_paper(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50133 = arguments.length;
var i__4731__auto___50134 = (0);
while(true){
if((i__4731__auto___50134 < len__4730__auto___50133)){
args__4736__auto__.push((arguments[i__4731__auto___50134]));

var G__50135 = (i__4731__auto___50134 + (1));
i__4731__auto___50134 = G__50135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return body_index_calculator.components.common.item_box_paper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

body_index_calculator.components.common.item_box_paper.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.Keyword(null,"outer","outer",-375185956).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Paper$index.default,new cljs.core.Keyword(null,"paper","paper",-836673493).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(props),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null)], null)], null)], null);
});

body_index_calculator.components.common.item_box_paper.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
body_index_calculator.components.common.item_box_paper.cljs$lang$applyTo = (function (seq50114){
var G__50115 = cljs.core.first(seq50114);
var seq50114__$1 = cljs.core.next(seq50114);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50115,seq50114__$1);
});


//# sourceMappingURL=body_index_calculator.components.common.js.map
