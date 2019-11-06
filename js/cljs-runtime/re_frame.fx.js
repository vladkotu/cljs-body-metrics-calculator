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
var _STAR_current_trace_STAR__orig_val__58134 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__58135 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__58135;

try{try{var seq__58137 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__58138 = null;
var count__58139 = (0);
var i__58140 = (0);
while(true){
if((i__58140 < count__58139)){
var vec__58147 = chunk__58138.cljs$core$IIndexed$_nth$arity$2(null,i__58140);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(1),null);
var temp__5733__auto___58223 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___58223)){
var effect_fn_58224 = temp__5733__auto___58223;
(effect_fn_58224.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58224.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58224.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58225 = seq__58137;
var G__58226 = chunk__58138;
var G__58227 = count__58139;
var G__58228 = (i__58140 + (1));
seq__58137 = G__58225;
chunk__58138 = G__58226;
count__58139 = G__58227;
i__58140 = G__58228;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58137);
if(temp__5735__auto__){
var seq__58137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58137__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58137__$1);
var G__58229 = cljs.core.chunk_rest(seq__58137__$1);
var G__58230 = c__4550__auto__;
var G__58231 = cljs.core.count(c__4550__auto__);
var G__58232 = (0);
seq__58137 = G__58229;
chunk__58138 = G__58230;
count__58139 = G__58231;
i__58140 = G__58232;
continue;
} else {
var vec__58150 = cljs.core.first(seq__58137__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(1),null);
var temp__5733__auto___58233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___58233)){
var effect_fn_58234 = temp__5733__auto___58233;
(effect_fn_58234.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58234.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58234.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58235 = cljs.core.next(seq__58137__$1);
var G__58236 = null;
var G__58237 = (0);
var G__58238 = (0);
seq__58137 = G__58235;
chunk__58138 = G__58236;
count__58139 = G__58237;
i__58140 = G__58238;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__57833__auto___58239 = re_frame.interop.now();
var duration__57834__auto___58240 = (end__57833__auto___58239 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__57834__auto___58240,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__57833__auto___58239);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__58134;
}} else {
var seq__58153 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__58154 = null;
var count__58155 = (0);
var i__58156 = (0);
while(true){
if((i__58156 < count__58155)){
var vec__58165 = chunk__58154.cljs$core$IIndexed$_nth$arity$2(null,i__58156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(1),null);
var temp__5733__auto___58242 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___58242)){
var effect_fn_58243 = temp__5733__auto___58242;
(effect_fn_58243.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58243.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58243.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58244 = seq__58153;
var G__58245 = chunk__58154;
var G__58246 = count__58155;
var G__58247 = (i__58156 + (1));
seq__58153 = G__58244;
chunk__58154 = G__58245;
count__58155 = G__58246;
i__58156 = G__58247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58153);
if(temp__5735__auto__){
var seq__58153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58153__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58153__$1);
var G__58248 = cljs.core.chunk_rest(seq__58153__$1);
var G__58249 = c__4550__auto__;
var G__58250 = cljs.core.count(c__4550__auto__);
var G__58251 = (0);
seq__58153 = G__58248;
chunk__58154 = G__58249;
count__58155 = G__58250;
i__58156 = G__58251;
continue;
} else {
var vec__58168 = cljs.core.first(seq__58153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(1),null);
var temp__5733__auto___58252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___58252)){
var effect_fn_58253 = temp__5733__auto___58252;
(effect_fn_58253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58254 = cljs.core.next(seq__58153__$1);
var G__58255 = null;
var G__58256 = (0);
var G__58257 = (0);
seq__58153 = G__58254;
chunk__58154 = G__58255;
count__58155 = G__58256;
i__58156 = G__58257;
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
var seq__58173 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58174 = null;
var count__58175 = (0);
var i__58176 = (0);
while(true){
if((i__58176 < count__58175)){
var map__58181 = chunk__58174.cljs$core$IIndexed$_nth$arity$2(null,i__58176);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var effect = map__58181__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__58173,chunk__58174,count__58175,i__58176,map__58181,map__58181__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__58173,chunk__58174,count__58175,i__58176,map__58181,map__58181__$1,effect,ms,dispatch))
,ms);
}


