---
date: 2026-04-14
session: Sakura Sands Suites × 良品計画 提案スライド — フレグランス・IDÉE追加 完成版
status: 19スライド完成 / クライアント提示可能な状態
---

# 引き継ぎメモ：Sakura Sands Suites × 良品計画 提案スライド（完成版）

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
      index.html       本体（19スライド）
      room.png         Booking.com掲載の実際の客室写真（ツインルーム）
```

### スライド一覧（全19枚）

| # | タイプ | タイトル |
|---|---|---|
| 1 | タイトル | 「これでいい」が、最高の贅沢と利回りを生む。 |
| 2 | ブランド概要 | Sakura Sands Suites とは（3ピラー＋スペック表） |
| 3 | 市場環境 | インバウンドの「今」と「次」（数値データ＋バーチャート） |
| 4 | Why MUJI | なぜ「良品計画」を選ぶのか（3理由） |
| 5 | 経営戦略 | 株主優待スキーム（7%永続割引） |
| 6 | チャプター | 5 PROPOSALS |
| 7 | 提案01 | 泡立てボール・小（アメニティ原価▲80%） |
| 8 | 提案02 | バターチキンカレー（粗利+¥358万/年） |
| 9 | 提案03 | 二重ガーゼパジャマ（睡眠スコア → +¥219万） |
| 10 | 提案04 | 自分で詰める水のボトル（水コスト▲68%） |
| 11 | 提案05 | ステンレスバスケット（清掃▲608時間/年） |
| 12 | 財務効果 | 総合シミュレーション（年間¥1,935万改善） ← 更新済み |
| 13 | OTA連動 | スコアと収益のメカニズム |
| 14 | ロードマップ | 6ヶ月3フェーズ導入計画 |
| 15 | チャプター | 13 Colors of Harmony（カラードット） |
| 16 | 13色グリッド | 13色 × 実写部屋写真 + カラーオーバーレイ（3層: アメニティ・香り・IDÉE） |
| 17 | フレグランス設計 | MUJIフレグランス5種 × 13色マッピング + ROI（22倍） |
| 18 | IDÉEインテリア | IDÉE × 家具・アート・POOL素材 × HOUSE CANVAS将来展開 |
| 19 | クロージング | 機能美と高利回りの、永続的な両立へ。（年間¥1,935万） |

### 財務効果（最新版）

| 施策 | 年間効果 |
|---|---|
| 提案01 アメニティ最適化 | −¥220万 |
| 提案02 ウェルカムギフト | +¥358万 |
| 提案03 パジャマ（OTA向上） | +¥219万 |
| 提案04 水ボトル | −¥82万 |
| 提案05 魅せる収納 | −¥122万 |
| MUJIフレグランス導入 | +¥384万 |
| IDÉE ファブリック・アート | +¥264万 |
| 株主優待7%（MUJI+IDÉE） | −¥490万 |
| **合計** | **約¥1,935万/年 改善** |

### 13色カード 3層構造

各色カードは以下3層で五感設計を可視化：
- `▸` MUJIアメニティ（触覚・使用体験）
- `◎` MUJIフレグランス（嗅覚体験）
- `◈` IDÉEインテリア（視覚体験）

---

## クライアント共有方法

### A: GitHub Pages（推奨）
1. GitHubの `october-engine` リポジトリ → Settings → Pages
2. Source: `Deploy from a branch` → Branch: `main` / `/(root)` → Save
3. 公開URL: `https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/`

### B: ローカルで開く
`file:///C:/Users/0000429445/Documents/GitHub/october-engine/brands/sakura-sands/index.html`
※フォントはオンライン（Wi-Fi接続）が必要。

---

## 次回やること（改良候補）

### 優先度 高
- [ ] **GitHub Pages 有効化** — クライアントURLを確定してカケタスに共有
- [ ] **商品画像の差し込み** — 各提案スライドの `img-placeholder` に実際のMUJI商品写真を差し込む
- [ ] **IDÉE商品の実写確認** — IDÉEショップで実際の家具・テキスタイルの写真を撮影または公式サイトURLを取得

### 優先度 中
- [ ] **フレグランス価格の最新確認** — 公式サイト https://www.muji.com/jp/ja/special-feature/healthandbeauty/fragrance/ で現在価格を再確認
- [ ] **財務数値のヒアリング精緻化** — カケタスから実際のADR・稼働率・調達費用を入手し試算を更新
- [ ] **Booking.com追加写真の収集** — リビング・バスルーム・キッチン写真も room2.png, room3.png として追加
- [ ] **13色スライドにフロア番号を追加** — 1F〜13Fを明記（カケタスの実際のフロア計画に合わせて）

### 優先度 低
- [ ] **他の12ブランド展開** — 同じ `brands/` 構造で残り12色のホテルブランドを追加
- [ ] **アニメーション強化** — KPIボックスのカウントアップ / 13色カードのスタガードフェードイン
- [ ] **PDF出力対応** — `@media print` スタイルの追加

---

## 技術メモ

### 13色カラーオーバーレイの仕組み
```css
/* 実写写真1枚 + CSSで13色変換 */
.color-card-photo img {
  filter: saturate(0.7) brightness(1.05); /* 少し脱彩色 */
}
.color-overlay {
  mix-blend-mode: multiply;  /* 乗算合成で自然な色変換 */
  opacity: 0.55;
}
/* ホバーでオーバーレイを薄くして実写が透ける */
.color-card:hover .color-overlay { opacity: 0.3; }
```

### スライドを追加するときの手順
1. `index.html` の `</div><!-- end slide-deck -->` の直前に `<section class="slide slide-[type]">` を追加
2. スライド番号コメントを更新（`<!-- SLIDE N / M -->`）
3. git add / commit / push

### 13色コード（参照用）
```
桜色 #f7d9d9 / 撫子 #eebbcb / 鬱金 #f8b500 / 萌黄 #78a355 / 常磐 #007b43
浅葱 #00a3af / 瑠璃 #274a78 / 菖蒲 #884898 / 鶸茶 #c3d825 / 灰桜 #b19693
蜜柑 #fbca4d / 団十郎茶 #6c3524 / 墨 #333333
```

### 良品計画グループ 活用可能ブランド
- **MUJI（無印良品）**: アメニティ・フレグランス・食品・衣料・家具・収納
- **IDÉE**: 家具・テキスタイル・アート（Life in Art）・グリーン・ヴィンテージ
- **共通**: 良品計画株主優待7%割引が両ブランドに適用可能

---

## 関連リンク

- リポジトリ: `https://github.com/yukikiki2011-cloud/october-engine`
- 元のGoogleスライド: `https://docs.google.com/presentation/d/1A4W0z2Av5QZqGv6wdqBeCvTXI8aGquV0Mb88Gtrv3Po/edit`
- MUJIフレグランス: `https://www.muji.com/jp/ja/special-feature/healthandbeauty/fragrance/`
- IDÉE事業: `https://www.ryohin-keikaku.jp/business/idee`
- Booking.comホテルページ: `https://www.booking.com/hotel/jp/sakura-sands-suites.ja.html`
- クライアント: 株式会社カケタス（13色カラフルホテル 生成AIワークショップ提案）
