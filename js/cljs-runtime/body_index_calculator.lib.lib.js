goog.provide('body_index_calculator.lib.lib');
goog.require('cljs.core');
body_index_calculator.lib.lib.classify_value_by_table_ranges = (function body_index_calculator$lib$lib$classify_value_by_table_ranges(ranges,value){
var inside_QMARK_ = (function (p__49519){
var vec__49521 = p__49519;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(1),null);
return (((from < value)) && ((value <= to)));
});
var class$ = cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inside_QMARK_,ranges)));
return class$;
});

//# sourceMappingURL=body_index_calculator.lib.lib.js.map
