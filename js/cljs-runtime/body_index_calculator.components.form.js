goog.provide('body_index_calculator.components.form');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.i18n');
goog.require('body_index_calculator.mui_theme');
goog.require('body_index_calculator.subscriptions');
goog.require('body_index_calculator.helpers');
goog.require('body_index_calculator.events');
goog.require('body_index_calculator.components.radio_group');
goog.require('body_index_calculator.components.input');
var module$node_modules$$material_ui$icons$ArrowDownward=shadow.js.require("module$node_modules$$material_ui$icons$ArrowDownward", {});
var module$node_modules$$material_ui$core$Box$index=shadow.js.require("module$node_modules$$material_ui$core$Box$index", {});
var module$node_modules$$material_ui$core$Typography$index=shadow.js.require("module$node_modules$$material_ui$core$Typography$index", {});
var module$node_modules$$material_ui$core$Divider$index=shadow.js.require("module$node_modules$$material_ui$core$Divider$index", {});
body_index_calculator.components.form.meassuring_system = (function body_index_calculator$components$form$meassuring_system(){
var value = (function (){var G__51023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51023) : re_frame.core.subscribe.call(null,G__51023));
})();
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.radio_group.radio_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),"system",new cljs.core.Keyword(null,"add-hidden?","add-hidden?",886914015),false,new cljs.core.Keyword(null,"radio-buttons","radio-buttons",-1165571347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Metric",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"metric","metric",408798077)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Imperial",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"imperial","imperial",-1065360839)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__51022_SHARP_){
var G__51026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__51022_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51026) : re_frame.core.dispatch.call(null,G__51026));
});})(value))
], null)], null);
});
;})(value))
});
body_index_calculator.components.form.gender = (function body_index_calculator$components$form$gender(p__51037){
var map__51038 = p__51037;
var map__51038__$1 = (((((!((map__51038 == null))))?(((((map__51038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51038):map__51038);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.radio_group.radio_group,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"name","name",1843675177),"gender",new cljs.core.Keyword(null,"add-hidden?","add-hidden?",886914015),true,new cljs.core.Keyword(null,"radio-buttons","radio-buttons",-1165571347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__51045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.gender","male","form.gender/male",659394315)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51044,G__51045) : body_index_calculator.i18n.tr.call(null,G__51044,G__51045));
})(),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"male","male",-560253338)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__51049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.gender","female","form.gender/female",-1281427810)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51048,G__51049) : body_index_calculator.i18n.tr.call(null,G__51048,G__51049));
})(),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"female","female",1810186049)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__51038,map__51038__$1,locale,value,ev_key,label){
return (function (p1__51034_SHARP_){
var G__51052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__51034_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51052) : re_frame.core.dispatch.call(null,G__51052));
});})(map__51038,map__51038__$1,locale,value,ev_key,label))
], null)], null);
});
body_index_calculator.components.form.input_with_dispatchers = (function body_index_calculator$components$form$input_with_dispatchers(p__51057){
var map__51059 = p__51057;
var map__51059__$1 = (((((!((map__51059 == null))))?(((((map__51059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51059):map__51059);
var props = map__51059__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51059__$1,new cljs.core.Keyword(null,"error","error",-978969032),false);
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),units,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"error-text","error-text",2021893718),error_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text){
return (function (p1__51054_SHARP_){
var G__51063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__51054_SHARP_], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51063) : re_frame.core.dispatch.call(null,G__51063));
});})(map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text){
return (function (){
var G__51070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51070) : re_frame.core.dispatch.call(null,G__51070));
});})(map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text){
return (function (){
var G__51076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51076) : re_frame.core.dispatch.call(null,G__51076));
});})(map__51059,map__51059__$1,props,value,ev_key,label,units,error,error_text))
], null)], null);
});
body_index_calculator.components.form.double_input_with_dispatchers = (function body_index_calculator$components$form$double_input_with_dispatchers(p__51081){
var map__51083 = p__51081;
var map__51083__$1 = (((((!((map__51083 == null))))?(((((map__51083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51083):map__51083);
var props = map__51083__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var with_let51089 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51089","with-let51089",-1374015074));
var temp__5739__auto___51174 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51174 == null)){
} else {
var c__45709__auto___51175 = temp__5739__auto___51174;
if((with_let51089.generation === c__45709__auto___51175.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51089.generation = c__45709__auto___51175.ratomGeneration;
}


var init51090 = (with_let51089.length === (0));
var local_state = ((init51090)?(with_let51089[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ft","value","ft/value",305980987),cljs.core.first(value),new cljs.core.Keyword("in","value","in/value",305981092),cljs.core.second(value)], null))):(with_let51089[(0)]));
var res__45710__auto__ = (function (){var dispatch_change = ((function (init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_change(state){
var G__51109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ft","value","ft/value",305980987).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("in","value","in/value",305981092).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51109) : re_frame.core.dispatch.call(null,G__51109));
});})(init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units))
;
var dispatch_focus = ((function (init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_focus(){
var G__51111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51111) : re_frame.core.dispatch.call(null,G__51111));
});})(init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units))
;
var dispatch_blur = ((function (init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_blur(){
var G__51113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51113) : re_frame.core.dispatch.call(null,G__51113));
});})(init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.double_input,label,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.first(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.second(units),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units){
return (function (p1__51079_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc,new cljs.core.Keyword("ft","value","ft/value",305980987),p1__51079_SHARP_);

return dispatch_change(cljs.core.deref(local_state));
});})(init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),dispatch_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),dispatch_blur], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.second(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.last(units),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units){
return (function (p1__51080_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc,new cljs.core.Keyword("in","value","in/value",305981092),p1__51080_SHARP_);

return dispatch_change(cljs.core.deref(local_state));
});})(init51090,local_state,with_let51089,map__51083,map__51083__$1,props,value,ev_key,label,units))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),dispatch_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),dispatch_blur], null),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-text","error-text",2021893718)], null))], null);
})();

