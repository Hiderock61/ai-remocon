document.addEventListener('DOMContentLoaded', () => {
    // 状態管理
    const state = {
        category: null,
        problem: null,
        action: null,
        history: [] // 画面遷移履歴: ['category', 'problem', 'action', 'result']
    };

    // DOM要素
    const screens = {
        category: document.getElementById('screen-category'),
        problem: document.getElementById('screen-problem'),
        action: document.getElementById('screen-action'),
        result: document.getElementById('screen-result')
    };
    
    const header = document.getElementById('header');
    const backBtn = document.getElementById('back-btn');
    const breadcrumb = document.getElementById('breadcrumb');
    
    const categoryList = document.getElementById('category-list');
    const problemList = document.getElementById('problem-list');
    const actionList = document.getElementById('action-list');
    
    const promptDisplay = document.getElementById('prompt-display');
    const copyBtn = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');

    // 初期化
    init();

    function init() {
        renderCategories();
        showScreen('category');
        
        backBtn.addEventListener('click', goBack);
        copyBtn.addEventListener('click', copyPrompt);
    }

    // 画面遷移
    function showScreen(screenId) {
        // 全画面非表示
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
            screen.classList.add('hidden');
        });
        
        // 対象画面表示
        screens[screenId].classList.remove('hidden');
        screens[screenId].classList.add('active');
        
        // 履歴管理
        if (state.history[state.history.length - 1] !== screenId) {
            state.history.push(screenId);
        }
        
        // ヘッダー表示制御
        if (screenId === 'category') {
            header.classList.add('hidden');
            state.history = ['category']; // 履歴リセット
        } else {
            header.classList.remove('hidden');
            updateBreadcrumb(screenId);
        }
        
        // 画面トップへスクロール
        window.scrollTo(0, 0);
    }

    function goBack() {
        if (state.history.length > 1) {
            state.history.pop(); // 現在の画面を削除
            const prevScreen = state.history.pop(); // 前の画面を取得（showScreenで再度pushされるためpopする）
            showScreen(prevScreen);
        }
    }

    // パンくずリスト更新（文脈のみ短く表示）
    function updateBreadcrumb(screenId) {
        if (screenId === 'problem') {
            const cat = data.categories.find(c => c.id === state.category);
            breadcrumb.textContent = `「${cat.title}」のとき`;
        } else if (screenId === 'action') {
            const prob = data.problems[state.category].find(p => p.id === state.problem);
            breadcrumb.textContent = `「${prob.text}」とき`;
        } else if (screenId === 'result') {
            const act = data.actions[state.problem].find(a => a.id === state.action);
            breadcrumb.textContent = `「${act.text}」`;
        }
    }

    // カテゴリ一覧描画
    function renderCategories() {
        categoryList.innerHTML = '';
        data.categories.forEach(cat => {
            const btn = document.createElement('div');
            btn.className = `category-btn ${cat.type}`;
            btn.innerHTML = `
                <div class="category-icon">${cat.icon}</div>
                <div class="category-title">${cat.title}</div>
            `;
            btn.addEventListener('click', () => {
                state.category = cat.id;
                renderProblems();
                showScreen('problem');
            });
            categoryList.appendChild(btn);
        });
    }

    // 困りごと一覧描画
    function renderProblems() {
        problemList.innerHTML = '';
        const problems = data.problems[state.category] || [];
        
        problems.forEach(prob => {
            const btn = document.createElement('div');
            btn.className = 'list-item';
            btn.textContent = prob.text;
            btn.addEventListener('click', () => {
                state.problem = prob.id;
                renderActions();
                showScreen('action');
            });
            problemList.appendChild(btn);
        });
    }

    // AIにさせたいこと一覧描画
    function renderActions() {
        actionList.innerHTML = '';
        const actions = data.actions[state.problem] || [];
        
        actions.forEach(act => {
            const btn = document.createElement('div');
            btn.className = 'list-item';
            btn.textContent = act.text;
            btn.addEventListener('click', () => {
                state.action = act.id;
                renderResult(act.prompt);
                showScreen('result');
            });
            actionList.appendChild(btn);
        });
    }

    // 結果画面描画
    function renderResult(promptText) {
        promptDisplay.textContent = promptText;
    }

    // コピー機能
    function copyPrompt() {
        const text = promptDisplay.textContent;
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(showToast);
        } else {
            // フォールバック
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showToast();
            } catch (err) {
                console.error('Copy failed', err);
            }
            textArea.remove();
        }
    }

    // トースト通知表示
    function showToast() {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }
});
