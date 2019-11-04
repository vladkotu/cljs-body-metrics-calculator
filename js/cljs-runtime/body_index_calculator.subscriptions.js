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
var seq__49767_49883 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121),new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396),new cljs.core.Keyword("body-index-calculator.subscriptions","theme","body-index-calculator.subscriptions/theme",159921248),new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null));
var chunk__49772_49884 = null;
var count__49773_49885 = (0);
var i__49774_49886 = (0);
while(true){
if((i__49774_49886 < count__49773_49885)){
var sub_name_49887 = chunk__49772_49884.cljs$core$IIndexed$_nth$arity$2(null,i__49774_49886);
var seq__49775_49888 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_49887))], null));
var chunk__49776_49889 = null;
var count__49777_49890 = (0);
var i__49778_49891 = (0);
while(true){
if((i__49778_49891 < count__49777_49890)){
var a_key_49892 = chunk__49776_49889.cljs$core$IIndexed$_nth$arity$2(null,i__49778_49891);
var G__49799_49893 = sub_name_49887;
var G__49800_49894 = ((function (seq__49775_49888,chunk__49776_49889,count__49777_49890,i__49778_49891,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49799_49893,a_key_49892,sub_name_49887){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_49892);
});})(seq__49775_49888,chunk__49776_49889,count__49777_49890,i__49778_49891,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49799_49893,a_key_49892,sub_name_49887))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49799_49893,G__49800_49894) : re_frame.core.reg_sub.call(null,G__49799_49893,G__49800_49894));


var G__49895 = seq__49775_49888;
var G__49896 = chunk__49776_49889;
var G__49897 = count__49777_49890;
var G__49898 = (i__49778_49891 + (1));
seq__49775_49888 = G__49895;
chunk__49776_49889 = G__49896;
count__49777_49890 = G__49897;
i__49778_49891 = G__49898;
continue;
} else {
var temp__5735__auto___49899 = cljs.core.seq(seq__49775_49888);
if(temp__5735__auto___49899){
var seq__49775_49901__$1 = temp__5735__auto___49899;
if(cljs.core.chunked_seq_QMARK_(seq__49775_49901__$1)){
var c__4550__auto___49902 = cljs.core.chunk_first(seq__49775_49901__$1);
var G__49903 = cljs.core.chunk_rest(seq__49775_49901__$1);
var G__49904 = c__4550__auto___49902;
var G__49905 = cljs.core.count(c__4550__auto___49902);
var G__49906 = (0);
seq__49775_49888 = G__49903;
chunk__49776_49889 = G__49904;
count__49777_49890 = G__49905;
i__49778_49891 = G__49906;
continue;
} else {
var a_key_49907 = cljs.core.first(seq__49775_49901__$1);
var G__49801_49908 = sub_name_49887;
var G__49802_49909 = ((function (seq__49775_49888,chunk__49776_49889,count__49777_49890,i__49778_49891,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49801_49908,a_key_49907,seq__49775_49901__$1,temp__5735__auto___49899,sub_name_49887){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_49907);
});})(seq__49775_49888,chunk__49776_49889,count__49777_49890,i__49778_49891,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49801_49908,a_key_49907,seq__49775_49901__$1,temp__5735__auto___49899,sub_name_49887))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49801_49908,G__49802_49909) : re_frame.core.reg_sub.call(null,G__49801_49908,G__49802_49909));


var G__49910 = cljs.core.next(seq__49775_49901__$1);
var G__49911 = null;
var G__49912 = (0);
var G__49913 = (0);
seq__49775_49888 = G__49910;
chunk__49776_49889 = G__49911;
count__49777_49890 = G__49912;
i__49778_49891 = G__49913;
continue;
}
} else {
}
}
break;
}

