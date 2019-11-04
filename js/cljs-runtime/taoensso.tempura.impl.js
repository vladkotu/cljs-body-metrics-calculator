goog.provide('taoensso.tempura.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
taoensso.tempura.impl.str__GT__QMARK_arg_idx = (function taoensso$tempura$impl$str__GT__QMARK_arg_idx(s){
var G__68313 = s;
switch (G__68313) {
case "%0":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`%0` is invalid, starts at `%1`",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null));

break;
case "%1":
return (0);

break;
case "%2":
return (1);

break;
case "%3":
return (2);

break;
case "%4":
return (3);

break;
case "%5":
return (4);

break;
case "%6":
return (5);

break;
case "%7":
return (6);

break;
case "%8":
return (7);

break;
case "%9":
return (8);

break;
default:
return null;

}
});
taoensso.tempura.impl.re_clojure_arg = /%\d/;
/**
 * Checks string for simple Clojure-style (%d) args and returns a vector of
 *   string parts and int arg indexes for later joining.
 */
taoensso.tempura.impl.str__GT_split_args = (function taoensso$tempura$impl$str__GT_split_args(s){
var e_68382 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68315){if((e68315 instanceof Error)){
var e = e68315;
return e;
} else {
throw e68315;

}
}})();
if((e_68382 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",25,"(string? s)",s,e_68382,null);
}

if(cljs.core.not((function (){var and__4120__auto__ = taoensso.encore.str_contains_QMARK_(s,"%");
if(and__4120__auto__){
return cljs.core.re_find(taoensso.tempura.impl.re_clojure_arg,s);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var uuid_esc = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var s__$1 = taoensso.encore.str_replace(s,"`%",uuid_esc);
var _QMARK_arg_seq = cljs.core.re_seq(taoensso.tempura.impl.re_clojure_arg,s__$1);
if(cljs.core.empty_QMARK_(_QMARK_arg_seq)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.str_replace(s__$1,uuid_esc,"%")], null);
} else {
var arg_idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.tempura.impl.str__GT__QMARK_arg_idx,_QMARK_arg_seq);
var splits = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,taoensso.tempura.impl.re_clojure_arg);
var splits__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (arg_idxs,splits,uuid_esc,s__$1,_QMARK_arg_seq){
return (function (s__$2){
return taoensso.encore.str_replace(s__$2,uuid_esc,"%");
});})(arg_idxs,splits,uuid_esc,s__$1,_QMARK_arg_seq))
,splits);
var _ = (function (){var z = (function (){try{return ((function (arg_idxs,splits,splits__$1,uuid_esc,s__$1,_QMARK_arg_seq){
return (function (arg_idxs_count,splits_count){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_idxs_count,(splits_count - (1)));
});
;})(arg_idxs,splits,splits__$1,uuid_esc,s__$1,_QMARK_arg_seq))
}catch (e68317){if((e68317 instanceof Error)){
var e = e68317;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e68317;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e68318){if((e68318 instanceof Error)){
var e = e68318;
return e;
} else {
throw e68318;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",37,"(taoensso.truss.impl/some? (fn [arg-idxs-count splits-count] (= arg-idxs-count (- splits-count 1))))",z,e,null);
}
})();
return taoensso.encore.vinterleave_all(splits__$1,arg_idxs);
}
}
});
/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) args
 *   in string with `(str (?argval-fn <corresponding-vector-arg>))`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.str__GT_vargs_fn = (function taoensso$tempura$impl$str__GT_vargs_fn(var_args){
var G__68320 = arguments.length;
switch (G__68320) {
case 1:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2(s,null);
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (s,argval_fn){
var e_68387 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68321){if((e68321 instanceof Error)){
var e = e68321;
return e;
} else {
throw e68321;

}
}})();
if((e_68387 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",53,"(string? s)",s,e_68387,null);
}

var parts = taoensso.tempura.impl.str__GT_split_args(s);
var argval_fn__$1 = (function (){var or__4131__auto__ = argval_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.undefined__GT_nil;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parts),(1))){
var vec__68322 = parts;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68322,(0),null);
if(typeof p1 === 'string'){
return ((function (vec__68322,p1,parts,argval_fn__$1){
return (function (vargs){
return p1;
});
;})(vec__68322,p1,parts,argval_fn__$1))
} else {
if(cljs.core.integer_QMARK_(p1)){
return ((function (vec__68322,p1,parts,argval_fn__$1){
return (function (vargs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,p1);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__68326) : argval_fn__$1.call(null,G__68326));
})());
});
;})(vec__68322,p1,parts,argval_fn__$1))
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
return ((function (parts,argval_fn__$1){
return (function (vargs){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
cljs.core.run_BANG_(((function (sb,parts,argval_fn__$1){
return (function (p){
if(typeof p === 'string'){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,p);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,p);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__68328) : argval_fn__$1.call(null,G__68328));
})()));
}
});})(sb,parts,argval_fn__$1))
,parts);

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
;})(parts,argval_fn__$1))
}
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.mapv_nested = (function taoensso$tempura$impl$mapv_nested(f,v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function taoensso$tempura$impl$mapv_nested_$_f1(in$){
if(cljs.core.vector_QMARK_(in$)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso$tempura$impl$mapv_nested_$_f1,in$);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(in$) : f.call(null,in$));
}
}),v);
});
taoensso.tempura.impl.reducev_nested = (function taoensso$tempura$impl$reducev_nested(rf,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$tempura$impl$reducev_nested_$_rf1(acc,in$){
if(cljs.core.vector_QMARK_(in$)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$tempura$impl$reducev_nested_$_rf1,cljs.core.PersistentVector.EMPTY,in$));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}
}),cljs.core.PersistentVector.EMPTY,v);
});
taoensso.tempura.impl.node_paths = (function taoensso$tempura$impl$node_paths(var_args){
var G__68331 = arguments.length;
switch (G__68331) {
case 1:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__4131__auto__ = basis;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.reduce_kv(((function (basis__$1){
return (function (acc,k,v){
if(cljs.core.not((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
var paths_from_basis = taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,paths_from_basis);
}
});})(basis__$1))
,cljs.core.PersistentVector.EMPTY,m);
});

taoensso.tempura.impl.node_paths.cljs$lang$maxFixedArity = 3;

/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) arg
 *   elements with `(?argval-fn <corresponding-vector-arg>)`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.vec__GT_vargs_fn = (function taoensso$tempura$impl$vec__GT_vargs_fn(var_args){
var G__68333 = arguments.length;
switch (G__68333) {
case 1:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2(v,null);
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (v,argval_fn){
var e_68404 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68334){if((e68334 instanceof Error)){
var e = e68334;
return e;
} else {
throw e68334;

}
}})();
if((e_68404 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",146,"(vector? v)",v,e_68404,null);
}

var node_paths = taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1(v);
var idxs__GT_arg_idxs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (node_paths){
return (function (acc,in$){
var el = cljs.core.peek(in$);
if((!((el instanceof cljs.core.Symbol)))){
return acc;
} else {
var temp__5733__auto__ = taoensso.tempura.impl.str__GT__QMARK_arg_idx(cljs.core.name(el));
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.assoc_in(acc,cljs.core.pop(in$),idx);
} else {
return acc;
}
}
});})(node_paths))
,cljs.core.PersistentArrayMap.EMPTY,node_paths);
if(cljs.core.empty_QMARK_(idxs__GT_arg_idxs)){
return ((function (node_paths,idxs__GT_arg_idxs){
return (function (vargs){
return v;
});
;})(node_paths,idxs__GT_arg_idxs))
} else {
var argval_fn__$1 = (function (){var or__4131__auto__ = argval_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
return ((function (argval_fn__$1,node_paths,idxs__GT_arg_idxs){
return (function (vargs){
return cljs.core.reduce_kv(((function (argval_fn__$1,node_paths,idxs__GT_arg_idxs){
return (function taoensso$tempura$impl$rf1(acc,k,v__$1){
if(cljs.core.map_QMARK_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.reduce_kv(taoensso$tempura$impl$rf1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k),v__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__68336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,v__$1);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__68336) : argval_fn__$1.call(null,G__68336));
})());
}
});})(argval_fn__$1,node_paths,idxs__GT_arg_idxs))
,v,idxs__GT_arg_idxs);
});
;})(argval_fn__$1,node_paths,idxs__GT_arg_idxs))
}
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.vec_explode_args_in_strs = (function taoensso$tempura$impl$vec_explode_args_in_strs(v){
var e_68412 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68337){if((e68337 instanceof Error)){
var e = e68337;
return e;
} else {
throw e68337;

}
}})();
if((e_68412 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",188,"(vector? v)",v,e_68412,null);
}

return taoensso.tempura.impl.reducev_nested((function (acc,in$){
if((!(typeof in$ === 'string'))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,in$);
} else {
var parts = taoensso.tempura.impl.str__GT_split_args(in$);
var parts__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parts){
return (function (p){
if(typeof p === 'string'){
return p;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p + (1)))].join(''));
}
});})(parts))
,parts);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,parts__$1);
}
}),v);
});
taoensso.tempura.impl.str__GT_split_styles = (function taoensso$tempura$impl$str__GT_split_styles(s){
var e_68414 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68340){if((e68340 instanceof Error)){
var e = e68340;
return e;
} else {
throw e68340;

}
}})();
if((e_68414 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",206,"(string? s)",s,e_68414,null);
}

var matches_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var replace_matches = ((function (matches_){
return (function (s__$1,regex,tag){
return taoensso.encore.str_replace(s__$1,regex,((function (matches_){
return (function (p__68341){
var vec__68342 = p__68341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(2),null);
var uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
matches_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(matches_.cljs$core$IDeref$_deref$arity$1(null),uuid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,content], null)));

return uuid;
});})(matches_))
);
});})(matches_))
;
var uuid_esc_STAR_ = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var uuid_esc_ = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var uuid_esc_tilde = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var s__$1 = taoensso.encore.str_replace(s,"`*",uuid_esc_STAR_);
var s__$2 = taoensso.encore.str_replace(s__$1,"`_",uuid_esc_);
var s__$3 = taoensso.encore.str_replace(s__$2,"`~",uuid_esc_tilde);
var s__$4 = replace_matches(s__$3,/(\*\*)([^\*\r\n]+)\1/,new cljs.core.Keyword(null,"strong","strong",269529000));
var s__$5 = replace_matches(s__$4,/(__)([^_\r\n]+)\1/,new cljs.core.Keyword(null,"b","b",1482224470));
var s__$6 = replace_matches(s__$5,/(\*)([^\*\r\n]+)\1/,new cljs.core.Keyword(null,"em","em",707813035));
var s__$7 = replace_matches(s__$6,/(_)([^_\r\n]+)\1/,new cljs.core.Keyword(null,"i","i",-1386841315));
var s__$8 = replace_matches(s__$7,/(~~)([^~\r\n]+)\1/,new cljs.core.Keyword(null,"s","s",1705939918));
var s__$9 = taoensso.encore.str_replace(s__$8,uuid_esc_STAR_,"*");
var s__$10 = taoensso.encore.str_replace(s__$9,uuid_esc_,"_");
var s__$11 = taoensso.encore.str_replace(s__$10,uuid_esc_tilde,"~");
var matches = cljs.core.deref(matches_);
if(cljs.core.empty_QMARK_(matches)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$11], null);
} else {
var ordered_match_ks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches){
return (function (p1__68338_SHARP_){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2(s__$11,p1__68338_SHARP_);
});})(matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches))
,cljs.core.keys(matches));
var ordered_match_vs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (ordered_match_ks,matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches){
return (function (p1__68339_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches,p1__68339_SHARP_);
});})(ordered_match_ks,matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches))
,ordered_match_ks);
var splits = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$11,cljs.core.re_pattern(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",ordered_match_ks)));
return taoensso.encore.vinterleave_all(splits,ordered_match_vs);
}
});
/**
 * ["foo"] -> [:span "foo"] as a convenience.
 */
