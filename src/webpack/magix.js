module.exports = (() => {
    if (typeof DEBUG == 'undefined') window.DEBUG = true;
    let $ = require('$');
    let G_IsObject = $.isPlainObject;
    let G_IsArray = $.isArray;
    Inc('../tmpl/variable');
    Inc('../tmpl/cache');
    let G_IsFunction = $.isFunction;
    /*#if(modules.defaultView){#*/
    let coreDefaultView;
    /*#}#*/
    let G_Require = (name, fn) => {
        let views = Magix_Cfg.views || G_NOOP;
        /*#if(modules.defaultView){#*/
        if (!views[MxGlobalView]) views[MxGlobalView] = coreDefaultView;
        /*#}#*/
        if (!name) {
            return fn();
        }
        if (!G_IsArray(name)) {
            name = [name];
        }
        let results = [],
            view;
        let promiseCount = 0;
        let checkCount = () => {
            if (!promiseCount) {
                fn.apply(Magix, results);
            }
        };
        let promise = (p, idx, fn) => {
            fn = v => {
                if (!results[idx]) {
                    promiseCount--;
                    results[idx] = v;
                    checkCount();
                }
            };
            p = p(fn);
            if (p.then) {
                p.then(fn);
            }
        };
        for (let i = 0; i < name.length; i++) {
            view = views[name[i]];
            if (G_IsFunction(view) && !view.extend) {
                promiseCount++;
                promise(view, i);
            } else {
                results[i] = views[name[i]];
            }
        }
        checkCount();
    };
    Inc('../tmpl/extend');
    let G_SelectorEngine = $.find || $.zepto;
    let G_TargetMatchSelector = G_SelectorEngine.matchesSelector || G_SelectorEngine.matches;
    let G_DOMGlobalProcessor = (e, d) => {
        d = e.data;
        e.eventTarget = d.e;
        G_ToTry(d.f, e, d.v);
    };
    /*#if(modules.eventEnterLeave){#*/
    let Specials = {
        mouseenter: 1,
        mouseleave: 1,
        pointerenter: 1,
        pointerleave: 1
    };
    let G_DOMEventLibBind = (node, type, cb, remove, scope, selector) => {
        if (scope) {
            type += `.${scope.i}`;
        }
        selector = Specials[type] === 1 ? `[mx-${type}]` : G_EMPTY;
        if (remove) {
            $(node).off(type, selector, cb);
        } else {
            $(node).on(type, selector, scope, cb);
        }
    };
    /*#}else{#*/
    let G_DOMEventLibBind = (node, type, cb, remove, scope) => {
        if (scope) {
            type += `.${scope.i}`;
        }
        if (remove) {
            $(node).off(type, cb);
        } else {
            $(node).on(type, scope, cb);
        }
    };
    /*#}#*/

    Inc('../tmpl/safeguard');
    Inc('../tmpl/magix');
    Inc('../tmpl/event');
    /*#if(modules.state){#*/
    Inc('../tmpl/state');
    /*#}#*/

    /*#if(modules.router){#*/
    Inc('../tmpl/router');
    /*#}#*/
    /*#if(modules.mxViewAttr){#*/
    let G_Trim = $.trim;
    /*#}#*/
    Inc('../tmpl/vframe');
    /*#if(modules.nodeAttachVframe){#*/
    $.fn.invokeView = function (name, args) {
        let l = this.length;
        if (l) {
            let e = this[0];
            let vf = e.vframe;
            if (args === undefined) {
                return vf && vf.invoke(name);
            } else {
                for (e of this) {
                    vf = e.vframe;
                    if (vf) {
                        vf.invoke(name, args);
                    }
                }
            }
        }
    };
    /*#}#*/

    Inc('../tmpl/body');
    /*#if(modules.updater){#*/
    Inc('../tmpl/tmpl');
    /*#if(modules.updaterIncrement){#*/
    Inc('../tmpl/increment');
    /*#}else{#*/
    Inc('../tmpl/partial');
    /*#}#*/
    Inc('../tmpl/updater');
    /*#}#*/
    Inc('../tmpl/view');
    /*#if(modules.service){#*/
    let G_Type = $.type;
    let G_Now = $.now || Date.now;
    Inc('../tmpl/service');
    /*#}#*/
    Inc('../tmpl/base');
    /*#if(modules.defaultView){#*/
    coreDefaultView = View.extend(
        /*#if(!modules.autoEndUpdate){#*/
        {
            render() {
                this.endUpdate();
            }
        }
        /*#}#*/
    );
    /*#}#*/
    return Magix;
})();