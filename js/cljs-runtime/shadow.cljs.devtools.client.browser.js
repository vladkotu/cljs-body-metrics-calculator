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
var len__4730__auto___67498 = arguments.length;
var i__4731__auto___67499 = (0);
while(true){
if((i__4731__auto___67499 < len__4730__auto___67498)){
args__4736__auto__.push((arguments[i__4731__auto___67499]));

var G__67500 = (i__4731__auto___67499 + (1));
i__4731__auto___67499 = G__67500;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67232){
var G__67233 = cljs.core.first(seq67232);
var seq67232__$1 = cljs.core.next(seq67232);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67233,seq67232__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__67247){
var map__67248 = p__67247;
var map__67248__$1 = (((((!((map__67248 == null))))?(((((map__67248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67248):map__67248);
var src = map__67248__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67248__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67248__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__67253 = cljs.core.seq(sources);
var chunk__67254 = null;
var count__67255 = (0);
var i__67256 = (0);
while(true){
if((i__67256 < count__67255)){
var map__67264 = chunk__67254.cljs$core$IIndexed$_nth$arity$2(null,i__67256);
var map__67264__$1 = (((((!((map__67264 == null))))?(((((map__67264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67264):map__67264);
var src = map__67264__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67267){var e_67507 = e67267;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67507);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67507.message)].join('')));
}

var G__67508 = seq__67253;
var G__67509 = chunk__67254;
var G__67510 = count__67255;
var G__67511 = (i__67256 + (1));
seq__67253 = G__67508;
chunk__67254 = G__67509;
count__67255 = G__67510;
i__67256 = G__67511;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67253);
if(temp__5735__auto__){
var seq__67253__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67253__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67253__$1);
var G__67512 = cljs.core.chunk_rest(seq__67253__$1);
var G__67513 = c__4550__auto__;
var G__67514 = cljs.core.count(c__4550__auto__);
var G__67515 = (0);
seq__67253 = G__67512;
chunk__67254 = G__67513;
count__67255 = G__67514;
i__67256 = G__67515;
continue;
} else {
var map__67268 = cljs.core.first(seq__67253__$1);
var map__67268__$1 = (((((!((map__67268 == null))))?(((((map__67268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67268):map__67268);
var src = map__67268__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67268__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67268__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67268__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67268__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67271){var e_67522 = e67271;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67522);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67522.message)].join('')));
}

var G__67523 = cljs.core.next(seq__67253__$1);
var G__67524 = null;
var G__67525 = (0);
var G__67526 = (0);
seq__67253 = G__67523;
chunk__67254 = G__67524;
count__67255 = G__67525;
i__67256 = G__67526;
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
var seq__67273 = cljs.core.seq(js_requires);
var chunk__67274 = null;
var count__67275 = (0);
var i__67276 = (0);
while(true){
if((i__67276 < count__67275)){
var js_ns = chunk__67274.cljs$core$IIndexed$_nth$arity$2(null,i__67276);
var require_str_67530 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67530);


var G__67531 = seq__67273;
var G__67532 = chunk__67274;
var G__67533 = count__67275;
var G__67534 = (i__67276 + (1));
seq__67273 = G__67531;
chunk__67274 = G__67532;
count__67275 = G__67533;
i__67276 = G__67534;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67273);
if(temp__5735__auto__){
var seq__67273__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67273__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67273__$1);
var G__67535 = cljs.core.chunk_rest(seq__67273__$1);
var G__67536 = c__4550__auto__;
var G__67537 = cljs.core.count(c__4550__auto__);
var G__67538 = (0);
seq__67273 = G__67535;
chunk__67274 = G__67536;
count__67275 = G__67537;
i__67276 = G__67538;
continue;
} else {
var js_ns = cljs.core.first(seq__67273__$1);
var require_str_67539 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67539);


var G__67540 = cljs.core.next(seq__67273__$1);
var G__67541 = null;
var G__67542 = (0);
var G__67543 = (0);
seq__67273 = G__67540;
chunk__67274 = G__67541;
count__67275 = G__67542;
i__67276 = G__67543;
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
var G__67279 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__67279) : callback.call(null,G__67279));
} else {
var G__67280 = shadow.cljs.devtools.client.env.files_url();
var G__67281 = ((function (G__67280){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__67280))
;
var G__67282 = "POST";
var G__67283 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__67284 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67280,G__67281,G__67282,G__67283,G__67284);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__67288){
var map__67289 = p__67288;
var map__67289__$1 = (((((!((map__67289 == null))))?(((((map__67289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67289):map__67289);
var msg = map__67289__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67289__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67289__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__67291 = info;
var map__67291__$1 = (((((!((map__67291 == null))))?(((((map__67291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67291):map__67291);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67291__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67291__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67293(s__67294){
return (new cljs.core.LazySeq(null,((function (map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info){
return (function (){
var s__67294__$1 = s__67294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__67303 = cljs.core.first(xs__6292__auto__);
var map__67303__$1 = (((((!((map__67303 == null))))?(((((map__67303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67303):map__67303);
var src = map__67303__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67303__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__67294__$1,map__67303,map__67303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67293_$_iter__67295(s__67296){
return (new cljs.core.LazySeq(null,((function (s__67294__$1,map__67303,map__67303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info){
return (function (){
var s__67296__$1 = s__67296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67296__$1);
if(temp__5735__auto____$1){
var s__67296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67296__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__67296__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__67298 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__67297 = (0);
while(true){
if((i__67297 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__67297);
cljs.core.chunk_append(b__67298,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__67552 = (i__67297 + (1));
i__67297 = G__67552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67298),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67293_$_iter__67295(cljs.core.chunk_rest(s__67296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67298),null);
}
} else {
var warning = cljs.core.first(s__67296__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67293_$_iter__67295(cljs.core.rest(s__67296__$2)));
}
} else {
return null;
}
break;
}
});})(s__67294__$1,map__67303,map__67303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info))
,null,null));
});})(s__67294__$1,map__67303,map__67303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67293(cljs.core.rest(s__67294__$1)));
} else {
var G__67558 = cljs.core.rest(s__67294__$1);
s__67294__$1 = G__67558;
continue;
}
} else {
var G__67560 = cljs.core.rest(s__67294__$1);
s__67294__$1 = G__67560;
continue;
}
} else {
return null;
}
break;
}
});})(map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info))
,null,null));
});})(map__67291,map__67291__$1,sources,compiled,map__67289,map__67289__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__67310_67561 = cljs.core.seq(warnings);
var chunk__67311_67562 = null;
var count__67312_67563 = (0);
var i__67313_67564 = (0);
while(true){
if((i__67313_67564 < count__67312_67563)){
var map__67332_67565 = chunk__67311_67562.cljs$core$IIndexed$_nth$arity$2(null,i__67313_67564);
var map__67332_67566__$1 = (((((!((map__67332_67565 == null))))?(((((map__67332_67565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67332_67565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67332_67565):map__67332_67565);
var w_67567 = map__67332_67566__$1;
var msg_67568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332_67566__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332_67566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332_67566__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332_67566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67571)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67569),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67570),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67568__$1)].join(''));


var G__67572 = seq__67310_67561;
var G__67573 = chunk__67311_67562;
var G__67574 = count__67312_67563;
var G__67575 = (i__67313_67564 + (1));
seq__67310_67561 = G__67572;
chunk__67311_67562 = G__67573;
count__67312_67563 = G__67574;
i__67313_67564 = G__67575;
continue;
} else {
var temp__5735__auto___67576 = cljs.core.seq(seq__67310_67561);
if(temp__5735__auto___67576){
var seq__67310_67577__$1 = temp__5735__auto___67576;
if(cljs.core.chunked_seq_QMARK_(seq__67310_67577__$1)){
var c__4550__auto___67578 = cljs.core.chunk_first(seq__67310_67577__$1);
var G__67579 = cljs.core.chunk_rest(seq__67310_67577__$1);
var G__67580 = c__4550__auto___67578;
var G__67581 = cljs.core.count(c__4550__auto___67578);
var G__67582 = (0);
seq__67310_67561 = G__67579;
chunk__67311_67562 = G__67580;
count__67312_67563 = G__67581;
i__67313_67564 = G__67582;
continue;
} else {
var map__67334_67583 = cljs.core.first(seq__67310_67577__$1);
var map__67334_67584__$1 = (((((!((map__67334_67583 == null))))?(((((map__67334_67583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67334_67583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67334_67583):map__67334_67583);
var w_67585 = map__67334_67584__$1;
var msg_67586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67334_67584__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67334_67584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67334_67584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67334_67584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67589)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67587),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67588),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67586__$1)].join(''));


var G__67590 = cljs.core.next(seq__67310_67577__$1);
var G__67591 = null;
var G__67592 = (0);
var G__67593 = (0);
seq__67310_67561 = G__67590;
chunk__67311_67562 = G__67591;
count__67312_67563 = G__67592;
i__67313_67564 = G__67593;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info){
return (function (p__67336){
var map__67337 = p__67336;
var map__67337__$1 = (((((!((map__67337 == null))))?(((((map__67337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67337):map__67337);
var src = map__67337__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67337__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67337__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info){
return (function (p__67339){
var map__67340 = p__67339;
var map__67340__$1 = (((((!((map__67340 == null))))?(((((map__67340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67340):map__67340);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info){
return (function (p__67342){
var map__67343 = p__67342;
var map__67343__$1 = (((((!((map__67343 == null))))?(((((map__67343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67343):map__67343);
var rc = map__67343__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info){
return (function (p1__67287_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67287_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__67291,map__67291__$1,sources,compiled,warnings,map__67289,map__67289__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__67346){
var map__67347 = p__67346;
var map__67347__$1 = (((((!((map__67347 == null))))?(((((map__67347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67347):map__67347);
var msg = map__67347__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67347__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67349 = cljs.core.seq(updates);
var chunk__67351 = null;
var count__67352 = (0);
var i__67353 = (0);
while(true){
if((i__67353 < count__67352)){
var path = chunk__67351.cljs$core$IIndexed$_nth$arity$2(null,i__67353);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67389_67598 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67392_67599 = null;
var count__67393_67600 = (0);
var i__67394_67601 = (0);
while(true){
if((i__67394_67601 < count__67393_67600)){
var node_67602 = chunk__67392_67599.cljs$core$IIndexed$_nth$arity$2(null,i__67394_67601);
var path_match_67603 = shadow.cljs.devtools.client.browser.match_paths(node_67602.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67603)){
var new_link_67604 = (function (){var G__67408 = node_67602.cloneNode(true);
G__67408.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67603),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67408;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67603], 0));

goog.dom.insertSiblingAfter(new_link_67604,node_67602);

goog.dom.removeNode(node_67602);


var G__67605 = seq__67389_67598;
var G__67606 = chunk__67392_67599;
var G__67607 = count__67393_67600;
var G__67608 = (i__67394_67601 + (1));
seq__67389_67598 = G__67605;
chunk__67392_67599 = G__67606;
count__67393_67600 = G__67607;
i__67394_67601 = G__67608;
continue;
} else {
var G__67609 = seq__67389_67598;
var G__67610 = chunk__67392_67599;
var G__67611 = count__67393_67600;
var G__67612 = (i__67394_67601 + (1));
seq__67389_67598 = G__67609;
chunk__67392_67599 = G__67610;
count__67393_67600 = G__67611;
i__67394_67601 = G__67612;
continue;
}
} else {
var temp__5735__auto___67613 = cljs.core.seq(seq__67389_67598);
if(temp__5735__auto___67613){
var seq__67389_67614__$1 = temp__5735__auto___67613;
if(cljs.core.chunked_seq_QMARK_(seq__67389_67614__$1)){
var c__4550__auto___67615 = cljs.core.chunk_first(seq__67389_67614__$1);
var G__67616 = cljs.core.chunk_rest(seq__67389_67614__$1);
var G__67617 = c__4550__auto___67615;
var G__67618 = cljs.core.count(c__4550__auto___67615);
var G__67619 = (0);
seq__67389_67598 = G__67616;
chunk__67392_67599 = G__67617;
count__67393_67600 = G__67618;
i__67394_67601 = G__67619;
continue;
} else {
var node_67620 = cljs.core.first(seq__67389_67614__$1);
var path_match_67621 = shadow.cljs.devtools.client.browser.match_paths(node_67620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67621)){
var new_link_67622 = (function (){var G__67409 = node_67620.cloneNode(true);
G__67409.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67621),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67409;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67621], 0));

goog.dom.insertSiblingAfter(new_link_67622,node_67620);

goog.dom.removeNode(node_67620);


var G__67623 = cljs.core.next(seq__67389_67614__$1);
var G__67624 = null;
var G__67625 = (0);
var G__67626 = (0);
seq__67389_67598 = G__67623;
chunk__67392_67599 = G__67624;
count__67393_67600 = G__67625;
i__67394_67601 = G__67626;
continue;
} else {
var G__67627 = cljs.core.next(seq__67389_67614__$1);
var G__67628 = null;
var G__67629 = (0);
var G__67630 = (0);
seq__67389_67598 = G__67627;
chunk__67392_67599 = G__67628;
count__67393_67600 = G__67629;
i__67394_67601 = G__67630;
continue;
}
}
} else {
}
}
break;
}


var G__67631 = seq__67349;
var G__67632 = chunk__67351;
var G__67633 = count__67352;
var G__67634 = (i__67353 + (1));
seq__67349 = G__67631;
chunk__67351 = G__67632;
count__67352 = G__67633;
i__67353 = G__67634;
continue;
} else {
var G__67635 = seq__67349;
var G__67636 = chunk__67351;
var G__67637 = count__67352;
var G__67638 = (i__67353 + (1));
seq__67349 = G__67635;
chunk__67351 = G__67636;
count__67352 = G__67637;
i__67353 = G__67638;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67349);
if(temp__5735__auto__){
var seq__67349__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67349__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67349__$1);
var G__67639 = cljs.core.chunk_rest(seq__67349__$1);
var G__67640 = c__4550__auto__;
var G__67641 = cljs.core.count(c__4550__auto__);
var G__67642 = (0);
seq__67349 = G__67639;
chunk__67351 = G__67640;
count__67352 = G__67641;
i__67353 = G__67642;
continue;
} else {
var path = cljs.core.first(seq__67349__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67410_67643 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67413_67644 = null;
var count__67414_67645 = (0);
var i__67415_67646 = (0);
while(true){
if((i__67415_67646 < count__67414_67645)){
var node_67647 = chunk__67413_67644.cljs$core$IIndexed$_nth$arity$2(null,i__67415_67646);
var path_match_67648 = shadow.cljs.devtools.client.browser.match_paths(node_67647.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67648)){
var new_link_67649 = (function (){var G__67428 = node_67647.cloneNode(true);
G__67428.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67648),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67428;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67648], 0));

goog.dom.insertSiblingAfter(new_link_67649,node_67647);

goog.dom.removeNode(node_67647);


var G__67650 = seq__67410_67643;
var G__67651 = chunk__67413_67644;
var G__67652 = count__67414_67645;
var G__67653 = (i__67415_67646 + (1));
seq__67410_67643 = G__67650;
chunk__67413_67644 = G__67651;
count__67414_67645 = G__67652;
i__67415_67646 = G__67653;
continue;
} else {
var G__67654 = seq__67410_67643;
var G__67655 = chunk__67413_67644;
var G__67656 = count__67414_67645;
var G__67657 = (i__67415_67646 + (1));
seq__67410_67643 = G__67654;
chunk__67413_67644 = G__67655;
count__67414_67645 = G__67656;
i__67415_67646 = G__67657;
continue;
}
} else {
var temp__5735__auto___67658__$1 = cljs.core.seq(seq__67410_67643);
if(temp__5735__auto___67658__$1){
var seq__67410_67659__$1 = temp__5735__auto___67658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67410_67659__$1)){
var c__4550__auto___67660 = cljs.core.chunk_first(seq__67410_67659__$1);
var G__67661 = cljs.core.chunk_rest(seq__67410_67659__$1);
var G__67662 = c__4550__auto___67660;
var G__67663 = cljs.core.count(c__4550__auto___67660);
var G__67664 = (0);
seq__67410_67643 = G__67661;
chunk__67413_67644 = G__67662;
count__67414_67645 = G__67663;
i__67415_67646 = G__67664;
continue;
} else {
var node_67666 = cljs.core.first(seq__67410_67659__$1);
var path_match_67667 = shadow.cljs.devtools.client.browser.match_paths(node_67666.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67667)){
var new_link_67671 = (function (){var G__67429 = node_67666.cloneNode(true);
G__67429.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67667),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67429;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67667], 0));

goog.dom.insertSiblingAfter(new_link_67671,node_67666);

goog.dom.removeNode(node_67666);


var G__67672 = cljs.core.next(seq__67410_67659__$1);
var G__67673 = null;
var G__67674 = (0);
var G__67675 = (0);
seq__67410_67643 = G__67672;
chunk__67413_67644 = G__67673;
count__67414_67645 = G__67674;
i__67415_67646 = G__67675;
continue;
} else {
var G__67677 = cljs.core.next(seq__67410_67659__$1);
var G__67678 = null;
var G__67679 = (0);
var G__67680 = (0);
seq__67410_67643 = G__67677;
chunk__67413_67644 = G__67678;
count__67414_67645 = G__67679;
i__67415_67646 = G__67680;
continue;
}
}
} else {
}
}
break;
}


var G__67681 = cljs.core.next(seq__67349__$1);
var G__67682 = null;
var G__67683 = (0);
var G__67684 = (0);
seq__67349 = G__67681;
chunk__67351 = G__67682;
count__67352 = G__67683;
i__67353 = G__67684;
continue;
} else {
var G__67685 = cljs.core.next(seq__67349__$1);
var G__67686 = null;
var G__67687 = (0);
var G__67688 = (0);
seq__67349 = G__67685;
chunk__67351 = G__67686;
count__67352 = G__67687;
i__67353 = G__67688;
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
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__67437){
var map__67438 = p__67437;
var map__67438__$1 = (((((!((map__67438 == null))))?(((((map__67438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67438):map__67438);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__67438,map__67438__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__67438,map__67438__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__67440,done){
var map__67441 = p__67440;
var map__67441__$1 = (((((!((map__67441 == null))))?(((((map__67441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67441):map__67441);
var msg = map__67441__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67441__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67441__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67441__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67441__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__67441,map__67441__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__67446){
var map__67447 = p__67446;
var map__67447__$1 = (((((!((map__67447 == null))))?(((((map__67447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67447):map__67447);
var src = map__67447__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67447__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__67441,map__67441__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__67441,map__67441__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e67450){var e = e67450;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__67441,map__67441__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__67460,done){
var map__67461 = p__67460;
var map__67461__$1 = (((((!((map__67461 == null))))?(((((map__67461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67461):map__67461);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67461__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__67461,map__67461__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__67461,map__67461__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__67463){
var map__67464 = p__67463;
var map__67464__$1 = (((((!((map__67464 == null))))?(((((map__67464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67464):map__67464);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67464__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67464__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__67467,done){
var map__67469 = p__67467;
var map__67469__$1 = (((((!((map__67469 == null))))?(((((map__67469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67469):map__67469);
var msg = map__67469__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__67471_67713 = type;
var G__67471_67714__$1 = (((G__67471_67713 instanceof cljs.core.Keyword))?G__67471_67713.fqn:null);
switch (G__67471_67714__$1) {
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
var G__67473 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__67474 = ((function (G__67473){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__67473))
;
var G__67475 = "POST";
var G__67476 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__67477 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67473,G__67474,G__67475,G__67476,G__67477);
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
}catch (e67480){var e = e67480;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___67719 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___67719)){
var s_67720 = temp__5735__auto___67719;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_67720.onclose = ((function (s_67720,temp__5735__auto___67719){
return (function (e){
return null;
});})(s_67720,temp__5735__auto___67719))
;

s_67720.close();

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
