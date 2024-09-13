(()=>{"use strict";var t={5441:(t,e,s)=>{s.d(e,{Z:()=>a});var n=s(1519),i=s.n(n)()((function(t){return t[1]}));i.push([t.id,".fluentcrm_photo_holder{align-items:flex-end;display:inline-flex}.fluentcrm_photo_holder img{margin-right:6px;max-height:100px}",""]);const a=i},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var o=0;o<t.length;o++){var r=[].concat(t[o]);n&&i[r[0]]||(s&&(r[2]?r[2]="".concat(s," and ").concat(r[2]):r[2]=s),e.push(r))}},e}},3379:(t,e,s)=>{var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),l=[];function o(t){for(var e=-1,s=0;s<l.length;s++)if(l[s].identifier===t){e=s;break}return e}function r(t,e){for(var s={},n=[],i=0;i<t.length;i++){var a=t[i],r=e.base?a[0]+e.base:a[0],c=s[r]||0,u="".concat(r," ").concat(c);s[r]=c+1;var _=o(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==_?(l[_].references++,l[_].updater(d)):l.push({identifier:u,updater:g(d,e),references:1}),n.push(u)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=s.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var l=a(t.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var u,_=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,s,n){var i=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var a=document.createTextNode(i),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(a,l[e]):t.appendChild(a)}}function f(t,e,s){var n=s.css,i=s.media,a=s.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var v=null,p=0;function g(t,e){var s,n,i;if(e.singleton){var a=p++;s=v||(v=c(e)),n=d.bind(null,s,a,!1),i=d.bind(null,s,a,!0)}else s=c(e),n=f.bind(null,s,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var s=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<s.length;n++){var i=o(s[n]);l[i].references--}for(var a=r(t,e),c=0;c<s.length;c++){var u=o(s[c]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}s=a}}}}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,s),a.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.nc=void 0,(()=>{const t={name:"photo_widget",props:{value:{required:!1,type:String},btn_mode:{type:Boolean,default:function(){return!1}},btn_text:{required:!1,default:function(){return"+ Upload"}},btn_type:{required:!1,default:function(){return"default"}}},data:function(){return{app_ready:!1,image_url:this.value}},methods:{initUploader:function(t){var e=this,s=wp.media.editor.send.attachment;return wp.media.editor.send.attachment=function(t,n){e.$emit("input",n.url),e.$emit("changed",n.url),e.image_url=n.url,wp.media.editor.send.attachment=s},wp.media.editor.open(jQuery(t.target)),!1},getThumb:function(t){return t.url}},mounted:function(){window.wpActiveEditor||(window.wpActiveEditor=null),this.app_ready=!0}};var e=s(3379),n=s.n(e),i=s(5441),a={insert:"head",singleton:!1};n()(i.Z,a);i.Z.locals;function l(t,e,s,n,i,a,l,o){var r,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),l?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=r):i&&(r=o?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),r)if(c.functional){c._injectStyles=r;var u=c.render;c.render=function(t,e){return r.call(e),u(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,r):[r]}return{exports:t,options:c}}var o=l(t,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fluentcrm_photo_card"},[t.app_ready?e("div",{staticClass:"fluentcrm_photo_holder"},[t.value&&!t.btn_mode?e("img",{attrs:{src:t.value}}):t._e(),t._v(" "),e("el-button",{attrs:{size:"small",type:t.btn_type},on:{click:t.initUploader}},[t._v(t._s(t.btn_text))]),t._v(" "),t._t("after")],2):t._e()])}),[],!1,null,null,null);const r=l({name:"FluentSetupWizard",components:{PhotoWidget:o.exports},data:function(){return{loading:!1,active_step:0,config:window.fcAdmin,business_settings:window.fcAdmin.business_settings,list_segments:[{title:"",slug:""},{title:"",slug:""}],tag_segments:[{title:"",slug:""},{title:"",slug:""}],share_essentials:"no",install_fluentforms:"yes",show_essential:!1,email_address:"",rest_statuses:{put_request_status:"checking",delete_request_status:"checking"},show_essential_modal:!1}},methods:{saveBusinessSettings:function(){var t=this;this.$put("setting",{settings:{business_settings:this.business_settings}}).then((function(e){t.$notify.success({title:t.$t("Great!"),message:t.$t("Business Settings has been saved"),offset:19}),t.active_step=2})).catch((function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},saveLists:function(){var t=this,e=this.list_segments.filter((function(t){return t.title&&t.slug}));if(!e.length)return this.$notify.error(this.$t("Please add at least one list"));this.loading=!0,this.$post("lists/bulk",{lists:e}).then((function(e){t.$notify.success({title:t.$t("Great!"),message:e.message,offset:19}),t.active_step=3})).catch((function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},slugifyList:function(t){this.list_segments[t].title&&(this.list_segments[t].slug=this.slugify(this.list_segments[t].title))},addListItem:function(){this.list_segments.push({title:"",slug:""})},deleteListItem:function(t){this.list_segments.splice(t,1)},saveTags:function(){var t=this,e=this.tag_segments.filter((function(t){return t.title&&t.slug}));if(!e.length)return this.$notify.error(this.$t("Please add at least one Tag"));this.loading=!0,this.$post("tags/bulk",{tags:e}).then((function(e){t.$notify.success({title:t.$t("Great!"),message:e.message,offset:19}),t.active_step=4})).catch((function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},slugifyTag:function(t){this.tag_segments[t].title&&(this.tag_segments[t].slug=this.slugify(this.tag_segments[t].title))},addTagItem:function(){this.tag_segments.push({title:"",slug:""})},deleteTagItem:function(t){this.tag_segments.splice(t,1)},handleDataShare:function(t){this.share_essentials=t,this.show_essential_modal=!1,this.complete(!0)},complete:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];"yes"==this.share_essentials||e?(this.loading=!0,this.$post("setting/complete-installation",{install_fluentform:this.install_fluentforms,share_essentials:this.share_essentials,optin_email:this.email_address}).then((function(e){t.$notify.success({title:t.$t("Great!"),message:e.message,offset:19})})).catch((function(e){console.log(e),t.handleError(e)})).finally((function(){t.active_step=5}))):this.show_essential_modal=!0},checkRestRequest:function(t,e){var s=this;this[e]("setting/test").then((function(e){e.message?s.rest_statuses[t]=!0:s.rest_statuses[t]=!1})).catch((function(e){s.rest_statuses[t]=!1}))}},mounted:function(){this.checkRestRequest("put_request_status","$put"),this.checkRestRequest("delete_request_status","$del"),jQuery(".update-nag,.notice, #wpbody-content > .updated, #wpbody-content > .error").remove()}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setup_container"},[e("div",{staticClass:"setup_wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"navigation"},[e("el-steps",{attrs:{"finish-status":"success",active:t.active_step,"align-center":""}},[e("el-step",{attrs:{title:t.$t("Welcome"),icon:"el-icon-s-home"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("Business Info"),icon:"el-icon-office-building"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("Lists"),icon:"el-icon-files"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("Tags"),icon:"el-icon-price-tag"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("Complete"),icon:"el-icon-check"}})],1)],1),t._v(" "),e("div",{staticClass:"setup_body"},[0===t.active_step?[e("h3",[t._v(t._s(t.$t("Welcome to FluentCRM!")))]),t._v(" "),e("p",[t._v(t._s(t.$t("thankyou_for_using_fluentcrm"))+"\n                    "),e("b",[t._v(t._s(t.$t("FluentCrm_Welcome_desc")))])]),t._v(" "),e("p",[t._v(t._s(t.$t("welcome_to_fluentcrm_return_to_wordpress_dashboard")))]),t._v(" "),e("div",{staticClass:"setup_footer"},[e("a",{staticClass:"el-button el-link el-button--default",attrs:{href:t.config.dashboard_url}},[t._v(t._s(t.$t("Not Right Now")))]),t._v(" "),e("el-button",{staticClass:"pull-right",attrs:{type:"success"},on:{click:function(e){t.active_step=1}}},[t._v(t._s(t.$t("Let's Go"))+"\n                    ")])],1)]:1===t.active_step?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"business_info"},[e("div",{staticClass:"section_heading"},[e("h3",[t._v(t._s(t.$t("Please Provide your business information")))]),t._v(" "),e("p",[t._v(t._s(t.$t("subscribers_frontpage_email_campaign")))])]),t._v(" "),e("el-form",{attrs:{"label-position":"top",model:t.business_settings}},[e("el-form-item",{attrs:{label:t.$t("Business Name")}},[e("el-input",{attrs:{placeholder:t.$t("MyAwesomeBusiness")},model:{value:t.business_settings.business_name,callback:function(e){t.$set(t.business_settings,"business_name",e)},expression:"business_settings.business_name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Business Full Address")}},[e("el-input",{attrs:{placeholder:t.$t("street, state, zip, country")},model:{value:t.business_settings.business_address,callback:function(e){t.$set(t.business_settings,"business_address",e)},expression:"business_settings.business_address"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Logo")}},[e("photo-widget",{model:{value:t.business_settings.logo,callback:function(e){t.$set(t.business_settings,"logo",e)},expression:"business_settings.logo"}})],1)],1),t._v(" "),e("div",{staticClass:"setup_footer"},[e("el-button",{staticClass:"pull-right",attrs:{disabled:t.loading,type:"success"},on:{click:function(e){return t.saveBusinessSettings()}}},[t._v("\n                        "+t._s(t.$t("Next"))+"\n                    ")])],1)],1):2===t.active_step?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list_info"},[e("div",{staticClass:"section_heading"},[e("h3",[t._v(t._s(t.$t("Contact Segment Lists")))]),t._v(" "),e("p",[t._v(t._s(t.$t("setup_lists_to_segment_your_conntacts")))])]),t._v(" "),e("table",{staticClass:"fc_horizontal_table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("Segment Name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("Slug")))]),t._v(" "),e("th",[t._v(t._s(t.$t("Action")))])])]),t._v(" "),e("tbody",t._l(t.list_segments,(function(s,n){return e("tr",{key:n},[e("td",[e("el-input",{attrs:{placeholder:t.$t("EG: User Type")+" "+(n+1)},on:{change:function(e){return t.slugifyList(n)}},model:{value:s.title,callback:function(e){t.$set(s,"title",e)},expression:"list.title"}})],1),t._v(" "),e("td",[e("el-input",{model:{value:s.slug,callback:function(e){t.$set(s,"slug",e)},expression:"list.slug"}})],1),t._v(" "),e("td",[e("el-button",{attrs:{size:"small",type:"danger",disabled:1==t.list_segments.length,icon:"el-icon-delete"},on:{click:function(e){return t.deleteListItem(n)}}})],1)])})),0)]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.addListItem()}}},[t._v(t._s(t.$t("Add More")))]),t._v(" "),e("div",{staticClass:"setup_footer"},[e("el-button",{staticClass:"pull-right",attrs:{disabled:t.loading,type:"success"},on:{click:function(e){return t.saveLists()}}},[t._v("\n                        "+t._s(t.$t("Next"))+"\n                    ")])],1)],1):3===t.active_step?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tag_info"},[e("div",{staticClass:"section_heading"},[e("h3",[t._v(t._s(t.$t("Contact Tags")))]),t._v(" "),e("p",[t._v(t._s(t.$t("create_some_tags"))+" "),e("b",[t._v(t._s(t.$t("Example:"))+" "),e("em",[t._v("Product-X User, Product-Y User,\n                        Influencer etc")])])])]),t._v(" "),e("table",{staticClass:"fc_horizontal_table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("Tag Name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("Slug")))]),t._v(" "),e("th",[t._v(t._s(t.$t("Action")))])])]),t._v(" "),e("tbody",t._l(t.tag_segments,(function(s,n){return e("tr",{key:n},[e("td",[e("el-input",{attrs:{placeholder:t.$t("EG: Tag")+" "+(n+1)},on:{change:function(e){return t.slugifyTag(n)}},model:{value:s.title,callback:function(e){t.$set(s,"title",e)},expression:"tag.title"}})],1),t._v(" "),e("td",[e("el-input",{model:{value:s.slug,callback:function(e){t.$set(s,"slug",e)},expression:"tag.slug"}})],1),t._v(" "),e("td",[e("el-button",{attrs:{size:"small",type:"danger",disabled:1==t.tag_segments.length,icon:"el-icon-delete"},on:{click:function(e){return t.deleteTagItem(n)}}})],1)])})),0)]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.addTagItem()}}},[t._v("\n                    "+t._s(t.$t("Add More"))+"\n                ")]),t._v(" "),e("div",{staticClass:"setup_footer"},[e("el-button",{staticClass:"pull-right",attrs:{disabled:t.loading,type:"success"},on:{click:function(e){return t.saveTags()}}},[t._v("\n                        "+t._s(t.$t("Next"))+"\n                    ")])],1)],1):4===t.active_step?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tag_info",attrs:{"element-loading-text":"Completing Installation..."}},[e("div",{staticClass:"section_heading"},[e("h3",[t._v(t._s(t.$t("Almost Done!")))]),t._v(" "),t.config.has_fluentform?e("p",[t._v("\n                        "+t._s(t.$t("Thank you again for configuring your own CRM in WordPress."))),e("br"),t._v("\n                        "+t._s(t.$t("Setup.Subscribe_Newsletter"))+"\n                    ")]):e("p",[t._v("\n                        "+t._s(t.$t("install_fluentform"))+" "),e("b",[t._v("Fluent Forms")]),t._v("\n                        plugin. "+t._s(t.$t("fluentform_info"))+"\n                    ")])]),t._v(" "),t.config.has_fluentform?t._e():e("div",{staticClass:"suggest_box"},[e("el-checkbox",{attrs:{"true-label":"yes","false-label":"no"},model:{value:t.install_fluentforms,callback:function(e){t.install_fluentforms=e},expression:"install_fluentforms"}},[t._v("\n                        "+t._s(t.$t("Setup.Install_FluentForm"))+"\n                    ")])],1),t._v(" "),e("div",{staticClass:"suggest_box share_essential"},[e("p",{staticStyle:{"margin-bottom":"10px"}},[e("b",[t._v(t._s(t.$t("Help us to make FluentCRM better")))])]),t._v(" "),e("el-checkbox",{attrs:{"true-label":"yes","false-label":"no"},model:{value:t.share_essentials,callback:function(e){t.share_essentials=e},expression:"share_essentials"}},[t._v("\n                        "+t._s(t.$t("Share Essentials"))+"\n                    ")]),t._v(" "),e("p",{staticStyle:{"margin-top":"10px"}},[t._v("\n                        "+t._s(t.$t("Setup.FluentCrm.Share_Essentials.desc"))+"\n                        "),e("span",{on:{click:function(e){t.show_essential=!t.show_essential}}},[t._v(t._s(t.$t("what we collect")))])]),t._v(" "),t.show_essential?e("p",[t._v(t._s(t.$t("what_we_collect_infos")))]):t._e()],1),t._v(" "),e("div",{staticClass:"suggest_box email_optin"},[e("label",[t._v(t._s(t.$t("Your Email Address")))]),t._v(" "),e("el-input",{attrs:{placeholder:t.$t("Email Address for bi-monthly newsletter"),type:"email"},model:{value:t.email_address,callback:function(e){t.email_address=e},expression:"email_address"}}),t._v(" "),e("br"),t._v(" "),e("p",{staticStyle:{"margin-top":"20px","font-size":"13px"}},[t._v("\n                        "+t._s(t.$t("Setup.Send_Marketing_tips")))])],1),t._v(" "),e("div",{staticClass:"setup_footer"},[e("el-button",{staticClass:"pull-right",attrs:{disabled:t.loading,type:"success"},on:{click:function(e){return t.complete()}}},[t._v("\n                        "+t._s(t.$t("Complete Installation"))+"\n                    ")])],1)]):5===t.active_step?e("div",{staticClass:"congrates"},[e("div",{staticClass:"section_heading"},[e("h3",[t._v(t._s(t.$t("Congratulations")))]),t._v(" "),e("p",[t._v(t._s(t.$t("Everything is ready.")))])]),t._v(" "),e("div",{staticClass:"next_box"},[e("h4",[t._v(t._s(t.$t("Next"))+"...")]),t._v(" "),e("ul",{staticClass:"congrates_lists"},[e("li",[e("a",{attrs:{href:t.config.dashboard_url+"#/subscribers"}},[t._v(t._s(t.$t("Import Contacts")))])]),t._v(" "),e("li",[e("a",{attrs:{href:t.config.dashboard_url}},[t._v(t._s(t.$t("Go to CRM Dashboard")))])])])])]):t._e()],2),t._v(" "),t.rest_statuses.put_request_status&&t.rest_statuses.delete_request_status?t._e():e("div",{staticClass:"server_issues"},[e("h3",[t._v(t._s(t.$t("Server Issue detected")))]),t._v(" "),e("p",[t._v(t._s(t.$t("server_does_not_support")))]),t._v(" "),e("p",[t._v(t._s(t.$t("using_gridpane")))]),t._v(" "),e("p",[e("a",{attrs:{target:"_blank",rel:"nofollow",href:"https://gridpane.com/kb/making-nginx-accept-put-delete-and-patch-verbs/"}},[t._v("\n                "+t._s(t.$t("View GridPane Article"))+"\n            ")])])])]),t._v(" "),e("el-dialog",{staticClass:"fc_essential_modal",attrs:{title:"Build a better FluentCRM","close-on-click-modal":!1,"show-close":!1,"append-to-body":!0,visible:t.show_essential_modal,width:"30%"},on:{"update:visible":function(e){t.show_essential_modal=e}}},[e("p",[t._v("\n            "+t._s(t.$t("Get_Improved_Help"))+"\n        ")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{staticStyle:{color:"gray",float:"left"},attrs:{type:"text"},on:{click:function(e){return t.handleDataShare("no")}}},[t._v(t._s(t.$t("No Thanks")))]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleDataShare("yes")}}},[t._v(t._s(t.$t("Yes, Count me in!")))])],1)])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("h1",[this._v("FluentCRM")])])}],!1,null,null,null).exports;new window.FLUENTCRM.Vue({el:"#fluentcrm_setup_wizard",render:function(t){return t(r)}})})()})();