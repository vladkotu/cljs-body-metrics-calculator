goog.provide('body_index_calculator.subscriptions');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('body_index_calculator.validation');
goog.require('body_index_calculator.helpers');
goog.require('body_index_calculator.lib.body_fat');
goog.require('body_index_calculator.lib.body_mass_index');
goog.require('body_index_calculator.lib.wais_hip_ratio');
goog.require('body_index_calculator.lib.basal_matabolic_rate');
goog.require('body_index_calculator.lib.body_shape_index');
goog.require('body_index_calculator.lib.lean_body_mass');
body_index_calculator.subscriptions.cider_have_to_have_at_least_one_def_in_a_file = null;
var seq__69101_69331 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121),new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396),new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248),new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null));
var chunk__69106_69332 = null;
var count__69107_69333 = (0);
var i__69108_69334 = (0);
while(true){
if((i__69108_69334 < count__69107_69333)){
var sub_name_69335 = chunk__69106_69332.cljs$core$IIndexed$_nth$arity$2(null,i__69108_69334);
var seq__69109_69336 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_69335))], null));
var chunk__69110_69337 = null;
var count__69111_69338 = (0);
var i__69112_69339 = (0);
while(true){
if((i__69112_69339 < count__69111_69338)){
var a_key_69340 = chunk__69110_69337.cljs$core$IIndexed$_nth$arity$2(null,i__69112_69339);
var G__69184_69341 = sub_name_69335;
var G__69185_69342 = ((function (seq__69109_69336,chunk__69110_69337,count__69111_69338,i__69112_69339,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69184_69341,a_key_69340,sub_name_69335){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_69340);
});})(seq__69109_69336,chunk__69110_69337,count__69111_69338,i__69112_69339,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69184_69341,a_key_69340,sub_name_69335))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69184_69341,G__69185_69342) : re_frame.core.reg_sub.call(null,G__69184_69341,G__69185_69342));


var G__69343 = seq__69109_69336;
var G__69344 = chunk__69110_69337;
var G__69345 = count__69111_69338;
var G__69346 = (i__69112_69339 + (1));
seq__69109_69336 = G__69343;
chunk__69110_69337 = G__69344;
count__69111_69338 = G__69345;
i__69112_69339 = G__69346;
continue;
} else {
var temp__5735__auto___69347 = cljs.core.seq(seq__69109_69336);
if(temp__5735__auto___69347){
var seq__69109_69348__$1 = temp__5735__auto___69347;
if(cljs.core.chunked_seq_QMARK_(seq__69109_69348__$1)){
var c__4550__auto___69349 = cljs.core.chunk_first(seq__69109_69348__$1);
var G__69350 = cljs.core.chunk_rest(seq__69109_69348__$1);
var G__69351 = c__4550__auto___69349;
var G__69352 = cljs.core.count(c__4550__auto___69349);
var G__69353 = (0);
seq__69109_69336 = G__69350;
chunk__69110_69337 = G__69351;
count__69111_69338 = G__69352;
i__69112_69339 = G__69353;
continue;
} else {
var a_key_69354 = cljs.core.first(seq__69109_69348__$1);
var G__69193_69355 = sub_name_69335;
var G__69194_69356 = ((function (seq__69109_69336,chunk__69110_69337,count__69111_69338,i__69112_69339,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69193_69355,a_key_69354,seq__69109_69348__$1,temp__5735__auto___69347,sub_name_69335){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_69354);
});})(seq__69109_69336,chunk__69110_69337,count__69111_69338,i__69112_69339,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69193_69355,a_key_69354,seq__69109_69348__$1,temp__5735__auto___69347,sub_name_69335))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69193_69355,G__69194_69356) : re_frame.core.reg_sub.call(null,G__69193_69355,G__69194_69356));


var G__69357 = cljs.core.next(seq__69109_69348__$1);
var G__69358 = null;
var G__69359 = (0);
var G__69360 = (0);
seq__69109_69336 = G__69357;
chunk__69110_69337 = G__69358;
count__69111_69338 = G__69359;
i__69112_69339 = G__69360;
continue;
}
} else {
}
}
break;
}

