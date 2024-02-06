!function (t, e) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).assetsRetry = e()
        }(this, function () {
            "use strict";
            function a(t) {
                return t
            }
            function d() { }
            function r(t, e) {
                try {
                    return "function" == typeof t[e]
                } catch (t) {
                    return !1
                }
            }
            function y(t) {
                return Array.isArray(t) ? t.reduce(function (t, e, n, r) {
                    return t[e] = r[(n + 1) % r.length],
                        t
                }, {}) : t
            }
            function p(e, t) {
                return Object.keys(t).filter(function (t) {
                    return -1 < e.indexOf(t)
                }).sort(function (t, e) {
                    return e.length - t.length
                })[0]
            }
            var e, g = "retryTimes", m = "succeeded", b = "failed", E = "maxRetryCount", O = "onRetry", f = "onSuccess", s = "onFail", j = "domain", h = "_assetsRetryScript", v = "_assetsRetryOnerror", l = "script", w = "data-assets-retry-hooked", S = "data-retry-id", A = window, k = window.document, n = A.HTMLElement, R = A.HTMLScriptElement, c = A.HTMLStyleElement, x = A.HTMLLinkElement, L = A.HTMLImageElement, o = Object.prototype.hasOwnProperty, T = function (t, e, n) {
                var r = t.indexOf(e);
                return -1 === r ? t : t.substring(0, r) + n + t.substring(r + e.length)
            }, _ = function (t) {
                return [].slice.call(t)
            }, M = function (e, t, n, r) {
                void 0 === n && (n = d),
                    void 0 === r && (r = !1);
                var o, i, c, u, a, f = r || e.defer || e.async;
                "loading" !== k.readyState || /Edge|MSIE|rv:/i.test(navigator.userAgent) || f ? (o = k.createElement(l),
                    Object.keys(R.prototype).forEach(function (t) {
                        if ("src" !== t && e[t] && "object" != typeof e[t])
                            try {
                                o[t] = e[t]
                            } catch (t) { }
                    }),
                    o.src = t,
                    o.onload = e.onload,
                    o.onerror = e.onerror,
                    o.setAttribute(S, P()),
                    (i = e.getAttribute("nonce")) && o.setAttribute("nonce", i),
                    k.getElementsByTagName("head")[0].appendChild(o)) : (c = P(),
                        u = e.outerHTML.replace(/data-retry-id="[^"]+"/, "").replace(/src=(?:"[^"]+"|.+)([ >])/, S + "=" + c + ' src="' + t + '"$1'),
                        k.write(u),
                        (a = k.querySelector("script[" + S + '="' + c + '"]')) && (a.onload = n))
            }, N = function (e) {
                try {
                    return e.rules
                } catch (t) {
                    try {
                        return e.cssRules
                    } catch (t) {
                        return null
                    }
                }
            }, H = function (e, t, n) {
                var r = k.createElement("link");
                Object.keys(x.prototype).forEach(function (t) {
                    if ("href" !== t && e[t] && "object" != typeof e[t])
                        try {
                            r[t] = e[t]
                        } catch (t) { }
                }),
                    r.href = t,
                    r.onload = n,
                    r.setAttribute(S, P()),
                    k.getElementsByTagName("head")[0].insertBefore(r, e)
            }, I = function (t) {
                return t ? t instanceof n ? [t.nodeName, t.src, t.href, t.getAttribute(S)].join(";") : "not_supported" : "null"
            }, P = function () {
                return Math.random().toString(36).slice(2)
            }, C = function (t) {
                return t instanceof R || t instanceof L ? t.src : t instanceof x ? t.href : null
            }, B = {}, F = function (t, e) {
                var n, r = $(t, e), o = r[0], i = r[1];
                return o ? (B[o] = B[o] || ((n = {})[g] = 0,
                    n[b] = [],
                    n[m] = [],
                    n),
                    [i, B[o]]) : []
            }, $ = function (t, e) {
                var n, r, o = p(t, e);
                return o ? [(r = o,
                    (n = t).substr(n.indexOf(r) + r.length, n.length)), o] : ["", ""]
            };
            try {
                e = function (t) {
                    for (var e = Object.getPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__
                    }
                        , n = Object.keys(t); e(t);)
                        n = n.concat(Object.keys(e(t))),
                            t = e(t);
                    return n.filter(function (t) {
                        return "constructor" !== t
                    })
                }(R.prototype)
            } catch (t) { }
            function i(a, t) {
                var f = t[E]
                    , s = y(t[j])
                    , l = t[O];
                return e.reduce(function (t, e) {
                    var n = r(R.prototype, e);
                    return t[e] = n ? {
                        value: function () {
                            return a[h][e].apply(a[h], arguments)
                        }
                    } : {
                        set: function (o) {
                            return "onerror" === e ? (a[v] = o,
                                void (a[h].onerror = function (r) {
                                    r.stopPropagation && r.stopPropagation();
                                    function t() {
                                        return t = a[v],
                                            e = a[h],
                                            n = r,
                                            "function" != typeof t ? null : t.call(e, n);
                                        var t, e, n
                                    }
                                    var e = a[h].src
                                        , n = F(e, s)
                                        , o = n[0]
                                        , i = n[1];
                                    if (!o || !i)
                                        return t();
                                    var c = T(e, o, s[o])
                                        , u = l(c, e, i);
                                    if (null === u)
                                        return t();
                                    if ("string" != typeof u)
                                        throw new Error("a string should be returned in `onRetry` function");
                                    i[g] <= f ? M(a[h], u, d, !0) : t()
                                }
                                )) : "onload" === e ? (a._assetsRetryOnload = o,
                                    void (a[h].onload = function (t) {
                                        var e = a[h].src
                                            , n = F(e, s)
                                            , r = (n[0],
                                                n[1]);
                                        r && -1 === r[b].indexOf(e) && r[m].push(e),
                                            o && !o._called && (o._called = !0,
                                                o.call(a[h], t))
                                    }
                                    )) : void (a[h][e] = o)
                        },
                        get: function () {
                            return a[h][e]
                        }
                    },
                        t
                }, {})
            }
            var q = function (n) {
                var r = k.createElement;
                k.createElement = function (t, e) {
                    return t === l ? function (t, e) {
                        var n;
                        t.setAttribute(w, "true");
                        var r = ((n = {})[h] = t,
                            n[v] = d,
                            n)
                            , o = i(r, e);
                        return Object.defineProperties(r, o),
                            r
                    }(r.call(k, l), n) : r.call(k, t, e)
                }
                    ,
                    k.createElement.toString = function () {
                        return "function createElement() { [native code] }"
                    }
            }
                , z = function (n) {
                    Object.keys(n).filter(function (t) {
                        return r(n, t)
                    }).forEach(function (t) {
                        var e = n[t];
                        n[t] = function () {
                            var t = [].slice.call(arguments).map(function (t) {
                                return t && o.call(t, h) ? t[h] : t
                            });
                            return e.apply(this, t)
                        }
                            ,
                            /^\w+$/.test(t) && (n[t].toString = new Function("return 'function " + t + "() { [native code] }'"))
                    })
                };
            var Z = {};
            function D(y) {
                function c(t) {
                    if (t) {
                        var e = t.target || t.srcElement
                            , n = C(e);
                        if (n) {
                            var r = F(n, v)
                                , o = r[0]
                                , i = r[1];
                            if (i && o) {
                                i[g]++,
                                    i[b].push(n);
                                var c, u = i[g] > y[E];
                                if (u && (c = $(n, v)[0],
                                    h(c)),
                                    v[o] && !u) {
                                    var a = v[o]
                                        , f = T(n, o, a)
                                        , s = p(f, n, i);
                                    if (null !== s) {
                                        if ("string" != typeof s)
                                            throw new Error("a string should be returned in `onRetry` function");
                                        var l, d = I(e);
                                        Z[d] || (Z[d] = !0,
                                            l = function () {
                                                i[m].push(s)
                                            }
                                            ,
                                            e instanceof R && !e.getAttribute(w) && e.src ? M(e, s, l) : e instanceof x && e.href ? (e.getAttribute('crossorigin') && e.removeAttribute('crossorigin'),
                                                H(e, s, l)) : e instanceof L && e.src && (e.setAttribute(S, P()),
                                                    e.src = s,
                                                    e.onload = l))
                                    }
                                }
                            }
                        }
                    }
                }
                var p = y[O]
                    , u = y[f]
                    , h = y[s]
                    , v = y[j];
                k.addEventListener("error", c, !0),
                    k.addEventListener("load", function (t) {
                        var e, n, r, o, i;
                        t && (e = t.target || t.srcElement,
                            (n = C(e)) && (e.getAttribute(S) && (r = $(n, v)[0],
                                u(r)),
                                e instanceof x && k.styleSheets && (o = _(k.styleSheets).filter(function (t) {
                                    return t.href === e.href
                                })[0],
                                    null !== (i = N(o)) && 0 === i.length && c(t))))
                    }, !0)
            }
            function u(t, e, n, r, o) {
                var i = o[j]
                    , c = o[O]
                    , u = e.style && e.style[t];
                if (u && !/^url\(["']?data:/.test(u)) {
                    var a = u.match(/^url\(["']?(.+?)["']?\)/) || []
                        , f = a[1];
                    if (f) {
                        var s = p(f, i);
                        if (s && i[s]) {
                            var l = Object.keys(i).map(function (t) {
                                var e = T(f, s, t);
                                return 'url("' + c(e, f, null) + '")'
                            }).join(",")
                                , d = e.selectorText + ("{ " + t.replace(/([a-z])([A-Z])/g, function (t, e, n) {
                                    return e + "-" + n.toLowerCase()
                                })) + ": " + l + " !important; }";
                            try {
                                n.insertRule(d, r.length)
                            } catch (t) {
                                n.insertRule(d, 0)
                            }
                        }
                    }
                }
            }
            var G = {}
                , J = []
                , K = function (t, o) {
                    var i = ["backgroundImage", "borderImage", "listStyleImage"];
                    t.forEach(function (n) {
                        var r, t = N(n);
                        null !== t && ((r = _(t)).forEach(function (e) {
                            i.forEach(function (t) {
                                u(t, e, n, r, o)
                            })
                        }),
                            n.href && (G[n.href] = !0),
                            n.ownerNode instanceof c && J.push(n.ownerNode))
                    })
                }
                , Q = function (t, n) {
                    return _(t).filter(function (t) {
                        if (!N(t))
                            return !1;
                        if (t.href)
                            return !G[t.href] && !!p(t.href, n);
                        var e = t.ownerNode;
                        return !(e instanceof c && -1 < J.indexOf(e))
                    })
                };
            return function (t) {
                var e, n, r, o;
                void 0 === t && (t = {});
                try {
                    if ("object" != typeof t[j])
                        throw new Error("opts.domain cannot be non-object.");
                    var i = [E, O, f, s, j]
                        , c = Object.keys(t).filter(function (t) {
                            return -1 === i.indexOf(t)
                        });
                    if (0 < c.length)
                        throw new Error("option name: " + c.join(", ") + " is not valid.");
                    var u = ((e = {})[E] = t[E] || 3,
                        e[O] = t[O] || a,
                        e[f] = t[f] || d,
                        e[s] = t[s] || d,
                        e[j] = y(t[j]),
                        e);
                    return q(u),
                        "undefined" != typeof Node && z(Node.prototype),
                        "undefined" != typeof Element && z(Element.prototype),
                        D(u),
                        n = u,
                        r = k.styleSheets,
                        o = n[j],
                        false && setInterval(function () {
                            var t = Q(k.styleSheets, o);
                            0 < t.length && K(t, n)
                        }, 250),
                        B
                } catch (t) {
                    A.console && console.error("[assetsRetry] error captured", t)
                }
            }
        });
        try {
            function __parseReportUrl(url) {
                var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
                return match && {
                    href: url,
                    protocol: match[1],
                    host: match[2],
                    hostname: match[3],
                    port: match[4],
                    pathname: match[5],
                    search: match[6],
                    hash: match[7]
                }
            }

            var domainReportTag = {
                'assets-retry-success': 0,
                'assets-retry-fail': 0
            };
            var eventMaxReportTimes = 5;
            var assetsRetryReport = function (event, originalUrl) {
                var originalUrlObj = __parseReportUrl(originalUrl);

                // 上报限制次数
                if (domainReportTag[event] && domainReportTag[event] >= eventMaxReportTimes) {
                    return;
                }
                domainReportTag[event]++;

                var reportData = {
                    url: location.href,
                    referrer: document.referrer || '',
                    event: event,
                    app: 'qcmain',
                    level: 0,
                    at: new Date().getTime(),
                    uin: '',
                    originalUrl: originalUrl,
                    originalCdnDomain: originalUrlObj.hostname
                }

                var reportUrl = 'https://insight.cloud.tencent.com/event';
                var isSupportSendBeacon = typeof navigator.sendBeacon === 'function';

                if (JSON && JSON.stringify) {
                    var reportStr = JSON.stringify(reportData);
                    if (isSupportSendBeacon) {
                        navigator.sendBeacon(reportUrl, reportStr);
                    } else {
                        reportStr = encodeURIComponent(reportStr);
                        reportStr = btoa(reportStr);
                        new Image().src = reportUrl + '?d=' + reportStr;
                    }
                }
            };

            // information of assets
            var assetsRetryStatistics = window.assetsRetry({
                // domain list, only resources in the domain list will be retried.
                domain: {
                    'cloudcache.tencentcs.com': 'cloudcache.tencent-cloud.com',
                    'cloudcache.tencent-cloud.com': 'cloudcache.tencentcs.com',
                    'main.qcloudimg.com': 'qcloudimg.tencentcs.com',
                    'qcloudimg.tencentcs.com': 'main.qcloudimg.com',
                    'cloudcache.tencent-cloud.cn': 'cloudcache.tencentcs.cn',
                    'cloudcache.tencentcs.cn': 'cloudcache.tencent-cloud.cn',
                    'qcloudimg.tencent-cloud.cn': 'qcloudimg.tencentcs.cn',
                    'qcloudimg.tencentcs.cn': 'qcloudimg.tencent-cloud.cn'
                },
                // maximum retry count for each asset, default is 3
                maxRetryCount: 2,
                // onRetry hook is how you can customize retry logic with, default is x => x
                onRetry: function (currentUrl, originalUrl, statistics) {
                    return currentUrl;
                },
                onSuccess: function (currentUrl) {
                    var curStatic = assetsRetryStatistics[currentUrl];
                    if (curStatic && curStatic.failed && curStatic.failed.length) {
                        assetsRetryReport('assets-retry-success', curStatic.failed[0])
                    }
                },
                onFail: function (currentUrl) {
                    var curStatic = assetsRetryStatistics[currentUrl];
                    if (curStatic && curStatic.failed && curStatic.failed.length) {
                        assetsRetryReport('assets-retry-fail', curStatic.failed[0])
                    }
                }
            })
        } catch (err) { }