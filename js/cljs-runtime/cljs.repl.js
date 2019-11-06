goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60011){
var map__60012 = p__60011;
var map__60012__$1 = (((((!((map__60012 == null))))?(((((map__60012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60012):map__60012);
var m = map__60012__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60014_60170 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60015_60171 = null;
var count__60016_60172 = (0);
var i__60017_60173 = (0);
while(true){
if((i__60017_60173 < count__60016_60172)){
var f_60174 = chunk__60015_60171.cljs$core$IIndexed$_nth$arity$2(null,i__60017_60173);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60174], 0));


var G__60175 = seq__60014_60170;
var G__60176 = chunk__60015_60171;
var G__60177 = count__60016_60172;
var G__60178 = (i__60017_60173 + (1));
seq__60014_60170 = G__60175;
chunk__60015_60171 = G__60176;
count__60016_60172 = G__60177;
i__60017_60173 = G__60178;
continue;
} else {
var temp__5735__auto___60179 = cljs.core.seq(seq__60014_60170);
if(temp__5735__auto___60179){
var seq__60014_60180__$1 = temp__5735__auto___60179;
if(cljs.core.chunked_seq_QMARK_(seq__60014_60180__$1)){
var c__4550__auto___60181 = cljs.core.chunk_first(seq__60014_60180__$1);
var G__60182 = cljs.core.chunk_rest(seq__60014_60180__$1);
var G__60183 = c__4550__auto___60181;
var G__60184 = cljs.core.count(c__4550__auto___60181);
var G__60185 = (0);
seq__60014_60170 = G__60182;
chunk__60015_60171 = G__60183;
count__60016_60172 = G__60184;
i__60017_60173 = G__60185;
continue;
} else {
var f_60186 = cljs.core.first(seq__60014_60180__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60186], 0));


var G__60187 = cljs.core.next(seq__60014_60180__$1);
var G__60188 = null;
var G__60189 = (0);
var G__60190 = (0);
seq__60014_60170 = G__60187;
chunk__60015_60171 = G__60188;
count__60016_60172 = G__60189;
i__60017_60173 = G__60190;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60191 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60191], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60191)))?cljs.core.second(arglists_60191):arglists_60191)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60018_60192 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60019_60193 = null;
var count__60020_60194 = (0);
var i__60021_60195 = (0);
while(true){
if((i__60021_60195 < count__60020_60194)){
var vec__60032_60196 = chunk__60019_60193.cljs$core$IIndexed$_nth$arity$2(null,i__60021_60195);
var name_60197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60032_60196,(0),null);
var map__60035_60198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60032_60196,(1),null);
var map__60035_60199__$1 = (((((!((map__60035_60198 == null))))?(((((map__60035_60198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60035_60198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60035_60198):map__60035_60198);
var doc_60200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60035_60199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60035_60199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60197], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60201], 0));

if(cljs.core.truth_(doc_60200)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60200], 0));
} else {
}


var G__60205 = seq__60018_60192;
var G__60206 = chunk__60019_60193;
var G__60207 = count__60020_60194;
var G__60208 = (i__60021_60195 + (1));
seq__60018_60192 = G__60205;
chunk__60019_60193 = G__60206;
count__60020_60194 = G__60207;
i__60021_60195 = G__60208;
continue;
} else {
var temp__5735__auto___60209 = cljs.core.seq(seq__60018_60192);
if(temp__5735__auto___60209){
var seq__60018_60211__$1 = temp__5735__auto___60209;
if(cljs.core.chunked_seq_QMARK_(seq__60018_60211__$1)){
var c__4550__auto___60212 = cljs.core.chunk_first(seq__60018_60211__$1);
var G__60213 = cljs.core.chunk_rest(seq__60018_60211__$1);
var G__60214 = c__4550__auto___60212;
var G__60215 = cljs.core.count(c__4550__auto___60212);
var G__60216 = (0);
seq__60018_60192 = G__60213;
chunk__60019_60193 = G__60214;
count__60020_60194 = G__60215;
i__60021_60195 = G__60216;
continue;
} else {
var vec__60037_60217 = cljs.core.first(seq__60018_60211__$1);
var name_60218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60037_60217,(0),null);
var map__60040_60219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60037_60217,(1),null);
var map__60040_60220__$1 = (((((!((map__60040_60219 == null))))?(((((map__60040_60219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60040_60219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60040_60219):map__60040_60219);
var doc_60221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040_60220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040_60220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60218], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60222], 0));

if(cljs.core.truth_(doc_60221)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60221], 0));
} else {
}


