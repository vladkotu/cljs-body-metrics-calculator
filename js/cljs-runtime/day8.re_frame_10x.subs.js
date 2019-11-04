goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__57858_58637 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__57859_58638 = ((function (G__57858_58637){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__57858_58637))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57858_58637,G__57859_58638) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57858_58637,G__57859_58638));
var G__57862_58643 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__57863_58644 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57864_58645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57865_58646 = ((function (G__57862_58643,G__57863_58644,G__57864_58645){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__57862_58643,G__57863_58644,G__57864_58645))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57862_58643,G__57863_58644,G__57864_58645,G__57865_58646) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57862_58643,G__57863_58644,G__57864_58645,G__57865_58646));
var G__57866_58648 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__57867_58649 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57868_58650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__57869_58651 = ((function (G__57866_58648,G__57867_58649,G__57868_58650){
return (function (panel_width_PERCENT_,p__57870){
var vec__57871 = p__57870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(1),null);
return (((function (){var G__57876 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__57876);
})() * n) / 100.0);
});})(G__57866_58648,G__57867_58649,G__57868_58650))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57866_58648,G__57867_58649,G__57868_58650,G__57869_58651) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57866_58648,G__57867_58649,G__57868_58650,G__57869_58651));
var G__57877_58658 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__57878_58659 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57879_58660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57880_58661 = ((function (G__57877_58658,G__57878_58659,G__57879_58660){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__57877_58658,G__57878_58659,G__57879_58660))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57877_58658,G__57878_58659,G__57879_58660,G__57880_58661) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57877_58658,G__57878_58659,G__57879_58660,G__57880_58661));
var G__57882_58666 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__57883_58667 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57884_58668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__57885_58669 = ((function (G__57882_58666,G__57883_58667,G__57884_58668){
return (function (width,p__57887){
var vec__57888 = p__57887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57888,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57888,(1),null);
return ((function (){var G__57891 = (width / n);
return Math.ceil(G__57891);
})() * n);
});})(G__57882_58666,G__57883_58667,G__57884_58668))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57882_58666,G__57883_58667,G__57884_58668,G__57885_58669) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57882_58666,G__57883_58667,G__57884_58668,G__57885_58669));
var G__57892_58673 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__57893_58674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57894_58675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57895_58676 = ((function (G__57892_58673,G__57893_58674,G__57894_58675){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__57892_58673,G__57893_58674,G__57894_58675))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57892_58673,G__57893_58674,G__57894_58675,G__57895_58676) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57892_58673,G__57893_58674,G__57894_58675,G__57895_58676));
var G__57897_58682 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__57898_58683 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57899_58684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57900_58685 = ((function (G__57897_58682,G__57898_58683,G__57899_58684){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__57897_58682,G__57898_58683,G__57899_58684))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57897_58682,G__57898_58683,G__57899_58684,G__57900_58685) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57897_58682,G__57898_58683,G__57899_58684,G__57900_58685));
var G__57902_58686 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__57903_58687 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57904_58688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57905_58689 = ((function (G__57902_58686,G__57903_58687,G__57904_58688){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__57902_58686,G__57903_58687,G__57904_58688))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57902_58686,G__57903_58687,G__57904_58688,G__57905_58689) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57902_58686,G__57903_58687,G__57904_58688,G__57905_58689));
var G__57906_58690 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__57907_58691 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57908_58692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57909_58693 = ((function (G__57906_58690,G__57907_58691,G__57908_58692){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__57906_58690,G__57907_58691,G__57908_58692))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57906_58690,G__57907_58691,G__57908_58692,G__57909_58693) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57906_58690,G__57907_58691,G__57908_58692,G__57909_58693));
var G__57910_58698 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__57911_58699 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57912_58700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57913_58701 = ((function (G__57910_58698,G__57911_58699,G__57912_58700){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__57910_58698,G__57911_58699,G__57912_58700))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57910_58698,G__57911_58699,G__57912_58700,G__57913_58701) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57910_58698,G__57911_58699,G__57912_58700,G__57913_58701));
var G__57914_58702 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__57915_58703 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57916_58704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57917_58705 = ((function (G__57914_58702,G__57915_58703,G__57916_58704){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__57914_58702,G__57915_58703,G__57916_58704))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57914_58702,G__57915_58703,G__57916_58704,G__57917_58705) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57914_58702,G__57915_58703,G__57916_58704,G__57917_58705));
var G__57918_58706 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__57919_58707 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57920_58708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57921_58709 = ((function (G__57918_58706,G__57919_58707,G__57920_58708){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__57918_58706,G__57919_58707,G__57920_58708))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57918_58706,G__57919_58707,G__57920_58708,G__57921_58709) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57918_58706,G__57919_58707,G__57920_58708,G__57921_58709));
var G__57926_58712 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__57927_58713 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57928_58714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__57929_58715 = ((function (G__57926_58712,G__57927_58713,G__57928_58714){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__57926_58712,G__57927_58713,G__57928_58714))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57926_58712,G__57927_58713,G__57928_58714,G__57929_58715) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57926_58712,G__57927_58713,G__57928_58714,G__57929_58715));
var G__57930_58716 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__57931_58717 = ((function (G__57930_58716){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__57930_58716))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57930_58716,G__57931_58717) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57930_58716,G__57931_58717));
var G__57933_58722 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__57934_58723 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57935_58724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__57936_58725 = ((function (G__57933_58722,G__57934_58723,G__57935_58724){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__57933_58722,G__57934_58723,G__57935_58724))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57933_58722,G__57934_58723,G__57935_58724,G__57936_58725) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57933_58722,G__57934_58723,G__57935_58724,G__57936_58725));
var G__57937_58728 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__57938_58729 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57939_58730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__57940_58731 = ((function (G__57937_58728,G__57938_58729,G__57939_58730){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__57937_58728,G__57938_58729,G__57939_58730))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57937_58728,G__57938_58729,G__57939_58730,G__57940_58731) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57937_58728,G__57938_58729,G__57939_58730,G__57940_58731));
var G__57945_58732 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__57946_58733 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57947_58734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__57948_58735 = ((function (G__57945_58732,G__57946_58733,G__57947_58734){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__57945_58732,G__57946_58733,G__57947_58734){
return (function (p1__57944_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__57944_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__57944_SHARP_));
});})(G__57945_58732,G__57946_58733,G__57947_58734))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__57945_58732,G__57946_58733,G__57947_58734))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57945_58732,G__57946_58733,G__57947_58734,G__57948_58735) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57945_58732,G__57946_58733,G__57947_58734,G__57948_58735));
var G__57949_58741 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__57950_58742 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57951_58743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__57952_58744 = ((function (G__57949_58741,G__57950_58742,G__57951_58743){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__57949_58741,G__57950_58742,G__57951_58743))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57949_58741,G__57950_58742,G__57951_58743,G__57952_58744) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57949_58741,G__57950_58742,G__57951_58743,G__57952_58744));
var G__57954_58750 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__57955_58751 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57956_58752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__57957_58753 = ((function (G__57954_58750,G__57955_58751,G__57956_58752){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__57954_58750,G__57955_58751,G__57956_58752))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57954_58750,G__57955_58751,G__57956_58752,G__57957_58753) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57954_58750,G__57955_58751,G__57956_58752,G__57957_58753));
var G__57958_58754 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__57959_58755 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57960_58756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__57961_58757 = ((function (G__57958_58754,G__57959_58755,G__57960_58756){
return (function (expansions,p__57962){
var vec__57963 = p__57962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__57958_58754,G__57959_58755,G__57960_58756))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57958_58754,G__57959_58755,G__57960_58756,G__57961_58757) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57958_58754,G__57959_58755,G__57960_58756,G__57961_58757));
var G__57968_58762 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__57969_58763 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__57970_58764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__57971_58765 = ((function (G__57968_58762,G__57969_58763,G__57970_58764){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__57968_58762,G__57969_58763,G__57970_58764))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57968_58762,G__57969_58763,G__57970_58764,G__57971_58765) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57968_58762,G__57969_58763,G__57970_58764,G__57971_58765));
var G__57976_58771 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__57977_58772 = ((function (G__57976_58771){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__57976_58771))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57976_58771,G__57977_58772) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57976_58771,G__57977_58772));
var G__57979_58775 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__57981_58776 = ((function (G__57979_58775){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__57979_58775))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57979_58775,G__57981_58776) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57979_58775,G__57981_58776));
var G__57982_58781 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__57983_58782 = ((function (G__57982_58781){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__57982_58781))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57982_58781,G__57983_58782) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57982_58781,G__57983_58782));
var G__57987_58784 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__57988_58785 = ((function (G__57987_58784){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__57987_58784))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57987_58784,G__57988_58785) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57987_58784,G__57988_58785));
var G__57989_58790 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__57990_58791 = ((function (G__57989_58790){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__57989_58790))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__57989_58790,G__57990_58791) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57989_58790,G__57990_58791));
var G__57998_58794 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__57999_58795 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58000_58796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__58001_58797 = ((function (G__57998_58794,G__57999_58795,G__58000_58796){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__57998_58794,G__57999_58795,G__58000_58796))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__57998_58794,G__57999_58795,G__58000_58796,G__58001_58797) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__57998_58794,G__57999_58795,G__58000_58796,G__58001_58797));
var G__58006_58803 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__58007_58804 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58008_58805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58009_58806 = ((function (G__58006_58803,G__58007_58804,G__58008_58805){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__58006_58803,G__58007_58804,G__58008_58805))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58006_58803,G__58007_58804,G__58008_58805,G__58009_58806) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58006_58803,G__58007_58804,G__58008_58805,G__58009_58806));
var G__58012_58810 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__58013_58811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58014_58812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58015_58813 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58016_58814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__58017_58815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58018_58816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__58019_58817 = ((function (G__58012_58810,G__58013_58811,G__58014_58812,G__58015_58813,G__58016_58814,G__58017_58815,G__58018_58816){
return (function (p__58023,_){
var vec__58024 = p__58023;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58024,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58024,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58024,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__58012_58810,G__58013_58811,G__58014_58812,G__58015_58813,G__58016_58814,G__58017_58815,G__58018_58816))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__58012_58810,G__58013_58811,G__58014_58812,G__58015_58813,G__58016_58814,G__58017_58815,G__58018_58816,G__58019_58817) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58012_58810,G__58013_58811,G__58014_58812,G__58015_58813,G__58016_58814,G__58017_58815,G__58018_58816,G__58019_58817));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__58028,_){
var vec__58030 = p__58028;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58030,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58030,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__58030,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__58030,traces,filtered_views))
),traces);
});
var G__58033_58831 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__58034_58832 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58035_58833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58036_58834 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58037_58835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__58038_58836 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58033_58831,G__58034_58832,G__58035_58833,G__58036_58834,G__58037_58835,G__58038_58836) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58033_58831,G__58034_58832,G__58035_58833,G__58036_58834,G__58037_58835,G__58038_58836));
var G__58039_58837 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__58040_58838 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58041_58839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__58042_58840 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58043_58841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__58044_58842 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58039_58837,G__58040_58838,G__58041_58839,G__58042_58840,G__58043_58841,G__58044_58842) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58039_58837,G__58040_58838,G__58041_58839,G__58042_58840,G__58043_58841,G__58044_58842));
var G__58045_58844 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__58046_58845 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58047_58846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__58048_58847 = ((function (G__58045_58844,G__58046_58845,G__58047_58846){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__58045_58844,G__58046_58845,G__58047_58846))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58045_58844,G__58046_58845,G__58047_58846,G__58048_58847) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58045_58844,G__58046_58845,G__58047_58846,G__58048_58847));
var G__58049_58849 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__58050_58850 = ((function (G__58049_58849){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__58049_58849))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58049_58849,G__58050_58850) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58049_58849,G__58050_58850));
var G__58051_58851 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__58052_58852 = ((function (G__58051_58851){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58051_58851))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58051_58851,G__58052_58852) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58051_58851,G__58052_58852));
var G__58053_58853 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__58054_58854 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58055_58855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__58056_58856 = ((function (G__58053_58853,G__58054_58854,G__58055_58855){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__58053_58853,G__58054_58854,G__58055_58855))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58053_58853,G__58054_58854,G__58055_58855,G__58056_58856) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58053_58853,G__58054_58854,G__58055_58855,G__58056_58856));
var G__58057_58857 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__58058_58858 = ((function (G__58057_58857){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58057_58857))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58057_58857,G__58058_58858) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58057_58857,G__58058_58858));
var G__58059_58859 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__58060_58860 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58061_58861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58062_58862 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58063_58863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58064_58864 = ((function (G__58059_58859,G__58060_58860,G__58061_58861,G__58062_58862,G__58063_58863){
return (function (p__58066,_){
var vec__58067 = p__58066;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__58059_58859,G__58060_58860,G__58061_58861,G__58062_58862,G__58063_58863))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58059_58859,G__58060_58860,G__58061_58861,G__58062_58862,G__58063_58863,G__58064_58864) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58059_58859,G__58060_58860,G__58061_58861,G__58062_58862,G__58063_58863,G__58064_58864));
var G__58070_58865 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__58071_58866 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58072_58867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58073_58868 = ((function (G__58070_58865,G__58071_58866,G__58072_58867){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__58070_58865,G__58071_58866,G__58072_58867))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58070_58865,G__58071_58866,G__58072_58867,G__58073_58868) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58070_58865,G__58071_58866,G__58072_58867,G__58073_58868));
var G__58074_58873 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__58075_58874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58076_58875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58077_58876 = ((function (G__58074_58873,G__58075_58874,G__58076_58875){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__58074_58873,G__58075_58874,G__58076_58875))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58074_58873,G__58075_58874,G__58076_58875,G__58077_58876) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58074_58873,G__58075_58874,G__58076_58875,G__58077_58876));
var G__58078_58877 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__58079_58878 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58080_58879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__58081_58880 = ((function (G__58078_58877,G__58079_58878,G__58080_58879){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__58078_58877,G__58079_58878,G__58080_58879))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58078_58877,G__58079_58878,G__58080_58879,G__58081_58880) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58078_58877,G__58079_58878,G__58080_58879,G__58081_58880));
var G__58082_58881 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__58083_58882 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58084_58883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58085_58884 = ((function (G__58082_58881,G__58083_58882,G__58084_58883){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__58082_58881,G__58083_58882,G__58084_58883))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58082_58881,G__58083_58882,G__58084_58883,G__58085_58884) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58082_58881,G__58083_58882,G__58084_58883,G__58085_58884));
var G__58087_58885 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__58088_58886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58089_58887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58090_58888 = ((function (G__58087_58885,G__58088_58886,G__58089_58887){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58087_58885,G__58088_58886,G__58089_58887))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58087_58885,G__58088_58886,G__58089_58887,G__58090_58888) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58087_58885,G__58088_58886,G__58089_58887,G__58090_58888));
var G__58091_58893 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__58092_58894 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58093_58895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58094_58896 = ((function (G__58091_58893,G__58092_58894,G__58093_58895){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__58091_58893,G__58092_58894,G__58093_58895))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58091_58893,G__58092_58894,G__58093_58895,G__58094_58896) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58091_58893,G__58092_58894,G__58093_58895,G__58094_58896));
var G__58095_58902 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__58096_58903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58097_58904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58098_58905 = ((function (G__58095_58902,G__58096_58903,G__58097_58904){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58095_58902,G__58096_58903,G__58097_58904))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58095_58902,G__58096_58903,G__58097_58904,G__58098_58905) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58095_58902,G__58096_58903,G__58097_58904,G__58098_58905));
var G__58099_58906 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__58100_58907 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58101_58908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58102_58909 = ((function (G__58099_58906,G__58100_58907,G__58101_58908){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__58099_58906,G__58100_58907,G__58101_58908))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58099_58906,G__58100_58907,G__58101_58908,G__58102_58909) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58099_58906,G__58100_58907,G__58101_58908,G__58102_58909));
var G__58103_58910 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__58104_58911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58105_58912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__58106_58913 = ((function (G__58103_58910,G__58104_58911,G__58105_58912){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__58103_58910,G__58104_58911,G__58105_58912))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58103_58910,G__58104_58911,G__58105_58912,G__58106_58913) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58103_58910,G__58104_58911,G__58105_58912,G__58106_58913));
var G__58108_58914 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__58109_58915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58110_58916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__58111_58917 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58112_58918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58113_58919 = ((function (G__58108_58914,G__58109_58915,G__58110_58916,G__58111_58917,G__58112_58918){
return (function (p__58114){
var vec__58115 = p__58114;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58115,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58115,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__58108_58914,G__58109_58915,G__58110_58916,G__58111_58917,G__58112_58918))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58108_58914,G__58109_58915,G__58110_58916,G__58111_58917,G__58112_58918,G__58113_58919) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58108_58914,G__58109_58915,G__58110_58916,G__58111_58917,G__58112_58918,G__58113_58919));
var G__58118_58924 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__58119_58925 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58120_58926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__58121_58927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58122_58928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__58123_58929 = ((function (G__58118_58924,G__58119_58925,G__58120_58926,G__58121_58927,G__58122_58928){
return (function (p__58124){
var vec__58125 = p__58124;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58125,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58125,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__58118_58924,G__58119_58925,G__58120_58926,G__58121_58927,G__58122_58928))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58118_58924,G__58119_58925,G__58120_58926,G__58121_58927,G__58122_58928,G__58123_58929) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58118_58924,G__58119_58925,G__58120_58926,G__58121_58927,G__58122_58928,G__58123_58929));
var G__58128_58933 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__58129_58934 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58130_58935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58131_58936 = ((function (G__58128_58933,G__58129_58934,G__58130_58935){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__58128_58933,G__58129_58934,G__58130_58935))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58128_58933,G__58129_58934,G__58130_58935,G__58131_58936) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58128_58933,G__58129_58934,G__58130_58935,G__58131_58936));
var G__58135_58938 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__58136_58939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58137_58940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58138_58941 = ((function (G__58135_58938,G__58136_58939,G__58137_58940){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__58135_58938,G__58136_58939,G__58137_58940){
return (function (p1__58134_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__58134_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__58134_SHARP_)));
});})(G__58135_58938,G__58136_58939,G__58137_58940))
,traces);
});})(G__58135_58938,G__58136_58939,G__58137_58940))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58135_58938,G__58136_58939,G__58137_58940,G__58138_58941) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58135_58938,G__58136_58939,G__58137_58940,G__58138_58941));
var G__58139_58946 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__58140_58947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58141_58948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__58142_58949 = ((function (G__58139_58946,G__58140_58947,G__58141_58948){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__58139_58946,G__58140_58947,G__58141_58948))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58139_58946,G__58140_58947,G__58141_58948,G__58142_58949) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58139_58946,G__58140_58947,G__58141_58948,G__58142_58949));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__58148 = arguments.length;
switch (G__58148) {
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
var len__4730__auto___58952 = arguments.length;
var i__4731__auto___58953 = (0);
while(true){
if((i__4731__auto___58953 < len__4730__auto___58952)){
args_arr__4751__auto__.push((arguments[i__4731__auto___58953]));

var G__58954 = (i__4731__auto___58953 + (1));
i__4731__auto___58953 = G__58954;
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq58145){
var G__58146 = cljs.core.first(seq58145);
var seq58145__$1 = cljs.core.next(seq58145);
var G__58147 = cljs.core.first(seq58145__$1);
var seq58145__$2 = cljs.core.next(seq58145__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58146,G__58147,seq58145__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__58149_58958 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__58150_58959 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58151_58960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__58152_58961 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58153_58962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58154_58963 = ((function (G__58149_58958,G__58150_58959,G__58151_58960,G__58152_58961,G__58153_58962){
return (function (p__58155,p__58156){
var vec__58157 = p__58155;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58157,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58157,(1),null);
var vec__58160 = p__58156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58160,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58160,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__58163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__58149_58958,G__58150_58959,G__58151_58960,G__58152_58961,G__58153_58962))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58149_58958,G__58150_58959,G__58151_58960,G__58152_58961,G__58153_58962,G__58154_58963) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58149_58958,G__58150_58959,G__58151_58960,G__58152_58961,G__58153_58962,G__58154_58963));
var G__58171_58978 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__58172_58979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58173_58980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58174_58981 = ((function (G__58171_58978,G__58172_58979,G__58173_58980){
return (function (match){
var map__58175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__58171_58978,G__58172_58979,G__58173_58980))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58171_58978,G__58172_58979,G__58173_58980,G__58174_58981) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58171_58978,G__58172_58979,G__58173_58980,G__58174_58981));
var G__58177_58996 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__58178_58997 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58179_58998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58180_58999 = ((function (G__58177_58996,G__58178_58997,G__58179_58998){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__58177_58996,G__58178_58997,G__58179_58998))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58177_58996,G__58178_58997,G__58179_58998,G__58180_58999) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58177_58996,G__58178_58997,G__58179_58998,G__58180_58999));
var G__58181_59006 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__58182_59007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58183_59008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58184_59009 = ((function (G__58181_59006,G__58182_59007,G__58183_59008){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__58181_59006,G__58182_59007,G__58183_59008))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58181_59006,G__58182_59007,G__58183_59008,G__58184_59009) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58181_59006,G__58182_59007,G__58183_59008,G__58184_59009));
var G__58185_59014 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__58186_59015 = ((function (G__58185_59014){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58185_59014))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58185_59014,G__58186_59015) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58185_59014,G__58186_59015));
var G__58187_59017 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__58188_59018 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58189_59019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58190_59020 = ((function (G__58187_59017,G__58188_59018,G__58189_59019){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__58187_59017,G__58188_59018,G__58189_59019))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58187_59017,G__58188_59018,G__58189_59019,G__58190_59020) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58187_59017,G__58188_59018,G__58189_59019,G__58190_59020));
var G__58191_59025 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__58192_59026 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58193_59027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58194_59028 = ((function (G__58191_59025,G__58192_59026,G__58193_59027){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__58191_59025,G__58192_59026,G__58193_59027))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58191_59025,G__58192_59026,G__58193_59027,G__58194_59028) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58191_59025,G__58192_59026,G__58193_59027,G__58194_59028));
var G__58199_59033 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__58200_59034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58201_59035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__58202_59036 = ((function (G__58199_59033,G__58200_59034,G__58201_59035){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__58199_59033,G__58200_59034,G__58201_59035))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58199_59033,G__58200_59034,G__58201_59035,G__58202_59036) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58199_59033,G__58200_59034,G__58201_59035,G__58202_59036));
var G__58203_59042 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__58204_59043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58205_59044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__58206_59045 = ((function (G__58203_59042,G__58204_59043,G__58205_59044){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__58203_59042,G__58204_59043,G__58205_59044))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58203_59042,G__58204_59043,G__58205_59044,G__58206_59045) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58203_59042,G__58204_59043,G__58205_59044,G__58206_59045));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__58207_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__58207_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58215){
return cljs.core.coll_QMARK_(G__58215);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58218){
return cljs.core.map_QMARK_(G__58218);
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__58218){
return cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__58218){
return ((cljs.core.map_QMARK_(G__58218)) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__58218,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58359){
return cljs.core.coll_QMARK_(G__58359);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__58364 = sub_type;
var G__58364__$1 = (((G__58364 instanceof cljs.core.Keyword))?G__58364.fqn:null);
switch (G__58364__$1) {
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
var G__59066 = (exp - (1));
var G__59067 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__59068 = cljs.core.rest(order__$1);
exp = G__59066;
total = G__59067;
order__$1 = G__59068;
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
var G__58370 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__58370__$1 = (((G__58370 instanceof cljs.core.Keyword))?G__58370.fqn:null);
switch (G__58370__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__58376,p__58377){
var vec__58378 = p__58376;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(1),null);
var vec__58381 = p__58377;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58381,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__58378,sub_info,sub_state,vec__58381,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__58378,sub_info,sub_state,vec__58381,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__58378,sub_info,sub_state,vec__58381,subscription){
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
});})(remove_fn,vec__58378,sub_info,sub_state,vec__58381,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__58408_59071 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__58409_59072 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58410_59073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__58411_59074 = ((function (G__58408_59071,G__58409_59072,G__58410_59073){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__58408_59071,G__58409_59072,G__58410_59073))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58408_59071,G__58409_59072,G__58410_59073,G__58411_59074) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58408_59071,G__58409_59072,G__58410_59073,G__58411_59074));
var G__58413_59075 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__58414_59076 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58415_59077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__58416_59078 = ((function (G__58413_59075,G__58414_59076,G__58415_59077){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__58413_59075,G__58414_59076,G__58415_59077))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58413_59075,G__58414_59076,G__58415_59077,G__58416_59078) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58413_59075,G__58414_59076,G__58415_59077,G__58416_59078));
var G__58420_59079 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__58421_59080 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58422_59081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__58423_59082 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58424_59083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__58425_59084 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58420_59079,G__58421_59080,G__58422_59081,G__58423_59082,G__58424_59083,G__58425_59084) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58420_59079,G__58421_59080,G__58422_59081,G__58423_59082,G__58424_59083,G__58425_59084));
var G__58430_59085 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__58431_59086 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58432_59087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__58433_59088 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58434_59089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__58435_59090 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58430_59085,G__58431_59086,G__58432_59087,G__58433_59088,G__58434_59089,G__58435_59090) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58430_59085,G__58431_59086,G__58432_59087,G__58433_59088,G__58434_59089,G__58435_59090));
var G__58436_59092 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__58437_59093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58438_59094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__58439_59095 = ((function (G__58436_59092,G__58437_59093,G__58438_59094){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__58436_59092,G__58437_59093,G__58438_59094))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58436_59092,G__58437_59093,G__58438_59094,G__58439_59095) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58436_59092,G__58437_59093,G__58438_59094,G__58439_59095));
var G__58445_59102 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__58446_59103 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58447_59104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__58448_59105 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58449_59106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__58450_59107 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58451_59108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__58452_59109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58453_59110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__58454_59111 = ((function (G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110){
return (function (p__58457){
var vec__58461 = p__58457;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(3),null);
var compare_fn = ((function (vec__58461,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__58461,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110))
;
var G__58464 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__58464__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__58464):G__58464);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__58464,G__58464__$1,compare_fn,vec__58461,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110){
return (function (p__58465){
var map__58466 = p__58465;
var map__58466__$1 = (((((!((map__58466 == null))))?(((((map__58466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58466):map__58466);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4131__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__58464,G__58464__$1,compare_fn,vec__58461,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110))
,G__58464__$1);
} else {
return G__58464__$1;
}
});})(G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110,G__58454_59111) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58445_59102,G__58446_59103,G__58447_59104,G__58448_59105,G__58449_59106,G__58450_59107,G__58451_59108,G__58452_59109,G__58453_59110,G__58454_59111));
var G__58471_59131 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__58472_59132 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58473_59133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__58474_59134 = ((function (G__58471_59131,G__58472_59132,G__58473_59133){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__58471_59131,G__58472_59132,G__58473_59133))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58471_59131,G__58472_59132,G__58473_59133,G__58474_59134) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58471_59131,G__58472_59132,G__58473_59133,G__58474_59134));
var G__58476_59141 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__58477_59142 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58478_59143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__58479_59144 = ((function (G__58476_59141,G__58477_59142,G__58478_59143){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__58476_59141,G__58477_59142,G__58478_59143))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58476_59141,G__58477_59142,G__58478_59143,G__58479_59144) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58476_59141,G__58477_59142,G__58478_59143,G__58479_59144));
var G__58481_59145 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__58482_59146 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58483_59147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__58484_59148 = ((function (G__58481_59145,G__58482_59146,G__58483_59147){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__58481_59145,G__58482_59146,G__58483_59147))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58481_59145,G__58482_59146,G__58483_59147,G__58484_59148) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58481_59145,G__58482_59146,G__58483_59147,G__58484_59148));
var G__58486_59155 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__58487_59156 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58488_59157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__58489_59158 = ((function (G__58486_59155,G__58487_59156,G__58488_59157){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__58486_59155,G__58487_59156,G__58488_59157))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58486_59155,G__58487_59156,G__58488_59157,G__58489_59158) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58486_59155,G__58487_59156,G__58488_59157,G__58489_59158));
var G__58494_59161 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__58495_59162 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58496_59163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__58497_59164 = ((function (G__58494_59161,G__58495_59162,G__58496_59163){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__58494_59161,G__58495_59162,G__58496_59163))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58494_59161,G__58495_59162,G__58496_59163,G__58497_59164) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58494_59161,G__58495_59162,G__58496_59163,G__58497_59164));
var G__58498_59165 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__58499_59166 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58500_59167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__58501_59168 = ((function (G__58498_59165,G__58499_59166,G__58500_59167){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__58498_59165,G__58499_59166,G__58500_59167))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58498_59165,G__58499_59166,G__58500_59167,G__58501_59168) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58498_59165,G__58499_59166,G__58500_59167,G__58501_59168));
var G__58502_59217 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__58503_59218 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58504_59219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__58505_59220 = ((function (G__58502_59217,G__58503_59218,G__58504_59219){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__58502_59217,G__58503_59218,G__58504_59219))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58502_59217,G__58503_59218,G__58504_59219,G__58505_59220) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58502_59217,G__58503_59218,G__58504_59219,G__58505_59220));
var G__58509_59225 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__58510_59226 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58511_59227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__58512_59228 = ((function (G__58509_59225,G__58510_59226,G__58511_59227){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__58509_59225,G__58510_59226,G__58511_59227))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58509_59225,G__58510_59226,G__58511_59227,G__58512_59228) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58509_59225,G__58510_59226,G__58511_59227,G__58512_59228));
var G__58514_59231 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__58515_59232 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58516_59233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__58517_59234 = ((function (G__58514_59231,G__58515_59232,G__58516_59233){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__58514_59231,G__58515_59232,G__58516_59233))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58514_59231,G__58515_59232,G__58516_59233,G__58517_59234) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58514_59231,G__58515_59232,G__58516_59233,G__58517_59234));
var G__58518_59242 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__58519_59243 = ((function (G__58518_59242){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58518_59242))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58518_59242,G__58519_59243) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58518_59242,G__58519_59243));
var G__58523_59244 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__58524_59245 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58525_59246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__58526_59247 = ((function (G__58523_59244,G__58524_59245,G__58525_59246){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__58523_59244,G__58524_59245,G__58525_59246){
return (function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5739__auto__,G__58523_59244,G__58524_59245,G__58525_59246){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5739__auto__,G__58523_59244,G__58524_59245,G__58525_59246))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__58523_59244,G__58524_59245,G__58525_59246))
,traces);
});})(G__58523_59244,G__58524_59245,G__58525_59246))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58523_59244,G__58524_59245,G__58525_59246,G__58526_59247) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58523_59244,G__58524_59245,G__58525_59246,G__58526_59247));
var G__58527_59250 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__58528_59251 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58529_59252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__58530_59253 = ((function (G__58527_59250,G__58528_59251,G__58529_59252){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__58527_59250,G__58528_59251,G__58529_59252))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58527_59250,G__58528_59251,G__58529_59252,G__58530_59253) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58527_59250,G__58528_59251,G__58529_59252,G__58530_59253));
var G__58531_59256 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__58532_59257 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58533_59258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__58534_59259 = ((function (G__58531_59256,G__58532_59257,G__58533_59258){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__58531_59256,G__58532_59257,G__58533_59258))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58531_59256,G__58532_59257,G__58533_59258,G__58534_59259) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58531_59256,G__58532_59257,G__58533_59258,G__58534_59259));
var G__58538_59263 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__58539_59264 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58540_59265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__58541_59266 = ((function (G__58538_59263,G__58539_59264,G__58540_59265){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__58538_59263,G__58539_59264,G__58540_59265))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58538_59263,G__58539_59264,G__58540_59265,G__58541_59266) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58538_59263,G__58539_59264,G__58540_59265,G__58541_59266));
var G__58546_59274 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__58547_59275 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58548_59276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__58549_59277 = ((function (G__58546_59274,G__58547_59275,G__58548_59276){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__58546_59274,G__58547_59275,G__58548_59276))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58546_59274,G__58547_59275,G__58548_59276,G__58549_59277) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58546_59274,G__58547_59275,G__58548_59276,G__58549_59277));
var G__58553_59278 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__58554_59279 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58555_59280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__58556_59281 = ((function (G__58553_59278,G__58554_59279,G__58555_59280){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__58553_59278,G__58554_59279,G__58555_59280))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58553_59278,G__58554_59279,G__58555_59280,G__58556_59281) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58553_59278,G__58554_59279,G__58555_59280,G__58556_59281));
var G__58563_59283 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__58564_59284 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58565_59285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__58566_59286 = ((function (G__58563_59283,G__58564_59284,G__58565_59285){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__58563_59283,G__58564_59284,G__58565_59285))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58563_59283,G__58564_59284,G__58565_59285,G__58566_59286) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58563_59283,G__58564_59284,G__58565_59285,G__58566_59286));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__58584_59293 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__58585_59294 = ((function (G__58584_59293){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__58584_59293))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58584_59293,G__58585_59294) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58584_59293,G__58585_59294));
var G__58589_59296 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__58590_59297 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58591_59298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__58592_59299 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58593_59300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__58594_59301 = ((function (G__58589_59296,G__58590_59297,G__58591_59298,G__58592_59299,G__58593_59300){
return (function (p__58599,_){
var vec__58603 = p__58599;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(1),null);
var G__58607 = (window_width / char_width);
return Math.ceil(G__58607);
});})(G__58589_59296,G__58590_59297,G__58591_59298,G__58592_59299,G__58593_59300))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__58589_59296,G__58590_59297,G__58591_59298,G__58592_59299,G__58593_59300,G__58594_59301) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58589_59296,G__58590_59297,G__58591_59298,G__58592_59299,G__58593_59300,G__58594_59301));
var G__58616_59311 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__58617_59312 = ((function (G__58616_59311){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58616_59311))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58616_59311,G__58617_59312) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58616_59311,G__58617_59312));
var G__58620_59314 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__58621_59315 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58622_59316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__58623_59317 = ((function (G__58620_59314,G__58621_59315,G__58622_59316){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__58620_59314,G__58621_59315,G__58622_59316))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58620_59314,G__58621_59315,G__58622_59316,G__58623_59317) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58620_59314,G__58621_59315,G__58622_59316,G__58623_59317));
var G__58628_59318 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__58629_59319 = ((function (G__58628_59318){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__58628_59318))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58628_59318,G__58629_59319) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58628_59318,G__58629_59319));
var G__58631_59320 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__58632_59321 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__58633_59322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__58634_59323 = ((function (G__58631_59320,G__58632_59321,G__58633_59322){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__58631_59320,G__58632_59321,G__58633_59322))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__58631_59320,G__58632_59321,G__58633_59322,G__58634_59323) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__58631_59320,G__58632_59321,G__58633_59322,G__58634_59323));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