var G__69361 = seq__69101_69331;
var G__69362 = chunk__69106_69332;
var G__69363 = count__69107_69333;
var G__69364 = (i__69108_69334 + (1));
seq__69101_69331 = G__69361;
chunk__69106_69332 = G__69362;
count__69107_69333 = G__69363;
i__69108_69334 = G__69364;
continue;
} else {
var temp__5735__auto___69365 = cljs.core.seq(seq__69101_69331);
if(temp__5735__auto___69365){
var seq__69101_69366__$1 = temp__5735__auto___69365;
if(cljs.core.chunked_seq_QMARK_(seq__69101_69366__$1)){
var c__4550__auto___69367 = cljs.core.chunk_first(seq__69101_69366__$1);
var G__69368 = cljs.core.chunk_rest(seq__69101_69366__$1);
var G__69369 = c__4550__auto___69367;
var G__69370 = cljs.core.count(c__4550__auto___69367);
var G__69371 = (0);
seq__69101_69331 = G__69368;
chunk__69106_69332 = G__69369;
count__69107_69333 = G__69370;
i__69108_69334 = G__69371;
continue;
} else {
var sub_name_69373 = cljs.core.first(seq__69101_69366__$1);
var seq__69102_69374 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_69373))], null));
var chunk__69103_69375 = null;
var count__69104_69376 = (0);
var i__69105_69377 = (0);
while(true){
if((i__69105_69377 < count__69104_69376)){
var a_key_69378 = chunk__69103_69375.cljs$core$IIndexed$_nth$arity$2(null,i__69105_69377);
var G__69210_69379 = sub_name_69373;
var G__69211_69380 = ((function (seq__69102_69374,chunk__69103_69375,count__69104_69376,i__69105_69377,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69210_69379,a_key_69378,sub_name_69373,seq__69101_69366__$1,temp__5735__auto___69365){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_69378);
});})(seq__69102_69374,chunk__69103_69375,count__69104_69376,i__69105_69377,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69210_69379,a_key_69378,sub_name_69373,seq__69101_69366__$1,temp__5735__auto___69365))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69210_69379,G__69211_69380) : re_frame.core.reg_sub.call(null,G__69210_69379,G__69211_69380));


var G__69395 = seq__69102_69374;
var G__69396 = chunk__69103_69375;
var G__69397 = count__69104_69376;
var G__69398 = (i__69105_69377 + (1));
seq__69102_69374 = G__69395;
chunk__69103_69375 = G__69396;
count__69104_69376 = G__69397;
i__69105_69377 = G__69398;
continue;
} else {
var temp__5735__auto___69403__$1 = cljs.core.seq(seq__69102_69374);
if(temp__5735__auto___69403__$1){
var seq__69102_69404__$1 = temp__5735__auto___69403__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69102_69404__$1)){
var c__4550__auto___69405 = cljs.core.chunk_first(seq__69102_69404__$1);
var G__69406 = cljs.core.chunk_rest(seq__69102_69404__$1);
var G__69407 = c__4550__auto___69405;
var G__69408 = cljs.core.count(c__4550__auto___69405);
var G__69409 = (0);
seq__69102_69374 = G__69406;
chunk__69103_69375 = G__69407;
count__69104_69376 = G__69408;
i__69105_69377 = G__69409;
continue;
} else {
var a_key_69413 = cljs.core.first(seq__69102_69404__$1);
var G__69213_69414 = sub_name_69373;
var G__69214_69415 = ((function (seq__69102_69374,chunk__69103_69375,count__69104_69376,i__69105_69377,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69213_69414,a_key_69413,seq__69102_69404__$1,temp__5735__auto___69403__$1,sub_name_69373,seq__69101_69366__$1,temp__5735__auto___69365){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_69413);
});})(seq__69102_69374,chunk__69103_69375,count__69104_69376,i__69105_69377,seq__69101_69331,chunk__69106_69332,count__69107_69333,i__69108_69334,G__69213_69414,a_key_69413,seq__69102_69404__$1,temp__5735__auto___69403__$1,sub_name_69373,seq__69101_69366__$1,temp__5735__auto___69365))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69213_69414,G__69214_69415) : re_frame.core.reg_sub.call(null,G__69213_69414,G__69214_69415));


var G__69420 = cljs.core.next(seq__69102_69404__$1);
var G__69421 = null;
var G__69422 = (0);
var G__69423 = (0);
seq__69102_69374 = G__69420;
chunk__69103_69375 = G__69421;
count__69104_69376 = G__69422;
i__69105_69377 = G__69423;
continue;
}
} else {
}
}
break;
}

