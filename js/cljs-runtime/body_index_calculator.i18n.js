goog.provide('body_index_calculator.i18n');
goog.require('cljs.core');
goog.require('taoensso.tempura');
body_index_calculator.i18n.local_dictionary = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"missing","missing",362507769),"missing text",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ft","in"], null),new cljs.core.Keyword(null,"time","time",1385887882),"yr",new cljs.core.Keyword(null,"mass","mass",-2138950046),"lb"], null),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["feet","inches"], null),new cljs.core.Keyword(null,"time","time",1385887882),"years",new cljs.core.Keyword(null,"mass","mass",-2138950046),"pounds"], null)], null),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),"cm",new cljs.core.Keyword(null,"time","time",1385887882),"yr",new cljs.core.Keyword(null,"mass","mass",-2138950046),"kg"], null),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),"centimetres",new cljs.core.Keyword(null,"time","time",1385887882),"years",new cljs.core.Keyword(null,"mass","mass",-2138950046),"kilograms"], null)], null)], null),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"en.validation.age.metric","en.validation.age.metric",-1868978061),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"age-lt","age-lt",-1955617620),(function (p__49527){
var vec__49528 = p__49527;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49528,(0),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Age should be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"less"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),max], null)," years."], null);
}),new cljs.core.Keyword(null,"age-gt","age-gt",-1262301985),(function (p__49531){
var vec__49532 = p__49531;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49532,(0),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Age should be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"more"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),min], null)," years."], null);
}),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only *numbers* allowed for *Age* field."], null)], null)], null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"en.validation.weight.metric","en.validation.weight.metric",-260908347),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight-lt","weight-lt",1328019029),(function (p__49535){
var vec__49536 = p__49535;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(2),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Weight should be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"less"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),max], null)," ",units,"."], null);
}),new cljs.core.Keyword(null,"weight-gt","weight-gt",1601476413),(function (p__49539){
var vec__49540 = p__49539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(0),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(2),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Weight should be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"more"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),min], null)," ",units,"."], null);
}),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only **numbers** allowed for **Weight** field."], null)], null)], null),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height-lt","height-lt",799107670),(function (p__49543){
var vec__49544 = p__49543;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49544,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49544,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49544,(2),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"People ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"cannot"], null)," be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"higher"], null)," than ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(max,cljs.core.rest(units)))),"."], null);
}),new cljs.core.Keyword(null,"height-gt","height-gt",1264678033),(function (p__49547){
var vec__49548 = p__49547;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548,(0),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548,(2),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"People ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"cannot"], null)," be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"lower"], null)," than ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(min,cljs.core.rest(units)))),"."], null);
}),new cljs.core.Keyword(null,"number","number",1570378438),(function (p__49554){
var vec__49555 = p__49554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Please enter you height as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"number"], null)," in ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.rest(units))),"."], null);
})], null),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height-lt","height-lt",799107670),(function (p__49562){
var vec__49563 = p__49562;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49563,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49563,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49563,(2),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"People ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"cannot"], null)," be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"higher"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),max], null)," ",units,"."], null);
}),new cljs.core.Keyword(null,"height-gt","height-gt",1264678033),(function (p__49566){
var vec__49567 = p__49566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(0),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(2),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"People ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"cannot"], null)," be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"lower"], null)," than ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),min], null)," ",units,"."], null);
}),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Please enter you height as number in %3."], null)], null)], null)], null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"call-to-action","call-to-action",-713850401),"Measure You Body",new cljs.core.Keyword(null,"hip","hip",-492986943),"Hip Circumference",new cljs.core.Keyword(null,"waist","waist",-608429451),"Waist Circumference",new cljs.core.Keyword(null,"height","height",1025178622),"Height",new cljs.core.Keyword(null,"weight","weight",-1262796205),"Weight",new cljs.core.Keyword(null,"age","age",-604307804),"Age",new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gender",new cljs.core.Keyword(null,"male","male",-560253338),"Male",new cljs.core.Keyword(null,"female","female",1810186049),"Female"], null)], null),new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Language",new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"En",new cljs.core.Keyword(null,"title","title",636505583),"English"], null),new cljs.core.Keyword(null,"ru","ru",-1755311210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Ru",new cljs.core.Keyword(null,"title","title",636505583),"Russian"], null)], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Color Theme",new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Light"], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Dark"], null)], null),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Measurement system",new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Metric",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),"cm",new cljs.core.Keyword(null,"time","time",1385887882),"years",new cljs.core.Keyword(null,"mass","mass",-2138950046),"kg"], null)], null),new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Imperial",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ft","in"], null),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword("en.system.metric.units","time","en.system.metric.units/time",-309096875),new cljs.core.Keyword(null,"mass","mass",-2138950046),"lb"], null)], null)], null)], null),new cljs.core.Keyword(null,"ru","ru",-1755311210),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"missing","missing",362507769),"\u041D\u044D\u0442\u0443 \u0442\u044D\u043A\u0441\u0442\u0430",new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"call-to-action","call-to-action",-713850401),"\u0418\u0437\u043C\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0435 \u0442\u0435\u043B\u043E",new cljs.core.Keyword(null,"hip","hip",-492986943),"\u041E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u0435\u0434\u0435\u0440",new cljs.core.Keyword(null,"waist","waist",-608429451),"\u041E\u0431\u0445\u0432\u0430\u0442 \u0430 \u0442\u0430\u043B\u0438\u0438",new cljs.core.Keyword(null,"height","height",1025178622),"\u0420\u043E\u0441\u0442",new cljs.core.Keyword(null,"weight","weight",-1262796205),"\u0412\u0435\u0441",new cljs.core.Keyword(null,"age","age",-604307804),"\u0412\u043E\u0437\u0440\u0430\u0441\u0442",new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"\u041F\u043E\u043B",new cljs.core.Keyword(null,"male","male",-560253338),"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",new cljs.core.Keyword(null,"female","female",1810186049),"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"], null)], null),new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0412\u044B\u0431\u043E\u0440 \u044F\u0437\u044B\u043A\u0430",new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"En",new cljs.core.Keyword(null,"title","title",636505583),"\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439"], null),new cljs.core.Keyword(null,"ru","ru",-1755311210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Ru",new cljs.core.Keyword(null,"title","title",636505583),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"], null)], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430",new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0421\u0432\u0435\u0442\u043B\u0430\u044F"], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0422\u0435\u043C\u043D\u0430\u044F"], null)], null),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0438\u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"\u041C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),"c\u043C",new cljs.core.Keyword(null,"time","time",1385887882),"\u043B\u0435\u0442",new cljs.core.Keyword(null,"mass","mass",-2138950046),"\u043A\u0433"], null),new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0418\u043C\u043F\u0435\u0440\u0441\u043A\u0430\u044F",new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"len","len",1423657078),"\u0444\u0443\u0442\u044B",new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword("ru.system.metric.units","time","ru.system.metric.units/time",-1233469009),new cljs.core.Keyword(null,"mass","mass",-2138950046),"\u0444\u0443\u043D\u0442\u044B"], null)], null)], null)], null)], null)], null);
body_index_calculator.i18n.tr = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.tempura.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dict","dict",-1629964473),body_index_calculator.i18n.local_dictionary], null));

//# sourceMappingURL=body_index_calculator.i18n.js.map