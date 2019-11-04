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
var seq__50455_50635 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121),new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396),new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248),new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null));
var chunk__50460_50636 = null;
var count__50461_50637 = (0);
var i__50462_50638 = (0);
while(true){
if((i__50462_50638 < count__50461_50637)){
var sub_name_50639 = chunk__50460_50636.cljs$core$IIndexed$_nth$arity$2(null,i__50462_50638);
var seq__50463_50640 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_50639))], null));
var chunk__50464_50641 = null;
var count__50465_50642 = (0);
var i__50466_50643 = (0);
while(true){
if((i__50466_50643 < count__50465_50642)){
var a_key_50644 = chunk__50464_50641.cljs$core$IIndexed$_nth$arity$2(null,i__50466_50643);
var G__50524_50645 = sub_name_50639;
var G__50525_50646 = ((function (seq__50463_50640,chunk__50464_50641,count__50465_50642,i__50466_50643,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50524_50645,a_key_50644,sub_name_50639){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_50644);
});})(seq__50463_50640,chunk__50464_50641,count__50465_50642,i__50466_50643,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50524_50645,a_key_50644,sub_name_50639))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50524_50645,G__50525_50646) : re_frame.core.reg_sub.call(null,G__50524_50645,G__50525_50646));


var G__50647 = seq__50463_50640;
var G__50648 = chunk__50464_50641;
var G__50649 = count__50465_50642;
var G__50650 = (i__50466_50643 + (1));
seq__50463_50640 = G__50647;
chunk__50464_50641 = G__50648;
count__50465_50642 = G__50649;
i__50466_50643 = G__50650;
continue;
} else {
var temp__5735__auto___50651 = cljs.core.seq(seq__50463_50640);
if(temp__5735__auto___50651){
var seq__50463_50652__$1 = temp__5735__auto___50651;
if(cljs.core.chunked_seq_QMARK_(seq__50463_50652__$1)){
var c__4550__auto___50653 = cljs.core.chunk_first(seq__50463_50652__$1);
var G__50654 = cljs.core.chunk_rest(seq__50463_50652__$1);
var G__50655 = c__4550__auto___50653;
var G__50656 = cljs.core.count(c__4550__auto___50653);
var G__50657 = (0);
seq__50463_50640 = G__50654;
chunk__50464_50641 = G__50655;
count__50465_50642 = G__50656;
i__50466_50643 = G__50657;
continue;
} else {
var a_key_50658 = cljs.core.first(seq__50463_50652__$1);
var G__50531_50659 = sub_name_50639;
var G__50532_50660 = ((function (seq__50463_50640,chunk__50464_50641,count__50465_50642,i__50466_50643,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50531_50659,a_key_50658,seq__50463_50652__$1,temp__5735__auto___50651,sub_name_50639){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_50658);
});})(seq__50463_50640,chunk__50464_50641,count__50465_50642,i__50466_50643,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50531_50659,a_key_50658,seq__50463_50652__$1,temp__5735__auto___50651,sub_name_50639))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50531_50659,G__50532_50660) : re_frame.core.reg_sub.call(null,G__50531_50659,G__50532_50660));


var G__50661 = cljs.core.next(seq__50463_50652__$1);
var G__50662 = null;
var G__50663 = (0);
var G__50664 = (0);
seq__50463_50640 = G__50661;
chunk__50464_50641 = G__50662;
count__50465_50642 = G__50663;
i__50466_50643 = G__50664;
continue;
}
} else {
}
}
break;
}

