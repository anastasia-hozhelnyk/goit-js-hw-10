import"./assets/styles-d0f2fdf5.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";let o;const i=document.querySelector('input[type="text"]'),n=document.querySelector("button[data-start]"),h=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),g=document.querySelector(".value[data-minutes]"),C=document.querySelector(".value[data-seconds]"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){o=e[0],o.getTime()===Date.now()||o.getTime()<Date.now()?(f.warning({message:"Please choose a date in the future",closeOnEscape:"true",closeOnClick:"true",position:"topRight",titleSize:"20",messageSize:"16",progressBarColor:"#ffffff",messageColor:"#000000",backgroundColor:"orange"}),n.setAttribute("disabled","")):n.removeAttribute("disabled")}};m(i,b);function S(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),c=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:c}}function p(e){for(const t in e)e[t]=e[t].toString().padStart(2,"0");return e}function v(e){i.setAttribute("disabled",""),n.setAttribute("disabled","");const t=setInterval(()=>d(),1e3);function d(){let r=o.getTime()-Date.now();if(r<0){clearInterval(t),i.removeAttribute("disabled");return}const l=p(S(r)),{days:s,hours:a,minutes:u,seconds:c}=l;h.textContent=s,y.textContent=a,g.textContent=u,C.textContent=c}}n.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
