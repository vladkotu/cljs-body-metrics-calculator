goog.provide('day8.re_frame_10x.events');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('day8.re_frame_10x.utils.localstorage');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.string');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.core');
goog.require('re_frame.trace');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.styles');
goog.require('clojure.set');
goog.require('day8.re_frame_10x.metamorphic');
day8.re_frame_10x.events.fixed_after = (function day8$re_frame_10x$events$fixed_after(f){
var G__58294 = new cljs.core.Keyword(null,"id","id",-1388402092);
var G__58295 = new cljs.core.Keyword(null,"after","after",594996914);
var G__58296 = new cljs.core.Keyword(null,"after","after",594996914);
var G__58297 = ((function (G__58294,G__58295,G__58296){
return (function day8$re_frame_10x$events$fixed_after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
});})(G__58294,G__58295,G__58296))
;
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__58294,G__58295,G__58296,G__58297) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.__GT_interceptor.call(null,G__58294,G__58295,G__58296,G__58297));
});
day8.re_frame_10x.events.log_trace_QMARK_ = (function day8$re_frame_10x$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814))));
var component_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if((!(render_operation_QMARK_))){
return true;
} else {
return (!(clojure.string.includes_QMARK_(component_path,"devtools outer")));
}
});
day8.re_frame_10x.events.disable_tracing_BANG_ = (function day8$re_frame_10x$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881));
});
day8.re_frame_10x.events.enable_tracing_BANG_ = (function day8$re_frame_10x$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881),(function (p1__58325_SHARP_){
var G__58327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),p1__58325_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58327) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__58327));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.events.dissoc_in = (function day8$re_frame_10x$events$dissoc_in(m,p__58328){
var vec__58329 = p__58328;
var seq__58330 = cljs.core.seq(vec__58329);
var first__58331 = cljs.core.first(seq__58330);
var seq__58330__$1 = cljs.core.next(seq__58330);
var k = first__58331;
var ks = seq__58330__$1;
var keys = vec__58329;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.events.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame_10x.events.read_string_maybe = (function day8$re_frame_10x$events$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),day8.re_frame_10x.utils.utils.default_readers], null),s);
}catch (e58339){var e = e58339;
return null;
}});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__58346){
var vec__58348 = p__58346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(0),null);
var width_PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("panel-width-ratio",(function (){var x__4219__auto__ = width_PERCENT_;
var y__4220__auto__ = 0.05;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__4219__auto__ = width_PERCENT_;
var y__4220__auto__ = 0.05;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),(function (db,p__58351){
var vec__58352 = p__58351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58352,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58352,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null),width);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__58355){
var vec__58356 = p__58355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356,(0),null);
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("selected-tab",selected_tab);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null),cljs.core.not);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__58360){
var vec__58361 = p__58360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58361,(0),null);
var show_panel_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58361,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",show_panel_QMARK_);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805),(function (db,_){
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_();

location.reload();

return db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__4131__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame_10x.events.enable_tracing_BANG_();
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame_10x.events.disable_tracing_BANG_();
}
}

day8.re_frame_10x.utils.localstorage.save_BANG_("using-trace?",using_trace_QMARK_);

