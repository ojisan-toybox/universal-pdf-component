(()=>{"use strict";var e,t,n,_,l,o={},r=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var _,l,o,r=arguments,i={};for(o in t)"key"==o?_=t[o]:"ref"==o?l=t[o]:i[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return c(e,i,_,l,null)}function c(t,n,_,l,o){var r={type:t,props:n,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function a(e){return e.children}function d(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function v(l){(!l.__d&&(l.__d=!0)&&t.push(l)&&!y.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(y)}function y(){for(var e;y.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,_,l,o,r;e.__d&&(o=(l=(t=e).__v).__e,(r=t.__P)&&(n=[],(_=u({},l)).__v=l.__v+1,S(r,l,_,t.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,n,null==o?f(l):o,l.__h),C(n,l),l.__e!=o&&h(l)))}))}function m(e,t,n,_,l,i,u,s,d,h){var v,y,m,k,w,x,P,C=_&&_.__k||r,D=C.length;for(d==o&&(d=null!=u?u[0]:D?f(_,0):null),n.__k=[],v=0;v<t.length;v++)if(null!=(k=n.__k[v]=null==(k=t[v])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?c(null,k,null,null,k):Array.isArray(k)?c(a,{children:k},null,null,null):k.__b>0?c(k.type,k.props,k.key,null,k.__v):k)){if(k.__=n,k.__b=n.__b+1,null===(m=C[v])||m&&k.key==m.key&&k.type===m.type)C[v]=void 0;else for(y=0;y<D;y++){if((m=C[y])&&k.key==m.key&&k.type===m.type){C[y]=void 0;break}m=null}S(e,k,m=m||o,l,i,u,s,d,h),w=k.__e,(y=k.ref)&&m.ref!=y&&(P||(P=[]),m.ref&&P.push(m.ref,null,k),P.push(y,k.__c||w,k)),null!=w?(null==x&&(x=w),"function"==typeof k.type&&null!=k.__k&&k.__k===m.__k?k.__d=d=b(k,d,e):d=g(e,k,m,C,u,w,d),h||"option"!==n.type?"function"==typeof n.type&&(n.__d=d):e.value=""):d&&m.__e==d&&d.parentNode!=e&&(d=f(m))}if(n.__e=x,null!=u&&"function"!=typeof n.type)for(v=u.length;v--;)null!=u[v]&&p(u[v]);for(v=D;v--;)null!=C[v]&&("function"==typeof n.type&&null!=C[v].__e&&C[v].__e==n.__d&&(n.__d=f(_,v+1)),N(C[v],C[v]));if(P)for(v=0;v<P.length;v++)A(P[v],P[++v],P[++v])}function b(e,t,n){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,t="function"==typeof l.type?b(l,t,n):g(n,l,l,e.__k,null,l.__e,t));return t}function g(e,t,n,_,l,o,r){var i,u,p;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(l==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),i=null;else{for(u=r,p=0;(u=u.nextSibling)&&p<_.length;p+=2)if(u==o)break e;e.insertBefore(o,r),i=r}return void 0!==i?i:o.nextSibling}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function w(e,t,n,_,l){var o,r,i;if(l&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||k(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||k(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(r=t.toLowerCase())in e&&(t=r),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,i=o?P:x,n?_||e.addEventListener(t,i,o):e.removeEventListener(t,i,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function x(t){this.l[t.type+!1](e.event?e.event(t):t)}function P(t){this.l[t.type+!0](e.event?e.event(t):t)}function S(t,n,_,l,o,r,i,p,s){var c,f,h,v,y,b,g,k,w,x,P,S=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,p=n.__e=_.__e,n.__h=null,r=[p]),(c=e.__b)&&c(n);try{e:if("function"==typeof S){if(k=n.props,w=(c=S.contextType)&&l[c.__c],x=c?w?w.props.value:c.__:l,_.__c?g=(f=n.__c=_.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,x):(n.__c=f=new d(k,x),f.constructor=S,f.render=E),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=x,f.__n=l,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=u({},f.__s)),u(f.__s,S.getDerivedStateFromProps(k,f.__s))),v=f.props,y=f.state,h)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,x)||n.__v===_.__v){f.props=k,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,b)}))}f.context=x,f.props=k,f.state=f.__s,(c=e.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=t,c=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=u(u({},l),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(b=f.getSnapshotBeforeUpdate(v,y)),P=null!=c&&c.type===a&&null==c.key?c.props.children:c,m(t,Array.isArray(P)?P:[P],n,_,l,o,r,i,p,s),f.base=n.__e,n.__h=null,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=D(_.__e,n,_,l,o,r,i,s);(c=e.diffed)&&c(n)}catch(t){n.__v=null,(s||null!=r)&&(n.__e=p,n.__h=!!s,r[r.indexOf(p)]=null),e.__e(t,n,_)}}function C(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function D(e,t,n,_,l,i,u,p){var s,c,a,d,f,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=i)for(s=0;s<i.length;s++)if(null!=(c=i[s])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,i[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,p=!1}if(null===t.type)h===v||p&&e.data===v||(e.data=v);else{if(null!=i&&(i=r.slice.call(e.childNodes)),a=(h=n.props||o).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!p){if(null!=i)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(d||a)&&(d&&(a&&d.__html==a.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}(function(e,t,n,_,l){var o;for(o in n)"children"===o||"key"===o||o in t||w(e,o,null,n[o],_);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||w(e,o,t[o],n[o],_)})(e,v,h,l,p),d?t.__k=[]:(s=t.props.children,m(e,Array.isArray(s)?s:[s],t,n,_,"foreignObject"!==t.type&&l,i,u,o,p)),p||("value"in v&&void 0!==(s=v.value)&&(s!==e.value||"progress"===t.type&&!s)&&w(e,"value",s,h.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&w(e,"checked",s,h.checked,!1))}return e}function A(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function N(t,n,_){var l,o,r;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||A(l,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&N(l[r],n,_);null!=o&&p(o)}function E(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,_,l,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),l=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),l=n.__d),l)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},d.prototype.render=a,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,l=o;var T="https://ojisan-toybox.github.io/universal-pdf-component/example.pdf";!function(t,n,_){var i,u,p;e.__&&e.__(t,n),u=(i=_===l)?null:_&&_.__k||n.__k,t=s(a,null,[t]),p=[],S(n,(i?n:_||n).__k=t,u||o,o,void 0!==n.ownerSVGElement,_&&!i?[_]:u?null:n.childNodes.length?r.slice.call(n.childNodes):null,p,_||o,i),C(p,t)}(s((function(){return s("div",null,s("h1",null,"iframe"),s("iframe",{src:T,scrolling:"no"},s("p",null,"It appears your web browser doesn't support iframes.")),s("h1",null,"object"),s("object",{data:T,type:"application/pdf"},s("p",null,"It appears you don't have Adobe Reader or PDF support in this web browser. ",s("a",{href:T},"Click here to download the PDF"),". Or"," ",s("a",{href:"http://get.adobe.com/reader/",target:"_blank"},"click here to install Adobe Reader"),"."),s("embed",{src:T,type:"application/pdf"})),s("h1",null,"object and embed"),s("object",{data:T,type:"application/pdf"},s("p",null,"It appears you don't have Adobe Reader or PDF support in this web browser. ",s("a",{href:T},"Click here to download the PDF"),". Or"," ",s("a",{href:"http://get.adobe.com/reader/",target:"_blank"},"click here to install Adobe Reader"),"."),s("embed",{src:T,type:"application/pdf"})),s("h1",null,"embed"),s("embed",{width:"500",height:"375",src:T,type:"application/pdf"}),s("h1",null,"google drive"),s("embed",{src:"https://drive.google.com/viewerng/\nviewer?embedded=true&url="+T,width:"500",height:"375"}),s("h1",null,"pdfjs"))}),null),document.body)})();