var G__49914 = seq__49767_49883;
var G__49915 = chunk__49772_49884;
var G__49916 = count__49773_49885;
var G__49917 = (i__49774_49886 + (1));
seq__49767_49883 = G__49914;
chunk__49772_49884 = G__49915;
count__49773_49885 = G__49916;
i__49774_49886 = G__49917;
continue;
} else {
var temp__5735__auto___49918 = cljs.core.seq(seq__49767_49883);
if(temp__5735__auto___49918){
var seq__49767_49919__$1 = temp__5735__auto___49918;
if(cljs.core.chunked_seq_QMARK_(seq__49767_49919__$1)){
var c__4550__auto___49920 = cljs.core.chunk_first(seq__49767_49919__$1);
var G__49921 = cljs.core.chunk_rest(seq__49767_49919__$1);
var G__49922 = c__4550__auto___49920;
var G__49923 = cljs.core.count(c__4550__auto___49920);
var G__49924 = (0);
seq__49767_49883 = G__49921;
chunk__49772_49884 = G__49922;
count__49773_49885 = G__49923;
i__49774_49886 = G__49924;
continue;
} else {
var sub_name_49925 = cljs.core.first(seq__49767_49919__$1);
var seq__49768_49926 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_49925))], null));
var chunk__49769_49927 = null;
var count__49770_49928 = (0);
var i__49771_49929 = (0);
while(true){
if((i__49771_49929 < count__49770_49928)){
var a_key_49930 = chunk__49769_49927.cljs$core$IIndexed$_nth$arity$2(null,i__49771_49929);
var G__49807_49931 = sub_name_49925;
var G__49808_49932 = ((function (seq__49768_49926,chunk__49769_49927,count__49770_49928,i__49771_49929,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49807_49931,a_key_49930,sub_name_49925,seq__49767_49919__$1,temp__5735__auto___49918){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_49930);
});})(seq__49768_49926,chunk__49769_49927,count__49770_49928,i__49771_49929,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49807_49931,a_key_49930,sub_name_49925,seq__49767_49919__$1,temp__5735__auto___49918))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49807_49931,G__49808_49932) : re_frame.core.reg_sub.call(null,G__49807_49931,G__49808_49932));


var G__49934 = seq__49768_49926;
var G__49935 = chunk__49769_49927;
var G__49936 = count__49770_49928;
var G__49937 = (i__49771_49929 + (1));
seq__49768_49926 = G__49934;
chunk__49769_49927 = G__49935;
count__49770_49928 = G__49936;
i__49771_49929 = G__49937;
continue;
} else {
var temp__5735__auto___49938__$1 = cljs.core.seq(seq__49768_49926);
if(temp__5735__auto___49938__$1){
var seq__49768_49939__$1 = temp__5735__auto___49938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49768_49939__$1)){
var c__4550__auto___49941 = cljs.core.chunk_first(seq__49768_49939__$1);
var G__49942 = cljs.core.chunk_rest(seq__49768_49939__$1);
var G__49943 = c__4550__auto___49941;
var G__49944 = cljs.core.count(c__4550__auto___49941);
var G__49945 = (0);
seq__49768_49926 = G__49942;
chunk__49769_49927 = G__49943;
count__49770_49928 = G__49944;
i__49771_49929 = G__49945;
continue;
} else {
var a_key_49948 = cljs.core.first(seq__49768_49939__$1);
var G__49809_49949 = sub_name_49925;
var G__49810_49950 = ((function (seq__49768_49926,chunk__49769_49927,count__49770_49928,i__49771_49929,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49809_49949,a_key_49948,seq__49768_49939__$1,temp__5735__auto___49938__$1,sub_name_49925,seq__49767_49919__$1,temp__5735__auto___49918){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,a_key_49948);
});})(seq__49768_49926,chunk__49769_49927,count__49770_49928,i__49771_49929,seq__49767_49883,chunk__49772_49884,count__49773_49885,i__49774_49886,G__49809_49949,a_key_49948,seq__49768_49939__$1,temp__5735__auto___49938__$1,sub_name_49925,seq__49767_49919__$1,temp__5735__auto___49918))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49809_49949,G__49810_49950) : re_frame.core.reg_sub.call(null,G__49809_49949,G__49810_49950));


