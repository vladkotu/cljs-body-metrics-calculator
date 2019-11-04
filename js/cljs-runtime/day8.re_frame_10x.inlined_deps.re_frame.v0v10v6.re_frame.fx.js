goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52972 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52973 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52973;

try{try{var seq__52975 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52976 = null;
var count__52977 = (0);
var i__52978 = (0);
while(true){
if((i__52978 < count__52977)){
var vec__52985 = chunk__52976.cljs$core$IIndexed$_nth$arity$2(null,i__52978);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(1),null);
var temp__5733__auto___53051 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53051)){
var effect_fn_53052 = temp__5733__auto___53051;
(effect_fn_53052.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53052.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53052.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53053 = seq__52975;
var G__53054 = chunk__52976;
var G__53055 = count__52977;
var G__53056 = (i__52978 + (1));
seq__52975 = G__53053;
chunk__52976 = G__53054;
count__52977 = G__53055;
i__52978 = G__53056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52975);
if(temp__5735__auto__){
var seq__52975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52975__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52975__$1);
var G__53057 = cljs.core.chunk_rest(seq__52975__$1);
var G__53058 = c__4550__auto__;
var G__53059 = cljs.core.count(c__4550__auto__);
var G__53060 = (0);
seq__52975 = G__53057;
chunk__52976 = G__53058;
count__52977 = G__53059;
i__52978 = G__53060;
continue;
} else {
var vec__52992 = cljs.core.first(seq__52975__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52992,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52992,(1),null);
var temp__5733__auto___53061 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53061)){
var effect_fn_53062 = temp__5733__auto___53061;
(effect_fn_53062.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53062.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53062.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53067 = cljs.core.next(seq__52975__$1);
var G__53068 = null;
var G__53069 = (0);
var G__53070 = (0);
seq__52975 = G__53067;
chunk__52976 = G__53068;
count__52977 = G__53069;
i__52978 = G__53070;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52692__auto___53071 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__52693__auto___53072 = (end__52692__auto___53071 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52693__auto___53072,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__52692__auto___53071);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52972;
}} else {
var seq__52995 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52996 = null;
var count__52997 = (0);
var i__52998 = (0);
while(true){
if((i__52998 < count__52997)){
var vec__53007 = chunk__52996.cljs$core$IIndexed$_nth$arity$2(null,i__52998);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(1),null);
var temp__5733__auto___53081 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53081)){
var effect_fn_53082 = temp__5733__auto___53081;
(effect_fn_53082.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53082.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53082.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53083 = seq__52995;
var G__53084 = chunk__52996;
var G__53085 = count__52997;
var G__53086 = (i__52998 + (1));
seq__52995 = G__53083;
chunk__52996 = G__53084;
count__52997 = G__53085;
i__52998 = G__53086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52995);
if(temp__5735__auto__){
var seq__52995__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52995__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52995__$1);
var G__53087 = cljs.core.chunk_rest(seq__52995__$1);
var G__53088 = c__4550__auto__;
var G__53089 = cljs.core.count(c__4550__auto__);
var G__53090 = (0);
seq__52995 = G__53087;
chunk__52996 = G__53088;
count__52997 = G__53089;
i__52998 = G__53090;
continue;
} else {
var vec__53011 = cljs.core.first(seq__52995__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(1),null);
var temp__5733__auto___53091 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53091)){
var effect_fn_53092 = temp__5733__auto___53091;
(effect_fn_53092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53092.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53093 = cljs.core.next(seq__52995__$1);
var G__53094 = null;
var G__53095 = (0);
var G__53096 = (0);
seq__52995 = G__53093;
chunk__52996 = G__53094;
count__52997 = G__53095;
i__52998 = G__53096;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53015 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53016 = null;
var count__53017 = (0);
var i__53018 = (0);
while(true){
if((i__53018 < count__53017)){
var map__53026 = chunk__53016.cljs$core$IIndexed$_nth$arity$2(null,i__53018);
var map__53026__$1 = (((((!((map__53026 == null))))?(((((map__53026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53026):map__53026);
var effect = map__53026__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53026__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53026__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__53015,chunk__53016,count__53017,i__53018,map__53026,map__53026__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__53015,chunk__53016,count__53017,i__53018,map__53026,map__53026__$1,effect,ms,dispatch))
,ms);
}


var G__53097 = seq__53015;
var G__53098 = chunk__53016;
var G__53099 = count__53017;
var G__53100 = (i__53018 + (1));
seq__53015 = G__53097;
chunk__53016 = G__53098;
count__53017 = G__53099;
i__53018 = G__53100;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53015);
if(temp__5735__auto__){
var seq__53015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53015__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53015__$1);
var G__53101 = cljs.core.chunk_rest(seq__53015__$1);
var G__53102 = c__4550__auto__;
var G__53103 = cljs.core.count(c__4550__auto__);
var G__53104 = (0);
seq__53015 = G__53101;
chunk__53016 = G__53102;
count__53017 = G__53103;
i__53018 = G__53104;
continue;
} else {
var map__53031 = cljs.core.first(seq__53015__$1);
var map__53031__$1 = (((((!((map__53031 == null))))?(((((map__53031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53031):map__53031);
var effect = map__53031__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__53015,chunk__53016,count__53017,i__53018,map__53031,map__53031__$1,effect,ms,dispatch,seq__53015__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__53015,chunk__53016,count__53017,i__53018,map__53031,map__53031__$1,effect,ms,dispatch,seq__53015__$1,temp__5735__auto__))
,ms);
}


var G__53107 = cljs.core.next(seq__53015__$1);
var G__53108 = null;
var G__53109 = (0);
var G__53110 = (0);
seq__53015 = G__53107;
chunk__53016 = G__53108;
count__53017 = G__53109;
i__53018 = G__53110;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__53039 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53040 = null;
var count__53041 = (0);
var i__53042 = (0);
while(true){
if((i__53042 < count__53041)){
var event = chunk__53040.cljs$core$IIndexed$_nth$arity$2(null,i__53042);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__53112 = seq__53039;
var G__53113 = chunk__53040;
var G__53114 = count__53041;
var G__53115 = (i__53042 + (1));
seq__53039 = G__53112;
chunk__53040 = G__53113;
count__53041 = G__53114;
i__53042 = G__53115;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53039);
if(temp__5735__auto__){
var seq__53039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53039__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53039__$1);
var G__53117 = cljs.core.chunk_rest(seq__53039__$1);
var G__53118 = c__4550__auto__;
var G__53119 = cljs.core.count(c__4550__auto__);
var G__53120 = (0);
seq__53039 = G__53117;
chunk__53040 = G__53118;
count__53041 = G__53119;
i__53042 = G__53120;
continue;
} else {
var event = cljs.core.first(seq__53039__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__53121 = cljs.core.next(seq__53039__$1);
var G__53122 = null;
var G__53123 = (0);
var G__53124 = (0);
seq__53039 = G__53121;
chunk__53040 = G__53122;
count__53041 = G__53123;
i__53042 = G__53124;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53043 = cljs.core.seq(value);
var chunk__53044 = null;
var count__53045 = (0);
var i__53046 = (0);
while(true){
if((i__53046 < count__53045)){
var event = chunk__53044.cljs$core$IIndexed$_nth$arity$2(null,i__53046);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53125 = seq__53043;
var G__53126 = chunk__53044;
var G__53127 = count__53045;
var G__53128 = (i__53046 + (1));
seq__53043 = G__53125;
chunk__53044 = G__53126;
count__53045 = G__53127;
i__53046 = G__53128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53043);
if(temp__5735__auto__){
var seq__53043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53043__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53043__$1);
var G__53130 = cljs.core.chunk_rest(seq__53043__$1);
var G__53131 = c__4550__auto__;
var G__53132 = cljs.core.count(c__4550__auto__);
var G__53133 = (0);
seq__53043 = G__53130;
chunk__53044 = G__53131;
count__53045 = G__53132;
i__53046 = G__53133;
continue;
} else {
var event = cljs.core.first(seq__53043__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53135 = cljs.core.next(seq__53043__$1);
var G__53136 = null;
var G__53137 = (0);
var G__53138 = (0);
seq__53043 = G__53135;
chunk__53044 = G__53136;
count__53045 = G__53137;
i__53046 = G__53138;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.js.map
