goog.provide('body_index_calculator.events');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.utils.lang');
goog.require('body_index_calculator.validation');
goog.require('body_index_calculator.helpers');
goog.require('body_index_calculator.db');
body_index_calculator.events._STAR_trace_events_STAR_ = false;
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
body_index_calculator.events.check_and_throw = (function body_index_calculator$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["spec check failed: ",cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
body_index_calculator.events.check_spec_after_interceptor = (function (){var G__83473 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.events.check_and_throw,new cljs.core.Keyword("body-index-calculator.db","db","body-index-calculator.db/db",498938435));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__83473) : re_frame.core.after.call(null,G__83473));
})();
body_index_calculator.events.common_interseptors = ((body_index_calculator.events._STAR_trace_events_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,body_index_calculator.events.check_spec_after_interceptor], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.events.check_spec_after_interceptor], null));
body_index_calculator.events.html_attr_interceptor = (function (){var G__83475 = (function (p1__83474_SHARP_){
return body_index_calculator.utils.lang.write_html_lang_attr_BANG_(new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(p1__83474_SHARP_));
});
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__83475) : re_frame.core.after.call(null,G__83475));
})();
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387),body_index_calculator.events.common_interseptors,(function (_,___$1){
return body_index_calculator.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),body_index_calculator.events.common_interseptors,(function (db,p__83476){
var vec__83477 = p__83476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83477,(0),null);
var new_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83477,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"theme","theme",-1247880880),new_theme);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_index_calculator.events.common_interseptors,body_index_calculator.events.html_attr_interceptor),(function (db,p__83480){
var vec__83481 = p__83480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83481,(0),null);
var new_locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83481,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"locale","locale",-2115712697),new_locale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),body_index_calculator.events.common_interseptors,(function (db,p__83485){
var vec__83486 = p__83485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83486,(0),null);
var new_system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83486,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"system","system",-29381724),new_system),new cljs.core.Keyword(null,"form","form",-1624062471),((function (vec__83486,_,new_system){
return (function (p1__83484_SHARP_){
return body_index_calculator.helpers.convert_form_values(new_system,p1__83484_SHARP_);
});})(vec__83486,_,new_system))
);
}));
body_index_calculator.events.cond_field__GT_metric = (function body_index_calculator$events$cond_field__GT_metric(system,field){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system)){
return body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field);
} else {
return field;
}
});
var seq__83489_83526 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","gender","body-index-calculator.events/gender",-540746560),new cljs.core.Keyword("body-index-calculator.events","age","body-index-calculator.events/age",1840266373),new cljs.core.Keyword("body-index-calculator.events","weight","body-index-calculator.events/weight",-2106298254),new cljs.core.Keyword("body-index-calculator.events","height","body-index-calculator.events/height",2141634019),new cljs.core.Keyword("body-index-calculator.events","waist","body-index-calculator.events/waist",-1049141226),new cljs.core.Keyword("body-index-calculator.events","hip","body-index-calculator.events/hip",-266673182)], null));
var chunk__83490_83527 = null;
var count__83491_83528 = (0);
var i__83492_83529 = (0);
while(true){
if((i__83492_83529 < count__83491_83528)){
var ev_name_83530 = chunk__83490_83527.cljs$core$IIndexed$_nth$arity$2(null,i__83492_83529);
var path_83531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_83530))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_83530,body_index_calculator.events.common_interseptors,((function (seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,path_83531,ev_name_83530){
return (function (p__83507,p__83508){
var map__83509 = p__83507;
var map__83509__$1 = (((((!((map__83509 == null))))?(((((map__83509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83509):map__83509);
var db = map__83509__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83509__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__83510 = p__83508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83510,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83510,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_83531,((function (seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,map__83509,map__83509__$1,db,system,vec__83510,_,form_field,path_83531,ev_name_83530){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,map__83509,map__83509__$1,db,system,vec__83510,_,form_field,path_83531,ev_name_83530))
);
});})(seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,path_83531,ev_name_83530))
);


var G__83532 = seq__83489_83526;
var G__83533 = chunk__83490_83527;
var G__83534 = count__83491_83528;
var G__83535 = (i__83492_83529 + (1));
seq__83489_83526 = G__83532;
chunk__83490_83527 = G__83533;
count__83491_83528 = G__83534;
i__83492_83529 = G__83535;
continue;
} else {
var temp__5735__auto___83536 = cljs.core.seq(seq__83489_83526);
if(temp__5735__auto___83536){
var seq__83489_83537__$1 = temp__5735__auto___83536;
if(cljs.core.chunked_seq_QMARK_(seq__83489_83537__$1)){
var c__4550__auto___83538 = cljs.core.chunk_first(seq__83489_83537__$1);
var G__83539 = cljs.core.chunk_rest(seq__83489_83537__$1);
var G__83540 = c__4550__auto___83538;
var G__83541 = cljs.core.count(c__4550__auto___83538);
var G__83542 = (0);
seq__83489_83526 = G__83539;
chunk__83490_83527 = G__83540;
count__83491_83528 = G__83541;
i__83492_83529 = G__83542;
continue;
} else {
var ev_name_83543 = cljs.core.first(seq__83489_83537__$1);
var path_83544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_83543))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_83543,body_index_calculator.events.common_interseptors,((function (seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,path_83544,ev_name_83543,seq__83489_83537__$1,temp__5735__auto___83536){
return (function (p__83514,p__83515){
var map__83516 = p__83514;
var map__83516__$1 = (((((!((map__83516 == null))))?(((((map__83516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83516):map__83516);
var db = map__83516__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83516__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__83517 = p__83515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83517,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83517,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_83544,((function (seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,map__83516,map__83516__$1,db,system,vec__83517,_,form_field,path_83544,ev_name_83543,seq__83489_83537__$1,temp__5735__auto___83536){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,map__83516,map__83516__$1,db,system,vec__83517,_,form_field,path_83544,ev_name_83543,seq__83489_83537__$1,temp__5735__auto___83536))
);
});})(seq__83489_83526,chunk__83490_83527,count__83491_83528,i__83492_83529,path_83544,ev_name_83543,seq__83489_83537__$1,temp__5735__auto___83536))
);


var G__83553 = cljs.core.next(seq__83489_83537__$1);
var G__83554 = null;
var G__83555 = (0);
var G__83556 = (0);
seq__83489_83526 = G__83553;
chunk__83490_83527 = G__83554;
count__83491_83528 = G__83555;
i__83492_83529 = G__83556;
continue;
}
} else {
}
}
break;
}
if((typeof body_index_calculator !== 'undefined') && (typeof body_index_calculator.events !== 'undefined') && (typeof body_index_calculator.events.timeouts !== 'undefined')){
} else {
body_index_calculator.events.timeouts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
var G__83521_83557 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__83522_83558 = ((function (G__83521_83557){
return (function (p__83523){
var map__83524 = p__83523;
var map__83524__$1 = (((((!((map__83524 == null))))?(((((map__83524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83524):map__83524);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83524__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83524__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83524__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp__5739__auto___83563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(body_index_calculator.events.timeouts),id);
if((temp__5739__auto___83563 == null)){
} else {
var existing_83564 = temp__5739__auto___83563;
clearTimeout(existing_83564);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(body_index_calculator.events.timeouts,cljs.core.dissoc,id);
}

if((!((event == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(body_index_calculator.events.timeouts,cljs.core.assoc,id,setTimeout(((function (map__83524,map__83524__$1,id,event,time,G__83521_83557){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
});})(map__83524,map__83524__$1,id,event,time,G__83521_83557))
,time));
} else {
return null;
}
});})(G__83521_83557))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83521_83557,G__83522_83558) : re_frame.core.reg_fx.call(null,G__83521_83557,G__83522_83558));

//# sourceMappingURL=body_index_calculator.events.js.map
