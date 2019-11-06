goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__58320 = arguments.length;
switch (G__58320) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__58324 = cljs.core.seq(Object.keys(localStorage));
var chunk__58325 = null;
var count__58326 = (0);
var i__58327 = (0);
while(true){
if((i__58327 < count__58326)){
var k = chunk__58325.cljs$core$IIndexed$_nth$arity$2(null,i__58327);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__58339 = seq__58324;
var G__58340 = chunk__58325;
var G__58341 = count__58326;
var G__58342 = (i__58327 + (1));
seq__58324 = G__58339;
chunk__58325 = G__58340;
count__58326 = G__58341;
i__58327 = G__58342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58324);
if(temp__5735__auto__){
var seq__58324__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58324__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58324__$1);
var G__58345 = cljs.core.chunk_rest(seq__58324__$1);
var G__58346 = c__4550__auto__;
var G__58347 = cljs.core.count(c__4550__auto__);
var G__58348 = (0);
seq__58324 = G__58345;
chunk__58325 = G__58346;
count__58326 = G__58347;
i__58327 = G__58348;
continue;
} else {
var k = cljs.core.first(seq__58324__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__58349 = cljs.core.next(seq__58324__$1);
var G__58350 = null;
var G__58351 = (0);
var G__58352 = (0);
seq__58324 = G__58349;
chunk__58325 = G__58350;
count__58326 = G__58351;
i__58327 = G__58352;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
