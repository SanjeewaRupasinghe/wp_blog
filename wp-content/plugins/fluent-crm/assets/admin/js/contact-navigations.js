(()=>{"use strict";var e={2314:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1519),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"body.folded #fluent_contact_nav{left:calc(50% + 17px)!important}#fluent_contact_nav{bottom:1px;color:#fff;left:calc(50% + 80px);position:fixed;transform:translate(-50%);width:auto;z-index:99999}#fluent_contact_nav ul{align-content:center;align-items:center;display:flex;flex-wrap:wrap;justify-content:space-around;list-style:none;margin:0;padding:0}#fluent_contact_nav ul li{align-items:center;background:#1f1f25;border:none;border-right:1px solid #000;box-sizing:border-box;cursor:pointer;display:flex;flex:1;justify-content:center}#fluent_contact_nav ul li a{color:#f1f2f3;font-size:16px;height:100%;padding:1rem 1.5rem}#fluent_contact_nav ul li a:focus{box-shadow:none;outline:none}#fluent_contact_nav ul li:hover{background:#34343b}#fluent_contact_nav ul li:first-child{border-bottom-left-radius:.5rem;border-top-left-radius:.5rem}#fluent_contact_nav ul li:last-child{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}@media (max-width:425px){#fluent_contact_nav ul li a{padding:5px 10px}}",""]);const o=i},1519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=s(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,i;if(t.singleton){var o=v++;n=h||(h=u(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e={name:"ContactNavigation",props:["subscriber"],methods:{goPrev:function(){this.$emit("prev")},goNext:function(){this.$emit("next")}},mounted:function(){console.log(this.subscriber)}};var t=n(3379),r=n.n(t),i=n(2314),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;var a=function(e,t,n,r,i,o,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:u}}(e,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flc_nav_bar"},[t("ul",[t("li",[t("a",{attrs:{title:"Previous Contact",href:"#"},on:{click:function(t){return t.preventDefault(),e.goPrev()}}},[t("i",{staticClass:"el-icon el-icon-arrow-left"})])]),e._v(" "),e.subscriber.phone?t("li",[t("a",{attrs:{title:"Call",href:"tel:"+e.subscriber.phone}},[t("i",{staticClass:"el-icon el-icon-phone-outline"})])]):e._e(),e._v(" "),t("li",[t("a",{attrs:{title:"Send Email Natively",href:"mailto:"+e.subscriber.email}},[t("i",{staticClass:"el-icon el-icon-message"})])]),e._v(" "),t("li",[t("a",{attrs:{title:"Next Contact",href:"#"},on:{click:function(t){return t.preventDefault(),e.goNext()}}},[t("i",{staticClass:"el-icon el-icon-arrow-right"})])])])])}),[],!1,null,null,null);const s=a.exports;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=!1;window.FLUENTCRM.addAction("fluent_crm_subscriber_loaded","fluentcrm_test",(function(e){if(d)return e&&e.subscriber&&(d.subscriber=e.subscriber,d.initApp()),!1;d=new window.FLUENTCRM.Vue({el:"#fluent_contact_nav",data:{subscriber:e.subscriber,appReady:!1,cached_items:{next:!1,prev:!1},fetching:!1,has_next:!1,has_prev:!1,require_reload:!0},components:{"fluent-contact-nav":s},methods:{goPrev:function(){var t=this,n=this.getPreviousId(this.subscriber.id),r=JSON.stringify(this.subscriber.id);n?(this.cached_items.next.unshift(r),e.$root.$router.push({name:e.$root.$route.name,params:{id:n}})):this.has_prev?this.fetchItems((function(e){t.cached_items.prev&&t.cached_items.prev.length&&t.goPrev()})):this.$notify.info("No previous item found")},goNext:function(){var t=this,n=this.getNextId(this.subscriber.id),r=JSON.stringify(this.subscriber.id);n?(this.cached_items.prev.unshift(r),e.$root.$router.push({name:e.$root.$route.name,params:{id:n}})):this.has_next?this.fetchItems((function(e){t.cached_items.next&&t.cached_items.next.length&&t.goNext()})):this.$notify.info("No next item found")},initApp:function(){var e=this;this.require_reload?this.fetchItems((function(){e.appReady=!0})):this.appReady=!0,this.require_reload=!1},fetchItems:function(e){var t=this;window.fcrm_sub_params&&window.fcrm_sub_params.filter_type&&(this.fetching=!0,this.$get("subscribers/prev-next-ids",l(l({},window.fcrm_sub_params),{current_id:this.subscriber.id})).then((function(n){t.cached_items=n.navigation,t.has_next=n.has_next,t.has_prev=n.has_prev,e&&e(n)})).catch((function(e){console.log(e)})).finally((function(){t.fetching=!1,t.appReady=!0})))},getNextId:function(e){return!(!this.cached_items.next||!this.cached_items.next.length)&&this.cached_items.next.shift()},getPreviousId:function(e){return!(!this.cached_items.prev||!this.cached_items.prev.length)&&this.cached_items.prev.shift()}},mounted:function(){this.initApp()}})})),window.FLUENTCRM.addAction("fluent_crm_leaving_profile","fluentcrm_test",(function(e){d&&(d.require_reload=!0,d.appReady=!1)}))})()})();