# 失物記憶所：給 AI 協作者的專案規則

## 1. 目的與範圍
把日常物件整理成可閱讀、可分類的故事收藏。這是靜態故事網站，不是尋物媒合平台；不收集個資、不呼叫 AI API。所有展示故事都是虛構創作，頁面必須明示，不能冒充作者的真實經歷。

## 2. 先讀再改
先讀本文件、README.md、content/stories.json、templates/story.json，再修改。先確認使用者要求的是新增內容還是改功能。新增故事只能編輯內容檔與必要插圖；不得為一篇故事複製整套版型。

## 3. 目錄與單一來源
- content/stories.json：故事唯一來源，UTF-8 JSON 陣列。
- templates/story.json：可複製的欄位範本；範本不會自動發布。
- src/style.css：全站色彩、版面、響應式規則。
- src/app.js：搜尋與分類的漸進增強；無 JavaScript 時仍可閱讀所有故事。
- scripts/build.mjs：驗證內容並產生首頁、各故事頁、關於頁及規則頁。
- dist/：產生的公開網站。不得直接手動修改；執行 npm run build 重建。
- docs/：延伸實驗、AI 協作揭露、繳交說明；不得存放金鑰或私人對話。
- .openai/hosting.json：網站部署識別；保留原有 project_id。

## 4. 內容格式（每篇必填）
每個故事必須包含 id、title、category、object、summary、date、paragraphs、reflection、illustration、fiction。
- id：唯一的小寫英文 kebab-case，例如 borrowed-umbrella；一旦發布不要隨意更名，避免連結失效。
- title：繁體中文 4–24 字；summary：20–90 字；不得空白。
- category：只能是「旅途」「日常」「陪伴」。新增分類必須同步修改驗證器與說明。
- object：物件名稱；date：真實存在的 YYYY-MM-DD 日期，代表作品建檔日，不是故事事件日期。
- paragraphs：3–5 段，每段至少 30 字；每篇總計 150–650 字，包含 reflection，不含標題與摘要。
- reflection：一句值得留下的體會，15–80 字。
- illustration：ticket、key、letter、umbrella 四選一；純 SVG 本地插圖，不引入追蹤或外部圖庫。
- fiction：必須是 true；若之後改用真實投稿，先設計同意與去識別流程，不可直接移除此限制。
內容一律純文字，不允許嵌入 HTML。產生器統一 escape 後輸出，避免內容變成可執行程式。

## 5. 視覺與頁面契約
繁體中文、紙張底色 #f5f1e8、深墨綠 #263e36、陶土紅 #a14832；正文至少 16px，行高至少 1.6。標題使用系統明體，介面使用系統黑體；不依賴外部字型。維持留白、細分隔線、物件插畫與檔案編號的收藏室感。
首頁順序：導覽 → 主視覺與精選故事 → 搜尋／分類 → 故事列表 → 延伸入口 → 頁尾。故事頁順序：返回收藏 → 編號與類別 → 標題／摘要 → 插圖 → 三至五段正文 → 記憶便箋 → 前後篇連結。所有頁面保留一致導覽與虛構聲明。

## 6. 開發與安全規則
使用 Node.js 22+ 原生模組，零第三方套件。使用相對 URL，讓網站能部署在 GitHub Pages 的子路徑。不得加入 API 金鑰、分析追蹤、付款或帳號功能。不得直接改動本專案外的舊作業。語意化 HTML、lang=zh-Hant、唯一 h1、可見鍵盤焦點、表單 label、狀態 aria-live 都必須保留。搜尋採文字包含比對，不把使用者輸入插入 innerHTML。

## 7. 新增內容的固定流程
1. 複製 templates/story.json 的物件到 content/stories.json 陣列末尾。
2. 填寫所有欄位，確認 id 唯一與分類合法；清楚標註虛構，不假造個人經歷。
3. 執行 npm run check；失敗就修正資料，不放寬規則來讓測試通過。
4. 執行 npm run build；首頁、故事獨立頁、計數、前後篇連結都必須自動更新。
5. npm run preview 後檢查首頁與新頁，測試搜尋、分類、零結果、鍵盤操作與窄螢幕。
6. 在 docs/CHANGELOG.md 記錄新增 id、修改目的、實際完成的驗證。沒做的測試不得寫通過。

## 8. 完成定義與 AI 揭露
npm test 必須通過（涵蓋非法 id、重複 id、錯誤日期、非法分類、HTML escaping、輸出連結）。不允許壞連結、空頁、TODO 或假按鈕。發布前確認本次完整專案已同步 GitHub。AI 協作寫入 docs/AI-ASSISTANCE.md，區分使用者需求、AI 設計與實際驗證；不要代替學生宣稱已理解。提交時說明變更、測試及限制。
