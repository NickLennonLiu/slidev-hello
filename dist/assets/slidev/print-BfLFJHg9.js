import{d as _,_ as u,y as h,b as a,e as t,x as s,H as c,F as f,Z as v,o as i,$ as g,l as x,g as b}from"../modules/vue-Be3bPvwD.js";import{a as y,d as N,_ as k}from"../index-DYMDTcPb.js";import{c as m}from"../monaco/bundled-types-DVEptBAR.js";import{N as V}from"./NoteDisplay-CsFJctoH.js";import"../modules/shiki-Cr4fO6MZ.js";import"../modules/file-saver-DY7lxZlc.js";const w={id:"page-root"},H={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=_({__name:"print",setup($){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const n=h(()=>d.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(i(),a("div",w,[t("div",H,[t("div",L,[t("h1",S,s(c(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(i(!0),a(f,null,v(n.value,(e,r)=>(i(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",A,s(e==null?void 0:e.no)+"/"+s(c(p)),1),g(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<n.value.length-1?(i(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),q=k(M,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{q as default};