var G__69424 = cljs.core.next(seq__69101_69366__$1);
var G__69425 = null;
var G__69426 = (0);
var G__69427 = (0);
seq__69101_69331 = G__69424;
chunk__69106_69332 = G__69425;
count__69107_69333 = G__69426;
i__69108_69334 = G__69427;
continue;
}
} else {
}
}
break;
}
var seq__69215_69428 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","gender","body-index-calculator.subscriptions/gender",1752121289),new cljs.core.Keyword("body-index-calculator.subscriptions","age","body-index-calculator.subscriptions/age",-278078572),new cljs.core.Keyword("body-index-calculator.subscriptions","weight","body-index-calculator.subscriptions/weight",145591651),new cljs.core.Keyword("body-index-calculator.subscriptions","height","body-index-calculator.subscriptions/height",426599118),new cljs.core.Keyword("body-index-calculator.subscriptions","waist","body-index-calculator.subscriptions/waist",933805829),new cljs.core.Keyword("body-index-calculator.subscriptions","hip","body-index-calculator.subscriptions/hip",-908770575)], null));
var chunk__69216_69429 = null;
var count__69217_69430 = (0);
var i__69218_69431 = (0);
while(true){
if((i__69218_69431 < count__69217_69430)){
var sub_name_69432 = chunk__69216_69429.cljs$core$IIndexed$_nth$arity$2(null,i__69218_69431);
var a_key_69433 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_69432));
var G__69267_69434 = sub_name_69432;
var G__69268_69435 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69269_69436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__69270_69437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69271_69438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__69272_69439 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69273_69440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__69274_69441 = ((function (seq__69215_69428,chunk__69216_69429,count__69217_69430,i__69218_69431,G__69267_69434,G__69268_69435,G__69269_69436,G__69270_69437,G__69271_69438,G__69272_69439,G__69273_69440,a_key_69433,sub_name_69432){
return (function (p__69275,_){
var vec__69276 = p__69275;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69276,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69276,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69276,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_69433);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__69215_69428,chunk__69216_69429,count__69217_69430,i__69218_69431,G__69267_69434,G__69268_69435,G__69269_69436,G__69270_69437,G__69271_69438,G__69272_69439,G__69273_69440,a_key_69433,sub_name_69432))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__69267_69434,G__69268_69435,G__69269_69436,G__69270_69437,G__69271_69438,G__69272_69439,G__69273_69440,G__69274_69441) : re_frame.core.reg_sub.call(null,G__69267_69434,G__69268_69435,G__69269_69436,G__69270_69437,G__69271_69438,G__69272_69439,G__69273_69440,G__69274_69441));


