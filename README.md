# 美容アンケート WebPage

## 使用パッケージ

### backend

- Node.js
- Express
- PDFKIT (PDF 生成)

## frontend

- EJS
- jquery
- bootstrap

## 環境構築

下記の環境構築をしておく必要があります

- Node.js 7.15.1
  https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b

- yarn のインストール

  ```
  npm install -g yarn
  ```

# 実行方法

```bash
yarn start
```

# 階層構造

※ data/以下がない場合、作成してください。

```
%HOME%
   ├ data
   │  ├ CSVBeauty     // 美容アンケート
   │  ├ CSVMonshin    // 問診票
   │  ├ CSVMembership // BMCMembership
   │  ├ imgData1      // 美容アンケート画像データ1
   │  └ imgData2      // 美容アンケート画像データ2
   ├ fonts            // PDFに使ったフォントを格納
   ├ node_module      // node.jsに用いたモジュール
   ├ public           // js,css,img
   ├ tools            // バックエンドのツール群
   ├ views            // フロントエンド
   ├ app.js
   ...
```
