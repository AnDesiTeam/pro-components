"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[9110],{87550:function(R,o,e){e.r(o);var l=e(91699),a=e(59569),h=e(49152),i=e(81054),g=e(77424),x=e(82149),d=e(72324),_=e(78200),m=e(92805),n=e(11527);o.default=function(){return(0,n.jsx)(l.A,{initialValues:{content:"\u793A\u4F8B\u6C34\u5370",fontColor:"rgba(0,0,0,.15)",fontSize:"16",zIndex:9,rotate:"-22"},submitter:!1,children:(0,n.jsxs)(a.Z,{split:"vertical",title:"\u6C34\u5370\u81EA\u5B9A\u4E49\u914D\u7F6E\u5668",headerBordered:!0,bordered:!0,children:[(0,n.jsx)(a.Z,{colSpan:"70%",children:(0,n.jsx)(h.Z,{name:["rotate","content","fontColor","fontSize","zIndex"],children:function(s){var t=s.rotate,r=s.content,O=s.fontColor,I=s.fontSize,D=s.zIndex;return(0,n.jsxs)(i.D,{rotate:t,content:r,fontColor:O,fontSize:I,zIndex:D,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid perferendis, adipisci dolorum officia odio natus facere cumque iusto libero repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus totam?"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis deserunt accusantium ullam."}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo accusantium ipsam error provident voluptate molestias magnam quisquam excepturi illum sit!"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum voluptate non!"})]}),(0,n.jsxs)("h4",{children:["\u4E0B\u9762\u662F\u4E00\u5F20zIndex \u4E3A 10 \u7684 position \u4E3A relative \u56FE\u7247\uFF0C",(0,n.jsx)("br",{})," \u5982\u679C\u8981\u5728\u56FE\u7247\u4E2D\u5C55\u793A\u6C34\u5370\u5C1D\u8BD5\u8C03\u5927\u53F3\u4FA7\u7684 zIndex \u6ED1\u5757\u8BD5\u8BD5\u3002"]}),(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg",alt:"\u793A\u4F8B\u56FE\u7247",width:600,style:{zIndex:10,maxWidth:"100%",position:"relative"}})]})}})}),(0,n.jsxs)(a.Z,{title:"\u914D\u7F6E\u9762\u677F",children:[(0,n.jsx)(g.Z,{label:"\u6C34\u5370\u6587\u5B57",name:"content"}),(0,n.jsx)(x.Z,{label:"\u5B57\u4F53\u989C\u8272",name:"fontColor"}),(0,n.jsx)(d.Z,{label:"\u5B57\u4F53\u5927\u5C0F",name:"fontSize"}),(0,n.jsx)(d.Z,{label:"zIndex",name:"zIndex",min:0,max:100}),(0,n.jsx)(d.Z,{label:"\u65CB\u8F6C\u89D2\u5EA6",name:"rotate",min:-90,max:90}),(0,n.jsx)(m.Z,{}),(0,n.jsx)(h.Z,{name:["rotate","content","fontColor","fontSize","zIndex"],children:function(s){var t=s.rotate,r=s.content,O=s.fontColor,I=s.fontSize,D=s.zIndex;return(0,n.jsx)(_.Z,{ignoreFormItem:!0,mode:"read",valueType:"code",style:{width:220},text:`<WaterMark
  rotate={`.concat(t,`}
  content='`).concat(r,`'
  fontColor='`).concat(O,`'
  fontSize={`).concat(I,`}
  zIndex={`).concat(D,`}
>
  <div>xxx</div>
</WaterMark>`)})}})]})]})})}},26088:function(R,o,e){e.r(o);for(var l=e(26129),a=e(81054),h=e(27753),i=e(11527),g={0:"close",1:"running",2:"online",3:"error"},x=[],d=["\u4ED8\u5C0F\u5C0F","\u66F2\u4E3D\u4E3D","\u6797\u4E1C\u4E1C","\u9648\u5E05\u5E05","\u517C\u67D0\u67D0"],_=0;_<10;_+=1)x.push({key:_,name:"AppName",containers:Math.floor(Math.random()*20),creator:d[Math.floor(Math.random()*d.length)],status:g[Math.floor(Math.random()*10)%4],createdAt:Date.now()-Math.floor(Math.random()*1e5),memo:_%2===1?"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u5B57\u8981\u5C55\u793A\u4F46\u662F\u8981\u7559\u4E0B\u5C3E\u5DF4":"\u7B80\u77ED\u5907\u6CE8\u6587\u6848"});var m=[{title:"\u5E94\u7528\u540D\u79F0",width:80,dataIndex:"name",render:function(p){return(0,i.jsx)("a",{children:p})}},{title:"\u5BB9\u5668\u6570\u91CF",dataIndex:"containers",align:"right",sorter:function(p,s){return p.containers-s.containers}},{title:"\u72B6\u6001",width:80,dataIndex:"status",initialValue:"all",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},close:{text:"\u5173\u95ED",status:"Default"},running:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},online:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},error:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u521B\u5EFA\u8005",width:80,dataIndex:"creator",valueEnum:{all:{text:"\u5168\u90E8"},\u4ED8\u5C0F\u5C0F:{text:"\u4ED8\u5C0F\u5C0F"},\u66F2\u4E3D\u4E3D:{text:"\u66F2\u4E3D\u4E3D"},\u6797\u4E1C\u4E1C:{text:"\u6797\u4E1C\u4E1C"},\u9648\u5E05\u5E05:{text:"\u9648\u5E05\u5E05"},\u517C\u67D0\u67D0:{text:"\u517C\u67D0\u67D0"}}},{title:"\u5907\u6CE8",dataIndex:"memo",ellipsis:!0,copyable:!0},{title:"\u64CD\u4F5C",width:180,key:"option",valueType:"option",render:function(){return[(0,i.jsx)("a",{children:"\u94FE\u8DEF"},"link"),(0,i.jsx)("a",{children:"\u62A5\u8B66"},"link2"),(0,i.jsx)("a",{children:"\u76D1\u63A7"},"link3"),(0,i.jsx)(l.Z,{menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];o.default=function(){return(0,i.jsx)(a.D,{content:"\u8682\u8681\u96C6\u56E2",children:(0,i.jsx)(h.Z,{columns:m,dataSource:x,rowKey:"key",pagination:{showQuickJumper:!0},search:!1,dateFormatter:"string",headerTitle:"\u8868\u683C\u6807\u9898",toolBarRender:!1})})}},63895:function(R,o,e){e.r(o);var l=e(81054),a=e(11527);o.default=function(){return(0,a.jsx)(l.D,{height:36,width:115,image:"https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg",children:(0,a.jsxs)("div",{style:{height:500},children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid perferendis, adipisci dolorum officia odio natus facere cumque iusto libero repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus totam?"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis deserunt accusantium ullam."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo accusantium ipsam error provident voluptate molestias magnam quisquam excepturi illum sit!"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum voluptate non!"})]})})}},78603:function(R,o,e){e.r(o);var l=e(81054),a=e(11527);o.default=function(){return(0,a.jsx)(l.D,{content:"\u8682\u8681\u96C6\u56E2",children:(0,a.jsx)("div",{style:{height:500}})})}},58679:function(R,o,e){e.r(o);var l=e(81054),a=e(11527);o.default=function(){return(0,a.jsx)(l.D,{content:["\u8682\u8681\u96C6\u56E2","\u591A\u884C\u6587\u5B57"],children:(0,a.jsx)("div",{style:{height:500}})})}},81054:function(R,o,e){e.d(o,{D:function(){return p}});var l=e(57213),a=e.n(l),h=e(54306),i=e.n(h),g=e(61447),x=e(84875),d=e.n(x),_=e(50959),m=e(11527),n=function(t){if(!t)return 1;var r=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},p=function(t){var r=t.children,O=t.style,I=t.className,D=t.markStyle,z=t.markClassName,u=t.zIndex,W=u===void 0?9:u,P=t.gapX,c=P===void 0?212:P,j=t.gapY,A=j===void 0?222:j,T=t.width,C=T===void 0?120:T,U=t.height,B=U===void 0?64:U,M=t.rotate,E=M===void 0?-22:M,b=t.image,v=t.content,y=t.offsetLeft,F=t.offsetTop,Z=t.fontStyle,N=Z===void 0?"normal":Z,$=t.fontWeight,Q=$===void 0?"normal":$,k=t.fontColor,X=k===void 0?"rgba(0,0,0,.15)":k,Y=t.fontSize,V=Y===void 0?16:Y,G=t.fontFamily,J=G===void 0?"sans-serif":G,ae=t.prefixCls,oe=(0,_.useContext)(g.ZP.ConfigContext),ie=oe.getPrefixCls,H=ie("pro-layout-watermark",ae),se=d()("".concat(H,"-wrapper"),I),re=d()(H,z),ue=(0,_.useState)(""),w=i()(ue,2),q=w[0],ee=w[1];return(0,_.useEffect)(function(){var K=document.createElement("canvas"),f=K.getContext("2d"),L=n(f),le="".concat((c+C)*L,"px"),_e="".concat((A+B)*L,"px"),de=y||c/2,ce=F||A/2;if(K.setAttribute("width",le),K.setAttribute("height",_e),f){f.translate(de*L,ce*L),f.rotate(Math.PI/180*Number(E));var me=C*L,te=B*L;if(b){var S=new Image;S.crossOrigin="anonymous",S.referrerPolicy="no-referrer",S.src=b,S.onload=function(){f.drawImage(S,0,0,me,te),ee(K.toDataURL())}}else if(v){var ne=Number(V)*L;f.font="".concat(N," normal ").concat(Q," ").concat(ne,"px/").concat(te,"px ").concat(J),f.fillStyle=X,Array.isArray(v)?v==null||v.forEach(function(pe,Ee){return f.fillText(pe,0,Ee*ne)}):f.fillText(v,0,0),ee(K.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[c,A,y,F,E,N,Q,C,B,J,X,b,v,V]),(0,m.jsxs)("div",{style:a()({position:"relative"},O),className:se,children:[r,(0,m.jsx)("div",{className:re,style:a()(a()({zIndex:W,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(c+C,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},q?{backgroundImage:"url('".concat(q,"')")}:{}),D)})]})}},26129:function(R,o,e){var l=e(12342),a=e.n(l),h=e(57213),i=e.n(h),g=e(5827),x=e(43040),d=e(59001),_=e(61447),m=e(85536),n=e(85797),p=e(84875),s=e.n(p),t=e(50959),r=e(11527),O=["key","name"],I=function(u){var W=u.children,P=u.menus,c=u.onSelect,j=u.className,A=u.style,T=(0,t.useContext)(_.ZP.ConfigContext),C=T.getPrefixCls,U=C("pro-table-dropdown"),B=(0,d.Q)({onClick:function(E){return c&&c(E.key)},items:P==null?void 0:P.map(function(M){return{label:M.name,key:M.key}})});return(0,r.jsx)(m.Z,i()(i()({},B),{},{className:s()(U,j),children:(0,r.jsxs)(n.ZP,{style:A,children:[W," ",(0,r.jsx)(g.Z,{})]})}))},D=function(u){var W=u.className,P=u.style,c=u.onSelect,j=u.menus,A=j===void 0?[]:j,T=u.children,C=(0,t.useContext)(_.ZP.ConfigContext),U=C.getPrefixCls,B=U("pro-table-dropdown"),M=(0,d.Q)({onClick:function(b){c==null||c(b.key)},items:A.map(function(E){var b=E.key,v=E.name,y=a()(E,O);return i()(i()({key:b},y),{},{title:y.title,label:v})})});return(0,r.jsx)(m.Z,i()(i()({},M),{},{className:s()(B,W),children:(0,r.jsx)("a",{style:P,children:T||(0,r.jsx)(x.Z,{})})}))};D.Button=I,o.Z=D}}]);
