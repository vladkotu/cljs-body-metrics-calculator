goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__57336){
var map__57337 = p__57336;
var map__57337__$1 = (((((!((map__57337 == null))))?(((((map__57337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57337):map__57337);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__57345_57391 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__57346_57392 = null;
var count__57347_57393 = (0);
var i__57348_57394 = (0);
while(true){
if((i__57348_57394 < count__57347_57393)){
var vec__57359_57395 = chunk__57346_57392.cljs$core$IIndexed$_nth$arity$2(null,i__57348_57394);
var k_57396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57359_57395,(0),null);
var cb_57397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57359_57395,(1),null);
try{var G__57364_57398 = cljs.core.deref(re_frame.trace.traces);
(cb_57397.cljs$core$IFn$_invoke$arity$1 ? cb_57397.cljs$core$IFn$_invoke$arity$1(G__57364_57398) : cb_57397.call(null,G__57364_57398));
}catch (e57362){var e_57399 = e57362;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57396,"while storing",cljs.core.deref(re_frame.trace.traces),e_57399], 0));
}

var G__57400 = seq__57345_57391;
var G__57401 = chunk__57346_57392;
var G__57402 = count__57347_57393;
var G__57403 = (i__57348_57394 + (1));
seq__57345_57391 = G__57400;
chunk__57346_57392 = G__57401;
count__57347_57393 = G__57402;
i__57348_57394 = G__57403;
continue;
} else {
var temp__5735__auto___57404 = cljs.core.seq(seq__57345_57391);
if(temp__5735__auto___57404){
var seq__57345_57405__$1 = temp__5735__auto___57404;
if(cljs.core.chunked_seq_QMARK_(seq__57345_57405__$1)){
var c__4550__auto___57406 = cljs.core.chunk_first(seq__57345_57405__$1);
var G__57407 = cljs.core.chunk_rest(seq__57345_57405__$1);
var G__57408 = c__4550__auto___57406;
var G__57409 = cljs.core.count(c__4550__auto___57406);
var G__57410 = (0);
seq__57345_57391 = G__57407;
chunk__57346_57392 = G__57408;
count__57347_57393 = G__57409;
i__57348_57394 = G__57410;
continue;
} else {
var vec__57365_57412 = cljs.core.first(seq__57345_57405__$1);
var k_57413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57365_57412,(0),null);
var cb_57414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57365_57412,(1),null);
try{var G__57369_57419 = cljs.core.deref(re_frame.trace.traces);
(cb_57414.cljs$core$IFn$_invoke$arity$1 ? cb_57414.cljs$core$IFn$_invoke$arity$1(G__57369_57419) : cb_57414.call(null,G__57369_57419));
}catch (e57368){var e_57421 = e57368;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57413,"while storing",cljs.core.deref(re_frame.trace.traces),e_57421], 0));
}

var G__57423 = cljs.core.next(seq__57345_57405__$1);
var G__57424 = null;
var G__57425 = (0);
var G__57426 = (0);
seq__57345_57391 = G__57423;
chunk__57346_57392 = G__57424;
count__57347_57393 = G__57425;
i__57348_57394 = G__57426;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
