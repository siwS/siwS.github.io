(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(156),i=n(154),c=n(159);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Contact"}),r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"Hey! If you wanna chat about work, or grab a coffee, you can reach out:"),r.a.createElement("ul",null,r.a.createElement("li",null,"email: ",r.a.createElement("a",{href:"mail-to:tzi.sof@gmail.com"},"tzi.sof-at-gmail.com")),r.a.createElement("li",null,"twitter: ",r.a.createElement("a",{href:"https://twitter.com/SophieSiw"},"SophieSiw")),r.a.createElement("li",null,"LinkedIn: ",r.a.createElement("a",{href:"https://www.linkedin.com/in/sofiatzima/"},"Sofia Tzima")),r.a.createElement("li",null,"or you can write to me in Intercom"))),r.a.createElement(c.a,null))}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Sofia's brain storms"}}}}},154:function(e,t,n){"use strict";var a=n(155),r=n(0),o=n.n(r),i=n(1),c=n.n(i),l=n(158),s=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title,l=a.data.site,u=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Sofia's brain storms",description:"This is the home of my creativity, thoughts and side projects.",author:"@SophieSiw"}}}}},156:function(e,t,n){"use strict";var a=n(153),r=n(0),o=n.n(r),i=n(1),c=n.n(i),l=n(74),s=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"Teal"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),o.a.createElement("div",{className:"scallop-down"}))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,m=(n(157),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("nav",{className:"menu"},o.a.createElement("input",{type:"checkbox",href:"#",className:"menu-open",name:"menu-open",id:"menu-open"}),o.a.createElement("label",{className:"menu-open-button",htmlFor:"menu-open"},o.a.createElement("span",{className:"lines line-1"}),o.a.createElement("span",{className:"lines line-2"}),o.a.createElement("span",{className:"lines line-3"})),o.a.createElement(l.Link,{to:"/",className:"menu-item purple",title:"About"},o.a.createElement("i",{className:"fas fa-female"})),o.a.createElement(l.Link,{to:"/stories",className:"menu-item blue",title:"Stories"},o.a.createElement("i",{className:"fas fa-book"})),o.a.createElement(l.Link,{to:"/projects",className:"menu-item lightblue",title:"Projects"},o.a.createElement("i",{className:"fa fa-diamond"})),o.a.createElement(l.Link,{to:"/",className:"menu-item orange",title:""},o.a.createElement("i",{className:"fa fa-star"})),o.a.createElement(l.Link,{to:"/contact",className:"menu-item green",title:"Contact"},o.a.createElement("i",{className:"fa fa-coffee"})),o.a.createElement(l.Link,{to:"/photos",className:"menu-item red",title:"Pictures"},o.a.createElement("i",{className:"fa fa-images"}))),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"10px 1.0875rem 1.45rem",borderRadius:"25px",background:"#F5FBEF"}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by ",o.a.createElement("a",{href:"https://github.com/siwS"},"me")," with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and ",o.a.createElement("a",{href:"https://pages.github.com/"},"Github pages"))))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(160),i=n.n(o);t.a=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(i.a,{appID:"dqnpwqzs"}))}},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IntercomAPI=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(c(o),c(n(161)));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement),m=(t.IntercomAPI=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];u&&window.Intercom?window.Intercom.apply(null,t):console.warn("Intercom not initialized yet")},function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.appID,o=l(e,["appID"]);return r&&u?(window.Intercom||function(e,t,n,a,r){function o(){o.c(arguments)}o.q=[],o.c=function(e){o.q.push(e)},e.Intercom=o,(a=t.createElement("script")).async=1,a.src="https://widget.intercom.io/widget/"+n,t.head.appendChild(a)}(window,document,r),window.intercomSettings=a({},o,{app_id:r}),window.Intercom&&window.Intercom("boot",o),n):s(n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.appID,n=l(e,["appID"]);u&&(window.intercomSettings=a({},n,{app_id:t}),window.Intercom&&(this.loggedIn(this.props)&&!this.loggedIn(e)?(window.Intercom("shutdown"),window.Intercom("boot",n)):window.Intercom("update",n)))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){if(!u||!window.Intercom)return!1;window.Intercom("shutdown"),delete window.Intercom,delete window.intercomSettings}},{key:"loggedIn",value:function(e){return e.email||e.user_id}},{key:"render",value:function(){return!1}}]),t}());m.propTypes={appID:i.default.string.isRequired},m.displayName="Intercom",t.default=m},161:function(e,t,n){e.exports=n(162)()},162:function(e,t,n){"use strict";var a=n(163),r=n(164);e.exports=function(){function e(){r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=a,n.PropTypes=n,n}},163:function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},164:function(e,t,n){"use strict";var a=function(e){};e.exports=function(e,t,n,r,o,i,c,l){if(a(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,c,l],m=0;(s=new Error(t.replace(/%s/g,function(){return u[m++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-c8cba9d43445b8f13fec.js.map