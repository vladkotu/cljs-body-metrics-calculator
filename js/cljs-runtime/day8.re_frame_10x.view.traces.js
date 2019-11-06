goog.provide('day8.re_frame_10x.view.traces');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.view.components');
goog.require('day8.re_frame_10x.utils.pretty_print_condensed');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
day8.re_frame_10x.view.traces.query__GT_fn = (function day8$re_frame_10x$view$traces$query__GT_fn(query){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(query))){
return (function (trace){
return clojure.string.includes_QMARK_(clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))].join('')),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
});
} else {
return (function (trace){
return (new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace));
});
}
});
day8.re_frame_10x.view.traces.add_filter = (function day8$re_frame_10x$view$traces$add_filter(filter_items,filter_input,filter_type){
var G__57676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),filter_input,filter_type], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57676) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57676));
});
day8.re_frame_10x.view.traces.render_traces = (function day8$re_frame_10x$view$traces$render_traces(visible_traces,filter_items,filter_input,trace_detail_expansions){
var debug_QMARK_ = cljs.core.deref((function (){var G__57677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57677) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57677));
})());
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (debug_QMARK_){
return (function (index,p__57678){
var map__57679 = p__57678;
var map__57679__$1 = (((((!((map__57679 == null))))?(((((map__57679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57679):map__57679);
var trace = map__57679__$1;
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var show_row_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(trace_detail_expansions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(trace_detail_expansions)));
var op_name = ((cljs.core.vector_QMARK_(operation))?cljs.core.second(operation):operation);
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_){
return (function (){
var G__57681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57681) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57681));
});})(show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trace--trace",(function (){var G__57683 = op_type;
var G__57683__$1 = (((G__57683 instanceof cljs.core.Keyword))?G__57683.fqn:null);
switch (G__57683__$1) {
case "sub/create":
return "trace--sub-create";

break;
case "sub/run":
return "trace--sub-run";

break;
case "sub/dispose":
return "trace--sub-run";

break;
case "event":
return "trace--event";

break;
case "render":
return "trace--render";

break;
case "re-frame.router/fsm-trigger":
return "trace--fsm-trigger";

break;
default:
return null;

}
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--toggle","td.trace--toggle",1439700573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(show_row_QMARK_)?"\u25BC":"\u25B6")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op","td.trace--op",12927021),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_){
return (function (ev){
day8.re_frame_10x.view.traces.add_filter(filter_items,cljs.core.name(op_type),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op-string","td.trace--op-string",806514025),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_){
return (function (ev){
day8.re_frame_10x.view.traces.add_filter(filter_items,cljs.core.name(op_name),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_))
], null),day8.re_frame_10x.utils.pretty_print_condensed.truncate((20),new cljs.core.Keyword(null,"middle","middle",-701029031),day8.re_frame_10x.utils.pretty_print_condensed.str__GT_namespaced_sym(op_name))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),(function (){var temp__5735__auto__ = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tags,new cljs.core.Keyword(null,"query-v","query-v",-1514170131));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tags,new cljs.core.Keyword(null,"event","event",301435442));
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var vec__57690 = temp__5735__auto__;
var seq__57691 = cljs.core.seq(vec__57690);
var first__57692 = cljs.core.first(seq__57691);
var seq__57691__$1 = cljs.core.next(seq__57691);
var _ = first__57692;
var params = seq__57691__$1;
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"middle","middle",-701029031),(40),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed,params)));
} else {
return null;
}
})()], null)], null)], null),(cljs.core.truth_(debug_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta","td.trace--meta",-1502909226),new cljs.core.Keyword(null,"reaction","reaction",490869788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(trace)),"/",id], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta","td.trace--meta",-1502909226),duration.toFixed((1))," ms"], null))], null),(new cljs.core.List(null,(cljs.core.truth_(show_row_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.trace--details","tr.trace--details",998262242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-details"].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--details-tags","td.trace--details-tags",1722973599),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_){
return (function (){
return console.log(trace);
});})(show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.trace--details-tags-text","div.trace--details-tags-text",210345595),(function (){var tag_str = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tags], 0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(tag_str,(0),(400))),((((400) < cljs.core.count(tag_str)))?" ...":null)].join('');
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta.trace--details-icon","td.trace--meta.trace--details-icon",1686328364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_){
return (function (){
return console.log(tags);
});})(show_row_QMARK_,op_name,map__57679,map__57679__$1,trace,op_type,id,operation,tags,duration,debug_QMARK_))
], null)], null)], null):null),null,(1),null)),(2),null));
});})(debug_QMARK_))
,visible_traces));
});
day8.re_frame_10x.view.traces.render = (function day8$re_frame_10x$view$traces$render(){
var filter_input = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var filter_items = (function (){var G__57700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57700) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57700));
})();
var filter_type = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contains","contains",676899812));
var input_error = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var categories = (function (){var G__57701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","categories","traces/categories",-821318016)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57701) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57701));
})();
var trace_detail_expansions = (function (){var G__57702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57702) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57702));
})();
var beginning = (function (){var G__57703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57703) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57703));
})();
var end = (function (){var G__57704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57704) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57704));
})();
var traces = (function (){var G__57705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57705) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57705));
})();
var current_traces = (function (){var G__57706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57706) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57706));
})();
var show_epoch_traces_QMARK_ = (function (){var G__57707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57707) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57707));
})();
return ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var toggle_category_fn = ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (p1__57696_SHARP_){
var G__57708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),p1__57696_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57708) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57708));
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
;
var traces_to_filter = (cljs.core.truth_(cljs.core.deref(show_epoch_traces_QMARK_))?cljs.core.deref(current_traces):cljs.core.deref(traces));
var visible_traces = (function (){var G__57709 = traces_to_filter;
var G__57709__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (G__57709,toggle_category_fn,traces_to_filter,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (trace){
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"cached?","cached?",86081880)], null));
} else {
return and__4120__auto__;
}
});})(G__57709,toggle_category_fn,traces_to_filter,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
,G__57709)
;
var G__57709__$2 = ((cljs.core.seq(cljs.core.deref(categories)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__57709,G__57709__$1,toggle_category_fn,traces_to_filter,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (trace){
if(cljs.core.contains_QMARK_(cljs.core.deref(categories),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))){
return trace;
} else {
return null;
}
});})(G__57709,G__57709__$1,toggle_category_fn,traces_to_filter,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
,G__57709__$1):G__57709__$1);
var G__57709__$3 = ((cljs.core.seq(cljs.core.deref(filter_items)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.view.traces.query__GT_fn,cljs.core.deref(filter_items))),G__57709__$2):G__57709__$2);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),G__57709__$3);

})();
var save_query = ((function (toggle_category_fn,traces_to_filter,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filter_type),new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__4120__auto__){
return isNaN(parseFloat(cljs.core.deref(filter_input)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.reset_BANG_(input_error,true);
} else {
cljs.core.reset_BANG_(input_error,false);

return day8.re_frame_10x.view.traces.add_filter(filter_items,cljs.core.deref(filter_input),cljs.core.deref(filter_type));
}
});})(toggle_category_fn,traces_to_filter,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-contents","div.tab-contents",-893703725),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter","div.filter",145823472),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control","div.filter-control",1456858546),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-categories","ul.filter-categories",561361953),"show: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(cljs.core.deref(categories),new cljs.core.Keyword(null,"event","event",301435442)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),null], null), null)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57716) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57716));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),"events"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(cljs.core.deref(categories),new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57718) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57718));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),"subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(cljs.core.deref(categories),new cljs.core.Keyword(null,"render","render",-1408033454)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),null], null), null)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57719) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57719));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),"reagent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(cljs.core.deref(categories),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null), null)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57720) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57720));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),"internals"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),show_epoch_traces_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (p1__57697_SHARP_){
var G__57721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),p1__57697_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57721) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57721));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
,new cljs.core.Keyword(null,"label","label",1718410804),"Only show traces for this epoch?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-fields","div.filter-fields",322405243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (p1__57698_SHARP_){
return cljs.core.reset_BANG_(filter_type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__57698_SHARP_.target.value));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contains"], null),"contains"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"slower-than"], null),"slower than"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control-input","div.filter-control-input",1831328221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.search_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),save_query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (p1__57699_SHARP_){
return cljs.core.reset_BANG_(filter_input,p1__57699_SHARP_.target.value);
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type to filter traces"], null)], null),(cljs.core.truth_(cljs.core.deref(input_error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-error","div.input-error",968893592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),"Please enter a valid number."], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-items","ul.filter-items",817035023),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-item","li.filter-item",955031911),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57722) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57722));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.filter-item-string","span.filter-item-string",-274349574),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
,cljs.core.deref(filter_items))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.autoscroll_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-scrollable",new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57724) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57724));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(trace_detail_expansions)))?"-":"+")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"operations"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(visible_traces))," traces"].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_){
return (function (){
var G__57725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57725) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57725));
});})(toggle_category_fn,traces_to_filter,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
], null),"clear"], null),")"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),"meta"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),day8.re_frame_10x.view.traces.render_traces(visible_traces,filter_items,filter_input,trace_detail_expansions)], null)], null)], null)], null);
});
;})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions,beginning,end,traces,current_traces,show_epoch_traces_QMARK_))
});

//# sourceMappingURL=day8.re_frame_10x.view.traces.js.map
