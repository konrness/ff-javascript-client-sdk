var et=Object.create,ke=Object.defineProperty,tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,rt=Object.getOwnPropertyNames,it=Object.getOwnPropertyDescriptor;var W=Object.assign,at=t=>ke(t,"__esModule",{value:!0});var ot=(t,s)=>()=>(s||(s={exports:{}},t(s.exports,s)),s.exports);var st=(t,s,h)=>{if(s&&typeof s=="object"||typeof s=="function")for(let d of rt(s))!nt.call(t,d)&&d!=="default"&&ke(t,d,{get:()=>s[d],enumerable:!(h=it(s,d))||h.enumerable});return t},ft=t=>st(at(ke(t!=null?et(tt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Ie=(t,s,h)=>new Promise((d,F)=>{var A=P=>{try{N(h.next(P))}catch(x){F(x)}},T=P=>{try{N(h.throw(P))}catch(x){F(x)}},N=P=>P.done?d(P.value):Promise.resolve(P.value).then(A,T);N((h=h.apply(t,s)).next())});var Xe=ot((Ve,Fe)=>{(function(t){"use strict";var s=t.setTimeout,h=t.clearTimeout,d=t.XMLHttpRequest,F=t.XDomainRequest,A=t.ActiveXObject,T=t.EventSource,N=t.document,P=t.Promise,x=t.fetch,ae=t.Response,se=t.TextDecoder,Ee=t.TextEncoder,I=t.AbortController;if(typeof window!="undefined"&&typeof N!="undefined"&&!("readyState"in N)&&N.body==null&&(N.readyState="loading",window.addEventListener("load",function(e){N.readyState="complete"},!1)),d==null&&A!=null&&(d=function(){return new A("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),I==null){var E=x;x=function(e,r){var o=r.signal;return E(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(n){var c=n.body.getReader();return o._reader=c,o._aborted&&o._reader.cancel(),{status:n.status,statusText:n.statusText,headers:n.headers,body:{getReader:function(){return c}}}})},I=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function H(){this.bitsNeeded=0,this.codePoint=0}H.prototype.decode=function(e){function r(g,y,l){if(l===1)return g>=128>>y&&g<<y<=2047;if(l===2)return g>=2048>>y&&g<<y<=55295||g>=57344>>y&&g<<y<=65535;if(l===3)return g>=65536>>y&&g<<y<=1114111;throw new Error}function o(g,y){if(g===6*1)return y>>6>15?3:y>31?2:1;if(g===6*2)return y>15?3:2;if(g===6*3)return 3;throw new Error}for(var n=65533,c="",f=this.bitsNeeded,v=this.codePoint,R=0;R<e.length;R+=1){var p=e[R];f!==0&&(p<128||p>191||!r(v<<6|p&63,f-6,o(f,v)))&&(f=0,v=n,c+=String.fromCharCode(v)),f===0?(p>=0&&p<=127?(f=0,v=p):p>=192&&p<=223?(f=6*1,v=p&31):p>=224&&p<=239?(f=6*2,v=p&15):p>=240&&p<=247?(f=6*3,v=p&7):(f=0,v=n),f!==0&&!r(v,f,o(f,v))&&(f=0,v=n)):(f-=6,v=v<<6|p&63),f===0&&(v<=65535?c+=String.fromCharCode(v):(c+=String.fromCharCode(55296+(v-65535-1>>10)),c+=String.fromCharCode(56320+(v-65535-1&1023))))}return this.bitsNeeded=f,this.codePoint=v,c};var C=function(){try{return new se().decode(new Ee().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(se==null||Ee==null||!C())&&(se=H);var M=function(){};function Q(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=M,this.onload=M,this.onerror=M,this.onreadystatechange=M,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=M}Q.prototype.open=function(e,r){this._abort(!0);var o=this,n=this._xhr,c=1,f=0;this._abort=function(l){o._sendTimeout!==0&&(h(o._sendTimeout),o._sendTimeout=0),(c===1||c===2||c===3)&&(c=4,n.onload=M,n.onerror=M,n.onabort=M,n.onprogress=M,n.onreadystatechange=M,n.abort(),f!==0&&(h(f),f=0),l||(o.readyState=4,o.onabort(null),o.onreadystatechange())),c=0};var v=function(){if(c===1){var l=0,S="",te=void 0;if("contentType"in n)l=200,S="OK",te=n.contentType;else try{l=n.status,S=n.statusText,te=n.getResponseHeader("Content-Type")}catch(Te){l=0,S="",te=void 0}l!==0&&(c=2,o.readyState=2,o.status=l,o.statusText=S,o._contentType=te,o.onreadystatechange())}},R=function(){if(v(),c===2||c===3){c=3;var l="";try{l=n.responseText}catch(S){}o.readyState=3,o.responseText=l,o.onprogress()}},p=function(l,S){if((S==null||S.preventDefault==null)&&(S={preventDefault:M}),R(),c===1||c===2||c===3){if(c=4,f!==0&&(h(f),f=0),o.readyState=4,l==="load")o.onload(S);else if(l==="error")o.onerror(S);else if(l==="abort")o.onabort(S);else throw new TypeError;o.onreadystatechange()}},g=function(l){n!=null&&(n.readyState===4?(!("onload"in n)||!("onerror"in n)||!("onabort"in n))&&p(n.responseText===""?"error":"load",l):n.readyState===3?"onprogress"in n||R():n.readyState===2&&v())},y=function(){f=s(function(){y()},500),n.readyState===3&&R()};"onload"in n&&(n.onload=function(l){p("load",l)}),"onerror"in n&&(n.onerror=function(l){p("error",l)}),"onabort"in n&&(n.onabort=function(l){p("abort",l)}),"onprogress"in n&&(n.onprogress=R),"onreadystatechange"in n&&(n.onreadystatechange=function(l){g(l)}),("contentType"in n||!("ontimeout"in d.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),n.open(e,r,!0),"readyState"in n&&(f=s(function(){y()},0))},Q.prototype.abort=function(){this._abort(!1)},Q.prototype.getResponseHeader=function(e){return this._contentType},Q.prototype.setRequestHeader=function(e,r){var o=this._xhr;"setRequestHeader"in o&&o.setRequestHeader(e,r)},Q.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},Q.prototype.send=function(){if((!("ontimeout"in d.prototype)||!("sendAsBinary"in d.prototype)&&!("mozAnon"in d.prototype))&&N!=null&&N.readyState!=null&&N.readyState!=="complete"){var e=this;e._sendTimeout=s(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(o){throw o}};function ce(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function le(e){for(var r=Object.create(null),o=e.split(`\r
`),n=0;n<o.length;n+=1){var c=o[n],f=c.split(": "),v=f.shift(),R=f.join(": ");r[ce(v)]=R}this._map=r}le.prototype.get=function(e){return this._map[ce(e)]},d!=null&&d.HEADERS_RECEIVED==null&&(d.HEADERS_RECEIVED=2);function k(){}k.prototype.open=function(e,r,o,n,c,f,v){e.open("GET",c);var R=0;e.onprogress=function(){var g=e.responseText,y=g.slice(R);R+=y.length,o(y)},e.onerror=function(g){g.preventDefault(),n(new Error("NetworkError"))},e.onload=function(){n(null)},e.onabort=function(){n(null)},e.onreadystatechange=function(){if(e.readyState===d.HEADERS_RECEIVED){var g=e.status,y=e.statusText,l=e.getResponseHeader("Content-Type"),S=e.getAllResponseHeaders();r(g,y,l,new le(S))}},e.withCredentials=f;for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&e.setRequestHeader(p,v[p]);return e.send(),e};function ye(e){this._headers=e}ye.prototype.get=function(e){return this._headers.get(e)};function me(){}me.prototype.open=function(e,r,o,n,c,f,v){var R=null,p=new I,g=p.signal,y=new se;return x(c,{headers:v,credentials:f?"include":"same-origin",signal:g,cache:"no-store"}).then(function(l){return R=l.body.getReader(),r(l.status,l.statusText,l.headers.get("Content-Type"),new ye(l.headers)),new P(function(S,te){var Te=function(){R.read().then(function(B){if(B.done)S(void 0);else{var L=y.decode(B.value,{stream:!0});o(L),Te()}}).catch(function(B){te(B)})};Te()})}).catch(function(l){if(l.name!=="AbortError")return l}).then(function(l){n(l)}),{abort:function(){R!=null&&R.cancel(),p.abort()}}};function D(){this._listeners=Object.create(null)}function Re(e){s(function(){throw e},0)}D.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var o=r.length,n=0;n<o;n+=1){var c=r[n];try{typeof c.handleEvent=="function"?c.handleEvent(e):c.call(this,e)}catch(f){Re(f)}}},D.prototype.addEventListener=function(e,r){e=String(e);var o=this._listeners,n=o[e];n==null&&(n=[],o[e]=n);for(var c=!1,f=0;f<n.length;f+=1)n[f]===r&&(c=!0);c||n.push(r)},D.prototype.removeEventListener=function(e,r){e=String(e);var o=this._listeners,n=o[e];if(n!=null){for(var c=[],f=0;f<n.length;f+=1)n[f]!==r&&c.push(n[f]);c.length===0?delete o[e]:o[e]=c}};function Z(e){this.type=e,this.target=void 0}function ue(e,r){Z.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}ue.prototype=Object.create(Z.prototype);function Se(e,r){Z.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}Se.prototype=Object.create(Z.prototype);function Ce(e,r){Z.call(this,e),this.error=r.error}Ce.prototype=Object.create(Z.prototype);var we=-1,z=0,ee=1,fe=2,i=-1,a=0,u=1,w=2,X=3,U=/^text\/event\-stream(;.*)?$/i,G=1e3,J=18e6,ve=function(e,r){var o=e==null?r:parseInt(e,10);return o!==o&&(o=r),xe(o)},xe=function(e){return Math.min(Math.max(e,G),J)},he=function(e,r,o){try{typeof r=="function"&&r.call(e,o)}catch(n){Re(n)}};function Y(e,r){D.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,ze(this,e,r)}function Ye(){return d!=null&&"withCredentials"in d.prototype||F==null?new d:new F}var We=x!=null&&ae!=null&&"body"in ae.prototype;function ze(e,r,o){r=String(r);var n=Boolean(o.withCredentials),c=o.lastEventIdQueryParameterName||"lastEventId",f=xe(1e3),v=ve(o.heartbeatTimeout,45e3),R="",p=f,g=!1,y=0,l=o.headers||{},S=o.Transport,te=We&&S==null?void 0:new Q(S!=null?new S:Ye()),Te=S!=null&&typeof S!="string"?new S:te==null?new me:new k,B=void 0,L=0,q=we,pe="",Oe="",ne="",Ae="",V=a,He=0,de=0,Qe=function(O,b,$,K){if(q===z)if(O===200&&$!=null&&U.test($)){q=ee,g=Date.now(),p=f,e.readyState=ee;var j=new Se("open",{status:O,statusText:b,headers:K});e.dispatchEvent(j),he(e,e.onopen,j)}else{var _="";O!==200?(b&&(b=b.replace(/\s+/g," ")),_="EventSource's response has a status "+O+" "+b+" that is not 200. Aborting the connection."):_="EventSource's response has a Content-Type specifying an unsupported type: "+($==null?"-":$.replace(/\s+/g," "))+". Aborting the connection.",Me();var j=new Se("error",{status:O,statusText:b,headers:K});e.dispatchEvent(j),he(e,e.onerror,j),console.error(_)}},Ze=function(O){if(q===ee){for(var b=-1,$=0;$<O.length;$+=1){var K=O.charCodeAt($);(K===`
`.charCodeAt(0)||K==="\r".charCodeAt(0))&&(b=$)}var j=(b!==-1?Ae:"")+O.slice(0,b+1);Ae=(b===-1?Ae:"")+O.slice(b+1),O!==""&&(g=Date.now(),y+=O.length);for(var _=0;_<j.length;_+=1){var K=j.charCodeAt(_);if(V===i&&K===`
`.charCodeAt(0))V=a;else if(V===i&&(V=a),K==="\r".charCodeAt(0)||K===`
`.charCodeAt(0)){if(V!==a){V===u&&(de=_+1);var re=j.slice(He,de-1),ie=j.slice(de+(de<_&&j.charCodeAt(de)===" ".charCodeAt(0)?1:0),_);re==="data"?(pe+=`
`,pe+=ie):re==="id"?Oe=ie:re==="event"?ne=ie:re==="retry"?(f=ve(ie,f),p=f):re==="heartbeatTimeout"&&(v=ve(ie,v),L!==0&&(h(L),L=s(function(){be()},v)))}if(V===a){if(pe!==""){R=Oe,ne===""&&(ne="message");var ge=new ue(ne,{data:pe.slice(1),lastEventId:Oe});if(e.dispatchEvent(ge),ne==="open"?he(e,e.onopen,ge):ne==="message"?he(e,e.onmessage,ge):ne==="error"&&he(e,e.onerror,ge),q===fe)return}pe="",ne=""}V=K==="\r".charCodeAt(0)?i:a}else V===a&&(He=_,V=u),V===u?K===":".charCodeAt(0)&&(de=_+1,V=w):V===w&&(V=X)}}},Ge=function(O){if(q===ee||q===z)q=we,L!==0&&(h(L),L=0),L=s(function(){be()},p),p=xe(Math.min(f*16,p*2)),e.readyState=z;else if(q===fe&&O!=null){console.error(O);var b=new Ce("error",{error:O});e.dispatchEvent(b),he(e,e.onerror,b)}},Me=function(){q=fe,B!=null&&(B.abort(),B=void 0),L!==0&&(h(L),L=0),e.readyState=fe},be=function(){if(L=0,q!==we){if(!g&&B!=null)Ge(new Error("No activity within "+v+" milliseconds. "+(q===z?"No response received.":y+" chars received.")+" Reconnecting.")),B!=null&&(B.abort(),B=void 0);else{var O=Math.max((g||Date.now())+v-Date.now(),1);g=!1,L=s(function(){be()},O)}return}g=!1,y=0,L=s(function(){be()},v),q=z,pe="",ne="",Oe=R,Ae="",He=0,de=0,V=a;var b=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&R!==""){var $=r.indexOf("?");b=$===-1?r:r.slice(0,$+1)+r.slice($+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(ie,ge){return ge===c?"":ie}),b+=(r.indexOf("?")===-1?"?":"&")+c+"="+encodeURIComponent(R)}var K=e.withCredentials,j={};j.Accept="text/event-stream";var _=e.headers;if(_!=null)for(var re in _)Object.prototype.hasOwnProperty.call(_,re)&&(j[re]=_[re]);try{B=Te.open(te,Qe,Ze,Ge,b,K,j)}catch(ie){throw Me(),ie}};e.url=r,e.readyState=z,e.withCredentials=n,e.headers=l,e._close=Me,be()}Y.prototype=Object.create(D.prototype),Y.prototype.CONNECTING=z,Y.prototype.OPEN=ee,Y.prototype.CLOSED=fe,Y.prototype.close=function(){this._close()},Y.CONNECTING=z,Y.OPEN=ee,Y.CLOSED=fe,Y.prototype.withCredentials=void 0;var Ue=T;d!=null&&(T==null||!("withCredentials"in T.prototype))&&(Ue=Y),function(e){if(typeof Fe=="object"&&typeof Fe.exports=="object"){var r=e(Ve);r!==void 0&&(Fe.exports=r)}else typeof define=="function"&&define.amd?define(["exports"],e):e(t)}(function(e){e.EventSourcePolyfill=Y,e.NativeEventSource=T,e.EventSource=Ue})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:Ve:globalThis)});function Le(t){this.message=t}Le.prototype=new Error,Le.prototype.name="InvalidCharacterError";var Be=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(t){var s=String(t).replace(/=+$/,"");if(s.length%4==1)throw new Le("'atob' failed: The string to be decoded is not correctly encoded.");for(var h,d,F=0,A=0,T="";d=s.charAt(A++);~d&&(h=F%4?64*h+d:d,F++%4)?T+=String.fromCharCode(255&h>>(-2*F&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);return T};function dt(t){var s=t.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw"Illegal base64url string!"}try{return function(h){return decodeURIComponent(Be(h).replace(/(.)/g,function(d,F){var A=F.charCodeAt(0).toString(16).toUpperCase();return A.length<2&&(A="0"+A),"%"+A}))}(s)}catch(h){return Be(s)}}function _e(t){this.message=t}function ct(t,s){if(typeof t!="string")throw new _e("Invalid token specified");var h=(s=s||{}).header===!0?0:1;try{return JSON.parse(dt(t.split(".")[h]))}catch(d){throw new _e("Invalid token specified: "+d.message)}}_e.prototype=new Error,_e.prototype.name="InvalidTokenError";var $e=ct;function Ke(t){return{all:t=t||new Map,on:function(s,h){var d=t.get(s);d&&d.push(h)||t.set(s,[h])},off:function(s,h){var d=t.get(s);d&&d.splice(d.indexOf(h)>>>0,1)},emit:function(s,h){(t.get(s)||[]).slice().map(function(d){d(h)}),(t.get("*")||[]).slice().map(function(d){d(s,h)})}}}var Je=ft(Xe());var m;(function(t){t.READY="ready",t.CONNECTED="connected",t.DISCONNECTED="disconnected",t.CHANGED="changed",t.ERROR="error",t.ERROR_METRICS="metrics error",t.ERROR_AUTH="auth error",t.ERROR_FETCH_FLAGS="fetch flags error",t.ERROR_FETCH_FLAG="fetch flag error",t.ERROR_STREAM="stream error"})(m||(m={}));var De=6e4,qe={debug:!1,baseUrl:"https://config.ff.harness.io/api/1.0",eventUrl:"https://events.ff.harness.io/api/1.0",eventsSyncInterval:De,streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},oe=(t,...s)=>console.error(`[FF-SDK] ${t}`,...s);var lt="1.8.0",ut=500,Ne=globalThis.fetch,vt=Je.EventSourcePolyfill,je=!!globalThis.Proxy,Pe=t=>{let{value:s}=t;try{switch(t.kind.toLowerCase()){case"int":case"number":s=Number(s);break;case"boolean":s=s.toString().toLowerCase()==="true";break;case"json":s=JSON.parse(s);break}}catch(h){oe(h)}return s},ht=(t,s,h)=>{let d=!1,F,A,T,N,P,x=!0,ae={},se=()=>{x=!1},Ee=()=>{x=!0},I=[],E=Ke(),H=W(W({},qe),h);H.eventsSyncInterval<De&&(H.eventsSyncInterval=De);let C=(i,...a)=>{H.debug&&console.debug(`[FF-SDK] ${i}`,...a)},M=i=>{if(x){let a=Date.now();a-i.lastAccessed>ut&&(i.count++,i.lastAccessed=a)}};globalThis.onbeforeunload=()=>{I.length&&globalThis.localStorage&&(se(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(I),Ee())};let Q=(i,a)=>Ie(void 0,null,function*(){return(yield(yield Ne(`${a.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:i,target:W(W({},s),{identifier:String(s.identifier)})})})).json()).authToken}),ce=0,le=()=>{if(I.length){C("Sending metrics...",{metrics:I,evaluations:k});let i={metricsData:I.map(a=>({timestamp:Date.now(),count:a.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:a.featureIdentifier},{key:"featureName",value:a.featureIdentifier},{key:"variationIdentifier",value:a.variationIdentifier},{key:"target",value:s.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_LANGUAGE",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:lt}]}))};Ne(`${H.eventUrl}/metrics/${F}?cluster=${A}`,{method:"POST",headers:W({"Content-Type":"application/json"},ae),body:JSON.stringify(i)}).then(()=>{I=[],ce=0}).catch(a=>{ce++&&(I=[],ce=0),C(a),E.emit(m.ERROR_METRICS,a)}).finally(()=>{P=window.setTimeout(le,H.eventsSyncInterval)})}else P=window.setTimeout(le,H.eventsSyncInterval)},k={},ye=i=>{C("Sending event for",i.flag),je?E.emit(m.CHANGED,new Proxy(i,{get(a,u){var w;if(a.hasOwnProperty(u)&&u==="value"){let X=a.flag,U=i.value,G=I.find(J=>J.featureIdentifier===X&&J.featureValue===U);G?(M(G),G.variationIdentifier=((w=k[X])==null?void 0:w.identifier)||""):I.push({featureIdentifier:X,featureValue:String(U),variationIdentifier:k[X].identifier||"",count:x?1:0,lastAccessed:Date.now()}),C("Metrics event: Flag",u,"has been read with value via stream update",U)}return u==="value"?Pe(i):i[u]}})):E.emit(m.CHANGED,{deleted:i.deleted,flag:i.flag,value:Pe(i)})},me=function(){return je?new Proxy({},{get(i,a){var w,X,U;let u=i[a];if(i.hasOwnProperty(a)){let G=i[a],J=I.find(ve=>ve.featureIdentifier===a&&G===ve.featureValue);J?(J.variationIdentifier=((w=k[a])==null?void 0:w.identifier)||"",M(J)):I.push({featureIdentifier:a,featureValue:G,variationIdentifier:((X=k[a])==null?void 0:X.identifier)||"",count:x?1:0,lastAccessed:Date.now()}),C("Metrics event: Flag:",a,"has been read with value:",G,"variationIdentifier:",(U=k[a])==null?void 0:U.identifier)}return u}}):{}},D=me();Q(t,H).then(i=>{if(d)return;N=i;let a=$e(i);if(ae={Authorization:`Bearer ${N}`,"Harness-AccountID":a.accountID,"Harness-EnvironmentID":a.environmentIdentifier},C("Authenticated",a),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,C("Picking up metrics from previous session")}catch(w){}P=window.setTimeout(le,H.eventsSyncInterval),F=a.environment,A=a.clusterIdentifier;let u=!!Object.keys(k).length;Re().then(()=>{C("Fetch all flags ok",D)}).then(()=>{d||Se()}).then(()=>{d||(C("Event stream ready",{storage:D}),u||E.emit(m.READY,W({},D)))}).catch(w=>{E.emit(m.ERROR,w)})}).catch(i=>{oe("Authentication error: ",i),E.emit(m.ERROR_AUTH,i),E.emit(m.ERROR,i)});let Re=()=>Ie(void 0,null,function*(){try{let i=yield Ne(`${H.baseUrl}/client/env/${F}/target/${s.identifier}/evaluations?cluster=${A}`,{headers:ae});i.ok?(yield i.json()).forEach(ue):(oe("Features fetch operation error: ",i),E.emit(m.ERROR_FETCH_FLAGS,i),E.emit(m.ERROR,i))}catch(i){return oe("Features fetch operation error: ",i),E.emit(m.ERROR_FETCH_FLAGS,i),E.emit(m.ERROR,i),i}}),Z=i=>Ie(void 0,null,function*(){try{let a=yield Ne(`${H.baseUrl}/client/env/${F}/target/${s.identifier}/evaluations/${i}?cluster=${A}`,{headers:ae});if(a.ok){let u=yield a.json();ue(u),ye(u)}else oe("Feature fetch operation error: ",a),E.emit(m.ERROR_FETCH_FLAG,a),E.emit(m.ERROR,a)}catch(a){oe("Feature fetch operation error: ",a),E.emit(m.ERROR_FETCH_FLAG,a),E.emit(m.ERROR,a)}}),ue=i=>{se();let a=Pe(i);a!==D[i.flag]&&(C("Flag variation has changed for ",i.identifier),D[i.flag]=a,k[i.flag]=W(W({},i),{value:a}),ye(i)),Ee()},Se=()=>{if(!H.streamEnabled){C("Stream is disabled by configuration. Note: Polling is not yet supported");return}T=new vt(`${H.baseUrl}/stream?cluster=${A}`,{headers:W({"API-Key":t},ae)}),T.onopen=u=>{C("Stream connected",u),E.emit(m.CONNECTED)},T.onclose=u=>{C("Stream disconnected"),E.emit(m.DISCONNECTED)},T.onerror=u=>{oe("Stream has issue",u),E.emit(m.ERROR_STREAM,u),E.emit(m.ERROR,u)};let i=u=>{switch(u.event){case"create":setTimeout(()=>Z(u.identifier),1e3);break;case"patch":Z(u.identifier);break;case"delete":delete D[u.identifier],E.emit(m.CHANGED,{flag:u.identifier,value:void 0,deleted:!0}),C("Evaluation deleted",{message:u,storage:D});break}},a=u=>{u.event==="patch"&&Re()};T.addEventListener("*",u=>{let w=JSON.parse(u.data);C("Received event from stream: ",w),w.domain==="flag"?i(w):w.domain==="target-segment"&&a(w)})},Ce=(i,a)=>E.on(i,a),we=(i,a)=>{i?E.off(i,a):ee()},z=(i,a)=>{var w;let u=D[i];if(!je&&u!==void 0){let X=u,U=i,G=I.find(J=>J.featureIdentifier===U&&J.featureValue===X);G?(M(G),G.variationIdentifier=((w=k[U])==null?void 0:w.identifier)||""):I.push({featureIdentifier:U,featureValue:X,count:x?1:0,variationIdentifier:k[U].identifier||"",lastAccessed:Date.now()})}return u!==void 0?u:a},ee=()=>{d=!0,C("Closing event stream"),D=me(),k={},clearTimeout(P),E.all.clear(),typeof(T==null?void 0:T.close)=="function"&&T.close()};return{on:Ce,off:we,variation:z,close:ee,setEvaluations:i=>{if(i.length){let a=!!Object.keys(k).length;i.forEach(ue),a||setTimeout(()=>{E.emit(m.READY,W({},D))},10)}}}};export{m as Event,ht as initialize};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
