// --- 1. ページが読み込まれた瞬間に実行される処理 ---
// （localStorageをチェックして、前回の設定を復元する）

// 'theme' という名前で保存されたデータ（'dark'か'light'）を取り出す
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    // もし保存されていたのが 'dark' だったら、
    // ページ（body）に 'dark-mode' クラスを付けて暗くする
    document.body.classList.add('dark-mode');
}

// --- 2. ボタンがクリックされた時に実行される処理 ---
// （IDはHTMLと一致させてください）
const button = document.getElementById('toggleButton');

button.addEventListener('click', function() {
    
    // 1. ページ（body）の 'dark-mode' クラスをトグル（付け外し）する
    document.body.classList.toggle('dark-mode');
    
    // 2. 「今、ダークモードかどうか」を判定する
    if (document.body.classList.contains('dark-mode')) {
        // もしダークモードになったら、'dark' という文字を localStorage に保存する
        localStorage.setItem('theme', 'dark');
    } else {
        // もしライトモードになったら、'light' という文字を localStorage に保存する
        localStorage.setItem('theme', 'light');
    }
});