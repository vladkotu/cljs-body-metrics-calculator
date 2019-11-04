goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__62958 = coll;
var G__62959 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__62958,G__62959) : shadow.dom.lazy_native_coll_seq.call(null,G__62958,G__62959));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__62981 = arguments.length;
switch (G__62981) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__62988 = arguments.length;
switch (G__62988) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__62994 = arguments.length;
switch (G__62994) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__63003 = arguments.length;
switch (G__63003) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__63013 = arguments.length;
switch (G__63013) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__63015 = document;
var G__63016 = shadow.dom.dom_node(el);
return goog.dom.contains(G__63015,G__63016);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__63018 = shadow.dom.dom_node(parent);
var G__63019 = shadow.dom.dom_node(el);
return goog.dom.contains(G__63018,G__63019);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__63022 = shadow.dom.dom_node(el);
var G__63023 = cls;
return goog.dom.classlist.add(G__63022,G__63023);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__63027 = shadow.dom.dom_node(el);
var G__63028 = cls;
return goog.dom.classlist.remove(G__63027,G__63028);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__63033 = arguments.length;
switch (G__63033) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__63035 = shadow.dom.dom_node(el);
var G__63036 = cls;
return goog.dom.classlist.toggle(G__63035,G__63036);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e63042){if((e63042 instanceof Object)){
var e = e63042;
return console.log("didnt support attachEvent",el,e);
} else {
throw e63042;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__63047 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__63048 = null;
var count__63049 = (0);
var i__63050 = (0);
while(true){
if((i__63050 < count__63049)){
var el = chunk__63048.cljs$core$IIndexed$_nth$arity$2(null,i__63050);
var handler_63911__$1 = ((function (seq__63047,chunk__63048,count__63049,i__63050,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63047,chunk__63048,count__63049,i__63050,el))
;
var G__63064_63913 = el;
var G__63065_63914 = cljs.core.name(ev);
var G__63066_63915 = handler_63911__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63064_63913,G__63065_63914,G__63066_63915) : shadow.dom.dom_listen.call(null,G__63064_63913,G__63065_63914,G__63066_63915));


var G__63916 = seq__63047;
var G__63917 = chunk__63048;
var G__63918 = count__63049;
var G__63919 = (i__63050 + (1));
seq__63047 = G__63916;
chunk__63048 = G__63917;
count__63049 = G__63918;
i__63050 = G__63919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63047);
if(temp__5735__auto__){
var seq__63047__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63047__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63047__$1);
var G__63920 = cljs.core.chunk_rest(seq__63047__$1);
var G__63921 = c__4550__auto__;
var G__63922 = cljs.core.count(c__4550__auto__);
var G__63923 = (0);
seq__63047 = G__63920;
chunk__63048 = G__63921;
count__63049 = G__63922;
i__63050 = G__63923;
continue;
} else {
var el = cljs.core.first(seq__63047__$1);
var handler_63924__$1 = ((function (seq__63047,chunk__63048,count__63049,i__63050,el,seq__63047__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63047,chunk__63048,count__63049,i__63050,el,seq__63047__$1,temp__5735__auto__))
;
var G__63069_63925 = el;
var G__63070_63926 = cljs.core.name(ev);
var G__63071_63927 = handler_63924__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63069_63925,G__63070_63926,G__63071_63927) : shadow.dom.dom_listen.call(null,G__63069_63925,G__63070_63926,G__63071_63927));


var G__63929 = cljs.core.next(seq__63047__$1);
var G__63930 = null;
var G__63931 = (0);
var G__63932 = (0);
seq__63047 = G__63929;
chunk__63048 = G__63930;
count__63049 = G__63931;
i__63050 = G__63932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__63074 = arguments.length;
switch (G__63074) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__63079 = shadow.dom.dom_node(el);
var G__63080 = cljs.core.name(ev);
var G__63081 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63079,G__63080,G__63081) : shadow.dom.dom_listen.call(null,G__63079,G__63080,G__63081));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__63084 = shadow.dom.dom_node(el);
var G__63085 = cljs.core.name(ev);
var G__63086 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__63084,G__63085,G__63086) : shadow.dom.dom_listen_remove.call(null,G__63084,G__63085,G__63086));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__63089 = cljs.core.seq(events);
var chunk__63090 = null;
var count__63091 = (0);
var i__63092 = (0);
while(true){
if((i__63092 < count__63091)){
var vec__63106 = chunk__63090.cljs$core$IIndexed$_nth$arity$2(null,i__63092);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63106,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63938 = seq__63089;
var G__63939 = chunk__63090;
var G__63940 = count__63091;
var G__63941 = (i__63092 + (1));
seq__63089 = G__63938;
chunk__63090 = G__63939;
count__63091 = G__63940;
i__63092 = G__63941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63089);
if(temp__5735__auto__){
var seq__63089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63089__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63089__$1);
var G__63944 = cljs.core.chunk_rest(seq__63089__$1);
var G__63945 = c__4550__auto__;
var G__63946 = cljs.core.count(c__4550__auto__);
var G__63947 = (0);
seq__63089 = G__63944;
chunk__63090 = G__63945;
count__63091 = G__63946;
i__63092 = G__63947;
continue;
} else {
var vec__63114 = cljs.core.first(seq__63089__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63114,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63950 = cljs.core.next(seq__63089__$1);
var G__63951 = null;
var G__63952 = (0);
var G__63953 = (0);
seq__63089 = G__63950;
chunk__63090 = G__63951;
count__63091 = G__63952;
i__63092 = G__63953;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__63121 = cljs.core.seq(styles);
var chunk__63122 = null;
var count__63123 = (0);
var i__63124 = (0);
while(true){
if((i__63124 < count__63123)){
var vec__63145 = chunk__63122.cljs$core$IIndexed$_nth$arity$2(null,i__63124);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63145,(1),null);
var G__63148_63954 = dom;
var G__63149_63955 = cljs.core.name(k);
var G__63150_63956 = (((v == null))?"":v);
goog.style.setStyle(G__63148_63954,G__63149_63955,G__63150_63956);


var G__63959 = seq__63121;
var G__63960 = chunk__63122;
var G__63961 = count__63123;
var G__63962 = (i__63124 + (1));
seq__63121 = G__63959;
chunk__63122 = G__63960;
count__63123 = G__63961;
i__63124 = G__63962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63121);
if(temp__5735__auto__){
var seq__63121__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63121__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63121__$1);
var G__63963 = cljs.core.chunk_rest(seq__63121__$1);
var G__63964 = c__4550__auto__;
var G__63965 = cljs.core.count(c__4550__auto__);
var G__63966 = (0);
seq__63121 = G__63963;
chunk__63122 = G__63964;
count__63123 = G__63965;
i__63124 = G__63966;
continue;
} else {
var vec__63151 = cljs.core.first(seq__63121__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63151,(1),null);
var G__63154_63967 = dom;
var G__63155_63968 = cljs.core.name(k);
var G__63156_63969 = (((v == null))?"":v);
goog.style.setStyle(G__63154_63967,G__63155_63968,G__63156_63969);


var G__63971 = cljs.core.next(seq__63121__$1);
var G__63972 = null;
var G__63973 = (0);
var G__63974 = (0);
seq__63121 = G__63971;
chunk__63122 = G__63972;
count__63123 = G__63973;
i__63124 = G__63974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__63158_63976 = key;
var G__63158_63977__$1 = (((G__63158_63976 instanceof cljs.core.Keyword))?G__63158_63976.fqn:null);
switch (G__63158_63977__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_63981 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_63981,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_63981,"aria-");
}
})())){
el.setAttribute(ks_63981,value);
} else {
(el[ks_63981] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__63171 = shadow.dom.dom_node(el);
var G__63172 = cls;
return goog.dom.classlist.contains(G__63171,G__63172);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__63190){
var map__63192 = p__63190;
var map__63192__$1 = (((((!((map__63192 == null))))?(((((map__63192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63192):map__63192);
var props = map__63192__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__63197 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__63203 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__63203,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__63203;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__63210 = arguments.length;
switch (G__63210) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__63223){
var vec__63228 = p__63223;
var seq__63229 = cljs.core.seq(vec__63228);
var first__63230 = cljs.core.first(seq__63229);
var seq__63229__$1 = cljs.core.next(seq__63229);
var nn = first__63230;
var first__63230__$1 = cljs.core.first(seq__63229__$1);
var seq__63229__$2 = cljs.core.next(seq__63229__$1);
var np = first__63230__$1;
var nc = seq__63229__$2;
var node = vec__63228;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63235 = nn;
var G__63236 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63235,G__63236) : create_fn.call(null,G__63235,G__63236));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63237 = nn;
var G__63238 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63237,G__63238) : create_fn.call(null,G__63237,G__63238));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__63240 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63240,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63240,(1),null);
var seq__63247_64002 = cljs.core.seq(node_children);
var chunk__63248_64003 = null;
var count__63249_64004 = (0);
var i__63250_64005 = (0);
while(true){
if((i__63250_64005 < count__63249_64004)){
var child_struct_64007 = chunk__63248_64003.cljs$core$IIndexed$_nth$arity$2(null,i__63250_64005);
var children_64008 = shadow.dom.dom_node(child_struct_64007);
if(cljs.core.seq_QMARK_(children_64008)){
var seq__63303_64009 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64008));
var chunk__63305_64010 = null;
var count__63306_64011 = (0);
var i__63307_64012 = (0);
while(true){
if((i__63307_64012 < count__63306_64011)){
var child_64015 = chunk__63305_64010.cljs$core$IIndexed$_nth$arity$2(null,i__63307_64012);
if(cljs.core.truth_(child_64015)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64015);


var G__64016 = seq__63303_64009;
var G__64017 = chunk__63305_64010;
var G__64018 = count__63306_64011;
var G__64019 = (i__63307_64012 + (1));
seq__63303_64009 = G__64016;
chunk__63305_64010 = G__64017;
count__63306_64011 = G__64018;
i__63307_64012 = G__64019;
continue;
} else {
var G__64021 = seq__63303_64009;
var G__64022 = chunk__63305_64010;
var G__64023 = count__63306_64011;
var G__64024 = (i__63307_64012 + (1));
seq__63303_64009 = G__64021;
chunk__63305_64010 = G__64022;
count__63306_64011 = G__64023;
i__63307_64012 = G__64024;
continue;
}
} else {
var temp__5735__auto___64027 = cljs.core.seq(seq__63303_64009);
if(temp__5735__auto___64027){
var seq__63303_64028__$1 = temp__5735__auto___64027;
if(cljs.core.chunked_seq_QMARK_(seq__63303_64028__$1)){
var c__4550__auto___64029 = cljs.core.chunk_first(seq__63303_64028__$1);
var G__64030 = cljs.core.chunk_rest(seq__63303_64028__$1);
var G__64031 = c__4550__auto___64029;
var G__64032 = cljs.core.count(c__4550__auto___64029);
var G__64033 = (0);
seq__63303_64009 = G__64030;
chunk__63305_64010 = G__64031;
count__63306_64011 = G__64032;
i__63307_64012 = G__64033;
continue;
} else {
var child_64035 = cljs.core.first(seq__63303_64028__$1);
if(cljs.core.truth_(child_64035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64035);


var G__64038 = cljs.core.next(seq__63303_64028__$1);
var G__64039 = null;
var G__64040 = (0);
var G__64041 = (0);
seq__63303_64009 = G__64038;
chunk__63305_64010 = G__64039;
count__63306_64011 = G__64040;
i__63307_64012 = G__64041;
continue;
} else {
var G__64042 = cljs.core.next(seq__63303_64028__$1);
var G__64043 = null;
var G__64044 = (0);
var G__64045 = (0);
seq__63303_64009 = G__64042;
chunk__63305_64010 = G__64043;
count__63306_64011 = G__64044;
i__63307_64012 = G__64045;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64008);
}


var G__64048 = seq__63247_64002;
var G__64049 = chunk__63248_64003;
var G__64050 = count__63249_64004;
var G__64051 = (i__63250_64005 + (1));
seq__63247_64002 = G__64048;
chunk__63248_64003 = G__64049;
count__63249_64004 = G__64050;
i__63250_64005 = G__64051;
continue;
} else {
var temp__5735__auto___64052 = cljs.core.seq(seq__63247_64002);
if(temp__5735__auto___64052){
var seq__63247_64053__$1 = temp__5735__auto___64052;
if(cljs.core.chunked_seq_QMARK_(seq__63247_64053__$1)){
var c__4550__auto___64054 = cljs.core.chunk_first(seq__63247_64053__$1);
var G__64055 = cljs.core.chunk_rest(seq__63247_64053__$1);
var G__64056 = c__4550__auto___64054;
var G__64057 = cljs.core.count(c__4550__auto___64054);
var G__64058 = (0);
seq__63247_64002 = G__64055;
chunk__63248_64003 = G__64056;
count__63249_64004 = G__64057;
i__63250_64005 = G__64058;
continue;
} else {
var child_struct_64061 = cljs.core.first(seq__63247_64053__$1);
var children_64062 = shadow.dom.dom_node(child_struct_64061);
if(cljs.core.seq_QMARK_(children_64062)){
var seq__63320_64063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64062));
var chunk__63322_64064 = null;
var count__63323_64065 = (0);
var i__63324_64066 = (0);
while(true){
if((i__63324_64066 < count__63323_64065)){
var child_64067 = chunk__63322_64064.cljs$core$IIndexed$_nth$arity$2(null,i__63324_64066);
if(cljs.core.truth_(child_64067)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64067);


var G__64068 = seq__63320_64063;
var G__64069 = chunk__63322_64064;
var G__64070 = count__63323_64065;
var G__64071 = (i__63324_64066 + (1));
seq__63320_64063 = G__64068;
chunk__63322_64064 = G__64069;
count__63323_64065 = G__64070;
i__63324_64066 = G__64071;
continue;
} else {
var G__64072 = seq__63320_64063;
var G__64073 = chunk__63322_64064;
var G__64074 = count__63323_64065;
var G__64075 = (i__63324_64066 + (1));
seq__63320_64063 = G__64072;
chunk__63322_64064 = G__64073;
count__63323_64065 = G__64074;
i__63324_64066 = G__64075;
continue;
}
} else {
var temp__5735__auto___64076__$1 = cljs.core.seq(seq__63320_64063);
if(temp__5735__auto___64076__$1){
var seq__63320_64077__$1 = temp__5735__auto___64076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63320_64077__$1)){
var c__4550__auto___64078 = cljs.core.chunk_first(seq__63320_64077__$1);
var G__64079 = cljs.core.chunk_rest(seq__63320_64077__$1);
var G__64080 = c__4550__auto___64078;
var G__64081 = cljs.core.count(c__4550__auto___64078);
var G__64082 = (0);
seq__63320_64063 = G__64079;
chunk__63322_64064 = G__64080;
count__63323_64065 = G__64081;
i__63324_64066 = G__64082;
continue;
} else {
var child_64083 = cljs.core.first(seq__63320_64077__$1);
if(cljs.core.truth_(child_64083)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64083);


var G__64084 = cljs.core.next(seq__63320_64077__$1);
var G__64085 = null;
var G__64086 = (0);
var G__64087 = (0);
seq__63320_64063 = G__64084;
chunk__63322_64064 = G__64085;
count__63323_64065 = G__64086;
i__63324_64066 = G__64087;
continue;
} else {
var G__64088 = cljs.core.next(seq__63320_64077__$1);
var G__64089 = null;
var G__64090 = (0);
var G__64091 = (0);
seq__63320_64063 = G__64088;
chunk__63322_64064 = G__64089;
count__63323_64065 = G__64090;
i__63324_64066 = G__64091;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64062);
}


var G__64092 = cljs.core.next(seq__63247_64053__$1);
var G__64093 = null;
var G__64094 = (0);
var G__64095 = (0);
seq__63247_64002 = G__64092;
chunk__63248_64003 = G__64093;
count__63249_64004 = G__64094;
i__63250_64005 = G__64095;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__63339 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__63339);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__63346 = cljs.core.seq(node);
var chunk__63347 = null;
var count__63348 = (0);
var i__63349 = (0);
while(true){
if((i__63349 < count__63348)){
var n = chunk__63347.cljs$core$IIndexed$_nth$arity$2(null,i__63349);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64101 = seq__63346;
var G__64102 = chunk__63347;
var G__64103 = count__63348;
var G__64104 = (i__63349 + (1));
seq__63346 = G__64101;
chunk__63347 = G__64102;
count__63348 = G__64103;
i__63349 = G__64104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63346);
if(temp__5735__auto__){
var seq__63346__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63346__$1);
var G__64105 = cljs.core.chunk_rest(seq__63346__$1);
var G__64106 = c__4550__auto__;
var G__64107 = cljs.core.count(c__4550__auto__);
var G__64108 = (0);
seq__63346 = G__64105;
chunk__63347 = G__64106;
count__63348 = G__64107;
i__63349 = G__64108;
continue;
} else {
var n = cljs.core.first(seq__63346__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64111 = cljs.core.next(seq__63346__$1);
var G__64112 = null;
var G__64113 = (0);
var G__64114 = (0);
seq__63346 = G__64111;
chunk__63347 = G__64112;
count__63348 = G__64113;
i__63349 = G__64114;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__63368 = shadow.dom.dom_node(new$);
var G__63369 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__63368,G__63369);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__63371 = arguments.length;
switch (G__63371) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__63374 = arguments.length;
switch (G__63374) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__63386 = arguments.length;
switch (G__63386) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64124 = arguments.length;
var i__4731__auto___64125 = (0);
while(true){
if((i__4731__auto___64125 < len__4730__auto___64124)){
args__4736__auto__.push((arguments[i__4731__auto___64125]));

var G__64126 = (i__4731__auto___64125 + (1));
i__4731__auto___64125 = G__64126;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__63412_64127 = cljs.core.seq(nodes);
var chunk__63413_64128 = null;
var count__63414_64129 = (0);
var i__63415_64130 = (0);
while(true){
if((i__63415_64130 < count__63414_64129)){
var node_64136 = chunk__63413_64128.cljs$core$IIndexed$_nth$arity$2(null,i__63415_64130);
fragment.appendChild(shadow.dom._to_dom(node_64136));


var G__64138 = seq__63412_64127;
var G__64139 = chunk__63413_64128;
var G__64140 = count__63414_64129;
var G__64141 = (i__63415_64130 + (1));
seq__63412_64127 = G__64138;
chunk__63413_64128 = G__64139;
count__63414_64129 = G__64140;
i__63415_64130 = G__64141;
continue;
} else {
var temp__5735__auto___64142 = cljs.core.seq(seq__63412_64127);
if(temp__5735__auto___64142){
var seq__63412_64143__$1 = temp__5735__auto___64142;
if(cljs.core.chunked_seq_QMARK_(seq__63412_64143__$1)){
var c__4550__auto___64144 = cljs.core.chunk_first(seq__63412_64143__$1);
var G__64145 = cljs.core.chunk_rest(seq__63412_64143__$1);
var G__64146 = c__4550__auto___64144;
var G__64147 = cljs.core.count(c__4550__auto___64144);
var G__64148 = (0);
seq__63412_64127 = G__64145;
chunk__63413_64128 = G__64146;
count__63414_64129 = G__64147;
i__63415_64130 = G__64148;
continue;
} else {
var node_64149 = cljs.core.first(seq__63412_64143__$1);
fragment.appendChild(shadow.dom._to_dom(node_64149));


var G__64150 = cljs.core.next(seq__63412_64143__$1);
var G__64151 = null;
var G__64152 = (0);
var G__64153 = (0);
seq__63412_64127 = G__64150;
chunk__63413_64128 = G__64151;
count__63414_64129 = G__64152;
i__63415_64130 = G__64153;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq63406){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63406));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__63433_64154 = cljs.core.seq(scripts);
var chunk__63434_64155 = null;
var count__63435_64156 = (0);
var i__63436_64157 = (0);
while(true){
if((i__63436_64157 < count__63435_64156)){
var vec__63455_64158 = chunk__63434_64155.cljs$core$IIndexed$_nth$arity$2(null,i__63436_64157);
var script_tag_64159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63455_64158,(0),null);
var script_body_64160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63455_64158,(1),null);
eval(script_body_64160);


var G__64161 = seq__63433_64154;
var G__64162 = chunk__63434_64155;
var G__64163 = count__63435_64156;
var G__64164 = (i__63436_64157 + (1));
seq__63433_64154 = G__64161;
chunk__63434_64155 = G__64162;
count__63435_64156 = G__64163;
i__63436_64157 = G__64164;
continue;
} else {
var temp__5735__auto___64165 = cljs.core.seq(seq__63433_64154);
if(temp__5735__auto___64165){
var seq__63433_64166__$1 = temp__5735__auto___64165;
if(cljs.core.chunked_seq_QMARK_(seq__63433_64166__$1)){
var c__4550__auto___64167 = cljs.core.chunk_first(seq__63433_64166__$1);
var G__64168 = cljs.core.chunk_rest(seq__63433_64166__$1);
var G__64169 = c__4550__auto___64167;
var G__64170 = cljs.core.count(c__4550__auto___64167);
var G__64171 = (0);
seq__63433_64154 = G__64168;
chunk__63434_64155 = G__64169;
count__63435_64156 = G__64170;
i__63436_64157 = G__64171;
continue;
} else {
var vec__63459_64173 = cljs.core.first(seq__63433_64166__$1);
var script_tag_64174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63459_64173,(0),null);
var script_body_64175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63459_64173,(1),null);
eval(script_body_64175);


var G__64180 = cljs.core.next(seq__63433_64166__$1);
var G__64181 = null;
var G__64182 = (0);
var G__64183 = (0);
seq__63433_64154 = G__64180;
chunk__63434_64155 = G__64181;
count__63435_64156 = G__64182;
i__63436_64157 = G__64183;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__63464){
var vec__63466 = p__63464;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63466,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63466,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__63481 = shadow.dom.dom_node(el);
var G__63482 = cls;
return goog.dom.getAncestorByClass(G__63481,G__63482);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__63486 = arguments.length;
switch (G__63486) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__63489 = shadow.dom.dom_node(el);
var G__63490 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__63489,G__63490);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__63491 = shadow.dom.dom_node(el);
var G__63492 = cljs.core.name(tag);
var G__63493 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__63491,G__63492,G__63493);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__63496 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__63496);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__63499 = shadow.dom.dom_node(dom);
var G__63500 = value;
return goog.dom.forms.setValue(G__63499,G__63500);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__63506 = cljs.core.seq(style_keys);
var chunk__63507 = null;
var count__63508 = (0);
var i__63509 = (0);
while(true){
if((i__63509 < count__63508)){
var it = chunk__63507.cljs$core$IIndexed$_nth$arity$2(null,i__63509);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64190 = seq__63506;
var G__64191 = chunk__63507;
var G__64192 = count__63508;
var G__64193 = (i__63509 + (1));
seq__63506 = G__64190;
chunk__63507 = G__64191;
count__63508 = G__64192;
i__63509 = G__64193;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63506);
if(temp__5735__auto__){
var seq__63506__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63506__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63506__$1);
var G__64195 = cljs.core.chunk_rest(seq__63506__$1);
var G__64196 = c__4550__auto__;
var G__64197 = cljs.core.count(c__4550__auto__);
var G__64198 = (0);
seq__63506 = G__64195;
chunk__63507 = G__64196;
count__63508 = G__64197;
i__63509 = G__64198;
continue;
} else {
var it = cljs.core.first(seq__63506__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64200 = cljs.core.next(seq__63506__$1);
var G__64201 = null;
var G__64202 = (0);
var G__64203 = (0);
seq__63506 = G__64200;
chunk__63507 = G__64201;
count__63508 = G__64202;
i__63509 = G__64203;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63517,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63528 = k63517;
var G__63528__$1 = (((G__63528 instanceof cljs.core.Keyword))?G__63528.fqn:null);
switch (G__63528__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63517,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63534){
var vec__63536 = p__63534;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63536,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63536,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63516){
var self__ = this;
var G__63516__$1 = this;
return (new cljs.core.RecordIter((0),G__63516__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__63552 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__63552(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63521,other63522){
var self__ = this;
var this63521__$1 = this;
return (((!((other63522 == null)))) && ((this63521__$1.constructor === other63522.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63521__$1.x,other63522.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63521__$1.y,other63522.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63521__$1.__extmap,other63522.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63516){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__63557 = cljs.core.keyword_identical_QMARK_;
var expr__63558 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__63560 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__63561 = expr__63558;
return (pred__63557.cljs$core$IFn$_invoke$arity$2 ? pred__63557.cljs$core$IFn$_invoke$arity$2(G__63560,G__63561) : pred__63557.call(null,G__63560,G__63561));
})())){
return (new shadow.dom.Coordinate(G__63516,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__63562 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__63563 = expr__63558;
return (pred__63557.cljs$core$IFn$_invoke$arity$2 ? pred__63557.cljs$core$IFn$_invoke$arity$2(G__63562,G__63563) : pred__63557.call(null,G__63562,G__63563));
})())){
return (new shadow.dom.Coordinate(self__.x,G__63516,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63516),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63516){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__63516,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__63523){
var extmap__4424__auto__ = (function (){var G__63573 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63523,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__63523)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63573);
} else {
return G__63573;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__63523),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__63523),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__63579 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__63579);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__63581 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__63581);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__63582 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__63582);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63584,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63594 = k63584;
var G__63594__$1 = (((G__63594 instanceof cljs.core.Keyword))?G__63594.fqn:null);
switch (G__63594__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63584,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63599){
var vec__63600 = p__63599;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63583){
var self__ = this;
var G__63583__$1 = this;
return (new cljs.core.RecordIter((0),G__63583__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__63610 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__63610(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63585,other63586){
var self__ = this;
var this63585__$1 = this;
return (((!((other63586 == null)))) && ((this63585__$1.constructor === other63586.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63585__$1.w,other63586.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63585__$1.h,other63586.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63585__$1.__extmap,other63586.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63583){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__63618 = cljs.core.keyword_identical_QMARK_;
var expr__63619 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__63621 = new cljs.core.Keyword(null,"w","w",354169001);
var G__63622 = expr__63619;
return (pred__63618.cljs$core$IFn$_invoke$arity$2 ? pred__63618.cljs$core$IFn$_invoke$arity$2(G__63621,G__63622) : pred__63618.call(null,G__63621,G__63622));
})())){
return (new shadow.dom.Size(G__63583,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__63624 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__63625 = expr__63619;
return (pred__63618.cljs$core$IFn$_invoke$arity$2 ? pred__63618.cljs$core$IFn$_invoke$arity$2(G__63624,G__63625) : pred__63618.call(null,G__63624,G__63625));
})())){
return (new shadow.dom.Size(self__.w,G__63583,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63583),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63583){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__63583,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__63588){
var extmap__4424__auto__ = (function (){var G__63639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63588,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__63588)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63639);
} else {
return G__63639;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__63588),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__63588),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__63646 = shadow.dom.dom_node(el);
return goog.style.getSize(G__63646);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__64241 = (i + (1));
var G__64242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__64241;
ret = G__64242;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63668){
var vec__63670 = p__63668;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__63678 = arguments.length;
switch (G__63678) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__63683_64245 = new_node;
var G__63684_64246 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__63683_64245,G__63684_64246);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__63687_64247 = new_node;
var G__63688_64248 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__63687_64247,G__63688_64248);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__64249 = ps;
var G__64250 = (i + (1));
el__$1 = G__64249;
i = G__64250;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__63691 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__63691);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__63696 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__63696);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__63697 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__63697);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__63698 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63698,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63698,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63698,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__63703_64253 = cljs.core.seq(props);
var chunk__63704_64254 = null;
var count__63705_64255 = (0);
var i__63706_64256 = (0);
while(true){
if((i__63706_64256 < count__63705_64255)){
var vec__63721_64257 = chunk__63704_64254.cljs$core$IIndexed$_nth$arity$2(null,i__63706_64256);
var k_64258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63721_64257,(0),null);
var v_64259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63721_64257,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_64258);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64258),v_64259);


var G__64260 = seq__63703_64253;
var G__64261 = chunk__63704_64254;
var G__64262 = count__63705_64255;
var G__64263 = (i__63706_64256 + (1));
seq__63703_64253 = G__64260;
chunk__63704_64254 = G__64261;
count__63705_64255 = G__64262;
i__63706_64256 = G__64263;
continue;
} else {
var temp__5735__auto___64264 = cljs.core.seq(seq__63703_64253);
if(temp__5735__auto___64264){
var seq__63703_64265__$1 = temp__5735__auto___64264;
if(cljs.core.chunked_seq_QMARK_(seq__63703_64265__$1)){
var c__4550__auto___64267 = cljs.core.chunk_first(seq__63703_64265__$1);
var G__64268 = cljs.core.chunk_rest(seq__63703_64265__$1);
var G__64269 = c__4550__auto___64267;
var G__64270 = cljs.core.count(c__4550__auto___64267);
var G__64271 = (0);
seq__63703_64253 = G__64268;
chunk__63704_64254 = G__64269;
count__63705_64255 = G__64270;
i__63706_64256 = G__64271;
continue;
} else {
var vec__63731_64272 = cljs.core.first(seq__63703_64265__$1);
var k_64273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63731_64272,(0),null);
var v_64274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63731_64272,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_64273);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64273),v_64274);


var G__64275 = cljs.core.next(seq__63703_64265__$1);
var G__64276 = null;
var G__64277 = (0);
var G__64278 = (0);
seq__63703_64253 = G__64275;
chunk__63704_64254 = G__64276;
count__63705_64255 = G__64277;
i__63706_64256 = G__64278;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__63740 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63740,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63740,(1),null);
var seq__63744_64279 = cljs.core.seq(node_children);
var chunk__63746_64280 = null;
var count__63747_64281 = (0);
var i__63748_64282 = (0);
while(true){
if((i__63748_64282 < count__63747_64281)){
var child_struct_64283 = chunk__63746_64280.cljs$core$IIndexed$_nth$arity$2(null,i__63748_64282);
if((!((child_struct_64283 == null)))){
if(typeof child_struct_64283 === 'string'){
var text_64284 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64284),child_struct_64283].join(''));
} else {
var children_64285 = shadow.dom.svg_node(child_struct_64283);
if(cljs.core.seq_QMARK_(children_64285)){
var seq__63783_64286 = cljs.core.seq(children_64285);
var chunk__63789_64287 = null;
var count__63790_64288 = (0);
var i__63791_64289 = (0);
while(true){
if((i__63791_64289 < count__63790_64288)){
var child_64290 = chunk__63789_64287.cljs$core$IIndexed$_nth$arity$2(null,i__63791_64289);
if(cljs.core.truth_(child_64290)){
node.appendChild(child_64290);


var G__64291 = seq__63783_64286;
var G__64292 = chunk__63789_64287;
var G__64293 = count__63790_64288;
var G__64294 = (i__63791_64289 + (1));
seq__63783_64286 = G__64291;
chunk__63789_64287 = G__64292;
count__63790_64288 = G__64293;
i__63791_64289 = G__64294;
continue;
} else {
var G__64295 = seq__63783_64286;
var G__64296 = chunk__63789_64287;
var G__64297 = count__63790_64288;
var G__64298 = (i__63791_64289 + (1));
seq__63783_64286 = G__64295;
chunk__63789_64287 = G__64296;
count__63790_64288 = G__64297;
i__63791_64289 = G__64298;
continue;
}
} else {
var temp__5735__auto___64299 = cljs.core.seq(seq__63783_64286);
if(temp__5735__auto___64299){
var seq__63783_64300__$1 = temp__5735__auto___64299;
if(cljs.core.chunked_seq_QMARK_(seq__63783_64300__$1)){
var c__4550__auto___64301 = cljs.core.chunk_first(seq__63783_64300__$1);
var G__64302 = cljs.core.chunk_rest(seq__63783_64300__$1);
var G__64303 = c__4550__auto___64301;
var G__64304 = cljs.core.count(c__4550__auto___64301);
var G__64305 = (0);
seq__63783_64286 = G__64302;
chunk__63789_64287 = G__64303;
count__63790_64288 = G__64304;
i__63791_64289 = G__64305;
continue;
} else {
var child_64306 = cljs.core.first(seq__63783_64300__$1);
if(cljs.core.truth_(child_64306)){
node.appendChild(child_64306);


var G__64308 = cljs.core.next(seq__63783_64300__$1);
var G__64309 = null;
var G__64310 = (0);
var G__64311 = (0);
seq__63783_64286 = G__64308;
chunk__63789_64287 = G__64309;
count__63790_64288 = G__64310;
i__63791_64289 = G__64311;
continue;
} else {
var G__64312 = cljs.core.next(seq__63783_64300__$1);
var G__64313 = null;
var G__64314 = (0);
var G__64315 = (0);
seq__63783_64286 = G__64312;
chunk__63789_64287 = G__64313;
count__63790_64288 = G__64314;
i__63791_64289 = G__64315;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64285);
}
}


var G__64317 = seq__63744_64279;
var G__64318 = chunk__63746_64280;
var G__64319 = count__63747_64281;
var G__64320 = (i__63748_64282 + (1));
seq__63744_64279 = G__64317;
chunk__63746_64280 = G__64318;
count__63747_64281 = G__64319;
i__63748_64282 = G__64320;
continue;
} else {
var G__64321 = seq__63744_64279;
var G__64322 = chunk__63746_64280;
var G__64323 = count__63747_64281;
var G__64324 = (i__63748_64282 + (1));
seq__63744_64279 = G__64321;
chunk__63746_64280 = G__64322;
count__63747_64281 = G__64323;
i__63748_64282 = G__64324;
continue;
}
} else {
var temp__5735__auto___64325 = cljs.core.seq(seq__63744_64279);
if(temp__5735__auto___64325){
var seq__63744_64326__$1 = temp__5735__auto___64325;
if(cljs.core.chunked_seq_QMARK_(seq__63744_64326__$1)){
var c__4550__auto___64327 = cljs.core.chunk_first(seq__63744_64326__$1);
var G__64328 = cljs.core.chunk_rest(seq__63744_64326__$1);
var G__64329 = c__4550__auto___64327;
var G__64330 = cljs.core.count(c__4550__auto___64327);
var G__64331 = (0);
seq__63744_64279 = G__64328;
chunk__63746_64280 = G__64329;
count__63747_64281 = G__64330;
i__63748_64282 = G__64331;
continue;
} else {
var child_struct_64332 = cljs.core.first(seq__63744_64326__$1);
if((!((child_struct_64332 == null)))){
if(typeof child_struct_64332 === 'string'){
var text_64333 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64333),child_struct_64332].join(''));
} else {
var children_64334 = shadow.dom.svg_node(child_struct_64332);
if(cljs.core.seq_QMARK_(children_64334)){
var seq__63809_64335 = cljs.core.seq(children_64334);
var chunk__63811_64336 = null;
var count__63812_64337 = (0);
var i__63813_64338 = (0);
while(true){
if((i__63813_64338 < count__63812_64337)){
var child_64339 = chunk__63811_64336.cljs$core$IIndexed$_nth$arity$2(null,i__63813_64338);
if(cljs.core.truth_(child_64339)){
node.appendChild(child_64339);


var G__64340 = seq__63809_64335;
var G__64341 = chunk__63811_64336;
var G__64342 = count__63812_64337;
var G__64343 = (i__63813_64338 + (1));
seq__63809_64335 = G__64340;
chunk__63811_64336 = G__64341;
count__63812_64337 = G__64342;
i__63813_64338 = G__64343;
continue;
} else {
var G__64344 = seq__63809_64335;
var G__64345 = chunk__63811_64336;
var G__64346 = count__63812_64337;
var G__64347 = (i__63813_64338 + (1));
seq__63809_64335 = G__64344;
chunk__63811_64336 = G__64345;
count__63812_64337 = G__64346;
i__63813_64338 = G__64347;
continue;
}
} else {
var temp__5735__auto___64349__$1 = cljs.core.seq(seq__63809_64335);
if(temp__5735__auto___64349__$1){
var seq__63809_64350__$1 = temp__5735__auto___64349__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63809_64350__$1)){
var c__4550__auto___64351 = cljs.core.chunk_first(seq__63809_64350__$1);
var G__64352 = cljs.core.chunk_rest(seq__63809_64350__$1);
var G__64353 = c__4550__auto___64351;
var G__64354 = cljs.core.count(c__4550__auto___64351);
var G__64355 = (0);
seq__63809_64335 = G__64352;
chunk__63811_64336 = G__64353;
count__63812_64337 = G__64354;
i__63813_64338 = G__64355;
continue;
} else {
var child_64356 = cljs.core.first(seq__63809_64350__$1);
if(cljs.core.truth_(child_64356)){
node.appendChild(child_64356);


var G__64357 = cljs.core.next(seq__63809_64350__$1);
var G__64358 = null;
var G__64359 = (0);
var G__64360 = (0);
seq__63809_64335 = G__64357;
chunk__63811_64336 = G__64358;
count__63812_64337 = G__64359;
i__63813_64338 = G__64360;
continue;
} else {
var G__64361 = cljs.core.next(seq__63809_64350__$1);
var G__64362 = null;
var G__64363 = (0);
var G__64364 = (0);
seq__63809_64335 = G__64361;
chunk__63811_64336 = G__64362;
count__63812_64337 = G__64363;
i__63813_64338 = G__64364;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64334);
}
}


var G__64365 = cljs.core.next(seq__63744_64326__$1);
var G__64366 = null;
var G__64367 = (0);
var G__64368 = (0);
seq__63744_64279 = G__64365;
chunk__63746_64280 = G__64366;
count__63747_64281 = G__64367;
i__63748_64282 = G__64368;
continue;
} else {
var G__64369 = cljs.core.next(seq__63744_64326__$1);
var G__64370 = null;
var G__64371 = (0);
var G__64372 = (0);
seq__63744_64279 = G__64369;
chunk__63746_64280 = G__64370;
count__63747_64281 = G__64371;
i__63748_64282 = G__64372;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__63820_64377 = shadow.dom._to_svg;
var G__63821_64378 = "string";
var G__63822_64379 = ((function (G__63820_64377,G__63821_64378){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__63820_64377,G__63821_64378))
;
goog.object.set(G__63820_64377,G__63821_64378,G__63822_64379);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__63829_64381 = shadow.dom._to_svg;
var G__63830_64382 = "null";
var G__63831_64383 = ((function (G__63829_64381,G__63830_64382){
return (function (_){
return null;
});})(G__63829_64381,G__63830_64382))
;
goog.object.set(G__63829_64381,G__63830_64382,G__63831_64383);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64384 = arguments.length;
var i__4731__auto___64385 = (0);
while(true){
if((i__4731__auto___64385 < len__4730__auto___64384)){
args__4736__auto__.push((arguments[i__4731__auto___64385]));

var G__64386 = (i__4731__auto___64385 + (1));
i__4731__auto___64385 = G__64386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq63833){
var G__63834 = cljs.core.first(seq63833);
var seq63833__$1 = cljs.core.next(seq63833);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63834,seq63833__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__63841 = arguments.length;
switch (G__63841) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__63849_64393 = shadow.dom.dom_node(el);
var G__63850_64394 = cljs.core.name(event);
var G__63851_64395 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63849_64393,G__63850_64394,G__63851_64395) : shadow.dom.dom_listen.call(null,G__63849_64393,G__63850_64394,G__63851_64395));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__61315__auto___64396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61315__auto___64396,buf,chan,event_fn){
return (function (){
var f__61316__auto__ = (function (){var switch__61214__auto__ = ((function (c__61315__auto___64396,buf,chan,event_fn){
return (function (state_63859){
var state_val_63860 = (state_63859[(1)]);
if((state_val_63860 === (1))){
var state_63859__$1 = state_63859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63859__$1,(2),once_or_cleanup);
} else {
if((state_val_63860 === (2))){
var inst_63855 = (state_63859[(2)]);
var inst_63856 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_63859__$1 = (function (){var statearr_63866 = state_63859;
(statearr_63866[(7)] = inst_63855);

return statearr_63866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63859__$1,inst_63856);
} else {
return null;
}
}
});})(c__61315__auto___64396,buf,chan,event_fn))
;
return ((function (switch__61214__auto__,c__61315__auto___64396,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__61215__auto__ = null;
var shadow$dom$state_machine__61215__auto____0 = (function (){
var statearr_63868 = [null,null,null,null,null,null,null,null];
(statearr_63868[(0)] = shadow$dom$state_machine__61215__auto__);

(statearr_63868[(1)] = (1));

return statearr_63868;
});
var shadow$dom$state_machine__61215__auto____1 = (function (state_63859){
while(true){
var ret_value__61216__auto__ = (function (){try{while(true){
var result__61217__auto__ = switch__61214__auto__(state_63859);
if(cljs.core.keyword_identical_QMARK_(result__61217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61217__auto__;
}
break;
}
}catch (e63871){if((e63871 instanceof Object)){
var ex__61218__auto__ = e63871;
var statearr_63873_64398 = state_63859;
(statearr_63873_64398[(5)] = ex__61218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64399 = state_63859;
state_63859 = G__64399;
continue;
} else {
return ret_value__61216__auto__;
}
break;
}
});
shadow$dom$state_machine__61215__auto__ = function(state_63859){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61215__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61215__auto____1.call(this,state_63859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61215__auto____0;
shadow$dom$state_machine__61215__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61215__auto____1;
return shadow$dom$state_machine__61215__auto__;
})()
;})(switch__61214__auto__,c__61315__auto___64396,buf,chan,event_fn))
})();
var state__61317__auto__ = (function (){var statearr_63874 = (f__61316__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61316__auto__.cljs$core$IFn$_invoke$arity$0() : f__61316__auto__.call(null));
(statearr_63874[(6)] = c__61315__auto___64396);

return statearr_63874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61317__auto__);
});})(c__61315__auto___64396,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
