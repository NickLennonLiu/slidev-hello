import{i as x,w as b,x as g}from"../modules/unplugin-icons-U3OQhYcz.js";import{d as $,y as k,o as _,b as y,e as t,f as w,h as C,c as S,k as P,H as r,$ as B,l,q as V,s as z}from"../modules/vue-Be3bPvwD.js";import{u,p as E,f as H}from"./context-ap-CySg_.js";import{_ as m,q as d}from"../index-DYMDTcPb.js";import"../monaco/bundled-types-DVEptBAR.js";import"../modules/shiki-Cr4fO6MZ.js";import"../modules/file-saver-DY7lxZlc.js";function p(e){return e.startsWith("/")?"/"+e.slice(1):e}function I(e,o=!1){const s=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${p(e)})`:`url("${p(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const N={class:"my-auto w-full"},O=$({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const o=e,s=k(()=>I(o.background,!0));return(n,a)=>(_(),y("div",{class:"slidev-layout cover text-center",style:C(s.value)},[t("div",N,[w(n.$slots,"default")])],4))}}),j=m(O,[["__file","/Users/river/code/slidev/SlideV-周报-0312/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),q=t("h1",null,"Welcome to Slidev",-1),A=t("p",null,"Presentation slides for developers",-1),G={class:"pt-12"},R={class:"abs-br m-6 flex gap-2"},T={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},U={__name:"1",setup(e){E(d);const{$slidev:o,$nav:s,$clicksContext:n,$clicks:a,$page:W,$renderContext:F,$frontmatter:L}=u();return(D,i)=>{const v=x,f=b,h=g;return _(),S(j,V(z(r(H)(r(d),0))),{default:P(()=>[q,A,t("div",G,[t("span",{onClick:i[0]||(i[0]=(...c)=>r(o).nav.next&&r(o).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[B(" Press Space for next page "),l(v,{class:"inline"})])]),t("div",R,[t("button",{onClick:i[1]||(i[1]=c=>r(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[l(f)]),t("a",T,[l(h)])])]),_:1},16)}}},ee=m(U,[["__file","/@slidev/slides/1.md"]]);export{ee as default};