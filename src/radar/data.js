/* ============================================================
   🔭 體驗包 EXPERIENCES v1.0
   ============================================================
   missRisk: 3=這趟錯過就沒了 / 2=只有這城市有 / 1=別處也有
   資料來源可信度: high=官方或大樣本評論 / mid=聚合站 / low=部落格
   ============================================================ */

const TRIP = {
  start: "2026-07-24",
  endEurope: "2026-08-06",
  end: "2026-08-08",
  days: [
    { d:"2026-07-24", city:"台北→機上",      k:"air" },
    { d:"2026-07-25", city:"蘇黎世→琉森",    k:"luzern" },
    { d:"2026-07-26", city:"琉森",           k:"luzern" },
    { d:"2026-07-27", city:"琉森→因特拉肯",  k:"interlaken" },
    { d:"2026-07-28", city:"因特拉肯",       k:"interlaken" },
    { d:"2026-07-29", city:"因特拉肯→格林德瓦", k:"grindelwald" },
    { d:"2026-07-30", city:"格林德瓦→策馬特", k:"zermatt" },
    { d:"2026-07-31", city:"策馬特",         k:"zermatt" },
    { d:"2026-08-01", city:"策馬特",         k:"zermatt" },
    { d:"2026-08-02", city:"策馬特→聖莫里茲", k:"stmoritz" },
    { d:"2026-08-03", city:"聖莫里茲",       k:"stmoritz" },
    { d:"2026-08-04", city:"聖莫里茲→蘇黎世", k:"zurich" },
    { d:"2026-08-05", city:"蘇黎世",         k:"zurich" },
    { d:"2026-08-06", city:"蘇黎世→機上",    k:"zurich" },
    { d:"2026-08-07", city:"杜拜",           k:"dubai" },
    { d:"2026-08-08", city:"杜拜→台北",      k:"air" },
  ],
};

const CITY_NAME = { luzern:"琉森", interlaken:"因特拉肯", grindelwald:"格林德瓦",
  zermatt:"策馬特", stmoritz:"聖莫里茲", zurich:"蘇黎世", dubai:"杜拜" };

/* 七類盤點：1動物自然 2週期活動 3限定食物 4需預約 5限定交通 6節慶 7短期設施 */
const CAT = {
  nature:  { n:"動物・自然", ic:"🦌" },
  recur:   { n:"週期活動",   ic:"🔁" },
  food:    { n:"限定食物",   ic:"🍽" },
  booking: { n:"需預約",     ic:"📅" },
  transit: { n:"限定交通",   ic:"🚡" },
  fest:    { n:"節慶",       ic:"🎉" },
  facility:{ n:"短期設施",   ic:"🏛" },
};

