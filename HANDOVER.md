---
date: 2026-04-16
session: 英語版作成・GitHub Pages有効化・サステナブルブランドスライド追加
status: 20スライド完成（日英両対応）/ GitHub Pages 公開済み
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
    default-theme.css  MUJIテーマ（タイポグラフィ・KPIカード・ロードマップ等）
  brands/
    sakura-sands/
      index.html       日本語版（20スライド）
      index-en.html    英語版（20スライド）← 2026-04-16 新規作成
      room.png         Booking.com掲載の実際の客室写真（ツインルーム）
```

### 公開URL（GitHub Pages）

- **日本語版**: https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/
- **英語版**: https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/index-en.html
- GitHub Pages ソース: `main` ブランチ / `/(root)` （2026-04-16 gh-pages→mainに変更済み）

### スライド一覧（全20枚）※日英共通構成

| # | タイプ | タイトル（日本語） | Title (English) |
|---|---|---|---|
| 1 | タイトル | 「これでいい」が最高の贅沢と利回りを生む | "This is Enough." — The Philosophy That Drives Premium Yields |
| 2 | ブランド概要 | Sakura Sands Suites とは | What is Sakura Sands Suites? |
| 3 | 市場環境 | インバウンドの「今」と「次」 | Market Overview: Inbound Tourism |
| 4 | Why MUJI | なぜ「良品計画」を選ぶのか | Why Choose MUJI? |
| 5 | **ブランド哲学** | **「劣化しない資産」サステナブル・ブランド戦略** | **"An Asset That Doesn't Depreciate"** ← 2026-04-16 新規追加 |
| 6 | 経営戦略 | 株主優待スキーム（7%永続割引） | Core Strategy: Shareholder Benefit Scheme |
| 7 | チャプター | 5 PROPOSALS | 5 Proposals |
| 8 | 提案01 | 泡立てボール・小（アメニティ原価▲80%） | Foam Ball (Small) — Take-Home Amenity |
| 9 | 提案02 | バターチキンカレー（粗利+¥358万/年） | Butter Chicken Curry — Welcome Gift |
| 10 | 提案03 | 二重ガーゼパジャマ（睡眠スコア→+¥219万） | Seamless Double Gauze Pajamas |
| 11 | 提案04 | 自分で詰める水のボトル（水コスト▲68%） | Refillable Water Bottle |
| 12 | 提案05 | ステンレスバスケット（清掃▲608時間/年） | Stainless Wire Basket — Display Storage |
| 13 | 財務効果 | 総合シミュレーション（年間¥1,935万改善） | Financial Impact Simulation |
| 14 | OTA連動 | スコアと収益のメカニズム | OTA Scores & Revenue Science |
| 15 | ロードマップ | 6ヶ月3フェーズ導入計画 | 6-Month Implementation Roadmap |
| 16 | チャプター | 13 Colors of Harmony | 13 Colors of Harmony |
| 17 | 13色グリッド | 13色 × アメニティ・香り・IDÉE | 13 Colors × MUJI Amenity & Fragrance |
| 18 | フレグランス設計 | MUJIフレグランス5種 × 13色 ROI（22倍） | MUJI Fragrance: Designing Space Through Scent |
| 19 | IDÉEインテリア | IDÉE × 家具・アート・POOL素材 | IDÉE × Interior Strategy |
| 20 | クロージング | 機能美と高利回りの永続的な両立へ | Toward the Perpetual Union of Functional Beauty and Superior Returns |

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

---

## 2026-04-16 セッションでやったこと

1. **英語版 `index-en.html` を新規作成**
   - オーナーがインド人のため全文英訳
   - 日本の伝統色名は Japanese + English 両方を保持（ブランド価値維持）
   - 金額はJPY維持（日本ホテルのため適切）

2. **GitHub Pages を `main` ブランチに切り替え**
   - 従来: `gh-pages` ブランチ（sakura-sandsフォルダが存在せず404）
   - 変更後: `main` ブランチ → 正常公開
   - API経由で自動切り替え（手動作業ゼロ）

3. **Slide 5「サステナブル・ブランド戦略」を日英両版に追加**
   - デザイナー視点：MUJIは「劣化しない資産」
   - A: 流行に乗らないから永続する（40年間デザイン不変）
   - B: 哲学とビジネスモデルの一致（これでいい = コスト削減×品質維持）
   - C: サステナビリティは1980年創業時からの本物の思想
   - KPI: 40年・1980年・97%認知率・¥0リノベ追加予算

4. **素人オーナー向け説明**（チャット内・スライド外）
   - 利回りが上がる3理由：出費が減る・収益が増える・口コミで客が増える
   - 「MUJIに投資 = 劣化しない資産を買うこと」の例え話

---

## 次回やること（優先順）

### 優先度 高
- [ ] **MUJI商品の実際の画像を各提案スライドに差し込む**
  - 各提案スライドの `img-placeholder` に公式サイトから画像を取得・配置
- [ ] **カケタスから実際のADR・稼働率・調達費用をヒアリング**
  - 財務シミュレーションの数値を実データで精緻化

### 優先度 中
- [ ] **フレグランス価格の最新確認**
  - https://www.muji.com/jp/ja/special-feature/healthandbeauty/fragrance/
- [ ] **Booking.com追加写真の収集**
  - リビング・バスルーム・キッチン写真を room2.png, room3.png として追加
- [ ] **13色スライドにフロア番号を追加**
  - カケタスの実際のフロア計画に合わせて1F〜13Fを明記

### 優先度 低
- [ ] **他の12ブランド展開**
  - 同じ `brands/` 構造で残り12色のホテルブランドを追加
- [ ] **アニメーション強化**
  - KPIボックスのカウントアップ / 13色カードのスタガードフェードイン
- [ ] **PDF出力対応**
  - `@media print` スタイルの追加

---

## 技術メモ

### 13色カラーオーバーレイの仕組み
```css
/* 実写写真1枚 + CSSで13色変換 */
.color-card-photo img {
  filter: saturate(0.7) brightness(1.05);
}
.color-overlay {
  mix-blend-mode: multiply;
  opacity: 0.55;
}
.color-card:hover .color-overlay { opacity: 0.3; }
```

### GitHub Pages 設定
- Source: `main` ブランチ / `/(root)`
- 変更方法: `PUT https://api.github.com/repos/yukikiki2011-cloud/october-engine/pages`
  - Body: `{"source":{"branch":"main","path":"/"}}`

### スライドを追加するときの手順
1. `index.html` と `index-en.html` 両方に同時追加
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

- リポジトリ: https://github.com/yukikiki2011-cloud/october-engine
- 日本語版: https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/
- 英語版: https://yukikiki2011-cloud.github.io/october-engine/brands/sakura-sands/index-en.html
- 元のGoogleスライド: https://docs.google.com/presentation/d/1A4W0z2Av5QZqGv6wdqBeCvTXI8aGquV0Mb88Gtrv3Po/edit
- MUJIフレグランス: https://www.muji.com/jp/ja/special-feature/healthandbeauty/fragrance/
- IDÉE事業: https://www.ryohin-keikaku.jp/business/idee
- Booking.comホテルページ: https://www.booking.com/hotel/jp/sakura-sands-suites.ja.html
- クライアント: 株式会社カケタス（13色カラフルホテル 生成AIワークショップ提案）
