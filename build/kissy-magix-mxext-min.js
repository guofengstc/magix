KISSY.add("magix/body",function(l,h,g,i){var a=g.has,l=g.mix,c=g.listToMap("submit,focusin,focusout,mouseenter,mouseleave,mousewheel,change"),e=document.body,n={},m={},q=65536,k=function(a,d,b){b?a.setAttribute(d,b):b=a.getAttribute(d);return b},i=l({processEvent:function(f){for(var d=f.target||f.srcElement;d&&1!=d.nodeType;)d=d.parentNode;var b=d,c=f.type,j=m[c]||(m[c]=RegExp("(?:^|,)"+c+"(?:,|$)"));if(!j.test(k(d,"mx-ie"))){for(var n="mx-"+c,i,g,p=[];b&&b!=e&&!(i=k(b,n),g=k(b,"mx-ie"),i||j.test(g));)p.push(b),
b=b.parentNode;if(i){c=k(b,"mx-owner");if(!c){j=b;for(g=this.VOM.all();j&&j!=e;)if(a(g,j.id)){k(b,"mx-owner",c=j.id);break}else j=j.parentNode}if(c)this.fire("event",{info:i,se:f,tId:d.id||(d.id="mx-e-"+q--),cId:b.id||(b.id="mx-e-"+q--),hld:c});else throw Error("miss mx-owner:"+i);}else for(;p.length;)f=p.shift(),g=k(f,"mx-ie"),j.test(g)||(g=g?g+","+c:c,k(f,"mx-ie",g))}},attachEvent:function(a){var d=this;if(n[a])n[a]++;else if(n[a]=1,c[a])d.onUnbubble(e,a);else e["on"+a]=function(a){(a=a||window.event)&&
d.processEvent(a)}},detachEvent:function(a){var d=n[a];0<d&&(d--,d||(c[a]?this.offUnbubble(e,a):e["on"+a]=null),n[a]=d)}},i);return g.mix(i,h)},{requires:["magix/impl/body","magix/magix","magix/event"]});
KISSY.add("magix/event",function(l,h){var g=h.safeExec;return{fire:function(i,a,c,e){var n="~"+i,m=this[n];if(m){a||(a={});if(!a.type)a.type=i;for(var i=m.length,h=i-1,k,f;i--;)k=e?i:h-i,f=m[k],f.d&&(m.splice(k,1),h--),g(f,a,this)}c&&delete this[n]},on:function(i,a,c){i="~"+i;this[i]||(this[i]=[]);h.isNumeric(c)?this[i].splice(c,0,a):(a.d=c,this[i].push(a))},un:function(i,a){h.isArray(i)||(i=[i]);for(var c=0,e=i.length;c<e;c++){var n="~"+i[c],m=this[n];if(m)if(a)for(var n=0,g=m.length;n<g;n++){if(m[n]==
a){m.splice(n,1);break}}else delete this[n]}}}},{requires:["magix/magix"]});KISSY.add("magix/impl/body",function(l,h){var g={};return{onUnbubble:function(i,a){var c=this;h.delegate(i,a,"*[mx-"+a+"]",g[a]=function(a){c.processEvent(a)})},offUnbubble:function(i,a){h.undelegate(i,a,"*[mx-"+a+"]",g[a]);delete g[a]}}},{requires:["event"]});
KISSY.add("magix/impl/magix",function(l,h){h=[].slice;return{libRequire:function(g,i){if(g){var a=this.isFunction(i),c=this.isArray(g);l.use(c?g.join(","):g,a?function(a){i.apply(a,h.call(arguments,1))}:this.noop)}else i()},libEnv:function(g){var i=g.appHome,a=location,c=a.protocol,e=g.appName;~i.indexOf(c)||(i=this.path(a.href,i));l.endsWith(i,"/")||(i+="/");g.appHome=i;var n=g.debug;n&&(n=0==i.indexOf(c+"//"+a.host));"~"==e.charAt(0)&&l.config({map:[[RegExp("/"+e+"/"),"/"]]});a="";(a=n?l.now():
g.appTag)&&(a+=".js");c=g.appCombine;l.isUndefined(c)&&(c=l.config("combine"));l.config({packages:[{name:e,path:i,debug:g.debug=n,combine:c,tag:a}]})},isArray:l.isArray,isFunction:l.isFunction,isObject:l.isObject,isRegExp:l.isRegExp,isString:l.isString,isNumber:l.isNumber}});
KISSY.add("magix/impl/router",function(l,h){var g=window;return{useState:function(){var i=this,a=location.href;h.on(g,"popstate",function(){var c=location.href==a;if(i.$firedPop||!c)i.$firedPop=!0,i.route()})},useHash:function(){var i=this;h.on(g,"hashchange",function(){i.route()})}}},{requires:["event"]});
KISSY.add("magix/impl/view",function(l,h,g){var i=function(){},a=l.Env.mods,c={wrapAsyn:1,extend:1},e=function(a,c,i){for(var h in c)l.isObject(c[h])?(g.has(a,h)||(a[h]={}),e(a[h],c[h],!0)):i&&(a[h]=c[h])};i.extend=function(a,c){var e=function(){e.superclass.constructor.apply(this,arguments);c&&g.safeExec(c,arguments,this)};e.extend=i.extend;return l.extend(e,this,a)};i.prepare=function(i,m){if(!i.wrapAsyn){for(var h in this)g.has(c,h)&&(i[h]=this[h]);h=i.prototype;for(var k=i;k.superclass;)k=k.superclass.constructor,
e(h,k.prototype);m.home=a[m.path].packageInfo.getBase();g.mix(h,m)}i.wrapAsyn()};g.mix(i.prototype,{fetchTmpl:function(a,c,e){h({url:a+(e?"?_="+l.now():""),success:c,error:function(a,f){c(f)}})}});return i},{requires:["ajax","magix/magix"]});
KISSY.add("magix/magix",function(l,h){var g=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,i=/[^\/]*$/,a=/[#?].*$/,c=/([^=&?\/#]+)=([^&=#?]*)/g,e=/^https?:\/\//i,n={},m=0,q={},k={debug:false,iniFile:"~/ini",appName:"app",appHome:"./",tagName:"vframe",rootId:"magix_vf_root"},f=q.hasOwnProperty,d=function(a){return function(d,b,c){switch(arguments.length){case 0:c=a;break;case 1:c=s.isObject(d)?t(a,d):j(a,d)?a[d]:null;break;case 2:null===b?(delete a[d],c=b):a[d]=c=b}return c}},b=function(a){this.c=[];
this.x=a||20;this.b=this.x+5},o=function(a){return new b(a)},j=function(a,d){return a?f.call(a,d):0},t=function(a,d,b){for(var c in d)if(!0===b)a[c]=d[c];else if(j(d,c)&&(!b||!j(b,c)))a[c]=d[c];return a};t(b.prototype,{get:function(a){var d=this.c,b,a="pathname"+a;if(j(d,a)&&(b=d[a],1<=b.f))b.f++,b.t=m++,b=b.v;return b},set:function(a,d){var b=this.c,a="pathname"+a,c=b[a];if(!j(b,a)){if(b.length>=this.b){b.sort(function(a,b){return b.f==a.f?b.t-a.t:b.f-a.f});for(var f=this.b-this.x;f--;)c=b.pop(),
delete b[c.k]}c={};b.push(c);b[a]=c}c.k=a;c.v=d;c.f=1;c.t=m++;return c},del:function(a){var a="pathname"+a,b=this.c,d=b[a];if(d)d.f=-1E5,delete b[a]}});var u=o(60),w=o(),p=function(a,b,d,c,f,j){s.isArray(a)||(a=[a]);if(!b||!s.isArray(b)&&!b.callee)b=[b];for(c=0;c<a.length;c++)try{j=a[c],f=s.isFunction(j)&&j.apply(d,b)}catch(e){}return f},v=function(){},s={isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},mix:t,has:j,safeExec:p,noop:v,config:d(k),start:function(a){var b=this,a=t(k,a);
b.libEnv(a);var d=a.iniFile.replace("~",a.appName);b.libRequire(d,function(d){k=t(a,d,a);var c=a.progress;b.libRequire(["magix/router","magix/vom"],function(d,f){d.on("changed",function(a){a.loc?f.locationUpdated(a.loc):a.changed.isView()?f.remountRoot(a):f.locationChanged(a)});f.on("progress",c||v);b.libRequire(a.extensions,function(){d.start()})})});a.ready&&(p(a.ready),delete a.ready)},keys:Object.keys||function(a){var b=[],d;for(d in a)j(a,d)&&b.push(d);return b},local:d(q),path:function(b,d){var c=
b+"\n"+d,f=w.get(c);if(!f){b=b.replace(a,"").replace(i,"");"/"==d.charAt(0)?(f=b.indexOf("://"),-1==f?f=d:(f=b.indexOf("/",f+3),f=-1==f?b+d:b.substring(0,f)+d)):f=b+d;for(;g.test(f);)f=f.replace(g,"$1/");w.set(c,f)}return f},pathToObject:function(b){var d=u.get(b);if(!d){var d={},f={},j="";a.test(b)?j=b.replace(a,""):~b.indexOf("=")||(j=b);if(j&&e.test(j))var p=j.indexOf("/",8),j=-1==p?"/":j.substring(p);b.replace(c,function(a,b,d){f[b]=d});d.pathname=j;d.params=f;u.set(b,d)}return d},objectToPath:function(a,
b){var d=a.pathname,c=[],f=a.params,j;for(j in f)c.push(j+"="+(b?encodeURIComponent(f[j]):f[j]));return d+(d&&c.length?"?":"")+c.join("&")},tmpl:function(a,b){return 1==arguments.length?n[a]:n[a]=b},listToMap:function(a,b){var d,c,f={},j;this.isString(a)&&(a=a.split(","));if(a&&(j=a.length))for(d=0;d<j;d++)c=a[d],f[b?c[b]:c]=b?c:1;return f},createCache:o};return s.mix(s,h)},{requires:["magix/impl/magix"]});
KISSY.add("magix/router",function(l,h,g,i){var a=g.has,c=g.mix,e=document,n=/^UTF-8$/i.test(e.charset||e.characterSet||"UTF-8"),m=g.config(),q=g.createCache(),k=g.createCache(),f,d,b,o=65536,j=/#.*$/,t=/^[^#]*#?!?/,u=m.nativeHistory,w,p,v=function(b,d,c){if(b){c=this.params;g.isArray(b)||(b=b.split(","));for(var f=0;f<b.length&&!(d=a(c,b[f]));f++);}return d},s=function(){return a(this,r)},x=function(){return a(this,"view")},D=function(){return this.hash[r]!=this.query[r]},y=function(a){return this.hash.params[a]!=
this.query.params[a]},A=function(b){return a(this.hash.params,b)},C=function(b){return a(this.query.params,b)},E=function(a){return this.params[a]},B=window,z=decodeURIComponent,r="pathname",l=c({getView:function(a){if(!b){b={routes:m.routes||{},e404:m.notFoundView};var d=m.defaultView;if(!d)throw Error("unset defaultView");b.home=d;var c=m.defaultPathname||"";b.routes[c]=d;b[r]=c}a||(a=b[r]);d=b.routes;d=g.isFunction(d)?d.call(m,a):d[a];return{view:d?d:b.e404||b.home,pathname:d?a:b.e404?a:b[r]}},
start:function(){var a=B.history;w=u&&a.pushState;p=u&&!w;w?this.useState():this.useHash();this.route()},parsePath:function(a){var a=g.pathToObject(a),b=a[r];b&&"/"!=b.charAt(0)&&p&&(a[r]=g.path(B.location[r],b));return a},parseQH:function(a){a=a||B.location.href;if(n)try{a=z(a)}catch(b){}var d=q.get(a);if(!d){var d=a.replace(j,""),f=a.replace(t,""),p=this.parsePath(d),e=this.parsePath(f),i={};c(i,p.params);c(i,e.params);d={pathnameDiff:D,paramDiff:y,hashOwn:A,queryOwn:C,get:E,href:a,srcQuery:d,srcHash:f,
query:p,hash:e,params:i};q.set(a,d)}return d},parseLoc:function(a){a=this.parseQH(a);if(!a.view){var b=this.getView(u?a.hash[r]||a.query[r]:a.hash[r]);c(a,b)}return a},getChged:function(a,b){var d=b.href,c=a.href+"\n"+d,f=k.get(c);f||(c=d+"\n"+c,f=k.get(c));if(!f){var j,f={params:{}};a[r]!=b[r]&&(j=f[r]=1);if(a.view!=b.view)j=f.view=1;var d=a.params,p=b.params,e;for(e in d)d[e]!=p[e]&&(j=1,f.params[e]=1);for(e in p)d[e]!=p[e]&&(j=1,f.params[e]=1);f.occur=j;f.isParam=v;f.isPathname=s;f.isView=x;k.set(c,
f)}return f},route:function(){var a=this.parseLoc(),b=d||{params:{},href:"~"},c=!d;d=a;b=this.getChged(b,a);b.occur&&(f=a,this.fire("changed",{location:a,changed:b,firstFire:c}))},navigate2:function(b){if(b&&g.isString(b)){var d=this.parsePath(b),b={};b.params=c({},d.params);b[r]=d[r];if(b[r]){if(p&&(d=f.query)&&(d=d.params))for(var j in d)a(d,j)&&!a(b.params,j)&&(b.params[j]="")}else j=c({},f.params),b.params=c(j,b.params),b[r]=f[r];j=g.objectToPath(b);if(w?j!=f.srcQuery:j!=f.srcHash)w?(this.$firedPop=
1,history.pushState(o--,e.title,j),this.route()):(c(b,f,b),b.srcHash=j,b.hash={params:b.params,pathname:b[r]},this.fire("changed",{loc:f=b}),location.hash="#!"+j)}},navigate:function(a,b){!b&&g.isObject(a)&&(b=a,a="");b&&(a=g.objectToPath({params:b,pathname:a},n));this.navigate2(a)}},i);return g.mix(l,h)},{requires:["magix/impl/router","magix/magix","magix/event"]});
KISSY.add("magix/vframe",function(l,h,g,i){var a=document,c=65536,e=window.CollectGarbage||h.noop,n=h.mix,l=h.config(),m=l.tagName,q=l.rootId,k=h.has,f,d=function(b){return"object"==typeof b?b:a.getElementById(b)};a.createElement(m);var b=/<script[^>]*>[\s\S]*?<\/script>/ig,o=function(a){this.id=a;this.vId=a+"_v";this.cS={};this.rC=this.cC=0;this.sign=-2147483648;this.rM={}};n(o,{root:function(b){if(!f){var c=d(q);if(!c)c=a.createElement(m),c.id=q,a.body.insertBefore(c,a.body.firstChild);f=new o(q);
b.add(f)}return f}});n(n(o.prototype,g),{useAnimUpdate:h.noop,oldViewDestroy:h.noop,prepareNextView:h.noop,newViewCreated:h.noop,mountView:function(a,c){var f=this,e=d(f.id);e._bak?e._chgd=1:(e._bak=1,e._tmpl=e.innerHTML.replace(b,""));var p=f.vN&&f.useAnimUpdate();f.unmountView(p,1);if(a){var o=h.pathToObject(a),g=o.pathname,m=--f.sign;h.libRequire(g,function(a){if(m==f.sign){var b=f.owner;i.prepare(a,{$:d,path:g,vom:b});var j;p?(j=f.vId,f.prepareNextView()):j=f.id;var h=new a({owner:f,id:j,vId:f.vId,
vfId:f.id,location:b.getLocation()});f.view=h;h.on("interact",function(a){f.fire("viewInteract",{view:h});f.viewUsable=1;p&&f.newViewCreated(1);if(!a.tmpl){if(!p&&e._chgd)e.innerHTML=e._tmpl;f.mountZoneVframes(0,0,1)}h.on("rendered",function(){f.mountZoneVframes(0,0,1)});h.on("prerender",function(a){f.unmountZoneVframes(0,a.anim)})},0);h.load(n(o.params,c,!0))}})}},unmountView:function(a,b){if(this.view){this.childrenAlter();this.unmountZoneVframes(0,a);this.fire("viewUnmount");this.view.destroy();
var f=d(this.id);if(!a&&f._bak)f.innerHTML=f._tmpl;a&&b&&this.oldViewDestroy();delete this.view;delete this.viewUsable;e()}this.un("viewInteract");this.sign--},mountVframe:function(a,b,d,f){var c=this.owner,e=c.get(a);if(!e)e=new o(a),e.pId=this.id,k(this.cS,a)||this.cC++,this.cS[a]=f,c.add(e);e.mountView(b,d);return e},mountZoneVframes:function(a,b,f){this.unmountZoneVframes(a);var a=a?a:d(this.vId)||d(this.id),a=d(a).getElementsByTagName(m),e=a.length,p={};if(e)for(var i=0,o,h;i<e;i++){o=a[i];h=
o.id||(o.id="magix_vf_"+c--);k(p,h)||this.mountVframe(h,o.getAttribute("mx-view"),b,f);o=d(o).getElementsByTagName(m);h=0;for(var g=o.length;h<g;h++)p[o[h].id||(o[h].id="magix_vf_"+c--)]=1}else this.childrenCreated()},unmountVframe:function(a,b){var d=this.owner,f=d.get(a);f&&(f.unmountView(b),d.remove(a),delete this.cS[a],this.cC--)},unmountZoneVframes:function(a){var b;if(a){b=d(a).getElementsByTagName(m);for(var f={},c=this.cS,e=b.length-1,o;0<=e;e--)o=b[e].id,k(c,o)&&(f[o]=1);b=f}else b=this.cS;
for(var h in b)this.unmountVframe(h);if(!a)this.cS={},this.cC=0},childrenCreated:function(){var a=this.view;if(a&&!this.fcc)this.fcc=1,delete this.fca,a.fire("created"),this.fire("created");a=this.owner;a.childCreated();if(a=a.get(this.pId)){var b=this.id,d=a.rM;k(d,b)||(d[b]=a.cS[b],a.rC++,a.rC==a.cC&&a.childrenCreated())}},childrenAlter:function(){delete this.fcc;var a=this.view,b=this.id;if(a&&!this.fca)this.fca=1,a.fire("alter"),this.fire("alter");if(a=this.owner.get(this.pId)){var b=this.id,
d=a.rM,f=d[b];k(d,b)&&(a.rC--,delete d[b],f&&a.childrenAlter())}},locationChanged:function(a,b){var d=this.view;if(d&&d.sign&&(d.location=a,d.rendered)){var f=d.olChanged(b),c={location:a,changed:b,prevent:function(){this.cs=[]},toChildren:function(a){a=a||[];h.isString(a)&&(a=a.split(","));this.cs=a}};f&&h.safeExec(d.locationChange,c,d);for(var d=c.cs||h.keys(this.cS),f=0,c=d.length,e=this.owner,o;f<c;f++)(o=e.get(d[f]))&&o.locationChanged(a,b)}},locationUpdated:function(a){var b=this.view;if(b&&
b.sign){b.location=a;var b=this.cS,d,f=this.owner,c;for(c in b)(d=f.get(c))&&d.locationUpdated(a)}}});return o},{requires:["magix/magix","magix/event","magix/view"]});
KISSY.add("magix/view",function(l,h,g,i,a){var c=g.safeExec,e=g.has,n=[],m=g.config(),q=/^~[^\/]*/,k=g.mix,f=g.listToMap("render,renderUI"),d=function(a){return function(){var b;this.sign&&(this.sign++,this.fire("rendercall"),b=a.apply(this,arguments));return b}},l=function(a){k(this,a);this.sign=1};k(l,{wrapAsyn:function(){if(!this["~~"]){this["~~"]=1;var a=this.prototype,b,c;for(c in a){b=a[c];var o=null;g.isFunction(b)&&b!=g.noop&&!b["~~"]&&e(f,c)&&(o=d(b),o["~~"]=b,a[c]=o)}}}});var b=l.prototype,
o=window.CollectGarbage||g.noop,j=/\smx-[^ohv][a-z]+\s*=/g,t={prevent:function(a){a=a||this.domEvent;a.preventDefault?a.preventDefault():a.returnValue=!1},stop:function(a){a=a||this.domEvent;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},halt:function(a){this.prevent(a);this.stop(a)}},u=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,w=/(\w+):([^,]+)/g;k(b,i);k(b,{render:g.noop,locationChange:g.noop,init:g.noop,hasTmpl:!0,enableEvent:!0,enableAnim:!1,load:function(){var a=this,b=a.hasTmpl,d=arguments,
f=function(){a.delegateEvents();a.fire("interact",{tmpl:b},1);c(a.init,d,a);c(a.render,n,a);if(!b&&!a.rendered)a.rendered=!0,a.fire("primed",null,1)};if(b&&!a.template){var e=a.sign;a.planTmpl(function(){e==a.sign&&f()})}else f()},updateViewId:function(){this.id=this.$(this.vId)?this.vId:this.vfId},beginUpdateHTML:function(){if(this.sign&&this.rendered){var a=this.enableAnim;this.fire("refresh",0,1);this.fire("prerender",{anim:a});var b=this.owner;a&&(c(b.oldViewDestroy,n,b),c(b.prepareNextView,n,
b),this.updateViewId())}},endUpdateHTML:function(){if(this.sign)this.rendered&&this.enableAnim&&c(owner.newViewCreated,n,owner),this.rendered||this.fire("primed",null,1),this.rendered=!0,this.fire("rendered"),o()},wrapMxEvent:function(a){return a?(""+a).replace(j,' mx-owner="'+this.vfId+'"$&'):a},setViewHTML:function(a){this.beginUpdateHTML();if(this.sign)this.$(this.id).innerHTML=this.wrapMxEvent(a);this.endUpdateHTML()},observeLocation:function(a){var b;if(!this.$ol)this.$ol={keys:[]};b=this.$ol;
var d=b.keys;if(g.isObject(a))b.pn=a.pathname,a=a.keys;if(a)b.keys=d.concat(g.isString(a)?a.split(","):a)},olChanged:function(a){var b=this.$ol;if(b){var d=0;b.pn&&(d=a.isPathname());d||(d=a.isParam(b.keys));return d}return 1},destroy:function(){this.fire("refresh",0,1);this.fire("destroy",0,1,1);this.delegateEvents(1);this.sign=0},parentView:function(){var a=this.vom.get(this.owner.pId),b=null;if(a&&a.viewUsable)b=a.view;return b},planTmpl:function(a){var b=this,d=g.tmpl(b.path);if(void 0===d){var d=
m.debug,f=b.home+b.path.replace(q,"")+".html";b.fetchTmpl(f,function(d){b.template=g.tmpl(b.path,d);a()},d)}else b.template=d,a()},processEvent:function(a){if(this.enableEvent&&this.sign){var b=a.se,d=a.info.match(u),f=d[1],e=d[2],d=d[3],o=this.events;if(o){var h=o[b.type];if(t[e])t[e](b);if(h&&h[f]){var i={};d&&d.replace(w,function(a,b,d){i[b]=d});c(h[f],k({view:this,currentId:a.cId,targetId:a.tId,domEvent:b,events:o,params:i},t),h)}}}},delegateEvents:function(b){var d=this.events,b=b?a.detachEvent:
a.attachEvent,f;for(f in d)b.call(a,f)}});g.mix(l,h,{prototype:!0});g.mix(l.prototype,h.prototype);return l},{requires:["magix/impl/view","magix/magix","magix/event","magix/body"]});
KISSY.add("magix/vom",function(l,h,g,i,a){var c=g.has,e=0,n=0,m=0,q=0,k={},f,d=g.mix({all:function(){return k},add:function(a){if(!c(k,a.id))e++,k[a.id]=a,a.owner=d,d.fire("add",{vframe:a})},get:function(a){return k[a]},remove:function(a){var f=k[a];f&&(e--,f.fcc&&n--,delete k[a],d.fire("remove",{vframe:f}))},childCreated:function(){if(!q){n++;var a=n/e;m<a&&(d.fire("progress",{percent:m=a}),1==a&&(q=1,d.un("progress")))}},root:function(){return h.root(d)},remountRoot:function(a){var c=d.root();f=
a.location;c.mountView(f.view)},locationChanged:function(a){f=a.location;d.root().locationChanged(f,a.changed)},locationUpdated:function(a){f=a;d.root().locationUpdated(a)},getLocation:function(){return f}},i);a.VOM=d;a.on("event",function(a){var f=d.get(a.hld);(f=f&&f.view)&&f.processEvent(a)});return d},{requires:["magix/vframe","magix/magix","magix/event","magix/body"]});
KISSY.add("mxext/mmanager",function(l,h){var g=h.has,i=h.safeExec,a=function(a){h.isArray(a)||(a=[a]);for(var d=0,b;d<a.length;d++)b=a[d],delete b.cacheKey;return a},c=function(a){this.$modelClass=a;this.$modelsCache=h.createCache();this.$modelsCacheKeys={}},e=[].slice,n={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},m=function(a){var d={},b;for(b in a)n[b]||(d[b]=a[b]);return d},q=function(a,d){var b=e.call(arguments,2);return function(){return a.apply(d,b.concat(e.call(arguments)))}};
h.mix(c,{create:function(a){if(!a)throw Error("MManager.create modelClass ungiven");return new c(a)}});var k=function(a){this.$host=a;this.$task=!1};h.mix(k.prototype,{fetchModels:function(a,d,b){var c=this;if(c.$task)return c.next(function(c){c.fetchModels(a,d,error,b)}),c;c.$task=!0;var e=c.$host;if(!c.$reqModels)c.$reqModels={};var m=e.$modelsCache,n=e.$modelsCacheKeys,k=c.$reqModels;h.isArray(a)||(a=[a]);var p=a.length,v=0,s,x,D=Array(p),y=[],A={},C=[],E=l.isArray(d);E&&(y=Array(d.length));for(var B=
function(a,f,e,h){if(!c.$destroy){v++;delete k[e.id];var j=e._cacheKey;D[a]=e;if(f)x=!0,s=h||s,A[a]=h;else{j&&!m.get(j)&&m.set(j,e);var q=e.metaParams;e._doneAt=l.now();var r=e._context;r&&i(r.after,[e].concat(q),r)}if(2==b)(q=E?d[a]:d)&&(y[a]=i(q,[e,f?{msg:h}:null,x?A:null],c));else if(4==b){C[a]={m:e,e:f,s:h};for(a=C.i||0;q=C[a];a++)if(r=E?d[a]:d,y[a]=i(r,[q.m,q.e?{msg:q.s}:null,C.e?A:null,y],c),q.e)A[a]=q.s,C.e=1;C.i=a}j&&g(n,j)&&(a=n[j],delete n[j],i(a,[f,e,h],e));if(v>=p)A.msg=s,f=x?A:null,1==
b?(D.push(f),y[0]=i(d,D,c),y[1]=f):y.push(f),c.$ntId=setTimeout(function(){c.$task=!1;c.doNext(y)},30)}},z=0,r;z<a.length;z++)if(r=a[z]){var G;G=e.getModel(r);var F=G.cacheKey;F&&g(n,F)?n[F].push(q(B,c,z)):(r=G.entity,G.needUpdate?(k[r.id]=r,F&&(n[F]=[]),r.request({success:q(B,r,z,!1,r),error:q(B,r,z,!0,r)})):B(z,!1,r))}else throw Error("miss attrs:"+a);return c},fetchAll:function(a,d){return this.fetchModels(a,d,1)},saveAll:function(c,d){c=a(c);return this.fetchModels(c,d,1)},fetchOrder:function(a,
d){var b=e.call(arguments,1);return this.fetchModels(a,1<b.length?b:d,4)},saveOrder:function(c,d){var c=a(c),b=e.call(arguments,1);return this.fetchModels(c,1<b.length?b:d,4)},saveOne:function(c,d){var c=a(c),b=e.call(arguments,1);return this.reqModels(c,1<b.length?b:d,2)},fetchOne:function(a,d){var b=e.call(arguments,1);return this.fetchModels(a,1<b.length?b:d,2)},abort:function(){clearTimeout(this.$ntId);var a=this.$reqModels,d=this.$host.$modelsCacheKeys;if(a)for(var b in a){var c=a[b],e=c._cacheKey;
if(e&&g(d,e)){var h=d[e];delete d[e];i(h,[!0,c,"aborted"],c)}c.abort()}this.$reqModels={};this.$queue=[];this.$task=!1},next:function(a){if(!this.$queue)this.$queue=[];this.$queue.push(a);this.$task||this.doNext.apply(this,[this].concat(this.$latest||[]));return this},doNext:function(a){var d=this.$queue;d&&(d=d.shift())&&i(d,[this].concat(a),this);this.$latest=a},destroy:function(){this.$destroy=!0;this.abort()}});h.mix(c.prototype,{registerModels:function(a){h.isArray(a)||(a=[a]);for(var d=0,b;d<
a.length;d++){b=a[d];if(!b.name)throw Error("model must own a name attribute");this[b.name]=b}},registerMethods:function(a){var d=this,b;for(b in a)g(a,b)&&(d[b]=function(a){return function(){for(var b,c=arguments,f=[],e=0,g;e<c.length;e++)g=c[e],h.isFunction(g)?f.push(function(a){return function(){b||a.apply(a,arguments)}}(g)):f.push(g);var n=a.apply(d,f);return{abort:function(){n&&n.abort&&i(n.abort,["aborted"],n);b=!0}}}}(a[b]))},createModel:function(a){var d=this.getModelMeta(a),b=new this.$modelClass(m(d)),
c=a;c.after||(c=d);if(c.after)b._context=c;b._cacheKey=a.cacheKey||d.cacheKey;b._meta=d;b.set(m(a));b.setUrlParams(d.urlParams);b.setPostParams(d.postParams);b.setUrlParams(a.urlParams);b.setPostParams(a.postParams);c=a;c.before||(c=d);a=a.metaParams||[];l.isFunction(c.before)&&i(c.before,[b].concat(a),c);b.metaParams=a;return b},getModelMeta:function(a){var d=this[a.name];if(!d)throw Error("Not found:"+a.name);return d},getModel:function(a){var d=this.getModelFromCache(a),b;d||(b=!0,d=this.createModel(a));
return{entity:d,cacheKey:d._cacheKey,needUpdate:b}},saveAll:function(a,d){return(new k(this)).saveAll(a,d)},fetchAll:function(a,d){return(new k(this)).fetchAll(a,d)},saveOrder:function(a,d){var b=new k(this);return b.saveOrder.apply(b,arguments)},fetchOrder:function(a,d){var b=new k(this);return b.fetchOrder.apply(b,arguments)},saveOne:function(a,d){var b=new k(this);return b.saveOne.apply(b,arguments)},fetchOne:function(a,d){var b=new k(this);return b.fetchOne.apply(b,arguments)},clearCacheByKey:function(a){var d=
this.$modelsCache;l.isString(a)&&d.del(a)},clearCacheByName:function(a){for(var d=this.$modelsCache.c,b=0;b<d.length;b++){var c=d[b];c.v&&c.v._meta.name==a&&delete d[c.k]}},getModelUrl:function(a){return this.$modelClass.prototype.url((l.isString(a)?this[a]:a).uri)},getModelFromCache:function(a){var d=this.$modelsCache,b=null,c;if(l.isString(a))c=a;else{var e=this.getModelMeta(a);c=a.cacheKey||e.cacheKey}if(c&&(b=d.get(c))){if(!e)e=b._meta;a=a.cacheTime||e.cacheTime||0;0<a&&l.now()-b._doneAt>a&&(this.clearCacheByKey(c),
b=null)}return b}});return c},{requires:["magix/magix"]});
KISSY.add("mxext/model",function(l,h){var g=function(a,c,e){for(var i in c)l.isObject(c[i])?(h.has(a,i)||(a[i]={}),g(a[i],c[i],!0)):e&&(a[i]=c[i])},i=function(a){a&&this.set(a);this.id=l.guid("m")};h.mix(i,{GET:"GET",POST:"POST",extend:function(a,c){var e=function(){e.superclass.constructor.apply(this,arguments);c&&h.safeExec(c,[],this)};h.mix(e,this,{prototype:!0});g(a,this.prototype);return l.extend(e,this,a)}});h.mix(i.prototype,{urlMap:{},sync:h.noop,parse:function(a){return a},getParamsObject:function(a){if(!a)a=
i.GET;return this["$"+a]||null},getUrlParamsObject:function(){return this.getParamsObject(i.GET)},getPostParamsObject:function(){return this.getParamsObject(i.POST)},getPostParams:function(){return this.getParams(i.POST)},getUrlParams:function(){return this.getParams(i.GET)},getParams:function(a){var a=a?a.toUpperCase():i.GET,a=this["$"+a],c=[],e;if(a)for(var h in a)if(e=a[h],l.isArray(e))for(var g=0;g<e.length;g++)c.push(h+"="+encodeURIComponent(e[g]));else c.push(h+"="+encodeURIComponent(e));return c.join("&")},
setUrlParamsIf:function(a,c){this.setParams(a,c,i.GET,!0)},setPostParamsIf:function(a,c){this.setParams(a,c,i.POST,!0)},setParams:function(a,c,e,h){e=e?e.toUpperCase():i.GET;if(!this.$keysCache)this.$keysCache={};this.$keysCache[e]=!0;e="$"+e;this[e]||(this[e]={});if(l.isObject(a))for(var g in a){if(!h||!this[e][g])this[e][g]=a[g]}else if(a&&(!h||!this[e][a]))this[e][a]=c},setPostParams:function(a,c){this.setParams(a,c,i.POST)},setUrlParams:function(a,c){this.setParams(a,c,i.GET)},removeParamsObject:function(a){if(!a)a=
i.GET;delete this["$"+a]},removePostParamsObject:function(){this.removeParamsObject(i.POST)},removeUrlParamsObject:function(){this.removeParamsObject(i.GET)},reset:function(){var a=this.$keysCache;if(a){for(var c in a)h.has(a,c)&&delete this["$"+c];delete this.$keysCache}a=this.$keys;c=this.$attrs;if(a){for(var e=0;e<a.length;e++)delete c[a[e]];delete this.$keys}},url:function(a){var a=a||this.get("uri"),c;if(a){c=a.split(":");var e=this.urlMap;if(e)for(var h=0,i=c.length;h<i&&!(e=e[c[h]],void 0===
e);h++)h==i-1&&(a=e)}else throw Error("model not set uri");return a},get:function(a){var c=this.$attrs;return c?c[a]:null},set:function(a,c,e){if(!this.$attrs)this.$attrs={};if(e&&!this.$keys)this.$keys=[];if(l.isObject(a))for(var h in a)e&&this.$keys.push(h),this.$attrs[h]=a[h];else a&&(e&&this.$keys.push(a),this.$attrs[a]=c)},load:function(a){this.request(a)},save:function(a){this.request(a)},request:function(a){a||(a={});var c=a.success,e=a.error,h=this;h.$abort=!1;a.success=function(a){if(!h.$abort){if(a){var e=
h.parse(a);e&&(l.isArray(e)&&(e={list:e}),h.set(e,null,!0))}c&&c.apply(this,arguments)}};a.error=function(){h.$abort||e&&e.apply(this,arguments)};h.$trans=h.sync(a)},abort:function(){this.$trans&&this.$trans.abort&&this.$trans.abort();delete this.$trans;this.$abort=!0},isAborted:function(){return this.$abort},beginTransaction:function(){this.$bakAttrs=l.clone(this.$attrs)},rollbackTransaction:function(){var a=this.$bakAttrs;if(a)this.$attrs=a,delete this.$bakAttrs},endTransaction:function(){delete this.$bakAttrs}});
return i},{requires:["magix/magix"]});
KISSY.add("mxext/modelfactory",function(l,h){var g=function(a){this.$modelClass=a},i=function(a){if(a._wraped_)return a;var c=function(c){var i=c.success,g=this;g.get("~~ui")?(c.success=function(){g.set("~~ui",!1);g._after&&h.safeExec(g._after,g);i&&i.apply(c)},a.call(g,c)):i&&i.apply(c)};c._wraped_=!0;return c};h.mix(g,{mClsCache:{},create:function(a,c){if(!c)throw Error("Factory.create modelClass ungiven");var e=this.mClsCache;a||(a=l.guid());e[a]||(e[a]=new g(c));return e[a]}});h.mix(g.prototype,
{registerModels:function(a){h.isArray(a)||(a=[a]);for(var c=0,e;c<a.length;c++){e=a[c];if(!e.type)throw Error("model must own a type attribute");this[e.type]=e}},registerMethods:function(a){for(var c in a)h.hasProp(a,c)&&(this[c]=a[c])},callMethods:function(a,c,e){for(var h=[],i="",g=a.length,k=0,f,d=function(a,b,d){f||(k++,d?i=a:h[b]=a,g<=k&&(i?l.isFunction(e)&&e(i):l.isFunction(c)&&c.apply(c,h)))},b=function(a,b){return function(c){d(c,a,!b)}},o=0,j;o<a.length;o++){j=a[o];var t;if(t=l.isFunction(j.name)?
j.name:this[j.name]){if(!j.params)j.params=[];j.params.push(b(o,!0),b(o));t.apply(this,j.params)}else d("unfound:"+j.name,o,!0)}return{abort:function(){f=!0}}},fetchModels:function(a,c,e,i){var g=this;if(!g.$modelsCache)g.$modelsCache={};if(!g.$modelsCacheKeys)g.$modelsCacheKeys={};var q=g.$modelsCache,k=g.$modelsCacheKeys;h.isArray(a)||(a=[a]);for(var f=a.length,d=0,b,o=[],j=[],t,u=function(a,j,p,s){d++;if(j)b=s||"fetch data error";else{t=!0;p.set("~~ui",!1);o[a]=p;if((a=p._cacheKey)&&!h.hasProp(q,
a))q[p._cacheKey]=p,a=p._params,p._doneAt=l.now(),p._after&&h.safeExec(p._after,[p].concat(a));4==i&&c(p)}if((a=p._cacheKey)&&h.hasProp(k,a)){var u=k[a];delete k[a];h.safeExec(u,[j,p,s],p)}4!=i&&d>=f&&(2==i?t?c&&c.apply(g,o):e&&e(b):b?e&&e(b):c&&c.apply(g,o))},w=Array.prototype.slice,p=function(a,b){var d=w.call(arguments,2);return function(){return a.apply(b,d.concat(w.call(arguments)))}},v=0,s;v<a.length;v++){s=a[v];var x=s.cacheKey;x&&h.hasProp(k,x)?k[x].push(p(u,g,v)):(s=g.create(s,!0),s.get("~~ui")?
(j.push(s),x&&(k[x]=[]),s.request({success:p(u,s,v,!1,s),error:p(u,s,v,!0,s)})):u(v,!1,s))}return{abort:function(){for(var a=0,b;a<j.length;a++){b=j[a];var d=b._cacheKey;if(d&&h.hasProp(k,d)){var c=k[d];delete k[d];h.safeExec(c,[!0,b,"abort"],b)}b.abort()}}}},fetchAll:function(a,c,e){return this.fetchModels(a,c,e,1)},fetchAny:function(a,c,e){return this.fetchModels(a,c,e,2)},fetchOne:function(a,c){return this.fetchModels(a,c,h.noop,4)},getIf:function(a){var c=this.$modelsCache;return c&&h.hasProp(c,
a)?c[a]:null},setUpdateIdent:function(a){(a=this.getIf(a))&&a.set("~~ui",!0)},create:function(a,c){if(!a.type)throw Error('model must own a "type" attribute');var e=a.type,g=a.cacheKey||e.cacheKey,m,q=a.expires||e.expires||0;if(!this.$modelsCache)this.$modelsCache={};var k=this.$modelsCache,f=a.params||[];if(g&&h.hasProp(k,g)){m=k[g];var d=m.get("~~ui");!d&&0<q&&l.now()-m._doneAt>q&&(d=!0);d&&(delete k[g],m.set("~~ui",!0))}else m=new this.$modelClass(e.ops),m._after=e.after,m._cacheKey=g,m.set("~~ui",
!0);m._params=f;if(d=m.get("~~ui"))m.reset(),m.set(a.ops),m.setParams(e.gets),m.setPostParams(e.posts),m.setParams(a.gets),m.setPostParams(a.posts),h.isFunction(e.before)&&h.safeExec(e.before,[m].concat(f),e);if(!c)m.request=i(m.request);return m}});return g},{requires:["magix/magix"]});
KISSY.add("mxext/view",function(l,h,g,i){var a=window,c="destroy,abort,stop,cancel,remove".split(","),e=0,n=h.safeExec,m=h.has,q={},k=function(a){if(!k.d)k.d=1,a.on("add",function(a){var a=a.vframe,d=q[a.id];if(d){for(var c=0;c<d.length;c++)f(a,d[c]);delete q[a.id]}}),a.on("remove",function(a){delete q[a.vframe.id]}),a.root().on("childrenCreated",function(){q={}})},f=function(a,b){var c=a.view;if(c&&a.viewUsable)n(c.receiveMessage,b,c);else{var e=function(c){a.un("viewInteract",e);n(c.view.receiveMessage,
b,c.view)};a.on("viewInteract",e)}};return g.extend({mxViewCtor:h.noop,navigate:function(a){i.navigate.apply(i,arguments)},manage:function(a,b){var c=!0;1==arguments.length&&(b=a,a="res_"+e++,c=!1);if(!this.$resCache)this.$resCache={};this.$resCache[a]={hasKey:c,res:b};return b},getManaged:function(a){var b=this.$resCache;return b&&m(b,a)?b[a].res:null},removeManaged:function(a){var b=null,c=this.$resCache;if(c)if(m(c,a))b=c[a].res,delete c[a];else for(var e in c)if(c[e].res===a){b=c[e].res;delete c[e];
break}return b},destroyManaged:function(d){var b=this.$resCache;if(b){for(var e in b){var f=b[e],g=f.res;if(h.isNumber(g))a.clearTimeout(g),a.clearInterval(g);else if(g)if(g.nodeType&&g.parentNode)l.one(g).remove();else for(var i=0;i<c.length;i++)h.isFunction(g[c[i]])&&n(g[c[i]],[],g);d&&!f.hasKey&&delete b[e]}d||delete this.$resCache}},receiveMessage:h.noop,postMessageTo:function(a,b){var c=this.vom;k(c);h.isArray(a)||(a=[a]);b||(b={});for(var e=0,g;e<a.length;e++){g=a[e];var i=c.get(g);i?f(i,b):
(q[g]||(q[g]=[]),q[g].push(b))}},destroyMRequest:function(){var a=this.$resCache;if(a)for(var b in a){var c=a[b].res;c&&c.fetchOne&&c.fetchAll&&(c.destroy(),delete a[b])}}},function(){var a=this;a.on("interact",function(){a.on("rendercall",function(){a.destroyMRequest()});a.on("prerender",function(){a.destroyManaged(!0)});a.on("destroy",function(){a.destroyManaged()})});a.mxViewCtor()})},{requires:["magix/magix","magix/view","magix/router"]});
(function(l){var h=function(){};if(!l.console)l.console={log:h,info:h,error:h};var g,i={};if(!l.Magix)l.Magix={config:function(a){for(var c in a)i[c]=a[c]},start:function(a){g=a}},KISSY.use("magix/magix",function(a,c){l.Magix=c;c.config(i);g&&c.start(g)})})(this);