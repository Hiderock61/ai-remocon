PROJECT_CARD

このアプリは何？
AIリモコンは、外部の会話AI（ChatGPT / Gemini / Copilot / Claude 等）に貼る「最初の一文」をワンタップで用意する静的ウェブアプリです。アプリ内で会話は行わず、場所や状況（locations → scenarios → actions）の選択から「コピーして外部AIへ貼る」フローを提供します（現行公開版は v0.9 と README に記載）。根拠ファイル：index.html / data.js / app.js / style.css / README.md。

現在の状態
- 完成度の高い静的フロントエンド実装。画面群・シナリオデータ（app-data JSON）・コピー・外部AIリンク・カスタム編集UIが揃っている。動作にビルドは不要で、そのままブラウザで動く。  
- README に方針・使い方が明記されており「公開版 v0.9」としての体裁がある。  
- 永続化やサーバー連携は行わない設計（README に「アプリ内に入力内容を保存しない」と明記）。  
- LICENSE が未追加（リポジトリにライセンスファイルなし）。index_single.html / ai-remocon-v0.4-fixed.html 等、別バリエーションのHTMLが同梱されている。

状態ラベル
- 本命（公開向けプロダクト候補）

主な機能
- 場所／面（通常・日記・仕事・変換 等）選択 → シナリオ選択 → アクション選択のフローで「AIに貼る最初の一文（プロンプト）」を生成。  
- 生成文のコピーボタン（ワンタップでコピー）。  
- 「文言を見る・調整する」からカスタム編集してコピー可能。  
- 生成後に外部AI（ChatGPT 等）を開くための外部リンク群を表示。  
- UI はレスポンシブで複数の画面テンプレート（index_single.html 等）を含む。  
- README に明記されている方針：アプリ内でチャットせず、会話自体は外部AIで行う。

GitHub Pages公開
- そのまま公開可能：静的ファイル群（index.html + JS/CSS）で完結するため GitHub Pages で容易にデプロイできる。どの HTML（index.html / index_single.html / ai-remocon-v0.4-fixed.html）を公開するかを決めればデモURLを取得できる。

足りないもの
- LICENSE ファイル（公開・再利用条件が不明）。  
- README にデモ（Pages）URL や公開方法の明記（現状はローカルで開く説明のみ）。  
- ブラウザ互換性／サポート表記（想定動作環境）。  
- スクリーンショットや短い GIF デモ（README にあるとわかりやすい）。  
- CONTRIBUTING や Issue テンプレ（外部コントリビューションを受ける場合）。  
- index_single.html / ai-remocon-v0.4-fixed.html の用途説明（どれが正式版か明示）。

触らないこと
- index.html / app.js / data.js / style.css / README.md のコード・内容は変更しない（現状を維持）。  
- 画面文言・シナリオ本文を勝手に書き換えない。  
- 内部設計（「入力を保存しない」という方針）を前提に外部永続化を追加しない（別指示があるまで）。

次にやること
（コード修正を伴わない整理タスク）
1. どの HTML を GitHub Pages で公開するか決める（index.html がデフォルト候補）。  
2. LICENSE を決めて追加（例：MIT 等）。  
3. GitHub Pages を有効化してデモ URL を取得 → README に追記。  
4. README に公開 URL、対応ブラウザ、簡易デモ（スクリーンショット）を追加するドラフト作成。  
5. index_single.html / ai-remocon-v0.4-fixed.html の用途（旧版・実験版・別レイアウトなど）を README に明記して混乱を防ぐ。  
6. リポジトリ description と topics を整備（例: ai-remocon, prompt-tool, static-site）。  
7. Issue を作成して残タスクを洗い出す（アクセシビリティ、追加シナリオ、テスト、外部リンクの更新確認など）。  
8. README に外部AIへ貼る際の注意（外部サービスのログポリシー・ログイン要否・利用規約に関する簡単な注意）を追記。

APP_MAP.mdに載せる一行説明
- AIリモコン — AIに貼る最初の一文をワンタップで用意する静的ウェブリモコン（v0.9）。

メモ
- 根拠は index.html / data.js / app.js / style.css / README.md の実在ファイルのみ。  
- 設計上は「入力を保存しない」ためプライバシー面の説明がREADMEにあるのは良いが、公開時は外部AIへ貼る前の注意（個人情報や機微情報を含めない等）を目立つ場所に置くと安全性が高まる。  
- LICENSE を入れた上で Pages 公開 → README にデモ URL を追記する流れがおすすめ。
