goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__57265 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57266 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57266;

try{var G__57267 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__57268 = container;
var G__57269 = ((function (G__57267,G__57268,_STAR_always_update_STAR__orig_val__57265,_STAR_always_update_STAR__temp_val__57266){
return (function (){
var _STAR_always_update_STAR__orig_val__57270 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57271 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57271;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57270;
}});})(G__57267,G__57268,_STAR_always_update_STAR__orig_val__57265,_STAR_always_update_STAR__temp_val__57266))
;
return module$node_modules$react_dom$index.render(G__57267,G__57268,G__57269);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57265;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__57276 = arguments.length;
switch (G__57276) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__57279_57298 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__57280_57299 = null;
var count__57281_57300 = (0);
var i__57282_57301 = (0);
while(true){
if((i__57282_57301 < count__57281_57300)){
var v_57302 = chunk__57280_57299.cljs$core$IIndexed$_nth$arity$2(null,i__57282_57301);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_57302);


var G__57304 = seq__57279_57298;
var G__57305 = chunk__57280_57299;
var G__57306 = count__57281_57300;
var G__57307 = (i__57282_57301 + (1));
seq__57279_57298 = G__57304;
chunk__57280_57299 = G__57305;
count__57281_57300 = G__57306;
i__57282_57301 = G__57307;
continue;
} else {
var temp__5735__auto___57308 = cljs.core.seq(seq__57279_57298);
if(temp__5735__auto___57308){
var seq__57279_57309__$1 = temp__5735__auto___57308;
if(cljs.core.chunked_seq_QMARK_(seq__57279_57309__$1)){
var c__4550__auto___57310 = cljs.core.chunk_first(seq__57279_57309__$1);
var G__57311 = cljs.core.chunk_rest(seq__57279_57309__$1);
var G__57312 = c__4550__auto___57310;
var G__57313 = cljs.core.count(c__4550__auto___57310);
var G__57314 = (0);
seq__57279_57298 = G__57311;
chunk__57280_57299 = G__57312;
count__57281_57300 = G__57313;
i__57282_57301 = G__57314;
continue;
} else {
var v_57315 = cljs.core.first(seq__57279_57309__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_57315);


var G__57316 = cljs.core.next(seq__57279_57309__$1);
var G__57317 = null;
var G__57318 = (0);
var G__57319 = (0);
seq__57279_57298 = G__57316;
chunk__57280_57299 = G__57317;
count__57281_57300 = G__57318;
i__57282_57301 = G__57319;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
