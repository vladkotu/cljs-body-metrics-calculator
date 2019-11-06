goog.provide('day8.re_frame_10x.view.event');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.view.components');
goog.require('day8.re_frame_10x.common_styles');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('zprint.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.utils.pretty_print_condensed');
goog.require('day8.re_frame_10x.utils.utils');
day8.re_frame_10x.view.event.code_border = ["1px solid ",day8.re_frame_10x.common_styles.white_background_border_color].join('');
day8.re_frame_10x.view.event.event_styles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-panel",".event-panel",1576114265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"19px 19px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bold",".bold",-1441945014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section",".event-section",174912480)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--header",".event-section--header",1732674574),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.navbar_tint_lighter,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.navbar_text_color,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.common_styles.gs_19,new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.common_styles.gs_12], null)], null),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--data",".event-section--data",477435343),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.common_styles.gs_12,day8.re_frame_10x.common_styles.expansion_button_horizontal_padding) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.px_.call(null,day8.re_frame_10x.common_styles.gs_12,day8.re_frame_10x.common_styles.expansion_button_horizontal_padding)),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden"], null)], null)], null);
day8.re_frame_10x.view.event.no_event_instructions = (function day8$re_frame_10x$view$event$no_event_instructions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"Code trace is not available for this event"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Instructions for enabling Event Code Tracing",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/EventCodeTracing.md"], null)], null)], null);
});
day8.re_frame_10x.view.event.code_header = (function day8$re_frame_10x$view$event$code_header(code_execution_id,line){
var open_QMARK__path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__57607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57607) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57607));
})()),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null);
var max_column_width = cljs.core.deref((function (){var G__57608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57608) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57608));
})());
var trace_id = code_execution_id;
var open_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__57609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57609) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57609));
})()),open_QMARK__path);
var line_str = day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(max_column_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(line)], 0));
var _EQ__GT_str = "=> ";
var result_length = ((max_column_width - cljs.core.count(_EQ__GT_str)) - cljs.core.count(line_str));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__content",new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 6px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"17px",new cljs.core.Keyword(null,"height","height",1025178622),"17px",new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#b0b2b4"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK__path,max_column_width,trace_id,open_QMARK_,line_str,_EQ__GT_str,result_length){
return (function (event){
var G__57610_57651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),open_QMARK__path,cljs.core.not(open_QMARK_)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57610_57651) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57610_57651));

return null;
});})(open_QMARK__path,max_column_width,trace_id,open_QMARK_,line_str,_EQ__GT_str,result_length))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow","span.arrow",1996640986),(cljs.core.truth_(open_QMARK_)?"\u25BC":"\u25B6")], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),line_str], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__result",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),_EQ__GT_str,(((result_length > (0)))?day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(result_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line)], 0)):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__button",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, an expression that will return this form's value in the cljs repl",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK__path,max_column_width,trace_id,open_QMARK_,line_str,_EQ__GT_str,result_length){
return (function (event){
day8.re_frame_10x.utils.utils.copy_to_clipboard(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x","traced-result","day8.re-frame-10x/traced-result",1860750250,null),(new cljs.core.List(null,trace_id,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line),null,(1),null)),(2),null)),(3),null))], 0)));

var G__57612_57652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"start","start",-355208981)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57612_57652) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57612_57652));

return null;
});})(open_QMARK__path,max_column_width,trace_id,open_QMARK_,line_str,_EQ__GT_str,result_length))
], null),new cljs.core.Keyword(null,"child","child",623967545),"repl"], null)], null)], null);
});
day8.re_frame_10x.view.event.code_block = (function day8$re_frame_10x$view$event$code_block(code_execution_id,line){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-1px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 3px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__57613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57613) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57613));
})()),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null)], null)], null);
});
/**
 * Try and find the bounds of the form we are searching for. Uses some heuristics to
 *   try and avoid matching partial forms, e.g. 'default-|weeks| for the form 'weeks.
 */
