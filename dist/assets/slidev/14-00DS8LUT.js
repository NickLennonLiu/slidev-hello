function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/shiki-4Us37Uji.js","assets/modules/shiki-Cr4fO6MZ.js","assets/modules/vue-Be3bPvwD.js","assets/modules/shiki-BSchMNmt.css","assets/monaco/bundled-types-DVEptBAR.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-DY2FALKh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as V}from"../modules/shiki-Cr4fO6MZ.js";import{d as I,t as v,E as te,o as r,b as l,a7 as ne,y as G,Q as oe,D as re,e as S,x as q,H as x,F as M,Z as P,c as N,i as ie,g as L,h as K,l as B,k as X,a3 as se,n as D,m as F,q as ae,s as le,$ as O}from"../modules/vue-Be3bPvwD.js";import{k as ue,g as ce,l as Z,h as R}from"../monaco/bundled-types-DVEptBAR.js";import{l as U}from"../lz-string-BTt4z63d.js";import{_ as w,a as de,w as J,L as Q}from"../index-DYMDTcPb.js";import{B as pe}from"../modules/unplugin-icons-U3OQhYcz.js";import{u as ee,p as fe,f as me}from"./context-ap-CySg_.js";import{I as ge}from"./IconButton-De5qwg-N.js";import{I as he}from"./default-C1MpaOzQ.js";import"../modules/file-saver-DY7lxZlc.js";const _e=[],ve=ue(async()=>{const u={javascript:W,js:W,typescript:Y,ts:Y},{shiki:t,themes:n}=await V(()=>import("./shiki-4Us37Uji.js"),__vite__mapDeps([0,1,2,3])),p=await t,b=(c,f,e={})=>p.codeToHtml(c,{lang:f,theme:typeof n=="string"?n:ce.value?n.dark||"vitesse-dark":n.light||"vitesse-light",...e}),m=async(c,f,e)=>{try{const o=u[f];if(!o)throw new Error(`Runner for language "${f}" not found`);return await o(c,{options:e,highlight:b,run:async(g,i)=>await m(g,i,e)})}catch(o){return console.error(o),{error:`${o}`}}};for(const c of _e){const f=await c(u);Object.assign(u,f)}return{highlight:b,run:m}});async function W(u){const t=[],n={},p=function(...e){t.push(e.map(m))};n.info=n.log=n.debug=n.warn=n.error=p,n.clear=()=>t.length=0;const b=Object.assign({},console,n);try{const e=`return async (console) => {${f(u)}}`;await new Function(e)()(b)}catch(e){return{error:`ERROR: ${e}`}}function m(e){return typeof e=="string"?{text:e}:{text:c(e),highlightLang:"javascript"}}function c(e){var g;let o="";if(e instanceof Error)o=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")o=String(e);else if(Array.isArray(e))o=`[${e.map(c).join(", ")}]`;else if(e instanceof Set){const i=[...e];o=`Set (${e.size}) {${i.map(c).join(", ")}}`}else if(e instanceof Map){const i=[...e.entries()];o=`Map (${e.size}) {${i.map(([h,y])=>`${c(h)} => ${c(y)}`).join(", ")}}`}else if(e instanceof RegExp)o=e.toString();else if(typeof e=="string")o=JSON.stringify(e);else if(typeof e=="object"){const i=((g=e.constructor)==null?void 0:g.name)??"",h=i&&i==="Object"?"":i;o=(h?`${h}: `:"")+JSON.stringify(e,(A,d)=>d===void 0?"__undefined__":d,2).replace(/"__undefined__"/g,"undefined"),o=String(o)}else o=String(e);return o}function f(e){return e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',"")}return t}let j;async function Y(u,t){const{transpile:n}=j??(j=await V(()=>import("../monaco/bundled-types-DVEptBAR.js").then(p=>p.t),__vite__mapDeps([4,1,2,3,5,6])));return u=n(u,{module:j.ModuleKind.ESNext,target:j.ScriptTarget.ES2022}),await t.run(u,"javascript")}const ye=I({__name:"DomElement",props:{element:{type:null,required:!0}},setup(u){const t=u,n=v();return te(()=>{n.value&&n.value.appendChild(t.element)}),(p,b)=>(r(),l("div",{ref_key:"container",ref:n},null,512))}}),Ae=w(ye,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/client/internals/DomElement.vue"]]),Ce={key:0,class:"text-sm text-center opacity-50"},Se={key:1,class:"text-sm text-center opacity-50"},be={key:2,class:"text-sm text-center opacity-50"},xe=["innerHTML"],ke={key:1,class:"text-red-500"},Ee={key:3,class:"output-line"},Me=["innerHTML"],Be={key:2,class:"separator"},Oe={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},we=I({__name:"CodeRunner",props:{modelValue:{type:String,required:!0},lang:{type:String,required:!0},autorun:{type:[Boolean,String],required:!0},height:{type:String,required:!1},highlightOutput:{type:Boolean,required:!0},runnerOptions:{type:Object,required:!1}},emits:["update:modelValue"],setup(u,{emit:t}){const n=u,p=t,{isPrintMode:b}=de(),m=ne(n,"modelValue",p),{$renderContext:c}=ee(),f=G(()=>!["slide","presenter"].includes(c.value)),e=b.value?"once":n.autorun,o=v(e),g=oe(),i=v(0),h=v(),y=Z(200,async()=>{if(f.value)return;const{highlight:A,run:d}=await ve();h.value=A;const C=setTimeout(()=>{o.value=!0},500);g.value=R(await d(m.value,n.lang,n.runnerOptions??{})),i.value+=1,o.value=!1,clearTimeout(C)});return e==="once"?y():e&&re(m,y,{immediate:!0}),(A,d)=>{var k;const C=pe;return r(),l(M,null,[S("div",{class:"relative flex flex-col rounded-b border-t border-main",style:K({height:n.height}),"data-waitfor":".slidev-runner-output"},[f.value?(r(),l("div",Ce,' Code is disabled in the "'+q(x(c))+'" mode ',1)):o.value?(r(),l("div",Se," Running... ")):(k=g.value)!=null&&k.length?(r(),l("div",{key:`run-${i.value}`,class:"slidev-runner-output"},[(r(!0),l(M,null,P(g.value,(s,z)=>(r(),l(M,{key:z},["html"in s?(r(),l("div",{key:0,innerHTML:s.html},null,8,xe)):"error"in s?(r(),l("div",ke,q(s.error),1)):"element"in s?(r(),N(Ae,{key:2,element:s.element},null,8,["element"])):(r(),l("div",Ee,[(r(!0),l(M,null,P(x(R)(s),(a,_)=>(r(),l(M,{key:_},[a.highlightLang&&h.value?(r(),l("span",{key:0,class:"highlighted",innerHTML:h.value(a.text,a.highlightLang)},null,8,Me)):(r(),l("span",{key:1,class:ie(a.class)},q(a.text),3)),_<x(R)(s).length-1?(r(),l("span",Be,",")):L("v-if",!0)],64))),128))]))],64))),128))])):(r(),l("div",be," Click the play button to run the code "))],4),x(m).trim()?(r(),l("div",Oe,[B(ge,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:x(y)},{default:X(()=>[B(C)]),_:1},8,["onClick"])])):L("v-if",!0)],64)}}}),ze=w(we,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/client/internals/CodeRunner.vue"]]),$e={class:"relative slidev-monaco-container"},qe=I({__name:"Monaco",props:{codeLz:{type:String,required:!0,default:""},diffLz:{type:String,required:!1},lang:{type:String,required:!1,default:"typescript"},readonly:{type:Boolean,required:!1,default:!1},lineNumbers:{type:String,required:!1,default:"off"},height:{type:[Number,String],required:!1,default:"initial"},editorOptions:{type:null,required:!1},ata:{type:Boolean,required:!1,default:!0},runnable:{type:Boolean,required:!1,default:!1},autorun:{type:[Boolean,String],required:!1,default:!0},outputHeight:{type:String,required:!1},highlightOutput:{type:Boolean,required:!1,default:!0},runnerOptions:{type:Object,required:!1}},setup(u){const t=u,n=v(U.decompressFromBase64(t.codeLz).trimEnd()),p=t.diffLz&&v(U.decompressFromBase64(t.diffLz).trimEnd()),m={ts:"typescript",js:"javascript"}[t.lang]??t.lang,f={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[t.lang]??t.lang,e=v(),o=v(),g=v(0),i=v(),h=G(()=>t.height==="auto"?`${g.value}px`:t.height==="initial"?`${i.value}px`:t.height);return se(async()=>{const{default:y}=await V(()=>import("../monaco/bundled-types-DVEptBAR.js").then(a=>a.o),__vite__mapDeps([4,1,2,3,5,6])),{ata:A,monaco:d}=await y(),C=d.editor.createModel(n.value,m,d.Uri.parse(`file:///${J()}.${f}`));C.onDidChangeContent(()=>n.value=C.getValue());const k={automaticLayout:!0,readOnly:t.readonly,lineNumbers:t.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,...t.editorOptions};let s;if(p){const a=d.editor.createModel(p.value,m,d.Uri.parse(`file:///${J()}.${f}`));a.onDidChangeContent(()=>n.value=C.getValue());const _=d.editor.createDiffEditor(o.value,{renderOverviewRuler:!1,...k});_.setModel({original:C,modified:a});const E=_.getOriginalEditor(),$=_.getModifiedEditor(),H=()=>{const T=Math.max(E.getContentHeight(),$.getContentHeight())+4;i.value??(i.value=T),g.value=T,D(()=>_.layout())};E.onDidContentSizeChange(H),$.onDidContentSizeChange(H),s=$}else{const a=d.editor.create(o.value,{model:C,lineDecorationsWidth:0,...k});a.onDidContentSizeChange(_=>{const E=_.contentHeight+4;i.value??(i.value=E),g.value=E,D(()=>s.layout())}),s=a}t.ata&&(A(s.getValue()),s.onDidChangeModelContent(Z(1e3,()=>{A(s.getValue())})));const z=s.layoutContentWidget.bind(s);s.layoutContentWidget=a=>{z(a),a.getId()==="editor.contrib.resizableContentHoverWidget"&&(a._resizableNode.domNode.style.transform=a._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},D(()=>d.editor.remeasureFonts())}),(y,A)=>(r(),l("div",$e,[S("div",{ref_key:"outer",ref:e,class:"relative slidev-monaco-container-inner",style:K({height:h.value})},[S("div",{ref_key:"container",ref:o,class:"absolute inset-0.5"},null,512)],4),t.runnable?(r(),N(ze,{key:0,modelValue:n.value,"onUpdate:modelValue":A[0]||(A[0]=d=>n.value=d),lang:x(m),autorun:t.autorun,height:t.outputHeight,"highlight-output":t.highlightOutput,"runner-options":t.runnerOptions},null,8,["modelValue","lang","autorun","height","highlight-output","runner-options"])):L("v-if",!0)]))}}),De=w(qe,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/client/builtin/Monaco.vue"]]),Re=S("h1",null,"Monaco Editor",-1),je=S("p",null,"Slidev provides built-in Moanco Editor support.",-1),Le=S("p",null,[O("Add "),S("code",null,"{monaco}"),O(" to the code block to turn it into an editor:")],-1),Ve=S("p",null,[O("Use "),S("code",null,"{monaco-run}"),O(" to create an editor that can execute the code directly in the slide:")],-1),Ie={__name:"14",setup(u){return fe(Q),ee(),(t,n)=>{const p=De;return r(),N(he,ae(le(x(me)(x(Q),13))),{default:X(()=>[Re,je,Le,B(p,F({"code-lz":"JYWwDg9gTgLgBAbzlApgMzgXzmqERwDkAbgK4qEBQokscAFigDZMQ54GEB0A9CgB4wUUAHYBDJlUoBjCCIDO8WQBMUcALzJ0ACkKyF8MRrgBGQgEpKjFhG2WgA==",lang:"ts"},{}),null,16),Ve,B(p,F({runnable:"","code-lz":"GYVwdgxgLglg9mABMGAjBBDCEYAowBciYIAtqgKYBOAlESedYgN4BQiiVFUIVSSAHgC8iAIzsOiAPzEJHIinRgsOfIgC0YmogDUyNJmx4kmgEzaA9BcQBPOCEQBrMHADuAGkRQAFjADOiP6IAHIA8gAqXt4UiJR+UIiuGDZecIgAJmkwCQQACqwAvqysEAh+cAA2FAB0FXAA5rgAglRUydXAVHCkuMyIVWD1PkSiAAyIBZ64APqeMNpCAHz6Sip4MLpaNDSsQA==",lang:"ts"},{}),null,16)]),_:1},16)}}},Ge=w(Ie,[["__file","/@slidev/slides/14.md"]]);export{Ge as default};
