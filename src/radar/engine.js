/* ============================================================
   🔭 錯過雷達引擎
   ============================================================ */
const DAY = 86400000;
const iso = d => new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const today = () => iso(new Date());
const daysBetween = (a,b) => Math.round((new Date(b+"T00:00:00") - new Date(a+"T00:00:00"))/DAY);
const fmtMD = s => s ? (+s.slice(5,7))+"/"+(+s.slice(8,10)) : "";

/* 決策儲存：want / skip / done */
const KEY = "hub_experience_decisions";
function getDecisions(){ try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch{ return {}; } }
function setDecision(id, v){
  const d = getDecisions();
  if (v) d[id] = { v, at: Date.now() }; else delete d[id];
  try{ localStorage.setItem(KEY, JSON.stringify(d)); }catch(e){}
  return d;
}

/* 今天在哪、還會去哪 */
function tripStatus(t){
  t = t || today();
  const day = TRIP.days.find(x => x.d === t);
  const left = daysBetween(t, TRIP.endEurope);
  const upcoming = [...new Set(TRIP.days.filter(x => x.d >= t && x.d <= TRIP.end).map(x => x.k))];
  return {
    today: t,
    city: day ? day.city : "",
    cityKey: day ? day.k : "",
    left,
    upcoming,
    inTrip: t >= TRIP.start && t <= TRIP.end,
  };
}

/* 這座城市你還剩幾天？今天是不是最後一天？ */
function cityDaysLeft(cityKey, t){
  t = t || today();
  const remaining = TRIP.days.filter(x => x.d >= t && x.k === cityKey);
  return { n: remaining.length, isLast: remaining.length === 1, lastDate: remaining.length ? remaining[remaining.length-1].d : null };
}

/* 單項體驗的當下狀態 */
function evalExp(exp, cityKey, t){
  t = t || today();
  const st = tripStatus(t);
  const dec = getDecisions()[exp.id];
  const cd = cityDaysLeft(cityKey, t);

  // 季節
  const inSeason = t >= exp.season.from && t <= exp.season.to;
  const seasonEndsIn = daysBetween(t, exp.season.to);
  const isClosedToday = (exp.closed || []).includes(t);

  // 還去不去得到這座城市？
  const willVisit = st.upcoming.includes(cityKey);
  const hereToday = st.cityKey === cityKey;

  let level, label;
  if (dec && dec.v === "done")      { level = "done";   label = "已完成"; }
  else if (dec && dec.v === "skip") { level = "skip";   label = "已略過"; }
  else if (!willVisit)              { level = "missed"; label = "已離開這座城市"; }
  else if (!inSeason && t > exp.season.to) { level="missed"; label = "季節已過"; }
  else if (hereToday && isClosedToday)     { level="warn";   label = "今天公休"; }
  else if (hereToday && cd.isLast)         { level="urgent"; label = "🔴 今天是這座城市最後一天"; }
  else if (hereToday)                      { level="today";  label = "今天在這裡，還有 "+cd.n+" 天"; }
  else if (inSeason && seasonEndsIn <= 7)  { level="warn";   label = "季節剩 "+seasonEndsIn+" 天"; }
  else                                     { level="ok";     label = cd.n+" 天後會到"; }

  return { level, label, inSeason, isClosedToday, willVisit, hereToday, cityDays: cd, decision: dec ? dec.v : null };
}

/* 全域掃描：回傳排序後的清單 */
function scan(t){
  t = t || today();
  const out = [];
  Object.entries(EXPERIENCES).forEach(([ck, list]) => {
    list.forEach(exp => {
      const ev = evalExp(exp, ck, t);
      out.push({ ...exp, cityKey: ck, cityName: CITY_NAME[ck] || ck, ...ev });
    });
  });
  const order = { urgent:0, warn:1, today:2, ok:3, done:4, skip:5, missed:6 };
  out.sort((a,b) => (order[a.level]-order[b.level]) || (b.missRisk-a.missRisk));
  return out;
}

/* 首頁警示用：只回傳需要注意的 */
function alerts(t){
  return scan(t).filter(x => ["urgent","warn","today"].includes(x.level) && !x.decision);
}
