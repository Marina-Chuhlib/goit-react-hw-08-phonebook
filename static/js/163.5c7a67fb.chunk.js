(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[163],{6163:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(9434),o=t(8404),i=t(1413),a=t(2791),u=t(4942),l=t(9439),c=function(e){var n=e.initialState,t=e.onSubmit,r=(0,a.useState)((0,i.Z)({},n)),o=(0,l.Z)(r,2),c=o[0],s=o[1],d=(0,a.useCallback)((function(e){var n=e.target,t=n.name,r=n.value;s((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,u.Z)({},t,r))}))}),[s]);return{state:c,setState:s,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,i.Z)({},c)),console.log(c,"state")}}},s=t(4911),d=t(427),f=t(6538),m=t(184),v=(0,f.ZP)(s.Z)((function(e){return{color:e.theme.palette.getContrastText(d.Z[200]),backgroundColor:d.Z[200],"&:hover":{backgroundColor:d.Z[300]}}})),h=function(e){var n=e.children,t=e.type,r=void 0===t?"submit":t,o=e.endIcon;return(0,m.jsx)(v,{variant:"contained",type:r,endIcon:o,children:n})},p=t(1961),g=t(5844),Z={name:"",email:"",password:""},S={name:{type:"text",name:"name",required:!0,label:"Name:",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"Email:",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"Password:",placeholder:"User password"}},x="RegisterForm_title__XvlH+",w="RegisterForm_form__Rm9pY",b=function(e){var n=e.onSubmit,t=c({initialState:Z,onSubmit:n}),r=t.state,o=t.handleChange,a=t.handleSubmit;console.log(r,"RegisterForm");var u=r.name,l=r.email,s=r.password;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:x,children:"New user registration"}),(0,m.jsxs)("form",{onSubmit:a,className:w,children:[(0,m.jsx)(g.Z,(0,i.Z)({value:u,handleChange:o},S.name)),(0,m.jsx)(g.Z,(0,i.Z)({value:l,handleChange:o},S.email)),(0,m.jsx)(g.Z,(0,i.Z)({value:s,handleChange:o},S.password)),(0,m.jsx)(h,{endIcon:(0,m.jsx)(p.Z,{}),children:"Register"})]})]})},_=function(){var e=(0,r.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(b,{onSubmit:function(n){e((0,o.I)(n))}})})}},5844:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(1413),o=t(5987),i=t(2791),a=t(5984),u="TextField_wrapper__OQN5w",l="TextField_label__PQj1k",c="TextField_input__Oi20a",s=t(184),d=["label","handleChange"],f=function(e){var n=e.label,t=e.handleChange,f=(0,o.Z)(e,d),m=(0,i.useMemo)((function(){return(0,a.x0)()}),[]);return(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("label",{htmlFor:m,className:l,children:n}),(0,s.jsx)("input",(0,r.Z)((0,r.Z)({id:m,onChange:t},f),{},{className:c}))]})}},1961:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");n.Z=a},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(3519)},3519:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return b},debounce:function(){return _},deprecatedPropType:function(){return y},isMuiElement:function(){return C},ownerDocument:function(){return z},ownerWindow:function(){return I},requirePropFactory:function(){return R},setRef:function(){return N},unstable_ClassNameGenerator:function(){return q},unstable_useEnhancedEffect:function(){return k},unstable_useId:function(){return P},unsupportedProp:function(){return E},useControlled:function(){return B},useEventCallback:function(){return A.Z},useForkRef:function(){return V.Z},useIsFocusVisible:function(){return O.Z}});var r=t(5902),o=t(4036);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},a=t(7462),u=t(2791),l=t.t(u,2),c=t(3366),s=t(8182),d=t(4419),f=t(2507),m=t(6538),v=t(5878),h=t(1217);function p(e){return(0,h.Z)("MuiSvgIcon",e)}(0,v.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(184),Z=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],S=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,u,l,c,s,d,f,m,v,h,p,g,Z=e.theme,S=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=Z.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=Z.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=Z.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=Z.typography)||null==(l=u.pxToRem)?void 0:l.call(u,24))||"1.5rem",large:(null==(c=Z.typography)||null==(s=c.pxToRem)?void 0:s.call(c,35))||"2.1875rem"}[S.fontSize],color:null!=(d=null==(f=(Z.vars||Z).palette)||null==(m=f[S.color])?void 0:m.main)?d:{action:null==(v=(Z.vars||Z).palette)||null==(h=v.action)?void 0:h.active,disabled:null==(p=(Z.vars||Z).palette)||null==(g=p.action)?void 0:g.disabled,inherit:void 0}[S.color]}})),x=u.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,i=t.className,u=t.color,l=void 0===u?"inherit":u,m=t.component,v=void 0===m?"svg":m,h=t.fontSize,x=void 0===h?"medium":h,w=t.htmlColor,b=t.inheritViewBox,_=void 0!==b&&b,y=t.titleAccess,C=t.viewBox,j=void 0===C?"0 0 24 24":C,z=(0,c.Z)(t,Z),I=(0,a.Z)({},t,{color:l,component:v,fontSize:x,instanceFontSize:e.fontSize,inheritViewBox:_,viewBox:j}),R={};_||(R.viewBox=j);var N=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,d.Z)(i,p,r)}(I);return(0,g.jsxs)(S,(0,a.Z)({as:v,className:(0,s.Z)(N.root,i),focusable:"false",color:w,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:n},R,z,{ownerState:I,children:[r,y?(0,g.jsx)("title",{children:y}):null]}))}));x.muiName="SvgIcon";var w=x;function b(e,n){function t(t,r){return(0,g.jsx)(w,(0,a.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))}return t.muiName=w.muiName,u.memo(u.forwardRef(t))}var _=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r};var y=function(e,n){return function(){return null}};var C=function(e,n){return u.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function j(e){return e&&e.ownerDocument||document}var z=j;var I=function(e){return j(e).defaultView||window};var R=function(e,n){return function(){return null}},N=t(2971).Z,k=t(5721).Z,F=t(9439),T=0;var M=l.useId;var P=function(e){if(void 0!==M){var n=M();return null!=e?e:n}return function(e){var n=u.useState(e),t=(0,F.Z)(n,2),r=t[0],o=t[1],i=e||r;return u.useEffect((function(){null==r&&o("mui-".concat(T+=1))}),[r]),i}(e)};var E=function(e,n,t,r,o){return null};var B=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,u.useRef(void 0!==n).current),o=u.useState(t),i=(0,F.Z)(o,2),a=i[0],l=i[1];return[r?n:a,u.useCallback((function(e){r||l(e)}),[])]},A=t(6868),V=t(4843),O=t(3031),q={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=163.5c7a67fb.chunk.js.map