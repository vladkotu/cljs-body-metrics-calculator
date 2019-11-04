goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46602 = arguments.length;
var i__4731__auto___46603 = (0);
while(true){
if((i__4731__auto___46603 < len__4730__auto___46602)){
args__4736__auto__.push((arguments[i__4731__auto___46603]));

var G__46604 = (i__4731__auto___46603 + (1));
i__4731__auto___46603 = G__46604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__46607__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__46607 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__46608__i = 0, G__46608__a = new Array(arguments.length -  0);
while (G__46608__i < G__46608__a.length) {G__46608__a[G__46608__i] = arguments[G__46608__i + 0]; ++G__46608__i;}
  children = new cljs.core.IndexedSeq(G__46608__a,0,null);
} 
return G__46607__delegate.call(this,children);};
G__46607.cljs$lang$maxFixedArity = 0;
G__46607.cljs$lang$applyTo = (function (arglist__46609){
var children = cljs.core.seq(arglist__46609);
return G__46607__delegate(children);
});
G__46607.cljs$core$IFn$_invoke$arity$variadic = G__46607__delegate;
return G__46607;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq46543){
var G__46544 = cljs.core.first(seq46543);
var seq46543__$1 = cljs.core.next(seq46543);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46544,seq46543__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__46612__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__46612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46615__i = 0, G__46615__a = new Array(arguments.length -  0);
while (G__46615__i < G__46615__a.length) {G__46615__a[G__46615__i] = arguments[G__46615__i + 0]; ++G__46615__i;}
  args = new cljs.core.IndexedSeq(G__46615__a,0,null);
} 
return G__46612__delegate.call(this,args);};
G__46612.cljs$lang$maxFixedArity = 0;
G__46612.cljs$lang$applyTo = (function (arglist__46617){
var args = cljs.core.seq(arglist__46617);
return G__46612__delegate(args);
});
G__46612.cljs$core$IFn$_invoke$arity$variadic = G__46612__delegate;
return G__46612;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46619 = arguments.length;
var i__4731__auto___46620 = (0);
while(true){
if((i__4731__auto___46620 < len__4730__auto___46619)){
args__4736__auto__.push((arguments[i__4731__auto___46620]));

var G__46623 = (i__4731__auto___46620 + (1));
i__4731__auto___46620 = G__46623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq46554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46554));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__46563 = arguments.length;
switch (G__46563) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46630 = arguments.length;
var i__4731__auto___46631 = (0);
while(true){
if((i__4731__auto___46631 < len__4730__auto___46630)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46631]));

var G__46633 = (i__4731__auto___46631 + (1));
i__4731__auto___46631 = G__46633;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq46561){
var G__46562 = cljs.core.first(seq46561);
var seq46561__$1 = cljs.core.next(seq46561);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46562,seq46561__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46638 = arguments.length;
var i__4731__auto___46639 = (0);
while(true){
if((i__4731__auto___46639 < len__4730__auto___46638)){
args__4736__auto__.push((arguments[i__4731__auto___46639]));

var G__46641 = (i__4731__auto___46639 + (1));
i__4731__auto___46639 = G__46641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq46569){
var G__46570 = cljs.core.first(seq46569);
var seq46569__$1 = cljs.core.next(seq46569);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46570,seq46569__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46645 = arguments.length;
var i__4731__auto___46646 = (0);
while(true){
if((i__4731__auto___46646 < len__4730__auto___46645)){
args__4736__auto__.push((arguments[i__4731__auto___46646]));

var G__46648 = (i__4731__auto___46646 + (1));
i__4731__auto___46646 = G__46648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq46580){
var G__46581 = cljs.core.first(seq46580);
var seq46580__$1 = cljs.core.next(seq46580);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46581,seq46580__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.js.map