taoensso.tempura.impl.vec__GT_vtag = (function taoensso$tempura$impl$vec__GT_vtag(v){
var e_68425 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68346){if((e68346 instanceof Error)){
var e = e68346;
return e;
} else {
throw e68346;

}
}})();
if((e_68425 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",255,"(vector? v)",v,e_68425,null);
}

var vec__68348 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68348,(0),null);
if((!((v1 instanceof cljs.core.Keyword)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),v);
} else {
return v;
}
});
taoensso.tempura.impl.vec_explode_styles_in_strs = (function taoensso$tempura$impl$vec_explode_styles_in_strs(var_args){
var G__68352 = arguments.length;
switch (G__68352) {
case 1:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2(v,taoensso.tempura.impl.str__GT_split_styles);
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2 = (function (v,str_splitter){
var e_68433 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68353){if((e68353 instanceof Error)){
var e = e68353;
return e;
} else {
throw e68353;

}
}})();
if((e_68433 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",269,"(vector? v)",v,e_68433,null);
}

return taoensso.tempura.impl.reducev_nested((function (acc,in$){
if((!(typeof in$ === 'string'))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,in$);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,(str_splitter.cljs$core$IFn$_invoke$arity$1 ? str_splitter.cljs$core$IFn$_invoke$arity$1(in$) : str_splitter.call(null,in$)));
}
}),v);
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.escape_html = (function taoensso$tempura$impl$escape_html(s){
return taoensso.encore.str_replace(taoensso.encore.str_replace(taoensso.encore.str_replace(taoensso.encore.str_replace(s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
taoensso.tempura.impl.vec_escape_html_in_strs = (function taoensso$tempura$impl$vec_escape_html_in_strs(v){
var e_68435 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68354){if((e68354 instanceof Error)){
var e = e68354;
return e;
} else {
throw e68354;

}
}})();
if((e_68435 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",294,"(vector? v)",v,e_68435,null);
}

return taoensso.tempura.impl.mapv_nested((function (x){
if(typeof x === 'string'){
return taoensso.tempura.impl.escape_html(x);
} else {
return x;
}
}),v);
});
taoensso.tempura.impl.expand_locales = (function (){var expand_locale = taoensso.encore.memoize_((function (locale){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(cljs.core.name(locale)),/[_-]/);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parts){
return (function (p1__68355_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",p1__68355_SHARP_));
});})(parts))
,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(cljs.core.butlast,parts)));
}));
var expand_locales_STAR_ = ((function (expand_locale){
return (function (locales){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(locales),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locales,(0));
return (expand_locale.cljs$core$IFn$_invoke$arity$1 ? expand_locale.cljs$core$IFn$_invoke$arity$1(G__68357) : expand_locale.call(null,G__68357));
})()], null);
} else {
var vec__68359 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (expand_locale){
return (function (p__68362,in$){
var vec__68363 = p__68362;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68363,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68363,(1),null);
var lvars = (expand_locale.cljs$core$IFn$_invoke$arity$1 ? expand_locale.cljs$core$IFn$_invoke$arity$1(in$) : expand_locale.call(null,in$));
var lbase = cljs.core.peek(lvars);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(lbase) : seen.call(null,lbase)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,lvars),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,lbase)], null);
}
});})(expand_locale))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),locales);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(1),null);
return acc;
}
});})(expand_locale))
;
var expand_locales_STAR__cached = taoensso.encore.memoize_(expand_locales_STAR_);
return ((function (expand_locale,expand_locales_STAR_,expand_locales_STAR__cached){
return (function (cache_QMARK_,locales){
if(cljs.core.truth_(cache_QMARK_)){
return (expand_locales_STAR__cached.cljs$core$IFn$_invoke$arity$1 ? expand_locales_STAR__cached.cljs$core$IFn$_invoke$arity$1(locales) : expand_locales_STAR__cached.call(null,locales));
} else {
return expand_locales_STAR_(locales);
}
});
;})(expand_locale,expand_locales_STAR_,expand_locales_STAR__cached))
})();
taoensso.tempura.impl.load_resource = (function taoensso$tempura$impl$load_resource(rname){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Runtime resource loading not possible for cljs dictionaries. See `tempura/load-resource-at-compile-time` as an alternative.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rname","rname",1570047601),rname], null));
});
taoensso.tempura.impl.compile_dictionary = (function (){var preprocess = (function (dict){
return cljs.core.reduce_kv((function taoensso$tempura$impl$rf1(acc,k,v){
if((v instanceof cljs.core.Keyword)){
var path = taoensso.encore.explode_keyword(v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dict,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path)));
} else {
if(cljs.core.map_QMARK_(v)){
var temp__5733__auto__ = new cljs.core.Keyword(null,"__load-resource","__load-resource",-1900012152).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5733__auto__)){
var io_res = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,taoensso.tempura.impl.load_resource(io_res));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.reduce_kv(taoensso$tempura$impl$rf1,cljs.core.PersistentArrayMap.EMPTY,v));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,dict);
});
var as_paths = taoensso.encore.memoize_(((function (preprocess){
return (function (dict){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (preprocess){
return (function (acc,in$){
var vec__68369 = in$;
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68369,(0),null);
var normed_locale = clojure.string.lower_case(cljs.core.name(locale));
var in$__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,(0),normed_locale);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1(cljs.core.pop(in$__$1)),cljs.core.peek(in$__$1));
});})(preprocess))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,dict));
});})(preprocess))
);
var compile_dictionary_STAR_ = taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((1000),((function (preprocess,as_paths){
return (function (dict){
var G__68372 = preprocess(preprocess(dict));
return (as_paths.cljs$core$IFn$_invoke$arity$1 ? as_paths.cljs$core$IFn$_invoke$arity$1(G__68372) : as_paths.call(null,G__68372));
});})(preprocess,as_paths))
);
var compile_dictionary_STAR__cached = taoensso.encore.memoize_(compile_dictionary_STAR_);
return ((function (preprocess,as_paths,compile_dictionary_STAR_,compile_dictionary_STAR__cached){
return (function (cache_QMARK_,dict){
if(cljs.core.truth_(cache_QMARK_)){
return (compile_dictionary_STAR__cached.cljs$core$IFn$_invoke$arity$1 ? compile_dictionary_STAR__cached.cljs$core$IFn$_invoke$arity$1(dict) : compile_dictionary_STAR__cached.call(null,dict));
} else {
return (compile_dictionary_STAR_.cljs$core$IFn$_invoke$arity$1 ? compile_dictionary_STAR_.cljs$core$IFn$_invoke$arity$1(dict) : compile_dictionary_STAR_.call(null,dict));
}
});
;})(preprocess,as_paths,compile_dictionary_STAR_,compile_dictionary_STAR__cached))
})();
taoensso.tempura.impl.vargs = (function taoensso$tempura$impl$vargs(x){
if(cljs.core.map_QMARK_(x)){
var max_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68373_SHARP_,p2__68374_SHARP_){
var n1__65851__auto__ = p1__68373_SHARP_;
var n2__65852__auto__ = p2__68374_SHARP_;
if((n1__65851__auto__ < n2__65852__auto__)){
return n2__65852__auto__;
} else {
return n1__65851__auto__;
}
}),(0),cljs.core.keys(x));
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,(0)) == null)){
} else {
throw (new Error(["Assert failed: ","All arg map keys must be +ive non-zero ints","\n","(nil? (get x 0))"].join('')));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (max_idx){
return (function (idx){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,idx);
});})(max_idx))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_idx + (1))));
} else {
var e = (function (){try{if(cljs.core.vector_QMARK_(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e68379){if((e68379 instanceof Error)){
var e = e68379;
return e;
} else {
throw e68379;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",436,"(vector? x)",x,e,null);
}
}
});

//# sourceMappingURL=taoensso.tempura.impl.js.map
