goog.provide('body_index_calculator.events');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('re_frame.core');
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
body_index_calculator.events.check_spec_after_interceptor = (function (){var G__50021 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.events.check_and_throw,new cljs.core.Keyword("body-index-calculator.db","db","body-index-calculator.db/db",498938435));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__50021) : re_frame.core.after.call(null,G__50021));
})();
body_index_calculator.events.common_interseptors = ((body_index_calculator.events._STAR_trace_events_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,body_index_calculator.events.check_spec_after_interceptor], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.events.check_spec_after_interceptor], null));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387),(function (_,___$1){
return body_index_calculator.db.default_db_with_values;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),(function (db,p__50022){
var vec__50023 = p__50022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50023,(0),null);
var new_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50023,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"theme","theme",-1247880880),new_theme);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),(function (db,p__50026){
var vec__50027 = p__50026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(0),null);
var new_locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"locale","locale",-2115712697),new_locale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),(function (db,p__50031){
var vec__50032 = p__50031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032,(0),null);
var new_system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"system","system",-29381724),new_system),new cljs.core.Keyword(null,"form","form",-1624062471),((function (vec__50032,_,new_system){
return (function (p1__50030_SHARP_){
return body_index_calculator.helpers.convert_form_values(new_system,p1__50030_SHARP_);
});})(vec__50032,_,new_system))
);
}));
body_index_calculator.events.cond_field__GT_metric = (function body_index_calculator$events$cond_field__GT_metric(system,field){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system)){
return body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field);
} else {
return field;
}
});
var seq__50035_50080 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","gender","body-index-calculator.events/gender",-540746560),new cljs.core.Keyword("body-index-calculator.events","age","body-index-calculator.events/age",1840266373),new cljs.core.Keyword("body-index-calculator.events","weight","body-index-calculator.events/weight",-2106298254),new cljs.core.Keyword("body-index-calculator.events","height","body-index-calculator.events/height",2141634019),new cljs.core.Keyword("body-index-calculator.events","waist","body-index-calculator.events/waist",-1049141226),new cljs.core.Keyword("body-index-calculator.events","hip","body-index-calculator.events/hip",-266673182)], null));
var chunk__50036_50081 = null;
var count__50037_50082 = (0);
var i__50038_50083 = (0);
while(true){
if((i__50038_50083 < count__50037_50082)){
var ev_name_50084 = chunk__50036_50081.cljs$core$IIndexed$_nth$arity$2(null,i__50038_50083);
var path_50085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_50084))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_50084,body_index_calculator.events.common_interseptors,((function (seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,path_50085,ev_name_50084){
return (function (p__50053,p__50054){
var map__50055 = p__50053;
var map__50055__$1 = (((((!((map__50055 == null))))?(((((map__50055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50055):map__50055);
var db = map__50055__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50055__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__50056 = p__50054;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50056,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50056,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_50085,((function (seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,map__50055,map__50055__$1,db,system,vec__50056,_,form_field,path_50085,ev_name_50084){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,map__50055,map__50055__$1,db,system,vec__50056,_,form_field,path_50085,ev_name_50084))
);
});})(seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,path_50085,ev_name_50084))
);


var G__50086 = seq__50035_50080;
var G__50087 = chunk__50036_50081;
var G__50088 = count__50037_50082;
var G__50089 = (i__50038_50083 + (1));
seq__50035_50080 = G__50086;
chunk__50036_50081 = G__50087;
count__50037_50082 = G__50088;
i__50038_50083 = G__50089;
continue;
} else {
var temp__5735__auto___50090 = cljs.core.seq(seq__50035_50080);
if(temp__5735__auto___50090){
var seq__50035_50091__$1 = temp__5735__auto___50090;
if(cljs.core.chunked_seq_QMARK_(seq__50035_50091__$1)){
var c__4550__auto___50092 = cljs.core.chunk_first(seq__50035_50091__$1);
var G__50093 = cljs.core.chunk_rest(seq__50035_50091__$1);
var G__50094 = c__4550__auto___50092;
var G__50095 = cljs.core.count(c__4550__auto___50092);
var G__50096 = (0);
seq__50035_50080 = G__50093;
chunk__50036_50081 = G__50094;
count__50037_50082 = G__50095;
i__50038_50083 = G__50096;
continue;
} else {
var ev_name_50098 = cljs.core.first(seq__50035_50091__$1);
var path_50099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_50098))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_50098,body_index_calculator.events.common_interseptors,((function (seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,path_50099,ev_name_50098,seq__50035_50091__$1,temp__5735__auto___50090){
return (function (p__50063,p__50064){
var map__50065 = p__50063;
var map__50065__$1 = (((((!((map__50065 == null))))?(((((map__50065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50065):map__50065);
var db = map__50065__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50065__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__50066 = p__50064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50066,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50066,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_50099,((function (seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,map__50065,map__50065__$1,db,system,vec__50066,_,form_field,path_50099,ev_name_50098,seq__50035_50091__$1,temp__5735__auto___50090){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,map__50065,map__50065__$1,db,system,vec__50066,_,form_field,path_50099,ev_name_50098,seq__50035_50091__$1,temp__5735__auto___50090))
);
});})(seq__50035_50080,chunk__50036_50081,count__50037_50082,i__50038_50083,path_50099,ev_name_50098,seq__50035_50091__$1,temp__5735__auto___50090))
);


var G__50100 = cljs.core.next(seq__50035_50091__$1);
var G__50101 = null;
var G__50102 = (0);
var G__50103 = (0);
seq__50035_50080 = G__50100;
chunk__50036_50081 = G__50101;
count__50037_50082 = G__50102;
i__50038_50083 = G__50103;
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
var G__50075_50104 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__50076_50105 = ((function (G__50075_50104){
return (function (p__50077){
var map__50078 = p__50077;
var map__50078__$1 = (((((!((map__50078 == null))))?(((((map__50078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50078):map__50078);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp__5739__auto___50106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(body_index_calculator.events.timeouts),id);
if((temp__5739__auto___50106 == null)){
} else {
var existing_50107 = temp__5739__auto___50106;
clearTimeout(existing_50107);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(body_index_calculator.events.timeouts,cljs.core.dissoc,id);
}

if((!((event == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(body_index_calculator.events.timeouts,cljs.core.assoc,id,setTimeout(((function (map__50078,map__50078__$1,id,event,time,G__50075_50104){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
});})(map__50078,map__50078__$1,id,event,time,G__50075_50104))
,time));
} else {
return null;
}
});})(G__50075_50104))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50075_50104,G__50076_50105) : re_frame.core.reg_fx.call(null,G__50075_50104,G__50076_50105));

//# sourceMappingURL=body_index_calculator.events.js.map
