goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$unit_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.length_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$length_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.angle_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$angle_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.time_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$time_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.frequency_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$frequency_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.resolution_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$resolution_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.convertable_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.convert = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$convert(p__47077,right){
var map__47078 = p__47077;
var map__47078__$1 = (((((!((map__47078 == null))))?(((((map__47078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47078):map__47078);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47078__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47078__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.name(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.read_unit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$read_unit(s){
var temp__5735__auto__ = cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__47088 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47088,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47088,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47088,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_predicate(unit){
return (function (x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.unit_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.convert(x,unit);
}
} else {
var ex_message = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type.getName(),cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__47098 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__47098__$1 = (((((!((map__47098 == null))))?(((((map__47098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47098):map__47098);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47098__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__47099 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__47099__$1 = (((((!((map__47099 == null))))?(((((map__47099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47099):map__47099);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47099__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__47105 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47105) : u.call(null,G__47105));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__47202__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__47202 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__47203__i = 0, G__47203__a = new Array(arguments.length -  2);
while (G__47203__i < G__47203__a.length) {G__47203__a[G__47203__i] = arguments[G__47203__i + 2]; ++G__47203__i;}
  more = new cljs.core.IndexedSeq(G__47203__a,0,null);
} 
return G__47202__delegate.call(this,x,y,more);};
G__47202.cljs$lang$maxFixedArity = 2;
G__47202.cljs$lang$applyTo = (function (arglist__47204){
var x = cljs.core.first(arglist__47204);
arglist__47204 = cljs.core.next(arglist__47204);
var y = cljs.core.first(arglist__47204);
var more = cljs.core.rest(arglist__47204);
return G__47202__delegate(x,y,more);
});
G__47202.cljs$core$IFn$_invoke$arity$variadic = G__47202__delegate;
return G__47202;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__47207 = null;
if (arguments.length > 2) {
var G__47208__i = 0, G__47208__a = new Array(arguments.length -  2);
while (G__47208__i < G__47208__a.length) {G__47208__a[G__47208__i] = arguments[G__47208__i + 2]; ++G__47208__i;}
G__47207 = new cljs.core.IndexedSeq(G__47208__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__47207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__47114 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47114) : u.call(null,G__47114));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__47115 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__47115__$1 = (((((!((map__47115 == null))))?(((((map__47115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47115):map__47115);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__47116 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__47116__$1 = (((((!((map__47116 == null))))?(((((map__47116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47116):map__47116);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47116__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__47121 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47121) : u.call(null,G__47121));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__47218__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__47218 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__47219__i = 0, G__47219__a = new Array(arguments.length -  2);
while (G__47219__i < G__47219__a.length) {G__47219__a[G__47219__i] = arguments[G__47219__i + 2]; ++G__47219__i;}
  more = new cljs.core.IndexedSeq(G__47219__a,0,null);
} 
return G__47218__delegate.call(this,x,y,more);};
G__47218.cljs$lang$maxFixedArity = 2;
G__47218.cljs$lang$applyTo = (function (arglist__47220){
var x = cljs.core.first(arglist__47220);
arglist__47220 = cljs.core.next(arglist__47220);
var y = cljs.core.first(arglist__47220);
var more = cljs.core.rest(arglist__47220);
return G__47218__delegate(x,y,more);
});
G__47218.cljs$core$IFn$_invoke$arity$variadic = G__47218__delegate;
return G__47218;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__47222 = null;
if (arguments.length > 2) {
var G__47223__i = 0, G__47223__a = new Array(arguments.length -  2);
while (G__47223__i < G__47223__a.length) {G__47223__a[G__47223__i] = arguments[G__47223__i + 2]; ++G__47223__i;}
G__47222 = new cljs.core.IndexedSeq(G__47223__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__47222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__47127 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__47127__$1 = (((((!((map__47127 == null))))?(((((map__47127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47127):map__47127);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__47128 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__47128__$1 = (((((!((map__47128 == null))))?(((((map__47128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47128):map__47128);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47128__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__47132 = (m1 * m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47132) : u.call(null,G__47132));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__47229__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__47229 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__47230__i = 0, G__47230__a = new Array(arguments.length -  2);
while (G__47230__i < G__47230__a.length) {G__47230__a[G__47230__i] = arguments[G__47230__i + 2]; ++G__47230__i;}
  more = new cljs.core.IndexedSeq(G__47230__a,0,null);
} 
return G__47229__delegate.call(this,x,y,more);};
G__47229.cljs$lang$maxFixedArity = 2;
G__47229.cljs$lang$applyTo = (function (arglist__47231){
var x = cljs.core.first(arglist__47231);
arglist__47231 = cljs.core.next(arglist__47231);
var y = cljs.core.first(arglist__47231);
var more = cljs.core.rest(arglist__47231);
return G__47229__delegate(x,y,more);
});
G__47229.cljs$core$IFn$_invoke$arity$variadic = G__47229__delegate;
return G__47229;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__47232 = null;
if (arguments.length > 2) {
var G__47233__i = 0, G__47233__a = new Array(arguments.length -  2);
while (G__47233__i < G__47233__a.length) {G__47233__a[G__47233__i] = arguments[G__47233__i + 2]; ++G__47233__i;}
G__47232 = new cljs.core.IndexedSeq(G__47233__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__47232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__47136 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47136) : u.call(null,G__47136));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__47137 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__47137__$1 = (((((!((map__47137 == null))))?(((((map__47137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47137):map__47137);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47137__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__47138 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__47138__$1 = (((((!((map__47138 == null))))?(((((map__47138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47138):map__47138);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47138__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__47142 = (m1 / m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__47142) : u.call(null,G__47142));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__47234__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__47234 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__47238__i = 0, G__47238__a = new Array(arguments.length -  2);
while (G__47238__i < G__47238__a.length) {G__47238__a[G__47238__i] = arguments[G__47238__i + 2]; ++G__47238__i;}
  more = new cljs.core.IndexedSeq(G__47238__a,0,null);
} 
return G__47234__delegate.call(this,x,y,more);};
G__47234.cljs$lang$maxFixedArity = 2;
G__47234.cljs$lang$applyTo = (function (arglist__47240){
var x = cljs.core.first(arglist__47240);
arglist__47240 = cljs.core.next(arglist__47240);
var y = cljs.core.first(arglist__47240);
var more = cljs.core.rest(arglist__47240);
return G__47234__delegate(x,y,more);
});
G__47234.cljs$core$IFn$_invoke$arity$variadic = G__47234__delegate;
return G__47234;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__47241 = null;
if (arguments.length > 2) {
var G__47242__i = 0, G__47242__a = new Array(arguments.length -  2);
while (G__47242__i < G__47242__a.length) {G__47242__a[G__47242__i] = arguments[G__47242__i + 2]; ++G__47242__i;}
G__47241 = new cljs.core.IndexedSeq(G__47242__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__47241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.cm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"cm","cm",540591536));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.mm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"mm","mm",-1652850560));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in$ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.in_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"in","in",-1531184865));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"px","px",281329899));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pt_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pt","pt",556460867));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.pc_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pc","pc",512913453));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"%","%",1704198600));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.em_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"em","em",707813035));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ex_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ex","ex",-1413771341));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ch_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ch","ch",-554717905));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rem_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rem","rem",-976484757));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vw_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vw","vw",1941049135));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vh_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vh","vh",79552846));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmin_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmin","vmin",446546816));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.vmax_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.deg_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"deg","deg",-681556081));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.grad_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"grad","grad",1125187229));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.rad_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rad","rad",-833983012));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.turn_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"turn","turn",75759344));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.s_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"s","s",1705939918));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.ms_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ms","ms",-1152709733));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.Hz_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.kHz_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"kHz","kHz",240398466));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpi_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpi","dpi",-986162832));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dpcm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.dppx_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.js.map
