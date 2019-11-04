goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__57607 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__57608 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__57608;

try{try{var seq__57610 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__57611 = null;
var count__57612 = (0);
var i__57613 = (0);
while(true){
if((i__57613 < count__57612)){
var vec__57620 = chunk__57611.cljs$core$IIndexed$_nth$arity$2(null,i__57613);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57620,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57620,(1),null);
var temp__5733__auto___57699 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57699)){
var effect_fn_57700 = temp__5733__auto___57699;
(effect_fn_57700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57700.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57701 = seq__57610;
var G__57702 = chunk__57611;
var G__57703 = count__57612;
var G__57704 = (i__57613 + (1));
seq__57610 = G__57701;
chunk__57611 = G__57702;
count__57612 = G__57703;
i__57613 = G__57704;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57610);
if(temp__5735__auto__){
var seq__57610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57610__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57610__$1);
var G__57706 = cljs.core.chunk_rest(seq__57610__$1);
var G__57707 = c__4550__auto__;
var G__57708 = cljs.core.count(c__4550__auto__);
var G__57709 = (0);
seq__57610 = G__57706;
chunk__57611 = G__57707;
count__57612 = G__57708;
i__57613 = G__57709;
continue;
} else {
var vec__57623 = cljs.core.first(seq__57610__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57623,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57623,(1),null);
var temp__5733__auto___57710 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57710)){
var effect_fn_57711 = temp__5733__auto___57710;
(effect_fn_57711.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57711.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57711.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57712 = cljs.core.next(seq__57610__$1);
var G__57713 = null;
var G__57714 = (0);
var G__57715 = (0);
seq__57610 = G__57712;
chunk__57611 = G__57713;
count__57612 = G__57714;
i__57613 = G__57715;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__57304__auto___57718 = re_frame.interop.now();
var duration__57305__auto___57719 = (end__57304__auto___57718 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__57305__auto___57719,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__57304__auto___57718);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__57607;
}} else {
var seq__57627 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__57628 = null;
var count__57629 = (0);
var i__57630 = (0);
while(true){
if((i__57630 < count__57629)){
var vec__57641 = chunk__57628.cljs$core$IIndexed$_nth$arity$2(null,i__57630);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57641,(1),null);
var temp__5733__auto___57722 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57722)){
var effect_fn_57723 = temp__5733__auto___57722;
(effect_fn_57723.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57723.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57723.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57726 = seq__57627;
var G__57727 = chunk__57628;
var G__57728 = count__57629;
var G__57729 = (i__57630 + (1));
seq__57627 = G__57726;
chunk__57628 = G__57727;
count__57629 = G__57728;
i__57630 = G__57729;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57627);
if(temp__5735__auto__){
var seq__57627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57627__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57627__$1);
var G__57732 = cljs.core.chunk_rest(seq__57627__$1);
var G__57733 = c__4550__auto__;
var G__57734 = cljs.core.count(c__4550__auto__);
var G__57735 = (0);
seq__57627 = G__57732;
chunk__57628 = G__57733;
count__57629 = G__57734;
i__57630 = G__57735;
continue;
} else {
var vec__57644 = cljs.core.first(seq__57627__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57644,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57644,(1),null);
var temp__5733__auto___57743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57743)){
var effect_fn_57744 = temp__5733__auto___57743;
(effect_fn_57744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57747 = cljs.core.next(seq__57627__$1);
var G__57748 = null;
var G__57749 = (0);
var G__57750 = (0);
seq__57627 = G__57747;
chunk__57628 = G__57748;
count__57629 = G__57749;
i__57630 = G__57750;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__57649 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57650 = null;
var count__57651 = (0);
var i__57652 = (0);
while(true){
if((i__57652 < count__57651)){
var map__57665 = chunk__57650.cljs$core$IIndexed$_nth$arity$2(null,i__57652);
var map__57665__$1 = (((((!((map__57665 == null))))?(((((map__57665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57665):map__57665);
var effect = map__57665__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__57649,chunk__57650,count__57651,i__57652,map__57665,map__57665__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__57649,chunk__57650,count__57651,i__57652,map__57665,map__57665__$1,effect,ms,dispatch))
,ms);
}


var G__57765 = seq__57649;
var G__57766 = chunk__57650;
var G__57767 = count__57651;
var G__57768 = (i__57652 + (1));
seq__57649 = G__57765;
chunk__57650 = G__57766;
count__57651 = G__57767;
i__57652 = G__57768;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57649);
if(temp__5735__auto__){
var seq__57649__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57649__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57649__$1);
var G__57777 = cljs.core.chunk_rest(seq__57649__$1);
var G__57778 = c__4550__auto__;
var G__57779 = cljs.core.count(c__4550__auto__);
var G__57780 = (0);
seq__57649 = G__57777;
chunk__57650 = G__57778;
count__57651 = G__57779;
i__57652 = G__57780;
continue;
} else {
var map__57670 = cljs.core.first(seq__57649__$1);
var map__57670__$1 = (((((!((map__57670 == null))))?(((((map__57670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57670):map__57670);
var effect = map__57670__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57670__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57670__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__57649,chunk__57650,count__57651,i__57652,map__57670,map__57670__$1,effect,ms,dispatch,seq__57649__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__57649,chunk__57650,count__57651,i__57652,map__57670,map__57670__$1,effect,ms,dispatch,seq__57649__$1,temp__5735__auto__))
,ms);
}


var G__57793 = cljs.core.next(seq__57649__$1);
var G__57794 = null;
var G__57795 = (0);
var G__57796 = (0);
seq__57649 = G__57793;
chunk__57650 = G__57794;
count__57651 = G__57795;
i__57652 = G__57796;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__57673 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57674 = null;
var count__57675 = (0);
var i__57676 = (0);
while(true){
if((i__57676 < count__57675)){
var event = chunk__57674.cljs$core$IIndexed$_nth$arity$2(null,i__57676);
re_frame.router.dispatch(event);


var G__57800 = seq__57673;
var G__57801 = chunk__57674;
var G__57802 = count__57675;
var G__57803 = (i__57676 + (1));
seq__57673 = G__57800;
chunk__57674 = G__57801;
count__57675 = G__57802;
i__57676 = G__57803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57673);
if(temp__5735__auto__){
var seq__57673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57673__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57673__$1);
var G__57804 = cljs.core.chunk_rest(seq__57673__$1);
var G__57805 = c__4550__auto__;
var G__57806 = cljs.core.count(c__4550__auto__);
var G__57807 = (0);
seq__57673 = G__57804;
chunk__57674 = G__57805;
count__57675 = G__57806;
i__57676 = G__57807;
continue;
} else {
var event = cljs.core.first(seq__57673__$1);
re_frame.router.dispatch(event);


var G__57808 = cljs.core.next(seq__57673__$1);
var G__57809 = null;
var G__57810 = (0);
var G__57811 = (0);
seq__57673 = G__57808;
chunk__57674 = G__57809;
count__57675 = G__57810;
i__57676 = G__57811;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__57685 = cljs.core.seq(value);
var chunk__57686 = null;
var count__57687 = (0);
var i__57688 = (0);
while(true){
if((i__57688 < count__57687)){
var event = chunk__57686.cljs$core$IIndexed$_nth$arity$2(null,i__57688);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57812 = seq__57685;
var G__57813 = chunk__57686;
var G__57814 = count__57687;
var G__57815 = (i__57688 + (1));
seq__57685 = G__57812;
chunk__57686 = G__57813;
count__57687 = G__57814;
i__57688 = G__57815;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57685);
if(temp__5735__auto__){
var seq__57685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57685__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57685__$1);
var G__57817 = cljs.core.chunk_rest(seq__57685__$1);
var G__57818 = c__4550__auto__;
var G__57819 = cljs.core.count(c__4550__auto__);
var G__57820 = (0);
seq__57685 = G__57817;
chunk__57686 = G__57818;
count__57687 = G__57819;
i__57688 = G__57820;
continue;
} else {
var event = cljs.core.first(seq__57685__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57822 = cljs.core.next(seq__57685__$1);
var G__57823 = null;
var G__57824 = (0);
var G__57825 = (0);
seq__57685 = G__57822;
chunk__57686 = G__57823;
count__57687 = G__57824;
i__57688 = G__57825;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