var G__49951 = cljs.core.next(seq__49768_49939__$1);
var G__49952 = null;
var G__49953 = (0);
var G__49954 = (0);
seq__49768_49926 = G__49951;
chunk__49769_49927 = G__49952;
count__49770_49928 = G__49953;
i__49771_49929 = G__49954;
continue;
}
} else {
}
}
break;
}

var G__49955 = cljs.core.next(seq__49767_49919__$1);
var G__49956 = null;
var G__49957 = (0);
var G__49958 = (0);
seq__49767_49883 = G__49955;
chunk__49772_49884 = G__49956;
count__49773_49885 = G__49957;
i__49774_49886 = G__49958;
continue;
}
} else {
}
}
break;
}
var seq__49811_49959 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","gender","body-index-calculator.subscriptions/gender",1752121289),new cljs.core.Keyword("body-index-calculator.subscriptions","age","body-index-calculator.subscriptions/age",-278078572),new cljs.core.Keyword("body-index-calculator.subscriptions","weight","body-index-calculator.subscriptions/weight",145591651),new cljs.core.Keyword("body-index-calculator.subscriptions","height","body-index-calculator.subscriptions/height",426599118),new cljs.core.Keyword("body-index-calculator.subscriptions","waist","body-index-calculator.subscriptions/waist",933805829),new cljs.core.Keyword("body-index-calculator.subscriptions","hip","body-index-calculator.subscriptions/hip",-908770575)], null));
var chunk__49812_49960 = null;
var count__49813_49961 = (0);
var i__49814_49962 = (0);
while(true){
if((i__49814_49962 < count__49813_49961)){
var sub_name_49968 = chunk__49812_49960.cljs$core$IIndexed$_nth$arity$2(null,i__49814_49962);
var a_key_49969 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_49968));
var G__49840_49970 = sub_name_49968;
var G__49841_49971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49842_49972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__49843_49973 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49844_49974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__49845_49975 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49846_49976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__49847_49977 = ((function (seq__49811_49959,chunk__49812_49960,count__49813_49961,i__49814_49962,G__49840_49970,G__49841_49971,G__49842_49972,G__49843_49973,G__49844_49974,G__49845_49975,G__49846_49976,a_key_49969,sub_name_49968){
return (function (p__49848,_){
var vec__49849 = p__49848;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49849,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49849,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49849,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_49969);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__49811_49959,chunk__49812_49960,count__49813_49961,i__49814_49962,G__49840_49970,G__49841_49971,G__49842_49972,G__49843_49973,G__49844_49974,G__49845_49975,G__49846_49976,a_key_49969,sub_name_49968))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__49840_49970,G__49841_49971,G__49842_49972,G__49843_49973,G__49844_49974,G__49845_49975,G__49846_49976,G__49847_49977) : re_frame.core.reg_sub.call(null,G__49840_49970,G__49841_49971,G__49842_49972,G__49843_49973,G__49844_49974,G__49845_49975,G__49846_49976,G__49847_49977));


