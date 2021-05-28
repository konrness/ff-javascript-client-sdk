var W=Object.create,w=Object.defineProperty,X=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty,ee=Object.getOwnPropertyNames,te=Object.getOwnPropertyDescriptor;var _=i=>w(i,"__esModule",{value:!0});var ie=(i,n)=>{for(var v in n)w(i,v,{get:n[v],enumerable:!0})},ae=(i,n,v)=>{if(n&&typeof n=="object"||typeof n=="function")for(let m of ee(n))!Z.call(i,m)&&m!=="default"&&w(i,m,{get:()=>n[m],enumerable:!(v=te(n,m))||v.enumerable});return i},F=i=>ae(_(w(i!=null?W(X(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);_(exports);ie(exports,{Event:()=>u,initialize:()=>se});var H=F(require("jwt-decode")),K=F(require("mitt")),J=F(require("event-source-polyfill"));var u;(function(i){i.READY="ready",i.CONNECTED="connected",i.DISCONNECTED="disconnected",i.RECONNECTED="reconnected",i.CHANGED="changed",i.ERROR="error"})(u||(u={}));var L={debug:!1,baseUrl:"https://config.feature-flags.uat.harness.io/api/1.0",eventUrl:"https://event.feature-flags.uat.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},E=(i,...n)=>console.error(`[FF-SDK] ${i}`,...n),A=30*1e3;var ne="1.3.0",re=500,N=globalThis.fetch,oe=J.EventSourcePolyfill,R=!!globalThis.Proxy,O=i=>{let{value:n}=i;try{switch(i.kind.toLowerCase()){case"int":case"number":n=Number(n);break;case"boolean":n=n.toString().toLowerCase()==="true";break;case"json":n=JSON.parse(n);break}}catch(v){E(v)}return n},se=(i,n,v)=>{let m,T,S,I,y,b=!0,$=()=>{b=!1},M=()=>{b=!0},s=[],l=(0,K.default)(),p={...L,...v},f=(t,...e)=>{p.debug&&console.debug(`[FF-SDK] ${t}`,...e)},C=t=>{if(b){let e=Date.now();e-t.lastAccessed>re&&(t.count++,t.lastAccessed=e)}};globalThis.onbeforeunload=()=>{s.length&&globalThis.localStorage&&($(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(s),M())};let z=async(t,e)=>(await(await N(`${e.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:t,target:n})})).json()).authToken,V=()=>{if(s.length){f("Sending metrics...",{metrics:s,evaluations:c});let t={metricsData:s.map(e=>({timestamp:Date.now(),count:e.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:e.featureIdentifier},{key:"featureName",value:e.featureIdentifier},{key:"variationIdentifier",value:e.variationIdentifier},{key:"target",value:n.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:ne}]}))};N(`${v.eventUrl}/metrics/${m}?cluster=${T}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},body:JSON.stringify(t)}).then(()=>{s=[]}).catch(e=>{E(e)}).finally(()=>{y=window.setTimeout(V,A)})}else y=window.setTimeout(V,A)},c={},x=function(){return R?new Proxy({},{get(t,e){let a=t[e];if(t.hasOwnProperty(e)){let d=t[e],r=s.find(o=>o.featureIdentifier===e&&d===o.featureValue);r?(r.variationIdentifier=c[e]?.identifier||"",C(r)):s.push({featureIdentifier:e,featureValue:d,variationIdentifier:c[e]?.identifier||"",count:b?1:0,lastAccessed:Date.now()}),f("Metrics event: Flag:",e,"has been read with value:",d,"variationIdentifier:",c[e]?.identifier)}return a}}):{}},g=x();z(i,p).then(t=>{I=t;let e=(0,H.default)(t);if(f("Authenticated",e),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,f("Picking up metrics from previous session")}catch(a){}y=window.setTimeout(V,A),m=e.environment,T=e.clusterIdentifier,B().then(()=>{f("Fetch all flags ok",g)}).then(()=>{G()}).then(()=>{f("Event stream ready",{storage:g}),l.emit(u.READY,g),R||Object.keys(g).forEach(a=>{s.push({featureIdentifier:a,featureValue:g[a],variationIdentifier:c[a]?.identifier||"",count:b?1:0,lastAccessed:Date.now()})})}).catch(a=>{l.emit(u.ERROR,a)})}).catch(t=>{E("Authentication error: ",t),l.emit(u.ERROR,t)});let B=async()=>{try{(await(await N(`${p.baseUrl}/client/env/${m}/target/${n.identifier}/evaluations?cluster=${T}`,{headers:{Authorization:`Bearer ${I}`}})).json()).forEach(a=>{let d=O(a);g[a.flag]=d,c[a.flag]={...a,value:d}})}catch(t){return E("Features fetch operation error: ",t),l.emit(u.ERROR,t),t}},P=async t=>{try{let e=await N(`${p.baseUrl}/client/env/${m}/target/${n.identifier}/evaluations/${t}?cluster=${T}`,{headers:{Authorization:`Bearer ${I}`}});if(e.ok){let a=await e.json(),d=O(a);if($(),g[t]=d,c[t]={...a,value:d},M(),l.emit(u.CHANGED,R?new Proxy(a,{get(r,o){if(r.hasOwnProperty(o)&&o==="value"){let h=r.flag,k=a.value,D=s.find(U=>U.featureIdentifier===h&&U.featureValue===k);D?(C(D),D.variationIdentifier=c[h]?.identifier||""):s.push({featureIdentifier:h,featureValue:String(k),variationIdentifier:c[h].identifier||"",count:b?1:0,lastAccessed:Date.now()}),f("Metrics event: Flag",o,"has been read with value via stream update",k)}return o==="value"?O(a):a[o]}}):{deleted:a.deleted,flag:a.flag,value:O(a)}),!R){let r=a.flag,o=s.find(h=>h.featureIdentifier===r&&h.featureValue===a.value);o?(C(o),o.variationIdentifier=c[r]?.identifier||""):s.push({featureIdentifier:r,featureValue:String(a.value),variationIdentifier:c[r].identifier||"",count:b?1:0,lastAccessed:Date.now()})}}else l.emit(u.ERROR,e)}catch(e){E("Feature fetch operation error: ",e),l.emit(u.ERROR,e)}},G=()=>{if(!p.streamEnabled){f("Stream is disabled by configuration. Note: Polling is not yet supported");return}S=new oe(`${p.baseUrl}/stream`,{headers:{Authorization:`Bearer ${I}`,"API-Key":i}}),S.onopen=t=>{f("Stream connected",t),l.emit(u.CONNECTED)},S.onclose=t=>{f("Stream disconnected"),l.emit(u.DISCONNECTED)},S.onerror=t=>{E("Stream has issue",t),l.emit("error",t)},S.addEventListener("*",t=>{let e=JSON.parse(t.data);switch(f("Received event from stream: ",e),e.event){case"create":setTimeout(()=>P(e.identifier),1e3);break;case"patch":P(e.identifier);break;case"delete":delete g[e.identifier],l.emit(u.CHANGED,{flag:e.identifier,value:void 0,deleted:!0}),f("Evaluation deleted",{message:e,storage:g});break}})},Y=(t,e)=>l.on(t,e),q=(t,e)=>{t?l.off(t,e):j()},Q=(t,e)=>{let a=g[t];if(!R&&a!==void 0){let d=a,r=t,o=s.find(h=>h.featureIdentifier===r&&h.featureValue===d);o?(C(o),o.variationIdentifier=c[r]?.identifier||""):s.push({featureIdentifier:r,featureValue:d,count:b?1:0,variationIdentifier:c[r].identifier||"",lastAccessed:Date.now()})}return a!==void 0?a:e},j=()=>{f("Closing event stream"),g=x(),c={},clearTimeout(y),l.all.clear(),S.close()};return{on:Y,off:q,variation:Q,close:j}};
//# sourceMappingURL=sdk.cjs.js.map
