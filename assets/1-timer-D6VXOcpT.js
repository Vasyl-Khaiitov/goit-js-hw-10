import{f as m,i as f}from"./vendor-BZoxUzx5.js";const o=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),h=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");o.addEventListener("click",C);function b(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}o.disabled=!0;let r;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(f.show({title:"Error",message:"Please choose a date in the future",position:"topRight",color:"red"}),o.disabled=!0):o.disabled=!1,r=e,console.log(t[0])}};m("#datetime-picker",w);function C(){k();const t=setInterval(()=>{const n=r-new Date;if(n>=0){const a=b(n);g(a)}else clearInterval(t),q()},1e3)}function k(){o.disabled=!0,c.disabled=!0}function q(){o.disabled=!1,c.disabled=!1}function g({days:t,hours:e,minutes:n,seconds:a}){h.textContent=s(t),p.textContent=s(e),y.textContent=s(n),S.textContent=s(a)}function s(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer-D6VXOcpT.js.map
