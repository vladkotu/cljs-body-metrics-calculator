goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61839 = arguments.length;
switch (G__61839) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61840 = (function (f,blockable,meta61841){
this.f = f;
this.blockable = blockable;
this.meta61841 = meta61841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61842,meta61841__$1){
var self__ = this;
var _61842__$1 = this;
return (new cljs.core.async.t_cljs$core$async61840(self__.f,self__.blockable,meta61841__$1));
});

cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61842){
var self__ = this;
var _61842__$1 = this;
return self__.meta61841;
});

cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async61840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async61840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61841","meta61841",-26528944,null)], null);
});

cljs.core.async.t_cljs$core$async61840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61840";

cljs.core.async.t_cljs$core$async61840.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61840");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61840.
 */
cljs.core.async.__GT_t_cljs$core$async61840 = (function cljs$core$async$__GT_t_cljs$core$async61840(f__$1,blockable__$1,meta61841){
return (new cljs.core.async.t_cljs$core$async61840(f__$1,blockable__$1,meta61841));
});

}

return (new cljs.core.async.t_cljs$core$async61840(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61845 = arguments.length;
switch (G__61845) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61847 = arguments.length;
switch (G__61847) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61849 = arguments.length;
switch (G__61849) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_63279 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63279) : fn1.call(null,val_63279));
} else {
cljs.core.async.impl.dispatch.run(((function (val_63279,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63279) : fn1.call(null,val_63279));
});})(val_63279,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61851 = arguments.length;
switch (G__61851) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___63281 = n;
var x_63282 = (0);
while(true){
if((x_63282 < n__4607__auto___63281)){
(a[x_63282] = x_63282);

var G__63283 = (x_63282 + (1));
x_63282 = G__63283;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61852 = (function (flag,meta61853){
this.flag = flag;
this.meta61853 = meta61853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_61854,meta61853__$1){
var self__ = this;
var _61854__$1 = this;
return (new cljs.core.async.t_cljs$core$async61852(self__.flag,meta61853__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_61854){
var self__ = this;
var _61854__$1 = this;
return self__.meta61853;
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61853","meta61853",1682184951,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async61852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61852";

cljs.core.async.t_cljs$core$async61852.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61852");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61852.
 */
cljs.core.async.__GT_t_cljs$core$async61852 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61852(flag__$1,meta61853){
return (new cljs.core.async.t_cljs$core$async61852(flag__$1,meta61853));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async61852(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61855 = (function (flag,cb,meta61856){
this.flag = flag;
this.cb = cb;
this.meta61856 = meta61856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61857,meta61856__$1){
var self__ = this;
var _61857__$1 = this;
return (new cljs.core.async.t_cljs$core$async61855(self__.flag,self__.cb,meta61856__$1));
});

cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61857){
var self__ = this;
var _61857__$1 = this;
return self__.meta61856;
});

cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async61855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61856","meta61856",-276710022,null)], null);
});

cljs.core.async.t_cljs$core$async61855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61855";

cljs.core.async.t_cljs$core$async61855.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61855");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61855.
 */
cljs.core.async.__GT_t_cljs$core$async61855 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61855(flag__$1,cb__$1,meta61856){
return (new cljs.core.async.t_cljs$core$async61855(flag__$1,cb__$1,meta61856));
});

}

return (new cljs.core.async.t_cljs$core$async61855(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61858_SHARP_){
var G__61860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61858_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61860) : fret.call(null,G__61860));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61859_SHARP_){
var G__61861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61859_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61861) : fret.call(null,G__61861));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__63284 = (i + (1));
i = G__63284;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63287 = arguments.length;
var i__4731__auto___63288 = (0);
while(true){
if((i__4731__auto___63288 < len__4730__auto___63287)){
args__4736__auto__.push((arguments[i__4731__auto___63288]));

var G__63289 = (i__4731__auto___63288 + (1));
i__4731__auto___63288 = G__63289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61864){
var map__61865 = p__61864;
var map__61865__$1 = (((((!((map__61865 == null))))?(((((map__61865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61865):map__61865);
var opts = map__61865__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61862){
var G__61863 = cljs.core.first(seq61862);
var seq61862__$1 = cljs.core.next(seq61862);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61863,seq61862__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61868 = arguments.length;
switch (G__61868) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__61781__auto___63295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63295){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63295){
return (function (state_61892){
var state_val_61893 = (state_61892[(1)]);
if((state_val_61893 === (7))){
var inst_61888 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
var statearr_61894_63298 = state_61892__$1;
(statearr_61894_63298[(2)] = inst_61888);

(statearr_61894_63298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (1))){
var state_61892__$1 = state_61892;
var statearr_61895_63300 = state_61892__$1;
(statearr_61895_63300[(2)] = null);

(statearr_61895_63300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (4))){
var inst_61871 = (state_61892[(7)]);
var inst_61871__$1 = (state_61892[(2)]);
var inst_61872 = (inst_61871__$1 == null);
var state_61892__$1 = (function (){var statearr_61896 = state_61892;
(statearr_61896[(7)] = inst_61871__$1);

return statearr_61896;
})();
if(cljs.core.truth_(inst_61872)){
var statearr_61897_63302 = state_61892__$1;
(statearr_61897_63302[(1)] = (5));

} else {
var statearr_61898_63303 = state_61892__$1;
(statearr_61898_63303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (13))){
var state_61892__$1 = state_61892;
var statearr_61899_63304 = state_61892__$1;
(statearr_61899_63304[(2)] = null);

(statearr_61899_63304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (6))){
var inst_61871 = (state_61892[(7)]);
var state_61892__$1 = state_61892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61892__$1,(11),to,inst_61871);
} else {
if((state_val_61893 === (3))){
var inst_61890 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61892__$1,inst_61890);
} else {
if((state_val_61893 === (12))){
var state_61892__$1 = state_61892;
var statearr_61900_63306 = state_61892__$1;
(statearr_61900_63306[(2)] = null);

(statearr_61900_63306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (2))){
var state_61892__$1 = state_61892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61892__$1,(4),from);
} else {
if((state_val_61893 === (11))){
var inst_61881 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
if(cljs.core.truth_(inst_61881)){
var statearr_61901_63312 = state_61892__$1;
(statearr_61901_63312[(1)] = (12));

} else {
var statearr_61902_63314 = state_61892__$1;
(statearr_61902_63314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (9))){
var state_61892__$1 = state_61892;
var statearr_61903_63315 = state_61892__$1;
(statearr_61903_63315[(2)] = null);

(statearr_61903_63315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (5))){
var state_61892__$1 = state_61892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61904_63317 = state_61892__$1;
(statearr_61904_63317[(1)] = (8));

} else {
var statearr_61905_63318 = state_61892__$1;
(statearr_61905_63318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (14))){
var inst_61886 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
var statearr_61906_63320 = state_61892__$1;
(statearr_61906_63320[(2)] = inst_61886);

(statearr_61906_63320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (10))){
var inst_61878 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
var statearr_61907_63321 = state_61892__$1;
(statearr_61907_63321[(2)] = inst_61878);

(statearr_61907_63321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (8))){
var inst_61875 = cljs.core.async.close_BANG_(to);
var state_61892__$1 = state_61892;
var statearr_61908_63322 = state_61892__$1;
(statearr_61908_63322[(2)] = inst_61875);

(statearr_61908_63322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63295))
;
return ((function (switch__61678__auto__,c__61781__auto___63295){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_61909 = [null,null,null,null,null,null,null,null];
(statearr_61909[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_61909[(1)] = (1));

return statearr_61909;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_61892){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_61892);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e61910){if((e61910 instanceof Object)){
var ex__61682__auto__ = e61910;
var statearr_61911_63330 = state_61892;
(statearr_61911_63330[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63331 = state_61892;
state_61892 = G__63331;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_61892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_61892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63295))
})();
var state__61783__auto__ = (function (){var statearr_61912 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_61912[(6)] = c__61781__auto___63295);

return statearr_61912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63295))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__61913){
var vec__61914 = p__61913;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61914,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61914,(1),null);
var job = vec__61914;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61781__auto___63338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results){
return (function (state_61921){
var state_val_61922 = (state_61921[(1)]);
if((state_val_61922 === (1))){
var state_61921__$1 = state_61921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61921__$1,(2),res,v);
} else {
if((state_val_61922 === (2))){
var inst_61918 = (state_61921[(2)]);
var inst_61919 = cljs.core.async.close_BANG_(res);
var state_61921__$1 = (function (){var statearr_61923 = state_61921;
(statearr_61923[(7)] = inst_61918);

return statearr_61923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61921__$1,inst_61919);
} else {
return null;
}
}
});})(c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results))
;
return ((function (switch__61678__auto__,c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_61924 = [null,null,null,null,null,null,null,null];
(statearr_61924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__);

(statearr_61924[(1)] = (1));

return statearr_61924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1 = (function (state_61921){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_61921);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e61925){if((e61925 instanceof Object)){
var ex__61682__auto__ = e61925;
var statearr_61926_63340 = state_61921;
(statearr_61926_63340[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63341 = state_61921;
state_61921 = G__63341;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = function(state_61921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1.call(this,state_61921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results))
})();
var state__61783__auto__ = (function (){var statearr_61927 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_61927[(6)] = c__61781__auto___63338);

return statearr_61927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63338,res,vec__61914,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__61928){
var vec__61929 = p__61928;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61929,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61929,(1),null);
var job = vec__61929;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___63346 = n;
var __63347 = (0);
while(true){
if((__63347 < n__4607__auto___63346)){
var G__61932_63348 = type;
var G__61932_63349__$1 = (((G__61932_63348 instanceof cljs.core.Keyword))?G__61932_63348.fqn:null);
switch (G__61932_63349__$1) {
case "compute":
var c__61781__auto___63351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63347,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (__63347,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function (state_61945){
var state_val_61946 = (state_61945[(1)]);
if((state_val_61946 === (1))){
var state_61945__$1 = state_61945;
var statearr_61947_63353 = state_61945__$1;
(statearr_61947_63353[(2)] = null);

(statearr_61947_63353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (2))){
var state_61945__$1 = state_61945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61945__$1,(4),jobs);
} else {
if((state_val_61946 === (3))){
var inst_61943 = (state_61945[(2)]);
var state_61945__$1 = state_61945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61945__$1,inst_61943);
} else {
if((state_val_61946 === (4))){
var inst_61935 = (state_61945[(2)]);
var inst_61936 = process(inst_61935);
var state_61945__$1 = state_61945;
if(cljs.core.truth_(inst_61936)){
var statearr_61948_63358 = state_61945__$1;
(statearr_61948_63358[(1)] = (5));

} else {
var statearr_61949_63360 = state_61945__$1;
(statearr_61949_63360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (5))){
var state_61945__$1 = state_61945;
var statearr_61950_63361 = state_61945__$1;
(statearr_61950_63361[(2)] = null);

(statearr_61950_63361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (6))){
var state_61945__$1 = state_61945;
var statearr_61951_63362 = state_61945__$1;
(statearr_61951_63362[(2)] = null);

(statearr_61951_63362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (7))){
var inst_61941 = (state_61945[(2)]);
var state_61945__$1 = state_61945;
var statearr_61952_63363 = state_61945__$1;
(statearr_61952_63363[(2)] = inst_61941);

(statearr_61952_63363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63347,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
;
return ((function (__63347,switch__61678__auto__,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_61953 = [null,null,null,null,null,null,null];
(statearr_61953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__);

(statearr_61953[(1)] = (1));

return statearr_61953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1 = (function (state_61945){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_61945);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e61954){if((e61954 instanceof Object)){
var ex__61682__auto__ = e61954;
var statearr_61955_63366 = state_61945;
(statearr_61955_63366[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63369 = state_61945;
state_61945 = G__63369;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = function(state_61945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1.call(this,state_61945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__;
})()
;})(__63347,switch__61678__auto__,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
})();
var state__61783__auto__ = (function (){var statearr_61956 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_61956[(6)] = c__61781__auto___63351);

return statearr_61956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(__63347,c__61781__auto___63351,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
);


break;
case "async":
var c__61781__auto___63373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63347,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (__63347,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function (state_61969){
var state_val_61970 = (state_61969[(1)]);
if((state_val_61970 === (1))){
var state_61969__$1 = state_61969;
var statearr_61971_63375 = state_61969__$1;
(statearr_61971_63375[(2)] = null);

(statearr_61971_63375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61970 === (2))){
var state_61969__$1 = state_61969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61969__$1,(4),jobs);
} else {
if((state_val_61970 === (3))){
var inst_61967 = (state_61969[(2)]);
var state_61969__$1 = state_61969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61969__$1,inst_61967);
} else {
if((state_val_61970 === (4))){
var inst_61959 = (state_61969[(2)]);
var inst_61960 = async(inst_61959);
var state_61969__$1 = state_61969;
if(cljs.core.truth_(inst_61960)){
var statearr_61972_63376 = state_61969__$1;
(statearr_61972_63376[(1)] = (5));

} else {
var statearr_61973_63377 = state_61969__$1;
(statearr_61973_63377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61970 === (5))){
var state_61969__$1 = state_61969;
var statearr_61974_63379 = state_61969__$1;
(statearr_61974_63379[(2)] = null);

(statearr_61974_63379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61970 === (6))){
var state_61969__$1 = state_61969;
var statearr_61975_63381 = state_61969__$1;
(statearr_61975_63381[(2)] = null);

(statearr_61975_63381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61970 === (7))){
var inst_61965 = (state_61969[(2)]);
var state_61969__$1 = state_61969;
var statearr_61976_63382 = state_61969__$1;
(statearr_61976_63382[(2)] = inst_61965);

(statearr_61976_63382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63347,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
;
return ((function (__63347,switch__61678__auto__,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_61977 = [null,null,null,null,null,null,null];
(statearr_61977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__);

(statearr_61977[(1)] = (1));

return statearr_61977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1 = (function (state_61969){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_61969);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e61978){if((e61978 instanceof Object)){
var ex__61682__auto__ = e61978;
var statearr_61979_63385 = state_61969;
(statearr_61979_63385[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63386 = state_61969;
state_61969 = G__63386;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = function(state_61969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1.call(this,state_61969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__;
})()
;})(__63347,switch__61678__auto__,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
})();
var state__61783__auto__ = (function (){var statearr_61980 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_61980[(6)] = c__61781__auto___63373);

return statearr_61980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(__63347,c__61781__auto___63373,G__61932_63348,G__61932_63349__$1,n__4607__auto___63346,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61932_63349__$1)].join('')));

}

var G__63390 = (__63347 + (1));
__63347 = G__63390;
continue;
} else {
}
break;
}

var c__61781__auto___63391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63391,jobs,results,process,async){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63391,jobs,results,process,async){
return (function (state_62002){
var state_val_62003 = (state_62002[(1)]);
if((state_val_62003 === (7))){
var inst_61998 = (state_62002[(2)]);
var state_62002__$1 = state_62002;
var statearr_62004_63396 = state_62002__$1;
(statearr_62004_63396[(2)] = inst_61998);

(statearr_62004_63396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62003 === (1))){
var state_62002__$1 = state_62002;
var statearr_62005_63398 = state_62002__$1;
(statearr_62005_63398[(2)] = null);

(statearr_62005_63398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62003 === (4))){
var inst_61983 = (state_62002[(7)]);
var inst_61983__$1 = (state_62002[(2)]);
var inst_61984 = (inst_61983__$1 == null);
var state_62002__$1 = (function (){var statearr_62006 = state_62002;
(statearr_62006[(7)] = inst_61983__$1);

return statearr_62006;
})();
if(cljs.core.truth_(inst_61984)){
var statearr_62007_63399 = state_62002__$1;
(statearr_62007_63399[(1)] = (5));

} else {
var statearr_62008_63400 = state_62002__$1;
(statearr_62008_63400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62003 === (6))){
var inst_61983 = (state_62002[(7)]);
var inst_61988 = (state_62002[(8)]);
var inst_61988__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61990 = [inst_61983,inst_61988__$1];
var inst_61991 = (new cljs.core.PersistentVector(null,2,(5),inst_61989,inst_61990,null));
var state_62002__$1 = (function (){var statearr_62009 = state_62002;
(statearr_62009[(8)] = inst_61988__$1);

return statearr_62009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62002__$1,(8),jobs,inst_61991);
} else {
if((state_val_62003 === (3))){
var inst_62000 = (state_62002[(2)]);
var state_62002__$1 = state_62002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62002__$1,inst_62000);
} else {
if((state_val_62003 === (2))){
var state_62002__$1 = state_62002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62002__$1,(4),from);
} else {
if((state_val_62003 === (9))){
var inst_61995 = (state_62002[(2)]);
var state_62002__$1 = (function (){var statearr_62010 = state_62002;
(statearr_62010[(9)] = inst_61995);

return statearr_62010;
})();
var statearr_62011_63404 = state_62002__$1;
(statearr_62011_63404[(2)] = null);

(statearr_62011_63404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62003 === (5))){
var inst_61986 = cljs.core.async.close_BANG_(jobs);
var state_62002__$1 = state_62002;
var statearr_62012_63406 = state_62002__$1;
(statearr_62012_63406[(2)] = inst_61986);

(statearr_62012_63406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62003 === (8))){
var inst_61988 = (state_62002[(8)]);
var inst_61993 = (state_62002[(2)]);
var state_62002__$1 = (function (){var statearr_62013 = state_62002;
(statearr_62013[(10)] = inst_61993);

return statearr_62013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62002__$1,(9),results,inst_61988);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63391,jobs,results,process,async))
;
return ((function (switch__61678__auto__,c__61781__auto___63391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_62014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__);

(statearr_62014[(1)] = (1));

return statearr_62014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1 = (function (state_62002){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62002);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62015){if((e62015 instanceof Object)){
var ex__61682__auto__ = e62015;
var statearr_62016_63416 = state_62002;
(statearr_62016_63416[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63417 = state_62002;
state_62002 = G__63417;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = function(state_62002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1.call(this,state_62002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63391,jobs,results,process,async))
})();
var state__61783__auto__ = (function (){var statearr_62017 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62017[(6)] = c__61781__auto___63391);

return statearr_62017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63391,jobs,results,process,async))
);


var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__,jobs,results,process,async){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__,jobs,results,process,async){
return (function (state_62055){
var state_val_62056 = (state_62055[(1)]);
if((state_val_62056 === (7))){
var inst_62051 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
var statearr_62057_63421 = state_62055__$1;
(statearr_62057_63421[(2)] = inst_62051);

(statearr_62057_63421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (20))){
var state_62055__$1 = state_62055;
var statearr_62058_63424 = state_62055__$1;
(statearr_62058_63424[(2)] = null);

(statearr_62058_63424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (1))){
var state_62055__$1 = state_62055;
var statearr_62059_63425 = state_62055__$1;
(statearr_62059_63425[(2)] = null);

(statearr_62059_63425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (4))){
var inst_62020 = (state_62055[(7)]);
var inst_62020__$1 = (state_62055[(2)]);
var inst_62021 = (inst_62020__$1 == null);
var state_62055__$1 = (function (){var statearr_62060 = state_62055;
(statearr_62060[(7)] = inst_62020__$1);

return statearr_62060;
})();
if(cljs.core.truth_(inst_62021)){
var statearr_62061_63426 = state_62055__$1;
(statearr_62061_63426[(1)] = (5));

} else {
var statearr_62062_63427 = state_62055__$1;
(statearr_62062_63427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (15))){
var inst_62033 = (state_62055[(8)]);
var state_62055__$1 = state_62055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62055__$1,(18),to,inst_62033);
} else {
if((state_val_62056 === (21))){
var inst_62046 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
var statearr_62063_63430 = state_62055__$1;
(statearr_62063_63430[(2)] = inst_62046);

(statearr_62063_63430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (13))){
var inst_62048 = (state_62055[(2)]);
var state_62055__$1 = (function (){var statearr_62064 = state_62055;
(statearr_62064[(9)] = inst_62048);

return statearr_62064;
})();
var statearr_62065_63431 = state_62055__$1;
(statearr_62065_63431[(2)] = null);

(statearr_62065_63431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (6))){
var inst_62020 = (state_62055[(7)]);
var state_62055__$1 = state_62055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62055__$1,(11),inst_62020);
} else {
if((state_val_62056 === (17))){
var inst_62041 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
if(cljs.core.truth_(inst_62041)){
var statearr_62066_63434 = state_62055__$1;
(statearr_62066_63434[(1)] = (19));

} else {
var statearr_62067_63435 = state_62055__$1;
(statearr_62067_63435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (3))){
var inst_62053 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62055__$1,inst_62053);
} else {
if((state_val_62056 === (12))){
var inst_62030 = (state_62055[(10)]);
var state_62055__$1 = state_62055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62055__$1,(14),inst_62030);
} else {
if((state_val_62056 === (2))){
var state_62055__$1 = state_62055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62055__$1,(4),results);
} else {
if((state_val_62056 === (19))){
var state_62055__$1 = state_62055;
var statearr_62068_63436 = state_62055__$1;
(statearr_62068_63436[(2)] = null);

(statearr_62068_63436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (11))){
var inst_62030 = (state_62055[(2)]);
var state_62055__$1 = (function (){var statearr_62069 = state_62055;
(statearr_62069[(10)] = inst_62030);

return statearr_62069;
})();
var statearr_62070_63437 = state_62055__$1;
(statearr_62070_63437[(2)] = null);

(statearr_62070_63437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (9))){
var state_62055__$1 = state_62055;
var statearr_62071_63438 = state_62055__$1;
(statearr_62071_63438[(2)] = null);

(statearr_62071_63438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (5))){
var state_62055__$1 = state_62055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62072_63440 = state_62055__$1;
(statearr_62072_63440[(1)] = (8));

} else {
var statearr_62073_63441 = state_62055__$1;
(statearr_62073_63441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (14))){
var inst_62033 = (state_62055[(8)]);
var inst_62035 = (state_62055[(11)]);
var inst_62033__$1 = (state_62055[(2)]);
var inst_62034 = (inst_62033__$1 == null);
var inst_62035__$1 = cljs.core.not(inst_62034);
var state_62055__$1 = (function (){var statearr_62074 = state_62055;
(statearr_62074[(8)] = inst_62033__$1);

(statearr_62074[(11)] = inst_62035__$1);

return statearr_62074;
})();
if(inst_62035__$1){
var statearr_62075_63445 = state_62055__$1;
(statearr_62075_63445[(1)] = (15));

} else {
var statearr_62076_63446 = state_62055__$1;
(statearr_62076_63446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (16))){
var inst_62035 = (state_62055[(11)]);
var state_62055__$1 = state_62055;
var statearr_62077_63447 = state_62055__$1;
(statearr_62077_63447[(2)] = inst_62035);

(statearr_62077_63447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (10))){
var inst_62027 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
var statearr_62078_63448 = state_62055__$1;
(statearr_62078_63448[(2)] = inst_62027);

(statearr_62078_63448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (18))){
var inst_62038 = (state_62055[(2)]);
var state_62055__$1 = state_62055;
var statearr_62079_63449 = state_62055__$1;
(statearr_62079_63449[(2)] = inst_62038);

(statearr_62079_63449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62056 === (8))){
var inst_62024 = cljs.core.async.close_BANG_(to);
var state_62055__$1 = state_62055;
var statearr_62080_63451 = state_62055__$1;
(statearr_62080_63451[(2)] = inst_62024);

(statearr_62080_63451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto__,jobs,results,process,async))
;
return ((function (switch__61678__auto__,c__61781__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_62081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__);

(statearr_62081[(1)] = (1));

return statearr_62081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1 = (function (state_62055){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62055);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62082){if((e62082 instanceof Object)){
var ex__61682__auto__ = e62082;
var statearr_62083_63453 = state_62055;
(statearr_62083_63453[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63455 = state_62055;
state_62055 = G__63455;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__ = function(state_62055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1.call(this,state_62055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__,jobs,results,process,async))
})();
var state__61783__auto__ = (function (){var statearr_62084 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62084[(6)] = c__61781__auto__);

return statearr_62084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__,jobs,results,process,async))
);

return c__61781__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__62086 = arguments.length;
switch (G__62086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__62088 = arguments.length;
switch (G__62088) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__62090 = arguments.length;
switch (G__62090) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__61781__auto___63465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63465,tc,fc){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63465,tc,fc){
return (function (state_62116){
var state_val_62117 = (state_62116[(1)]);
if((state_val_62117 === (7))){
var inst_62112 = (state_62116[(2)]);
var state_62116__$1 = state_62116;
var statearr_62118_63468 = state_62116__$1;
(statearr_62118_63468[(2)] = inst_62112);

(statearr_62118_63468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (1))){
var state_62116__$1 = state_62116;
var statearr_62119_63470 = state_62116__$1;
(statearr_62119_63470[(2)] = null);

(statearr_62119_63470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (4))){
var inst_62093 = (state_62116[(7)]);
var inst_62093__$1 = (state_62116[(2)]);
var inst_62094 = (inst_62093__$1 == null);
var state_62116__$1 = (function (){var statearr_62120 = state_62116;
(statearr_62120[(7)] = inst_62093__$1);

return statearr_62120;
})();
if(cljs.core.truth_(inst_62094)){
var statearr_62121_63471 = state_62116__$1;
(statearr_62121_63471[(1)] = (5));

} else {
var statearr_62122_63472 = state_62116__$1;
(statearr_62122_63472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (13))){
var state_62116__$1 = state_62116;
var statearr_62123_63473 = state_62116__$1;
(statearr_62123_63473[(2)] = null);

(statearr_62123_63473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (6))){
var inst_62093 = (state_62116[(7)]);
var inst_62099 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62093) : p.call(null,inst_62093));
var state_62116__$1 = state_62116;
if(cljs.core.truth_(inst_62099)){
var statearr_62124_63475 = state_62116__$1;
(statearr_62124_63475[(1)] = (9));

} else {
var statearr_62125_63476 = state_62116__$1;
(statearr_62125_63476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (3))){
var inst_62114 = (state_62116[(2)]);
var state_62116__$1 = state_62116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62116__$1,inst_62114);
} else {
if((state_val_62117 === (12))){
var state_62116__$1 = state_62116;
var statearr_62126_63477 = state_62116__$1;
(statearr_62126_63477[(2)] = null);

(statearr_62126_63477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (2))){
var state_62116__$1 = state_62116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62116__$1,(4),ch);
} else {
if((state_val_62117 === (11))){
var inst_62093 = (state_62116[(7)]);
var inst_62103 = (state_62116[(2)]);
var state_62116__$1 = state_62116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62116__$1,(8),inst_62103,inst_62093);
} else {
if((state_val_62117 === (9))){
var state_62116__$1 = state_62116;
var statearr_62127_63479 = state_62116__$1;
(statearr_62127_63479[(2)] = tc);

(statearr_62127_63479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (5))){
var inst_62096 = cljs.core.async.close_BANG_(tc);
var inst_62097 = cljs.core.async.close_BANG_(fc);
var state_62116__$1 = (function (){var statearr_62128 = state_62116;
(statearr_62128[(8)] = inst_62096);

return statearr_62128;
})();
var statearr_62129_63481 = state_62116__$1;
(statearr_62129_63481[(2)] = inst_62097);

(statearr_62129_63481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (14))){
var inst_62110 = (state_62116[(2)]);
var state_62116__$1 = state_62116;
var statearr_62130_63482 = state_62116__$1;
(statearr_62130_63482[(2)] = inst_62110);

(statearr_62130_63482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (10))){
var state_62116__$1 = state_62116;
var statearr_62131_63483 = state_62116__$1;
(statearr_62131_63483[(2)] = fc);

(statearr_62131_63483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62117 === (8))){
var inst_62105 = (state_62116[(2)]);
var state_62116__$1 = state_62116;
if(cljs.core.truth_(inst_62105)){
var statearr_62132_63484 = state_62116__$1;
(statearr_62132_63484[(1)] = (12));

} else {
var statearr_62133_63485 = state_62116__$1;
(statearr_62133_63485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63465,tc,fc))
;
return ((function (switch__61678__auto__,c__61781__auto___63465,tc,fc){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62134 = [null,null,null,null,null,null,null,null,null];
(statearr_62134[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62134[(1)] = (1));

return statearr_62134;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62116){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62116);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62135){if((e62135 instanceof Object)){
var ex__61682__auto__ = e62135;
var statearr_62136_63488 = state_62116;
(statearr_62136_63488[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63489 = state_62116;
state_62116 = G__63489;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63465,tc,fc))
})();
var state__61783__auto__ = (function (){var statearr_62137 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62137[(6)] = c__61781__auto___63465);

return statearr_62137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63465,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__){
return (function (state_62158){
var state_val_62159 = (state_62158[(1)]);
if((state_val_62159 === (7))){
var inst_62154 = (state_62158[(2)]);
var state_62158__$1 = state_62158;
var statearr_62160_63492 = state_62158__$1;
(statearr_62160_63492[(2)] = inst_62154);

(statearr_62160_63492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (1))){
var inst_62138 = init;
var state_62158__$1 = (function (){var statearr_62161 = state_62158;
(statearr_62161[(7)] = inst_62138);

return statearr_62161;
})();
var statearr_62162_63493 = state_62158__$1;
(statearr_62162_63493[(2)] = null);

(statearr_62162_63493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (4))){
var inst_62141 = (state_62158[(8)]);
var inst_62141__$1 = (state_62158[(2)]);
var inst_62142 = (inst_62141__$1 == null);
var state_62158__$1 = (function (){var statearr_62163 = state_62158;
(statearr_62163[(8)] = inst_62141__$1);

return statearr_62163;
})();
if(cljs.core.truth_(inst_62142)){
var statearr_62164_63494 = state_62158__$1;
(statearr_62164_63494[(1)] = (5));

} else {
var statearr_62165_63495 = state_62158__$1;
(statearr_62165_63495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (6))){
var inst_62141 = (state_62158[(8)]);
var inst_62145 = (state_62158[(9)]);
var inst_62138 = (state_62158[(7)]);
var inst_62145__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_62138,inst_62141) : f.call(null,inst_62138,inst_62141));
var inst_62146 = cljs.core.reduced_QMARK_(inst_62145__$1);
var state_62158__$1 = (function (){var statearr_62166 = state_62158;
(statearr_62166[(9)] = inst_62145__$1);

return statearr_62166;
})();
if(inst_62146){
var statearr_62167_63497 = state_62158__$1;
(statearr_62167_63497[(1)] = (8));

} else {
var statearr_62168_63498 = state_62158__$1;
(statearr_62168_63498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (3))){
var inst_62156 = (state_62158[(2)]);
var state_62158__$1 = state_62158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62158__$1,inst_62156);
} else {
if((state_val_62159 === (2))){
var state_62158__$1 = state_62158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62158__$1,(4),ch);
} else {
if((state_val_62159 === (9))){
var inst_62145 = (state_62158[(9)]);
var inst_62138 = inst_62145;
var state_62158__$1 = (function (){var statearr_62169 = state_62158;
(statearr_62169[(7)] = inst_62138);

return statearr_62169;
})();
var statearr_62170_63500 = state_62158__$1;
(statearr_62170_63500[(2)] = null);

(statearr_62170_63500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (5))){
var inst_62138 = (state_62158[(7)]);
var state_62158__$1 = state_62158;
var statearr_62171_63501 = state_62158__$1;
(statearr_62171_63501[(2)] = inst_62138);

(statearr_62171_63501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (10))){
var inst_62152 = (state_62158[(2)]);
var state_62158__$1 = state_62158;
var statearr_62172_63502 = state_62158__$1;
(statearr_62172_63502[(2)] = inst_62152);

(statearr_62172_63502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62159 === (8))){
var inst_62145 = (state_62158[(9)]);
var inst_62148 = cljs.core.deref(inst_62145);
var state_62158__$1 = state_62158;
var statearr_62173_63503 = state_62158__$1;
(statearr_62173_63503[(2)] = inst_62148);

(statearr_62173_63503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto__))
;
return ((function (switch__61678__auto__,c__61781__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__61679__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61679__auto____0 = (function (){
var statearr_62174 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62174[(0)] = cljs$core$async$reduce_$_state_machine__61679__auto__);

(statearr_62174[(1)] = (1));

return statearr_62174;
});
var cljs$core$async$reduce_$_state_machine__61679__auto____1 = (function (state_62158){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62158);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62175){if((e62175 instanceof Object)){
var ex__61682__auto__ = e62175;
var statearr_62176_63504 = state_62158;
(statearr_62176_63504[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63505 = state_62158;
state_62158 = G__63505;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61679__auto__ = function(state_62158){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61679__auto____1.call(this,state_62158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61679__auto____0;
cljs$core$async$reduce_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61679__auto____1;
return cljs$core$async$reduce_$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__))
})();
var state__61783__auto__ = (function (){var statearr_62177 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62177[(6)] = c__61781__auto__);

return statearr_62177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__))
);

return c__61781__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__,f__$1){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__,f__$1){
return (function (state_62183){
var state_val_62184 = (state_62183[(1)]);
if((state_val_62184 === (1))){
var inst_62178 = cljs.core.async.reduce(f__$1,init,ch);
var state_62183__$1 = state_62183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62183__$1,(2),inst_62178);
} else {
if((state_val_62184 === (2))){
var inst_62180 = (state_62183[(2)]);
var inst_62181 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62180) : f__$1.call(null,inst_62180));
var state_62183__$1 = state_62183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62183__$1,inst_62181);
} else {
return null;
}
}
});})(c__61781__auto__,f__$1))
;
return ((function (switch__61678__auto__,c__61781__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__61679__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61679__auto____0 = (function (){
var statearr_62185 = [null,null,null,null,null,null,null];
(statearr_62185[(0)] = cljs$core$async$transduce_$_state_machine__61679__auto__);

(statearr_62185[(1)] = (1));

return statearr_62185;
});
var cljs$core$async$transduce_$_state_machine__61679__auto____1 = (function (state_62183){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62183);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62186){if((e62186 instanceof Object)){
var ex__61682__auto__ = e62186;
var statearr_62187_63507 = state_62183;
(statearr_62187_63507[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63509 = state_62183;
state_62183 = G__63509;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61679__auto__ = function(state_62183){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61679__auto____1.call(this,state_62183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61679__auto____0;
cljs$core$async$transduce_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61679__auto____1;
return cljs$core$async$transduce_$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__,f__$1))
})();
var state__61783__auto__ = (function (){var statearr_62188 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62188[(6)] = c__61781__auto__);

return statearr_62188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__,f__$1))
);

return c__61781__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62190 = arguments.length;
switch (G__62190) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__){
return (function (state_62215){
var state_val_62216 = (state_62215[(1)]);
if((state_val_62216 === (7))){
var inst_62197 = (state_62215[(2)]);
var state_62215__$1 = state_62215;
var statearr_62217_63515 = state_62215__$1;
(statearr_62217_63515[(2)] = inst_62197);

(statearr_62217_63515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (1))){
var inst_62191 = cljs.core.seq(coll);
var inst_62192 = inst_62191;
var state_62215__$1 = (function (){var statearr_62218 = state_62215;
(statearr_62218[(7)] = inst_62192);

return statearr_62218;
})();
var statearr_62219_63518 = state_62215__$1;
(statearr_62219_63518[(2)] = null);

(statearr_62219_63518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (4))){
var inst_62192 = (state_62215[(7)]);
var inst_62195 = cljs.core.first(inst_62192);
var state_62215__$1 = state_62215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62215__$1,(7),ch,inst_62195);
} else {
if((state_val_62216 === (13))){
var inst_62209 = (state_62215[(2)]);
var state_62215__$1 = state_62215;
var statearr_62220_63521 = state_62215__$1;
(statearr_62220_63521[(2)] = inst_62209);

(statearr_62220_63521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (6))){
var inst_62200 = (state_62215[(2)]);
var state_62215__$1 = state_62215;
if(cljs.core.truth_(inst_62200)){
var statearr_62221_63522 = state_62215__$1;
(statearr_62221_63522[(1)] = (8));

} else {
var statearr_62222_63524 = state_62215__$1;
(statearr_62222_63524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (3))){
var inst_62213 = (state_62215[(2)]);
var state_62215__$1 = state_62215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62215__$1,inst_62213);
} else {
if((state_val_62216 === (12))){
var state_62215__$1 = state_62215;
var statearr_62223_63526 = state_62215__$1;
(statearr_62223_63526[(2)] = null);

(statearr_62223_63526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (2))){
var inst_62192 = (state_62215[(7)]);
var state_62215__$1 = state_62215;
if(cljs.core.truth_(inst_62192)){
var statearr_62224_63527 = state_62215__$1;
(statearr_62224_63527[(1)] = (4));

} else {
var statearr_62225_63528 = state_62215__$1;
(statearr_62225_63528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (11))){
var inst_62206 = cljs.core.async.close_BANG_(ch);
var state_62215__$1 = state_62215;
var statearr_62226_63531 = state_62215__$1;
(statearr_62226_63531[(2)] = inst_62206);

(statearr_62226_63531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (9))){
var state_62215__$1 = state_62215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62227_63532 = state_62215__$1;
(statearr_62227_63532[(1)] = (11));

} else {
var statearr_62228_63533 = state_62215__$1;
(statearr_62228_63533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (5))){
var inst_62192 = (state_62215[(7)]);
var state_62215__$1 = state_62215;
var statearr_62229_63534 = state_62215__$1;
(statearr_62229_63534[(2)] = inst_62192);

(statearr_62229_63534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (10))){
var inst_62211 = (state_62215[(2)]);
var state_62215__$1 = state_62215;
var statearr_62230_63535 = state_62215__$1;
(statearr_62230_63535[(2)] = inst_62211);

(statearr_62230_63535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62216 === (8))){
var inst_62192 = (state_62215[(7)]);
var inst_62202 = cljs.core.next(inst_62192);
var inst_62192__$1 = inst_62202;
var state_62215__$1 = (function (){var statearr_62231 = state_62215;
(statearr_62231[(7)] = inst_62192__$1);

return statearr_62231;
})();
var statearr_62232_63537 = state_62215__$1;
(statearr_62232_63537[(2)] = null);

(statearr_62232_63537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto__))
;
return ((function (switch__61678__auto__,c__61781__auto__){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62233 = [null,null,null,null,null,null,null,null];
(statearr_62233[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62233[(1)] = (1));

return statearr_62233;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62215){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62215);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62234){if((e62234 instanceof Object)){
var ex__61682__auto__ = e62234;
var statearr_62235_63538 = state_62215;
(statearr_62235_63538[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63539 = state_62215;
state_62215 = G__63539;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__))
})();
var state__61783__auto__ = (function (){var statearr_62236 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62236[(6)] = c__61781__auto__);

return statearr_62236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__))
);

return c__61781__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62237 = (function (ch,cs,meta62238){
this.ch = ch;
this.cs = cs;
this.meta62238 = meta62238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_62239,meta62238__$1){
var self__ = this;
var _62239__$1 = this;
return (new cljs.core.async.t_cljs$core$async62237(self__.ch,self__.cs,meta62238__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_62239){
var self__ = this;
var _62239__$1 = this;
return self__.meta62238;
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62238","meta62238",-22087794,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async62237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62237";

cljs.core.async.t_cljs$core$async62237.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62237");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62237.
 */
cljs.core.async.__GT_t_cljs$core$async62237 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async62237(ch__$1,cs__$1,meta62238){
return (new cljs.core.async.t_cljs$core$async62237(ch__$1,cs__$1,meta62238));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async62237(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__61781__auto___63561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63561,cs,m,dchan,dctr,done){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63561,cs,m,dchan,dctr,done){
return (function (state_62374){
var state_val_62375 = (state_62374[(1)]);
if((state_val_62375 === (7))){
var inst_62370 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62376_63565 = state_62374__$1;
(statearr_62376_63565[(2)] = inst_62370);

(statearr_62376_63565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (20))){
var inst_62273 = (state_62374[(7)]);
var inst_62285 = cljs.core.first(inst_62273);
var inst_62286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62285,(0),null);
var inst_62287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62285,(1),null);
var state_62374__$1 = (function (){var statearr_62377 = state_62374;
(statearr_62377[(8)] = inst_62286);

return statearr_62377;
})();
if(cljs.core.truth_(inst_62287)){
var statearr_62378_63566 = state_62374__$1;
(statearr_62378_63566[(1)] = (22));

} else {
var statearr_62379_63567 = state_62374__$1;
(statearr_62379_63567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (27))){
var inst_62315 = (state_62374[(9)]);
var inst_62242 = (state_62374[(10)]);
var inst_62317 = (state_62374[(11)]);
var inst_62322 = (state_62374[(12)]);
var inst_62322__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62315,inst_62317);
var inst_62323 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62322__$1,inst_62242,done);
var state_62374__$1 = (function (){var statearr_62380 = state_62374;
(statearr_62380[(12)] = inst_62322__$1);

return statearr_62380;
})();
if(cljs.core.truth_(inst_62323)){
var statearr_62381_63575 = state_62374__$1;
(statearr_62381_63575[(1)] = (30));

} else {
var statearr_62382_63576 = state_62374__$1;
(statearr_62382_63576[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (1))){
var state_62374__$1 = state_62374;
var statearr_62383_63580 = state_62374__$1;
(statearr_62383_63580[(2)] = null);

(statearr_62383_63580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (24))){
var inst_62273 = (state_62374[(7)]);
var inst_62292 = (state_62374[(2)]);
var inst_62293 = cljs.core.next(inst_62273);
var inst_62251 = inst_62293;
var inst_62252 = null;
var inst_62253 = (0);
var inst_62254 = (0);
var state_62374__$1 = (function (){var statearr_62384 = state_62374;
(statearr_62384[(13)] = inst_62251);

(statearr_62384[(14)] = inst_62292);

(statearr_62384[(15)] = inst_62253);

(statearr_62384[(16)] = inst_62254);

(statearr_62384[(17)] = inst_62252);

return statearr_62384;
})();
var statearr_62385_63584 = state_62374__$1;
(statearr_62385_63584[(2)] = null);

(statearr_62385_63584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (39))){
var state_62374__$1 = state_62374;
var statearr_62389_63588 = state_62374__$1;
(statearr_62389_63588[(2)] = null);

(statearr_62389_63588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (4))){
var inst_62242 = (state_62374[(10)]);
var inst_62242__$1 = (state_62374[(2)]);
var inst_62243 = (inst_62242__$1 == null);
var state_62374__$1 = (function (){var statearr_62390 = state_62374;
(statearr_62390[(10)] = inst_62242__$1);

return statearr_62390;
})();
if(cljs.core.truth_(inst_62243)){
var statearr_62391_63589 = state_62374__$1;
(statearr_62391_63589[(1)] = (5));

} else {
var statearr_62392_63590 = state_62374__$1;
(statearr_62392_63590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (15))){
var inst_62251 = (state_62374[(13)]);
var inst_62253 = (state_62374[(15)]);
var inst_62254 = (state_62374[(16)]);
var inst_62252 = (state_62374[(17)]);
var inst_62269 = (state_62374[(2)]);
var inst_62270 = (inst_62254 + (1));
var tmp62386 = inst_62251;
var tmp62387 = inst_62253;
var tmp62388 = inst_62252;
var inst_62251__$1 = tmp62386;
var inst_62252__$1 = tmp62388;
var inst_62253__$1 = tmp62387;
var inst_62254__$1 = inst_62270;
var state_62374__$1 = (function (){var statearr_62393 = state_62374;
(statearr_62393[(13)] = inst_62251__$1);

(statearr_62393[(15)] = inst_62253__$1);

(statearr_62393[(18)] = inst_62269);

(statearr_62393[(16)] = inst_62254__$1);

(statearr_62393[(17)] = inst_62252__$1);

return statearr_62393;
})();
var statearr_62394_63601 = state_62374__$1;
(statearr_62394_63601[(2)] = null);

(statearr_62394_63601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (21))){
var inst_62296 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62398_63602 = state_62374__$1;
(statearr_62398_63602[(2)] = inst_62296);

(statearr_62398_63602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (31))){
var inst_62322 = (state_62374[(12)]);
var inst_62326 = done(null);
var inst_62327 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62322);
var state_62374__$1 = (function (){var statearr_62399 = state_62374;
(statearr_62399[(19)] = inst_62326);

return statearr_62399;
})();
var statearr_62400_63603 = state_62374__$1;
(statearr_62400_63603[(2)] = inst_62327);

(statearr_62400_63603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (32))){
var inst_62315 = (state_62374[(9)]);
var inst_62316 = (state_62374[(20)]);
var inst_62314 = (state_62374[(21)]);
var inst_62317 = (state_62374[(11)]);
var inst_62329 = (state_62374[(2)]);
var inst_62330 = (inst_62317 + (1));
var tmp62395 = inst_62315;
var tmp62396 = inst_62316;
var tmp62397 = inst_62314;
var inst_62314__$1 = tmp62397;
var inst_62315__$1 = tmp62395;
var inst_62316__$1 = tmp62396;
var inst_62317__$1 = inst_62330;
var state_62374__$1 = (function (){var statearr_62401 = state_62374;
(statearr_62401[(9)] = inst_62315__$1);

(statearr_62401[(20)] = inst_62316__$1);

(statearr_62401[(22)] = inst_62329);

(statearr_62401[(21)] = inst_62314__$1);

(statearr_62401[(11)] = inst_62317__$1);

return statearr_62401;
})();
var statearr_62402_63616 = state_62374__$1;
(statearr_62402_63616[(2)] = null);

(statearr_62402_63616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (40))){
var inst_62342 = (state_62374[(23)]);
var inst_62346 = done(null);
var inst_62347 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62342);
var state_62374__$1 = (function (){var statearr_62403 = state_62374;
(statearr_62403[(24)] = inst_62346);

return statearr_62403;
})();
var statearr_62404_63617 = state_62374__$1;
(statearr_62404_63617[(2)] = inst_62347);

(statearr_62404_63617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (33))){
var inst_62333 = (state_62374[(25)]);
var inst_62335 = cljs.core.chunked_seq_QMARK_(inst_62333);
var state_62374__$1 = state_62374;
if(inst_62335){
var statearr_62405_63618 = state_62374__$1;
(statearr_62405_63618[(1)] = (36));

} else {
var statearr_62406_63619 = state_62374__$1;
(statearr_62406_63619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (13))){
var inst_62263 = (state_62374[(26)]);
var inst_62266 = cljs.core.async.close_BANG_(inst_62263);
var state_62374__$1 = state_62374;
var statearr_62407_63623 = state_62374__$1;
(statearr_62407_63623[(2)] = inst_62266);

(statearr_62407_63623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (22))){
var inst_62286 = (state_62374[(8)]);
var inst_62289 = cljs.core.async.close_BANG_(inst_62286);
var state_62374__$1 = state_62374;
var statearr_62408_63629 = state_62374__$1;
(statearr_62408_63629[(2)] = inst_62289);

(statearr_62408_63629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (36))){
var inst_62333 = (state_62374[(25)]);
var inst_62337 = cljs.core.chunk_first(inst_62333);
var inst_62338 = cljs.core.chunk_rest(inst_62333);
var inst_62339 = cljs.core.count(inst_62337);
var inst_62314 = inst_62338;
var inst_62315 = inst_62337;
var inst_62316 = inst_62339;
var inst_62317 = (0);
var state_62374__$1 = (function (){var statearr_62409 = state_62374;
(statearr_62409[(9)] = inst_62315);

(statearr_62409[(20)] = inst_62316);

(statearr_62409[(21)] = inst_62314);

(statearr_62409[(11)] = inst_62317);

return statearr_62409;
})();
var statearr_62410_63630 = state_62374__$1;
(statearr_62410_63630[(2)] = null);

(statearr_62410_63630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (41))){
var inst_62333 = (state_62374[(25)]);
var inst_62349 = (state_62374[(2)]);
var inst_62350 = cljs.core.next(inst_62333);
var inst_62314 = inst_62350;
var inst_62315 = null;
var inst_62316 = (0);
var inst_62317 = (0);
var state_62374__$1 = (function (){var statearr_62411 = state_62374;
(statearr_62411[(9)] = inst_62315);

(statearr_62411[(20)] = inst_62316);

(statearr_62411[(27)] = inst_62349);

(statearr_62411[(21)] = inst_62314);

(statearr_62411[(11)] = inst_62317);

return statearr_62411;
})();
var statearr_62412_63635 = state_62374__$1;
(statearr_62412_63635[(2)] = null);

(statearr_62412_63635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (43))){
var state_62374__$1 = state_62374;
var statearr_62413_63636 = state_62374__$1;
(statearr_62413_63636[(2)] = null);

(statearr_62413_63636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (29))){
var inst_62358 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62414_63638 = state_62374__$1;
(statearr_62414_63638[(2)] = inst_62358);

(statearr_62414_63638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (44))){
var inst_62367 = (state_62374[(2)]);
var state_62374__$1 = (function (){var statearr_62415 = state_62374;
(statearr_62415[(28)] = inst_62367);

return statearr_62415;
})();
var statearr_62416_63639 = state_62374__$1;
(statearr_62416_63639[(2)] = null);

(statearr_62416_63639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (6))){
var inst_62306 = (state_62374[(29)]);
var inst_62305 = cljs.core.deref(cs);
var inst_62306__$1 = cljs.core.keys(inst_62305);
var inst_62307 = cljs.core.count(inst_62306__$1);
var inst_62308 = cljs.core.reset_BANG_(dctr,inst_62307);
var inst_62313 = cljs.core.seq(inst_62306__$1);
var inst_62314 = inst_62313;
var inst_62315 = null;
var inst_62316 = (0);
var inst_62317 = (0);
var state_62374__$1 = (function (){var statearr_62417 = state_62374;
(statearr_62417[(9)] = inst_62315);

(statearr_62417[(20)] = inst_62316);

(statearr_62417[(29)] = inst_62306__$1);

(statearr_62417[(21)] = inst_62314);

(statearr_62417[(30)] = inst_62308);

(statearr_62417[(11)] = inst_62317);

return statearr_62417;
})();
var statearr_62418_63640 = state_62374__$1;
(statearr_62418_63640[(2)] = null);

(statearr_62418_63640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (28))){
var inst_62333 = (state_62374[(25)]);
var inst_62314 = (state_62374[(21)]);
var inst_62333__$1 = cljs.core.seq(inst_62314);
var state_62374__$1 = (function (){var statearr_62419 = state_62374;
(statearr_62419[(25)] = inst_62333__$1);

return statearr_62419;
})();
if(inst_62333__$1){
var statearr_62420_63641 = state_62374__$1;
(statearr_62420_63641[(1)] = (33));

} else {
var statearr_62421_63643 = state_62374__$1;
(statearr_62421_63643[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (25))){
var inst_62316 = (state_62374[(20)]);
var inst_62317 = (state_62374[(11)]);
var inst_62319 = (inst_62317 < inst_62316);
var inst_62320 = inst_62319;
var state_62374__$1 = state_62374;
if(cljs.core.truth_(inst_62320)){
var statearr_62422_63646 = state_62374__$1;
(statearr_62422_63646[(1)] = (27));

} else {
var statearr_62423_63647 = state_62374__$1;
(statearr_62423_63647[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (34))){
var state_62374__$1 = state_62374;
var statearr_62424_63649 = state_62374__$1;
(statearr_62424_63649[(2)] = null);

(statearr_62424_63649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (17))){
var state_62374__$1 = state_62374;
var statearr_62425_63650 = state_62374__$1;
(statearr_62425_63650[(2)] = null);

(statearr_62425_63650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (3))){
var inst_62372 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62374__$1,inst_62372);
} else {
if((state_val_62375 === (12))){
var inst_62301 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62426_63653 = state_62374__$1;
(statearr_62426_63653[(2)] = inst_62301);

(statearr_62426_63653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (2))){
var state_62374__$1 = state_62374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62374__$1,(4),ch);
} else {
if((state_val_62375 === (23))){
var state_62374__$1 = state_62374;
var statearr_62427_63654 = state_62374__$1;
(statearr_62427_63654[(2)] = null);

(statearr_62427_63654[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (35))){
var inst_62356 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62428_63655 = state_62374__$1;
(statearr_62428_63655[(2)] = inst_62356);

(statearr_62428_63655[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (19))){
var inst_62273 = (state_62374[(7)]);
var inst_62277 = cljs.core.chunk_first(inst_62273);
var inst_62278 = cljs.core.chunk_rest(inst_62273);
var inst_62279 = cljs.core.count(inst_62277);
var inst_62251 = inst_62278;
var inst_62252 = inst_62277;
var inst_62253 = inst_62279;
var inst_62254 = (0);
var state_62374__$1 = (function (){var statearr_62429 = state_62374;
(statearr_62429[(13)] = inst_62251);

(statearr_62429[(15)] = inst_62253);

(statearr_62429[(16)] = inst_62254);

(statearr_62429[(17)] = inst_62252);

return statearr_62429;
})();
var statearr_62430_63659 = state_62374__$1;
(statearr_62430_63659[(2)] = null);

(statearr_62430_63659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (11))){
var inst_62251 = (state_62374[(13)]);
var inst_62273 = (state_62374[(7)]);
var inst_62273__$1 = cljs.core.seq(inst_62251);
var state_62374__$1 = (function (){var statearr_62431 = state_62374;
(statearr_62431[(7)] = inst_62273__$1);

return statearr_62431;
})();
if(inst_62273__$1){
var statearr_62432_63660 = state_62374__$1;
(statearr_62432_63660[(1)] = (16));

} else {
var statearr_62433_63661 = state_62374__$1;
(statearr_62433_63661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (9))){
var inst_62303 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62434_63662 = state_62374__$1;
(statearr_62434_63662[(2)] = inst_62303);

(statearr_62434_63662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (5))){
var inst_62249 = cljs.core.deref(cs);
var inst_62250 = cljs.core.seq(inst_62249);
var inst_62251 = inst_62250;
var inst_62252 = null;
var inst_62253 = (0);
var inst_62254 = (0);
var state_62374__$1 = (function (){var statearr_62435 = state_62374;
(statearr_62435[(13)] = inst_62251);

(statearr_62435[(15)] = inst_62253);

(statearr_62435[(16)] = inst_62254);

(statearr_62435[(17)] = inst_62252);

return statearr_62435;
})();
var statearr_62436_63667 = state_62374__$1;
(statearr_62436_63667[(2)] = null);

(statearr_62436_63667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (14))){
var state_62374__$1 = state_62374;
var statearr_62437_63668 = state_62374__$1;
(statearr_62437_63668[(2)] = null);

(statearr_62437_63668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (45))){
var inst_62364 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62438_63669 = state_62374__$1;
(statearr_62438_63669[(2)] = inst_62364);

(statearr_62438_63669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (26))){
var inst_62306 = (state_62374[(29)]);
var inst_62360 = (state_62374[(2)]);
var inst_62361 = cljs.core.seq(inst_62306);
var state_62374__$1 = (function (){var statearr_62439 = state_62374;
(statearr_62439[(31)] = inst_62360);

return statearr_62439;
})();
if(inst_62361){
var statearr_62440_63674 = state_62374__$1;
(statearr_62440_63674[(1)] = (42));

} else {
var statearr_62441_63675 = state_62374__$1;
(statearr_62441_63675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (16))){
var inst_62273 = (state_62374[(7)]);
var inst_62275 = cljs.core.chunked_seq_QMARK_(inst_62273);
var state_62374__$1 = state_62374;
if(inst_62275){
var statearr_62442_63676 = state_62374__$1;
(statearr_62442_63676[(1)] = (19));

} else {
var statearr_62443_63677 = state_62374__$1;
(statearr_62443_63677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (38))){
var inst_62353 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62444_63681 = state_62374__$1;
(statearr_62444_63681[(2)] = inst_62353);

(statearr_62444_63681[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (30))){
var state_62374__$1 = state_62374;
var statearr_62445_63683 = state_62374__$1;
(statearr_62445_63683[(2)] = null);

(statearr_62445_63683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (10))){
var inst_62254 = (state_62374[(16)]);
var inst_62252 = (state_62374[(17)]);
var inst_62262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62252,inst_62254);
var inst_62263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62262,(0),null);
var inst_62264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62262,(1),null);
var state_62374__$1 = (function (){var statearr_62446 = state_62374;
(statearr_62446[(26)] = inst_62263);

return statearr_62446;
})();
if(cljs.core.truth_(inst_62264)){
var statearr_62447_63687 = state_62374__$1;
(statearr_62447_63687[(1)] = (13));

} else {
var statearr_62448_63688 = state_62374__$1;
(statearr_62448_63688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (18))){
var inst_62299 = (state_62374[(2)]);
var state_62374__$1 = state_62374;
var statearr_62449_63689 = state_62374__$1;
(statearr_62449_63689[(2)] = inst_62299);

(statearr_62449_63689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (42))){
var state_62374__$1 = state_62374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62374__$1,(45),dchan);
} else {
if((state_val_62375 === (37))){
var inst_62242 = (state_62374[(10)]);
var inst_62342 = (state_62374[(23)]);
var inst_62333 = (state_62374[(25)]);
var inst_62342__$1 = cljs.core.first(inst_62333);
var inst_62343 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62342__$1,inst_62242,done);
var state_62374__$1 = (function (){var statearr_62450 = state_62374;
(statearr_62450[(23)] = inst_62342__$1);

return statearr_62450;
})();
if(cljs.core.truth_(inst_62343)){
var statearr_62451_63691 = state_62374__$1;
(statearr_62451_63691[(1)] = (39));

} else {
var statearr_62452_63692 = state_62374__$1;
(statearr_62452_63692[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62375 === (8))){
var inst_62253 = (state_62374[(15)]);
var inst_62254 = (state_62374[(16)]);
var inst_62256 = (inst_62254 < inst_62253);
var inst_62257 = inst_62256;
var state_62374__$1 = state_62374;
if(cljs.core.truth_(inst_62257)){
var statearr_62453_63693 = state_62374__$1;
(statearr_62453_63693[(1)] = (10));

} else {
var statearr_62454_63694 = state_62374__$1;
(statearr_62454_63694[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63561,cs,m,dchan,dctr,done))
;
return ((function (switch__61678__auto__,c__61781__auto___63561,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__61679__auto__ = null;
var cljs$core$async$mult_$_state_machine__61679__auto____0 = (function (){
var statearr_62455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62455[(0)] = cljs$core$async$mult_$_state_machine__61679__auto__);

(statearr_62455[(1)] = (1));

return statearr_62455;
});
var cljs$core$async$mult_$_state_machine__61679__auto____1 = (function (state_62374){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62374);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62456){if((e62456 instanceof Object)){
var ex__61682__auto__ = e62456;
var statearr_62457_63703 = state_62374;
(statearr_62457_63703[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63706 = state_62374;
state_62374 = G__63706;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61679__auto__ = function(state_62374){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61679__auto____1.call(this,state_62374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61679__auto____0;
cljs$core$async$mult_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61679__auto____1;
return cljs$core$async$mult_$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63561,cs,m,dchan,dctr,done))
})();
var state__61783__auto__ = (function (){var statearr_62458 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62458[(6)] = c__61781__auto___63561);

return statearr_62458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63561,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62460 = arguments.length;
switch (G__62460) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63734 = arguments.length;
var i__4731__auto___63735 = (0);
while(true){
if((i__4731__auto___63735 < len__4730__auto___63734)){
args__4736__auto__.push((arguments[i__4731__auto___63735]));

var G__63736 = (i__4731__auto___63735 + (1));
i__4731__auto___63735 = G__63736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62465){
var map__62466 = p__62465;
var map__62466__$1 = (((((!((map__62466 == null))))?(((((map__62466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62466):map__62466);
var opts = map__62466__$1;
var statearr_62468_63741 = state;
(statearr_62468_63741[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__62466,map__62466__$1,opts){
return (function (val){
var statearr_62469_63746 = state;
(statearr_62469_63746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__62466,map__62466__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_62470_63748 = state;
(statearr_62470_63748[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62461){
var G__62462 = cljs.core.first(seq62461);
var seq62461__$1 = cljs.core.next(seq62461);
var G__62463 = cljs.core.first(seq62461__$1);
var seq62461__$2 = cljs.core.next(seq62461__$1);
var G__62464 = cljs.core.first(seq62461__$2);
var seq62461__$3 = cljs.core.next(seq62461__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62462,G__62463,G__62464,seq62461__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62471 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62472){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62472 = meta62472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62473,meta62472__$1){
var self__ = this;
var _62473__$1 = this;
return (new cljs.core.async.t_cljs$core$async62471(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62472__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62473){
var self__ = this;
var _62473__$1 = this;
return self__.meta62472;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62472","meta62472",-567412777,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62471";

cljs.core.async.t_cljs$core$async62471.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62471");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62471.
 */
cljs.core.async.__GT_t_cljs$core$async62471 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async62471(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62472){
return (new cljs.core.async.t_cljs$core$async62471(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62472));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async62471(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61781__auto___63779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62575){
var state_val_62576 = (state_62575[(1)]);
if((state_val_62576 === (7))){
var inst_62490 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
var statearr_62577_63785 = state_62575__$1;
(statearr_62577_63785[(2)] = inst_62490);

(statearr_62577_63785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (20))){
var inst_62502 = (state_62575[(7)]);
var state_62575__$1 = state_62575;
var statearr_62578_63789 = state_62575__$1;
(statearr_62578_63789[(2)] = inst_62502);

(statearr_62578_63789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (27))){
var state_62575__$1 = state_62575;
var statearr_62579_63791 = state_62575__$1;
(statearr_62579_63791[(2)] = null);

(statearr_62579_63791[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (1))){
var inst_62477 = (state_62575[(8)]);
var inst_62477__$1 = calc_state();
var inst_62479 = (inst_62477__$1 == null);
var inst_62480 = cljs.core.not(inst_62479);
var state_62575__$1 = (function (){var statearr_62580 = state_62575;
(statearr_62580[(8)] = inst_62477__$1);

return statearr_62580;
})();
if(inst_62480){
var statearr_62581_63796 = state_62575__$1;
(statearr_62581_63796[(1)] = (2));

} else {
var statearr_62582_63798 = state_62575__$1;
(statearr_62582_63798[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (24))){
var inst_62549 = (state_62575[(9)]);
var inst_62526 = (state_62575[(10)]);
var inst_62535 = (state_62575[(11)]);
var inst_62549__$1 = (inst_62526.cljs$core$IFn$_invoke$arity$1 ? inst_62526.cljs$core$IFn$_invoke$arity$1(inst_62535) : inst_62526.call(null,inst_62535));
var state_62575__$1 = (function (){var statearr_62583 = state_62575;
(statearr_62583[(9)] = inst_62549__$1);

return statearr_62583;
})();
if(cljs.core.truth_(inst_62549__$1)){
var statearr_62584_63799 = state_62575__$1;
(statearr_62584_63799[(1)] = (29));

} else {
var statearr_62585_63800 = state_62575__$1;
(statearr_62585_63800[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (4))){
var inst_62493 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62493)){
var statearr_62586_63801 = state_62575__$1;
(statearr_62586_63801[(1)] = (8));

} else {
var statearr_62587_63802 = state_62575__$1;
(statearr_62587_63802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (15))){
var inst_62520 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62520)){
var statearr_62588_63809 = state_62575__$1;
(statearr_62588_63809[(1)] = (19));

} else {
var statearr_62589_63810 = state_62575__$1;
(statearr_62589_63810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (21))){
var inst_62525 = (state_62575[(12)]);
var inst_62525__$1 = (state_62575[(2)]);
var inst_62526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62575__$1 = (function (){var statearr_62590 = state_62575;
(statearr_62590[(13)] = inst_62527);

(statearr_62590[(12)] = inst_62525__$1);

(statearr_62590[(10)] = inst_62526);

return statearr_62590;
})();
return cljs.core.async.ioc_alts_BANG_(state_62575__$1,(22),inst_62528);
} else {
if((state_val_62576 === (31))){
var inst_62557 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62557)){
var statearr_62591_63813 = state_62575__$1;
(statearr_62591_63813[(1)] = (32));

} else {
var statearr_62592_63814 = state_62575__$1;
(statearr_62592_63814[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (32))){
var inst_62534 = (state_62575[(14)]);
var state_62575__$1 = state_62575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62575__$1,(35),out,inst_62534);
} else {
if((state_val_62576 === (33))){
var inst_62525 = (state_62575[(12)]);
var inst_62502 = inst_62525;
var state_62575__$1 = (function (){var statearr_62593 = state_62575;
(statearr_62593[(7)] = inst_62502);

return statearr_62593;
})();
var statearr_62594_63819 = state_62575__$1;
(statearr_62594_63819[(2)] = null);

(statearr_62594_63819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (13))){
var inst_62502 = (state_62575[(7)]);
var inst_62509 = inst_62502.cljs$lang$protocol_mask$partition0$;
var inst_62510 = (inst_62509 & (64));
var inst_62511 = inst_62502.cljs$core$ISeq$;
var inst_62512 = (cljs.core.PROTOCOL_SENTINEL === inst_62511);
var inst_62513 = ((inst_62510) || (inst_62512));
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62513)){
var statearr_62595_63821 = state_62575__$1;
(statearr_62595_63821[(1)] = (16));

} else {
var statearr_62596_63822 = state_62575__$1;
(statearr_62596_63822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (22))){
var inst_62534 = (state_62575[(14)]);
var inst_62535 = (state_62575[(11)]);
var inst_62533 = (state_62575[(2)]);
var inst_62534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62533,(0),null);
var inst_62535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62533,(1),null);
var inst_62536 = (inst_62534__$1 == null);
var inst_62537 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62535__$1,change);
var inst_62538 = ((inst_62536) || (inst_62537));
var state_62575__$1 = (function (){var statearr_62597 = state_62575;
(statearr_62597[(14)] = inst_62534__$1);

(statearr_62597[(11)] = inst_62535__$1);

return statearr_62597;
})();
if(cljs.core.truth_(inst_62538)){
var statearr_62598_63824 = state_62575__$1;
(statearr_62598_63824[(1)] = (23));

} else {
var statearr_62599_63825 = state_62575__$1;
(statearr_62599_63825[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (36))){
var inst_62525 = (state_62575[(12)]);
var inst_62502 = inst_62525;
var state_62575__$1 = (function (){var statearr_62600 = state_62575;
(statearr_62600[(7)] = inst_62502);

return statearr_62600;
})();
var statearr_62601_63827 = state_62575__$1;
(statearr_62601_63827[(2)] = null);

(statearr_62601_63827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (29))){
var inst_62549 = (state_62575[(9)]);
var state_62575__$1 = state_62575;
var statearr_62602_63828 = state_62575__$1;
(statearr_62602_63828[(2)] = inst_62549);

(statearr_62602_63828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (6))){
var state_62575__$1 = state_62575;
var statearr_62603_63831 = state_62575__$1;
(statearr_62603_63831[(2)] = false);

(statearr_62603_63831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (28))){
var inst_62545 = (state_62575[(2)]);
var inst_62546 = calc_state();
var inst_62502 = inst_62546;
var state_62575__$1 = (function (){var statearr_62604 = state_62575;
(statearr_62604[(7)] = inst_62502);

(statearr_62604[(15)] = inst_62545);

return statearr_62604;
})();
var statearr_62605_63834 = state_62575__$1;
(statearr_62605_63834[(2)] = null);

(statearr_62605_63834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (25))){
var inst_62571 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
var statearr_62606_63835 = state_62575__$1;
(statearr_62606_63835[(2)] = inst_62571);

(statearr_62606_63835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (34))){
var inst_62569 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
var statearr_62607_63839 = state_62575__$1;
(statearr_62607_63839[(2)] = inst_62569);

(statearr_62607_63839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (17))){
var state_62575__$1 = state_62575;
var statearr_62608_63840 = state_62575__$1;
(statearr_62608_63840[(2)] = false);

(statearr_62608_63840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (3))){
var state_62575__$1 = state_62575;
var statearr_62609_63841 = state_62575__$1;
(statearr_62609_63841[(2)] = false);

(statearr_62609_63841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (12))){
var inst_62573 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62575__$1,inst_62573);
} else {
if((state_val_62576 === (2))){
var inst_62477 = (state_62575[(8)]);
var inst_62482 = inst_62477.cljs$lang$protocol_mask$partition0$;
var inst_62483 = (inst_62482 & (64));
var inst_62484 = inst_62477.cljs$core$ISeq$;
var inst_62485 = (cljs.core.PROTOCOL_SENTINEL === inst_62484);
var inst_62486 = ((inst_62483) || (inst_62485));
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62486)){
var statearr_62610_63845 = state_62575__$1;
(statearr_62610_63845[(1)] = (5));

} else {
var statearr_62611_63846 = state_62575__$1;
(statearr_62611_63846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (23))){
var inst_62534 = (state_62575[(14)]);
var inst_62540 = (inst_62534 == null);
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62540)){
var statearr_62612_63847 = state_62575__$1;
(statearr_62612_63847[(1)] = (26));

} else {
var statearr_62613_63848 = state_62575__$1;
(statearr_62613_63848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (35))){
var inst_62560 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
if(cljs.core.truth_(inst_62560)){
var statearr_62614_63850 = state_62575__$1;
(statearr_62614_63850[(1)] = (36));

} else {
var statearr_62615_63852 = state_62575__$1;
(statearr_62615_63852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (19))){
var inst_62502 = (state_62575[(7)]);
var inst_62522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62502);
var state_62575__$1 = state_62575;
var statearr_62616_63855 = state_62575__$1;
(statearr_62616_63855[(2)] = inst_62522);

(statearr_62616_63855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (11))){
var inst_62502 = (state_62575[(7)]);
var inst_62506 = (inst_62502 == null);
var inst_62507 = cljs.core.not(inst_62506);
var state_62575__$1 = state_62575;
if(inst_62507){
var statearr_62617_63858 = state_62575__$1;
(statearr_62617_63858[(1)] = (13));

} else {
var statearr_62618_63859 = state_62575__$1;
(statearr_62618_63859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (9))){
var inst_62477 = (state_62575[(8)]);
var state_62575__$1 = state_62575;
var statearr_62619_63871 = state_62575__$1;
(statearr_62619_63871[(2)] = inst_62477);

(statearr_62619_63871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (5))){
var state_62575__$1 = state_62575;
var statearr_62620_63872 = state_62575__$1;
(statearr_62620_63872[(2)] = true);

(statearr_62620_63872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (14))){
var state_62575__$1 = state_62575;
var statearr_62621_63874 = state_62575__$1;
(statearr_62621_63874[(2)] = false);

(statearr_62621_63874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (26))){
var inst_62535 = (state_62575[(11)]);
var inst_62542 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62535);
var state_62575__$1 = state_62575;
var statearr_62622_63879 = state_62575__$1;
(statearr_62622_63879[(2)] = inst_62542);

(statearr_62622_63879[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (16))){
var state_62575__$1 = state_62575;
var statearr_62623_63880 = state_62575__$1;
(statearr_62623_63880[(2)] = true);

(statearr_62623_63880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (38))){
var inst_62565 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
var statearr_62624_63881 = state_62575__$1;
(statearr_62624_63881[(2)] = inst_62565);

(statearr_62624_63881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (30))){
var inst_62527 = (state_62575[(13)]);
var inst_62526 = (state_62575[(10)]);
var inst_62535 = (state_62575[(11)]);
var inst_62552 = cljs.core.empty_QMARK_(inst_62526);
var inst_62553 = (inst_62527.cljs$core$IFn$_invoke$arity$1 ? inst_62527.cljs$core$IFn$_invoke$arity$1(inst_62535) : inst_62527.call(null,inst_62535));
var inst_62554 = cljs.core.not(inst_62553);
var inst_62555 = ((inst_62552) && (inst_62554));
var state_62575__$1 = state_62575;
var statearr_62625_63882 = state_62575__$1;
(statearr_62625_63882[(2)] = inst_62555);

(statearr_62625_63882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (10))){
var inst_62477 = (state_62575[(8)]);
var inst_62498 = (state_62575[(2)]);
var inst_62499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62498,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62498,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62498,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62502 = inst_62477;
var state_62575__$1 = (function (){var statearr_62626 = state_62575;
(statearr_62626[(7)] = inst_62502);

(statearr_62626[(16)] = inst_62499);

(statearr_62626[(17)] = inst_62500);

(statearr_62626[(18)] = inst_62501);

return statearr_62626;
})();
var statearr_62627_63883 = state_62575__$1;
(statearr_62627_63883[(2)] = null);

(statearr_62627_63883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (18))){
var inst_62517 = (state_62575[(2)]);
var state_62575__$1 = state_62575;
var statearr_62628_63885 = state_62575__$1;
(statearr_62628_63885[(2)] = inst_62517);

(statearr_62628_63885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (37))){
var state_62575__$1 = state_62575;
var statearr_62629_63887 = state_62575__$1;
(statearr_62629_63887[(2)] = null);

(statearr_62629_63887[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62576 === (8))){
var inst_62477 = (state_62575[(8)]);
var inst_62495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62477);
var state_62575__$1 = state_62575;
var statearr_62630_63888 = state_62575__$1;
(statearr_62630_63888[(2)] = inst_62495);

(statearr_62630_63888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__61678__auto__,c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__61679__auto__ = null;
var cljs$core$async$mix_$_state_machine__61679__auto____0 = (function (){
var statearr_62631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62631[(0)] = cljs$core$async$mix_$_state_machine__61679__auto__);

(statearr_62631[(1)] = (1));

return statearr_62631;
});
var cljs$core$async$mix_$_state_machine__61679__auto____1 = (function (state_62575){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62575);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62632){if((e62632 instanceof Object)){
var ex__61682__auto__ = e62632;
var statearr_62633_63893 = state_62575;
(statearr_62633_63893[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63894 = state_62575;
state_62575 = G__63894;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61679__auto__ = function(state_62575){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61679__auto____1.call(this,state_62575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61679__auto____0;
cljs$core$async$mix_$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61679__auto____1;
return cljs$core$async$mix_$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__61783__auto__ = (function (){var statearr_62634 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62634[(6)] = c__61781__auto___63779);

return statearr_62634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63779,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62636 = arguments.length;
switch (G__62636) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__62639 = arguments.length;
switch (G__62639) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__62637_SHARP_){
if(cljs.core.truth_((p1__62637_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62637_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62637_SHARP_.call(null,topic)))){
return p1__62637_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62637_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62640 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62641){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62641 = meta62641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62642,meta62641__$1){
var self__ = this;
var _62642__$1 = this;
return (new cljs.core.async.t_cljs$core$async62640(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62641__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62642){
var self__ = this;
var _62642__$1 = this;
return self__.meta62641;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62641","meta62641",1896033802,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62640";

cljs.core.async.t_cljs$core$async62640.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62640");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62640.
 */
cljs.core.async.__GT_t_cljs$core$async62640 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62641){
return (new cljs.core.async.t_cljs$core$async62640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62641));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62640(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61781__auto___63937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___63937,mults,ensure_mult,p){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___63937,mults,ensure_mult,p){
return (function (state_62714){
var state_val_62715 = (state_62714[(1)]);
if((state_val_62715 === (7))){
var inst_62710 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62716_63943 = state_62714__$1;
(statearr_62716_63943[(2)] = inst_62710);

(statearr_62716_63943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (20))){
var state_62714__$1 = state_62714;
var statearr_62717_63944 = state_62714__$1;
(statearr_62717_63944[(2)] = null);

(statearr_62717_63944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (1))){
var state_62714__$1 = state_62714;
var statearr_62718_63948 = state_62714__$1;
(statearr_62718_63948[(2)] = null);

(statearr_62718_63948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (24))){
var inst_62693 = (state_62714[(7)]);
var inst_62702 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62693);
var state_62714__$1 = state_62714;
var statearr_62719_63949 = state_62714__$1;
(statearr_62719_63949[(2)] = inst_62702);

(statearr_62719_63949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (4))){
var inst_62645 = (state_62714[(8)]);
var inst_62645__$1 = (state_62714[(2)]);
var inst_62646 = (inst_62645__$1 == null);
var state_62714__$1 = (function (){var statearr_62720 = state_62714;
(statearr_62720[(8)] = inst_62645__$1);

return statearr_62720;
})();
if(cljs.core.truth_(inst_62646)){
var statearr_62721_63952 = state_62714__$1;
(statearr_62721_63952[(1)] = (5));

} else {
var statearr_62722_63953 = state_62714__$1;
(statearr_62722_63953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (15))){
var inst_62687 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62723_63954 = state_62714__$1;
(statearr_62723_63954[(2)] = inst_62687);

(statearr_62723_63954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (21))){
var inst_62707 = (state_62714[(2)]);
var state_62714__$1 = (function (){var statearr_62724 = state_62714;
(statearr_62724[(9)] = inst_62707);

return statearr_62724;
})();
var statearr_62725_63955 = state_62714__$1;
(statearr_62725_63955[(2)] = null);

(statearr_62725_63955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (13))){
var inst_62669 = (state_62714[(10)]);
var inst_62671 = cljs.core.chunked_seq_QMARK_(inst_62669);
var state_62714__$1 = state_62714;
if(inst_62671){
var statearr_62726_63958 = state_62714__$1;
(statearr_62726_63958[(1)] = (16));

} else {
var statearr_62727_63959 = state_62714__$1;
(statearr_62727_63959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (22))){
var inst_62699 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
if(cljs.core.truth_(inst_62699)){
var statearr_62728_63960 = state_62714__$1;
(statearr_62728_63960[(1)] = (23));

} else {
var statearr_62729_63962 = state_62714__$1;
(statearr_62729_63962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (6))){
var inst_62695 = (state_62714[(11)]);
var inst_62693 = (state_62714[(7)]);
var inst_62645 = (state_62714[(8)]);
var inst_62693__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62645) : topic_fn.call(null,inst_62645));
var inst_62694 = cljs.core.deref(mults);
var inst_62695__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62694,inst_62693__$1);
var state_62714__$1 = (function (){var statearr_62730 = state_62714;
(statearr_62730[(11)] = inst_62695__$1);

(statearr_62730[(7)] = inst_62693__$1);

return statearr_62730;
})();
if(cljs.core.truth_(inst_62695__$1)){
var statearr_62731_63963 = state_62714__$1;
(statearr_62731_63963[(1)] = (19));

} else {
var statearr_62732_63964 = state_62714__$1;
(statearr_62732_63964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (25))){
var inst_62704 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62733_63965 = state_62714__$1;
(statearr_62733_63965[(2)] = inst_62704);

(statearr_62733_63965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (17))){
var inst_62669 = (state_62714[(10)]);
var inst_62678 = cljs.core.first(inst_62669);
var inst_62679 = cljs.core.async.muxch_STAR_(inst_62678);
var inst_62680 = cljs.core.async.close_BANG_(inst_62679);
var inst_62681 = cljs.core.next(inst_62669);
var inst_62655 = inst_62681;
var inst_62656 = null;
var inst_62657 = (0);
var inst_62658 = (0);
var state_62714__$1 = (function (){var statearr_62734 = state_62714;
(statearr_62734[(12)] = inst_62656);

(statearr_62734[(13)] = inst_62680);

(statearr_62734[(14)] = inst_62657);

(statearr_62734[(15)] = inst_62655);

(statearr_62734[(16)] = inst_62658);

return statearr_62734;
})();
var statearr_62735_63972 = state_62714__$1;
(statearr_62735_63972[(2)] = null);

(statearr_62735_63972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (3))){
var inst_62712 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62714__$1,inst_62712);
} else {
if((state_val_62715 === (12))){
var inst_62689 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62736_63975 = state_62714__$1;
(statearr_62736_63975[(2)] = inst_62689);

(statearr_62736_63975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (2))){
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62714__$1,(4),ch);
} else {
if((state_val_62715 === (23))){
var state_62714__$1 = state_62714;
var statearr_62737_63978 = state_62714__$1;
(statearr_62737_63978[(2)] = null);

(statearr_62737_63978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (19))){
var inst_62695 = (state_62714[(11)]);
var inst_62645 = (state_62714[(8)]);
var inst_62697 = cljs.core.async.muxch_STAR_(inst_62695);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62714__$1,(22),inst_62697,inst_62645);
} else {
if((state_val_62715 === (11))){
var inst_62655 = (state_62714[(15)]);
var inst_62669 = (state_62714[(10)]);
var inst_62669__$1 = cljs.core.seq(inst_62655);
var state_62714__$1 = (function (){var statearr_62738 = state_62714;
(statearr_62738[(10)] = inst_62669__$1);

return statearr_62738;
})();
if(inst_62669__$1){
var statearr_62739_63985 = state_62714__$1;
(statearr_62739_63985[(1)] = (13));

} else {
var statearr_62740_63986 = state_62714__$1;
(statearr_62740_63986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (9))){
var inst_62691 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62741_63989 = state_62714__$1;
(statearr_62741_63989[(2)] = inst_62691);

(statearr_62741_63989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (5))){
var inst_62652 = cljs.core.deref(mults);
var inst_62653 = cljs.core.vals(inst_62652);
var inst_62654 = cljs.core.seq(inst_62653);
var inst_62655 = inst_62654;
var inst_62656 = null;
var inst_62657 = (0);
var inst_62658 = (0);
var state_62714__$1 = (function (){var statearr_62742 = state_62714;
(statearr_62742[(12)] = inst_62656);

(statearr_62742[(14)] = inst_62657);

(statearr_62742[(15)] = inst_62655);

(statearr_62742[(16)] = inst_62658);

return statearr_62742;
})();
var statearr_62743_63990 = state_62714__$1;
(statearr_62743_63990[(2)] = null);

(statearr_62743_63990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (14))){
var state_62714__$1 = state_62714;
var statearr_62747_63991 = state_62714__$1;
(statearr_62747_63991[(2)] = null);

(statearr_62747_63991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (16))){
var inst_62669 = (state_62714[(10)]);
var inst_62673 = cljs.core.chunk_first(inst_62669);
var inst_62674 = cljs.core.chunk_rest(inst_62669);
var inst_62675 = cljs.core.count(inst_62673);
var inst_62655 = inst_62674;
var inst_62656 = inst_62673;
var inst_62657 = inst_62675;
var inst_62658 = (0);
var state_62714__$1 = (function (){var statearr_62748 = state_62714;
(statearr_62748[(12)] = inst_62656);

(statearr_62748[(14)] = inst_62657);

(statearr_62748[(15)] = inst_62655);

(statearr_62748[(16)] = inst_62658);

return statearr_62748;
})();
var statearr_62749_63997 = state_62714__$1;
(statearr_62749_63997[(2)] = null);

(statearr_62749_63997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (10))){
var inst_62656 = (state_62714[(12)]);
var inst_62657 = (state_62714[(14)]);
var inst_62655 = (state_62714[(15)]);
var inst_62658 = (state_62714[(16)]);
var inst_62663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62656,inst_62658);
var inst_62664 = cljs.core.async.muxch_STAR_(inst_62663);
var inst_62665 = cljs.core.async.close_BANG_(inst_62664);
var inst_62666 = (inst_62658 + (1));
var tmp62744 = inst_62656;
var tmp62745 = inst_62657;
var tmp62746 = inst_62655;
var inst_62655__$1 = tmp62746;
var inst_62656__$1 = tmp62744;
var inst_62657__$1 = tmp62745;
var inst_62658__$1 = inst_62666;
var state_62714__$1 = (function (){var statearr_62750 = state_62714;
(statearr_62750[(17)] = inst_62665);

(statearr_62750[(12)] = inst_62656__$1);

(statearr_62750[(14)] = inst_62657__$1);

(statearr_62750[(15)] = inst_62655__$1);

(statearr_62750[(16)] = inst_62658__$1);

return statearr_62750;
})();
var statearr_62751_64003 = state_62714__$1;
(statearr_62751_64003[(2)] = null);

(statearr_62751_64003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (18))){
var inst_62684 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62752_64005 = state_62714__$1;
(statearr_62752_64005[(2)] = inst_62684);

(statearr_62752_64005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (8))){
var inst_62657 = (state_62714[(14)]);
var inst_62658 = (state_62714[(16)]);
var inst_62660 = (inst_62658 < inst_62657);
var inst_62661 = inst_62660;
var state_62714__$1 = state_62714;
if(cljs.core.truth_(inst_62661)){
var statearr_62753_64007 = state_62714__$1;
(statearr_62753_64007[(1)] = (10));

} else {
var statearr_62754_64008 = state_62714__$1;
(statearr_62754_64008[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___63937,mults,ensure_mult,p))
;
return ((function (switch__61678__auto__,c__61781__auto___63937,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62755[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62755[(1)] = (1));

return statearr_62755;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62714){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62714);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62756){if((e62756 instanceof Object)){
var ex__61682__auto__ = e62756;
var statearr_62757_64013 = state_62714;
(statearr_62757_64013[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64014 = state_62714;
state_62714 = G__64014;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___63937,mults,ensure_mult,p))
})();
var state__61783__auto__ = (function (){var statearr_62758 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62758[(6)] = c__61781__auto___63937);

return statearr_62758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___63937,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__62760 = arguments.length;
switch (G__62760) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__62762 = arguments.length;
switch (G__62762) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__62764 = arguments.length;
switch (G__62764) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__61781__auto___64035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62803){
var state_val_62804 = (state_62803[(1)]);
if((state_val_62804 === (7))){
var state_62803__$1 = state_62803;
var statearr_62805_64036 = state_62803__$1;
(statearr_62805_64036[(2)] = null);

(statearr_62805_64036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (1))){
var state_62803__$1 = state_62803;
var statearr_62806_64038 = state_62803__$1;
(statearr_62806_64038[(2)] = null);

(statearr_62806_64038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (4))){
var inst_62767 = (state_62803[(7)]);
var inst_62769 = (inst_62767 < cnt);
var state_62803__$1 = state_62803;
if(cljs.core.truth_(inst_62769)){
var statearr_62807_64039 = state_62803__$1;
(statearr_62807_64039[(1)] = (6));

} else {
var statearr_62808_64040 = state_62803__$1;
(statearr_62808_64040[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (15))){
var inst_62799 = (state_62803[(2)]);
var state_62803__$1 = state_62803;
var statearr_62809_64041 = state_62803__$1;
(statearr_62809_64041[(2)] = inst_62799);

(statearr_62809_64041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (13))){
var inst_62792 = cljs.core.async.close_BANG_(out);
var state_62803__$1 = state_62803;
var statearr_62810_64042 = state_62803__$1;
(statearr_62810_64042[(2)] = inst_62792);

(statearr_62810_64042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (6))){
var state_62803__$1 = state_62803;
var statearr_62811_64044 = state_62803__$1;
(statearr_62811_64044[(2)] = null);

(statearr_62811_64044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (3))){
var inst_62801 = (state_62803[(2)]);
var state_62803__$1 = state_62803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62803__$1,inst_62801);
} else {
if((state_val_62804 === (12))){
var inst_62789 = (state_62803[(8)]);
var inst_62789__$1 = (state_62803[(2)]);
var inst_62790 = cljs.core.some(cljs.core.nil_QMARK_,inst_62789__$1);
var state_62803__$1 = (function (){var statearr_62812 = state_62803;
(statearr_62812[(8)] = inst_62789__$1);

return statearr_62812;
})();
if(cljs.core.truth_(inst_62790)){
var statearr_62813_64045 = state_62803__$1;
(statearr_62813_64045[(1)] = (13));

} else {
var statearr_62814_64046 = state_62803__$1;
(statearr_62814_64046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (2))){
var inst_62766 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62767 = (0);
var state_62803__$1 = (function (){var statearr_62815 = state_62803;
(statearr_62815[(7)] = inst_62767);

(statearr_62815[(9)] = inst_62766);

return statearr_62815;
})();
var statearr_62816_64048 = state_62803__$1;
(statearr_62816_64048[(2)] = null);

(statearr_62816_64048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (11))){
var inst_62767 = (state_62803[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62803,(10),Object,null,(9));
var inst_62776 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62767) : chs__$1.call(null,inst_62767));
var inst_62777 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62767) : done.call(null,inst_62767));
var inst_62778 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62776,inst_62777);
var state_62803__$1 = state_62803;
var statearr_62817_64050 = state_62803__$1;
(statearr_62817_64050[(2)] = inst_62778);


cljs.core.async.impl.ioc_helpers.process_exception(state_62803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (9))){
var inst_62767 = (state_62803[(7)]);
var inst_62780 = (state_62803[(2)]);
var inst_62781 = (inst_62767 + (1));
var inst_62767__$1 = inst_62781;
var state_62803__$1 = (function (){var statearr_62818 = state_62803;
(statearr_62818[(7)] = inst_62767__$1);

(statearr_62818[(10)] = inst_62780);

return statearr_62818;
})();
var statearr_62819_64052 = state_62803__$1;
(statearr_62819_64052[(2)] = null);

(statearr_62819_64052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (5))){
var inst_62787 = (state_62803[(2)]);
var state_62803__$1 = (function (){var statearr_62820 = state_62803;
(statearr_62820[(11)] = inst_62787);

return statearr_62820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62803__$1,(12),dchan);
} else {
if((state_val_62804 === (14))){
var inst_62789 = (state_62803[(8)]);
var inst_62794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62789);
var state_62803__$1 = state_62803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62803__$1,(16),out,inst_62794);
} else {
if((state_val_62804 === (16))){
var inst_62796 = (state_62803[(2)]);
var state_62803__$1 = (function (){var statearr_62821 = state_62803;
(statearr_62821[(12)] = inst_62796);

return statearr_62821;
})();
var statearr_62822_64059 = state_62803__$1;
(statearr_62822_64059[(2)] = null);

(statearr_62822_64059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (10))){
var inst_62771 = (state_62803[(2)]);
var inst_62772 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62803__$1 = (function (){var statearr_62823 = state_62803;
(statearr_62823[(13)] = inst_62771);

return statearr_62823;
})();
var statearr_62824_64060 = state_62803__$1;
(statearr_62824_64060[(2)] = inst_62772);


cljs.core.async.impl.ioc_helpers.process_exception(state_62803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62804 === (8))){
var inst_62785 = (state_62803[(2)]);
var state_62803__$1 = state_62803;
var statearr_62825_64061 = state_62803__$1;
(statearr_62825_64061[(2)] = inst_62785);

(statearr_62825_64061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__61678__auto__,c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62826[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62826[(1)] = (1));

return statearr_62826;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62803){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62803);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62827){if((e62827 instanceof Object)){
var ex__61682__auto__ = e62827;
var statearr_62828_64064 = state_62803;
(statearr_62828_64064[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64068 = state_62803;
state_62803 = G__64068;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__61783__auto__ = (function (){var statearr_62829 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62829[(6)] = c__61781__auto___64035);

return statearr_62829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64035,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__62832 = arguments.length;
switch (G__62832) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64071,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64071,out){
return (function (state_62864){
var state_val_62865 = (state_62864[(1)]);
if((state_val_62865 === (7))){
var inst_62843 = (state_62864[(7)]);
var inst_62844 = (state_62864[(8)]);
var inst_62843__$1 = (state_62864[(2)]);
var inst_62844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62843__$1,(0),null);
var inst_62845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62843__$1,(1),null);
var inst_62846 = (inst_62844__$1 == null);
var state_62864__$1 = (function (){var statearr_62866 = state_62864;
(statearr_62866[(7)] = inst_62843__$1);

(statearr_62866[(9)] = inst_62845);

(statearr_62866[(8)] = inst_62844__$1);

return statearr_62866;
})();
if(cljs.core.truth_(inst_62846)){
var statearr_62867_64073 = state_62864__$1;
(statearr_62867_64073[(1)] = (8));

} else {
var statearr_62868_64074 = state_62864__$1;
(statearr_62868_64074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (1))){
var inst_62833 = cljs.core.vec(chs);
var inst_62834 = inst_62833;
var state_62864__$1 = (function (){var statearr_62869 = state_62864;
(statearr_62869[(10)] = inst_62834);

return statearr_62869;
})();
var statearr_62870_64079 = state_62864__$1;
(statearr_62870_64079[(2)] = null);

(statearr_62870_64079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (4))){
var inst_62834 = (state_62864[(10)]);
var state_62864__$1 = state_62864;
return cljs.core.async.ioc_alts_BANG_(state_62864__$1,(7),inst_62834);
} else {
if((state_val_62865 === (6))){
var inst_62860 = (state_62864[(2)]);
var state_62864__$1 = state_62864;
var statearr_62871_64081 = state_62864__$1;
(statearr_62871_64081[(2)] = inst_62860);

(statearr_62871_64081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (3))){
var inst_62862 = (state_62864[(2)]);
var state_62864__$1 = state_62864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62864__$1,inst_62862);
} else {
if((state_val_62865 === (2))){
var inst_62834 = (state_62864[(10)]);
var inst_62836 = cljs.core.count(inst_62834);
var inst_62837 = (inst_62836 > (0));
var state_62864__$1 = state_62864;
if(cljs.core.truth_(inst_62837)){
var statearr_62873_64082 = state_62864__$1;
(statearr_62873_64082[(1)] = (4));

} else {
var statearr_62874_64083 = state_62864__$1;
(statearr_62874_64083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (11))){
var inst_62834 = (state_62864[(10)]);
var inst_62853 = (state_62864[(2)]);
var tmp62872 = inst_62834;
var inst_62834__$1 = tmp62872;
var state_62864__$1 = (function (){var statearr_62875 = state_62864;
(statearr_62875[(11)] = inst_62853);

(statearr_62875[(10)] = inst_62834__$1);

return statearr_62875;
})();
var statearr_62876_64084 = state_62864__$1;
(statearr_62876_64084[(2)] = null);

(statearr_62876_64084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (9))){
var inst_62844 = (state_62864[(8)]);
var state_62864__$1 = state_62864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62864__$1,(11),out,inst_62844);
} else {
if((state_val_62865 === (5))){
var inst_62858 = cljs.core.async.close_BANG_(out);
var state_62864__$1 = state_62864;
var statearr_62877_64085 = state_62864__$1;
(statearr_62877_64085[(2)] = inst_62858);

(statearr_62877_64085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (10))){
var inst_62856 = (state_62864[(2)]);
var state_62864__$1 = state_62864;
var statearr_62878_64093 = state_62864__$1;
(statearr_62878_64093[(2)] = inst_62856);

(statearr_62878_64093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62865 === (8))){
var inst_62843 = (state_62864[(7)]);
var inst_62845 = (state_62864[(9)]);
var inst_62844 = (state_62864[(8)]);
var inst_62834 = (state_62864[(10)]);
var inst_62848 = (function (){var cs = inst_62834;
var vec__62839 = inst_62843;
var v = inst_62844;
var c = inst_62845;
return ((function (cs,vec__62839,v,c,inst_62843,inst_62845,inst_62844,inst_62834,state_val_62865,c__61781__auto___64071,out){
return (function (p1__62830_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62830_SHARP_);
});
;})(cs,vec__62839,v,c,inst_62843,inst_62845,inst_62844,inst_62834,state_val_62865,c__61781__auto___64071,out))
})();
var inst_62849 = cljs.core.filterv(inst_62848,inst_62834);
var inst_62834__$1 = inst_62849;
var state_62864__$1 = (function (){var statearr_62879 = state_62864;
(statearr_62879[(10)] = inst_62834__$1);

return statearr_62879;
})();
var statearr_62880_64096 = state_62864__$1;
(statearr_62880_64096[(2)] = null);

(statearr_62880_64096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64071,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64071,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62881[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62881[(1)] = (1));

return statearr_62881;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62864){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62864);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62882){if((e62882 instanceof Object)){
var ex__61682__auto__ = e62882;
var statearr_62883_64097 = state_62864;
(statearr_62883_64097[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64100 = state_62864;
state_62864 = G__64100;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64071,out))
})();
var state__61783__auto__ = (function (){var statearr_62884 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62884[(6)] = c__61781__auto___64071);

return statearr_62884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64071,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__62886 = arguments.length;
switch (G__62886) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64105,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64105,out){
return (function (state_62910){
var state_val_62911 = (state_62910[(1)]);
if((state_val_62911 === (7))){
var inst_62892 = (state_62910[(7)]);
var inst_62892__$1 = (state_62910[(2)]);
var inst_62893 = (inst_62892__$1 == null);
var inst_62894 = cljs.core.not(inst_62893);
var state_62910__$1 = (function (){var statearr_62912 = state_62910;
(statearr_62912[(7)] = inst_62892__$1);

return statearr_62912;
})();
if(inst_62894){
var statearr_62913_64109 = state_62910__$1;
(statearr_62913_64109[(1)] = (8));

} else {
var statearr_62914_64110 = state_62910__$1;
(statearr_62914_64110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (1))){
var inst_62887 = (0);
var state_62910__$1 = (function (){var statearr_62915 = state_62910;
(statearr_62915[(8)] = inst_62887);

return statearr_62915;
})();
var statearr_62916_64111 = state_62910__$1;
(statearr_62916_64111[(2)] = null);

(statearr_62916_64111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (4))){
var state_62910__$1 = state_62910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62910__$1,(7),ch);
} else {
if((state_val_62911 === (6))){
var inst_62905 = (state_62910[(2)]);
var state_62910__$1 = state_62910;
var statearr_62917_64114 = state_62910__$1;
(statearr_62917_64114[(2)] = inst_62905);

(statearr_62917_64114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (3))){
var inst_62907 = (state_62910[(2)]);
var inst_62908 = cljs.core.async.close_BANG_(out);
var state_62910__$1 = (function (){var statearr_62918 = state_62910;
(statearr_62918[(9)] = inst_62907);

return statearr_62918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62910__$1,inst_62908);
} else {
if((state_val_62911 === (2))){
var inst_62887 = (state_62910[(8)]);
var inst_62889 = (inst_62887 < n);
var state_62910__$1 = state_62910;
if(cljs.core.truth_(inst_62889)){
var statearr_62919_64117 = state_62910__$1;
(statearr_62919_64117[(1)] = (4));

} else {
var statearr_62920_64118 = state_62910__$1;
(statearr_62920_64118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (11))){
var inst_62887 = (state_62910[(8)]);
var inst_62897 = (state_62910[(2)]);
var inst_62898 = (inst_62887 + (1));
var inst_62887__$1 = inst_62898;
var state_62910__$1 = (function (){var statearr_62921 = state_62910;
(statearr_62921[(10)] = inst_62897);

(statearr_62921[(8)] = inst_62887__$1);

return statearr_62921;
})();
var statearr_62922_64119 = state_62910__$1;
(statearr_62922_64119[(2)] = null);

(statearr_62922_64119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (9))){
var state_62910__$1 = state_62910;
var statearr_62923_64122 = state_62910__$1;
(statearr_62923_64122[(2)] = null);

(statearr_62923_64122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (5))){
var state_62910__$1 = state_62910;
var statearr_62924_64127 = state_62910__$1;
(statearr_62924_64127[(2)] = null);

(statearr_62924_64127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (10))){
var inst_62902 = (state_62910[(2)]);
var state_62910__$1 = state_62910;
var statearr_62925_64128 = state_62910__$1;
(statearr_62925_64128[(2)] = inst_62902);

(statearr_62925_64128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (8))){
var inst_62892 = (state_62910[(7)]);
var state_62910__$1 = state_62910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62910__$1,(11),out,inst_62892);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64105,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64105,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62926[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62926[(1)] = (1));

return statearr_62926;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62910){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62910);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62927){if((e62927 instanceof Object)){
var ex__61682__auto__ = e62927;
var statearr_62928_64136 = state_62910;
(statearr_62928_64136[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64138 = state_62910;
state_62910 = G__64138;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64105,out))
})();
var state__61783__auto__ = (function (){var statearr_62929 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62929[(6)] = c__61781__auto___64105);

return statearr_62929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64105,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62931 = (function (f,ch,meta62932){
this.f = f;
this.ch = ch;
this.meta62932 = meta62932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62933,meta62932__$1){
var self__ = this;
var _62933__$1 = this;
return (new cljs.core.async.t_cljs$core$async62931(self__.f,self__.ch,meta62932__$1));
});

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62933){
var self__ = this;
var _62933__$1 = this;
return self__.meta62932;
});

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62934 = (function (f,ch,meta62932,_,fn1,meta62935){
this.f = f;
this.ch = ch;
this.meta62932 = meta62932;
this._ = _;
this.fn1 = fn1;
this.meta62935 = meta62935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62936,meta62935__$1){
var self__ = this;
var _62936__$1 = this;
return (new cljs.core.async.t_cljs$core$async62934(self__.f,self__.ch,self__.meta62932,self__._,self__.fn1,meta62935__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62936){
var self__ = this;
var _62936__$1 = this;
return self__.meta62935;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__62930_SHARP_){
var G__62937 = (((p1__62930_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62930_SHARP_) : self__.f.call(null,p1__62930_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62937) : f1.call(null,G__62937));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62932","meta62932",-1480493911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62931","cljs.core.async/t_cljs$core$async62931",607429024,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62935","meta62935",915428837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62934";

cljs.core.async.t_cljs$core$async62934.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62934");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62934.
 */
cljs.core.async.__GT_t_cljs$core$async62934 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62934(f__$1,ch__$1,meta62932__$1,___$2,fn1__$1,meta62935){
return (new cljs.core.async.t_cljs$core$async62934(f__$1,ch__$1,meta62932__$1,___$2,fn1__$1,meta62935));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async62934(self__.f,self__.ch,self__.meta62932,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62938 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62938) : self__.f.call(null,G__62938));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async62931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62932","meta62932",-1480493911,null)], null);
});

cljs.core.async.t_cljs$core$async62931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62931";

cljs.core.async.t_cljs$core$async62931.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62931");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62931.
 */
cljs.core.async.__GT_t_cljs$core$async62931 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62931(f__$1,ch__$1,meta62932){
return (new cljs.core.async.t_cljs$core$async62931(f__$1,ch__$1,meta62932));
});

}

return (new cljs.core.async.t_cljs$core$async62931(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62939 = (function (f,ch,meta62940){
this.f = f;
this.ch = ch;
this.meta62940 = meta62940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62941,meta62940__$1){
var self__ = this;
var _62941__$1 = this;
return (new cljs.core.async.t_cljs$core$async62939(self__.f,self__.ch,meta62940__$1));
});

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62941){
var self__ = this;
var _62941__$1 = this;
return self__.meta62940;
});

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async62939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62940","meta62940",-1663418034,null)], null);
});

cljs.core.async.t_cljs$core$async62939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62939";

cljs.core.async.t_cljs$core$async62939.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62939");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62939.
 */
cljs.core.async.__GT_t_cljs$core$async62939 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62939(f__$1,ch__$1,meta62940){
return (new cljs.core.async.t_cljs$core$async62939(f__$1,ch__$1,meta62940));
});

}

return (new cljs.core.async.t_cljs$core$async62939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62942 = (function (p,ch,meta62943){
this.p = p;
this.ch = ch;
this.meta62943 = meta62943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62944,meta62943__$1){
var self__ = this;
var _62944__$1 = this;
return (new cljs.core.async.t_cljs$core$async62942(self__.p,self__.ch,meta62943__$1));
});

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62944){
var self__ = this;
var _62944__$1 = this;
return self__.meta62943;
});

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async62942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62943","meta62943",-880103287,null)], null);
});

cljs.core.async.t_cljs$core$async62942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62942";

cljs.core.async.t_cljs$core$async62942.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62942");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62942.
 */
cljs.core.async.__GT_t_cljs$core$async62942 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62942(p__$1,ch__$1,meta62943){
return (new cljs.core.async.t_cljs$core$async62942(p__$1,ch__$1,meta62943));
});

}

return (new cljs.core.async.t_cljs$core$async62942(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__62946 = arguments.length;
switch (G__62946) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64178,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64178,out){
return (function (state_62967){
var state_val_62968 = (state_62967[(1)]);
if((state_val_62968 === (7))){
var inst_62963 = (state_62967[(2)]);
var state_62967__$1 = state_62967;
var statearr_62969_64182 = state_62967__$1;
(statearr_62969_64182[(2)] = inst_62963);

(statearr_62969_64182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (1))){
var state_62967__$1 = state_62967;
var statearr_62970_64185 = state_62967__$1;
(statearr_62970_64185[(2)] = null);

(statearr_62970_64185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (4))){
var inst_62949 = (state_62967[(7)]);
var inst_62949__$1 = (state_62967[(2)]);
var inst_62950 = (inst_62949__$1 == null);
var state_62967__$1 = (function (){var statearr_62971 = state_62967;
(statearr_62971[(7)] = inst_62949__$1);

return statearr_62971;
})();
if(cljs.core.truth_(inst_62950)){
var statearr_62972_64189 = state_62967__$1;
(statearr_62972_64189[(1)] = (5));

} else {
var statearr_62973_64190 = state_62967__$1;
(statearr_62973_64190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (6))){
var inst_62949 = (state_62967[(7)]);
var inst_62954 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62949) : p.call(null,inst_62949));
var state_62967__$1 = state_62967;
if(cljs.core.truth_(inst_62954)){
var statearr_62974_64191 = state_62967__$1;
(statearr_62974_64191[(1)] = (8));

} else {
var statearr_62975_64192 = state_62967__$1;
(statearr_62975_64192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (3))){
var inst_62965 = (state_62967[(2)]);
var state_62967__$1 = state_62967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62967__$1,inst_62965);
} else {
if((state_val_62968 === (2))){
var state_62967__$1 = state_62967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62967__$1,(4),ch);
} else {
if((state_val_62968 === (11))){
var inst_62957 = (state_62967[(2)]);
var state_62967__$1 = state_62967;
var statearr_62976_64196 = state_62967__$1;
(statearr_62976_64196[(2)] = inst_62957);

(statearr_62976_64196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (9))){
var state_62967__$1 = state_62967;
var statearr_62977_64197 = state_62967__$1;
(statearr_62977_64197[(2)] = null);

(statearr_62977_64197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (5))){
var inst_62952 = cljs.core.async.close_BANG_(out);
var state_62967__$1 = state_62967;
var statearr_62978_64201 = state_62967__$1;
(statearr_62978_64201[(2)] = inst_62952);

(statearr_62978_64201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (10))){
var inst_62960 = (state_62967[(2)]);
var state_62967__$1 = (function (){var statearr_62979 = state_62967;
(statearr_62979[(8)] = inst_62960);

return statearr_62979;
})();
var statearr_62980_64208 = state_62967__$1;
(statearr_62980_64208[(2)] = null);

(statearr_62980_64208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62968 === (8))){
var inst_62949 = (state_62967[(7)]);
var state_62967__$1 = state_62967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62967__$1,(11),out,inst_62949);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64178,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64178,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_62981 = [null,null,null,null,null,null,null,null,null];
(statearr_62981[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_62981[(1)] = (1));

return statearr_62981;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_62967){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_62967);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e62982){if((e62982 instanceof Object)){
var ex__61682__auto__ = e62982;
var statearr_62983_64217 = state_62967;
(statearr_62983_64217[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64218 = state_62967;
state_62967 = G__64218;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_62967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_62967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64178,out))
})();
var state__61783__auto__ = (function (){var statearr_62984 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_62984[(6)] = c__61781__auto___64178);

return statearr_62984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64178,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62986 = arguments.length;
switch (G__62986) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__){
return (function (state_63048){
var state_val_63049 = (state_63048[(1)]);
if((state_val_63049 === (7))){
var inst_63044 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
var statearr_63050_64222 = state_63048__$1;
(statearr_63050_64222[(2)] = inst_63044);

(statearr_63050_64222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (20))){
var inst_63014 = (state_63048[(7)]);
var inst_63025 = (state_63048[(2)]);
var inst_63026 = cljs.core.next(inst_63014);
var inst_63000 = inst_63026;
var inst_63001 = null;
var inst_63002 = (0);
var inst_63003 = (0);
var state_63048__$1 = (function (){var statearr_63051 = state_63048;
(statearr_63051[(8)] = inst_63001);

(statearr_63051[(9)] = inst_63000);

(statearr_63051[(10)] = inst_63002);

(statearr_63051[(11)] = inst_63003);

(statearr_63051[(12)] = inst_63025);

return statearr_63051;
})();
var statearr_63052_64223 = state_63048__$1;
(statearr_63052_64223[(2)] = null);

(statearr_63052_64223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (1))){
var state_63048__$1 = state_63048;
var statearr_63053_64230 = state_63048__$1;
(statearr_63053_64230[(2)] = null);

(statearr_63053_64230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (4))){
var inst_62989 = (state_63048[(13)]);
var inst_62989__$1 = (state_63048[(2)]);
var inst_62990 = (inst_62989__$1 == null);
var state_63048__$1 = (function (){var statearr_63054 = state_63048;
(statearr_63054[(13)] = inst_62989__$1);

return statearr_63054;
})();
if(cljs.core.truth_(inst_62990)){
var statearr_63055_64233 = state_63048__$1;
(statearr_63055_64233[(1)] = (5));

} else {
var statearr_63056_64234 = state_63048__$1;
(statearr_63056_64234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (15))){
var state_63048__$1 = state_63048;
var statearr_63060_64235 = state_63048__$1;
(statearr_63060_64235[(2)] = null);

(statearr_63060_64235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (21))){
var state_63048__$1 = state_63048;
var statearr_63061_64236 = state_63048__$1;
(statearr_63061_64236[(2)] = null);

(statearr_63061_64236[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (13))){
var inst_63001 = (state_63048[(8)]);
var inst_63000 = (state_63048[(9)]);
var inst_63002 = (state_63048[(10)]);
var inst_63003 = (state_63048[(11)]);
var inst_63010 = (state_63048[(2)]);
var inst_63011 = (inst_63003 + (1));
var tmp63057 = inst_63001;
var tmp63058 = inst_63000;
var tmp63059 = inst_63002;
var inst_63000__$1 = tmp63058;
var inst_63001__$1 = tmp63057;
var inst_63002__$1 = tmp63059;
var inst_63003__$1 = inst_63011;
var state_63048__$1 = (function (){var statearr_63062 = state_63048;
(statearr_63062[(8)] = inst_63001__$1);

(statearr_63062[(9)] = inst_63000__$1);

(statearr_63062[(10)] = inst_63002__$1);

(statearr_63062[(14)] = inst_63010);

(statearr_63062[(11)] = inst_63003__$1);

return statearr_63062;
})();
var statearr_63063_64239 = state_63048__$1;
(statearr_63063_64239[(2)] = null);

(statearr_63063_64239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (22))){
var state_63048__$1 = state_63048;
var statearr_63064_64240 = state_63048__$1;
(statearr_63064_64240[(2)] = null);

(statearr_63064_64240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (6))){
var inst_62989 = (state_63048[(13)]);
var inst_62998 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62989) : f.call(null,inst_62989));
var inst_62999 = cljs.core.seq(inst_62998);
var inst_63000 = inst_62999;
var inst_63001 = null;
var inst_63002 = (0);
var inst_63003 = (0);
var state_63048__$1 = (function (){var statearr_63065 = state_63048;
(statearr_63065[(8)] = inst_63001);

(statearr_63065[(9)] = inst_63000);

(statearr_63065[(10)] = inst_63002);

(statearr_63065[(11)] = inst_63003);

return statearr_63065;
})();
var statearr_63066_64247 = state_63048__$1;
(statearr_63066_64247[(2)] = null);

(statearr_63066_64247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (17))){
var inst_63014 = (state_63048[(7)]);
var inst_63018 = cljs.core.chunk_first(inst_63014);
var inst_63019 = cljs.core.chunk_rest(inst_63014);
var inst_63020 = cljs.core.count(inst_63018);
var inst_63000 = inst_63019;
var inst_63001 = inst_63018;
var inst_63002 = inst_63020;
var inst_63003 = (0);
var state_63048__$1 = (function (){var statearr_63067 = state_63048;
(statearr_63067[(8)] = inst_63001);

(statearr_63067[(9)] = inst_63000);

(statearr_63067[(10)] = inst_63002);

(statearr_63067[(11)] = inst_63003);

return statearr_63067;
})();
var statearr_63068_64251 = state_63048__$1;
(statearr_63068_64251[(2)] = null);

(statearr_63068_64251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (3))){
var inst_63046 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63048__$1,inst_63046);
} else {
if((state_val_63049 === (12))){
var inst_63034 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
var statearr_63069_64252 = state_63048__$1;
(statearr_63069_64252[(2)] = inst_63034);

(statearr_63069_64252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (2))){
var state_63048__$1 = state_63048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63048__$1,(4),in$);
} else {
if((state_val_63049 === (23))){
var inst_63042 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
var statearr_63070_64256 = state_63048__$1;
(statearr_63070_64256[(2)] = inst_63042);

(statearr_63070_64256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (19))){
var inst_63029 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
var statearr_63071_64257 = state_63048__$1;
(statearr_63071_64257[(2)] = inst_63029);

(statearr_63071_64257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (11))){
var inst_63000 = (state_63048[(9)]);
var inst_63014 = (state_63048[(7)]);
var inst_63014__$1 = cljs.core.seq(inst_63000);
var state_63048__$1 = (function (){var statearr_63072 = state_63048;
(statearr_63072[(7)] = inst_63014__$1);

return statearr_63072;
})();
if(inst_63014__$1){
var statearr_63073_64263 = state_63048__$1;
(statearr_63073_64263[(1)] = (14));

} else {
var statearr_63074_64265 = state_63048__$1;
(statearr_63074_64265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (9))){
var inst_63036 = (state_63048[(2)]);
var inst_63037 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63048__$1 = (function (){var statearr_63075 = state_63048;
(statearr_63075[(15)] = inst_63036);

return statearr_63075;
})();
if(cljs.core.truth_(inst_63037)){
var statearr_63076_64267 = state_63048__$1;
(statearr_63076_64267[(1)] = (21));

} else {
var statearr_63077_64269 = state_63048__$1;
(statearr_63077_64269[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (5))){
var inst_62992 = cljs.core.async.close_BANG_(out);
var state_63048__$1 = state_63048;
var statearr_63078_64270 = state_63048__$1;
(statearr_63078_64270[(2)] = inst_62992);

(statearr_63078_64270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (14))){
var inst_63014 = (state_63048[(7)]);
var inst_63016 = cljs.core.chunked_seq_QMARK_(inst_63014);
var state_63048__$1 = state_63048;
if(inst_63016){
var statearr_63079_64271 = state_63048__$1;
(statearr_63079_64271[(1)] = (17));

} else {
var statearr_63080_64272 = state_63048__$1;
(statearr_63080_64272[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (16))){
var inst_63032 = (state_63048[(2)]);
var state_63048__$1 = state_63048;
var statearr_63081_64273 = state_63048__$1;
(statearr_63081_64273[(2)] = inst_63032);

(statearr_63081_64273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63049 === (10))){
var inst_63001 = (state_63048[(8)]);
var inst_63003 = (state_63048[(11)]);
var inst_63008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_63001,inst_63003);
var state_63048__$1 = state_63048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63048__$1,(13),out,inst_63008);
} else {
if((state_val_63049 === (18))){
var inst_63014 = (state_63048[(7)]);
var inst_63023 = cljs.core.first(inst_63014);
var state_63048__$1 = state_63048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63048__$1,(20),out,inst_63023);
} else {
if((state_val_63049 === (8))){
var inst_63002 = (state_63048[(10)]);
var inst_63003 = (state_63048[(11)]);
var inst_63005 = (inst_63003 < inst_63002);
var inst_63006 = inst_63005;
var state_63048__$1 = state_63048;
if(cljs.core.truth_(inst_63006)){
var statearr_63082_64276 = state_63048__$1;
(statearr_63082_64276[(1)] = (10));

} else {
var statearr_63083_64277 = state_63048__$1;
(statearr_63083_64277[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto__))
;
return ((function (switch__61678__auto__,c__61781__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____0 = (function (){
var statearr_63084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63084[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__);

(statearr_63084[(1)] = (1));

return statearr_63084;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____1 = (function (state_63048){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_63048);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e63085){if((e63085 instanceof Object)){
var ex__61682__auto__ = e63085;
var statearr_63086_64281 = state_63048;
(statearr_63086_64281[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64282 = state_63048;
state_63048 = G__64282;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__ = function(state_63048){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____1.call(this,state_63048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61679__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__))
})();
var state__61783__auto__ = (function (){var statearr_63087 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_63087[(6)] = c__61781__auto__);

return statearr_63087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__))
);

return c__61781__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63089 = arguments.length;
switch (G__63089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__63091 = arguments.length;
switch (G__63091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__63093 = arguments.length;
switch (G__63093) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64293,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64293,out){
return (function (state_63117){
var state_val_63118 = (state_63117[(1)]);
if((state_val_63118 === (7))){
var inst_63112 = (state_63117[(2)]);
var state_63117__$1 = state_63117;
var statearr_63119_64294 = state_63117__$1;
(statearr_63119_64294[(2)] = inst_63112);

(statearr_63119_64294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (1))){
var inst_63094 = null;
var state_63117__$1 = (function (){var statearr_63120 = state_63117;
(statearr_63120[(7)] = inst_63094);

return statearr_63120;
})();
var statearr_63121_64295 = state_63117__$1;
(statearr_63121_64295[(2)] = null);

(statearr_63121_64295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (4))){
var inst_63097 = (state_63117[(8)]);
var inst_63097__$1 = (state_63117[(2)]);
var inst_63098 = (inst_63097__$1 == null);
var inst_63099 = cljs.core.not(inst_63098);
var state_63117__$1 = (function (){var statearr_63122 = state_63117;
(statearr_63122[(8)] = inst_63097__$1);

return statearr_63122;
})();
if(inst_63099){
var statearr_63123_64296 = state_63117__$1;
(statearr_63123_64296[(1)] = (5));

} else {
var statearr_63124_64297 = state_63117__$1;
(statearr_63124_64297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (6))){
var state_63117__$1 = state_63117;
var statearr_63125_64298 = state_63117__$1;
(statearr_63125_64298[(2)] = null);

(statearr_63125_64298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (3))){
var inst_63114 = (state_63117[(2)]);
var inst_63115 = cljs.core.async.close_BANG_(out);
var state_63117__$1 = (function (){var statearr_63126 = state_63117;
(statearr_63126[(9)] = inst_63114);

return statearr_63126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63117__$1,inst_63115);
} else {
if((state_val_63118 === (2))){
var state_63117__$1 = state_63117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63117__$1,(4),ch);
} else {
if((state_val_63118 === (11))){
var inst_63097 = (state_63117[(8)]);
var inst_63106 = (state_63117[(2)]);
var inst_63094 = inst_63097;
var state_63117__$1 = (function (){var statearr_63127 = state_63117;
(statearr_63127[(7)] = inst_63094);

(statearr_63127[(10)] = inst_63106);

return statearr_63127;
})();
var statearr_63128_64301 = state_63117__$1;
(statearr_63128_64301[(2)] = null);

(statearr_63128_64301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (9))){
var inst_63097 = (state_63117[(8)]);
var state_63117__$1 = state_63117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63117__$1,(11),out,inst_63097);
} else {
if((state_val_63118 === (5))){
var inst_63094 = (state_63117[(7)]);
var inst_63097 = (state_63117[(8)]);
var inst_63101 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63097,inst_63094);
var state_63117__$1 = state_63117;
if(inst_63101){
var statearr_63130_64302 = state_63117__$1;
(statearr_63130_64302[(1)] = (8));

} else {
var statearr_63131_64303 = state_63117__$1;
(statearr_63131_64303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (10))){
var inst_63109 = (state_63117[(2)]);
var state_63117__$1 = state_63117;
var statearr_63132_64304 = state_63117__$1;
(statearr_63132_64304[(2)] = inst_63109);

(statearr_63132_64304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63118 === (8))){
var inst_63094 = (state_63117[(7)]);
var tmp63129 = inst_63094;
var inst_63094__$1 = tmp63129;
var state_63117__$1 = (function (){var statearr_63133 = state_63117;
(statearr_63133[(7)] = inst_63094__$1);

return statearr_63133;
})();
var statearr_63134_64305 = state_63117__$1;
(statearr_63134_64305[(2)] = null);

(statearr_63134_64305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64293,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64293,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_63135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63135[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_63135[(1)] = (1));

return statearr_63135;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_63117){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_63117);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e63136){if((e63136 instanceof Object)){
var ex__61682__auto__ = e63136;
var statearr_63137_64313 = state_63117;
(statearr_63137_64313[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64318 = state_63117;
state_63117 = G__64318;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_63117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_63117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64293,out))
})();
var state__61783__auto__ = (function (){var statearr_63138 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_63138[(6)] = c__61781__auto___64293);

return statearr_63138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64293,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63140 = arguments.length;
switch (G__63140) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64325,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64325,out){
return (function (state_63178){
var state_val_63179 = (state_63178[(1)]);
if((state_val_63179 === (7))){
var inst_63174 = (state_63178[(2)]);
var state_63178__$1 = state_63178;
var statearr_63180_64327 = state_63178__$1;
(statearr_63180_64327[(2)] = inst_63174);

(statearr_63180_64327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (1))){
var inst_63141 = (new Array(n));
var inst_63142 = inst_63141;
var inst_63143 = (0);
var state_63178__$1 = (function (){var statearr_63181 = state_63178;
(statearr_63181[(7)] = inst_63143);

(statearr_63181[(8)] = inst_63142);

return statearr_63181;
})();
var statearr_63182_64329 = state_63178__$1;
(statearr_63182_64329[(2)] = null);

(statearr_63182_64329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (4))){
var inst_63146 = (state_63178[(9)]);
var inst_63146__$1 = (state_63178[(2)]);
var inst_63147 = (inst_63146__$1 == null);
var inst_63148 = cljs.core.not(inst_63147);
var state_63178__$1 = (function (){var statearr_63183 = state_63178;
(statearr_63183[(9)] = inst_63146__$1);

return statearr_63183;
})();
if(inst_63148){
var statearr_63184_64332 = state_63178__$1;
(statearr_63184_64332[(1)] = (5));

} else {
var statearr_63185_64333 = state_63178__$1;
(statearr_63185_64333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (15))){
var inst_63168 = (state_63178[(2)]);
var state_63178__$1 = state_63178;
var statearr_63186_64334 = state_63178__$1;
(statearr_63186_64334[(2)] = inst_63168);

(statearr_63186_64334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (13))){
var state_63178__$1 = state_63178;
var statearr_63187_64335 = state_63178__$1;
(statearr_63187_64335[(2)] = null);

(statearr_63187_64335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (6))){
var inst_63143 = (state_63178[(7)]);
var inst_63164 = (inst_63143 > (0));
var state_63178__$1 = state_63178;
if(cljs.core.truth_(inst_63164)){
var statearr_63188_64337 = state_63178__$1;
(statearr_63188_64337[(1)] = (12));

} else {
var statearr_63189_64338 = state_63178__$1;
(statearr_63189_64338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (3))){
var inst_63176 = (state_63178[(2)]);
var state_63178__$1 = state_63178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63178__$1,inst_63176);
} else {
if((state_val_63179 === (12))){
var inst_63142 = (state_63178[(8)]);
var inst_63166 = cljs.core.vec(inst_63142);
var state_63178__$1 = state_63178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63178__$1,(15),out,inst_63166);
} else {
if((state_val_63179 === (2))){
var state_63178__$1 = state_63178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63178__$1,(4),ch);
} else {
if((state_val_63179 === (11))){
var inst_63158 = (state_63178[(2)]);
var inst_63159 = (new Array(n));
var inst_63142 = inst_63159;
var inst_63143 = (0);
var state_63178__$1 = (function (){var statearr_63190 = state_63178;
(statearr_63190[(7)] = inst_63143);

(statearr_63190[(10)] = inst_63158);

(statearr_63190[(8)] = inst_63142);

return statearr_63190;
})();
var statearr_63191_64339 = state_63178__$1;
(statearr_63191_64339[(2)] = null);

(statearr_63191_64339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (9))){
var inst_63142 = (state_63178[(8)]);
var inst_63156 = cljs.core.vec(inst_63142);
var state_63178__$1 = state_63178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63178__$1,(11),out,inst_63156);
} else {
if((state_val_63179 === (5))){
var inst_63143 = (state_63178[(7)]);
var inst_63146 = (state_63178[(9)]);
var inst_63151 = (state_63178[(11)]);
var inst_63142 = (state_63178[(8)]);
var inst_63150 = (inst_63142[inst_63143] = inst_63146);
var inst_63151__$1 = (inst_63143 + (1));
var inst_63152 = (inst_63151__$1 < n);
var state_63178__$1 = (function (){var statearr_63192 = state_63178;
(statearr_63192[(11)] = inst_63151__$1);

(statearr_63192[(12)] = inst_63150);

return statearr_63192;
})();
if(cljs.core.truth_(inst_63152)){
var statearr_63193_64340 = state_63178__$1;
(statearr_63193_64340[(1)] = (8));

} else {
var statearr_63194_64341 = state_63178__$1;
(statearr_63194_64341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (14))){
var inst_63171 = (state_63178[(2)]);
var inst_63172 = cljs.core.async.close_BANG_(out);
var state_63178__$1 = (function (){var statearr_63196 = state_63178;
(statearr_63196[(13)] = inst_63171);

return statearr_63196;
})();
var statearr_63197_64342 = state_63178__$1;
(statearr_63197_64342[(2)] = inst_63172);

(statearr_63197_64342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (10))){
var inst_63162 = (state_63178[(2)]);
var state_63178__$1 = state_63178;
var statearr_63198_64344 = state_63178__$1;
(statearr_63198_64344[(2)] = inst_63162);

(statearr_63198_64344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63179 === (8))){
var inst_63151 = (state_63178[(11)]);
var inst_63142 = (state_63178[(8)]);
var tmp63195 = inst_63142;
var inst_63142__$1 = tmp63195;
var inst_63143 = inst_63151;
var state_63178__$1 = (function (){var statearr_63199 = state_63178;
(statearr_63199[(7)] = inst_63143);

(statearr_63199[(8)] = inst_63142__$1);

return statearr_63199;
})();
var statearr_63200_64346 = state_63178__$1;
(statearr_63200_64346[(2)] = null);

(statearr_63200_64346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64325,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64325,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_63201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63201[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_63201[(1)] = (1));

return statearr_63201;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_63178){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_63178);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e63202){if((e63202 instanceof Object)){
var ex__61682__auto__ = e63202;
var statearr_63203_64347 = state_63178;
(statearr_63203_64347[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64348 = state_63178;
state_63178 = G__64348;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_63178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_63178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64325,out))
})();
var state__61783__auto__ = (function (){var statearr_63204 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_63204[(6)] = c__61781__auto___64325);

return statearr_63204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64325,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63206 = arguments.length;
switch (G__63206) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61781__auto___64354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64354,out){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64354,out){
return (function (state_63248){
var state_val_63249 = (state_63248[(1)]);
if((state_val_63249 === (7))){
var inst_63244 = (state_63248[(2)]);
var state_63248__$1 = state_63248;
var statearr_63250_64357 = state_63248__$1;
(statearr_63250_64357[(2)] = inst_63244);

(statearr_63250_64357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (1))){
var inst_63207 = [];
var inst_63208 = inst_63207;
var inst_63209 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63248__$1 = (function (){var statearr_63251 = state_63248;
(statearr_63251[(7)] = inst_63208);

(statearr_63251[(8)] = inst_63209);

return statearr_63251;
})();
var statearr_63252_64358 = state_63248__$1;
(statearr_63252_64358[(2)] = null);

(statearr_63252_64358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (4))){
var inst_63212 = (state_63248[(9)]);
var inst_63212__$1 = (state_63248[(2)]);
var inst_63213 = (inst_63212__$1 == null);
var inst_63214 = cljs.core.not(inst_63213);
var state_63248__$1 = (function (){var statearr_63253 = state_63248;
(statearr_63253[(9)] = inst_63212__$1);

return statearr_63253;
})();
if(inst_63214){
var statearr_63254_64360 = state_63248__$1;
(statearr_63254_64360[(1)] = (5));

} else {
var statearr_63255_64361 = state_63248__$1;
(statearr_63255_64361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (15))){
var inst_63238 = (state_63248[(2)]);
var state_63248__$1 = state_63248;
var statearr_63256_64363 = state_63248__$1;
(statearr_63256_64363[(2)] = inst_63238);

(statearr_63256_64363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (13))){
var state_63248__$1 = state_63248;
var statearr_63257_64364 = state_63248__$1;
(statearr_63257_64364[(2)] = null);

(statearr_63257_64364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (6))){
var inst_63208 = (state_63248[(7)]);
var inst_63233 = inst_63208.length;
var inst_63234 = (inst_63233 > (0));
var state_63248__$1 = state_63248;
if(cljs.core.truth_(inst_63234)){
var statearr_63258_64365 = state_63248__$1;
(statearr_63258_64365[(1)] = (12));

} else {
var statearr_63259_64367 = state_63248__$1;
(statearr_63259_64367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (3))){
var inst_63246 = (state_63248[(2)]);
var state_63248__$1 = state_63248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63248__$1,inst_63246);
} else {
if((state_val_63249 === (12))){
var inst_63208 = (state_63248[(7)]);
var inst_63236 = cljs.core.vec(inst_63208);
var state_63248__$1 = state_63248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63248__$1,(15),out,inst_63236);
} else {
if((state_val_63249 === (2))){
var state_63248__$1 = state_63248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63248__$1,(4),ch);
} else {
if((state_val_63249 === (11))){
var inst_63216 = (state_63248[(10)]);
var inst_63212 = (state_63248[(9)]);
var inst_63226 = (state_63248[(2)]);
var inst_63227 = [];
var inst_63228 = inst_63227.push(inst_63212);
var inst_63208 = inst_63227;
var inst_63209 = inst_63216;
var state_63248__$1 = (function (){var statearr_63260 = state_63248;
(statearr_63260[(11)] = inst_63226);

(statearr_63260[(7)] = inst_63208);

(statearr_63260[(8)] = inst_63209);

(statearr_63260[(12)] = inst_63228);

return statearr_63260;
})();
var statearr_63261_64369 = state_63248__$1;
(statearr_63261_64369[(2)] = null);

(statearr_63261_64369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (9))){
var inst_63208 = (state_63248[(7)]);
var inst_63224 = cljs.core.vec(inst_63208);
var state_63248__$1 = state_63248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63248__$1,(11),out,inst_63224);
} else {
if((state_val_63249 === (5))){
var inst_63209 = (state_63248[(8)]);
var inst_63216 = (state_63248[(10)]);
var inst_63212 = (state_63248[(9)]);
var inst_63216__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63212) : f.call(null,inst_63212));
var inst_63217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63216__$1,inst_63209);
var inst_63218 = cljs.core.keyword_identical_QMARK_(inst_63209,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63219 = ((inst_63217) || (inst_63218));
var state_63248__$1 = (function (){var statearr_63262 = state_63248;
(statearr_63262[(10)] = inst_63216__$1);

return statearr_63262;
})();
if(cljs.core.truth_(inst_63219)){
var statearr_63263_64370 = state_63248__$1;
(statearr_63263_64370[(1)] = (8));

} else {
var statearr_63264_64371 = state_63248__$1;
(statearr_63264_64371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (14))){
var inst_63241 = (state_63248[(2)]);
var inst_63242 = cljs.core.async.close_BANG_(out);
var state_63248__$1 = (function (){var statearr_63266 = state_63248;
(statearr_63266[(13)] = inst_63241);

return statearr_63266;
})();
var statearr_63267_64373 = state_63248__$1;
(statearr_63267_64373[(2)] = inst_63242);

(statearr_63267_64373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (10))){
var inst_63231 = (state_63248[(2)]);
var state_63248__$1 = state_63248;
var statearr_63268_64374 = state_63248__$1;
(statearr_63268_64374[(2)] = inst_63231);

(statearr_63268_64374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63249 === (8))){
var inst_63208 = (state_63248[(7)]);
var inst_63216 = (state_63248[(10)]);
var inst_63212 = (state_63248[(9)]);
var inst_63221 = inst_63208.push(inst_63212);
var tmp63265 = inst_63208;
var inst_63208__$1 = tmp63265;
var inst_63209 = inst_63216;
var state_63248__$1 = (function (){var statearr_63269 = state_63248;
(statearr_63269[(7)] = inst_63208__$1);

(statearr_63269[(14)] = inst_63221);

(statearr_63269[(8)] = inst_63209);

return statearr_63269;
})();
var statearr_63270_64375 = state_63248__$1;
(statearr_63270_64375[(2)] = null);

(statearr_63270_64375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__61781__auto___64354,out))
;
return ((function (switch__61678__auto__,c__61781__auto___64354,out){
return (function() {
var cljs$core$async$state_machine__61679__auto__ = null;
var cljs$core$async$state_machine__61679__auto____0 = (function (){
var statearr_63271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63271[(0)] = cljs$core$async$state_machine__61679__auto__);

(statearr_63271[(1)] = (1));

return statearr_63271;
});
var cljs$core$async$state_machine__61679__auto____1 = (function (state_63248){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_63248);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e63272){if((e63272 instanceof Object)){
var ex__61682__auto__ = e63272;
var statearr_63273_64376 = state_63248;
(statearr_63273_64376[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64377 = state_63248;
state_63248 = G__64377;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
cljs$core$async$state_machine__61679__auto__ = function(state_63248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61679__auto____1.call(this,state_63248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61679__auto____0;
cljs$core$async$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61679__auto____1;
return cljs$core$async$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64354,out))
})();
var state__61783__auto__ = (function (){var statearr_63274 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_63274[(6)] = c__61781__auto___64354);

return statearr_63274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64354,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
