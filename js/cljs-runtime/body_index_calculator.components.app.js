goog.provide('body_index_calculator.components.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
goog.require('clojure.string');
goog.require('body_index_calculator.components.header');
goog.require('body_index_calculator.components.footer');
goog.require('body_index_calculator.components.form');
goog.require('body_index_calculator.components.dash');
goog.require('body_index_calculator.components.result');
goog.require('body_index_calculator.components.common');
var module$node_modules$$material_ui$core$Box$index=shadow.js.require("module$node_modules$$material_ui$core$Box$index", {});
var module$node_modules$$material_ui$core$Container$index=shadow.js.require("module$node_modules$$material_ui$core$Container$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
var module$node_modules$$material_ui$core$Hidden$index=shadow.js.require("module$node_modules$$material_ui$core$Hidden$index", {});
body_index_calculator.components.app.log = (function body_index_calculator$components$app$log(m){
if(cljs.core.truth_(goog.DEBUG)){
return console.log(m);
} else {
return null;
}
});
body_index_calculator.components.app.error_boundary = (function body_index_calculator$components$app$error_boundary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50528 = arguments.length;
var i__4731__auto___50529 = (0);
while(true){
if((i__4731__auto___50529 < len__4730__auto___50528)){
args__4736__auto__.push((arguments[i__4731__auto___50529]));

var G__50530 = (i__4731__auto___50529 + (1));
i__4731__auto___50529 = G__50530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return body_index_calculator.components.app.error_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

body_index_calculator.components.app.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (comps){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),((function (error){
return (function (e){
cljs.core.reset_BANG_(error,e);

return ({"error": true});
});})(error))
,new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),((function (error){
return (function (_,error__$1,___$1){
body_index_calculator.components.app.log(new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810));

var seq__50521 = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(error__$1.message),"\n"));
var chunk__50522 = null;
var count__50523 = (0);
var i__50524 = (0);
while(true){
if((i__50524 < count__50523)){
var r = chunk__50522.cljs$core$IIndexed$_nth$arity$2(null,i__50524);
body_index_calculator.components.app.log(r);


var G__50531 = seq__50521;
var G__50532 = chunk__50522;
var G__50533 = count__50523;
var G__50534 = (i__50524 + (1));
seq__50521 = G__50531;
chunk__50522 = G__50532;
count__50523 = G__50533;
i__50524 = G__50534;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50521);
if(temp__5735__auto__){
var seq__50521__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50521__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50521__$1);
var G__50535 = cljs.core.chunk_rest(seq__50521__$1);
var G__50536 = c__4550__auto__;
var G__50537 = cljs.core.count(c__4550__auto__);
var G__50538 = (0);
seq__50521 = G__50535;
chunk__50522 = G__50536;
count__50523 = G__50537;
i__50524 = G__50538;
continue;
} else {
var r = cljs.core.first(seq__50521__$1);
body_index_calculator.components.app.log(r);


var G__50539 = cljs.core.next(seq__50521__$1);
var G__50540 = null;
var G__50541 = (0);
var G__50542 = (0);
seq__50521 = G__50539;
chunk__50522 = G__50540;
count__50523 = G__50541;
i__50524 = G__50542;
continue;
}
} else {
return null;
}
}
break;
}
});})(error))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (error){
return (function (){
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Something went wrong.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (error){
return (function (){
return cljs.core.reset_BANG_(error,null);
});})(error))
], null),"Try again"], null)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),comps);
}
});})(error))
], null));
});

body_index_calculator.components.app.error_boundary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
body_index_calculator.components.app.error_boundary.cljs$lang$applyTo = (function (seq50520){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50520));
});

body_index_calculator.components.app.app = (function body_index_calculator$components$app$app(){
var with_let50525 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50525","with-let50525",-1967234996));
var temp__5739__auto___50543 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50543 == null)){
} else {
var c__45709__auto___50544 = temp__5739__auto___50543;
if((with_let50525.generation === c__45709__auto___50544.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50525.generation = c__45709__auto___50544.ratomGeneration;
}


var init50526 = (with_let50525.length === (0));
var theme = ((init50526)?(with_let50525[(0)] = (function (){var G__50527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50527) : re_frame.core.subscribe.call(null,G__50527));
})()):(with_let50525[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.common.with_theme,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.name(cljs.core.deref(theme))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Container$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fixed","fixed",-562004358),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mb","mb",1534459853),(9)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.header.header], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(1),new cljs.core.Keyword(null,"md","md",707286655),(2)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Hidden$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lg-up","lg-up",849846084),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.common.item_box_paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.Keyword(null,"outer","outer",-375185956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(1),new cljs.core.Keyword(null,"md","md",707286655),(2)], null)], null),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.dash.dash], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.common.item_box_paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(4)], null),new cljs.core.Keyword(null,"outer","outer",-375185956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(1),new cljs.core.Keyword(null,"md","md",707286655),(2)], null),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"md","md",707286655),(2)], null)], null),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.form], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.common.item_box_paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(8)], null),new cljs.core.Keyword(null,"outer","outer",-375185956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(1),new cljs.core.Keyword(null,"md","md",707286655),(2)], null),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"md","md",707286655),(2)], null)], null),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.result_table], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.footer.footer], null)], null);

return res__45710__auto__;
});

//# sourceMappingURL=body_index_calculator.components.app.js.map
