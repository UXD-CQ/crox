window.ISMOBILE = false;

window.__language = 'zh'

timeStamps[3] = new Date();

window.__CDN_DOMAIN = 'cloudcache.tencent-cloud.com'

window.__wxMfaQrcodeMode = 'weapp'

window.__QCPortalContext__ = {
            version: "0.4.0",

            resource: {},

            $getCurrServerTime: (function (s, c) { return function () { return +new Date() + s - c; } })(1706719240665, +new Date()),
        }

!function () { try { new Function("m", "return import(m)") } catch (o) { console.warn("vite: loading legacy build because dynamic import is unsupported, syntax error above should be ignored"); var e = document.getElementById("vite-legacy-polyfill"), n = document.createElement("script"); n.src = e.src, n.onload = function () { System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src')) }, document.body.appendChild(n) } }();

!function () { var e = document, t = e.createElement("script"); if (!("noModule" in t) && "onbeforeload" in t) { var n = !1; e.addEventListener("beforeload", (function (e) { if (e.target === t) n = !0; else if (!e.target.hasAttribute("nomodule") || !n) return; e.preventDefault() }), !0), t.type = "module", t.src = ".", e.head.appendChild(t), t.remove() } }();

System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))

timeStamps[4] = new Date();

$(document).ready(function () {
            timeStamps[5] = new Date();
        });
        $(window).load(function () {
            timeStamps[6] = new Date();
            window.timeStat && window.timeStat(7822, 13, 37, timeStamps, 0);
            window.TCISD && window.TCISD.performanceTimeStat([7822, 13, 2], 10);
        });

// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>