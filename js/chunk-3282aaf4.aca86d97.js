(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3282aaf4"],{1008:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-img"},[n("div",{staticClass:"formularios"},[n("div",{staticClass:"Title"},[t._v(" Seleccion de Invitados ☻")]),n("div",{staticClass:"invitados"},[n("p",{staticClass:"Indication"},[t._v(" Lista de amigos ")]),t._m(0),n("div",{staticClass:"Tab-AP"},[n("table",{staticClass:"table"},[t._m(1),n("tbody",t._l(t.usuariosAmigos,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v("1")]),n("td",[t._v(t._s(e.nombre))]),n("td",[t._v(t._s(e.email))]),n("td",[n("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(n){return t.deleteOfList(e)}}},[t._v(" Eliminar ")])])])})),0)])])]),n("div",{staticClass:"controls"},[n("div",{staticClass:"boton"},[n("router-link",{attrs:{to:"/especificaciones"}},[n("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v("Continuar")])]),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.addAmigo()}}},[t._v("Continuar")])],1)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-AP"},[n("select",{staticClass:"form-select form-select-sm",attrs:{"aria-label":".form-select-sm example",rows:"1"}},[n("option",{attrs:{selected:""}},[t._v("Ver opciones de selección")]),n("option",{attrs:{value:"1"}},[t._v(" Jehu ")]),n("option",{attrs:{value:"2"}},[t._v(" Karly ")]),n("option",{attrs:{value:"3"}},[t._v(" Erick ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Nombre")]),n("th",{attrs:{scope:"col"}},[t._v("Correo")]),n("th",{attrs:{scope:"col"}})])])}],o=(n("c975"),n("a434"),n("bc3a")),s=n.n(o),a={data:function(){return{usuariosAmigos:[]}},methods:{getAmigos:function(){var t=this,e="http://13292f66d585.ngrok.io/api/v1.0/usuario/";s.a.get(e).then((function(e){t.usuariosAmigos=e.data})).catch((function(t){console.log(t)}))},deleteOfList:function(t){var e=this.usuariosAmigos.indexOf(t);e>-1&&this.usuariosAmigos.splice(e,1)}},created:function(){this.getAmigos()}},c=a,u=(n("296a"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,"2b3d80a5",null);e["default"]=l.exports},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),o=n("2d00"),s=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"296a":function(t,e,n){"use strict";n("9891")},"65f0":function(t,e,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var i=n("c04e"),r=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=i(e);s in t?r.f(t,s,o(0,n)):t[s]=n}},9891:function(t,e,n){},a434:function(t,e,n){"use strict";var i=n("23e7"),r=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),f=n("ae40"),d=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min,h=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,e){var n,i,l,f,d,v,g=a(this),_=s(g.length),C=r(t,_),A=arguments.length;if(0===A?n=i=0:1===A?(n=0,i=_-C):(n=A-2,i=b(p(o(e),0),_-C)),_+n-i>h)throw TypeError(m);for(l=c(g,i),f=0;f<i;f++)d=C+f,d in g&&u(l,f,g[d]);if(l.length=i,n<i){for(f=C;f<_-i;f++)d=f+i,v=f+n,d in g?g[v]=g[d]:delete g[v];for(f=_;f>_-i+n;f--)delete g[f-1]}else if(n>i)for(f=_-i;f>C;f--)d=f+i-1,v=f+n-1,d in g?g[v]=g[d]:delete g[v];for(f=0;f<n;f++)g[f+C]=arguments[f+2];return g.length=_-i+n,l}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var i=n("83ab"),r=n("d039"),o=n("5135"),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return a[t]=!!n&&!r((function(){if(u&&!i)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},c975:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,o=n("a640"),s=n("ae40"),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,u=o("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?a.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-3282aaf4.aca86d97.js.map