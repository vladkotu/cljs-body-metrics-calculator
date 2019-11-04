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
var value = (function (){var G__50137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50137) : re_frame.core.subscribe.call(null,G__50137));
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
return (function (p1__50136_SHARP_){
var G__50140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__50136_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50140) : re_frame.core.dispatch.call(null,G__50140));
});})(value))
], null)], null);
});
;})(value))
});
body_index_calculator.components.form.gender = (function body_index_calculator$components$form$gender(p__50144){
var map__50145 = p__50144;
var map__50145__$1 = (((((!((map__50145 == null))))?(((((map__50145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50145):map__50145);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50145__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50145__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50145__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50145__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.radio_group.radio_group,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"name","name",1843675177),"gender",new cljs.core.Keyword(null,"add-hidden?","add-hidden?",886914015),true,new cljs.core.Keyword(null,"radio-buttons","radio-buttons",-1165571347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__50148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.gender","male","form.gender/male",659394315)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50147,G__50148) : body_index_calculator.i18n.tr.call(null,G__50147,G__50148));
})(),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"male","male",-560253338)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__50151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.gender","female","form.gender/female",-1281427810)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50150,G__50151) : body_index_calculator.i18n.tr.call(null,G__50150,G__50151));
})(),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"female","female",1810186049)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__50145,map__50145__$1,locale,value,ev_key,label){
return (function (p1__50141_SHARP_){
var G__50156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__50141_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50156) : re_frame.core.dispatch.call(null,G__50156));
});})(map__50145,map__50145__$1,locale,value,ev_key,label))
], null)], null);
});
body_index_calculator.components.form.input_with_dispatchers = (function body_index_calculator$components$form$input_with_dispatchers(p__50158){
var map__50160 = p__50158;
var map__50160__$1 = (((((!((map__50160 == null))))?(((((map__50160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50160):map__50160);
var props = map__50160__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50160__$1,new cljs.core.Keyword(null,"error","error",-978969032),false);
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),units,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"error-text","error-text",2021893718),error_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text){
return (function (p1__50157_SHARP_){
var G__50165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__50157_SHARP_], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50165) : re_frame.core.dispatch.call(null,G__50165));
});})(map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text){
return (function (){
var G__50168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50168) : re_frame.core.dispatch.call(null,G__50168));
});})(map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text){
return (function (){
var G__50170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50170) : re_frame.core.dispatch.call(null,G__50170));
});})(map__50160,map__50160__$1,props,value,ev_key,label,units,error,error_text))
], null)], null);
});
body_index_calculator.components.form.double_input_with_dispatchers = (function body_index_calculator$components$form$double_input_with_dispatchers(p__50175){
var map__50176 = p__50175;
var map__50176__$1 = (((((!((map__50176 == null))))?(((((map__50176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50176):map__50176);
var props = map__50176__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var with_let50180 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50180","with-let50180",-540270211));
var temp__5739__auto___50249 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50249 == null)){
} else {
var c__45709__auto___50250 = temp__5739__auto___50249;
if((with_let50180.generation === c__45709__auto___50250.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50180.generation = c__45709__auto___50250.ratomGeneration;
}


var init50181 = (with_let50180.length === (0));
var local_state = ((init50181)?(with_let50180[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ft","value","ft/value",305980987),cljs.core.first(value),new cljs.core.Keyword("in","value","in/value",305981092),cljs.core.second(value)], null))):(with_let50180[(0)]));
var res__45710__auto__ = (function (){var dispatch_change = ((function (init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_change(state){
var G__50192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ft","value","ft/value",305980987).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("in","value","in/value",305981092).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50192) : re_frame.core.dispatch.call(null,G__50192));
});})(init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units))
;
var dispatch_focus = ((function (init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_focus(){
var G__50194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50194) : re_frame.core.dispatch.call(null,G__50194));
});})(init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units))
;
var dispatch_blur = ((function (init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units){
return (function body_index_calculator$components$form$double_input_with_dispatchers_$_dispatch_blur(){
var G__50195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50195) : re_frame.core.dispatch.call(null,G__50195));
});})(init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.double_input,label,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.first(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.second(units),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units){
return (function (p1__50171_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc,new cljs.core.Keyword("ft","value","ft/value",305980987),p1__50171_SHARP_);

return dispatch_change(cljs.core.deref(local_state));
});})(init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),dispatch_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),dispatch_blur], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.second(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.last(units),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units){
return (function (p1__50172_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc,new cljs.core.Keyword("in","value","in/value",305981092),p1__50172_SHARP_);

return dispatch_change(cljs.core.deref(local_state));
});})(init50181,local_state,with_let50180,map__50176,map__50176__$1,props,value,ev_key,label,units))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),dispatch_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),dispatch_blur], null),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-text","error-text",2021893718)], null))], null);
})();

