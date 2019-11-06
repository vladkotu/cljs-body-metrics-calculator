goog.provide('body_index_calculator.components.header');
goog.require('cljs.core');
goog.require('body_index_calculator.components.side_menu');
var module$node_modules$$material_ui$core$AppBar$index=shadow.js.require("module$node_modules$$material_ui$core$AppBar$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
var module$node_modules$$material_ui$core$Toolbar$index=shadow.js.require("module$node_modules$$material_ui$core$Toolbar$index", {});
var module$node_modules$$material_ui$core$Typography$index=shadow.js.require("module$node_modules$$material_ui$core$Typography$index", {});
goog.require('reagent.core');
body_index_calculator.components.header.header_content = (function body_index_calculator$components$header$header_content(){
var with_let69596 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let69596","with-let69596",-1054387710));
var temp__5739__auto___69603 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___69603 == null)){
} else {
var c__56559__auto___69604 = temp__5739__auto___69603;
if((with_let69596.generation === c__56559__auto___69604.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let69596.generation = c__56559__auto___69604.ratomGeneration;
}


var init69597 = (with_let69596.length === (0));
var open_QMARK_ = ((init69597)?(with_let69596[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let69596[(0)]));
var res__56560__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$AppBar$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Toolbar$index.default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.side_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(open_QMARK_),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (init69597,open_QMARK_,with_let69596){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
});})(init69597,open_QMARK_,with_let69596))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.side_menu.menu_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init69597,open_QMARK_,with_let69596){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
});})(init69597,open_QMARK_,with_let69596))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Typography$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5",new cljs.core.Keyword(null,"component","component",1555936782),"h1"], null),"Body Metrics Calculator"], null)], null)], null);

return res__56560__auto__;
});
body_index_calculator.components.header.header = (function body_index_calculator$components$header$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.header.header_content], null)], null);
});

//# sourceMappingURL=body_index_calculator.components.header.js.map
