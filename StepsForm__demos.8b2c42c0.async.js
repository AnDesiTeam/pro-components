"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[134],{35075:function(g,P,e){e.r(P);var B=e(76627),o=e(77424),F=e(57293),m=e(94607),d=e(74637),a=e.n(d),p=e(50959),l=e(11527),h={jobInfo:{name:"normal job",type:1},syncTableInfo:{timeRange:[a()().subtract(1,"m"),a()()],title:"example table title"}},v=function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(_){setTimeout(function(){_(h)},D)})},E=[{value:1,label:"\u56FD\u4F01"},{value:2,label:"\u79C1\u4F01"}],c=function(){var D=(0,p.useRef)([]);return(0,p.useEffect)(function(){v(1e3).then(function(){var _;D==null||(_=D.current)===null||_===void 0||_.forEach(function(n){var s;n==null||(s=n.current)===null||s===void 0||s.setFieldsValue(h)})})},[]),(0,l.jsxs)(B.L,{formMapRef:D,onFinish:function(n){return console.log(n),Promise.resolve(!0)},children:[(0,l.jsxs)(B.L.StepForm,{name:"step1",title:"\u5DE5\u4F5C\u4FE1\u606F",children:[(0,l.jsx)(o.Z,{label:"\u59D3\u540D",name:["jobInfo","name"]}),(0,l.jsx)(F.Z,{label:"\u5DE5\u4F5C\u7C7B\u578B",name:["jobInfo","type"],options:E})]}),(0,l.jsxs)(B.L.StepForm,{name:"step2",title:"\u540C\u6B65\u8868\u5355\u4FE1\u606F",children:[(0,l.jsx)(m.Z,{label:"\u65F6\u95F4\u533A\u95F4",name:["syncTableInfo","timeRange"]}),(0,l.jsx)(o.Z,{label:"\u6807\u9898",name:["syncTableInfo","title"]})]})]})};P.default=c},63630:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),m=e.n(F),d=e(59569),a=e(76627),p=e(77424),l=e(66153),h=e(94607),v=e(11953),E=e(58599),c=e(91699),O=e(57293),D=e(49302),_=e(85797),n=e(11527),s=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},u)})};P.default=function(){return(0,n.jsx)(d.Z,{children:(0,n.jsxs)(a.L,{onFinish:function(){var i=m()(o()().mark(function u(r){return o()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log(r),M.next=3,s(1e3);case 3:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return M.stop()}},u)}));return function(u){return i.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},submitter:{render:function(u){return u.step===0?(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:["\u53BB\u7B2C\u4E8C\u6B65 ",">"]}):u.step===1?[(0,n.jsx)(_.ZP,{onClick:function(){var t;return(t=u.onPre)===null||t===void 0?void 0:t.call(u)},children:"\u8FD4\u56DE\u7B2C\u4E00\u6B65"},"pre"),(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:["\u53BB\u7B2C\u4E09\u6B65 ",">"]},"goToTree")]:[(0,n.jsxs)(_.ZP,{onClick:function(){var t;return(t=u.onPre)===null||t===void 0?void 0:t.call(u)},children:["<"," \u8FD4\u56DE\u7B2C\u4E8C\u6B65"]},"gotoTwo"),(0,n.jsx)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:"\u63D0\u4EA4 \u221A"},"goToTree")]}},children:[(0,n.jsxs)(a.L.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:function(){var i=m()(o()().mark(function u(r){var t;return o()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return t=r.name,console.log(t),b.next=4,s(2e3);case 4:return b.abrupt("return",!0);case 5:case"end":return b.stop()}},u)}));return function(u){return i.apply(this,arguments)}}(),children:[(0,n.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(l.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(a.L.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(c.A.Group,{children:[(0,n.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(l.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(a.L.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(O.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(O.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},56560:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),m=e.n(F),d=e(54306),a=e.n(d),p=e(94463),l=e(76627),h=e(77424),v=e(66153),E=e(91699),c=e(45055),O=e(11953),D=e(58599),_=e(57293),n=e(85797),s=e(49302),i=e(45346),u=e(50959),r=e(11527),t=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(L){setTimeout(function(){L(!0)},b)})};P.default=function(){var M=(0,u.useState)(!1),b=a()(M,2),L=b[0],x=b[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ZP,{type:"primary",onClick:function(){return x(!0)},children:[(0,r.jsx)(p.Z,{}),"\u5206\u6B65\u8868\u5355\u65B0\u5EFA"]}),(0,r.jsxs)(l.L,{onFinish:function(){var j=m()(o()().mark(function A(f){return o()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log(f),Z.next=3,t(1e3);case 3:x(!1),s.ZP.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return Z.stop()}},A)}));return function(A){return j.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},stepsFormRender:function(A,f){return(0,r.jsx)(i.Z,{title:"\u5206\u6B65\u8868\u5355",width:800,onCancel:function(){return x(!1)},open:L,footer:f,destroyOnClose:!0,children:A})},children:[(0,r.jsxs)(l.L.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:m()(o()().mark(function j(){return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,t(2e3);case 2:return f.abrupt("return",!0);case 3:case"end":return f.stop()}},j)})),children:[(0,r.jsx)(h.Z,{name:"name",width:"md",label:"\u5B9E\u9A8C\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,r.jsx)(v.Z,{name:"date",label:"\u65E5\u671F"}),(0,r.jsxs)(E.A.Group,{title:"\u65F6\u95F4\u9009\u62E9",children:[(0,r.jsx)(c.Z,{name:"dateTime",label:"\u5F00\u59CB\u65F6\u95F4"}),(0,r.jsx)(v.Z,{name:"date",label:"\u7ED3\u675F\u65F6\u95F4"})]}),(0,r.jsx)(O.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,r.jsxs)(l.L.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,r.jsxs)(E.A.Group,{children:[(0,r.jsx)(h.Z,{width:"md",name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,r.jsx)(v.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,r.jsxs)(l.L.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,r.jsx)(_.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,r.jsx)(_.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})]})}},26153:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),m=e.n(F),d=e(76627),a=e(59569),p=e(77424),l=e(91699),h=e(57293),v=e(88168),E=e(94607),c=e(58599),O=e(66153),D=e(49302),_=e(11527),n=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},i)})};P.default=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(d.L,{onFinish:function(){var s=m()(o()().mark(function i(u){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(u),t.next=3,n(1e3);case 3:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return t.stop()}},i)}));return function(i){return s.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(d.L.StepForm,{name:"base",title:"\u7B2C\u4E00\u6B65\u9AA4",onFinish:m()(o()().mark(function s(){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n(2e3);case 2:return u.abrupt("return",!0);case 3:case"end":return u.stop()}},s)})),children:[(0,_.jsxs)(a.Z,{title:"\u6E90\u548C\u76EE\u6807",bordered:!0,headerBordered:!0,collapsible:!0,style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(p.Z,{name:"name",width:"md",label:"\u8FC1\u79FB\u4EFB\u52A1\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsxs)(l.A.Group,{title:"\u8282\u70B9",size:8,children:[(0,_.jsx)(h.Z,{width:"sm",name:"source",placeholder:"\u9009\u62E9\u6765\u6E90\u8282\u70B9"}),(0,_.jsx)(h.Z,{width:"sm",name:"target",placeholder:"\u9009\u62E9\u76EE\u6807\u8282\u70B9"})]})]}),(0,_.jsxs)(a.Z,{title:"\u9876\u90E8\u5BF9\u9F50",bordered:!0,headerBordered:!0,collapsible:!0,style:{minWidth:800,marginBlockEnd:16},children:[(0,_.jsx)(v.Z,{name:"xs",label:"XS\u53F7\u8868\u5355",initialValue:9999,tooltip:"\u60AC\u6D6E\u51FA\u73B0\u7684\u6C14\u6CE1\u3002",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"xs"}),(0,_.jsx)(p.Z,{name:"s",label:"S\u53F7\u8868\u5355",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"sm"}),(0,_.jsx)(E.Z,{name:"m",label:"M \u53F7\u8868\u5355"}),(0,_.jsx)(h.Z,{name:"l",label:"L \u53F7\u8868\u5355",fieldProps:{mode:"tags"},width:"lg",initialValue:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F"],options:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F","\u9648\u62C9\u98CE"].map(function(s){return{label:s,value:s}})})]})]}),(0,_.jsx)(d.L.StepForm,{name:"checkbox",title:"\u7B2C\u4E8C\u6B65\u9AA4",children:(0,_.jsxs)(a.Z,{style:{minWidth:800,marginBlockEnd:16,maxWidth:"100%"},children:[(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,_.jsxs)(l.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(O.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})}),(0,_.jsx)(d.L.StepForm,{name:"time",title:"\u7B2C\u4E09\u6B65\u9AA4",children:(0,_.jsxs)(a.Z,{style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,_.jsx)(h.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,_.jsx)(h.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})})]})})}},32902:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),m=e.n(F),d=e(59569),a=e(76627),p=e(77424),l=e(66153),h=e(94607),v=e(11953),E=e(58599),c=e(91699),O=e(49302),D=e(50959),_=e(11527),n=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},i)})};P.default=function(){var s=(0,D.useRef)();return(0,_.jsx)(d.Z,{children:(0,_.jsxs)(a.L,{stepsProps:{direction:"vertical"},formRef:s,onFinish:m()(o()().mark(function i(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(1e3);case 2:O.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return r.stop()}},i)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(a.L.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:m()(o()().mark(function i(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=s.current)===null||u===void 0?void 0:u.getFieldsValue()),t.next=3,n(2e3);case 3:return t.abrupt("return",!0);case 4:case"end":return t.stop()}},i)})),children:[(0,_.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsx)(l.Z,{name:"date",label:"\u65E5\u671F"}),(0,_.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,_.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,_.jsxs)(a.L.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:m()(o()().mark(function i(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=s.current)===null||u===void 0?void 0:u.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},i)})),children:[(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u6821\u9A8C","\u5168\u91CF\u66FF\u6362","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(c.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(l.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,_.jsxs)(a.L.StepForm,{name:"step3",title:"\u7B2C\u4E09\u6B65",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:m()(o()().mark(function i(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=s.current)===null||u===void 0?void 0:u.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},i)})),children:[(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(c.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(l.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]})})}},15786:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),m=e.n(F),d=e(59569),a=e(76627),p=e(77424),l=e(66153),h=e(94607),v=e(11953),E=e(58599),c=e(91699),O=e(57293),D=e(49302),_=e(50959),n=e(11527),s=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},u)})};P.default=function(){var i=(0,_.useRef)();return(0,n.jsx)(d.Z,{children:(0,n.jsxs)(a.L,{formRef:i,onFinish:m()(o()().mark(function u(){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(1e3);case 2:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return t.stop()}},u)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,n.jsxs)(a.L.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:m()(o()().mark(function u(){var r;return o()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log((r=i.current)===null||r===void 0?void 0:r.getFieldsValue()),M.next=3,s(2e3);case 3:return M.abrupt("return",!0);case 4:case"end":return M.stop()}},u)})),children:[(0,n.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(l.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(a.L.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:m()(o()().mark(function u(){var r;return o()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log((r=i.current)===null||r===void 0?void 0:r.getFieldsValue()),M.abrupt("return",!0);case 2:case"end":return M.stop()}},u)})),children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(c.A.Group,{children:[(0,n.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(l.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(a.L.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u53D1\u5E03\u5224\u65AD"},children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(O.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(O.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},58599:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(96393),a=e(96732),p=e(50959),l=e(91091),h=e(78200),v=e(11527),E=["options","fieldProps","proFieldProps","valueEnum"],c=p.forwardRef(function(n,s){var i=n.options,u=n.fieldProps,r=n.proFieldProps,t=n.valueEnum,M=m()(n,E);return(0,v.jsx)(h.Z,o()({ref:s,valueType:"checkbox",valueEnum:(0,d.h)(t,void 0),fieldProps:o()({options:i},u),lightProps:o()({labelFormatter:function(){return(0,v.jsx)(h.Z,o()({ref:s,valueType:"checkbox",mode:"read",valueEnum:(0,d.h)(t,void 0),filedConfig:{customLightMode:!0},fieldProps:o()({options:i},u),proFieldProps:r},M))}},M.lightProps),proFieldProps:r},M))}),O=p.forwardRef(function(n,s){var i=n.fieldProps,u=n.children;return(0,v.jsx)(a.Z,o()(o()({ref:s},i),{},{children:u}))}),D=(0,l.G)(O,{valuePropName:"checked"}),_=D;_.Group=c,P.Z=_},66153:function(g,P,e){e.d(P,{Z:function(){return Z}});var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(50959),a=e(57918),p=e(78200),l=e(11527),h=["proFieldProps","fieldProps"],v="date",E=d.forwardRef(function(C,U){var R=C.proFieldProps,W=C.fieldProps,I=m()(C,h),K=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:U,valueType:v,fieldProps:o()({getPopupContainer:K.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:v,customLightMode:!0}},I))}),c=E,O=["proFieldProps","fieldProps"],D="dateMonth",_=d.forwardRef(function(C,U){var R=C.proFieldProps,W=C.fieldProps,I=m()(C,O),K=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:U,valueType:D,fieldProps:o()({getPopupContainer:K.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:D,customLightMode:!0}},I))}),n=_,s=["fieldProps"],i="dateQuarter",u=d.forwardRef(function(C,U){var R=C.fieldProps,W=m()(C,s),I=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:U,valueType:i,fieldProps:o()({getPopupContainer:I.getPopupContainer},R),filedConfig:{valueType:i,customLightMode:!0}},W))}),r=u,t=["proFieldProps","fieldProps"],M="dateWeek",b=d.forwardRef(function(C,U){var R=C.proFieldProps,W=C.fieldProps,I=m()(C,t),K=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:U,valueType:M,fieldProps:o()({getPopupContainer:K.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:M,customLightMode:!0}},I))}),L=b,x=["proFieldProps","fieldProps"],j="dateYear",A=d.forwardRef(function(C,U){var R=C.proFieldProps,W=C.fieldProps,I=m()(C,x),K=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:U,valueType:j,fieldProps:o()({getPopupContainer:K.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:j,customLightMode:!0}},I))}),f=A,T=c;T.Week=L,T.Month=n,T.Quarter=r,T.Year=f,T.displayName="ProFormComponent";var Z=T},94607:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(96853),a=e(50959),p=e(57918),l=e(78200),h=e(11527),v=["fieldProps","proFieldProps"],E="dateRange",c=a.forwardRef(function(O,D){var _=O.fieldProps,n=O.proFieldProps,s=m()(O,v),i=(0,a.useContext)(p.Z);return(0,h.jsx)(l.Z,o()({ref:D,fieldProps:o()({getPopupContainer:i.getPopupContainer},_),valueType:E,proFieldProps:n,filedConfig:{valueType:E,customLightMode:!0,lightFilterLabelFormatter:function(r){return(0,d.c)(r,(_==null?void 0:_.format)||"YYYY-MM-DD")}}},s))});P.Z=c},45055:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(50959),a=e(57918),p=e(78200),l=e(11527),h=["fieldProps","proFieldProps"],v="dateTime",E=d.forwardRef(function(c,O){var D=c.fieldProps,_=c.proFieldProps,n=m()(c,h),s=(0,d.useContext)(a.Z);return(0,l.jsx)(p.Z,o()({ref:O,fieldProps:o()({getPopupContainer:s.getPopupContainer},D),valueType:v,proFieldProps:_,filedConfig:{valueType:v,customLightMode:!0}},n))});P.Z=E},88168:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(50959),a=e(78200),p=e(11527),l=["fieldProps","min","proFieldProps","max"],h=function(c,O){var D=c.fieldProps,_=c.min,n=c.proFieldProps,s=c.max,i=m()(c,l);return(0,p.jsx)(a.Z,o()({valueType:"digit",fieldProps:o()({min:_,max:s},D),ref:O,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:n},i))},v=d.forwardRef(h);P.Z=v},57293:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(96393),a=e(50959),p=e(57918),l=e(78200),h=e(11527),v=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],c=a.forwardRef(function(s,i){var u=s.fieldProps,r=s.children,t=s.params,M=s.proFieldProps,b=s.mode,L=s.valueEnum,x=s.request,j=s.showSearch,A=s.options,f=m()(s,v),T=(0,a.useContext)(p.Z);return(0,h.jsx)(l.Z,o()(o()({valueEnum:(0,d.h)(L),request:x,params:t,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({options:A,mode:b,showSearch:j,getPopupContainer:T.getPopupContainer},u),ref:i,proFieldProps:M},f),{},{children:r}))}),O=a.forwardRef(function(s,i){var u=s.fieldProps,r=s.children,t=s.params,M=s.proFieldProps,b=s.mode,L=s.valueEnum,x=s.request,j=s.options,A=m()(s,E),f=o()({options:j,mode:b||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},u),T=(0,a.useContext)(p.Z);return(0,h.jsx)(l.Z,o()(o()({valueEnum:(0,d.h)(L),request:x,params:t,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({getPopupContainer:T.getPopupContainer},f),ref:i,proFieldProps:M},A),{},{children:r}))}),D=c,_=O,n=D;n.SearchSelect=_,n.displayName="ProFormComponent",P.Z=n},11953:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),m=e.n(F),d=e(50959),a=e(78200),p=e(11527),l=["fieldProps","proFieldProps"],h=function(E,c){var O=E.fieldProps,D=E.proFieldProps,_=m()(E,l);return(0,p.jsx)(a.Z,o()({ref:c,valueType:"textarea",fieldProps:O,proFieldProps:D},_))};P.Z=d.forwardRef(h)},79707:function(g,P,e){var B=e(30770);function o(){return(0,B.Z)()}P.ZP={useBreakpoint:o}}}]);
