goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__49323){
var vec__49324 = p__49323;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__49331 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__49349 = arguments.length;
switch (G__49349) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__49393_49509 = clojure.data.equality_partition;
var G__49394_49510 = "null";
var G__49395_49511 = ((function (G__49393_49509,G__49394_49510){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49393_49509,G__49394_49510))
;
goog.object.set(G__49393_49509,G__49394_49510,G__49395_49511);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__49396_49514 = clojure.data.equality_partition;
var G__49397_49515 = "string";
var G__49398_49516 = ((function (G__49396_49514,G__49397_49515){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49396_49514,G__49397_49515))
;
goog.object.set(G__49396_49514,G__49397_49515,G__49398_49516);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__49401_49518 = clojure.data.equality_partition;
var G__49402_49519 = "number";
var G__49403_49520 = ((function (G__49401_49518,G__49402_49519){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49401_49518,G__49402_49519))
;
goog.object.set(G__49401_49518,G__49402_49519,G__49403_49520);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__49409_49524 = clojure.data.equality_partition;
var G__49410_49525 = "array";
var G__49411_49526 = ((function (G__49409_49524,G__49410_49525){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__49409_49524,G__49410_49525))
;
goog.object.set(G__49409_49524,G__49410_49525,G__49411_49526);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__49414_49528 = clojure.data.equality_partition;
var G__49415_49529 = "function";
var G__49416_49530 = ((function (G__49414_49528,G__49415_49529){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49414_49528,G__49415_49529))
;
goog.object.set(G__49414_49528,G__49415_49529,G__49416_49530);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__49417_49537 = clojure.data.equality_partition;
var G__49418_49538 = "boolean";
var G__49419_49539 = ((function (G__49417_49537,G__49418_49538){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49417_49537,G__49418_49538))
;
goog.object.set(G__49417_49537,G__49418_49538,G__49419_49539);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__49421_49543 = clojure.data.equality_partition;
var G__49422_49544 = "_";
var G__49423_49545 = ((function (G__49421_49543,G__49422_49544){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__49421_49543,G__49422_49544))
;
goog.object.set(G__49421_49543,G__49422_49544,G__49423_49545);
goog.object.set(clojure.data.Diff,"null",true);

var G__49435_49553 = clojure.data.diff_similar;
var G__49436_49554 = "null";
var G__49437_49555 = ((function (G__49435_49553,G__49436_49554){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49435_49553,G__49436_49554))
;
goog.object.set(G__49435_49553,G__49436_49554,G__49437_49555);

goog.object.set(clojure.data.Diff,"string",true);

var G__49438_49560 = clojure.data.diff_similar;
var G__49440_49561 = "string";
var G__49441_49562 = ((function (G__49438_49560,G__49440_49561){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49438_49560,G__49440_49561))
;
goog.object.set(G__49438_49560,G__49440_49561,G__49441_49562);

goog.object.set(clojure.data.Diff,"number",true);

var G__49444_49563 = clojure.data.diff_similar;
var G__49445_49564 = "number";
var G__49446_49565 = ((function (G__49444_49563,G__49445_49564){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49444_49563,G__49445_49564))
;
goog.object.set(G__49444_49563,G__49445_49564,G__49446_49565);

goog.object.set(clojure.data.Diff,"array",true);

var G__49447_49567 = clojure.data.diff_similar;
var G__49448_49568 = "array";
var G__49449_49569 = ((function (G__49447_49567,G__49448_49568){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__49447_49567,G__49448_49568))
;
goog.object.set(G__49447_49567,G__49448_49568,G__49449_49569);

goog.object.set(clojure.data.Diff,"function",true);

var G__49454_49576 = clojure.data.diff_similar;
var G__49455_49577 = "function";
var G__49456_49578 = ((function (G__49454_49576,G__49455_49577){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49454_49576,G__49455_49577))
;
goog.object.set(G__49454_49576,G__49455_49577,G__49456_49578);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__49458_49581 = clojure.data.diff_similar;
var G__49459_49582 = "boolean";
var G__49460_49583 = ((function (G__49458_49581,G__49459_49582){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49458_49581,G__49459_49582))
;
goog.object.set(G__49458_49581,G__49459_49582,G__49460_49583);

goog.object.set(clojure.data.Diff,"_",true);

var G__49462_49586 = clojure.data.diff_similar;
var G__49463_49587 = "_";
var G__49464_49588 = ((function (G__49462_49586,G__49463_49587){
return (function (a,b){
var fexpr__49466 = (function (){var G__49467 = clojure.data.equality_partition(a);
var G__49467__$1 = (((G__49467 instanceof cljs.core.Keyword))?G__49467.fqn:null);
switch (G__49467__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49467__$1)].join('')));

}
})();
return (fexpr__49466.cljs$core$IFn$_invoke$arity$2 ? fexpr__49466.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__49466.call(null,a,b));
});})(G__49462_49586,G__49463_49587))
;
goog.object.set(G__49462_49586,G__49463_49587,G__49464_49588);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