var G__50665 = seq__50455_50635;
var G__50666 = chunk__50460_50636;
var G__50667 = count__50461_50637;
var G__50668 = (i__50462_50638 + (1));
seq__50455_50635 = G__50665;
chunk__50460_50636 = G__50666;
count__50461_50637 = G__50667;
i__50462_50638 = G__50668;
continue;
} else {
var temp__5735__auto___50669 = cljs.core.seq(seq__50455_50635);
if(temp__5735__auto___50669){
var seq__50455_50670__$1 = temp__5735__auto___50669;
if(cljs.core.chunked_seq_QMARK_(seq__50455_50670__$1)){
var c__4550__auto___50671 = cljs.core.chunk_first(seq__50455_50670__$1);
var G__50672 = cljs.core.chunk_rest(seq__50455_50670__$1);
var G__50673 = c__4550__auto___50671;
var G__50674 = cljs.core.count(c__4550__auto___50671);
var G__50675 = (0);
seq__50455_50635 = G__50672;
chunk__50460_50636 = G__50673;
count__50461_50637 = G__50674;
i__50462_50638 = G__50675;
continue;
} else {
var sub_name_50676 = cljs.core.first(seq__50455_50670__$1);
var seq__50456_50677 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_50676))], null));
var chunk__50457_50678 = null;
var count__50458_50679 = (0);
var i__50459_50680 = (0);
while(true){
if((i__50459_50680 < count__50458_50679)){
var a_key_50681 = chunk__50457_50678.cljs$core$IIndexed$_nth$arity$2(null,i__50459_50680);
var G__50538_50682 = sub_name_50676;
var G__50539_50683 = ((function (seq__50456_50677,chunk__50457_50678,count__50458_50679,i__50459_50680,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50538_50682,a_key_50681,sub_name_50676,seq__50455_50670__$1,temp__5735__auto___50669){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_50681);
});})(seq__50456_50677,chunk__50457_50678,count__50458_50679,i__50459_50680,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50538_50682,a_key_50681,sub_name_50676,seq__50455_50670__$1,temp__5735__auto___50669))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50538_50682,G__50539_50683) : re_frame.core.reg_sub.call(null,G__50538_50682,G__50539_50683));


var G__50684 = seq__50456_50677;
var G__50685 = chunk__50457_50678;
var G__50686 = count__50458_50679;
var G__50687 = (i__50459_50680 + (1));
seq__50456_50677 = G__50684;
chunk__50457_50678 = G__50685;
count__50458_50679 = G__50686;
i__50459_50680 = G__50687;
continue;
} else {
var temp__5735__auto___50688__$1 = cljs.core.seq(seq__50456_50677);
if(temp__5735__auto___50688__$1){
var seq__50456_50689__$1 = temp__5735__auto___50688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50456_50689__$1)){
var c__4550__auto___50690 = cljs.core.chunk_first(seq__50456_50689__$1);
var G__50691 = cljs.core.chunk_rest(seq__50456_50689__$1);
var G__50692 = c__4550__auto___50690;
var G__50693 = cljs.core.count(c__4550__auto___50690);
var G__50694 = (0);
seq__50456_50677 = G__50691;
chunk__50457_50678 = G__50692;
count__50458_50679 = G__50693;
i__50459_50680 = G__50694;
continue;
} else {
var a_key_50695 = cljs.core.first(seq__50456_50689__$1);
var G__50540_50696 = sub_name_50676;
var G__50541_50697 = ((function (seq__50456_50677,chunk__50457_50678,count__50458_50679,i__50459_50680,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50540_50696,a_key_50695,seq__50456_50689__$1,temp__5735__auto___50688__$1,sub_name_50676,seq__50455_50670__$1,temp__5735__auto___50669){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_50695);
});})(seq__50456_50677,chunk__50457_50678,count__50458_50679,i__50459_50680,seq__50455_50635,chunk__50460_50636,count__50461_50637,i__50462_50638,G__50540_50696,a_key_50695,seq__50456_50689__$1,temp__5735__auto___50688__$1,sub_name_50676,seq__50455_50670__$1,temp__5735__auto___50669))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50540_50696,G__50541_50697) : re_frame.core.reg_sub.call(null,G__50540_50696,G__50541_50697));


var G__50698 = cljs.core.next(seq__50456_50689__$1);
var G__50699 = null;
var G__50700 = (0);
var G__50701 = (0);
seq__50456_50677 = G__50698;
chunk__50457_50678 = G__50699;
count__50458_50679 = G__50700;
i__50459_50680 = G__50701;
continue;
}
} else {
}
}
break;
}

