/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: Yo */
const CITY_STORES = {
  "zermatt": {
    "name": "策馬特",
    "note": "觀光價偏高。巧克力三大品牌都有店,但超市才是 CP 值所在。",
    "shops": [
      {
        "id": "laderach_zm",
        "brand": "Läderach",
        "name": "Läderach Chocolate Store",
        "cat": "🍫 巧克力・精品",
        "addr": "Bahnhofplatz 2(車站廣場)",
        "lat": 46.0236677,
        "lon": 7.7481884,
        "rating": 4.5,
        "reviews": 172,
        "price": "$$$",
        "hours": "每天 08:30–19:00",
        "phone": "+41 27 967 43 73",
        "url": "https://laderach.com/eu-en/frischschoggitm",
        "verdict": "⭐ 策馬特首選(送禮)",
        "intel": [
          "「**大部分巧克力磚都提供試吃。**」",
          "「黑巧/牛奶區的女士人非常好,**花時間解說並幫我們包裝**。」",
          "「**禮盒包裝很漂亮,份量也足。**」",
          "「我買了巧克力,**店員送了我一份小禮物**,讓我一整天都很開心。」",
          "⚠️「我覺得**很貴**,但這種店本來就這樣。」"
        ],
        "items": [
          {
            "n": "FrischSchoggi Tin 禮盒",
            "price": "約 CHF 45–60",
            "look": "**金屬鐵盒**,盒面有浮雕山形圖案",
            "why": "官方 Tasting Box 選入的暢銷組合,15 片約 420g",
            "value": "鐵盒**防壓防光**,長途飛行不碎。平均每片約 CHF 3–4,比散裝划算,鐵盒還能留著"
          },
          {
            "n": "FrischSchoggi 秤重(散裝)",
            "price": "約 CHF 12–18/100g",
            "look": "**一大片攤在櫃上**,店員拿鐵鎚敲",
            "why": "Läderach 的成名作,現敲現秤,看得到整顆堅果",
            "value": "**台灣完全買不到**。可以自選口味、要多少切多少"
          },
          {
            "n": "Branchli 小條裝",
            "price": "約 CHF 6–9/條",
            "look": "細長單條包裝,有 Dark/Milk/Blond 三色",
            "why": "單條包裝好分送",
            "value": "**分送同事最實際**,單價低又有品牌感"
          }
        ],
        "flavors": [
          "Hazelnut Dark 榛果黑巧(榛果佔 30%)",
          "Salted Caramel 鹽味焦糖(fleur de sel)",
          "Almond Milk 杏仁牛奶(最安全)",
          "Raspberry Blackberry White(真果粒,最好看)",
          "Nut-Trio Milk Dark(堅果控)"
        ],
        "flow": [
          "① 進門先找**試吃盤**,店員會主動請你試",
          "② 決定口味後說要幾克,**店員現場敲下來秤重**",
          "③ 送人就說 **\"separate bags please\"**",
          "④ 禮盒是現成的,直接拿",
          "⑤ 結帳時主動說要退稅"
        ],
        "tiers": {
          "boss": {
            "i": "FrischSchoggi Tin 禮盒",
            "q": "1–2 份",
            "p": "CHF 45–60"
          },
          "mate": {
            "i": "Branchli 小條裝",
            "q": "10–15 條",
            "p": "CHF 6–9/條"
          },
          "kin": {
            "i": "FrischSchoggi 秤重",
            "q": "300–500g",
            "p": "CHF 12–18/100g"
          }
        },
        "warns": [
          "🔴 **賞味期只有 2–4 週**,官方說前幾週香氣最明顯 → 別太早買",
          "💔 散裝怕壓怕融,禮盒有鐵盒保護"
        ],
        "script": "Hello! Could I try a few samples first?\n\nI'd like:\n- One FrischSchoggi Tin (gift box)\n- 10 Branchli bars, mixed\n- 400g FrischSchoggi: Hazelnut Dark & Salted Caramel\n\nCould you pack them separately as gifts?\nAnd a tax refund form, please."
      },
      {
        "id": "lindt_zm",
        "brand": "Lindt",
        "name": "Lindt Chocolate Shop Zermatt",
        "cat": "🍫 巧克力・大眾",
        "addr": "Bahnhofstrasse 68",
        "lat": 46.0208138,
        "lon": 7.7463174,
        "rating": 4.6,
        "reviews": 347,
        "price": "$$",
        "hours": "10:00–19:00(週五 09:00–20:00)",
        "phone": "+41 27 303 40 59",
        "url": "https://www.lindt.ch",
        "verdict": "評價最高(4.6★/347)",
        "intel": [
          "🔑「**檢查每項產品的原產地。我造訪時,黑色標籤的產品全部都是瑞士製造。**」← 認黑標",
          "「有**大量傳統與創意口味的巧克力磚、繽紛的秤重自選區**,還有現成禮盒。」",
          "「**現點現做的熱巧克力**,服務人員會多國語言,超friendly!」",
          "⚠️「**熱巧克力吧 18:00 就關**,商店還開著。」",
          "「送禮選擇無限多,**價格合理**。」"
        ],
        "items": [
          {
            "n": "Excellence 片裝",
            "price": "約 CHF 4–6/片",
            "look": "**細長扁平紙盒**,深色系包裝",
            "why": "專家公認瑞士最佳黑巧。Orange Intense(含杏仁)網友點名最多",
            "value": "**單價低但選對口味顯得懂行**。台灣有賣但配方不同,認黑標才是瑞士版"
          },
          {
            "n": "秤重自選區(Pick & Mix)",
            "price": "依重量",
            "look": "**一整排透明糖果桶**,自己夾",
            "why": "可以混搭多種口味,自由度最高",
            "value": "**想送誰就配誰的口味**,也適合湊小份量"
          },
          {
            "n": "Lindor 金球綜合",
            "price": "約 CHF 10–35",
            "look": "紅色球體,金銀藍等不同色代表口味",
            "why": "網友:「比美國賣的好太多」",
            "value": "外殼薄、內餡流心,**分送最實用**"
          }
        ],
        "flavors": [
          "Excellence Orange Intense(含杏仁)",
          "Excellence 70%/85% 黑巧",
          "Excellence 海鹽(接受度最高)",
          "Lindor 金球綜合"
        ],
        "flow": [
          "① 進門先看**黑色標籤**——那是瑞士製造的",
          "② 逛秤重自選區,可以混搭口味",
          "③ 想喝熱巧克力要**18:00 前**",
          "④ 大量採購前,先比較一下 Migros 的價格"
        ],
        "tiers": {
          "boss": {
            "i": "Excellence 精選數款 + 禮盒",
            "q": "3–5 片",
            "p": "CHF 4–6/片"
          },
          "mate": {
            "i": "Lindor 金球大包",
            "q": "1–2 包",
            "p": "CHF 25–35"
          },
          "kin": {
            "i": "秤重自選喜歡的口味",
            "q": "看喜好",
            "p": "依重量"
          }
        },
        "warns": [
          "⚠️ **台灣也買得到 Lindt,配方不同**。一定要認**黑標**或瑞士生產地址",
          "💰 **超市(Migros/Coop)通常更便宜**,大量買先去比價"
        ],
        "script": "Hello! Which products here are Swiss-made?\nI'm looking for the black label ones.\n\nI'd like some Excellence bars — orange, sea salt and 70%.\nAnd a mixed box of Lindor."
      },
      {
        "id": "aufco_zm",
        "brand": "Victorinox",
        "name": "aufco ag",
        "cat": "🔪 瑞士刀・專家",
        "addr": "Bahnhofstrasse 5",
        "lat": 46.0229,
        "lon": 7.747835,
        "rating": 4.5,
        "reviews": 26,
        "price": "$$",
        "hours": "平日 08:00–12:00 / 14:00–18:30・週六 14:00–18:30・**週日休**",
        "phone": "+41 27 967 34 33",
        "url": "https://www.victorinox.com",
        "verdict": "⭐ 瑞士刀就來這家",
        "intel": [
          "🔑「**想買 Victorinox 的任何東西,這裡就是首選。Othmar 和他的團隊是全瑞士最好的供應商。**他們在策馬特鎮上和 Gornergrat 都有店,是刀具和家居用品的天堂。」",
          "「**Victorinox 可客製刻字。**」",
          "「老闆很親切,**用他的 JURA 咖啡機請我喝了杯免費咖啡**,還不知道我會不會買。」",
          "⚠️「有位年輕店員在我們要求重做刻字上蠟時**態度很差,還用她的語言跟同事取笑我們**。」(兩則類似負評)"
        ],
        "items": [
          {
            "n": "Climber(14 功能)",
            "price": "約 CHF 40–55",
            "look": "經典紅色,**9.1cm**,厚度適中",
            "why": "最經典的尺寸,不大不小",
            "value": "**第一次買瑞士刀最安全的選擇**,送人不會出錯"
          },
          {
            "n": "Huntsman(15 功能,含鋸子)",
            "price": "約 CHF 50–70",
            "look": "同紅色,比 Climber 略厚",
            "why": "多一把小鋸子,露營野餐真的用得到",
            "value": "**加刻名字後是最有記憶點的伴手禮**,長官級首選"
          },
          {
            "n": "Classic SD(鑰匙圈款)",
            "price": "約 CHF 25–35",
            "look": "**只有 5.8cm**,可掛鑰匙圈,多種顏色",
            "why": "輕巧隨身",
            "value": "**單價低、可大量買**,女生和小孩也適合"
          }
        ],
        "flavors": [],
        "flow": [
          "① 先決定功能數(Climber 最安全)",
          "② **要刻字先講**,現場可客製",
          "③ 刻完檢查蠟色有沒有填滿,**不滿意當場說**",
          "④ 買多把記得辦退稅",
          "⑤ ⚠️ **週日公休**,要買趁平日或週六下午"
        ],
        "tiers": {
          "boss": {
            "i": "Huntsman + 刻名字",
            "q": "1–2 把",
            "p": "CHF 50–70 + 刻字"
          },
          "mate": {
            "i": "Classic SD 鑰匙圈款",
            "q": "5–10 把",
            "p": "CHF 25–35/把"
          },
          "kin": {
            "i": "Climber",
            "q": "1–2 把",
            "p": "CHF 40–55"
          }
        },
        "warns": [
          "🔴 **絕對不能手提上飛機,一律託運**",
          "🔴 **刻字要時間**,建議 8/3 前買完",
          "⚠️ 有客訴提到年輕店員態度問題,**刻字完成務必當場檢查**"
        ],
        "script": "Hello! I'd like to buy Victorinox knives.\n\n- 1 Huntsman, with engraving (name: ___)\n- 5 Classic SD\n- 1 Climber\n\nHow long does engraving take?\nAnd could we have a tax refund form?"
      },
      {
        "id": "migros_zm",
        "brand": "Migros",
        "name": "Migros-Supermarkt Zermatt",
        "cat": "🛒 超市・CP值",
        "addr": "Hofmattstrasse 12",
        "lat": 46.0217657,
        "lon": 7.7482835,
        "rating": 4.3,
        "reviews": 1026,
        "price": "$",
        "hours": "每天 08:00–19:00",
        "phone": "+41 27 720 65 40",
        "url": "https://www.migros.ch",
        "verdict": "⭐ Frey 巧克力唯一通路",
        "intel": [
          "🔑「**價格其實非常合理。**我們整趟的food和補給都在這買,價格很划算。」",
          "🔑「**有一個地下樓層很容易被忽略**,就在收銀台附近。**酒類在隔壁的專門店買。**」",
          "「訂了有廚房的公寓是明智選擇,**住超過 3 天就會省很多**。」",
          "⚠️「結完帳被主管追出來指控偷竊,查了收據也沒道歉。隔天再去還被員工全程盯著。」(單一則,但值得知道)"
        ],
        "items": [
          {
            "n": "Frey 巧克力(Giandor 等)",
            "price": "約 CHF 2–5/片",
            "look": "**藍白色系包裝**,寫著 Frey",
            "why": "瑞士第二大廠,**幾乎不外銷**,瑞士人自己買最多的牌子",
            "value": "🔑 **只有 Migros 買得到**,Coop 沒有。品質接近 Lindt 但**價格只要一半**"
          },
          {
            "n": "Ricola 各口味",
            "price": "約 CHF 2–4/包",
            "look": "黃色紙盒,山形圖案",
            "why": "瑞士國民草本糖,口味比台灣多",
            "value": "**銅板價、超輕、好分送**,一次抓十包不心疼"
          },
          {
            "n": "Aromat 萬用調味粉",
            "price": "約 CHF 3–6",
            "look": "**黃色罐子**,紅字 Aromat",
            "why": "瑞士家庭必備,撒蛋、沙拉、薯條",
            "value": "台灣買不到,**很有生活感的伴手禮**"
          }
        ],
        "flavors": [],
        "flow": [
          "① 進門先看**紅色特價標籤**",
          "② 巧克力區找 **Frey**(藍白包裝)——只有這裡有",
          "③ **別忘了地下樓層**,在收銀台附近",
          "④ 酒要去**隔壁的專門店**買",
          "⑤ 自助結帳機比較快"
        ],
        "tiers": {
          "boss": {
            "i": "❌ 不建議",
            "q": "—",
            "p": "超市貨送長官不夠體面"
          },
          "mate": {
            "i": "Ricola × 10 + Frey × 10",
            "q": "20 份",
            "p": "約 CHF 50–70"
          },
          "kin": {
            "i": "Frey + Aromat + Ricola",
            "q": "看需要",
            "p": "約 CHF 30–50"
          }
        },
        "warns": [
          "💰 **這裡是全策馬特最便宜的**,巧克力大量買在這裡買",
          "⚠️ 有客訴提到防損人員態度,**保留收據**"
        ],
        "script": "(超市自助,不用開口)"
      },
      {
        "id": "coop_zm",
        "brand": "Coop",
        "name": "Coop Supermarkt Zermatt",
        "cat": "🛒 超市・最近",
        "addr": "Bahnhofplatz 6(車站正對面)",
        "lat": 46.0233462,
        "lon": 7.7489869,
        "rating": 4.2,
        "reviews": 1222,
        "price": "$",
        "hours": "08:00–20:00",
        "phone": "",
        "url": "https://www.coop.ch",
        "verdict": "離車站最近",
        "intel": [
          "「**就在火車站正對面**,想省下大街上餐廳的高價,來這裡就對了。」",
          "「搭火車抵達時採買的**絕佳位置**。」",
          "⚠️ 有數則關於店員態度的負評(含針對亞洲客人),**自助結帳機比較省事**。"
        ],
        "items": [
          {
            "n": "Cailler 巧克力",
            "price": "約 CHF 4–7",
            "look": "**紅色包裝**,寫 Cailler",
            "why": "瑞士最老(1819),瑞士人從小吃到大",
            "value": "**Femina 禮盒**適合送長輩,Branchli 榛果棒適合分送"
          },
          {
            "n": "起司(Emmental/Appenzeller)",
            "price": "約 CHF 3–9/100g",
            "look": "冷藏櫃,可請店員切",
            "why": "瑞士代表食品",
            "value": "🧊 **要冷藏,回程前一天才買**。請店員真空包裝"
          },
          {
            "n": "Fondue 起司包",
            "price": "約 CHF 10–15",
            "look": "冷藏區塑膠袋裝",
            "why": "已調配好,回台灣加白酒就能煮",
            "value": "**把瑞士的味道帶回家**,比買鍋子實際"
          }
        ],
        "flavors": [],
        "flow": [
          "① 出車站正對面就是",
          "② 冷藏區找起司和 Fondue 包",
          "③ 巧克力區有 Cailler、Lindt(但沒 Frey)",
          "④ **自助結帳機比較省事**"
        ],
        "tiers": {
          "boss": {
            "i": "❌ 不建議",
            "q": "—",
            "p": "—"
          },
          "mate": {
            "i": "Cailler Branchli × 10",
            "q": "10 份",
            "p": "約 CHF 80–120"
          },
          "kin": {
            "i": "起司 + Fondue 包 + Cailler",
            "q": "看需要",
            "p": "約 CHF 40–60"
          }
        },
        "warns": [
          "🧊 起司要冷藏,**回程前一天才買**",
          "⚠️ 有態度負評,建議用自助結帳"
        ],
        "script": "(超市自助,不用開口)"
      },
      {
        "id": "bucherer_zm",
        "brand": "Bucherer",
        "name": "Bucherer",
        "cat": "⌚ 手錶・精品",
        "addr": "Bahnhofstrasse 6",
        "lat": 46.0231681,
        "lon": 7.7476788,
        "rating": 4.6,
        "reviews": 213,
        "price": "$$$$",
        "hours": "09:00–12:00 / 14:00–18:30・**週日休**",
        "phone": "+41 27 967 53 53",
        "url": "https://www.bucherer.com",
        "verdict": "只在有預算時考慮",
        "intel": [
          "「客戶顧問 Laura Nigrelli **很有耐心也很細心**,連錶盤和錶圈的差異都講解得很清楚。」",
          "「就算我們**什麼都沒買**,Senija 還是很親切、耐心回答所有問題。」",
          "⚠️「一開始我覺得**被差別對待,直到店員注意到我戴的錶**。精品服務應該對每位客人一致。」"
        ],
        "items": [
          {
            "n": "Mondaine 瑞士國鐵錶",
            "price": "約 CHF 200–300",
            "look": "**白面黑針,紅色秒針圓點**",
            "why": "瑞士國鐵車站時鐘的官方授權設計",
            "value": "**最有瑞士感又不天價**,退稅後更划算"
          },
          {
            "n": "Tissot / Certina",
            "price": "約 CHF 300–800",
            "look": "依款式",
            "why": "瑞士中價位代表品牌",
            "value": "**單筆滿 CHF 300 可退 8%**,買錶最划算的地方就是退稅"
          }
        ],
        "flavors": [],
        "flow": [
          "① 進去可以先看不用買,店員普遍很有耐心",
          "② 詢問 **Swiss made** 認證",
          "③ **一定要辦退稅**(滿 CHF 300 退 8%)",
          "④ ⚠️ **週日公休、中午 12–14 點休息**"
        ],
        "tiers": {
          "boss": {
            "i": "視預算",
            "q": "—",
            "p": "CHF 200+"
          },
          "mate": {
            "i": "❌ 不適合",
            "q": "—",
            "p": "單價太高"
          },
          "kin": {
            "i": "Mondaine 國鐵錶",
            "q": "1 只",
            "p": "CHF 200–300"
          }
        },
        "warns": [
          "🔴 **中午 12:00–14:00 休息、週日公休**",
          "💰 **務必辦退稅**,8% 是一大筆"
        ],
        "script": "Hello, I'm interested in Swiss-made watches around CHF 200–400.\nCould you show me the Mondaine railway watches?\nAnd we'd like a tax refund form."
      }
    ],
    "skip": [
      {
        "n": "Confiserie Sprüngli 策馬特店",
        "why": "「**這家店沒有完整的產品線**,而且**策馬特的服務遠遜於其他 Sprüngli 分店**,一位店員相當無禮。」→ 留到蘇黎世本店"
      },
      {
        "n": "Matterland Souvenirs",
        "why": "3.7★,多則種族歧視與態度負評"
      },
      {
        "n": "WEGA Souvenirs",
        "why": "3.6★。雖然可刻 Victorinox,但有「給 50 法郎只找 4.2 法郎、沒收據」的負評"
      }
    ]
  },
  "stmoritz": {
    "name": "聖莫里茲",
    "note": "精品小鎮,物價高。巧克力有 Läderach,但日用品和伴手禮 Coop 最划算。",
    "shops": [
      {
        "id": "laderach_sm",
        "brand": "Läderach",
        "name": "Läderach St. Moritz",
        "cat": "🍫 巧克力・精品",
        "addr": "Via Serlas 26",
        "lat": 46.4973015,
        "lon": 9.8394916,
        "rating": 4.7,
        "reviews": 317,
        "price": "$$$",
        "hours": "平日 09:00–18:30・週日 09:00–17:00・**週六公休**",
        "phone": "+41 81 833 57 26",
        "url": "https://laderach.com/eu-en/frischschoggitm",
        "verdict": "⭐ 評價 4.7,鎮上最好",
        "intel": [
          "「走進 Läderach 就像被巧克力天使擁抱。**整面牆都是手工巧克力大板。試吃?當然有。**自制力?沒了。」",
          "「**買了覆盆莓口味,超好吃!** 店員也超親切。」",
          "「比超市貴,**但絕對值得**。」",
          "⚠️「巧克力很好,**但店員很不友善**。」(單一則)"
        ],
        "items": [
          {
            "n": "FrischSchoggi 秤重",
            "price": "約 CHF 12–18/100g",
            "look": "**整面牆的大板巧克力**,店員拿鎚子敲",
            "why": "覆盆莓口味被網友單獨點名",
            "value": "**台灣完全買不到**,可自選口味"
          },
          {
            "n": "FrischSchoggi Tin 禮盒",
            "price": "約 CHF 45–60",
            "look": "金屬鐵盒,浮雕山形",
            "why": "防壓防光,長途飛行不碎",
            "value": "送長官最體面"
          }
        ],
        "flavors": [
          "Raspberry 覆盆莓(網友點名)",
          "Hazelnut Dark 榛果黑巧",
          "Salted Caramel 鹽味焦糖"
        ],
        "flow": [
          "① 先試吃,店員會主動請",
          "② 選好口味說要幾克",
          "③ 送人請他們分裝",
          "④ 🔴 **週六公休**,別白跑"
        ],
        "tiers": {
          "boss": {
            "i": "FrischSchoggi Tin",
            "q": "1–2 份",
            "p": "CHF 45–60"
          },
          "mate": {
            "i": "Branchli 小條",
            "q": "10–15 條",
            "p": "CHF 6–9/條"
          },
          "kin": {
            "i": "FrischSchoggi 秤重",
            "q": "300–500g",
            "p": "CHF 12–18/100g"
          }
        },
        "warns": [
          "🔴 **週六公休**",
          "🔴 賞味期 2–4 週,別太早買",
          "💡 蘇黎世的 Läderach 更大、選擇更多,可以留到那裡"
        ],
        "script": "Hello! Could I try some samples?\nI'd like 400g FrischSchoggi — raspberry and hazelnut.\nCould you pack them separately as gifts?"
      },
      {
        "id": "coop_sm",
        "brand": "Coop",
        "name": "Coop 聖莫里茲 Bellevue",
        "cat": "🛒 超市・最大",
        "addr": "Via dal Bagn 18",
        "lat": 46.490617,
        "lon": 9.835171,
        "rating": 4.4,
        "reviews": 1870,
        "price": "$",
        "hours": "平日 08:00–19:00(週五到 20:00)・週六 08:00–18:00・週日 09:00–18:00",
        "phone": "+41 81 837 56 60",
        "url": "https://www.coop.ch",
        "verdict": "⭐ 全鎮 CP 值第一",
        "intel": [
          "🔑「**最棒的超市!什麼都買得到,連伴手禮和帶回國的食物都有。比紀念品店便宜太多了!**」",
          "「**兩層樓**,位在 Dorf 和 Bad 之間。水果蔬菜永遠新鮮。」",
          "「**巧克力可頌只要 CHF 1.95**,超好吃!」",
          "「以這座城市來說,**價格真的很合理**。」"
        ],
        "items": [
          {
            "n": "各家巧克力(Cailler/Lindt)",
            "price": "約 CHF 4–8",
            "look": "巧克力貨架整排",
            "why": "同樣的牌子,比紀念品店便宜一半",
            "value": "🔑 **網友直說「比紀念品店便宜太多」**"
          },
          {
            "n": "瑞士起司",
            "price": "約 CHF 3–9/100g",
            "look": "冷藏櫃,可請店員切",
            "why": "種類齊全、新鮮",
            "value": "🧊 要冷藏,回程前一天買"
          },
          {
            "n": "國旗磁鐵等小物",
            "price": "約 CHF 3–8",
            "look": "收銀台附近的紀念品區",
            "why": "超市也賣紀念品",
            "value": "**比觀光店便宜很多**"
          }
        ],
        "flavors": [],
        "flow": [
          "① 位在 Dorf 和 Bad 之間,**有兩層樓別漏掉**",
          "② 免費停車 90 分鐘",
          "③ 二樓有小餐館",
          "④ 巧克力和紀念品都在這買最划算"
        ],
        "tiers": {
          "boss": {
            "i": "❌ 不建議",
            "q": "—",
            "p": "超市貨不夠體面"
          },
          "mate": {
            "i": "Cailler/Lindt 大量",
            "q": "10–20 份",
            "p": "約 CHF 60–100"
          },
          "kin": {
            "i": "起司 + 巧克力 + 日用",
            "q": "看需要",
            "p": "約 CHF 40–70"
          }
        },
        "warns": [
          "🧊 起司要冷藏,回程前一天買",
          "💰 **這裡是全鎮最便宜的**"
        ],
        "script": "(超市自助,不用開口)"
      },
      {
        "id": "hanselmann_sm",
        "brand": "Hanselmann",
        "name": "Confiserie Hanselmann",
        "cat": "🍰 百年甜點",
        "addr": "Via Maistra 8",
        "lat": 46.4976872,
        "lon": 9.8391866,
        "rating": 4,
        "reviews": 1999,
        "price": "$$$",
        "hours": "每天 07:30–19:00",
        "phone": "+41 81 833 38 64",
        "url": "",
        "verdict": "1870 年代老店",
        "intel": [
          "「**1870 年代開到現在的老咖啡館,相當有名。**早餐超讚,沙拉、蛋糕、水果奶油、咖啡都很棒。」",
          "「後來又回去打包了巧克力和糕點,**都很好**。」",
          "⚠️「**店員相當不友善**,明明不忙卻很冷淡。」(多則類似)",
          "⚠️「價格偏貴,但整體值得這個名氣。」"
        ],
        "items": [
          {
            "n": "Engadiner Nusstorte 核桃塔",
            "price": "約 CHF 15–30",
            "look": "厚實的圓形塔,金黃酥皮",
            "why": "**恩加丁地區的傳統名產**,聖莫里茲所在地的代表甜點",
            "value": "🔑 **只有這一區才道地**,保存期長好帶回台灣"
          },
          {
            "n": "手工巧克力",
            "price": "約 CHF 10–25",
            "look": "櫃內散裝,可自選",
            "why": "百年配方",
            "value": "帶「老店」的故事性"
          }
        ],
        "flavors": [],
        "flow": [
          "① 一樓是麵包甜點櫃,**二樓是咖啡館有景觀**",
          "② 買伴手禮直接在一樓櫃檯",
          "③ ⚠️ 服務態度普通,**自己看好再指**"
        ],
        "tiers": {
          "boss": {
            "i": "Engadiner Nusstorte",
            "q": "1–2 個",
            "p": "CHF 15–30"
          },
          "mate": {
            "i": "❌ 不適合",
            "q": "—",
            "p": "單價高、不好分"
          },
          "kin": {
            "i": "核桃塔 + 手工巧克力",
            "q": "看需要",
            "p": "CHF 25–50"
          }
        },
        "warns": [
          "⚠️ 多則負評提到服務冷淡,先有心理準備",
          "💰 價格偏高"
        ],
        "script": "Hello, one Engadiner Nusstorte to take away, please."
      }
    ],
    "skip": [
      {
        "n": "Lüthi & Co.(Via dal Bagn 54)",
        "why": "⚠️ **歐元匯率坑客**:「今天匯率 1 CHF = 1.02 EUR,他卻對 52 法郎收我們 61 歐元。」另有多則店員態度負評。**真要去就只付瑞郎。**"
      }
    ]
  },
  "zurich": {
    "name": "蘇黎世",
    "note": "🔴 主力採購場。班霍夫大道一條龍,但**車站地下的 ShopVille 才是全天候王牌**。",
    "shops": [
      {
        "id": "laderach_hb",
        "brand": "Läderach",
        "name": "Läderach 車站店(ShopVille)",
        "cat": "🍫 巧克力・全天候",
        "addr": "ShopVille HB(車站地下)",
        "lat": 47.3784188,
        "lon": 8.539657,
        "rating": 4.6,
        "reviews": 142,
        "price": "$$$",
        "hours": "平日 07:30–21:00・**週末也開 09:00–20:00**",
        "phone": "+41 44 212 18 48",
        "url": "https://laderach.com/eu-en/frischschoggitm",
        "verdict": "⭐⭐ 分送同事就來這家",
        "intel": [
          "🔑「我們買了 **40 顆散裝巧克力要分給 20 位同事**,本來打算自己包。店員 Isabel 主動幫我們忙——**她細心地一份份包好、綁上緞帶,還給了我們 20 個獨立小袋。**」← 這正是你要的",
          "「**全瑞士最好的巧克力。**店員讓我試了各種口味,也很願意回答問題。」",
          "⚠️「有一次遇到店員態度冷淡,只給一片試吃(我們有兩個人)。」"
        ],
        "items": [
          {
            "n": "散裝 + 請店員分裝",
            "price": "約 CHF 1.5–2/顆",
            "look": "櫃內散裝,自己指",
            "why": "🔑 **店員會免費幫你分成小袋、綁緞帶**",
            "value": "**分送同事的最佳解**。40 顆分 20 份,對方收到是精緻小包裝不是塑膠袋"
          },
          {
            "n": "FrischSchoggi Tin 禮盒",
            "price": "約 CHF 45–60",
            "look": "金屬鐵盒,浮雕山形",
            "why": "防壓防光",
            "value": "送長官"
          },
          {
            "n": "綜合 Pralines 盒",
            "price": "CHF 9.2/6 顆起",
            "look": "精緻小盒,店家包裝紙",
            "why": "網友實測「**6 顆 9.2 法郎,約 1.5 法郎一顆,以這品質很合理**」",
            "value": "小份量體面,適合送不熟的人"
          }
        ],
        "flavors": [
          "Hazelnut Dark 榛果黑巧",
          "Pistachio 開心果",
          "Salted Caramel 鹽味焦糖",
          "Raspberry 覆盆莓"
        ],
        "flow": [
          "① **直接說你要分送幾人**,店員會主動幫你分裝",
          "② 先試吃再決定口味",
          "③ 要緞帶和小袋就開口要,是免費的",
          "④ **這家週末也開**,班霍夫大道那兩家週末公休"
        ],
        "tiers": {
          "boss": {
            "i": "FrischSchoggi Tin 禮盒",
            "q": "1–2 份",
            "p": "CHF 45–60"
          },
          "mate": {
            "i": "散裝 40 顆 + 請店員分成 20 小袋",
            "q": "20 份",
            "p": "約 CHF 60–80"
          },
          "kin": {
            "i": "FrischSchoggi 秤重",
            "q": "300–500g",
            "p": "CHF 12–18/100g"
          }
        },
        "warns": [
          "🔴 **班霍夫大道的 Läderach 週六日公休**,只有這家車站店全週開",
          "🔴 賞味期 2–4 週"
        ],
        "script": "Hello! I need gifts for about 20 colleagues.\nCould you help me pick around 40 pieces and pack them into 20 small bags?\n\nAlso one FrischSchoggi Tin, please.\nCould I try a few samples first?\nAnd a tax refund form if we reach CHF 300."
      },
      {
        "id": "laderach_bhf",
        "brand": "Läderach",
        "name": "Läderach 班霍夫大道旗艦店",
        "cat": "🍫 巧克力・旗艦",
        "addr": "Bahnhofstrasse 106",
        "lat": 47.3766108,
        "lon": 8.5399144,
        "rating": 4.7,
        "reviews": 1973,
        "price": "$$$",
        "hours": "平日 09:00–20:00・**週六日公休**",
        "phone": "+41 44 210 11 60",
        "url": "https://laderach.com/eu-en/frischschoggitm",
        "verdict": "評價最高(4.7★/1973)",
        "intel": [
          "🔑「這裡的巧克力真的很高級,**是巧克力界的勞力士**。試吃很大方,我試了榛果和開心果,濃郁、新鮮、平衡。」",
          "「**6 顆 9.2 法郎,約 1.5 法郎一顆**,以這個品質算合理。」",
          "「跟店員 Jessica 聊了 10 分鐘,**她對製程的專業程度令我驚艷**。想要的不只是一盒巧克力的話,指名找 Jessica!」",
          "「約 **95 法郎/公斤**。」"
        ],
        "items": [
          {
            "n": "FrischSchoggi 秤重",
            "price": "**約 CHF 95/kg**",
            "look": "櫃檯後方整排大板",
            "why": "店內最核心的商品,現敲現秤",
            "value": "網友換算下來**約 CHF 9.5/100g**,比一般店家的報價還低"
          },
          {
            "n": "綜合 Pralines",
            "price": "CHF 9.2/6 顆",
            "look": "像珠寶一樣陳列",
            "why": "「陳列得像高級珠寶」",
            "value": "每顆約 CHF 1.5,體面又不貴"
          }
        ],
        "flavors": [
          "Hazelnut 榛果",
          "Pistachio 開心果",
          "Dark 黑巧系列"
        ],
        "flow": [
          "① 大方試吃,別客氣",
          "② **指名找 Jessica**(網友說她最懂製程)",
          "③ 秤重報價約 CHF 95/kg",
          "④ 🔴 **週六日公休**"
        ],
        "tiers": {
          "boss": {
            "i": "FrischSchoggi Tin + 緞帶",
            "q": "1–2 份",
            "p": "CHF 45–60"
          },
          "mate": {
            "i": "Pralines 6 顆小盒 × 數盒",
            "q": "看人數",
            "p": "CHF 9.2/盒"
          },
          "kin": {
            "i": "FrischSchoggi 秤重",
            "q": "500g",
            "p": "約 CHF 48"
          }
        },
        "warns": [
          "🔴 **週六日公休**——你 8/4–8/6 是週二三四,沒問題",
          "🔴 賞味期 2–4 週"
        ],
        "script": "Hello! Could I try some samples?\nIs Jessica available? I'd love some advice.\n\nI'd like 500g FrischSchoggi, mixed.\nAnd a tax refund form, please."
      },
      {
        "id": "migros_hb",
        "brand": "Migros",
        "name": "Migros 蘇黎世車站店",
        "cat": "🛒 超市・Frey 唯一",
        "addr": "Hauptbahnhof",
        "lat": 47.3781908,
        "lon": 8.5404261,
        "rating": 4.2,
        "reviews": 2544,
        "price": "$",
        "hours": "平日 06:30–22:00・週末 08:00–22:00",
        "phone": "+41 58 563 56 00",
        "url": "https://www.migros.ch",
        "verdict": "⭐ 巧克力最便宜",
        "intel": [
          "🔑「想帶瑞士巧克力回去送人的話,**這裡比典型的觀光陷阱好太多了**。Lindt 和其他瑞士品牌選擇都很齊全。」",
          "「乾淨、好找、種類多,**強烈推薦**。」",
          "「一進城就能買齊食物飲料日用品,**不用另外跑一趟超市**。」"
        ],
        "items": [
          {
            "n": "Frey 巧克力",
            "price": "約 CHF 2–5/片",
            "look": "**藍白色系包裝**",
            "why": "瑞士第二大廠,幾乎不外銷",
            "value": "🔑 **只有 Migros 有**,品質接近 Lindt 但價格一半"
          },
          {
            "n": "Lindt 各系列",
            "price": "約 CHF 4–8/片",
            "look": "認**黑色標籤**=瑞士製造",
            "why": "同樣的 Lindt,比專賣店便宜 30–40%",
            "value": "**大量採購就在這裡**"
          },
          {
            "n": "Ricola / Aromat / 米飯調味",
            "price": "約 CHF 2–6",
            "look": "調味料與零食區",
            "why": "瑞士家庭日用品",
            "value": "**銅板價、超輕、好分送**"
          }
        ],
        "flavors": [],
        "flow": [
          "① **開到 22:00**,晚上也能來",
          "② 巧克力區找 **Frey**(藍白包裝)",
          "③ Lindt 認**黑標**=瑞士製",
          "④ 大量買在這裡,別去專賣店"
        ],
        "tiers": {
          "boss": {
            "i": "❌ 不建議",
            "q": "—",
            "p": "—"
          },
          "mate": {
            "i": "Lindt + Frey + Ricola 大量",
            "q": "20–30 份",
            "p": "約 CHF 80–150"
          },
          "kin": {
            "i": "自家想吃的全部",
            "q": "看需要",
            "p": "約 CHF 50–80"
          }
        },
        "warns": [
          "💰 **這裡是全蘇黎世買巧克力最划算的**",
          "⚠️ 有客訴提到保全態度,保留收據"
        ],
        "script": "(超市自助,不用開口)"
      },
      {
        "id": "swissshop_hb",
        "brand": "Swiss Shop 1291",
        "name": "Swiss Shop 1291 ShopVille",
        "cat": "🔪 瑞士刀・手錶",
        "addr": "ShopVille 車站地下 1 樓",
        "lat": 47.3769004,
        "lon": 8.5399472,
        "rating": 4.6,
        "reviews": 433,
        "price": "$$",
        "hours": "**每天 08:00–21:00**",
        "phone": "+41 44 211 61 32",
        "url": "https://www.victorinox.com",
        "verdict": "⭐ 全週開,最後補買點",
        "intel": [
          "🔑「**Ekka 先生服務極佳,非常友善也很有耐心地解說不同刀款的差異和用途。**離開美麗的瑞士前有這樣的體驗很棒。」",
          "「感謝 Thi Ha 幫我們挑選瑞士錶,**瑞士製、外型好、價格合理**。」",
          "「**這裡有我要的所有徽章別針**,而且就在蘇黎世車站下方。」"
        ],
        "items": [
          {
            "n": "Victorinox 各款",
            "price": "CHF 25–120",
            "look": "經典紅色刀身",
            "why": "店員會解說每款的差異",
            "value": "**8/6 回程當天還能補買**(車站地下,開到 21:00)"
          },
          {
            "n": "瑞士錶(入門款)",
            "price": "CHF 100–400",
            "look": "櫃內陳列",
            "why": "網友說「瑞士製、價格合理」",
            "value": "滿 CHF 300 可退稅 8%"
          },
          {
            "n": "徽章別針",
            "price": "CHF 5–15",
            "look": "整面牆的別針",
            "why": "「這裡有我要的所有別針」",
            "value": "輕、便宜、有紀念性"
          }
        ],
        "flavors": [],
        "flow": [
          "① 不確定買哪款刀,**直接問店員**,他們很願意解說",
          "② 🔪 刀具**一律託運**",
          "③ 滿 CHF 300 記得退稅",
          "④ **開到 21:00、全年無休**,最後一天也能來"
        ],
        "tiers": {
          "boss": {
            "i": "Victorinox Huntsman",
            "q": "1–2 把",
            "p": "CHF 50–70"
          },
          "mate": {
            "i": "Classic SD 或 徽章別針",
            "q": "5–10 份",
            "p": "CHF 5–35"
          },
          "kin": {
            "i": "Climber 或 瑞士錶",
            "q": "1–2 份",
            "p": "CHF 40–400"
          }
        },
        "warns": [
          "🔴 **刀具絕對不能手提**,一律託運",
          "💰 滿 CHF 300 退稅 8%"
        ],
        "script": "Hello! Could you explain the differences between the Climber and Huntsman?\n\nI'd like 1 Huntsman and 5 Classic SD.\nAnd a tax refund form, please."
      },
      {
        "id": "freitag_zh",
        "brand": "FREITAG",
        "name": "FREITAG 旗艦店(貨櫃塔)",
        "cat": "👜 設計・蘇黎世限定",
        "addr": "Geroldstrasse 17(蘇黎世西區)",
        "lat": 47.3856744,
        "lon": 8.5194463,
        "rating": 4.4,
        "reviews": 949,
        "price": "$$$",
        "hours": "平日 11:00–19:00・**週六日公休**",
        "phone": "+41 43 366 95 20",
        "url": "https://www.freitag.ch",
        "verdict": "值得專程,但要挑日子",
        "intel": [
          "🔑「**用貨櫃堆疊而成的建築**,收集廢棄卡車帆布做成獨一無二的包。是循環經濟的典範。」",
          "「有**屋頂觀景台**可以看城市(**但沒有電梯,要爬**)。」",
          "「品質很紮實、看得出耐用。**每一個都不一樣**,比多數品牌更獨特。」",
          "「款式多,**但要找到稀有花色有點難**。」"
        ],
        "items": [
          {
            "n": "郵差包 / 側背包",
            "price": "CHF 150–350",
            "look": "**每個花色都不同**,來自不同卡車帆布",
            "why": "1993 年蘇黎世發跡,循環經濟代表",
            "value": "🔑 **世上沒有第二個一樣的**。要親自挑,不能網購"
          },
          {
            "n": "小包 / 錢包",
            "price": "CHF 60–150",
            "look": "同樣帆布材質,尺寸小",
            "why": "入門款",
            "value": "單價較低,一樣是獨一無二"
          }
        ],
        "flavors": [],
        "flow": [
          "① 在蘇黎世**西區**,離車站要搭電車",
          "② 慢慢翻,**每個花色都不同**",
          "③ 想上屋頂看風景要**爬樓梯**",
          "④ 🔴 **週六日公休**,平日 11:00 才開"
        ],
        "tiers": {
          "boss": {
            "i": "郵差包",
            "q": "1 個",
            "p": "CHF 150–350"
          },
          "mate": {
            "i": "❌ 不適合",
            "q": "—",
            "p": "單價太高"
          },
          "kin": {
            "i": "小包或錢包",
            "q": "1–2 個",
            "p": "CHF 60–150"
          }
        },
        "warns": [
          "🔴 **週六日公休、平日 11:00 才開**",
          "🔴 單價高,**務必辦退稅**",
          "📍 在西區,不在班霍夫大道"
        ],
        "script": "Hello! I'm looking for a messenger bag.\nCould I see the different patterns?\nAnd we'd like a tax refund form, please."
      }
    ],
    "skip": [
      {
        "n": "機場免稅店(除了 Toblerone 大包裝)",
        "why": "價格比 Migros 貴 30–40%。**機場只買你在市區沒買到的**,或 1kg Toblerone 這種市區沒有的規格。"
      }
    ]
  },
  "dubai": {
    "name": "杜拜",
    "note": "8/7 停留一天。**這是補買的最後機會**,瑞士沒買到的可以在這裡找,也有中東限定品。",
    "shops": [
      {
        "id": "dubaimall",
        "brand": "Dubai Mall",
        "name": "The Dubai Mall",
        "cat": "🛍 綜合",
        "addr": "Downtown Dubai",
        "lat": 25.1972,
        "lon": 55.2796,
        "rating": 4.6,
        "reviews": 0,
        "price": "$$",
        "hours": "約 10:00–24:00",
        "phone": "",
        "url": "https://thedubaimall.com",
        "verdict": "最後補買機會",
        "intel": [
          "⚠️ **這一區我還沒做完整查證**,以下是通則性建議,到了現場請以實際為準。"
        ],
        "items": [
          {
            "n": "椰棗(Bateel 等)",
            "price": "依等級",
            "look": "精緻禮盒裝",
            "why": "中東代表特產",
            "value": "台灣少見的高級品項,適合送長輩"
          },
          {
            "n": "番紅花 Saffron",
            "price": "依等級",
            "look": "小玻璃罐",
            "why": "中東香料代表",
            "value": "輕、單價高、體面"
          },
          {
            "n": "駱駝奶巧克力(Al Nassma)",
            "price": "—",
            "look": "駱駝圖案包裝",
            "why": "杜拜限定,台灣完全沒有",
            "value": "**話題性最高**,同事會記得"
          }
        ],
        "flavors": [],
        "flow": [
          "① 先確認瑞士有沒有漏買的",
          "② 椰棗和番紅花在食品區",
          "③ 駱駝奶巧克力是杜拜限定"
        ],
        "tiers": {
          "boss": {
            "i": "Bateel 椰棗禮盒",
            "q": "1–2 份",
            "p": "依等級"
          },
          "mate": {
            "i": "駱駝奶巧克力",
            "q": "看人數",
            "p": "—"
          },
          "kin": {
            "i": "番紅花 + 椰棗",
            "q": "看需要",
            "p": "—"
          }
        },
        "warns": [
          "⚠️ **此城市資料未完整查證**,現場請自行判斷",
          "🧳 注意行李重量,瑞士已經買不少了"
        ],
        "script": ""
      }
    ],
    "skip": []
  }
};

/* ⛏️ 資料考古 — 自 v2.3 bundle (commit f82bfb3) 還原 | 2026-08-02 | 原壓縮變數: ev */
const PURCHASE_ITEM_MAP = {
  "laderach_zm": [
    {
      "id": "laderach_frisch",
      "n": "FrischSchoggi 鮮片巧克力"
    }
  ],
  "laderach_sm": [
    {
      "id": "laderach_frisch",
      "n": "FrischSchoggi 鮮片巧克力"
    }
  ],
  "laderach_hb": [
    {
      "id": "laderach_frisch",
      "n": "FrischSchoggi 鮮片巧克力"
    }
  ],
  "laderach_bhf": [
    {
      "id": "laderach_frisch",
      "n": "FrischSchoggi 鮮片巧克力"
    }
  ],
  "aufco_zm": [
    {
      "id": "victorinox_huntsman",
      "n": "Huntsman 瑞士刀"
    }
  ],
  "swissshop_hb": [
    {
      "id": "victorinox_huntsman",
      "n": "Huntsman 瑞士刀"
    }
  ],
  "sprungli_zh": [
    {
      "id": "sprungli_lux",
      "n": "Luxemburgerli 馬卡龍"
    }
  ]
};

