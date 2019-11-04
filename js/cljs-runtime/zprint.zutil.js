goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__54830 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__54844 = zprint.zutil.zfirst(zloc);
var G__54844__$1 = (((G__54844 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__54844) : zprint.zutil.right_STAR_.call(null,G__54844)));
var G__54844__$2 = (((G__54844__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54844__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54844__$1)));
var G__54844__$3 = (((G__54844__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__54844__$2) : zprint.zutil.right_STAR_.call(null,G__54844__$2)));
if((G__54844__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54844__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54844__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__54845 = zprint.zutil.zfirst(zloc);
var G__54845__$1 = (((G__54845 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__54845) : zprint.zutil.right_STAR_.call(null,G__54845)));
var G__54845__$2 = (((G__54845__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$1)));
var G__54845__$3 = (((G__54845__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__54845__$2) : zprint.zutil.right_STAR_.call(null,G__54845__$2)));
var G__54845__$4 = (((G__54845__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$3)));
var G__54845__$5 = (((G__54845__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__54845__$4) : zprint.zutil.right_STAR_.call(null,G__54845__$4)));
if((G__54845__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__54845__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__55319 = zprint.zutil.zrightnws(nloc);
var G__55320 = nloc;
nloc = G__55319;
ploc = G__55320;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__55322 = zprint.zutil.zleftnws(nloc);
var G__55323 = nloc;
nloc = G__55322;
ploc = G__55323;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.end_QMARK_.call(null,zloc)))){
return zloc;
} else {
var temp__5733__auto__ = (zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.next_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = (function (){var G__54847 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__54847) : zprint.zutil.skip_whitespace.call(null,G__54847));
})();
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__55332 = zprint.zutil.zrightnws(nloc);
var G__55333 = (i - (1));
nloc = G__55332;
i = G__55333;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = (function (){var G__54848 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__54848) : zprint.zutil.skip_whitespace.call(null,G__54848));
})();
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__55345 = zprint.zutil.zrightnws(nloc);
var G__55346 = (i + (1));
nloc = G__55345;
i = G__55346;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__55353 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55354 = (function (){var temp__5733__auto__ = ((cljs.core.not((function (){var and__4120__auto__ = (zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc));
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__55353;
out = G__55354;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__55364 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55365 = (function (){var temp__5733__auto__ = ((cljs.core.not((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__55364;
out = G__55365;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__55374 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55375 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__55374;
out = G__55375;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__55378 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55379 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__55378;
out = G__55379;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__55381 = (function (){var G__54858 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__54858) : zprint.zutil.zremove.call(null,G__54858));
})();
nloc = G__55381;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__54860 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__54860) : zprint.zutil.up_STAR_.call(null,G__54860));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55387 = xloc;
var G__55388 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(xloc) : zprint.zutil.whitespace_QMARK_.call(null,xloc)))?index:(index + (1)));
nloc = G__55387;
index = G__55388;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__55392 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__55394 = (0);
var G__55395 = cljs.core.cons(left,out);
nloc = G__55392;
left = G__55394;
out = G__55395;
continue;
}
} else {
var G__55396 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__55397 = (left + (1));
var G__55398 = out;
nloc = G__55396;
left = G__55397;
out = G__55398;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__55407 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__55408 = (0);
var G__55409 = cljs.core.cons(left,out);
nloc = G__55407;
left = G__55408;
out = G__55409;
continue;
}
} else {
var G__55410 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__55411 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?left:(left + (1)));
var G__55412 = out;
nloc = G__55410;
left = G__55411;
out = G__55412;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__55413 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__55413;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__55415 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__55416 = (remaining_right - (1));
nloc = G__55415;
remaining_right = G__55416;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__54893 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54893) : rewrite_clj.node.printable_only_QMARK_.call(null,G__54893));
})())));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__54896 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__54896) : rewrite_clj.zip.down.call(null,G__54896));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__54897 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__54897) : rewrite_clj.zip.down.call(null,G__54897));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__54899 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__54899) : zprint.zutil.edn_STAR_.call(null,G__54899));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__54905 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54905) : zprint.zutil.zconstant_QMARK_.call(null,G__54905));
} else {
var and__4120__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
while(true){
var tnloc = (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.tag.call(null,nloc));
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__55437 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__55438 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces);
nloc = G__55437;
spaces = G__55438;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof (function (){var G__54918 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__54918) : zprint.zutil.sexpr.call(null,G__54918));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__55440 = (function (){var G__54920 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__54920) : rewrite_clj.zip.right.call(null,G__54920));
})();
nloc = G__55440;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__54923 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__54923) : rewrite_clj.zip.string.call(null,G__54923));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__54924 = (function (){var G__54925 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__54925) : rewrite_clj.zip.right.call(null,G__54925));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__54924) : rewrite_clj.zip.right.call(null,G__54924));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__54926 = (function (){var G__54927 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__54927) : rewrite_clj.zip.right.call(null,G__54927));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__54926) : rewrite_clj.zip.down.call(null,G__54926));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = (function (){var G__54928 = doc_zloc;
var G__54929 = (function (){var G__54931 = (function (){var G__54933 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__54933) : zprint.zutil.edn_STAR_.call(null,G__54933));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__54931) : rewrite_clj.zip.node.call(null,G__54931));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__54928,G__54929) : zprint.zutil.replace_STAR_.call(null,G__54928,G__54929));
})();
var G__54934 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__54934) : zprint.zutil.edn_STAR_.call(null,G__54934));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__54963 = cljs.core.first(pair_seq__$1);
var seq__54964 = cljs.core.seq(vec__54963);
var first__54965 = cljs.core.first(seq__54964);
var seq__54964__$1 = cljs.core.next(seq__54964);
var k = first__54965;
var rest_of_pair = seq__54964__$1;
var pair = vec__54963;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__55461 = ns;
var G__55462 = cljs.core.next(pair_seq__$1);
var G__55463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__54974 = (function (){var G__54975 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__54975) : rewrite_clj.node.token_node.call(null,G__54975));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__54974) : zprint.zutil.edn_STAR_.call(null,G__54974));
})(),rest_of_pair));
ns = G__55461;
pair_seq__$1 = G__55462;
out = G__55463;
continue;
} else {
return null;
}
} else {
var G__55465 = current_ns;
var G__55466 = cljs.core.next(pair_seq__$1);
var G__55467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__54977 = (function (){var G__54978 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__54978) : rewrite_clj.node.token_node.call(null,G__54978));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__54977) : zprint.zutil.edn_STAR_.call(null,G__54977));
})(),rest_of_pair));
ns = G__55465;
pair_seq__$1 = G__55466;
out = G__55467;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__55468 = ns;
var G__55469 = cljs.core.next(pair_seq__$1);
var G__55470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__55468;
pair_seq__$1 = G__55469;
out = G__55470;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__54984 = zprint.zfns.zstring;
var znumstr_orig_val__54985 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__54986 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__54987 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__54988 = zprint.zfns.zsexpr;
var zseqnws_orig_val__54989 = zprint.zfns.zseqnws;
var zmap_right_orig_val__54990 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__54991 = zprint.zfns.zfocus_style;
var zfirst_orig_val__54992 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__54993 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__54994 = zprint.zfns.zsecond;
var zthird_orig_val__54995 = zprint.zfns.zthird;
var zfourth_orig_val__54996 = zprint.zfns.zfourth;
var znthnext_orig_val__54997 = zprint.zfns.znthnext;
var zcount_orig_val__54998 = zprint.zfns.zcount;
var zmap_orig_val__54999 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__55000 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__55001 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__55002 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__55003 = zprint.zfns.zfocus;
var zfind_path_orig_val__55004 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__55005 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__55006 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__55007 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__55008 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__55009 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__55010 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__55011 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__55012 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__55013 = zprint.zfns.ztag;
var zlast_orig_val__55014 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__55015 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__55016 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__55017 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__55018 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__55019 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__55020 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__55021 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__55022 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__55023 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__55024 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__55025 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__55026 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__55027 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__55028 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__55029 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__55030 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__55031 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__55032 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__55033 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__55034 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__55035 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__55036 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__55037 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__55038 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__55039 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__55040 = zprint.zfns.zfind;
var ztake_append_orig_val__55041 = zprint.zfns.ztake_append;
var zstring_temp_val__55042 = rewrite_clj.zip.string;
var znumstr_temp_val__55043 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__55044 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__55045 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__55046 = zprint.zutil.sexpr;
var zseqnws_temp_val__55047 = zprint.zutil.zseqnws;
var zmap_right_temp_val__55048 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__55049 = zprint.zutil.zfocus_style;
var zfirst_temp_val__55050 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__55051 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__55052 = zprint.zutil.zsecond;
var zthird_temp_val__55053 = zprint.zutil.zthird;
var zfourth_temp_val__55054 = zprint.zutil.zfourth;
var znthnext_temp_val__55055 = zprint.zutil.znthnext;
var zcount_temp_val__55056 = zprint.zutil.zcount;
var zmap_temp_val__55057 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__55058 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__55059 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__55060 = cljs.core.constantly(false);
var zfocus_temp_val__55061 = zprint.zutil.zfocus;
var zfind_path_temp_val__55062 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__55063 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__55064 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__55065 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__55066 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__55067 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__55068 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__55069 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__55070 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__55071 = zprint.zutil.ztag;
var zlast_temp_val__55072 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__55073 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__55074 = cljs.core.constantly(false);
var zderef_temp_val__55075 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__55076 = cljs.core.constantly(false);
var zns_QMARK__temp_val__55077 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__55078 = cljs.core.constantly(null);
var zexpandarray_temp_val__55079 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__55080 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__55081 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__55082 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__55083 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__55084 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__55085 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__55086 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__55087 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__55088 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__55089 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__55090 = cljs.core.constantly(null);
var zdotdotdot_temp_val__55091 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__55092 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__55093 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__55094 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__55095 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__55096 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__55097 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__55098 = zprint.zutil.zfind;
var ztake_append_temp_val__55099 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__55042;

