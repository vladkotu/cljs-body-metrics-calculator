goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Protocol for EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

/**
 * Keyword representing the type of the node.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$tag$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.tag["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.tag",_);
}
}
}
});

/**
 * Return true if the node cannot be converted to an s-expression
 *   element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.printable-only?",_);
}
}
}
});

/**
 * Convert node to s-expression.
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$sexpr$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.sexpr["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.sexpr",_);
}
}
}
});

/**
 * Get number of characters for the string version of this node.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$length$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.length["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.length",_);
}
}
}
});

/**
 * Convert node to printable string.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$string$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.string["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.string",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.Node,"object",true);

var G__53794_53838 = rewrite_clj.node.protocols.tag;
var G__53795_53839 = "object";
var G__53796_53840 = ((function (G__53794_53838,G__53795_53839){
return (function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
});})(G__53794_53838,G__53795_53839))
;
goog.object.set(G__53794_53838,G__53795_53839,G__53796_53840);

var G__53797_53841 = rewrite_clj.node.protocols.printable_only_QMARK_;
var G__53798_53842 = "object";
var G__53799_53843 = ((function (G__53797_53841,G__53798_53842){
return (function (_){
return false;
});})(G__53797_53841,G__53798_53842))
;
goog.object.set(G__53797_53841,G__53798_53842,G__53799_53843);

var G__53800_53844 = rewrite_clj.node.protocols.sexpr;
var G__53801_53845 = "object";
var G__53802_53846 = ((function (G__53800_53844,G__53801_53845){
return (function (this$){
return this$;
});})(G__53800_53844,G__53801_53845))
;
goog.object.set(G__53800_53844,G__53801_53845,G__53802_53846);

var G__53803_53847 = rewrite_clj.node.protocols.length;
var G__53804_53848 = "object";
var G__53805_53849 = ((function (G__53803_53847,G__53804_53848){
return (function (this$){
return cljs.core.count(rewrite_clj.node.protocols.string(this$));
});})(G__53803_53847,G__53804_53848))
;
goog.object.set(G__53803_53847,G__53804_53848,G__53805_53849);

var G__53807_53850 = rewrite_clj.node.protocols.string;
var G__53808_53851 = "object";
var G__53809_53852 = ((function (G__53807_53850,G__53808_53851){
return (function (this$){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});})(G__53807_53850,G__53808_53851))
;
goog.object.set(G__53807_53850,G__53808_53851,G__53809_53852);
/**
 * Given a seq of nodes, convert those that represent s-expressions
 * to the respective forms.
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.sexpr,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Sum up lengths of the given nodes.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.length,nodes));
});
/**
 * Convert nodes to strings and concatenate them.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

/**
 * Check whether the node can contain children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.inner?",_);
}
}
}
});

/**
 * Get child nodes.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.children["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.children",_);
}
}
}
});

/**
 * Replace the node's children.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(_,children){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4434__auto__.call(null,_,children));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.replace_children["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4431__auto__.call(null,_,children));
} else {
throw cljs.core.missing_protocol("InnerNode.replace-children",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.InnerNode,"object",true);

var G__53813_53860 = rewrite_clj.node.protocols.inner_QMARK_;
var G__53814_53861 = "object";
var G__53815_53862 = ((function (G__53813_53860,G__53814_53861){
return (function (_){
return false;
});})(G__53813_53860,G__53814_53861))
;
goog.object.set(G__53813_53860,G__53814_53861,G__53815_53862);

var G__53816_53864 = rewrite_clj.node.protocols.children;
var G__53817_53865 = "object";
var G__53818_53866 = ((function (G__53816_53864,G__53817_53865){
return (function (_){
throw (new Error("UnsupportedOperationException"));
});})(G__53816_53864,G__53817_53865))
;
goog.object.set(G__53816_53864,G__53817_53865,G__53818_53866);

var G__53819_53867 = rewrite_clj.node.protocols.replace_children;
var G__53820_53868 = "object";
var G__53821_53869 = ((function (G__53819_53867,G__53820_53868){
return (function (_,___$1){
throw (new Error("UnsupportedOperationException"));
});})(G__53819_53867,G__53820_53868))
;
goog.object.set(G__53819_53867,G__53820_53868,G__53821_53869);
/**
 * Get all child s-expressions for the given node.
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_(node))){
return rewrite_clj.node.protocols.sexprs(rewrite_clj.node.protocols.children(node));
} else {
return null;
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.coerce["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("NodeCoerceable.coerce",_);
}
}
}
});

rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",["can only contain",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," non-whitespace form(s)."].join(''),"\n","(= (count (remove printable-only? nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count(nodes,(1));
});

//# sourceMappingURL=rewrite_clj.node.protocols.js.map
