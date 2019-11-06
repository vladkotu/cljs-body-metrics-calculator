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
body_index_calculator.components.side_menu.menu_button = (function body_index_calculator$components$side_menu$menu_button(p__83182){
var map__83186 = p__83182;
var map__83186__$1 = (((((!((map__83186 == null))))?(((((map__83186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83186):map__83186);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83186__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$IconButton$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edge","edge",919909153),"start",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Menu.default], null)], null);
});
body_index_calculator.components.side_menu.menu_header = (function body_index_calculator$components$side_menu$menu_header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$ListSubheader$index.default,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (3))], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Settings"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Divider$index.default], null)], null);
});
body_index_calculator.components.side_menu.items = (function body_index_calculator$components$side_menu$items(locale,p__83208){
var map__83209 = p__83208;
var map__83209__$1 = (((((!((map__83209 == null))))?(((((map__83209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83209):map__83209);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83209__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83209__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83209__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__83214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83215 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83214,G__83215) : body_index_calculator.i18n.tr.call(null,G__83214,G__83215));
})()], null);
});
body_index_calculator.components.side_menu.button = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Button$index.default);
body_index_calculator.components.side_menu.button_group = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ButtonGroup$index.default);
body_index_calculator.components.side_menu.button_picker = (function body_index_calculator$components$side_menu$button_picker(props){
var with_let83223 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let83223","with-let83223",-1139442671));
var temp__5739__auto___83314 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___83314 == null)){
} else {
var c__56559__auto___83315 = temp__5739__auto___83314;
if((with_let83223.generation === c__56559__auto___83315.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let83223.generation = c__56559__auto___83315.ratomGeneration;
}


var init83226 = (with_let83223.length === (0));
var locale = ((init83226)?(with_let83223[(0)] = (function (){var G__83233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__83233) : re_frame.core.subscribe.call(null,G__83233));
})()):(with_let83223[(0)]));
var res__56560__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(function (){var iter__4523__auto__ = ((function (init83226,locale,with_let83223){
return (function body_index_calculator$components$side_menu$button_picker_$_iter__83235(s__83236){
return (new cljs.core.LazySeq(null,((function (init83226,locale,with_let83223){
return (function (){
var s__83236__$1 = s__83236;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__83236__$1);
if(temp__5735__auto__){
var s__83236__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__83236__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__83236__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__83238 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__83237 = (0);
while(true){
if((i__83237 < size__4522__auto__)){
var map__83245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__83237);
var map__83245__$1 = (((((!((map__83245 == null))))?(((((map__83245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83245):map__83245);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__83238,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__83247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83248 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83247,G__83248) : body_index_calculator.i18n.tr.call(null,G__83247,G__83248));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)));

var G__83318 = (i__83237 + (1));
i__83237 = G__83318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__83238),body_index_calculator$components$side_menu$button_picker_$_iter__83235(cljs.core.chunk_rest(s__83236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__83238),null);
}
} else {
var map__83249 = cljs.core.first(s__83236__$2);
var map__83249__$1 = (((((!((map__83249 == null))))?(((((map__83249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83249):map__83249);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(active_QMARK_)?"contained":"outlined"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__83256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83257 = label;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83256,G__83257) : body_index_calculator.i18n.tr.call(null,G__83256,G__83257));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0))], null)),body_index_calculator$components$side_menu$button_picker_$_iter__83235(cljs.core.rest(s__83236__$2)));
}
} else {
return null;
}
break;
}
});})(init83226,locale,with_let83223))
,null,null));
});})(init83226,locale,with_let83223))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(props));
})()], null));

return res__56560__auto__;
});
body_index_calculator.components.side_menu.theme_picker = (function body_index_calculator$components$side_menu$theme_picker(){
var with_let83259 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let83259","with-let83259",1449502670));
var temp__5739__auto___83319 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___83319 == null)){
} else {
var c__56559__auto___83320 = temp__5739__auto___83319;
if((with_let83259.generation === c__56559__auto___83320.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let83259.generation = c__56559__auto___83320.ratomGeneration;
}


var init83260 = (with_let83259.length === (0));
var theme = ((init83260)?(with_let83259[(0)] = (function (){var G__83265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__83265) : re_frame.core.subscribe.call(null,G__83265));
})()):(with_let83259[(0)]));
var res__56560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.light","label","theme.light/label",162694369)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83260,theme,with_let83259){
return (function (){
var G__83268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"light","light",1918998747)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83268) : re_frame.core.dispatch.call(null,G__83268));
});})(init83260,theme,with_let83259))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme.dark","label","theme.dark/label",-1938950481)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref(theme)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83260,theme,with_let83259){
return (function (){
var G__83269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),new cljs.core.Keyword(null,"dark","dark",1818973999)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83269) : re_frame.core.dispatch.call(null,G__83269));
});})(init83260,theme,with_let83259))
], null)], null)], null)], null);

return res__56560__auto__;
});
body_index_calculator.components.side_menu.language_picker = (function body_index_calculator$components$side_menu$language_picker(){
var with_let83272 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let83272","with-let83272",-687320708));
var temp__5739__auto___83323 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___83323 == null)){
} else {
var c__56559__auto___83324 = temp__5739__auto___83323;
if((with_let83272.generation === c__56559__auto___83324.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let83272.generation = c__56559__auto___83324.ratomGeneration;
}


var init83273 = (with_let83272.length === (0));
var locale = ((init83273)?(with_let83272[(0)] = (function (){var G__83274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__83274) : re_frame.core.subscribe.call(null,G__83274));
})()):(with_let83272[(0)]));
var res__56560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.en","label","locale.en/label",538774765)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"en","en",88457073),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83273,locale,with_let83272){
return (function (){
var G__83277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"en","en",88457073)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83277) : re_frame.core.dispatch.call(null,G__83277));
});})(init83273,locale,with_let83272))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale.ru","label","locale.ru/label",538774667)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ru","ru",-1755311210),cljs.core.deref(locale)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83273,locale,with_let83272){
return (function (){
var G__83279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),new cljs.core.Keyword(null,"ru","ru",-1755311210)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83279) : re_frame.core.dispatch.call(null,G__83279));
});})(init83273,locale,with_let83272))
], null)], null)], null)], null);