zprint.zfns.znumstr = znumstr_temp_val__55043;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__55044;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__55045;

zprint.zfns.zsexpr = zsexpr_temp_val__55046;

zprint.zfns.zseqnws = zseqnws_temp_val__55047;

zprint.zfns.zmap_right = zmap_right_temp_val__55048;

zprint.zfns.zfocus_style = zfocus_style_temp_val__55049;

zprint.zfns.zfirst = zfirst_temp_val__55050;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__55051;

zprint.zfns.zsecond = zsecond_temp_val__55052;

zprint.zfns.zthird = zthird_temp_val__55053;

zprint.zfns.zfourth = zfourth_temp_val__55054;

zprint.zfns.znthnext = znthnext_temp_val__55055;

zprint.zfns.zcount = zcount_temp_val__55056;

zprint.zfns.zmap = zmap_temp_val__55057;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__55058;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__55059;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__55060;

zprint.zfns.zfocus = zfocus_temp_val__55061;

zprint.zfns.zfind_path = zfind_path_temp_val__55062;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__55063;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__55064;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__55065;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__55066;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__55067;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__55068;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__55069;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__55070;

zprint.zfns.ztag = ztag_temp_val__55071;

zprint.zfns.zlast = zlast_temp_val__55072;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__55073;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__55074;

