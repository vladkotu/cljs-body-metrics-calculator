goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__58353_59196 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__58354_59197 = ((function (G__58353_59196){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__58353_59196))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58353_59196,G__58354_59197) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58353_59196,G__58354_59197));
var G__58358_59198 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__58359_59199 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58360_59200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58361_59201 = ((function (G__58358_59198,G__58359_59199,G__58360_59200){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__58358_59198,G__58359_59199,G__58360_59200))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58358_59198,G__58359_59199,G__58360_59200,G__58361_59201) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58358_59198,G__58359_59199,G__58360_59200,G__58361_59201));
var G__58363_59204 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__58364_59205 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58365_59206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__58366_59207 = ((function (G__58363_59204,G__58364_59205,G__58365_59206){
return (function (panel_width_PERCENT_,p__58369){
var vec__58371 = p__58369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58371,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58371,(1),null);
return (((function (){var G__58374 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__58374);
})() * n) / 100.0);
});})(G__58363_59204,G__58364_59205,G__58365_59206))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58363_59204,G__58364_59205,G__58365_59206,G__58366_59207) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58363_59204,G__58364_59205,G__58365_59206,G__58366_59207));
var G__58376_59213 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__58377_59214 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58378_59215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58379_59216 = ((function (G__58376_59213,G__58377_59214,G__58378_59215){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__58376_59213,G__58377_59214,G__58378_59215))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58376_59213,G__58377_59214,G__58378_59215,G__58379_59216) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58376_59213,G__58377_59214,G__58378_59215,G__58379_59216));
var G__58380_59220 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__58381_59221 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58382_59222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__58383_59223 = ((function (G__58380_59220,G__58381_59221,G__58382_59222){
return (function (width,p__58384){
var vec__58385 = p__58384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(1),null);
return ((function (){var G__58388 = (width / n);
return Math.ceil(G__58388);
})() * n);
});})(G__58380_59220,G__58381_59221,G__58382_59222))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58380_59220,G__58381_59221,G__58382_59222,G__58383_59223) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58380_59220,G__58381_59221,G__58382_59222,G__58383_59223));
var G__58389_59225 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__58390_59226 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58391_59227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58392_59228 = ((function (G__58389_59225,G__58390_59226,G__58391_59227){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__58389_59225,G__58390_59226,G__58391_59227))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58389_59225,G__58390_59226,G__58391_59227,G__58392_59228) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58389_59225,G__58390_59226,G__58391_59227,G__58392_59228));
var G__58396_59233 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__58397_59234 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58398_59235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58399_59236 = ((function (G__58396_59233,G__58397_59234,G__58398_59235){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__58396_59233,G__58397_59234,G__58398_59235))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58396_59233,G__58397_59234,G__58398_59235,G__58399_59236) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58396_59233,G__58397_59234,G__58398_59235,G__58399_59236));
var G__58400_59237 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__58401_59238 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58402_59239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58403_59240 = ((function (G__58400_59237,G__58401_59238,G__58402_59239){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__58400_59237,G__58401_59238,G__58402_59239))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58400_59237,G__58401_59238,G__58402_59239,G__58403_59240) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58400_59237,G__58401_59238,G__58402_59239,G__58403_59240));
var G__58406_59241 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__58407_59242 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58408_59243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58409_59244 = ((function (G__58406_59241,G__58407_59242,G__58408_59243){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__58406_59241,G__58407_59242,G__58408_59243))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58406_59241,G__58407_59242,G__58408_59243,G__58409_59244) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58406_59241,G__58407_59242,G__58408_59243,G__58409_59244));
var G__58412_59245 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__58413_59246 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58414_59247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58415_59248 = ((function (G__58412_59245,G__58413_59246,G__58414_59247){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__58412_59245,G__58413_59246,G__58414_59247))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58412_59245,G__58413_59246,G__58414_59247,G__58415_59248) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58412_59245,G__58413_59246,G__58414_59247,G__58415_59248));
var G__58418_59249 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__58419_59250 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58420_59251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58421_59252 = ((function (G__58418_59249,G__58419_59250,G__58420_59251){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__58418_59249,G__58419_59250,G__58420_59251))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58418_59249,G__58419_59250,G__58420_59251,G__58421_59252) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58418_59249,G__58419_59250,G__58420_59251,G__58421_59252));
var G__58422_59254 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__58423_59255 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58424_59256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58425_59257 = ((function (G__58422_59254,G__58423_59255,G__58424_59256){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__58422_59254,G__58423_59255,G__58424_59256))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58422_59254,G__58423_59255,G__58424_59256,G__58425_59257) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58422_59254,G__58423_59255,G__58424_59256,G__58425_59257));
var G__58426_59260 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__58427_59261 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58428_59262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__58429_59263 = ((function (G__58426_59260,G__58427_59261,G__58428_59262){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__58426_59260,G__58427_59261,G__58428_59262))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58426_59260,G__58427_59261,G__58428_59262,G__58429_59263) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58426_59260,G__58427_59261,G__58428_59262,G__58429_59263));
var G__58434_59269 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__58435_59270 = ((function (G__58434_59269){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__58434_59269))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58434_59269,G__58435_59270) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58434_59269,G__58435_59270));
var G__58436_59271 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__58437_59272 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58438_59273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__58439_59274 = ((function (G__58436_59271,G__58437_59272,G__58438_59273){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__58436_59271,G__58437_59272,G__58438_59273))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58436_59271,G__58437_59272,G__58438_59273,G__58439_59274) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58436_59271,G__58437_59272,G__58438_59273,G__58439_59274));
var G__58442_59277 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__58443_59278 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58444_59279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__58445_59280 = ((function (G__58442_59277,G__58443_59278,G__58444_59279){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__58442_59277,G__58443_59278,G__58444_59279))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58442_59277,G__58443_59278,G__58444_59279,G__58445_59280) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58442_59277,G__58443_59278,G__58444_59279,G__58445_59280));
var G__58448_59281 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__58449_59282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58450_59283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__58451_59284 = ((function (G__58448_59281,G__58449_59282,G__58450_59283){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__58448_59281,G__58449_59282,G__58450_59283){
return (function (p1__58447_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__58447_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__58447_SHARP_));
});})(G__58448_59281,G__58449_59282,G__58450_59283))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__58448_59281,G__58449_59282,G__58450_59283))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58448_59281,G__58449_59282,G__58450_59283,G__58451_59284) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58448_59281,G__58449_59282,G__58450_59283,G__58451_59284));
var G__58452_59285 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__58453_59286 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58454_59287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__58455_59288 = ((function (G__58452_59285,G__58453_59286,G__58454_59287){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__58452_59285,G__58453_59286,G__58454_59287))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58452_59285,G__58453_59286,G__58454_59287,G__58455_59288) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58452_59285,G__58453_59286,G__58454_59287,G__58455_59288));
var G__58456_59289 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__58457_59290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58458_59291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__58459_59292 = ((function (G__58456_59289,G__58457_59290,G__58458_59291){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__58456_59289,G__58457_59290,G__58458_59291))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58456_59289,G__58457_59290,G__58458_59291,G__58459_59292) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58456_59289,G__58457_59290,G__58458_59291,G__58459_59292));
var G__58460_59293 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__58461_59294 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58462_59295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__58463_59296 = ((function (G__58460_59293,G__58461_59294,G__58462_59295){
return (function (expansions,p__58464){
var vec__58465 = p__58464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58465,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58465,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__58460_59293,G__58461_59294,G__58462_59295))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58460_59293,G__58461_59294,G__58462_59295,G__58463_59296) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58460_59293,G__58461_59294,G__58462_59295,G__58463_59296));
var G__58468_59297 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__58469_59298 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58470_59299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__58471_59300 = ((function (G__58468_59297,G__58469_59298,G__58470_59299){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__58468_59297,G__58469_59298,G__58470_59299))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58468_59297,G__58469_59298,G__58470_59299,G__58471_59300) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58468_59297,G__58469_59298,G__58470_59299,G__58471_59300));
var G__58472_59301 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__58473_59302 = ((function (G__58472_59301){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58472_59301))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58472_59301,G__58473_59302) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58472_59301,G__58473_59302));
var G__58476_59303 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__58477_59304 = ((function (G__58476_59303){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58476_59303))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58476_59303,G__58477_59304) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58476_59303,G__58477_59304));
var G__58478_59305 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__58479_59306 = ((function (G__58478_59305){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__58478_59305))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58478_59305,G__58479_59306) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58478_59305,G__58479_59306));
var G__58481_59307 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__58482_59308 = ((function (G__58481_59307){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__58481_59307))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58481_59307,G__58482_59308) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58481_59307,G__58482_59308));
var G__58483_59309 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__58484_59310 = ((function (G__58483_59309){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__58483_59309))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58483_59309,G__58484_59310) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58483_59309,G__58484_59310));
var G__58486_59311 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__58487_59312 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58488_59313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__58489_59314 = ((function (G__58486_59311,G__58487_59312,G__58488_59313){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__58486_59311,G__58487_59312,G__58488_59313))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58486_59311,G__58487_59312,G__58488_59313,G__58489_59314) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58486_59311,G__58487_59312,G__58488_59313,G__58489_59314));
var G__58490_59317 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__58491_59318 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58492_59319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58493_59320 = ((function (G__58490_59317,G__58491_59318,G__58492_59319){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__58490_59317,G__58491_59318,G__58492_59319))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58490_59317,G__58491_59318,G__58492_59319,G__58493_59320) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58490_59317,G__58491_59318,G__58492_59319,G__58493_59320));
var G__58494_59324 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__58495_59325 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58496_59326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58497_59327 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58498_59328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__58499_59329 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58500_59330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__58501_59331 = ((function (G__58494_59324,G__58495_59325,G__58496_59326,G__58497_59327,G__58498_59328,G__58499_59329,G__58500_59330){
return (function (p__58502,_){
var vec__58503 = p__58502;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__58494_59324,G__58495_59325,G__58496_59326,G__58497_59327,G__58498_59328,G__58499_59329,G__58500_59330))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__58494_59324,G__58495_59325,G__58496_59326,G__58497_59327,G__58498_59328,G__58499_59329,G__58500_59330,G__58501_59331) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58494_59324,G__58495_59325,G__58496_59326,G__58497_59327,G__58498_59328,G__58499_59329,G__58500_59330,G__58501_59331));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__58507,_){
var vec__58508 = p__58507;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58508,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58508,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__58508,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__58508,traces,filtered_views))
),traces);
});
var G__58511_59336 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__58512_59337 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58513_59338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58514_59339 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58515_59340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__58516_59341 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58511_59336,G__58512_59337,G__58513_59338,G__58514_59339,G__58515_59340,G__58516_59341) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58511_59336,G__58512_59337,G__58513_59338,G__58514_59339,G__58515_59340,G__58516_59341));
var G__58517_59342 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__58518_59343 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58519_59344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58520_59345 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58521_59346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__58522_59347 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58517_59342,G__58518_59343,G__58519_59344,G__58520_59345,G__58521_59346,G__58522_59347) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58517_59342,G__58518_59343,G__58519_59344,G__58520_59345,G__58521_59346,G__58522_59347));
var G__58523_59348 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__58524_59349 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58525_59350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__58526_59351 = ((function (G__58523_59348,G__58524_59349,G__58525_59350){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__58523_59348,G__58524_59349,G__58525_59350))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58523_59348,G__58524_59349,G__58525_59350,G__58526_59351) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58523_59348,G__58524_59349,G__58525_59350,G__58526_59351));
var G__58527_59352 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__58528_59353 = ((function (G__58527_59352){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__58527_59352))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58527_59352,G__58528_59353) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58527_59352,G__58528_59353));
var G__58531_59355 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__58532_59356 = ((function (G__58531_59355){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58531_59355))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58531_59355,G__58532_59356) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58531_59355,G__58532_59356));
var G__58536_59366 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__58537_59367 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58538_59368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__58539_59369 = ((function (G__58536_59366,G__58537_59367,G__58538_59368){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__58536_59366,G__58537_59367,G__58538_59368))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58536_59366,G__58537_59367,G__58538_59368,G__58539_59369) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58536_59366,G__58537_59367,G__58538_59368,G__58539_59369));
var G__58540_59372 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__58541_59373 = ((function (G__58540_59372){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58540_59372))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58540_59372,G__58541_59373) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58540_59372,G__58541_59373));
var G__58542_59380 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__58543_59381 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58544_59382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58545_59383 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58546_59384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58547_59385 = ((function (G__58542_59380,G__58543_59381,G__58544_59382,G__58545_59383,G__58546_59384){
return (function (p__58548,_){
var vec__58549 = p__58548;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58549,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58549,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__58542_59380,G__58543_59381,G__58544_59382,G__58545_59383,G__58546_59384))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58542_59380,G__58543_59381,G__58544_59382,G__58545_59383,G__58546_59384,G__58547_59385) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58542_59380,G__58543_59381,G__58544_59382,G__58545_59383,G__58546_59384,G__58547_59385));
var G__58552_59391 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__58553_59392 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58554_59393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58555_59394 = ((function (G__58552_59391,G__58553_59392,G__58554_59393){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__58552_59391,G__58553_59392,G__58554_59393))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58552_59391,G__58553_59392,G__58554_59393,G__58555_59394) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58552_59391,G__58553_59392,G__58554_59393,G__58555_59394));
var G__58556_59397 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__58557_59398 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58558_59399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58559_59400 = ((function (G__58556_59397,G__58557_59398,G__58558_59399){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__58556_59397,G__58557_59398,G__58558_59399))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58556_59397,G__58557_59398,G__58558_59399,G__58559_59400) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58556_59397,G__58557_59398,G__58558_59399,G__58559_59400));
var G__58560_59405 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__58561_59406 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58562_59407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__58563_59408 = ((function (G__58560_59405,G__58561_59406,G__58562_59407){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__58560_59405,G__58561_59406,G__58562_59407))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58560_59405,G__58561_59406,G__58562_59407,G__58563_59408) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58560_59405,G__58561_59406,G__58562_59407,G__58563_59408));
var G__58564_59414 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__58565_59415 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58566_59416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58567_59417 = ((function (G__58564_59414,G__58565_59415,G__58566_59416){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__58564_59414,G__58565_59415,G__58566_59416))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58564_59414,G__58565_59415,G__58566_59416,G__58567_59417) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58564_59414,G__58565_59415,G__58566_59416,G__58567_59417));
var G__58572_59420 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__58573_59421 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58574_59422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58575_59423 = ((function (G__58572_59420,G__58573_59421,G__58574_59422){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58572_59420,G__58573_59421,G__58574_59422))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58572_59420,G__58573_59421,G__58574_59422,G__58575_59423) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58572_59420,G__58573_59421,G__58574_59422,G__58575_59423));
var G__58576_59428 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__58577_59429 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58578_59430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58579_59431 = ((function (G__58576_59428,G__58577_59429,G__58578_59430){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__58576_59428,G__58577_59429,G__58578_59430))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58576_59428,G__58577_59429,G__58578_59430,G__58579_59431) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58576_59428,G__58577_59429,G__58578_59430,G__58579_59431));
var G__58580_59436 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__58581_59437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58582_59438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58583_59439 = ((function (G__58580_59436,G__58581_59437,G__58582_59438){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58580_59436,G__58581_59437,G__58582_59438))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58580_59436,G__58581_59437,G__58582_59438,G__58583_59439) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58580_59436,G__58581_59437,G__58582_59438,G__58583_59439));
var G__58587_59442 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__58588_59443 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58589_59444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58590_59445 = ((function (G__58587_59442,G__58588_59443,G__58589_59444){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__58587_59442,G__58588_59443,G__58589_59444))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58587_59442,G__58588_59443,G__58589_59444,G__58590_59445) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58587_59442,G__58588_59443,G__58589_59444,G__58590_59445));
var G__58594_59451 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__58595_59452 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58596_59453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58597_59454 = ((function (G__58594_59451,G__58595_59452,G__58596_59453){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__58594_59451,G__58595_59452,G__58596_59453))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58594_59451,G__58595_59452,G__58596_59453,G__58597_59454) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58594_59451,G__58595_59452,G__58596_59453,G__58597_59454));
var G__58602_59465 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__58603_59466 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58604_59467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__58605_59468 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58606_59469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58607_59470 = ((function (G__58602_59465,G__58603_59466,G__58604_59467,G__58605_59468,G__58606_59469){
return (function (p__58614){
var vec__58620 = p__58614;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58620,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58620,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__58602_59465,G__58603_59466,G__58604_59467,G__58605_59468,G__58606_59469))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58602_59465,G__58603_59466,G__58604_59467,G__58605_59468,G__58606_59469,G__58607_59470) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58602_59465,G__58603_59466,G__58604_59467,G__58605_59468,G__58606_59469,G__58607_59470));
var G__58623_59478 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__58624_59479 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58625_59480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__58626_59481 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58627_59482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58628_59483 = ((function (G__58623_59478,G__58624_59479,G__58625_59480,G__58626_59481,G__58627_59482){
return (function (p__58629){
var vec__58630 = p__58629;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__58623_59478,G__58624_59479,G__58625_59480,G__58626_59481,G__58627_59482))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58623_59478,G__58624_59479,G__58625_59480,G__58626_59481,G__58627_59482,G__58628_59483) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58623_59478,G__58624_59479,G__58625_59480,G__58626_59481,G__58627_59482,G__58628_59483));
var G__58633_59492 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__58634_59493 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58635_59494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58636_59495 = ((function (G__58633_59492,G__58634_59493,G__58635_59494){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__58633_59492,G__58634_59493,G__58635_59494))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58633_59492,G__58634_59493,G__58635_59494,G__58636_59495) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58633_59492,G__58634_59493,G__58635_59494,G__58636_59495));
var G__58640_59501 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__58641_59502 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58642_59503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58643_59504 = ((function (G__58640_59501,G__58641_59502,G__58642_59503){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__58640_59501,G__58641_59502,G__58642_59503){
return (function (p1__58639_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__58639_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__58639_SHARP_)));
});})(G__58640_59501,G__58641_59502,G__58642_59503))
,traces);
});})(G__58640_59501,G__58641_59502,G__58642_59503))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58640_59501,G__58641_59502,G__58642_59503,G__58643_59504) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58640_59501,G__58641_59502,G__58642_59503,G__58643_59504));
var G__58648_59515 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__58649_59516 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58650_59517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__58651_59518 = ((function (G__58648_59515,G__58649_59516,G__58650_59517){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__58648_59515,G__58649_59516,G__58650_59517))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58648_59515,G__58649_59516,G__58650_59517,G__58651_59518) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58648_59515,G__58649_59516,G__58650_59517,G__58651_59518));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__58659 = arguments.length;
switch (G__58659) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___59526 = arguments.length;
var i__4731__auto___59527 = (0);
while(true){
if((i__4731__auto___59527 < len__4730__auto___59526)){
args_arr__4751__auto__.push((arguments[i__4731__auto___59527]));

var G__59532 = (i__4731__auto___59527 + (1));
i__4731__auto___59527 = G__59532;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq58656){
var G__58657 = cljs.core.first(seq58656);
var seq58656__$1 = cljs.core.next(seq58656);
var G__58658 = cljs.core.first(seq58656__$1);
var seq58656__$2 = cljs.core.next(seq58656__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58657,G__58658,seq58656__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__58688_59539 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__58689_59540 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58690_59541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__58691_59542 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58692_59543 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58693_59544 = ((function (G__58688_59539,G__58689_59540,G__58690_59541,G__58691_59542,G__58692_59543){
return (function (p__58698,p__58699){
var vec__58702 = p__58698;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(1),null);
var vec__58705 = p__58699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58705,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58705,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__58708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58708,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58708,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__58688_59539,G__58689_59540,G__58690_59541,G__58691_59542,G__58692_59543))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58688_59539,G__58689_59540,G__58690_59541,G__58691_59542,G__58692_59543,G__58693_59544) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58688_59539,G__58689_59540,G__58690_59541,G__58691_59542,G__58692_59543,G__58693_59544));
var G__58711_59553 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__58712_59554 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58713_59555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58714_59556 = ((function (G__58711_59553,G__58712_59554,G__58713_59555){
return (function (match){
var map__58716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__58716__$1 = (((((!((map__58716 == null))))?(((((map__58716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58716):map__58716);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__58711_59553,G__58712_59554,G__58713_59555))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58711_59553,G__58712_59554,G__58713_59555,G__58714_59556) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58711_59553,G__58712_59554,G__58713_59555,G__58714_59556));
var G__58720_59558 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__58721_59559 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58722_59560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58723_59561 = ((function (G__58720_59558,G__58721_59559,G__58722_59560){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__58720_59558,G__58721_59559,G__58722_59560))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58720_59558,G__58721_59559,G__58722_59560,G__58723_59561) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58720_59558,G__58721_59559,G__58722_59560,G__58723_59561));
var G__58725_59565 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__58726_59566 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58727_59567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58728_59568 = ((function (G__58725_59565,G__58726_59566,G__58727_59567){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__58725_59565,G__58726_59566,G__58727_59567))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58725_59565,G__58726_59566,G__58727_59567,G__58728_59568) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58725_59565,G__58726_59566,G__58727_59567,G__58728_59568));
var G__58729_59569 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__58730_59570 = ((function (G__58729_59569){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58729_59569))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58729_59569,G__58730_59570) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58729_59569,G__58730_59570));
var G__58731_59577 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__58732_59578 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58733_59579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58734_59580 = ((function (G__58731_59577,G__58732_59578,G__58733_59579){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__58731_59577,G__58732_59578,G__58733_59579))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58731_59577,G__58732_59578,G__58733_59579,G__58734_59580) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58731_59577,G__58732_59578,G__58733_59579,G__58734_59580));
var G__58743_59584 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__58744_59585 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58745_59586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58746_59587 = ((function (G__58743_59584,G__58744_59585,G__58745_59586){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__58743_59584,G__58744_59585,G__58745_59586))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58743_59584,G__58744_59585,G__58745_59586,G__58746_59587) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58743_59584,G__58744_59585,G__58745_59586,G__58746_59587));
var G__58752_59589 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__58753_59590 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58754_59591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58755_59592 = ((function (G__58752_59589,G__58753_59590,G__58754_59591){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58752_59589,G__58753_59590,G__58754_59591))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58752_59589,G__58753_59590,G__58754_59591,G__58755_59592) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58752_59589,G__58753_59590,G__58754_59591,G__58755_59592));
var G__58780_59601 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__58781_59602 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58782_59603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58783_59604 = ((function (G__58780_59601,G__58781_59602,G__58782_59603){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__58780_59601,G__58781_59602,G__58782_59603))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58780_59601,G__58781_59602,G__58782_59603,G__58783_59604) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58780_59601,G__58781_59602,G__58782_59603,G__58783_59604));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__58787_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__58787_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58795){
return cljs.core.coll_QMARK_(G__58795);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58796){
return cljs.core.map_QMARK_(G__58796);
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__58796){
return cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__58796){
return ((cljs.core.map_QMARK_(G__58796)) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__58796,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58885){
return cljs.core.coll_QMARK_(G__58885);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__58886 = sub_type;
var G__58886__$1 = (((G__58886 instanceof cljs.core.Keyword))?G__58886.fqn:null);
switch (G__58886__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__59634 = (exp - (1));
var G__59635 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__59636 = cljs.core.rest(order__$1);
exp = G__59634;
total = G__59635;
order__$1 = G__59636;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__58910 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__58910__$1 = (((G__58910 instanceof cljs.core.Keyword))?G__58910.fqn:null);
switch (G__58910__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__58945,p__58946){
var vec__58947 = p__58945;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58947,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58947,(1),null);
var vec__58950 = p__58946;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58950,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__58947,sub_info,sub_state,vec__58950,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__58947,sub_info,sub_state,vec__58950,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__58947,sub_info,sub_state,vec__58950,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__58947,sub_info,sub_state,vec__58950,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__58962_59647 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__58963_59648 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58964_59649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__58965_59650 = ((function (G__58962_59647,G__58963_59648,G__58964_59649){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__58962_59647,G__58963_59648,G__58964_59649))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58962_59647,G__58963_59648,G__58964_59649,G__58965_59650) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58962_59647,G__58963_59648,G__58964_59649,G__58965_59650));
var G__58971_59655 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__58972_59656 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58973_59657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__58974_59658 = ((function (G__58971_59655,G__58972_59656,G__58973_59657){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__58971_59655,G__58972_59656,G__58973_59657))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58971_59655,G__58972_59656,G__58973_59657,G__58974_59658) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58971_59655,G__58972_59656,G__58973_59657,G__58974_59658));
var G__58978_59659 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__58979_59660 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58980_59661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__58981_59662 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58982_59663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__58983_59664 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58978_59659,G__58979_59660,G__58980_59661,G__58981_59662,G__58982_59663,G__58983_59664) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58978_59659,G__58979_59660,G__58980_59661,G__58981_59662,G__58982_59663,G__58983_59664));
var G__58988_59668 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__58989_59669 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58990_59670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__58991_59671 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58992_59672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__58993_59675 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58988_59668,G__58989_59669,G__58990_59670,G__58991_59671,G__58992_59672,G__58993_59675) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58988_59668,G__58989_59669,G__58990_59670,G__58991_59671,G__58992_59672,G__58993_59675));
var G__58997_59678 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__58998_59679 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58999_59680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__59000_59681 = ((function (G__58997_59678,G__58998_59679,G__58999_59680){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__58997_59678,G__58998_59679,G__58999_59680))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58997_59678,G__58998_59679,G__58999_59680,G__59000_59681) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58997_59678,G__58998_59679,G__58999_59680,G__59000_59681));
var G__59003_59683 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__59004_59684 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59005_59685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__59006_59686 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59007_59687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__59008_59688 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59009_59689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__59010_59690 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59011_59691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__59012_59692 = ((function (G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691){
return (function (p__59013){
var vec__59014 = p__59013;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59014,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59014,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59014,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59014,(3),null);
var compare_fn = ((function (vec__59014,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__59014,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691))
;
var G__59020 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__59020__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__59020):G__59020);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__59020,G__59020__$1,compare_fn,vec__59014,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691){
return (function (p__59021){
var map__59024 = p__59021;
var map__59024__$1 = (((((!((map__59024 == null))))?(((((map__59024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59024):map__59024);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59024__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4131__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__59020,G__59020__$1,compare_fn,vec__59014,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691))
,G__59020__$1);
} else {
return G__59020__$1;
}
});})(G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691,G__59012_59692) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59003_59683,G__59004_59684,G__59005_59685,G__59006_59686,G__59007_59687,G__59008_59688,G__59009_59689,G__59010_59690,G__59011_59691,G__59012_59692));
var G__59031_59705 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__59032_59706 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59033_59707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__59034_59708 = ((function (G__59031_59705,G__59032_59706,G__59033_59707){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__59031_59705,G__59032_59706,G__59033_59707))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59031_59705,G__59032_59706,G__59033_59707,G__59034_59708) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59031_59705,G__59032_59706,G__59033_59707,G__59034_59708));
var G__59039_59714 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__59040_59715 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59041_59716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__59042_59717 = ((function (G__59039_59714,G__59040_59715,G__59041_59716){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__59039_59714,G__59040_59715,G__59041_59716))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59039_59714,G__59040_59715,G__59041_59716,G__59042_59717) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59039_59714,G__59040_59715,G__59041_59716,G__59042_59717));
var G__59052_59721 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__59053_59722 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59054_59723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__59055_59724 = ((function (G__59052_59721,G__59053_59722,G__59054_59723){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__59052_59721,G__59053_59722,G__59054_59723))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59052_59721,G__59053_59722,G__59054_59723,G__59055_59724) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59052_59721,G__59053_59722,G__59054_59723,G__59055_59724));
var G__59059_59725 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__59060_59726 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59061_59727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__59062_59728 = ((function (G__59059_59725,G__59060_59726,G__59061_59727){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__59059_59725,G__59060_59726,G__59061_59727))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59059_59725,G__59060_59726,G__59061_59727,G__59062_59728) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59059_59725,G__59060_59726,G__59061_59727,G__59062_59728));
var G__59064_59731 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__59065_59732 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59066_59733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__59067_59734 = ((function (G__59064_59731,G__59065_59732,G__59066_59733){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__59064_59731,G__59065_59732,G__59066_59733))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59064_59731,G__59065_59732,G__59066_59733,G__59067_59734) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59064_59731,G__59065_59732,G__59066_59733,G__59067_59734));
var G__59072_59735 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__59073_59736 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59074_59737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__59075_59738 = ((function (G__59072_59735,G__59073_59736,G__59074_59737){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__59072_59735,G__59073_59736,G__59074_59737))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59072_59735,G__59073_59736,G__59074_59737,G__59075_59738) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59072_59735,G__59073_59736,G__59074_59737,G__59075_59738));
var G__59077_59741 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__59078_59742 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59079_59743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__59080_59744 = ((function (G__59077_59741,G__59078_59742,G__59079_59743){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__59077_59741,G__59078_59742,G__59079_59743))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59077_59741,G__59078_59742,G__59079_59743,G__59080_59744) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59077_59741,G__59078_59742,G__59079_59743,G__59080_59744));
var G__59085_59747 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__59086_59748 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59087_59749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__59088_59750 = ((function (G__59085_59747,G__59086_59748,G__59087_59749){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__59085_59747,G__59086_59748,G__59087_59749))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59085_59747,G__59086_59748,G__59087_59749,G__59088_59750) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59085_59747,G__59086_59748,G__59087_59749,G__59088_59750));
var G__59094_59751 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__59095_59752 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59096_59753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__59097_59754 = ((function (G__59094_59751,G__59095_59752,G__59096_59753){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__59094_59751,G__59095_59752,G__59096_59753))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59094_59751,G__59095_59752,G__59096_59753,G__59097_59754) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59094_59751,G__59095_59752,G__59096_59753,G__59097_59754));
var G__59098_59755 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__59099_59756 = ((function (G__59098_59755){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__59098_59755))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59098_59755,G__59099_59756) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59098_59755,G__59099_59756));
var G__59106_59758 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__59107_59759 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59108_59760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__59109_59761 = ((function (G__59106_59758,G__59107_59759,G__59108_59760){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__59106_59758,G__59107_59759,G__59108_59760){
return (function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5739__auto__,G__59106_59758,G__59107_59759,G__59108_59760){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5739__auto__,G__59106_59758,G__59107_59759,G__59108_59760))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__59106_59758,G__59107_59759,G__59108_59760))
,traces);
});})(G__59106_59758,G__59107_59759,G__59108_59760))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59106_59758,G__59107_59759,G__59108_59760,G__59109_59761) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59106_59758,G__59107_59759,G__59108_59760,G__59109_59761));
var G__59114_59763 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__59115_59764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59116_59765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__59117_59766 = ((function (G__59114_59763,G__59115_59764,G__59116_59765){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__59114_59763,G__59115_59764,G__59116_59765))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59114_59763,G__59115_59764,G__59116_59765,G__59117_59766) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59114_59763,G__59115_59764,G__59116_59765,G__59117_59766));
var G__59121_59772 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__59122_59773 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59123_59774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__59124_59775 = ((function (G__59121_59772,G__59122_59773,G__59123_59774){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__59121_59772,G__59122_59773,G__59123_59774))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59121_59772,G__59122_59773,G__59123_59774,G__59124_59775) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59121_59772,G__59122_59773,G__59123_59774,G__59124_59775));
var G__59125_59776 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__59126_59777 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59127_59778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__59128_59779 = ((function (G__59125_59776,G__59126_59777,G__59127_59778){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__59125_59776,G__59126_59777,G__59127_59778))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59125_59776,G__59126_59777,G__59127_59778,G__59128_59779) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59125_59776,G__59126_59777,G__59127_59778,G__59128_59779));
var G__59131_59783 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__59132_59784 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59133_59785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__59134_59786 = ((function (G__59131_59783,G__59132_59784,G__59133_59785){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__59131_59783,G__59132_59784,G__59133_59785))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59131_59783,G__59132_59784,G__59133_59785,G__59134_59786) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59131_59783,G__59132_59784,G__59133_59785,G__59134_59786));
var G__59141_59787 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__59142_59788 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59143_59789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__59144_59790 = ((function (G__59141_59787,G__59142_59788,G__59143_59789){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__59141_59787,G__59142_59788,G__59143_59789))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59141_59787,G__59142_59788,G__59143_59789,G__59144_59790) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59141_59787,G__59142_59788,G__59143_59789,G__59144_59790));
var G__59145_59799 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__59146_59800 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59147_59801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__59148_59802 = ((function (G__59145_59799,G__59146_59800,G__59147_59801){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__59145_59799,G__59146_59800,G__59147_59801))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59145_59799,G__59146_59800,G__59147_59801,G__59148_59802) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59145_59799,G__59146_59800,G__59147_59801,G__59148_59802));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__59153_59811 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__59154_59812 = ((function (G__59153_59811){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__59153_59811))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59153_59811,G__59154_59812) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59153_59811,G__59154_59812));
var G__59156_59813 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__59157_59814 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59158_59815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__59159_59816 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59160_59817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__59161_59818 = ((function (G__59156_59813,G__59157_59814,G__59158_59815,G__59159_59816,G__59160_59817){
return (function (p__59165,_){
var vec__59166 = p__59165;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(1),null);
var G__59169 = (window_width / char_width);
return Math.ceil(G__59169);
});})(G__59156_59813,G__59157_59814,G__59158_59815,G__59159_59816,G__59160_59817))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__59156_59813,G__59157_59814,G__59158_59815,G__59159_59816,G__59160_59817,G__59161_59818) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59156_59813,G__59157_59814,G__59158_59815,G__59159_59816,G__59160_59817,G__59161_59818));
var G__59171_59820 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__59172_59821 = ((function (G__59171_59820){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__59171_59820))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59171_59820,G__59172_59821) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59171_59820,G__59172_59821));
var G__59176_59824 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__59177_59825 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59178_59826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__59179_59827 = ((function (G__59176_59824,G__59177_59825,G__59178_59826){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__59176_59824,G__59177_59825,G__59178_59826))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59176_59824,G__59177_59825,G__59178_59826,G__59179_59827) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59176_59824,G__59177_59825,G__59178_59826,G__59179_59827));
var G__59184_59828 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__59185_59829 = ((function (G__59184_59828){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__59184_59828))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59184_59828,G__59185_59829) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59184_59828,G__59185_59829));
var G__59187_59830 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__59188_59831 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__59189_59832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__59190_59833 = ((function (G__59187_59830,G__59188_59831,G__59189_59832){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__59187_59830,G__59188_59831,G__59189_59832))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__59187_59830,G__59188_59831,G__59189_59832,G__59190_59833) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__59187_59830,G__59188_59831,G__59189_59832,G__59190_59833));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
