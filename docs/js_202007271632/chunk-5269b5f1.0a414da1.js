(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5269b5f1"],{"478c":function(e,t,a){},"54a5":function(e,t,a){"use strict";var n=a("478c"),i=a.n(n);i.a},d430:function(e,t,a){"use strict";a.r(t);a("2397"),a("6b54");var n,i,l,r,s,o,c,u,p,f,g=a("5e15"),b=a("d225"),h=a("b0b4"),y=a("013f"),v=a("4e2b"),d=a("308d"),m=a("6bb5"),w=a("d360"),O=(a("77a7"),a("2b0e")),j=a("2fe1"),k=a("4bb5"),S=a("33bf"),$=a("dce6");function _(e){var t=x();return function(){var a,n=Object(m["a"])(e);if(t){var i=Object(m["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d["a"])(this,a)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R,H,P=(n=Object(j["b"])({}),i=Object(k["b"])("perviewHtml"),l=Object(k["b"])("page"),r=Object(k["b"])("plugins"),n((f=function(e){Object(v["a"])(n,e);var t=_(n);function n(){var e;Object(b["a"])(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),Object(g["a"])(e,"perviewHtml",c,Object(y["a"])(e)),Object(g["a"])(e,"page",u,Object(y["a"])(e)),Object(g["a"])(e,"plugins",p,Object(y["a"])(e)),e.logo=a("534f"),e}return Object(h["a"])(n,[{key:"back",value:function(){this.$router.push({name:"home"})}},{key:"save",value:function(e){var t=this;return new Promise((function(a){window.localStorage.setItem("pagePlugins",JSON.stringify(t.$store.state.plugins,(function(e,t){return"function"===typeof t?t.toString():t}))),"release"!==e&&t.$alert("数据保存成功","提示",{confirmButtonText:"确定"}),a()}))}},{key:"release",value:function(){var e=this;this.save("release").then((function(){var t=e.$notify.info({title:"提示",duration:0,showClose:!1,message:"模版生成中,请稍后..."});e.$http.post("/api/release",{page:JSON.stringify(e.$store.state.page),terminal:navigator.platform.indexOf("Mac")>-1?"mac":"windows"}).then((function(a){t.close(),e.$notify({title:"成功",message:"模版生成成功",type:"success"}),e.$http.post("/api/install")}),(function(a){t.close(),e.$notify.error({title:"错误",message:"模版生成失败,"+a.data.msg})}))}))}},{key:"getPage",value:function(e){var t=this,a={1:function(e){return e($["a"],{attrs:{isRuntime:!0}})},2:function(e){return e(S["a"],{attrs:{children:t.plugins,isRuntime:!0}})}};return a[this.page.style.layoutStyle]?a[this.page.style.layoutStyle](e):[]}},{key:"mounted",value:function(){}},{key:"render",value:function(e){return e("div",{class:"perview"},[e("div",{class:"page-header-tools"},[e("img",{attrs:{src:this.logo,alt:"Web Designer"}}),e("div",{class:"page-header-tools__wrap"},[e("ul",{class:"page-header-tools__ul"},["1"===this.page.style.layoutStyle&&e("li",{style:"color: #757575;font-size: 14px;"},["页面尺寸:",e("span",[this.page.style.w])," *",e("span",[this.page.style.h])]),e("li",{class:"page-header-tools__ul-item",on:{click:this.back}},["返回设计器"]),e("li",{class:"page-header-tools__ul-item",on:{click:this.release}},["发布"])])])]),e("div",{class:"perview-html",style:this.perviewHtmlStyle},[this.getPage(e)])])}},{key:"perviewHtmlStyle",get:function(){return{width:"1"===this.page.style.layoutStyle?this.page.style.w+"px":"100%",height:"1"===this.page.style.layoutStyle?this.page.style.h+"px":"100%",background:this.page.style.background,margin:"0 auto"}}}]),n}(O["default"]),o=f,c=Object(w["a"])(o.prototype,"perviewHtml",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=Object(w["a"])(o.prototype,"page",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=Object(w["a"])(o.prototype,"plugins",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=o))||s),z=P,J=z,D=(a("54a5"),a("2877")),N=Object(D["a"])(J,R,H,!1,null,null,null);t["default"]=N.exports}}]);