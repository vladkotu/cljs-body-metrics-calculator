goog.provide('body_index_calculator.components.input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('body_index_calculator.helpers');
var module$node_modules$$material_ui$core$FormControl$index=shadow.js.require("module$node_modules$$material_ui$core$FormControl$index", {});
var module$node_modules$$material_ui$core$FormHelperText$index=shadow.js.require("module$node_modules$$material_ui$core$FormHelperText$index", {});
var module$node_modules$$material_ui$core$InputLabel$index=shadow.js.require("module$node_modules$$material_ui$core$InputLabel$index", {});
var module$node_modules$$material_ui$core$InputAdornment$index=shadow.js.require("module$node_modules$$material_ui$core$InputAdornment$index", {});
var module$node_modules$$material_ui$core$FilledInput$index=shadow.js.require("module$node_modules$$material_ui$core$FilledInput$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
body_index_calculator.components.input.shared_input = (function body_index_calculator$components$input$shared_input(p__50000){
var map__50001 = p__50000;
var map__50001__$1 = (((((!((map__50001 == null))))?(((((map__50001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50001):map__50001);
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50001__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__50001,map__50001__$1,units){
return (function (){
return cljs.core.List.EMPTY;
});})(map__50001,map__50001__$1,units))
);
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50001__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__50001,map__50001__$1,units,on_change){
return (function (){
return cljs.core.List.EMPTY;
});})(map__50001,map__50001__$1,units,on_change))
);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50001__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__50001,map__50001__$1,units,on_change,on_focus,value){
return (function (){
return cljs.core.List.EMPTY;
});})(map__50001,map__50001__$1,units,on_change,on_focus,value))
);
var input_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"input-style","input-style",-374295278));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50001__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormControl$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"initial"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$InputLabel$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html-for","html-for",594503920),id,new cljs.core.Keyword(null,"variant","variant",-424354234),"filled"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FilledInput$index.default,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error){
return (function (p1__49999_SHARP_){
var G__50007 = body_index_calculator.helpers.evalue(p1__49999_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__50007) : on_change.call(null,G__50007));
});})(map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error){
return (function (){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
});})(map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error){
return (function (){
return (on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
});})(map__50001,map__50001__$1,units,on_change,on_focus,value,on_blur,input_style,label,id,error_text,error))
,new cljs.core.Keyword(null,"style","style",-496642736),input_style,new cljs.core.Keyword(null,"endAdornment","endAdornment",-831851344),reagent.core.as_element(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$InputAdornment$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"end",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null)], null),units], null))], null)], null),(cljs.core.truth_(error_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormHelperText$index.default,error_text], null):null)], null);
});
body_index_calculator.components.input.input = (function body_index_calculator$components$input$input(props){
var id = body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-",new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props)], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.shared_input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"id","id",-1388402092),id)], null)], null);
});
body_index_calculator.components.input.double_input = (function body_index_calculator$components$input$double_input(label,props1,props2,error){
var with_let50010 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50010","with-let50010",-658706355));
var temp__5739__auto___50019 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50019 == null)){
} else {
var c__45709__auto___50020 = temp__5739__auto___50019;
if((with_let50010.generation === c__45709__auto___50020.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50010.generation = c__45709__auto___50020.ratomGeneration;
}


var init50011 = (with_let50010.length === (0));
var active = ((init50011)?(with_let50010[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1))):(with_let50010[(0)]));
var id = ((init50011)?(with_let50010[(1)] = body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-",label], 0))):(with_let50010[(1)]));
var reset_active = ((init50011)?(with_let50010[(2)] = ((function (init50011,active,id,with_let50010){
return (function (n){
return ((function (init50011,active,id,with_let50010){
return (function (on_focus){
return ((function (init50011,active,id,with_let50010){
return (function (){
cljs.core.reset_BANG_(active,n);

return (on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
});
;})(init50011,active,id,with_let50010))
});
;})(init50011,active,id,with_let50010))
});})(init50011,active,id,with_let50010))
):(with_let50010[(2)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props1,new cljs.core.Keyword(null,"label","label",1718410804),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(active)))?label:null)),new cljs.core.Keyword(null,"id","id",-1388402092),["1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(reset_active.cljs$core$IFn$_invoke$arity$1 ? reset_active.cljs$core$IFn$_invoke$arity$1((1)) : reset_active.call(null,(1)))),error], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.shared_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),(0)], null)], null)], 0))], null)], null);
})(),(function (){var props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props2,new cljs.core.Keyword(null,"label","label",1718410804),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.deref(active)))?label:null)),new cljs.core.Keyword(null,"id","id",-1388402092),["2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(reset_active.cljs$core$IFn$_invoke$arity$1 ? reset_active.cljs$core$IFn$_invoke$arity$1((2)) : reset_active.call(null,(2)))),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.input.shared_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),(0)], null)], null)], 0))], null)], null);
})()], null);

return res__45710__auto__;
});

//# sourceMappingURL=body_index_calculator.components.input.js.map
