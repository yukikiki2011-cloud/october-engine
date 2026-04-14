---
date: 2026-04-14
session: Sakura Sands Suites × 良品計画 ブランディング提案スライド 制作
status: 17スライド完成 / 継続改良フェーズへ
---

# 引き継ぎメモ：Sakura Sands Suites × 良品計画 提案スライド

## 現在の完成状態

### ファイル構成

```
october-engine/
  engine/
    slide-engine.css   スライドレイアウト基盤
    slide-engine.js    ナビゲーション（キーボード・クリック・タッチスワイプ）
  theme/
    default-theme.css  MUIJテーマ（タイポグラフィ・KPIカード・ロードマップ等）
  brands/
    sakura-sands/
      index.html       本体（17スライド）
```

### スライド一覧（全17枚）

| # | タイプ | タイトル |
|---|---|---|
| 1 | タイトル | 「これでいい」が、最高の贅沢と利回りを生む。 |
| 2 | ブランド概要 | Sakura Sands Suites とは（3ピラー＋スペック表） |
| 3 | 市場環境 | インバウンドの「今」と「次」（数値データ＋バーチャート） |
| 4 | Why MUJI | なぜ「良品計画」を選ぶのか（3理由） |
| 5 | 経営戦略 | 株主優待スキーム（7%永続割引） |
| 6 | チャプター | 5 PROPOSALS |
| 7 | 提案01 | 泡立てボール・小（アメニティ原価▲80%） |
| 8 | 提案02 | バターチキンカレー（粗利+¥650/室） |
| 9 | 提案03 | 二重ガーゼパジャマ（睡眠スコア向上） |
| 10 | 提案04 | 自分で詰める水のボトル（水コスト▲68%） |
| 11 | 提案05 | ステンレスバスケット（清掃▲608時間/年） |
| 12 | 財務効果 | 総合シミュレーション（年間¥1,349万改善） |
| 13 | OTA連動 | スコアと収益のメカニズム |
| 14 | ロードマップ | 6ヶ月3フェーズ導入計画 |
| 15 | チャプター | 13 Colors of Harmony（カラードット） |
| 16 | 13色グリッド | 13色 × MUIJアメニティ 一覧 |
| 17 | クロージング | 機能美と高利回りの、永続的な両立へ。 |

### 確認済み動作

- キーボード（← →）でスライド遷移 ✓
- 右下ボタンでクリック遷移 ✓
- タッチスワイプ対応（スマホ） ✓
- プログレスバー（上部・深紅） ✓
- スライドカウンター（左下） ✓
- GitHub Pages 公開設定済み（GitHub Pagesを有効化すれば即公開可） ✓

---

## クライアント共有方法

### A: GitHub Pages（推奨・即公開）
1. GitHubの `october-engine` リポジトリ → Settings → Pages
2. Source: `Deploy from a branch` → Branch: `main` / `/(root)` → Save
3. 数分後に下記URLで誰でも閲覧可能：
   `https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/`

### B: ローカルで開く
`file:///C:/Users/0000429445/Documents/GitHub/october-engine/brands/sakura-sands/index.html`
※フォントはオンライン（Wi-Fi接続）が必要。

---

## 次回やること（改良候補）

### 優先度 高
- [ ] **画像の差し込み** — `img-placeholder` に実際のMUJI商品画像を入れる
      → 各提案スライドの左カラムに商品写真URLを `<img src="...">` で置換
- [ ] **GitHub Pages 有効化** — クライアントに渡すURLを確定させる
- [ ] **タイトルスライドの視覚強化** — 桜の砂浜のイメージ背景画像を追加

### 優先度 中
- [ ] **13色スライドの充実**
      - 各色カードにホテルフロア番号（1F〜13F）を明記
      - 各色のインテリアイメージ写真を追加
      - 色ごとの「推奨BGM」や「アロマ」まで広げる
- [ ] **財務シミュレーション（スライド12）の精緻化**
      - 実際の客室数・ADR・稼働率をヒアリングして数値を更新
      - Excelベースの詳細試算表とリンク
- [ ] **スクロール型LPバージョンの検討**
      - クライアントへの初回提示はスライド型で ✓
      - 採用後は縦スクロールLP（スマホ対応強化）に変換する選択肢あり

### 優先度 低
- [ ] **他の12ブランド（13色の残り）の提案スライド作成**
      - 同じ `brands/` 構成で `brands/nadeshiko/`, `brands/ruri/` 等を追加
      - `engine/` と `theme/` は共通流用できる
- [ ] **アニメーション強化**
      - KPIボックスのカウントアップアニメーション
      - カラーグリッドのスタガードフェードイン
- [ ] **印刷・PDF対応**
      - `@media print` スタイルの追加

---

## 技術メモ

### スライドを追加するときの手順
1. `index.html` の `</div><!-- end slide-deck -->` の直前に `<section class="slide slide-[type]">` を追加
2. スライド番号コメントを更新（`<!-- SLIDE N / M -->`）
3. git add / commit / push

### 新しいスライドタイプを使いたいとき
- `theme/default-theme.css` にクラスを追加
- `slide-engine.css` は触らなくてOK（構造は既に完成）

### 13色の色コード（参照用）
```
桜色 #f7d9d9 / 撫子 #eebbcb / 鬱金 #f8b500 / 萌黄 #78a355 / 常磐 #007b43
浅葱 #00a3af / 瑠璃 #274a78 / 菖蒲 #884898 / 鶸茶 #c3d825 / 灰桜 #b19693
蜜柑 #fbca4d / 団十郎茶 #6c3524 / 墨 #333333
```

---

## 関連リンク

- リポジトリ: `https://github.com/yukikiki2011-cloud/october-engine`
- 元のGoogleスライド: `https://docs.google.com/presentation/d/1A4W0z2Av5QZqGv6wdqBeCvTXI8aGquV0Mb88Gtrv3Po/edit`
- クライアント: 株式会社カケタス（13色カラフルホテル 生成AIワークショップ提案）
