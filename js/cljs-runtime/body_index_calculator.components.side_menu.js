goog.provide('body_index_calculator.components.side_menu');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
goog.require('body_index_calculator.events');
goog.require('body_index_calculator.helpers');
goog.require('body_index_calculator.i18n');
goog.require('body_index_calculator.mui_theme');
var module$node_modules$$material_ui$icons$Menu=shadow.js.require("module$node_modules$$material_ui$icons$Menu", {});
var module$node_modules$$material_ui$icons$Language=shadow.js.require("module$node_modules$$material_ui$icons$Language", {});
var module$node_modules$$material_ui$icons$ColorLens=shadow.js.require("module$node_modules$$material_ui$icons$ColorLens", {});
var module$node_modules$$material_ui$icons$Straighten=shadow.js.require("module$node_modules$$material_ui$icons$Straighten", {});
var module$node_modules$$material_ui$core$Divider$index=shadow.js.require("module$node_modules$$material_ui$core$Divider$index", {});
var module$node_modules$$material_ui$core$Box$index=shadow.js.require("module$node_modules$$material_ui$core$Box$index", {});
var module$node_modules$$material_ui$core$Drawer$index=shadow.js.require("module$node_modules$$material_ui$core$Drawer$index", {});
var module$node_modules$$material_ui$core$Typography$index=shadow.js.require("module$node_modules$$material_ui$core$Typography$index", {});
var module$node_modules$$material_ui$core$ListSubheader$index=shadow.js.require("module$node_modules$$material_ui$core$ListSubheader$index", {});
var module$node_modules$$material_ui$core$ButtonGroup$index=shadow.js.require("module$node_modules$$material_ui$core$ButtonGroup$index", {});
var module$node_modules$$material_ui$core$Button$index=shadow.js.require("module$node_modules$$material_ui$core$Button$index", {});
var module$node_modules$$material_ui$core$IconButton$index=shadow.js.require("module$node_modules$$material_ui$core$IconButton$index", {});
body_index_calculator.components.side_menu.menu_button = (function body_index_calculator$components$side_menu$menu_button(p__50122){
var map__50123 = p__50122;
var map__50123__$1 = (((((!((map__50123 == null))))?(((((map__50123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50123):map__50123);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50123__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$IconButton$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edge","edge",919909153),"start",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Menu.default], null)], null);
});
body_index_calculator.components.side_menu.menu_header = (function body_index_calculator$components$side_menu$menu_header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$ListSubheader$index.default,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (3))], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Settings"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Divider$index.default], null)], null);
});
body_index_calculator.components.side_menu.items = (function body_index_calculator$components$side_menu$items(locale,p__50130){
var map__50131 = p__50130;
var map__50131__$1 = (((((!((map__50131 == null))))?(((((map__50131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50131):map__50131);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__50138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50139 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50138,G__50139) : body_index_calculator.i18n.tr.call(null,G__50138,G__50139));
})()], null);
});
body_index_calculator.components.side_menu.button = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default);
body_index_calculator.components.side_menu.button_group = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ButtonGroup$index.default);
body_index_calculator.components.side_menu.button_picker = (function body_index_calculator$components$side_menu$button_picker(props){
var with_let50142 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50142","with-let50142",-1740084036));
var temp__5739__auto___50244 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50244 == null)){
} else {
var c__45709__auto___50245 = temp__5739__auto___50244;
if((with_let50142.generation === c__45709__auto___50245.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50142.generation = c__45709__auto___50245.ratomGeneration;
}


var init50143 = (with_let50142.length === (0));
var locale = ((init50143)?(with_let50142[(0)] = (function (){var G__50149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50149) : re_frame.core.subscribe.call(null,G__50149));
})()):(with_let50142[(0)]));
var res__45710__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(function (){var iter__4523__auto__ = ((function (init50143,locale,with_let50142){
return (function body_index_calculator$components$side_menu$button_picker_$_iter__50152(s__50153){
return (new cljs.core.LazySeq(null,((function (init50143,locale,with_let50142){
return (function (){
var s__50153__$1 = s__50153;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50153__$1);
if(temp__5735__auto__){
var s__50153__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50153__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50153__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50155 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50154 = (0);
while(true){
if((i__50154 < size__4522__auto__)){
var map__50159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50154);
var map__50159__$1 = (((((!((map__50159 == null))))?(((((map__50159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50159):map__50159);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50159__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50159__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50159__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__50155,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__50163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50164 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50163,G__50164) : body_index_calculator.i18n.tr.call(null,G__50163,G__50164));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)));

var G__50246 = (i__50154 + (1));
i__50154 = G__50246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50155),body_index_calculator$components$side_menu$button_picker_$_iter__50152(cljs.core.chunk_rest(s__50153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50155),null);
}
} else {
var map__50167 = cljs.core.first(s__50153__$2);
var map__50167__$1 = (((((!((map__50167 == null))))?(((((map__50167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50167):map__50167);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__50173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50174 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50173,G__50174) : body_index_calculator.i18n.tr.call(null,G__50173,G__50174));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)),body_index_calculator$components$side_menu$button_picker_$_iter__50152(cljs.core.rest(s__50153__$2)));
}
} else {
return null;
}
break;
}
});})(init50143,locale,with_let50142))
,null,null));
});})(init50143,locale,with_let50142))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(props));
})()], null));

