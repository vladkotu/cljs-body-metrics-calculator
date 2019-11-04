goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('clojure.set');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$reactive_QMARK_(){
return (!((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$running(){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len(x);
var and__4120__auto__ = (len === day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len(y));
if(and__4120__auto__){
var i = (0);
while(true){
var or__4131__auto__ = (i === len);
if(or__4131__auto__){
return or__4131__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__48665 = (i + (1));
i = G__48665;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4120__auto__;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__48170 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48171 = obj;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48171;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48170;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation + (1));


var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5739__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto__ == null)){
return null;
} else {
var r = temp__5739__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__48212_SHARP_,p2__48213_SHARP_,p3__48214_SHARP_){
var G__48219 = p1__48212_SHARP_;
G__48219.push(p2__48213_SHARP_);

G__48219.push(p3__48214_SHARP_);

return G__48219;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_48686 = (a[i]);
var f_48687 = (a[(i + (1))]);
(f_48687.cljs$core$IFn$_invoke$arity$4 ? f_48687.cljs$core$IFn$_invoke$arity$4(k_48686,this$,old,new$) : f_48687.call(null,k_48686,this$,old,new$));

var G__48689 = ((2) + i);
i = G__48689;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__48248 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48249 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48249;

try{return cljs.core._deref(a);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48248;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue == null)){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = [];

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.schedule();
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue.push(r);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = null;

var n__4607__auto___48690 = q.length;
var i_48691 = (0);
while(true){
if((i_48691 < n__4607__auto___48690)){
(q[i_48691])._queued_run();

var G__48694 = (i_48691 + (1));
i_48691 = G__48694;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$atom(var_args){
var G__48297 = arguments.length;
switch (G__48297) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___48715 = arguments.length;
var i__4731__auto___48716 = (0);
while(true){
if((i__4731__auto___48716 < len__4730__auto___48715)){
args_arr__4751__auto__.push((arguments[i__4731__auto___48716]));

var G__48719 = (i__4731__auto___48716 + (1));
i__4731__auto___48716 = G__48719;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,null,null,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__48318){
var map__48319 = p__48318;
var map__48319__$1 = (((((!((map__48319 == null))))?(((((map__48319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48319):map__48319);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48319__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48319__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq48295){
var G__48296 = cljs.core.first(seq48295);
var seq48295__$1 = cljs.core.next(seq48295);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48296,seq48295__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cache_key = "reagReactionCache";
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__48332 = f;
var G__48333 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__48334 = ((function (G__48332,G__48333,m,m__$1,r){
return (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __48728 = (o["reagReactionCache"]);
var __48729__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__48728,k);
(o["reagReactionCache"] = __48729__$1);

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__48332,G__48333,m,m__$1,r))
;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__48332,G__48333,G__48334) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__48332,G__48333,G__48334));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(((function (temp__5737__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5737__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__48371 = ((function (t){
return (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});})(t))
;
var G__48372 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__48373 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__48371,G__48372,G__48373) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__48371,G__48372,G__48373));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48746 = arguments.length;
var i__4731__auto___48747 = (0);
while(true){
if((i__4731__auto___48747 < len__4730__auto___48746)){
args__4736__auto__.push((arguments[i__4731__auto___48747]));

var G__48749 = (i__4731__auto___48747 + (1));
i__4731__auto___48747 = G__48749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq48375){
var G__48376 = cljs.core.first(seq48375);
var seq48375__$1 = cljs.core.next(seq48375);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48376,seq48375__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48753 = arguments.length;
var i__4731__auto___48754 = (0);
while(true){
if((i__4731__auto___48754 < len__4730__auto___48753)){
args__4736__auto__.push((arguments[i__4731__auto___48754]));

var G__48756 = (i__4731__auto___48754 + (1));
i__4731__auto___48754 = G__48756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq48385){
var G__48387 = cljs.core.first(seq48385);
var seq48385__$1 = cljs.core.next(seq48385);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48387,seq48385__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__48408 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48409 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48409;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48408;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if((!((self__.watches == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48421 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48421) : f.call(null,G__48421));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48424 = a__$1._peek();
var G__48425 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48424,G__48425) : f.call(null,G__48424,G__48425));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48428 = a__$1._peek();
var G__48429 = x;
var G__48430 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48428,G__48429,G__48430) : f.call(null,G__48428,G__48429,G__48430));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5737__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5737__auto__,oldstate,this$__$1))
:((function (temp__5737__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5737__auto__,oldstate,this$__$1))
);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$cursor(src,path){
if((function (){var or__4131__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$with_let_destroy(v){
var temp__5739__auto__ = v.destroy;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$with_let_values(key){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5737__auto__ == null)){
return [];
} else {
var c = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IDisposable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4434__auto__.call(null,this$,f));
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4431__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IRunnable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IRunnable}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__48483 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48484 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48484;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48483;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__48490_48856 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__48491_48857 = null;
var count__48492_48858 = (0);
var i__48493_48859 = (0);
while(true){
if((i__48493_48859 < count__48492_48858)){
var w_48862 = chunk__48491_48857.cljs$core$IIndexed$_nth$arity$2(null,i__48493_48859);
cljs.core._add_watch(w_48862,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__48867 = seq__48490_48856;
var G__48868 = chunk__48491_48857;
var G__48869 = count__48492_48858;
var G__48870 = (i__48493_48859 + (1));
seq__48490_48856 = G__48867;
chunk__48491_48857 = G__48868;
count__48492_48858 = G__48869;
i__48493_48859 = G__48870;
continue;
} else {
var temp__5735__auto___48871 = cljs.core.seq(seq__48490_48856);
if(temp__5735__auto___48871){
var seq__48490_48872__$1 = temp__5735__auto___48871;
if(cljs.core.chunked_seq_QMARK_(seq__48490_48872__$1)){
var c__4550__auto___48873 = cljs.core.chunk_first(seq__48490_48872__$1);
var G__48874 = cljs.core.chunk_rest(seq__48490_48872__$1);
var G__48875 = c__4550__auto___48873;
var G__48876 = cljs.core.count(c__4550__auto___48873);
var G__48877 = (0);
seq__48490_48856 = G__48874;
chunk__48491_48857 = G__48875;
count__48492_48858 = G__48876;
i__48493_48859 = G__48877;
continue;
} else {
var w_48880 = cljs.core.first(seq__48490_48872__$1);
cljs.core._add_watch(w_48880,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__48890 = cljs.core.next(seq__48490_48872__$1);
var G__48891 = null;
var G__48892 = (0);
var G__48893 = (0);
seq__48490_48856 = G__48890;
chunk__48491_48857 = G__48891;
count__48492_48858 = G__48892;
i__48493_48859 = G__48893;
continue;
}
} else {
}
}
break;
}

var seq__48502 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__48503 = null;
var count__48504 = (0);
var i__48505 = (0);
while(true){
if((i__48505 < count__48504)){
var w = chunk__48503.cljs$core$IIndexed$_nth$arity$2(null,i__48505);
cljs.core._remove_watch(w,this$);


var G__48896 = seq__48502;
var G__48897 = chunk__48503;
var G__48898 = count__48504;
var G__48899 = (i__48505 + (1));
seq__48502 = G__48896;
chunk__48503 = G__48897;
count__48504 = G__48898;
i__48505 = G__48899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48502);
if(temp__5735__auto__){
var seq__48502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48502__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48502__$1);
var G__48905 = cljs.core.chunk_rest(seq__48502__$1);
var G__48906 = c__4550__auto__;
var G__48907 = cljs.core.count(c__4550__auto__);
var G__48908 = (0);
seq__48502 = G__48905;
chunk__48503 = G__48906;
count__48504 = G__48907;
i__48505 = G__48908;
continue;
} else {
var w = cljs.core.first(seq__48502__$1);
cljs.core._remove_watch(w,this$);


var G__48910 = cljs.core.next(seq__48502__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48502 = G__48910;
chunk__48503 = G__48911;
count__48504 = G__48912;
i__48505 = G__48913;
continue;
}
} else {
return null;
}
}
break;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e48510){var e = e48510;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__48517){
var self__ = this;
var map__48518 = p__48517;
var map__48518__$1 = (((((!((map__48518 == null))))?(((((map__48518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48518):map__48518);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48518__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48518__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48518__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48518__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
this$.auto_run = auto_run__$1;
} else {
}

if((!((on_set == null)))){
this$.on_set = on_set;
} else {
}

if((!((on_dispose == null)))){
this$.on_dispose = on_dispose;
} else {
}

if((!((no_cache == null)))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__48535_48965 = cljs.core.seq(cljs.core.set(wg));
var chunk__48536_48966 = null;
var count__48537_48967 = (0);
var i__48538_48968 = (0);
while(true){
if((i__48538_48968 < count__48537_48967)){
var w_48972 = chunk__48536_48966.cljs$core$IIndexed$_nth$arity$2(null,i__48538_48968);
cljs.core._remove_watch(w_48972,this$__$1);


var G__48978 = seq__48535_48965;
var G__48979 = chunk__48536_48966;
var G__48980 = count__48537_48967;
var G__48981 = (i__48538_48968 + (1));
seq__48535_48965 = G__48978;
chunk__48536_48966 = G__48979;
count__48537_48967 = G__48980;
i__48538_48968 = G__48981;
continue;
} else {
var temp__5735__auto___48987 = cljs.core.seq(seq__48535_48965);
if(temp__5735__auto___48987){
var seq__48535_48988__$1 = temp__5735__auto___48987;
if(cljs.core.chunked_seq_QMARK_(seq__48535_48988__$1)){
var c__4550__auto___48990 = cljs.core.chunk_first(seq__48535_48988__$1);
var G__48995 = cljs.core.chunk_rest(seq__48535_48988__$1);
var G__48996 = c__4550__auto___48990;
var G__48997 = cljs.core.count(c__4550__auto___48990);
var G__48998 = (0);
seq__48535_48965 = G__48995;
chunk__48536_48966 = G__48996;
count__48537_48967 = G__48997;
i__48538_48968 = G__48998;
continue;
} else {
var w_49001 = cljs.core.first(seq__48535_48988__$1);
cljs.core._remove_watch(w_49001,this$__$1);


var G__49003 = cljs.core.next(seq__48535_48988__$1);
var G__49004 = null;
var G__49005 = (0);
var G__49006 = (0);
seq__48535_48965 = G__49003;
chunk__48536_48966 = G__49004;
count__48537_48967 = G__49005;
i__48538_48968 = G__49006;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5739__auto__ = this$__$1.on_dispose_arr;
if((temp__5739__auto__ == null)){
return null;
} else {
var a = temp__5739__auto__;
var n__4607__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4607__auto__)){
var fexpr__48545_49021 = (a[i]);
(fexpr__48545_49021.cljs$core$IFn$_invoke$arity$1 ? fexpr__48545_49021.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__48545_49021.call(null,this$__$1));

var G__49023 = (i + (1));
i = G__49023;
continue;
} else {
return null;
}
break;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = this$__$1.on_dispose_arr;
if((temp__5737__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5737__auto__;
return a.push(f__$1);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48554 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__48554) : f__$1.call(null,G__48554));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48556 = a__$1._peek_at();
var G__48557 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__48556,G__48557) : f__$1.call(null,G__48556,G__48557));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48560 = a__$1._peek_at();
var G__48561 = x;
var G__48562 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__48560,G__48561,G__48562) : f__$1.call(null,G__48560,G__48561,G__48562));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5739__auto___49068 = self__.caught;
if((temp__5739__auto___49068 == null)){
} else {
var e_49070 = temp__5739__auto___49068;
throw e_49070;
}

var non_reactive_49071 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_49071){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_49071) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_49074 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_49074,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldstate_49074,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_reaction(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49094 = arguments.length;
var i__4731__auto___49096 = (0);
while(true){
if((i__4731__auto___49096 < len__4730__auto___49094)){
args__4736__auto__.push((arguments[i__4731__auto___49096]));

var G__49101 = (i__4731__auto___49096 + (1));
i__4731__auto___49096 = G__49101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__48596){
var map__48601 = p__48596;
var map__48601__$1 = (((((!((map__48601 == null))))?(((((map__48601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48601):map__48601);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48601__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48601__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48601__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq48588){
var G__48589 = cljs.core.first(seq48588);
var seq48588__$1 = cljs.core.next(seq48588);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48589,seq48588__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction(null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((!((self__.watches == null)))){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Wrapper(value,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.js.map
