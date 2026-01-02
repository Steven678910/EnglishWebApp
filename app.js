const App = {
    modules: [], // 存放所有功能的清單

    // 1. 註冊功能的接口 (讓其他檔案呼叫)
    register: function(module) {
        this.modules.push(module);
    },

    // 2. 顯示主選單
    showMenu: function() {
        document.getElementById('nav-bar').style.display = 'none';
        const container = document.getElementById('content-area');
        container.innerHTML = '<div class="menu-grid" id="menu-grid"></div>';
        
        const grid = document.getElementById('menu-grid');
        
        this.modules.forEach(mod => {
            const btn = document.createElement('button');
            btn.className = 'menu-btn';
            btn.innerText = mod.name;
            btn.onclick = () => this.loadModule(mod);
            grid.appendChild(btn);
        });
    },

    // 3. 載入特定模組
    loadModule: function(module) {
        document.getElementById('nav-bar').style.display = 'flex';
        document.getElementById('module-title').innerText = module.name;
        
        const container = document.getElementById('content-area');
        container.innerHTML = ''; // 清空畫面
        
        // 呼叫模組的 render 函數來繪製介面
        module.render(container);
    },

    // 4. 初始化
    init: function() {
        this.showMenu();
    }
};