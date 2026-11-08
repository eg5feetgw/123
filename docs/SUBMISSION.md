# 繳交內容

繳交標題：勤益科大 4b517027 資工碩一 張越盛 失物記憶所

## 專案簡介
失物記憶所是一個以日常物件為主角的故事收藏網站，提供旅途、日常、陪伴三種分類，包含搜尋、四篇虛構故事與獨立閱讀頁。除了完成網頁，也用 AGENTS.md 建立一致的視覺、內容格式與開發流程。

## 成果連結
- GitHub Repository：https://github.com/eg5feetgw/123
- 公開網頁：https://memory-archive-stories.grand-comet-4277.chatgpt.site
- 規則文件：https://github.com/eg5feetgw/123/blob/main/AGENTS.md

## 核心文件
專案根目錄 AGENTS.md；網頁的「創作規則」頁也可直接閱讀及下載。

## 未來如何延伸
AI 先閱讀 AGENTS.md，再依 templates/story.json 把新故事加入 content/stories.json。執行 check 確認字數、日期、識別碼與分類合法後，再執行 build，網站會自動新增故事頁、更新首頁列表與前後篇連結，不需為每篇重做版型。新增第四篇的回歸測試展示了這個流程的可重複性。

## AI 使用說明
本作業由 Codex 協助規劃、撰寫內容與程式、測試及部署。所有故事均為虛構，完整協作揭露在 docs/AI-ASSISTANCE.md。請繳交者閱讀程式與規則，確認理解後繳交。
