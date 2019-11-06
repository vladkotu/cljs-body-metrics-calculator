goog.provide('body_index_calculator.components.radio_group');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('body_index_calculator.helpers');
var module$node_modules$$material_ui$core$FormControl$index=shadow.js.require("module$node_modules$$material_ui$core$FormControl$index", {});
var module$node_modules$$material_ui$core$FormControlLabel$index=shadow.js.require("module$node_modules$$material_ui$core$FormControlLabel$index", {});
var module$node_modules$$material_ui$core$FormLabel$index=shadow.js.require("module$node_modules$$material_ui$core$FormLabel$index", {});
var module$node_modules$$material_ui$core$Radio$index=shadow.js.require("module$node_modules$$material_ui$core$Radio$index", {});
var module$node_modules$$material_ui$core$RadioGroup$index=shadow.js.require("module$node_modules$$material_ui$core$RadioGroup$index", {});
body_index_calculator.components.radio_group.hidden_radio = (function body_index_calculator$components$radio_group$hidden_radio(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormControlLabel$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Radio$index.default], null))], null)], null)], null);
});
body_index_calculator.components.radio_group.radio_group = (function body_index_calculator$components$radio_group$radio_group(p__69089){
var map__69090 = p__69089;
var map__69090__$1 = (((((!((map__69090 == null))))?(((((map__69090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69090):map__69090);
var add_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"add-hidden?","add-hidden?",886914015));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var radio_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"radio-buttons","radio-buttons",-1165571347));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormControl$index.default,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormLabel$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"legend"], null),label], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$RadioGroup$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons){
return (function (p1__69087_SHARP_){
var G__69092 = body_index_calculator.helpers.evalue(p1__69087_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__69092) : on_change.call(null,G__69092));
});})(map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons))
,new cljs.core.Keyword(null,"row","row",-570139521),true], null),(function (){var iter__4523__auto__ = ((function (map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons){
return (function body_index_calculator$components$radio_group$radio_group_$_iter__69093(s__69094){
return (new cljs.core.LazySeq(null,((function (map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons){
return (function (){
var s__69094__$1 = s__69094;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69094__$1);
if(temp__5735__auto__){
var s__69094__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69094__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69094__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69096 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69095 = (0);
while(true){
if((i__69095 < size__4522__auto__)){
var radio = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__69095);
cljs.core.chunk_append(b__69096,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormControlLabel$index.default,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(radio,new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Radio$index.default], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(radio))], null)));

var G__69134 = (i__69095 + (1));
i__69095 = G__69134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69096),body_index_calculator$components$radio_group$radio_group_$_iter__69093(cljs.core.chunk_rest(s__69094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69096),null);
}
} else {
var radio = cljs.core.first(s__69094__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$FormControlLabel$index.default,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(radio,new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Radio$index.default], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(radio))], null)),body_index_calculator$components$radio_group$radio_group_$_iter__69093(cljs.core.rest(s__69094__$2)));
}
} else {
return null;
}
break;
}
});})(map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons))
,null,null));
});})(map__69090,map__69090__$1,add_hidden_QMARK_,value,name,on_change,label,radio_buttons))
;
return iter__4523__auto__(radio_buttons);
})(),(cljs.core.truth_(add_hidden_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.radio_group.hidden_radio], null):null)], null)], null);
});

//# sourceMappingURL=body_index_calculator.components.radio_group.js.map
