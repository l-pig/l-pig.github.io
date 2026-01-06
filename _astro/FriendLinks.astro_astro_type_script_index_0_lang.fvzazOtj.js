let h=[],u=[],i=document.getElementById("loading-state"),n=document.getElementById("error-state"),o=document.getElementById("empty-state"),r=document.getElementById("friend-links-categories"),g=document.getElementById("retry-btn");const m=document.getElementById("total-count");function x(){i&&i.classList.remove("hidden"),n&&n.classList.add("hidden"),r&&r.classList.add("hidden"),o&&o.classList.add("hidden")}function L(){i&&i.classList.add("hidden"),n&&n.classList.remove("hidden"),r&&r.classList.add("hidden"),o&&o.classList.add("hidden")}function v(){i&&i.classList.add("hidden"),n&&n.classList.add("hidden"),r&&r.classList.remove("hidden"),o&&o.classList.add("hidden")}function b(){i&&i.classList.add("hidden"),n&&n.classList.add("hidden"),r&&r.classList.add("hidden"),o&&o.classList.remove("hidden")}async function f(){try{x();const t=await fetch("/data/friends.json",{cache:"no-store"});if(!t.ok)throw new Error("加载本地 friends.json 失败");const a=await t.json();h=Array.isArray(a.categories)?a.categories:[],u=Array.isArray(a.links)?a.links:[],w(),v()}catch(t){console.error("❌ 获取友情链接数据失败:",t),L()}}function w(){m?m.textContent=String(u.length):console.error("❌ totalCountEl 元素未找到"),u.length===0?b():(v(),E())}function E(){if(!r)return;const t={};u.forEach(e=>{const d=e&&e.category_code?e.category_code:"default";t[d]||(t[d]=[]),t[d].push(e)});const a=[...h].sort((e,d)=>(e.sort_order||0)-(d.sort_order||0));let l="";a.forEach(e=>{const d=e&&e.code?e.code:"default",c=(t[d]||[]).filter(s=>s&&s.status!=="lost");c.length!==0&&(l+=`
        <div class="category-section mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            ${e.name||""}
            <span class="text-lg font-normal text-txt-light dark:text-darkmode-txt-light">(${String(c.length)})</span>
          </h2>
          <div class="friends-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${c.map((s,p)=>{const y=B(s);return`<div class="friend-item" style="animation-delay: ${String(p*.1)}s">${y}</div>`}).join("")}
          </div>
        </div>
      `)}),r.innerHTML=l}function B(t,a){const l=t&&t.name?t.name:"",e=t&&t.url?t.url:"#",d=t&&t.description?t.description:"",c=t&&t.avatar?t.avatar:"/favicon/logo-192x192.png",s=t&&t.status?t.status:"active";return`
      <div class="friend-card glass h-full rounded-[18px] overflow-hidden transition-all duration-300 group backdrop-blur-md relative">
        <a href="${e}" target="_blank" rel="external nofollow noopener noreferrer" class="block h-full p-4 no-underline">
          <div class="flex items-center space-x-3 h-full">
            <!-- 头像 -->
            <div class="flex items-center relative">
              <div class="friend-avatar relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40">
                <img src="${c}" alt="${l} 的头像" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" onerror="this.src='/favicon/logo-192x192.png'" />
              </div>
              ${s==="active"?`
                  <div class="status-indicator top-5 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 z-10" title="正常状态"></div>
                `:s==="lost"?`
                  <div class="status-indicator top-5 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-800 z-10" title="已丢失"></div>
                `:s==="error"?`
                  <div class="status-indicator top-5 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-800 z-10" title="连接错误"></div>
                `:""}
            </div>
            
            <!-- 内容区域 -->
            <div class="flex-1 min-w-0">
              <!-- 网站名称 -->
              <div class="flex items-center gap-2 mb-1">
                <h3 class="friend-name text-lg font-bold text-txt-p dark:text-darkmode-txt-p truncate group-hover:text-primary transition-colors duration-200">
                  ${l}
                </h3>
              </div>
              
              <!-- 网站描述 -->
              <p class="friend-description text-sm text-txt-light dark:text-darkmode-txt-light line-clamp-2 leading-relaxed">
                ${d}
              </p>
            </div>
          </div>
          
          <!-- 悬浮效果 -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[18px]"></div>
        </a>
      </div>
    `}g&&g.addEventListener("click",f);document.addEventListener("DOMContentLoaded",()=>{f()});document.addEventListener("astro:page-load",()=>{i=document.getElementById("loading-state"),n=document.getElementById("error-state"),o=document.getElementById("empty-state"),r=document.getElementById("friend-links-categories"),g=document.getElementById("retry-btn"),g&&g.addEventListener("click",f),f()});document.addEventListener("visibilitychange",()=>{document.hidden||setTimeout(f,200)});window.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})};
