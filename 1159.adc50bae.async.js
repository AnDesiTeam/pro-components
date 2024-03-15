"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[1159],{83242:function(Oe,V,s){s.d(V,{D:function(){return q},Z:function(){return ze}});var i=s(50959),T=s(37469),re={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},ae=re,Q=s(82579),j=function(P,L){return i.createElement(Q.Z,(0,T.Z)({},P,{ref:L,icon:ae}))},H=i.forwardRef(j),D=s(26876),z=s(46197),$=s(82187),E=s.n($),se=s(36760),$e=v=>!isNaN(parseFloat(v))&&isFinite(v),be=s(20891),Ee=s(90349),Te=function(v,P){var L={};for(var O in v)Object.prototype.hasOwnProperty.call(v,O)&&P.indexOf(O)<0&&(L[O]=v[O]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,O=Object.getOwnPropertySymbols(v);M<O.length;M++)P.indexOf(O[M])<0&&Object.prototype.propertyIsEnumerable.call(v,O[M])&&(L[O[M]]=v[O[M]]);return L};const He={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},q=i.createContext({}),Le=(()=>{let v=0;return function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return v+=1,`${P}${v}`}})();var ze=i.forwardRef((v,P)=>{const{prefixCls:L,className:O,trigger:M,children:he,defaultCollapsed:g=!1,theme:Ie="dark",style:G={},collapsible:Ce=!1,reverseArrow:ie=!1,width:Me=200,collapsedWidth:Se=80,zeroWidthTriggerStyle:ye,breakpoint:de,onCollapse:ue,onBreakpoint:Be}=v,we=Te(v,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:me}=(0,i.useContext)(Ee.V),[F,ge]=(0,i.useState)("collapsed"in v?v.collapsed:g),[pe,ke]=(0,i.useState)(!1);(0,i.useEffect)(()=>{"collapsed"in v&&ge(v.collapsed)},[v.collapsed]);const xe=(u,y)=>{"collapsed"in v||ge(u),ue==null||ue(u,y)},ve=(0,i.useRef)();ve.current=u=>{ke(u.matches),Be==null||Be(u.matches),F!==u.matches&&xe(u.matches,"responsive")},(0,i.useEffect)(()=>{function u(A){return ve.current(A)}let y;if(typeof window!="undefined"){const{matchMedia:A}=window;if(A&&de&&de in He){y=A(`screen and (max-width: ${He[de]})`);try{y.addEventListener("change",u)}catch(k){y.addListener(u)}u(y)}}return()=>{try{y==null||y.removeEventListener("change",u)}catch(A){y==null||y.removeListener(u)}}},[de]),(0,i.useEffect)(()=>{const u=Le("ant-sider-");return me.addSider(u),()=>me.removeSider(u)},[]);const fe=()=>{xe(!F,"clickTrigger")},{getPrefixCls:De}=(0,i.useContext)(be.E_),Pe=()=>{const u=De("layout-sider",L),y=(0,se.Z)(we,["collapsed"]),A=F?Se:Me,k=$e(A)?`${A}px`:String(A),Z=parseFloat(String(Se||0))===0?i.createElement("span",{onClick:fe,className:E()(`${u}-zero-width-trigger`,`${u}-zero-width-trigger-${ie?"right":"left"}`),style:ye},M||i.createElement(H,null)):null,t={expanded:ie?i.createElement(z.Z,null):i.createElement(D.Z,null),collapsed:ie?i.createElement(D.Z,null):i.createElement(z.Z,null)}[F?"collapsed":"expanded"],e=M!==null?Z||i.createElement("div",{className:`${u}-trigger`,onClick:fe,style:{width:k}},M||t):null,r=Object.assign(Object.assign({},G),{flex:`0 0 ${k}`,maxWidth:k,minWidth:k,width:k}),n=E()(u,`${u}-${Ie}`,{[`${u}-collapsed`]:!!F,[`${u}-has-trigger`]:Ce&&M!==null&&!Z,[`${u}-below`]:!!pe,[`${u}-zero-width`]:parseFloat(k)===0},O);return i.createElement("aside",Object.assign({className:n},y,{style:r,ref:P}),i.createElement("div",{className:`${u}-children`},he),Ce||pe&&Z?e:null)},Ne=i.useMemo(()=>({siderCollapsed:F}),[F]);return i.createElement(q.Provider,{value:Ne},Pe())})},90349:function(Oe,V,s){s.d(V,{V:function(){return T}});var i=s(50959);const T=i.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}})},85967:function(Oe,V,s){s.d(V,{J:function(){return j}});var i=s(50959),T=s(45680),re=s(57451),ae=function(H,D){var z={};for(var $ in H)Object.prototype.hasOwnProperty.call(H,$)&&D.indexOf($)<0&&(z[$]=H[$]);if(H!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,$=Object.getOwnPropertySymbols(H);E<$.length;E++)D.indexOf($[E])<0&&Object.prototype.propertyIsEnumerable.call(H,$[E])&&(z[$[E]]=H[$[E]]);return z};const Q=i.createContext(null),j=i.forwardRef((H,D)=>{const{children:z}=H,$=ae(H,["children"]),E=i.useContext(Q),se=i.useMemo(()=>Object.assign(Object.assign({},E),$),[E,$.prefixCls,$.mode,$.selectable,$.rootClassName]),ce=(0,T.supportNodeRef)(z),$e=(0,T.useComposeRef)(D,ce?z.ref:null);return i.createElement(Q.Provider,{value:se},i.createElement(re.BR,null,ce?i.cloneElement(z,{ref:$e}):z))});V.Z=Q},71159:function(Oe,V,s){s.d(V,{Z:function(){return Ze}});var i=s(50959),T=s(90141),re=s(83242),ae=s(74267),Q=s(82187),j=s.n(Q),H=s(45680),D=s(36760),z=s(80566),$=s(22722),E=s(20891),se=s(97405),ce=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e},be=o=>{const{prefixCls:t,className:e,dashed:r}=o,n=ce(o,["prefixCls","className","dashed"]),{getPrefixCls:a}=i.useContext(E.E_),d=a("menu",t),c=j()({[`${d}-item-divider-dashed`]:!!r},e);return i.createElement(T.Divider,Object.assign({className:c},n))},Ee=s(71783),Te=s(32268),q=(0,i.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),je=o=>{var t;const{className:e,children:r,icon:n,title:a,danger:d}=o,{prefixCls:c,firstLevel:l,direction:m,disableMenuItemTitleTooltip:x,inlineCollapsed:f}=i.useContext(q),B=N=>{const X=i.createElement("span",{className:`${c}-title-content`},r);return(!n||i.isValidElement(r)&&r.type==="span")&&r&&N&&l&&typeof r=="string"?i.createElement("div",{className:`${c}-inline-collapsed-noicon`},r.charAt(0)):X},{siderCollapsed:b}=i.useContext(re.D);let p=a;typeof a=="undefined"?p=l?r:"":a===!1&&(p="");const h={title:p};!b&&!f&&(h.title=null,h.open=!1);const S=(0,Ee.Z)(r).length;let I=i.createElement(T.Item,Object.assign({},(0,D.Z)(o,["title","icon","danger"]),{className:j()({[`${c}-item-danger`]:d,[`${c}-item-only-child`]:(n?S+1:S)===1},e),title:typeof a=="string"?a:void 0}),(0,$.Tm)(n,{className:j()(i.isValidElement(n)?(t=n.props)===null||t===void 0?void 0:t.className:"",`${c}-item-icon`)}),B(f));return x||(I=i.createElement(Te.Z,Object.assign({},h,{placement:m==="rtl"?"left":"right",overlayClassName:`${c}-inline-collapsed-tooltip`}),I)),I},ze=s(72877),P=o=>{var t;const{popupClassName:e,icon:r,title:n,theme:a}=o,d=i.useContext(q),{prefixCls:c,inlineCollapsed:l,theme:m}=d,x=(0,T.useFullPath)();let f;if(!r)f=l&&!x.length&&n&&typeof n=="string"?i.createElement("div",{className:`${c}-inline-collapsed-noicon`},n.charAt(0)):i.createElement("span",{className:`${c}-title-content`},n);else{const p=i.isValidElement(n)&&n.type==="span";f=i.createElement(i.Fragment,null,(0,$.Tm)(r,{className:j()(i.isValidElement(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${c}-item-icon`)}),p?n:i.createElement("span",{className:`${c}-title-content`},n))}const B=i.useMemo(()=>Object.assign(Object.assign({},d),{firstLevel:!1}),[d]),[b]=(0,ze.Cn)("Menu");return i.createElement(q.Provider,{value:B},i.createElement(T.SubMenu,Object.assign({},(0,D.Z)(o,["icon"]),{title:f,popupClassName:j()(c,e,`${c}-${a||m}`),popupStyle:{zIndex:b}})))},L=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};function O(o){return(o||[]).map((t,e)=>{if(t&&typeof t=="object"){const r=t,{label:n,children:a,key:d,type:c}=r,l=L(r,["label","children","key","type"]),m=d!=null?d:`tmp-${e}`;return a||c==="group"?c==="group"?i.createElement(T.ItemGroup,Object.assign({key:m},l,{title:n}),O(a)):i.createElement(P,Object.assign({key:m},l,{title:n}),O(a)):c==="divider"?i.createElement(be,Object.assign({key:m},l)):i.createElement(je,Object.assign({key:m},l),n)}return null}).filter(t=>t)}function M(o){return i.useMemo(()=>o&&O(o),[o])}var he=s(85967),g=s(63504),Ie=s(99978),G=s(84339),Ce=s(91507),ie=s(39969),Me=s(25163),Se=s(71691),ye=s(18880),ue=o=>{const{componentCls:t,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:a,lineType:d,itemPaddingInline:c}=o;return{[`${t}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${(0,g.unit)(a)} ${d} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:c},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},we=o=>{let{componentCls:t,menuArrowOffset:e,calc:r}=o;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,g.unit)(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,g.unit)(e)})`}}}}};const me=o=>Object.assign({},(0,G.oN)(o));var ge=(o,t)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,groupTitleColor:a,itemBg:d,subMenuItemBg:c,itemSelectedBg:l,activeBarHeight:m,activeBarWidth:x,activeBarBorderWidth:f,motionDurationSlow:B,motionEaseInOut:b,motionEaseOut:p,itemPaddingInline:h,motionDurationMid:S,itemHoverColor:I,lineType:N,colorSplit:X,itemDisabledColor:_,dangerItemColor:Y,dangerItemHoverColor:R,dangerItemSelectedColor:W,dangerItemActiveBg:K,dangerItemSelectedBg:C,popupBg:U,itemHoverBg:ee,itemActiveBg:te,menuSubMenuBg:oe,horizontalItemSelectedColor:J,horizontalItemSelectedBg:le,horizontalItemBorderRadius:Re,horizontalItemHoverBg:w}=o;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:r,background:d,[`&${e}-root:focus-visible`]:Object.assign({},me(o)),[`${e}-item-group-title`]:{color:a},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},me(o))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${_} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:I}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:ee},"&:active":{backgroundColor:te}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:ee},"&:active":{backgroundColor:te}}},[`${e}-item-danger`]:{color:Y,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:R}},[`&${e}-item:active`]:{background:K}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:W},["a, a:hover"]:{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:l,[`&${e}-item-danger`]:{backgroundColor:C}},[`&${e}-submenu > ${e}`]:{backgroundColor:oe},[`&${e}-popup > ${e}`]:{backgroundColor:U},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:U},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:f,marginTop:o.calc(f).mul(-1).equal(),marginBottom:0,borderRadius:Re,"&::after":{position:"absolute",insetInline:h,bottom:0,borderBottom:`${(0,g.unit)(m)} solid transparent`,transition:`border-color ${B} ${b}`,content:'""'},["&:hover, &-active, &-open"]:{background:w,"&::after":{borderBottomWidth:m,borderBottomColor:J}},["&-selected"]:{color:J,backgroundColor:le,"&:hover":{backgroundColor:le},"&::after":{borderBottomWidth:m,borderBottomColor:J}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${(0,g.unit)(f)} ${N} ${X}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:c},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,g.unit)(x)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${S} ${p}`,`opacity ${S} ${p}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:W}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${S} ${b}`,`opacity ${S} ${b}`].join(",")}}}}}};const pe=o=>{const{componentCls:t,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:a,marginXS:d,itemMarginBlock:c,itemWidth:l}=o,m=o.calc(a).add(n).add(d).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:(0,g.unit)(e),paddingInline:n,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:c,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:(0,g.unit)(e)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:m}}};var xe=o=>{const{componentCls:t,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:a,controlHeightLG:d,motionDurationMid:c,motionEaseOut:l,paddingXL:m,itemMarginInline:x,fontSizeLG:f,motionDurationSlow:B,paddingXS:b,boxShadowSecondary:p,collapsedWidth:h,collapsedIconSize:S}=o,I={height:r,lineHeight:(0,g.unit)(r),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{["&-inline, &-vertical"]:Object.assign({[`&${t}-root`]:{boxShadow:"none"}},pe(o))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},pe(o)),{boxShadow:p})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${(0,g.unit)(o.calc(d).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${B}`,`background ${B}`,`padding ${c} ${l}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:I,[`& ${t}-item-group-title`]:{paddingInlineStart:m}},[`${t}-item`]:I}},{[`${t}-inline-collapsed`]:{width:h,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:f,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,g.unit)(o.calc(f).div(2).equal())} - ${(0,g.unit)(x)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:S,lineHeight:(0,g.unit)(r),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${t}-item-group-title`]:Object.assign(Object.assign({},G.vS),{paddingInline:b})}}]};const ve=o=>{const{componentCls:t,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:a,iconCls:d,iconSize:c,iconMarginInlineEnd:l}=o;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding ${e} ${n}`].join(","),[`${t}-item-icon, ${d}`]:{minWidth:c,fontSize:c,transition:[`font-size ${r} ${a}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${t}-item-icon`]:Object.assign({},(0,G.Ro)()),[`&${t}-item-only-child`]:{[`> ${d}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},fe=o=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:a,menuArrowOffset:d}=o;return{[`${t}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:o.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:o.calc(a).mul(.6).equal(),height:o.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,g.unit)(o.calc(d).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,g.unit)(d)})`}}}}},De=o=>{const{antCls:t,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:a,motionEaseInOut:d,paddingXS:c,padding:l,colorSplit:m,lineWidth:x,zIndexPopup:f,borderRadiusLG:B,subMenuItemBorderRadius:b,menuArrowSize:p,menuArrowOffset:h,lineType:S,groupTitleLineHeight:I,groupTitleFontSize:N}=o;return[{"":{[`${e}`]:Object.assign(Object.assign({},(0,G.dF)()),{["&-hidden"]:{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,G.Wf)(o)),(0,G.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:o.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${(0,g.unit)(c)} ${(0,g.unit)(l)}`,fontSize:N,lineHeight:I,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${d}`,`background ${n} ${d}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${d}`,`background ${n} ${d}`,`padding ${a} ${d}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${d}`,`padding ${n} ${d}`].join(",")},[`${e}-title-content`]:{transition:`color ${n}`,[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:m,borderStyle:S,borderWidth:0,borderTopWidth:x,marginBlock:x,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ve(o)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${(0,g.unit)(o.calc(r).mul(2).equal())} ${(0,g.unit)(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:f,borderRadius:B,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:B},ve(o)),fe(o)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:b},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${d}`}})},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:o.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:o.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:o.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:o.paddingXS}}}),fe(o)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,g.unit)(h)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,g.unit)(o.calc(h).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${(0,g.unit)(o.calc(p).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,g.unit)(o.calc(h).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,g.unit)(h)})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},Pe=o=>{var t,e,r;const{colorPrimary:n,colorError:a,colorTextDisabled:d,colorErrorBg:c,colorText:l,colorTextDescription:m,colorBgContainer:x,colorFillAlter:f,colorFillContent:B,lineWidth:b,lineWidthBold:p,controlItemBgActive:h,colorBgTextHover:S,controlHeightLG:I,lineHeight:N,colorBgElevated:X,marginXXS:_,padding:Y,fontSize:R,controlHeightSM:W,fontSizeLG:K,colorTextLightSolid:C,colorErrorHover:U}=o,ee=(t=o.activeBarWidth)!==null&&t!==void 0?t:0,te=(e=o.activeBarBorderWidth)!==null&&e!==void 0?e:b,oe=(r=o.itemMarginInline)!==null&&r!==void 0?r:o.marginXXS,J=new Ie.C(C).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:l,itemColor:l,colorItemTextHover:l,itemHoverColor:l,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:m,groupTitleColor:m,colorItemTextSelected:n,itemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:x,itemBg:x,colorItemBgHover:S,itemHoverBg:S,colorItemBgActive:B,itemActiveBg:h,colorSubItemBg:f,subMenuItemBg:f,colorItemBgSelected:h,itemSelectedBg:h,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:ee,colorActiveBarHeight:p,activeBarHeight:p,colorActiveBarBorderSize:b,activeBarBorderWidth:te,colorItemTextDisabled:d,itemDisabledColor:d,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:c,dangerItemActiveBg:c,colorDangerItemBgSelected:c,dangerItemSelectedBg:c,itemMarginInline:oe,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:I,groupTitleLineHeight:N,collapsedWidth:I*2,popupBg:X,itemMarginBlock:_,itemPaddingInline:Y,horizontalLineHeight:`${I*1.15}px`,iconSize:R,iconMarginInlineEnd:W-R,collapsedIconSize:K,groupTitleFontSize:R,darkItemDisabledColor:new Ie.C(C).setAlpha(.25).toRgbString(),darkItemColor:J,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:C,darkItemSelectedBg:n,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:J,darkItemHoverColor:C,darkDangerItemHoverColor:U,darkDangerItemSelectedColor:C,darkDangerItemActiveBg:a,itemWidth:ee?`calc(100% + ${te}px)`:`calc(100% - ${oe*2}px)`}};var Ne=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,Se.I$)("Menu",n=>{const{colorBgElevated:a,controlHeightLG:d,fontSize:c,darkItemColor:l,darkDangerItemColor:m,darkItemBg:x,darkSubMenuItemBg:f,darkItemSelectedColor:B,darkItemSelectedBg:b,darkDangerItemSelectedBg:p,darkItemHoverBg:h,darkGroupTitleColor:S,darkItemHoverColor:I,darkItemDisabledColor:N,darkDangerItemHoverColor:X,darkDangerItemSelectedColor:_,darkDangerItemActiveBg:Y,popupBg:R,darkPopupBg:W}=n,K=n.calc(c).div(7).mul(5).equal(),C=(0,ye.TS)(n,{menuArrowSize:K,menuHorizontalHeight:n.calc(d).mul(1.15).equal(),menuArrowOffset:n.calc(K).mul(.25).equal(),menuSubMenuBg:a,calc:n.calc,popupBg:R}),U=(0,ye.TS)(C,{itemColor:l,itemHoverColor:I,groupTitleColor:S,itemSelectedColor:B,itemBg:x,popupBg:W,subMenuItemBg:f,itemActiveBg:"transparent",itemSelectedBg:b,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:h,itemDisabledColor:N,dangerItemColor:m,dangerItemHoverColor:X,dangerItemSelectedColor:_,dangerItemActiveBg:Y,dangerItemSelectedBg:p,menuSubMenuBg:f,horizontalItemSelectedColor:B,horizontalItemSelectedBg:b});return[De(C),ue(C),xe(C),ge(C,"light"),ge(U,"dark"),we(C),(0,Ce.Z)(C),(0,ie.oN)(C,"slide-up"),(0,ie.oN)(C,"slide-down"),(0,Me._y)(C,"zoom-big")]},Pe,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(o,t)},u=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};function y(o){return o===null||o===!1}var k=(0,i.forwardRef)((o,t)=>{var e;const r=i.useContext(he.Z),n=r||{},{getPrefixCls:a,getPopupContainer:d,direction:c,menu:l}=i.useContext(E.E_),m=a(),{prefixCls:x,className:f,style:B,theme:b="light",expandIcon:p,_internalDisableMenuItemTitleTooltip:h,inlineCollapsed:S,siderCollapsed:I,items:N,children:X,rootClassName:_,mode:Y,selectable:R,onClick:W,overflowedIndicatorPopupClassName:K}=o,C=u(o,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),U=(0,D.Z)(C,["collapsedWidth"]),ee=M(N)||X;(e=n.validator)===null||e===void 0||e.call(n,{mode:Y});const te=(0,H.useEvent)(function(){var ne;W==null||W.apply(void 0,arguments),(ne=n.onClick)===null||ne===void 0||ne.call(n)}),oe=n.mode||Y,J=R!=null?R:n.selectable,le=i.useMemo(()=>I!==void 0?I:S,[S,I]),Re={horizontal:{motionName:`${m}-slide-up`},inline:(0,z.Z)(m),other:{motionName:`${m}-zoom-big`}},w=a("menu",x||n.prefixCls),Xe=(0,se.Z)(w),[Ve,Ge,Fe]=Ne(w,Xe,!r),Ye=j()(`${w}-${b}`,l==null?void 0:l.className,f),Ke=i.useMemo(()=>{var ne,Ae;if(typeof p=="function"||y(p))return p||null;if(typeof n.expandIcon=="function"||y(n.expandIcon))return n.expandIcon||null;if(typeof(l==null?void 0:l.expandIcon)=="function"||y(l==null?void 0:l.expandIcon))return(l==null?void 0:l.expandIcon)||null;const We=(ne=p!=null?p:n==null?void 0:n.expandIcon)!==null&&ne!==void 0?ne:l==null?void 0:l.expandIcon;return(0,$.Tm)(We,{className:j()(`${w}-submenu-expand-icon`,i.isValidElement(We)?(Ae=We.props)===null||Ae===void 0?void 0:Ae.className:void 0)})},[p,n==null?void 0:n.expandIcon,l==null?void 0:l.expandIcon,w]),Ue=i.useMemo(()=>({prefixCls:w,inlineCollapsed:le||!1,direction:c,firstLevel:!0,theme:b,mode:oe,disableMenuItemTitleTooltip:h}),[w,le,c,h,b]);return Ve(i.createElement(he.Z.Provider,{value:null},i.createElement(q.Provider,{value:Ue},i.createElement(T.default,Object.assign({getPopupContainer:d,overflowedIndicator:i.createElement(ae.Z,null),overflowedIndicatorPopupClassName:j()(w,`${w}-${b}`,K),mode:oe,selectable:J,onClick:te},U,{inlineCollapsed:le,style:Object.assign(Object.assign({},l==null?void 0:l.style),B),className:Ye,prefixCls:w,direction:c,defaultMotions:Re,expandIcon:Ke,ref:t,rootClassName:j()(_,Ge,n.rootClassName,Fe,Xe)}),ee))))});const Z=(0,i.forwardRef)((o,t)=>{const e=(0,i.useRef)(null),r=i.useContext(re.D);return(0,i.useImperativeHandle)(t,()=>({menu:e.current,focus:n=>{var a;(a=e.current)===null||a===void 0||a.focus(n)}})),i.createElement(k,Object.assign({ref:e},o,r))});Z.Item=je,Z.SubMenu=P,Z.Divider=be,Z.ItemGroup=T.ItemGroup;var Ze=Z}}]);
