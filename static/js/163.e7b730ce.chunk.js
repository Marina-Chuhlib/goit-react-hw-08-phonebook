"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[163],{3163:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r=e(9434),a=e(5985),u=e(8192),o=e(4942),i=e(1413),c=e(9439),s=e(2791),l=e(6467),f={name:"",number:""},p="ContactForm_wrapper__STlvB",m="ContactForm_form__Z4FtV",v="ContactForm_title__oju0S",d="ContactForm_input__LcR2n",h="ContactForm_button__1TN1r",_=e(3329),y=function(){var n=(0,s.useState)((0,i.Z)({},f)),t=(0,c.Z)(n,2),e=t[0],a=t[1],u=(0,r.I0)();(0,s.useEffect)((function(){u((0,l.CL)())}),[u]);var y=function(n){var t=n.target,e=t.name,r=t.value;a((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,o.Z)({},e,r))}))},b=e.name,x=e.number;return(0,_.jsx)("div",{className:p,children:(0,_.jsxs)("form",{className:m,onSubmit:function(n){n.preventDefault(),u((0,l.v6)({name:b,number:x})),a((0,i.Z)({},f))},children:[(0,_.jsxs)("label",{className:v,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",value:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:y,className:d})]}),(0,_.jsxs)("label",{className:v,children:["Number",(0,_.jsx)("input",{type:"tel",name:"number",value:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:y,className:d})]}),(0,_.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})})},b="NOT_FOUND";var x=function(n,t){return n===t};function j(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,a=void 0===r?x:r,u=e.maxSize,o=void 0===u?1:u,i=e.resultEqualityCheck,c=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!n(t[a],e[a]))return!1;return!0}}(a),s=1===o?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:b},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var a=e[r];return r>0&&(e.splice(r,1),e.unshift(a)),a.value}return b}return{get:r,put:function(t,a){r(t)===b&&(e.unshift({key:t,value:a}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(o,c);function l(){var t=s.get(arguments);if(t===b){if(t=n.apply(null,arguments),i){var e=s.getEntries(),r=e.find((function(n){return i(n.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function C(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function g(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?e:l,p=Array.isArray(f)?f:[f],m=C(r),v=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],t=m.length,e=0;e<t;e++)n.push(m[e].apply(null,arguments));return u=v.apply(null,n)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),d};return a}var N=g(j),k=function(n){return n.filter},w=N([k,function(n){return n.contacts.items}],(function(n,t){var e=n.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))})),F="ContactsList_list__8JvuZ",A="ContactsList_item__vCJts",Z="ContactsList_contact__Z7VvL",L="ContactsList_number__F75HI",z="ContactsList_button__oiqXr",E=function(){var n=(0,r.v9)(w),t=(0,r.I0)(),e=n.map((function(n){var e=n.id,r=n.name,u=n.number;return(0,_.jsxs)("li",{className:A,children:[(0,_.jsxs)("p",{className:Z,children:[r,": ",(0,_.jsx)("span",{className:L,children:u})," "]}),(0,_.jsx)("button",{type:"button",className:z,onClick:function(){return function(n){t((0,l.in)(n)),a.Am.error("Contact deleted")}(e)},children:"Delete"})]},e)}));return(0,_.jsx)("ul",{className:F,children:e})},S=e(5653),q="Filter_title__aVV9p",I="Filter_input__WjkHa",O=function(){var n=(0,r.v9)(k),t=(0,r.I0)();return(0,_.jsxs)("label",{className:q,children:["Find contact by name",(0,_.jsx)("input",{type:"text",className:I,value:n,onChange:function(n){var e=n.target;t((0,S.T)(e.value))}})]})},R=function(){var n=Boolean((0,r.v9)(w).length),t=(0,r.v9)((function(n){return n.contacts.isLoading}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{children:"Phonebook"}),(0,_.jsx)(y,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(O,{}),t&&(0,_.jsx)(u.Z,{}),n&&(0,_.jsx)(E,{}),!n&&!t&&(0,_.jsx)("p",{children:"No contacts in list"}),(0,_.jsx)(a.Ix,{autoClose:1500,position:"top-center"})]})},T=function(){return(0,_.jsx)(R,{})}}}]);
//# sourceMappingURL=163.e7b730ce.chunk.js.map