day8.re_frame_10x.view.event.find_bounds = (function day8$re_frame_10x$view$event$find_bounds(form_str,search_str){
var re = cljs.core.re_pattern(["(\\s|\\(|\\[|\\{)","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(search_str)),")"].join(''));
var result = re.exec(form_str);
if((!((result == null)))){
var index = result.index;
var pre_match = (result[(1)]);
var matched_form = (result[(2)]);
var index__$1 = (index + cljs.core.count(pre_match));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(index__$1 + cljs.core.count(matched_form))], null);
} else {
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(form_str,search_str);
var length = (((((!((search_str == null)))) && ((!((start == null))))))?cljs.core.count(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0))):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + length)], null);
}
});
day8.re_frame_10x.view.event.event_expression = (function day8$re_frame_10x$view$event$event_expression(){
var scroll_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (scroll_pos){
return (function day8$re_frame_10x$view$event$event_expression_$_event_expression_component_will_update(this$){
var node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dom_node(this$);
return cljs.core.reset_BANG_(scroll_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),node.scrollTop,new cljs.core.Keyword(null,"left","left",-399115937),node.scrollLeft], null));
});})(scroll_pos))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (scroll_pos){
return (function day8$re_frame_10x$view$event$event_expression_$_event_expression_component_did_update(this$){
var node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dom_node(this$);
node.scrollTop = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos));

return node.scrollLeft = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos));
});})(scroll_pos))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"event-expression",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (scroll_pos){
return (function (){
var highlighted_form = cljs.core.deref((function (){var G__57620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57620) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57620));
})());
var form_str = cljs.core.deref((function (){var G__57621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57621) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57621));
})());
var show_all_code_QMARK_ = cljs.core.deref((function (){var G__57622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57622) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57622));
})());
var vec__57617 = day8.re_frame_10x.view.event.find_bounds(form_str,zprint.core.zprint_str(highlighted_form));
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57617,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57617,(1),null);
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,(0),start_index);
var highlight = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,start_index,end_index);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(form_str,end_index);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(show_all_code_QMARK_)?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) * (17))),"px"].join('')),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (highlighted_form,form_str,show_all_code_QMARK_,vec__57617,start_index,end_index,before,highlight,after,scroll_pos){
return (function (event){
var G__57623_57654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-show-all-code?","code/set-show-all-code?",1632099789),cljs.core.not(show_all_code_QMARK_)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57623_57654) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57623_57654));

return null;
});})(highlighted_form,form_str,show_all_code_QMARK_,vec__57617,start_index,end_index,before,highlight,after,scroll_pos))
], null),new cljs.core.Keyword(null,"child","child",623967545),(((!((highlighted_form == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),(new cljs.core.List(null,before,(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.code-listing--highlighted","span.code-listing--highlighted",-1247793188),highlight], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hl"], null)),(new cljs.core.List(null,after,null,(1),null)),(2),null)),(3),null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),form_str], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([highlighted_form], 0))], null));
});})(scroll_pos))
], null));
});
day8.re_frame_10x.view.event.repl_msg_area = (function day8$re_frame_10x$view$event$repl_msg_area(){
var repl_msg_state = cljs.core.deref((function (){var G__57624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57624) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57624));
})());
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-running","re-running",-97387070),null,new cljs.core.Keyword(null,"running","running",1554969103),null], null), null),repl_msg_state))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"animation-name","animation-name",-302195330)],["white","nowrap","hidden","green","0","0px 4px","5000ms","5px","fade-clipboard-msg-re-frame-10x"]),new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),((function (repl_msg_state){
return (function (){
var G__57625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57625) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57625));
});})(repl_msg_state))
], null),"Clipboard now contains text for pasting into the REPL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return null;
}
});
day8.re_frame_10x.view.event.repl_section = (function day8$re_frame_10x$view$event$repl_section(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"23px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.repl_msg_area], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"repl requires",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_7s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, the require form to set things up for the \"repl\" links below"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.utils.utils.copy_to_clipboard("(require '[day8.re-frame-10x])");

var G__57626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57626) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57626));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_info,"https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/UsingTheRepl.md"], null)], null)], null);
});
day8.re_frame_10x.view.event.indent_block = (function day8$re_frame_10x$view$event$indent_block(indent_level,first_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function day8$re_frame_10x$view$event$indent_block_$_iter__57627(s__57628){
return (new cljs.core.LazySeq(null,(function (){
var s__57628__$1 = s__57628;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57628__$1);
if(temp__5735__auto__){
var s__57628__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57628__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57628__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57630 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57629 = (0);
while(true){
if((i__57629 < size__4522__auto__)){
var num = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57629);
cljs.core.chunk_append(b__57630,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"12px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.standard_background_color,new cljs.core.Keyword(null,"border-top","border-top",-158897573),(cljs.core.truth_(first_QMARK_)?day8.re_frame_10x.view.event.code_border:null),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),day8.re_frame_10x.view.event.code_border], null),new cljs.core.Keyword(null,"child","child",623967545),""], null));

var G__57656 = (i__57629 + (1));
i__57629 = G__57656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57630),day8$re_frame_10x$view$event$indent_block_$_iter__57627(cljs.core.chunk_rest(s__57628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57630),null);
}
} else {
var num = cljs.core.first(s__57628__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"12px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.standard_background_color,new cljs.core.Keyword(null,"border-top","border-top",-158897573),(cljs.core.truth_(first_QMARK_)?day8.re_frame_10x.view.event.code_border:null),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),day8.re_frame_10x.view.event.code_border], null),new cljs.core.Keyword(null,"child","child",623967545),""], null),day8$re_frame_10x$view$event$indent_block_$_iter__57627(cljs.core.rest(s__57628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(indent_level));
})())], null);
});
day8.re_frame_10x.view.event.event_fragments = (function day8$re_frame_10x$view$event$event_fragments(fragments,code_exec_id){
var code_open_QMARK_ = cljs.core.deref((function (){var G__57635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57635) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57635));
})());
var max_frags = (50);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (code_open_QMARK_,max_frags){
return (function day8$re_frame_10x$view$event$event_fragments_$_iter__57636(s__57637){
return (new cljs.core.LazySeq(null,((function (code_open_QMARK_,max_frags){
return (function (){
var s__57637__$1 = s__57637;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57637__$1);
if(temp__5735__auto__){
var s__57637__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57637__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57637__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57639 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57638 = (0);
while(true){
if((i__57638 < size__4522__auto__)){
var frag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57638);
cljs.core.chunk_append(b__57639,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
var first_QMARK_ = (id === (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),((first_QMARK_)?null:"-1px")], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__57638,id,first_QMARK_,frag,c__4521__auto__,size__4522__auto__,b__57639,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags){
return (function (event){
var G__57640_57657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57640_57657) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57640_57657));

return null;
});})(i__57638,id,first_QMARK_,frag,c__4521__auto__,size__4522__auto__,b__57639,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (i__57638,id,first_QMARK_,frag,c__4521__auto__,size__4522__auto__,b__57639,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags){
return (function (event){
var G__57641_57658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57641_57658) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57641_57658));

return null;
});})(i__57638,id,first_QMARK_,frag,c__4521__auto__,size__4522__auto__,b__57639,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),first_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null)], null)], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__57642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57642) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57642));
})()),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__57659 = (i__57638 + (1));
i__57638 = G__57659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57639),day8$re_frame_10x$view$event$event_fragments_$_iter__57636(cljs.core.chunk_rest(s__57637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57639),null);
}
} else {
var frag = cljs.core.first(s__57637__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
var first_QMARK_ = (id === (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),((first_QMARK_)?null:"-1px")], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (id,first_QMARK_,frag,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags){
return (function (event){
var G__57643_57660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57643_57660) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57643_57660));

return null;
});})(id,first_QMARK_,frag,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (id,first_QMARK_,frag,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags){
return (function (event){
var G__57644_57661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57644_57661) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__57644_57661));

return null;
});})(id,first_QMARK_,frag,s__57637__$2,temp__5735__auto__,code_open_QMARK_,max_frags))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),first_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null)], null)], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__57645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57645) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57645));
})()),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),day8$re_frame_10x$view$event$event_fragments_$_iter__57636(cljs.core.rest(s__57637__$2)));
}
} else {
return null;
}
break;
}
});})(code_open_QMARK_,max_frags))
,null,null));
});})(code_open_QMARK_,max_frags))
;
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_frags,fragments));
})()),(((cljs.core.count(fragments) > max_frags))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame_10x.common_styles.gs_5s,new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null),new cljs.core.Keyword(null,"label","label",1718410804),["(only showing first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_frags)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(fragments))," traces)"].join('')], null):null)], null)], null);
});
day8.re_frame_10x.view.event.event_code = (function day8$re_frame_10x$view$event$event_code(){
var code_traces = cljs.core.deref((function (){var G__57646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57646) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57646));
})());
var code_execution = cljs.core.first(code_traces);
if(cljs.core.not(code_execution)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.no_event_instructions], null);
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"class","class",-2030961996),"code-panel",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_expression], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.repl_section], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_fragments,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (code_traces,code_execution){
return (function (line){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
});})(code_traces,code_execution))
,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(code_execution)),new cljs.core.Keyword(null,"trace-id","trace-id",681947249).cljs$core$IFn$_invoke$arity$1(code_execution)], null)], null)], null);
}
});
day8.re_frame_10x.view.event.render = (function day8$re_frame_10x$view$event$render(){
var epoch_id = cljs.core.deref((function (){var G__57647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57647) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__57647));
})());
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),"event-panel",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_code], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),"0px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),epoch_id], null));
});

//# sourceMappingURL=day8.re_frame_10x.view.event.js.map
