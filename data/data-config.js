/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: p */
const DESIGN_TOKENS = {
  "page": {
    "minHeight": "100vh",
    "background": "#F0F4F8",
    "paddingBottom": "calc(env(safe-area-inset-bottom, 0px) + 90px)",
    "fontFamily": "-apple-system, 'PingFang TC', sans-serif"
  },
  "header": {
    "background": "linear-gradient(135deg, #1F3864, #2E5C8A)",
    "color": "#fff",
    "paddingTop": "calc(env(safe-area-inset-top, 0px) + 20px)",
    "paddingLeft": 16,
    "paddingRight": 16,
    "paddingBottom": 24,
    "borderRadius": "0 0 20px 20px",
    "boxShadow": "0 4px 12px rgba(31,56,100,0.2)"
  },
  "greet": {
    "fontSize": 13,
    "opacity": 0.8,
    "letterSpacing": 2
  },
  "welcome": {
    "fontSize": 22,
    "fontWeight": 900,
    "marginTop": 4,
    "fontFamily": "Georgia, serif"
  },
  "card": {
    "background": "#fff",
    "borderRadius": 14,
    "padding": 14,
    "margin": "12px",
    "boxShadow": "0 1px 3px rgba(0,0,0,0.08)"
  },
  "sectionTitle": {
    "fontSize": 15,
    "fontWeight": 800,
    "color": "#1F3864",
    "marginBottom": 10,
    "display": "flex",
    "alignItems": "center",
    "gap": 6
  },
  "tripPinned": {
    "background": "linear-gradient(135deg, #C8102E, #E63946)",
    "color": "#fff",
    "borderRadius": 14,
    "padding": 16,
    "margin": "12px",
    "boxShadow": "0 4px 16px rgba(200,16,46,0.3)",
    "cursor": "pointer"
  },
  "btn": {
    "background": "#1F3864",
    "color": "#fff",
    "border": "none",
    "borderRadius": 10,
    "padding": "12px 16px",
    "fontSize": 14,
    "fontWeight": 800,
    "cursor": "pointer",
    "minHeight": 44
  },
  "btnGhost": {
    "background": "#EEF2F6",
    "color": "#1F3864",
    "border": "none",
    "borderRadius": 10,
    "padding": "12px 16px",
    "fontSize": 14,
    "fontWeight": 800,
    "cursor": "pointer",
    "minHeight": 44
  },
  "btnDanger": {
    "background": "#C8102E",
    "color": "#fff",
    "border": "none",
    "borderRadius": 10,
    "padding": "10px 14px",
    "fontSize": 13,
    "fontWeight": 800,
    "cursor": "pointer"
  },
  "input": {
    "width": "100%",
    "padding": "11px 12px",
    "border": "1px solid #D5DDE6",
    "borderRadius": 8,
    "fontSize": 15,
    "fontFamily": "inherit",
    "boxSizing": "border-box"
  },
  "label": {
    "fontSize": 12.5,
    "fontWeight": 800,
    "color": "#5A6B7E",
    "marginTop": 10,
    "marginBottom": 4,
    "display": "block"
  },
  "chip": {
    "display": "inline-block",
    "padding": "3px 10px",
    "borderRadius": 12,
    "fontSize": 12,
    "fontWeight": 700,
    "marginRight": 5,
    "marginBottom": 4,
    "cursor": "pointer",
    "userSelect": "none"
  },
  "gateBg": {
    "position": "fixed",
    "inset": 0,
    "background": "linear-gradient(135deg, #0A142D, #1F3864)",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "zIndex": 999,
    "padding": 24
  },
  "gateCard": {
    "background": "rgba(255,255,255,0.1)",
    "backdropFilter": "blur(12px)",
    "border": "1px solid rgba(255,255,255,0.2)",
    "borderRadius": 16,
    "padding": 24,
    "maxWidth": 360,
    "width": "100%",
    "textAlign": "center"
  },
  "tabBar": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "background": "#fff",
    "borderTop": "1px solid #E8EDF3",
    "display": "flex",
    "padding": "6px 4px calc(env(safe-area-inset-bottom, 0px) + 10px)",
    "zIndex": 10
  },
  "tabBtn": {
    "flex": 1,
    "background": "none",
    "border": "none",
    "padding": "6px 2px",
    "cursor": "pointer",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "gap": 2,
    "color": "#8A97A6"
  },
  "tabBtnActive": {
    "color": "#1F3864"
  },
  "fab": {
    "position": "fixed",
    "right": 20,
    "bottom": 90,
    "width": 56,
    "height": 56,
    "borderRadius": 28,
    "background": "#C8102E",
    "color": "#fff",
    "border": "none",
    "boxShadow": "0 4px 16px rgba(200,16,46,0.4)",
    "fontSize": 28,
    "cursor": "pointer",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "zIndex": 20
  },
  "modal": {
    "position": "fixed",
    "inset": 0,
    "background": "rgba(0,0,0,0.5)",
    "display": "flex",
    "alignItems": "flex-end",
    "justifyContent": "center",
    "zIndex": 100
  },
  "modalCard": {
    "background": "#fff",
    "borderRadius": "20px 20px 0 0",
    "padding": "20px 16px 30px",
    "width": "100%",
    "maxWidth": 500,
    "maxHeight": "90vh",
    "overflowY": "auto"
  },
  "itemCard": {
    "background": "#fff",
    "borderRadius": 12,
    "padding": 12,
    "marginBottom": 8,
    "boxShadow": "0 1px 3px rgba(0,0,0,0.06)",
    "cursor": "pointer"
  },
  "T": {
    "ink": "#0B1729",
    "navy": "#1F3864",
    "paper": "#EEF2F7",
    "line": "#DFE6EF",
    "mute": "#78899E",
    "live": "#C8102E"
  },
  "display": {
    "fontSize": 28,
    "fontWeight": 900,
    "letterSpacing": -0.5,
    "lineHeight": 1.1
  },
  "title": {
    "fontSize": 18,
    "fontWeight": 800,
    "letterSpacing": -0.2
  },
  "eyebrow": {
    "fontSize": 11,
    "fontWeight": 800,
    "letterSpacing": 1.5
  },
  "c": {
    "background": "#fff",
    "borderRadius": 16,
    "padding": 16,
    "margin": "0 12px 10px",
    "border": "1px solid #E7EDF4",
    "boxShadow": "0 1px 2px rgba(11,23,41,.04)"
  },
  "board": {
    "background": "linear-gradient(160deg,#0B1729,#1F3864)",
    "color": "#fff",
    "borderRadius": 16,
    "padding": "18px 16px 16px 20px",
    "margin": "calc(env(safe-area-inset-top, 0px) + 12px) 12px 10px",
    "position": "relative",
    "overflow": "hidden",
    "boxShadow": "0 6px 20px rgba(11,23,41,.22)"
  },
  "rail": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "width": 4,
    "background": "#C8102E"
  },
  "tile": {
    "background": "#fff",
    "border": "1px solid #E7EDF4",
    "borderRadius": 16,
    "padding": "14px 12px",
    "cursor": "pointer",
    "textAlign": "left",
    "display": "flex",
    "flexDirection": "column",
    "gap": 6,
    "fontFamily": "inherit"
  }
};

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: Uo */
const GEMINI_MODELS = [
  {
    "id": "gemini-3.6-flash",
    "label": "Gemini 3.6 Flash ⭐",
    "desc": "最新2026/11推出、最強Flash",
    "tier": "flash"
  },
  {
    "id": "gemini-3.5-flash",
    "label": "Gemini 3.5 Flash",
    "desc": "2026/5推出、agentic任務強",
    "tier": "flash"
  },
  {
    "id": "gemini-3.5-flash-lite",
    "label": "Gemini 3.5 Flash Lite",
    "desc": "最便宜、超快",
    "tier": "flash"
  },
  {
    "id": "gemini-3.1-flash",
    "label": "Gemini 3.1 Flash",
    "desc": "穩定版",
    "tier": "flash"
  },
  {
    "id": "gemini-3.1-flash-lite",
    "label": "Gemini 3.1 Flash Lite",
    "desc": "輕量版",
    "tier": "flash"
  },
  {
    "id": "gemini-3.1-pro",
    "label": "Gemini 3.1 Pro ⭐",
    "desc": "最強推理2026/2推出",
    "tier": "pro"
  },
  {
    "id": "gemini-3-pro-preview",
    "label": "Gemini 3 Pro Preview",
    "desc": "Pro預覽版",
    "tier": "pro"
  },
  {
    "id": "gemini-2.5-flash",
    "label": "Gemini 2.5 Flash",
    "desc": "2025年版本、可能較穩定",
    "tier": "flash"
  },
  {
    "id": "gemini-2.5-flash-lite",
    "label": "Gemini 2.5 Flash Lite",
    "desc": "2.5輕量",
    "tier": "flash"
  },
  {
    "id": "gemini-2.5-pro",
    "label": "Gemini 2.5 Pro",
    "desc": "2.5 Pro",
    "tier": "pro"
  }
];

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: z */
const HOME_GRID = [
  {
    "k": "tax",
    "t": "退稅單全部備齊",
    "d": "Global Blue / Planet 的單子,每張都要有店章"
  },
  {
    "k": "order",
    "t": "🔴 先退稅蓋章,再托運行李",
    "d": "海關可能要查驗商品,所以不能先托運"
  },
  {
    "k": "path",
    "t": "確認你要走哪一條退稅動線",
    "d": "手提行李 → 過安檢後找海關｜託運行李 → 先跟 check-in 說,帶行李去 Check-in 1 海關蓋章再托運"
  },
  {
    "k": "early",
    "t": "抵達機場第一件事就辦退稅",
    "d": "別先逛免稅店。海關有辦公時間,過了就蓋不到章"
  },
  {
    "k": "knife",
    "t": "瑞士刀已放託運行李",
    "d": "絕對不能手提"
  },
  {
    "k": "liquid",
    "t": "超過 100ml 的液體已放託運",
    "d": "保養品、酒、精油"
  },
  {
    "k": "fragile",
    "t": "巧克力放在行李中層,用衣服包好",
    "d": "怕壓怕融"
  },
  {
    "k": "cheese",
    "t": "起司用保冷袋",
    "d": "若有買生鮮起司"
  },
  {
    "k": "weight",
    "t": "確認行李重量沒超重",
    "d": "EK086 的托運額度"
  },
  {
    "k": "cabin",
    "t": "手提行李只留:護照、錢包、手機、充電器、外套",
    "d": "其他全部託運"
  }
];

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: Sy */
const CITY_COORDS = {
  "台北": [
    25.033,
    121.565
  ],
  "台中": [
    24.147,
    120.673
  ],
  "台南": [
    22.998,
    120.212
  ],
  "高雄": [
    22.628,
    120.301
  ],
  "東京": [
    35.6812,
    139.7671
  ],
  "京都": [
    35.0116,
    135.7681
  ],
  "大阪": [
    34.6937,
    135.5023
  ],
  "札幌": [
    43.0642,
    141.3469
  ],
  "蘇黎世": [
    47.3769,
    8.5417
  ],
  "日內瓦": [
    46.2044,
    6.1432
  ],
  "巴塞爾": [
    47.5596,
    7.5886
  ],
  "Luzern": [
    47.0502,
    8.3093
  ],
  "Zermatt": [
    46.0207,
    7.7491
  ],
  "St. Moritz": [
    46.4989,
    9.8355
  ],
  "Interlaken": [
    46.6863,
    7.8632
  ],
  "Grindelwald": [
    46.6242,
    8.0416
  ],
  "Ascona": [
    46.1554,
    8.7716
  ],
  "Fürstenau": [
    46.681,
    9.4567
  ],
  "Crissier": [
    46.5486,
    6.5773
  ],
  "Bad Ragaz": [
    47.0033,
    9.5028
  ],
  "Küsnacht": [
    47.3175,
    8.5859
  ],
  "杜拜": [
    25.2048,
    55.2708
  ]
};

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: En */
const GEMINI_MODELS_FALLBACK = {
  "gemini_flash": {
    "unit": 0.075,
    "per": 1000,
    "freeDaily": 250,
    "name": "Gemini Flash",
    "tier": "gemini"
  },
  "gemini_pro": {
    "unit": 1.25,
    "per": 1000,
    "freeDaily": 50,
    "name": "Gemini Pro",
    "tier": "gemini"
  },
  "places_search": {
    "unit": 17,
    "per": 1000,
    "freeMonthly": null,
    "name": "Places 搜尋",
    "tier": "places"
  },
  "places_details": {
    "unit": 17,
    "per": 1000,
    "freeMonthly": null,
    "name": "Places 詳細",
    "tier": "places"
  },
  "places_photo": {
    "unit": 7,
    "per": 1000,
    "freeMonthly": null,
    "name": "Places 照片",
    "tier": "places"
  },
  "geocoding": {
    "unit": 5,
    "per": 1000,
    "freeMonthly": null,
    "name": "Geocoding",
    "tier": "places"
  }
};

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: Vt */
const COLLECTION_TYPES = [
  {
    "id": "restaurant",
    "label": "餐廳",
    "emoji": "🍽",
    "color": "#C8102E",
    "tags": [
      "台菜",
      "日料",
      "義式",
      "法式",
      "泰式",
      "韓式",
      "中式",
      "美式",
      "素食",
      "早餐",
      "咖啡",
      "甜點",
      "小吃",
      "火鍋",
      "燒烤",
      "海鮮",
      "其他"
    ]
  },
  {
    "id": "spot",
    "label": "景點",
    "emoji": "📍",
    "color": "#2E7D32",
    "tags": [
      "自然",
      "歷史",
      "博物館",
      "購物",
      "夜景",
      "主題樂園",
      "溫泉",
      "海邊",
      "山區",
      "文青",
      "市集",
      "展覽",
      "其他"
    ]
  },
  {
    "id": "hotel",
    "label": "飯店",
    "emoji": "🏨",
    "color": "#1565C0",
    "tags": [
      "奢華",
      "精品",
      "商旅",
      "民宿",
      "青旅",
      "溫泉旅館",
      "度假村",
      "公寓",
      "其他"
    ]
  },
  {
    "id": "activity",
    "label": "活動",
    "emoji": "🎫",
    "color": "#5E35B1",
    "tags": [
      "演唱會",
      "展覽",
      "體育",
      "戲劇",
      "電影",
      "市集",
      "季節限定",
      "其他"
    ]
  }
];