zprint.zfns.zderef = zderef_temp_val__55075;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__55076;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__55077;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__55078;

zprint.zfns.zexpandarray = zexpandarray_temp_val__55079;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__55080;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__55081;

zprint.zfns.zmap_all = zmap_all_temp_val__55082;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__55083;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__55084;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__55085;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__55086;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__55087;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__55088;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__55089;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__55090;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__55091;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__55092;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__55093;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__55094;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__55095;

zprint.zfns.zlift_ns = zlift_ns_temp_val__55096;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__55097;

zprint.zfns.zfind = zfind_temp_val__55098;

zprint.zfns.ztake_append = ztake_append_temp_val__55099;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__55041;

zprint.zfns.zfind = zfind_orig_val__55040;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__55039;

zprint.zfns.zlift_ns = zlift_ns_orig_val__55038;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__55037;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__55036;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__55035;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__55034;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__55033;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__55032;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__55031;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__55030;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__55029;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__55028;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__55027;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__55026;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__55025;

zprint.zfns.zmap_all = zmap_all_orig_val__55024;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__55023;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__55022;

zprint.zfns.zexpandarray = zexpandarray_orig_val__55021;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__55020;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__55019;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__55018;

zprint.zfns.zderef = zderef_orig_val__55017;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__55016;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__55015;

zprint.zfns.zlast = zlast_orig_val__55014;

zprint.zfns.ztag = ztag_orig_val__55013;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__55012;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__55011;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__55010;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__55009;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__55008;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__55007;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__55006;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__55005;

zprint.zfns.zfind_path = zfind_path_orig_val__55004;

zprint.zfns.zfocus = zfocus_orig_val__55003;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__55002;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__55001;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__55000;

zprint.zfns.zmap = zmap_orig_val__54999;

zprint.zfns.zcount = zcount_orig_val__54998;

zprint.zfns.znthnext = znthnext_orig_val__54997;

zprint.zfns.zfourth = zfourth_orig_val__54996;

zprint.zfns.zthird = zthird_orig_val__54995;

zprint.zfns.zsecond = zsecond_orig_val__54994;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__54993;

zprint.zfns.zfirst = zfirst_orig_val__54992;

zprint.zfns.zfocus_style = zfocus_style_orig_val__54991;

zprint.zfns.zmap_right = zmap_right_orig_val__54990;

zprint.zfns.zseqnws = zseqnws_orig_val__54989;

zprint.zfns.zsexpr = zsexpr_orig_val__54988;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__54987;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__54986;

zprint.zfns.znumstr = znumstr_orig_val__54985;

zprint.zfns.zstring = zstring_orig_val__54984;
}});

//# sourceMappingURL=zprint.zutil.js.map
