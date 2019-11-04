goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44765,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44778 = k44765;
var G__44778__$1 = (((G__44778 instanceof cljs.core.Keyword))?G__44778.fqn:null);
switch (G__44778__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44765,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44781){
var vec__44782 = p__44781;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44782,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44782,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44764){
var self__ = this;
var G__44764__$1 = this;
return (new cljs.core.RecordIter((0),G__44764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44789 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (927319699 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44789(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44766,other44767){
var self__ = this;
var this44766__$1 = this;
return (((!((other44767 == null)))) && ((this44766__$1.constructor === other44767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44766__$1.unit,other44767.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44766__$1.magnitude,other44767.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44766__$1.__extmap,other44767.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44764){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__44790 = cljs.core.keyword_identical_QMARK_;
var expr__44791 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__44793 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__44794 = expr__44791;
return (pred__44790.cljs$core$IFn$_invoke$arity$2 ? pred__44790.cljs$core$IFn$_invoke$arity$2(G__44793,G__44794) : pred__44790.call(null,G__44793,G__44794));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(G__44764,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44795 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__44796 = expr__44791;
return (pred__44790.cljs$core$IFn$_invoke$arity$2 ? pred__44790.cljs$core$IFn$_invoke$arity$2(G__44795,G__44796) : pred__44790.call(null,G__44795,G__44796));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__44764,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44764),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44764){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__44764,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__44775){
var extmap__4424__auto__ = (function (){var G__44803 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44775,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__44775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44803);
} else {
return G__44803;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__44775),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__44775),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44805,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44811 = k44805;
var G__44811__$1 = (((G__44811 instanceof cljs.core.Keyword))?G__44811.fqn:null);
switch (G__44811__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44805,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44812){
var vec__44813 = p__44812;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44813,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44813,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44804){
var self__ = this;
var G__44804__$1 = this;
return (new cljs.core.RecordIter((0),G__44804__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44816 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1249425430 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44816(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44806,other44807){
var self__ = this;
var this44806__$1 = this;
return (((!((other44807 == null)))) && ((this44806__$1.constructor === other44807.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44806__$1.function,other44807.function)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44806__$1.args,other44807.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44806__$1.__extmap,other44807.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44804){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__44819 = cljs.core.keyword_identical_QMARK_;
var expr__44820 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__44822 = new cljs.core.Keyword(null,"function","function",-2127255473);
var G__44823 = expr__44820;
return (pred__44819.cljs$core$IFn$_invoke$arity$2 ? pred__44819.cljs$core$IFn$_invoke$arity$2(G__44822,G__44823) : pred__44819.call(null,G__44822,G__44823));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(G__44804,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44824 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__44825 = expr__44820;
return (pred__44819.cljs$core$IFn$_invoke$arity$2 ? pred__44819.cljs$core$IFn$_invoke$arity$2(G__44824,G__44825) : pred__44819.call(null,G__44824,G__44825));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__44804,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44804),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44804){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__44804,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__44809){
var extmap__4424__auto__ = (function (){var G__44831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44809,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__44809)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44831);
} else {
return G__44831;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__44809),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__44809),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44833,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44841 = k44833;
var G__44841__$1 = (((G__44841 instanceof cljs.core.Keyword))?G__44841.fqn:null);
switch (G__44841__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44833,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44842){
var vec__44843 = p__44842;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44832){
var self__ = this;
var G__44832__$1 = this;
return (new cljs.core.RecordIter((0),G__44832__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44852 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-980840912 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44852(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44834,other44835){
var self__ = this;
var this44834__$1 = this;
return (((!((other44835 == null)))) && ((this44834__$1.constructor === other44835.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44834__$1.identifier,other44835.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44834__$1.value,other44835.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44834__$1.__extmap,other44835.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44832){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__44863 = cljs.core.keyword_identical_QMARK_;
var expr__44864 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__44866 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__44867 = expr__44864;
return (pred__44863.cljs$core$IFn$_invoke$arity$2 ? pred__44863.cljs$core$IFn$_invoke$arity$2(G__44866,G__44867) : pred__44863.call(null,G__44866,G__44867));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(G__44832,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44868 = new cljs.core.Keyword(null,"value","value",305978217);
var G__44869 = expr__44864;
return (pred__44863.cljs$core$IFn$_invoke$arity$2 ? pred__44863.cljs$core$IFn$_invoke$arity$2(G__44868,G__44869) : pred__44863.call(null,G__44868,G__44869));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__44832,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44832),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44832){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__44832,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__44836){
var extmap__4424__auto__ = (function (){var G__44880 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44836,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__44836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44880);
} else {
return G__44880;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__44836),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__44836),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.js.map
