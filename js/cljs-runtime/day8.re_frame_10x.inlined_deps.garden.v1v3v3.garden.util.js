goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45218 = arguments.length;
var i__4731__auto___45219 = (0);
while(true){
if((i__4731__auto___45219 < len__4730__auto___45218)){
args__4736__auto__.push((arguments[i__4731__auto___45219]));

var G__45220 = (i__4731__auto___45219 + (1));
i__4731__auto___45219 = G__45220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq45124){
var G__45125 = cljs.core.first(seq45124);
var seq45124__$1 = cljs.core.next(seq45124);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45125,seq45124__$1);
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"_",true);

var G__45138_45225 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str;
var G__45139_45226 = "_";
var G__45140_45227 = ((function (G__45138_45225,G__45139_45226){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__45138_45225,G__45139_45226))
;
goog.object.set(G__45138_45225,G__45139_45226,G__45140_45227);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"null",true);

var G__45144_45228 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str;
var G__45145_45229 = "null";
var G__45146_45230 = ((function (G__45144_45228,G__45145_45229){
return (function (this$){
return "";
});})(G__45144_45228,G__45145_45229))
;
goog.object.set(G__45144_45228,G__45145_45229,G__45146_45230);
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45233 = arguments.length;
var i__4731__auto___45235 = (0);
while(true){
if((i__4731__auto___45235 < len__4730__auto___45233)){
args__4736__auto__.push((arguments[i__4731__auto___45235]));

var G__45236 = (i__4731__auto___45235 + (1));
i__4731__auto___45235 = G__45236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,args));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq45147){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45147));
});

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45238 = arguments.length;
var i__4731__auto___45239 = (0);
while(true){
if((i__4731__auto___45239 < len__4730__auto___45238)){
args__4736__auto__.push((arguments[i__4731__auto___45239]));

var G__45240 = (i__4731__auto___45239 + (1));
i__4731__auto___45239 = G__45240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__45151){
var vec__45152 = p__45151;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq45149){
var G__45150 = cljs.core.first(seq45149);
var seq45149__$1 = cljs.core.next(seq45149);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45150,seq45149__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45249 = arguments.length;
var i__4731__auto___45250 = (0);
while(true){
if((i__4731__auto___45250 < len__4730__auto___45249)){
args__4736__auto__.push((arguments[i__4731__auto___45250]));

var G__45252 = (i__4731__auto___45250 + (1));
i__4731__auto___45250 = G__45252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__45166){
var vec__45167 = p__45166;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45167,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq45164){
var G__45165 = cljs.core.first(seq45164);
var seq45164__$1 = cljs.core.next(seq45164);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45165,seq45164__$1);
});

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__45185(s__45186){
return (new cljs.core.LazySeq(null,(function (){
var s__45186__$1 = s__45186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45186__$1);
if(temp__5735__auto__){
var s__45186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45186__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45186__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45190 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45189 = (0);
while(true){
if((i__45189 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45189);
cljs.core.chunk_append(b__45190,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(x)));

var G__45257 = (i__45189 + (1));
i__45189 = G__45257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45190),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__45185(cljs.core.chunk_rest(s__45186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45190),null);
}
} else {
var x = cljs.core.first(s__45186__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__45185(cljs.core.rest(s__45186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__45211 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45277 = arguments.length;
var i__4731__auto___45278 = (0);
while(true){
if((i__4731__auto___45278 < len__4730__auto___45277)){
args__4736__auto__.push((arguments[i__4731__auto___45278]));

var G__45280 = (i__4731__auto___45278 + (1));
i__4731__auto___45278 = G__45280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq45214){
var G__45215 = cljs.core.first(seq45214);
var seq45214__$1 = cljs.core.next(seq45214);
var G__45216 = cljs.core.first(seq45214__$1);
var seq45214__$2 = cljs.core.next(seq45214__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45215,G__45216,seq45214__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45290 = arguments.length;
var i__4731__auto___45291 = (0);
while(true){
if((i__4731__auto___45291 < len__4730__auto___45290)){
args__4736__auto__.push((arguments[i__4731__auto___45291]));

var G__45292 = (i__4731__auto___45291 + (1));
i__4731__auto___45291 = G__45292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__45295 = (i - (1));
var G__45296 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__45295;
v_seqs__$2 = G__45296;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq45217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45217));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.js.map
