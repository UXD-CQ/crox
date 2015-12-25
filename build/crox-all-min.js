/*
 Crox v1.4.2
 https://github.com/thx/crox

 Released under the MIT license
 md5: c0a35c45ffc34ea6d9fdf3fc12c35acd
*/
(function(G){var x=function(){function x(a,c){this.row=a;this.col=c}function G(a,c){var e=a.substring(0,c),b=e.match(/\r\n?|\n/g),h=1;b&&(h+=b.length);e=1+/[^\r\n]*$/.exec(e)[0].length;return new x(h,e)}function J(a){return'"'+a.replace(/[\x00-\x1f"\\\u2028\u2029]/g,function(c){switch(c){case '"':return'\\"';case "\\":return"\\\\";case "\b":return"\\b";case "\f":return"\\f";case "\n":return"\\n";case "\r":return"\\r";case "\t":return"\\t"}return"\\u"+("000"+c.charCodeAt(0).toString(16)).slice(-4)})+
'"'}function K(a){return eval(a)}function C(a){return a.replace(/^_+/,"$&$&")}function O(a){function c(c,d,a,b,p,f){this.tag=c;this.text=d;this.index=a;this.subMatches=b;this.end=p;this.pos=f}function e(){}function b(c){for(var d=1,a=[],b=[1],p=[],f=0;f<c.length;++f)b.push(d+=RegExp("|"+c[f][0].source).exec("").length),p.push(c[f][1]||e),a.push("("+c[f][0].source+")");return[RegExp(a.join("|")+"|","g"),b,p]}c.prototype.toString=function(){return this.text};var h=a.$||"$",f={},p;for(p in a)"$"!=p.charAt(0)&&
(f[p]=b(a[p]));return function(a){var d=a.length,b=0,p=[""],e={text:"",index:0,source:a,pushState:function(d){p.push(d)},popState:function(){p.pop()},retract:function(d){b-=d}},q=new x(1,1),t=/\r\n?|\n/g,y=/[^\r\n\u2028\u2029]*$/;return{scan:function(){do{var r;a:{var l=f[p[p.length-1]],k=l[0];k.lastIndex=b;r=k.exec(a);if(""==r[0]){if(b<d)throw Error("lexer error: "+q+"\n"+a.slice(b,b+50));r=new c(h,"",b,null,b,q)}else{e.index=b;b=k.lastIndex;for(var k=l[1],u=0;u<k.length;++u)if(r[k[u]]){l=l[2][u].apply(e,
r.slice(k[u],k[u+1]));r=null==l?null:new c(l,r[0],e.index,r.slice(k[u]+1,k[u+1]),b,q);break a}r=void 0}}if(null!=r)return l=q.row,k=q.col,u=(u=r.text.match(t))?u.length:0,l+=u,k=0==u?k+r.text.length:y.exec(r.text)[0].length+1,q=new x(l,k),r}while(1)},GetCurrentPosition:function(){return q},getPos:function(d){return G(a,d)}}}}function z(a){var c;a:{switch(a){case "id":case "lit":c=!0;break a}c=!1}return c||"."==a||"[]"==a}function t(a){return z(a)||"!"==a||"u-"==a}function D(a){if(t(a))return!0;switch(a){case "*":case "/":case "%":return!0}return!1}
function v(a){if(D(a))return!0;switch(a){case "+":case "-":return!0}return!1}function w(a){if(v(a))return!0;switch(a){case "<":case ">":case "<=":case ">=":return!0}return!1}function E(a){if(w(a))return!0;switch(a){case "eq":case "ne":return!0}return!1}function H(a){return E(a)||"&&"==a}function M(a){return H(a)||"||"==a}function P(a,c,e){function b(d){q.push(d)}function h(d,a){d.pos=a;return d}function f(a){for(var l=0;l<a.length;++l){var k=a[l];switch(k[0]){case "if":b("if(");b(d(k[1]));b("){");
f(k[2]);b("}");k[3]&&(b("else{"),f(k[3]),b("}"));break;case "each":var g=k[3]?C(k[3]):"_"+L++,m=d(k[1]),n=p(m);/^\w+$/.test(n)||(n="_"+L++,b("var "+n+" = "),b(m),b(";"));k[5]?(b("for(var "+g+"=0;"+g+"<"),b(d([".",h(["t",n],k[1].pos),"length"])),b(";"+g+"++){")):b("for(var "+g+" in "+n+") {");b("var "+k[4]+" = ");b(d(["[]",h(["t",n],k[1].pos),["t",g]]));b(";");f(k[2]);b("}");break;case "set":"string"==typeof k[1]?b("var "+C(k[1])+"="):(b(d(k[1])),b("="));b(d(k[2]));b(";");break;case "eval":m=d(k[1]);
n=p(m);/^\w+$/.test(n)?g=n:(g="_t",b("_t = "),b(m),b(";"));b("if("+g+" !=null)_s += "+((e?!k[2]:k[2])?c+"("+g+")":g)+";");break;case "text":b("_s += "+J(k[1])+";");break;case "inc":break;default:throw Error("unknown stmt: "+k[0]);}}}function p(d){if("string"==typeof d)return d;if(d instanceof Array){for(var a=[],c=0;c<d.length;++c)a.push(p(d[c]));return a.join("")}throw Error("unknown type");}function m(a,c){var b=d(a);c&&!c(a[0])&&(b=["(",b,")"]);return b}function d(d){return h(n(d),d.pos)}function n(a){switch(a[0]){case "t":return a[1];
case "id":return C(a[1]);case "lit":return"string"==typeof a[1]?J(a[1]):String(a[1]);case "array":for(var c=["["],b=0;b<a[1].length;++b)0<b&&c.push(","),c.push(d(a[1][b]));c.push("]");return c;case "object":c=["{"];for(b=0;b<a[1].length;++b)0<b&&c.push(","),c.push(J(a[1][b][1])),c.push(":"),c.push(d(a[1][b][2]));c.push("}");return c;case "null":return["null"];case ".":return[m(a[1],z),".",a[2]];case "[]":return[m(a[1],z),"[",d(a[2]),"]"];case "()":c=[m(a[1],z),"("];if(a[2])for(b=0;b<a[2].length;++b)0<
b&&c.push(","),c.push(d(a[2][b]));c.push(")");return c;case "!":return["!",m(a[1],t)];case "u-":return["- ",m(a[1],t)];case "*":case "/":case "%":return[m(a[1],D),a[0],m(a[2],t)];case "+":case "-":return[m(a[1],v),a[0]," ",m(a[2],D)];case "<":case ">":case "<=":case ">=":return[m(a[1],w),a[0],m(a[2],v)];case "==":case "!=":case "===":case "!==":return[m(a[1],E),a[0],m(a[2],w)];case "&&":return[m(a[1],H),"&&",m(a[2],E)];case "||":return[m(a[1],M),"||",m(a[2],H)];default:throw Error("unknown expr: "+
a[0]);}}function g(a){"string"==typeof a&&(y+=a);if(a instanceof Array){a.pos&&x.push([y.length,a.pos]);for(var d=0;d<a.length;++d)g(a[d])}}var L=0,q=[];f(a[1]);var x=[],y="";g(q);a=new String(y);a.posLog=x;return a}function I(a){return Q(R(a))}function N(a,c){var e=I(a),b;c&&(b=c.htmlEncode);a=P(e,b||"_htmlEncode",!0);e="";b||(e="var _obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '\"': '&quot;' };\r\n\tfunction _htmlEncode(s) {\r\n\t\treturn String(s).replace(/[<>&\"]/g, function(c) {\r\n\t\t\treturn _obj[c];\r\n\t\t});\r\n\t}");
e+="var _t,_s = '';";c&&c.debug?(b=a.posLog,e=e+"try{\n"+("eval("+JSON.stringify(a)+");"),e+="}catch(_e){throw "+function(a,c){for(var b=a.stack,e=b.split(/\r\n?|\n/),e=+/:(\d+):(\d+)\)$/m.exec(e[1])[2],d=null,n=0;n<c.length;++n)if(c[n][0]+1>=e){d=c[n][1];break}e=d.pos;return Error("CroxError: "+("("+e.row+","+e.col+")")+"\n"+b)}+"(_e,"+JSON.stringify(b)+");}"):e+=a;e+="return _s;";return Function("root",e)}function S(a,c){function e(a){for(var b=0;b<a.length;++b){var d=a[b];switch(d[0]){case "if":var n=
"if("+h(d[1])+"){";f+=n;e(d[2]);f+="}";d[3]&&(f+="else{",e(d[3]),f+="}");break;case "each":n="foreach("+h(d[1])+" as "+(d[3]?"$crox_"+C(d[3])+"=>":"")+("$crox_"+C(d[4]))+")";f+=n;f+="{";e(d[2]);f+="}";break;case "set":d="$crox_"+C(d[1])+" = "+h(d[2])+";";f+=d;break;case "eval":n=h(d[1]);f+="crox_echo("+n+", "+(c?!d[2]:d[2])+");";break;case "text":n=d[1];/<\?(?:php)?|\?>/.test(n)?(d="echo "+("'"+String(d[1]).replace(/['\\]/g,"\\$&")+"'")+";",f+=d):f+="?>"+n+"<?php ";break;case "inc":d="include '"+
d[1].replace(/\.\w+$/,".php")+"';";f+=d;break;default:throw Error("unknown stmt: "+d[0]);}}}function b(a,c){var d=h(a);c&&!c(a[0])&&(d="("+d+")");return d}function h(a){switch(a[0]){case "id":return"$crox_"+C(a[1]);case "lit":return"string"==typeof a[1]?"'"+String(a[1]).replace(/['\\]/g,"\\$&")+"'":String(a[1]);case ".":return b(a[1],z)+"->"+a[2];case "[]":return b(a[1],z)+"["+h(a[2])+"]";case "!":return"!crox_ToBoolean("+b(a[1],t)+")";case "u-":return"- "+b(a[1],t);case "*":case "/":case "%":return b(a[1],
D)+a[0]+b(a[2],t);case "+":return"crox_plus("+b(a[1],null)+", "+b(a[2],null)+")";case "-":return b(a[1],v)+"- "+b(a[2],D);case "<":case ">":case "<=":case ">=":return b(a[1],w)+a[0]+b(a[2],v);case "==":case "!=":case "===":case "!==":return b(a[1],E)+a[0]+b(a[2],w);case "&&":return"crox_logical_and("+b(a[1],null)+", "+b(a[2],null)+")";case "||":return"crox_logical_or("+b(a[1],null)+", "+b(a[2],null)+")";default:throw Error("unknown expr: "+a[0]);}}var f="";e(a[1]);f="?>"==f.slice(0,2)?f.slice(2):
"<?php "+f;return f="<?php "==f.slice(-6)?f.slice(0,-6):f+"?>"}function T(a){function c(a){return"$crox_"+C(a)}function e(a){m+=a}function b(a){for(var h=0;h<a.length;++h){var g=a[h];switch(g[0]){case "if":e("#if("+f(g[1])+")");b(g[2]);g[3]&&(e("#{else}"),b(g[3]));e("#{end}");break;case "each":++p;var m=f(g[1]);if(/^$\w+$/.test(m))var q=m;else q="$list"+(1==p?"":p),e("#set ("+q+" = "+m+")");g[5]?(e("#foreach("+c(g[4])+" in "+q+")"),g[3]&&e("#set("+c(g[3])+" = $velocityCount - 1)")):g[3]?(e("#foreach("+
c(g[3])+" in "+q+".keySet())"),e("#set("+c(g[4])+" ="+q+".get("+c(g[3])+"))")):e("#foreach("+c(g[4])+" in "+q+")");b(g[2]);e("#{end}");--p;break;case "set":e("#set ("+c(g[1])+"="+f(g[2])+")");break;case "eval":g=f(g[1]);/^$\w+$/.test(g)?e("$!{"+g.slice(1)+"}"):e("#set($t = "+g+")$!{t}");break;case "text":e(g[1].replace(/\$/g,"$${dollar}").replace(/#/g,"$${sharp}"));break;case "inc":e("#parse('"+g[1].replace(/\.\w+$/,".vm")+"')");break;default:throw Error("unknown stmt: "+g[0]);}}}function h(a,c){var b=
f(a);c&&!c(a[0])&&(b="("+b+")");return b}function f(a){switch(a[0]){case "id":return c(a[1]);case "lit":return"string"==typeof a[1]?(a=a[1],a=-1==a.indexOf("'")?"'"+a+"'":"('"+a.split("'").join("'+\"'\"+'")+"')",a):String(a[1]);case ".":return h(a[1],z)+"."+a[2];case "[]":return h(a[1],z)+"["+f(a[2])+"]";case "!":return"!"+h(a[1],t);case "u-":if("u-"==a[1][0])throw Error("\u7981\u6b62\u4e24\u4e2a\u8d1f\u53f7\u8fde\u7528");return"-"+h(a[1],t);case "*":case "/":case "%":return h(a[1],D)+a[0]+h(a[2],
t);case "+":case "-":return h(a[1],v)+a[0]+" "+h(a[2],D);case "<":case ">":case "<=":case ">=":return h(a[1],w)+a[0]+h(a[2],v);case "==":case "!=":case "===":case "!==":return h(a[1],E)+a[0].slice(0,2)+h(a[2],w);case "&&":return h(a[1],H)+"&&"+h(a[2],E);case "||":return h(a[1],M)+"||"+h(a[2],H);default:throw Error("unknown expr: "+a[0]);}}var p=0,m="#set($dollar='$')#set($sharp='#')";b(a[1]);return m}x.prototype.toString=function(){return"("+this.row+","+this.col+")"};var R=function(){var a=[[/\s+/],
[/\/\/[^\r\n]*|\/\*[\s\S]*?\*\//],[/[A-Za-z_]\w*/,function(a){switch(a){case "true":case "false":return"boolean";case "set":case "include":case "null":return a;default:if(-1!=" abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends final finally float for function goto if implements import in instanceof int interface let long native new package private protected public return short static super switch synchronized this throw throws transient try typeof var void volatile while with yield ".indexOf(" "+
a+" ")||"null"==a)throw Error("Reserved: "+a+" "+G(this.source,this.index));return"realId"}}],[/"(?:[^"\\]|\\[\s\S])*"|'(?:[^'\\]|\\[\s\S])*'/,function(a){return"string"}],[/\d+(?:\.\d+)?(?:e-?\d+)?/,function(a){return"number"}],[/{(?!{)/,function(a){return"{"}],[/}(?!})/,function(a){return"}"}],[function(a){a.sort().reverse();for(var e=0;e<a.length;++e)a[e]=a[e].replace(/[()*+?.[\]|]/g,"\\$&");return RegExp(a.join("|"))}("! % && ( ) * + - . / < <= = > >= [ ] || === !== == != , :".split(" ")),function(a){return/[*/%]/.test(a)?
"mul":/[<>]/.test(a)?"rel":/[!=]=/.test(a)?"eq":a}]];return O({"":[[/(?:(?!{{)[\s\S])+/,function(a){return"text"}],[/{{{/,function(a){this.pushState(a);return a}],[/{{(?:\/if|else|\/each|\/forin|\/raw)}}/,function(a){return a}],[/{{#raw}}/,function(a){this.pushState("raw");return a}],[/{{(?:#(?:if|each|forin)(?=\s))?/,function(a){this.pushState("{{");return a}]],raw:[[/(?:(?!{{\/raw}})[\s\S])+/,function(a){this.popState();return"rawtext"}]],"{{":a.concat([[/}}/,function(a){this.popState();return a}]]),
"{{{":a.concat([[/}}}/,function(a){this.popState();return a}]])})}(),Q=function(){var a={nStart:41,tSymbols:"$ ! && ( ) + , - . : = [ ] boolean eq include mul null number rawtext realId rel set string text { {{ {{#each {{#forin {{#if {{#raw}} {{/each}} {{/forin}} {{/if}} {{/raw}} {{else}} {{{ || } }} }}} AdditiveExpression ArrayLiteral ElementList Elision EqualityExpression LogicalAndExpression LogicalOrExpression MemberExpression MultiplicativeExpression ObjectLiteral PrimaryExpression PropertyAssignment PropertyNameAndValueList RelationalExpression UnaryExpression _text args empty expr id name program statement statements texts program'".split(" "),
actionList:[{_:-2},{_:-32768},{24:11,26:9,27:7,28:8,29:6,30:12,36:10,_:-1},{_:-3},{24:11,30:12,_:-13},{_:-17},{1:37,3:33,7:38,11:35,13:32,15:28,17:34,18:31,20:30,22:27,23:29,25:36,_:0},{1:37,3:33,7:38,11:35,13:32,15:43,17:34,18:31,20:30,22:42,23:29,25:36,_:0},{_:-19},{19:45,_:0},{_:-18},{_:-27},{_:-45},{_:-29},{_:-30},{3:46,8:48,11:47,_:-52},{_:-55},{16:49,_:-57},{5:51,7:50,_:-60},{21:52,_:-62},{14:53,_:-64},{2:54,_:-66},{37:55,_:-68},{39:56,_:0},{_:-22},{_:-23},{_:-24},{_:-21},{_:-25},{_:-26},{_:-31},
{6:62,12:61,_:-69},{15:28,20:30,22:27,23:67,38:68,_:0},{15:28,20:30,22:27,23:67,_:0},{39:73,_:0},{3:33,11:35,13:32,15:28,17:34,18:31,20:30,22:27,23:29,25:36,_:-22},{23:75,_:-23},{40:76,_:0},{34:77,_:0},{1:37,3:33,7:38,11:35,13:32,15:28,17:34,18:31,20:30,22:27,23:29,25:36,_:-69},{15:28,20:30,22:27,_:0},{_:-2},{4:91,_:0},{6:93,12:92,_:0},{1:37,3:33,6:95,7:38,11:35,13:32,15:28,17:34,18:31,20:30,22:27,23:29,25:36,_:0},{_:-32},{_:-38},{9:97,_:0},{_:-16},{6:98,38:99,_:0},{_:-42},{_:-15},{_:-40},{_:-53},
{_:-54},{15:28,20:30,22:27,23:67,_:-69},{_:-11},{3:46,8:48,10:104,11:47,_:0},{39:105,_:0},{_:-12},{_:-20},{4:106,6:107,_:0},{_:-50},{4:108,_:0},{12:109,_:0},{_:-46},{_:-56},{16:49,_:-59},{16:49,_:-58},{5:51,7:50,_:-61},{21:52,_:-63},{14:53,_:-65},{2:54,_:-67},{24:11,26:9,27:7,28:8,29:6,30:12,33:110,35:111,36:10,_:0},{_:-28},{_:-33},{6:62,_:-69},{_:-34},{_:-39},{_:-35},{_:-41},{39:116,_:0},{39:117,_:0},{39:118,_:0},{39:119,_:0},{_:-14},{_:-48},{_:-49},{_:-47},{_:-4},{_:-2},{_:-44},{_:-43},{_:-2},{_:-2},
{39:129,_:0},{_:-51},{24:11,26:9,27:7,28:8,29:6,30:12,33:130,36:10,_:0},{_:-36},{_:-37},{24:11,26:9,27:7,28:8,29:6,30:12,31:131,36:10,_:0},{24:11,26:9,27:7,28:8,29:6,30:12,31:132,36:10,_:0},{24:11,26:9,27:7,28:8,29:6,30:12,32:133,36:10,_:0},{24:11,26:9,27:7,28:8,29:6,30:12,32:134,36:10,_:0},{_:-10},{_:-5},{_:-6},{_:-7},{_:-8},{_:-9}],actionIndex:[0,1,2,3,4,5,6,6,6,7,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,6,30,31,32,6,6,33,33,34,35,36,37,38,39,6,40,6,6,6,6,6,6,6,41,42,43,
44,6,45,46,47,48,49,50,51,52,53,54,55,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,6,33,80,81,82,83,84,6,85,86,6,87,88,89,90,44,6,91,92,93,93,94,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109],tGoto:[{62:1,64:2},{},{63:3,65:4,56:5},{},{56:13},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:26},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:39},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,
45:23,46:24,47:25,59:40},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:41},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:44},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:57},{},{43:58,44:59,58:60},{61:63,60:64,53:65,52:66},{60:14,51:15,42:16,50:17,48:18,55:69},{60:14,51:15,42:16,50:17,48:18,55:70},{61:71,60:64},{61:72,60:64},{},{60:14,51:15,42:16,
50:17,48:74},{},{},{},{60:14,51:15,42:16,50:17,48:18,57:78,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:79,58:80},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:81},{60:82},{60:14,51:15,42:16,50:17,48:18,55:83},{60:14,51:15,42:16,50:17,48:18,55:19,49:84},{60:14,51:15,42:16,50:17,48:18,55:19,49:85},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:86},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:87},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:88},{60:14,
51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:89},{64:90},{},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:94},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:96},{},{},{},{},{},{},{},{},{},{},{61:100,60:64,58:101},{61:102,60:64,58:103},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{63:3,65:4,56:5},{},{},{44:112,58:113},{},{},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:114},{61:63,60:64,
52:115},{},{},{},{},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:120},{},{},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:121},{},{},{},{64:122},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:123},{60:14,51:15,42:16,50:17,48:18,55:19,49:20,41:21,54:22,45:23,46:24,47:25,59:124},{},{},{64:125},{64:126},{64:127},{64:128},{},{},{63:3,65:4,56:5},{},{},{63:3,65:4,56:5},{63:3,65:4,56:5},{63:3,65:4,56:5},{63:3,65:4,
56:5},{},{},{},{},{},{}],tRules:[[66,62],[62,64],[64],[64,64,63],[63,29,59,39,64,33],[63,29,59,39,64,35,64,33],[63,27,59,61,61,39,64,31],[63,27,59,61,58,39,64,31],[63,28,59,61,61,39,64,32],[63,28,59,61,58,39,64,32],[63,26,22,48,10,59,39],[63,26,59,39],[63,36,59,40],[63,65],[63,26,15,23,39],[61,23],[61,60],[65,56],[65,65,56],[56,24],[56,30,19,34],[60,20],[60,22],[60,15],[51,23],[51,18],[51,13],[51,60],[51,3,59,4],[51,42],[51,50],[51,17],[42,11,12],[42,11,43,12],[43,44,59],[43,58,59],[43,43,6,44,59],
[43,43,6,58,59],[44,6],[44,44,6],[50,25,38],[50,25,53,38],[53,52],[53,53,6,52],[52,61,9,59],[48,51],[48,48,8,60],[48,48,11,59,12],[48,48,3,57,4],[48,48,3,58,4],[57,59],[57,57,6,59],[55,48],[55,1,55],[55,7,55],[49,55],[49,49,16,55],[41,49],[41,41,5,49],[41,41,7,49],[54,41],[54,54,21,41],[45,54],[45,45,14,54],[46,45],[46,46,2,45],[47,46],[47,47,37,46],[59,47],[58]],objCharset:null};return function(c,e){function b(a,b,c,d,e,f,g){return["each",b,f,d,c,!0]}function h(a,b,c,d,e,f,g){return["each",b,f,d,
c,!1]}function f(a){return a.text}function p(a,b){var c;c=Array(a||0);c.push(b);return c}function m(a,b,c,d){c&&(a.length+=c);a.push(d);return a}function d(a){return[a]}function n(a,b,c,d){return["()",a,c]}function g(a,b,c){return[b.text,a,c]}function t(a,b){return k[a][b]}function q(a){throw Error("Syntax error: "+c.getPos(w.index)+(a?"\n"+a:""));}for(var x=a.nStart,y=a.tSymbols,r={},l=0;l<y.length;++l)r[y[l]]=l;var k=a.tAction||a.actionList,u=a.tGoto,C=a.tRules,z=a.actionIndex,D=[,function(a){return["prog",
a]},function(){return[]},function(a,b){a.push(b);return a},function(a,b,c,d,e){return["if",b,d]},function(a,b,c,d,e,f,g){return["if",b,d,f]},b,b,h,h,function(a,b,c,d,e,f){return["set","id"==c[0]?c[1]:c,e]},function(a,b,c){return["eval",b,!1]},function(a,b,c){return["eval",b,!0]},function(a){return["text",a]},function(a,b,c,d){return["inc",K(c.text)]},function(a){return K(a.text)},f,function(a){return a},function(a,b){return a+b},f,function(a,b,c){return b.text},,,,function(a){return["lit",K(a.text)]},
function(a){return["lit",+a.text]},function(a){return["lit","true"==a.text]},function(a){return["id",a.text]},function(a,b,c){return b},,,function(a){return["null"]},function(a,b){return["array",[]]},function(a,b,c){return["array",b]},p,p,m,m,function(a){return 1},function(a,b){return a+1},function(a,b){return["object",[]]},function(a,b,c){return["object",b]},d,function(a,b,c){a.push(c);return a},function(a,b,c){return["init",a,c]},,function(a,b,c){return[".",a,c.text]},function(a,b,c,d){return["[]",
a,c]},n,n,d,function(a,b,c){a.push(c);return a},,function(a,b){return["!",b]},function(a,b){return["u-",b]},,g,,g,g,,g,,g,,g,,g];z&&(t=function(a,b){var c=k[z[a]];return c[b]||c._});var F=0,v=[0],w=c.scan(),A=[],E={get:function(a){return A[A.length+a]},set:function(a,b){A[A.length+a]=b}};if(e)for(l in e)E[l]=e[l];for(;;)if(l=t(F,r[w.tag]))if(0<l)v.push(F=l),A.push(w),w=c.scan();else if(0>l&&-32768<l){var l=-l,F=C[l],B=F.length-1;v.length-=B;F=u[v[v.length-1]][F[0]];v.push(F);D[l]?(l=D[l].apply(E,
A.splice(A.length-B,B)),A.push(l)):1!=B&&A.splice(A.length-B,B,null)}else return w.tag!=y[0]&&q(),A[0];else{l=[];for(B=0;B<x;++B)t(F,B)&&l.push(y[B]);q("find "+w.tag+"\nexpect "+l.join(" "))}}}();return{parse:I,compile:N,render:function(a,c){return N(a)(c)},compileToPhp:function(a){return S(I(a),!0)},compileToVM:function(a,c){return T(I(a))},version:"1.4.2"}}();"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&(define.amd||define.cmd)?define(function(){return x}):
"undefined"!=typeof KISSY&&KISSY.add(function(){return x});G&&(G.Crox=x)})(this);
