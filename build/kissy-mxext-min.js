KISSY.add("mxext/mmanager",function(l,h){var o=h.has,i=h.safeExec,a=function(a){h.isArray(a)||(a=[a]);for(var g=0,e;g<a.length;g++)e=a[g],delete e.cacheKey;return a},c=function(a){this.$modelClass=a;this.$modelsCache=h.createCache();this.$modelsCacheKeys={}},b=[].slice,f={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},d=function(a){var g={},e;for(e in a)f[e]||(g[e]=a[e]);return g},m=function(a,g){var e=b.call(arguments,2);return function(){return a.apply(g,e.concat(b.call(arguments)))}};
h.mix(c,{create:function(a){if(!a)throw Error("MManager.create modelClass ungiven");return new c(a)}});var j=function(a){this.$host=a;this.$task=!1};h.mix(j.prototype,{fetchModels:function(a,g,e){var b=this;if(b.$task)return b.next(function(b){b.fetchModels(a,g,error,e)}),b;b.$task=!0;var c=b.$host;if(!b.$reqModels)b.$reqModels={};var d=c.$modelsCache,f=c.$modelsCacheKeys,j=b.$reqModels;h.isArray(a)||(a=[a]);var x=a.length,t=0,q,u,D=Array(x),v=[],p={},y=[],E=l.isArray(g);E&&(v=Array(g.length));for(var B=
function(a,k,c,h){if(!b.$destroy){t++;delete j[c.id];var n=c._cacheKey;D[a]=c;if(k)u=!0,q=h||q,p[a]=h;else{n&&!d.get(n)&&d.set(n,c);var m=c.metaParams;c._doneAt=l.now();var r=c._context;r&&i(r.after,[c].concat(m),r)}if(2==e)(m=E?g[a]:g)&&(v[a]=i(m,[c,k?{msg:h}:null,u?p:null],b));else if(4==e){y[a]={m:c,e:k,s:h};for(a=y.i||0;m=y[a];a++)if(r=E?g[a]:g,v[a]=i(r,[m.m,m.e?{msg:m.s}:null,y.e?p:null,v],b),m.e)p[a]=m.s,y.e=1;y.i=a}n&&o(f,n)&&(a=f[n],delete f[n],i(a,[k,c,h],c));if(t>=x)p.msg=q,k=u?p:null,1==
e?(D.push(k),v[0]=i(g,D,b),v[1]=k):v.push(k),b.$ntId=setTimeout(function(){b.$task=!1;b.doNext(v)},30)}},w=0,r;w<a.length;w++)if(r=a[w]){var C;C=c.getModel(r);var A=C.cacheKey;A&&o(f,A)?f[A].push(m(B,b,w)):(r=C.entity,C.needUpdate?(j[r.id]=r,A&&(f[A]=[]),r.request({success:m(B,r,w,!1,r),error:m(B,r,w,!0,r)})):B(w,!1,r))}else throw Error("miss attrs:"+a);return b},fetchAll:function(a,g){return this.fetchModels(a,g,1)},saveAll:function(b,g){b=a(b);return this.fetchModels(b,g,1)},fetchOrder:function(a,
g){var e=b.call(arguments,1);return this.fetchModels(a,1<e.length?e:g,4)},saveOrder:function(c,g){var c=a(c),e=b.call(arguments,1);return this.fetchModels(c,1<e.length?e:g,4)},saveOne:function(c,g){var c=a(c),e=b.call(arguments,1);return this.reqModels(c,1<e.length?e:g,2)},fetchOne:function(a,g){var e=b.call(arguments,1);return this.fetchModels(a,1<e.length?e:g,2)},abort:function(){clearTimeout(this.$ntId);var a=this.$reqModels,g=this.$host.$modelsCacheKeys;if(a)for(var e in a){var b=a[e],c=b._cacheKey;
if(c&&o(g,c)){var d=g[c];delete g[c];i(d,[!0,b,"aborted"],b)}b.abort()}this.$reqModels={};this.$queue=[];this.$task=!1},next:function(a){if(!this.$queue)this.$queue=[];this.$queue.push(a);this.$task||this.doNext.apply(this,[this].concat(this.$latest||[]));return this},doNext:function(a){var g=this.$queue;g&&(g=g.shift())&&i(g,[this].concat(a),this);this.$latest=a},destroy:function(){this.$destroy=!0;this.abort()}});h.mix(c.prototype,{registerModels:function(a){h.isArray(a)||(a=[a]);for(var g=0,e;g<
a.length;g++){e=a[g];if(!e.name)throw Error("model must own a name attribute");this[e.name]=e}},registerMethods:function(a){var g=this,e;for(e in a)o(a,e)&&(g[e]=function(a){return function(){for(var e,b=arguments,c=[],d=0,k;d<b.length;d++)k=b[d],h.isFunction(k)?c.push(function(a){return function(){e||a.apply(a,arguments)}}(k)):c.push(k);var f=a.apply(g,c);return{abort:function(){f&&f.abort&&i(f.abort,["aborted"],f);e=!0}}}}(a[e]))},createModel:function(a){var g=this.getModelMeta(a),e=new this.$modelClass(d(g)),
b=a;b.after||(b=g);if(b.after)e._context=b;e._cacheKey=a.cacheKey||g.cacheKey;e._meta=g;e.set(d(a));e.setUrlParams(g.urlParams);e.setPostParams(g.postParams);e.setUrlParams(a.urlParams);e.setPostParams(a.postParams);b=a;b.before||(b=g);a=a.metaParams||[];l.isFunction(b.before)&&i(b.before,[e].concat(a),b);e.metaParams=a;return e},getModelMeta:function(a){var g=this[a.name];if(!g)throw Error("Not found:"+a.name);return g},getModel:function(a){var g=this.getModelFromCache(a),b;g||(b=!0,g=this.createModel(a));
return{entity:g,cacheKey:g._cacheKey,needUpdate:b}},saveAll:function(a,b){return(new j(this)).saveAll(a,b)},fetchAll:function(a,b){return(new j(this)).fetchAll(a,b)},saveOrder:function(a,b){var e=new j(this);return e.saveOrder.apply(e,arguments)},fetchOrder:function(a,b){var e=new j(this);return e.fetchOrder.apply(e,arguments)},saveOne:function(a,b){var e=new j(this);return e.saveOne.apply(e,arguments)},fetchOne:function(a,b){var e=new j(this);return e.fetchOne.apply(e,arguments)},clearCacheByKey:function(a){var b=
this.$modelsCache;l.isString(a)&&b.del(a)},clearCacheByName:function(a){for(var b=this.$modelsCache.c,e=0;e<b.length;e++){var c=b[e];c.v&&c.v._meta.name==a&&delete b[c.k]}},getModelUrl:function(a){return this.$modelClass.prototype.url((l.isString(a)?this[a]:a).uri)},getModelFromCache:function(a){var b=this.$modelsCache,c=null,d;if(l.isString(a))d=a;else{var f=this.getModelMeta(a);d=a.cacheKey||f.cacheKey}if(d&&(c=b.get(d))){if(!f)f=c._meta;a=a.cacheTime||f.cacheTime||0;0<a&&l.now()-c._doneAt>a&&(this.clearCacheByKey(d),
c=null)}return c}});return c},{requires:["magix/magix"]});
KISSY.add("mxext/model",function(l,h){var o=function(a,c,b){for(var f in c)l.isObject(c[f])?(h.has(a,f)||(a[f]={}),o(a[f],c[f],!0)):b&&(a[f]=c[f])},i=function(a){a&&this.set(a);this.id=l.guid("m")};h.mix(i,{GET:"GET",POST:"POST",extend:function(a,c){var b=function(){b.superclass.constructor.apply(this,arguments);c&&h.safeExec(c,[],this)};h.mix(b,this,{prototype:!0});o(a,this.prototype);return l.extend(b,this,a)}});h.mix(i.prototype,{urlMap:{},sync:h.noop,parse:function(a){return a},getParamsObject:function(a){if(!a)a=
i.GET;return this["$"+a]||null},getUrlParamsObject:function(){return this.getParamsObject(i.GET)},getPostParamsObject:function(){return this.getParamsObject(i.POST)},getPostParams:function(){return this.getParams(i.POST)},getUrlParams:function(){return this.getParams(i.GET)},getParams:function(a){var a=a?a.toUpperCase():i.GET,a=this["$"+a],c=[],b;if(a)for(var f in a)if(b=a[f],l.isArray(b))for(var d=0;d<b.length;d++)c.push(f+"="+encodeURIComponent(b[d]));else c.push(f+"="+encodeURIComponent(b));return c.join("&")},
setUrlParamsIf:function(a,c){this.setParams(a,c,i.GET,!0)},setPostParamsIf:function(a,c){this.setParams(a,c,i.POST,!0)},setParams:function(a,c,b,f){b=b?b.toUpperCase():i.GET;if(!this.$keysCache)this.$keysCache={};this.$keysCache[b]=!0;b="$"+b;this[b]||(this[b]={});if(l.isObject(a))for(var d in a){if(!f||!this[b][d])this[b][d]=a[d]}else if(a&&(!f||!this[b][a]))this[b][a]=c},setPostParams:function(a,c){this.setParams(a,c,i.POST)},setUrlParams:function(a,c){this.setParams(a,c,i.GET)},removeParamsObject:function(a){if(!a)a=
i.GET;delete this["$"+a]},removePostParamsObject:function(){this.removeParamsObject(i.POST)},removeUrlParamsObject:function(){this.removeParamsObject(i.GET)},reset:function(){var a=this.$keysCache;if(a){for(var c in a)h.has(a,c)&&delete this["$"+c];delete this.$keysCache}a=this.$keys;c=this.$attrs;if(a){for(var b=0;b<a.length;b++)delete c[a[b]];delete this.$keys}},url:function(a){var a=a||this.get("uri"),c;if(a){c=a.split(":");var b=this.urlMap;if(b)for(var f=0,d=c.length;f<d&&!(b=b[c[f]],void 0===
b);f++)f==d-1&&(a=b)}else throw Error("model not set uri");return a},get:function(a){var c=this.$attrs;return c?c[a]:null},set:function(a,c,b){if(!this.$attrs)this.$attrs={};if(b&&!this.$keys)this.$keys=[];if(l.isObject(a))for(var f in a)b&&this.$keys.push(f),this.$attrs[f]=a[f];else a&&(b&&this.$keys.push(a),this.$attrs[a]=c)},load:function(a){this.request(a)},save:function(a){this.request(a)},request:function(a){a||(a={});var c=a.success,b=a.error,f=this;f.$abort=!1;a.success=function(a){if(!f.$abort){if(a){var b=
f.parse(a);b&&(l.isArray(b)&&(b={list:b}),f.set(b,null,!0))}c&&c.apply(this,arguments)}};a.error=function(){f.$abort||b&&b.apply(this,arguments)};f.$trans=f.sync(a)},abort:function(){this.$trans&&this.$trans.abort&&this.$trans.abort();delete this.$trans;this.$abort=!0},isAborted:function(){return this.$abort},beginTransaction:function(){this.$bakAttrs=l.clone(this.$attrs)},rollbackTransaction:function(){var a=this.$bakAttrs;if(a)this.$attrs=a,delete this.$bakAttrs},endTransaction:function(){delete this.$bakAttrs}});
return i},{requires:["magix/magix"]});
KISSY.add("mxext/modelfactory",function(l,h){var o=function(a){this.$modelClass=a},i=function(a){if(a._wraped_)return a;var c=function(b){var c=b.success,d=this;d.get("~~ui")?(b.success=function(){d.set("~~ui",!1);d._after&&h.safeExec(d._after,d);c&&c.apply(b)},a.call(d,b)):c&&c.apply(b)};c._wraped_=!0;return c};h.mix(o,{mClsCache:{},create:function(a,c){if(!c)throw Error("Factory.create modelClass ungiven");var b=this.mClsCache;a||(a=l.guid());b[a]||(b[a]=new o(c));return b[a]}});h.mix(o.prototype,
{registerModels:function(a){h.isArray(a)||(a=[a]);for(var c=0,b;c<a.length;c++){b=a[c];if(!b.type)throw Error("model must own a type attribute");this[b.type]=b}},registerMethods:function(a){for(var c in a)h.hasProp(a,c)&&(this[c]=a[c])},callMethods:function(a,c,b){for(var f=[],d="",h=a.length,i=0,k,g=function(a,g,e){k||(i++,e?d=a:f[g]=a,h<=i&&(d?l.isFunction(b)&&b(d):l.isFunction(c)&&c.apply(c,f)))},e=function(a,b){return function(c){g(c,a,!b)}},s=0,n;s<a.length;s++){n=a[s];var z;if(z=l.isFunction(n.name)?
n.name:this[n.name]){if(!n.params)n.params=[];n.params.push(e(s,!0),e(s));z.apply(this,n.params)}else g("unfound:"+n.name,s,!0)}return{abort:function(){k=!0}}},fetchModels:function(a,c,b,f){var d=this;if(!d.$modelsCache)d.$modelsCache={};if(!d.$modelsCacheKeys)d.$modelsCacheKeys={};var i=d.$modelsCache,j=d.$modelsCacheKeys;h.isArray(a)||(a=[a]);for(var k=a.length,g=0,e,s=[],n=[],z,o=function(a,n,p,o){g++;if(n)e=o||"fetch data error";else{z=!0;p.set("~~ui",!1);s[a]=p;if((a=p._cacheKey)&&!h.hasProp(i,
a))i[p._cacheKey]=p,a=p._params,p._doneAt=l.now(),p._after&&h.safeExec(p._after,[p].concat(a));4==f&&c(p)}if((a=p._cacheKey)&&h.hasProp(j,a)){var q=j[a];delete j[a];h.safeExec(q,[n,p,o],p)}4!=f&&g>=k&&(2==f?z?c&&c.apply(d,s):b&&b(e):e?b&&b(e):c&&c.apply(d,s))},F=Array.prototype.slice,x=function(a,b){var c=F.call(arguments,2);return function(){return a.apply(b,c.concat(F.call(arguments)))}},t=0,q;t<a.length;t++){q=a[t];var u=q.cacheKey;u&&h.hasProp(j,u)?j[u].push(x(o,d,t)):(q=d.create(q,!0),q.get("~~ui")?
(n.push(q),u&&(j[u]=[]),q.request({success:x(o,q,t,!1,q),error:x(o,q,t,!0,q)})):o(t,!1,q))}return{abort:function(){for(var a=0,b;a<n.length;a++){b=n[a];var c=b._cacheKey;if(c&&h.hasProp(j,c)){var g=j[c];delete j[c];h.safeExec(g,[!0,b,"abort"],b)}b.abort()}}}},fetchAll:function(a,c,b){return this.fetchModels(a,c,b,1)},fetchAny:function(a,c,b){return this.fetchModels(a,c,b,2)},fetchOne:function(a,c){return this.fetchModels(a,c,h.noop,4)},getIf:function(a){var c=this.$modelsCache;return c&&h.hasProp(c,
a)?c[a]:null},setUpdateIdent:function(a){(a=this.getIf(a))&&a.set("~~ui",!0)},create:function(a,c){if(!a.type)throw Error('model must own a "type" attribute');var b=a.type,f=a.cacheKey||b.cacheKey,d,m=a.expires||b.expires||0;if(!this.$modelsCache)this.$modelsCache={};var j=this.$modelsCache,k=a.params||[];if(f&&h.hasProp(j,f)){d=j[f];var g=d.get("~~ui");!g&&0<m&&l.now()-d._doneAt>m&&(g=!0);g&&(delete j[f],d.set("~~ui",!0))}else d=new this.$modelClass(b.ops),d._after=b.after,d._cacheKey=f,d.set("~~ui",
!0);d._params=k;if(g=d.get("~~ui"))d.reset(),d.set(a.ops),d.setParams(b.gets),d.setPostParams(b.posts),d.setParams(a.gets),d.setPostParams(a.posts),h.isFunction(b.before)&&h.safeExec(b.before,[d].concat(k),b);if(!c)d.request=i(d.request);return d}});return o},{requires:["magix/magix"]});
KISSY.add("mxext/view",function(l,h,o,i){var a=window,c="destroy,abort,stop,cancel,remove".split(","),b=0,f=h.safeExec,d=h.has,m={},j=function(a){if(!j.d)j.d=1,a.on("add",function(a){var a=a.vframe,b=m[a.id];if(b){for(var c=0;c<b.length;c++)k(a,b[c]);delete m[a.id]}}),a.on("remove",function(a){delete m[a.vframe.id]}),a.root().on("childrenCreated",function(){m={}})},k=function(a,b){var c=a.view;if(c&&a.viewUsable)f(c.receiveMessage,b,c);else{var d=function(c){a.un("viewInteract",d);f(c.view.receiveMessage,
b,c.view)};a.on("viewInteract",d)}};return o.extend({mxViewCtor:h.noop,navigate:function(a){i.navigate.apply(i,arguments)},manage:function(a,c){var d=!0;1==arguments.length&&(c=a,a="res_"+b++,d=!1);if(!this.$resCache)this.$resCache={};this.$resCache[a]={hasKey:d,res:c};return c},getManaged:function(a){var b=this.$resCache;return b&&d(b,a)?b[a].res:null},removeManaged:function(a){var b=null,c=this.$resCache;if(c)if(d(c,a))b=c[a].res,delete c[a];else for(var f in c)if(c[f].res===a){b=c[f].res;delete c[f];
break}return b},destroyManaged:function(b){var e=this.$resCache;if(e){for(var d in e){var i=e[d],j=i.res;if(h.isNumber(j))a.clearTimeout(j),a.clearInterval(j);else if(j)if(j.nodeType&&j.parentNode)l.one(j).remove();else for(var k=0;k<c.length;k++)h.isFunction(j[c[k]])&&f(j[c[k]],[],j);b&&!i.hasKey&&delete e[d]}b||delete this.$resCache}},receiveMessage:h.noop,postMessageTo:function(a,b){var c=this.vom;j(c);h.isArray(a)||(a=[a]);b||(b={});for(var d=0,f;d<a.length;d++){f=a[d];var i=c.get(f);i?k(i,b):
(m[f]||(m[f]=[]),m[f].push(b))}},destroyMRequest:function(){var a=this.$resCache;if(a)for(var b in a){var c=a[b].res;c&&c.fetchOne&&c.fetchAll&&(c.destroy(),delete a[b])}}},function(){var a=this;a.on("interact",function(){a.on("rendercall",function(){a.destroyMRequest()});a.on("prerender",function(){a.destroyManaged(!0)});a.on("destroy",function(){a.destroyManaged()})});a.mxViewCtor()})},{requires:["magix/magix","magix/view","magix/router"]});