var G__49978 = seq__49811_49959;
var G__49979 = chunk__49812_49960;
var G__49980 = count__49813_49961;
var G__49981 = (i__49814_49962 + (1));
seq__49811_49959 = G__49978;
chunk__49812_49960 = G__49979;
count__49813_49961 = G__49980;
i__49814_49962 = G__49981;
continue;
} else {
var temp__5735__auto___49982 = cljs.core.seq(seq__49811_49959);
if(temp__5735__auto___49982){
var seq__49811_49983__$1 = temp__5735__auto___49982;
if(cljs.core.chunked_seq_QMARK_(seq__49811_49983__$1)){
var c__4550__auto___49984 = cljs.core.chunk_first(seq__49811_49983__$1);
var G__49985 = cljs.core.chunk_rest(seq__49811_49983__$1);
var G__49986 = c__4550__auto___49984;
var G__49987 = cljs.core.count(c__4550__auto___49984);
var G__49988 = (0);
seq__49811_49959 = G__49985;
chunk__49812_49960 = G__49986;
count__49813_49961 = G__49987;
i__49814_49962 = G__49988;
continue;
} else {
var sub_name_49989 = cljs.core.first(seq__49811_49983__$1);
var a_key_49990 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sub_name_49989));
var G__49852_49991 = sub_name_49989;
var G__49853_49992 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49854_49993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__49855_49994 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49856_49995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","locale","body-index-calculator.subscriptions/locale",-31530473)], null);
var G__49857_49996 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49858_49997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__49859_49998 = ((function (seq__49811_49959,chunk__49812_49960,count__49813_49961,i__49814_49962,G__49852_49991,G__49853_49992,G__49854_49993,G__49855_49994,G__49856_49995,G__49857_49996,G__49858_49997,a_key_49990,sub_name_49989,seq__49811_49983__$1,temp__5735__auto___49982){
return (function (p__49860,_){
var vec__49861 = p__49860;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(0),null);
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(2),null);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,a_key_49990);
var errors = body_index_calculator.validation.validate(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_field_value(new cljs.core.Keyword(null,"metric","metric",408798077),field):field));
var error_text = body_index_calculator.validation.localize_error_code(system,locale,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,errors,error_text], 0));
});})(seq__49811_49959,chunk__49812_49960,count__49813_49961,i__49814_49962,G__49852_49991,G__49853_49992,G__49854_49993,G__49855_49994,G__49856_49995,G__49857_49996,G__49858_49997,a_key_49990,sub_name_49989,seq__49811_49983__$1,temp__5735__auto___49982))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__49852_49991,G__49853_49992,G__49854_49993,G__49855_49994,G__49856_49995,G__49857_49996,G__49858_49997,G__49859_49998) : re_frame.core.reg_sub.call(null,G__49852_49991,G__49853_49992,G__49854_49993,G__49855_49994,G__49856_49995,G__49857_49996,G__49858_49997,G__49859_49998));


