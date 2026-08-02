/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: au */
const GIFT_LIST = [
  {
    "id": "lindt",
    "n": "Lindt 巧克力",
    "cat": "chocolate",
    "pop": 95,
    "when": "倒數1-2天",
    "note": "必買。超市買比專賣店便宜30-40%。經典款Lindor球狀最受歡迎"
  },
  {
    "id": "victorinox",
    "n": "Victorinox 瑞士刀",
    "cat": "knife",
    "pop": 93,
    "when": "⚠️不能託運要早點買",
    "note": "⚠️必須託運!不能手提上飛機!可請店家刻字。要留2-3天"
  },
  {
    "id": "lindor_365",
    "n": "Lindor 365 家庭號綜合桶",
    "cat": "chocolate",
    "pop": 90,
    "when": "倒數1-2天",
    "note": "🔥網友大推!一桶365顆,分送同事最方便。CP值超高"
  },
  {
    "id": "laderach",
    "n": "Läderach 手工巧克力",
    "cat": "chocolate",
    "pop": 88,
    "when": "倒數1天",
    "note": "論斤秤,榛果片、開心果片最紅"
  },
  {
    "id": "toblerone",
    "n": "Toblerone 瑞士三角巧克力",
    "cat": "chocolate",
    "pop": 85,
    "when": "機場買最好",
    "note": "機場買4.5kg巨型有優惠"
  },
  {
    "id": "sprungli",
    "n": "Sprüngli Luxemburgerli 馬卡龍",
    "cat": "chocolate",
    "pop": 80,
    "when": "最後一天",
    "note": "⚠️只在蘇黎世最後幾天買。2天保存期"
  },
  {
    "id": "ricola",
    "n": "Ricola 草本喉糖",
    "cat": "herbal",
    "pop": 80,
    "when": "隨時",
    "note": "1包分5-10份送人的必買小禮"
  },
  {
    "id": "zyliss",
    "n": "Zyliss 削皮器",
    "cat": "kitchen",
    "pop": 80,
    "when": "隨時",
    "note": "🔥網友激推!瑞士主婦必備,一輩子用不壞"
  },
  {
    "id": "weleda",
    "n": "Weleda 天然護膚品",
    "cat": "cosmetic",
    "pop": 78,
    "when": "隨時",
    "note": "護手霜、身體乳全系列。比台灣便宜40-60%"
  },
  {
    "id": "aromat",
    "n": "Aromat 瑞士萬用調味粉",
    "cat": "food",
    "pop": 75,
    "when": "隨時",
    "note": "🔥瑞士家家戶戶必備,萬用調味神品"
  },
  {
    "id": "cailler",
    "n": "Cailler 瑞士最老巧克力",
    "cat": "chocolate",
    "pop": 72,
    "when": "倒數1-2天",
    "note": "1819創立,牛奶巧克力發明者"
  },
  {
    "id": "freitag",
    "n": "FREITAG 環保回收包",
    "cat": "fashion",
    "pop": 70,
    "when": "倒數2-3天",
    "note": "🔥瑞士國寶級品牌!每個包獨一無二"
  },
  {
    "id": "emmental",
    "n": "Emmental 起司",
    "cat": "cheese",
    "pop": 68,
    "when": "倒數1天",
    "note": "⚠️冷藏。就是那個有洞的經典瑞士起司"
  },
  {
    "id": "frey",
    "n": "Frey 巧克力(Migros獨家)",
    "cat": "chocolate",
    "pop": 68,
    "when": "倒數1-2天",
    "note": "CP值超高,只在Migros賣"
  },
  {
    "id": "herbamare",
    "n": "Herbamare 有機草本鹽",
    "cat": "food",
    "pop": 58,
    "when": "隨時",
    "note": "海鹽+14種草本,萬用調味"
  },
  {
    "id": "appenzeller",
    "n": "Appenzeller 起司",
    "cat": "cheese",
    "pop": 60,
    "when": "倒數1天",
    "note": "⚠️冷藏。用祕方藥草浸泡是招牌"
  },
  {
    "id": "bally",
    "n": "Bally 瑞士鞋/皮件",
    "cat": "fashion",
    "pop": 58,
    "when": "倒數2-3天",
    "note": "瑞士百年皮鞋品牌,機場退稅8%"
  },
  {
    "id": "mammut",
    "n": "Mammut 登山用品",
    "cat": "souvenir",
    "pop": 60,
    "when": "倒數2-3天",
    "note": "🔥瑞士登山品牌之王,退稅30%"
  },
  {
    "id": "sigg",
    "n": "SIGG 瑞士保溫瓶",
    "cat": "kitchen",
    "pop": 50,
    "when": "隨時",
    "note": "瑞士百年鋁瓶,登山愛好者必備"
  },
  {
    "id": "kambly",
    "n": "Kambly 瑞士餅乾",
    "cat": "food",
    "pop": 65,
    "when": "隨時",
    "note": "🔥Bretzeli薄餅、Butterfly蝴蝶餅乾必買"
  },
  {
    "id": "maggi",
    "n": "Maggi 液體調味料(瑞士版)",
    "cat": "food",
    "pop": 40,
    "when": "隨時",
    "note": "⚠️液體要託運。瑞士原版配方"
  },
  {
    "id": "minor",
    "n": "Minor 巧克力棒",
    "cat": "chocolate",
    "pop": 55,
    "when": "隨時",
    "note": "當地小孩最愛的懷舊小點"
  },
  {
    "id": "carandache",
    "n": "Caran d'Ache 瑞士名筆",
    "cat": "stationery",
    "pop": 50,
    "when": "隨時",
    "note": "彩鉛套裝送小孩;鋼筆送長輩"
  },
  {
    "id": "rex_peeler",
    "n": "REX 傳統削皮器",
    "cat": "kitchen",
    "pop": 65,
    "when": "隨時",
    "note": "CHF 3-5的國民神器。當禮物分送"
  },
  {
    "id": "tea",
    "n": "瑞士高山花草茶",
    "cat": "drink",
    "pop": 50,
    "when": "隨時",
    "note": "高山花草茶包最受歡迎"
  },
  {
    "id": "muesli",
    "n": "Bircher Müesli 瑞士穀物",
    "cat": "food",
    "pop": 55,
    "when": "隨時",
    "note": "瑞士早餐經典。Familia品牌最傳統"
  },
  {
    "id": "kirsch",
    "n": "櫻桃酒 Kirsch",
    "cat": "alcohol",
    "pop": 40,
    "when": "倒數2-3天",
    "note": "⚠️液體託運限制。40度以上"
  },
  {
    "id": "nespresso",
    "n": "Nespresso 咖啡膠囊",
    "cat": "drink",
    "pop": 55,
    "when": "隨時",
    "note": "限定口味台灣買不到"
  },
  {
    "id": "ovomaltin",
    "n": "Ovomaltine 阿華田(瑞士版)",
    "cat": "food",
    "pop": 50,
    "when": "隨時",
    "note": "跟台灣阿華田口味完全不同"
  },
  {
    "id": "watch",
    "n": "瑞士手錶",
    "cat": "watch",
    "pop": 75,
    "when": "倒數3-5天",
    "note": "要辦退稅、確認品質。Swatch/Tissot"
  },
  {
    "id": "cheese_fondue",
    "n": "起司鍋套組",
    "cat": "kitchen",
    "pop": 25,
    "when": "倒數1天",
    "note": "⚠️含奶製品海關注意"
  },
  {
    "id": "basler_lackerli",
    "n": "Basler Läckerli 蜂蜜堅果餅",
    "cat": "food",
    "pop": 50,
    "when": "倒數2-3天",
    "note": "⚠️只有Basel產地最正宗"
  },
  {
    "id": "bundnerfleisch",
    "n": "Bündnerfleisch 風乾牛肉",
    "cat": "food",
    "pop": 45,
    "when": "倒數1天",
    "note": "⚠️海關禁止肉品!當地享用即可"
  },
  {
    "id": "cowbell",
    "n": "瑞士牛鈴",
    "cat": "souvenir",
    "pop": 45,
    "when": "隨時",
    "note": "⚠️很重,注意行李重量"
  },
  {
    "id": "cuckoo",
    "n": "布穀鳥鐘(小型)",
    "cat": "souvenir",
    "pop": 10,
    "when": "隨時",
    "note": "⚠️易碎需小心託運"
  },
  {
    "id": "tapestry",
    "n": "瑞士十字紋樣手帕/桌巾",
    "cat": "souvenir",
    "pop": 20,
    "when": "隨時",
    "note": "實用不佔位"
  },
  {
    "id": "just",
    "n": "Just 精油/滾珠",
    "cat": "cosmetic",
    "pop": 42,
    "when": "隨時",
    "note": "滾珠瓶頸肩痠痛必買"
  },
  {
    "id": "burgerstein",
    "n": "Burgerstein 瑞士維他命",
    "cat": "health",
    "pop": 55,
    "when": "隨時",
    "note": "綜合維他命/魚油最熱門"
  },
  {
    "id": "anti_brumm",
    "n": "Anti-Brumm 瑞士防蚊液",
    "cat": "health",
    "pop": 35,
    "when": "隨時",
    "note": "⚠️液體託運。超強效防蚊"
  },
  {
    "id": "movenpick",
    "n": "Mövenpick 冰淇淋",
    "cat": "food",
    "pop": 45,
    "when": "當地吃",
    "note": "⚠️冷凍帶不走。焦糖玫瑰口味"
  },
  {
    "id": "rivella",
    "n": "Rivella 瑞士國民飲料",
    "cat": "drink",
    "pop": 40,
    "when": "當地喝",
    "note": "獨特國民飲料,用牛奶做的碳酸飲料"
  },
  {
    "id": "barmelweiss",
    "n": "Bärendreck 甘草糖",
    "cat": "food",
    "pop": 35,
    "when": "隨時",
    "note": "瑞士傳統甘草糖,喜歡的很愛"
  },
  {
    "id": "wenger",
    "n": "Wenger 瑞士刀(平價版)",
    "cat": "knife",
    "pop": 42,
    "when": "倒數2-3天",
    "note": "⚠️必須託運。Victorinox子品牌"
  },
  {
    "id": "knorr",
    "n": "Knorr 瑞士湯粉",
    "cat": "food",
    "pop": 38,
    "when": "隨時",
    "note": "瑞士版跟其他國家配方不同"
  },
  {
    "id": "aeschbach",
    "n": "Aeschbach 瑞士巧克力(高級)",
    "cat": "chocolate",
    "pop": 33,
    "when": "倒數1-2天",
    "note": "⚠️只在Luzern有。手工怕融化"
  },
  {
    "id": "chocolate_meili",
    "n": "Meili 動物造型巧克力",
    "cat": "chocolate",
    "pop": 45,
    "when": "倒數1天",
    "note": "造型精緻,適合送給小孩"
  },
  {
    "id": "valmont",
    "n": "Valmont 瑞士頂級保養品",
    "cat": "cosmetic",
    "pop": 30,
    "when": "倒數1-2天",
    "note": "退稅+機場免稅。機場買最划算"
  },
  {
    "id": "laprairie",
    "n": "La Prairie 頂級保養品",
    "cat": "cosmetic",
    "pop": 40,
    "when": "最後一天",
    "note": "機場買比台灣專櫃便宜30-40%"
  }
];

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: fy */
const GIFT_CATEGORIES = {
  "chocolate": {
    "label": "巧克力",
    "icon": "🍫"
  },
  "food": {
    "label": "食品",
    "icon": "🍲"
  },
  "cheese": {
    "label": "起司",
    "icon": "🧀"
  },
  "knife": {
    "label": "瑞士刀",
    "icon": "🔪"
  },
  "kitchen": {
    "label": "廚具",
    "icon": "🍳"
  },
  "cosmetic": {
    "label": "保養品",
    "icon": "💄"
  },
  "drink": {
    "label": "飲料",
    "icon": "🥤"
  },
  "fashion": {
    "label": "時尚",
    "icon": "👜"
  },
  "health": {
    "label": "保健",
    "icon": "💊"
  },
  "watch": {
    "label": "手錶",
    "icon": "⌚"
  },
  "stationery": {
    "label": "文具",
    "icon": "✏️"
  },
  "herbal": {
    "label": "藥草",
    "icon": "🌿"
  },
  "alcohol": {
    "label": "酒",
    "icon": "🍷"
  },
  "souvenir": {
    "label": "紀念品",
    "icon": "🎀"
  },
  "custom": {
    "label": "自訂",
    "icon": "📝"
  }
};

