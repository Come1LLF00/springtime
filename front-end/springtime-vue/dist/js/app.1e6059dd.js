(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0968":function(e,t,n){},2125:function(e,t,n){},"2c2c":function(e,t,n){},"3eb7":function(e,t,n){"use strict";n("0968")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("logo"),e.isAuthorized?n("basic",{attrs:{accessToken:e.sessionStorage.accessToken,refreshToken:e.sessionStorage.refreshToken},on:{"update:accessToken":e.updateAccess,"update:refreshToken":e.updateRefresh}}):n("startup",{on:{"update:accessToken":e.updateAccess,"update:refreshToken":e.updateRefresh}})],1)},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"logo"}},[n("h3",[e._v("dots among the area")]),n("hr")])}],c=(n("c5b8"),n("2877")),l={},u=Object(c["a"])(l,a,i,!1,null,null,null),d=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"startup"}},[n("hat"),n("loging",{on:{"update:accessToken":e.updateAccess,"update:refreshToken":e.updateRefresh}})],1)},g=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hat"}},[e._l(e.authors,(function(e){return[n("author",{attrs:{name:e.name,surname:e.surname,group:e.group,variant:e.variant,imageURL:e.imageURL,profileLink:e.profileLink}})]}))],2)},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"author"}},[n("a",{attrs:{href:e.profileLink}},[n("div",{staticClass:"author-info"},[n("h3",{staticClass:"text__title"},[e._v(e._s(e.name)+" "+e._s(e.surname))]),n("h4",{staticClass:"text__subtitle"},[e._v("группа: "+e._s(e.group)+" вариант: "+e._s(e.variant))])]),n("div",{staticClass:"author-logo"},[n("img",{attrs:{src:e.imageURL,width:"120"}})])])])},m=[],w={name:"author",props:["name","surname","group","variant","imageURL","profileLink"]},k=w,b=(n("d487"),Object(c["a"])(k,v,m,!1,null,null,null)),y=b.exports,_={name:"hat",data:function(){return{authors:[{name:"Ленар",surname:"Ханнанов",group:"P3214",variant:"2599",imageURL:"https://avatars0.githubusercontent.com/u/55162739?s=400&u=3c4b18db132cb3f15d9ce43fd39b40ffcc72949c&v=4",profileLink:"https://github.com/Come1LLF00"},{name:"Антон",surname:"Сушкевич",group:"P3214",variant:"2599",imageURL:"https://avatars3.githubusercontent.com/u/58341402?s=400&u=16c83f565161eab46f41869a47fa1e71565ac53d&v=4",profileLink:"https://github.com/Leargy"}]}},components:{author:y}},x=_,T=(n("c021"),Object(c["a"])(x,f,p,!1,null,null,null)),S=T.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loging"}},[n("form",{attrs:{id:"login-form",method:"POST"}},[n("fieldset",[n("label",[e._v("логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.login,expression:"user.login"}],attrs:{type:"text",placeholder:"dissya",title:"имя пользователя",required:"true",autocomplete:"username"},domProps:{value:e.user.login},on:{input:function(t){t.target.composing||e.$set(e.user,"login",t.target.value)}}})]),n("fieldset",[n("label",[e._v("пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"ZKB`gyv-x8Cuyv7N",title:"пароль",required:"true",autocomplete:"current-password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),n("fieldset",{staticClass:"separated"},[n("button",{staticClass:"btn",attrs:{title:"Кнопка для входа в существующий аккаунт"},on:{click:e.signin}},[e._v("Войти")]),n("button",{staticClass:"btn",attrs:{title:"Кнопка для создания нового аккаунта"},on:{click:e.signup}},[e._v("Зарегистрироваться")])])])])},O=[],j=(n("d3b7"),n("96cf"),n("1da1")),$={name:"loging",data:function(){return{user:{login:"",password:""}}},methods:{signin:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,o,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sign in account:"),console.log("user: ".concat(this.user)),e.next=4,fetch("api/aunt/sign_in",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.user)});case 4:n=e.sent,console.log("check if response is ok (200)"),n.ok&&(console.log("response 200; get token"),o=n.json(),console.log("response body: ".concat(o)),o?(s=o.accessToken,r=o.refreshToken,console.log("get user access-token: ".concat(s)),console.log("get user refresh-token: ".concat(r)),console.log("invokating tokens change"),this.$emit("update:accessToken",s),this.$emit("update:refreshToken",r)):console.log("bad data: expected { accessToken, refreshToken }"));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,o,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sign up new account:"),console.log("user: ".concat(this.user)),e.next=4,fetch("api/aunt/register",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.user)});case 4:n=e.sent,console.log("sent request"),console.log("check if status 201"),201===n.status&&(console.log("user created"),o=n.json(),console.log("response body: ".concat(o)),o?(s=o.accessToken,r=o.refreshToken,console.log("get user access-token: ".concat(s)),console.log("get user refresh-token: ".concat(r)),console.log("invokating tokens change"),this.$emit("update:accessToken",s),this.$emit("update:refreshToken",r)):console.log("bad data: expected { accessToken, refreshToken }"));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},C=$,N=(n("3eb7"),Object(c["a"])(C,R,O,!1,null,null,null)),P=N.exports,L={name:"startup",components:{hat:S,loging:P},methods:{updateAccess:function(e){this.$emit("update:accessToken",e)},updateRefresh:function(e){this.$emit("update:refreshToken",e)}}},A=L,z=Object(c["a"])(A,h,g,!1,null,null,null),V=z.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"basic"}},[n("div",{attrs:{id:"top-container"}},[n("div",{attrs:{id:"form-container"}},[n("h4",{staticClass:"text__title"},[e._v("Форма")]),n("form",{attrs:{id:"result"}},[n("fieldset",{ref:"x",attrs:{title:"Значение параметра x должно быть целым числом в пределах -4 до 4"}},[n("label",[e._v("x")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.result.x,expression:"result.x"}],attrs:{required:"true"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.result,"x",t.target.multiple?n:n[0])}}},e._l(e.xValues,(function(t){return n("option",[e._v(e._s(t))])})),0)]),n("fieldset",{ref:"y",attrs:{title:"Значение параметра y должно быть действительным число в интервале от -5 до 5"}},[n("label",[e._v("y")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result.y,expression:"result.y"}],attrs:{type:"text",placeholder:"y in (-5, 5)",required:"true"},domProps:{value:e.result.y},on:{input:function(t){t.target.composing||e.$set(e.result,"y",t.target.value)}}})]),n("fieldset",{ref:"r",attrs:{title:"Значение параметра r должно быть целым числом в пределах от 1 до 4"}},[n("label",[e._v("r")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.result.r,expression:"result.r"}],attrs:{required:"true"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.result,"r",t.target.multiple?n:n[0])}}},e._l(e.xValues,(function(t){return n("option",[e._v(e._s(t))])})),0)]),n("fieldset",{staticClass:"inlines__align--center"},[n("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.check(t)}}},[e._v("проверить")])])])]),n("div",{staticClass:"inlines__align--center",attrs:{id:"area-container"}},[n("h4",{staticClass:"text__title"},[e._v("Рабочая область")]),n("div",{attrs:{id:"area-subcontainer"}},[n("canvas",{ref:"area",attrs:{id:"area",width:"600",height:"600"},on:{click:e.checkArea}},[e._v(" Canvas not supported ")])])])]),e.isLoading?n("loader"):e.results.length?n("resultscontainer",{attrs:{results:e.results}}):n("p",{staticClass:"empty-results"},[e._v("результаты отсутствуют")]),n("div",{staticClass:"inlines__align--center",attrs:{id:"close-container"}},[n("button",{staticClass:"btn",on:{click:e.signout}},[e._v("закрыть сессию")])])],1)},H=[],M=(n("99af"),n("cb29"),n("caad"),n("a9e3"),n("35b3"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"resultscontainer"}},[n("table",{attrs:{id:"results"}},[e._m(0),n("tbody",{staticClass:"table__body"},e._l(e.results,(function(t){return n("tr",[n("td",[n("div",{staticClass:"scrollable"},[e._v(e._s(t.date.toLocaleString("ru",e.dateOptions)))])]),n("td",[n("div",{staticClass:"scrollable"},[e._v(e._s(t.time))])]),n("td",[n("div",{staticClass:"scrollable"},[e._v(e._s(t.x))])]),n("td",[n("div",{staticClass:"scrollable special-width"},[e._v(e._s(t.y))])]),n("td",[n("div",{staticClass:"scrollable"},[e._v(e._s(t.r))])]),n("td",[n("div",{staticClass:"scrollable"},[e._v(e._s(t.hit?"yes":"no"))])])])})),0)])])}),q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"table__head"},[n("tr",[n("th",[e._v("дата")]),n("th",[e._v("время")]),n("th",[e._v("x")]),n("th",[e._v("y")]),n("th",[e._v("r")]),n("th",[e._v("результат")])])])}],F={name:"resultscontainer",props:["results"],data:function(){return{dateOptions:{localeMatcher:"best fit",hour12:!1,formatMatcher:"best fit",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}}}},J=F,U=(n("ebbf"),Object(c["a"])(J,M,q,!1,null,null,null)),D=U.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loader"}},[n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")])])}],Y=(n("f482"),{}),B=Object(c["a"])(Y,I,X,!1,null,null,null),Q=B.exports,K=["1","2","3","4"],Z=Math.max.apply(Math,K),G=.45,W={name:"basic",props:["accessToken","refreshToken"],components:{resultscontainer:D,loader:Q},data:function(){return{rValues:K,xValues:["-4","-3","-2","-1","0"].concat(K),yMinimal:"-5",yMaximum:"5",result:{x:"",y:"",r:""},results:[],isLoading:!0}},computed:{radius:function(){return this.result.r}},methods:{translateTo:function(e,t,n,o){return console.log("length: ".concat(n,", real coordinate: ").concat(e,", field size: ").concat(t,", proportion: ").concat(o)),n*(e-t/2)/(t*o)},translateFrom:function(e,t,n,o){return t*(e*o/n+.5)},drawRectangle:function(e,t,n,o){e.fillRect(t-o,n,o,o/2)},drawTriangle:function(e,t,n,o){e.beginPath(),e.moveTo(t,n),e.lineTo(t,n-o),e.lineTo(t+o/2,n),e.closePath(),e.stroke(),e.fill()},drawQuadrant:function(e,t,n,o){e.beginPath(),e.arc(t,n,o/2,0,Math.PI/2,!1),e.lineTo(t,n),e.closePath(),e.stroke(),e.fill()},drawArea:function(e,t,n,o,s){t.strokeStyle="#3399FF",t.fillStyle="#3399FF",console.log("canvas: ".concat(e,", ctx: ").concat(t,", x: ").concat(n,", y: ").concat(o,", radius: ").concat(s)),console.log("drawing rectangle"),this.drawRectangle(t,n,o,s),console.log("drawing triangle"),this.drawTriangle(t,n,o,s),console.log("drawing quadrant"),this.drawQuadrant(t,n,o,s)},drawVerticalLine:function(e,t,n,o){e.fillRect(t,n,2,o)},drawHorizontalLine:function(e,t,n,o){e.fillRect(t,n,o,2)},drawLines:function(e,t,n,o){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("draw horizontal line"),this.drawHorizontalLine(e,0,n,o),console.log("draw vertical line"),this.drawVerticalLine(e,t,0,o)},drawHorizontalArrow:function(e,t,n,o){e.beginPath(),e.moveTo(t,n),e.lineTo(t-o,n-o/2),e.lineTo(t-o,n+o/2),e.closePath(),e.fill(),e.stroke()},drawSignedHorizontalArrow:function(e,t,n,o,s){e.fillText(s,t-o,n-o),this.drawHorizontalArrow(e,t,n,o)},drawVerticalArrow:function(e,t,n,o){e.beginPath(),e.moveTo(t,n),e.lineTo(t-o/2,n+o),e.lineTo(t+o/2,n+o),e.closePath(),e.fill(),e.stroke()},drawSignedVerticalArrow:function(e,t,n,o,s){e.fillText(s,t+o,n+o),this.drawVerticalArrow(e,t,n,o)},drawArrows:function(e,t,n,o){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("drawing horizontal arrow"),this.drawHorizontalArrow(e,t,0,o),console.log("drawing vertical arrow"),this.drawVerticalArrow(e,2*t,n,o)},drawSignedArrows:function(e,t,n,o){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("drawing signed horizontal arrow"),this.drawSignedHorizontalArrow(e,2*t,n,o,"x"),console.log("drawing signed vertical arrow"),this.drawSignedVerticalArrow(e,t,0,o,"y")},drawSignedHorizontalNotch:function(e,t,n,o,s){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillText(s,t+o,n+o/2),this.drawHorizontalLine(e,t-o/2,n,o)},drawSignedVerticalNotch:function(e,t,n,o,s){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillText(s,t-o,n-o),this.drawVerticalLine(e,t,n-o/2,o)},tempdraw:function(e){console.log("drawing template");var t=this.$refs.area,n=t.getContext("2d"),o=t.width,s=t.height,r=o*G;console.log("canvas: (".concat(o,":").concat(s,")"));var a="sans-serif",i=o/38;n.font="".concat(i,"px ").concat(a),console.log("clearing canvas"),n.clearRect(0,0,o,s),console.log("drawing working area"),this.drawArea(t,n,o/2,s/2,r),console.log("drawing coordinate lines"),this.drawLines(n,o/2,s/2,o),console.log("drawing direction arrows"),this.drawSignedArrows(n,o/2,s/2,r/20),console.log("drawing notches"),console.log("drawing horizontal notches"),this.drawSignedHorizontalNotch(n,o/2,s/2+r,r/20,"-R"),this.drawSignedHorizontalNotch(n,o/2,s/2+r/2,r/20,"-R/2"),this.drawSignedHorizontalNotch(n,o/2,s/2-r/2,r/20,"R/2"),this.drawSignedHorizontalNotch(n,o/2,s/2-r,r/20,"R"),console.log("drawing vertical notches"),this.drawSignedVerticalNotch(n,o/2-r,s/2,r/20,"-R"),this.drawSignedVerticalNotch(n,o/2-r/2,s/2,r/20,"-R/2"),this.drawSignedVerticalNotch(n,o/2+r/2,s/2,r/20,"R/2"),this.drawSignedVerticalNotch(n,o/2+r,s/2,r/20,"R"),console.log("template drew")},basedraw:function(e){console.log("drawing with real radius");var t=this.$refs.area,n=t.getContext("2d"),o=t.width,s=t.height,r=o*G;console.log("canvas: (".concat(o,":").concat(s,")"));var a="sans-serif",i=o/38;n.font="".concat(i,"px ").concat(a),console.log("clearing canvas"),n.clearRect(0,0,o,s),console.log("drawing working area"),this.drawArea(t,n,o/2,s/2,e*r/Z),console.log("drawing coordinate lines"),this.drawLines(n,o/2,s/2,o),console.log("drawing direction arrows"),this.drawSignedArrows(n,o/2,s/2,r/20),console.log("drawing notches"),console.log("drawing horizontal notches");for(var c=-4;c<=4;c+=.5){var l=s/2+r,u=2*r/8;0!==c&&this.drawSignedHorizontalNotch(n,o/2,l-(Z+c)*u,r/20,c+"")}console.log("drawing vertical notches");for(var d=-4;d<=4;d+=.5){var h=o/2-r,g=2*r/8;this.drawSignedVerticalNotch(n,h+(Z+d)*g,s/2,r/20,d+"")}console.log("basic drew")},redraw:function(e){!e||e<=0?this.tempdraw("R"):this.basedraw(e)},testX:function(e){return console.log("x values: ".concat(this.xValues)),this.xValues.includes(e)},testY:function(e){var t=/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/,n=parseFloat(e);console.log("parsed value: ".concat(n));var o=t.test(e);console.log("float?: ".concat(o)),console.log("not NaN?: ".concat(!isNaN(n)));var s=n<=this.yMaximum-Number.EPSILON;console.log("less?: ".concat(s));var r=n>=this.yMinimal+Number.EPSILON;return console.log("more?: ".concat(r)),o&&!isNaN(n)&&s&&r},testR:function(e){return console.log("r values: ".concat(this.rValues)),this.rValues.includes(e)},fetchToken:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,o,s,r,a,i,c,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("current access-token expired: ".concat(this.accessToken)),console.log("fetching new one"),e.next=4,fetch("/api/refresh/token",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.refreshToken)});case 4:if(n=e.sent,console.log("check if response is ok"),n.ok)if(console.log("successful fetching new tokens"),console.log("getting json object"),o=n.json(),o)console.log("empty response body");else{for(console.log("fetched from backend ".concat(o)),s=o.refreshToken,console.log("get refresh token: ".concat(s)),r=o.accessToken,console.log("get access token: ".concat(r)),this.$emit("update:refreshToken",s),this.$emit("update:accessToken",r),t=t.bind(this),a=l.length,i=new Array(a>1?a-1:0),c=1;c<a;c++)i[c-1]=l[c];t(i)}else console.log("bad response");case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fetchResult:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("provided valid data"),console.log("sending ".concat(this.result)),console.log("sending data..."),e.next=5,fetch("/main/app/add",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",shell_token:this.accessToken},body:JSON.stringify(this.result)});case 5:t=e.sent,console.log("request sent checking if response is ok (201)"),201===t.status?console.log("response is ok (201)"):403===t.status?(console.log("access token expired"),this.fetchToken(this.fetchResult)):console.log("bad response"),console.log("response status: ".concat(t.status));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),drawDots:function(e){if(console.log("previous results: ".concat(e)),e.length){this.result.r=e[0].r;for(var t=this.$refs.area,n=t.getContext("2d"),o=t.width,s=t.height,r=0;r<e.length;++r){console.log("putting dot: ".concat(e[r])),console.log("x: ".concat(e[r].x,"; y: ").concat(e[r].y)),n.fillStyle=e[r].hit?"#000000":"#cd0000",console.log("translating coordinates");var a=this.translateFrom(e[r].x,o,Z,G),i=this.translateFrom(-e[r].y,s,Z,G);console.log("translated: x: ".concat(a," y: ").concat(i)),console.log("putting dots"),n.beginPath(),n.arc(a,i,o*G/100,0,2*Math.PI,!0),n.fill(),n.stroke(),n.closePath()}}else console.log("no any results in the table")},check:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n="",console.log("--- x testing ---"),this.testX(this.result.x)||(n+=this.$refs.x.title+";\n"),console.log("--- y testing ---"),this.testY(this.result.y)||(n+=this.$refs.y.title+";\n"),console.log("--- r testing ---"),this.testR(this.result.r)||(n+=this.$refs.r.title+";\n"),console.log("=== total testing ==="),n.length?(console.log("Errors[".concat(n.length,"]: ").concat(n)),alert(n)):(console.log("fetching new result"),this.fetchResult());case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkArea:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,o,s,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("current radius: ".concat(this.result.r)),console.log("check if radius set"),this.result.r?this.testR(this.result.r)?(console.log("valid radius value"),n=this.$refs.area,o=n.getBoundingClientRect(),console.log("canvas: (".concat(n.width,":").concat(n.height,")")),console.log("getting x coordinate"),s=t.clientX-o.left,console.log("mouse x: ".concat(s)),console.log("translating to x value"),r=this.translateTo(s,n.width,Z,G),console.log("x translated to: ".concat(r)),this.result.x=r,console.log("getting y coordinate"),a=t.clientY-o.top,console.log("mouse y: ".concat(a)),console.log("translating to y value"),i=-this.translateTo(a,n.height,Z,G),console.log("y translated to: ".concat(i)),this.result.y=i,console.log("fetching new result"),this.fetchResult()):(console.log("invalid radius value"),alert(this.$refs.r.title)):(console.log("radius not set"),alert("Не установлено свойство радиуса области"));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),signout:function(e){console.log("close current session..."),this.$emit("update:accessToken",""),this.$emit("update:refreshToken","")},retrieve:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("getting results with unique token"),e.next=3,fetch("/main/app/dots/all",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",shell_token:this.accessToken},body:JSON.stringify(this.accessToken)});case 3:t=e.sent,console.log("check if response is ok"),t.ok?(console.log("response is ok"),console.log("getting the json object"),n=t.json(),this.results=n):403===t.status?(console.log("access token expired"),this.fetchToken(this.retrieve)):(console.log("bad response"),console.log("response status: ".concat(t.status)),this.results=[{date:new Date,time:0,x:4,y:4,r:4,hit:!0},{date:new Date,time:2,x:3,y:-4,r:3,hit:!1}]),this.isLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.retrieve(),this.redraw(this.radius)},updated:function(){this.drawDots(this.results)},watch:{radius:function(e){this.redraw(this.radius)}}},ee=W,te=(n("61e5"),Object(c["a"])(ee,E,H,!1,null,null,null)),ne=te.exports,oe={name:"app",components:{logo:d,startup:V,basic:ne},data:function(){return{sessionStorage:{accessToken:"",refreshToken:""}}},methods:{updateAccess:function(e){this.sessionStorage.accessToken=e},updateRefresh:function(e){this.sessionStorage.refreshToken=e}},computed:{isAuthorized:function(){return!(void 0===this.sessionStorage.accessToken||null===this.sessionStorage.accessToken||""===this.sessionStorage.accessToken)}}},se=oe,re=(n("034f"),Object(c["a"])(se,s,r,!1,null,null,null)),ae=re.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(ae)}}).$mount("#app")},"61e5":function(e,t,n){"use strict";n("2c2c")},"6d0b":function(e,t,n){},"85ec":function(e,t,n){},c021:function(e,t,n){"use strict";n("e0ca")},c5b8:function(e,t,n){"use strict";n("6d0b")},d487:function(e,t,n){"use strict";n("2125")},def8:function(e,t,n){},e0ca:function(e,t,n){},ebbf:function(e,t,n){"use strict";n("fe67")},f482:function(e,t,n){"use strict";n("def8")},fe67:function(e,t,n){}});
//# sourceMappingURL=app.1e6059dd.js.map