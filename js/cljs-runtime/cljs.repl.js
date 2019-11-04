goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59483){
var map__59484 = p__59483;
var map__59484__$1 = (((((!((map__59484 == null))))?(((((map__59484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59484):map__59484);
var m = map__59484__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59503_59651 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59504_59652 = null;
var count__59505_59653 = (0);
var i__59506_59654 = (0);
while(true){
if((i__59506_59654 < count__59505_59653)){
var f_59655 = chunk__59504_59652.cljs$core$IIndexed$_nth$arity$2(null,i__59506_59654);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59655], 0));


var G__59656 = seq__59503_59651;
var G__59657 = chunk__59504_59652;
var G__59658 = count__59505_59653;
var G__59659 = (i__59506_59654 + (1));
seq__59503_59651 = G__59656;
chunk__59504_59652 = G__59657;
count__59505_59653 = G__59658;
i__59506_59654 = G__59659;
continue;
} else {
var temp__5735__auto___59660 = cljs.core.seq(seq__59503_59651);
if(temp__5735__auto___59660){
var seq__59503_59661__$1 = temp__5735__auto___59660;
if(cljs.core.chunked_seq_QMARK_(seq__59503_59661__$1)){
var c__4550__auto___59662 = cljs.core.chunk_first(seq__59503_59661__$1);
var G__59663 = cljs.core.chunk_rest(seq__59503_59661__$1);
var G__59664 = c__4550__auto___59662;
var G__59665 = cljs.core.count(c__4550__auto___59662);
var G__59666 = (0);
seq__59503_59651 = G__59663;
chunk__59504_59652 = G__59664;
count__59505_59653 = G__59665;
i__59506_59654 = G__59666;
continue;
} else {
var f_59667 = cljs.core.first(seq__59503_59661__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59667], 0));


var G__59668 = cljs.core.next(seq__59503_59661__$1);
var G__59669 = null;
var G__59670 = (0);
var G__59671 = (0);
seq__59503_59651 = G__59668;
chunk__59504_59652 = G__59669;
count__59505_59653 = G__59670;
i__59506_59654 = G__59671;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59672 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59672], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59672)))?cljs.core.second(arglists_59672):arglists_59672)], 0));
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
var seq__59524_59677 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59525_59678 = null;
var count__59526_59679 = (0);
var i__59527_59680 = (0);
while(true){
if((i__59527_59680 < count__59526_59679)){
var vec__59543_59681 = chunk__59525_59678.cljs$core$IIndexed$_nth$arity$2(null,i__59527_59680);
var name_59682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59543_59681,(0),null);
var map__59546_59683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59543_59681,(1),null);
var map__59546_59684__$1 = (((((!((map__59546_59683 == null))))?(((((map__59546_59683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59546_59683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59546_59683):map__59546_59683);
var doc_59685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546_59684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546_59684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59682], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59686], 0));

if(cljs.core.truth_(doc_59685)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59685], 0));
} else {
}


var G__59687 = seq__59524_59677;
var G__59688 = chunk__59525_59678;
var G__59689 = count__59526_59679;
var G__59690 = (i__59527_59680 + (1));
seq__59524_59677 = G__59687;
chunk__59525_59678 = G__59688;
count__59526_59679 = G__59689;
i__59527_59680 = G__59690;
continue;
} else {
var temp__5735__auto___59691 = cljs.core.seq(seq__59524_59677);
if(temp__5735__auto___59691){
var seq__59524_59692__$1 = temp__5735__auto___59691;
if(cljs.core.chunked_seq_QMARK_(seq__59524_59692__$1)){
var c__4550__auto___59693 = cljs.core.chunk_first(seq__59524_59692__$1);
var G__59694 = cljs.core.chunk_rest(seq__59524_59692__$1);
var G__59695 = c__4550__auto___59693;
var G__59696 = cljs.core.count(c__4550__auto___59693);
var G__59697 = (0);
seq__59524_59677 = G__59694;
chunk__59525_59678 = G__59695;
count__59526_59679 = G__59696;
i__59527_59680 = G__59697;
continue;
} else {
var vec__59551_59698 = cljs.core.first(seq__59524_59692__$1);
var name_59699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59551_59698,(0),null);
var map__59554_59700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59551_59698,(1),null);
var map__59554_59701__$1 = (((((!((map__59554_59700 == null))))?(((((map__59554_59700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59554_59700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59554_59700):map__59554_59700);
var doc_59702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554_59701__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554_59701__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59699], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59703], 0));

if(cljs.core.truth_(doc_59702)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59702], 0));
} else {
}


