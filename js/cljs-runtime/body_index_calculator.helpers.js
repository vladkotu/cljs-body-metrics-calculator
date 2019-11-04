goog.provide('body_index_calculator.helpers');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('reagent.core');
goog.require('clojure.string');
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
/**
 * simplified js->clj for JSON data, :key-fn default to keyword
 */
body_index_calculator.helpers.to_clj = (function body_index_calculator$helpers$to_clj(var_args){
var G__47660 = arguments.length;
switch (G__47660) {
case 1:
return body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$1 = (function (x){
return body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
});

body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
if((x == null)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.boolean_QMARK_(x)){
return x;
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__47650_SHARP_){
return body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2(p1__47650_SHARP_,opts);
})),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(x));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var value = goog.object.get(x,key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.keyword);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(function (){var G__47700 = body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2(key,opts);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__47700) : key_fn.call(null,G__47700));
})(),body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2(value,opts));
}),cljs.core.PersistentArrayMap.EMPTY,goog.object.getKeys(x));

}
}
}
}
}
});

body_index_calculator.helpers.to_clj.cljs$lang$maxFixedArity = 2;

body_index_calculator.helpers.read_str = (function body_index_calculator$helpers$read_str(str,opts){
return body_index_calculator.helpers.to_clj.cljs$core$IFn$_invoke$arity$2(JSON.parse(str),opts);
});
body_index_calculator.helpers.write_str = (function body_index_calculator$helpers$write_str(obj){
return JSON.stringify(cljs.core.clj__GT_js(obj));
});
/**
 *  With-styles wraps `@material-ui.styles/withStyles` HoC
 *   so that it is easier and convenient to use for reagent components.
 *   API differences:
 *   'withStyles(styles)(HoC);'
 *   '(with-styles styles hoc)'
 *   `styles` should be cljs object with proper JSS rules in or function if you want to operate with `theme` object
 *   `body-comp` reagent component
 *   Usage example:
 *   `[:div
 *  [(with-styles
 *    {:content
 *    {:background
 *      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}
 *    [:button "This is button"])]] `
 */
body_index_calculator.helpers.with_styles = (function body_index_calculator$helpers$with_styles(styles,body_comp){
var hoc = (function (){var G__47712 = ((cljs.core.fn_QMARK_(styles))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,(function (theme){
var G__47718 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__47718) : styles.call(null,G__47718));
})):cljs.core.clj__GT_js(styles));
return module$node_modules$$material_ui$core$styles$index.withStyles(G__47712);
})();
var js__GT_clj_wrapper = ((function (hoc){
return (function (p__47722){
var map__47727 = p__47722;
var map__47727__$1 = (((((!((map__47727 == null))))?(((((map__47727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47727):map__47727);
var props = map__47727__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_comp,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"children","children",-940561982)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),children], null);
});})(hoc))
;
return reagent.core.adapt_react_class((function (){var G__47743 = reagent.core.reactify_component(js__GT_clj_wrapper);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__47743) : hoc.call(null,G__47743));
})());
});
body_index_calculator.helpers.with_styles_react = (function body_index_calculator$helpers$with_styles_react(styles,react_comp){
var hoc = (function (){var G__47746 = cljs.core.clj__GT_js(styles);
return module$node_modules$$material_ui$core$styles$index.withStyles(G__47746);
})();
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(react_comp) : hoc.call(null,react_comp));
});
body_index_calculator.helpers.evalue = (function body_index_calculator$helpers$evalue(ev){
return ev.target.value;
});
body_index_calculator.helpers.str__GT_num = (function body_index_calculator$helpers$str__GT_num(v){
return parseFloat(v,(10));
});
body_index_calculator.helpers.as_float = (function body_index_calculator$helpers$as_float(var_args){
var G__47751 = arguments.length;
switch (G__47751) {
case 1:
return body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$1 = (function (n){
return body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$2(n,(2));
});

body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$2 = (function (n,m){
if(typeof n === 'number'){
return parseFloat(n.toFixed(m));
} else {
return null;
}
});

body_index_calculator.helpers.as_float.cljs$lang$maxFixedArity = 2;

body_index_calculator.helpers.to_fixed = new cljs.core.Var(function(){return body_index_calculator.helpers.as_float;},new cljs.core.Symbol("body-index-calculator.helpers","as-float","body-index-calculator.helpers/as-float",917998455,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"body-index-calculator.helpers","body-index-calculator.helpers",-2027615665,null),new cljs.core.Symbol(null,"as-float","as-float",-138944074,null),"body_index_calculator/helpers.cljs",15,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,85,85,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),null,(cljs.core.truth_(body_index_calculator.helpers.as_float)?body_index_calculator.helpers.as_float.cljs$lang$test:null)]));
body_index_calculator.helpers.as_int = (function body_index_calculator$helpers$as_int(n){
if(typeof n === 'number'){
return Math.round(n);
} else {
return null;
}
});
body_index_calculator.helpers.react_key = (function body_index_calculator$helpers$react_key(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48008 = arguments.length;
var i__4731__auto___48009 = (0);
while(true){
if((i__4731__auto___48009 < len__4730__auto___48008)){
args__4736__auto__.push((arguments[i__4731__auto___48009]));

var G__48010 = (i__4731__auto___48009 + (1));
i__4731__auto___48009 = G__48010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
var G__47788 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,ss)));
var fexpr__47787 = ((function (G__47788){
return (function (p1__47765_SHARP_){
return clojure.string.replace(p1__47765_SHARP_,/\s+/,"-");
});})(G__47788))
;
return fexpr__47787(G__47788);
});

