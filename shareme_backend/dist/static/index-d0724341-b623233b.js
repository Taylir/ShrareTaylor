import{s as _,av as j,h as g,P as w,cp as B,j as a,ae as L,co as O,a9 as T,aJ as S,af as A,b as D,a0 as W,Y as z}from"./sanity-45a5387d.js";import{P as C}from"./PaneItem-5ece3d70-53e7069b.js";import{useDeskTool as G}from"./index-6c71f0c1-4fc0cf07.js";import"./index-92407164.js";var r;function H(o,t){return t||(t=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(t)}}))}const Y=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(o){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=o,{features:h}=G(),{collapsed:m}=j(),{defaultLayout:v,displayOptions:c,items:i,menuItems:y,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var n;const s=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:y,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:m?void 0:"auto",children:a(W,{padding:2,space:1,children:i&&i.map((e,n)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(Y,{})},"divider-".concat(n));const s=!d&&t===e.id,x=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:v,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{M as default};