var G__50702 = cljs.core.next(seq__50455_50670__$1);
var G__50703 = null;
var G__50704 = (0);
var G__50705 = (0);
seq__50455_50635 = G__50702;
chunk__50460_50636 = G__50703;
count__50461_50637 = G__50704;
i__50462_50638 = G__50705;
continue;
}
} else {
}
}
break;
}
var seq__50546_50706 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","gender","body-index-calculator.subscriptions/gender",1752121289),new cljs.core.Keyword("body-index-calculator.subscriptions","age","body-index-calculator.subscriptions/age",-278078572),new cljs.core.Keyword("body-index-calculator.subscriptions","weight","body-index-calculator.subscriptions/weight",145591651),new cljs.core.Keyword("body-index-calculator.subscriptions","height","body-index-calculator.subscriptions/height",426599118),new cljs.core.Keyword("body-index-calculator.subscriptions","waist","body-index-calculator.subscriptions/waist",933805829),new cljs.core.Keyword("body-index-calculator.subscriptions","hip","body-index-calculator.subscriptions/hip",-908770575)], null));
var chunk__50547_50707 = null;
var count__50548_50708 = (0);
var i__50549_50709 = (0);
while(true){
if((i__50549_50709 < count__50548_50708)){
var sub_name_50710 = chunk__50547_50707.cljs$core$IIndexed$_nth$arity$2(null,i__50549_50709);
var a_key_50711 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_50710));
var G__50597_50712 = sub_name_50710;
var G__50598_50713 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50599_50714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__50600_50715 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50601_50716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__50602_50717 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50603_50718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__50604_50719 = ((function (seq__50546_50706,chunk__50547_50707,count__50548_50708,i__50549_50709,G__50597_50712,G__50598_50713,G__50599_50714,G__50600_50715,G__50601_50716,G__50602_50717,G__50603_50718,a_key_50711,sub_name_50710){
return (function (p__50605,_){
var vec__50606 = p__50605;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_50711);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__50546_50706,chunk__50547_50707,count__50548_50708,i__50549_50709,G__50597_50712,G__50598_50713,G__50599_50714,G__50600_50715,G__50601_50716,G__50602_50717,G__50603_50718,a_key_50711,sub_name_50710))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__50597_50712,G__50598_50713,G__50599_50714,G__50600_50715,G__50601_50716,G__50602_50717,G__50603_50718,G__50604_50719) : re_frame.core.reg_sub.call(null,G__50597_50712,G__50598_50713,G__50599_50714,G__50600_50715,G__50601_50716,G__50602_50717,G__50603_50718,G__50604_50719));


