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
body_index_calculator.components.side_menu.menu_button = (function body_index_calculator$components$side_menu$menu_button(p__51025){
var map__51028 = p__51025;
var map__51028__$1 = (((((!((map__51028 == null))))?(((((map__51028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51028):map__51028);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51028__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$IconButton$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edge","edge",919909153),"start",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Menu.default], null)], null);
});
body_index_calculator.components.side_menu.menu_header = (function body_index_calculator$components$side_menu$menu_header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$ListSubheader$index.default,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (3))], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Settings"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Divider$index.default], null)], null);
});
body_index_calculator.components.side_menu.items = (function body_index_calculator$components$side_menu$items(locale,p__51046){
var map__51047 = p__51046;
var map__51047__$1 = (((((!((map__51047 == null))))?(((((map__51047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51047):map__51047);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__51055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51056 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51055,G__51056) : body_index_calculator.i18n.tr.call(null,G__51055,G__51056));
})()], null);
});
body_index_calculator.components.side_menu.button = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default);
body_index_calculator.components.side_menu.button_group = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ButtonGroup$index.default);
body_index_calculator.components.side_menu.button_picker = (function body_index_calculator$components$side_menu$button_picker(props){
var with_let51061 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51061","with-let51061",-1293778152));
var temp__5739__auto___51172 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51172 == null)){
} else {
var c__45709__auto___51173 = temp__5739__auto___51172;
if((with_let51061.generation === c__45709__auto___51173.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51061.generation = c__45709__auto___51173.ratomGeneration;
}


var init51062 = (with_let51061.length === (0));
var locale = ((init51062)?(with_let51061[(0)] = (function (){var G__51082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51082) : re_frame.core.subscribe.call(null,G__51082));
})()):(with_let51061[(0)]));
var res__45710__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(function (){var iter__4523__auto__ = ((function (init51062,locale,with_let51061){
return (function body_index_calculator$components$side_menu$button_picker_$_iter__51085(s__51086){
return (new cljs.core.LazySeq(null,((function (init51062,locale,with_let51061){
return (function (){
var s__51086__$1 = s__51086;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51086__$1);
if(temp__5735__auto__){
var s__51086__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51086__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51086__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51088 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51087 = (0);
while(true){
if((i__51087 < size__4522__auto__)){
var map__51092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51087);
var map__51092__$1 = (((((!((map__51092 == null))))?(((((map__51092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51092):map__51092);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__51088,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__51094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51095 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51094,G__51095) : body_index_calculator.i18n.tr.call(null,G__51094,G__51095));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)));

var G__51176 = (i__51087 + (1));
i__51087 = G__51176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51088),body_index_calculator$components$side_menu$button_picker_$_iter__51085(cljs.core.chunk_rest(s__51086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51088),null);
}
} else {
var map__51101 = cljs.core.first(s__51086__$2);
var map__51101__$1 = (((((!((map__51101 == null))))?(((((map__51101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51101):map__51101);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__51107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51108 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51107,G__51108) : body_index_calculator.i18n.tr.call(null,G__51107,G__51108));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)),body_index_calculator$components$side_menu$button_picker_$_iter__51085(cljs.core.rest(s__51086__$2)));
}
} else {
return null;
}
break;
}
});})(init51062,locale,with_let51061))
,null,null));
});})(init51062,locale,with_let51061))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(props));
})()], null));