var G__50003 = cljs.core.next(seq__49811_49983__$1);
var G__50004 = null;
var G__50005 = (0);
var G__50006 = (0);
seq__49811_49959 = G__50003;
chunk__49812_49960 = G__50004;
count__49813_49961 = G__50005;
i__49814_49962 = G__50006;
continue;
}
} else {
}
}
break;
}
body_index_calculator.subscriptions.form_metric__GT_result = (function body_index_calculator$subscriptions$form_metric__GT_result(form,p__49864){
var map__49865 = p__49864;
var map__49865__$1 = (((((!((map__49865 == null))))?(((((map__49865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49865):map__49865);
var metric = map__49865__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"value","value",305978217));
var conclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958));
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
}catch (e49867){if((e49867 instanceof Object)){
var e = e49867;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
throw e49867;

}
}});
body_index_calculator.subscriptions.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmi","body-index-calculator.subscriptions/bmi",-394816092),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-mass-index","person","body-index-calculator.lib.body-mass-index/person",1077168754),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.calc_body_mass_index;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","calc-body-mass-index","body-index-calculator.lib.body-mass-index/calc-body-mass-index",1492162082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"calc-body-mass-index","calc-body-mass-index",-418297513,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),"",(cljs.core.truth_(body_index_calculator.lib.body_mass_index.calc_body_mass_index)?body_index_calculator.lib.body_mass_index.calc_body_mass_index.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_mass_index.classify_body_mass_person;},new cljs.core.Symbol("body-index-calculator.lib.body-mass-index","classify-body-mass-person","body-index-calculator.lib.body-mass-index/classify-body-mass-person",-1057714903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-mass-index","body-index-calculator.lib.body-mass-index",-1257624574,null),new cljs.core.Symbol(null,"classify-body-mass-person","classify-body-mass-person",1175699996,null),"body_index_calculator/lib/body_mass_index.cljs",32,1,26,26,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_mass_index.classify_body_mass_person)?body_index_calculator.lib.body_mass_index.classify_body_mass_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMI",new cljs.core.Keyword(null,"title","title",636505583),"Body Mass Index",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg\u00B7m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bsi","body-index-calculator.subscriptions/bsi",2021885836),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-shape-index","person","body-index-calculator.lib.body-shape-index/person",-248442709),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.calc_body_shape_z_score;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","calc-body-shape-z-score","body-index-calculator.lib.body-shape-index/calc-body-shape-z-score",-1838201271,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"calc-body-shape-z-score","calc-body-shape-z-score",-2113613665,null),"body_index_calculator/lib/body_shape_index.cljs",30,1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"gender","gender",906600800,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"person","person",580724652,null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.calc_body_shape_z_score)?body_index_calculator.lib.body_shape_index.calc_body_shape_z_score.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_shape_index.classify_body_shape_person;},new cljs.core.Symbol("body-index-calculator.lib.body-shape-index","classify-body-shape-person","body-index-calculator.lib.body-shape-index/classify-body-shape-person",1399396936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-shape-index","body-index-calculator.lib.body-shape-index",657986198,null),new cljs.core.Symbol(null,"classify-body-shape-person","classify-body-shape-person",1133415558,null),"body_index_calculator/lib/body_shape_index.cljs",33,1,50,50,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_shape_index.classify_body_shape_person)?body_index_calculator.lib.body_shape_index.classify_body_shape_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"A Body Shape Index",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"ABSI",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"m",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"11/6"], null),"kg",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"-2/3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bmr","body-index-calculator.subscriptions/bmr",90641346),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.basal-matabolic-rate","person","body-index-calculator.lib.basal-matabolic-rate/person",1597875411),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor;},new cljs.core.Symbol("body-index-calculator.lib.basal-matabolic-rate","mifflin-jeor","body-index-calculator.lib.basal-matabolic-rate/mifflin-jeor",1136971517,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.basal-matabolic-rate","body-index-calculator.lib.basal-matabolic-rate",-1279718739,null),new cljs.core.Symbol(null,"mifflin-jeor","mifflin-jeor",-480259485,null),"body_index_calculator/lib/basal_matabolic_rate.cljs",19,1,12,12,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gender","gender",906600800,null),new cljs.core.Symbol(null,"age","age",1036223723,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor)?body_index_calculator.lib.basal_matabolic_rate.mifflin_jeor.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),null,new cljs.core.Keyword(null,"title","title",636505583),"Basal Metabolic Rate [Mefflin St Jeor]",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BMR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kcal/day"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","lbm","body-index-calculator.subscriptions/lbm",-1153487168),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.lean-body-mass","person","body-index-calculator.lib.lean-body-mass/person",-1102348784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.lean_body_mass.calc_lean_body_mass;},new cljs.core.Symbol("body-index-calculator.lib.lean-body-mass","calc-lean-body-mass","body-index-calculator.lib.lean-body-mass/calc-lean-body-mass",-1493499366,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.lean-body-mass","body-index-calculator.lib.lean-body-mass",-1775364684,null),new cljs.core.Symbol(null,"calc-lean-body-mass","calc-lean-body-mass",-1520291843,null),"body_index_calculator/lib/lean_body_mass.cljs",30,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(body_index_calculator.lib.lean_body_mass.calc_lean_body_mass)?body_index_calculator.lib.lean_body_mass.calc_lean_body_mass.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conslusion","conslusion",-835967639),null,new cljs.core.Keyword(null,"title","title",636505583),"Lean Body Mass",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"LBM",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kg"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","bfp","body-index-calculator.subscriptions/bfp",-1129525184),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.body-fat","person","body-index-calculator.lib.body-fat/person",1174056730),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.calc_body_fat;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","calc-body-fat","body-index-calculator.lib.body-fat/calc-body-fat",2079549006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"calc-body-fat","calc-body-fat",-122849139,null),"body_index_calculator/lib/body_fat.cljs",20,1,13,13,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),"Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage",(cljs.core.truth_(body_index_calculator.lib.body_fat.calc_body_fat)?body_index_calculator.lib.body_fat.calc_body_fat.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.body_fat.classify_fat_percentage_person;},new cljs.core.Symbol("body-index-calculator.lib.body-fat","classify-fat-percentage-person","body-index-calculator.lib.body-fat/classify-fat-percentage-person",1120546474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.body-fat","body-index-calculator.lib.body-fat",-758061310,null),new cljs.core.Symbol(null,"classify-fat-percentage-person","classify-fat-percentage-person",-1047003031,null),"body_index_calculator/lib/body_fat.cljs",37,1,38,38,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.body_fat.classify_fat_percentage_person)?body_index_calculator.lib.body_fat.classify_fat_percentage_person.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Body Fat Percentage",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"BF",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a-key","a-key",-539452860),new cljs.core.Keyword("body-index-calculator.subscriptions","whr","body-index-calculator.subscriptions/whr",1719104930),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("body-index-calculator.lib.wais-hip-ratio","person","body-index-calculator.lib.wais-hip-ratio/person",-426368092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","calc-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/calc-waist-hip-ratio",1690970201,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"calc-waist-hip-ratio","calc-waist-hip-ratio",-2104776166,null),"body_index_calculator/lib/wais_hip_ratio.cljs",27,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"waist","waist",1032102076,null),new cljs.core.Symbol(null,"hip","hip",1147544584,null)], null)], null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.calc_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958),new cljs.core.Var(function(){return body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio;},new cljs.core.Symbol("body-index-calculator.lib.wais-hip-ratio","classify-waist-hip-ratio","body-index-calculator.lib.wais-hip-ratio/classify-waist-hip-ratio",1010412862,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.lib.wais-hip-ratio","body-index-calculator.lib.wais-hip-ratio",-1524647486,null),new cljs.core.Symbol(null,"classify-waist-hip-ratio","classify-waist-hip-ratio",-696373391,null),"body_index_calculator/lib/wais_hip_ratio.cljs",31,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"person","person",580724652,null)], null)),null,(cljs.core.truth_(body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio)?body_index_calculator.lib.wais_hip_ratio.classify_waist_hip_ratio.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title","title",636505583),"Waist to Hip Ratio",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"WHR",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null)], null)], null);
var G__49873_50012 = new cljs.core.Keyword("body-index-calculator.subscriptions","result","body-index-calculator.subscriptions/result",-1330365021);
var G__49874_50013 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49875_50014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","system","body-index-calculator.subscriptions/system",1794741396)], null);
var G__49876_50015 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__49877_50016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","form","body-index-calculator.subscriptions/form",50126121)], null);
var G__49878_50017 = ((function (G__49873_50012,G__49874_50013,G__49875_50014,G__49876_50015,G__49877_50016){
return (function (p__49879,_){
var vec__49880 = p__49879;
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49880,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49880,(1),null);
var converted_form = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?body_index_calculator.helpers.convert_form_values(new cljs.core.Keyword(null,"metric","metric",408798077),form):form);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(body_index_calculator.subscriptions.form_metric__GT_result,converted_form),body_index_calculator.subscriptions.metrics);
});})(G__49873_50012,G__49874_50013,G__49875_50014,G__49876_50015,G__49877_50016))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__49873_50012,G__49874_50013,G__49875_50014,G__49876_50015,G__49877_50016,G__49878_50017) : re_frame.core.reg_sub.call(null,G__49873_50012,G__49874_50013,G__49875_50014,G__49876_50015,G__49877_50016,G__49878_50017));

//# sourceMappingURL=body_index_calculator.subscriptions.js.map
