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
return cljs.core.cons((coll[idx]),(function (){var G__63457 = coll;
var G__63458 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__63457,G__63458) : shadow.dom.lazy_native_coll_seq.call(null,G__63457,G__63458));
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
var G__63480 = arguments.length;
switch (G__63480) {
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
var G__63487 = arguments.length;
switch (G__63487) {
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
var G__63491 = arguments.length;
switch (G__63491) {
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
var G__63499 = arguments.length;
switch (G__63499) {
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
var G__63508 = arguments.length;
switch (G__63508) {
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
var G__63510 = document;
var G__63511 = shadow.dom.dom_node(el);
return goog.dom.contains(G__63510,G__63511);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__63513 = shadow.dom.dom_node(parent);
var G__63514 = shadow.dom.dom_node(el);
return goog.dom.contains(G__63513,G__63514);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__63516 = shadow.dom.dom_node(el);
var G__63517 = cls;
return goog.dom.classlist.add(G__63516,G__63517);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__63519 = shadow.dom.dom_node(el);
var G__63520 = cls;
return goog.dom.classlist.remove(G__63519,G__63520);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__63525 = arguments.length;
switch (G__63525) {
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
var G__63529 = shadow.dom.dom_node(el);
var G__63530 = cls;
return goog.dom.classlist.toggle(G__63529,G__63530);
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
}catch (e63536){if((e63536 instanceof Object)){
var e = e63536;
return console.log("didnt support attachEvent",el,e);
} else {
throw e63536;

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
var seq__63540 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__63541 = null;
var count__63542 = (0);
var i__63543 = (0);
while(true){
if((i__63543 < count__63542)){
var el = chunk__63541.cljs$core$IIndexed$_nth$arity$2(null,i__63543);
var handler_64378__$1 = ((function (seq__63540,chunk__63541,count__63542,i__63543,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63540,chunk__63541,count__63542,i__63543,el))
;
var G__63550_64380 = el;
var G__63551_64381 = cljs.core.name(ev);
var G__63552_64382 = handler_64378__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63550_64380,G__63551_64381,G__63552_64382) : shadow.dom.dom_listen.call(null,G__63550_64380,G__63551_64381,G__63552_64382));


var G__64383 = seq__63540;
var G__64384 = chunk__63541;
var G__64385 = count__63542;
var G__64386 = (i__63543 + (1));
seq__63540 = G__64383;
chunk__63541 = G__64384;
count__63542 = G__64385;
i__63543 = G__64386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63540);
if(temp__5735__auto__){
var seq__63540__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63540__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63540__$1);
var G__64389 = cljs.core.chunk_rest(seq__63540__$1);
var G__64390 = c__4550__auto__;
var G__64391 = cljs.core.count(c__4550__auto__);
var G__64392 = (0);
seq__63540 = G__64389;
chunk__63541 = G__64390;
count__63542 = G__64391;
i__63543 = G__64392;
continue;
} else {
var el = cljs.core.first(seq__63540__$1);
var handler_64394__$1 = ((function (seq__63540,chunk__63541,count__63542,i__63543,el,seq__63540__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63540,chunk__63541,count__63542,i__63543,el,seq__63540__$1,temp__5735__auto__))
;
var G__63553_64396 = el;
var G__63554_64397 = cljs.core.name(ev);
var G__63555_64398 = handler_64394__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63553_64396,G__63554_64397,G__63555_64398) : shadow.dom.dom_listen.call(null,G__63553_64396,G__63554_64397,G__63555_64398));


var G__64399 = cljs.core.next(seq__63540__$1);
var G__64400 = null;
var G__64401 = (0);
var G__64402 = (0);
seq__63540 = G__64399;
chunk__63541 = G__64400;
count__63542 = G__64401;
i__63543 = G__64402;
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
var G__63557 = arguments.length;
switch (G__63557) {
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
var G__63558 = shadow.dom.dom_node(el);
var G__63559 = cljs.core.name(ev);
var G__63560 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63558,G__63559,G__63560) : shadow.dom.dom_listen.call(null,G__63558,G__63559,G__63560));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__63562 = shadow.dom.dom_node(el);
var G__63563 = cljs.core.name(ev);
var G__63564 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__63562,G__63563,G__63564) : shadow.dom.dom_listen_remove.call(null,G__63562,G__63563,G__63564));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__63568 = cljs.core.seq(events);
var chunk__63569 = null;
var count__63570 = (0);
var i__63571 = (0);
while(true){
if((i__63571 < count__63570)){
var vec__63581 = chunk__63569.cljs$core$IIndexed$_nth$arity$2(null,i__63571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63581,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64410 = seq__63568;
var G__64411 = chunk__63569;
var G__64412 = count__63570;
var G__64413 = (i__63571 + (1));
seq__63568 = G__64410;
chunk__63569 = G__64411;
count__63570 = G__64412;
i__63571 = G__64413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63568);
if(temp__5735__auto__){
var seq__63568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63568__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63568__$1);
var G__64416 = cljs.core.chunk_rest(seq__63568__$1);
var G__64417 = c__4550__auto__;
var G__64418 = cljs.core.count(c__4550__auto__);
var G__64419 = (0);
seq__63568 = G__64416;
chunk__63569 = G__64417;
count__63570 = G__64418;
i__63571 = G__64419;
continue;
} else {
var vec__63585 = cljs.core.first(seq__63568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63585,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64422 = cljs.core.next(seq__63568__$1);
var G__64423 = null;
var G__64424 = (0);
var G__64425 = (0);
seq__63568 = G__64422;
chunk__63569 = G__64423;
count__63570 = G__64424;
i__63571 = G__64425;
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
var seq__63591 = cljs.core.seq(styles);
var chunk__63592 = null;
var count__63593 = (0);
var i__63594 = (0);
while(true){
if((i__63594 < count__63593)){
var vec__63610 = chunk__63592.cljs$core$IIndexed$_nth$arity$2(null,i__63594);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(1),null);
var G__63613_64426 = dom;
var G__63614_64427 = cljs.core.name(k);
var G__63615_64428 = (((v == null))?"":v);
goog.style.setStyle(G__63613_64426,G__63614_64427,G__63615_64428);


var G__64429 = seq__63591;
var G__64430 = chunk__63592;
var G__64431 = count__63593;
var G__64432 = (i__63594 + (1));
seq__63591 = G__64429;
chunk__63592 = G__64430;
count__63593 = G__64431;
i__63594 = G__64432;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63591);
if(temp__5735__auto__){
var seq__63591__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63591__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63591__$1);
var G__64435 = cljs.core.chunk_rest(seq__63591__$1);
var G__64436 = c__4550__auto__;
var G__64437 = cljs.core.count(c__4550__auto__);
var G__64438 = (0);
seq__63591 = G__64435;
chunk__63592 = G__64436;
count__63593 = G__64437;
i__63594 = G__64438;
continue;
} else {
var vec__63620 = cljs.core.first(seq__63591__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63620,(1),null);
var G__63626_64439 = dom;
var G__63627_64440 = cljs.core.name(k);
var G__63628_64441 = (((v == null))?"":v);
goog.style.setStyle(G__63626_64439,G__63627_64440,G__63628_64441);


var G__64442 = cljs.core.next(seq__63591__$1);
var G__64443 = null;
var G__64444 = (0);
var G__64445 = (0);
seq__63591 = G__64442;
chunk__63592 = G__64443;
count__63593 = G__64444;
i__63594 = G__64445;
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
var G__63633_64447 = key;
var G__63633_64448__$1 = (((G__63633_64447 instanceof cljs.core.Keyword))?G__63633_64447.fqn:null);
switch (G__63633_64448__$1) {
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
var ks_64452 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_64452,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_64452,"aria-");
}
})())){
el.setAttribute(ks_64452,value);
} else {
(el[ks_64452] = value);
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
var G__63651 = shadow.dom.dom_node(el);
var G__63652 = cls;
return goog.dom.classlist.contains(G__63651,G__63652);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__63663){
var map__63664 = p__63663;
var map__63664__$1 = (((((!((map__63664 == null))))?(((((map__63664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63664):map__63664);
var props = map__63664__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63664__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__63670 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__63673 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__63673,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__63673;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__63684 = arguments.length;
switch (G__63684) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__63695){
var vec__63696 = p__63695;
var seq__63697 = cljs.core.seq(vec__63696);
var first__63698 = cljs.core.first(seq__63697);
var seq__63697__$1 = cljs.core.next(seq__63697);
var nn = first__63698;
var first__63698__$1 = cljs.core.first(seq__63697__$1);
var seq__63697__$2 = cljs.core.next(seq__63697__$1);
var np = first__63698__$1;
var nc = seq__63697__$2;
var node = vec__63696;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63699 = nn;
var G__63700 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63699,G__63700) : create_fn.call(null,G__63699,G__63700));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63701 = nn;
var G__63702 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63701,G__63702) : create_fn.call(null,G__63701,G__63702));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__63707 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63707,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63707,(1),null);
var seq__63711_64467 = cljs.core.seq(node_children);
var chunk__63712_64468 = null;
var count__63713_64469 = (0);
var i__63714_64470 = (0);
while(true){
if((i__63714_64470 < count__63713_64469)){
var child_struct_64471 = chunk__63712_64468.cljs$core$IIndexed$_nth$arity$2(null,i__63714_64470);
var children_64472 = shadow.dom.dom_node(child_struct_64471);
if(cljs.core.seq_QMARK_(children_64472)){
var seq__63739_64473 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64472));
var chunk__63742_64474 = null;
var count__63743_64475 = (0);
var i__63744_64476 = (0);
while(true){
if((i__63744_64476 < count__63743_64475)){
var child_64477 = chunk__63742_64474.cljs$core$IIndexed$_nth$arity$2(null,i__63744_64476);
if(cljs.core.truth_(child_64477)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64477);


var G__64478 = seq__63739_64473;
var G__64479 = chunk__63742_64474;
var G__64480 = count__63743_64475;
var G__64481 = (i__63744_64476 + (1));
seq__63739_64473 = G__64478;
chunk__63742_64474 = G__64479;
count__63743_64475 = G__64480;
i__63744_64476 = G__64481;
continue;
} else {
var G__64482 = seq__63739_64473;
var G__64483 = chunk__63742_64474;
var G__64484 = count__63743_64475;
var G__64485 = (i__63744_64476 + (1));
seq__63739_64473 = G__64482;
chunk__63742_64474 = G__64483;
count__63743_64475 = G__64484;
i__63744_64476 = G__64485;
continue;
}
} else {
var temp__5735__auto___64486 = cljs.core.seq(seq__63739_64473);
if(temp__5735__auto___64486){
var seq__63739_64487__$1 = temp__5735__auto___64486;
if(cljs.core.chunked_seq_QMARK_(seq__63739_64487__$1)){
var c__4550__auto___64488 = cljs.core.chunk_first(seq__63739_64487__$1);
var G__64489 = cljs.core.chunk_rest(seq__63739_64487__$1);
var G__64490 = c__4550__auto___64488;
var G__64491 = cljs.core.count(c__4550__auto___64488);
var G__64492 = (0);
seq__63739_64473 = G__64489;
chunk__63742_64474 = G__64490;
count__63743_64475 = G__64491;
i__63744_64476 = G__64492;
continue;
} else {
var child_64493 = cljs.core.first(seq__63739_64487__$1);
if(cljs.core.truth_(child_64493)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64493);


var G__64494 = cljs.core.next(seq__63739_64487__$1);
var G__64495 = null;
var G__64496 = (0);
var G__64497 = (0);
seq__63739_64473 = G__64494;
chunk__63742_64474 = G__64495;
count__63743_64475 = G__64496;
i__63744_64476 = G__64497;
continue;
} else {
var G__64499 = cljs.core.next(seq__63739_64487__$1);
var G__64500 = null;
var G__64501 = (0);
var G__64502 = (0);
seq__63739_64473 = G__64499;
chunk__63742_64474 = G__64500;
count__63743_64475 = G__64501;
i__63744_64476 = G__64502;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64472);
}


var G__64504 = seq__63711_64467;
var G__64505 = chunk__63712_64468;
var G__64506 = count__63713_64469;
var G__64507 = (i__63714_64470 + (1));
seq__63711_64467 = G__64504;
chunk__63712_64468 = G__64505;
count__63713_64469 = G__64506;
i__63714_64470 = G__64507;
continue;
} else {
var temp__5735__auto___64510 = cljs.core.seq(seq__63711_64467);
if(temp__5735__auto___64510){
var seq__63711_64511__$1 = temp__5735__auto___64510;
if(cljs.core.chunked_seq_QMARK_(seq__63711_64511__$1)){
var c__4550__auto___64512 = cljs.core.chunk_first(seq__63711_64511__$1);
var G__64513 = cljs.core.chunk_rest(seq__63711_64511__$1);
var G__64514 = c__4550__auto___64512;
var G__64515 = cljs.core.count(c__4550__auto___64512);
var G__64516 = (0);
seq__63711_64467 = G__64513;
chunk__63712_64468 = G__64514;
count__63713_64469 = G__64515;
i__63714_64470 = G__64516;
continue;
} else {
var child_struct_64517 = cljs.core.first(seq__63711_64511__$1);
var children_64518 = shadow.dom.dom_node(child_struct_64517);
if(cljs.core.seq_QMARK_(children_64518)){
var seq__63758_64519 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64518));
var chunk__63760_64520 = null;
var count__63761_64521 = (0);
var i__63762_64522 = (0);
while(true){
if((i__63762_64522 < count__63761_64521)){
var child_64523 = chunk__63760_64520.cljs$core$IIndexed$_nth$arity$2(null,i__63762_64522);
if(cljs.core.truth_(child_64523)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64523);


var G__64525 = seq__63758_64519;
var G__64526 = chunk__63760_64520;
var G__64527 = count__63761_64521;
var G__64528 = (i__63762_64522 + (1));
seq__63758_64519 = G__64525;
chunk__63760_64520 = G__64526;
count__63761_64521 = G__64527;
i__63762_64522 = G__64528;
continue;
} else {
var G__64529 = seq__63758_64519;
var G__64530 = chunk__63760_64520;
var G__64531 = count__63761_64521;
var G__64532 = (i__63762_64522 + (1));
seq__63758_64519 = G__64529;
chunk__63760_64520 = G__64530;
count__63761_64521 = G__64531;
i__63762_64522 = G__64532;
continue;
}
} else {
var temp__5735__auto___64533__$1 = cljs.core.seq(seq__63758_64519);
if(temp__5735__auto___64533__$1){
var seq__63758_64535__$1 = temp__5735__auto___64533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63758_64535__$1)){
var c__4550__auto___64536 = cljs.core.chunk_first(seq__63758_64535__$1);
var G__64537 = cljs.core.chunk_rest(seq__63758_64535__$1);
var G__64538 = c__4550__auto___64536;
var G__64539 = cljs.core.count(c__4550__auto___64536);
var G__64540 = (0);
seq__63758_64519 = G__64537;
chunk__63760_64520 = G__64538;
count__63761_64521 = G__64539;
i__63762_64522 = G__64540;
continue;
} else {
var child_64543 = cljs.core.first(seq__63758_64535__$1);
if(cljs.core.truth_(child_64543)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64543);


var G__64544 = cljs.core.next(seq__63758_64535__$1);
var G__64545 = null;
var G__64546 = (0);
var G__64547 = (0);
seq__63758_64519 = G__64544;
chunk__63760_64520 = G__64545;
count__63761_64521 = G__64546;
i__63762_64522 = G__64547;
continue;
} else {
var G__64548 = cljs.core.next(seq__63758_64535__$1);
var G__64549 = null;
var G__64550 = (0);
var G__64551 = (0);
seq__63758_64519 = G__64548;
chunk__63760_64520 = G__64549;
count__63761_64521 = G__64550;
i__63762_64522 = G__64551;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64518);
}


var G__64552 = cljs.core.next(seq__63711_64511__$1);
var G__64553 = null;
var G__64554 = (0);
var G__64555 = (0);
seq__63711_64467 = G__64552;
chunk__63712_64468 = G__64553;
count__63713_64469 = G__64554;
i__63714_64470 = G__64555;
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
var G__63783 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__63783);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__63792 = cljs.core.seq(node);
var chunk__63793 = null;
var count__63794 = (0);
var i__63795 = (0);
while(true){
if((i__63795 < count__63794)){
var n = chunk__63793.cljs$core$IIndexed$_nth$arity$2(null,i__63795);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64559 = seq__63792;
var G__64560 = chunk__63793;
var G__64561 = count__63794;
var G__64562 = (i__63795 + (1));
seq__63792 = G__64559;
chunk__63793 = G__64560;
count__63794 = G__64561;
i__63795 = G__64562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63792);
if(temp__5735__auto__){
var seq__63792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63792__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63792__$1);
var G__64564 = cljs.core.chunk_rest(seq__63792__$1);
var G__64565 = c__4550__auto__;
var G__64566 = cljs.core.count(c__4550__auto__);
var G__64567 = (0);
seq__63792 = G__64564;
chunk__63793 = G__64565;
count__63794 = G__64566;
i__63795 = G__64567;
continue;
} else {
var n = cljs.core.first(seq__63792__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64569 = cljs.core.next(seq__63792__$1);
var G__64570 = null;
var G__64571 = (0);
var G__64572 = (0);
seq__63792 = G__64569;
chunk__63793 = G__64570;
count__63794 = G__64571;
i__63795 = G__64572;
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
var G__63811 = shadow.dom.dom_node(new$);
var G__63812 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__63811,G__63812);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__63818 = arguments.length;
switch (G__63818) {
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
var G__63826 = arguments.length;
switch (G__63826) {
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
var G__63851 = arguments.length;
switch (G__63851) {
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
var len__4730__auto___64587 = arguments.length;
var i__4731__auto___64588 = (0);
while(true){
if((i__4731__auto___64588 < len__4730__auto___64587)){
args__4736__auto__.push((arguments[i__4731__auto___64588]));

var G__64589 = (i__4731__auto___64588 + (1));
i__4731__auto___64588 = G__64589;
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
var seq__63889_64592 = cljs.core.seq(nodes);
var chunk__63890_64593 = null;
var count__63891_64594 = (0);
var i__63892_64595 = (0);
while(true){
if((i__63892_64595 < count__63891_64594)){
var node_64596 = chunk__63890_64593.cljs$core$IIndexed$_nth$arity$2(null,i__63892_64595);
fragment.appendChild(shadow.dom._to_dom(node_64596));


var G__64597 = seq__63889_64592;
var G__64598 = chunk__63890_64593;
var G__64599 = count__63891_64594;
var G__64600 = (i__63892_64595 + (1));
seq__63889_64592 = G__64597;
chunk__63890_64593 = G__64598;
count__63891_64594 = G__64599;
i__63892_64595 = G__64600;
continue;
} else {
var temp__5735__auto___64601 = cljs.core.seq(seq__63889_64592);
if(temp__5735__auto___64601){
var seq__63889_64602__$1 = temp__5735__auto___64601;
if(cljs.core.chunked_seq_QMARK_(seq__63889_64602__$1)){
var c__4550__auto___64603 = cljs.core.chunk_first(seq__63889_64602__$1);
var G__64604 = cljs.core.chunk_rest(seq__63889_64602__$1);
var G__64605 = c__4550__auto___64603;
var G__64606 = cljs.core.count(c__4550__auto___64603);
var G__64607 = (0);
seq__63889_64592 = G__64604;
chunk__63890_64593 = G__64605;
count__63891_64594 = G__64606;
i__63892_64595 = G__64607;
continue;
} else {
var node_64608 = cljs.core.first(seq__63889_64602__$1);
fragment.appendChild(shadow.dom._to_dom(node_64608));


var G__64609 = cljs.core.next(seq__63889_64602__$1);
var G__64610 = null;
var G__64611 = (0);
var G__64612 = (0);
seq__63889_64592 = G__64609;
chunk__63890_64593 = G__64610;
count__63891_64594 = G__64611;
i__63892_64595 = G__64612;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq63886){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63886));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__63900_64613 = cljs.core.seq(scripts);
var chunk__63901_64614 = null;
var count__63902_64615 = (0);
var i__63903_64616 = (0);
while(true){
if((i__63903_64616 < count__63902_64615)){
var vec__63912_64617 = chunk__63901_64614.cljs$core$IIndexed$_nth$arity$2(null,i__63903_64616);
var script_tag_64618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63912_64617,(0),null);
var script_body_64619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63912_64617,(1),null);
eval(script_body_64619);


var G__64623 = seq__63900_64613;
var G__64624 = chunk__63901_64614;
var G__64625 = count__63902_64615;
var G__64626 = (i__63903_64616 + (1));
seq__63900_64613 = G__64623;
chunk__63901_64614 = G__64624;
count__63902_64615 = G__64625;
i__63903_64616 = G__64626;
continue;
} else {
var temp__5735__auto___64627 = cljs.core.seq(seq__63900_64613);
if(temp__5735__auto___64627){
var seq__63900_64628__$1 = temp__5735__auto___64627;
if(cljs.core.chunked_seq_QMARK_(seq__63900_64628__$1)){
var c__4550__auto___64630 = cljs.core.chunk_first(seq__63900_64628__$1);
var G__64632 = cljs.core.chunk_rest(seq__63900_64628__$1);
var G__64633 = c__4550__auto___64630;
var G__64634 = cljs.core.count(c__4550__auto___64630);
var G__64635 = (0);
seq__63900_64613 = G__64632;
chunk__63901_64614 = G__64633;
count__63902_64615 = G__64634;
i__63903_64616 = G__64635;
continue;
} else {
var vec__63919_64636 = cljs.core.first(seq__63900_64628__$1);
var script_tag_64637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63919_64636,(0),null);
var script_body_64638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63919_64636,(1),null);
eval(script_body_64638);


var G__64639 = cljs.core.next(seq__63900_64628__$1);
var G__64640 = null;
var G__64641 = (0);
var G__64642 = (0);
seq__63900_64613 = G__64639;
chunk__63901_64614 = G__64640;
count__63902_64615 = G__64641;
i__63903_64616 = G__64642;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__63923){
var vec__63924 = p__63923;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63924,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63924,(1),null);
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
var G__63929 = shadow.dom.dom_node(el);
var G__63930 = cls;
return goog.dom.getAncestorByClass(G__63929,G__63930);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__63933 = arguments.length;
switch (G__63933) {
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
var G__63935 = shadow.dom.dom_node(el);
var G__63936 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__63935,G__63936);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__63938 = shadow.dom.dom_node(el);
var G__63939 = cljs.core.name(tag);
var G__63940 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__63938,G__63939,G__63940);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__63946 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__63946);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__63950 = shadow.dom.dom_node(dom);
var G__63951 = value;
return goog.dom.forms.setValue(G__63950,G__63951);
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
var seq__63966 = cljs.core.seq(style_keys);
var chunk__63967 = null;
var count__63968 = (0);
var i__63969 = (0);
while(true){
if((i__63969 < count__63968)){
var it = chunk__63967.cljs$core$IIndexed$_nth$arity$2(null,i__63969);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64653 = seq__63966;
var G__64654 = chunk__63967;
var G__64655 = count__63968;
var G__64656 = (i__63969 + (1));
seq__63966 = G__64653;
chunk__63967 = G__64654;
count__63968 = G__64655;
i__63969 = G__64656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63966);
if(temp__5735__auto__){
var seq__63966__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63966__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63966__$1);
var G__64661 = cljs.core.chunk_rest(seq__63966__$1);
var G__64662 = c__4550__auto__;
var G__64663 = cljs.core.count(c__4550__auto__);
var G__64664 = (0);
seq__63966 = G__64661;
chunk__63967 = G__64662;
count__63968 = G__64663;
i__63969 = G__64664;
continue;
} else {
var it = cljs.core.first(seq__63966__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64665 = cljs.core.next(seq__63966__$1);
var G__64666 = null;
var G__64667 = (0);
var G__64668 = (0);
seq__63966 = G__64665;
chunk__63967 = G__64666;
count__63968 = G__64667;
i__63969 = G__64668;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63982,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63994 = k63982;
var G__63994__$1 = (((G__63994 instanceof cljs.core.Keyword))?G__63994.fqn:null);
switch (G__63994__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63982,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63998){
var vec__63999 = p__63998;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63999,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63999,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63981){
var self__ = this;
var G__63981__$1 = this;
return (new cljs.core.RecordIter((0),G__63981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__64015 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__64015(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63983,other63984){
var self__ = this;
var this63983__$1 = this;
return (((!((other63984 == null)))) && ((this63983__$1.constructor === other63984.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63983__$1.x,other63984.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63983__$1.y,other63984.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63983__$1.__extmap,other63984.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63981){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__64022 = cljs.core.keyword_identical_QMARK_;
var expr__64023 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__64026 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__64027 = expr__64023;
return (pred__64022.cljs$core$IFn$_invoke$arity$2 ? pred__64022.cljs$core$IFn$_invoke$arity$2(G__64026,G__64027) : pred__64022.call(null,G__64026,G__64027));
})())){
return (new shadow.dom.Coordinate(G__63981,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__64029 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__64030 = expr__64023;
return (pred__64022.cljs$core$IFn$_invoke$arity$2 ? pred__64022.cljs$core$IFn$_invoke$arity$2(G__64029,G__64030) : pred__64022.call(null,G__64029,G__64030));
})())){
return (new shadow.dom.Coordinate(self__.x,G__63981,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63981),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63981){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__63981,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__63987){
var extmap__4424__auto__ = (function (){var G__64043 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63987,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__63987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64043);
} else {
return G__64043;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__63987),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__63987),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__64047 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__64047);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__64049 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__64049);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__64051 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__64051);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k64054,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__64062 = k64054;
var G__64062__$1 = (((G__64062 instanceof cljs.core.Keyword))?G__64062.fqn:null);
switch (G__64062__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64054,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__64063){
var vec__64065 = p__64063;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64065,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64065,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64053){
var self__ = this;
var G__64053__$1 = this;
return (new cljs.core.RecordIter((0),G__64053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__64080 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__64080(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64055,other64056){
var self__ = this;
var this64055__$1 = this;
return (((!((other64056 == null)))) && ((this64055__$1.constructor === other64056.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64055__$1.w,other64056.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64055__$1.h,other64056.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64055__$1.__extmap,other64056.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__64053){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__64086 = cljs.core.keyword_identical_QMARK_;
var expr__64087 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__64089 = new cljs.core.Keyword(null,"w","w",354169001);
var G__64090 = expr__64087;
return (pred__64086.cljs$core$IFn$_invoke$arity$2 ? pred__64086.cljs$core$IFn$_invoke$arity$2(G__64089,G__64090) : pred__64086.call(null,G__64089,G__64090));
})())){
return (new shadow.dom.Size(G__64053,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__64094 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__64095 = expr__64087;
return (pred__64086.cljs$core$IFn$_invoke$arity$2 ? pred__64086.cljs$core$IFn$_invoke$arity$2(G__64094,G__64095) : pred__64086.call(null,G__64094,G__64095));
})())){
return (new shadow.dom.Size(self__.w,G__64053,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__64053),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__64053){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__64053,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__64058){
var extmap__4424__auto__ = (function (){var G__64101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64058,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__64058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64101);
} else {
return G__64101;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__64058),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__64058),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__64108 = shadow.dom.dom_node(el);
return goog.style.getSize(G__64108);
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
var G__64690 = (i + (1));
var G__64691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__64690;
ret = G__64691;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64129){
var vec__64130 = p__64129;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__64137 = arguments.length;
switch (G__64137) {
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
var G__64145_64696 = new_node;
var G__64146_64697 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__64145_64696,G__64146_64697);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__64149_64698 = new_node;
var G__64150_64699 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__64149_64698,G__64150_64699);

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
var G__64703 = ps;
var G__64704 = (i + (1));
el__$1 = G__64703;
i = G__64704;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__64155 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__64155);
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
var G__64158 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__64158);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__64159 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__64159);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__64162 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64162,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64162,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64162,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__64165_64711 = cljs.core.seq(props);
var chunk__64166_64712 = null;
var count__64167_64713 = (0);
var i__64168_64714 = (0);
while(true){
if((i__64168_64714 < count__64167_64713)){
var vec__64179_64715 = chunk__64166_64712.cljs$core$IIndexed$_nth$arity$2(null,i__64168_64714);
var k_64716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64179_64715,(0),null);
var v_64717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64179_64715,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_64716);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64716),v_64717);


var G__64718 = seq__64165_64711;
var G__64719 = chunk__64166_64712;
var G__64720 = count__64167_64713;
var G__64721 = (i__64168_64714 + (1));
seq__64165_64711 = G__64718;
chunk__64166_64712 = G__64719;
count__64167_64713 = G__64720;
i__64168_64714 = G__64721;
continue;
} else {
var temp__5735__auto___64722 = cljs.core.seq(seq__64165_64711);
if(temp__5735__auto___64722){
var seq__64165_64723__$1 = temp__5735__auto___64722;
if(cljs.core.chunked_seq_QMARK_(seq__64165_64723__$1)){
var c__4550__auto___64724 = cljs.core.chunk_first(seq__64165_64723__$1);
var G__64725 = cljs.core.chunk_rest(seq__64165_64723__$1);
var G__64726 = c__4550__auto___64724;
var G__64727 = cljs.core.count(c__4550__auto___64724);
var G__64728 = (0);
seq__64165_64711 = G__64725;
chunk__64166_64712 = G__64726;
count__64167_64713 = G__64727;
i__64168_64714 = G__64728;
continue;
} else {
var vec__64186_64729 = cljs.core.first(seq__64165_64723__$1);
var k_64730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64186_64729,(0),null);
var v_64731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64186_64729,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_64730);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64730),v_64731);


var G__64736 = cljs.core.next(seq__64165_64723__$1);
var G__64737 = null;
var G__64738 = (0);
var G__64739 = (0);
seq__64165_64711 = G__64736;
chunk__64166_64712 = G__64737;
count__64167_64713 = G__64738;
i__64168_64714 = G__64739;
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
var vec__64198 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64198,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64198,(1),null);
var seq__64202_64740 = cljs.core.seq(node_children);
var chunk__64204_64741 = null;
var count__64205_64742 = (0);
var i__64206_64743 = (0);
while(true){
if((i__64206_64743 < count__64205_64742)){
var child_struct_64744 = chunk__64204_64741.cljs$core$IIndexed$_nth$arity$2(null,i__64206_64743);
if((!((child_struct_64744 == null)))){
if(typeof child_struct_64744 === 'string'){
var text_64745 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64745),child_struct_64744].join(''));
} else {
var children_64746 = shadow.dom.svg_node(child_struct_64744);
if(cljs.core.seq_QMARK_(children_64746)){
var seq__64241_64747 = cljs.core.seq(children_64746);
var chunk__64243_64748 = null;
var count__64244_64749 = (0);
var i__64245_64750 = (0);
while(true){
if((i__64245_64750 < count__64244_64749)){
var child_64751 = chunk__64243_64748.cljs$core$IIndexed$_nth$arity$2(null,i__64245_64750);
if(cljs.core.truth_(child_64751)){
node.appendChild(child_64751);


var G__64752 = seq__64241_64747;
var G__64753 = chunk__64243_64748;
var G__64754 = count__64244_64749;
var G__64755 = (i__64245_64750 + (1));
seq__64241_64747 = G__64752;
chunk__64243_64748 = G__64753;
count__64244_64749 = G__64754;
i__64245_64750 = G__64755;
continue;
} else {
var G__64756 = seq__64241_64747;
var G__64757 = chunk__64243_64748;
var G__64758 = count__64244_64749;
var G__64759 = (i__64245_64750 + (1));
seq__64241_64747 = G__64756;
chunk__64243_64748 = G__64757;
count__64244_64749 = G__64758;
i__64245_64750 = G__64759;
continue;
}
} else {
var temp__5735__auto___64760 = cljs.core.seq(seq__64241_64747);
if(temp__5735__auto___64760){
var seq__64241_64761__$1 = temp__5735__auto___64760;
if(cljs.core.chunked_seq_QMARK_(seq__64241_64761__$1)){
var c__4550__auto___64762 = cljs.core.chunk_first(seq__64241_64761__$1);
var G__64763 = cljs.core.chunk_rest(seq__64241_64761__$1);
var G__64764 = c__4550__auto___64762;
var G__64765 = cljs.core.count(c__4550__auto___64762);
var G__64766 = (0);
seq__64241_64747 = G__64763;
chunk__64243_64748 = G__64764;
count__64244_64749 = G__64765;
i__64245_64750 = G__64766;
continue;
} else {
var child_64767 = cljs.core.first(seq__64241_64761__$1);
if(cljs.core.truth_(child_64767)){
node.appendChild(child_64767);


var G__64768 = cljs.core.next(seq__64241_64761__$1);
var G__64769 = null;
var G__64770 = (0);
var G__64771 = (0);
seq__64241_64747 = G__64768;
chunk__64243_64748 = G__64769;
count__64244_64749 = G__64770;
i__64245_64750 = G__64771;
continue;
} else {
var G__64772 = cljs.core.next(seq__64241_64761__$1);
var G__64773 = null;
var G__64774 = (0);
var G__64775 = (0);
seq__64241_64747 = G__64772;
chunk__64243_64748 = G__64773;
count__64244_64749 = G__64774;
i__64245_64750 = G__64775;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64746);
}
}


var G__64776 = seq__64202_64740;
var G__64777 = chunk__64204_64741;
var G__64778 = count__64205_64742;
var G__64779 = (i__64206_64743 + (1));
seq__64202_64740 = G__64776;
chunk__64204_64741 = G__64777;
count__64205_64742 = G__64778;
i__64206_64743 = G__64779;
continue;
} else {
var G__64780 = seq__64202_64740;
var G__64781 = chunk__64204_64741;
var G__64782 = count__64205_64742;
var G__64783 = (i__64206_64743 + (1));
seq__64202_64740 = G__64780;
chunk__64204_64741 = G__64781;
count__64205_64742 = G__64782;
i__64206_64743 = G__64783;
continue;
}
} else {
var temp__5735__auto___64786 = cljs.core.seq(seq__64202_64740);
if(temp__5735__auto___64786){
var seq__64202_64787__$1 = temp__5735__auto___64786;
if(cljs.core.chunked_seq_QMARK_(seq__64202_64787__$1)){
var c__4550__auto___64788 = cljs.core.chunk_first(seq__64202_64787__$1);
var G__64789 = cljs.core.chunk_rest(seq__64202_64787__$1);
var G__64790 = c__4550__auto___64788;
var G__64791 = cljs.core.count(c__4550__auto___64788);
var G__64792 = (0);
seq__64202_64740 = G__64789;
chunk__64204_64741 = G__64790;
count__64205_64742 = G__64791;
i__64206_64743 = G__64792;
continue;
} else {
var child_struct_64793 = cljs.core.first(seq__64202_64787__$1);
if((!((child_struct_64793 == null)))){
if(typeof child_struct_64793 === 'string'){
var text_64794 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64794),child_struct_64793].join(''));
} else {
var children_64795 = shadow.dom.svg_node(child_struct_64793);
if(cljs.core.seq_QMARK_(children_64795)){
var seq__64258_64796 = cljs.core.seq(children_64795);
var chunk__64260_64797 = null;
var count__64261_64798 = (0);
var i__64262_64799 = (0);
while(true){
if((i__64262_64799 < count__64261_64798)){
var child_64800 = chunk__64260_64797.cljs$core$IIndexed$_nth$arity$2(null,i__64262_64799);
if(cljs.core.truth_(child_64800)){
node.appendChild(child_64800);


var G__64801 = seq__64258_64796;
var G__64802 = chunk__64260_64797;
var G__64803 = count__64261_64798;
var G__64804 = (i__64262_64799 + (1));
seq__64258_64796 = G__64801;
chunk__64260_64797 = G__64802;
count__64261_64798 = G__64803;
i__64262_64799 = G__64804;
continue;
} else {
var G__64805 = seq__64258_64796;
var G__64806 = chunk__64260_64797;
var G__64807 = count__64261_64798;
var G__64808 = (i__64262_64799 + (1));
seq__64258_64796 = G__64805;
chunk__64260_64797 = G__64806;
count__64261_64798 = G__64807;
i__64262_64799 = G__64808;
continue;
}
} else {
var temp__5735__auto___64809__$1 = cljs.core.seq(seq__64258_64796);
if(temp__5735__auto___64809__$1){
var seq__64258_64810__$1 = temp__5735__auto___64809__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64258_64810__$1)){
var c__4550__auto___64812 = cljs.core.chunk_first(seq__64258_64810__$1);
var G__64813 = cljs.core.chunk_rest(seq__64258_64810__$1);
var G__64814 = c__4550__auto___64812;
var G__64815 = cljs.core.count(c__4550__auto___64812);
var G__64816 = (0);
seq__64258_64796 = G__64813;
chunk__64260_64797 = G__64814;
count__64261_64798 = G__64815;
i__64262_64799 = G__64816;
continue;
} else {
var child_64817 = cljs.core.first(seq__64258_64810__$1);
if(cljs.core.truth_(child_64817)){
node.appendChild(child_64817);


var G__64818 = cljs.core.next(seq__64258_64810__$1);
var G__64819 = null;
var G__64820 = (0);
var G__64821 = (0);
seq__64258_64796 = G__64818;
chunk__64260_64797 = G__64819;
count__64261_64798 = G__64820;
i__64262_64799 = G__64821;
continue;
} else {
var G__64822 = cljs.core.next(seq__64258_64810__$1);
var G__64823 = null;
var G__64824 = (0);
var G__64825 = (0);
seq__64258_64796 = G__64822;
chunk__64260_64797 = G__64823;
count__64261_64798 = G__64824;
i__64262_64799 = G__64825;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64795);
}
}


var G__64826 = cljs.core.next(seq__64202_64787__$1);
var G__64827 = null;
var G__64828 = (0);
var G__64829 = (0);
seq__64202_64740 = G__64826;
chunk__64204_64741 = G__64827;
count__64205_64742 = G__64828;
i__64206_64743 = G__64829;
continue;
} else {
var G__64830 = cljs.core.next(seq__64202_64787__$1);
var G__64831 = null;
var G__64832 = (0);
var G__64833 = (0);
seq__64202_64740 = G__64830;
chunk__64204_64741 = G__64831;
count__64205_64742 = G__64832;
i__64206_64743 = G__64833;
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

var G__64278_64834 = shadow.dom._to_svg;
var G__64279_64835 = "string";
var G__64280_64836 = ((function (G__64278_64834,G__64279_64835){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__64278_64834,G__64279_64835))
;
goog.object.set(G__64278_64834,G__64279_64835,G__64280_64836);

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

var G__64284_64837 = shadow.dom._to_svg;
var G__64285_64838 = "null";
var G__64286_64839 = ((function (G__64284_64837,G__64285_64838){
return (function (_){
return null;
});})(G__64284_64837,G__64285_64838))
;
goog.object.set(G__64284_64837,G__64285_64838,G__64286_64839);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64840 = arguments.length;
var i__4731__auto___64841 = (0);
while(true){
if((i__4731__auto___64841 < len__4730__auto___64840)){
args__4736__auto__.push((arguments[i__4731__auto___64841]));

var G__64842 = (i__4731__auto___64841 + (1));
i__4731__auto___64841 = G__64842;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq64289){
var G__64290 = cljs.core.first(seq64289);
var seq64289__$1 = cljs.core.next(seq64289);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64290,seq64289__$1);
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
var G__64300 = arguments.length;
switch (G__64300) {
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
var G__64307_64847 = shadow.dom.dom_node(el);
var G__64308_64848 = cljs.core.name(event);
var G__64309_64849 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__64307_64847,G__64308_64848,G__64309_64849) : shadow.dom.dom_listen.call(null,G__64307_64847,G__64308_64848,G__64309_64849));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__61781__auto___64854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto___64854,buf,chan,event_fn){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto___64854,buf,chan,event_fn){
return (function (state_64319){
var state_val_64321 = (state_64319[(1)]);
if((state_val_64321 === (1))){
var state_64319__$1 = state_64319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64319__$1,(2),once_or_cleanup);
} else {
if((state_val_64321 === (2))){
var inst_64315 = (state_64319[(2)]);
var inst_64316 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_64319__$1 = (function (){var statearr_64326 = state_64319;
(statearr_64326[(7)] = inst_64315);

return statearr_64326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64319__$1,inst_64316);
} else {
return null;
}
}
});})(c__61781__auto___64854,buf,chan,event_fn))
;
return ((function (switch__61678__auto__,c__61781__auto___64854,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__61679__auto__ = null;
var shadow$dom$state_machine__61679__auto____0 = (function (){
var statearr_64328 = [null,null,null,null,null,null,null,null];
(statearr_64328[(0)] = shadow$dom$state_machine__61679__auto__);

(statearr_64328[(1)] = (1));

return statearr_64328;
});
var shadow$dom$state_machine__61679__auto____1 = (function (state_64319){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_64319);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e64330){if((e64330 instanceof Object)){
var ex__61682__auto__ = e64330;
var statearr_64331_64857 = state_64319;
(statearr_64331_64857[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64858 = state_64319;
state_64319 = G__64858;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
shadow$dom$state_machine__61679__auto__ = function(state_64319){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61679__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61679__auto____1.call(this,state_64319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61679__auto____0;
shadow$dom$state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61679__auto____1;
return shadow$dom$state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto___64854,buf,chan,event_fn))
})();
var state__61783__auto__ = (function (){var statearr_64336 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_64336[(6)] = c__61781__auto___64854);

return statearr_64336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto___64854,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