return res__45710__auto__;
});
body_index_calculator.components.form.input_with_subscription = (function body_index_calculator$components$form$input_with_subscription(p__51118){
var map__51119 = p__51118;
var map__51119__$1 = (((((!((map__51119 == null))))?(((((map__51119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51119):map__51119);
var props = map__51119__$1;
var sub_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51119__$1,new cljs.core.Keyword(null,"sub-key","sub-key",-374746211));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51119__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51119__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var with_let51124 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51124","with-let51124",-2107565101));
var temp__5739__auto___51179 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51179 == null)){
} else {
var c__45709__auto___51180 = temp__5739__auto___51179;
if((with_let51124.generation === c__45709__auto___51180.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51124.generation = c__45709__auto___51180.ratomGeneration;
}


var init51125 = (with_let51124.length === (0));
var field = ((init51125)?(with_let51124[(0)] = (function (){var G__51127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51127) : re_frame.core.subscribe.call(null,G__51127));
})()):(with_let51124[(0)]));
var locale = ((init51125)?(with_let51124[(1)] = (function (){var G__51129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51129) : re_frame.core.subscribe.call(null,G__51129));
})()):(with_let51124[(1)]));
var system = ((init51125)?(with_let51124[(2)] = (function (){var G__51131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51131) : re_frame.core.subscribe.call(null,G__51131));
})()):(with_let51124[(2)]));
var res__45710__auto__ = (function (){var map__51132 = cljs.core.deref(field);
var map__51132__$1 = (((((!((map__51132 == null))))?(((((map__51132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51132):map__51132);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"value","value",305978217));
var utype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"utype","utype",1191313154));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var units = (function (){var G__51136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51137 = body_index_calculator.helpers.loc(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.deref(system),new cljs.core.Keyword(null,"units","units",-533089095),utype], null));
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51136,G__51137) : body_index_calculator.i18n.tr.call(null,G__51136,G__51137));
})();
var common_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(field),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),ev_key),new cljs.core.Keyword(null,"units","units",-533089095),units),new cljs.core.Keyword(null,"locale","locale",-2115712697),cljs.core.deref(locale)),new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51138,G__51139) : body_index_calculator.i18n.tr.call(null,G__51138,G__51139));
})());
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"len","len",1423657078),utype)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),cljs.core.deref(system))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.double_input_with_dispatchers,common_props], null);
} else {
if((utype == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.gender,common_props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.input_with_dispatchers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"units","units",-533089095),units], null),common_props], 0))], null);

}
}
})();

