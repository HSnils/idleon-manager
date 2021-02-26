(this["webpackJsonpidleon-manager"]=this["webpackJsonpidleon-manager"]||[]).push([[6],{150:function(e,a,n){"use strict";var r;n.d(a,"a",(function(){return r})),function(e){e.BEGINNER="Beginner",e.JOURNEYMAN="Journeyman",e.WARRIOR="Warrior",e.BARBARIAN="Barbarian",e.SQUIRE="Squire",e.ARCHER="Archer",e.BOWMAN="Bowman",e.HUNTER="Hunter",e.MAGE="Mage",e.WIZARD="Wizard",e.SHAMAN="Shaman"}(r||(r={}))},336:function(e,a,n){"use strict";n.r(a),n.d(a,"CharacterUpdate",(function(){return k}));var r=n(136),t=n(328),c=(n(0),n(170)),i=n(135),l=n(327),u=n(326),s=n(329),d=n(56),o=n(150),b=n(171),j=n(200),m=n(337),v=n(2),h=function(e){var a=e.name,n=Object(j.a)(e,["name"]);return Object(v.jsx)(c.a,{name:a,children:function(e){var a=e.field;return Object(v.jsx)(m.a,Object(b.a)(Object(b.a)({},n),a))}})};h.defaultProps={variant:"filled"};var f=n(5),O=n(68),x=function(e){var a=Object(d.b)(),n=Object(f.g)();return function(r){a(e?O.a.updateCharacter(Object(b.a)(Object(b.a)({},e),r)):O.a.addCharacter(p(r))),n.push("/")}},p=function(e){return{slot:e.slot,name:e.name,level:e.level,defence:e.defence,accuracy:e.accuracy,classType:e.classType}},y=function(e){var a=Object(d.b)(),n=Object(f.g)();return function(){e&&(a(O.a.removeCharacter(e)),n.push("/"))}},A=n(332),N=n(340),T=n(334),g=n(341),R=function(e){var a=e.id,n=e.name,r=e.options,t=e.label,i=Object(j.a)(e,["id","name","options","label"]);return Object(v.jsx)(c.a,{name:n,children:function(e){var n=e.field;return Object(v.jsxs)(A.a,{children:[Object(v.jsx)(N.a,{id:"".concat(a,"-select-label"),children:t}),Object(v.jsx)(T.a,Object(b.a)(Object(b.a)(Object(b.a)({},i),n),{},{labelId:"".concat(a,"-select-label"),children:r.map((function(e){return Object(v.jsx)(g.a,{value:e.value,children:e.label},e.value)}))}))]})}})};R.defaultProps={variant:"filled"};var C=n(312),q=function(e){return!!e&&e>0},E="Can't be less than 1",B={slot:C.b().required("Character slot is required").test("minimum",E,q),name:C.d().required("Name is required").test("minLenght","Name has to be atleast one character",(function(e){return!!e&&e.length>0})),level:C.b().required("Level is required").test("minimum",E,q),defence:C.b().required("Defence is required").test("minimum",E,q),accuracy:C.b().required("Accuracy is required").test("minimum",E,q),classType:C.a().oneOf(Object.values(o.a))},I=function(){return C.c(B).defined()};function S(e,a){return a.submitCount>0||a.touched[e]?a.errors[e]:void 0}var W=function(e){var a=e.character,n=x(a),r=y(a),t=Object(d.c)((function(e){return e.characters})).characters;return Object(v.jsx)(i.a,{maxWidth:"sm",children:Object(v.jsx)(l.a,{style:{padding:16},children:Object(v.jsx)(c.c,{initialValues:D(a,t),validationSchema:I,onSubmit:n,children:function(e){return Object(v.jsxs)(c.b,{children:[Object(v.jsxs)(u.a,{container:!0,alignItems:"flex-start",spacing:2,children:[Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(h,{id:"slot",name:"slot",label:"Character slot",type:"number",error:M("slot",e),helperText:S("slot",e)})}),Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(h,{id:"name",name:"name",label:"Name",disabled:void 0!==(null===a||void 0===a?void 0:a.name),error:M("name",e),helperText:S("name",e)})}),Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(R,{id:"classType",name:"classType",label:"Class",options:U(),error:M("classType",e)})}),Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(h,{id:"level",name:"level",label:"Level",type:"number",error:M("level",e),helperText:S("level",e)})}),Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(h,{id:"defence",name:"defence",label:"Defence",type:"number",error:M("defence",e),helperText:S("defence",e)})}),Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(h,{id:"accuracy",name:"accuracy",label:"Accuracy",type:"number",error:M("accuracy",e),helperText:S("accuracy",e)})})]}),Object(v.jsx)("br",{}),Object(v.jsx)(s.a,{variant:"contained",color:"primary",type:"submit",children:a?"Update":"Add"}),a&&Object(v.jsx)(s.a,{variant:"text",color:"secondary",type:"button",onClick:r,children:"Delete"})]})}})})})},M=function(e,a){return void 0!==S(e,a)},U=function(){return Object.values(o.a).map((function(e){return{value:e,label:e}}))};function D(e,a){var n,r,t,c,i;return{slot:H(a,e),name:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:"",level:null!==(r=null===e||void 0===e?void 0:e.level)&&void 0!==r?r:"",defence:null!==(t=null===e||void 0===e?void 0:e.defence)&&void 0!==t?t:"",accuracy:null!==(c=null===e||void 0===e?void 0:e.accuracy)&&void 0!==c?c:"",classType:null!==(i=null===e||void 0===e?void 0:e.classType)&&void 0!==i?i:o.a.BEGINNER}}W.defaultProps={character:void 0};function H(e,a){return a?e.findIndex((function(e){return e.name===a.name}))+1:e.length+1}var J=function(){var e=Object(f.h)().characterName;return Object(d.c)((function(e){return e.characters})).characters.find((function(a){return a.name===e}))},k=function(){var e=J();return Object(v.jsxs)(r.a,{children:[Object(v.jsx)(t.a,{variant:"h1",gutterBottom:!0,children:e?"Edit ".concat(e.name):"Add Character"}),Object(v.jsx)(W,{character:e})]})};a.default=k}}]);
//# sourceMappingURL=6.5a01778f.chunk.js.map