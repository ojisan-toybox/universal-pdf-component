(()=>{"use strict";var e,n,t,_,l,o={},r=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function c(e,n,t){var _,l,o,r=arguments,u={};for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:u[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return p(e,u,_,l,null)}function p(n,t,_,l,o){var r={type:n,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function f(e){return e.children}function a(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function h(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return h(e)}}function v(l){(!l.__d&&(l.__d=!0)&&n.push(l)&&!y.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||t)(y)}function y(){for(var e;y.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=i({},l)).__v=l.__v+1,P(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?d(l):o,l.__h),C(t,l),l.__e!=o&&h(l)))}))}function m(e,n,t,_,l,u,i,c,a,h){var v,y,m,b,w,S,x,C=_&&_.__k||r,N=C.length;for(a==o&&(a=null!=i?i[0]:N?d(_,0):null),t.__k=[],v=0;v<n.length;v++)if(null!=(b=t.__k[v]=null==(b=n[v])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?p(null,b,null,null,b):Array.isArray(b)?p(f,{children:b},null,null,null):b.__b>0?p(b.type,b.props,b.key,null,b.__v):b)){if(b.__=t,b.__b=t.__b+1,null===(m=C[v])||m&&b.key==m.key&&b.type===m.type)C[v]=void 0;else for(y=0;y<N;y++){if((m=C[y])&&b.key==m.key&&b.type===m.type){C[y]=void 0;break}m=null}P(e,b,m=m||o,l,u,i,c,a,h),w=b.__e,(y=b.ref)&&m.ref!=y&&(x||(x=[]),m.ref&&x.push(m.ref,null,b),x.push(y,b.__c||w,b)),null!=w?(null==S&&(S=w),"function"==typeof b.type&&null!=b.__k&&b.__k===m.__k?b.__d=a=k(b,a,e):a=g(e,b,m,C,i,w,a),h||"option"!==t.type?"function"==typeof t.type&&(t.__d=a):e.value=""):a&&m.__e==a&&a.parentNode!=e&&(a=d(m))}if(t.__e=S,null!=i&&"function"!=typeof t.type)for(v=i.length;v--;)null!=i[v]&&s(i[v]);for(v=N;v--;)null!=C[v]&&("function"==typeof t.type&&null!=C[v].__e&&C[v].__e==t.__d&&(t.__d=d(_,v+1)),E(C[v],C[v]));if(x)for(v=0;v<x.length;v++)D(x[v],x[++v],x[++v])}function k(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n="function"==typeof l.type?k(l,n,t):g(t,l,l,e.__k,null,l.__e,n));return n}function g(e,n,t,_,l,o,r){var u,i,s;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(l==t||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),u=null;else{for(i=r,s=0;(i=i.nextSibling)&&s<_.length;s+=2)if(i==o)break e;e.insertBefore(o,r),u=r}return void 0!==u?u:o.nextSibling}function b(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function w(e,n,t,_,l){var o,r,u;if(l&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||b(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||b(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(o=n!==(n=n.replace(/Capture$/,"")),(r=n.toLowerCase())in e&&(n=r),n=n.slice(2),e.l||(e.l={}),e.l[n+o]=t,u=o?x:S,t?_||e.addEventListener(n,u,o):e.removeEventListener(n,u,o)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!l&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function S(n){this.l[n.type+!1](e.event?e.event(n):n)}function x(n){this.l[n.type+!0](e.event?e.event(n):n)}function P(n,t,_,l,o,r,u,s,c){var p,d,h,v,y,k,g,b,w,S,x,P=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(c=_.__h,s=t.__e=_.__e,t.__h=null,r=[s]),(p=e.__b)&&p(t);try{e:if("function"==typeof P){if(b=t.props,w=(p=P.contextType)&&l[p.__c],S=p?w?w.props.value:p.__:l,_.__c?g=(d=t.__c=_.__c).__=d.__E:("prototype"in P&&P.prototype.render?t.__c=d=new P(b,S):(t.__c=d=new a(b,S),d.constructor=P,d.render=T),w&&w.sub(d),d.props=b,d.state||(d.state={}),d.context=S,d.__n=l,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=P.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=i({},d.__s)),i(d.__s,P.getDerivedStateFromProps(b,d.__s))),v=d.props,y=d.state,h)null==P.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,S),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,S)||t.__v===_.__v){d.props=b,d.state=d.__s,t.__v!==_.__v&&(d.__d=!1),d.__v=t,t.__e=_.__e,t.__k=_.__k,d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,k)}))}d.context=S,d.props=b,d.state=d.__s,(p=e.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=n,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(l=i(i({},l),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(k=d.getSnapshotBeforeUpdate(v,y)),x=null!=p&&p.type===f&&null==p.key?p.props.children:p,m(n,Array.isArray(x)?x:[x],t,_,l,o,r,u,s,c),d.base=t.__e,t.__h=null,d.__h.length&&u.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=N(_.__e,t,_,l,o,r,u,c);(p=e.diffed)&&p(t)}catch(n){t.__v=null,(c||null!=r)&&(t.__e=s,t.__h=!!c,r[r.indexOf(s)]=null),e.__e(n,t,_)}}function C(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function N(e,n,t,_,l,u,i,s){var c,p,f,a,d,h=t.props,v=n.props;if(l="svg"===n.type||l,null!=u)for(c=0;c<u.length;c++)if(null!=(p=u[c])&&((null===n.type?3===p.nodeType:p.localName===n.type)||e==p)){e=p,u[c]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),u=null,s=!1}if(null===n.type)h===v||s&&e.data===v||(e.data=v);else{if(null!=u&&(u=r.slice.call(e.childNodes)),f=(h=t.props||o).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||w(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||w(e,o,n[o],t[o],_)})(e,v,h,l,s),a?n.__k=[]:(c=n.props.children,m(e,Array.isArray(c)?c:[c],n,t,_,"foreignObject"!==n.type&&l,u,i,o,s)),s||("value"in v&&void 0!==(c=v.value)&&(c!==e.value||"progress"===n.type&&!c)&&w(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&w(e,"checked",c,h.checked,!1))}return e}function D(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function E(n,t,_){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||D(l,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){e.__e(n,t)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&E(l[r],t,_);null!=o&&s(o)}function T(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,_,l,o=n.__h;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return n.__h=o,t.__E=t}catch(n){e=n}throw e},__v:0},a.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof e&&(e=e(i({},t),this.props)),e&&i(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),v(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},a.prototype.render=f,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,l=o,function(n,t,_){var u,i,s;e.__&&e.__(n,t),i=(u=_===l)?null:_&&_.__k||t.__k,n=c(f,null,[n]),s=[],P(t,(u?t:_||t).__k=n,i||o,o,void 0!==t.ownerSVGElement,_&&!u?[_]:i?null:t.childNodes.length?r.slice.call(t.childNodes):null,s,_||o,u),C(s,n)}(c((function(){return c("div",null,"hello world")}),null),document.body)})();