return res__45710__auto__;
});
body_index_calculator.components.form.inputs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form.gender","label","form.gender/label",521697119),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","gender","body-index-calculator.subscriptions/gender",1752121289),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","gender","body-index-calculator.events/gender",-540746560)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form","age","form/age",-613741216),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","age","body-index-calculator.subscriptions/age",-278078572),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","age","body-index-calculator.events/age",1840266373)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form","weight","form/weight",-1263845505),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","weight","body-index-calculator.subscriptions/weight",145591651),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","weight","body-index-calculator.events/weight",-2106298254)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form","height","form/height",1030426938),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","height","body-index-calculator.subscriptions/height",426599118),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","height","body-index-calculator.events/height",2141634019)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form","waist","form/waist",-609480295),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","waist","body-index-calculator.subscriptions/waist",933805829),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","waist","body-index-calculator.events/waist",-1049141226)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("form","hip","form/hip",-439511803),new cljs.core.Keyword(null,"sub-key","sub-key",-374746211),new cljs.core.Keyword("body-index-calculator.subscriptions","hip","body-index-calculator.subscriptions/hip",-908770575),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),new cljs.core.Keyword("body-index-calculator.events","hip","body-index-calculator.events/hip",-266673182)], null)], null);
body_index_calculator.components.form.i18n = (function body_index_calculator$components$form$i18n(path){
var with_let51143 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51143","with-let51143",-1755506406));
var temp__5739__auto___51185 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51185 == null)){
} else {
var c__45709__auto___51186 = temp__5739__auto___51185;
if((with_let51143.generation === c__45709__auto___51186.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51143.generation = c__45709__auto___51186.ratomGeneration;
}


var init51144 = (with_let51143.length === (0));
var locale = ((init51144)?(with_let51143[(0)] = (function (){var G__51150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51150) : re_frame.core.subscribe.call(null,G__51150));
})()):(with_let51143[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__51151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51152 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path)))?path:body_index_calculator.helpers.loc(path));
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51151,G__51152) : body_index_calculator.i18n.tr.call(null,G__51151,G__51152));
})()], null);

return res__45710__auto__;
});
body_index_calculator.components.form.form = (function body_index_calculator$components$form$form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"index-calculator",new cljs.core.Keyword(null,"no-validate","no-validate",72997812),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([6.5], 0)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mr","mr",-1224518357),1.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ArrowDownward.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"component","component",1555936782),"h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.i18n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","call-to-action","form/call-to-action",-710575917)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Divider$index.default], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default], null),(function (){var iter__4523__auto__ = (function body_index_calculator$components$form$form_$_iter__51158(s__51159){
return (new cljs.core.LazySeq(null,(function (){
var s__51159__$1 = s__51159;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51159__$1);
if(temp__5735__auto__){
var s__51159__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51159__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51159__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51161 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51160 = (0);
while(true){
if((i__51160 < size__4522__auto__)){
var props = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51160);
cljs.core.chunk_append(b__51161,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),1.5,new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.input_with_subscription,props], null)], null));

var G__51189 = (i__51160 + (1));
i__51160 = G__51189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51161),body_index_calculator$components$form$form_$_iter__51158(cljs.core.chunk_rest(s__51159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51161),null);
}
} else {
var props = cljs.core.first(s__51159__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),1.5,new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.input_with_subscription,props], null)], null),body_index_calculator$components$form$form_$_iter__51158(cljs.core.rest(s__51159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(body_index_calculator.components.form.inputs);
})())], null);
});

//# sourceMappingURL=body_index_calculator.components.form.js.map
