goog.provide('body_index_calculator.validation');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('body_index_calculator.i18n');
goog.require('body_index_calculator.lib.specs');
goog.require('body_index_calculator.config');
goog.require('body_index_calculator.helpers');
body_index_calculator.validation.rules = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","number","body-index-calculator.lib.specs/number",-867754147),new cljs.core.Keyword("body-index-calculator.lib.specs","age-lt","body-index-calculator.lib.specs/age-lt",-1156820637)], null),new cljs.core.Keyword(null,"finaly","finaly",274362791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","age-gt","body-index-calculator.lib.specs/age-gt",-2091402936)], null)], null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","number","body-index-calculator.lib.specs/number",-867754147),new cljs.core.Keyword("body-index-calculator.lib.specs","weight-lt","body-index-calculator.lib.specs/weight-lt",-1637424914)], null),new cljs.core.Keyword(null,"finaly","finaly",274362791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","weight-gt","body-index-calculator.lib.specs/weight-gt",-283279210)], null)], null),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","number","body-index-calculator.lib.specs/number",-867754147),new cljs.core.Keyword("body-index-calculator.lib.specs","height-lt","body-index-calculator.lib.specs/height-lt",-1626708243)], null),new cljs.core.Keyword(null,"finaly","finaly",274362791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","height-gt","body-index-calculator.lib.specs/height-gt",-1144648900)], null)], null),new cljs.core.Keyword(null,"waist","waist",-608429451),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","number","body-index-calculator.lib.specs/number",-867754147),new cljs.core.Keyword("body-index-calculator.lib.specs","waist-lt","body-index-calculator.lib.specs/waist-lt",1848243430)], null),new cljs.core.Keyword(null,"finaly","finaly",274362791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","waist-gt","body-index-calculator.lib.specs/waist-gt",1087600168)], null)], null),new cljs.core.Keyword(null,"hip","hip",-492986943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","number","body-index-calculator.lib.specs/number",-867754147),new cljs.core.Keyword("body-index-calculator.lib.specs","hip-lt","body-index-calculator.lib.specs/hip-lt",-1999001493)], null),new cljs.core.Keyword(null,"finaly","finaly",274362791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","hip-gt","body-index-calculator.lib.specs/hip-gt",-1957048800)], null)], null)], null);
body_index_calculator.validation.fail_spec = (function body_index_calculator$validation$fail_spec(spec,value){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name),cljs.core.last(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"via","via",-1904457336),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.explain_data(spec,value))))));
});
body_index_calculator.validation.get_rules = (function body_index_calculator$validation$get_rules(select,name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),select)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(body_index_calculator.validation.rules) : name.call(null,body_index_calculator.validation.rules))));
} else {
var G__50413 = (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(body_index_calculator.validation.rules) : name.call(null,body_index_calculator.validation.rules));
return (select.cljs$core$IFn$_invoke$arity$1 ? select.cljs$core$IFn$_invoke$arity$1(G__50413) : select.call(null,G__50413));
}
});
body_index_calculator.validation.apply_rules = (function body_index_calculator$validation$apply_rules(rules,value){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50414_SHARP_){
return body_index_calculator.validation.fail_spec(p1__50414_SHARP_,value);
}),rules)));
});
body_index_calculator.validation.valid = (function body_index_calculator$validation$valid(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"error-code","error-code",180497232),null], null);
});
body_index_calculator.validation.invalid = (function body_index_calculator$validation$invalid(fails){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"error-code","error-code",180497232),fails], null);
});
body_index_calculator.validation.validate_with_rules = (function body_index_calculator$validation$validate_with_rules(select,p__50415){
var map__50416 = p__50415;
var map__50416__$1 = (((((!((map__50416 == null))))?(((((map__50416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50416):map__50416);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temp__5733__auto__ = body_index_calculator.validation.apply_rules(body_index_calculator.validation.get_rules(select,name),value);
if(cljs.core.truth_(temp__5733__auto__)){
var fails = temp__5733__auto__;
return body_index_calculator.validation.invalid(fails);
} else {
return body_index_calculator.validation.valid();
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","active?","body-index-calculator.validation/active?",1595645055),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","visited?","body-index-calculator.validation/visited?",-1194252990),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","name","body-index-calculator.validation/name",-466845014),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","value","body-index-calculator.validation/value",-1669059606),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50418){
return cljs.core.coll_QMARK_(G__50418);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","visited?","body-index-calculator.validation/visited?",-1194252990),new cljs.core.Keyword("body-index-calculator.validation","active?","body-index-calculator.validation/active?",1595645055),new cljs.core.Keyword("body-index-calculator.validation","name","body-index-calculator.validation/name",-466845014),new cljs.core.Keyword("body-index-calculator.validation","value","body-index-calculator.validation/value",-1669059606)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","visited?","body-index-calculator.validation/visited?",-1194252990),new cljs.core.Keyword("body-index-calculator.validation","active?","body-index-calculator.validation/active?",1595645055),new cljs.core.Keyword("body-index-calculator.validation","name","body-index-calculator.validation/name",-466845014),new cljs.core.Keyword("body-index-calculator.validation","value","body-index-calculator.validation/value",-1669059606)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50419){
return cljs.core.map_QMARK_(G__50419);
}),(function (G__50419){
return cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"visited?","visited?",1255772609));
}),(function (G__50419){
return cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"active?","active?",459499776));
}),(function (G__50419){
return cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"name","name",1843675177));
}),(function (G__50419){
return cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"value","value",305978217));
})], null),(function (G__50419){
return ((cljs.core.map_QMARK_(G__50419)) && (cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"visited?","visited?",1255772609))) && (cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"active?","active?",459499776))) && (cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"name","name",1843675177))) && (cljs.core.contains_QMARK_(G__50419,new cljs.core.Keyword(null,"value","value",305978217))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-code","error-code",180497232)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","visited?","body-index-calculator.validation/visited?",-1194252990),new cljs.core.Keyword("body-index-calculator.validation","active?","body-index-calculator.validation/active?",1595645055),new cljs.core.Keyword("body-index-calculator.validation","name","body-index-calculator.validation/name",-466845014),new cljs.core.Keyword("body-index-calculator.validation","value","body-index-calculator.validation/value",-1669059606)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visited?","visited?",1255772609),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"visited?","visited?",1255772609))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"active?","active?",459499776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"value","value",305978217)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.validation","validation-error","body-index-calculator.validation/validation-error",-1010018267),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50420){
return cljs.core.map_QMARK_(G__50420);
}),(function (G__50420){
return cljs.core.contains_QMARK_(G__50420,new cljs.core.Keyword(null,"error","error",-978969032));
}),(function (G__50420){
return cljs.core.contains_QMARK_(G__50420,new cljs.core.Keyword(null,"error-code","error-code",180497232));
})], null),(function (G__50420){
return ((cljs.core.map_QMARK_(G__50420)) && (cljs.core.contains_QMARK_(G__50420,new cljs.core.Keyword(null,"error","error",-978969032))) && (cljs.core.contains_QMARK_(G__50420,new cljs.core.Keyword(null,"error-code","error-code",180497232))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","error","body-index-calculator.validation/error",793545655),new cljs.core.Keyword("body-index-calculator.validation","error-code","body-index-calculator.validation/error-code",-1753686835)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-code","error-code",180497232)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"error","error",-978969032))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"error-code","error-code",180497232)))], null),null])));
body_index_calculator.validation.not_validate_QMARK_ = (function body_index_calculator$validation$not_validate_QMARK_(p__50421){
var map__50422 = p__50421;
var map__50422__$1 = (((((!((map__50422 == null))))?(((((map__50422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50422):map__50422);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50422__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (((value == null)) || ((value instanceof cljs.core.Keyword)) || (cljs.core.empty_QMARK_(value)));
});
body_index_calculator.validation.validate = (function body_index_calculator$validation$validate(p__50424){
var map__50425 = p__50424;
var map__50425__$1 = (((((!((map__50425 == null))))?(((((map__50425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50425):map__50425);
var field = map__50425__$1;
var visited_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"visited?","visited?",1255772609));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
if(visited_QMARK_ === false){
return body_index_calculator.validation.valid();
} else {
if(body_index_calculator.validation.not_validate_QMARK_(field)){
return body_index_calculator.validation.valid();
} else {
if(((active_QMARK_ === false) || (error === true))){
return body_index_calculator.validation.validate_with_rules(new cljs.core.Keyword(null,"all","all",892129742),field);
} else {
if(((active_QMARK_ === true) && (error === false))){
return body_index_calculator.validation.validate_with_rules(new cljs.core.Keyword(null,"as-you-type","as-you-type",547472286),field);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"error-code","error-code",180497232),error_code], null);

}
}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("body-index-calculator.validation","validate","body-index-calculator.validation/validate",-889087889,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("body-index-calculator.validation","validation-error","body-index-calculator.validation/validation-error",-1010018267)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("body-index-calculator.validation","field","body-index-calculator.validation/field",757454825)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("body-index-calculator.validation","validation-error","body-index-calculator.validation/validation-error",-1010018267),new cljs.core.Keyword("body-index-calculator.validation","validation-error","body-index-calculator.validation/validation-error",-1010018267),null,null),new cljs.core.Keyword("body-index-calculator.validation","validation-error","body-index-calculator.validation/validation-error",-1010018267),null,null,null));
body_index_calculator.validation.get_argv = (function body_index_calculator$validation$get_argv(system,locale,name,utype){
var units = (function (){var G__50428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__50429 = body_index_calculator.helpers.loc(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),system,new cljs.core.Keyword(null,"long","long",-171452093),utype], null));
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$2(G__50428,G__50429) : body_index_calculator.i18n.tr.call(null,G__50428,G__50429));
})();
var conf_vals = cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(body_index_calculator.config.config,name));
var argv = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imperial","imperial",-1065360839),system))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (units,conf_vals){
return (function (p1__50427_SHARP_){
return body_index_calculator.helpers.convert_single_value(system,utype,p1__50427_SHARP_);
});})(units,conf_vals))
,conf_vals):cljs.core.vec(conf_vals));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(argv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [units], null));
});
body_index_calculator.validation.localize_error_code = (function body_index_calculator$validation$localize_error_code(system,locale,p__50430){
var map__50431 = p__50430;
var map__50431__$1 = (((((!((map__50431 == null))))?(((((map__50431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50431):map__50431);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var utype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword(null,"utype","utype",1191313154));
if(cljs.core.truth_(error_code)){
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),name,system], null),error_code));
var argv = body_index_calculator.validation.get_argv(system,locale,name,utype);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-text","error-text",2021893718),(function (){var G__50433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale], null);
var G__50434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_index_calculator.helpers.loc(path),"Incorrect input");
var G__50435 = argv;
return (body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$3 ? body_index_calculator.i18n.tr.cljs$core$IFn$_invoke$arity$3(G__50433,G__50434,G__50435) : body_index_calculator.i18n.tr.call(null,G__50433,G__50434,G__50435));
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-text","error-text",2021893718),null], null);
}
});
var opts50438_50533 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts50438_50533){
return (function (ret__47570__auto__,p__50439){
var vec__50440 = p__50439;
var ___47571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50440,(0),null);
var f__47572__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50440,(1),null);
var sym__47573__auto__ = (f__47572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47572__auto__.cljs$core$IFn$_invoke$arity$0() : f__47572__auto__.call(null));
var G__50443 = ret__47570__auto__;
if(cljs.core.truth_(sym__47573__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50443,sym__47573__auto__);
} else {
return G__50443;
}
});})(opts50438_50533))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts50438_50533){
return (function (p1__47569__47574__auto__){
var G__50445 = cljs.core.first(p1__47569__47574__auto__);
var fexpr__50444 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts50438_50533);
return (fexpr__50444.cljs$core$IFn$_invoke$arity$1 ? fexpr__50444.cljs$core$IFn$_invoke$arity$1(G__50445) : fexpr__50444.call(null,G__50445));
});})(opts50438_50533))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate","validate",1439230700,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts50438_50533){
return (function (){
return null;
});})(opts50438_50533))
], null)))));

//# sourceMappingURL=body_index_calculator.validation.js.map
