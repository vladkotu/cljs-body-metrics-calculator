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
body_index_calculator.events.check_spec_after_interceptor = (function (){var G__50971 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.events.check_and_throw,new cljs.core.Keyword("body-index-calculator.db","db","body-index-calculator.db/db",498938435));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__50971) : re_frame.core.after.call(null,G__50971));
})();
body_index_calculator.events.common_interseptors = ((body_index_calculator.events._STAR_trace_events_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,body_index_calculator.events.check_spec_after_interceptor], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.events.check_spec_after_interceptor], null));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","init","body-index-calculator.events/init",-2102187387),(function (_,___$1){
return body_index_calculator.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","theme","body-index-calculator.events/theme",-2091804817),(function (db,p__50972){
var vec__50973 = p__50972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50973,(0),null);
var new_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50973,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"theme","theme",-1247880880),new_theme);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","locale","body-index-calculator.events/locale",1851229992),(function (db,p__50976){
var vec__50977 = p__50976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50977,(0),null);
var new_locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50977,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"locale","locale",-2115712697),new_locale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.events","system","body-index-calculator.events/system",-256052859),(function (db,p__50981){
var vec__50982 = p__50981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50982,(0),null);
var new_system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50982,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"system","system",-29381724),new_system),new cljs.core.Keyword(null,"form","form",-1624062471),((function (vec__50982,_,new_system){
return (function (p1__50980_SHARP_){
return body_index_calculator.helpers.convert_form_values(new_system,p1__50980_SHARP_);
});})(vec__50982,_,new_system))
);
}));
body_index_calculator.events.cond_field__GT_metric = (function body_index_calculator$events$cond_field__GT_metric(system,field){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system)){
return body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field);
} else {
return field;
}
});
var seq__50985_51040 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.events","gender","body-index-calculator.events/gender",-540746560),new cljs.core.Keyword("body-index-calculator.events","age","body-index-calculator.events/age",1840266373),new cljs.core.Keyword("body-index-calculator.events","weight","body-index-calculator.events/weight",-2106298254),new cljs.core.Keyword("body-index-calculator.events","height","body-index-calculator.events/height",2141634019),new cljs.core.Keyword("body-index-calculator.events","waist","body-index-calculator.events/waist",-1049141226),new cljs.core.Keyword("body-index-calculator.events","hip","body-index-calculator.events/hip",-266673182)], null));
var chunk__50986_51041 = null;
var count__50987_51042 = (0);
var i__50988_51043 = (0);
while(true){
if((i__50988_51043 < count__50987_51042)){
var ev_name_51051 = chunk__50986_51041.cljs$core$IIndexed$_nth$arity$2(null,i__50988_51043);
var path_51053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_51051))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_51051,body_index_calculator.events.common_interseptors,((function (seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,path_51053,ev_name_51051){
return (function (p__51003,p__51004){
var map__51005 = p__51003;
var map__51005__$1 = (((((!((map__51005 == null))))?(((((map__51005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51005):map__51005);
var db = map__51005__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51005__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__51006 = p__51004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51006,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51006,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_51053,((function (seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,map__51005,map__51005__$1,db,system,vec__51006,_,form_field,path_51053,ev_name_51051){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,map__51005,map__51005__$1,db,system,vec__51006,_,form_field,path_51053,ev_name_51051))
);
});})(seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,path_51053,ev_name_51051))
);


var G__51064 = seq__50985_51040;
var G__51065 = chunk__50986_51041;
var G__51066 = count__50987_51042;
var G__51067 = (i__50988_51043 + (1));
seq__50985_51040 = G__51064;
chunk__50986_51041 = G__51065;
count__50987_51042 = G__51066;
i__50988_51043 = G__51067;
continue;
} else {
var temp__5735__auto___51068 = cljs.core.seq(seq__50985_51040);
if(temp__5735__auto___51068){
var seq__50985_51069__$1 = temp__5735__auto___51068;
if(cljs.core.chunked_seq_QMARK_(seq__50985_51069__$1)){
var c__4550__auto___51071 = cljs.core.chunk_first(seq__50985_51069__$1);
var G__51072 = cljs.core.chunk_rest(seq__50985_51069__$1);
var G__51073 = c__4550__auto___51071;
var G__51074 = cljs.core.count(c__4550__auto___51071);
var G__51075 = (0);
seq__50985_51040 = G__51072;
chunk__50986_51041 = G__51073;
count__50987_51042 = G__51074;
i__50988_51043 = G__51075;
continue;
} else {
var ev_name_51077 = cljs.core.first(seq__50985_51069__$1);
var path_51078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ev_name_51077))], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(ev_name_51077,body_index_calculator.events.common_interseptors,((function (seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,path_51078,ev_name_51077,seq__50985_51069__$1,temp__5735__auto___51068){
return (function (p__51010,p__51011){
var map__51012 = p__51010;
var map__51012__$1 = (((((!((map__51012 == null))))?(((((map__51012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51012):map__51012);
var db = map__51012__$1;
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var vec__51013 = p__51011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51013,(0),null);
var form_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51013,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path_51078,((function (seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,map__51012,map__51012__$1,db,system,vec__51013,_,form_field,path_51078,ev_name_51077,seq__50985_51069__$1,temp__5735__auto___51068){
return (function (db_field){
var field = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db_field,form_field], 0));
var errors = body_index_calculator.validation.validate(body_index_calculator.events.cond_field__GT_metric(system,field));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0));
});})(seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,map__51012,map__51012__$1,db,system,vec__51013,_,form_field,path_51078,ev_name_51077,seq__50985_51069__$1,temp__5735__auto___51068))
);
});})(seq__50985_51040,chunk__50986_51041,count__50987_51042,i__50988_51043,path_51078,ev_name_51077,seq__50985_51069__$1,temp__5735__auto___51068))
);


var G__51096 = cljs.core.next(seq__50985_51069__$1);
var G__51097 = null;
var G__51098 = (0);
var G__51099 = (0);
seq__50985_51040 = G__51096;
chunk__50986_51041 = G__51097;
count__50987_51042 = G__51098;
i__50988_51043 = G__51099;
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
var G__51017_51103 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__51018_51104 = ((function (G__51017_51103){
return (function (p__51019){
var map__51020 = p__51019;
var map__51020__$1 = (((((!((map__51020 == null))))?(((((map__51020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51020):map__51020);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp__5739__auto___51110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(body_index_calculator.events.timeouts),id);
if((temp__5739__auto___51110 == null)){
} else {
var existing_51112 = temp__5739__auto___51110;
clearTimeout(existing_51112);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(body_index_calculator.events.timeouts,cljs.core.dissoc,id);
}

if((!((event == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(body_index_calculator.events.timeouts,cljs.core.assoc,id,setTimeout(((function (map__51020,map__51020__$1,id,event,time,G__51017_51103){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
});})(map__51020,map__51020__$1,id,event,time,G__51017_51103))
,time));
} else {
return null;
}
});})(G__51017_51103))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51017_51103,G__51018_51104) : re_frame.core.reg_fx.call(null,G__51017_51103,G__51018_51104));

//# sourceMappingURL=body_index_calculator.events.js.map
