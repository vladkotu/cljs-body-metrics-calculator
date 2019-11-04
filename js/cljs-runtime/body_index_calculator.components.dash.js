goog.provide('body_index_calculator.components.dash');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
var module$node_modules$$material_ui$core$Box$index=shadow.js.require("module$node_modules$$material_ui$core$Box$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
var module$node_modules$$material_ui$core$Paper$index=shadow.js.require("module$node_modules$$material_ui$core$Paper$index", {});
var module$node_modules$$material_ui$core$Typography$index=shadow.js.require("module$node_modules$$material_ui$core$Typography$index", {});
var module$node_modules$$material_ui$icons$CheckCircle=shadow.js.require("module$node_modules$$material_ui$icons$CheckCircle", {});
var module$node_modules$$material_ui$icons$HighlightOff=shadow.js.require("module$node_modules$$material_ui$icons$HighlightOff", {});
body_index_calculator.components.dash.ready_icon = (function body_index_calculator$components$dash$ready_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$CheckCircle.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"action",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null);
});
body_index_calculator.components.dash.not_ready_icon = (function body_index_calculator$components$dash$not_ready_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$HighlightOff.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"disabled",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null);
});
body_index_calculator.components.dash.status_icon = (function body_index_calculator$components$dash$status_icon(p__50060){
var map__50061 = p__50060;
var map__50061__$1 = (((((!((map__50061 == null))))?(((((map__50061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50061):map__50061);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50061__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718),false);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50061__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vairant","vairant",-1556673753),"caption",new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(cljs.core.truth_(done_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.dash.ready_icon], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.dash.not_ready_icon], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pt","pt",556460867),0.5,new cljs.core.Keyword(null,"pl","pl",-1690940563),0.5,new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(done_QMARK_)?"text.primary":"text.disabled")], null),label], null)], null);
});
body_index_calculator.components.dash.dash = (function body_index_calculator$components$dash$dash(){
var res = (function (){var G__50070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","result","body-index-calculator.subscriptions/result",-1330365021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50070) : re_frame.core.subscribe.call(null,G__50070));
})();
return ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"justify","justify",-722524056),"space-around",new cljs.core.Keyword(null,"spacing","spacing",204422175),(3)], null),(function (){var iter__4523__auto__ = ((function (res){
return (function body_index_calculator$components$dash$dash_$_iter__50071(s__50072){
return (new cljs.core.LazySeq(null,((function (res){
return (function (){
var s__50072__$1 = s__50072;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50072__$1);
if(temp__5735__auto__){
var s__50072__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50072__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50072__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50074 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50073 = (0);
while(true){
if((i__50073 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50073);
cljs.core.chunk_append(b__50074,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.dash.status_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),(!((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x) == null))),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"abbr","abbr",2088591884).cljs$core$IFn$_invoke$arity$1(x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(x))].join('')], null)));

var G__50097 = (i__50073 + (1));
i__50073 = G__50097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50074),body_index_calculator$components$dash$dash_$_iter__50071(cljs.core.chunk_rest(s__50072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50074),null);
}
} else {
var x = cljs.core.first(s__50072__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.dash.status_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),(!((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x) == null))),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"abbr","abbr",2088591884).cljs$core$IFn$_invoke$arity$1(x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(x))].join('')], null)),body_index_calculator$components$dash$dash_$_iter__50071(cljs.core.rest(s__50072__$2)));
}
} else {
return null;
}
break;
}
});})(res))
,null,null));
});})(res))
;
return iter__4523__auto__(cljs.core.deref(res));
})()], null)], null);
});
;})(res))
});

//# sourceMappingURL=body_index_calculator.components.dash.js.map