return res__45710__auto__;
});
body_index_calculator.components.side_menu.theme_picker = (function body_index_calculator$components$side_menu$theme_picker(){
var with_let51114 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51114","with-let51114",1259540486));
var temp__5739__auto___51177 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51177 == null)){
} else {
var c__45709__auto___51178 = temp__5739__auto___51177;
if((with_let51114.generation === c__45709__auto___51178.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51114.generation = c__45709__auto___51178.ratomGeneration;
}


var init51115 = (with_let51114.length === (0));
var theme = ((init51115)?(with_let51114[(0)] = (function (){var G__51116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51116) : re_frame.core.subscribe.call(null,G__51116));
})()):(with_let51114[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.light","label","theme.light/label",162694369)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51115,theme,with_let51114){
return (function (){
var G__51117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"light","light",1918998747)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51117) : re_frame.core.dispatch.call(null,G__51117));
});})(init51115,theme,with_let51114))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.dark","label","theme.dark/label",-1938950481)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51115,theme,with_let51114){
return (function (){
var G__51121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"dark","dark",1818973999)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51121) : re_frame.core.dispatch.call(null,G__51121));
});})(init51115,theme,with_let51114))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.language_picker = (function body_index_calculator$components$side_menu$language_picker(){
var with_let51122 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51122","with-let51122",1779728012));
var temp__5739__auto___51181 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51181 == null)){
} else {
var c__45709__auto___51182 = temp__5739__auto___51181;
if((with_let51122.generation === c__45709__auto___51182.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51122.generation = c__45709__auto___51182.ratomGeneration;
}


var init51123 = (with_let51122.length === (0));
var locale = ((init51123)?(with_let51122[(0)] = (function (){var G__51126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51126) : re_frame.core.subscribe.call(null,G__51126));
})()):(with_let51122[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.en","label","locale.en/label",538774765)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"en","en",88457073),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51123,locale,with_let51122){
return (function (){
var G__51128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"en","en",88457073)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51128) : re_frame.core.dispatch.call(null,G__51128));
});})(init51123,locale,with_let51122))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.ru","label","locale.ru/label",538774667)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ru","ru",-1755311210),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51123,locale,with_let51122){
return (function (){
var G__51130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"ru","ru",-1755311210)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51130) : re_frame.core.dispatch.call(null,G__51130));
});})(init51123,locale,with_let51122))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.units_picker = (function body_index_calculator$components$side_menu$units_picker(){
var with_let51134 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51134","with-let51134",-1484143297));
var temp__5739__auto___51183 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51183 == null)){
} else {
var c__45709__auto___51184 = temp__5739__auto___51183;
if((with_let51134.generation === c__45709__auto___51184.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51134.generation = c__45709__auto___51184.ratomGeneration;
}


var init51135 = (with_let51134.length === (0));
var system = ((init51135)?(with_let51134[(0)] = (function (){var G__51140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51140) : re_frame.core.subscribe.call(null,G__51140));
})()):(with_let51134[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.metric","label","system.metric/label",-981091197)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"metric","metric",408798077),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51135,system,with_let51134){
return (function (){
var G__51141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"metric","metric",408798077)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51141) : re_frame.core.dispatch.call(null,G__51141));
});})(init51135,system,with_let51134))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.imperial","label","system.imperial/label",-1686355126)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51135,system,with_let51134){
return (function (){
var G__51142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"imperial","imperial",-1065360839)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51142) : re_frame.core.dispatch.call(null,G__51142));
});})(init51135,system,with_let51134))
], null)], null)], null)], null);

return res__45710__auto__;
});
body_index_calculator.components.side_menu.side_menu = (function body_index_calculator$components$side_menu$side_menu(p__51145){
var map__51146 = p__51145;
var map__51146__$1 = (((((!((map__51146 == null))))?(((((map__51146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51146):map__51146);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var with_let51148 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51148","with-let51148",1095345923));
var temp__5739__auto___51187 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___51187 == null)){
} else {
var c__45709__auto___51188 = temp__5739__auto___51187;
if((with_let51148.generation === c__45709__auto___51188.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let51148.generation = c__45709__auto___51188.ratomGeneration;
}


var init51149 = (with_let51148.length === (0));
var locale = ((init51149)?(with_let51148[(0)] = (function (){var G__51153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51153) : re_frame.core.subscribe.call(null,G__51153));
})()):(with_let51148[(0)]));
var res__45710__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Drawer$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (4))], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(40)], 0))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.menu_header], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4523__auto__ = ((function (init51149,locale,with_let51148,map__51146,map__51146__$1,open,on_close){
return (function body_index_calculator$components$side_menu$side_menu_$_iter__51154(s__51155){
return (new cljs.core.LazySeq(null,((function (init51149,locale,with_let51148,map__51146,map__51146__$1,open,on_close){
return (function (){
var s__51155__$1 = s__51155;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51155__$1);
if(temp__5735__auto__){
var s__51155__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51155__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51155__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51157 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51156 = (0);
while(true){
if((i__51156 < size__4522__auto__)){
var map__51162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51156);
var map__51162__$1 = (((((!((map__51162 == null))))?(((((map__51162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51162):map__51162);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"l","l",1395893423));
cljs.core.chunk_append(b__51157,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null));

var G__51190 = (i__51156 + (1));
i__51156 = G__51190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51157),body_index_calculator$components$side_menu$side_menu_$_iter__51154(cljs.core.chunk_rest(s__51155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51157),null);
}
} else {
var map__51164 = cljs.core.first(s__51155__$2);
var map__51164__$1 = (((((!((map__51164 == null))))?(((((map__51164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51164):map__51164);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"l","l",1395893423));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null),body_index_calculator$components$side_menu$side_menu_$_iter__51154(cljs.core.rest(s__51155__$2)));
}
} else {
return null;
}
break;
}
});})(init51149,locale,with_let51148,map__51146,map__51146__$1,open,on_close))
,null,null));
});})(init51149,locale,with_let51148,map__51146,map__51146__$1,open,on_close))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","label","locale/label",767218826)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51166,G__51167) : body_index_calculator.i18n.tr.call(null,G__51166,G__51167));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Language.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.language_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","label","system/label",1363243107)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51168,G__51169) : body_index_calculator.i18n.tr.call(null,G__51168,G__51169));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Straighten.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.units_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__51170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__51171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","label","theme/label",-1782682631)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__51170,G__51171) : body_index_calculator.i18n.tr.call(null,G__51170,G__51171));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$ColorLens.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.theme_picker], null)], null));
})())], null)], null);

return res__45710__auto__;
});

//# sourceMappingURL=body_index_calculator.components.side_menu.js.map