var G__60224 = cljs.core.next(seq__60018_60211__$1);
var G__60225 = null;
var G__60226 = (0);
var G__60227 = (0);
seq__60018_60192 = G__60224;
chunk__60019_60193 = G__60225;
count__60020_60194 = G__60226;
i__60021_60195 = G__60227;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__60042 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60043 = null;
var count__60044 = (0);
var i__60045 = (0);
while(true){
if((i__60045 < count__60044)){
var role = chunk__60043.cljs$core$IIndexed$_nth$arity$2(null,i__60045);
var temp__5735__auto___60232__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60232__$1)){
var spec_60233 = temp__5735__auto___60232__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60233)], 0));
} else {
}


var G__60234 = seq__60042;
var G__60235 = chunk__60043;
var G__60236 = count__60044;
var G__60237 = (i__60045 + (1));
seq__60042 = G__60234;
chunk__60043 = G__60235;
count__60044 = G__60236;
i__60045 = G__60237;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__60042);
if(temp__5735__auto____$1){
var seq__60042__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60042__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60042__$1);
var G__60238 = cljs.core.chunk_rest(seq__60042__$1);
var G__60239 = c__4550__auto__;
var G__60240 = cljs.core.count(c__4550__auto__);
var G__60241 = (0);
seq__60042 = G__60238;
chunk__60043 = G__60239;
count__60044 = G__60240;
i__60045 = G__60241;
continue;
} else {
var role = cljs.core.first(seq__60042__$1);
var temp__5735__auto___60242__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60242__$2)){
var spec_60247 = temp__5735__auto___60242__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60247)], 0));
} else {
}