return res__56560__auto__;
});
body_index_calculator.components.side_menu.units_picker = (function body_index_calculator$components$side_menu$units_picker(){
var with_let83281 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let83281","with-let83281",560824461));
var temp__5739__auto___83325 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___83325 == null)){
} else {
var c__56559__auto___83326 = temp__5739__auto___83325;
if((with_let83281.generation === c__56559__auto___83326.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let83281.generation = c__56559__auto___83326.ratomGeneration;
}


var init83282 = (with_let83281.length === (0));
var system = ((init83282)?(with_let83281[(0)] = (function (){var G__83285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__83285) : re_frame.core.subscribe.call(null,G__83285));
})()):(with_let83281[(0)]));
var res__56560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.button_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.metric","label","system.metric/label",-981091197)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"metric","metric",408798077),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83282,system,with_let83281){
return (function (){
var G__83290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"metric","metric",408798077)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83290) : re_frame.core.dispatch.call(null,G__83290));
});})(init83282,system,with_let83281))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system.imperial","label","system.imperial/label",-1686355126)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),cljs.core.deref(system)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init83282,system,with_let83281){
return (function (){
var G__83291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),new cljs.core.Keyword(null,"imperial","imperial",-1065360839)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83291) : re_frame.core.dispatch.call(null,G__83291));
});})(init83282,system,with_let83281))
], null)], null)], null)], null);

return res__56560__auto__;
});
body_index_calculator.components.side_menu.side_menu = (function body_index_calculator$components$side_menu$side_menu(p__83292){
var map__83293 = p__83292;
var map__83293__$1 = (((((!((map__83293 == null))))?(((((map__83293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83293):map__83293);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83293__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83293__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var with_let83295 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let83295","with-let83295",1828894720));
var temp__5739__auto___83328 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___83328 == null)){
} else {
var c__56559__auto___83329 = temp__5739__auto___83328;
if((with_let83295.generation === c__56559__auto___83329.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let83295.generation = c__56559__auto___83329.ratomGeneration;
}


var init83296 = (with_let83295.length === (0));
var locale = ((init83296)?(with_let83295[(0)] = (function (){var G__83297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__83297) : re_frame.core.subscribe.call(null,G__83297));
})()):(with_let83295[(0)]));
var res__56560__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Drawer$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / (4))], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),body_index_calculator.mui_theme.spacing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(40)], 0))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.menu_header], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4523__auto__ = ((function (init83296,locale,with_let83295,map__83293,map__83293__$1,open,on_close){
return (function body_index_calculator$components$side_menu$side_menu_$_iter__83298(s__83299){
return (new cljs.core.LazySeq(null,((function (init83296,locale,with_let83295,map__83293,map__83293__$1,open,on_close){
return (function (){
var s__83299__$1 = s__83299;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__83299__$1);
if(temp__5735__auto__){
var s__83299__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__83299__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__83299__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__83301 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__83300 = (0);
while(true){
if((i__83300 < size__4522__auto__)){
var map__83302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__83300);
var map__83302__$1 = (((((!((map__83302 == null))))?(((((map__83302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83302):map__83302);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83302__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83302__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83302__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83302__$1,new cljs.core.Keyword(null,"l","l",1395893423));
cljs.core.chunk_append(b__83301,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null));

var G__83330 = (i__83300 + (1));
i__83300 = G__83330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__83301),body_index_calculator$components$side_menu$side_menu_$_iter__83298(cljs.core.chunk_rest(s__83299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__83301),null);
}
} else {
var map__83304 = cljs.core.first(s__83299__$2);
var map__83304__$1 = (((((!((map__83304 == null))))?(((((map__83304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83304):map__83304);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83304__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83304__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83304__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83304__$1,new cljs.core.Keyword(null,"l","l",1395893423));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m","m",1632677161),(3),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(2),new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"element","element",1974019749),"div"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [controls], null)], null)], null)], null),body_index_calculator$components$side_menu$side_menu_$_iter__83298(cljs.core.rest(s__83299__$2)));
}
} else {
return null;
}
break;
}
});})(init83296,locale,with_let83295,map__83293,map__83293__$1,open,on_close))
,null,null));
});})(init83296,locale,with_let83295,map__83293,map__83293__$1,open,on_close))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__83306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","label","locale/label",767218826)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83306,G__83307) : body_index_calculator.i18n.tr.call(null,G__83306,G__83307));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Language.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.language_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__83308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","label","system/label",1363243107)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83308,G__83309) : body_index_calculator.i18n.tr.call(null,G__83308,G__83309));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$Straighten.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.units_picker], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__83310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(locale)], null);
var G__83311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","label","theme/label",-1782682631)], null);
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__83310,G__83311) : body_index_calculator.i18n.tr.call(null,G__83310,G__83311));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$$material_ui$icons$ColorLens.default,new cljs.core.Keyword(null,"controls","controls",1340701452),body_index_calculator.components.side_menu.theme_picker], null)], null));
})())], null)], null);

return res__56560__auto__;
});

//# sourceMappingURL=body_index_calculator.components.side_menu.js.map
