// eslint-disable-next-line quotes
const workerCode = `(function(e){"use strict";var t=n,r=n;function n(e,t,r){r=r||2;var n,v,h,l,u,x,c,d=t&&t.length,g=d?t[0]*r:e.length,y=i(e,0,g,r,!0),m=[];if(!y||y.next===y.prev)return m;if(d&&(y=function(e,t,r,n){var o,v,h,l=[];for(o=0,v=t.length;o<v;o++)(h=i(e,t[o]*n,o<v-1?t[o+1]*n:e.length,n,!1))===h.next&&(h.steiner=!0),l.push(p(h));for(l.sort(f),o=0;o<l.length;o++)s(l[o],r),r=a(r,r.next);return r}(e,t,y,r)),e.length>80*r){n=h=e[0],v=l=e[1];for(var M=r;M<g;M+=r)(u=e[M])<n&&(n=u),(x=e[M+1])<v&&(v=x),u>h&&(h=u),x>l&&(l=x);c=0!==(c=Math.max(h-n,l-v))?1/c:0}return o(y,m,r,n,v,c),m}function i(e,t,r,n,i){var a,o;if(i===F(e,t,r,n)>0)for(a=t;a<r;a+=n)o=A(a,e[a],e[a+1],o);else for(a=r-n;a>=t;a-=n)o=A(a,e[a],e[a+1],o);return o&&m(o,o.next)&&(z(o),o=o.next),o}function a(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!m(n,n.next)&&0!==y(n.prev,n,n.next))n=n.next;else{if(z(n),(n=t=n.prev)===n.next)break;r=!0}}while(r||n!==t);return t}function o(e,t,r,n,i,f,s){if(e){!s&&f&&function(e,t,r,n){var i=e;do{null===i.z&&(i.z=c(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,r,n,i,a,o,v,h,l=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,n=r,v=0,t=0;t<l&&(v++,n=n.nextZ);t++);for(h=l;v>0||h>0&&n;)0!==v&&(0===h||!n||r.z<=n.z)?(i=r,r=r.nextZ,v--):(i=n,n=n.nextZ,h--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,l*=2}while(o>1)}(i)}(e,n,i,f);for(var x,p,d=e;e.prev!==e.next;)if(x=e.prev,p=e.next,f?h(e,n,i,f):v(e))t.push(x.i/r),t.push(e.i/r),t.push(p.i/r),z(e),e=p.next,d=p.next;else if((e=p)===d){s?1===s?o(e=l(a(e),t,r),t,r,n,i,f,2):2===s&&u(e,t,r,n,i,f):o(a(e),t,r,n,i,f,1);break}}}function v(e){var t=e.prev,r=e,n=e.next;if(y(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(d(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&y(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function h(e,t,r,n){var i=e.prev,a=e,o=e.next;if(y(i,a,o)>=0)return!1;for(var v=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,h=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,u=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,f=c(v,h,t,r,n),s=c(l,u,t,r,n),x=e.prevZ,p=e.nextZ;x&&x.z>=f&&p&&p.z<=s;){if(x!==e.prev&&x!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;x&&x.z>=f;){if(x!==e.prev&&x!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=s;){if(p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function l(e,t,r){var n=e;do{var i=n.prev,o=n.next.next;!m(i,o)&&M(i,n,n.next,o)&&S(i,o)&&S(o,i)&&(t.push(i.i/r),t.push(n.i/r),t.push(o.i/r),z(n),z(n.next),n=e=o),n=n.next}while(n!==e);return a(n)}function u(e,t,r,n,i,v){var h=e;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&g(h,l)){var u=Z(h,l);return h=a(h,h.next),u=a(u,u.next),o(h,t,r,n,i,v),void o(u,t,r,n,i,v)}l=l.next}h=h.next}while(h!==e)}function f(e,t){return e.x-t.x}function s(e,t){if(t=function(e,t){var r,n=t,i=e.x,a=e.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var v=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=i&&v>o){if(o=v,v===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===o)return r;var h,l=r,u=r.x,f=r.y,s=1/0;n=r;do{i>=n.x&&n.x>=u&&i!==n.x&&d(a<f?i:o,a,u,f,a<f?o:i,a,n.x,n.y)&&(h=Math.abs(a-n.y)/(i-n.x),S(n,e)&&(h<s||h===s&&(n.x>r.x||n.x===r.x&&x(r,n)))&&(r=n,s=h)),n=n.next}while(n!==l);return r}(e,t)){var r=Z(t,e);a(t,t.next),a(r,r.next)}}function x(e,t){return y(e.prev,e,t.prev)<0&&y(t.next,e,e.next)<0}function c(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function d(e,t,r,n,i,a,o,v){return(i-o)*(t-v)-(e-o)*(a-v)>=0&&(e-o)*(n-v)-(r-o)*(t-v)>=0&&(r-o)*(a-v)-(i-o)*(n-v)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&M(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(S(e,t)&&S(t,e)&&function(e,t){var r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)&&(y(e.prev,e,t.prev)||y(e,t.prev,t))||m(e,t)&&y(e.prev,e,e.next)>0&&y(t.prev,t,t.next)>0)}function y(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function m(e,t){return e.x===t.x&&e.y===t.y}function M(e,t,r,n){var i=w(y(e,t,r)),a=w(y(e,t,n)),o=w(y(r,n,e)),v=w(y(r,n,t));return i!==a&&o!==v||(!(0!==i||!b(e,r,t))||(!(0!==a||!b(e,n,t))||(!(0!==o||!b(r,e,n))||!(0!==v||!b(r,t,n)))))}function b(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function w(e){return e>0?1:e<0?-1:0}function S(e,t){return y(e.prev,e,e.next)<0?y(e,t,e.next)>=0&&y(e,e.prev,t)>=0:y(e,t,e.prev)<0||y(e,e.next,t)<0}function Z(e,t){var r=new R(e.i,e.x,e.y),n=new R(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function A(e,t,r,n){var i=new R(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function z(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function R(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F(e,t,r,n){for(var i=0,a=t,o=r-n;a<r;a+=n)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function q(e,t,r){var n=t[0],i=t[1],a=r[0]-n,o=r[1]-i;if(0!==a||0!==o){var v=((e[0]-n)*a+(e[1]-i)*o)/(a*a+o*o);v>1?(n=r[0],i=r[1]):v>0&&(n+=a*v,i+=o*v)}return(a=e[0]-n)*a+(o=e[1]-i)*o}function P(e,t,r,n,i){for(var a,o=n,v=t+1;v<r;v++){var h=q(e[v],e[t],e[r]);h>o&&(a=v,o=h)}o>n&&(a-t>1&&P(e,t,a,n,i),i.push(e[a]),r-a>1&&P(e,a,r,n,i))}function V(e,t){var r=e.length-1,n=[e[0]];return P(e,0,r,t,n),n.push(e[r]),n}function B(e,t,r){if(e.length<=2)return e;var n=void 0!==t?t*t:1;return e=V(e=r?e:function(e,t){for(var r,n,i,a,o,v=e[0],h=[v],l=1,u=e.length;l<u;l++)r=e[l],i=v,a=void 0,o=void 0,a=(n=r)[0]-i[0],o=n[1]-i[1],a*a+o*o>t&&(h.push(r),v=r);return v!==r&&h.push(r),h}(e,n),n)}function L(e,t){return e[0]*t[0]+e[1]*t[1]}function U(e,t){var r=t[0],n=t[1],i=Math.sqrt(r*r+n*n);return e[0]=r/i,e[1]=n/i,e}function E(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function H(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function I(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function O(e,t){var r=t[0],n=t[1],i=t[2],a=Math.sqrt(r*r+n*n+i*i);return e[0]=r/a,e[1]=n/a,e[2]=i/a,e}function T(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],v=r[1],h=r[2];return e[0]=i*h-a*v,e[1]=a*o-n*h,e[2]=n*v-i*o,e}n.deviation=function(e,t,r,n){var i=t&&t.length,a=i?t[0]*r:e.length,o=Math.abs(F(e,0,a,r));if(i)for(var v=0,h=t.length;v<h;v++){var l=t[v]*r,u=v<h-1?t[v+1]*r:e.length;o-=Math.abs(F(e,l,u,r))}var f=0;for(v=0;v<n.length;v+=3){var s=n[v]*r,x=n[v+1]*r,c=n[v+2]*r;f+=Math.abs((e[s]-e[c])*(e[x+1]-e[s+1])-(e[s]-e[x])*(e[c+1]-e[s+1]))}return 0===o&&0===f?0:Math.abs((f-o)/o)},n.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)r.vertices.push(e[i][a][o]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},t.default=r;var W=[];function j(e,t,r,n){var i=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}(t,r),a=Math.acos(i)*n;return E(W,r,t,-i),function(e,t){var r=t[0],n=t[1],i=t[2],a=Math.sqrt(r*r+n*n+i*i);e[0]=r/a,e[1]=n/a,e[2]=i/a}(W,W),function(e,t,r){e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r}(e,t,Math.cos(a)),E(e,e,W,Math.sin(a)),e}function k(e,t,r,n,i,a,o,v,h,l){var u=o-i,f=v-a,s=(u*(t-a)-f*(e-i))/(f*(r-e)-u*(n-t));return h&&(h[l=l||0]=e+s*(r-e),h[l+1]=t+s*(n-t)),s}function _(e,t,r){if(r-t<3)return 0;for(var n=0,i=2*(r-1),a=2*t;a<2*r;){var o=e[i],v=e[i+1],h=e[a],l=e[a+1];i=a,a+=2,n+=o*l-h*v}return n}function D(e,r,n){return void 0===n&&(n=2),t(e,r,n)}var C=[],G=[],J=[];function K(e,t,r,n,i,a,o,v,h){var l,u,f,s=null!=o,x=i,c=null;s&&(c=new Uint32Array(n-r));for(var p=[],d=r;d<n;d++){var g=d===n-1?r:d+1,y=d===r?n-1:d-1,m=e[2*y],M=e[2*y+1],b=e[2*d],w=e[2*d+1],S=e[2*g],Z=e[2*g+1];C[0]=b-m,C[1]=w-M,G[0]=S-b,G[1]=Z-w,U(C,C),U(G,G),s&&(c[d]=x);var A=!1,z=void 0,R=void 0;if(v||d!==r)if(v||d!==n-1){H(J,G,C);var F=J[1];J[1]=-J[0],J[0]=F,U(J,J);var q=L(J,G),P=Math.sqrt(1-q*q),V=a*Math.min(10,1/P);if(s&&1/P>o&&a*q<0){var B=b+J[0]*a,E=w+J[1]*a,I=Math.acos(P)/2,O=Math.tan(I)*Math.abs(a);t[2*x]=B+J[1]*O,t[2*x+1]=E-J[0]*O,t[2*++x]=B-J[1]*O,t[2*x+1]=E+J[0]*O,x++}else z=b+J[0]*V,R=w+J[1]*V,A=!0;if(A){if(h&&null!=l){var T=k(m,M,l,u,b,w,z,R,p,0);T>=-.01&&T<=1.01&&(t[2*f]=z=p[0],t[2*f+1]=R=p[1])}l=t[2*x]=z,u=t[2*x+1]=R,f=x,x++}}else J[0]=C[1],J[1]=-C[0],U(J,J),z=b+J[0]*a,R=w+J[1]*a,A=!0;else J[0]=G[1],J[1]=-G[0],U(J,J),l=t[2*x]=b+J[0]*a,u=t[2*x+1]=w+J[1]*a,f=x,x++}return c}function N(e,t,r,n,i,a,o,v){var h=null!=o,l=i,u=null;h&&(u=new Uint32Array(n-r));for(var f=r;f<n;f++){var s=f===n-1?r:f+1,x=f===r?n-1:f-1,c=e[2*x],p=e[2*x+1],d=e[2*f],g=e[2*f+1],y=e[2*s],m=e[2*s+1];if(C[0]=d-c,C[1]=g-p,G[0]=y-d,G[1]=m-g,U(C,C),U(G,G),h&&(u[f]=l),v||f!==r)if(v||f!==n-1){H(J,G,C);var M=J[1];J[1]=-J[0],J[0]=M,U(J,J);var b=L(J,G),w=Math.sqrt(1-b*b),S=a*Math.min(10,1/w);if(h&&1/w>o&&a*b<0){var Z=d+J[0]*a,A=g+J[1]*a,z=Math.acos(w)/2,R=Math.tan(z)*Math.abs(a);t[2*l]=Z+J[1]*R,t[2*l+1]=A-J[0]*R,t[2*++l]=Z-J[1]*R,t[2*l+1]=A+J[0]*R,l++}else t[2*l]=d+J[0]*S,t[2*l+1]=g+J[1]*S,l++}else J[0]=C[1],J[1]=-C[0],U(J,J),t[2*l]=d+J[0]*a,t[2*l+1]=g+J[1]*a,l++;else J[0]=G[1],J[1]=-G[0],U(J,J),t[2*l]=d+J[0]*a,t[2*l+1]=g+J[1]*a,l++}return u}function Q(e,t,r,n,i){var a=null!=n?[]:new Float32Array(e.length);if(K(e,a,0,t&&t.length?t[0]:e.length/2,0,r,n,i,!0),t)for(var o=0;o<t.length;o++){var v=t[o];K(e,a,v,t[o+1]||e.length/2,null!=n?a.length/2:v,r,n,i,!1)}return a}function X(e,t,r,n){for(var i=0;i<Math.floor((n-r)/2);i++)for(var a=0;a<t;a++){var o=(i+r)*t+a,v=(n-i-1)*t+a,h=e[o];e[o]=e[v],e[v]=h}return e}function Y(e,t){var r=e.length/2,n=0,i=t&&t.length?t[0]:r;_(e,n,i)>0&&X(e,2,n,i);for(var a=1;a<(t?t.length:0)+1;a++)_(e,n=t[a-1],i=t[a]||r)<0&&X(e,2,n,i)}function $(e){e.depth=e.depth||1,e.bevelSize=e.bevelSize||0,e.bevelSegments=null==e.bevelSegments?2:e.bevelSegments,e.smoothBevel=e.smoothBevel||!1,e.simplify=e.simplify||0,null==e.smoothSide&&(e.smoothSide="auto"),null==e.smoothSideThreshold&&(e.smoothSideThreshold=.9),"number"==typeof e.depth&&(e.bevelSize=Math.min(e.bevelSegments>0?e.bevelSize:0,e.depth/2)),e.bevelSize>0||(e.bevelSegments=0),e.bevelSegments=Math.round(e.bevelSegments);var t=e.boundingRect;if(e.translate=e.translate||[0,0],e.scale=e.scale||[1,1],e.fitRect){var r=null==e.fitRect.x?t.x||0:e.fitRect.x,n=null==e.fitRect.y?t.y||0:e.fitRect.y,i=e.fitRect.width,a=e.fitRect.height;null==i?null!=a?i=a/t.height*t.width:(i=t.width,a=t.height):null==a&&(a=i/t.width*t.height),e.scale=[i/t.width,a/t.height],e.translate=[(r-t.x)*e.scale[0],(n-t.y)*e.scale[1]]}}var ee=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]];function te(e,t,r){for(var n=0,i=e[t],a=e[t+1],o=i,v=a,h=t+2;h<r;h+=2){var l=e[h],u=e[h+1];n+=Math.sqrt((l-i)*(l-i)+(u-a)*(u-a)),i=l,a=u}return n+=Math.sqrt((i-o)*(i-o)+(a-v)*(a-v))}function re(e,t,r,n,i,a){var o=t.vertices,v=t.topVertices,h=t.splittedMap,l=t.depth,u=t.rect,f=n-r,s=a.smoothBevel?1:2,x=Math.min(l/2,a.bevelSize),c=a.bevelSegments,p=i.vertex,d=i.ringPerimeter,g=Math.max(u.width,u.height,l,d);function y(e){var t=(e+1)%f,r=o[2*e],n=o[2*e+1],i=o[2*t],a=o[2*t+1];return r===i&&n===a}if(x>0)for(var m=[0,0,1],M=[],b=[0,0,-1],w=[],S=0,Z=new Float32Array(f),A=0;A<2;A++)for(var z=0===A?l-x:x,R=0;R<=c*s;R++){for(var F=0,q=void 0,P=void 0,V=0;V<f;V++){var B=2*(V%f+r),L=h?2*h[B/2]:B;M[0]=o[B]-v[L],M[1]=o[B+1]-v[L+1],M[2]=0;var U=Math.sqrt(M[0]*M[0]+M[1]*M[1]);M[0]/=U,M[1]/=U;var E=(Math.floor(R/s)+R%s)/c;0===A?j(w,m,M,E):j(w,M,b,E);var H=0===A?E:1-E,I=x*Math.sin(H*Math.PI/2),O=U*Math.cos(H*Math.PI/2),T=x*U/Math.sqrt(I*I+O*O),W=w[0]*T+v[L],k=w[1]*T+v[L+1],_=w[2]*T+z;if(e.position[3*i.vertex]=W,e.position[3*i.vertex+1]=k,e.position[3*i.vertex+2]=_,V>0&&(F+=Math.sqrt((q-W)*(q-W)+(P-k)*(P-k))),R>0||A>0){var D=3*(i.vertex-f),C=e.position[D],G=e.position[D+1],J=e.position[D+2];Z[V]+=Math.sqrt((C-W)*(C-W)+(G-k)*(G-k)+(J-_)*(J-_))}if(e.uv[2*i.vertex]=F/g,e.uv[2*i.vertex+1]=Z[V]/g,q=W,P=k,i.vertex++,!y(V)&&(s>1&&R%s||1===s&&R>=1))for(var K=0;K<6;K++){var N=(ee[K][0]+V)%f,Q=ee[K][1]+S;e.indices[i.index++]=(Q-1)*f+N+p}}S++}else for(var X=0;X<2;X++)for(var Y=0===X?l-x:x,$=0,te=void 0,re=void 0,ne=0;ne<f;ne++){var ie=2*(ne%f+r),ae=o[ie],oe=o[ie+1];e.position[3*i.vertex]=ae,e.position[3*i.vertex+1]=oe,e.position[3*i.vertex+2]=Y,ne>0&&($+=Math.sqrt((te-ae)*(te-ae)+(re-oe)*(re-oe))),e.uv[2*i.vertex]=$/g,e.uv[2*i.vertex+1]=Y/g,te=ae,re=oe,i.vertex++}for(var ve=x>0?c*s+1:1,he=0;he<f;he++)if(!y(he))for(var le=0;le<6;le++){var ue=(ee[le][0]+he)%f,fe=ee[le][1]+ve;e.indices[i.index++]=(fe-1)*f+ue+p}}function ne(e,t,r,n){var i=e.indices,a=e.topVertices,o=e.rect,v=e.depth;if(!(a.length<=4)){for(var h=r.vertex,l=i.length,u=0;u<l;u++)t.indices[r.index++]=h+i[u];for(var f=Math.max(o.width,o.height),s=0;s<(n.excludeBottom?1:2);s++)for(var x=0;x<a.length;x+=2){var c=a[x],p=a[x+1];t.position[3*r.vertex]=c,t.position[3*r.vertex+1]=p,t.position[3*r.vertex+2]=(1-s)*v,t.uv[2*r.vertex]=(c-o.x)/f,t.uv[2*r.vertex+1]=(p-o.y)/f,r.vertex++}if(!n.excludeBottom)for(var d=a.length/2,g=0;g<l;g+=3)for(var y=0;y<3;y++)t.indices[r.index++]=h+d+i[g+2-y]}}function ie(e,t,r,n){var i=null==r||"auto"===r;if(!0===r)return{vertices:e,holes:t};for(var a=[],o=t&&[],v=e.length/2,h=[],l=[],u=[],f=0,s=0,x=(t?t.length:0)+1,c=0;c<x;c++){0===c?s=t&&t.length?t[0]:v:(f=t[c-1],s=t[c]||v);for(var p=f;p<s;p++){var d=e[2*p],g=e[2*p+1],y=p===s-1?f:p+1,m=e[2*y],M=e[2*y+1];if(i){var b=p===f?s-1:p-1,w=e[2*b],S=e[2*b+1];h[0]=w-d,h[1]=S-g,l[0]=m-d,l[1]=M-g,U(h,h),U(l,l),1-(.5*L(h,l)+.5)>n?(a.push(d,g),u.push(p)):(a.push(d,g,d,g),u.push(p,p))}else a.push(d,g,d,g),u.push(p,p)}c<x-1&&o&&o.push(a.length/2)}return{vertices:new Float32Array(a),splittedMap:u,holes:o}}function ae(e,t){for(var r=0,n=0,i=0;i<e.length;i++){var a=e[i],o=a.indices,v=a.vertices,h=a.splittedMap,l=a.topVertices,u=a.depth,f=Math.min(u/2,t.bevelSize)>0?t.bevelSegments:0,s=e[i].holes||[];r+=o.length*(t.excludeBottom?1:2),n+=l.length/2*(t.excludeBottom?1:2);for(var x=2+2*f,c=0,p=0,d=0;d<s.length+1;d++){0===d?p=s.length?s[0]:v.length/2:(c=s[d-1],p=s[d]||v.length/2),r+=6*((h?h[p-1]+1:p)-(h?h[c]:c))*(x-1);var g=p-c;n+=g*x+(t.smoothBevel?0:f*g*2)}}for(var y={position:new Float32Array(3*n),indices:new(n>65535?Uint32Array:Uint16Array)(r),uv:new Float32Array(2*n)},m={vertex:0,index:0,ringPerimeter:0},M=0;M<e.length;M++)ne(e[M],y,m,t);for(var b=0;b<e.length;b++){var w=e[b],S=w.holes,Z=w.vertices.length/2,A=0,z=S&&S.length?S[0]:Z;if(m.ringPerimeter=te(e[b].topVertices,A,z),re(y,e[b],A,z,m,t),S)for(var R=0;R<S.length;R++)A=S[R],z=S[R+1]||Z,m.ringPerimeter=te(e[b].topVertices,A,z),re(y,e[b],A,z,m,t)}for(var F=0;F<y.uv.length;F++){var q=y.uv[F];q>0&&Math.round(q)===q?y.uv[F]=1:y.uv[F]=q%1}return y.normal=function(e,t){function r(e,t,r,n){e[0]=t,e[1]=r,e[2]=n}for(var n=[],i=[],a=[],o=[],v=[],h=[],l=e.length,u=new Float32Array(t.length),f=0;f<l;){var s=3*e[f++],x=3*e[f++],c=3*e[f++];r(n,t[s],t[s+1],t[s+2]),r(i,t[x],t[x+1],t[x+2]),r(a,t[c],t[c+1],t[c+2]),I(o,n,i),I(v,i,a),T(h,o,v);for(var p=0;p<3;p++)u[s+p]=u[s+p]+h[p],u[x+p]=u[x+p]+h[p],u[c+p]=u[c+p]+h[p]}for(var d=0;d<u.length;)r(h,u[d],u[d+1],u[d+2]),O(h,h),u[d++]=h[0],u[d++]=h[1],u[d++]=h[2];return u}(y.indices,y.position),y.boundingRect=e[0]&&e[0].rect,y}function oe(e,t,r){for(var n=r.lineWidth,i=e.length,a=new Float32Array(2*i),o=r.translate||[0,0],v=r.scale||[1,1],h=0,l=0;h<i;h++)a[l++]=e[h][0]*v[0]+o[0],a[l++]=e[h][1]*v[1]+o[1];_(a,0,i)<0&&X(a,2,0,i);var u=[],f=[],s=r.miterLimit,x=N(a,f,0,i,0,-n/2,s,!1);X(a,2,0,i);for(var c=N(a,u,0,i,0,-n/2,s,!1),p=(u.length+f.length)/2,d=new Float32Array(2*p),g=0,y=f.length/2,m=0;m<f.length;m++)d[g++]=f[m];for(var M=0;M<u.length;M++)d[g++]=u[M];for(var b=new(p>65535?Uint32Array:Uint16Array)(3*(2*(i-1)+(p-2*i))),w=0,S=0;S<i-1;S++){var Z=S+1;b[w++]=y-1-x[S],b[w++]=y-1-x[S]-1,b[w++]=c[S]+1+y,b[w++]=y-1-x[S],b[w++]=c[S]+1+y,b[w++]=c[S]+y,c[Z]-c[S]==2?(b[w++]=c[S]+2+y,b[w++]=c[S]+1+y,b[w++]=y-x[Z]-1):x[Z]-x[S]==2&&(b[w++]=c[Z]+y,b[w++]=y-1-(x[S]+1),b[w++]=y-1-(x[S]+2))}var A=r.bevelSize>0?Q(d,[],r.bevelSize,null,!0):d,z=r.boundingRect,R=ie(d,null,r.smoothSide,r.smoothSideThreshold);return{vertices:R.vertices,rawVertices:A,splittedMap:R.splittedMap,indices:b,topVertices:A,rect:{x:z.x*v[0]+o[0],y:z.y*v[1]+o[1],width:z.width*v[0],height:z.height*v[1]},depth:"function"==typeof r.depth?r.depth(t):r.depth,holes:[]}}function ve(e,t){for(var r=[],n=0;n<e.length;n++){for(var i=e[n],a=[],o=i.length,v=i[o-1][0],h=i[o-1][1],l=0,u=0;u<o;u++){var f=i[u][0],s=i[u][1],x=f-v,c=s-h;(l+=Math.sqrt(x*x+c*c))>t&&(a.push(i[u]),l=0),v=f,h=s}a.length>=3&&r.push(a)}return r.length>0?r:null}function he(e,t){for(var r=[],n=0;n<e.length;n++){var i=e[n];(i=B(i,t,!0)).length>=3&&r.push(i)}return r.length>0?r:null}function le(e,t,r){for(var n=0;n<e.length;n++)t[0]=Math.min(e[n][0],t[0]),t[1]=Math.min(e[n][1],t[1]),r[0]=Math.max(e[n][0],r[0]),r[1]=Math.max(e[n][1],r[1])}var ue={x:0,y:0},fe={x:0,y:0};function se(e,t,r,n){for(var i=e.length,a=0;a<i;a++){var o=e[a].data;t=e[a].center||t;for(var v=0,h=o.length;v<h;v++)for(var l=o[v],u=0,f=l.length;u<f;u++)e[a].data[v][u]=xe(l[u],t,r,n)}}function xe(e,t,r,n){for(var i=new Float32Array(e),a=[],o=0,v=i.length;o<v;o+=2){var h=i[o],l=i[o+1];if(t&&r&&n){ue.x=h,ue.y=l;var u=be(ue,fe);ue.x=u.x,ue.y=u.y,h=(u=we(n,ue,r,fe)).x,l=u.y,h-=t[0],l-=t[1]}a.push([h,l])}return a}function ce(e,t){void 0===t&&(t=!1);for(var r=e.length,n=[],i=[],a=[],o=0,v=0,h=0,l=0,u=0;u<r;u++){var f=t?de(e[u]):pe(e[u]),s=e[u].bottomHeight||0,x=f.position,c=f.normal,p=f.uv,d=f.indices;i.push(f);var g=d.length/3;a[u]=[o+1,o+g],o+=g;var y=x.length/3,m=c.length/3,M=p.length/2;n[u]={position:{middleZ:s+(e[u].height||0)/2,count:y,start:v,end:v+3*y},normal:{count:m,start:h,end:h+3*m},uv:{count:M,start:l,end:l+2*M},hide:!1},v+=3*y,h+=3*m,l+=2*M}var b=function(e){for(var t={},r={},n=0;n<e.length;++n){var i=e[n];for(var a in i)void 0===t[a]&&(t[a]=[],r[a]=0),t[a].push(i[a]),r[a]+=i[a].length}var o={},v=0,h=[];for(var l in t)if("indices"===l)for(var u=t[l],f=0,s=u.length;f<s;f++){for(var x=u[f],c=0,p=x.length;c<p;c++)h.push(x[c]+v);v+=t.position[f].length/3}else{var d=ge(t[l],r[l]);if(!d)return null;o[l]=d}return o.indices=new Uint32Array(h),o}(i),w=b.position,S=b.normal,Z=b.uv,A=b.indices;return{position:w.buffer,normal:S.buffer,uv:Z.buffer,indices:A.buffer,faceMap:a,geometriesAttributes:n}}function pe(e){var r=e.data,n=e.height,i=e.bottomHeight,a=function(e,r){r=Object.assign({},r);for(var n=[1/0,1/0],i=[-1/0,-1/0],a=0;a<e.length;a++)le(e[a][0],n,i);r.boundingRect=r.boundingRect||{x:n[0],y:n[1],width:i[0]-n[0],height:i[1]-n[1]},$(r);for(var o=[],v=r.translate||[0,0],h=r.scale||[1,1],l=r.boundingRect,u={x:l.x*h[0]+v[0],y:l.y*h[1]+v[1],width:l.width*h[0],height:l.height*h[1]},f=Math.min(l.width,l.height)/1e5,s=0;s<e.length;s++){var x=ve(e[s],f);if(x){var c=r.simplify/Math.max(h[0],h[1]);if(c>0&&(x=he(x,c)),x){for(var p=t.flatten(x),d=p.vertices,g=p.holes,y=p.dimensions,m=0;m<d.length;)d[m]=d[m++]*h[0]+v[0],d[m]=d[m++]*h[1]+v[1];if(Y(d,g),2!==y)throw new Error("Only 2D polygon points are supported");var M=r.bevelSize>0?Q(d,g,r.bevelSize,null,!0):d,b=D(M,g,y),w=ie(d,g,r.smoothSide,r.smoothSideThreshold);o.push({indices:b,vertices:w.vertices,rawVertices:d,topVertices:M,holes:w.holes,splittedMap:w.splittedMap,rect:u,depth:"function"==typeof r.depth?r.depth(s):r.depth})}}}return ae(o,r)}(r,{depth:n}),o=a.position,v=a.normal,h=a.uv,l=a.indices;return ye(o,i),{position:o,normal:v,uv:h,indices:l}}function de(e){var t=e.data,r=e.height,n=e.width,i=e.bottomHeight,a=function(e,t){t=Object.assign({},t);for(var r=[1/0,1/0],n=[-1/0,-1/0],i=0;i<e.length;i++)le(e[i],r,n);t.boundingRect=t.boundingRect||{x:r[0],y:r[1],width:n[0]-r[0],height:n[1]-r[1]},$(t);var a=t.scale||[1,1];null==t.lineWidth&&(t.lineWidth=1),null==t.miterLimit&&(t.miterLimit=2);for(var o=[],v=0;v<e.length;v++){var h=e[v],l=t.simplify/Math.max(a[0],a[1]);l>0&&(h=B(h,l,!0)),o.push(oe(h,v,t))}return ae(o,t)}(t,{lineWidth:n,depth:r}),o=a.position,v=a.normal,h=a.uv,l=a.indices;return ye(o,i),{position:o,normal:v,uv:h,indices:l}}function ge(e,t){for(var r=new Float32Array(t),n=0,i=0;i<e.length;++i)r.set(e[i],n),n+=e[i].length;return r}function ye(e,t){if(void 0!==t&&"number"==typeof t&&0!==t)for(var r=0,n=e.length;r<n;r+=3)e[r+2]+=t}var me=Math.PI/180,Me=6378137*Math.PI/180;function be(e,t){var r,n=85.0511287798,i=e.x,a=Math.max(Math.min(n,e.y),-n);r=0===a?0:Math.log(Math.tan((90+a)*me/2))/me;var o=i*Me,v=r*Me;return t?(t.x=o,t.y=v,t):{x:o,y:v}}function we(e,t,r,n){var i=e[0]*(t.x-e[2])/r,a=-e[1]*(t.y-e[3])/r;return n?(n.x=i,n.y=a,n):{x:i,y:a}}function Se(e){void 0===e&&(e=[]);for(var t=e.length,r=new Float32Array(3*t),n=0;n<t;n++){var i=e[n],a=3*n;r[a]=i[0],r[a+1]=i[1]}return r}function Ze(e){for(var t=new Float32Array(2*e.length-6),r=0,n=0,i=e.length/3;n<i;n++){var a=e[3*n],o=e[3*n+1],v=e[3*n+2];if(n>0&&n<i-1){var h=3*r;t[h]=a,t[h+1]=o,t[h+2]=v,r++}var l=3*r;t[l]=a,t[l+1]=o,t[l+2]=v,r++}return t}function Ae(e){var t=0,r=e.length;if(1===r)return e[0];for(var n=0;n<r;n++)t+=e[n].length;for(var i=new Float32Array(t),a=0,o=0;o<r;o++)i.set(e[o],a),a+=e[o].length;return i}e.initialize=function(){},e.onmessage=function(e,t){var r=e.data,n=r.type,i=r.datas,a=r.glRes,o=r.matrix,v=r.center;if("ExtrudePolygons"===n){se(i,v,a,o);var h=ce(i);t(null,h,[h.position,h.normal,h.uv,h.indices])}else if("ExtrudeLines"===n){for(var l=0,u=i.length;l<u;l++)for(var f=0,s=i[l].data.length;f<s;f++)i[l].data[f]=xe(i[l].data[f]);var x=ce(i,!0);t(null,x,[x.position,x.normal,x.uv,x.indices])}else if("ExtrudePolygon"===n){var c=[],p=[];i.forEach((function(e){var t=[e];se(t,v,a,o);var r=ce(t),n=r.position,i=r.normal,h=r.uv,l=r.indices;c.push({id:e.id,position:n,normal:i,uv:h,indices:l}),p.push(n,i,h,l)})),t(null,c,p)}else if("Line"===n||"FatLine"===n){for(var d=[],g=[],y=0,m=i.length;y<m;y++){for(var M=[],b=0,w=i[y].data.length;b<w;b++){i[y].data[b]=xe(i[y].data[b],i[y].center||v,a,o);var S=Se(i[y].data[b]);M.push(Ze(S))}var Z=Ae(M);ye(Z,i[y].bottomHeight),d.push({id:i[y].id,position:Z.buffer}),g.push(Z.buffer)}t(null,d,g)}else if("Lines"===n){for(var A=0,z=[],R=[],F=0,q=[],P=0,V=i.length;P<V;P++){for(var B=0,L=0,U=i[P].data.length;L<U;L++){i[P].data[L]=xe(i[P].data[L],i[P].center||v,a,o);var E=Se(i[P].data[L]);ye(E,i[P].bottomHeight),B+=E.length/3*2-2,q.push(Ze(E))}var H=B;z[P]=[A,A+H],A+=H,R[P]={position:{count:B,start:F,end:F+3*B},hide:!1},F+=3*B}var I=Ae(q);t(null,{id:i.id,position:I.buffer,geometriesAttributes:R,faceMap:z},[I.buffer])}},Object.defineProperty(e,"__esModule",{value:!0})})`;
const workerName = '__maptalks.three__';

export function getWorkerName() {
    return workerName;
}

export function getWorkerCode() {
    return workerCode;
}
