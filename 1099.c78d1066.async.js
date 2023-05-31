"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[1099],{22751:function(pe,F,a){a.d(F,{Z:function(){return U}});var o=a(24456),I=a(50959),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},ee=_,Z=a(53942),y=function(V,oe){return I.createElement(Z.Z,(0,o.Z)({},V,{ref:oe,icon:ee}))},U=I.forwardRef(y)},79972:function(pe,F,a){a.d(F,{N:function(){return o}});const o=I=>({color:I.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${I.motionDurationSlow}`,"&:focus, &:hover":{color:I.colorLinkHover},"&:active":{color:I.colorLinkActive}})},1099:function(pe,F,a){a.d(F,{Z:function(){return Lt}});var o=a(50959),I=a(68931),_=a(61853),ee=a(22751),Z=a(84875),y=a.n(Z),U=a(874),B=a.n(U),V=a(71860),oe=a(22041),re=a(74991),Ae=a(33271),be=a(32015),he=a(39063),Ee=a(7058),We=a(89683),ge=a(53914),Se=a(66268),ie=a(65954),ke=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Ke={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var xe=o.forwardRef((e,n)=>{const r=g=>{const{keyCode:c}=g;c===ie.Z.ENTER&&g.preventDefault()},t=g=>{const{keyCode:c}=g,{onClick:O}=e;c===ie.Z.ENTER&&O&&O()},{style:i,noStyle:p,disabled:v}=e,x=ke(e,["style","noStyle","disabled"]);let f={};return p||(f=Object.assign({},Ke)),v&&(f.pointerEvents="none"),f=Object.assign(Object.assign({},f),i),o.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},x,{onKeyDown:r,onKeyUp:t,style:f}))}),Fe=a(24456),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ve=Ue,Ge=a(53942),Xe=function(n,r){return o.createElement(Ge.Z,(0,Fe.Z)({},n,{ref:r,icon:Ve}))},Je=o.forwardRef(Xe),Qe=a(47987),Ye=a(7527),qe=a(95382),_e=a(81548),et=a(16751),Oe=a(79972);const tt=(e,n,r,t)=>{const{sizeMarginHeadingVerticalEnd:i,fontWeightStrong:p}=t;return{marginBottom:i,color:r,fontWeight:p,fontSize:e,lineHeight:n}},nt=e=>{const n=[1,2,3,4,5],r={};return n.forEach(t=>{r[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=tt(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),r},ot=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},(0,Oe.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},rt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:_e.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),it=e=>{const{componentCls:n}=e,t=(0,et.e5)(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},lt=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),st=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),at=e=>{const{componentCls:n,sizeMarginHeadingVerticalStart:r}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},nt(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:r},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:r}}}),rt(e)),ot(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},(0,Oe.N)(e)),{marginInlineStart:e.marginXXS})}),it(e)),lt(e)),st()),{"&-rtl":{direction:"rtl"}})}};var Ce=(0,qe.Z)("Typography",e=>[at(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),ct=e=>{let{prefixCls:n,"aria-label":r,className:t,style:i,direction:p,maxLength:v,autoSize:x=!0,value:f,onSave:g,onCancel:c,onEnd:O,component:m,enterIcon:P=o.createElement(Je,null)}=e;const S=o.useRef(null),T=o.useRef(!1),D=o.useRef(),[N,j]=o.useState(f);o.useEffect(()=>{j(f)},[f]),o.useEffect(()=>{if(S.current&&S.current.resizableTextArea){const{textArea:w}=S.current.resizableTextArea;w.focus();const{length:R}=w.value;w.setSelectionRange(R,R)}},[]);const d=w=>{let{target:R}=w;j(R.value.replace(/[\n\r]/g,""))},G=()=>{T.current=!0},X=()=>{T.current=!1},b=w=>{let{keyCode:R}=w;T.current||(D.current=R)},Q=()=>{g(N.trim())},h=w=>{let{keyCode:R,ctrlKey:ve,altKey:ne,metaKey:W,shiftKey:Y}=w;D.current===R&&!T.current&&!ve&&!ne&&!W&&!Y&&(R===ie.Z.ENTER?(Q(),O==null||O()):R===ie.Z.ESC&&c())},u=()=>{Q()},L=m?`${n}-${m}`:"",[J,A]=Ce(n),H=y()(n,`${n}-edit-content`,{[`${n}-rtl`]:p==="rtl"},t,L,A);return J(o.createElement("div",{className:H,style:i},o.createElement(Qe.Z,{ref:S,maxLength:v,value:N,onChange:d,onKeyDown:b,onKeyUp:h,onCompositionStart:G,onCompositionEnd:X,onBlur:u,"aria-label":r,rows:1,autoSize:x}),P!==null?(0,Ye.Tm)(P,{className:`${n}-edit-content-confirm`}):null))};function me(e,n){return o.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},n),r&&typeof e=="object"?e:null)]},[e])}var dt=(e,n)=>{const r=o.useRef(!1);o.useEffect(()=>{r.current?e():r.current=!0},n)},ut=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},we=o.forwardRef((e,n)=>{var{prefixCls:r,component:t="article",className:i,rootClassName:p,setContentRef:v,children:x,direction:f}=e,g=ut(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:c,direction:O}=o.useContext(Ee.E_),m=f!=null?f:O;let P=n;v&&(P=(0,he.sQ)(n,v));const S=c("typography",r),[T,D]=Ce(S),N=y()(S,{[`${S}-rtl`]:m==="rtl"},i,p,D);return T(o.createElement(t,Object.assign({className:N,ref:P},g),x))});function Te(e){const n=typeof e;return n==="string"||n==="number"}function ft(e){let n=0;return e.forEach(r=>{Te(r)?n+=String(r).length:n+=1}),n}function je(e,n){let r=0;const t=[];for(let i=0;i<e.length;i+=1){if(r===n)return t;const p=e[i],x=Te(p)?String(p).length:1,f=r+x;if(f>n){const g=n-r;return t.push(String(p).slice(0,g)),t}t.push(p),r=f}return e}const pt=0,le=1,Le=2,ye=3,Ie=4;var gt=e=>{let{enabledMeasure:n,children:r,text:t,width:i,fontSize:p,rows:v,onEllipsis:x}=e;const[[f,g,c],O]=o.useState([0,0,0]),[m,P]=o.useState(pt),[S,T]=o.useState(0),D=o.useRef(null),N=o.useRef(null),j=o.useMemo(()=>(0,oe.Z)(t),[t]),d=o.useMemo(()=>ft(j),[j]),G=o.useMemo(()=>!n||m!==ye?r(j,!1):r(je(j,g),g<d),[n,m,r,j,g,d]);(0,re.Z)(()=>{n&&i&&p&&d&&(P(le),O([0,Math.ceil(d/2),d]))},[n,i,p,t,d,v]),(0,re.Z)(()=>{var h;m===le&&T(((h=D.current)===null||h===void 0?void 0:h.offsetHeight)||0)},[m]),(0,re.Z)(()=>{var h,u;if(S){if(m===le){const L=((h=N.current)===null||h===void 0?void 0:h.offsetHeight)||0,J=v*S;L<=J?(P(Ie),x(!1)):P(Le)}else if(m===Le)if(f!==c){const L=((u=N.current)===null||u===void 0?void 0:u.offsetHeight)||0,J=v*S;let A=f,H=c;f===c-1?H=f:L<=J?A=g:H=g;const w=Math.ceil((A+H)/2);O([A,w,H])}else P(ye),x(!0)}},[m,f,c,v,S]);const X={width:i,whiteSpace:"normal",margin:0,padding:0},b=(h,u,L)=>o.createElement("span",{"aria-hidden":!0,ref:u,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(p/2)*2},L)},h),Q=(h,u)=>{const L=je(j,h);return b(r(L,!0),u,X)};return o.createElement(o.Fragment,null,G,n&&m!==ye&&m!==Ie&&o.createElement(o.Fragment,null,b("lg",D,{wordBreak:"keep-all",whiteSpace:"nowrap"}),m===le?b(r(j,!1),N,X):Q(g,N)))},mt=e=>{let{enabledEllipsis:n,isEllipsis:r,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!n?t:o.createElement(ge.Z,Object.assign({open:r?void 0:!1},i),t)},yt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function vt(e,n){let{mark:r,code:t,underline:i,delete:p,strong:v,keyboard:x,italic:f}=e,g=n;function c(O,m){m&&(g=o.createElement(O,{},g))}return c("strong",v),c("u",i),c("del",p),c("code",t),c("mark",r),c("kbd",x),c("i",f),g}function se(e,n,r){return e===!0||e===void 0?n:e||r&&n}function Pe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const bt="...";var ae=o.forwardRef((e,n)=>{var r,t,i;const{prefixCls:p,className:v,style:x,type:f,disabled:g,children:c,ellipsis:O,editable:m,copyable:P,component:S,title:T}=e,D=yt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:N,direction:j}=o.useContext(Ee.E_),[d]=(0,We.Z)("Text"),G=o.useRef(null),X=o.useRef(null),b=N("typography",p),Q=(0,be.Z)(D,["mark","code","delete","underline","strong","keyboard","italic"]),[h,u]=me(m),[L,J]=(0,Ae.Z)(!1,{value:u.editing}),{triggerType:A=["icon"]}=u,H=l=>{var s;l&&((s=u.onStart)===null||s===void 0||s.call(u)),J(l)};dt(()=>{var l;L||(l=X.current)===null||l===void 0||l.focus()},[L]);const w=l=>{l==null||l.preventDefault(),H(!0)},R=l=>{var s;(s=u.onChange)===null||s===void 0||s.call(u,l),H(!1)},ve=()=>{var l;(l=u.onCancel)===null||l===void 0||l.call(u),H(!1)},[ne,W]=me(P),[Y,Re]=o.useState(!1),$e=o.useRef(),Ne={};W.format&&(Ne.format=W.format);const ze=()=>{window.clearTimeout($e.current)},It=l=>{var s;l==null||l.preventDefault(),l==null||l.stopPropagation(),B()(W.text||String(c)||"",Ne),Re(!0),ze(),$e.current=window.setTimeout(()=>{Re(!1)},3e3),(s=W.onCopy)===null||s===void 0||s.call(W,l)};o.useEffect(()=>ze,[]);const[Me,Pt]=o.useState(!1),[He,Rt]=o.useState(!1),[$t,Nt]=o.useState(!1),[Ze,zt]=o.useState(!1),[De,Mt]=o.useState(!1),[Ht,Zt]=o.useState(!0),[k,E]=me(O,{expandable:!1}),z=k&&!$t,{rows:q=1}=E,ce=o.useMemo(()=>!z||E.suffix!==void 0||E.onEllipsis||E.expandable||h||ne,[z,E,h,ne]);(0,re.Z)(()=>{k&&!ce&&(Pt((0,Se.G)("webkitLineClamp")),Rt((0,Se.G)("textOverflow")))},[ce,k]);const M=o.useMemo(()=>ce?!1:q===1?He:Me,[ce,He,Me]),Be=z&&(M?De:Ze),Dt=z&&q===1&&M,de=z&&q>1&&M,Bt=l=>{var s;Nt(!0),(s=E.onExpand)===null||s===void 0||s.call(E,l)},[At,Wt]=o.useState(0),[kt,Kt]=o.useState(0),Ft=(l,s)=>{let{offsetWidth:C}=l;var $;Wt(C),Kt(parseInt(($=window.getComputedStyle)===null||$===void 0?void 0:$.call(window,s).fontSize,10)||0)},Ut=l=>{var s;zt(l),Ze!==l&&((s=E.onEllipsis)===null||s===void 0||s.call(E,l))};o.useEffect(()=>{const l=G.current;if(k&&M&&l){const s=de?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;De!==s&&Mt(s)}},[k,M,c,de,Ht]),o.useEffect(()=>{const l=G.current;if(typeof IntersectionObserver=="undefined"||!l||!M||!z)return;const s=new IntersectionObserver(()=>{Zt(!!l.offsetParent)});return s.observe(l),()=>{s.disconnect()}},[M,z]);let K={};E.tooltip===!0?K={title:(r=u.text)!==null&&r!==void 0?r:c}:o.isValidElement(E.tooltip)?K={title:E.tooltip}:typeof E.tooltip=="object"?K=Object.assign({title:(t=u.text)!==null&&t!==void 0?t:c},E.tooltip):K={title:E.tooltip};const ue=o.useMemo(()=>{const l=s=>["string","number"].includes(typeof s);if(!(!k||M)){if(l(u.text))return u.text;if(l(c))return c;if(l(T))return T;if(l(K.title))return K.title}},[k,M,T,K.title,Be]);if(L)return o.createElement(ct,{value:(i=u.text)!==null&&i!==void 0?i:typeof c=="string"?c:"",onSave:R,onCancel:ve,onEnd:u.onEnd,prefixCls:b,className:v,style:x,direction:j,component:S,maxLength:u.maxLength,autoSize:u.autoSize,enterIcon:u.enterIcon});const Vt=()=>{const{expandable:l,symbol:s}=E;if(!l)return null;let C;return s?C=s:C=d==null?void 0:d.expand,o.createElement("a",{key:"expand",className:`${b}-expand`,onClick:Bt,"aria-label":d==null?void 0:d.expand},C)},Gt=()=>{if(!h)return;const{icon:l,tooltip:s}=u,C=(0,oe.Z)(s)[0]||(d==null?void 0:d.edit),$=typeof C=="string"?C:"";return A.includes("icon")?o.createElement(ge.Z,{key:"edit",title:s===!1?"":C},o.createElement(xe,{ref:X,className:`${b}-edit`,onClick:w,"aria-label":$},l||o.createElement(ee.Z,{role:"button"}))):null},Xt=()=>{if(!ne)return;const{tooltips:l,icon:s}=W,C=Pe(l),$=Pe(s),fe=Y?se(C[1],d==null?void 0:d.copied):se(C[0],d==null?void 0:d.copy),Yt=Y?d==null?void 0:d.copied:d==null?void 0:d.copy,qt=typeof fe=="string"?fe:Yt;return o.createElement(ge.Z,{key:"copy",title:fe},o.createElement(xe,{className:y()(`${b}-copy`,Y&&`${b}-copy-success`),onClick:It,"aria-label":qt},Y?se($[1],o.createElement(I.Z,null),!0):se($[0],o.createElement(_.Z,null),!0)))},Jt=l=>[l&&Vt(),Gt(),Xt()],Qt=l=>[l&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},bt),E.suffix,Jt(l)];return o.createElement(V.Z,{onResize:Ft,disabled:!z||M},l=>o.createElement(mt,{tooltipProps:K,enabledEllipsis:z,isEllipsis:Be},o.createElement(we,Object.assign({className:y()({[`${b}-${f}`]:f,[`${b}-disabled`]:g,[`${b}-ellipsis`]:k,[`${b}-single-line`]:z&&q===1,[`${b}-ellipsis-single-line`]:Dt,[`${b}-ellipsis-multiple-line`]:de},v),prefixCls:p,style:Object.assign(Object.assign({},x),{WebkitLineClamp:de?q:void 0}),component:S,ref:(0,he.sQ)(l,G,n),direction:j,onClick:A.includes("text")?w:void 0,"aria-label":ue==null?void 0:ue.toString(),title:T},Q),o.createElement(gt,{enabledMeasure:z&&!M,text:c,rows:q,width:At,fontSize:kt,onEllipsis:Ut},(s,C)=>{let $=s;return s.length&&C&&ue&&($=o.createElement("span",{key:"show-content","aria-hidden":!0},$)),vt(e,o.createElement(o.Fragment,null,$,Qt(C)))}))))}),ht=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Et=o.forwardRef((e,n)=>{var{ellipsis:r,rel:t}=e,i=ht(e,["ellipsis","rel"]);const p=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,o.createElement(ae,Object.assign({},p,{ref:n,ellipsis:!!r,component:"a"}))}),St=o.forwardRef((e,n)=>o.createElement(ae,Object.assign({ref:n},e,{component:"div"}))),xt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Ot=(e,n)=>{var{ellipsis:r}=e,t=xt(e,["ellipsis"]);const i=o.useMemo(()=>r&&typeof r=="object"?(0,be.Z)(r,["expandable","rows"]):r,[r]);return o.createElement(ae,Object.assign({ref:n},t,{ellipsis:i,component:"span"}))};var Ct=o.forwardRef(Ot),wt=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Tt=[1,2,3,4,5];var jt=o.forwardRef((e,n)=>{const{level:r=1}=e,t=wt(e,["level"]);let i;return Tt.includes(r)?i=`h${r}`:i="h1",o.createElement(ae,Object.assign({ref:n},t,{component:i}))});const te=we;te.Text=Ct,te.Link=Et,te.Title=jt,te.Paragraph=St;var Lt=te},66268:function(pe,F,a){a.d(F,{G:function(){return ee}});var o=a(36336),I=function(y){if((0,o.Z)()&&window.document.documentElement){var U=Array.isArray(y)?y:[y],B=window.document.documentElement;return U.some(function(V){return V in B.style})}return!1},_=function(y,U){if(!I(y))return!1;var B=document.createElement("div"),V=B.style[y];return B.style[y]=U,B.style[y]!==V};function ee(Z,y){return!Array.isArray(Z)&&y!==void 0?_(Z,y):I(Z)}}}]);
