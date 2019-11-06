goog.provide('body_index_calculator.utils.lang');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('body_index_calculator.db');
goog.require('body_index_calculator.utils.jsonp');
goog.require('cljs.core.async');
body_index_calculator.utils.lang.lang_keyword = (function body_index_calculator$utils$lang$lang_keyword(lang_code){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(lang_code,(0),(2)));
});
body_index_calculator.utils.lang.get_nav_lang_BANG_ = (function body_index_calculator$utils$lang$get_nav_lang_BANG_(){
var nav = window.navigator;
var lang_nav_props = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["languages","language","browserLanguage","systemLanguage","userLanguage"], null);
var lang_code = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nav,lang_nav_props){
return (function (p1__95997_SHARP_){
return (nav[p1__95997_SHARP_]);
});})(nav,lang_nav_props))
,lang_nav_props)))));
if(cljs.core.truth_(lang_code)){
return body_index_calculator.utils.lang.lang_keyword(lang_code);
} else {
return null;
}
});
body_index_calculator.utils.lang.dispatch_supported_locale = (function body_index_calculator$utils$lang$dispatch_supported_locale(ev_name,lang_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("body-index-calculator.db","locale","body-index-calculator.db/locale",990635195),lang_code)){
var G__95998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev_name,lang_code], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__95998) : re_frame.core.dispatch.call(null,G__95998));
} else {
return null;
}
});
body_index_calculator.utils.lang.put_detect_lang_to_store_BANG_ = (function body_index_calculator$utils$lang$put_detect_lang_to_store_BANG_(ev_name){
var temp__5733__auto__ = body_index_calculator.utils.lang.get_nav_lang_BANG_();
if(cljs.core.truth_(temp__5733__auto__)){
var lang_code = temp__5733__auto__;
return body_index_calculator.utils.lang.dispatch_supported_locale(ev_name,lang_code);
} else {
var c__61781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__61781__auto__,temp__5733__auto__){
return (function (){
var f__61782__auto__ = (function (){var switch__61678__auto__ = ((function (c__61781__auto__,temp__5733__auto__){
return (function (state_96009){
var state_val_96010 = (state_96009[(1)]);
if((state_val_96010 === (1))){
var inst_95999 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_96000 = [(3000)];
var inst_96001 = cljs.core.PersistentHashMap.fromArrays(inst_95999,inst_96000);
var inst_96002 = body_index_calculator.utils.jsonp.jsonp("http://ajaxhttpheaders.appspot.com",inst_96001);
var state_96009__$1 = state_96009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96009__$1,(2),inst_96002);
} else {
if((state_val_96010 === (2))){
var inst_96004 = (state_96009[(2)]);
var inst_96005 = new cljs.core.Keyword(null,"Accept-Language","Accept-Language",62414419).cljs$core$IFn$_invoke$arity$1(inst_96004);
var inst_96006 = body_index_calculator.utils.lang.lang_keyword(inst_96005);
var inst_96007 = body_index_calculator.utils.lang.dispatch_supported_locale(ev_name,inst_96006);
var state_96009__$1 = state_96009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96009__$1,inst_96007);
} else {
return null;
}
}
});})(c__61781__auto__,temp__5733__auto__))
;
return ((function (switch__61678__auto__,c__61781__auto__,temp__5733__auto__){
return (function() {
var body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__ = null;
var body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____0 = (function (){
var statearr_96011 = [null,null,null,null,null,null,null];
(statearr_96011[(0)] = body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__);

(statearr_96011[(1)] = (1));

return statearr_96011;
});
var body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____1 = (function (state_96009){
while(true){
var ret_value__61680__auto__ = (function (){try{while(true){
var result__61681__auto__ = switch__61678__auto__(state_96009);
if(cljs.core.keyword_identical_QMARK_(result__61681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61681__auto__;
}
break;
}
}catch (e96012){if((e96012 instanceof Object)){
var ex__61682__auto__ = e96012;
var statearr_96013_96015 = state_96009;
(statearr_96013_96015[(5)] = ex__61682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_96009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e96012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96016 = state_96009;
state_96009 = G__96016;
continue;
} else {
return ret_value__61680__auto__;
}
break;
}
});
body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__ = function(state_96009){
switch(arguments.length){
case 0:
return body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____0.call(this);
case 1:
return body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____1.call(this,state_96009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$0 = body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____0;
body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__.cljs$core$IFn$_invoke$arity$1 = body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto____1;
return body_index_calculator$utils$lang$put_detect_lang_to_store_BANG__$_state_machine__61679__auto__;
})()
;})(switch__61678__auto__,c__61781__auto__,temp__5733__auto__))
})();
var state__61783__auto__ = (function (){var statearr_96014 = (f__61782__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61782__auto__.cljs$core$IFn$_invoke$arity$0() : f__61782__auto__.call(null));
(statearr_96014[(6)] = c__61781__auto__);

return statearr_96014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61783__auto__);
});})(c__61781__auto__,temp__5733__auto__))
);

return c__61781__auto__;
}
});
body_index_calculator.utils.lang.write_html_lang_attr_BANG_ = (function body_index_calculator$utils$lang$write_html_lang_attr_BANG_(locale){
var html = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByTagName("html")));
return html.setAttribute("lang",cljs.core.name(locale));
});

//# sourceMappingURL=body_index_calculator.utils.lang.js.map
