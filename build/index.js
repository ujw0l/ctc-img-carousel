(()=>{"use strict";var e,t={480:()=>{const e=window.wp.blocks,t=window.React;class r{constructor(e,t){Array.from(document.querySelectorAll(e)).map(((e,r)=>this.prepCarousel(e,r,t)))}prepCarousel(e,t,r){let l=e.offsetWidth,a=e.offsetHeight,i={},n=Array.from(e.querySelectorAll("img"));n.map(((e,t)=>e.style.display="none"));let o=document.createElement("div");o.style=`width:${.42*l}px;height:${.7*a}px;z-index:400;display:inline-block;position:absolute;margin-top:${.15*a}px;margin-left:0px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 5px 10px 2px black;`,i.prevThree=o,e.appendChild(o);let s=document.createElement("div");s.style=`width:${.49*l}px;height:${.8*a}px;z-index:500;display:inline-block;position:absolute;margin-top:${.1*a}px;margin-left:${.06*l}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 10px 15px 2px black;`,i.prevTwo=s,e.appendChild(s);let p=document.createElement("div");p.style=`width:${.63*l}px;height:${.9*a}px;z-index:700;display:inline-block;position:absolute;margin-top:${.05*a}px;margin-left:${.14*l}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 15px 20px 2px black;`,i.prevOne=p,e.appendChild(p);let d=document.createElement("div");d.style=`width:${.52*l}px;height:${a}px;z-index:1000;display:inline-block;position:absolute;margin-top:0px;margin-left:${.24*l}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:contain;box-shadow:0px 20px 25px 2px black;`,i.mainDiv=d,e.appendChild(d);let c=document.createElement("div");c.style=`width:${.63*l}px;height:${.9*a}px;z-index:700;display:inline-block;position:absolute;margin-top:${.05*a}px;margin-left:${.24*l}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 15px 20px 2px black;`,i.nextOne=c,e.appendChild(c);let g=document.createElement("div");g.style=`width:${.49*l}px;height:${.8*a}px;z-index:500;display:inline-block;position:absolute;margin-top:${.1*a}px;margin-left:${.45*l}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 10px 15px 2px black;`,i.nextTwo=g,e.appendChild(g);let u=document.createElement("div");u.style=`width:${.42*l}px;height:${.7*a}px;z-index:400;display:inline-block;position:absolute;margin-top:${.15*a}px;margin-left:${.58*l};background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 5px 10px 2px black;`,i.nextThree=u,e.appendChild(u),this.createCarousel(0,n,i,t,r);for(let e in i)"mainDiv"!=e&&(i[e].addEventListener("click",(e=>this.createCarousel(parseInt(e.target.getAttribute("data-num")),n,i,t,r))),i[e].addEventListener("mouseenter",(e=>e.target.style.border="1px dotted rgba(0,0,0,0)")),i[e].addEventListener("mouseleave",(e=>e.target.style.border="")));null!=r&&"function"==typeof r.callBack&&r.callBack(e),window.addEventListener("resize",(()=>this.adjustOnResize(e,i,t)))}createCarousel(e,t,r,l,a){let i,n,o,s,p,d;i=0==e?t.length-3:1==e?t.length-2:2==e?t.length-1:e-3,n=0==e?t.length-2:1==e?t.length-1:e-2,o=0==e?t.length-1:e-1,s=e==t.length-1?0:e+1,p=e==t.length-1?1:e==t.length-2?0:e+2,d=e==t.length-1?2:e==t.length-2?1:e==t.length-3?0:e+3,r.prevThree.style.backgroundImage=`url('${t[i].src}')`,r.prevThree.title=null!=t[i].title?t[i].title:"",r.prevThree.setAttribute("data-num",i),r.prevTwo.style.backgroundImage=`url('${t[n].src}')`,r.prevTwo.title=null!=t[n].title?t[n].title:"",r.prevTwo.setAttribute("data-num",n),r.prevOne.style.backgroundImage=`url('${t[o].src}')`,r.prevOne.title=null!=t[o].title?t[o].title:"",r.prevOne.setAttribute("data-num",o);let c=new Image;c.src=t[e].src,c.title=null!=t[e].title?t[e].title:"",r.mainDiv.style.backgroundImage="url('')";let g=r.mainDiv.querySelector("#img-loading-"+l);if(null==g){g=document.createElement("div"),g.id=`img-loading-${l}`,g.style=`margin-left:${(r.mainDiv.offsetWidth-40)/2}px;margin-top:${(r.mainDiv.offsetHeight-40)/2}px;height:40px;width:40px;border-radius:50%;border-color:rgba(255,255,255,1);border-style: solid; border-width: 3px;z-index:1100; `,g.setAttribute("data-wait","left"),r.mainDiv.appendChild(g);var u=setInterval((()=>{switch(g.getAttribute("data-wait")){case"left":g.setAttribute("data-wait","top"),g.style.borderColor="rgba(255,255,255,0.5)",g.style.borderTop="3px solid  rgba(255,255,255,0.8)";break;case"top":g.setAttribute("data-wait","right"),g.style.borderColor="rgba(255,255,255,0.5)",g.style.borderRight="3px solid  rgba(255,255,255,0.8)";break;case"right":g.setAttribute("data-wait","bottom"),g.style.borderColor="rgba(255,255,255,0.5)",g.style.borderBottom="3px solid  rgba(255,255,255,0.8)";break;case"bottom":g.setAttribute("data-wait","left"),g.style.borderColor="rgba(255,255,255,0.5)",g.style.borderLeft="3px solid  rgba(255,255,255,0.8)"}}),400)}c.addEventListener("load",(e=>{clearInterval(u),r.mainDiv.removeChild(g),r.mainDiv.style.backgroundImage=`url('${e.target.src}')`,r.mainDiv.title=null!=e.target.title?e.target.title:""})),r.nextOne.style.backgroundImage=`url('${t[s].src}')`,r.nextOne.title=null!=t[s].title?t[s].title:"",r.nextOne.setAttribute("data-num",s),r.nextTwo.style.backgroundImage=`url('${t[p].src}')`,r.nextTwo.title=null!=t[p].title?t[p].title:"",r.nextTwo.setAttribute("data-num",p),r.nextThree.style.backgroundImage=`url('${t[d].src}')`,r.nextThree.title=null!=t[d].title?t[d].title:"",r.nextThree.setAttribute("data-num",d)}adjustOnResize(e,t,r){let l=e.offsetWidth,a=e.offsetHeight,i=t.prevThree;i.style.width=.42*l+"px",i.style.height=.7*a+"px",i.style.marginTop=.15*a+"px",i.style.marginLeft="0px";let n=t.prevTwo;n.style.width=.49*l+"px",n.style.height=.8*a+"px",n.style.marginTop=.1*a+"px",n.style.marginLeft=.06*l+"px";let o=t.prevOne;o.style.width=.63*l+"px",o.style.height=.9*a+"px",o.style.marginTop=.05*a+"px",o.style.marginLeft=.14*l+"px";let s=t.mainDiv;s.style.width=.52*l+"px",s.style.height=`${a}px`,s.style.marginTop="0px",s.style.marginLeft=.24*l+"px";let p=s.querySelector("#img-loading-"+r);null!=p&&(p.style.marginLeft=(s.offsetWidth-40)/2+"px",p.style.marginTop=(s.offsetHeight-40)/2+"px");let d=t.nextOne;d.style.width=.63*l+"px",d.style.height=.9*a+"px",d.style.marginTop=.05*a+"px",d.style.marginLeft=.24*l+"px";let c=t.nextTwo;c.style.width=.49*l+"px",c.style.height=.8*a+"px",c.style.marginTop=.1*a+"px",c.style.marginLeft=.45*l+"px";let g=t.nextThree;g.style.width=.42*l+"px",g.style.height=.7*a+"px",g.style.marginTop=.15*a+"px",g.style.marginLeft=.58*l+"px"}}const l=window.wp.components,a=window.wp.i18n,i=window.wp.blockEditor,n=JSON.parse('{"N9":"image-carousel/image-carousel"}');(0,e.registerBlockType)(n.N9,{keywords:[__("Gallery","image-craousel"),__("carousel","image-carousel")],attributes:{carItems:{type:"Array",default:[]},carHeight:{type:"Number",default:500},carWidth:{type:"Number",default:700},clntId:{type:"String",default:""}},edit:function({clientId:e,attributes:n,setAttributes:o}){const s=(0,t.useRef)();return o({clntId:e}),(0,t.useEffect)((()=>{let e=`#${s.current.id}`;n.carItems.length>=3?(s.current.style.height=n.carHeight+"px",s.current.style.width=n.carWidth+"px",s.current.style.marginLeft="auto",s.current.style.marginRight="auto",new r(e,{callBack:()=>s.current.style.display="block"}),window.dispatchEvent(new Event("resize"))):s.current.style.display="none"}),[n.carItems,n.carHeight,n.carWidth]),(0,t.createElement)("div",{...(0,i.useBlockProps)()},(0,t.createElement)("div",{id:`ctc-image-car-${n.clntId}`,ref:s,style:{display:"none"}},n.carItems.map((e=>(0,t.createElement)("img",{src:e.url})))),(0,t.createElement)("div",null,(0,t.createElement)(i.MediaUploadCheck,null,(0,t.createElement)(i.MediaUpload,{title:(0,a.__)("Select  images for gallery ","ctcl-image-gallery"),multiple:!0,value:n.carItems.map((e=>e.id)),gallery:!0,onSelect:e=>{Array.from(s.current.querySelectorAll("div")).map((e=>e.remove())),o({carItems:e})},allowedTypes:["image"],render:({open:e})=>(0,t.createElement)("div",{style:{width:"100%",backgroundColor:"rgba(255,255,,255,1)",color:"rgb(61, 148, 218)",padding:"10px"}},(0,t.createElement)("h4",{className:"dashicons-before dashicons-slides"},(0,a.__)(" Image Gallery ","image-carousel")),(0,t.createElement)(l.Button,{style:{marginLeft:"auto",marginRight:"auto",display:"block",color:"rgb(61, 148, 218)",border:"1px solid rgb(61, 148, 218)"},className:"dashicons-before dashicons-slides",onClick:e},(0,a.__)(" Select Images","image-carousel")))}))),(0,t.createElement)("div",null,(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(l.PanelBody,null,(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Carousel width in pixel (px)","image-carousel"),min:148,max:1e3,onChange:e=>{Array.from(s.current.querySelectorAll("div")).map((e=>e.remove())),o({carWidth:e})},value:n.carWidth}),(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Carousel Height in pixel (px)","image-carousel"),min:148,max:700,onChange:e=>{Array.from(s.current.querySelectorAll("div")).map((e=>e.remove())),o({carHeight:e})},value:n.carHeight})))))},save:function({attributes:e}){return(0,t.createElement)("div",{...i.useBlockProps.save()},e.carItems.length>=3&&(0,t.createElement)("div",{className:"ctc-image-carousel",style:{marginLeft:"auto",marginRight:"auto",display:"block",height:e.carHeight+"px",width:e.carWidth+"px"}},e.carItems.map((e=>(0,t.createElement)("img",{src:e.url})))))}})}},r={};function l(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,l),i.exports}l.m=t,e=[],l.O=(t,r,a,i)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,a,i]=e[d],o=!0,s=0;s<r.length;s++)(!1&i||n>=i)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(o=!1,i<n&&(n=i));if(o){e.splice(d--,1);var p=a();void 0!==p&&(t=p)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,a,i]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={656:0,564:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[n,o,s]=r,p=0;if(n.some((t=>0!==e[t]))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(s)var d=s(l)}for(t&&t(r);p<n.length;p++)i=n[p],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},r=globalThis.webpackChunkimage_carousel=globalThis.webpackChunkimage_carousel||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[564],(()=>l(480)));a=l.O(a)})();