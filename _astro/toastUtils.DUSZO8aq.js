const w={success:{bgColor:"from-emerald-400/20 to-green-500/20",borderColor:"border-emerald-400/30",textColor:"text-emerald-700",icon:"✓"},info:{bgColor:"from-blue-900/20 to-cyan-500/20",borderColor:"border-blue-200",textColor:"text-blue-100",icon:"ℹ"},warning:{bgColor:"from-amber-400/20 to-orange-500/20",borderColor:"border-amber-400/30",textColor:"text-amber-700",icon:"⚠"},error:{bgColor:"from-red-400/20 to-rose-500/20",borderColor:"border-red-400/30",textColor:"text-red-700",icon:"✕"}},y={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"};function d(e){const{title:t,content:n,type:b="info",position:h="top-right",duration:s=3e3,showIcon:x=!0,closable:g=!0}=e,r=w[b],C=y[h],a=document.createElement("div");a.className=`toast-container fixed z-50 ${C} pointer-events-none`,a.dataset.duration=s.toString();const i=document.createElement("div");i.className=`
    toast-content pointer-events-auto
    backdrop-blur-xl bg-gradient-to-br ${r.bgColor}
    border ${r.borderColor}
    rounded-2xl shadow-xl shadow-black/20
    p-6 min-w-[280px] max-w-[400px]
    transform transition-all duration-500 ease-out
    hover:scale-105 hover:shadow-3xl
    animate-slide-in
  `;const u=document.createElement("div");u.className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-50",i.appendChild(u);const l=document.createElement("div");if(l.className="flex items-start gap-3 relative z-10",x){const o=document.createElement("div");o.className=`
      flex-shrink-0 w-8 h-8 rounded-full 
      bg-gradient-to-br ${r.bgColor}
      border ${r.borderColor}
      flex items-center justify-center
      text-lg font-bold ${r.textColor}
      shadow-lg
    `,o.textContent=r.icon,l.appendChild(o)}const c=document.createElement("div");if(c.className="flex-1 min-w-0",t){const o=document.createElement("h4");o.className=`text-md font-bold ${r.textColor} my-2 leading-tight`,o.textContent=t,c.appendChild(o)}const m=document.createElement("p");if(m.className="text-gray-700 text-sm leading-relaxed",m.setHTMLUnsafe(n),c.appendChild(m),l.appendChild(c),g){const o=document.createElement("button");o.className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center text-gray-600 hover:text-gray-800",o.innerHTML='<span class="text-xs">×</span>',o.onclick=()=>f(a),l.appendChild(o)}if(i.appendChild(l),s>0){const o=document.createElement("div");o.className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden";const p=document.createElement("div");p.className=`h-full bg-gradient-to-r ${r.bgColor} animate-progress`,p.style.animationDuration=`${s}ms`,o.appendChild(p),i.appendChild(o)}return a.appendChild(i),document.body.appendChild(a),s>0&&setTimeout(()=>{f(a)},s),a}function f(e){const t=e.querySelector(".toast-content");t&&(t.style.transform="translateY(-20px) scale(0.95)",t.style.opacity="0",t.style.transition="all 0.3s ease-in",setTimeout(()=>{e.remove()},300))}function v(e,t,n){return d({...n,content:e,title:t,type:"success"})}function E(e,t,n){return d({...n,content:e,title:t,type:"info"})}function k(e,t,n){return d({...n,content:e,title:t,type:"warning"})}function N(e,t,n){return d({...n,content:e,title:t,type:"error"})}function $(){document.querySelectorAll(".toast-container").forEach(t=>{f(t)})}if(typeof document<"u"){const e=document.createElement("style");e.textContent=`
    /* Toast 动画样式 */
    @keyframes slide-in {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes progress {
      from {
        width: 100%;
      }
      to {
        width: 0%;
      }
    }
    
    .animate-slide-in {
      animation: slide-in 0.5s ease-out;
    }
    
    .animate-progress {
      animation: progress linear;
    }
    
    .toast-content {
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }
    
    .toast-content:hover {
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
    }
    
    @media (max-width: 640px) {
      .toast-container {
        left: 1rem !important;
        right: 1rem !important;
        transform: none !important;
      }
      
      .toast-content {
        min-width: auto;
        max-width: none;
      }
    }
  `,document.head.appendChild(e)}export{$ as clearAllToasts,N as showError,E as showInfo,v as showSuccess,d as showToast,k as showWarning};
