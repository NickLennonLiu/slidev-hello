import{d as D,a3 as L,E as P,o as u,c as I,F as R,au as x,v as n,aw as _,ax as j,l as v,a1 as f,ay as q,k as y,b as g,m as S,e,$ as h,q as H,s as K,H as T}from"../modules/vue-Be3bPvwD.js";import{w as O,_ as $,D as U,C as W,E as V}from"../index-DYMDTcPb.js";import{h as X}from"../monaco/bundled-types-DVEptBAR.js";import{u as z,p as Y,f as J}from"./context-ap-CySg_.js";import{_ as Q}from"./CodeBlockWrapper-CZ7h7ebg.js";import{I as Z}from"./default-C1MpaOzQ.js";import"../modules/shiki-Cr4fO6MZ.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/unplugin-icons-U3OQhYcz.js";const ee=D({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const c=l,{$clicksContext:a}=z();return L(()=>{P(p=>{if(!a||a.disabled)return;let o=+c.size;Number.isNaN(o)&&(console.warn(`[slidev] Invalid size for VClickGap: ${c.size}`),o=1);const d=a.currentOffset+o-1,t=O();a.register(t,{max:d,delta:o}),p(()=>a.unregister(t))})}),(p,o)=>(u(),I(R))}}),se=$(ee,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/client/builtin/VClickGap.vue"]]),F=["ul","ol"],te=D({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var B,E;const l=+this.every,[c,a]=U(this.at),p=x("click"),o=(r,s)=>f(r,[[p,s,"",{hide:this.hide,fade:this.fade}]]),d=r=>r.flatMap(s=>_(s)&&typeof s.type=="symbol"&&Array.isArray(s.children)?d(s.children):[s]);let t=(E=(B=this.$slots).default)==null?void 0:E.call(B);if(!t)return;t=d(X(t));const M=(r,s=1)=>d(r).map(i=>{if(!_(i))return i;if(F.includes(i.type)&&Array.isArray(i.children)){const k=m(i.children,s+1);return n(i,{},k)}return n(i)});let w=1,b=0;const m=(r,s=1)=>d(r).map(i=>{if(!_(i)||i.type===j)return i;const k=+a+Math.ceil(w++/l)-1;let N;s<+this.depth&&Array.isArray(i.children)?N=n(i,{},M(i.children,s)):N=n(i);const C=k-b;return b=k,o(N,c?C>=0?`+${C}`:`${C}`:k)}),A=()=>v(se,{size:+a+Math.ceil((w-1)/l)-1-b});if(t.length===1&&F.includes(t[0].type)&&Array.isArray(t[0].children))return n(t[0],{},[...m(t[0].children),A()]);if(t.length===1&&t[0].type==="table"){const r=t[0];if(Array.isArray(r.children))return n(r,{},r.children.map(s=>_(s)?s.type==="tbody"&&Array.isArray(s.children)?n(s,{},[...m(s.children),A()]):n(s):s))}return[...m(t),A()]}}),ie=D({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(te,{every:W,at:this.at,hide:this.hide,fade:this.fade},{default:()=>{var l,c;return(c=(l=this.$slots).default)==null?void 0:c.call(l).map(a=>a.type===q?this.wrapText(a):a)}})}}),ae=e("h1",null,"Clicks Animations",-1),re=e("p",null,[h("You can add "),e("code",null,"v-click"),h(" to elements to add a click animation.")],-1),le=e("p",null,"This shows up when you click the slide:",-1),ne=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," v-click"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),e("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"This shows up when you click the slide."),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),oe=e("br",null,null,-1),de=e("code",null,"v-mark",-1),ce=e("a",{href:"https://roughnotation.com/",target:"_blank",rel:"noopener"},"Rough Notation",-1),he=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"span"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," v-mark.underline.orange"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),e("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"inline markers"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"span"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),pe={"mt-20":""},ue=e("p",null,[e("a",{href:"https://sli.dev/guide/animations#click-animations",target:"_blank",rel:"noopener"},"Learn More")],-1),ke=[ue],fe={__name:"9",setup(l){return Y(V),z(),(c,a)=>{const p=Q,o=ie,d=x("click"),t=x("mark");return u(),I(Z,H(K(T(J)(T(V),8))),{default:y(()=>[ae,re,f((u(),g("div",null,[le,v(p,S({},{ranges:[]}),{default:y(()=>[ne]),_:1},16)])),[[d]]),oe,v(o,null,{default:y(()=>[e("p",null,[h("The "),f((u(),g("span",null,[de,h(" directive")])),[[t,3,void 0,{red:!0}]]),h(" also allows you to add "),f((u(),g("span",null,[h("inline marks")])),[[t,4,void 0,{circle:!0,orange:!0}]]),h(" , powered by "),ce,h(":")]),v(p,S({},{ranges:[]}),{default:y(()=>[he]),_:1},16)]),_:1}),f((u(),g("div",pe,[...ke])),[[d]])]),_:1},16)}}},xe=$(fe,[["__file","/@slidev/slides/9.md"]]);export{xe as default};