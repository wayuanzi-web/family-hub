# ⛏️ 資料考古成果清單

> 來源：`index.html` v2.3 bundle（commit `f82bfb3`）｜抽取：2026-08-02｜方法：AST定位資料字面量→逐一求值→JSON化
> 純新增檔案，未動 `index.html`，線上 App 不受影響。重建主 App 時直接引用這些檔。

## data-gifts.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `GIFT_LIST` | 48 | 4.9K | 48項伴手禮清單(id/名稱/分類/熱門度/最晚購買日/備註) | au |
| `GIFT_CATEGORIES` | 15 | 0.6K | 伴手禮分類圖示 | fy |

## data-stores.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `CITY_STORES` | 4 | 20.3K | 4城市店家包(含地址座標/暢銷品/購買登錄) | Yo |
| `PURCHASE_ITEM_MAP` | 7 | 0.5K | 購買登錄的店→品項對照 | ev |

## data-products.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `PRODUCT_BRAND_STORY` | 48 | 8.2K | 48個品牌深度(why/價格/通路/故事/怎麼買) | eu |
| `PRODUCT_BUY_GUIDE` | 3 | 5.6K | 深度導購(tagline/品項list) | By |
| `PRODUCT_FIELD_GUIDE` | 4 | 4.0K | 現場作戰卡(口味/三等級/流程) | Ty |
| `PRODUCT_TOP3` | 15 | 3.4K | 15品牌TOP3(送誰/價格) | Ay |
| `CREDIBILITY_ANALYSIS` | 1 | 2.1K | 資訊可信度分析(v2.3新功能，目前1品項試點) | nv |

## data-trip.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `TRIP_FULL` | 8 | 18.4K | 16天完整行程(飯店/每日plan/票券/成員5人) | Ct |
| `TRIP_SKELETON` | 4 | 0.8K | 行程骨架(第二份重複，同雷達TRIP格式) | Kt |
| `TICKETS` | 3 | 0.5K | 票券(冰河列車/RhB/EK086) | Om |

## data-restaurants.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `MICHELIN_LIST` | 4 | 52.4K | 權威餐廳清單 台176/日89/瑞127/杜25=417家 | Pa |
| `CURATED_SPOTS` | 19 | 2.8K | 精選在地店(含Google評分/pid座標) | ll |

## data-safety.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `TAX_REFUND` | 2 | 3.0K | 瑞士+杜拜退稅國家包(稅率分流/機場動線) | gy |
| `TAIWAN_CUSTOMS` | 7 | 1.0K | 台灣入境規定(免稅NT$35,000) | Ja |
| `EMERGENCY` | 2 | 0.8K | 緊急資訊(REGA 1414/駐外館處) | sy |

## data-config.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `DESIGN_TOKENS` | 30 | 4.6K | 設計系統token(月台看板) | p |
| `GEMINI_MODELS` | 10 | 0.9K | AI導遊Model清單 | Uo |
| `HOME_GRID` | 10 | 0.6K | 首頁八格入口設定 | z |
| `CITY_COORDS` | 22 | 0.6K | 城市座標表 | Sy |
| `GEMINI_MODELS_FALLBACK` | 6 | 0.6K | Model降級清單 | En |
| `COLLECTION_TYPES` | 4 | 0.5K | 收藏四類型設定 | Vt |

## data-misc.js

| 常數 | 項/鍵 | 大小 | 內容 | 原變數 |
|---|---|---|---|---|
| `DATA_XM_5` | 5 | 1.3K | keys: chocolate,knife,cheese,cosmetic,kitchen | Xm |
| `DATA_UY_3` | 2 | 0.9K | keys: home,away | uy |
| `DATA_DY_4` | 2 | 0.6K | keys: byId,byCat | dy |
| `DATA_ZT_1` | 10 | 0.4K | keys: 1,2,3,b,p | Zt |
| `DATA_WN_2` | 15 | 0.4K | keys: _listeners,_status,_pendingPushTimer,_dirtyKeys,subscribe | wn |

## 備註

- `Np`/`Gp` 確認為 React 內部 Hooks dispatcher，非資料；`Kg` 為鍵盤 keycode 表，已捨棄。除此之外 bundle 內 >420 字的資料已全數還原。
- 行程資料重複實證：`TRIP_FULL`（含飯店票券）與 `TRIP_SKELETON`（同雷達格式）並存，雷達 `radar.html` 內還有第三份 —— 重建時統一為單一來源。
- `CREDIBILITY_ANALYSIS` 目前只有 laderach_frisch 一項試點，其餘品項待補。
- 舊軌功能資料（417家餐廳、Gemini模型表、城市座標）仍在線上 bundle 中使用，重建時決定去留。
- 雷達原始碼已同步入庫：`src/radar/`（data.js + engine.js，radar.html = 兩者 + UI 層）。
