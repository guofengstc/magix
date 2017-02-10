/*3.1.10 Licensed MIT*/KISSY.add("magix",function(n,t){var e,r=n.noop,i=function(t,e){n.use(t&&t+h,function(n){e&&e.apply(n,l.call(arguments,1))})},o=n.extend,a=n.isObject,f=n.isArray,u=n.DOM,c=u.html,s=function(t,e,r,i){e&&!s[t]&&(s[t]=1,r=n.one(w+A),r?(i=r.prop("styleSheet"),i?i.cssText+=e:r.append(e)):n.one("head").append('<style id="'+A+'">'+e+"</style>"))},$=0,h="",d=[],l=d.slice,p=",",v=null,m=window,g=document,w="#",y=JSON.stringify,b="\x1e",x="object",k="prototype",V="/",q=/[#?].*$/,I=/([^=&?\/#]+)=?([^&#?]*)/g,S=/(?!^)=|&/,T=function(n){return(n||"mx_")+$++},A=T(),U=T(),H={rootId:T(),defaultView:U,error:function(n){throw n}},O=H.hasOwnProperty,E=function(n){return typeof n==x?n:g.getElementById(n)},M=function(n,t,e){if(n=E(n),t=E(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},j=function(n,t,e){for(e in t)n[e]=t[e];return n},Z=function(n,t,e,r,i,o){for(t=t||d,f(n)||(n=[n]),f(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){H.error(a)}return i},C=function(n,t){return n&&O.call(n,t)},L=function(n,t){return t.f-n.f||t.t-n.t},P=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};j(P[k],{get:function(n){var t=this,e=t.c,r=e[b+n];return r&&(r.f++,r.t=$++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=b+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(L);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=$++},del:function(n){n=b+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=h,delete t[n],r&&Z(r,e.o,e))},has:function(n){return C(this.c,b+n)}});var F,R=new P,B=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}F[t]=e},D=function(n){var t,e=R.get(n);return e||(F={},t=n.replace(q,h),n==t&&S.test(t)&&(t=h),n.replace(t,h).replace(I,B),R.set(n,e={a:t,b:F})),{path:e.a,params:j({},e.b)}},K=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+h,(!e||r||C(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},N=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},J=Object.keys||function(n,t,e){t=[];for(e in n)C(n,e)&&t.push(e);return t},Q={config:function(n,t){return t=H,n&&(t=a(n)?j(t,n):t[n]),t},boot:function(n){j(H,n),i(H.ini,function(t){j(H,t),j(H,n),i(H.exts,function(){xn.on("changed",Mn),cn()})})},toMap:N,toTry:Z,toUrl:K,parseUrl:D,mix:j,has:C,keys:J,inside:M,node:E,applyStyle:s,guid:T,Cache:P},Y="on",_={fire:function(n,t,e,r){var i,o,a,f,u=b+n,c=this,s=c[u];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,f=s[a],f.f?(f.x=1,Z(f.f,t,c),f.x=h):f.x||(s.splice(a,1),o--);s=c[Y+n],s&&Z(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=b+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=b+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f=h;break}}else delete o[i],delete o[Y+n]}};Q.Event=_;var z,G,W,X,nn,tn,en,rn,on=n.isFunction,an=n.one(m),fn=w+"!",un=function(n,t,e,r,i){n=K(n,t,i),n!=e.srcHash&&(n=fn+n,r?pn.replace(n):pn.hash=n)},cn=function(){var n,t,e=xn.parse().srcHash;an.on("hashchange",function(r){t||(n=xn.parse().srcHash,n!=e&&(r={backward:function(){t=h,location.hash=fn+e},forward:function(){e=n,t=h,xn.diff()},prevent:function(){t=1}},xn.fire("change",r),t||r.forward()))}),window.onbeforeunload=function(n){n=n||window.event;var t={};if(xn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},xn.diff()},sn="path",$n="view",hn="params",dn=new P,ln=new P,pn=m.location,vn={params:{},href:h},mn=/(?:^.*\/\/[^\/]+|#.*$)/gi,gn=/^[^#]*#?!?/,wn=function(n,t){return t=this[hn],t[n]||h},yn=function(n,t){if(X||(X=H.routes||{},nn=H.unmatchView,en=H.defaultView,rn=H.defaultPath||V,tn=on(X),tn||X[rn]||(X[rn]=en)),!n[$n]){var e=n.hash[sn]||z&&n.query[sn]||rn;t=tn?X.call(H,e,n):X[e]||nn||en,n[sn]=e,n[$n]=t}},bn=function(n,t){var e=n.href,r=t.href,i=e+b+r,o=ln.get(i);if(!o){var a,f,u,c;o={force:!e},o[hn]=c={};var s,$,h=n[hn],d=t[hn],l=[sn,$n].concat(J(h),J(d));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,d=t,c=o),f=h[$],u=d[$],f!=u&&(c[$]={from:f,to:u},a=1);ln.set(i,o={a:a,b:o})}return o},xn=j({parse:function(n){n=n||pn.href;var t,e,r,i,o,a=dn.get(n);return a||(t=n.replace(mn,h),e=n.replace(gn,h),r=D(t),i=D(e),o=j({},r[hn]),j(o,i[hn]),a={get:wn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},yn(a),dn.set(n,a)),a},diff:function(){var n=xn.parse(),t=bn(vn,vn=n);return t.a&&(W=vn[hn],xn.fire("changed",G=t.b)),G},to:function(n,t,e){!t&&a(n)&&(t=n,n=h);var r=D(n),i=r[hn],o=r[sn],f=vn[sn],u=vn.query[hn];if(j(i,t),o){if(!z)for(f in u)C(i,f)||(i[f]=h)}else W&&(o=f,i=j(j({},W),i));un(o,W=i,vn,e,u)}},_);Q.Router=xn;var kn,Vn,qn=n.all,In=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=An[n.pId],e&&!C(e.$r,t)&&(e.$r[t]=1,e.$rc++,In(e)))},Sn=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=An[n.pId],r&&C(r.$r,e)&&(r.$rc--,delete r.$r[e],Sn(r,t)))},Tn=function(n,t){return kn||(e=g.body,n=H.rootId,t=E(n),t||(e.id=n),kn=new jn(n)),kn},An={},Un=function(n,t){C(An,n)||(An[n]=t,jn.fire("add",{vframe:t}),n=E(n),n&&(n.vframe=t))},Hn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},On=function(n,t,e){e=An[n],e&&(delete An[n],jn.fire("remove",{vframe:e,fcc:t}),n=E(n),n&&(n.vframe=v))},En=function(n,t){if(n&&(t=n.$v)&&t.$s>0){var e=mt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;o<i;)En(An[r[o++]])}},Mn=function(n){var t,e=Tn();(t=n.view)?e.mountView(t.to):En(e)},jn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Un(n,e)};j(jn,j({all:function(){return An},get:function(n){return An[n]}},_)),j(j(jn[k],_),{mountView:function(n,t){var e,r,o,a=this,f=E(a.id);if(!a.$a&&f&&(a.$a=1,a.$t=f.innerHTML),a.unmountView(),a.$d=0,f&&n){a.path=n,e=D(n),o=e.path,r=++a.$s;var u,c,s=e.params,$=An[a.pId];if($=$&&$.$v,$=$&&$.$updater,$&&n.indexOf(b)>0)for(u in s)c=s[u],c.charAt(0)==b&&(s[u]=$.get(c));j(s,t),i(o,function(n){r==a.$s&&(n||H.error(Error("cannot load:"+o)),pt(n),o=new n({owner:a,id:a.id},s),a.$v=o,ht(o),o.init(s),o.render(),o.tmpl||o.$p||o.endUpdate())})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(Vn||(t=1,Vn={id:e.id}),e.$d=1,e.unmountZone(),Sn(e,Vn),e.$v=0,gt(r),n=E(e.id),n&&e.$a&&c(n,e.$t),t&&(Vn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return Sn(i),r=An[n],r||(C(i.$c,n)||(i.$cl=h,i.$cc++),i.$c[n]=n,r=new jn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,i,o=this,a=[];n=n||o.id;var f=qn(w+n+" [mx-view]");for(o.$h=1,e=0;e<f.length;e++)r=f[e],i=r.id||(r.id=T()),r.$m||(r.$m=1,a.push([i,r.getAttribute("mx-view")]));for(;a.length;)r=a.shift(),o.mountVframe(r[0],r[1],t);o.$h=0,In(o)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=An[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),On(n,r),e.id=e.pId=h,e=An[i],e&&C(e.$c,n)&&(delete e.$c[n],e.$cl=h,e.$cc--,t||In(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&M(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=An[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=J(n.$c))},invoke:function(n,t){var e,r,i,o,a,f=this,u=f.$il;return(r=f.$v)&&r.$p?e=(i=r[n])&&Z(i,t,r):(o=u[a=b+n],o&&(o.r=bt(t)==bt(o.a)),o={n:n,a:t,k:a},u.push(o),u[a]=o),e}}),Q.Vframe=jn;var Zn=function(n,t){t=this,n.eventTarget=n.currentTarget,Z(t.f,n,t.v)},Cn=function(n,e,r,i,o,a){a?t[(i?"un":h)+"delegate"](n,e,o,r,a):t[i?"detach":Y](n,e,r,a)},Ln="parentNode",Pn=new P(30,10),Fn=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,Rn={},Bn=function(n){for(var t,r,i,o,a,f,u,c,s=n.target,$=n.type,h="mx-"+$,l=[];s!=e&&1==s.nodeType&&((t=s.getAttribute(h))&&(l=[],f=Pn.get(t),f||(f=t.match(Fn)||d,f={v:f[1],n:f[2],i:f[3]},f.p=f.i&&Z(Function("return "+f.i))||{},Pn.set(t,f)),a=f.v,a?(i=An[a],o=i&&i.$v,o&&o.$s>0&&(u=f.n+b+$,c=o[u],c&&(n.eventTarget=s,n.params=f.p,Z(c,n,o)))):H.error(Error("bad:"+t))),!((r=s.$)&&r[$]||n.mxStop||n.isPropagationStopped()));)l.push(s),s=s[Ln]||e;for(;s=l.pop();)r=s.$||(s.$={}),r[$]=1},Dn=function(n,t){var r=0|Rn[n];(!r||t&&1==r)&&Cn(e,n,Bn,t),Rn[n]=r+(t?-1:1)},Kn=/\\|'/g,Nn=/\r|\n/g,Jn=/<%([@=!])?([\s\S]+?)%>|$/g,Qn=function(n){var t=0,e="$p+='";return n.replace(Jn,function(r,i,o,a){return e+=n.slice(t,a).replace(Kn,"\\$&").replace(Nn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+b+"'+$g++},$s;\n"+e+"return $p;\n",Function("$g","$$",e)},Yn=new P,_n=function(n,t){var e=Yn.get(n);return e||(e=Qn(n),Yn.set(n,e)),e(1,t)},zn=/\u001f(\d+)\u001f/g,Gn=/([\w\-]+)(?:=(["'])([\s\S]*?)\2)?/g,Wn={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},Xn=/&([^;]+?);/g,nt=function(n,t){return Wn[t]||n},tt=function(n){return!n||typeof n!=x},et=function(n,t,e,r,i,o,a,f){var u,c,s,$=n.id||(n.id=T());if(i){var h=ut(_n(e.attr,r),a),d={};h.replace(Gn,function(n,t,e,r){d[t]=r});for(var l,p,v,m,g,w=e.attrs.length-1;w>=0;w--)l=e.attrs[w],p=l.n,g=l.f,l.v?(u=1,c=d[p]):(v=l.p?n[g||p]:n.getAttribute(p),m=l.b?C(d,p):d[p]||"",v!=m&&(l.p?(l.q&&(m=m.replace(Xn,nt)),n[g||p]=m):m?n.setAttribute(p,m):n.removeAttribute(p)))}u&&(s=An[$],s&&s[c?"unmountView":"unmountVframe"]()),o&&(t.setHTML($,_n(e.tmpl,r)),f.fire("update",{node:n})),u&&c&&t.owner.mountVframe($,c)},rt=function(n,t,e){var r=An[n.$i],i=r&&r.$v;if(i){var o=i.tmpl,a=o.html,f=o.subs,u=i.id;if(n.$rd&&t)for(var c,s,$,h,d,l,p,v,m=f.length-1;m>=0;m--){if($=0,h=0,s=f[m],d=1,p=s.mask,c=s.pKeys)for(l=c.length;--l>=0;)if(C(t,c[l])){d=0;break}if(d){for(c=s.keys,l=c.length,d=0;--l>=0;)if(C(t,c[l])){if(d=1,!p||$&&h){$=s.tmpl,h=s.attr;break}v=p.charAt(l),$=$||1&v,h=h||2&v}if(d){var g=qn(ut(s.path,u));for(l=0;l<g.length;)et(g[l++],i,s,e,h,$,u,n)}}}else{var w,y,b=function(n,t){return w[t].tmpl};if(f){if(!f.$)for(f.$=w={},y=f.length;y>0;){var x=f[--y];x.s&&(w[x.s]=x,x.tmpl=x.tmpl.replace(zn,b),delete x.s)}w=f.$}n.$rd=1;var k=a.replace(zn,b);i.setHTML(n.$t,_n(k,e))}}},it=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={},t.$fk={}},ot=it.prototype;j(ot,_),j(ot,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],on(e)?(r.$fkf=1,r.$fk[a]=1,o[a]=1):tt(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(){var n=this,t=n.$data,e=n.$keys;return rt(n,e,t),n.$fkf?n.$keys=j({},n.$fk):n.$keys={},n},snapshot:function(){var n=this;return n.$ss=y(n.$data),n},altered:function(){var n=this;return n.$ss!=y(n.$data)}});var at=/^(\$?)([^<]+)<([^>]+)>$/,ft=/\u001f/g,ut=function(n,t){return(n+h).replace(ft,t||this.id)},ct=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&st(i,e,1)},st=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&Z(r,d,i),delete n[t]),i},$t=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),ct(e),Z(t,l.call(arguments),e))}},ht=function(n,t){var e,r,i=n.$eo,o=n.id;for(e in i)Dn(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],Cn(r.e||w+o,r.n,Zn,t,r.s,{i:o,v:n,f:r.f})},dt=[],lt={win:m,doc:g},pt=function(n){if(!n[b]){n[b]=1;var t,e,r,i,o,a,f,u,c=n[k],s={},$=[];for(f in c)if(t=c[f],e=f.match(at))for(a=e[1],r=e[2],i=e[3].split(p);u=i.pop();)a?(o=lt[r],$.push({f:t,s:o?v:r,n:u,e:o})):(s[u]=1,u=r+b+u,c[u]||(c[u]=t));$t(c),c.$eo=s,c.$el=$}},vt=function(n,t,e){for(var r=0;r<n.length&&!(e=C(t,n[r]));r++);return e},mt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=G[sn]),t||(t=vt(e.k,G[hn]))),t},gt=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),ct(n,1),ht(n,1)),n.$s--},wt=function(n,t){t=this,j(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.$updater=new it(t.id),Z(dt,n,t)},yt=wt[k];j(wt,{merge:function(n,t){t=n&&n.ctor,t&&dt.push(t),j(yt,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=function(n,t){e.call(this,n,t),r&&r.call(this,t)};return i.extend=e.extend,o(i,e,n,t)}}),j(j(yt,_),{render:r,init:r,wrapEvent:ut,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n)},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(function(){Hn(e)},0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,a(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+h).split(p)))},capture:function(n,t,e,r,i){return r=this.$r,t?(st(r,n,1),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return st(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(r){r.prevent(),t()?e.leaveConfirm(n,r):r.forward()},i=function(e){t()&&(e.msg=n)};xn.on("change",r),xn.on("pageunload",i),e.on("destroy",function(){xn.off("change",r),xn.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=C(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=E(n),e&&c(e,ut(t,r.id))),r.endUpdate(n)}}),Q.View=wt;var bt=n.type,xt=n.bind,kt=n.now,Vt=function(){this.id=T("b"),this.$={}};j(Vt[k],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,u=a;if(i){for(var c,s=f(n)?l.call(n):(n+h).split(".");(c=s.shift())&&u;)u=u[c];c&&(u=e)}return o&&bt(t)!=bt(u)&&(H.error(Error("type neq:"+n)),u=t),u},set:function(n,t){var e,r=this;a(n)||(e={},e[n]=t,n=e),j(r.$,n)}});var qt=1,It=2,St=function(n,t,e){e=this[n],e&&(delete this[n],Z(e,t,e.e))},Tt=function(n,t,e,r,i,o){var a=[],f=v,u=0;return function(c,s){var $,h=this;u++;var d=h.$m,l=d.k;a[c+1]=h;var p={bag:h,error:s};if(s)f=s,t.fire("fail",p),$=1;else if(!o.has(l)){l&&o.set(l,h),d.t=kt();var m=d.a;m&&Z(m,h,h),d.x&&t.clear(d.x),t.fire("done",p),$=1}if(!e.$o){var g=u==r;g&&(e.$b=0,i==It&&(a[0]=f,Z(n,a,e))),i==qt&&Z(n,[s?s:v,h,g,c],e)}$&&t.fire("end",p)}},At=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){At(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;f(t)||(t=[t]);for(var u,c=t.length,s=Tt(e,o,n,c,r,o.$c),$=0;$<c;$++)if(u=t[$]){var h,d=o.get(u,i),l=d.e,p=l.$m.k,v=xt(s,l,$);p&&a[p]?a[p].push(v):d.u?(p&&(h=[v],h.e=l,a[p]=h,v=xt(St,a,p)),o.$s(l,v)):v()}return n},Ut=function(){var n=this;n.id=T("s"),n.$q=[]};j(Ut[k],{all:function(n,t){return At(this,n,t,It)},save:function(n,t){return At(this,n,t,It,1)},one:function(n,t){return At(this,n,t,qt)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=l.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&Z(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Ht=function(n,t,e){return e=[y(t),y(n)],e.join(b)},Ot=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Et=j({add:function(n){var t=this,e=t.$m;f(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=e.cache,i=new Vt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Ht(e,n)},a(n)&&i.set(n);var o=e.before;return o&&Z(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Ot,N((n+h).split(p)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=o.cache;if(a&&(e=Ht(o,n)),e){var f=r.$r,u=f[e];u?t=u.e:(t=i.get(e),t&&a>0&&kt()-t.$m.t>a&&(i.del(e),t=0))}return t}},_);Ut.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new P(t,e),i.$r={},i.$m={},o(i,r,v,Et)},Q.Service=Ut;var Mt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Mt,o(i,e,n,t)};return j(r[k],_),r.extend=Mt,Q.Base=r,n.add(U,function(){return wt.extend()}),Q},{requires:["event","node"]});