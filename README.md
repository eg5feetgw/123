# 失物記憶所 — 用 AGENTS.md 延續一座故事收藏室

以日常物件為主角的繁體中文靜態網站。四篇虛構故事、三種分類、搜尋、獨立故事頁、創作規則與關於頁。無帳號、無 API、無外部追蹤。

本專案的重點是 **AI 可以依同一份規則繼續新增內容**：`content/stories.json` 是唯一內容來源，`scripts/build.mjs` 共用版型，`AGENTS.md` 定義目的、視覺、欄位、命名、安全、工作流程及驗收。`npm test` 實際檢查從三篇擴充到四篇的產出。

## 成果連結
- 公開網站：https://memory-archive-stories.grand-comet-4277.chatgpt.site
- GitHub：https://github.com/eg5feetgw/123
- 完整規則：[AGENTS.md](AGENTS.md)
- [繳交內容](docs/SUBMISSION.md)

## 開始使用
需要 Node.js 22+，零第三方相依套件，無須 npm install。

```sh
npm run check
npm test
npm run build
npm run preview
```

開啟 http://127.0.0.1:4173。完整網站在 dist/；可直接部署到靜態主機。也可把 dist/ 的內容發布到 GitHub Pages 分支根目錄；所有資源與連結使用相對路徑。

## 新增故事
先讀 [AGENTS.md](AGENTS.md)，將 [templates/story.json](templates/story.json) 的物件填完後加到 `content/stories.json`，執行檢查及建置。不要手動複製 HTML。

示範指令：「請先閱讀 AGENTS.md，新增一篇以舊相片為主角的虛構故事，分類陪伴，使用 letter 插圖；遵守欄位與字數，完成檢查、建置及 CHANGELOG。不要改動共用版型。」

## 結構
```
AGENTS.md            AI 協作規則
content/stories.json  故事唯一來源
templates/story.json 新增內容範本
src/                 樣式、搜尋與分類
scripts/             驗證、產生器、測試、預覽
dist/                可部署網站
docs/                延伸實驗、AI 揭露、繳交說明
```

## 揭露
網站、規則、原創 SVG 與故事由 AI 協助製作。故事都是虛構示範，不代表作者的真實人生。見 [AI 協作說明](docs/AI-ASSISTANCE.md)。