var G__59704 = cljs.core.next(seq__59524_59692__$1);
var G__59705 = null;
var G__59706 = (0);
var G__59707 = (0);
seq__59524_59677 = G__59704;
chunk__59525_59678 = G__59705;
count__59526_59679 = G__59706;
i__59527_59680 = G__59707;
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

var seq__59556 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59557 = null;
var count__59558 = (0);
var i__59559 = (0);
while(true){
if((i__59559 < count__59558)){
var role = chunk__59557.cljs$core$IIndexed$_nth$arity$2(null,i__59559);
var temp__5735__auto___59708__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59708__$1)){
var spec_59710 = temp__5735__auto___59708__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59710)], 0));
} else {
}


var G__59714 = seq__59556;
var G__59715 = chunk__59557;
var G__59716 = count__59558;
var G__59717 = (i__59559 + (1));
seq__59556 = G__59714;
chunk__59557 = G__59715;
count__59558 = G__59716;
i__59559 = G__59717;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__59556);
if(temp__5735__auto____$1){
var seq__59556__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59556__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59556__$1);
var G__59718 = cljs.core.chunk_rest(seq__59556__$1);
var G__59719 = c__4550__auto__;
var G__59720 = cljs.core.count(c__4550__auto__);
var G__59721 = (0);
seq__59556 = G__59718;
chunk__59557 = G__59719;
count__59558 = G__59720;
i__59559 = G__59721;
continue;
} else {
var role = cljs.core.first(seq__59556__$1);
var temp__5735__auto___59722__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59722__$2)){
var spec_59723 = temp__5735__auto___59722__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59723)], 0));
} else {
}


