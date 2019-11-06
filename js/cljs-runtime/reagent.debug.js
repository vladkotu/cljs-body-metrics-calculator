goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__56199__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56200__i = 0, G__56200__a = new Array(arguments.length -  0);
while (G__56200__i < G__56200__a.length) {G__56200__a[G__56200__i] = arguments[G__56200__i + 0]; ++G__56200__i;}
  args = new cljs.core.IndexedSeq(G__56200__a,0,null);
} 
return G__56199__delegate.call(this,args);};
G__56199.cljs$lang$maxFixedArity = 0;
G__56199.cljs$lang$applyTo = (function (arglist__56201){
var args = cljs.core.seq(arglist__56201);
return G__56199__delegate(args);
});
G__56199.cljs$core$IFn$_invoke$arity$variadic = G__56199__delegate;
return G__56199;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__56202__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56203__i = 0, G__56203__a = new Array(arguments.length -  0);
while (G__56203__i < G__56203__a.length) {G__56203__a[G__56203__i] = arguments[G__56203__i + 0]; ++G__56203__i;}
  args = new cljs.core.IndexedSeq(G__56203__a,0,null);
} 
return G__56202__delegate.call(this,args);};
G__56202.cljs$lang$maxFixedArity = 0;
G__56202.cljs$lang$applyTo = (function (arglist__56204){
var args = cljs.core.seq(arglist__56204);
return G__56202__delegate(args);
});
G__56202.cljs$core$IFn$_invoke$arity$variadic = G__56202__delegate;
return G__56202;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