const EXPERIENCES = {

  /* ══════════ 策馬特 ══════════ */
  zermatt: [
    { id:"blacknose_sheep", n:"黑鼻羊高山牧場", cat:"nature", missRisk:3,
      season:{from:"2026-06-20", to:"2026-09-12"},
      closed:["2026-06-24","2026-09-02","2026-09-09"],
      hours:"10:00–16:00", best:"10:00–12:30（羊最活潑、好奇、愛撒嬌）",
      dur:90, cost:"免費（需 Gornergrat 車票）", booking:"不用預約",
      loc:"Riffelberg 附近的高山花園", lat:46.0022, lon:7.7644,
      access:"Gornergrat 線在 Riffelberg 站下車，走約 5 分鐘",
      why:"全世界只有瓦萊州原生，約 125 隻，可近距離接觸。牠們對噪音敏感，要安靜。",
      warn:"🔴 官方明訂 16:00 前必須結束，下午羊會躲起來",
      src:[{s:"gornergrat.ch 官方", lv:"high"}] },

    { id:"riffelsee", n:"Riffelsee 馬特洪峰倒影", cat:"nature", missRisk:2,
      season:{from:"2026-06-01", to:"2026-10-15"}, closed:[],
      hours:"隨時（隨纜車）", best:"清晨無風時，湖面才像鏡子",
      dur:45, cost:"含在 Gornergrat 車票", booking:"不用",
      loc:"Rotenboden 站下車走 10 分鐘", lat:45.9944, lon:7.7594,
      access:"Gornergrat 線 Rotenboden 下車，往下坡走 10 分",
      why:"瑞士最經典的倒影畫面。繞到湖的北側拍，山才會完整落在水面上。",
      warn:"⚠️ 09:00 後起風就沒有倒影了。回程是上坡",
      src:[{s:"多則實地評論", lv:"high"}] },

    { id:"alpenglow_zermatt", n:"馬特洪峰日照金山", cat:"nature", missRisk:1,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"日出前後 30 分鐘", best:"日出約 06:10，峰頂首道光約 06:12–06:18",
      dur:40, cost:"免費", booking:"不用",
      loc:"教堂橋 Kirchbrücke 或住宿陽台", lat:46.0189, lon:7.7481,
      access:"村內步行",
      why:"太陽先照到 4,478m 峰頂，村子還在陰影中。光從右側 Hörnli 稜線開始。",
      warn:"⚠️ 從第一道光到全白只有約 20 分鐘",
      src:[{s:"天文計算＋地形修正", lv:"mid"}] },

    { id:"murini_view", n:"Murini 觀景點（村景夜景）", cat:"nature", missRisk:2,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"24 小時", best:"日落前後（8月約 21:00）",
      dur:60, cost:"免費", booking:"不用",
      loc:"Mürini 28", lat:46.025578, lon:7.756229,
      access:"從村中心走 20 分，最後 300m 是陡階梯",
      why:"⭐4.8。網友：「能把整個小鎮和馬特洪峰一起框進去的觀景點」",
      warn:"⚠️「對長輩不容易，很多階梯」。晚上要帶手電筒",
      src:[{s:"Google 評論 117 則", lv:"high"}] },

    { id:"glacier_paradise", n:"馬特洪峰冰川天堂 3,883m", cat:"facility", missRisk:2,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"🔴 山頂 09:00–15:30", best:"上午（午後易起雲）",
      dur:240, cost:"約 CHF 120，STP 5 折", booking:"現場買（看天氣）",
      loc:"村子南端谷站", lat:46.014423, lon:7.742351,
      access:"步行 15–18 分，或搭免費 E-Bus 到 Matterhorn Talstation",
      why:"歐洲最高纜車站。冰宮、Skywalk、38 座四千米高峰、14 條冰河。",
      warn:"🔴 比少女峰高 400m，高山症風險。山頂有急救與供氧。回程務必在 Trockener Steg 停留看湖",
      src:[{s:"Google 評論 2,570 則", lv:"high"}] },

    { id:"gorner_gorge", n:"Gorner 冰河峽谷", cat:"facility", missRisk:1,
      season:{from:"2026-05-25", to:"2026-10-20"}, closed:[],
      hours:"約 09:15–17:45", best:"雨天也可（有遮蔽）",
      dur:60, cost:"約 CHF 10", booking:"不用",
      loc:"村子南端", lat:46.0083, lon:7.7481,
      access:"步行約 20 分",
      why:"木棧道貼著岩壁，下方是冰河融水。地形跟高山完全不同。",
      warn:"🧥 峽谷內約 10°C，要帶外套",
      src:[{s:"官方＋評論", lv:"high"}] },
  ],

  /* ══════════ 聖莫里茲 ══════════ */
  stmoritz: [
    { id:"heidi_blumenweg", n:"Heidi's Blumenweg 高山花徑", cat:"nature", missRisk:3,
      season:{from:"2026-06-27", to:"2026-10-15"}, closed:[],
      hours:"隨時（隨纜車）", best:"🔴 小白花 Edelweiss 只有八月開",
      dur:90, cost:"步道免費（需纜車票）", booking:"不用",
      loc:"Chantarella → Heidi 小屋", lat:46.4886, lon:9.8261,
      access:"🔴 Chantarella 纜索列車 2026 夏季大修停駛，改搭 Signal Bahn 或接駁巴士",
      why:"1 公里平緩步道，這一區有超過 200 種野花。沿途有牌子認花名，終點是 Heidi 小屋。適合小孩和推車。",
      warn:"🔴 官方公告：St.Moritz–Chantarella–Corviglia 纜索列車今夏停駛。Corviglia 和 Piz Nair 仍可到達",
      src:[{s:"mountains.ch 官方", lv:"high"},{s:"Tripadvisor 評論", lv:"high"}] },

    { id:"marmots", n:"土撥鼠（Corviglia / Piz Nair）", cat:"nature", missRisk:3,
      season:{from:"2026-06-01", to:"2026-09-30"}, closed:[],
      hours:"白天", best:"上午較活躍",
      dur:60, cost:"含纜車票", booking:"不用",
      loc:"Corviglia 一帶", lat:46.4903, lon:9.8100,
      access:"Signal Bahn 或 Piz Nair 纜車",
      why:"評論：「可以看到很多土撥鼠。」冬天冬眠，只有夏季看得到。",
      warn:"⚠️ 秋天牠們較肥、動作較慢，反而更好觀察",
      src:[{s:"Tripadvisor 評論", lv:"high"}] },

    { id:"spa_concerts", n:"Spa Concerts「Music mondaine」", cat:"recur", missRisk:2,
      season:{from:"2026-06-01", to:"2026-09-30"}, closed:[],
      hours:"每天（場次要現場確認）", best:"下午",
      dur:60, cost:"🔴 免費", booking:"不用",
      loc:"聖莫里茲村內", lat:46.4979, lon:9.8383,
      access:"村內步行",
      why:"每天免費的古典音樂會，延續超過 100 年的療養地音樂會傳統。",
      warn:"⚠️ 我沒查到具體場次時間，請飯店櫃檯確認",
      src:[{s:"engadin.ch 官方", lv:"high"}] },

    { id:"sils_boat", n:"歐洲海拔最高的定期航線（Sils 湖）", cat:"transit", missRisk:2,
      season:{from:"2026-06-01", to:"2026-10-15"}, closed:[],
      hours:"夏季限定", best:"下午光線好",
      dur:120, cost:"另計", booking:"建議查班次",
      loc:"Sils / Silvaplana 湖", lat:46.4297, lon:9.7597,
      access:"公車（STP 免費）",
      why:"歐洲海拔最高的定期船班，夏季限定。",
      warn:"⚠️ 班次資料我沒查證，現場或官網確認",
      src:[{s:"旅遊指南", lv:"low"}] },

    { id:"nusstorte", n:"Engadiner Nusstorte 恩加丁核桃塔", cat:"food", missRisk:2,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"07:30–19:00", best:"隨時",
      dur:30, cost:"約 CHF 15–30", booking:"不用",
      loc:"Confiserie Hanselmann, Via Maistra 8", lat:46.4976872, lon:9.8391866,
      access:"村中心步行",
      why:"恩加丁地區的傳統名產，只有這一區才道地。1870 年代開到現在的老店。保存期長，好帶回台灣。",
      warn:"⚠️ 多則評論提到「店員相當不友善」，先有心理準備",
      src:[{s:"Google 評論 1,999 則", lv:"high"}] },

    { id:"morteratsch_cheese", n:"Morteratsch 高山起司工坊", cat:"food", missRisk:2,
      season:{from:"2026-06-01", to:"2026-09-30"}, closed:[],
      hours:"夏季", best:"上午看製作",
      dur:90, cost:"另計", booking:"建議先問",
      loc:"Morteratsch（Pontresina 方向）", lat:46.4406, lon:9.9339,
      access:"RhB 火車到 Morteratsch 站",
      why:"現場製作高山起司，可參觀試吃。",
      warn:"⚠️ 開放時間我沒查證",
      src:[{s:"旅遊指南", lv:"low"}] },
  ],

  /* ══════════ 蘇黎世 ══════════ */
  zurich: [
    { id:"luxemburgerli", n:"Sprüngli Luxemburgerli", cat:"food", missRisk:3,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"平日 07:30–18:30・🔴 週日休", best:"🔴 回程前一天買（保存期僅 2–3 天）",
      dur:30, cost:"CHF 25–45/盒", booking:"不用",
      loc:"Bahnhofstrasse 21（Paradeplatz）", lat:47.3695145, lon:8.5391644,
      access:"班霍夫大道",
      why:"1836 年創立。比法式馬卡龍更輕、外殼更薄，只在瑞士生產無法外銷。可自選口味裝盒。",
      warn:"🔴 保存期 2–3 天且極度易碎，必須手提不能託運。順便喝一杯本店的 Grand Cru 熱巧克力",
      src:[{s:"Google 評論 4,888 則", lv:"high"}] },

    { id:"openair_cinema", n:"夏季露天電影院", cat:"recur", missRisk:3,
      season:{from:"2026-07-01", to:"2026-08-31"}, closed:[],
      hours:"日落後", best:"天氣好的晚上",
      dur:150, cost:"依場地", booking:"部分要買票",
      loc:"湖畔／河邊多處", lat:47.3667, lon:8.5500,
      access:"市區",
      why:"季節限定。有的場地就在利馬河邊，可以邊吃邊看。",
      warn:"⚠️ 場次和地點每年不同，現場或官網查",
      src:[{s:"newinzurich.com", lv:"mid"}] },

    { id:"landesmuseum_concert", n:"國家博物館中庭免費音樂會", cat:"recur", missRisk:2,
      season:{from:"2026-07-01", to:"2026-08-31"}, closed:[],
      hours:"傍晚起", best:"晚餐前後",
      dur:60, cost:"🔴 免費、不用票", booking:"不用",
      loc:"Landesmuseum（中央車站正後方）", lat:47.3789, lon:8.5403,
      access:"中央車站走 2 分鐘",
      why:"免費音樂會和 DJ，就在中央車站後方，逛完班霍夫大道走幾步就到。",
      warn:"",
      src:[{s:"zurichguru.com", lv:"mid"}] },

    { id:"badi", n:"Badi 湖泊游泳", cat:"recur", missRisk:2,
      season:{from:"2026-05-15", to:"2026-09-15"}, closed:[],
      hours:"白天", best:"🔴 八月是高峰，水溫 22–24°C",
      dur:120, cost:"約 CHF 8", booking:"不用",
      loc:"蘇黎世湖多處", lat:47.3600, lon:8.5450,
      access:"電車",
      why:"瑞士人的夏季日常。湖畔公共泳場，非常在地。",
      warn:"",
      src:[{s:"tour-switzerland.ch", lv:"mid"}] },

    { id:"theater_spektakel", n:"Zürcher Theater Spektakel", cat:"fest", missRisk:2,
      season:{from:"2026-08-01", to:"2026-08-31"}, closed:[],
      hours:"下午到晚上", best:"傍晚",
      dur:180, cost:"部分免費", booking:"部分要票",
      loc:"Landiwiese 湖畔", lat:47.3436, lon:8.5361,
      access:"電車",
      why:"湖畔的表演藝術節，有英語演出。",
      warn:"⚠️ 確切檔期我沒查證",
      src:[{s:"newinzurich.com", lv:"mid"}] },
  ],

  /* ══════════ 杜拜 ══════════ */
  dubai: [
    { id:"dates_saffron", n:"椰棗・番紅花・駱駝奶巧克力", cat:"food", missRisk:2,
      season:{from:"2026-01-01", to:"2026-12-31"}, closed:[],
      hours:"商場約 10:00–24:00", best:"轉機停留時",
      dur:120, cost:"依等級", booking:"不用",
      loc:"The Dubai Mall", lat:25.1972, lon:55.2796,
      access:"地鐵或計程車",
      why:"駱駝奶巧克力（Al Nassma）是杜拜限定，台灣完全沒有。椰棗和番紅花輕、單價高、體面。",
      warn:"⚠️ 此城市資料未完整查證。退稅需在 check-in 前完成，驗證後 6 小時內要登機",
      src:[{s:"通則性建議", lv:"low"}] },
  ],
};

/* ── 已確認錯過的（列出來，避免以後重複查） ── */
const MISSED = [
  { city:"zermatt", n:"黑鼻羊高山牧場", why:"7/31 上 Gornergrat 時就在隔壁站，當時未察覺", date:"2026-07-31" },
  { city:"zurich",  n:"Street Parade（全球最大電音派對）", why:"8/8 舉辦，你們 8/6 離開，差兩天", date:"2026-08-08" },
  { city:"zurich",  n:"Limmat 泳渡（一年唯一可合法游泳日）", why:"8/15 舉辦", date:"2026-08-15" },
  { city:"zurich",  n:"Barfussbar 赤腳舞", why:"只有週日，你們在週二至週四", date:"" },
  { city:"stmoritz",n:"St. Moritz Gourmet Festival", why:"8/25–30 舉辦", date:"2026-08-25" },
];