var G__59724 = cljs.core.next(seq__59556__$1);
var G__59725 = null;
var G__59726 = (0);
var G__59727 = (0);
seq__59556 = G__59724;
chunk__59557 = G__59725;
count__59558 = G__59726;
i__59559 = G__59727;
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
var G__59735 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59736 = cljs.core.ex_cause(t);
via = G__59735;
t = G__59736;
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
var map__59567 = datafied_throwable;
var map__59567__$1 = (((((!((map__59567 == null))))?(((((map__59567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59567):map__59567);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59567__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59568 = cljs.core.last(via);
var map__59568__$1 = (((((!((map__59568 == null))))?(((((map__59568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59568):map__59568);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59569 = data;
var map__59569__$1 = (((((!((map__59569 == null))))?(((((map__59569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59569):map__59569);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59569__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59569__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59569__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59570 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59570__$1 = (((((!((map__59570 == null))))?(((((map__59570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59570):map__59570);
var top_data = map__59570__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59576 = phase;
var G__59576__$1 = (((G__59576 instanceof cljs.core.Keyword))?G__59576.fqn:null);
switch (G__59576__$1) {
case "read-source":
var map__59577 = data;
var map__59577__$1 = (((((!((map__59577 == null))))?(((((map__59577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59577):map__59577);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59580 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59580__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59580,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59580);
var G__59580__$2 = (cljs.core.truth_((function (){var fexpr__59581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59581.cljs$core$IFn$_invoke$arity$1 ? fexpr__59581.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59581.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59580__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59580__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59580__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59582 = top_data;
var G__59582__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59582,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59582);
var G__59582__$2 = (cljs.core.truth_((function (){var fexpr__59583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59583.cljs$core$IFn$_invoke$arity$1 ? fexpr__59583.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59583.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59582__$1);
var G__59582__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59582__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59582__$2);
var G__59582__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59582__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59582__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59582__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59582__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59584 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(3),null);
var G__59587 = top_data;
var G__59587__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59587,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59587);
var G__59587__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59587__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59587__$1);
var G__59587__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59587__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59587__$2);
var G__59587__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59587__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59587__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59587__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59587__$4;
}

break;
case "execution":
var vec__59589 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__59589,source__$1,method,file,line,G__59576,G__59576__$1,map__59567,map__59567__$1,via,trace,phase,map__59568,map__59568__$1,type,message,data,map__59569,map__59569__$1,problems,fn,caller,map__59570,map__59570__$1,top_data,source){
return (function (p1__59566_SHARP_){
var or__4131__auto__ = (p1__59566_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__59593 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59593.cljs$core$IFn$_invoke$arity$1 ? fexpr__59593.cljs$core$IFn$_invoke$arity$1(p1__59566_SHARP_) : fexpr__59593.call(null,p1__59566_SHARP_));
}
});})(vec__59589,source__$1,method,file,line,G__59576,G__59576__$1,map__59567,map__59567__$1,via,trace,phase,map__59568,map__59568__$1,type,message,data,map__59569,map__59569__$1,problems,fn,caller,map__59570,map__59570__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__59594 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59594__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59594,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59594);
var G__59594__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59594__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59594__$1);
var G__59594__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59594__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59594__$2);
var G__59594__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59594__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59594__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59594__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59594__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59576__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59600){
var map__59601 = p__59600;
var map__59601__$1 = (((((!((map__59601 == null))))?(((((map__59601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59601):map__59601);
var triage_data = map__59601__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__59605 = phase;
var G__59605__$1 = (((G__59605 instanceof cljs.core.Keyword))?G__59605.fqn:null);
switch (G__59605__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59606 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59607 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59608 = loc;
var G__59609 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59610_59754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59611_59755 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59612_59756 = true;
var _STAR_print_fn_STAR__temp_val__59613_59757 = ((function (_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59612_59756;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59613_59757;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,_STAR_print_fn_STAR__temp_val__59613_59757,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,_STAR_print_fn_STAR__temp_val__59613_59757,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__59597_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59597_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,_STAR_print_fn_STAR__temp_val__59613_59757,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__59610_59754,_STAR_print_fn_STAR__orig_val__59611_59755,_STAR_print_newline_STAR__temp_val__59612_59756,_STAR_print_fn_STAR__temp_val__59613_59757,sb__4661__auto__,G__59606,G__59607,G__59608,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59611_59755;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59610_59754;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59606,G__59607,G__59608,G__59609) : format.call(null,G__59606,G__59607,G__59608,G__59609));

break;
case "macroexpansion":
var G__59614 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59615 = cause_type;
var G__59616 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59617 = loc;
var G__59618 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59614,G__59615,G__59616,G__59617,G__59618) : format.call(null,G__59614,G__59615,G__59616,G__59617,G__59618));

break;
case "compile-syntax-check":
var G__59619 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59620 = cause_type;
var G__59621 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59622 = loc;
var G__59623 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59619,G__59620,G__59621,G__59622,G__59623) : format.call(null,G__59619,G__59620,G__59621,G__59622,G__59623));

break;
case "compilation":
var G__59627 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59628 = cause_type;
var G__59629 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59630 = loc;
var G__59631 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59627,G__59628,G__59629,G__59630,G__59631) : format.call(null,G__59627,G__59628,G__59629,G__59630,G__59631));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59632 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59633 = symbol;
var G__59634 = loc;
var G__59635 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59636_59758 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59637_59759 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59638_59760 = true;
var _STAR_print_fn_STAR__temp_val__59639_59761 = ((function (_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59638_59760;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59639_59761;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,_STAR_print_fn_STAR__temp_val__59639_59761,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,_STAR_print_fn_STAR__temp_val__59639_59761,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__59598_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59598_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,_STAR_print_fn_STAR__temp_val__59639_59761,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__59636_59758,_STAR_print_fn_STAR__orig_val__59637_59759,_STAR_print_newline_STAR__temp_val__59638_59760,_STAR_print_fn_STAR__temp_val__59639_59761,sb__4661__auto__,G__59632,G__59633,G__59634,G__59605,G__59605__$1,loc,class_name,simple_class,cause_type,format,map__59601,map__59601__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59637_59759;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59636_59758;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59632,G__59633,G__59634,G__59635) : format.call(null,G__59632,G__59633,G__59634,G__59635));
} else {
var G__59643 = "Execution error%s at %s(%s).\n%s\n";
var G__59644 = cause_type;
var G__59645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59646 = loc;
var G__59647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59643,G__59644,G__59645,G__59646,G__59647) : format.call(null,G__59643,G__59644,G__59645,G__59646,G__59647));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59605__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
