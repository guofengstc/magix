define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u=function(){throw Error("unimplement method")},v=function(){},l={tagName:s,rootId:"magix_vf_root",execError:v},p={}.hasOwnProperty,h=function(e,t){return e?p.call(e,t):e},d=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=C.isObject(t)?x(e,t):h(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},m=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},g=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new g(e,t)},x=function(e,t,r){for(var n in t)r&&h(r,n)||(e[n]=t[n]);return e};x(g.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,h(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,f=i[o];if(!h(i,o)){if(i.length>=n.b){i.sort(m);for(var s=n.b-n.x;s--;)f=i.pop(),delete i[f.k],f.m&&y(f.m,f.o,f)}f={},i.push(f),i[o]=f}return f.o=e,f.k=o,f.v=t,f.f=1,f.t=c++,f.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(y(r.m,r.o,r),r.m=0))},has:function(e){return e=a+e,h(this.c,e)}});var w=g(60),b=g(),y=function(e,t,r,n,i,a){for(C.isArray(e)||(e=[e]),t&&(C.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){l.execError(o)}return i},C={isArray:u,isObject:u,isFunction:u,isRegExp:u,isString:u,isNumber:u,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:u,include:u,mix:x,unimpl:u,has:h,safeExec:y,noop:v,config:d(l),start:function(e){var t=this;x(l,e),t.libRequire(l.iniFile,function(r){l=x(l,r,e),l["!tnc"]=l.tagName!=s;var n=l.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(l.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)h(e,r)&&t.push(r);return t},local:d({}),path:function(i,a){var c=i+"\n"+a,s=b.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(r,n).replace(t,n)+f,a.charAt(0)==f){var u=o.test(i)?8:0,v=i.indexOf(f,u);s=i.substring(0,v)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");b.set(c,s)}return s},pathToObject:function(e,t){var c=w.get(e);if(!c){c={};var s={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var v=e.replace(u,n);if(u&&o.test(u)){var l=u.indexOf(f,8);u=~l?u.substring(l):f}v.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}s[r]=n}),c[a]=u,c.params=s,w.set(e,c)}return c},objectToPath:function(e,t,r){var n,i=e[a],o=[],c=e.params;for(var f in c)n=c[f],(!r||n||h(r,f))&&(t&&(n=encodeURIComponent(n)),o.push(f+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(C.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:g},E=Object.prototype.toString;return x(C,{libRequire:function(e,t){C.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==E.call(e)},isString:function(e){return"[object String]"==E.call(e)},isNumber:function(e){return"[object Number]"==E.call(e)},isRegExp:function(e){return"[object RegExp]"==E.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,C.mix(e.prototype,r),C.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o=window,c="",f="pathname",s=e.has,u=e.mix,v=document,l=/^UTF-8$/i.test(v.charset||v.characterSet||"UTF-8"),p=e.config(),h=e.cache(),d=e.cache(40),m={params:{},href:c},g=/#.*$/,x=/^[^#]*#?!?/,w="params",b=p.nativeHistory,y=function(t,r,n){if(t){n=this[w],e.isString(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(r=s(n,t[i]));i++);}return r},C=function(){return this[f]},E=function(){return this.view},V=function(e,t,r){return t=this,r=t[w],r[e]},M=function(t){var r=e.pathToObject(t,l),n=r[f];return n&&a&&(r[f]=e.path(o.location[f],n)),r},j=u({getView:function(t,r){if(!n){n={rs:p.routes||{},nf:p.notFoundView};var i=p.defaultView;if(!i)throw Error("unset defaultView");n.home=i;var a=p.defaultPathname||c;n.rs[a]=i,n[f]=a}var o;t||(t=n[f]);var s=n.rs;return o=e.isFunction(s)?s.call(p,t,r):s[t],{view:o?o:n.nf||n.home,pathname:o||b?t:n.nf?t:n[f]}},start:function(){var e=j,t=o.history;i=b&&t.pushState,a=b&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||o.location.href;var r=j,n=h.get(e);if(!n){var i=e.replace(g,c),a=e.replace(x,c),s=M(i),v=M(a),l={};u(l,s[w]),u(l,v[w]),n={get:V,href:e,refHref:m.href,srcQuery:i,srcHash:a,query:s,hash:v,params:l},h.set(e,n)}if(t&&!n.view){var p;p=b?n.hash[f]||n.query[f]:n.hash[f];var d=r.getView(p,n);u(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=d.get(i);if(a||(i=n+"\n"+i,a=d.get(i)),!a){var o,c,s;a={params:{},view:s},a[f]=s,c=e[f],s=t[f],c!=s&&(a[f]={from:c,to:s},o=1),c=e.view,s=t.view,c!=s&&(a.view={from:c,to:s},o=1);var u,v=e[w],l=t[w];for(u in v)c=v[u],s=l[u],v[u]!=l[u]&&(o=1,a[w][u]={from:c,to:s});for(u in l)c=v[u],s=l[u],v[u]!=l[u]&&(o=1,a[w][u]={from:c,to:s});a.occur=o,a.isParam=y,a.isPathname=C,a.isView=E,d.set(i,a)}return a},route:function(){var e=j,t=e.parseQH(0,1),n=!m.get,i=e.getChged(m,t);m=t,i.occur&&(r=t,e.fire("changed",{location:t,changed:i,force:n}))},navigate:function(t,n,o){var v=j;if(!n&&e.isObject(t)&&(n=t,t=c),n&&(t=e.objectToPath({params:n,pathname:t},l)),t){var p=M(t),h={};if(h[w]=u({},p[w]),h[f]=p[f],h[f]){if(a){var d=r.query[w];for(var m in d)s(d,m)&&!s(h[w],m)&&(h[w][m]=c)}}else{var g=u({},r[w]);h[w]=u(g,h[w]),h[f]=r[f]}var x,b=e.objectToPath(h,l,r.query[w]);x=i?b!=r.srcQuery:b!=r.srcHash,x&&(i?(v.poped=1,history[o?"replaceState":"pushState"](null,null,b),v.route()):(u(h,r,h),h.srcHash=b,h.hash={params:h[w],pathname:h[f]},v.fire("!ul",{loc:r=h}),b="#!"+b,o?location.replace(b):location.hash=b))}}},t);return j.useState=function(){var e=j,t=location.href;$(o).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},j.useHash=function(){$(o).on("hashchange",j.route,!1)},j}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.mix,i={},a=document.body,o={},c=String.fromCharCode(26),f="mx-owner",s="mx-ei",u={},v=65536,l=function(e){return e.id||(e.id="mx-e-"+v--)},p=function(e,t,r){return r?e.setAttribute(t,r):e&&e.getAttribute&&(r=e.getAttribute(t)),r},h={special:function(e){n(i,e)},process:function(e){for(var n=e.target||e.srcElement;n&&1!=n.nodeType;)n=n.parentNode;var i=n,o=e.type,v=u[o]||(u[o]=RegExp("(?:^|,)"+o+"(?:,|$)"));if(!v.test(p(n,s))){for(var h,d,m="mx-"+o,g=[];i&&i!=a&&(h=p(i,m),d=p(i,s),!h&&!v.test(d));)g.push(i),i=i.parentNode;if(h){var x,w=h.split(c);w.length>1&&(x=w[0],h=w.pop());var b=p(i,f)||x;if(!b)for(var y=i,C=t.all();y&&y!=a;){if(r(C,y.id)){p(i,f,b=y.id);break}y=y.parentNode}if(!b)throw Error("miss "+f+":"+h);var E=t.get(b),V=E&&E.view;V&&V.processEvent({info:h,se:e,st:o,tId:l(n),cId:l(i)})}else for(var M;g.length;)M=g.shift(),d=p(M,s),v.test(d)||(d=d?d+","+o:o,p(M,s,d))}},on:function(e,r){var n=this;if(!o[e]){t=r,o[e]=0;var c=i[e];c?n.lib(0,a,e):a["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}o[e]++},un:function(e){var t=this,r=o[e];if(r>0){if(r--,!r){var n=i[e];n?t.lib(1,a,e):a["on"+e]=null}o[e]=r}}};return h.lib=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,h.process)},h}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),c=this,f=c[o];if(f){n||(n={}),n.type||(n.type=e);for(var s,u,v=f.length,l=v-1;v--;)s=a?v:l-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),l--),u.d||r(u.f,n,c)}i&&delete c[o]},on:function(r,n,i){var a=t(r),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o,c=document,f=c.body,s=65536,u=e.safeExec,v=[],l=v.slice,p=e.mix,h=e.config("tagName"),d=e.config("rootId"),m=e.config("!tnc"),g=e.has,x=m?"mx-vframe":"mx-defer",w=f.contains,b=m&&f.querySelectorAll,y=" "+h+"[mx-vframe]",C="alter",E="created",V=function(e){return"object"==typeof e?e:c.getElementById(e)},M=function(e,t,r){return t=V(e),t&&(r=b?c.querySelectorAll("#"+t.id+y):t.getElementsByTagName(h)),r||v},$=function(e){return e.id||(e.id="magix_vf_"+s--)},j=function(e,t,r){if(e=V(e),t=V(t),e&&t)if(e!==t)try{r=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return p(I,{root:function(e,t,r){if(!n){a=t,o=r;var i=V(d);i||(i=c.createElement(h),i.id=d,f.insertBefore(i,f.firstChild)),n=new I(d),e.add(n)}return n}}),p(p(I.prototype,t),{mountView:function(t,n,i){var c=this,f=V(c.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),c.unmountView(),t){var s=e.pathToObject(t),v=s.pathname,l=--c.sign;e.libRequire(v,function(e){if(l==c.sign){var t=c.owner;r.prepare(e);var h=new e({owner:c,id:c.id,$:V,path:v,vom:t,location:a});c.view=h,h.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),c.mountZoneVframes(0,0)),h.on("rendered",function(){c.mountZoneVframes(0,0)}),h.on("prerender",function(){c.unmountZoneVframes(0,1)||c.cAlter()}),h.on("inited",function(){c.viewInited=1,c.fire("viewInited",{view:h}),i&&u(i,h,c)})},0),n=n||{},h.load(p(n,s.params,n),o)}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.oust();var t=V(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,a=i.owner,o=a.get(e);return o||(o=new I(e),o.pId=i.id,g(i.cM,e)||i.cC++,i.cM[e]=1,a.add(o)),o.mountView(t,r,n),o},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=M(i),o=a.length,c={};if(o)for(var f,s,u,v,l=0;o>l;l++)if(f=a[l],s=$(f),!g(c,s)&&(u=f.getAttribute("mx-view"),v=!f.getAttribute(x),v=v!=m,v||u)){n.mountVframe(s,u,t,r);for(var p,h=M(f),d=0,w=h.length;w>d;d++)p=h[d],c[$(p)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a);var o=n.get(i.pId);o&&g(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,c={};for(i in o)j(i,e)&&(c[i]=1);r=c}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=l.call(arguments,1);return r.viewInited&&n[e]&&(t=u(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(E,e),t.fire(E,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!g(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(C,e),t.fire(C,e));var i=t.owner,a=i.get(t.pId);a&&g(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(){var t=this,r=t.view;if(r&&r.sign>0&&r.rendered){var n=r.olChanged(o),i={location:a,changed:o,prevent:function(){this.cs=v},toChildren:function(t){t=t||v,e.isString(t)&&(t=t.split(",")),this.cs=t}};n&&u(r.locationChange,i,r);for(var c,f=i.cs||e.keys(t.cM),s=0,l=f.length,p=t.owner;l>s;s++)c=p.get(f[s]),c&&c.locChged()}}}),I}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],c=e.noop,f=e.mix,s={render:1,renderUI:1},u="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},l=e.cache(40),p=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,h=String.fromCharCode(26),d=function(){this.render()},m={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,x=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1,n(b.ms,[e],t)};b.ms=[],b.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[u]){e[u]=1,e.extend=t.extend;var n,o,f,l,p,d=e.prototype,m={};for(var g in d)if(i(d,g))if(n=d[g],o=g.match(w))for(f=o[1],l=o[2],l=l.split(a),p=l.length-1;p>-1;p--)o=l[p],m[o]=1,d[f+h+o]=n;else i(s,g)&&n!=c&&(d[g]=v(n));l&&(d.$evts=m)}},b.mixin=function(e,t){b.ms.push(t),f(b.prototype,e)},f(f(b.prototype,t),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,a=e.sign,c=i(e,"template"),f=function(i){if(a==e.sign){c||(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),n(e.render,o,e);var f=!t&&!e.rendered;f&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!c?e.fetchTmpl(f):f()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+h)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a))),n.locationChange==c&&(n.locationChange=d)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,i=e.se,a=l.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(x,function(e,t,r){a.p[t]=r}),l.set(r,a));var o=a.n+h+e.st,c=t[o];if(c){var s=m[a.f];s&&s.call(m,i),n(c,f({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:i,params:a.p},m),t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=e?r.un:r.on,a=t.vom;for(var o in n)i.call(r,o,a)}});var y,C="?t="+Date.now(),E={},V={};return b.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(i(E,t.path))e(E[t.path]);else{var a=t.path.indexOf("/");if(!y){var o=t.path.substring(0,a);y=require.s.contexts._.config.paths[o]}var c=t.path.substring(a+1),f=y+c+".html",s=V[f],u=function(r){e(E[t.path]=r)};s?s.push(u):(s=V[f]=[u],$.ajax({url:f+C,success:function(e){n(s,e),delete V[f]},error:function(e,t){n(s,t),delete V[f]}}))}},b.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,c=0,f=0,s={},u={},v={},l=t.mix({all:function(){return s},add:function(e){n(s,e.id)||(a++,s[e.id]=e,l.fire("add",{vframe:e})),e.owner=l},get:function(e){return s[e]},remove:function(e,t){var r=s[e];r&&(a--,t&&o--,delete s[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&l.fire("progress",{percent:c=e},f=1==e)}},locChged:function(t){var r,n=t.loc;if(n?r=1:n=t.location,i(u,n),!r){i(v,t.changed);var a=e.root(l,u,v);v.isView()?a.mountView(n.view):a.locChged()}}},r);return l}),document.createElement("vframe");