goog.provide('body_index_calculator.components.footer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('body_index_calculator.helpers');
goog.require('body_index_calculator.mui_theme');
var module$node_modules$$material_ui$icons$CopyrightTwoTone=shadow.js.require("module$node_modules$$material_ui$icons$CopyrightTwoTone", {});
var module$node_modules$$material_ui$core$BottomNavigation$index=shadow.js.require("module$node_modules$$material_ui$core$BottomNavigation$index", {});
var module$node_modules$$material_ui$core$BottomNavigationAction$index=shadow.js.require("module$node_modules$$material_ui$core$BottomNavigationAction$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
body_index_calculator.components.footer.copy_icon = reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$CopyrightTwoTone.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlColor","htmlColor",384351754),body_index_calculator.mui_theme.primary_color()], null)], null));
body_index_calculator.components.footer.footer_content = (function body_index_calculator$components$footer$footer_content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$BottomNavigation$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"showLabels","showLabels",1388874826),true], null),(function (){var iter__4523__auto__ = (function body_index_calculator$components$footer$footer_content_$_iter__49868(s__49869){
return (new cljs.core.LazySeq(null,(function (){
var s__49869__$1 = s__49869;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49869__$1);
if(temp__5735__auto__){
var s__49869__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49869__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__49869__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49871 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__49870 = (0);
while(true){
if((i__49870 < size__4522__auto__)){
var thing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__49870);
cljs.core.chunk_append(b__49871,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$BottomNavigationAction$index.default,thing], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(thing)], null)));

var G__49900 = (i__49870 + (1));
i__49870 = G__49900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49871),body_index_calculator$components$footer$footer_content_$_iter__49868(cljs.core.chunk_rest(s__49869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49871),null);
}
} else {
var thing = cljs.core.first(s__49869__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$BottomNavigationAction$index.default,thing], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(thing)], null)),body_index_calculator$components$footer$footer_content_$_iter__49868(cljs.core.rest(s__49869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"icon","icon",1679606541),body_index_calculator.components.footer.copy_icon], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Authors"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"etc..."], null)], null));
})()], null);
});
body_index_calculator.components.footer.footer = (function body_index_calculator$components$footer$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),body_index_calculator.helpers.with_styles_react(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),module$node_modules$$material_ui$core$Grid$index.default),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.footer.footer_content], null)], null);
});

//# sourceMappingURL=body_index_calculator.components.footer.js.map
