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
var G__61375 = arguments.length;
switch (G__61375) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61376 = (function (f,blockable,meta61377){
this.f = f;
this.blockable = blockable;
this.meta61377 = meta61377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61378,meta61377__$1){
var self__ = this;
var _61378__$1 = this;
return (new cljs.core.async.t_cljs$core$async61376(self__.f,self__.blockable,meta61377__$1));
});

cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61378){
var self__ = this;
var _61378__$1 = this;
return self__.meta61377;
});

cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async61376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async61376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61377","meta61377",1906561696,null)], null);
});

cljs.core.async.t_cljs$core$async61376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61376";

cljs.core.async.t_cljs$core$async61376.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61376.
 */
cljs.core.async.__GT_t_cljs$core$async61376 = (function cljs$core$async$__GT_t_cljs$core$async61376(f__$1,blockable__$1,meta61377){
return (new cljs.core.async.t_cljs$core$async61376(f__$1,blockable__$1,meta61377));
});

}

return (new cljs.core.async.t_cljs$core$async61376(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__61381 = arguments.length;
switch (G__61381) {
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
var G__61383 = arguments.length;
switch (G__61383) {
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
var G__61385 = arguments.length;
switch (G__61385) {
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
var val_62825 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62825) : fn1.call(null,val_62825));
} else {
cljs.core.async.impl.dispatch.run(((function (val_62825,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62825) : fn1.call(null,val_62825));
});})(val_62825,ret))
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
var G__61387 = arguments.length;
switch (G__61387) {
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
var n__4607__auto___62836 = n;
var x_62838 = (0);
while(true){
if((x_62838 < n__4607__auto___62836)){
(a[x_62838] = x_62838);

var G__62842 = (x_62838 + (1));
x_62838 = G__62842;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61388 = (function (flag,meta61389){
this.flag = flag;
this.meta61389 = meta61389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_61390,meta61389__$1){
var self__ = this;
var _61390__$1 = this;
return (new cljs.core.async.t_cljs$core$async61388(self__.flag,meta61389__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_61390){
var self__ = this;
var _61390__$1 = this;
return self__.meta61389;
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61389","meta61389",-1928428660,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async61388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61388";

cljs.core.async.t_cljs$core$async61388.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61388");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61388.
 */
cljs.core.async.__GT_t_cljs$core$async61388 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61388(flag__$1,meta61389){
return (new cljs.core.async.t_cljs$core$async61388(flag__$1,meta61389));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async61388(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61391 = (function (flag,cb,meta61392){
this.flag = flag;
this.cb = cb;
this.meta61392 = meta61392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61393,meta61392__$1){
var self__ = this;
var _61393__$1 = this;
return (new cljs.core.async.t_cljs$core$async61391(self__.flag,self__.cb,meta61392__$1));
});

cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61393){
var self__ = this;
var _61393__$1 = this;
return self__.meta61392;
});

cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async61391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61392","meta61392",-885685672,null)], null);
});

cljs.core.async.t_cljs$core$async61391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61391";

cljs.core.async.t_cljs$core$async61391.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61391");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61391.
 */
cljs.core.async.__GT_t_cljs$core$async61391 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61391(flag__$1,cb__$1,meta61392){
return (new cljs.core.async.t_cljs$core$async61391(flag__$1,cb__$1,meta61392));
});

}

return (new cljs.core.async.t_cljs$core$async61391(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__61394_SHARP_){
var G__61396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61394_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61396) : fret.call(null,G__61396));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61395_SHARP_){
var G__61397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61395_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61397) : fret.call(null,G__61397));
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
var G__62863 = (i + (1));
i = G__62863;
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
var len__4730__auto___62866 = arguments.length;
var i__4731__auto___62867 = (0);
while(true){
if((i__4731__auto___62867 < len__4730__auto___62866)){
args__4736__auto__.push((arguments[i__4731__auto___62867]));

var G__62868 = (i__4731__auto___62867 + (1));
i__4731__auto___62867 = G__62868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61400){
var map__61401 = p__61400;
var map__61401__$1 = (((((!((map__61401 == null))))?(((((map__61401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61401):map__61401);
var opts = map__61401__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61398){
var G__61399 = cljs.core.first(seq61398);
var seq61398__$1 = cljs.core.next(seq61398);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61399,seq61398__$1);
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
var G__61404 = arguments.length;
switch (G__61404) {
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
var c__61315__auto___62878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___62878){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___62878){
return (function (state_61428){
var state_val_61429 = (state_61428[(1)]);
if((state_val_61429 === (7))){
var inst_61424 = (state_61428[(2)]);
var state_61428__$1 = state_61428;
var statearr_61430_62881 = state_61428__$1;
(statearr_61430_62881[(2)] = inst_61424);

(statearr_61430_62881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (1))){
var state_61428__$1 = state_61428;
var statearr_61431_62882 = state_61428__$1;
(statearr_61431_62882[(2)] = null);

(statearr_61431_62882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (4))){
var inst_61407 = (state_61428[(7)]);
var inst_61407__$1 = (state_61428[(2)]);
var inst_61408 = (inst_61407__$1 == null);
var state_61428__$1 = (function (){var statearr_61432 = state_61428;
(statearr_61432[(7)] = inst_61407__$1);

return statearr_61432;
})();
if(cljs.core.truth_(inst_61408)){
var statearr_61433_62883 = state_61428__$1;
(statearr_61433_62883[(1)] = (5));

} else {
var statearr_61434_62884 = state_61428__$1;
(statearr_61434_62884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (13))){
var state_61428__$1 = state_61428;
var statearr_61435_62885 = state_61428__$1;
(statearr_61435_62885[(2)] = null);

(statearr_61435_62885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (6))){
var inst_61407 = (state_61428[(7)]);
var state_61428__$1 = state_61428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61428__$1,(11),to,inst_61407);
} else {
if((state_val_61429 === (3))){
var inst_61426 = (state_61428[(2)]);
var state_61428__$1 = state_61428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61428__$1,inst_61426);
} else {
if((state_val_61429 === (12))){
var state_61428__$1 = state_61428;
var statearr_61436_62888 = state_61428__$1;
(statearr_61436_62888[(2)] = null);

(statearr_61436_62888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (2))){
var state_61428__$1 = state_61428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61428__$1,(4),from);
} else {
if((state_val_61429 === (11))){
var inst_61417 = (state_61428[(2)]);
var state_61428__$1 = state_61428;
if(cljs.core.truth_(inst_61417)){
var statearr_61437_62890 = state_61428__$1;
(statearr_61437_62890[(1)] = (12));

} else {
var statearr_61438_62891 = state_61428__$1;
(statearr_61438_62891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (9))){
var state_61428__$1 = state_61428;
var statearr_61439_62893 = state_61428__$1;
(statearr_61439_62893[(2)] = null);

(statearr_61439_62893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (5))){
var state_61428__$1 = state_61428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61440_62895 = state_61428__$1;
(statearr_61440_62895[(1)] = (8));

} else {
var statearr_61441_62896 = state_61428__$1;
(statearr_61441_62896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (14))){
var inst_61422 = (state_61428[(2)]);
var state_61428__$1 = state_61428;
var statearr_61442_62899 = state_61428__$1;
(statearr_61442_62899[(2)] = inst_61422);

(statearr_61442_62899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (10))){
var inst_61414 = (state_61428[(2)]);
var state_61428__$1 = state_61428;
var statearr_61443_62901 = state_61428__$1;
(statearr_61443_62901[(2)] = inst_61414);

(statearr_61443_62901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61429 === (8))){
var inst_61411 = cljs.core.async.close_BANG_(to);
var state_61428__$1 = state_61428;
var statearr_61444_62902 = state_61428__$1;
(statearr_61444_62902[(2)] = inst_61411);

(statearr_61444_62902[(1)] = (10));


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
});})(c__61315__auto___62878))
;
return ((function (switch__61214__auto__,c__61315__auto___62878){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_61445 = [null,null,null,null,null,null,null,null];
(statearr_61445[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_61445[(1)] = (1));

return statearr_61445;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_61428){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61428);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61446){if((e61446 instanceof Object)){
var ex__61218__auto__ = e61446;
var statearr_61447_62903 = state_61428;
(statearr_61447_62903[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62904 = state_61428;
state_61428 = G__62904;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_61428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_61428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___62878))
})();
var state__61317__auto__ = (function (){var statearr_61448 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61448[(6)] = c__61315__auto___62878);

return statearr_61448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___62878))
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
return (function (p__61449){
var vec__61450 = p__61449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(1),null);
var job = vec__61450;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61315__auto___62917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results){
return (function (state_61457){
var state_val_61458 = (state_61457[(1)]);
if((state_val_61458 === (1))){
var state_61457__$1 = state_61457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61457__$1,(2),res,v);
} else {
if((state_val_61458 === (2))){
var inst_61454 = (state_61457[(2)]);
var inst_61455 = cljs.core.async.close_BANG_(res);
var state_61457__$1 = (function (){var statearr_61459 = state_61457;
(statearr_61459[(7)] = inst_61454);

return statearr_61459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61457__$1,inst_61455);
} else {
return null;
}
}
});})(c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results))
;
return ((function (switch__61214__auto__,c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_61460 = [null,null,null,null,null,null,null,null];
(statearr_61460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__);

(statearr_61460[(1)] = (1));

return statearr_61460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1 = (function (state_61457){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61457);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61461){if((e61461 instanceof Object)){
var ex__61218__auto__ = e61461;
var statearr_61462_62922 = state_61457;
(statearr_61462_62922[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62923 = state_61457;
state_61457 = G__62923;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = function(state_61457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1.call(this,state_61457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results))
})();
var state__61317__auto__ = (function (){var statearr_61463 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61463[(6)] = c__61315__auto___62917);

return statearr_61463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___62917,res,vec__61450,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__61464){
var vec__61465 = p__61464;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61465,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61465,(1),null);
var job = vec__61465;
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
var n__4607__auto___62926 = n;
var __62927 = (0);
while(true){
if((__62927 < n__4607__auto___62926)){
var G__61468_62930 = type;
var G__61468_62931__$1 = (((G__61468_62930 instanceof cljs.core.Keyword))?G__61468_62930.fqn:null);
switch (G__61468_62931__$1) {
case "compute":
var c__61315__auto___62933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62927,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (__62927,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function (state_61481){
var state_val_61482 = (state_61481[(1)]);
if((state_val_61482 === (1))){
var state_61481__$1 = state_61481;
var statearr_61483_62936 = state_61481__$1;
(statearr_61483_62936[(2)] = null);

(statearr_61483_62936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61482 === (2))){
var state_61481__$1 = state_61481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61481__$1,(4),jobs);
} else {
if((state_val_61482 === (3))){
var inst_61479 = (state_61481[(2)]);
var state_61481__$1 = state_61481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61481__$1,inst_61479);
} else {
if((state_val_61482 === (4))){
var inst_61471 = (state_61481[(2)]);
var inst_61472 = process(inst_61471);
var state_61481__$1 = state_61481;
if(cljs.core.truth_(inst_61472)){
var statearr_61484_62937 = state_61481__$1;
(statearr_61484_62937[(1)] = (5));

} else {
var statearr_61485_62938 = state_61481__$1;
(statearr_61485_62938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61482 === (5))){
var state_61481__$1 = state_61481;
var statearr_61486_62939 = state_61481__$1;
(statearr_61486_62939[(2)] = null);

(statearr_61486_62939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61482 === (6))){
var state_61481__$1 = state_61481;
var statearr_61487_62940 = state_61481__$1;
(statearr_61487_62940[(2)] = null);

(statearr_61487_62940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61482 === (7))){
var inst_61477 = (state_61481[(2)]);
var state_61481__$1 = state_61481;
var statearr_61488_62941 = state_61481__$1;
(statearr_61488_62941[(2)] = inst_61477);

(statearr_61488_62941[(1)] = (3));


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
});})(__62927,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
;
return ((function (__62927,switch__61214__auto__,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_61489 = [null,null,null,null,null,null,null];
(statearr_61489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__);

(statearr_61489[(1)] = (1));

return statearr_61489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1 = (function (state_61481){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61481);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61490){if((e61490 instanceof Object)){
var ex__61218__auto__ = e61490;
var statearr_61491_62942 = state_61481;
(statearr_61491_62942[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62943 = state_61481;
state_61481 = G__62943;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = function(state_61481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1.call(this,state_61481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__;
})()
;})(__62927,switch__61214__auto__,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
})();
var state__61317__auto__ = (function (){var statearr_61492 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61492[(6)] = c__61315__auto___62933);

return statearr_61492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(__62927,c__61315__auto___62933,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
);


break;
case "async":
var c__61315__auto___62948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62927,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (__62927,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function (state_61505){
var state_val_61506 = (state_61505[(1)]);
if((state_val_61506 === (1))){
var state_61505__$1 = state_61505;
var statearr_61507_62949 = state_61505__$1;
(statearr_61507_62949[(2)] = null);

(statearr_61507_62949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61506 === (2))){
var state_61505__$1 = state_61505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61505__$1,(4),jobs);
} else {
if((state_val_61506 === (3))){
var inst_61503 = (state_61505[(2)]);
var state_61505__$1 = state_61505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61505__$1,inst_61503);
} else {
if((state_val_61506 === (4))){
var inst_61495 = (state_61505[(2)]);
var inst_61496 = async(inst_61495);
var state_61505__$1 = state_61505;
if(cljs.core.truth_(inst_61496)){
var statearr_61508_62951 = state_61505__$1;
(statearr_61508_62951[(1)] = (5));

} else {
var statearr_61509_62953 = state_61505__$1;
(statearr_61509_62953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61506 === (5))){
var state_61505__$1 = state_61505;
var statearr_61510_62954 = state_61505__$1;
(statearr_61510_62954[(2)] = null);

(statearr_61510_62954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61506 === (6))){
var state_61505__$1 = state_61505;
var statearr_61511_62955 = state_61505__$1;
(statearr_61511_62955[(2)] = null);

(statearr_61511_62955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61506 === (7))){
var inst_61501 = (state_61505[(2)]);
var state_61505__$1 = state_61505;
var statearr_61512_62957 = state_61505__$1;
(statearr_61512_62957[(2)] = inst_61501);

(statearr_61512_62957[(1)] = (3));


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
});})(__62927,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
;
return ((function (__62927,switch__61214__auto__,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_61513 = [null,null,null,null,null,null,null];
(statearr_61513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__);

(statearr_61513[(1)] = (1));

return statearr_61513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1 = (function (state_61505){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61505);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61514){if((e61514 instanceof Object)){
var ex__61218__auto__ = e61514;
var statearr_61515_62960 = state_61505;
(statearr_61515_62960[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62961 = state_61505;
state_61505 = G__62961;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = function(state_61505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1.call(this,state_61505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__;
})()
;})(__62927,switch__61214__auto__,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
})();
var state__61317__auto__ = (function (){var statearr_61516 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61516[(6)] = c__61315__auto___62948);

return statearr_61516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(__62927,c__61315__auto___62948,G__61468_62930,G__61468_62931__$1,n__4607__auto___62926,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61468_62931__$1)].join('')));

}

var G__62965 = (__62927 + (1));
__62927 = G__62965;
continue;
} else {
}
break;
}

var c__61315__auto___62966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___62966,jobs,results,process,async){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___62966,jobs,results,process,async){
return (function (state_61538){
var state_val_61539 = (state_61538[(1)]);
if((state_val_61539 === (7))){
var inst_61534 = (state_61538[(2)]);
var state_61538__$1 = state_61538;
var statearr_61540_62967 = state_61538__$1;
(statearr_61540_62967[(2)] = inst_61534);

(statearr_61540_62967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61539 === (1))){
var state_61538__$1 = state_61538;
var statearr_61541_62969 = state_61538__$1;
(statearr_61541_62969[(2)] = null);

(statearr_61541_62969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61539 === (4))){
var inst_61519 = (state_61538[(7)]);
var inst_61519__$1 = (state_61538[(2)]);
var inst_61520 = (inst_61519__$1 == null);
var state_61538__$1 = (function (){var statearr_61542 = state_61538;
(statearr_61542[(7)] = inst_61519__$1);

return statearr_61542;
})();
if(cljs.core.truth_(inst_61520)){
var statearr_61543_62970 = state_61538__$1;
(statearr_61543_62970[(1)] = (5));

} else {
var statearr_61544_62971 = state_61538__$1;
(statearr_61544_62971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61539 === (6))){
var inst_61524 = (state_61538[(8)]);
var inst_61519 = (state_61538[(7)]);
var inst_61524__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61526 = [inst_61519,inst_61524__$1];
var inst_61527 = (new cljs.core.PersistentVector(null,2,(5),inst_61525,inst_61526,null));
var state_61538__$1 = (function (){var statearr_61545 = state_61538;
(statearr_61545[(8)] = inst_61524__$1);

return statearr_61545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61538__$1,(8),jobs,inst_61527);
} else {
if((state_val_61539 === (3))){
var inst_61536 = (state_61538[(2)]);
var state_61538__$1 = state_61538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61538__$1,inst_61536);
} else {
if((state_val_61539 === (2))){
var state_61538__$1 = state_61538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61538__$1,(4),from);
} else {
if((state_val_61539 === (9))){
var inst_61531 = (state_61538[(2)]);
var state_61538__$1 = (function (){var statearr_61546 = state_61538;
(statearr_61546[(9)] = inst_61531);

return statearr_61546;
})();
var statearr_61547_62975 = state_61538__$1;
(statearr_61547_62975[(2)] = null);

(statearr_61547_62975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61539 === (5))){
var inst_61522 = cljs.core.async.close_BANG_(jobs);
var state_61538__$1 = state_61538;
var statearr_61548_62976 = state_61538__$1;
(statearr_61548_62976[(2)] = inst_61522);

(statearr_61548_62976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61539 === (8))){
var inst_61524 = (state_61538[(8)]);
var inst_61529 = (state_61538[(2)]);
var state_61538__$1 = (function (){var statearr_61549 = state_61538;
(statearr_61549[(10)] = inst_61529);

return statearr_61549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61538__$1,(9),results,inst_61524);
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
});})(c__61315__auto___62966,jobs,results,process,async))
;
return ((function (switch__61214__auto__,c__61315__auto___62966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_61550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__);

(statearr_61550[(1)] = (1));

return statearr_61550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1 = (function (state_61538){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61538);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61551){if((e61551 instanceof Object)){
var ex__61218__auto__ = e61551;
var statearr_61552_62978 = state_61538;
(statearr_61552_62978[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62979 = state_61538;
state_61538 = G__62979;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = function(state_61538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1.call(this,state_61538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___62966,jobs,results,process,async))
})();
var state__61317__auto__ = (function (){var statearr_61553 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61553[(6)] = c__61315__auto___62966);

return statearr_61553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___62966,jobs,results,process,async))
);


var c__61315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto__,jobs,results,process,async){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto__,jobs,results,process,async){
return (function (state_61591){
var state_val_61592 = (state_61591[(1)]);
if((state_val_61592 === (7))){
var inst_61587 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
var statearr_61593_62982 = state_61591__$1;
(statearr_61593_62982[(2)] = inst_61587);

(statearr_61593_62982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (20))){
var state_61591__$1 = state_61591;
var statearr_61594_62983 = state_61591__$1;
(statearr_61594_62983[(2)] = null);

(statearr_61594_62983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (1))){
var state_61591__$1 = state_61591;
var statearr_61595_62984 = state_61591__$1;
(statearr_61595_62984[(2)] = null);

(statearr_61595_62984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (4))){
var inst_61556 = (state_61591[(7)]);
var inst_61556__$1 = (state_61591[(2)]);
var inst_61557 = (inst_61556__$1 == null);
var state_61591__$1 = (function (){var statearr_61596 = state_61591;
(statearr_61596[(7)] = inst_61556__$1);

return statearr_61596;
})();
if(cljs.core.truth_(inst_61557)){
var statearr_61597_62985 = state_61591__$1;
(statearr_61597_62985[(1)] = (5));

} else {
var statearr_61598_62987 = state_61591__$1;
(statearr_61598_62987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (15))){
var inst_61569 = (state_61591[(8)]);
var state_61591__$1 = state_61591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61591__$1,(18),to,inst_61569);
} else {
if((state_val_61592 === (21))){
var inst_61582 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
var statearr_61599_62989 = state_61591__$1;
(statearr_61599_62989[(2)] = inst_61582);

(statearr_61599_62989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (13))){
var inst_61584 = (state_61591[(2)]);
var state_61591__$1 = (function (){var statearr_61600 = state_61591;
(statearr_61600[(9)] = inst_61584);

return statearr_61600;
})();
var statearr_61601_62990 = state_61591__$1;
(statearr_61601_62990[(2)] = null);

(statearr_61601_62990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (6))){
var inst_61556 = (state_61591[(7)]);
var state_61591__$1 = state_61591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61591__$1,(11),inst_61556);
} else {
if((state_val_61592 === (17))){
var inst_61577 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
if(cljs.core.truth_(inst_61577)){
var statearr_61602_62991 = state_61591__$1;
(statearr_61602_62991[(1)] = (19));

} else {
var statearr_61603_62992 = state_61591__$1;
(statearr_61603_62992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (3))){
var inst_61589 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61591__$1,inst_61589);
} else {
if((state_val_61592 === (12))){
var inst_61566 = (state_61591[(10)]);
var state_61591__$1 = state_61591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61591__$1,(14),inst_61566);
} else {
if((state_val_61592 === (2))){
var state_61591__$1 = state_61591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61591__$1,(4),results);
} else {
if((state_val_61592 === (19))){
var state_61591__$1 = state_61591;
var statearr_61604_62995 = state_61591__$1;
(statearr_61604_62995[(2)] = null);

(statearr_61604_62995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (11))){
var inst_61566 = (state_61591[(2)]);
var state_61591__$1 = (function (){var statearr_61605 = state_61591;
(statearr_61605[(10)] = inst_61566);

return statearr_61605;
})();
var statearr_61606_62996 = state_61591__$1;
(statearr_61606_62996[(2)] = null);

(statearr_61606_62996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (9))){
var state_61591__$1 = state_61591;
var statearr_61607_62997 = state_61591__$1;
(statearr_61607_62997[(2)] = null);

(statearr_61607_62997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (5))){
var state_61591__$1 = state_61591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61608_62998 = state_61591__$1;
(statearr_61608_62998[(1)] = (8));

} else {
var statearr_61609_62999 = state_61591__$1;
(statearr_61609_62999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (14))){
var inst_61571 = (state_61591[(11)]);
var inst_61569 = (state_61591[(8)]);
var inst_61569__$1 = (state_61591[(2)]);
var inst_61570 = (inst_61569__$1 == null);
var inst_61571__$1 = cljs.core.not(inst_61570);
var state_61591__$1 = (function (){var statearr_61610 = state_61591;
(statearr_61610[(11)] = inst_61571__$1);

(statearr_61610[(8)] = inst_61569__$1);

return statearr_61610;
})();
if(inst_61571__$1){
var statearr_61611_63000 = state_61591__$1;
(statearr_61611_63000[(1)] = (15));

} else {
var statearr_61612_63002 = state_61591__$1;
(statearr_61612_63002[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (16))){
var inst_61571 = (state_61591[(11)]);
var state_61591__$1 = state_61591;
var statearr_61613_63004 = state_61591__$1;
(statearr_61613_63004[(2)] = inst_61571);

(statearr_61613_63004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (10))){
var inst_61563 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
var statearr_61614_63005 = state_61591__$1;
(statearr_61614_63005[(2)] = inst_61563);

(statearr_61614_63005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (18))){
var inst_61574 = (state_61591[(2)]);
var state_61591__$1 = state_61591;
var statearr_61615_63006 = state_61591__$1;
(statearr_61615_63006[(2)] = inst_61574);

(statearr_61615_63006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61592 === (8))){
var inst_61560 = cljs.core.async.close_BANG_(to);
var state_61591__$1 = state_61591;
var statearr_61616_63007 = state_61591__$1;
(statearr_61616_63007[(2)] = inst_61560);

(statearr_61616_63007[(1)] = (10));


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
});})(c__61315__auto__,jobs,results,process,async))
;
return ((function (switch__61214__auto__,c__61315__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_61617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__);

(statearr_61617[(1)] = (1));

return statearr_61617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1 = (function (state_61591){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61591);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61618){if((e61618 instanceof Object)){
var ex__61218__auto__ = e61618;
var statearr_61619_63008 = state_61591;
(statearr_61619_63008[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63009 = state_61591;
state_61591 = G__63009;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__ = function(state_61591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1.call(this,state_61591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto__,jobs,results,process,async))
})();
var state__61317__auto__ = (function (){var statearr_61620 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61620[(6)] = c__61315__auto__);

return statearr_61620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto__,jobs,results,process,async))
);

return c__61315__auto__;
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
var G__61622 = arguments.length;
switch (G__61622) {
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
var G__61624 = arguments.length;
switch (G__61624) {
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
var G__61626 = arguments.length;
switch (G__61626) {
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
var c__61315__auto___63017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63017,tc,fc){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63017,tc,fc){
return (function (state_61652){
var state_val_61653 = (state_61652[(1)]);
if((state_val_61653 === (7))){
var inst_61648 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
var statearr_61654_63020 = state_61652__$1;
(statearr_61654_63020[(2)] = inst_61648);

(statearr_61654_63020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (1))){
var state_61652__$1 = state_61652;
var statearr_61655_63021 = state_61652__$1;
(statearr_61655_63021[(2)] = null);

(statearr_61655_63021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (4))){
var inst_61629 = (state_61652[(7)]);
var inst_61629__$1 = (state_61652[(2)]);
var inst_61630 = (inst_61629__$1 == null);
var state_61652__$1 = (function (){var statearr_61656 = state_61652;
(statearr_61656[(7)] = inst_61629__$1);

return statearr_61656;
})();
if(cljs.core.truth_(inst_61630)){
var statearr_61657_63024 = state_61652__$1;
(statearr_61657_63024[(1)] = (5));

} else {
var statearr_61658_63025 = state_61652__$1;
(statearr_61658_63025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (13))){
var state_61652__$1 = state_61652;
var statearr_61659_63026 = state_61652__$1;
(statearr_61659_63026[(2)] = null);

(statearr_61659_63026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (6))){
var inst_61629 = (state_61652[(7)]);
var inst_61635 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61629) : p.call(null,inst_61629));
var state_61652__$1 = state_61652;
if(cljs.core.truth_(inst_61635)){
var statearr_61660_63029 = state_61652__$1;
(statearr_61660_63029[(1)] = (9));

} else {
var statearr_61661_63030 = state_61652__$1;
(statearr_61661_63030[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (3))){
var inst_61650 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61652__$1,inst_61650);
} else {
if((state_val_61653 === (12))){
var state_61652__$1 = state_61652;
var statearr_61662_63032 = state_61652__$1;
(statearr_61662_63032[(2)] = null);

(statearr_61662_63032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (2))){
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61652__$1,(4),ch);
} else {
if((state_val_61653 === (11))){
var inst_61629 = (state_61652[(7)]);
var inst_61639 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61652__$1,(8),inst_61639,inst_61629);
} else {
if((state_val_61653 === (9))){
var state_61652__$1 = state_61652;
var statearr_61663_63034 = state_61652__$1;
(statearr_61663_63034[(2)] = tc);

(statearr_61663_63034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (5))){
var inst_61632 = cljs.core.async.close_BANG_(tc);
var inst_61633 = cljs.core.async.close_BANG_(fc);
var state_61652__$1 = (function (){var statearr_61664 = state_61652;
(statearr_61664[(8)] = inst_61632);

return statearr_61664;
})();
var statearr_61665_63037 = state_61652__$1;
(statearr_61665_63037[(2)] = inst_61633);

(statearr_61665_63037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (14))){
var inst_61646 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
var statearr_61666_63038 = state_61652__$1;
(statearr_61666_63038[(2)] = inst_61646);

(statearr_61666_63038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (10))){
var state_61652__$1 = state_61652;
var statearr_61667_63039 = state_61652__$1;
(statearr_61667_63039[(2)] = fc);

(statearr_61667_63039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (8))){
var inst_61641 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
if(cljs.core.truth_(inst_61641)){
var statearr_61668_63040 = state_61652__$1;
(statearr_61668_63040[(1)] = (12));

} else {
var statearr_61669_63041 = state_61652__$1;
(statearr_61669_63041[(1)] = (13));

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
});})(c__61315__auto___63017,tc,fc))
;
return ((function (switch__61214__auto__,c__61315__auto___63017,tc,fc){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_61670 = [null,null,null,null,null,null,null,null,null];
(statearr_61670[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_61670[(1)] = (1));

return statearr_61670;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_61652){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61652);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61671){if((e61671 instanceof Object)){
var ex__61218__auto__ = e61671;
var statearr_61672_63043 = state_61652;
(statearr_61672_63043[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63044 = state_61652;
state_61652 = G__63044;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_61652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_61652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63017,tc,fc))
})();
var state__61317__auto__ = (function (){var statearr_61673 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61673[(6)] = c__61315__auto___63017);

return statearr_61673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63017,tc,fc))
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
var c__61315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto__){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto__){
return (function (state_61694){
var state_val_61695 = (state_61694[(1)]);
if((state_val_61695 === (7))){
var inst_61690 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
var statearr_61696_63045 = state_61694__$1;
(statearr_61696_63045[(2)] = inst_61690);

(statearr_61696_63045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (1))){
var inst_61674 = init;
var state_61694__$1 = (function (){var statearr_61697 = state_61694;
(statearr_61697[(7)] = inst_61674);

return statearr_61697;
})();
var statearr_61698_63046 = state_61694__$1;
(statearr_61698_63046[(2)] = null);

(statearr_61698_63046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (4))){
var inst_61677 = (state_61694[(8)]);
var inst_61677__$1 = (state_61694[(2)]);
var inst_61678 = (inst_61677__$1 == null);
var state_61694__$1 = (function (){var statearr_61699 = state_61694;
(statearr_61699[(8)] = inst_61677__$1);

return statearr_61699;
})();
if(cljs.core.truth_(inst_61678)){
var statearr_61700_63051 = state_61694__$1;
(statearr_61700_63051[(1)] = (5));

} else {
var statearr_61701_63052 = state_61694__$1;
(statearr_61701_63052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (6))){
var inst_61674 = (state_61694[(7)]);
var inst_61677 = (state_61694[(8)]);
var inst_61681 = (state_61694[(9)]);
var inst_61681__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61674,inst_61677) : f.call(null,inst_61674,inst_61677));
var inst_61682 = cljs.core.reduced_QMARK_(inst_61681__$1);
var state_61694__$1 = (function (){var statearr_61702 = state_61694;
(statearr_61702[(9)] = inst_61681__$1);

return statearr_61702;
})();
if(inst_61682){
var statearr_61703_63056 = state_61694__$1;
(statearr_61703_63056[(1)] = (8));

} else {
var statearr_61704_63057 = state_61694__$1;
(statearr_61704_63057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (3))){
var inst_61692 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61694__$1,inst_61692);
} else {
if((state_val_61695 === (2))){
var state_61694__$1 = state_61694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61694__$1,(4),ch);
} else {
if((state_val_61695 === (9))){
var inst_61681 = (state_61694[(9)]);
var inst_61674 = inst_61681;
var state_61694__$1 = (function (){var statearr_61705 = state_61694;
(statearr_61705[(7)] = inst_61674);

return statearr_61705;
})();
var statearr_61706_63058 = state_61694__$1;
(statearr_61706_63058[(2)] = null);

(statearr_61706_63058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (5))){
var inst_61674 = (state_61694[(7)]);
var state_61694__$1 = state_61694;
var statearr_61707_63062 = state_61694__$1;
(statearr_61707_63062[(2)] = inst_61674);

(statearr_61707_63062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (10))){
var inst_61688 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
var statearr_61708_63063 = state_61694__$1;
(statearr_61708_63063[(2)] = inst_61688);

(statearr_61708_63063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (8))){
var inst_61681 = (state_61694[(9)]);
var inst_61684 = cljs.core.deref(inst_61681);
var state_61694__$1 = state_61694;
var statearr_61709_63067 = state_61694__$1;
(statearr_61709_63067[(2)] = inst_61684);

(statearr_61709_63067[(1)] = (10));


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
});})(c__61315__auto__))
;
return ((function (switch__61214__auto__,c__61315__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__61215__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61215__auto____0 = (function (){
var statearr_61710 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61710[(0)] = cljs$core$async$reduce_$_state_machine__61215__auto__);

(statearr_61710[(1)] = (1));

return statearr_61710;
});
var cljs$core$async$reduce_$_state_machine__61215__auto____1 = (function (state_61694){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61694);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61711){if((e61711 instanceof Object)){
var ex__61218__auto__ = e61711;
var statearr_61712_63068 = state_61694;
(statearr_61712_63068[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63072 = state_61694;
state_61694 = G__63072;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61215__auto__ = function(state_61694){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61215__auto____1.call(this,state_61694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61215__auto____0;
cljs$core$async$reduce_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61215__auto____1;
return cljs$core$async$reduce_$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto__))
})();
var state__61317__auto__ = (function (){var statearr_61713 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61713[(6)] = c__61315__auto__);

return statearr_61713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto__))
);

return c__61315__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto__,f__$1){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto__,f__$1){
return (function (state_61719){
var state_val_61720 = (state_61719[(1)]);
if((state_val_61720 === (1))){
var inst_61714 = cljs.core.async.reduce(f__$1,init,ch);
var state_61719__$1 = state_61719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61719__$1,(2),inst_61714);
} else {
if((state_val_61720 === (2))){
var inst_61716 = (state_61719[(2)]);
var inst_61717 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_61716) : f__$1.call(null,inst_61716));
var state_61719__$1 = state_61719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61719__$1,inst_61717);
} else {
return null;
}
}
});})(c__61315__auto__,f__$1))
;
return ((function (switch__61214__auto__,c__61315__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__61215__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61215__auto____0 = (function (){
var statearr_61721 = [null,null,null,null,null,null,null];
(statearr_61721[(0)] = cljs$core$async$transduce_$_state_machine__61215__auto__);

(statearr_61721[(1)] = (1));

return statearr_61721;
});
var cljs$core$async$transduce_$_state_machine__61215__auto____1 = (function (state_61719){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61719);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61722){if((e61722 instanceof Object)){
var ex__61218__auto__ = e61722;
var statearr_61723_63077 = state_61719;
(statearr_61723_63077[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63078 = state_61719;
state_61719 = G__63078;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61215__auto__ = function(state_61719){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61215__auto____1.call(this,state_61719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61215__auto____0;
cljs$core$async$transduce_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61215__auto____1;
return cljs$core$async$transduce_$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto__,f__$1))
})();
var state__61317__auto__ = (function (){var statearr_61724 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61724[(6)] = c__61315__auto__);

return statearr_61724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto__,f__$1))
);

return c__61315__auto__;
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
var G__61726 = arguments.length;
switch (G__61726) {
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
var c__61315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto__){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto__){
return (function (state_61751){
var state_val_61752 = (state_61751[(1)]);
if((state_val_61752 === (7))){
var inst_61733 = (state_61751[(2)]);
var state_61751__$1 = state_61751;
var statearr_61753_63088 = state_61751__$1;
(statearr_61753_63088[(2)] = inst_61733);

(statearr_61753_63088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (1))){
var inst_61727 = cljs.core.seq(coll);
var inst_61728 = inst_61727;
var state_61751__$1 = (function (){var statearr_61754 = state_61751;
(statearr_61754[(7)] = inst_61728);

return statearr_61754;
})();
var statearr_61755_63094 = state_61751__$1;
(statearr_61755_63094[(2)] = null);

(statearr_61755_63094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (4))){
var inst_61728 = (state_61751[(7)]);
var inst_61731 = cljs.core.first(inst_61728);
var state_61751__$1 = state_61751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61751__$1,(7),ch,inst_61731);
} else {
if((state_val_61752 === (13))){
var inst_61745 = (state_61751[(2)]);
var state_61751__$1 = state_61751;
var statearr_61756_63098 = state_61751__$1;
(statearr_61756_63098[(2)] = inst_61745);

(statearr_61756_63098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (6))){
var inst_61736 = (state_61751[(2)]);
var state_61751__$1 = state_61751;
if(cljs.core.truth_(inst_61736)){
var statearr_61757_63100 = state_61751__$1;
(statearr_61757_63100[(1)] = (8));

} else {
var statearr_61758_63101 = state_61751__$1;
(statearr_61758_63101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (3))){
var inst_61749 = (state_61751[(2)]);
var state_61751__$1 = state_61751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61751__$1,inst_61749);
} else {
if((state_val_61752 === (12))){
var state_61751__$1 = state_61751;
var statearr_61759_63105 = state_61751__$1;
(statearr_61759_63105[(2)] = null);

(statearr_61759_63105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (2))){
var inst_61728 = (state_61751[(7)]);
var state_61751__$1 = state_61751;
if(cljs.core.truth_(inst_61728)){
var statearr_61760_63109 = state_61751__$1;
(statearr_61760_63109[(1)] = (4));

} else {
var statearr_61761_63110 = state_61751__$1;
(statearr_61761_63110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (11))){
var inst_61742 = cljs.core.async.close_BANG_(ch);
var state_61751__$1 = state_61751;
var statearr_61762_63111 = state_61751__$1;
(statearr_61762_63111[(2)] = inst_61742);

(statearr_61762_63111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (9))){
var state_61751__$1 = state_61751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61763_63112 = state_61751__$1;
(statearr_61763_63112[(1)] = (11));

} else {
var statearr_61764_63113 = state_61751__$1;
(statearr_61764_63113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (5))){
var inst_61728 = (state_61751[(7)]);
var state_61751__$1 = state_61751;
var statearr_61765_63117 = state_61751__$1;
(statearr_61765_63117[(2)] = inst_61728);

(statearr_61765_63117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (10))){
var inst_61747 = (state_61751[(2)]);
var state_61751__$1 = state_61751;
var statearr_61766_63118 = state_61751__$1;
(statearr_61766_63118[(2)] = inst_61747);

(statearr_61766_63118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61752 === (8))){
var inst_61728 = (state_61751[(7)]);
var inst_61738 = cljs.core.next(inst_61728);
var inst_61728__$1 = inst_61738;
var state_61751__$1 = (function (){var statearr_61767 = state_61751;
(statearr_61767[(7)] = inst_61728__$1);

return statearr_61767;
})();
var statearr_61768_63119 = state_61751__$1;
(statearr_61768_63119[(2)] = null);

(statearr_61768_63119[(1)] = (2));


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
});})(c__61315__auto__))
;
return ((function (switch__61214__auto__,c__61315__auto__){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_61769 = [null,null,null,null,null,null,null,null];
(statearr_61769[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_61769[(1)] = (1));

return statearr_61769;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_61751){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61751);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61770){if((e61770 instanceof Object)){
var ex__61218__auto__ = e61770;
var statearr_61771_63134 = state_61751;
(statearr_61771_63134[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63135 = state_61751;
state_61751 = G__63135;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_61751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_61751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto__))
})();
var state__61317__auto__ = (function (){var statearr_61772 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61772[(6)] = c__61315__auto__);

return statearr_61772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto__))
);

return c__61315__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61773 = (function (ch,cs,meta61774){
this.ch = ch;
this.cs = cs;
this.meta61774 = meta61774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_61775,meta61774__$1){
var self__ = this;
var _61775__$1 = this;
return (new cljs.core.async.t_cljs$core$async61773(self__.ch,self__.cs,meta61774__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_61775){
var self__ = this;
var _61775__$1 = this;
return self__.meta61774;
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61774","meta61774",1917873696,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async61773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61773";

cljs.core.async.t_cljs$core$async61773.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61773");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61773.
 */
cljs.core.async.__GT_t_cljs$core$async61773 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async61773(ch__$1,cs__$1,meta61774){
return (new cljs.core.async.t_cljs$core$async61773(ch__$1,cs__$1,meta61774));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async61773(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__61315__auto___63165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63165,cs,m,dchan,dctr,done){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63165,cs,m,dchan,dctr,done){
return (function (state_61910){
var state_val_61911 = (state_61910[(1)]);
if((state_val_61911 === (7))){
var inst_61906 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61912_63168 = state_61910__$1;
(statearr_61912_63168[(2)] = inst_61906);

(statearr_61912_63168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (20))){
var inst_61809 = (state_61910[(7)]);
var inst_61821 = cljs.core.first(inst_61809);
var inst_61822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61821,(0),null);
var inst_61823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61821,(1),null);
var state_61910__$1 = (function (){var statearr_61913 = state_61910;
(statearr_61913[(8)] = inst_61822);

return statearr_61913;
})();
if(cljs.core.truth_(inst_61823)){
var statearr_61914_63173 = state_61910__$1;
(statearr_61914_63173[(1)] = (22));

} else {
var statearr_61915_63174 = state_61910__$1;
(statearr_61915_63174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (27))){
var inst_61858 = (state_61910[(9)]);
var inst_61851 = (state_61910[(10)]);
var inst_61853 = (state_61910[(11)]);
var inst_61778 = (state_61910[(12)]);
var inst_61858__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_61851,inst_61853);
var inst_61859 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61858__$1,inst_61778,done);
var state_61910__$1 = (function (){var statearr_61916 = state_61910;
(statearr_61916[(9)] = inst_61858__$1);

return statearr_61916;
})();
if(cljs.core.truth_(inst_61859)){
var statearr_61917_63177 = state_61910__$1;
(statearr_61917_63177[(1)] = (30));

} else {
var statearr_61918_63178 = state_61910__$1;
(statearr_61918_63178[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (1))){
var state_61910__$1 = state_61910;
var statearr_61919_63179 = state_61910__$1;
(statearr_61919_63179[(2)] = null);

(statearr_61919_63179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (24))){
var inst_61809 = (state_61910[(7)]);
var inst_61828 = (state_61910[(2)]);
var inst_61829 = cljs.core.next(inst_61809);
var inst_61787 = inst_61829;
var inst_61788 = null;
var inst_61789 = (0);
var inst_61790 = (0);
var state_61910__$1 = (function (){var statearr_61920 = state_61910;
(statearr_61920[(13)] = inst_61790);

(statearr_61920[(14)] = inst_61828);

(statearr_61920[(15)] = inst_61788);

(statearr_61920[(16)] = inst_61789);

(statearr_61920[(17)] = inst_61787);

return statearr_61920;
})();
var statearr_61921_63181 = state_61910__$1;
(statearr_61921_63181[(2)] = null);

(statearr_61921_63181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (39))){
var state_61910__$1 = state_61910;
var statearr_61925_63182 = state_61910__$1;
(statearr_61925_63182[(2)] = null);

(statearr_61925_63182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (4))){
var inst_61778 = (state_61910[(12)]);
var inst_61778__$1 = (state_61910[(2)]);
var inst_61779 = (inst_61778__$1 == null);
var state_61910__$1 = (function (){var statearr_61926 = state_61910;
(statearr_61926[(12)] = inst_61778__$1);

return statearr_61926;
})();
if(cljs.core.truth_(inst_61779)){
var statearr_61927_63183 = state_61910__$1;
(statearr_61927_63183[(1)] = (5));

} else {
var statearr_61928_63186 = state_61910__$1;
(statearr_61928_63186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (15))){
var inst_61790 = (state_61910[(13)]);
var inst_61788 = (state_61910[(15)]);
var inst_61789 = (state_61910[(16)]);
var inst_61787 = (state_61910[(17)]);
var inst_61805 = (state_61910[(2)]);
var inst_61806 = (inst_61790 + (1));
var tmp61922 = inst_61788;
var tmp61923 = inst_61789;
var tmp61924 = inst_61787;
var inst_61787__$1 = tmp61924;
var inst_61788__$1 = tmp61922;
var inst_61789__$1 = tmp61923;
var inst_61790__$1 = inst_61806;
var state_61910__$1 = (function (){var statearr_61929 = state_61910;
(statearr_61929[(13)] = inst_61790__$1);

(statearr_61929[(15)] = inst_61788__$1);

(statearr_61929[(18)] = inst_61805);

(statearr_61929[(16)] = inst_61789__$1);

(statearr_61929[(17)] = inst_61787__$1);

return statearr_61929;
})();
var statearr_61930_63189 = state_61910__$1;
(statearr_61930_63189[(2)] = null);

(statearr_61930_63189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (21))){
var inst_61832 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61934_63194 = state_61910__$1;
(statearr_61934_63194[(2)] = inst_61832);

(statearr_61934_63194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (31))){
var inst_61858 = (state_61910[(9)]);
var inst_61862 = done(null);
var inst_61863 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61858);
var state_61910__$1 = (function (){var statearr_61935 = state_61910;
(statearr_61935[(19)] = inst_61862);

return statearr_61935;
})();
var statearr_61936_63196 = state_61910__$1;
(statearr_61936_63196[(2)] = inst_61863);

(statearr_61936_63196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (32))){
var inst_61851 = (state_61910[(10)]);
var inst_61852 = (state_61910[(20)]);
var inst_61853 = (state_61910[(11)]);
var inst_61850 = (state_61910[(21)]);
var inst_61865 = (state_61910[(2)]);
var inst_61866 = (inst_61853 + (1));
var tmp61931 = inst_61851;
var tmp61932 = inst_61852;
var tmp61933 = inst_61850;
var inst_61850__$1 = tmp61933;
var inst_61851__$1 = tmp61931;
var inst_61852__$1 = tmp61932;
var inst_61853__$1 = inst_61866;
var state_61910__$1 = (function (){var statearr_61937 = state_61910;
(statearr_61937[(10)] = inst_61851__$1);

(statearr_61937[(20)] = inst_61852__$1);

(statearr_61937[(11)] = inst_61853__$1);

(statearr_61937[(22)] = inst_61865);

(statearr_61937[(21)] = inst_61850__$1);

return statearr_61937;
})();
var statearr_61938_63205 = state_61910__$1;
(statearr_61938_63205[(2)] = null);

(statearr_61938_63205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (40))){
var inst_61878 = (state_61910[(23)]);
var inst_61882 = done(null);
var inst_61883 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61878);
var state_61910__$1 = (function (){var statearr_61939 = state_61910;
(statearr_61939[(24)] = inst_61882);

return statearr_61939;
})();
var statearr_61940_63209 = state_61910__$1;
(statearr_61940_63209[(2)] = inst_61883);

(statearr_61940_63209[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (33))){
var inst_61869 = (state_61910[(25)]);
var inst_61871 = cljs.core.chunked_seq_QMARK_(inst_61869);
var state_61910__$1 = state_61910;
if(inst_61871){
var statearr_61941_63211 = state_61910__$1;
(statearr_61941_63211[(1)] = (36));

} else {
var statearr_61942_63212 = state_61910__$1;
(statearr_61942_63212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (13))){
var inst_61799 = (state_61910[(26)]);
var inst_61802 = cljs.core.async.close_BANG_(inst_61799);
var state_61910__$1 = state_61910;
var statearr_61943_63213 = state_61910__$1;
(statearr_61943_63213[(2)] = inst_61802);

(statearr_61943_63213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (22))){
var inst_61822 = (state_61910[(8)]);
var inst_61825 = cljs.core.async.close_BANG_(inst_61822);
var state_61910__$1 = state_61910;
var statearr_61944_63214 = state_61910__$1;
(statearr_61944_63214[(2)] = inst_61825);

(statearr_61944_63214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (36))){
var inst_61869 = (state_61910[(25)]);
var inst_61873 = cljs.core.chunk_first(inst_61869);
var inst_61874 = cljs.core.chunk_rest(inst_61869);
var inst_61875 = cljs.core.count(inst_61873);
var inst_61850 = inst_61874;
var inst_61851 = inst_61873;
var inst_61852 = inst_61875;
var inst_61853 = (0);
var state_61910__$1 = (function (){var statearr_61945 = state_61910;
(statearr_61945[(10)] = inst_61851);

(statearr_61945[(20)] = inst_61852);

(statearr_61945[(11)] = inst_61853);

(statearr_61945[(21)] = inst_61850);

return statearr_61945;
})();
var statearr_61946_63219 = state_61910__$1;
(statearr_61946_63219[(2)] = null);

(statearr_61946_63219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (41))){
var inst_61869 = (state_61910[(25)]);
var inst_61885 = (state_61910[(2)]);
var inst_61886 = cljs.core.next(inst_61869);
var inst_61850 = inst_61886;
var inst_61851 = null;
var inst_61852 = (0);
var inst_61853 = (0);
var state_61910__$1 = (function (){var statearr_61947 = state_61910;
(statearr_61947[(10)] = inst_61851);

(statearr_61947[(20)] = inst_61852);

(statearr_61947[(11)] = inst_61853);

(statearr_61947[(21)] = inst_61850);

(statearr_61947[(27)] = inst_61885);

return statearr_61947;
})();
var statearr_61948_63221 = state_61910__$1;
(statearr_61948_63221[(2)] = null);

(statearr_61948_63221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (43))){
var state_61910__$1 = state_61910;
var statearr_61949_63224 = state_61910__$1;
(statearr_61949_63224[(2)] = null);

(statearr_61949_63224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (29))){
var inst_61894 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61950_63231 = state_61910__$1;
(statearr_61950_63231[(2)] = inst_61894);

(statearr_61950_63231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (44))){
var inst_61903 = (state_61910[(2)]);
var state_61910__$1 = (function (){var statearr_61951 = state_61910;
(statearr_61951[(28)] = inst_61903);

return statearr_61951;
})();
var statearr_61952_63233 = state_61910__$1;
(statearr_61952_63233[(2)] = null);

(statearr_61952_63233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (6))){
var inst_61842 = (state_61910[(29)]);
var inst_61841 = cljs.core.deref(cs);
var inst_61842__$1 = cljs.core.keys(inst_61841);
var inst_61843 = cljs.core.count(inst_61842__$1);
var inst_61844 = cljs.core.reset_BANG_(dctr,inst_61843);
var inst_61849 = cljs.core.seq(inst_61842__$1);
var inst_61850 = inst_61849;
var inst_61851 = null;
var inst_61852 = (0);
var inst_61853 = (0);
var state_61910__$1 = (function (){var statearr_61953 = state_61910;
(statearr_61953[(10)] = inst_61851);

(statearr_61953[(20)] = inst_61852);

(statearr_61953[(11)] = inst_61853);

(statearr_61953[(30)] = inst_61844);

(statearr_61953[(21)] = inst_61850);

(statearr_61953[(29)] = inst_61842__$1);

return statearr_61953;
})();
var statearr_61954_63239 = state_61910__$1;
(statearr_61954_63239[(2)] = null);

(statearr_61954_63239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (28))){
var inst_61850 = (state_61910[(21)]);
var inst_61869 = (state_61910[(25)]);
var inst_61869__$1 = cljs.core.seq(inst_61850);
var state_61910__$1 = (function (){var statearr_61955 = state_61910;
(statearr_61955[(25)] = inst_61869__$1);

return statearr_61955;
})();
if(inst_61869__$1){
var statearr_61956_63243 = state_61910__$1;
(statearr_61956_63243[(1)] = (33));

} else {
var statearr_61957_63245 = state_61910__$1;
(statearr_61957_63245[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (25))){
var inst_61852 = (state_61910[(20)]);
var inst_61853 = (state_61910[(11)]);
var inst_61855 = (inst_61853 < inst_61852);
var inst_61856 = inst_61855;
var state_61910__$1 = state_61910;
if(cljs.core.truth_(inst_61856)){
var statearr_61958_63251 = state_61910__$1;
(statearr_61958_63251[(1)] = (27));

} else {
var statearr_61959_63252 = state_61910__$1;
(statearr_61959_63252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (34))){
var state_61910__$1 = state_61910;
var statearr_61960_63261 = state_61910__$1;
(statearr_61960_63261[(2)] = null);

(statearr_61960_63261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (17))){
var state_61910__$1 = state_61910;
var statearr_61961_63262 = state_61910__$1;
(statearr_61961_63262[(2)] = null);

(statearr_61961_63262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (3))){
var inst_61908 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61910__$1,inst_61908);
} else {
if((state_val_61911 === (12))){
var inst_61837 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61962_63264 = state_61910__$1;
(statearr_61962_63264[(2)] = inst_61837);

(statearr_61962_63264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (2))){
var state_61910__$1 = state_61910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61910__$1,(4),ch);
} else {
if((state_val_61911 === (23))){
var state_61910__$1 = state_61910;
var statearr_61963_63265 = state_61910__$1;
(statearr_61963_63265[(2)] = null);

(statearr_61963_63265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (35))){
var inst_61892 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61964_63267 = state_61910__$1;
(statearr_61964_63267[(2)] = inst_61892);

(statearr_61964_63267[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (19))){
var inst_61809 = (state_61910[(7)]);
var inst_61813 = cljs.core.chunk_first(inst_61809);
var inst_61814 = cljs.core.chunk_rest(inst_61809);
var inst_61815 = cljs.core.count(inst_61813);
var inst_61787 = inst_61814;
var inst_61788 = inst_61813;
var inst_61789 = inst_61815;
var inst_61790 = (0);
var state_61910__$1 = (function (){var statearr_61965 = state_61910;
(statearr_61965[(13)] = inst_61790);

(statearr_61965[(15)] = inst_61788);

(statearr_61965[(16)] = inst_61789);

(statearr_61965[(17)] = inst_61787);

return statearr_61965;
})();
var statearr_61966_63274 = state_61910__$1;
(statearr_61966_63274[(2)] = null);

(statearr_61966_63274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (11))){
var inst_61809 = (state_61910[(7)]);
var inst_61787 = (state_61910[(17)]);
var inst_61809__$1 = cljs.core.seq(inst_61787);
var state_61910__$1 = (function (){var statearr_61967 = state_61910;
(statearr_61967[(7)] = inst_61809__$1);

return statearr_61967;
})();
if(inst_61809__$1){
var statearr_61968_63276 = state_61910__$1;
(statearr_61968_63276[(1)] = (16));

} else {
var statearr_61969_63277 = state_61910__$1;
(statearr_61969_63277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (9))){
var inst_61839 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61970_63278 = state_61910__$1;
(statearr_61970_63278[(2)] = inst_61839);

(statearr_61970_63278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (5))){
var inst_61785 = cljs.core.deref(cs);
var inst_61786 = cljs.core.seq(inst_61785);
var inst_61787 = inst_61786;
var inst_61788 = null;
var inst_61789 = (0);
var inst_61790 = (0);
var state_61910__$1 = (function (){var statearr_61971 = state_61910;
(statearr_61971[(13)] = inst_61790);

(statearr_61971[(15)] = inst_61788);

(statearr_61971[(16)] = inst_61789);

(statearr_61971[(17)] = inst_61787);

return statearr_61971;
})();
var statearr_61972_63286 = state_61910__$1;
(statearr_61972_63286[(2)] = null);

(statearr_61972_63286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (14))){
var state_61910__$1 = state_61910;
var statearr_61973_63287 = state_61910__$1;
(statearr_61973_63287[(2)] = null);

(statearr_61973_63287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (45))){
var inst_61900 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61974_63288 = state_61910__$1;
(statearr_61974_63288[(2)] = inst_61900);

(statearr_61974_63288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (26))){
var inst_61842 = (state_61910[(29)]);
var inst_61896 = (state_61910[(2)]);
var inst_61897 = cljs.core.seq(inst_61842);
var state_61910__$1 = (function (){var statearr_61975 = state_61910;
(statearr_61975[(31)] = inst_61896);

return statearr_61975;
})();
if(inst_61897){
var statearr_61976_63289 = state_61910__$1;
(statearr_61976_63289[(1)] = (42));

} else {
var statearr_61977_63290 = state_61910__$1;
(statearr_61977_63290[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (16))){
var inst_61809 = (state_61910[(7)]);
var inst_61811 = cljs.core.chunked_seq_QMARK_(inst_61809);
var state_61910__$1 = state_61910;
if(inst_61811){
var statearr_61978_63297 = state_61910__$1;
(statearr_61978_63297[(1)] = (19));

} else {
var statearr_61979_63298 = state_61910__$1;
(statearr_61979_63298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (38))){
var inst_61889 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61980_63299 = state_61910__$1;
(statearr_61980_63299[(2)] = inst_61889);

(statearr_61980_63299[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (30))){
var state_61910__$1 = state_61910;
var statearr_61981_63300 = state_61910__$1;
(statearr_61981_63300[(2)] = null);

(statearr_61981_63300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (10))){
var inst_61790 = (state_61910[(13)]);
var inst_61788 = (state_61910[(15)]);
var inst_61798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_61788,inst_61790);
var inst_61799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61798,(0),null);
var inst_61800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61798,(1),null);
var state_61910__$1 = (function (){var statearr_61982 = state_61910;
(statearr_61982[(26)] = inst_61799);

return statearr_61982;
})();
if(cljs.core.truth_(inst_61800)){
var statearr_61983_63301 = state_61910__$1;
(statearr_61983_63301[(1)] = (13));

} else {
var statearr_61984_63302 = state_61910__$1;
(statearr_61984_63302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (18))){
var inst_61835 = (state_61910[(2)]);
var state_61910__$1 = state_61910;
var statearr_61985_63309 = state_61910__$1;
(statearr_61985_63309[(2)] = inst_61835);

(statearr_61985_63309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (42))){
var state_61910__$1 = state_61910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61910__$1,(45),dchan);
} else {
if((state_val_61911 === (37))){
var inst_61878 = (state_61910[(23)]);
var inst_61869 = (state_61910[(25)]);
var inst_61778 = (state_61910[(12)]);
var inst_61878__$1 = cljs.core.first(inst_61869);
var inst_61879 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61878__$1,inst_61778,done);
var state_61910__$1 = (function (){var statearr_61986 = state_61910;
(statearr_61986[(23)] = inst_61878__$1);

return statearr_61986;
})();
if(cljs.core.truth_(inst_61879)){
var statearr_61987_63311 = state_61910__$1;
(statearr_61987_63311[(1)] = (39));

} else {
var statearr_61988_63312 = state_61910__$1;
(statearr_61988_63312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61911 === (8))){
var inst_61790 = (state_61910[(13)]);
var inst_61789 = (state_61910[(16)]);
var inst_61792 = (inst_61790 < inst_61789);
var inst_61793 = inst_61792;
var state_61910__$1 = state_61910;
if(cljs.core.truth_(inst_61793)){
var statearr_61989_63314 = state_61910__$1;
(statearr_61989_63314[(1)] = (10));

} else {
var statearr_61990_63315 = state_61910__$1;
(statearr_61990_63315[(1)] = (11));

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
});})(c__61315__auto___63165,cs,m,dchan,dctr,done))
;
return ((function (switch__61214__auto__,c__61315__auto___63165,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__61215__auto__ = null;
var cljs$core$async$mult_$_state_machine__61215__auto____0 = (function (){
var statearr_61991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61991[(0)] = cljs$core$async$mult_$_state_machine__61215__auto__);

(statearr_61991[(1)] = (1));

return statearr_61991;
});
var cljs$core$async$mult_$_state_machine__61215__auto____1 = (function (state_61910){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_61910);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e61992){if((e61992 instanceof Object)){
var ex__61218__auto__ = e61992;
var statearr_61993_63317 = state_61910;
(statearr_61993_63317[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63318 = state_61910;
state_61910 = G__63318;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61215__auto__ = function(state_61910){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61215__auto____1.call(this,state_61910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61215__auto____0;
cljs$core$async$mult_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61215__auto____1;
return cljs$core$async$mult_$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63165,cs,m,dchan,dctr,done))
})();
var state__61317__auto__ = (function (){var statearr_61994 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_61994[(6)] = c__61315__auto___63165);

return statearr_61994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63165,cs,m,dchan,dctr,done))
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
var G__61996 = arguments.length;
switch (G__61996) {
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
var len__4730__auto___63336 = arguments.length;
var i__4731__auto___63337 = (0);
while(true){
if((i__4731__auto___63337 < len__4730__auto___63336)){
args__4736__auto__.push((arguments[i__4731__auto___63337]));

var G__63338 = (i__4731__auto___63337 + (1));
i__4731__auto___63337 = G__63338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62001){
var map__62002 = p__62001;
var map__62002__$1 = (((((!((map__62002 == null))))?(((((map__62002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62002):map__62002);
var opts = map__62002__$1;
var statearr_62004_63340 = state;
(statearr_62004_63340[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__62002,map__62002__$1,opts){
return (function (val){
var statearr_62005_63341 = state;
(statearr_62005_63341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__62002,map__62002__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_62006_63344 = state;
(statearr_62006_63344[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61997){
var G__61998 = cljs.core.first(seq61997);
var seq61997__$1 = cljs.core.next(seq61997);
var G__61999 = cljs.core.first(seq61997__$1);
var seq61997__$2 = cljs.core.next(seq61997__$1);
var G__62000 = cljs.core.first(seq61997__$2);
var seq61997__$3 = cljs.core.next(seq61997__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61998,G__61999,G__62000,seq61997__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62007 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62008){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62008 = meta62008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62009,meta62008__$1){
var self__ = this;
var _62009__$1 = this;
return (new cljs.core.async.t_cljs$core$async62007(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62009){
var self__ = this;
var _62009__$1 = this;
return self__.meta62008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async62007.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62008","meta62008",312444227,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62007";

cljs.core.async.t_cljs$core$async62007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62007.
 */
cljs.core.async.__GT_t_cljs$core$async62007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async62007(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62008){
return (new cljs.core.async.t_cljs$core$async62007(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async62007(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61315__auto___63380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62111){
var state_val_62112 = (state_62111[(1)]);
if((state_val_62112 === (7))){
var inst_62026 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
var statearr_62113_63382 = state_62111__$1;
(statearr_62113_63382[(2)] = inst_62026);

(statearr_62113_63382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (20))){
var inst_62038 = (state_62111[(7)]);
var state_62111__$1 = state_62111;
var statearr_62114_63383 = state_62111__$1;
(statearr_62114_63383[(2)] = inst_62038);

(statearr_62114_63383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (27))){
var state_62111__$1 = state_62111;
var statearr_62115_63385 = state_62111__$1;
(statearr_62115_63385[(2)] = null);

(statearr_62115_63385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (1))){
var inst_62013 = (state_62111[(8)]);
var inst_62013__$1 = calc_state();
var inst_62015 = (inst_62013__$1 == null);
var inst_62016 = cljs.core.not(inst_62015);
var state_62111__$1 = (function (){var statearr_62116 = state_62111;
(statearr_62116[(8)] = inst_62013__$1);

return statearr_62116;
})();
if(inst_62016){
var statearr_62117_63387 = state_62111__$1;
(statearr_62117_63387[(1)] = (2));

} else {
var statearr_62118_63388 = state_62111__$1;
(statearr_62118_63388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (24))){
var inst_62085 = (state_62111[(9)]);
var inst_62071 = (state_62111[(10)]);
var inst_62062 = (state_62111[(11)]);
var inst_62085__$1 = (inst_62062.cljs$core$IFn$_invoke$arity$1 ? inst_62062.cljs$core$IFn$_invoke$arity$1(inst_62071) : inst_62062.call(null,inst_62071));
var state_62111__$1 = (function (){var statearr_62119 = state_62111;
(statearr_62119[(9)] = inst_62085__$1);

return statearr_62119;
})();
if(cljs.core.truth_(inst_62085__$1)){
var statearr_62120_63391 = state_62111__$1;
(statearr_62120_63391[(1)] = (29));

} else {
var statearr_62121_63392 = state_62111__$1;
(statearr_62121_63392[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (4))){
var inst_62029 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62029)){
var statearr_62122_63393 = state_62111__$1;
(statearr_62122_63393[(1)] = (8));

} else {
var statearr_62123_63394 = state_62111__$1;
(statearr_62123_63394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (15))){
var inst_62056 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62056)){
var statearr_62124_63397 = state_62111__$1;
(statearr_62124_63397[(1)] = (19));

} else {
var statearr_62125_63398 = state_62111__$1;
(statearr_62125_63398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (21))){
var inst_62061 = (state_62111[(12)]);
var inst_62061__$1 = (state_62111[(2)]);
var inst_62062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62061__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62061__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62061__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62111__$1 = (function (){var statearr_62126 = state_62111;
(statearr_62126[(12)] = inst_62061__$1);

(statearr_62126[(11)] = inst_62062);

(statearr_62126[(13)] = inst_62063);

return statearr_62126;
})();
return cljs.core.async.ioc_alts_BANG_(state_62111__$1,(22),inst_62064);
} else {
if((state_val_62112 === (31))){
var inst_62093 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62093)){
var statearr_62127_63400 = state_62111__$1;
(statearr_62127_63400[(1)] = (32));

} else {
var statearr_62128_63401 = state_62111__$1;
(statearr_62128_63401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (32))){
var inst_62070 = (state_62111[(14)]);
var state_62111__$1 = state_62111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62111__$1,(35),out,inst_62070);
} else {
if((state_val_62112 === (33))){
var inst_62061 = (state_62111[(12)]);
var inst_62038 = inst_62061;
var state_62111__$1 = (function (){var statearr_62129 = state_62111;
(statearr_62129[(7)] = inst_62038);

return statearr_62129;
})();
var statearr_62130_63403 = state_62111__$1;
(statearr_62130_63403[(2)] = null);

(statearr_62130_63403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (13))){
var inst_62038 = (state_62111[(7)]);
var inst_62045 = inst_62038.cljs$lang$protocol_mask$partition0$;
var inst_62046 = (inst_62045 & (64));
var inst_62047 = inst_62038.cljs$core$ISeq$;
var inst_62048 = (cljs.core.PROTOCOL_SENTINEL === inst_62047);
var inst_62049 = ((inst_62046) || (inst_62048));
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62049)){
var statearr_62131_63404 = state_62111__$1;
(statearr_62131_63404[(1)] = (16));

} else {
var statearr_62132_63405 = state_62111__$1;
(statearr_62132_63405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (22))){
var inst_62071 = (state_62111[(10)]);
var inst_62070 = (state_62111[(14)]);
var inst_62069 = (state_62111[(2)]);
var inst_62070__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62069,(0),null);
var inst_62071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62069,(1),null);
var inst_62072 = (inst_62070__$1 == null);
var inst_62073 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62071__$1,change);
var inst_62074 = ((inst_62072) || (inst_62073));
var state_62111__$1 = (function (){var statearr_62133 = state_62111;
(statearr_62133[(10)] = inst_62071__$1);

(statearr_62133[(14)] = inst_62070__$1);

return statearr_62133;
})();
if(cljs.core.truth_(inst_62074)){
var statearr_62134_63408 = state_62111__$1;
(statearr_62134_63408[(1)] = (23));

} else {
var statearr_62135_63409 = state_62111__$1;
(statearr_62135_63409[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (36))){
var inst_62061 = (state_62111[(12)]);
var inst_62038 = inst_62061;
var state_62111__$1 = (function (){var statearr_62136 = state_62111;
(statearr_62136[(7)] = inst_62038);

return statearr_62136;
})();
var statearr_62137_63410 = state_62111__$1;
(statearr_62137_63410[(2)] = null);

(statearr_62137_63410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (29))){
var inst_62085 = (state_62111[(9)]);
var state_62111__$1 = state_62111;
var statearr_62138_63411 = state_62111__$1;
(statearr_62138_63411[(2)] = inst_62085);

(statearr_62138_63411[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (6))){
var state_62111__$1 = state_62111;
var statearr_62139_63417 = state_62111__$1;
(statearr_62139_63417[(2)] = false);

(statearr_62139_63417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (28))){
var inst_62081 = (state_62111[(2)]);
var inst_62082 = calc_state();
var inst_62038 = inst_62082;
var state_62111__$1 = (function (){var statearr_62140 = state_62111;
(statearr_62140[(7)] = inst_62038);

(statearr_62140[(15)] = inst_62081);

return statearr_62140;
})();
var statearr_62141_63418 = state_62111__$1;
(statearr_62141_63418[(2)] = null);

(statearr_62141_63418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (25))){
var inst_62107 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
var statearr_62142_63419 = state_62111__$1;
(statearr_62142_63419[(2)] = inst_62107);

(statearr_62142_63419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (34))){
var inst_62105 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
var statearr_62143_63420 = state_62111__$1;
(statearr_62143_63420[(2)] = inst_62105);

(statearr_62143_63420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (17))){
var state_62111__$1 = state_62111;
var statearr_62144_63422 = state_62111__$1;
(statearr_62144_63422[(2)] = false);

(statearr_62144_63422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (3))){
var state_62111__$1 = state_62111;
var statearr_62145_63424 = state_62111__$1;
(statearr_62145_63424[(2)] = false);

(statearr_62145_63424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (12))){
var inst_62109 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62111__$1,inst_62109);
} else {
if((state_val_62112 === (2))){
var inst_62013 = (state_62111[(8)]);
var inst_62018 = inst_62013.cljs$lang$protocol_mask$partition0$;
var inst_62019 = (inst_62018 & (64));
var inst_62020 = inst_62013.cljs$core$ISeq$;
var inst_62021 = (cljs.core.PROTOCOL_SENTINEL === inst_62020);
var inst_62022 = ((inst_62019) || (inst_62021));
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62022)){
var statearr_62146_63427 = state_62111__$1;
(statearr_62146_63427[(1)] = (5));

} else {
var statearr_62147_63428 = state_62111__$1;
(statearr_62147_63428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (23))){
var inst_62070 = (state_62111[(14)]);
var inst_62076 = (inst_62070 == null);
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62076)){
var statearr_62148_63429 = state_62111__$1;
(statearr_62148_63429[(1)] = (26));

} else {
var statearr_62149_63430 = state_62111__$1;
(statearr_62149_63430[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (35))){
var inst_62096 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
if(cljs.core.truth_(inst_62096)){
var statearr_62150_63431 = state_62111__$1;
(statearr_62150_63431[(1)] = (36));

} else {
var statearr_62151_63432 = state_62111__$1;
(statearr_62151_63432[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (19))){
var inst_62038 = (state_62111[(7)]);
var inst_62058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62038);
var state_62111__$1 = state_62111;
var statearr_62152_63437 = state_62111__$1;
(statearr_62152_63437[(2)] = inst_62058);

(statearr_62152_63437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (11))){
var inst_62038 = (state_62111[(7)]);
var inst_62042 = (inst_62038 == null);
var inst_62043 = cljs.core.not(inst_62042);
var state_62111__$1 = state_62111;
if(inst_62043){
var statearr_62153_63441 = state_62111__$1;
(statearr_62153_63441[(1)] = (13));

} else {
var statearr_62154_63442 = state_62111__$1;
(statearr_62154_63442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (9))){
var inst_62013 = (state_62111[(8)]);
var state_62111__$1 = state_62111;
var statearr_62155_63445 = state_62111__$1;
(statearr_62155_63445[(2)] = inst_62013);

(statearr_62155_63445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (5))){
var state_62111__$1 = state_62111;
var statearr_62156_63446 = state_62111__$1;
(statearr_62156_63446[(2)] = true);

(statearr_62156_63446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (14))){
var state_62111__$1 = state_62111;
var statearr_62157_63447 = state_62111__$1;
(statearr_62157_63447[(2)] = false);

(statearr_62157_63447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (26))){
var inst_62071 = (state_62111[(10)]);
var inst_62078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62071);
var state_62111__$1 = state_62111;
var statearr_62158_63449 = state_62111__$1;
(statearr_62158_63449[(2)] = inst_62078);

(statearr_62158_63449[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (16))){
var state_62111__$1 = state_62111;
var statearr_62159_63453 = state_62111__$1;
(statearr_62159_63453[(2)] = true);

(statearr_62159_63453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (38))){
var inst_62101 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
var statearr_62160_63454 = state_62111__$1;
(statearr_62160_63454[(2)] = inst_62101);

(statearr_62160_63454[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (30))){
var inst_62071 = (state_62111[(10)]);
var inst_62062 = (state_62111[(11)]);
var inst_62063 = (state_62111[(13)]);
var inst_62088 = cljs.core.empty_QMARK_(inst_62062);
var inst_62089 = (inst_62063.cljs$core$IFn$_invoke$arity$1 ? inst_62063.cljs$core$IFn$_invoke$arity$1(inst_62071) : inst_62063.call(null,inst_62071));
var inst_62090 = cljs.core.not(inst_62089);
var inst_62091 = ((inst_62088) && (inst_62090));
var state_62111__$1 = state_62111;
var statearr_62161_63458 = state_62111__$1;
(statearr_62161_63458[(2)] = inst_62091);

(statearr_62161_63458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (10))){
var inst_62013 = (state_62111[(8)]);
var inst_62034 = (state_62111[(2)]);
var inst_62035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62034,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62034,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62034,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62038 = inst_62013;
var state_62111__$1 = (function (){var statearr_62162 = state_62111;
(statearr_62162[(7)] = inst_62038);

(statearr_62162[(16)] = inst_62035);

(statearr_62162[(17)] = inst_62036);

(statearr_62162[(18)] = inst_62037);

return statearr_62162;
})();
var statearr_62163_63465 = state_62111__$1;
(statearr_62163_63465[(2)] = null);

(statearr_62163_63465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (18))){
var inst_62053 = (state_62111[(2)]);
var state_62111__$1 = state_62111;
var statearr_62164_63470 = state_62111__$1;
(statearr_62164_63470[(2)] = inst_62053);

(statearr_62164_63470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (37))){
var state_62111__$1 = state_62111;
var statearr_62165_63472 = state_62111__$1;
(statearr_62165_63472[(2)] = null);

(statearr_62165_63472[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62112 === (8))){
var inst_62013 = (state_62111[(8)]);
var inst_62031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62013);
var state_62111__$1 = state_62111;
var statearr_62166_63475 = state_62111__$1;
(statearr_62166_63475[(2)] = inst_62031);

(statearr_62166_63475[(1)] = (10));


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
});})(c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__61214__auto__,c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__61215__auto__ = null;
var cljs$core$async$mix_$_state_machine__61215__auto____0 = (function (){
var statearr_62167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62167[(0)] = cljs$core$async$mix_$_state_machine__61215__auto__);

(statearr_62167[(1)] = (1));

return statearr_62167;
});
var cljs$core$async$mix_$_state_machine__61215__auto____1 = (function (state_62111){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62111);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62168){if((e62168 instanceof Object)){
var ex__61218__auto__ = e62168;
var statearr_62169_63478 = state_62111;
(statearr_62169_63478[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63480 = state_62111;
state_62111 = G__63480;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61215__auto__ = function(state_62111){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61215__auto____1.call(this,state_62111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61215__auto____0;
cljs$core$async$mix_$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61215__auto____1;
return cljs$core$async$mix_$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__61317__auto__ = (function (){var statearr_62170 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62170[(6)] = c__61315__auto___63380);

return statearr_62170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__62172 = arguments.length;
switch (G__62172) {
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
var G__62175 = arguments.length;
switch (G__62175) {
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
return (function (p1__62173_SHARP_){
if(cljs.core.truth_((p1__62173_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62173_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62173_SHARP_.call(null,topic)))){
return p1__62173_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62173_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62176 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62177){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62177 = meta62177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62178,meta62177__$1){
var self__ = this;
var _62178__$1 = this;
return (new cljs.core.async.t_cljs$core$async62176(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62177__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62178){
var self__ = this;
var _62178__$1 = this;
return self__.meta62177;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62177","meta62177",1414895425,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62176";

cljs.core.async.t_cljs$core$async62176.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62176");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62176.
 */
cljs.core.async.__GT_t_cljs$core$async62176 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62176(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62177){
return (new cljs.core.async.t_cljs$core$async62176(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62177));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62176(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61315__auto___63524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63524,mults,ensure_mult,p){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63524,mults,ensure_mult,p){
return (function (state_62250){
var state_val_62251 = (state_62250[(1)]);
if((state_val_62251 === (7))){
var inst_62246 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62252_63525 = state_62250__$1;
(statearr_62252_63525[(2)] = inst_62246);

(statearr_62252_63525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (20))){
var state_62250__$1 = state_62250;
var statearr_62253_63527 = state_62250__$1;
(statearr_62253_63527[(2)] = null);

(statearr_62253_63527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (1))){
var state_62250__$1 = state_62250;
var statearr_62254_63529 = state_62250__$1;
(statearr_62254_63529[(2)] = null);

(statearr_62254_63529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (24))){
var inst_62229 = (state_62250[(7)]);
var inst_62238 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62229);
var state_62250__$1 = state_62250;
var statearr_62255_63530 = state_62250__$1;
(statearr_62255_63530[(2)] = inst_62238);

(statearr_62255_63530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (4))){
var inst_62181 = (state_62250[(8)]);
var inst_62181__$1 = (state_62250[(2)]);
var inst_62182 = (inst_62181__$1 == null);
var state_62250__$1 = (function (){var statearr_62256 = state_62250;
(statearr_62256[(8)] = inst_62181__$1);

return statearr_62256;
})();
if(cljs.core.truth_(inst_62182)){
var statearr_62257_63531 = state_62250__$1;
(statearr_62257_63531[(1)] = (5));

} else {
var statearr_62258_63532 = state_62250__$1;
(statearr_62258_63532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (15))){
var inst_62223 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62259_63533 = state_62250__$1;
(statearr_62259_63533[(2)] = inst_62223);

(statearr_62259_63533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (21))){
var inst_62243 = (state_62250[(2)]);
var state_62250__$1 = (function (){var statearr_62260 = state_62250;
(statearr_62260[(9)] = inst_62243);

return statearr_62260;
})();
var statearr_62261_63535 = state_62250__$1;
(statearr_62261_63535[(2)] = null);

(statearr_62261_63535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (13))){
var inst_62205 = (state_62250[(10)]);
var inst_62207 = cljs.core.chunked_seq_QMARK_(inst_62205);
var state_62250__$1 = state_62250;
if(inst_62207){
var statearr_62262_63539 = state_62250__$1;
(statearr_62262_63539[(1)] = (16));

} else {
var statearr_62263_63540 = state_62250__$1;
(statearr_62263_63540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (22))){
var inst_62235 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
if(cljs.core.truth_(inst_62235)){
var statearr_62264_63541 = state_62250__$1;
(statearr_62264_63541[(1)] = (23));

} else {
var statearr_62265_63542 = state_62250__$1;
(statearr_62265_63542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (6))){
var inst_62229 = (state_62250[(7)]);
var inst_62181 = (state_62250[(8)]);
var inst_62231 = (state_62250[(11)]);
var inst_62229__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62181) : topic_fn.call(null,inst_62181));
var inst_62230 = cljs.core.deref(mults);
var inst_62231__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62230,inst_62229__$1);
var state_62250__$1 = (function (){var statearr_62266 = state_62250;
(statearr_62266[(7)] = inst_62229__$1);

(statearr_62266[(11)] = inst_62231__$1);

return statearr_62266;
})();
if(cljs.core.truth_(inst_62231__$1)){
var statearr_62267_63543 = state_62250__$1;
(statearr_62267_63543[(1)] = (19));

} else {
var statearr_62268_63544 = state_62250__$1;
(statearr_62268_63544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (25))){
var inst_62240 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62269_63545 = state_62250__$1;
(statearr_62269_63545[(2)] = inst_62240);

(statearr_62269_63545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (17))){
var inst_62205 = (state_62250[(10)]);
var inst_62214 = cljs.core.first(inst_62205);
var inst_62215 = cljs.core.async.muxch_STAR_(inst_62214);
var inst_62216 = cljs.core.async.close_BANG_(inst_62215);
var inst_62217 = cljs.core.next(inst_62205);
var inst_62191 = inst_62217;
var inst_62192 = null;
var inst_62193 = (0);
var inst_62194 = (0);
var state_62250__$1 = (function (){var statearr_62270 = state_62250;
(statearr_62270[(12)] = inst_62194);

(statearr_62270[(13)] = inst_62216);

(statearr_62270[(14)] = inst_62191);

(statearr_62270[(15)] = inst_62192);

(statearr_62270[(16)] = inst_62193);

return statearr_62270;
})();
var statearr_62271_63546 = state_62250__$1;
(statearr_62271_63546[(2)] = null);

(statearr_62271_63546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (3))){
var inst_62248 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62250__$1,inst_62248);
} else {
if((state_val_62251 === (12))){
var inst_62225 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62272_63547 = state_62250__$1;
(statearr_62272_63547[(2)] = inst_62225);

(statearr_62272_63547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (2))){
var state_62250__$1 = state_62250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62250__$1,(4),ch);
} else {
if((state_val_62251 === (23))){
var state_62250__$1 = state_62250;
var statearr_62273_63548 = state_62250__$1;
(statearr_62273_63548[(2)] = null);

(statearr_62273_63548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (19))){
var inst_62181 = (state_62250[(8)]);
var inst_62231 = (state_62250[(11)]);
var inst_62233 = cljs.core.async.muxch_STAR_(inst_62231);
var state_62250__$1 = state_62250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62250__$1,(22),inst_62233,inst_62181);
} else {
if((state_val_62251 === (11))){
var inst_62205 = (state_62250[(10)]);
var inst_62191 = (state_62250[(14)]);
var inst_62205__$1 = cljs.core.seq(inst_62191);
var state_62250__$1 = (function (){var statearr_62274 = state_62250;
(statearr_62274[(10)] = inst_62205__$1);

return statearr_62274;
})();
if(inst_62205__$1){
var statearr_62275_63550 = state_62250__$1;
(statearr_62275_63550[(1)] = (13));

} else {
var statearr_62276_63551 = state_62250__$1;
(statearr_62276_63551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (9))){
var inst_62227 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62277_63553 = state_62250__$1;
(statearr_62277_63553[(2)] = inst_62227);

(statearr_62277_63553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (5))){
var inst_62188 = cljs.core.deref(mults);
var inst_62189 = cljs.core.vals(inst_62188);
var inst_62190 = cljs.core.seq(inst_62189);
var inst_62191 = inst_62190;
var inst_62192 = null;
var inst_62193 = (0);
var inst_62194 = (0);
var state_62250__$1 = (function (){var statearr_62278 = state_62250;
(statearr_62278[(12)] = inst_62194);

(statearr_62278[(14)] = inst_62191);

(statearr_62278[(15)] = inst_62192);

(statearr_62278[(16)] = inst_62193);

return statearr_62278;
})();
var statearr_62279_63554 = state_62250__$1;
(statearr_62279_63554[(2)] = null);

(statearr_62279_63554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (14))){
var state_62250__$1 = state_62250;
var statearr_62283_63555 = state_62250__$1;
(statearr_62283_63555[(2)] = null);

(statearr_62283_63555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (16))){
var inst_62205 = (state_62250[(10)]);
var inst_62209 = cljs.core.chunk_first(inst_62205);
var inst_62210 = cljs.core.chunk_rest(inst_62205);
var inst_62211 = cljs.core.count(inst_62209);
var inst_62191 = inst_62210;
var inst_62192 = inst_62209;
var inst_62193 = inst_62211;
var inst_62194 = (0);
var state_62250__$1 = (function (){var statearr_62284 = state_62250;
(statearr_62284[(12)] = inst_62194);

(statearr_62284[(14)] = inst_62191);

(statearr_62284[(15)] = inst_62192);

(statearr_62284[(16)] = inst_62193);

return statearr_62284;
})();
var statearr_62285_63556 = state_62250__$1;
(statearr_62285_63556[(2)] = null);

(statearr_62285_63556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (10))){
var inst_62194 = (state_62250[(12)]);
var inst_62191 = (state_62250[(14)]);
var inst_62192 = (state_62250[(15)]);
var inst_62193 = (state_62250[(16)]);
var inst_62199 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62192,inst_62194);
var inst_62200 = cljs.core.async.muxch_STAR_(inst_62199);
var inst_62201 = cljs.core.async.close_BANG_(inst_62200);
var inst_62202 = (inst_62194 + (1));
var tmp62280 = inst_62191;
var tmp62281 = inst_62192;
var tmp62282 = inst_62193;
var inst_62191__$1 = tmp62280;
var inst_62192__$1 = tmp62281;
var inst_62193__$1 = tmp62282;
var inst_62194__$1 = inst_62202;
var state_62250__$1 = (function (){var statearr_62286 = state_62250;
(statearr_62286[(12)] = inst_62194__$1);

(statearr_62286[(14)] = inst_62191__$1);

(statearr_62286[(15)] = inst_62192__$1);

(statearr_62286[(17)] = inst_62201);

(statearr_62286[(16)] = inst_62193__$1);

return statearr_62286;
})();
var statearr_62287_63564 = state_62250__$1;
(statearr_62287_63564[(2)] = null);

(statearr_62287_63564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (18))){
var inst_62220 = (state_62250[(2)]);
var state_62250__$1 = state_62250;
var statearr_62288_63565 = state_62250__$1;
(statearr_62288_63565[(2)] = inst_62220);

(statearr_62288_63565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62251 === (8))){
var inst_62194 = (state_62250[(12)]);
var inst_62193 = (state_62250[(16)]);
var inst_62196 = (inst_62194 < inst_62193);
var inst_62197 = inst_62196;
var state_62250__$1 = state_62250;
if(cljs.core.truth_(inst_62197)){
var statearr_62289_63566 = state_62250__$1;
(statearr_62289_63566[(1)] = (10));

} else {
var statearr_62290_63567 = state_62250__$1;
(statearr_62290_63567[(1)] = (11));

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
});})(c__61315__auto___63524,mults,ensure_mult,p))
;
return ((function (switch__61214__auto__,c__61315__auto___63524,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62291[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62291[(1)] = (1));

return statearr_62291;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62250){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62250);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62292){if((e62292 instanceof Object)){
var ex__61218__auto__ = e62292;
var statearr_62293_63569 = state_62250;
(statearr_62293_63569[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63570 = state_62250;
state_62250 = G__63570;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63524,mults,ensure_mult,p))
})();
var state__61317__auto__ = (function (){var statearr_62294 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62294[(6)] = c__61315__auto___63524);

return statearr_62294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63524,mults,ensure_mult,p))
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
var G__62296 = arguments.length;
switch (G__62296) {
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
var G__62298 = arguments.length;
switch (G__62298) {
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
var G__62300 = arguments.length;
switch (G__62300) {
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
var c__61315__auto___63587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62339){
var state_val_62340 = (state_62339[(1)]);
if((state_val_62340 === (7))){
var state_62339__$1 = state_62339;
var statearr_62341_63589 = state_62339__$1;
(statearr_62341_63589[(2)] = null);

(statearr_62341_63589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (1))){
var state_62339__$1 = state_62339;
var statearr_62342_63590 = state_62339__$1;
(statearr_62342_63590[(2)] = null);

(statearr_62342_63590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (4))){
var inst_62303 = (state_62339[(7)]);
var inst_62305 = (inst_62303 < cnt);
var state_62339__$1 = state_62339;
if(cljs.core.truth_(inst_62305)){
var statearr_62343_63591 = state_62339__$1;
(statearr_62343_63591[(1)] = (6));

} else {
var statearr_62344_63592 = state_62339__$1;
(statearr_62344_63592[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (15))){
var inst_62335 = (state_62339[(2)]);
var state_62339__$1 = state_62339;
var statearr_62345_63593 = state_62339__$1;
(statearr_62345_63593[(2)] = inst_62335);

(statearr_62345_63593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (13))){
var inst_62328 = cljs.core.async.close_BANG_(out);
var state_62339__$1 = state_62339;
var statearr_62346_63597 = state_62339__$1;
(statearr_62346_63597[(2)] = inst_62328);

(statearr_62346_63597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (6))){
var state_62339__$1 = state_62339;
var statearr_62347_63598 = state_62339__$1;
(statearr_62347_63598[(2)] = null);

(statearr_62347_63598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (3))){
var inst_62337 = (state_62339[(2)]);
var state_62339__$1 = state_62339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62339__$1,inst_62337);
} else {
if((state_val_62340 === (12))){
var inst_62325 = (state_62339[(8)]);
var inst_62325__$1 = (state_62339[(2)]);
var inst_62326 = cljs.core.some(cljs.core.nil_QMARK_,inst_62325__$1);
var state_62339__$1 = (function (){var statearr_62348 = state_62339;
(statearr_62348[(8)] = inst_62325__$1);

return statearr_62348;
})();
if(cljs.core.truth_(inst_62326)){
var statearr_62349_63603 = state_62339__$1;
(statearr_62349_63603[(1)] = (13));

} else {
var statearr_62350_63604 = state_62339__$1;
(statearr_62350_63604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (2))){
var inst_62302 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62303 = (0);
var state_62339__$1 = (function (){var statearr_62351 = state_62339;
(statearr_62351[(9)] = inst_62302);

(statearr_62351[(7)] = inst_62303);

return statearr_62351;
})();
var statearr_62352_63605 = state_62339__$1;
(statearr_62352_63605[(2)] = null);

(statearr_62352_63605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (11))){
var inst_62303 = (state_62339[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62339,(10),Object,null,(9));
var inst_62312 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62303) : chs__$1.call(null,inst_62303));
var inst_62313 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62303) : done.call(null,inst_62303));
var inst_62314 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62312,inst_62313);
var state_62339__$1 = state_62339;
var statearr_62353_63606 = state_62339__$1;
(statearr_62353_63606[(2)] = inst_62314);


cljs.core.async.impl.ioc_helpers.process_exception(state_62339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (9))){
var inst_62303 = (state_62339[(7)]);
var inst_62316 = (state_62339[(2)]);
var inst_62317 = (inst_62303 + (1));
var inst_62303__$1 = inst_62317;
var state_62339__$1 = (function (){var statearr_62354 = state_62339;
(statearr_62354[(10)] = inst_62316);

(statearr_62354[(7)] = inst_62303__$1);

return statearr_62354;
})();
var statearr_62355_63607 = state_62339__$1;
(statearr_62355_63607[(2)] = null);

(statearr_62355_63607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (5))){
var inst_62323 = (state_62339[(2)]);
var state_62339__$1 = (function (){var statearr_62356 = state_62339;
(statearr_62356[(11)] = inst_62323);

return statearr_62356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62339__$1,(12),dchan);
} else {
if((state_val_62340 === (14))){
var inst_62325 = (state_62339[(8)]);
var inst_62330 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62325);
var state_62339__$1 = state_62339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62339__$1,(16),out,inst_62330);
} else {
if((state_val_62340 === (16))){
var inst_62332 = (state_62339[(2)]);
var state_62339__$1 = (function (){var statearr_62357 = state_62339;
(statearr_62357[(12)] = inst_62332);

return statearr_62357;
})();
var statearr_62358_63608 = state_62339__$1;
(statearr_62358_63608[(2)] = null);

(statearr_62358_63608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (10))){
var inst_62307 = (state_62339[(2)]);
var inst_62308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62339__$1 = (function (){var statearr_62359 = state_62339;
(statearr_62359[(13)] = inst_62307);

return statearr_62359;
})();
var statearr_62360_63609 = state_62339__$1;
(statearr_62360_63609[(2)] = inst_62308);


cljs.core.async.impl.ioc_helpers.process_exception(state_62339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62340 === (8))){
var inst_62321 = (state_62339[(2)]);
var state_62339__$1 = state_62339;
var statearr_62361_63611 = state_62339__$1;
(statearr_62361_63611[(2)] = inst_62321);

(statearr_62361_63611[(1)] = (5));


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
});})(c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__61214__auto__,c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62362[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62362[(1)] = (1));

return statearr_62362;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62339){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62339);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62363){if((e62363 instanceof Object)){
var ex__61218__auto__ = e62363;
var statearr_62364_63614 = state_62339;
(statearr_62364_63614[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63615 = state_62339;
state_62339 = G__63615;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__61317__auto__ = (function (){var statearr_62365 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62365[(6)] = c__61315__auto___63587);

return statearr_62365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63587,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__62368 = arguments.length;
switch (G__62368) {
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
var c__61315__auto___63626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63626,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63626,out){
return (function (state_62400){
var state_val_62401 = (state_62400[(1)]);
if((state_val_62401 === (7))){
var inst_62379 = (state_62400[(7)]);
var inst_62380 = (state_62400[(8)]);
var inst_62379__$1 = (state_62400[(2)]);
var inst_62380__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62379__$1,(0),null);
var inst_62381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62379__$1,(1),null);
var inst_62382 = (inst_62380__$1 == null);
var state_62400__$1 = (function (){var statearr_62402 = state_62400;
(statearr_62402[(7)] = inst_62379__$1);

(statearr_62402[(8)] = inst_62380__$1);

(statearr_62402[(9)] = inst_62381);

return statearr_62402;
})();
if(cljs.core.truth_(inst_62382)){
var statearr_62403_63629 = state_62400__$1;
(statearr_62403_63629[(1)] = (8));

} else {
var statearr_62404_63630 = state_62400__$1;
(statearr_62404_63630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (1))){
var inst_62369 = cljs.core.vec(chs);
var inst_62370 = inst_62369;
var state_62400__$1 = (function (){var statearr_62405 = state_62400;
(statearr_62405[(10)] = inst_62370);

return statearr_62405;
})();
var statearr_62406_63631 = state_62400__$1;
(statearr_62406_63631[(2)] = null);

(statearr_62406_63631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (4))){
var inst_62370 = (state_62400[(10)]);
var state_62400__$1 = state_62400;
return cljs.core.async.ioc_alts_BANG_(state_62400__$1,(7),inst_62370);
} else {
if((state_val_62401 === (6))){
var inst_62396 = (state_62400[(2)]);
var state_62400__$1 = state_62400;
var statearr_62407_63634 = state_62400__$1;
(statearr_62407_63634[(2)] = inst_62396);

(statearr_62407_63634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (3))){
var inst_62398 = (state_62400[(2)]);
var state_62400__$1 = state_62400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62400__$1,inst_62398);
} else {
if((state_val_62401 === (2))){
var inst_62370 = (state_62400[(10)]);
var inst_62372 = cljs.core.count(inst_62370);
var inst_62373 = (inst_62372 > (0));
var state_62400__$1 = state_62400;
if(cljs.core.truth_(inst_62373)){
var statearr_62409_63637 = state_62400__$1;
(statearr_62409_63637[(1)] = (4));

} else {
var statearr_62410_63638 = state_62400__$1;
(statearr_62410_63638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (11))){
var inst_62370 = (state_62400[(10)]);
var inst_62389 = (state_62400[(2)]);
var tmp62408 = inst_62370;
var inst_62370__$1 = tmp62408;
var state_62400__$1 = (function (){var statearr_62411 = state_62400;
(statearr_62411[(10)] = inst_62370__$1);

(statearr_62411[(11)] = inst_62389);

return statearr_62411;
})();
var statearr_62412_63640 = state_62400__$1;
(statearr_62412_63640[(2)] = null);

(statearr_62412_63640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (9))){
var inst_62380 = (state_62400[(8)]);
var state_62400__$1 = state_62400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62400__$1,(11),out,inst_62380);
} else {
if((state_val_62401 === (5))){
var inst_62394 = cljs.core.async.close_BANG_(out);
var state_62400__$1 = state_62400;
var statearr_62413_63643 = state_62400__$1;
(statearr_62413_63643[(2)] = inst_62394);

(statearr_62413_63643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (10))){
var inst_62392 = (state_62400[(2)]);
var state_62400__$1 = state_62400;
var statearr_62414_63644 = state_62400__$1;
(statearr_62414_63644[(2)] = inst_62392);

(statearr_62414_63644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62401 === (8))){
var inst_62379 = (state_62400[(7)]);
var inst_62380 = (state_62400[(8)]);
var inst_62370 = (state_62400[(10)]);
var inst_62381 = (state_62400[(9)]);
var inst_62384 = (function (){var cs = inst_62370;
var vec__62375 = inst_62379;
var v = inst_62380;
var c = inst_62381;
return ((function (cs,vec__62375,v,c,inst_62379,inst_62380,inst_62370,inst_62381,state_val_62401,c__61315__auto___63626,out){
return (function (p1__62366_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62366_SHARP_);
});
;})(cs,vec__62375,v,c,inst_62379,inst_62380,inst_62370,inst_62381,state_val_62401,c__61315__auto___63626,out))
})();
var inst_62385 = cljs.core.filterv(inst_62384,inst_62370);
var inst_62370__$1 = inst_62385;
var state_62400__$1 = (function (){var statearr_62415 = state_62400;
(statearr_62415[(10)] = inst_62370__$1);

return statearr_62415;
})();
var statearr_62416_63645 = state_62400__$1;
(statearr_62416_63645[(2)] = null);

(statearr_62416_63645[(1)] = (2));


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
});})(c__61315__auto___63626,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63626,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62417[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62417[(1)] = (1));

return statearr_62417;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62400){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62400);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62418){if((e62418 instanceof Object)){
var ex__61218__auto__ = e62418;
var statearr_62419_63649 = state_62400;
(statearr_62419_63649[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63650 = state_62400;
state_62400 = G__63650;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63626,out))
})();
var state__61317__auto__ = (function (){var statearr_62420 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62420[(6)] = c__61315__auto___63626);

return statearr_62420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63626,out))
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
var G__62422 = arguments.length;
switch (G__62422) {
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
var c__61315__auto___63654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63654,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63654,out){
return (function (state_62446){
var state_val_62447 = (state_62446[(1)]);
if((state_val_62447 === (7))){
var inst_62428 = (state_62446[(7)]);
var inst_62428__$1 = (state_62446[(2)]);
var inst_62429 = (inst_62428__$1 == null);
var inst_62430 = cljs.core.not(inst_62429);
var state_62446__$1 = (function (){var statearr_62448 = state_62446;
(statearr_62448[(7)] = inst_62428__$1);

return statearr_62448;
})();
if(inst_62430){
var statearr_62449_63655 = state_62446__$1;
(statearr_62449_63655[(1)] = (8));

} else {
var statearr_62450_63656 = state_62446__$1;
(statearr_62450_63656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (1))){
var inst_62423 = (0);
var state_62446__$1 = (function (){var statearr_62451 = state_62446;
(statearr_62451[(8)] = inst_62423);

return statearr_62451;
})();
var statearr_62452_63657 = state_62446__$1;
(statearr_62452_63657[(2)] = null);

(statearr_62452_63657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (4))){
var state_62446__$1 = state_62446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62446__$1,(7),ch);
} else {
if((state_val_62447 === (6))){
var inst_62441 = (state_62446[(2)]);
var state_62446__$1 = state_62446;
var statearr_62453_63658 = state_62446__$1;
(statearr_62453_63658[(2)] = inst_62441);

(statearr_62453_63658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (3))){
var inst_62443 = (state_62446[(2)]);
var inst_62444 = cljs.core.async.close_BANG_(out);
var state_62446__$1 = (function (){var statearr_62454 = state_62446;
(statearr_62454[(9)] = inst_62443);

return statearr_62454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62446__$1,inst_62444);
} else {
if((state_val_62447 === (2))){
var inst_62423 = (state_62446[(8)]);
var inst_62425 = (inst_62423 < n);
var state_62446__$1 = state_62446;
if(cljs.core.truth_(inst_62425)){
var statearr_62455_63665 = state_62446__$1;
(statearr_62455_63665[(1)] = (4));

} else {
var statearr_62456_63666 = state_62446__$1;
(statearr_62456_63666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (11))){
var inst_62423 = (state_62446[(8)]);
var inst_62433 = (state_62446[(2)]);
var inst_62434 = (inst_62423 + (1));
var inst_62423__$1 = inst_62434;
var state_62446__$1 = (function (){var statearr_62457 = state_62446;
(statearr_62457[(10)] = inst_62433);

(statearr_62457[(8)] = inst_62423__$1);

return statearr_62457;
})();
var statearr_62458_63667 = state_62446__$1;
(statearr_62458_63667[(2)] = null);

(statearr_62458_63667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (9))){
var state_62446__$1 = state_62446;
var statearr_62459_63669 = state_62446__$1;
(statearr_62459_63669[(2)] = null);

(statearr_62459_63669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (5))){
var state_62446__$1 = state_62446;
var statearr_62460_63673 = state_62446__$1;
(statearr_62460_63673[(2)] = null);

(statearr_62460_63673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (10))){
var inst_62438 = (state_62446[(2)]);
var state_62446__$1 = state_62446;
var statearr_62461_63674 = state_62446__$1;
(statearr_62461_63674[(2)] = inst_62438);

(statearr_62461_63674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62447 === (8))){
var inst_62428 = (state_62446[(7)]);
var state_62446__$1 = state_62446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62446__$1,(11),out,inst_62428);
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
});})(c__61315__auto___63654,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63654,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62462[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62462[(1)] = (1));

return statearr_62462;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62446){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62446);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62463){if((e62463 instanceof Object)){
var ex__61218__auto__ = e62463;
var statearr_62464_63679 = state_62446;
(statearr_62464_63679[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63680 = state_62446;
state_62446 = G__63680;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63654,out))
})();
var state__61317__auto__ = (function (){var statearr_62465 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62465[(6)] = c__61315__auto___63654);

return statearr_62465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63654,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62467 = (function (f,ch,meta62468){
this.f = f;
this.ch = ch;
this.meta62468 = meta62468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62469,meta62468__$1){
var self__ = this;
var _62469__$1 = this;
return (new cljs.core.async.t_cljs$core$async62467(self__.f,self__.ch,meta62468__$1));
});

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62469){
var self__ = this;
var _62469__$1 = this;
return self__.meta62468;
});

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62470 = (function (f,ch,meta62468,_,fn1,meta62471){
this.f = f;
this.ch = ch;
this.meta62468 = meta62468;
this._ = _;
this.fn1 = fn1;
this.meta62471 = meta62471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62472,meta62471__$1){
var self__ = this;
var _62472__$1 = this;
return (new cljs.core.async.t_cljs$core$async62470(self__.f,self__.ch,self__.meta62468,self__._,self__.fn1,meta62471__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62472){
var self__ = this;
var _62472__$1 = this;
return self__.meta62471;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__62466_SHARP_){
var G__62473 = (((p1__62466_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62466_SHARP_) : self__.f.call(null,p1__62466_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62473) : f1.call(null,G__62473));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62468","meta62468",1236034037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62467","cljs.core.async/t_cljs$core$async62467",866089833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62471","meta62471",-1240939829,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62470";

cljs.core.async.t_cljs$core$async62470.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62470");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62470.
 */
cljs.core.async.__GT_t_cljs$core$async62470 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62470(f__$1,ch__$1,meta62468__$1,___$2,fn1__$1,meta62471){
return (new cljs.core.async.t_cljs$core$async62470(f__$1,ch__$1,meta62468__$1,___$2,fn1__$1,meta62471));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async62470(self__.f,self__.ch,self__.meta62468,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62474 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62474) : self__.f.call(null,G__62474));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async62467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62468","meta62468",1236034037,null)], null);
});

cljs.core.async.t_cljs$core$async62467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62467";

cljs.core.async.t_cljs$core$async62467.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62467");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62467.
 */
cljs.core.async.__GT_t_cljs$core$async62467 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62467(f__$1,ch__$1,meta62468){
return (new cljs.core.async.t_cljs$core$async62467(f__$1,ch__$1,meta62468));
});

}

return (new cljs.core.async.t_cljs$core$async62467(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62475 = (function (f,ch,meta62476){
this.f = f;
this.ch = ch;
this.meta62476 = meta62476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62477,meta62476__$1){
var self__ = this;
var _62477__$1 = this;
return (new cljs.core.async.t_cljs$core$async62475(self__.f,self__.ch,meta62476__$1));
});

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62477){
var self__ = this;
var _62477__$1 = this;
return self__.meta62476;
});

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async62475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62476","meta62476",-1086364082,null)], null);
});

cljs.core.async.t_cljs$core$async62475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62475";

cljs.core.async.t_cljs$core$async62475.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62475");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62475.
 */
cljs.core.async.__GT_t_cljs$core$async62475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62475(f__$1,ch__$1,meta62476){
return (new cljs.core.async.t_cljs$core$async62475(f__$1,ch__$1,meta62476));
});

}

return (new cljs.core.async.t_cljs$core$async62475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62478 = (function (p,ch,meta62479){
this.p = p;
this.ch = ch;
this.meta62479 = meta62479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62480,meta62479__$1){
var self__ = this;
var _62480__$1 = this;
return (new cljs.core.async.t_cljs$core$async62478(self__.p,self__.ch,meta62479__$1));
});

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62480){
var self__ = this;
var _62480__$1 = this;
return self__.meta62479;
});

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async62478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62479","meta62479",1262987450,null)], null);
});

cljs.core.async.t_cljs$core$async62478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62478";

cljs.core.async.t_cljs$core$async62478.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async62478");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62478.
 */
cljs.core.async.__GT_t_cljs$core$async62478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62478(p__$1,ch__$1,meta62479){
return (new cljs.core.async.t_cljs$core$async62478(p__$1,ch__$1,meta62479));
});

}

return (new cljs.core.async.t_cljs$core$async62478(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62482 = arguments.length;
switch (G__62482) {
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
var c__61315__auto___63711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63711,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63711,out){
return (function (state_62503){
var state_val_62504 = (state_62503[(1)]);
if((state_val_62504 === (7))){
var inst_62499 = (state_62503[(2)]);
var state_62503__$1 = state_62503;
var statearr_62505_63715 = state_62503__$1;
(statearr_62505_63715[(2)] = inst_62499);

(statearr_62505_63715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (1))){
var state_62503__$1 = state_62503;
var statearr_62506_63718 = state_62503__$1;
(statearr_62506_63718[(2)] = null);

(statearr_62506_63718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (4))){
var inst_62485 = (state_62503[(7)]);
var inst_62485__$1 = (state_62503[(2)]);
var inst_62486 = (inst_62485__$1 == null);
var state_62503__$1 = (function (){var statearr_62507 = state_62503;
(statearr_62507[(7)] = inst_62485__$1);

return statearr_62507;
})();
if(cljs.core.truth_(inst_62486)){
var statearr_62508_63719 = state_62503__$1;
(statearr_62508_63719[(1)] = (5));

} else {
var statearr_62509_63720 = state_62503__$1;
(statearr_62509_63720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (6))){
var inst_62485 = (state_62503[(7)]);
var inst_62490 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62485) : p.call(null,inst_62485));
var state_62503__$1 = state_62503;
if(cljs.core.truth_(inst_62490)){
var statearr_62510_63724 = state_62503__$1;
(statearr_62510_63724[(1)] = (8));

} else {
var statearr_62511_63725 = state_62503__$1;
(statearr_62511_63725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (3))){
var inst_62501 = (state_62503[(2)]);
var state_62503__$1 = state_62503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62503__$1,inst_62501);
} else {
if((state_val_62504 === (2))){
var state_62503__$1 = state_62503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62503__$1,(4),ch);
} else {
if((state_val_62504 === (11))){
var inst_62493 = (state_62503[(2)]);
var state_62503__$1 = state_62503;
var statearr_62512_63726 = state_62503__$1;
(statearr_62512_63726[(2)] = inst_62493);

(statearr_62512_63726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (9))){
var state_62503__$1 = state_62503;
var statearr_62513_63727 = state_62503__$1;
(statearr_62513_63727[(2)] = null);

(statearr_62513_63727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (5))){
var inst_62488 = cljs.core.async.close_BANG_(out);
var state_62503__$1 = state_62503;
var statearr_62514_63728 = state_62503__$1;
(statearr_62514_63728[(2)] = inst_62488);

(statearr_62514_63728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (10))){
var inst_62496 = (state_62503[(2)]);
var state_62503__$1 = (function (){var statearr_62515 = state_62503;
(statearr_62515[(8)] = inst_62496);

return statearr_62515;
})();
var statearr_62516_63734 = state_62503__$1;
(statearr_62516_63734[(2)] = null);

(statearr_62516_63734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62504 === (8))){
var inst_62485 = (state_62503[(7)]);
var state_62503__$1 = state_62503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62503__$1,(11),out,inst_62485);
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
});})(c__61315__auto___63711,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63711,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62517 = [null,null,null,null,null,null,null,null,null];
(statearr_62517[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62517[(1)] = (1));

return statearr_62517;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62503){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62503);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62518){if((e62518 instanceof Object)){
var ex__61218__auto__ = e62518;
var statearr_62519_63735 = state_62503;
(statearr_62519_63735[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63737 = state_62503;
state_62503 = G__63737;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63711,out))
})();
var state__61317__auto__ = (function (){var statearr_62520 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62520[(6)] = c__61315__auto___63711);

return statearr_62520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63711,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62522 = arguments.length;
switch (G__62522) {
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
var c__61315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto__){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto__){
return (function (state_62584){
var state_val_62585 = (state_62584[(1)]);
if((state_val_62585 === (7))){
var inst_62580 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
var statearr_62586_63758 = state_62584__$1;
(statearr_62586_63758[(2)] = inst_62580);

(statearr_62586_63758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (20))){
var inst_62550 = (state_62584[(7)]);
var inst_62561 = (state_62584[(2)]);
var inst_62562 = cljs.core.next(inst_62550);
var inst_62536 = inst_62562;
var inst_62537 = null;
var inst_62538 = (0);
var inst_62539 = (0);
var state_62584__$1 = (function (){var statearr_62587 = state_62584;
(statearr_62587[(8)] = inst_62539);

(statearr_62587[(9)] = inst_62537);

(statearr_62587[(10)] = inst_62561);

(statearr_62587[(11)] = inst_62538);

(statearr_62587[(12)] = inst_62536);

return statearr_62587;
})();
var statearr_62588_63759 = state_62584__$1;
(statearr_62588_63759[(2)] = null);

(statearr_62588_63759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (1))){
var state_62584__$1 = state_62584;
var statearr_62589_63760 = state_62584__$1;
(statearr_62589_63760[(2)] = null);

(statearr_62589_63760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (4))){
var inst_62525 = (state_62584[(13)]);
var inst_62525__$1 = (state_62584[(2)]);
var inst_62526 = (inst_62525__$1 == null);
var state_62584__$1 = (function (){var statearr_62590 = state_62584;
(statearr_62590[(13)] = inst_62525__$1);

return statearr_62590;
})();
if(cljs.core.truth_(inst_62526)){
var statearr_62591_63761 = state_62584__$1;
(statearr_62591_63761[(1)] = (5));

} else {
var statearr_62592_63762 = state_62584__$1;
(statearr_62592_63762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (15))){
var state_62584__$1 = state_62584;
var statearr_62596_63763 = state_62584__$1;
(statearr_62596_63763[(2)] = null);

(statearr_62596_63763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (21))){
var state_62584__$1 = state_62584;
var statearr_62597_63766 = state_62584__$1;
(statearr_62597_63766[(2)] = null);

(statearr_62597_63766[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (13))){
var inst_62539 = (state_62584[(8)]);
var inst_62537 = (state_62584[(9)]);
var inst_62538 = (state_62584[(11)]);
var inst_62536 = (state_62584[(12)]);
var inst_62546 = (state_62584[(2)]);
var inst_62547 = (inst_62539 + (1));
var tmp62593 = inst_62537;
var tmp62594 = inst_62538;
var tmp62595 = inst_62536;
var inst_62536__$1 = tmp62595;
var inst_62537__$1 = tmp62593;
var inst_62538__$1 = tmp62594;
var inst_62539__$1 = inst_62547;
var state_62584__$1 = (function (){var statearr_62598 = state_62584;
(statearr_62598[(14)] = inst_62546);

(statearr_62598[(8)] = inst_62539__$1);

(statearr_62598[(9)] = inst_62537__$1);

(statearr_62598[(11)] = inst_62538__$1);

(statearr_62598[(12)] = inst_62536__$1);

return statearr_62598;
})();
var statearr_62599_63773 = state_62584__$1;
(statearr_62599_63773[(2)] = null);

(statearr_62599_63773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (22))){
var state_62584__$1 = state_62584;
var statearr_62600_63776 = state_62584__$1;
(statearr_62600_63776[(2)] = null);

(statearr_62600_63776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (6))){
var inst_62525 = (state_62584[(13)]);
var inst_62534 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62525) : f.call(null,inst_62525));
var inst_62535 = cljs.core.seq(inst_62534);
var inst_62536 = inst_62535;
var inst_62537 = null;
var inst_62538 = (0);
var inst_62539 = (0);
var state_62584__$1 = (function (){var statearr_62601 = state_62584;
(statearr_62601[(8)] = inst_62539);

(statearr_62601[(9)] = inst_62537);

(statearr_62601[(11)] = inst_62538);

(statearr_62601[(12)] = inst_62536);

return statearr_62601;
})();
var statearr_62602_63777 = state_62584__$1;
(statearr_62602_63777[(2)] = null);

(statearr_62602_63777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (17))){
var inst_62550 = (state_62584[(7)]);
var inst_62554 = cljs.core.chunk_first(inst_62550);
var inst_62555 = cljs.core.chunk_rest(inst_62550);
var inst_62556 = cljs.core.count(inst_62554);
var inst_62536 = inst_62555;
var inst_62537 = inst_62554;
var inst_62538 = inst_62556;
var inst_62539 = (0);
var state_62584__$1 = (function (){var statearr_62603 = state_62584;
(statearr_62603[(8)] = inst_62539);

(statearr_62603[(9)] = inst_62537);

(statearr_62603[(11)] = inst_62538);

(statearr_62603[(12)] = inst_62536);

return statearr_62603;
})();
var statearr_62604_63778 = state_62584__$1;
(statearr_62604_63778[(2)] = null);

(statearr_62604_63778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (3))){
var inst_62582 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62584__$1,inst_62582);
} else {
if((state_val_62585 === (12))){
var inst_62570 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
var statearr_62605_63779 = state_62584__$1;
(statearr_62605_63779[(2)] = inst_62570);

(statearr_62605_63779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (2))){
var state_62584__$1 = state_62584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62584__$1,(4),in$);
} else {
if((state_val_62585 === (23))){
var inst_62578 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
var statearr_62606_63780 = state_62584__$1;
(statearr_62606_63780[(2)] = inst_62578);

(statearr_62606_63780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (19))){
var inst_62565 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
var statearr_62607_63781 = state_62584__$1;
(statearr_62607_63781[(2)] = inst_62565);

(statearr_62607_63781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (11))){
var inst_62536 = (state_62584[(12)]);
var inst_62550 = (state_62584[(7)]);
var inst_62550__$1 = cljs.core.seq(inst_62536);
var state_62584__$1 = (function (){var statearr_62608 = state_62584;
(statearr_62608[(7)] = inst_62550__$1);

return statearr_62608;
})();
if(inst_62550__$1){
var statearr_62609_63785 = state_62584__$1;
(statearr_62609_63785[(1)] = (14));

} else {
var statearr_62610_63787 = state_62584__$1;
(statearr_62610_63787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (9))){
var inst_62572 = (state_62584[(2)]);
var inst_62573 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62584__$1 = (function (){var statearr_62611 = state_62584;
(statearr_62611[(15)] = inst_62572);

return statearr_62611;
})();
if(cljs.core.truth_(inst_62573)){
var statearr_62612_63793 = state_62584__$1;
(statearr_62612_63793[(1)] = (21));

} else {
var statearr_62613_63794 = state_62584__$1;
(statearr_62613_63794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (5))){
var inst_62528 = cljs.core.async.close_BANG_(out);
var state_62584__$1 = state_62584;
var statearr_62614_63795 = state_62584__$1;
(statearr_62614_63795[(2)] = inst_62528);

(statearr_62614_63795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (14))){
var inst_62550 = (state_62584[(7)]);
var inst_62552 = cljs.core.chunked_seq_QMARK_(inst_62550);
var state_62584__$1 = state_62584;
if(inst_62552){
var statearr_62615_63796 = state_62584__$1;
(statearr_62615_63796[(1)] = (17));

} else {
var statearr_62616_63797 = state_62584__$1;
(statearr_62616_63797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (16))){
var inst_62568 = (state_62584[(2)]);
var state_62584__$1 = state_62584;
var statearr_62617_63798 = state_62584__$1;
(statearr_62617_63798[(2)] = inst_62568);

(statearr_62617_63798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62585 === (10))){
var inst_62539 = (state_62584[(8)]);
var inst_62537 = (state_62584[(9)]);
var inst_62544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62537,inst_62539);
var state_62584__$1 = state_62584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62584__$1,(13),out,inst_62544);
} else {
if((state_val_62585 === (18))){
var inst_62550 = (state_62584[(7)]);
var inst_62559 = cljs.core.first(inst_62550);
var state_62584__$1 = state_62584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62584__$1,(20),out,inst_62559);
} else {
if((state_val_62585 === (8))){
var inst_62539 = (state_62584[(8)]);
var inst_62538 = (state_62584[(11)]);
var inst_62541 = (inst_62539 < inst_62538);
var inst_62542 = inst_62541;
var state_62584__$1 = state_62584;
if(cljs.core.truth_(inst_62542)){
var statearr_62618_63802 = state_62584__$1;
(statearr_62618_63802[(1)] = (10));

} else {
var statearr_62619_63803 = state_62584__$1;
(statearr_62619_63803[(1)] = (11));

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
});})(c__61315__auto__))
;
return ((function (switch__61214__auto__,c__61315__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____0 = (function (){
var statearr_62620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62620[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__);

(statearr_62620[(1)] = (1));

return statearr_62620;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____1 = (function (state_62584){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62584);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62621){if((e62621 instanceof Object)){
var ex__61218__auto__ = e62621;
var statearr_62622_63804 = state_62584;
(statearr_62622_63804[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63805 = state_62584;
state_62584 = G__63805;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__ = function(state_62584){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____1.call(this,state_62584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61215__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto__))
})();
var state__61317__auto__ = (function (){var statearr_62623 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62623[(6)] = c__61315__auto__);

return statearr_62623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto__))
);

return c__61315__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62625 = arguments.length;
switch (G__62625) {
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
var G__62627 = arguments.length;
switch (G__62627) {
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
var G__62629 = arguments.length;
switch (G__62629) {
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
var c__61315__auto___63819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63819,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63819,out){
return (function (state_62653){
var state_val_62654 = (state_62653[(1)]);
if((state_val_62654 === (7))){
var inst_62648 = (state_62653[(2)]);
var state_62653__$1 = state_62653;
var statearr_62655_63823 = state_62653__$1;
(statearr_62655_63823[(2)] = inst_62648);

(statearr_62655_63823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (1))){
var inst_62630 = null;
var state_62653__$1 = (function (){var statearr_62656 = state_62653;
(statearr_62656[(7)] = inst_62630);

return statearr_62656;
})();
var statearr_62657_63824 = state_62653__$1;
(statearr_62657_63824[(2)] = null);

(statearr_62657_63824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (4))){
var inst_62633 = (state_62653[(8)]);
var inst_62633__$1 = (state_62653[(2)]);
var inst_62634 = (inst_62633__$1 == null);
var inst_62635 = cljs.core.not(inst_62634);
var state_62653__$1 = (function (){var statearr_62658 = state_62653;
(statearr_62658[(8)] = inst_62633__$1);

return statearr_62658;
})();
if(inst_62635){
var statearr_62659_63825 = state_62653__$1;
(statearr_62659_63825[(1)] = (5));

} else {
var statearr_62660_63826 = state_62653__$1;
(statearr_62660_63826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (6))){
var state_62653__$1 = state_62653;
var statearr_62661_63828 = state_62653__$1;
(statearr_62661_63828[(2)] = null);

(statearr_62661_63828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (3))){
var inst_62650 = (state_62653[(2)]);
var inst_62651 = cljs.core.async.close_BANG_(out);
var state_62653__$1 = (function (){var statearr_62662 = state_62653;
(statearr_62662[(9)] = inst_62650);

return statearr_62662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62653__$1,inst_62651);
} else {
if((state_val_62654 === (2))){
var state_62653__$1 = state_62653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62653__$1,(4),ch);
} else {
if((state_val_62654 === (11))){
var inst_62633 = (state_62653[(8)]);
var inst_62642 = (state_62653[(2)]);
var inst_62630 = inst_62633;
var state_62653__$1 = (function (){var statearr_62663 = state_62653;
(statearr_62663[(10)] = inst_62642);

(statearr_62663[(7)] = inst_62630);

return statearr_62663;
})();
var statearr_62664_63835 = state_62653__$1;
(statearr_62664_63835[(2)] = null);

(statearr_62664_63835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (9))){
var inst_62633 = (state_62653[(8)]);
var state_62653__$1 = state_62653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62653__$1,(11),out,inst_62633);
} else {
if((state_val_62654 === (5))){
var inst_62630 = (state_62653[(7)]);
var inst_62633 = (state_62653[(8)]);
var inst_62637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62633,inst_62630);
var state_62653__$1 = state_62653;
if(inst_62637){
var statearr_62666_63836 = state_62653__$1;
(statearr_62666_63836[(1)] = (8));

} else {
var statearr_62667_63837 = state_62653__$1;
(statearr_62667_63837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (10))){
var inst_62645 = (state_62653[(2)]);
var state_62653__$1 = state_62653;
var statearr_62668_63838 = state_62653__$1;
(statearr_62668_63838[(2)] = inst_62645);

(statearr_62668_63838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62654 === (8))){
var inst_62630 = (state_62653[(7)]);
var tmp62665 = inst_62630;
var inst_62630__$1 = tmp62665;
var state_62653__$1 = (function (){var statearr_62669 = state_62653;
(statearr_62669[(7)] = inst_62630__$1);

return statearr_62669;
})();
var statearr_62670_63839 = state_62653__$1;
(statearr_62670_63839[(2)] = null);

(statearr_62670_63839[(1)] = (2));


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
});})(c__61315__auto___63819,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63819,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62671[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62671[(1)] = (1));

return statearr_62671;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62653){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62653);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62672){if((e62672 instanceof Object)){
var ex__61218__auto__ = e62672;
var statearr_62673_63842 = state_62653;
(statearr_62673_63842[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63843 = state_62653;
state_62653 = G__63843;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63819,out))
})();
var state__61317__auto__ = (function (){var statearr_62674 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62674[(6)] = c__61315__auto___63819);

return statearr_62674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63819,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62676 = arguments.length;
switch (G__62676) {
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
var c__61315__auto___63852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63852,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63852,out){
return (function (state_62714){
var state_val_62715 = (state_62714[(1)]);
if((state_val_62715 === (7))){
var inst_62710 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62716_63854 = state_62714__$1;
(statearr_62716_63854[(2)] = inst_62710);

(statearr_62716_63854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (1))){
var inst_62677 = (new Array(n));
var inst_62678 = inst_62677;
var inst_62679 = (0);
var state_62714__$1 = (function (){var statearr_62717 = state_62714;
(statearr_62717[(7)] = inst_62679);

(statearr_62717[(8)] = inst_62678);

return statearr_62717;
})();
var statearr_62718_63862 = state_62714__$1;
(statearr_62718_63862[(2)] = null);

(statearr_62718_63862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (4))){
var inst_62682 = (state_62714[(9)]);
var inst_62682__$1 = (state_62714[(2)]);
var inst_62683 = (inst_62682__$1 == null);
var inst_62684 = cljs.core.not(inst_62683);
var state_62714__$1 = (function (){var statearr_62719 = state_62714;
(statearr_62719[(9)] = inst_62682__$1);

return statearr_62719;
})();
if(inst_62684){
var statearr_62720_63864 = state_62714__$1;
(statearr_62720_63864[(1)] = (5));

} else {
var statearr_62721_63865 = state_62714__$1;
(statearr_62721_63865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (15))){
var inst_62704 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62722_63867 = state_62714__$1;
(statearr_62722_63867[(2)] = inst_62704);

(statearr_62722_63867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (13))){
var state_62714__$1 = state_62714;
var statearr_62723_63869 = state_62714__$1;
(statearr_62723_63869[(2)] = null);

(statearr_62723_63869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (6))){
var inst_62679 = (state_62714[(7)]);
var inst_62700 = (inst_62679 > (0));
var state_62714__$1 = state_62714;
if(cljs.core.truth_(inst_62700)){
var statearr_62724_63870 = state_62714__$1;
(statearr_62724_63870[(1)] = (12));

} else {
var statearr_62725_63872 = state_62714__$1;
(statearr_62725_63872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (3))){
var inst_62712 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62714__$1,inst_62712);
} else {
if((state_val_62715 === (12))){
var inst_62678 = (state_62714[(8)]);
var inst_62702 = cljs.core.vec(inst_62678);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62714__$1,(15),out,inst_62702);
} else {
if((state_val_62715 === (2))){
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62714__$1,(4),ch);
} else {
if((state_val_62715 === (11))){
var inst_62694 = (state_62714[(2)]);
var inst_62695 = (new Array(n));
var inst_62678 = inst_62695;
var inst_62679 = (0);
var state_62714__$1 = (function (){var statearr_62726 = state_62714;
(statearr_62726[(7)] = inst_62679);

(statearr_62726[(10)] = inst_62694);

(statearr_62726[(8)] = inst_62678);

return statearr_62726;
})();
var statearr_62727_63875 = state_62714__$1;
(statearr_62727_63875[(2)] = null);

(statearr_62727_63875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (9))){
var inst_62678 = (state_62714[(8)]);
var inst_62692 = cljs.core.vec(inst_62678);
var state_62714__$1 = state_62714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62714__$1,(11),out,inst_62692);
} else {
if((state_val_62715 === (5))){
var inst_62679 = (state_62714[(7)]);
var inst_62682 = (state_62714[(9)]);
var inst_62678 = (state_62714[(8)]);
var inst_62687 = (state_62714[(11)]);
var inst_62686 = (inst_62678[inst_62679] = inst_62682);
var inst_62687__$1 = (inst_62679 + (1));
var inst_62688 = (inst_62687__$1 < n);
var state_62714__$1 = (function (){var statearr_62728 = state_62714;
(statearr_62728[(11)] = inst_62687__$1);

(statearr_62728[(12)] = inst_62686);

return statearr_62728;
})();
if(cljs.core.truth_(inst_62688)){
var statearr_62729_63876 = state_62714__$1;
(statearr_62729_63876[(1)] = (8));

} else {
var statearr_62730_63877 = state_62714__$1;
(statearr_62730_63877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (14))){
var inst_62707 = (state_62714[(2)]);
var inst_62708 = cljs.core.async.close_BANG_(out);
var state_62714__$1 = (function (){var statearr_62732 = state_62714;
(statearr_62732[(13)] = inst_62707);

return statearr_62732;
})();
var statearr_62733_63878 = state_62714__$1;
(statearr_62733_63878[(2)] = inst_62708);

(statearr_62733_63878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (10))){
var inst_62698 = (state_62714[(2)]);
var state_62714__$1 = state_62714;
var statearr_62734_63879 = state_62714__$1;
(statearr_62734_63879[(2)] = inst_62698);

(statearr_62734_63879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62715 === (8))){
var inst_62678 = (state_62714[(8)]);
var inst_62687 = (state_62714[(11)]);
var tmp62731 = inst_62678;
var inst_62678__$1 = tmp62731;
var inst_62679 = inst_62687;
var state_62714__$1 = (function (){var statearr_62735 = state_62714;
(statearr_62735[(7)] = inst_62679);

(statearr_62735[(8)] = inst_62678__$1);

return statearr_62735;
})();
var statearr_62736_63880 = state_62714__$1;
(statearr_62736_63880[(2)] = null);

(statearr_62736_63880[(1)] = (2));


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
});})(c__61315__auto___63852,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63852,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62737[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62737[(1)] = (1));

return statearr_62737;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62714){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62714);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62738){if((e62738 instanceof Object)){
var ex__61218__auto__ = e62738;
var statearr_62739_63881 = state_62714;
(statearr_62739_63881[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63882 = state_62714;
state_62714 = G__63882;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63852,out))
})();
var state__61317__auto__ = (function (){var statearr_62740 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62740[(6)] = c__61315__auto___63852);

return statearr_62740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63852,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62742 = arguments.length;
switch (G__62742) {
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
var c__61315__auto___63884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___63884,out){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___63884,out){
return (function (state_62784){
var state_val_62785 = (state_62784[(1)]);
if((state_val_62785 === (7))){
var inst_62780 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
var statearr_62786_63887 = state_62784__$1;
(statearr_62786_63887[(2)] = inst_62780);

(statearr_62786_63887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (1))){
var inst_62743 = [];
var inst_62744 = inst_62743;
var inst_62745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62784__$1 = (function (){var statearr_62787 = state_62784;
(statearr_62787[(7)] = inst_62745);

(statearr_62787[(8)] = inst_62744);

return statearr_62787;
})();
var statearr_62788_63888 = state_62784__$1;
(statearr_62788_63888[(2)] = null);

(statearr_62788_63888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (4))){
var inst_62748 = (state_62784[(9)]);
var inst_62748__$1 = (state_62784[(2)]);
var inst_62749 = (inst_62748__$1 == null);
var inst_62750 = cljs.core.not(inst_62749);
var state_62784__$1 = (function (){var statearr_62789 = state_62784;
(statearr_62789[(9)] = inst_62748__$1);

return statearr_62789;
})();
if(inst_62750){
var statearr_62790_63890 = state_62784__$1;
(statearr_62790_63890[(1)] = (5));

} else {
var statearr_62791_63891 = state_62784__$1;
(statearr_62791_63891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (15))){
var inst_62774 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
var statearr_62792_63896 = state_62784__$1;
(statearr_62792_63896[(2)] = inst_62774);

(statearr_62792_63896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (13))){
var state_62784__$1 = state_62784;
var statearr_62793_63897 = state_62784__$1;
(statearr_62793_63897[(2)] = null);

(statearr_62793_63897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (6))){
var inst_62744 = (state_62784[(8)]);
var inst_62769 = inst_62744.length;
var inst_62770 = (inst_62769 > (0));
var state_62784__$1 = state_62784;
if(cljs.core.truth_(inst_62770)){
var statearr_62794_63899 = state_62784__$1;
(statearr_62794_63899[(1)] = (12));

} else {
var statearr_62795_63900 = state_62784__$1;
(statearr_62795_63900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (3))){
var inst_62782 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62784__$1,inst_62782);
} else {
if((state_val_62785 === (12))){
var inst_62744 = (state_62784[(8)]);
var inst_62772 = cljs.core.vec(inst_62744);
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62784__$1,(15),out,inst_62772);
} else {
if((state_val_62785 === (2))){
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62784__$1,(4),ch);
} else {
if((state_val_62785 === (11))){
var inst_62748 = (state_62784[(9)]);
var inst_62752 = (state_62784[(10)]);
var inst_62762 = (state_62784[(2)]);
var inst_62763 = [];
var inst_62764 = inst_62763.push(inst_62748);
var inst_62744 = inst_62763;
var inst_62745 = inst_62752;
var state_62784__$1 = (function (){var statearr_62796 = state_62784;
(statearr_62796[(7)] = inst_62745);

(statearr_62796[(8)] = inst_62744);

(statearr_62796[(11)] = inst_62762);

(statearr_62796[(12)] = inst_62764);

return statearr_62796;
})();
var statearr_62797_63905 = state_62784__$1;
(statearr_62797_63905[(2)] = null);

(statearr_62797_63905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (9))){
var inst_62744 = (state_62784[(8)]);
var inst_62760 = cljs.core.vec(inst_62744);
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62784__$1,(11),out,inst_62760);
} else {
if((state_val_62785 === (5))){
var inst_62745 = (state_62784[(7)]);
var inst_62748 = (state_62784[(9)]);
var inst_62752 = (state_62784[(10)]);
var inst_62752__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62748) : f.call(null,inst_62748));
var inst_62753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62752__$1,inst_62745);
var inst_62754 = cljs.core.keyword_identical_QMARK_(inst_62745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62755 = ((inst_62753) || (inst_62754));
var state_62784__$1 = (function (){var statearr_62798 = state_62784;
(statearr_62798[(10)] = inst_62752__$1);

return statearr_62798;
})();
if(cljs.core.truth_(inst_62755)){
var statearr_62799_63907 = state_62784__$1;
(statearr_62799_63907[(1)] = (8));

} else {
var statearr_62800_63908 = state_62784__$1;
(statearr_62800_63908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (14))){
var inst_62777 = (state_62784[(2)]);
var inst_62778 = cljs.core.async.close_BANG_(out);
var state_62784__$1 = (function (){var statearr_62802 = state_62784;
(statearr_62802[(13)] = inst_62777);

return statearr_62802;
})();
var statearr_62803_63909 = state_62784__$1;
(statearr_62803_63909[(2)] = inst_62778);

(statearr_62803_63909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (10))){
var inst_62767 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
var statearr_62804_63910 = state_62784__$1;
(statearr_62804_63910[(2)] = inst_62767);

(statearr_62804_63910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (8))){
var inst_62744 = (state_62784[(8)]);
var inst_62748 = (state_62784[(9)]);
var inst_62752 = (state_62784[(10)]);
var inst_62757 = inst_62744.push(inst_62748);
var tmp62801 = inst_62744;
var inst_62744__$1 = tmp62801;
var inst_62745 = inst_62752;
var state_62784__$1 = (function (){var statearr_62805 = state_62784;
(statearr_62805[(7)] = inst_62745);

(statearr_62805[(8)] = inst_62744__$1);

(statearr_62805[(14)] = inst_62757);

return statearr_62805;
})();
var statearr_62806_63912 = state_62784__$1;
(statearr_62806_63912[(2)] = null);

(statearr_62806_63912[(1)] = (2));


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
});})(c__61315__auto___63884,out))
;
return ((function (switch__61214__auto__,c__61315__auto___63884,out){
return (function() {
var cljs$core$async$state_machine__61215__auto__ = null;
var cljs$core$async$state_machine__61215__auto____0 = (function (){
var statearr_62807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62807[(0)] = cljs$core$async$state_machine__61215__auto__);

(statearr_62807[(1)] = (1));

return statearr_62807;
});
var cljs$core$async$state_machine__61215__auto____1 = (function (state_62784){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_62784);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e62808){if((e62808 instanceof Object)){
var ex__61218__auto__ = e62808;
var statearr_62809_63928 = state_62784;
(statearr_62809_63928[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63933 = state_62784;
state_62784 = G__63933;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
cljs$core$async$state_machine__61215__auto__ = function(state_62784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61215__auto____1.call(this,state_62784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61215__auto____0;
cljs$core$async$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61215__auto____1;
return cljs$core$async$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___63884,out))
})();
var state__61317__auto__ = (function (){var statearr_62810 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_62810[(6)] = c__61315__auto___63884);

return statearr_62810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___63884,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
