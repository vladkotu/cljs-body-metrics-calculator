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
var G__48887 = (i + (1));
i = G__48887;
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
var _STAR_ratom_context_STAR__orig_val__48519 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48520 = obj;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48520;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48519;
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
return (function (p1__48528_SHARP_,p2__48529_SHARP_,p3__48530_SHARP_){
var G__48531 = p1__48528_SHARP_;
G__48531.push(p2__48529_SHARP_);

G__48531.push(p3__48530_SHARP_);

return G__48531;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_48898 = (a[i]);
var f_48899 = (a[(i + (1))]);
(f_48899.cljs$core$IFn$_invoke$arity$4 ? f_48899.cljs$core$IFn$_invoke$arity$4(k_48898,this$,old,new$) : f_48899.call(null,k_48898,this$,old,new$));

var G__48904 = ((2) + i);
i = G__48904;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__48553 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48554 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48554;

try{return cljs.core._deref(a);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48553;
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

var n__4607__auto___48907 = q.length;
var i_48908 = (0);
while(true){
if((i_48908 < n__4607__auto___48907)){
(q[i_48908])._queued_run();

var G__48909 = (i_48908 + (1));
i_48908 = G__48909;
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
var G__48609 = arguments.length;
switch (G__48609) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___48943 = arguments.length;
var i__4731__auto___48944 = (0);
while(true){
if((i__4731__auto___48944 < len__4730__auto___48943)){
args_arr__4751__auto__.push((arguments[i__4731__auto___48944]));

var G__48947 = (i__4731__auto___48944 + (1));
i__4731__auto___48944 = G__48947;
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

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__48615){
var map__48616 = p__48615;
var map__48616__$1 = (((((!((map__48616 == null))))?(((((map__48616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48616):map__48616);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48616__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48616__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq48604){
var G__48606 = cljs.core.first(seq48604);
var seq48604__$1 = cljs.core.next(seq48604);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48606,seq48604__$1);
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
var r__$1 = (function (){var G__48637 = f;
var G__48638 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__48639 = ((function (G__48637,G__48638,m,m__$1,r){
return (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __48977 = (o["reagReactionCache"]);
var __48978__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__48977,k);
(o["reagReactionCache"] = __48978__$1);

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__48637,G__48638,m,m__$1,r))
;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__48637,G__48638,G__48639) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__48637,G__48638,G__48639));
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
var r = (function (){var G__48659 = ((function (t){
return (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});})(t))
;
var G__48660 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__48661 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__48659,G__48660,G__48661) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__48659,G__48660,G__48661));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48989 = arguments.length;
var i__4731__auto___48990 = (0);
while(true){
if((i__4731__auto___48990 < len__4730__auto___48989)){
args__4736__auto__.push((arguments[i__4731__auto___48990]));

var G__48991 = (i__4731__auto___48990 + (1));
i__4731__auto___48990 = G__48991;
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
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq48664){
var G__48665 = cljs.core.first(seq48664);
var seq48664__$1 = cljs.core.next(seq48664);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48665,seq48664__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48998 = arguments.length;
var i__4731__auto___49000 = (0);
while(true){
if((i__4731__auto___49000 < len__4730__auto___48998)){
args__4736__auto__.push((arguments[i__4731__auto___49000]));

var G__49003 = (i__4731__auto___49000 + (1));
i__4731__auto___49000 = G__49003;
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
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq48682){
var G__48683 = cljs.core.first(seq48682);
var seq48682__$1 = cljs.core.next(seq48682);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48683,seq48682__$1);
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
var _STAR_ratom_context_STAR__orig_val__48694 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48695 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48695;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48694;
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
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48717 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48717) : f.call(null,G__48717));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48719 = a__$1._peek();
var G__48720 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48719,G__48720) : f.call(null,G__48719,G__48720));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48722 = a__$1._peek();
var G__48723 = x;
var G__48724 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48722,G__48723,G__48724) : f.call(null,G__48722,G__48723,G__48724));
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
var _STAR_ratom_context_STAR__orig_val__48779 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__48780 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__48780;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__48779;
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

var seq__48787_49062 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__48788_49063 = null;
var count__48789_49064 = (0);
var i__48790_49065 = (0);
while(true){
if((i__48790_49065 < count__48789_49064)){
var w_49066 = chunk__48788_49063.cljs$core$IIndexed$_nth$arity$2(null,i__48790_49065);
cljs.core._add_watch(w_49066,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__49067 = seq__48787_49062;
var G__49068 = chunk__48788_49063;
var G__49069 = count__48789_49064;
var G__49070 = (i__48790_49065 + (1));
seq__48787_49062 = G__49067;
chunk__48788_49063 = G__49068;
count__48789_49064 = G__49069;
i__48790_49065 = G__49070;
continue;
} else {
var temp__5735__auto___49071 = cljs.core.seq(seq__48787_49062);
if(temp__5735__auto___49071){
var seq__48787_49072__$1 = temp__5735__auto___49071;
if(cljs.core.chunked_seq_QMARK_(seq__48787_49072__$1)){
var c__4550__auto___49073 = cljs.core.chunk_first(seq__48787_49072__$1);
var G__49075 = cljs.core.chunk_rest(seq__48787_49072__$1);
var G__49076 = c__4550__auto___49073;
var G__49077 = cljs.core.count(c__4550__auto___49073);
var G__49078 = (0);
seq__48787_49062 = G__49075;
chunk__48788_49063 = G__49076;
count__48789_49064 = G__49077;
i__48790_49065 = G__49078;
continue;
} else {
var w_49081 = cljs.core.first(seq__48787_49072__$1);
cljs.core._add_watch(w_49081,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__49082 = cljs.core.next(seq__48787_49072__$1);
var G__49083 = null;
var G__49084 = (0);
var G__49085 = (0);
seq__48787_49062 = G__49082;
chunk__48788_49063 = G__49083;
count__48789_49064 = G__49084;
i__48790_49065 = G__49085;
continue;
}
} else {
}
}
break;
}

var seq__48801 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__48802 = null;
var count__48803 = (0);
var i__48804 = (0);
while(true){
if((i__48804 < count__48803)){
var w = chunk__48802.cljs$core$IIndexed$_nth$arity$2(null,i__48804);
cljs.core._remove_watch(w,this$);


var G__49093 = seq__48801;
var G__49094 = chunk__48802;
var G__49095 = count__48803;
var G__49096 = (i__48804 + (1));
seq__48801 = G__49093;
chunk__48802 = G__49094;
count__48803 = G__49095;
i__48804 = G__49096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48801);
if(temp__5735__auto__){
var seq__48801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48801__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48801__$1);
var G__49098 = cljs.core.chunk_rest(seq__48801__$1);
var G__49099 = c__4550__auto__;
var G__49100 = cljs.core.count(c__4550__auto__);
var G__49101 = (0);
seq__48801 = G__49098;
chunk__48802 = G__49099;
count__48803 = G__49100;
i__48804 = G__49101;
continue;
} else {
var w = cljs.core.first(seq__48801__$1);
cljs.core._remove_watch(w,this$);


var G__49103 = cljs.core.next(seq__48801__$1);
var G__49104 = null;
var G__49105 = (0);
var G__49106 = (0);
seq__48801 = G__49103;
chunk__48802 = G__49104;
count__48803 = G__49105;
i__48804 = G__49106;
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
}catch (e48812){var e = e48812;
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

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__48817){
var self__ = this;
var map__48818 = p__48817;
var map__48818__$1 = (((((!((map__48818 == null))))?(((((map__48818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48818):map__48818);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
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

var seq__48822_49134 = cljs.core.seq(cljs.core.set(wg));
var chunk__48823_49135 = null;
var count__48824_49136 = (0);
var i__48825_49137 = (0);
while(true){
if((i__48825_49137 < count__48824_49136)){
var w_49141 = chunk__48823_49135.cljs$core$IIndexed$_nth$arity$2(null,i__48825_49137);
cljs.core._remove_watch(w_49141,this$__$1);


var G__49142 = seq__48822_49134;
var G__49143 = chunk__48823_49135;
var G__49144 = count__48824_49136;
var G__49145 = (i__48825_49137 + (1));
seq__48822_49134 = G__49142;
chunk__48823_49135 = G__49143;
count__48824_49136 = G__49144;
i__48825_49137 = G__49145;
continue;
} else {
var temp__5735__auto___49148 = cljs.core.seq(seq__48822_49134);
if(temp__5735__auto___49148){
var seq__48822_49149__$1 = temp__5735__auto___49148;
if(cljs.core.chunked_seq_QMARK_(seq__48822_49149__$1)){
var c__4550__auto___49150 = cljs.core.chunk_first(seq__48822_49149__$1);
var G__49152 = cljs.core.chunk_rest(seq__48822_49149__$1);
var G__49153 = c__4550__auto___49150;
var G__49154 = cljs.core.count(c__4550__auto___49150);
var G__49155 = (0);
seq__48822_49134 = G__49152;
chunk__48823_49135 = G__49153;
count__48824_49136 = G__49154;
i__48825_49137 = G__49155;
continue;
} else {
var w_49157 = cljs.core.first(seq__48822_49149__$1);
cljs.core._remove_watch(w_49157,this$__$1);


var G__49158 = cljs.core.next(seq__48822_49149__$1);
var G__49159 = null;
var G__49160 = (0);
var G__49161 = (0);
seq__48822_49134 = G__49158;
chunk__48823_49135 = G__49159;
count__48824_49136 = G__49160;
i__48825_49137 = G__49161;
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
var fexpr__48833_49162 = (a[i]);
(fexpr__48833_49162.cljs$core$IFn$_invoke$arity$1 ? fexpr__48833_49162.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__48833_49162.call(null,this$__$1));

var G__49166 = (i + (1));
i = G__49166;
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
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48834 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__48834) : f__$1.call(null,G__48834));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48835 = a__$1._peek_at();
var G__48836 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__48835,G__48836) : f__$1.call(null,G__48835,G__48836));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48837 = a__$1._peek_at();
var G__48838 = x;
var G__48839 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__48837,G__48838,G__48839) : f__$1.call(null,G__48837,G__48838,G__48839));
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
var temp__5739__auto___49185 = self__.caught;
if((temp__5739__auto___49185 == null)){
} else {
var e_49187 = temp__5739__auto___49185;
throw e_49187;
}

var non_reactive_49188 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_49188){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_49188) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_49191 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_49191,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldstate_49191,self__.state);
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
var len__4730__auto___49209 = arguments.length;
var i__4731__auto___49210 = (0);
while(true){
if((i__4731__auto___49210 < len__4730__auto___49209)){
args__4736__auto__.push((arguments[i__4731__auto___49210]));

var G__49213 = (i__4731__auto___49210 + (1));
i__4731__auto___49210 = G__49213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__48850){
var map__48851 = p__48850;
var map__48851__$1 = (((((!((map__48851 == null))))?(((((map__48851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48851):map__48851);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq48847){
var G__48848 = cljs.core.first(seq48847);
var seq48847__$1 = cljs.core.next(seq48847);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48848,seq48847__$1);
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