body_index_calculator.helpers.react_key.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
body_index_calculator.helpers.react_key.cljs$lang$applyTo = (function (seq47768){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47768));
});

body_index_calculator.helpers.lb__GT_kg = (function body_index_calculator$helpers$lb__GT_kg(m){
var G__47794 = (m / 0.45359237);
return Math.round(G__47794);
});
body_index_calculator.helpers.kg__GT_lb = (function body_index_calculator$helpers$kg__GT_lb(m){
var G__47797 = (m * 0.45359237);
return Math.round(G__47797);
});
body_index_calculator.helpers.cm__GT_ft_in = (function body_index_calculator$helpers$cm__GT_ft_in(sm){
var in$ = (sm / 2.54);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(in$,(12)),(function (){var G__47801 = cljs.core.rem(in$,(12));
return (body_index_calculator.helpers.to_fixed.cljs$core$IFn$_invoke$arity$1 ? body_index_calculator.helpers.to_fixed.cljs$core$IFn$_invoke$arity$1(G__47801) : body_index_calculator.helpers.to_fixed.call(null,G__47801));
})()], null);
});
body_index_calculator.helpers.ft_in__GT_sm = (function body_index_calculator$helpers$ft_in__GT_sm(len){
var G__47804 = ((cljs.core.first(len) * 30.48) + (cljs.core.last(len) * 2.54));
return Math.round(G__47804);
});

/**
 * @interface
 */
body_index_calculator.helpers.FormValueRCast = function(){};

body_index_calculator.helpers.rcast = (function body_index_calculator$helpers$rcast(this$){
if((((!((this$ == null)))) && ((!((this$.body_index_calculator$helpers$FormValueRCast$rcast$arity$1 == null)))))){
return this$.body_index_calculator$helpers$FormValueRCast$rcast$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (body_index_calculator.helpers.rcast[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (body_index_calculator.helpers.rcast["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("FormValueRCast.rcast",this$);
}
}
}
});

goog.object.set(body_index_calculator.helpers.FormValueRCast,"string",true);

var G__47839_48027 = body_index_calculator.helpers.rcast;
var G__47840_48028 = "string";
var G__47841_48029 = ((function (G__47839_48027,G__47840_48028){
return (function (this$){
if(cljs.core.empty_QMARK_(this$)){
return (0);
} else {
return parseFloat(this$,(10));
}
});})(G__47839_48027,G__47840_48028))
;
goog.object.set(G__47839_48027,G__47840_48028,G__47841_48029);

goog.object.set(body_index_calculator.helpers.FormValueRCast,"number",true);

var G__47849_48031 = body_index_calculator.helpers.rcast;
var G__47850_48032 = "number";
var G__47851_48033 = ((function (G__47849_48031,G__47850_48032){
return (function (this$){
if((this$ === (0))){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}
});})(G__47849_48031,G__47850_48032))
;
goog.object.set(G__47849_48031,G__47850_48032,G__47851_48033);

cljs.core.PersistentVector.prototype.body_index_calculator$helpers$FormValueRCast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.body_index_calculator$helpers$FormValueRCast$rcast$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(body_index_calculator.helpers.rcast,this$__$1);
});

goog.object.set(body_index_calculator.helpers.FormValueRCast,"null",true);

var G__47865_48037 = body_index_calculator.helpers.rcast;
var G__47866_48038 = "null";
var G__47867_48039 = ((function (G__47865_48037,G__47866_48038){
return (function (this$){
return this$;
});})(G__47865_48037,G__47866_48038))
;
goog.object.set(G__47865_48037,G__47866_48038,G__47867_48039);

