(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{282:function(t,n){},290:function(t,n){},308:function(t,n){},310:function(t,n){},329:function(t,n){},391:function(t,n){},393:function(t,n){},426:function(t,n){},428:function(t,n){},429:function(t,n){},434:function(t,n){},436:function(t,n){},443:function(t,n){},456:function(t,n){},468:function(t,n){},471:function(t,n){},476:function(t,n){},483:function(t,n){},491:function(t,n){},493:function(t,n){},593:function(t,n,e){},595:function(t,n,e){"use strict";e.r(n);var a,c,o,r,i,s,l,u,d,x,b,p,j,h,f,m,g=e(8),O=e(110),A=e.n(O),y=e(3),C=e.n(y),w=e(59),M=e(77),S=e(26),v=e(76),T=e(90),E=e.n(T),N=e(256),k=e.n(N),_=e(93),P=e(257),D=e(30),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},I),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},t),{},{account:n.payload.account});default:return t}},L={loading:!1,cost:0,totalSupply:0,userMintedAmount:0,onlyAllowlisted:!0,paused:!0,maxMintAmountPerTransaction:1,mintCount:!0,publicSaleMaxMintAmountPerAddress:10,allowlistUserAmount:1,allowlistType:0,error:!1,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,userMintedAmount:n.payload.userMintedAmount,paused:n.payload.paused,onlyAllowlisted:n.payload.onlyAllowlisted,maxMintAmountPerTransaction:n.payload.maxMintAmountPerTransaction,mintCount:n.payload.mintCount,publicSaleMaxMintAmountPerAddress:n.payload.publicSaleMaxMintAmountPerAddress,allowlistUserAmount:n.payload.allowlistUserAmount,allowlistType:n.payload.allowlistType,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},L),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},U=Object(_.b)({blockchain:K,data:R}),F=[P.a],H=Object(_.c)(_.a.apply(void 0,F)),z=Object(_.d)(U,H),W=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},Y=function(){return function(){var t=Object(w.a)(C.a.mark((function t(n){var e,a,c,o,r,i,s,l,u,d;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,e=z.getState().blockchain,t.next=5,z.getState().blockchain.smartContract.methods.totalSupply().call();case 5:return a=t.sent,t.next=8,z.getState().blockchain.smartContract.methods.getUserMintedAmount(e.account).call();case 8:return c=t.sent,t.next=11,z.getState().blockchain.smartContract.methods.paused().call();case 11:return o=t.sent,t.next=14,z.getState().blockchain.smartContract.methods.onlyAllowlisted().call();case 14:return r=t.sent,t.next=17,z.getState().blockchain.smartContract.methods.maxMintAmountPerTransaction().call();case 17:return i=t.sent,t.next=20,z.getState().blockchain.smartContract.methods.mintCount().call();case 20:return s=t.sent,t.next=23,z.getState().blockchain.smartContract.methods.publicSaleMaxMintAmountPerAddress().call();case 23:return l=t.sent,t.next=26,z.getState().blockchain.smartContract.methods.getAllowlistUserAmount(e.account).call();case 26:return u=t.sent,t.next=29,z.getState().blockchain.smartContract.methods.allowlistType().call();case 29:d=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:a,userMintedAmount:c,paused:o,onlyAllowlisted:r,maxMintAmountPerTransaction:i,mintCount:s,publicSaleMaxMintAmountPerAddress:l,allowlistUserAmount:u,allowlistType:d}}),t.next=37;break;case 33:t.prev=33,t.t0=t.catch(1),console.log(t.t0),n(W("Could not load data from contract."));case 37:case"end":return t.stop()}}),t,null,[[1,33]])})));return function(n){return t.apply(this,arguments)}}()},B=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(w.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(Y());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Q=e(27),q=Q.a.div(a||(a=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),X=Q.a.div(c||(c=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(o||(o=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(r||(r=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Q.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(Q.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),et=(Q.a.div(x||(x=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),[["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5],["0xdecf4b112d4120b6998e5020a6b4819e490f7db6",5]]),at=e(10),ct=e(594).ethers,ot=e(562).MerkleTree,rt=e(591),it=Q.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=Q.a.button(p||(p=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),lt=Q.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ut=Q.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),dt=Q.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),xt=Q.a.a(m||(m=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var bt=function(){var t,n,e,a,c,o,r,i=Object(v.b)(),s=Object(v.c)((function(t){return t.blockchain})),l=Object(v.c)((function(t){return t.data})),u=Object(g.useState)(!1),d=Object(M.a)(u,2),x=d[0],b=d[1],p=Object(g.useState)("\u8cfc\u5165\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066NFT\u3092\u30df\u30f3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),j=Object(M.a)(p,2),h=j[0],f=j[1],m=Object(g.useState)(1),O=Object(M.a)(m,2),A=O[0],y=O[1],S=Object(g.useState)(0),T=Object(M.a)(S,2),N=T[0],_=T[1],P=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),D=Object(M.a)(P,2),I=D[0],K=D[1],L=-1,R=function(){i(function(){var t=Object(w.a)(C.a.mark((function t(n){var e,a,c,o,r,i,s,l,u;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return a=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=t.sent,t.next=12,c.json();case 12:if(o=t.sent,r=window,!(i=r.ethereum)||!i.isMetaMask){t.next=33;break}return E.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==o.NETWORK.ID?(u=new E.a(a,o.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(B("Change network to ".concat(o.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(B("Something went wrong."));case 31:t.next=34;break;case 33:n(B("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}())},U=function(){""!==s.account&&null!==s.smartContract&&i(Y(s.account))},F=function(){var t=Object(w.a)(C.a.mark((function t(){var n,e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,K(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.useEffect)((function(){F()}),[]),Object(g.useEffect)((function(){U()}),[s.account]),Object(g.useEffect)((function(){""!==s.account&&null!==s.smartContract&&(t=et.map((function(t){return t[0]})),L=t.indexOf(s.account),0==l.allowlistType?_(-1==L?0:et[L][1]):1==l.allowlistType&&_(l.allowlistUserAmount))}),[l.loading]),Object(at.jsx)(q,{children:Object(at.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:I.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(at.jsx)(ut,{alt:"logo",src:"/config/images/logo.png"}),Object(at.jsx)(J,{}),Object(at.jsxs)(lt,{flex:1,style:{padding:24},test:!0,children:[Object(at.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(at.jsx)(dt,{alt:"example",src:"/config/images/left.png"})}),Object(at.jsx)(Z,{}),Object(at.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(at.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[l.totalSupply," / ",I.MAX_SUPPLY]}),Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(at.jsx)(xt,{target:"_blank",href:I.SCAN_LINK,children:(o=I.CONTRACT_ADDRESS,r=15,o.length>r?"".concat(o.substring(0,r),"..."):o)})}),Object(at.jsx)(J,{}),Number(l.totalSupply)>=I.MAX_SUPPLY?Object(at.jsxs)(at.Fragment,{children:[Object(at.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(at.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",I.NFT_NAME," on"]}),Object(at.jsx)(J,{}),Object(at.jsx)(xt,{target:"_blank",href:I.MARKETPLACE_LINK,children:I.MARKETPLACE})]}):Object(at.jsxs)(at.Fragment,{children:[Object(at.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:[I.SYMBOL," 1\u679a\u306b\u3064\u304d ",I.DISPLAY_COST," ",I.NETWORK.SYMBOL,"."]}),Object(at.jsx)(X,{}),Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"\u5225\u9014\u30ac\u30b9\u4ee3\u304c\u304b\u304b\u308a\u307e\u3059\u3002"}),Object(at.jsx)(J,{}),""===s.account||null===s.smartContract?Object(at.jsxs)($,{ai:"center",jc:"center",children:[Object(at.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:[I.NETWORK.NAME," Network \u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),Object(at.jsx)(J,{}),Object(at.jsx)(it,{onClick:function(t){t.preventDefault(),R(),U()},children:"\u63a5\u7d9a"}),""!==s.errorMsg?Object(at.jsxs)(at.Fragment,{children:[Object(at.jsx)(J,{}),Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:s.errorMsg})]}):null]}):Object(at.jsxs)(at.Fragment,{children:[Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:1==l.loading?"\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059\u3002\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002":0==l.paused?1==l.onlyAllowlisted?0==N?"\u63a5\u7d9a\u3057\u305f\u30a6\u30a9\u30ec\u30c3\u30c8\u306f\u30a2\u30ed\u30fc\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002":1==l.mintCount?0<N-l.userMintedAmount?h+"\u3042\u3068"+(N-l.userMintedAmount)+"\u679a\u30df\u30f3\u30c8\u3067\u304d\u307e\u3059\u3002":"\u3042\u306a\u305f\u306e\u30a2\u30ed\u30fc\u30ea\u30b9\u30c8\u306e\u30df\u30f3\u30c8\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f\u3002":h:1==l.mintCount?0<l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount?h+"\u3042\u3068"+(l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount)+"\u679a\u30df\u30f3\u30c8\u3067\u304d\u307e\u3059\u3002":"\u30df\u30f3\u30c8\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f\u3002":h:1==l.onlyAllowlisted?0==N?"\u73fe\u5728\u30df\u30f3\u30c8\u306f\u505c\u6b62\u4e2d\u3067\u3059\u3002\u63a5\u7d9a\u3057\u305f\u30a6\u30a9\u30ec\u30c3\u30c8\u306f\u30a2\u30ed\u30fc\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002":1==l.mintCount?0<N-l.userMintedAmount?"\u73fe\u5728\u30df\u30f3\u30c8\u306f\u505c\u6b62\u4e2d\u3067\u3059\u3002\u63a5\u7d9a\u3057\u305f\u30a6\u30a9\u30ec\u30c3\u30c8\u306f\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u3066\u3001\u3042\u3068"+(N-l.userMintedAmount)+"\u679a\u30df\u30f3\u30c8\u3067\u304d\u307e\u3059\u3002":"\u73fe\u5728\u30df\u30f3\u30c8\u306f\u505c\u6b62\u4e2d\u3067\u3059\u3002\u30df\u30f3\u30c8\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f\u3002":"\u73fe\u5728\u30df\u30f3\u30c8\u306f\u505c\u6b62\u4e2d\u3067\u3059\u3002":"\u73fe\u5728\u30df\u30f3\u30c8\u306f\u505c\u6b62\u4e2d\u3067\u3059\u3002"}),Object(at.jsx)(V,{}),Object(at.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(at.jsx)(st,{style:{lineHeight:.4},disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t=A-10;t<1&&(t=1),y(t)}()},children:"-10"}),Object(at.jsx)(V,{}),Object(at.jsx)(st,{style:{lineHeight:.4},disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t=A-1;t<1&&(t=1),y(t)}()},children:"-1"}),Object(at.jsx)(V,{}),Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:A}),Object(at.jsx)(V,{}),Object(at.jsx)(st,{disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t,n=A+1;(t=1==l.onlyAllowlisted?Math.min(N-l.userMintedAmount,l.maxMintAmountPerTransaction):1==l.mintCount?Math.min(l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount,l.maxMintAmountPerTransaction):l.maxMintAmountPerTransaction)<n&&(n=t),0==n&&(n=1),y(n)}()},children:"+1"}),Object(at.jsx)(V,{}),Object(at.jsx)(st,{disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t,n=A+10;(t=1==l.onlyAllowlisted?Math.min(N-l.userMintedAmount,l.maxMintAmountPerTransaction):1==l.mintCount?Math.min(l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount,l.maxMintAmountPerTransaction):l.maxMintAmountPerTransaction)<n&&(n=t),0==n&&(n=1),y(n)}()},children:"+10"})]}),Object(at.jsx)(J,{}),Object(at.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(at.jsx)(it,{disabled:x?1:0==l.paused?1==l.onlyAllowlisted?0==N?1:1==l.mintCount?0<N-l.userMintedAmount?0:1:0:1==l.mintCount?0<l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount?0:1:0:1,onClick:function(o){o.preventDefault(),function(){var o,r=I.WEI_COST,l=I.GAS_LIMIT,u=String(r*A),d=String(l*A);t=et.map((function(t){return t[0]})),n=et.map((function(t){return ct.utils.solidityKeccak256(["address","uint256"],[t[0],t[1]])})),e=new ot(n,rt,{sortPairs:!0}),-1==(L=t.indexOf(s.account))?(o=0,a=ct.utils.solidityKeccak256(["address","uint256"],[et[0][0],et[0][1]]),c=e.getHexProof(a)):(o=et[L][1],a=ct.utils.solidityKeccak256(["address","uint256"],[et[L][0],et[L][1]]),c=e.getHexProof(a)),console.log("Cost: ",u),console.log("Gas limit: ",d),f(" ".concat(I.NFT_NAME," \u3092\u30df\u30f3\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002")),b(!0),s.smartContract.methods.mint(A,o,c,A).send({to:I.CONTRACT_ADDRESS,from:s.account,value:u}).once("error",(function(t){console.log(t),f("Sorry, something went wrong please try again later."),b(!1)})).then((function(t){console.log(t),f("".concat(I.NFT_NAME,"\u304c\u30df\u30f3\u30c8\u3067\u304d\u307e\u3057\u305f! Opensea.io \u3067\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),b(!1),i(Y(s.account))}))}(),U()},children:x?"\u8aad\u307f\u8fbc\u307f\u4e2d":0==l.paused?1==l.onlyAllowlisted?0==N?"STOP":1==l.mintCount?0<N-l.userMintedAmount?"MINT":"STOP":"MINT":1==l.mintCount?0<l.publicSaleMaxMintAmountPerAddress-l.userMintedAmount?"MINT":"STOP":"MINT":"STOP"})})]})]}),Object(at.jsx)(V,{})]}),Object(at.jsx)(Z,{}),Object(at.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(at.jsx)(dt,{alt:"example",src:"/config/images/right.png"})})]}),Object(at.jsx)(V,{}),Object(at.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(at.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["\u6b63\u3057\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044 (",I.NETWORK.NAME," Mainnet) \u3002\u4f55\u5ea6\u3082\u8cfc\u5165\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u305d\u306e\u5ea6\u306b\u8cfc\u5165\u3055\u308c\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"]}),Object(at.jsx)(J,{}),Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:"\u30ac\u30b9\u4ee3\u304c\u4f4e\u3059\u304e\u308b\u3068\u5931\u6557\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u9069\u5207\u306a\u30ac\u30b9\u4ee3\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})]})})},pt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,599)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;e(t),a(t),c(t),o(t),r(t)}))};e(593);A.a.render(Object(at.jsx)(v.a,{store:z,children:Object(at.jsx)(bt,{})}),document.getElementById("root")),pt()}},[[595,1,2]]]);
//# sourceMappingURL=main.13f88f2f.chunk.js.map