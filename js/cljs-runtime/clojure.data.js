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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__48831){
var vec__48833 = p__48831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48833,(1),null);
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
var vec__48840 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48840,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48840,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48840,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__48882 = arguments.length;
switch (G__48882) {
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

var G__49011_49176 = clojure.data.equality_partition;
var G__49012_49177 = "null";
var G__49013_49178 = ((function (G__49011_49176,G__49012_49177){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49011_49176,G__49012_49177))
;
goog.object.set(G__49011_49176,G__49012_49177,G__49013_49178);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__49025_49180 = clojure.data.equality_partition;
var G__49026_49181 = "string";
var G__49027_49182 = ((function (G__49025_49180,G__49026_49181){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49025_49180,G__49026_49181))
;
goog.object.set(G__49025_49180,G__49026_49181,G__49027_49182);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__49035_49185 = clojure.data.equality_partition;
var G__49036_49186 = "number";
var G__49037_49187 = ((function (G__49035_49185,G__49036_49186){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49035_49185,G__49036_49186))
;
goog.object.set(G__49035_49185,G__49036_49186,G__49037_49187);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__49039_49189 = clojure.data.equality_partition;
var G__49040_49190 = "array";
var G__49041_49191 = ((function (G__49039_49189,G__49040_49190){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__49039_49189,G__49040_49190))
;
goog.object.set(G__49039_49189,G__49040_49190,G__49041_49191);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__49044_49194 = clojure.data.equality_partition;
var G__49045_49195 = "function";
var G__49046_49196 = ((function (G__49044_49194,G__49045_49195){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49044_49194,G__49045_49195))
;
goog.object.set(G__49044_49194,G__49045_49195,G__49046_49196);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__49053_49198 = clojure.data.equality_partition;
var G__49054_49199 = "boolean";
var G__49055_49200 = ((function (G__49053_49198,G__49054_49199){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__49053_49198,G__49054_49199))
;
goog.object.set(G__49053_49198,G__49054_49199,G__49055_49200);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__49057_49201 = clojure.data.equality_partition;
var G__49058_49202 = "_";
var G__49059_49203 = ((function (G__49057_49201,G__49058_49202){
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
});})(G__49057_49201,G__49058_49202))
;
goog.object.set(G__49057_49201,G__49058_49202,G__49059_49203);
goog.object.set(clojure.data.Diff,"null",true);

var G__49075_49208 = clojure.data.diff_similar;
var G__49076_49209 = "null";
var G__49077_49210 = ((function (G__49075_49208,G__49076_49209){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49075_49208,G__49076_49209))
;
goog.object.set(G__49075_49208,G__49076_49209,G__49077_49210);

goog.object.set(clojure.data.Diff,"string",true);

var G__49078_49214 = clojure.data.diff_similar;
var G__49079_49215 = "string";
var G__49080_49216 = ((function (G__49078_49214,G__49079_49215){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49078_49214,G__49079_49215))
;
goog.object.set(G__49078_49214,G__49079_49215,G__49080_49216);

goog.object.set(clojure.data.Diff,"number",true);

var G__49085_49219 = clojure.data.diff_similar;
var G__49086_49220 = "number";
var G__49087_49221 = ((function (G__49085_49219,G__49086_49220){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49085_49219,G__49086_49220))
;
goog.object.set(G__49085_49219,G__49086_49220,G__49087_49221);

goog.object.set(clojure.data.Diff,"array",true);

var G__49091_49222 = clojure.data.diff_similar;
var G__49092_49223 = "array";
var G__49093_49224 = ((function (G__49091_49222,G__49092_49223){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__49091_49222,G__49092_49223))
;
goog.object.set(G__49091_49222,G__49092_49223,G__49093_49224);

goog.object.set(clojure.data.Diff,"function",true);

var G__49105_49225 = clojure.data.diff_similar;
var G__49106_49226 = "function";
var G__49107_49227 = ((function (G__49105_49225,G__49106_49226){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49105_49225,G__49106_49226))
;
goog.object.set(G__49105_49225,G__49106_49226,G__49107_49227);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__49111_49229 = clojure.data.diff_similar;
var G__49112_49230 = "boolean";
var G__49113_49231 = ((function (G__49111_49229,G__49112_49230){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__49111_49229,G__49112_49230))
;
goog.object.set(G__49111_49229,G__49112_49230,G__49113_49231);

goog.object.set(clojure.data.Diff,"_",true);

var G__49117_49239 = clojure.data.diff_similar;
var G__49118_49240 = "_";
var G__49119_49241 = ((function (G__49117_49239,G__49118_49240){
return (function (a,b){
var fexpr__49124 = (function (){var G__49125 = clojure.data.equality_partition(a);
var G__49125__$1 = (((G__49125 instanceof cljs.core.Keyword))?G__49125.fqn:null);
switch (G__49125__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49125__$1)].join('')));

}
})();
return (fexpr__49124.cljs$core$IFn$_invoke$arity$2 ? fexpr__49124.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__49124.call(null,a,b));
});})(G__49117_49239,G__49118_49240))
;
goog.object.set(G__49117_49239,G__49118_49240,G__49119_49241);
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