cljs.core.Keyword.prototype.body_index_calculator$helpers$FormValueRCast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.body_index_calculator$helpers$FormValueRCast$rcast$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
body_index_calculator.helpers.rcast_value_with = (function body_index_calculator$helpers$rcast_value_with(with$,this$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__47875_SHARP_){
return body_index_calculator.helpers.rcast((function (){var G__47880 = body_index_calculator.helpers.rcast(p1__47875_SHARP_);
return (with$.cljs$core$IFn$_invoke$arity$1 ? with$.cljs$core$IFn$_invoke$arity$1(G__47880) : with$.call(null,G__47880));
})());
}));
});
body_index_calculator.helpers.convert_field_value = (function body_index_calculator$helpers$convert_field_value(system,field){
var G__47885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [system,new cljs.core.Keyword(null,"utype","utype",1191313154).cljs$core$IFn$_invoke$arity$1(field)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"len","len",1423657078)], null),G__47885)){
return body_index_calculator.helpers.rcast_value_with(body_index_calculator.helpers.ft_in__GT_sm,field);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"len","len",1423657078)], null),G__47885)){
return body_index_calculator.helpers.rcast_value_with(body_index_calculator.helpers.cm__GT_ft_in,field);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"mass","mass",-2138950046)], null),G__47885)){
return body_index_calculator.helpers.rcast_value_with(body_index_calculator.helpers.kg__GT_lb,field);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"mass","mass",-2138950046)], null),G__47885)){
return body_index_calculator.helpers.rcast_value_with(body_index_calculator.helpers.lb__GT_kg,field);
} else {
return cljs.core.identity(field);

}
}
}
}
});
body_index_calculator.helpers.convert_single_value = (function body_index_calculator$helpers$convert_single_value(system,utype,value){
var G__47896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [system,utype], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"len","len",1423657078)], null),G__47896)){
return body_index_calculator.helpers.rcast(body_index_calculator.helpers.ft_in__GT_sm(body_index_calculator.helpers.rcast(value)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"len","len",1423657078)], null),G__47896)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__47896){
return (function (p1__47892_SHARP_){
if(cljs.core.empty_QMARK_(p1__47892_SHARP_)){
return "0";
} else {
return p1__47892_SHARP_;
}
});})(G__47896))
,body_index_calculator.helpers.rcast(body_index_calculator.helpers.cm__GT_ft_in(body_index_calculator.helpers.rcast(value))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"mass","mass",-2138950046)], null),G__47896)){
return body_index_calculator.helpers.rcast(body_index_calculator.helpers.kg__GT_lb(body_index_calculator.helpers.rcast(value)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"mass","mass",-2138950046)], null),G__47896)){
return body_index_calculator.helpers.rcast(body_index_calculator.helpers.lb__GT_kg(body_index_calculator.helpers.rcast(value)));
} else {
return value;

}
}
}
}
});
body_index_calculator.helpers.convert_form_values = (function body_index_calculator$helpers$convert_form_values(system,form){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47903){
var vec__47904 = p__47903;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,body_index_calculator.helpers.convert_field_value(system,field)], null);
}),form));
});
body_index_calculator.helpers.form__GT_person = (function body_index_calculator$helpers$form__GT_person(form){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47912){
var vec__47913 = p__47912;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913,(0),null);
var map__47916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913,(1),null);
var map__47916__$1 = (((((!((map__47916 == null))))?(((((map__47916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47916):map__47916);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,body_index_calculator.helpers.rcast(value)]);
}),form));
});
body_index_calculator.helpers.namestr = (function body_index_calculator$helpers$namestr(k){
return cljs.core.name(k);
});
body_index_calculator.helpers.loc = (function body_index_calculator$helpers$loc(path){
var path__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (agg,val){
if(cljs.core.qualified_keyword_QMARK_(val)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(agg,body_index_calculator.helpers.namestr(cljs.core.namespace(val)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body_index_calculator.helpers.namestr(cljs.core.name(val))], 0));
} else {
if((val instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(agg,body_index_calculator.helpers.namestr(val));
} else {
if(typeof val === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(agg,val);
} else {
if((val == null)){
return agg;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("keywords of strings allowed only in `loc` function",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}),cljs.core.PersistentVector.EMPTY,path);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(path__$1)),cljs.core.last(path__$1))], null);
});

//# sourceMappingURL=body_index_calculator.helpers.js.map
