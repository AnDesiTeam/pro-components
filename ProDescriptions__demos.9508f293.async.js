"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[4497],{68597:function(re,x,e){e.r(x);var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(69086),s=e(85797),I=e(50959),v=e(11527);x.default=function(){var o=(0,I.useRef)();return(0,v.jsxs)(c.vY,{actionRef:o,title:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868 request",request:f()(d()().mark(function r(){return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Promise.resolve({success:!0,data:{info:{id:"\u8FD9\u662F\u4E00\u6BB5\u6587\u672C",date:"20200730",money:"12121"}}}));case 1:case"end":return _.stop()}},r)})),editable:{onSave:function(){var r=f()(d()().mark(function _(M,V,R){return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log(M,V,R),i.abrupt("return",!0);case 2:case"end":return i.stop()}},_)}));function t(_,M,V){return r.apply(this,arguments)}return t}()},children:[(0,v.jsx)(c.vY.Item,{dataIndex:["info","id"]}),(0,v.jsx)(c.vY.Item,{dataIndex:["info","date"],label:"\u65E5\u671F",valueType:"date"}),(0,v.jsx)(c.vY.Item,{label:"money",dataIndex:["info","money"],valueType:"money"}),(0,v.jsxs)(c.vY.Item,{label:"\u6587\u672C",valueType:"option",children:[(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){var t;(t=o.current)===null||t===void 0||t.reload()},children:"\u5237\u65B0"},"reload"),(0,v.jsx)(s.ZP,{children:"\u91CD\u7F6E"},"rest")]})]})}},19905:function(re,x,e){e.r(x);var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(69086),s=e(85797),I=e(74637),v=e.n(I),o=e(11527);x.default=function(){return(0,o.jsxs)(c.vY,{column:2,title:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",tooltip:"\u5305\u542B\u4E86\u4ECE\u670D\u52A1\u5668\u8BF7\u6C42\uFF0Ccolumns\u7B49\u529F\u80FD",children:[(0,o.jsx)(c.vY.Item,{valueType:"option",children:(0,o.jsx)(s.ZP,{type:"primary",children:"\u63D0\u4EA4"},"primary")}),(0,o.jsx)(c.vY.Item,{span:2,valueType:"text",contentStyle:{maxWidth:"80%"},renderText:function(t){return t+t},ellipsis:!0,label:"\u6587\u672C",children:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u8D85\u7EA7\u8D85\u7EA7\u957F\u7684\u65E0\u610F\u4E49\u8BF4\u660E\u6587\u672C\u5E76\u4E14\u91CD\u590D\u4E86\u5F88\u591A\u6CA1\u6709\u610F\u4E49\u7684\u8BCD\u8BED\uFF0C\u5C31\u662F\u4E3A\u4E86\u8BA9\u5B83\u53D8\u5F97\u5F88\u957F\u5F88\u957F\u8D85\u7EA7\u8D85\u7EA7\u957F"}),(0,o.jsx)(c.vY.Item,{label:"\u91D1\u989D",tooltip:"\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4EE5\u5B9E\u9645\u4E3A\u51C6",valueType:"money",children:"100"}),(0,o.jsx)(c.vY.Item,{label:"\u767E\u5206\u6BD4",valueType:"percent",children:"100"}),(0,o.jsx)(c.vY.Item,{label:"\u9009\u62E9\u6846",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},children:"open"}),(0,o.jsx)(c.vY.Item,{label:"\u8FDC\u7A0B\u9009\u62E9\u6846",request:f()(d()().mark(function r(){return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",[{label:"\u5168\u90E8",value:"all"},{label:"\u672A\u89E3\u51B3",value:"open"},{label:"\u5DF2\u89E3\u51B3",value:"closed"},{label:"\u89E3\u51B3\u4E2D",value:"processing"}]);case 1:case"end":return _.stop()}},r)})),children:"closed"}),(0,o.jsx)(c.vY.Item,{label:"\u8FDB\u5EA6\u6761",valueType:"progress",children:"40"}),(0,o.jsx)(c.vY.Item,{label:"\u65E5\u671F\u65F6\u95F4",valueType:"dateTime",children:v()().valueOf()}),(0,o.jsx)(c.vY.Item,{label:"\u65E5\u671F",valueType:"date",children:v()().valueOf()}),(0,o.jsx)(c.vY.Item,{label:"\u65E5\u671F\u533A\u95F4",valueType:"dateTimeRange",children:[v()().add(-1,"d").valueOf(),v()().valueOf()]}),(0,o.jsx)(c.vY.Item,{label:"\u65F6\u95F4",valueType:"time",children:v()().valueOf()}),(0,o.jsx)(c.vY.Item,{label:"\u4EE3\u7801\u5757",valueType:"code",children:`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}),(0,o.jsx)(c.vY.Item,{label:"JSON \u4EE3\u7801\u5757",valueType:"jsonCode",children:`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`})]})}},92697:function(re,x,e){e.r(x);var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(69086),s=e(11527);x.default=function(){return(0,s.jsxs)(c.vY,{title:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868request columns",request:f()(d()().mark(function I(){return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Promise.resolve({success:!0,data:{id:"\u8FD9\u662F\u4E00\u6BB5\u6587\u672Ccolumns",date:"20200809",money:"1212100",money2:-12345.33,state:"all",switch:!0,state2:"open"}}));case 1:case"end":return o.stop()}},I)})),columns:[{title:"\u6587\u672C",key:"text",dataIndex:"id"},{title:"\u72B6\u6001",key:"state",dataIndex:"state",valueType:"select",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"}}},{title:"\u72B6\u60012",key:"state2",dataIndex:"state2"},{title:"\u65F6\u95F4",key:"date",dataIndex:"date",valueType:"date"},{title:"\u65F6\u95F4",key:"date",dataIndex:"date",valueType:"date",fieldProps:{format:"DD.MM.YYYY"}},{title:"\u5F00\u5173",key:"switch",dataIndex:"switch",valueType:"switch"},{title:"money",key:"money",dataIndex:"money",valueType:"money",fieldProps:{moneySymbol:"$"}},{title:"money\u65E0\u7B26\u53F7",key:"money",dataIndex:"money",valueType:"money",fieldProps:{moneySymbol:!1}},{title:"money\u8D1F\u6570\u65E0\u7B26\u53F7",key:"money2",dataIndex:"money2",valueType:"money",fieldProps:{moneySymbol:!1}},{title:"\u64CD\u4F5C",valueType:"option",render:function(){return[(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]}}],children:[(0,s.jsx)(c.vY.Item,{dataIndex:"percent",label:"\u767E\u5206\u6BD4",valueType:"percent",children:"100"}),(0,s.jsx)("div",{children:"\u591A\u4F59\u7684dom"})]})}},62835:function(re,x,e){e.r(x);var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(69086),s=e(27868),I=e(53914),v=e(50959),o=e(11527);x.default=function(){var r=(0,v.useRef)();return(0,o.jsx)(c.vY,{actionRef:r,formProps:{onValuesChange:function(_,M){return console.log(M)}},title:"\u53EF\u7F16\u8F91\u7684\u5B9A\u4E49\u5217\u8868",request:f()(d()().mark(function t(){return d()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",Promise.resolve({success:!0,data:{rate:5,id:"\u8FD9\u662F\u4E00\u6BB5\u6587\u672Ccolumns",date:"20200809",money:"1212100",state:"all",state2:"open"}}));case 1:case"end":return M.stop()}},t)})),editable:{},columns:[{title:"\u6587\u672C",key:"text",dataIndex:"id",copyable:!0,ellipsis:!0},{title:"\u72B6\u6001",key:"state",dataIndex:"state",valueType:"select",editable:!1,valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"}}},{title:"\u72B6\u60012",key:"state2",dataIndex:"state2",renderFormItem:function(){return(0,o.jsx)(s.Z,{placeholder:"\u8F93\u5165 Success \u5207\u6362\u5206\u503C"})}},{title:"\u5206\u503C",dataIndex:"fraction",valueType:function(_){var M=_==null?void 0:_.state2;return M==="Success"?"select":"digit"},fieldProps:{mode:"multiple"},request:function(){var t=f()(d()().mark(function M(){return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",["A","B","D","E","F"].map(function(q,i){return{label:q,value:i}}));case 1:case"end":return R.stop()}},M)}));function _(){return t.apply(this,arguments)}return _}()},{title:"\u65F6\u95F4",key:"date",dataIndex:"date",valueType:"date"},{title:"Rate",key:"rate",dataIndex:"rate",valueType:"rate"},{title:"money",key:"money",dataIndex:"money",valueType:"money",render:function(_,M,V,R){return(0,o.jsx)(I.Z,{title:"\u70B9\u51FB\u8FDB\u5165\u7F16\u8F91\u72B6\u6001",children:(0,o.jsx)("div",{onClick:function(){R==null||R.startEditable("money")},children:_})})}},{title:"\u64CD\u4F5C",valueType:"option",render:function(){return[(0,o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]}}],children:(0,o.jsx)(c.vY.Item,{dataIndex:"percent",label:"\u767E\u5206\u6BD4",valueType:"percent",children:"100"})})}},41497:function(re,x,e){e.r(x);var D=e(69086),d=e(74637),T=e.n(d),f=e(11527);x.default=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(D.vY,{column:2,title:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",tooltip:"\u5305\u542B\u4E86\u4ECE\u670D\u52A1\u5668\u8BF7\u6C42\uFF0Ccolumns\u7B49\u529F\u80FD",children:[(0,f.jsx)(D.vY.Item,{label:"\u65E5\u671F",fieldProps:{format:"YYYY.MM.DD"},valueType:"date",children:T()().valueOf()}),(0,f.jsx)(D.vY.Item,{label:"\u65E5\u671F\u533A\u95F4",fieldProps:{format:"YYYY.MM.DD HH:mm:ss"},valueType:"dateTimeRange",children:[T()().add(-1,"d").valueOf(),T()().valueOf()]}),(0,f.jsx)(D.vY.Item,{label:"\u65F6\u95F4",fieldProps:{format:"YYYY.MM.DD"},valueType:"time",children:T()().valueOf()}),(0,f.jsx)(D.vY.Item,{label:"\u65F6\u95F4\u65E5\u671F",fieldProps:{format:"YYYY.MM.DD HH:mm:ss"},valueType:"dateTime",children:T()().valueOf()}),(0,f.jsx)(D.vY.Item,{label:"\u66F4\u65B0\u65F6\u95F4",fieldProps:{format:"YYYY.MM.DD"},valueType:"fromNow",children:T()().add(-1,"month").valueOf()})]})})}},26648:function(re,x,e){e.r(x);var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(69086),s=e(85797),I=e(50959),v=e(11527);x.default=function(){var o=(0,I.useRef)();return(0,v.jsxs)(c.vY,{actionRef:o,title:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868 request",request:f()(d()().mark(function r(){return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Promise.resolve({success:!0,data:{id:"\u8FD9\u662F\u4E00\u6BB5\u6587\u672C",date:"20200730",money:"12121"}}));case 1:case"end":return _.stop()}},r)})),extra:(0,v.jsx)(s.ZP,{type:"link",children:"\u4FEE\u6539"}),children:[(0,v.jsx)(c.vY.Item,{dataIndex:"id"}),(0,v.jsx)(c.vY.Item,{dataIndex:"date",label:"\u65E5\u671F",valueType:"date"}),(0,v.jsx)(c.vY.Item,{label:"money",dataIndex:"money",valueType:"money"}),(0,v.jsxs)(c.vY.Item,{label:"\u6587\u672C",valueType:"option",children:[(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){var t;(t=o.current)===null||t===void 0||t.reload()},children:"\u5237\u65B0"},"reload"),(0,v.jsx)(s.ZP,{children:"\u91CD\u7F6E"},"rest")]})]})}},14742:function(re,x,e){e.r(x);var D=e(69086),d=e(11527);x.default=function(){return(0,d.jsx)(D.vY,{title:"dataSource and columns",dataSource:{id:"\u8FD9\u662F\u4E00\u6BB5\u6587\u672Ccolumns",date:"20200809",money:"1212100",state:"all",state2:"open"},columns:[{title:"\u6587\u672C",key:"text",dataIndex:"id",ellipsis:!0,copyable:!0},{title:"\u72B6\u6001",key:"state",dataIndex:"state",valueType:"select",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"}}},{title:"\u72B6\u60012",key:"state2",dataIndex:"state2"},{title:"\u65F6\u95F4",key:"date",dataIndex:"date",valueType:"date"},{title:"money",key:"money",dataIndex:"money",valueType:"money"},{title:"\u64CD\u4F5C",valueType:"option",render:function(){return[(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]}}],children:(0,d.jsx)(D.vY.Item,{label:"\u767E\u5206\u6BD4",valueType:"percent",children:"100"})})}},69086:function(re,x,e){e.d(x,{nf:function(){return g},vY:function(){return j}});var D=e(93525),d=e.n(D),T=e(25359),f=e.n(T),c=e(49811),s=e.n(c),I=e(12342),v=e.n(I),o=e(57213),r=e.n(o),t=e(80320),_=e(68931),M=e(22751),V=e(61769),R=e(78200),q=e(57017),i=e(45340),z=e(4490),X=e(79583),ie=e(45883),oe=e(58707),U=e(71750),le=e(69753),$=e(83222),ve=e(61447),me=e(38187),de=e(65023),w=e(50959),ye=e(37616),ge=e(54306),fe=e.n(ge),ce=e(49297),xe=function(l,b){var B=b||{},O=B.onRequestError,G=B.effects,k=B.manual,ee=B.dataSource,S=B.defaultDataSource,W=B.onDataSourceChange,J=(0,ce.default)(S,{value:ee,onChange:W}),te=fe()(J,2),C=te[0],H=te[1],se=(0,ce.default)(b==null?void 0:b.loading,{value:b==null?void 0:b.loading,onChange:b==null?void 0:b.onLoadingChange}),K=fe()(se,2),Q=K[0],F=K[1],ne=function(Y){H(Y),F(!1)},_e=function(){var ue=s()(f()().mark(function Y(){var p,ae,N;return f()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(!Q){E.next=2;break}return E.abrupt("return");case 2:return F(!0),E.prev=3,E.next=6,l();case 6:if(E.t0=E.sent,E.t0){E.next=9;break}E.t0={};case 9:p=E.t0,ae=p.data,N=p.success,N!==!1&&ne(ae),E.next=23;break;case 15:if(E.prev=15,E.t1=E.catch(3),O!==void 0){E.next=21;break}throw new Error(E.t1);case 21:O(E.t1);case 22:F(!1);case 23:return E.prev=23,F(!1),E.finish(23);case 26:case"end":return E.stop()}},Y,null,[[3,15,23,26]])}));return function(){return ue.apply(this,arguments)}}();return(0,w.useEffect)(function(){k||_e()},[].concat(d()(G||[]),[k])),{dataSource:C,setDataSource:H,loading:Q,reload:function(){return _e()}}},h=xe,n=e(11527),a=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],u=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"],m=function(l,b){var B=l.dataIndex;if(B){var O=Array.isArray(B)?(0,de.default)(b,B):b[B];if(O!==void 0||O!==null)return O}return l.children},g=function(l){var b=l.valueEnum,B=l.action,O=l.index,G=l.text,k=l.entity,ee=l.mode,S=l.render,W=l.editableUtils,J=l.valueType,te=l.plain,C=l.dataIndex,H=l.request,se=l.renderFormItem,K=l.params,Q=V.ZP.useFormInstance(),F={text:G,valueEnum:b,mode:ee||"read",proFieldProps:{render:S?function(){return S==null?void 0:S(G,k,O,B,r()(r()({},l),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:J,request:H,params:K,plain:te};if(ee==="read"||!ee||J==="option"){var ne=(0,i.w)(l.fieldProps,void 0,r()(r()({},l),{},{rowKey:C,isEditable:!1}));return(0,n.jsx)(R.Z,r()(r()({name:C},F),{},{fieldProps:ne}))}var _e=function(){var Y,p=(0,i.w)(l.formItemProps,Q,r()(r()({},l),{},{rowKey:C,isEditable:!0})),ae=(0,i.w)(l.fieldProps,Q,r()(r()({},l),{},{rowKey:C,isEditable:!0})),N=se?se==null?void 0:se(r()(r()({},l),{},{type:"descriptions"}),{isEditable:!0,recordKey:C,record:Q.getFieldValue([C].flat(1)),defaultRender:function(){return(0,n.jsx)(R.Z,r()(r()({},F),{},{fieldProps:ae}))},type:"descriptions"},Q):void 0;return(0,n.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[(0,n.jsx)(z.U,r()(r()({name:C},p),{},{style:r()({margin:0},(p==null?void 0:p.style)||{}),initialValue:G||(p==null?void 0:p.initialValue),children:N||(0,n.jsx)(R.Z,r()(r()({},F),{},{proFieldProps:r()({},F.proFieldProps),fieldProps:ae}))})),W==null||(Y=W.actionRender)===null||Y===void 0?void 0:Y.call(W,C||O,{cancelText:(0,n.jsx)(t.Z,{}),saveText:(0,n.jsx)(_.Z,{}),deleteText:!1})]})};return(0,n.jsx)("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:_e()})},A=function(l,b,B,O){var G,k=[],ee=l==null||(G=l.map)===null||G===void 0?void 0:G.call(l,function(S,W){var J,te;if(w.isValidElement(S))return S;var C=S,H=C.valueEnum,se=C.render,K=C.renderText,Q=C.mode,F=C.plain,ne=C.dataIndex,_e=C.request,ue=C.params,Y=C.editable,p=v()(C,a),ae=(J=m(S,b))!==null&&J!==void 0?J:p.children,N=K?K(ae,b,W,B):ae,pe=typeof p.title=="function"?p.title(S,"descriptions",null):p.title,E=typeof p.valueType=="function"?p.valueType(b||{},"descriptions"):p.valueType,Ee=O==null?void 0:O.isEditable(ne||W),y=Q||Ee?"edit":"read",P=O&&y==="read"&&Y!==!1&&(Y==null?void 0:Y(N,b,W))!==!1,je=P?le.Z:w.Fragment,be=y==="edit"?N:(0,X.X)(N,S,N),De=(0,w.createElement)($.Z.Item,r()(r()({},p),{},{key:p.key||((te=p.label)===null||te===void 0?void 0:te.toString())||W,label:(pe||p.label||p.tooltip||p.tip)&&(0,n.jsx)(ie.G,{label:pe||p.label,tooltip:p.tooltip||p.tip,ellipsis:S.ellipsis})}),(0,n.jsxs)(je,{children:[(0,n.jsx)(g,r()(r()({},S),{},{dataIndex:S.dataIndex||W,mode:y,text:be,valueType:E,entity:b,index:W,action:B,editableUtils:O})),P&&E!=="option"&&(0,n.jsx)(M.Z,{onClick:function(){O==null||O.startEditable(ne||W)}})]}));return E==="option"?(k.push(De),null):De}).filter(function(S){return S});return{options:k!=null&&k.length?k:null,children:ee}},L=function(l){return(0,n.jsx)($.Z.Item,r()(r()({},l),{},{children:l.children}))},Z=function(l){return l.children},j=function(l){var b,B=l.request,O=l.columns,G=l.params,k=G===void 0?{}:G,ee=l.dataSource,S=l.onDataSourceChange,W=l.formProps,J=l.editable,te=l.loading,C=l.onLoadingChange,H=l.actionRef,se=l.onRequestError,K=v()(l,u),Q=(0,w.useContext)(ve.ZP.ConfigContext),F=h(s()(f()().mark(function E(){var Ee;return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!B){P.next=6;break}return P.next=3,B(k);case 3:P.t0=P.sent,P.next=7;break;case 6:P.t0={data:{}};case 7:return Ee=P.t0,P.abrupt("return",Ee);case 9:case"end":return P.stop()}},E)})),{onRequestError:se,effects:[(0,ye.P)(k)],manual:!B,dataSource:ee,loading:te,onLoadingChange:C,onDataSourceChange:S}),ne=(0,oe.j)(r()(r()({},l.editable),{},{childrenColumnName:void 0,dataSource:F.dataSource,setDataSource:F.setDataSource}));if((0,w.useEffect)(function(){H&&(H.current=r()({reload:F.reload},ne))},[F,H,ne]),F.loading||F.loading===void 0&&B)return(0,n.jsx)(q.ZP,{type:"descriptions",list:!1,pageHeader:!1});var _e=function(){var Ee=(0,me.default)(l.children).filter(Boolean).map(function(y){if(!w.isValidElement(y))return y;var P=y==null?void 0:y.props,je=P.valueEnum,be=P.valueType,De=P.dataIndex,Pe=P.ellipsis,Ie=P.copyable,Te=P.request;return!be&&!je&&!De&&!Te&&!Pe&&!Ie?y:r()(r()({},y==null?void 0:y.props),{},{entity:ee})});return[].concat(d()(O||[]),d()(Ee)).filter(function(y){return!y||y!=null&&y.valueType&&["index","indexBorder"].includes(y==null?void 0:y.valueType)?!1:!(y!=null&&y.hideInDescriptions)}).sort(function(y,P){return P.order||y.order?(P.order||0)-(y.order||0):(P.index||0)-(y.index||0)})},ue=A(_e(),F.dataSource||{},(H==null?void 0:H.current)||F,J?ne:void 0),Y=ue.options,p=ue.children,ae=J?V.ZP:Z,N=null;(K.title||K.tooltip||K.tip)&&(N=(0,n.jsx)(ie.G,{label:K.title,tooltip:K.tooltip||K.tip}));var pe=Q.getPrefixCls("pro-descriptions");return(0,n.jsx)(U.S,{children:(0,n.jsx)(ae,r()(r()({form:(b=l.editable)===null||b===void 0?void 0:b.form,component:!1,submitter:!1},W),{},{onFinish:void 0,children:(0,n.jsx)($.Z,r()(r()({className:pe},K),{},{extra:K.extra?(0,n.jsxs)(le.Z,{children:[Y,K.extra]}):Y,title:N,children:p}))}),"form")})};j.Item=L;var Me=null},57017:function(re,x,e){e.d(x,{Yk:function(){return me},dX:function(){return ie},cg:function(){return q},nq:function(){return R},TL:function(){return z},SM:function(){return i},uk:function(){return ce},DJ:function(){return $},hM:function(){return ve},ZP:function(){return xe}});var D=e(57213),d=e.n(D),T=e(12342),f=e.n(T),c=e(50959),s=e(43002),I=e(31156),v=e(76835),o=e(92805),r=e(69753),t=e(11527),_=function(n){var a=n.padding;return(0,t.jsx)("div",{style:{padding:a||"0 24px"},children:(0,t.jsx)(o.Z,{style:{margin:0}})})},M={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},V=function(n){var a=n.size,u=n.active,m=(0,v.ZP)(),g=a===void 0?M[m]||6:a,A=function(Z){return Z===0?0:g>2?42:16};return(0,t.jsx)(I.Z,{bordered:!1,style:{marginBlockEnd:16},children:(0,t.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(g).fill(null).map(function(L,Z){return(0,t.jsxs)("div",{style:{borderInlineStart:g>2&&Z===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:A(Z),flex:1,marginInlineEnd:Z===0?16:0},children:[(0,t.jsx)(s.Z,{active:u,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),(0,t.jsx)(s.Z.Button,{active:u,style:{height:48}})]},Z)})})})},R=function(n){var a=n.active;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.Z,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:(0,t.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsx)("div",{style:{maxWidth:"100%",flex:1},children:(0,t.jsx)(s.Z,{active:a,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:165,marginBlockStart:12}})]})}),(0,t.jsx)(_,{})]})},q=function(n){var a=n.size,u=n.active,m=u===void 0?!0:u,g=n.actionButton;return(0,t.jsxs)(I.Z,{bordered:!1,bodyStyle:{padding:0},children:[new Array(a).fill(null).map(function(A,L){return(0,t.jsx)(R,{active:!!m},L)}),g!==!1&&(0,t.jsx)(I.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(s.Z.Button,{style:{width:102},active:m,size:"small"})})]})},i=function(n){var a=n.active;return(0,t.jsxs)("div",{style:{marginBlockEnd:16},children:[(0,t.jsx)(s.Z,{paragraph:!1,title:{width:185}}),(0,t.jsx)(s.Z.Button,{active:a,size:"small"})]})},z=function(n){var a=n.active;return(0,t.jsx)(I.Z,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBlockEnd:8},children:(0,t.jsxs)(r.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,t.jsx)(s.Z.Button,{active:a,style:{width:200},size:"small"}),(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:120}}),(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:80}})]})]})})},X=function(n){var a=n.active,u=a===void 0?!0:a,m=n.statistic,g=n.actionButton,A=n.toolbar,L=n.pageHeader,Z=n.list,j=Z===void 0?5:Z;return(0,t.jsxs)("div",{style:{width:"100%"},children:[L!==!1&&(0,t.jsx)(i,{active:u}),m!==!1&&(0,t.jsx)(V,{size:m,active:u}),(A!==!1||j!==!1)&&(0,t.jsxs)(I.Z,{bordered:!1,bodyStyle:{padding:0},children:[A!==!1&&(0,t.jsx)(z,{active:u}),j!==!1&&(0,t.jsx)(q,{size:j,active:u,actionButton:g})]})]})},ie=X,oe={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},U=function(n){var a=n.active;return(0,t.jsxs)("div",{style:{marginBlockStart:32},children:[(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),(0,t.jsxs)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[(0,t.jsxs)("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),(0,t.jsx)("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,t.jsxs)("div",{style:{maxWidth:300,margin:"auto"},children:[(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},le=function(n){var a=n.size,u=n.active,m=(0,v.ZP)(),g=a===void 0?oe[m]||3:a;return(0,t.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(g).fill(null).map(function(A,L){return(0,t.jsxs)("div",{style:{flex:1,paddingInlineStart:L===0?0:24,paddingInlineEnd:L===g-1?0:24},children:[(0,t.jsx)(s.Z,{active:u,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,t.jsx)(s.Z,{active:u,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,t.jsx)(s.Z,{active:u,paragraph:!1,title:{style:{marginBlockStart:8}}})]},L)})})},$=function(n){var a=n.active,u=n.header,m=u===void 0?!1:u,g=(0,v.ZP)(),A=oe[g]||3;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{display:"flex",background:m?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(A).fill(null).map(function(L,Z){return(0,t.jsx)("div",{style:{flex:1,paddingInlineStart:m&&Z===0?0:20,paddingInlineEnd:32},children:(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{margin:0,height:24,width:m?"75px":"100%"}}})},Z)}),(0,t.jsx)("div",{style:{flex:3,paddingInlineStart:32},children:(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{margin:0,height:24,width:m?"75px":"100%"}}})})]}),(0,t.jsx)(_,{padding:"0px 0px"})]})},ve=function(n){var a=n.active,u=n.size,m=u===void 0?4:u;return(0,t.jsxs)(I.Z,{bordered:!1,children:[(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),(0,t.jsx)($,{header:!0,active:a}),new Array(m).fill(null).map(function(g,A){return(0,t.jsx)($,{active:a},A)}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:(0,t.jsx)(s.Z,{active:a,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},me=function(n){var a=n.active;return(0,t.jsxs)(I.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[(0,t.jsx)(s.Z.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),(0,t.jsx)(le,{active:a}),(0,t.jsx)(U,{active:a})]})},de=function(n){var a=n.active,u=a===void 0?!0:a,m=n.pageHeader,g=n.list;return(0,t.jsxs)("div",{style:{width:"100%"},children:[m!==!1&&(0,t.jsx)(i,{active:u}),(0,t.jsx)(me,{active:u}),g!==!1&&(0,t.jsx)(_,{}),g!==!1&&(0,t.jsx)(ve,{active:u,size:g})]})},w=de,ye=function(n){var a=n.active,u=a===void 0?!0:a,m=n.pageHeader;return(0,t.jsxs)("div",{style:{width:"100%"},children:[m!==!1&&(0,t.jsx)(i,{active:u}),(0,t.jsx)(I.Z,{children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[(0,t.jsx)(s.Z.Avatar,{size:64,style:{marginBlockEnd:32}}),(0,t.jsx)(s.Z.Button,{active:u,style:{width:214,marginBlockEnd:8}}),(0,t.jsx)(s.Z.Button,{active:u,style:{width:328},size:"small"}),(0,t.jsxs)(r.Z,{style:{marginBlockStart:24},children:[(0,t.jsx)(s.Z.Button,{active:u,style:{width:116}}),(0,t.jsx)(s.Z.Button,{active:u,style:{width:116}})]})]})})]})},ge=ye,fe=["type"],ce=function(n){var a=n.type,u=a===void 0?"list":a,m=f()(n,fe);return u==="result"?(0,t.jsx)(ge,d()({},m)):u==="descriptions"?(0,t.jsx)(w,d()({},m)):(0,t.jsx)(ie,d()({},m))},xe=ce},58707:function(re,x,e){e.d(x,{j:function(){return q}});var D=e(25359),d=e.n(D),T=e(49811),f=e.n(T),c=e(54306),s=e.n(c),I=e(57213),v=e.n(I),o=e(51312),r=e(49302),t=e(49297),_=e(50959),M=e(27441),V=function(z){return(r.ZP.warn||r.ZP.warning)(z)};function R(i){var z=i.data,X=i.row;return v()(v()({},z),X)}function q(i){var z=i.type||"single",X=(0,o.YB)(),ie=(0,t.default)([],{value:i.editableKeys,onChange:i.onChange?function(h){var n;i==null||(n=i.onChange)===null||n===void 0||n.call(i,h,i.dataSource)}:void 0}),oe=s()(ie,2),U=oe[0],le=oe[1],$=(0,_.useMemo)(function(){var h=z==="single"?U==null?void 0:U.slice(0,1):U;return new Set(h)},[(U||[]).join(","),z]),ve=(0,_.useCallback)(function(h){return!!(U!=null&&U.includes((0,M.sN)(h)))},[(U||[]).join(",")]),me=function(n){return $.size>0&&z==="single"?(V(i.onlyOneLineEditorAlertMessage||X.getMessage("editableTable.onlyOneLineEditor","\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C")),!1):($.add((0,M.sN)(n)),le(Array.from($)),!0)},de=function(n){return $.delete((0,M.sN)(n)),le(Array.from($)),!0},w=function(){var h=f()(d()().mark(function n(a,u,m,g){var A,L;return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,i==null||(A=i.onCancel)===null||A===void 0?void 0:A.call(i,a,u,m,g);case 2:if(L=j.sent,L!==!1){j.next=5;break}return j.abrupt("return",!1);case 5:return j.abrupt("return",!0);case 6:case"end":return j.stop()}},n)}));return function(a,u,m,g){return h.apply(this,arguments)}}(),ye=function(){var h=f()(d()().mark(function n(a,u,m){var g,A,L;return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,i==null||(g=i.onSave)===null||g===void 0?void 0:g.call(i,a,u,m);case 2:if(A=j.sent,A!==!1){j.next=5;break}return j.abrupt("return",!1);case 5:return j.next=7,de(a);case 7:return L={data:i.dataSource,row:u,key:a,childrenColumnName:i.childrenColumnName||"children"},i.setDataSource(R(L)),j.abrupt("return",!0);case 10:case"end":return j.stop()}},n)}));return function(a,u,m){return h.apply(this,arguments)}}(),ge=X.getMessage("editableTable.action.save","\u4FDD\u5B58"),fe=X.getMessage("editableTable.action.delete","\u5220\u9664"),ce=X.getMessage("editableTable.action.cancel","\u53D6\u6D88"),xe=(0,_.useCallback)(function(h,n){var a=v()({recordKey:h,cancelEditable:de,onCancel:w,onSave:ye,editableKeys:U,setEditableRowKeys:le,saveText:ge,cancelText:ce,deleteText:fe,deletePopconfirmMessage:"".concat(X.getMessage("deleteThisLine","\u5220\u9664\u6B64\u884C"),"?"),editorType:"Map"},n),u=(0,M.aX)(i.dataSource,a);return i.actionRender?i.actionRender(i.dataSource,a,{save:u.save,delete:u.delete,cancel:u.cancel}):[u.save,u.delete,u.cancel]},[U&&U.join(","),i.dataSource]);return{editableKeys:U,setEditableRowKeys:le,isEditable:ve,actionRender:xe,startEditable:me,cancelEditable:de}}}}]);