day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",now_showing_QMARK_);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),(function (db,p__58365){
var vec__58366 = p__58365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58366,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58366,(1),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not(isNaN(num))) && (cljs.core.pos_int_QMARK_(num))))?num:(5));
day8.re_frame_10x.utils.localstorage.save_BANG_("retained-epochs",num__$1);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null),num__$1);
}));
day8.re_frame_10x.events.ignored_event_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58371) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58371));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58369_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("ignored-events",p1__58369_SHARP_);
}))], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__58372){
var vec__58373 = p__58372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58373,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58373,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ignored_events,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__58384){
var vec__58385 = p__58384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(1),null);
var event_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(event_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),((function (event,vec__58385,_,id,event_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__58385,_,id,event_str))
);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),day8.re_frame_10x.events.ignored_event_mw,(function (_,p__58388){
var vec__58389 = p__58388;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.filtered_view_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58393) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58393));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58392_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filtered-view-trace",p1__58392_SHARP_);
}))], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__58394){
var vec__58395 = p__58394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58395,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58395,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(filtered_view_trace,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__58398){
var vec__58399 = p__58398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(1),null);
var ns_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(ns_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),((function (event,vec__58399,_,id,ns_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__58399,_,id,ns_str))
);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),day8.re_frame_10x.events.filtered_view_trace_mw,(function (_,p__58402){
var vec__58403 = p__58402;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58403,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58403,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.low_level_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58407) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58407));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58406_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("low-level-trace",p1__58406_SHARP_);
}))], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),day8.re_frame_10x.events.low_level_trace_mw,(function (_,p__58412){
var vec__58417 = p__58412;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(0),null);
var low_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(1),null);
return low_level;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),day8.re_frame_10x.events.low_level_trace_mw,(function (low_level,p__58426){
var vec__58427 = p__58426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58427,(0),null);
var trace_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58427,(1),null);
var capture_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58427,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(low_level,trace_type,capture_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),(function (db,p__58440){
var vec__58441 = p__58440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58441,(0),null);
var debug_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58441,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),debug_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58455) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58455));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58444_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-follows-events?",p1__58444_SHARP_);
}))], null),(function (db,p__58456){
var vec__58458 = p__58456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(0),null);
var follows_events_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(1),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.events.mount = (function day8$re_frame_10x$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-10x--");
var resize_update_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handle_window_resize = ((function (app,resize_update_scheduled_QMARK_){
return (function (e){
if(cljs.core.truth_(cljs.core.deref(resize_update_scheduled_QMARK_))){
return null;
} else {
var G__58468_59136 = ((function (app,resize_update_scheduled_QMARK_){
return (function (){
var width_59137 = popup_window.innerWidth;
var height_59138 = popup_window.innerHeight;
var G__58469_59139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_59137,new cljs.core.Keyword(null,"height","height",1025178622),height_59138], null)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58469_59139) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__58469_59139));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,false);
});})(app,resize_update_scheduled_QMARK_))
;
(reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__58468_59136) : reagent.impl.batching.next_tick.call(null,G__58468_59136));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,true);
}
});})(app,resize_update_scheduled_QMARK_))
;
var handle_window_position = (function (){var pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (pos,app,resize_update_scheduled_QMARK_,handle_window_resize){
return (function (){
var map__58470 = cljs.core.deref(pos);
var map__58470__$1 = (((((!((map__58470 == null))))?(((((map__58470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58470):map__58470);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var screen_left = popup_window.screenX;
var screen_top = popup_window.screenY;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left,screen_left)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top,screen_top)))){
var G__58480_59195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58480_59195) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__58480_59195));

return cljs.core.reset_BANG_(pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null));
} else {
return null;
}
});
;})(pos,app,resize_update_scheduled_QMARK_,handle_window_resize))
})();
var window_position_interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var unmount = ((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval){
return (function (_){
popup_window.removeEventListener("resize",handle_window_resize);

var G__58485_59198 = cljs.core.deref(window_position_interval);
if((G__58485_59198 == null)){
} else {
clearInterval(G__58485_59198);
}

return null;
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval))
;
day8.re_frame_10x.styles.inject_trace_styles(popup_document);

var G__58490_59206 = popup_window;
var G__58491_59207 = "onunload";
var G__58492_59208 = ((function (G__58490_59206,G__58491_59207,app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
var G__58493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58493) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__58493));
});})(G__58490_59206,G__58491_59207,app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
;
goog.object.set(G__58490_59206,G__58491_59207,G__58492_59208);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
popup_window.addEventListener("resize",handle_window_resize);

popup_window.addEventListener("beforeunload",unmount);

return cljs.core.reset_BANG_(window_position_interval,setInterval(handle_window_position,(2000)));
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
], null))], null),app);
});
/**
 * Originally copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.events.open_debugger_window = (function day8$re_frame_10x$events$open_debugger_window(p__58506){
var map__58507 = p__58506;
var map__58507__$1 = (((((!((map__58507 == null))))?(((((map__58507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58507):map__58507);
var dimensions = map__58507__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var doc_title = document.title;
var new_window_title = (function (){var G__58513 = ["re-frame-10x | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_title)].join('');
return goog.string.escapeString(G__58513);
})();
var new_window_html = ["<head><title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_window_title),"</title></head><body style=\"margin: 0px;\"><div id=\"--re-frame-10x--\" class=\"external-window\"></div></body>"].join('');
var temp__5733__auto__ = window.open("about:blank","re-frame-10x-popout",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),",left=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),",top=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
if(cljs.core.truth_(temp__5733__auto__)){
var w = temp__5733__auto__;
var d = w.document;
var temp__5735__auto___59229 = d.getElementById("--re-frame-10x--");
if(cljs.core.truth_(temp__5735__auto___59229)){
var el_59230 = temp__5735__auto___59229;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.unmount_component_at_node(el_59230);
} else {
}

d.open();

d.write(new_window_html);

var G__58520_59236 = w;
var G__58521_59237 = "onload";
var G__58522_59238 = ((function (G__58520_59236,G__58521_59237,d,w,temp__5733__auto__,doc_title,new_window_title,new_window_html,map__58507,map__58507__$1,dimensions,width,height,top,left){
return (function (){
return day8.re_frame_10x.events.mount(w,d);
});})(G__58520_59236,G__58521_59237,d,w,temp__5733__auto__,doc_title,new_window_title,new_window_html,map__58507,map__58507__$1,dimensions,width,height,top,left))
;
goog.object.set(G__58520_59236,G__58521_59237,G__58522_59238);

d.close();

return true;
} else {
return false;
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
if(day8.re_frame_10x.events.open_debugger_window(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)))){
day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame_10x.events.dissoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58536) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58536));
})(),(function (){var G__58537 = (function (p1__58535_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__58535_SHARP_);
});
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__58537) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.call(null,G__58537));
})()], null),(function (dim,p__58542){
var vec__58543 = p__58542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(0),null);
var new_dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(1),null);
return new_dim;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58551) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58551));
})(),(function (){var G__58552 = (function (p1__58550_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__58550_SHARP_);
});
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__58552) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.call(null,G__58552));
})()], null),(function (dim,p__58557){
var vec__58558 = p__58557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58558,(0),null);
var map__58561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58558,(1),null);
var map__58561__$1 = (((((!((map__58561 == null))))?(((((map__58561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58561):map__58561);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dim,new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58568) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58568));
})(),(function (){var G__58569 = (function (p1__58567_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("external-window-dimensions",p1__58567_SHARP_);
});
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__58569) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after.call(null,G__58569));
})()], null),(function (dim,p__58570){
var vec__58571 = p__58570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(0),null);
var map__58574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(1),null);
var map__58574__$1 = (((((!((map__58574 == null))))?(((((map__58574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58574):map__58574);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dim,new cljs.core.Keyword(null,"left","left",-399115937),left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),top], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame_10x.events.enable_tracing_BANG_();

return null;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame_10x.events.disable_tracing_BANG_();

return null;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
var G__58576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__58576) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch_sync.call(null,G__58576));
}));

return null;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__58579){
var vec__58580 = p__58579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(0),null);
var unloading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame_10x.events.save_filter_items = (function day8$re_frame_10x$events$save_filter_items(filter_items){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filter-items",filter_items);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__58595){
var vec__58596 = p__58595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58596,(0),null);
var filter_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58596,(1),null);
day8.re_frame_10x.events.save_filter_items(filter_items);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58606) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58606));
})()], null),(function (filter_items,p__58608){
var vec__58609 = p__58608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58609,(0),null);
var filter_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58609,(1),null);
var filter_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58609,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some(((function (vec__58609,_,filter_input,filter_type){
return (function (p1__58600_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__58600_SHARP_));
});})(vec__58609,_,filter_input,filter_type))
,filter_items))?null:(function (){var filter_items__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__4120__auto__){
return cljs.core.some(((function (and__4120__auto__,vec__58609,_,filter_input,filter_type){
return (function (p1__58601_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__58601_SHARP_));
});})(and__4120__auto__,vec__58609,_,filter_input,filter_type))
,filter_items);
} else {
return and__4120__auto__;
}
})())?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__58609,_,filter_input,filter_type){
return (function (p1__58602_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__58602_SHARP_));
});})(vec__58609,_,filter_input,filter_type))
,filter_items):filter_items);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filter_items__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case(filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})());
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58619) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58619));
})()], null),(function (filter_items,p__58624){
var vec__58625 = p__58624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(0),null);
var filter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(1),null);
var new_db = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__58625,_,filter_id){
return (function (p1__58618_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58618_SHARP_),filter_id);
});})(vec__58625,_,filter_id))
,filter_items);
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame_10x.events.dissoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame_10x.events.save_filter_items(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58630) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58630));
})()], null),(function (trace_detail_expansions,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_detail_expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58636) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58636));
})()], null),(function (expansions,p__58639){
var vec__58640 = p__58639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58640,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58640,(1),null);
var showing_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (showing_QMARK_,vec__58640,_,id){
return (function (p1__58635_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not(p1__58635_SHARP_);
}
});})(showing_QMARK_,vec__58640,_,id))
);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58647) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58647));
})()], null),(function (categories,p__58652){
var vec__58653 = p__58652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(1),null);
var new_categories__$1 = ((clojure.set.superset_QMARK_(categories,new_categories))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(categories,new_categories):clojure.set.union.cljs$core$IFn$_invoke$arity$2(categories,new_categories));
day8.re_frame_10x.utils.localstorage.save_BANG_("categories",new_categories__$1);

return new_categories__$1;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58657) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58657));
})()], null),(function (categories,p__58662){
var vec__58663 = p__58662;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58663,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58663,(1),null);
return new_categories;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665),new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58671) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58671));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58670_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("show-epoch-traces?",p1__58670_SHARP_);
}))], null),(function (_,p__58672){
var vec__58677 = p__58672;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58677,(0),null);
var show_epoch_traces_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58677,(1),null);
return show_epoch_traces_QMARK_;
}));
day8.re_frame_10x.events.app_db_path_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58681) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58681));
})(),day8.re_frame_10x.events.fixed_after((function (p1__58680_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-paths",p1__58680_SHARP_);
}))], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","create-path","app-db/create-path",-1109143265),day8.re_frame_10x.events.app_db_path_mw,(function (paths,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path","app-db/update-path",-2057697283),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__58694){
var vec__58695 = p__58694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695,(1),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695,(2),null);
var path = day8.re_frame_10x.events.read_string_maybe(path_str);
var paths__$1 = cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if((((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)))){
return cljs.core.assoc_in(cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path-blur","app-db/update-path-blur",637142516),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__58718){
var vec__58719 = p__58718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(1),null);
var map__58726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__58726__$1 = (((((!((map__58726 == null))))?(((((map__58726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58726):map__58726);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-path-visibility","app-db/set-path-visibility",1482573598),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__58736){
var vec__58737 = p__58736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58737,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58737,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58737,(2),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-diff-visibility","app-db/set-diff-visibility",709297655),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__58746){
var vec__58747 = p__58746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58747,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58747,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58747,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__58758){
var vec__58759 = p__58758;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58759,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58759,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),day8.re_frame_10x.events.app_db_path_mw,(function (db,p__58766){
var vec__58767 = p__58766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58767,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58767,(1),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__58777){
var vec__58778 = p__58777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(0),null);
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58783) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58783));
})()], null),(function (db,p__58786){
var vec__58787 = p__58786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58787,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58787,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",paths);

return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58798) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58798));
})()], null),(function (paths,p__58799){
var vec__58800 = p__58799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58800,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58800,(1),null);
var new_paths = ((cljs.core.contains_QMARK_(paths,path))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path));
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",new_paths);

return new_paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58807) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58807));
})()], null),(function (paths,_){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),(function (db,p__58818){
var vec__58819 = p__58818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58819,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58819,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)))){
var epochs_59400 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_59401 = (function (){var or__4131__auto__ = new_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs_59400,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_59402 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs_59400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_59401], null));
var event_59403 = day8.re_frame_10x.metamorphic.matched_event(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_59402));
var temp__5739__auto___59404 = day8.re_frame_10x.metamorphic.app_db_after(event_59403);
if((temp__5739__auto___59404 == null)){
} else {
var new_db_59405 = temp__5739__auto___59404;
cljs.core.reset_BANG_(re_frame.db.app_db,new_db_59405);
}
} else {
}

return db;
}));
day8.re_frame_10x.events.first_match_id = (function day8$re_frame_10x$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),(function (p__58824,p__58825){
var map__58826 = p__58824;
var map__58826__$1 = (((((!((map__58826 == null))))?(((((map__58826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58826):map__58826);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58827 = p__58825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58827,(0),null);
var new_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58827,(1),null);
var temp__5733__auto__ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.log_trace_QMARK_,new_traces));
if(cljs.core.truth_(temp__5733__auto__)){
var filtered_traces = temp__5733__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.metamorphic.initial_parse_state);
var map__58843 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__58843__$1 = (((((!((map__58843 == null))))?(((((map__58843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58843):map__58843);
var drop_re_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_traces,filtered_traces);
var parse_state__$1 = day8.re_frame_10x.metamorphic.parse_traces(parse_state,filtered_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (match){
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.matched_event(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_(events_to_ignore,cljs.core.first(event));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
,new_matches);
var subscription_info = day8.re_frame_10x.metamorphic.subscription_info(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),filtered_traces,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.metamorphic.subscription_match_state(sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest(subscription_match_state);
var new_sub_state = cljs.core.last(subscription_match_state);
var timing = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (match){
var epoch_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.utils.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match)))),all_traces);
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epoch_traces,(0));
var event_handler_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__4131__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
,new_matches__$1);
var new_matches__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
,new_matches__$1,subscription_matches,timing);
var quiescent_QMARK_ = (function (){var or__4131__auto__ = cljs.core.seq(new_matches__$2);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.quiescent_QMARK_,filtered_traces);
}
})();
var all_matches = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.events.first_match_id(cljs.core.first(retained_matches));
var retained_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (p1__58823_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58823_SHARP_) < first_id_to_retain);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (trace){
var or__4131__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_(trace):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_(trace);
} else {
return null;
}
}
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
)),all_traces);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces){
return (function (epochs){
var current_index = new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),((cljs.core.seq(new_matches__$2))?null:current_id),new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),((cljs.core.seq(new_matches__$2))?null:current_index)], 0));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__58843,map__58843__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5733__auto__,map__58826,map__58826__$1,db,vec__58827,_,new_traces))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(quiescent_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263)], null):null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58889) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58889));
})()], null),(function (p__58897,_){
var map__58898 = p__58897;
var map__58898__$1 = (((((!((map__58898 == null))))?(((((map__58898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58898):map__58898);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5737__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5737__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec(((function (match_ids,current_id,temp__5737__auto__,map__58898,map__58898__$1,db){
return (function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
});})(match_ids,current_id,temp__5737__auto__,map__58898,map__58898__$1,db))
,match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58923) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58923));
})()], null),(function (p__58930,_){
var map__58931 = p__58930;
var map__58931__$1 = (((((!((map__58931 == null))))?(((((map__58931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58931):map__58931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5737__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
var new_id = day8.re_frame_10x.utils.utils.last_in_vec(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5737__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec(((function (match_ids,current_id,temp__5737__auto__,map__58931,map__58931__$1,db){
return (function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
});})(match_ids,current_id,temp__5737__auto__,map__58931,map__58931__$1,db))
,match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","most-recent-epoch","epochs/most-recent-epoch",1551402402),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58942) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58942));
})()], null),(function (p__58943,_){
var map__58944 = p__58943;
var map__58944__$1 = (((((!((map__58944 == null))))?(((((map__58944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58944):map__58944);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),null], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),day8.re_frame_10x.utils.utils.last_in_vec(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","replay","epochs/replay",315529905),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58951) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58951));
})()], null),(function (epochs,_){
var current_epoch_id = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var event_trace = day8.re_frame_10x.metamorphic.matched_event(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),current_epoch_id,new cljs.core.Keyword(null,"match-info","match-info",666319879)], null)));
var app_db_before = day8.re_frame_10x.metamorphic.app_db_before(event_trace);
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
cljs.core.reset_BANG_(re_frame.db.app_db,app_db_before);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epochs,new cljs.core.Keyword(null,"replay","replay",-681122389),event);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58955) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58955));
})()], null),(function (db,_){
var temp__5737__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5737__auto__ == null)){
return db;
} else {
var event_to_replay = temp__5737__auto__;
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event_to_replay) : re_frame.core.dispatch.call(null,event_to_replay));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"replay","replay",-681122389));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868),(function (db){
re_frame.trace.reset_tracing_BANG_();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"epochs","epochs",1796936425),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"traces","traces",-1301138004)], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58966) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58966));
})()], null),(function (_,p__58967){
var vec__58968 = p__58967;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58968,(0),null);
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58968,(1),null);
return ignore_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","open-pod?","subs/open-pod?",-57249156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58971) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58971));
})()], null),(function (expansions,p__58972){
var vec__58973 = p__58972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58973,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58973,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58973,(2),null);
return cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-diff-visibility","subs/set-diff-visibility",305207138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58976) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58976));
})()], null),(function (expansions,p__58977){
var vec__58983 = p__58977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-pinned","subs/set-pinned",980934095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"pinned","pinned",-1216085339)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58988) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58988));
})()], null),(function (pinned,p__58989){
var vec__58990 = p__58989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(1),null);
var pinned_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(2),null);
return cljs.core.assoc_in(pinned,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null),pinned_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","set-filter","subs/set-filter",-2133913941),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"filter-str","filter-str",1974484789)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__58993) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__58993));
})()], null),(function (_,p__59000){
var vec__59001 = p__59000;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var filter_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
return filter_value;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code-open?","code-open?",1228336744)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59004) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59004));
})()], null),(function (code_open_QMARK_,p__59005){
var vec__59010 = p__59005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59010,(0),null);
var open_QMARK__path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59010,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59010,(2),null);
return cljs.core.assoc_in(code_open_QMARK_,open_QMARK__path,open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59013) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59013));
})()], null),(function (form,p__59016){
var vec__59021 = p__59016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59021,(0),null);
var new_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59021,(1),null);
return new_form;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59024) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59024));
})()], null),(function (form,p__59029){
var vec__59030 = p__59029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59030,(0),null);
var new_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59030,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new_form)){
return null;
} else {
return new_form;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","set-show-all-code?","code/set-show-all-code?",1632099789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59037) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59037));
})()], null),(function (_show_all_code_QMARK_,p__59038){
var vec__59039 = p__59038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59039,(0),null);
var new_show_all_code_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59039,(1),null);
return new_show_all_code_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59046) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59046));
})()], null),(function (current_state,p__59047){
var vec__59048 = p__59047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59048,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59048,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"running","running",1554969103))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,new cljs.core.Keyword(null,"start","start",-355208981))))){
return new cljs.core.Keyword(null,"re-running","re-running",-97387070);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,new cljs.core.Keyword(null,"start","start",-355208981))){
return new cljs.core.Keyword(null,"running","running",1554969103);
} else {
return new cljs.core.Keyword(null,"end","end",-268185958);
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("component","set-direction","component/set-direction",2005265603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59051) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59051));
})()], null),(function (component,p__59052){
var vec__59053 = p__59052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59053,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59053,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("errors","dismiss-popup-failed","errors/dismiss-popup-failed",-286737091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__59056) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path.call(null,G__59056));
})()], null),(function (errors,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682));
}));

//# sourceMappingURL=day8.re_frame_10x.events.js.map
