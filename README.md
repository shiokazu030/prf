# 推しプロフメーカー

楽曲の雰囲気やメンバーカラーで作れる、推し活向けプロフィール帳メーカーのMVPです。
テンプレ選択、フォーム入力、リアルタイムプレビュー、PNG保存、X投稿文コピーまで実装しています。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- html-to-image
- React state + localStorage

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

Windows PowerShellで `npm` が実行ポリシーにより止まる場合は、代わりに以下を使ってください。

```bash
npm.cmd install
npm.cmd run dev
```

## 主な画面

- `/` トップページ
- `/create` テンプレ選択とプロフィール作成
- `/create?template=royal-cute` テンプレ指定で作成画面を開始
- `/create?category=member` カテゴリ指定でテンプレ選択

## フォルダ構成

```text
app/
  create/page.tsx        作成画面
  globals.css            グローバルCSS
  layout.tsx             共通レイアウト
  page.tsx               トップページ
components/
  ActionButtons.tsx      PNG保存、投稿文コピー、テンプレ変更
  ProfileForm.tsx        入力フォーム
  ProfilePreview.tsx     1200x1200 PNG出力対象のプレビュー
  TemplateCard.tsx       テンプレカード
  TemplateMiniPreview.tsx サムネイル表示
  TemplateSelector.tsx   テンプレ一覧
data/
  formFields.ts          フォーム項目定義
  members.ts             ダミーメンバー定義
  templates.ts           テンプレ定義
lib/
  postText.ts            X投稿文生成
```

## テンプレ追加

`data/templates.ts` の `templates` 配列にオブジェクトを追加します。

```ts
{
  id: "new-template",
  category: "song",
  title: "新テンプレ",
  description: "説明文",
  palette: ["#ffffff", "#ff77ad", "#ffe1ec", "#f8fbff"],
  decorations: ["heart", "sparkle"],
  mood: "ふんわり",
  backgroundStyle: "linear-gradient(135deg, #fff 0%, #ffe1ec 100%)",
  frameStyle: "#ff77ad",
  accentStyle: "#e85f94",
  textColor: "#4a3342"
}
```

## メンバー追加

`data/members.ts` の `members` 配列に追加します。`templateId` に紐づけたいテンプレIDを指定してください。

## 注意

公式画像、公式ロゴ、ジャケット画像、歌詞は使っていません。テンプレは「雰囲気」を抽象化したオリジナルデザインです。

## GitHubへアップする手順

初回だけ以下を実行します。

```bash
git init
git add .
git commit -m "Initial MVP"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/YOUR_REPOSITORY.git
git push -u origin main
```

`YOUR_NAME` と `YOUR_REPOSITORY` は、自分のGitHubユーザー名と作成したリポジトリ名に置き換えてください。
