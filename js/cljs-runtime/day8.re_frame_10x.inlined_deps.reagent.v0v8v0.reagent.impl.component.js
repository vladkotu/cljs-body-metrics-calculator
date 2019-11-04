goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__51435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__51436 = (i + (1));
m = G__51435;
i = G__51436;
continue;
} else {
return m;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.extract_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.extract_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$props_argv(c,p){
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5737__auto__;
return a;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$get_argv(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv(c,(c["props"]));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.extract_props(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__51255 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__51255);
})());
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.extract_children(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__51258 = c;
var G__51258__$1 = (((G__51258 == null))?null:G__51258.prototype);
if((G__51258__$1 == null)){
return null;
} else {
return (G__51258__$1["reagentRender"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__51262 = c;
var G__51262__$1 = (((G__51262 == null))?null:G__51262.prototype);
if((G__51262__$1 == null)){
return null;
} else {
return (G__51262__$1["render"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cached_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cache_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__51328 = n;
switch (G__51328) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__51455__delegate = function (args){
var G__51333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__51333) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element.call(null,G__51333));
};
var G__51455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51456__i = 0, G__51456__a = new Array(arguments.length -  0);
while (G__51456__i < G__51456__a.length) {G__51456__a[G__51456__i] = arguments[G__51456__i + 0]; ++G__51456__i;}
  args = new cljs.core.IndexedSeq(G__51456__a,0,null);
} 
return G__51455__delegate.call(this,args);};
G__51455.cljs$lang$maxFixedArity = 0;
G__51455.cljs$lang$applyTo = (function (arglist__51457){
var args = cljs.core.seq(arglist__51457);
return G__51455__delegate(args);
});
G__51455.cljs$core$IFn$_invoke$arity$variadic = G__51455__delegate;
return G__51455;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__51459 = c;
c = G__51459;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.do_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__51336 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__51337 = c;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__51337;

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)))].join(''));
} else {
}
}
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__51336;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$render(){
var c = this;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run_in_reaction(((function (rat,c){
return (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.do_render(c);
});})(rat,c))
,c,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.custom_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper(key,f){
var G__51374 = key;
var G__51374__$1 = (((G__51374 instanceof cljs.core.Keyword))?G__51374.fqn:null);
switch (G__51374__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.state_atom(c),f.call(c,c));
});
;})(G__51374,G__51374__$1))

break;
case "componentWillReceiveProps":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__51374,G__51374__$1))

break;
case "shouldComponentUpdate":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4131__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_argv(c),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__51374,G__51374__$1))

break;
case "componentWillUpdate":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__51374,G__51374__$1))

break;
case "componentDidUpdate":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.props_argv(c,oldprops));
});
;})(G__51374,G__51374__$1))

break;
case "componentWillMount":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__51374,G__51374__$1))

break;
case "componentDidMount":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__51374,G__51374__$1))

break;
case "componentWillUnmount":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__51389_51475 = (c["cljsRatom"]);
if((G__51389_51475 == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_(G__51389_51475);
}

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__51374,G__51374__$1))

break;
case "componentDidCatch":
return ((function (G__51374,G__51374__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__51374,G__51374__$1))

break;
default:
return null;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.dash_to_camel = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.memoize_1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.dash_to_camel);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.camelify_map_keys = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.add_obligatory = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.obligatory,fun_map], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.wrap_funs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$wrap_funs(fmap){
var renders_51477 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_51478 = cljs.core.first(cljs.core.vals(renders_51477));
if((cljs.core.count(renders_51477) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_51477))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_51478)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_51478], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4131__auto__ = render_fun;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__51398 = name;
switch (G__51398) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv(((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_wrapper(k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.static_fns)], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.map_to_js = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__51400 = o;
(G__51400[cljs.core.name(k)] = v);

return G__51400;
}),({}),m);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cljsify = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$cljsify(body){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.map_to_js(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.wrap_funs(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.add_obligatory(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.camelify_map_keys(body))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__51402 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__51402);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fiber_component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__51403 = fiber;
var G__51403__$1 = (((G__51403 == null))?null:(G__51403["type"]));
if((G__51403__$1 == null)){
return null;
} else {
return (G__51403__$1["displayName"]);
}
})();
var parent = (function (){var G__51404 = fiber;
if((G__51404 == null)){
return null;
} else {
return (G__51404["return"]);
}
})();
var path = (function (){var G__51406 = parent;
var G__51406__$1 = (((G__51406 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__51406) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fiber_component_path.call(null,G__51406)));
if((G__51406__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51406__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$component_path(c){
var temp__5733__auto__ = (function (){var or__4131__auto__ = (function (){var G__51408 = c;
if((G__51408 == null)){
return null;
} else {
return (G__51408["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__51410 = c;
if((G__51410 == null)){
return null;
} else {
return G__51410._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var fiber = temp__5733__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__4131__auto__ = (function (){var G__51412 = c;
if((G__51412 == null)){
return null;
} else {
return (G__51412["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__51414 = c;
if((G__51414 == null)){
return null;
} else {
return G__51414._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4131__auto__ = (function (){var G__51417 = instance;
if((G__51417 == null)){
return null;
} else {
return (G__51417["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__51418 = instance;
if((G__51418 == null)){
return null;
} else {
return G__51418._currentElement;
}
}
})();
var name = (function (){var G__51419 = elem;
var G__51419__$1 = (((G__51419 == null))?null:(G__51419["type"]));
if((G__51419__$1 == null)){
return null;
} else {
return (G__51419__$1["displayName"]);
}
})();
var owner = (function (){var or__4131__auto__ = (function (){var G__51421 = elem;
if((G__51421 == null)){
return null;
} else {
return (G__51421["_owner"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__51422 = elem;
if((G__51422 == null)){
return null;
} else {
return G__51422._owner;
}
}
})();
var path = (function (){var G__51423 = owner;
var G__51423__$1 = (((G__51423 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__51423) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path.call(null,G__51423)));
if((G__51423__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51423__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$comp_name(){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4131__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__51424 = c;
var G__51424__$1 = (((G__51424 == null))?null:G__51424.constructor);
if((G__51424__$1 == null)){
return null;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.fun_name(G__51424__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fn_to_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(f)) && ((!(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class(withrender);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,res);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$as_class(tag){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.cached_react_class(tag);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5737__auto__;
return cached_class;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$component$reactify_component(comp){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.js.map
