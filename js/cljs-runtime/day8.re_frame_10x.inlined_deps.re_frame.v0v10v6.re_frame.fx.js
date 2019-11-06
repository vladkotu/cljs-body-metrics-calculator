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
var _STAR_current_trace_STAR__orig_val__53457 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53458 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53458;

try{try{var seq__53459 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53460 = null;
var count__53461 = (0);
var i__53462 = (0);
while(true){
if((i__53462 < count__53461)){
var vec__53469 = chunk__53460.cljs$core$IIndexed$_nth$arity$2(null,i__53462);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53469,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53469,(1),null);
var temp__5733__auto___53527 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53527)){
var effect_fn_53528 = temp__5733__auto___53527;
(effect_fn_53528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53528.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53529 = seq__53459;
var G__53530 = chunk__53460;
var G__53531 = count__53461;
var G__53532 = (i__53462 + (1));
seq__53459 = G__53529;
chunk__53460 = G__53530;
count__53461 = G__53531;
i__53462 = G__53532;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53459);
if(temp__5735__auto__){
var seq__53459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53459__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53459__$1);
var G__53533 = cljs.core.chunk_rest(seq__53459__$1);
var G__53534 = c__4550__auto__;
var G__53535 = cljs.core.count(c__4550__auto__);
var G__53536 = (0);
seq__53459 = G__53533;
chunk__53460 = G__53534;
count__53461 = G__53535;
i__53462 = G__53536;
continue;
} else {
var vec__53472 = cljs.core.first(seq__53459__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53472,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53472,(1),null);
var temp__5733__auto___53537 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53537)){
var effect_fn_53538 = temp__5733__auto___53537;
(effect_fn_53538.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53538.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53538.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53539 = cljs.core.next(seq__53459__$1);
var G__53540 = null;
var G__53541 = (0);
var G__53542 = (0);
seq__53459 = G__53539;
chunk__53460 = G__53540;
count__53461 = G__53541;
i__53462 = G__53542;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__53150__auto___53543 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__53151__auto___53544 = (end__53150__auto___53543 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53151__auto___53544,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__53150__auto___53543);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53457;
}} else {
var seq__53475 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53476 = null;
var count__53477 = (0);
var i__53478 = (0);
while(true){
if((i__53478 < count__53477)){
var vec__53488 = chunk__53476.cljs$core$IIndexed$_nth$arity$2(null,i__53478);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488,(1),null);
var temp__5733__auto___53545 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53545)){
var effect_fn_53546 = temp__5733__auto___53545;
(effect_fn_53546.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53546.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53546.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53547 = seq__53475;
var G__53548 = chunk__53476;
var G__53549 = count__53477;
var G__53550 = (i__53478 + (1));
seq__53475 = G__53547;
chunk__53476 = G__53548;
count__53477 = G__53549;
i__53478 = G__53550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53475);
if(temp__5735__auto__){
var seq__53475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53475__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53475__$1);
var G__53551 = cljs.core.chunk_rest(seq__53475__$1);
var G__53552 = c__4550__auto__;
var G__53553 = cljs.core.count(c__4550__auto__);
var G__53554 = (0);
seq__53475 = G__53551;
chunk__53476 = G__53552;
count__53477 = G__53553;
i__53478 = G__53554;
continue;
} else {
var vec__53491 = cljs.core.first(seq__53475__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53491,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53491,(1),null);
var temp__5733__auto___53555 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53555)){
var effect_fn_53556 = temp__5733__auto___53555;
(effect_fn_53556.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53556.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53556.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53557 = cljs.core.next(seq__53475__$1);
var G__53558 = null;
var G__53559 = (0);
var G__53560 = (0);
seq__53475 = G__53557;
chunk__53476 = G__53558;
count__53477 = G__53559;
i__53478 = G__53560;
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
var seq__53494 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53495 = null;
var count__53496 = (0);
var i__53497 = (0);
while(true){
if((i__53497 < count__53496)){
var map__53507 = chunk__53495.cljs$core$IIndexed$_nth$arity$2(null,i__53497);
var map__53507__$1 = (((((!((map__53507 == null))))?(((((map__53507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53507):map__53507);
var effect = map__53507__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53507__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53507__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__53494,chunk__53495,count__53496,i__53497,map__53507,map__53507__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__53494,chunk__53495,count__53496,i__53497,map__53507,map__53507__$1,effect,ms,dispatch))
,ms);
}


var G__53561 = seq__53494;
var G__53562 = chunk__53495;
var G__53563 = count__53496;
var G__53564 = (i__53497 + (1));
seq__53494 = G__53561;
chunk__53495 = G__53562;
count__53496 = G__53563;
i__53497 = G__53564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53494);
if(temp__5735__auto__){
var seq__53494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53494__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53494__$1);
var G__53565 = cljs.core.chunk_rest(seq__53494__$1);
var G__53566 = c__4550__auto__;
var G__53567 = cljs.core.count(c__4550__auto__);
var G__53568 = (0);
seq__53494 = G__53565;
chunk__53495 = G__53566;
count__53496 = G__53567;
i__53497 = G__53568;
continue;
} else {
var map__53517 = cljs.core.first(seq__53494__$1);
var map__53517__$1 = (((((!((map__53517 == null))))?(((((map__53517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53517):map__53517);
var effect = map__53517__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__53494,chunk__53495,count__53496,i__53497,map__53517,map__53517__$1,effect,ms,dispatch,seq__53494__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__53494,chunk__53495,count__53496,i__53497,map__53517,map__53517__$1,effect,ms,dispatch,seq__53494__$1,temp__5735__auto__))
,ms);
}


var G__53569 = cljs.core.next(seq__53494__$1);
var G__53570 = null;
var G__53571 = (0);
var G__53572 = (0);
seq__53494 = G__53569;
chunk__53495 = G__53570;
count__53496 = G__53571;
i__53497 = G__53572;
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
var seq__53519 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53520 = null;
var count__53521 = (0);
var i__53522 = (0);
while(true){
if((i__53522 < count__53521)){
var event = chunk__53520.cljs$core$IIndexed$_nth$arity$2(null,i__53522);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__53573 = seq__53519;
var G__53574 = chunk__53520;
var G__53575 = count__53521;
var G__53576 = (i__53522 + (1));
seq__53519 = G__53573;
chunk__53520 = G__53574;
count__53521 = G__53575;
i__53522 = G__53576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53519);
if(temp__5735__auto__){
var seq__53519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53519__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53519__$1);
var G__53577 = cljs.core.chunk_rest(seq__53519__$1);
var G__53578 = c__4550__auto__;
var G__53579 = cljs.core.count(c__4550__auto__);
var G__53580 = (0);
seq__53519 = G__53577;
chunk__53520 = G__53578;
count__53521 = G__53579;
i__53522 = G__53580;
continue;
} else {
var event = cljs.core.first(seq__53519__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__53581 = cljs.core.next(seq__53519__$1);
var G__53582 = null;
var G__53583 = (0);
var G__53584 = (0);
seq__53519 = G__53581;
chunk__53520 = G__53582;
count__53521 = G__53583;
i__53522 = G__53584;
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
var seq__53523 = cljs.core.seq(value);
var chunk__53524 = null;
var count__53525 = (0);
var i__53526 = (0);
while(true){
if((i__53526 < count__53525)){
var event = chunk__53524.cljs$core$IIndexed$_nth$arity$2(null,i__53526);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53587 = seq__53523;
var G__53588 = chunk__53524;
var G__53589 = count__53525;
var G__53590 = (i__53526 + (1));
seq__53523 = G__53587;
chunk__53524 = G__53588;
count__53525 = G__53589;
i__53526 = G__53590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53523);
if(temp__5735__auto__){
var seq__53523__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53523__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53523__$1);
var G__53591 = cljs.core.chunk_rest(seq__53523__$1);
var G__53592 = c__4550__auto__;
var G__53593 = cljs.core.count(c__4550__auto__);
var G__53594 = (0);
seq__53523 = G__53591;
chunk__53524 = G__53592;
count__53525 = G__53593;
i__53526 = G__53594;
continue;
} else {
var event = cljs.core.first(seq__53523__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53595 = cljs.core.next(seq__53523__$1);
var G__53596 = null;
var G__53597 = (0);
var G__53598 = (0);
seq__53523 = G__53595;
chunk__53524 = G__53596;
count__53525 = G__53597;
i__53526 = G__53598;
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
