(this["webpackJsonpzomentum-assignment"]=this["webpackJsonpzomentum-assignment"]||[]).push([[0],{1333:function(e,t,a){e.exports=a.p+"static/media/background.1188941f.jfif"},1334:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),s=(a(47),a(2)),c=(a(48),a(8)),l=a(9),d=a(12),m=a(11),f=a(1348),g=a(4),u=function(e){return e[0].toUpperCase()+e.slice(1)},p={transparent:"transparent",info:"#62B1F6",success:"#5cb85c",danger:"#d9534f",warning:"#f0ad4e",dark:"#000000",white:"#ffffff",light:"#f4f4f4",gray:"#e1e1e1"},h=function(e){for(var t={},a=0;a<e.length;a++)t=Object(s.a)(Object(s.a)({},t),e[a]);return t},b=Object(s.a)(Object(s.a)(Object(s.a)({fontRegular:{fontSize:16},fontBold:{fontWeight:"bold"}},Object.keys(p).reduce((function(e,t){var a;return Object(s.a)(Object(s.a)({},e),{},(a={},Object(g.a)(a,t,{color:p[t]}),Object(g.a)(a,"bg".concat(u(t)),{backgroundColor:p[t]}),a))}),{})),[0,1,2,3,4,5].reduce((function(e,t){var a;return Object(s.a)(Object(s.a)({},e),{},(a={},Object(g.a)(a,"b".concat(t),{border:"solid black ".concat(t,"px")}),Object(g.a)(a,"bx".concat(t),{borderRightWidth:t,borderLeftWidth:t}),Object(g.a)(a,"by".concat(t),{borderTopWidth:t,borderBottomWidth:t}),Object(g.a)(a,"bt".concat(t),{borderTopWidth:t}),Object(g.a)(a,"br".concat(t),{borderRightWidth:t}),Object(g.a)(a,"bb".concat(t),{borderBottomWidth:t}),Object(g.a)(a,"bl".concat(t),{borderLeftWidth:t}),Object(g.a)(a,"m".concat(t),{marginTop:5*t,marginRight:5*t,marginBottom:5*t,marginLeft:5*t}),Object(g.a)(a,"mx".concat(t),{marginRight:5*t,marginLeft:5*t}),Object(g.a)(a,"my".concat(t),{marginTop:5*t,marginBottom:5*t}),Object(g.a)(a,"mt".concat(t),{marginTop:5*t}),Object(g.a)(a,"mr".concat(t),{marginRight:5*t}),Object(g.a)(a,"mb".concat(t),{marginBottom:5*t}),Object(g.a)(a,"ml".concat(t),{marginLeft:5*t}),Object(g.a)(a,"p".concat(t),{paddingTop:5*t,paddingRight:5*t,paddingBottom:5*t,paddingLeft:5*t}),Object(g.a)(a,"px".concat(t),{paddingRight:5*t,paddingLeft:5*t}),Object(g.a)(a,"py".concat(t),{paddingTop:5*t,paddingBottom:5*t}),Object(g.a)(a,"pt".concat(t),{paddingTop:5*t}),Object(g.a)(a,"pr".concat(t),{paddingRight:5*t}),Object(g.a)(a,"pb".concat(t),{paddingBottom:5*t}),Object(g.a)(a,"pl".concat(t),{paddingLeft:5*t}),Object(g.a)(a,"flex".concat(t),{flex:t}),a))}),{})),["left","center","right","justify"].reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(g.a)({},"text".concat(u(t)),{textAlign:t}))}),{})),v=a(34),y=a.n(v),j=a(35),O=a.n(j),k=a(10),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectConversation=function(e){n.props.selectConversation(e)},n.handleInput=function(e){n.setState({search:e.target.value})},n.matchesSearch=function(e){var t=n.state.search;return""==t||!!new RegExp("("+t.toLowerCase()+")+").test(e.name.toLowerCase())},n.state={search:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{elevation:10,style:Object(s.a)({width:"25%",height:"100%",overflow:"scroll",scrollbarColor:this.props.Dark_Mode?"rgb(80, 99, 107)":"rgba(84, 177, 210,0.8)",scrollbarWidth:"thin",backgroundColor:this.props.Dark_Mode?"rgba(10, 15, 15,0.8)":"rgba(84, 177, 210,0.8)",overflowX:"hidden"},b.scrollBar)},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",borderBottom:"solid  0.1px",borderColor:this.props.Dark_Mode?"grey":"#ffffff"}},r.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}},r.a.createElement("img",{style:{width:"7vh",height:"7vh",maxHeight:50,maxWidth:50,borderRadius:"50%",margin:10},src:this.props.user.image}),r.a.createElement("div",{style:{flex:1,justifyContent:"flex-end",display:"flex",marginRight:10}},r.a.createElement("div",{onClick:this.props.switchDarkMode},this.props.Dark_Mode?r.a.createElement(O.a,{style:{color:this.props.Dark_Mode?"grey":"white",fontSize:30}}):r.a.createElement(y.a,{style:{color:this.props.Dark_Mode?"grey":"white",fontSize:30}})))),r.a.createElement(f.a,{style:h([b.b1,b.m2,b.p2,{height:"2vh",borderRadius:10,width:"80%",backgroundColor:this.props.Dark_Mode?"rgba(59, 59, 61,0.4)":"#ffffff",borderColor:this.props.Dark_Mode?"grey":"rgb(84, 177, 210)",display:"flex",alignItems:"centers"}])},r.a.createElement("input",{id:"input",onChange:this.handleInput,style:{height:"2vh",width:"100%",color:this.props.Dark_Mode?"rgb(211, 211, 211)":"rgb(80, 99, 107)",backgroundColor:"transparent",border:"none",fontSize:"2.5vh",outline:"none"},multiline:!0}))),this.props.list&&this.props.list.map((function(t){return e.matchesSearch(t)?r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:"solid  0.1px",borderColor:e.props.Dark_Mode?"grey":"#ffffff"},onClick:function(){e.selectConversation(t)}},r.a.createElement("img",{style:{width:"75%",height:"75%",maxHeight:75,maxWidth:75,borderRadius:"50%",margin:10},src:t.image}),r.a.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",padding:10,justifyContent:"center",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{flex:1,color:"rgb(230, 230, 230)",fontSize:"2.2vh",marginBottom:10,fontWeight:"bold"}},t.name),r.a.createElement("div",{style:{flex:1,color:b.text_color,width:"100%",overflow:"hidden",textOverflow:"ellipsis",fontSize:"2vh"}},t.lastMessage)),t.unreadMessages.length>0&&r.a.createElement("div",{style:{alignSelf:"flex-end",margin:10,marginLeft:"auto",color:"white",backgroundColor:e.props.Dark_Mode?"rgb(65, 65, 65)":"rgba(84, 177, 210)",padding:5,borderRadius:1e3,height:20,width:20,display:"flex",justifyContent:"center",alignItems:"center"}},t.unreadMessages.length)):null})))}}]),a}(n.Component),M=Object(k.b)((function(e){return{list:e.reducer.contacts,Dark_Mode:e.reducer.Dark_Mode,user:e.reducer.user}}),{selectConversation:function(e){return function(t){console.log(e),t({type:"SELECT_CONVERSATION",payload:e})}},switchDarkMode:function(){return function(e){console.log("Switching Theme"),e({type:"SWITCH_DARK_MODE"})}}})(C),x=a(36),E=a.n(x),D=a(3),w=a.n(D),_="rgba(29, 34, 38,0.8)",S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{elevation:10,style:Object(s.a)(Object(s.a)({height:"12%",width:"100%",alignItems:"center",display:"flex",flexDirection:"row",backgroundColor:this.props.Dark_Mode?_:"rgba(233, 242, 246,0.9)",borderRadius:0},b.bb1),{},{borderColor:"grey"})},r.a.createElement("div",{style:{height:"100%",width:"10%",alignItems:"center",display:"flex"}},r.a.createElement("img",{style:{width:"7vh",height:"7vh",borderRadius:"90%",marginLeft:10,marginRight:10},src:this.props.image})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:"100%",marginLeft:10,overflow:"hidden"}},r.a.createElement("div",{style:{fontSize:"2.5vh",fontWeight:"bold",color:this.props.Dark_Mode?b.text_color:"rgb(60, 80, 90)"}},this.props.name),r.a.createElement("div",{style:{fontSize:"2vh",color:this.props.Dark_Mode?b.text_color:"#61b7d5"}},this.props.isOnline?"Online":"Last seen at "+w.a.date.past().toLocaleTimeString())),r.a.createElement("div",{style:{flex:1,justifyContent:"flex-end",display:"flex"}},r.a.createElement("div",{style:h([{backgroundColor:this.props.Dark_Mode?"transparent":"#61b7d5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:100,padding:5},b.m2])},r.a.createElement(E.a,{style:h([{color:this.props.Dark_Mode?"grey":"#ffffff",fontSize:25}])}))))}}]),a}(n.Component),I=Object(k.b)((function(e){return console.log("store",e),{name:e.reducer.selectedConversation.name,isOnline:e.reducer.selectedConversation.isOnline,image:e.reducer.selectedConversation.image,Dark_Mode:e.reducer.Dark_Mode}}),{})(S),R=a(1336),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).updateScroll=function(){var e=document.getElementById("messageList");e.scrollTop=e.scrollHeight},e.isImage=function(e){return console.log("msg",e),!(e.length<3)&&"jpg"==e.slice(e.length-3)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateScroll()}},{key:"componentDidUpdate",value:function(){this.updateScroll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"messageList",style:{flex:1,overflowY:"scroll",scrollbarColor:"grey",scrollbarWidth:"thin",backgroundColor:this.props.Dark_Mode?_:"rgba(233, 242, 246,0.9)",width:"100%"}},this.props.messages.map((function(t){return r.a.createElement("div",{style:h([b.m2,{display:"flex",flexDirection:"column"}])},r.a.createElement(R.a,{elevation:1,style:h([{alignSelf:t.sender==e.props.user.name?"flex-end":"flex-start",borderRadius:10,borderTopLeftRadius:t.sender==e.props.user.name?10:0,borderTopRightRadius:t.sender==e.props.user.name?0:10,fontSize:"2.3vh",color:t.sender!=e.props.user.name?e.props.Dark_Mode?"rgb(230, 230, 230)":"rgb(120, 140, 160)":e.props.Dark_Mode?"rgb(144, 144, 146)":"#ffffff",backgroundColor:t.sender!=e.props.user.name?e.props.Dark_Mode?"rgb(65, 65, 65,0.6)":"#ffffff":e.props.Dark_Mode?"rgba(34, 34, 34,0.6)":"rgb(97, 183, 213)"},b.b0,b.p2])},e.isImage(t.message)?r.a.createElement("img",{src:t.message,style:{height:"20vh",width:"20vw"}}):t.message))})))}}]),a}(n.Component),L=Object(k.b)((function(e){return console.log("messages",e.reducer.selectedConversation),{user:e.reducer.user,messages:e.reducer.selectedConversation.messages,Dark_Mode:e.reducer.Dark_Mode}}),{})(W),N=a(37),T=a.n(N),B=a(38),z=a.n(B),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({message:e.target.value})},n.handleSend=function(e){console.log(n.state.message),n.props.addMessage({message:"object"!=typeof e?e:n.state.message,sender:n.props.user.name,timeStamp:Date.now()}),n.clearInput()},n.clearInput=function(){n.setState({message:""}),document.getElementById("message").value=""},n.getImages=function(){for(var e=[],t=function(){var t=D.image.avatar();e.push(r.a.createElement("img",{onClick:function(){n.handleSend(t),n.setState({openGallery:!n.state.openGallery})},src:t,style:{flex:1,height:"10vh",minWidth:100}}))},a=0;a<Math.floor(100*Math.random());a++)t();return e},n.state={message:"",openGallery:!1},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.selected.name!=e.selected.name&&this.clearInput()}},{key:"render",value:function(){var e=this,t=this.state.openGallery;return r.a.createElement("div",{style:{height:t?"30vh":null,width:"100%",overflowY:t?"scroll":"hidden",scrollbarColor:"grey",scrollbarWidth:"thin"}},r.a.createElement("div",{style:{width:"100%",backgroundColor:this.props.Dark_Mode?_:"rgba(233, 242, 246,0.9)",display:"flex",alignItems:"center"}},r.a.createElement(f.a,{style:h([b.b1,b.m2,b.p2,{borderRadius:10,width:"80%",flex:1,backgroundColor:this.props.Dark_Mode?"rgba(59, 59, 61,0.4)":"#ffffff",borderColor:"grey"}])},r.a.createElement("textarea",{id:"message",onChange:this.handleInput,style:{height:"3vh",width:"100%",color:this.props.Dark_Mode?"rgb(211, 211, 211)":"rgb(80, 99, 107)",backgroundColor:"transparent",border:"solid black 0px",outline:"none",fontSize:"2.5vh"},multiline:!0})),r.a.createElement("div",{onClick:function(){e.setState({openGallery:!e.state.openGallery})},style:h([{backgroundColor:this.props.Dark_Mode?"transparent":"#61b7d5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:100,padding:5},b.m2])},r.a.createElement(T.a,{style:h([{color:this.props.Dark_Mode?"grey":"#ffffff",fontSize:30}])})),r.a.createElement("div",{onClick:this.handleSend,style:h([{backgroundColor:this.props.Dark_Mode?"transparent":"#61b7d5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:100,padding:5},b.m2])},r.a.createElement(z.a,{style:h([{color:this.props.Dark_Mode?"grey":"#ffffff",fontSize:30}])}))),t&&r.a.createElement("div",{id:"messageList",style:{height:"100%",flex:1,justifyContent:"center",backgroundColor:this.props.Dark_Mode?_:"rgba(233, 242, 246,0.9)",width:"100%"}},this.getImages()))}}]),a}(n.Component),G=Object(k.b)((function(e){return{user:e.reducer.user,selected:e.reducer.selectedConversation,Dark_Mode:e.reducer.Dark_Mode}}),{addMessage:function(e){return function(t){console.log("New Message",e),t({type:"ADD_MESSAGE",payload:e})}}})(A),H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%",flex:1,display:"flex",flexDirection:"column"}},r.a.createElement(I,null),r.a.createElement(L,null),r.a.createElement(G,null))}}]),a}(n.Component);var U=function(){return r.a.createElement("div",{style:Object(s.a)(Object(s.a)({width:"100vw",height:"100vh"},b.m0),{},{scrollbarColor:"grey",scrollbarWidth:"thin",overflowY:"scroll",justifyContent:"center",alignItems:"center",display:"flex"})},r.a.createElement("img",{src:a(1333),style:{position:"absolute",zIndex:0,width:"100%",height:"100%"}}),r.a.createElement(f.a,{elevation:12,style:{zIndex:1,height:"75%",width:"75%",flexDirection:"row",display:"flex",backgroundColor:"transparent"}},r.a.createElement(M,{list:[{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()},{name:w.a.name.findName()}]}),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(13),J=a(39),K=a(40),V={image:w.a.image.avatar(),name:w.a.name.findName()},F=function(e){for(var t=[],a=0;a<Math.floor(100*Math.random());a++)t.push({message:w.a.lorem.words(),sender:Math.floor(2*Math.random())?e:V.name,timeStamp:Date.parse(w.a.date.past())});return t},X=function(){for(var e=[],t=0;t<Math.floor(100*Math.random());t++){var a=w.a.name.findName(),n=F(a);e.push({name:a,image:w.a.image.avatar(),lastMessage:w.a.lorem.words(),messages:n,unreadMessages:n.slice(Math.floor(Math.random()*n.length)),isOnline:Math.floor(2*Math.random())})}return console.log("contacts",e),e}();X[0].unreadMessages=[];var $={contacts:X,selectedConversation:X[0],user:V,Dark_Mode:!1};var q=Object(Y.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CONVERSATION":return Object(s.a)(Object(s.a)({},e),{},{selectedConversation:t.payload,contacts:e.contacts.map((function(a){return t.payload.name==a.name?Object(s.a)(Object(s.a)({},a),{},{unreadMessages:[]}):e.selectedConversation.name==a.name?Object(s.a)(Object(s.a)({},e.selectedConversation),{},{unreadMessages:[]}):a}))});case"ADD_MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{selectedConversation:Object(s.a)(Object(s.a)({},e.selectedConversation),{},{messages:[].concat(Object(K.a)(e.selectedConversation.messages),[t.payload])})});case"SWITCH_DARK_MODE":return Object(s.a)(Object(s.a)({},e),{},{Dark_Mode:!e.Dark_Mode});default:return e}}}),P=[J.a],Q=Object(Y.e)(q,{},Object(Y.d)(Y.a.apply(void 0,P)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{store:Q},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports=a(1334)},47:function(e,t,a){},48:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.af1f3d26.chunk.js.map