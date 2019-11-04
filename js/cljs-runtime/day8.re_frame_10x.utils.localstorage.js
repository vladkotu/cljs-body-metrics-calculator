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
var G__57901 = arguments.length;
switch (G__57901) {
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
var seq__57922 = cljs.core.seq(Object.keys(localStorage));
var chunk__57923 = null;
var count__57924 = (0);
var i__57925 = (0);
while(true){
if((i__57925 < count__57924)){
var k = chunk__57923.cljs$core$IIndexed$_nth$arity$2(null,i__57925);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__57972 = seq__57922;
var G__57973 = chunk__57923;
var G__57974 = count__57924;
var G__57975 = (i__57925 + (1));
seq__57922 = G__57972;
chunk__57923 = G__57973;
count__57924 = G__57974;
i__57925 = G__57975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57922);
if(temp__5735__auto__){
var seq__57922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57922__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57922__$1);
var G__57991 = cljs.core.chunk_rest(seq__57922__$1);
var G__57992 = c__4550__auto__;
var G__57993 = cljs.core.count(c__4550__auto__);
var G__57994 = (0);
seq__57922 = G__57991;
chunk__57923 = G__57992;
count__57924 = G__57993;
i__57925 = G__57994;
continue;
} else {
var k = cljs.core.first(seq__57922__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__58002 = cljs.core.next(seq__57922__$1);
var G__58003 = null;
var G__58004 = (0);
var G__58005 = (0);
seq__57922 = G__58002;
chunk__57923 = G__58003;
count__57924 = G__58004;
i__57925 = G__58005;
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
