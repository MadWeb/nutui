var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-88f51942{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-88f51942{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-88f51942],.nutFade-leave-active[data-v-88f51942],.nutFadeIn[data-v-88f51942],.nutFadeOut[data-v-88f51942]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-88f51942],.nutFadeIn[data-v-88f51942]{animation-name:nutFadeIn-88f51942}.nutFade-leave-active[data-v-88f51942],.nutFadeOut[data-v-88f51942]{animation-name:nutFadeOut-88f51942}@keyframes nutZoomIn-88f51942{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-88f51942{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-88f51942],.nutZoom-leave-active[data-v-88f51942],.nutZoomIn[data-v-88f51942],.nutZoomOut[data-v-88f51942]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-88f51942],.nutZoomIn[data-v-88f51942]{animation-name:nutZoomIn-88f51942}.nutZoom-leave-active[data-v-88f51942],.nutZoomOut[data-v-88f51942]{animation-name:nutZoomOut-88f51942}@keyframes nutEaseIn-88f51942{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-88f51942{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-88f51942],.nutEase-leave-active[data-v-88f51942],.nutEaseIn[data-v-88f51942],.nutEaseOut[data-v-88f51942]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-88f51942],.nutEaseIn[data-v-88f51942]{animation-name:nutEaseIn-88f51942}.nutEase-leave-active[data-v-88f51942],.nutEaseOut[data-v-88f51942]{animation-name:nutEaseOut-88f51942}@keyframes nutDropIn-88f51942{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-88f51942{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-88f51942],.nutDrop-leave-active[data-v-88f51942],.nutDropIn[data-v-88f51942],.nutDropOut[data-v-88f51942]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-88f51942],.nutDropIn[data-v-88f51942]{animation-name:nutDropIn-88f51942}.nutDrop-leave-active[data-v-88f51942],.nutDropOut[data-v-88f51942]{animation-name:nutDropOut-88f51942}@keyframes rotation-88f51942{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-88f51942],.nutRotate-leave-active[data-v-88f51942],.nutRotateIn[data-v-88f51942],.nutRotateOut[data-v-88f51942]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-88f51942],.nutRotateIn[data-v-88f51942]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-88f51942],.nutRotateOut[data-v-88f51942]{animation-name:nutRotateOut}.nut-cell[data-v-88f51942]{align-items:flex-end;border-radius:0}.demo-avatar[data-v-88f51942]{color:#fff}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.fd144e6a.js","./vendor-legacy.fc686e0d.js","./index-legacy.7ae038d9.js"],(function(a){"use strict";var t,n,e,o,i,u,f,m,c;return{setters:[function(a){t=a.c},function(a){n=a.x,e=a.y,o=a.r,i=a.o,u=a.c,f=a.f,m=a.s,c=a.j},function(){}],execute:function(){const{createDemo:r}=t("avatar");var l=a("default",r({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})}));const d=m();n("data-v-88f51942");const s={class:"demo full"},v=f("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),p=f("h2",null,"修改形状",-1),y=f("h2",null,"修改背景色",-1),g=f("h2",null,"修改背景图片",-1),b=f("h2",null,"可以修改头像的内容",-1),_=c("N"),h=f("h2",null,"点击头像触发事件",-1);e();const I=d(((a,t,n,e,m,c)=>{const r=o("nut-avatar"),l=o("nut-cell");return i(),u("div",s,[v,f(l,null,{default:d((()=>[f(r,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),f(r,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),f(r,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),p,f(l,null,{default:d((()=>[f(r,{icon:"my",shape:"square"}),f(r,{icon:"my",shape:"round"})])),_:1}),y,f(l,null,{default:d((()=>[f(r,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),g,f(l,null,{default:d((()=>[f(r,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),b,f(l,null,{default:d((()=>[f(r,null,{default:d((()=>[_])),_:1})])),_:1}),h,f(l,null,{default:d((()=>[f(r,{icon:"my",onActiveAvatar:a.handleClick},null,8,["onActiveAvatar"])])),_:1})])}));l.render=I,l.__scopeId="data-v-88f51942"}}}));