var G__60248 = cljs.core.next(seq__60042__$1);
var G__60249 = null;
var G__60250 = (0);
var G__60251 = (0);
seq__60042 = G__60248;
chunk__60043 = G__60249;
count__60044 = G__60250;
i__60045 = G__60251;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60253 = cljs.core.ex_cause(t);
via = G__60252;
t = G__60253;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__60059 = datafied_throwable;
var map__60059__$1 = (((((!((map__60059 == null))))?(((((map__60059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60059):map__60059);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60059__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60060 = cljs.core.last(via);
var map__60060__$1 = (((((!((map__60060 == null))))?(((((map__60060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60060):map__60060);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60061 = data;
var map__60061__$1 = (((((!((map__60061 == null))))?(((((map__60061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60061):map__60061);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60062 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60062__$1 = (((((!((map__60062 == null))))?(((((map__60062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60062):map__60062);
var top_data = map__60062__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60077 = phase;
var G__60077__$1 = (((G__60077 instanceof cljs.core.Keyword))?G__60077.fqn:null);
switch (G__60077__$1) {
case "read-source":
var map__60078 = data;
var map__60078__$1 = (((((!((map__60078 == null))))?(((((map__60078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60078):map__60078);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60080 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60080__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60080,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60080);
var G__60080__$2 = (cljs.core.truth_((function (){var fexpr__60081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60081.cljs$core$IFn$_invoke$arity$1 ? fexpr__60081.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60081.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60080__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60080__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60080__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60082 = top_data;
var G__60082__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60082,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60082);
var G__60082__$2 = (cljs.core.truth_((function (){var fexpr__60083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60083.cljs$core$IFn$_invoke$arity$1 ? fexpr__60083.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60083.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60082__$1);
var G__60082__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60082__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60082__$2);
var G__60082__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60082__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60082__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60082__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60082__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60088 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60088,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60088,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60088,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60088,(3),null);
var G__60091 = top_data;
var G__60091__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60091,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60091);
var G__60091__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60091__$1);
var G__60091__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60091__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60091__$2);
var G__60091__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60091__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60091__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60091__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60091__$4;
}

break;
case "execution":
var vec__60093 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__60093,source__$1,method,file,line,G__60077,G__60077__$1,map__60059,map__60059__$1,via,trace,phase,map__60060,map__60060__$1,type,message,data,map__60061,map__60061__$1,problems,fn,caller,map__60062,map__60062__$1,top_data,source){
return (function (p1__60047_SHARP_){
var or__4131__auto__ = (p1__60047_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__60097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60097.cljs$core$IFn$_invoke$arity$1 ? fexpr__60097.cljs$core$IFn$_invoke$arity$1(p1__60047_SHARP_) : fexpr__60097.call(null,p1__60047_SHARP_));
}
});})(vec__60093,source__$1,method,file,line,G__60077,G__60077__$1,map__60059,map__60059__$1,via,trace,phase,map__60060,map__60060__$1,type,message,data,map__60061,map__60061__$1,problems,fn,caller,map__60062,map__60062__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__60100 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60100__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60100,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60100);
var G__60100__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60100__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60100__$1);
var G__60100__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60100__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60100__$2);
var G__60100__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60100__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60100__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60100__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60100__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60077__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60106){
var map__60107 = p__60106;
var map__60107__$1 = (((((!((map__60107 == null))))?(((((map__60107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60107):map__60107);
var triage_data = map__60107__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60113 = phase;
var G__60113__$1 = (((G__60113 instanceof cljs.core.Keyword))?G__60113.fqn:null);
switch (G__60113__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60114 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60115 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60116 = loc;
var G__60117 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60118_60314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60119_60315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60120_60316 = true;
var _STAR_print_fn_STAR__temp_val__60121_60317 = ((function (_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60120_60316;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60121_60317;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,_STAR_print_fn_STAR__temp_val__60121_60317,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,_STAR_print_fn_STAR__temp_val__60121_60317,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__60101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,_STAR_print_fn_STAR__temp_val__60121_60317,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__60118_60314,_STAR_print_fn_STAR__orig_val__60119_60315,_STAR_print_newline_STAR__temp_val__60120_60316,_STAR_print_fn_STAR__temp_val__60121_60317,sb__4661__auto__,G__60114,G__60115,G__60116,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60119_60315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60118_60314;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60114,G__60115,G__60116,G__60117) : format.call(null,G__60114,G__60115,G__60116,G__60117));

break;
case "macroexpansion":
var G__60123 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60124 = cause_type;
var G__60125 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60126 = loc;
var G__60127 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60123,G__60124,G__60125,G__60126,G__60127) : format.call(null,G__60123,G__60124,G__60125,G__60126,G__60127));

break;
case "compile-syntax-check":
var G__60128 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60129 = cause_type;
var G__60130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60131 = loc;
var G__60132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60128,G__60129,G__60130,G__60131,G__60132) : format.call(null,G__60128,G__60129,G__60130,G__60131,G__60132));

break;
case "compilation":
var G__60135 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60136 = cause_type;
var G__60137 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60138 = loc;
var G__60139 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60135,G__60136,G__60137,G__60138,G__60139) : format.call(null,G__60135,G__60136,G__60137,G__60138,G__60139));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60156 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60157 = symbol;
var G__60158 = loc;
var G__60159 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60161_60328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60162_60329 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60163_60330 = true;
var _STAR_print_fn_STAR__temp_val__60164_60331 = ((function (_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60163_60330;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60164_60331;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,_STAR_print_fn_STAR__temp_val__60164_60331,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,_STAR_print_fn_STAR__temp_val__60164_60331,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__60104_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60104_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,_STAR_print_fn_STAR__temp_val__60164_60331,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__60161_60328,_STAR_print_fn_STAR__orig_val__60162_60329,_STAR_print_newline_STAR__temp_val__60163_60330,_STAR_print_fn_STAR__temp_val__60164_60331,sb__4661__auto__,G__60156,G__60157,G__60158,G__60113,G__60113__$1,loc,class_name,simple_class,cause_type,format,map__60107,map__60107__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60162_60329;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60161_60328;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60156,G__60157,G__60158,G__60159) : format.call(null,G__60156,G__60157,G__60158,G__60159));
} else {
var G__60165 = "Execution error%s at %s(%s).\n%s\n";
var G__60166 = cause_type;
var G__60167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60168 = loc;
var G__60169 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60165,G__60166,G__60167,G__60168,G__60169) : format.call(null,G__60165,G__60166,G__60167,G__60168,G__60169));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60113__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