return res__45710__auto__;
});
body_index_calculator.components.form.input_with_subscription = (function body_index_calculator$components$form$input_with_subscription(p__50200){
var map__50202 = p__50200;
var map__50202__$1 = (((((!((map__50202 == null))))?(((((map__50202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50202):map__50202);
var props = map__50202__$1;
var sub_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"sub-key","sub-key",-374746211));
var ev_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var with_let50204 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50204","with-let50204",-1062169515));
var temp__5739__auto___50257 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50257 == null)){
} else {
var c__45709__auto___50258 = temp__5739__auto___50257;
if((with_let50204.generation === c__45709__auto___50258.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50204.generation = c__45709__auto___50258.ratomGeneration;
}


var init50205 = (with_let50204.length === (0));
var field = ((init50205)?(with_let50204[(0)] = (function (){var G__50211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50211) : re_frame.core.subscribe.call(null,G__50211));
})()):(with_let50204[(0)]));
var locale = ((init50205)?(with_let50204[(1)] = (function (){var G__50212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50212) : re_frame.core.subscribe.call(null,G__50212));
})()):(with_let50204[(1)]));
var system = ((init50205)?(with_let50204[(2)] = (function (){var G__50213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50213) : re_frame.core.subscribe.call(null,G__50213));
})()):(with_let50204[(2)]));
var res__45710__auto__ = (function (){var map__50214 = cljs.core.deref(field);
var map__50214__$1 = (((((!((map__50214 == null))))?(((((map__50214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50214):map__50214);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"value","value",305978217));
var utype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"utype","utype",1191313154));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var units = (function (){var G__50217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50218 = body_index_calculator.helpers.loc(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.deref(system),new cljs.core.Keyword(null,"units","units",-533089095),utype], null));
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50217,G__50218) : body_index_calculator.i18n.tr.call(null,G__50217,G__50218));
})();
var common_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(field),new cljs.core.Keyword(null,"ev-key","ev-key",-1497704758),ev_key),new cljs.core.Keyword(null,"units","units",-533089095),units),new cljs.core.Keyword(null,"locale","locale",-2115712697),cljs.core.deref(locale)),new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50223,G__50224) : body_index_calculator.i18n.tr.call(null,G__50223,G__50224));
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
var with_let50227 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50227","with-let50227",590375154));
var temp__5739__auto___50264 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50264 == null)){
} else {
var c__45709__auto___50265 = temp__5739__auto___50264;
if((with_let50227.generation === c__45709__auto___50265.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50227.generation = c__45709__auto___50265.ratomGeneration;
}


var init50228 = (with_let50227.length === (0));
var locale = ((init50228)?(with_let50227[(0)] = (function (){var G__50231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50231) : re_frame.core.subscribe.call(null,G__50231));
})()):(with_let50227[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__50232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50233 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path)))?path:body_index_calculator.helpers.loc(path));
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50232,G__50233) : body_index_calculator.i18n.tr.call(null,G__50232,G__50233));
})()], null);

return res__45710__auto__;
});
body_index_calculator.components.form.form = (function body_index_calculator$components$form$form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"index-calculator",new cljs.core.Keyword(null,"no-validate","no-validate",72997812),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([6.5], 0)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mr","mr",-1224518357),1.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ArrowDownward.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"component","component",1555936782),"h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.i18n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","call-to-action","form/call-to-action",-710575917)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Divider$index.default], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default], null),(function (){var iter__4523__auto__ = (function body_index_calculator$components$form$form_$_iter__50240(s__50241){
return (new cljs.core.LazySeq(null,(function (){
var s__50241__$1 = s__50241;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50241__$1);
if(temp__5735__auto__){
var s__50241__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50241__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50241__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50243 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50242 = (0);
while(true){
if((i__50242 < size__4522__auto__)){
var props = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50242);
cljs.core.chunk_append(b__50243,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),1.5,new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.input_with_subscription,props], null)], null));

var G__50266 = (i__50242 + (1));
i__50242 = G__50266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50243),body_index_calculator$components$form$form_$_iter__50240(cljs.core.chunk_rest(s__50241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50243),null);
}
} else {
var props = cljs.core.first(s__50241__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),1.5,new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.form.input_with_subscription,props], null)], null),body_index_calculator$components$form$form_$_iter__50240(cljs.core.rest(s__50241__$2)));
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