var G__50720 = seq__50546_50706;
var G__50721 = chunk__50547_50707;
var G__50722 = count__50548_50708;
var G__50723 = (i__50549_50709 + (1));
seq__50546_50706 = G__50720;
chunk__50547_50707 = G__50721;
count__50548_50708 = G__50722;
i__50549_50709 = G__50723;
continue;
} else {
var temp__5735__auto___50724 = cljs.core.seq(seq__50546_50706);
if(temp__5735__auto___50724){
var seq__50546_50725__$1 = temp__5735__auto___50724;
if(cljs.core.chunked_seq_QMARK_(seq__50546_50725__$1)){
var c__4550__auto___50726 = cljs.core.chunk_first(seq__50546_50725__$1);
var G__50727 = cljs.core.chunk_rest(seq__50546_50725__$1);
var G__50728 = c__4550__auto___50726;
var G__50729 = cljs.core.count(c__4550__auto___50726);
var G__50730 = (0);
seq__50546_50706 = G__50727;
chunk__50547_50707 = G__50728;
count__50548_50708 = G__50729;
i__50549_50709 = G__50730;
continue;
} else {
var sub_name_50731 = cljs.core.first(seq__50546_50725__$1);
var a_key_50732 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_50731));
var G__50609_50733 = sub_name_50731;
var G__50610_50734 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50611_50735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__50612_50736 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50613_50737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__50614_50738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50615_50739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__50616_50740 = ((function (seq__50546_50706,chunk__50547_50707,count__50548_50708,i__50549_50709,G__50609_50733,G__50610_50734,G__50611_50735,G__50612_50736,G__50613_50737,G__50614_50738,G__50615_50739,a_key_50732,sub_name_50731,seq__50546_50725__$1,temp__5735__auto___50724){
return (function (p__50617,_){
var vec__50618 = p__50617;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50618,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50618,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50618,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_50732);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__50546_50706,chunk__50547_50707,count__50548_50708,i__50549_50709,G__50609_50733,G__50610_50734,G__50611_50735,G__50612_50736,G__50613_50737,G__50614_50738,G__50615_50739,a_key_50732,sub_name_50731,seq__50546_50725__$1,temp__5735__auto___50724))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__50609_50733,G__50610_50734,G__50611_50735,G__50612_50736,G__50613_50737,G__50614_50738,G__50615_50739,G__50616_50740) : re_frame.core.reg_sub.call(null,G__50609_50733,G__50610_50734,G__50611_50735,G__50612_50736,G__50613_50737,G__50614_50738,G__50615_50739,G__50616_50740));


var G__50741 = cljs.core.next(seq__50546_50725__$1);
var G__50742 = null;
var G__50743 = (0);
var G__50744 = (0);
seq__50546_50706 = G__50741;
chunk__50547_50707 = G__50742;
count__50548_50708 = G__50743;
i__50549_50709 = G__50744;
continue;
}
} else {
}
}
break;
}
body_index_calculator.subscriptions.form_metric__GT_result = (function body_index_calculator$subscriptions$form_metric__GT_result(form,p__50621){
var map__50622 = p__50621;
var map__50622__$1 = (((((!((map__50622 == null))))?(((((map__50622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50622):map__50622);
var metric = map__50622__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50622__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50622__$1,new cljs.core.Keyword(null,"value","value",305978217));
var conclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50622__$1,new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958));
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
}catch (e50624){if((e50624 instanceof Object)){
var e = e50624;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
throw e50624;

}
}});
body_index_calculator.subscriptions.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmi","body-index-calculator.subscriptions/bmi",-394816092),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-mass-index","person","body-index-calculator.lib.body-mass-index/person",1077168754),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.calc_body_mass_index;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"calc-body-mass-index","calc-body-mass-index",-418297513,null),"body_index_calculator/lib/body_mass_index.cljs",(32),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),"",(cljs.core.truth_(body_index_calculator.lib.body_mass_index.calc_body_mass_index)?body_index_calculator.lib.body_mass_index.calc_body_mass_index.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.classify_body_mass_person;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"classify-body-mass-person","classify-body-mass-person",1175699996,null),"body_index_calculator/lib/body_mass_index.cljs",(32),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_mass_index.classify_body_mass_person)?body_index_calculator.lib.body_mass_index.classify_body_mass_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMI",new cljs.core.Keyword(null,"title","title",636505583),"Body Mass Index",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg\u00B7m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bsi","body-index-calculator.subscriptions/bsi",2021885836),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-shape-index","person","body-index-calculator.lib.body-shape-index/person",-248442709),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.calc_body_shape_z_score;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","calc-body-shape-z-score","body-index-calculator.lib.body-shape-index/calc-body-shape-z-score",-1838201271,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"calc-body-shape-z-score","calc-body-shape-z-score",-2113613665,null),"body_index_calculator/lib/body_shape_index.cljs",(30),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"gender","gender",906600800,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"person","person",580724652,null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.calc_body_shape_z_score)?body_index_calculator.lib.body_shape_index.calc_body_shape_z_score.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.classify_body_shape_person;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","classify-body-shape-person","body-index-calculator.lib.body-shape-index/classify-body-shape-person",1399396936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"classify-body-shape-person","classify-body-shape-person",1133415558,null),"body_index_calculator/lib/body_shape_index.cljs",(33),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.classify_body_shape_person)?body_index_calculator.lib.body_shape_index.classify_body_shape_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"A Body Shape Index",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"ABSI",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"11/6"], null),"kg",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"-2/3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmr","body-index-calculator.subscriptions/bmr",90641346),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.basal-matabolic-rate","person","body-index-calculator.lib.basal-matabolic-rate/person",1597875411),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor;},new cljs.core.Symbol("body-index-calculator.lib.basal-matabolic-rate","mifflin-jeor","body-index-calculator.lib.basal-matabolic-rate/mifflin-jeor",1136971517,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.basal-matabolic-rate","body-index-calculator.lib.basal-matabolic-rate",-1279718739,null),new cljs.core.Symbol(null,"mifflin-jeor","mifflin-jeor",-480259485,null),"body_index_calculator/lib/basal_matabolic_rate.cljs",(19),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gender","gender",906600800,null),new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor)?body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),null,new cljs.core.Keyword(null,"title","title",636505583),"Basal Metabolic Rate [Mefflin St Jeor]",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kcal/day"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","lbm","body-index-calculator.subscriptions/lbm",-1153487168),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.lean-body-mass","person","body-index-calculator.lib.lean-body-mass/person",-1102348784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.lean_body_mass.calc_lean_body_mass;},new cljs.core.Symbol("body-index-calculator.lib.lean-body-mass","calc-lean-body-mass","body-index-calculator.lib.lean-body-mass/calc-lean-body-mass",-1493499366,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.lean-body-mass","body-index-calculator.lib.lean-body-mass",-1775364684,null),new cljs.core.Symbol(null,"calc-lean-body-mass","calc-lean-body-mass",-1520291843,null),"body_index_calculator/lib/lean_body_mass.cljs",(30),(1),(15),(15),cljs.core.List.EMPTY,null,(cljs.core.truth_(body_index_calculator.lib.lean_body_mass.calc_lean_body_mass)?body_index_calculator.lib.lean_body_mass.calc_lean_body_mass.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conslusion","conslusion",-835967639),null,new cljs.core.Keyword(null,"title","title",636505583),"Lean Body Mass",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"LBM",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bfp","body-index-calculator.subscriptions/bfp",-1129525184),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-fat","person","body-index-calculator.lib.body-fat/person",1174056730),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.calc_body_fat;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","calc-body-fat","body-index-calculator.lib.body-fat/calc-body-fat",2079549006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"calc-body-fat","calc-body-fat",-122849139,null),"body_index_calculator/lib/body_fat.cljs",(20),(1),(13),(13),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),"Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage",(cljs.core.truth_(body_index_calculator.lib.body_fat.calc_body_fat)?body_index_calculator.lib.body_fat.calc_body_fat.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.classify_fat_percentage_person;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","classify-fat-percentage-person","body-index-calculator.lib.body-fat/classify-fat-percentage-person",1120546474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"classify-fat-percentage-person","classify-fat-percentage-person",-1047003031,null),"body_index_calculator/lib/body_fat.cljs",(37),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_fat.classify_fat_percentage_person)?body_index_calculator.lib.body_fat.classify_fat_percentage_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Body Fat Percentage",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BF",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","whr","body-index-calculator.subscriptions/whr",1719104930),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.wais-hip-ratio","person","body-index-calculator.lib.wais-hip-ratio/person",-426368092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","calc-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/calc-waist-hip-ratio",1690970201,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"calc-waist-hip-ratio","calc-waist-hip-ratio",-2104776166,null),"body_index_calculator/lib/wais_hip_ratio.cljs",(27),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"waist","waist",1032102076,null),new cljs.core.Symbol(null,"hip","hip",1147544584,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","classify-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/classify-waist-hip-ratio",1010412862,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"classify-waist-hip-ratio","classify-waist-hip-ratio",-696373391,null),"body_index_calculator/lib/wais_hip_ratio.cljs",(31),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Waist to Hip Ratio",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"WHR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null)], null)], null);
var G__50625_50745 = new cljs.core.Keyword("body-index-calculator.subscriptions","result","body-index-calculator.subscriptions/result",-1330365021);
var G__50626_50746 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50627_50747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__50628_50748 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__50629_50749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__50630_50750 = ((function (G__50625_50745,G__50626_50746,G__50627_50747,G__50628_50748,G__50629_50749){
return (function (p__50631,_){
var vec__50632 = p__50631;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50632,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50632,(1),null);
var converted_form = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_form_values(new cljs.core.Keyword(null,"metric","metric",408798077),form):form);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.subscriptions.form_metric__GT_result,converted_form),body_index_calculator.subscriptions.metrics);
});})(G__50625_50745,G__50626_50746,G__50627_50747,G__50628_50748,G__50629_50749))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__50625_50745,G__50626_50746,G__50627_50747,G__50628_50748,G__50629_50749,G__50630_50750) : re_frame.core.reg_sub.call(null,G__50625_50745,G__50626_50746,G__50627_50747,G__50628_50748,G__50629_50749,G__50630_50750));

//# sourceMappingURL=body_index_calculator.subscriptions.js.map