var G__69443 = seq__69215_69428;
var G__69444 = chunk__69216_69429;
var G__69445 = count__69217_69430;
var G__69446 = (i__69218_69431 + (1));
seq__69215_69428 = G__69443;
chunk__69216_69429 = G__69444;
count__69217_69430 = G__69445;
i__69218_69431 = G__69446;
continue;
} else {
var temp__5735__auto___69447 = cljs.core.seq(seq__69215_69428);
if(temp__5735__auto___69447){
var seq__69215_69448__$1 = temp__5735__auto___69447;
if(cljs.core.chunked_seq_QMARK_(seq__69215_69448__$1)){
var c__4550__auto___69449 = cljs.core.chunk_first(seq__69215_69448__$1);
var G__69450 = cljs.core.chunk_rest(seq__69215_69448__$1);
var G__69451 = c__4550__auto___69449;
var G__69452 = cljs.core.count(c__4550__auto___69449);
var G__69453 = (0);
seq__69215_69428 = G__69450;
chunk__69216_69429 = G__69451;
count__69217_69430 = G__69452;
i__69218_69431 = G__69453;
continue;
} else {
var sub_name_69454 = cljs.core.first(seq__69215_69448__$1);
var a_key_69455 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_69454));
var G__69285_69456 = sub_name_69454;
var G__69286_69457 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69287_69458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__69288_69459 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69289_69460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__69290_69461 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69291_69462 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__69292_69463 = ((function (seq__69215_69428,chunk__69216_69429,count__69217_69430,i__69218_69431,G__69285_69456,G__69286_69457,G__69287_69458,G__69288_69459,G__69289_69460,G__69290_69461,G__69291_69462,a_key_69455,sub_name_69454,seq__69215_69448__$1,temp__5735__auto___69447){
return (function (p__69293,_){
var vec__69294 = p__69293;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69294,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69294,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69294,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_69455);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__69215_69428,chunk__69216_69429,count__69217_69430,i__69218_69431,G__69285_69456,G__69286_69457,G__69287_69458,G__69288_69459,G__69289_69460,G__69290_69461,G__69291_69462,a_key_69455,sub_name_69454,seq__69215_69448__$1,temp__5735__auto___69447))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__69285_69456,G__69286_69457,G__69287_69458,G__69288_69459,G__69289_69460,G__69290_69461,G__69291_69462,G__69292_69463) : re_frame.core.reg_sub.call(null,G__69285_69456,G__69286_69457,G__69287_69458,G__69288_69459,G__69289_69460,G__69290_69461,G__69291_69462,G__69292_69463));


var G__69465 = cljs.core.next(seq__69215_69448__$1);
var G__69466 = null;
var G__69467 = (0);
var G__69468 = (0);
seq__69215_69428 = G__69465;
chunk__69216_69429 = G__69466;
count__69217_69430 = G__69467;
i__69218_69431 = G__69468;
continue;
}
} else {
}
}
break;
}
body_index_calculator.subscriptions.form_metric__GT_result = (function body_index_calculator$subscriptions$form_metric__GT_result(form,p__69299){
var map__69300 = p__69299;
var map__69300__$1 = (((((!((map__69300 == null))))?(((((map__69300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69300):map__69300);
var metric = map__69300__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69300__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69300__$1,new cljs.core.Keyword(null,"value","value",305978217));
var conclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69300__$1,new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958));
try{var person = body_index_calculator.helpers.form__GT_person(form);
var valid_QMARK_ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,person);
var a_value = ((valid_QMARK_)?(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(person) : value.call(null,person)):null);
var a_conclusion = ((valid_QMARK_)?(function (){var and__4120__auto__ = conclusion;
if(cljs.core.truth_(and__4120__auto__)){
return (conclusion.cljs$core$IFn$_invoke$arity$1 ? conclusion.cljs$core$IFn$_invoke$arity$1(person) : conclusion.call(null,person));
} else {
return and__4120__auto__;
}
})():null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metric,new cljs.core.Keyword(null,"value","value",305978217),a_value),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),a_conclusion);
}catch (e69303){if((e69303 instanceof Object)){
var e = e69303;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
throw e69303;

}
}});
body_index_calculator.subscriptions.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmi","body-index-calculator.subscriptions/bmi",-394816092),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-mass-index","person","body-index-calculator.lib.body-mass-index/person",1077168754),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.calc_body_mass_index;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"calc-body-mass-index","calc-body-mass-index",-418297513,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),"",(cljs.core.truth_(body_index_calculator.lib.body_mass_index.calc_body_mass_index)?body_index_calculator.lib.body_mass_index.calc_body_mass_index.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.classify_body_mass_person;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"classify-body-mass-person","classify-body-mass-person",1175699996,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,26,26,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_mass_index.classify_body_mass_person)?body_index_calculator.lib.body_mass_index.classify_body_mass_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMI",new cljs.core.Keyword(null,"title","title",636505583),"Body Mass Index",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg\u00B7m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bsi","body-index-calculator.subscriptions/bsi",2021885836),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-shape-index","person","body-index-calculator.lib.body-shape-index/person",-248442709),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.calc_body_shape_z_score;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","calc-body-shape-z-score","body-index-calculator.lib.body-shape-index/calc-body-shape-z-score",-1838201271,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"calc-body-shape-z-score","calc-body-shape-z-score",-2113613665,null),"body_index_calculator/lib/body_shape_index.cljs",30,1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"gender","gender",906600800,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"person","person",580724652,null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.calc_body_shape_z_score)?body_index_calculator.lib.body_shape_index.calc_body_shape_z_score.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.classify_body_shape_person;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","classify-body-shape-person","body-index-calculator.lib.body-shape-index/classify-body-shape-person",1399396936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"classify-body-shape-person","classify-body-shape-person",1133415558,null),"body_index_calculator/lib/body_shape_index.cljs",33,1,50,50,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.classify_body_shape_person)?body_index_calculator.lib.body_shape_index.classify_body_shape_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"A Body Shape Index",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"ABSI",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"11/6"], null),"kg",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"-2/3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmr","body-index-calculator.subscriptions/bmr",90641346),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.basal-matabolic-rate","person","body-index-calculator.lib.basal-matabolic-rate/person",1597875411),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor;},new cljs.core.Symbol("body-index-calculator.lib.basal-matabolic-rate","mifflin-jeor","body-index-calculator.lib.basal-matabolic-rate/mifflin-jeor",1136971517,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.basal-matabolic-rate","body-index-calculator.lib.basal-matabolic-rate",-1279718739,null),new cljs.core.Symbol(null,"mifflin-jeor","mifflin-jeor",-480259485,null),"body_index_calculator/lib/basal_matabolic_rate.cljs",19,1,12,12,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gender","gender",906600800,null),new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor)?body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),null,new cljs.core.Keyword(null,"title","title",636505583),"Basal Metabolic Rate [Mefflin St Jeor]",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kcal/day"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","lbm","body-index-calculator.subscriptions/lbm",-1153487168),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.lean-body-mass","person","body-index-calculator.lib.lean-body-mass/person",-1102348784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.lean_body_mass.calc_lean_body_mass;},new cljs.core.Symbol("body-index-calculator.lib.lean-body-mass","calc-lean-body-mass","body-index-calculator.lib.lean-body-mass/calc-lean-body-mass",-1493499366,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.lean-body-mass","body-index-calculator.lib.lean-body-mass",-1775364684,null),new cljs.core.Symbol(null,"calc-lean-body-mass","calc-lean-body-mass",-1520291843,null),"body_index_calculator/lib/lean_body_mass.cljs",30,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(body_index_calculator.lib.lean_body_mass.calc_lean_body_mass)?body_index_calculator.lib.lean_body_mass.calc_lean_body_mass.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conslusion","conslusion",-835967639),null,new cljs.core.Keyword(null,"title","title",636505583),"Lean Body Mass",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"LBM",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bfp","body-index-calculator.subscriptions/bfp",-1129525184),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-fat","person","body-index-calculator.lib.body-fat/person",1174056730),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.calc_body_fat;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","calc-body-fat","body-index-calculator.lib.body-fat/calc-body-fat",2079549006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"calc-body-fat","calc-body-fat",-122849139,null),"body_index_calculator/lib/body_fat.cljs",20,1,13,13,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),"Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage",(cljs.core.truth_(body_index_calculator.lib.body_fat.calc_body_fat)?body_index_calculator.lib.body_fat.calc_body_fat.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.classify_fat_percentage_person;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","classify-fat-percentage-person","body-index-calculator.lib.body-fat/classify-fat-percentage-person",1120546474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"classify-fat-percentage-person","classify-fat-percentage-person",-1047003031,null),"body_index_calculator/lib/body_fat.cljs",37,1,38,38,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_fat.classify_fat_percentage_person)?body_index_calculator.lib.body_fat.classify_fat_percentage_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Body Fat Percentage",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BF",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","whr","body-index-calculator.subscriptions/whr",1719104930),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.wais-hip-ratio","person","body-index-calculator.lib.wais-hip-ratio/person",-426368092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","calc-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/calc-waist-hip-ratio",1690970201,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"calc-waist-hip-ratio","calc-waist-hip-ratio",-2104776166,null),"body_index_calculator/lib/wais_hip_ratio.cljs",27,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"waist","waist",1032102076,null),new cljs.core.Symbol(null,"hip","hip",1147544584,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","classify-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/classify-waist-hip-ratio",1010412862,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"classify-waist-hip-ratio","classify-waist-hip-ratio",-696373391,null),"body_index_calculator/lib/wais_hip_ratio.cljs",31,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Waist to Hip Ratio",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"WHR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null)], null)], null);
var G__69318_69481 = new cljs.core.Keyword("body-index-calculator.subscriptions","result","body-index-calculator.subscriptions/result",-1330365021);
var G__69319_69482 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69320_69483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__69321_69484 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__69322_69485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__69323_69486 = ((function (G__69318_69481,G__69319_69482,G__69320_69483,G__69321_69484,G__69322_69485){
return (function (p__69324,_){
var vec__69325 = p__69324;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69325,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69325,(1),null);
var converted_form = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_form_values(new cljs.core.Keyword(null,"metric","metric",408798077),form):form);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.subscriptions.form_metric__GT_result,converted_form),body_index_calculator.subscriptions.metrics);
});})(G__69318_69481,G__69319_69482,G__69320_69483,G__69321_69484,G__69322_69485))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__69318_69481,G__69319_69482,G__69320_69483,G__69321_69484,G__69322_69485,G__69323_69486) : re_frame.core.reg_sub.call(null,G__69318_69481,G__69319_69482,G__69320_69483,G__69321_69484,G__69322_69485,G__69323_69486));

//# sourceMappingURL=body_index_calculator.subscriptions.js.map
