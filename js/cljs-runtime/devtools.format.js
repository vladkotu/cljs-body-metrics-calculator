goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48861 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48861["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48865 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48865["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48866 = temp__5733__auto____$2;
return (o48866["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48885 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48885["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48886 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48886["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48887 = temp__5733__auto____$2;
return (o48887["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48900 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48900["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48901 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48901["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48902 = temp__5733__auto____$2;
return (o48902["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48915 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48915["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48916 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48916["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48917 = temp__5733__auto____$2;
return (o48917["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48922 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48922["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48923 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48923["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48924 = temp__5733__auto____$2;
return (o48924["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48931 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48931["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48932 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48932["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48933 = temp__5733__auto____$2;
return (o48933["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o48936 = temp__5733__auto__;
var temp__5733__auto____$1 = (o48936["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o48937 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o48937["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o48938 = temp__5733__auto____$2;
return (o48938["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49248 = arguments.length;
var i__4731__auto___49249 = (0);
while(true){
if((i__4731__auto___49249 < len__4730__auto___49248)){
args__4736__auto__.push((arguments[i__4731__auto___49249]));

var G__49250 = (i__4731__auto___49249 + (1));
i__4731__auto___49249 = G__49250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq48989){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48989));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49253 = arguments.length;
var i__4731__auto___49254 = (0);
while(true){
if((i__4731__auto___49254 < len__4730__auto___49253)){
args__4736__auto__.push((arguments[i__4731__auto___49254]));

var G__49256 = (i__4731__auto___49254 + (1));
i__4731__auto___49254 = G__49256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq49038){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49038));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49258 = arguments.length;
var i__4731__auto___49259 = (0);
while(true){
if((i__4731__auto___49259 < len__4730__auto___49258)){
args__4736__auto__.push((arguments[i__4731__auto___49259]));

var G__49261 = (i__4731__auto___49259 + (1));
i__4731__auto___49259 = G__49261;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq49060){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49060));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49271 = arguments.length;
var i__4731__auto___49272 = (0);
while(true){
if((i__4731__auto___49272 < len__4730__auto___49271)){
args__4736__auto__.push((arguments[i__4731__auto___49272]));

var G__49273 = (i__4731__auto___49272 + (1));
i__4731__auto___49272 = G__49273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq49069){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49069));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49277 = arguments.length;
var i__4731__auto___49279 = (0);
while(true){
if((i__4731__auto___49279 < len__4730__auto___49277)){
args__4736__auto__.push((arguments[i__4731__auto___49279]));

var G__49280 = (i__4731__auto___49279 + (1));
i__4731__auto___49279 = G__49280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq49088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49088));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49281 = arguments.length;
var i__4731__auto___49282 = (0);
while(true){
if((i__4731__auto___49282 < len__4730__auto___49281)){
args__4736__auto__.push((arguments[i__4731__auto___49282]));

var G__49283 = (i__4731__auto___49282 + (1));
i__4731__auto___49282 = G__49283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq49115){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49115));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49288 = arguments.length;
var i__4731__auto___49289 = (0);
while(true){
if((i__4731__auto___49289 < len__4730__auto___49288)){
args__4736__auto__.push((arguments[i__4731__auto___49289]));

var G__49290 = (i__4731__auto___49289 + (1));
i__4731__auto___49289 = G__49290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq49129){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49129));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49294 = arguments.length;
var i__4731__auto___49295 = (0);
while(true){
if((i__4731__auto___49295 < len__4730__auto___49294)){
args__4736__auto__.push((arguments[i__4731__auto___49295]));

var G__49296 = (i__4731__auto___49295 + (1));
i__4731__auto___49295 = G__49296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__49150){
var vec__49152 = p__49150;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49152,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__49152,state_override){
return (function (p1__49140_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49140_SHARP_,state_override], 0));
});})(vec__49152,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq49142){
var G__49144 = cljs.core.first(seq49142);
var seq49142__$1 = cljs.core.next(seq49142);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49144,seq49142__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__49164 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__49165 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__49166 = (function (){var G__49167 = new cljs.core.Keyword(null,"li","li",723558921);
var G__49168 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__49169 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__49167,G__49168,G__49169) : devtools.format.make_template_fn.call(null,G__49167,G__49168,G__49169));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__49164,G__49165,G__49166) : devtools.format.make_template_fn.call(null,G__49164,G__49165,G__49166));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49304 = arguments.length;
var i__4731__auto___49305 = (0);
while(true){
if((i__4731__auto___49305 < len__4730__auto___49304)){
args__4736__auto__.push((arguments[i__4731__auto___49305]));

var G__49307 = (i__4731__auto___49305 + (1));
i__4731__auto___49305 = G__49307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq49171){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49171));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49312 = arguments.length;
var i__4731__auto___49313 = (0);
while(true){
if((i__4731__auto___49313 < len__4730__auto___49312)){
args__4736__auto__.push((arguments[i__4731__auto___49313]));

var G__49314 = (i__4731__auto___49313 + (1));
i__4731__auto___49313 = G__49314;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq49183){
var G__49184 = cljs.core.first(seq49183);
var seq49183__$1 = cljs.core.next(seq49183);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49184,seq49183__$1);
});


//# sourceMappingURL=devtools.format.js.map
