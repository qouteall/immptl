import z from"./SimpleAccordion.ff8c67c5.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{f as F,k as L,y as m,q as O,z as R,o as l,c as u,F as h,A as g,B as S,a as P,w as v,b as c,C as s}from"./app.0c870a62.js";import"./CollapseTransition.fd9fbcde.js";const j={class:"outer-div"},D={style:{"font-size":"1.3rem"}},I={style:{"font-size":"1.1rem"}},U=["href"],q={style:{"font-size":"0.6rem"}},E=F({__name:"ModDownload",props:{github_repo:null,locale_text:null},setup(w){const d=w;function b(r){var n=-1;for(let e=0;e<r.length;e++){let o=r.charAt(e);if(o>="0"&&o<="9"){n=e;break}}if(n===-1)return"unknown";var t=-1;for(let e=n;e<r.length;e++)if(r.charAt(e)==="-"){t=e;break}return t===-1?"unknown":r.substring(n,t)}function V(r,n,t){let e=r.indexOf(n);if(e===-1)return"";let o=r.indexOf(t,e+n.length);return o===-1?"":r.substring(e+n.length,o)}function x(r){return V(r,"-mc","-")}function M(r,n){for(var t=r.split("."),e=n.split("."),o=0;;){var _=o<t.length,p=o<e.length;if(_&&!p)return 1;if(!_&&p)return-1;if(!_&&!p)return 0;var i=parseInt(t[o]),a=parseInt(e[o]);if(i>a)return 1;if(i<a)return-1;o++}}function k(r){var n=r.assets.filter(o=>o.name.indexOf("fabric")>=0);if(n.length===0)return null;var t=n[0];const e=r.published_at.substr(0,r.published_at.indexOf("T"));return{mcVersion:x(t.name),modVersion:b(t.name),downloadUrl:t.browser_download_url,changeLog:r.body,isPreRelease:r.prerelease,publishTime:e,downloadCount:t.download_count}}let y=L(!0),T=m([]),f=m(new Map),A=O(()=>{var r=Array.from(f.values());return r.sort((n,t)=>-M(n.mcVersion,t.mcVersion)),r});async function C(r){for(var n=1;;){let e=`https://api.github.com/repos/${r}/releases?page=`+n;const i=await(await fetch(e)).json();if(i.length===0){y.value=!1;break}for(let a of i){var t=k(a);t!==null&&(f.has(t.mcVersion)||f.set(t.mcVersion,{mcVersion:t.mcVersion,content:[]}),f.get(t.mcVersion).content.push(t))}T.push(...i),n++,await new Promise(a=>setTimeout(a,1e3))}}return R(()=>{C(d.github_repo)}),(r,n)=>(l(),u("div",j,[(l(!0),u(h,null,g(S(A),t=>(l(),u("div",{key:t.mcVersion,class:"outer-card"},[P(z,null,{title:v(()=>[c("div",D,"MC "+s(t.mcVersion),1)]),content:v(()=>[(l(!0),u(h,null,g(t.content,e=>(l(),u("div",{key:e.modVersion,class:"inner-card"},[c("div",I,s(e.isPreRelease?d.locale_text.preRelease+"  ":"")+s(e.modVersion),1),c("p",null,s(e.changeLog),1),c("a",{href:e.downloadUrl,style:{"font-size":"1.2rem"}},s(d.locale_text.download),9,U),c("p",q,s(d.locale_text.publishTime)+": "+s(e.publishTime),1)]))),128))]),_:2},1024)]))),128))]))}});var N=B(E,[["__scopeId","data-v-12ddf1ab"],["__file","ModDownload.vue"]]);export{N as default};
