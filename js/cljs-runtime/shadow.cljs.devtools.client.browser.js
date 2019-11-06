goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67989 = arguments.length;
var i__4731__auto___67991 = (0);
while(true){
if((i__4731__auto___67991 < len__4730__auto___67989)){
args__4736__auto__.push((arguments[i__4731__auto___67991]));

var G__67992 = (i__4731__auto___67991 + (1));
i__4731__auto___67991 = G__67992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67715){
var G__67716 = cljs.core.first(seq67715);
var seq67715__$1 = cljs.core.next(seq67715);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67716,seq67715__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__67720){
var map__67721 = p__67720;
var map__67721__$1 = (((((!((map__67721 == null))))?(((((map__67721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67721):map__67721);
var src = map__67721__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67721__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67721__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67725 = cljs.core.seq(sources);
var chunk__67726 = null;
var count__67727 = (0);
var i__67728 = (0);
while(true){
if((i__67728 < count__67727)){
var map__67742 = chunk__67726.cljs$core$IIndexed$_nth$arity$2(null,i__67728);
var map__67742__$1 = (((((!((map__67742 == null))))?(((((map__67742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67742):map__67742);
var src = map__67742__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67744){var e_67997 = e67744;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67997);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67997.message)].join('')));
}

var G__67999 = seq__67725;
var G__68000 = chunk__67726;
var G__68001 = count__67727;
var G__68002 = (i__67728 + (1));
seq__67725 = G__67999;
chunk__67726 = G__68000;
count__67727 = G__68001;
i__67728 = G__68002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67725);
if(temp__5735__auto__){
var seq__67725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67725__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67725__$1);
var G__68003 = cljs.core.chunk_rest(seq__67725__$1);
var G__68004 = c__4550__auto__;
var G__68005 = cljs.core.count(c__4550__auto__);
var G__68006 = (0);
seq__67725 = G__68003;
chunk__67726 = G__68004;
count__67727 = G__68005;
i__67728 = G__68006;
continue;
} else {
var map__67748 = cljs.core.first(seq__67725__$1);
var map__67748__$1 = (((((!((map__67748 == null))))?(((((map__67748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67748):map__67748);
var src = map__67748__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67748__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67748__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67748__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67748__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67761){var e_68007 = e67761;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68007);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68007.message)].join('')));
}

var G__68008 = cljs.core.next(seq__67725__$1);
var G__68009 = null;
var G__68010 = (0);
var G__68011 = (0);
seq__67725 = G__68008;
chunk__67726 = G__68009;
count__67727 = G__68010;
i__67728 = G__68011;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67764 = cljs.core.seq(js_requires);
var chunk__67765 = null;
var count__67766 = (0);
var i__67767 = (0);
while(true){
if((i__67767 < count__67766)){
var js_ns = chunk__67765.cljs$core$IIndexed$_nth$arity$2(null,i__67767);
var require_str_68012 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68012);


var G__68013 = seq__67764;
var G__68014 = chunk__67765;
var G__68015 = count__67766;
var G__68016 = (i__67767 + (1));
seq__67764 = G__68013;
chunk__67765 = G__68014;
count__67766 = G__68015;
i__67767 = G__68016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67764);
if(temp__5735__auto__){
var seq__67764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67764__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67764__$1);
var G__68017 = cljs.core.chunk_rest(seq__67764__$1);
var G__68018 = c__4550__auto__;
var G__68019 = cljs.core.count(c__4550__auto__);
var G__68020 = (0);
seq__67764 = G__68017;
chunk__67765 = G__68018;
count__67766 = G__68019;
i__67767 = G__68020;
continue;
} else {
var js_ns = cljs.core.first(seq__67764__$1);
var require_str_68021 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68021);


var G__68022 = cljs.core.next(seq__67764__$1);
var G__68023 = null;
var G__68024 = (0);
var G__68025 = (0);
seq__67764 = G__68022;
chunk__67765 = G__68023;
count__67766 = G__68024;
i__67767 = G__68025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__67768 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__67768) : callback.call(null,G__67768));
} else {
var G__67769 = shadow.cljs.devtools.client.env.files_url();
var G__67770 = ((function (G__67769){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__67769))
;
var G__67771 = "POST";
var G__67772 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__67773 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67769,G__67770,G__67771,G__67772,G__67773);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__67775){
var map__67776 = p__67775;
var map__67776__$1 = (((((!((map__67776 == null))))?(((((map__67776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67776):map__67776);
var msg = map__67776__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67776__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67776__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__67778 = info;
var map__67778__$1 = (((((!((map__67778 == null))))?(((((map__67778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67778):map__67778);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67778__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67778__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67780(s__67781){
return (new cljs.core.LazySeq(null,((function (map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info){
return (function (){
var s__67781__$1 = s__67781;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67781__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__67787 = cljs.core.first(xs__6292__auto__);
var map__67787__$1 = (((((!((map__67787 == null))))?(((((map__67787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67787):map__67787);
var src = map__67787__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67787__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__67781__$1,map__67787,map__67787__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67780_$_iter__67782(s__67783){
return (new cljs.core.LazySeq(null,((function (s__67781__$1,map__67787,map__67787__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info){
return (function (){
var s__67783__$1 = s__67783;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67783__$1);
if(temp__5735__auto____$1){
var s__67783__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67783__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__67783__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__67785 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__67784 = (0);
while(true){
if((i__67784 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__67784);
cljs.core.chunk_append(b__67785,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68037 = (i__67784 + (1));
i__67784 = G__68037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67785),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67780_$_iter__67782(cljs.core.chunk_rest(s__67783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67785),null);
}
} else {
var warning = cljs.core.first(s__67783__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67780_$_iter__67782(cljs.core.rest(s__67783__$2)));
}
} else {
return null;
}
break;
}
});})(s__67781__$1,map__67787,map__67787__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info))
,null,null));
});})(s__67781__$1,map__67787,map__67787__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67780(cljs.core.rest(s__67781__$1)));
} else {
var G__68038 = cljs.core.rest(s__67781__$1);
s__67781__$1 = G__68038;
continue;
}
} else {
var G__68039 = cljs.core.rest(s__67781__$1);
s__67781__$1 = G__68039;
continue;
}
} else {
return null;
}
break;
}
});})(map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info))
,null,null));
});})(map__67778,map__67778__$1,sources,compiled,map__67776,map__67776__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__67792_68040 = cljs.core.seq(warnings);
var chunk__67793_68041 = null;
var count__67794_68042 = (0);
var i__67795_68043 = (0);
while(true){
if((i__67795_68043 < count__67794_68042)){
var map__67801_68045 = chunk__67793_68041.cljs$core$IIndexed$_nth$arity$2(null,i__67795_68043);
var map__67801_68046__$1 = (((((!((map__67801_68045 == null))))?(((((map__67801_68045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67801_68045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67801_68045):map__67801_68045);
var w_68047 = map__67801_68046__$1;
var msg_68048__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801_68046__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801_68046__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801_68046__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801_68046__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68051)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68049),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68050),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68048__$1)].join(''));


var G__68058 = seq__67792_68040;
var G__68059 = chunk__67793_68041;
var G__68060 = count__67794_68042;
var G__68061 = (i__67795_68043 + (1));
seq__67792_68040 = G__68058;
chunk__67793_68041 = G__68059;
count__67794_68042 = G__68060;
i__67795_68043 = G__68061;
continue;
} else {
var temp__5735__auto___68062 = cljs.core.seq(seq__67792_68040);
if(temp__5735__auto___68062){
var seq__67792_68063__$1 = temp__5735__auto___68062;
if(cljs.core.chunked_seq_QMARK_(seq__67792_68063__$1)){
var c__4550__auto___68064 = cljs.core.chunk_first(seq__67792_68063__$1);
var G__68065 = cljs.core.chunk_rest(seq__67792_68063__$1);
var G__68066 = c__4550__auto___68064;
var G__68067 = cljs.core.count(c__4550__auto___68064);
var G__68068 = (0);
seq__67792_68040 = G__68065;
chunk__67793_68041 = G__68066;
count__67794_68042 = G__68067;
i__67795_68043 = G__68068;
continue;
} else {
var map__67805_68073 = cljs.core.first(seq__67792_68063__$1);
var map__67805_68074__$1 = (((((!((map__67805_68073 == null))))?(((((map__67805_68073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67805_68073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67805_68073):map__67805_68073);
var w_68075 = map__67805_68074__$1;
var msg_68076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67805_68074__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67805_68074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67805_68074__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67805_68074__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68079)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68077),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68078),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68076__$1)].join(''));


var G__68081 = cljs.core.next(seq__67792_68063__$1);
var G__68082 = null;
var G__68083 = (0);
var G__68084 = (0);
seq__67792_68040 = G__68081;
chunk__67793_68041 = G__68082;
count__67794_68042 = G__68083;
i__67795_68043 = G__68084;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info){
return (function (p__67808){
var map__67809 = p__67808;
var map__67809__$1 = (((((!((map__67809 == null))))?(((((map__67809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67809):map__67809);
var src = map__67809__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67809__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67809__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info){
return (function (p__67812){
var map__67813 = p__67812;
var map__67813__$1 = (((((!((map__67813 == null))))?(((((map__67813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67813):map__67813);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67813__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info){
return (function (p__67816){
var map__67817 = p__67816;
var map__67817__$1 = (((((!((map__67817 == null))))?(((((map__67817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67817):map__67817);
var rc = map__67817__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67817__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info){
return (function (p1__67774_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67774_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__67778,map__67778__$1,sources,compiled,warnings,map__67776,map__67776__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__67825){
var map__67826 = p__67825;
var map__67826__$1 = (((((!((map__67826 == null))))?(((((map__67826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67826):map__67826);
var msg = map__67826__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67826__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67828 = cljs.core.seq(updates);
var chunk__67830 = null;
var count__67831 = (0);
var i__67832 = (0);
while(true){
if((i__67832 < count__67831)){
var path = chunk__67830.cljs$core$IIndexed$_nth$arity$2(null,i__67832);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67876_68095 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67879_68096 = null;
var count__67880_68097 = (0);
var i__67881_68098 = (0);
while(true){
if((i__67881_68098 < count__67880_68097)){
var node_68099 = chunk__67879_68096.cljs$core$IIndexed$_nth$arity$2(null,i__67881_68098);
var path_match_68100 = shadow.cljs.devtools.client.browser.match_paths(node_68099.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68100)){
var new_link_68101 = (function (){var G__67899 = node_68099.cloneNode(true);
G__67899.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68100),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67899;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68100], 0));

goog.dom.insertSiblingAfter(new_link_68101,node_68099);

goog.dom.removeNode(node_68099);


var G__68102 = seq__67876_68095;
var G__68103 = chunk__67879_68096;
var G__68104 = count__67880_68097;
var G__68105 = (i__67881_68098 + (1));
seq__67876_68095 = G__68102;
chunk__67879_68096 = G__68103;
count__67880_68097 = G__68104;
i__67881_68098 = G__68105;
continue;
} else {
var G__68106 = seq__67876_68095;
var G__68107 = chunk__67879_68096;
var G__68108 = count__67880_68097;
var G__68109 = (i__67881_68098 + (1));
seq__67876_68095 = G__68106;
chunk__67879_68096 = G__68107;
count__67880_68097 = G__68108;
i__67881_68098 = G__68109;
continue;
}
} else {
var temp__5735__auto___68110 = cljs.core.seq(seq__67876_68095);
if(temp__5735__auto___68110){
var seq__67876_68112__$1 = temp__5735__auto___68110;
if(cljs.core.chunked_seq_QMARK_(seq__67876_68112__$1)){
var c__4550__auto___68113 = cljs.core.chunk_first(seq__67876_68112__$1);
var G__68114 = cljs.core.chunk_rest(seq__67876_68112__$1);
var G__68115 = c__4550__auto___68113;
var G__68116 = cljs.core.count(c__4550__auto___68113);
var G__68117 = (0);
seq__67876_68095 = G__68114;
chunk__67879_68096 = G__68115;
count__67880_68097 = G__68116;
i__67881_68098 = G__68117;
continue;
} else {
var node_68118 = cljs.core.first(seq__67876_68112__$1);
var path_match_68119 = shadow.cljs.devtools.client.browser.match_paths(node_68118.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68119)){
var new_link_68120 = (function (){var G__67900 = node_68118.cloneNode(true);
G__67900.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68119),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67900;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68119], 0));

goog.dom.insertSiblingAfter(new_link_68120,node_68118);

goog.dom.removeNode(node_68118);


var G__68121 = cljs.core.next(seq__67876_68112__$1);
var G__68122 = null;
var G__68123 = (0);
var G__68124 = (0);
seq__67876_68095 = G__68121;
chunk__67879_68096 = G__68122;
count__67880_68097 = G__68123;
i__67881_68098 = G__68124;
continue;
} else {
var G__68125 = cljs.core.next(seq__67876_68112__$1);
var G__68126 = null;
var G__68127 = (0);
var G__68128 = (0);
seq__67876_68095 = G__68125;
chunk__67879_68096 = G__68126;
count__67880_68097 = G__68127;
i__67881_68098 = G__68128;
continue;
}
}
} else {
}
}
break;
}


var G__68129 = seq__67828;
var G__68130 = chunk__67830;
var G__68131 = count__67831;
var G__68132 = (i__67832 + (1));
seq__67828 = G__68129;
chunk__67830 = G__68130;
count__67831 = G__68131;
i__67832 = G__68132;
continue;
} else {
var G__68133 = seq__67828;
var G__68134 = chunk__67830;
var G__68135 = count__67831;
var G__68136 = (i__67832 + (1));
seq__67828 = G__68133;
chunk__67830 = G__68134;
count__67831 = G__68135;
i__67832 = G__68136;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67828);
if(temp__5735__auto__){
var seq__67828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67828__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67828__$1);
var G__68137 = cljs.core.chunk_rest(seq__67828__$1);
var G__68138 = c__4550__auto__;
var G__68139 = cljs.core.count(c__4550__auto__);
var G__68140 = (0);
seq__67828 = G__68137;
chunk__67830 = G__68138;
count__67831 = G__68139;
i__67832 = G__68140;
continue;
} else {
var path = cljs.core.first(seq__67828__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67901_68141 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67904_68142 = null;
var count__67905_68143 = (0);
var i__67906_68144 = (0);
while(true){
if((i__67906_68144 < count__67905_68143)){
var node_68145 = chunk__67904_68142.cljs$core$IIndexed$_nth$arity$2(null,i__67906_68144);
var path_match_68146 = shadow.cljs.devtools.client.browser.match_paths(node_68145.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68146)){
var new_link_68147 = (function (){var G__67913 = node_68145.cloneNode(true);
G__67913.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68146),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67913;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68146], 0));

goog.dom.insertSiblingAfter(new_link_68147,node_68145);

goog.dom.removeNode(node_68145);


var G__68149 = seq__67901_68141;
var G__68150 = chunk__67904_68142;
var G__68151 = count__67905_68143;
var G__68152 = (i__67906_68144 + (1));
seq__67901_68141 = G__68149;
chunk__67904_68142 = G__68150;
count__67905_68143 = G__68151;
i__67906_68144 = G__68152;
continue;
} else {
var G__68153 = seq__67901_68141;
var G__68154 = chunk__67904_68142;
var G__68155 = count__67905_68143;
var G__68156 = (i__67906_68144 + (1));
seq__67901_68141 = G__68153;
chunk__67904_68142 = G__68154;
count__67905_68143 = G__68155;
i__67906_68144 = G__68156;
continue;
}
} else {
var temp__5735__auto___68157__$1 = cljs.core.seq(seq__67901_68141);
if(temp__5735__auto___68157__$1){
var seq__67901_68158__$1 = temp__5735__auto___68157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67901_68158__$1)){
var c__4550__auto___68159 = cljs.core.chunk_first(seq__67901_68158__$1);
var G__68160 = cljs.core.chunk_rest(seq__67901_68158__$1);
var G__68161 = c__4550__auto___68159;
var G__68162 = cljs.core.count(c__4550__auto___68159);
var G__68163 = (0);
seq__67901_68141 = G__68160;
chunk__67904_68142 = G__68161;
count__67905_68143 = G__68162;
i__67906_68144 = G__68163;
continue;
} else {
var node_68164 = cljs.core.first(seq__67901_68158__$1);
var path_match_68165 = shadow.cljs.devtools.client.browser.match_paths(node_68164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68165)){
var new_link_68166 = (function (){var G__67915 = node_68164.cloneNode(true);
G__67915.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67915;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68165], 0));

goog.dom.insertSiblingAfter(new_link_68166,node_68164);

goog.dom.removeNode(node_68164);


var G__68167 = cljs.core.next(seq__67901_68158__$1);
var G__68168 = null;
var G__68169 = (0);
var G__68170 = (0);
seq__67901_68141 = G__68167;
chunk__67904_68142 = G__68168;
count__67905_68143 = G__68169;
i__67906_68144 = G__68170;
continue;
} else {
var G__68171 = cljs.core.next(seq__67901_68158__$1);
var G__68172 = null;
var G__68173 = (0);
var G__68174 = (0);
seq__67901_68141 = G__68171;
chunk__67904_68142 = G__68172;
count__67905_68143 = G__68173;
i__67906_68144 = G__68174;
continue;
}
}
} else {
}
}
break;
}


var G__68175 = cljs.core.next(seq__67828__$1);
var G__68176 = null;
var G__68177 = (0);
var G__68178 = (0);
seq__67828 = G__68175;
chunk__67830 = G__68176;
count__67831 = G__68177;
i__67832 = G__68178;
continue;
} else {
var G__68179 = cljs.core.next(seq__67828__$1);
var G__68180 = null;
var G__68181 = (0);
var G__68182 = (0);
seq__67828 = G__68179;
chunk__67830 = G__68180;
count__67831 = G__68181;
i__67832 = G__68182;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__67922){
var map__67923 = p__67922;
var map__67923__$1 = (((((!((map__67923 == null))))?(((((map__67923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67923):map__67923);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67923__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__67923,map__67923__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__67923,map__67923__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__67929,done){
var map__67930 = p__67929;
var map__67930__$1 = (((((!((map__67930 == null))))?(((((map__67930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67930):map__67930);
var msg = map__67930__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67930__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67930__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67930__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__67930,map__67930__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__67936){
var map__67938 = p__67936;
var map__67938__$1 = (((((!((map__67938 == null))))?(((((map__67938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67938):map__67938);
var src = map__67938__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67938__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__67930,map__67930__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__67930,map__67930__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e67940){var e = e67940;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__67930,map__67930__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__67941,done){
var map__67942 = p__67941;
var map__67942__$1 = (((((!((map__67942 == null))))?(((((map__67942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67942):map__67942);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67942__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67942__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__67942,map__67942__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__67942,map__67942__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__67950){
var map__67952 = p__67950;
var map__67952__$1 = (((((!((map__67952 == null))))?(((((map__67952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67952):map__67952);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__67956,done){
var map__67957 = p__67956;
var map__67957__$1 = (((((!((map__67957 == null))))?(((((map__67957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67957):map__67957);
var msg = map__67957__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67957__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__67960_68193 = type;
var G__67960_68194__$1 = (((G__67960_68193 instanceof cljs.core.Keyword))?G__67960_68193.fqn:null);
switch (G__67960_68194__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__67967 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__67968 = ((function (G__67967){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__67967))
;
var G__67969 = "POST";
var G__67970 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__67971 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67967,G__67968,G__67969,G__67970,G__67971);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e67973){var e = e67973;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___68202 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___68202)){
var s_68203 = temp__5735__auto___68202;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_68203.onclose = ((function (s_68203,temp__5735__auto___68202){
return (function (e){
return null;
});})(s_68203,temp__5735__auto___68202))
;

s_68203.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
