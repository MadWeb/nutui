import{c as t}from"./mobile.70c3a3a4.js";import{s as e,x as a,r as s,o as d,c as o,f as r,q as l}from"./vendor.91b30fe3.js";import"./index.644dcea4.js";const{createDemo:p}=t("drag");var i=p({setup(){}});const c=l("data-v-525254d4");e("data-v-525254d4");const n={class:"demo full"},x=r("h2",null,"基础用法",-1),f=r("div",{class:"drag-demo"},"触摸移动",-1),m=r("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),v=r("div",{class:"drag-demo"},"只能X轴拖拽",-1),u=r("div",{class:"drag-demo"},"只能Y轴拖拽",-1),g=r("h2",{style:{top:"70px",position:"relative"}},"自动吸边",-1),y=r("div",{class:"drag-demo"},"拖动我",-1);a();const _=c(((t,e,a,l,p,i)=>{const _=s("nut-drag");return d(),o("div",n,[x,r(_,{style:{top:"100px",left:"8px"}},{default:c((()=>[f])),_:1}),m,r(_,{direction:"x",style:{top:"200px",left:"8px"}},{default:c((()=>[v])),_:1}),r(_,{direction:"y",style:{top:"200px",right:"50px"}},{default:c((()=>[u])),_:1}),g,r(_,{direction:"x",attract:!0,style:{top:"300px",left:"8px"}},{default:c((()=>[y])),_:1})])}));i.render=_,i.__scopeId="data-v-525254d4";export default i;