var G__58258 = seq__58173;
var G__58259 = chunk__58174;
var G__58260 = count__58175;
var G__58261 = (i__58176 + (1));
seq__58173 = G__58258;
chunk__58174 = G__58259;
count__58175 = G__58260;
i__58176 = G__58261;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58173);
if(temp__5735__auto__){
var seq__58173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58173__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58173__$1);
var G__58262 = cljs.core.chunk_rest(seq__58173__$1);
var G__58263 = c__4550__auto__;
var G__58264 = cljs.core.count(c__4550__auto__);
var G__58265 = (0);
seq__58173 = G__58262;
chunk__58174 = G__58263;
count__58175 = G__58264;
i__58176 = G__58265;
continue;
} else {
var map__58184 = cljs.core.first(seq__58173__$1);
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var effect = map__58184__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__58173,chunk__58174,count__58175,i__58176,map__58184,map__58184__$1,effect,ms,dispatch,seq__58173__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__58173,chunk__58174,count__58175,i__58176,map__58184,map__58184__$1,effect,ms,dispatch,seq__58173__$1,temp__5735__auto__))
,ms);
}


var G__58270 = cljs.core.next(seq__58173__$1);
var G__58271 = null;
var G__58272 = (0);
var G__58273 = (0);
seq__58173 = G__58270;
chunk__58174 = G__58271;
count__58175 = G__58272;
i__58176 = G__58273;
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
var seq__58186 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58187 = null;
var count__58188 = (0);
var i__58189 = (0);
while(true){
if((i__58189 < count__58188)){
var event = chunk__58187.cljs$core$IIndexed$_nth$arity$2(null,i__58189);
re_frame.router.dispatch(event);


var G__58275 = seq__58186;
var G__58276 = chunk__58187;
var G__58277 = count__58188;
var G__58278 = (i__58189 + (1));
seq__58186 = G__58275;
chunk__58187 = G__58276;
count__58188 = G__58277;
i__58189 = G__58278;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58186);
if(temp__5735__auto__){
var seq__58186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58186__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58186__$1);
var G__58282 = cljs.core.chunk_rest(seq__58186__$1);
var G__58283 = c__4550__auto__;
var G__58284 = cljs.core.count(c__4550__auto__);
var G__58285 = (0);
seq__58186 = G__58282;
chunk__58187 = G__58283;
count__58188 = G__58284;
i__58189 = G__58285;
continue;
} else {
var event = cljs.core.first(seq__58186__$1);
re_frame.router.dispatch(event);


var G__58286 = cljs.core.next(seq__58186__$1);
var G__58287 = null;
var G__58288 = (0);
var G__58289 = (0);
seq__58186 = G__58286;
chunk__58187 = G__58287;
count__58188 = G__58288;
i__58189 = G__58289;
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
var seq__58202 = cljs.core.seq(value);
var chunk__58203 = null;
var count__58204 = (0);
var i__58205 = (0);
while(true){
if((i__58205 < count__58204)){
var event = chunk__58203.cljs$core$IIndexed$_nth$arity$2(null,i__58205);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__58293 = seq__58202;
var G__58294 = chunk__58203;
var G__58295 = count__58204;
var G__58296 = (i__58205 + (1));
seq__58202 = G__58293;
chunk__58203 = G__58294;
count__58204 = G__58295;
i__58205 = G__58296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58202);
if(temp__5735__auto__){
var seq__58202__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58202__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58202__$1);
var G__58297 = cljs.core.chunk_rest(seq__58202__$1);
var G__58298 = c__4550__auto__;
var G__58299 = cljs.core.count(c__4550__auto__);
var G__58300 = (0);
seq__58202 = G__58297;
chunk__58203 = G__58298;
count__58204 = G__58299;
i__58205 = G__58300;
continue;
} else {
var event = cljs.core.first(seq__58202__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__58305 = cljs.core.next(seq__58202__$1);
var G__58306 = null;
var G__58307 = (0);
var G__58308 = (0);
seq__58202 = G__58305;
chunk__58203 = G__58306;
count__58204 = G__58307;
i__58205 = G__58308;
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