return res__45710__auto__;
});
body_index_calculator.components.side_menu.theme_picker = (function body_index_calculator$components$side_menu$theme_picker(){
var with_let50178 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50178","with-let50178",43572254));
var temp__5739__auto___50247 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50247 == null)){
} else {
var c__45709__auto___50248 = temp__5739__auto___50247;
if((with_let50178.generation === c__45709__auto___50248.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50178.generation = c__45709__auto___50248.ratomGeneration;
}


var init50179 = (with_let50178.length === (0));
var theme = ((init50179)?(with_let50178[(0)] = (function (){var G__50182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50182) : re_frame.core.subscribe.call(null,G__50182));
})()):(with_let50178[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.light","label","theme.light/label",162694369)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50179,theme,with_let50178){
return (function (){
var G__50183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"light","light",1918998747)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50183) : re_frame.core.dispatch.call(null,G__50183));
});})(init50179,theme,with_let50178))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.dark","label","theme.dark/label",-1938950481)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50179,theme,with_let50178){
return (function (){
var G__50184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"dark","dark",1818973999)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50184) : re_frame.core.dispatch.call(null,G__50184));
});})(init50179,theme,with_let50178))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.language_picker = (function body_index_calculator$components$side_menu$language_picker(){
var with_let50185 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50185","with-let50185",-1031653397));
var temp__5739__auto___50251 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50251 == null)){
} else {
var c__45709__auto___50252 = temp__5739__auto___50251;
if((with_let50185.generation === c__45709__auto___50252.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50185.generation = c__45709__auto___50252.ratomGeneration;
}


var init50186 = (with_let50185.length === (0));
var locale = ((init50186)?(with_let50185[(0)] = (function (){var G__50190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50190) : re_frame.core.subscribe.call(null,G__50190));
})()):(with_let50185[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.en","label","locale.en/label",538774765)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"en","en",88457073),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50186,locale,with_let50185){
return (function (){
var G__50191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"en","en",88457073)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50191) : re_frame.core.dispatch.call(null,G__50191));
});})(init50186,locale,with_let50185))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.ru","label","locale.ru/label",538774667)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ru","ru",-1755311210),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50186,locale,with_let50185){
return (function (){
var G__50193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"ru","ru",-1755311210)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50193) : re_frame.core.dispatch.call(null,G__50193));
});})(init50186,locale,with_let50185))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.units_picker = (function body_index_calculator$components$side_menu$units_picker(){
var with_let50196 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50196","with-let50196",-237554494));
var temp__5739__auto___50253 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50253 == null)){
} else {
var c__45709__auto___50254 = temp__5739__auto___50253;
if((with_let50196.generation === c__45709__auto___50254.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50196.generation = c__45709__auto___50254.ratomGeneration;
}


var init50197 = (with_let50196.length === (0));
var system = ((init50197)?(with_let50196[(0)] = (function (){var G__50198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50198) : re_frame.core.subscribe.call(null,G__50198));
})()):(with_let50196[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.metric","label","system.metric/label",-981091197)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"metric","metric",408798077),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50197,system,with_let50196){
return (function (){
var G__50199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"metric","metric",408798077)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50199) : re_frame.core.dispatch.call(null,G__50199));
});})(init50197,system,with_let50196))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.imperial","label","system.imperial/label",-1686355126)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50197,system,with_let50196){
return (function (){
var G__50201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"imperial","imperial",-1065360839)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50201) : re_frame.core.dispatch.call(null,G__50201));
});})(init50197,system,with_let50196))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.side_menu = (function body_index_calculator$components$side_menu$side_menu(p__50206){
var map__50207 = p__50206;
var map__50207__$1 = (((((!((map__50207 == null))))?(((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50207):map__50207);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var with_let50209 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50209","with-let50209",1929896392));
var temp__5739__auto___50255 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50255 == null)){
} else {
var c__45709__auto___50256 = temp__5739__auto___50255;
if((with_let50209.generation === c__45709__auto___50256.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let50209.generation = c__45709__auto___50256.ratomGeneration;
}


var init50210 = (with_let50209.length === (0));
var locale = ((init50210)?(with_let50209[(0)] = (function (){var G__50216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50216) : re_frame.core.subscribe.call(null,G__50216));
})()):(with_let50209[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Drawer$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (4))], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(40)], 0))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.menu_header], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4523__auto__ = ((function (init50210,locale,with_let50209,map__50207,map__50207__$1,open,on_close){
return (function body_index_calculator$components$side_menu$side_menu_$_iter__50219(s__50220){
return (new cljs.core.LazySeq(null,((function (init50210,locale,with_let50209,map__50207,map__50207__$1,open,on_close){
return (function (){
var s__50220__$1 = s__50220;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50220__$1);
if(temp__5735__auto__){
var s__50220__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50220__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50220__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50222 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50221 = (0);
while(true){
if((i__50221 < size__4522__auto__)){
var map__50225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50221);
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"l","l",1395893423));
cljs.core.chunk_append(b__50222,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null));

var G__50261 = (i__50221 + (1));
i__50221 = G__50261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50222),body_index_calculator$components$side_menu$side_menu_$_iter__50219(cljs.core.chunk_rest(s__50220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50222),null);
}
} else {
var map__50229 = cljs.core.first(s__50220__$2);
var map__50229__$1 = (((((!((map__50229 == null))))?(((((map__50229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50229):map__50229);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50229__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50229__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50229__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50229__$1,new cljs.core.Keyword(null,"l","l",1395893423));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null),body_index_calculator$components$side_menu$side_menu_$_iter__50219(cljs.core.rest(s__50220__$2)));
}
} else {
return null;
}
break;
}
});})(init50210,locale,with_let50209,map__50207,map__50207__$1,open,on_close))
,null,null));
});})(init50210,locale,with_let50209,map__50207,map__50207__$1,open,on_close))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","label","locale/label",767218826)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50234,G__50235) : body_index_calculator.i18n.tr.call(null,G__50234,G__50235));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Language.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.language_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","label","system/label",1363243107)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50236,G__50237) : body_index_calculator.i18n.tr.call(null,G__50236,G__50237));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Straighten.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.units_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__50238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__50239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","label","theme/label",-1782682631)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50238,G__50239) : body_index_calculator.i18n.tr.call(null,G__50238,G__50239));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$ColorLens.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.theme_picker], null)], null));
})())], null)], null);

return res__45710__auto__;
});

//# sourceMappingURL=body_index_calculator.components.side_menu.js.map
