// [название, год, студия, рейтинг (нижняя граница), жанры, настроение, темп, перерождение (0 нет, 1 да, 2 перенос), длительность, оттенок обложки]
const A = [
["Fullmetal Alchemist: Brotherhood",2009,"Bones",9,"фэнтези,приключения,драма","эпичное","средний",0,"64 эп. × 24 мин",20],
["Steins;Gate",2011,"White Fox",9,"sci‑fi,триллер","напряжённое","средний",0,"24 эп. × 24 мин",190],
["Hunter x Hunter",2011,"Madhouse",9,"приключения,экшен","эпичное","средний",0,"148 эп. × 23 мин",130],
["Attack on Titan",2013,"Wit Studio",8.5,"экшен,драма","тёмное","быстрый",0,"90 эп. × 24 мин",5],
["Death Note",2006,"Madhouse",8.5,"триллер,психологическое","напряжённое","быстрый",0,"37 эп. × 23 мин",275],
["Cowboy Bebop",1998,"Sunrise",8.5,"sci‑fi,экшен","стильное","средний",0,"26 эп. × 24 мин",35],
["Vinland Saga",2019,"MAPPA",8.5,"драма,экшен","тёмное","медленный",0,"48 эп. × 24 мин",210],
["Mushoku Tensei",2021,"Studio Bind",8,"фэнтези,драма","эпичное","средний",1,"47 эп. × 24 мин",95],
["Re:Zero",2016,"White Fox",8,"фэнтези,психологическое","тёмное","средний",2,"25 эп. × 25 мин",245],
["Slime: Тензура",2018,"8‑Bit",8,"фэнтези,комедия","уютное","быстрый",1,"24 эп. × 24 мин",170],
["Frieren: Beyond Journey's End",2023,"Madhouse",9,"фэнтези,драма","медитативное","медленный",0,"28 эп. × 24 мин",160],
["Унесённые призраками",2001,"Ghibli",8.5,"фэнтези,приключения","трогательное","средний",0,"фильм, 125 мин",330],
["Твоё имя",2016,"CoMix Wave",8.5,"романтика,драма","трогательное","средний",0,"фильм, 106 мин",200],
["Violet Evergarden",2018,"Kyoto Animation",8.5,"драма,slice of life","трогательное","медленный",0,"13 эп. × 24 мин",285],
["Demon Slayer",2019,"ufotable",8,"экшен,фэнтези","эпичное","быстрый",0,"26 эп. × 24 мин",350],
["Jujutsu Kaisen",2020,"MAPPA",8.5,"экшен,мистика","тёмное","быстрый",0,"24 эп. × 24 мин",255],
["One Punch Man",2015,"Madhouse",8.5,"комедия,экшен","смешное","быстрый",0,"12 эп. × 24 мин",48],
["Mob Psycho 100",2016,"Bones",8.5,"комедия,мистика","уютное","средний",0,"12 эп. × 24 мин",300],
["Haikyu!!",2014,"Production I.G",8.5,"спорт,драма","эпичное","быстрый",0,"25 эп. × 24 мин",25],
["Bocchi the Rock!",2022,"CloverWorks",8.5,"комедия,музыка","смешное","быстрый",0,"12 эп. × 24 мин",335],
["Spy x Family",2022,"Wit Studio",8.5,"комедия,экшен","уютное","средний",0,"25 эп. × 24 мин",150],
["Chainsaw Man",2022,"MAPPA",7.5,"экшен,хоррор","тёмное","быстрый",0,"12 эп. × 24 мин",10],
["Cyberpunk: Edgerunners",2022,"Trigger",8.5,"sci‑fi,драма","стильное","быстрый",0,"10 эп. × 25 мин",180],
["Monster",2004,"Madhouse",8.5,"триллер,психологическое","напряжённое","медленный",0,"74 эп. × 24 мин",220],
["Made in Abyss",2017,"Kinema Citrus",8.5,"приключения,фэнтези","тёмное","средний",0,"13 эп. × 24 мин",40],
["Delicious in Dungeon",2024,"Trigger",8.5,"фэнтези,комедия","уютное","средний",0,"24 эп. × 24 мин",70],
["Kaguya‑sama: Love Is War",2019,"A‑1 Pictures",8.5,"романтика,комедия","смешное","быстрый",0,"12 эп. × 24 мин",345],
["Mushishi",2005,"Artland",8.5,"мистика,slice of life","медитативное","медленный",0,"26 эп. × 25 мин",120],
["Overlord",2015,"Madhouse",7.5,"фэнтези,экшен","тёмное","средний",2,"13 эп. × 24 мин",265],
["The Eminence in Shadow",2022,"Nexus",8,"фэнтези,комедия","смешное","быстрый",1,"20 эп. × 24 мин",235]
].map((a,i)=>({i,t:a[0],y:a[1],s:a[2],r:a[3],g:a[4].split(","),m:a[5],p:a[6],rb:a[7],e:a[8],h:a[9]}));

// Сценарии: [любимый, рекомендация, заголовок-пояснение, логика подбора]
const SC = [
[0,2,"Совпадают приключения, эпичное настроение и средний темп. Оба тайтла держатся на системе способностей, дружбе героев и длинной сюжетной дуге."],
[1,8,"Общий признак — временные петли, где герой исправляет исход. Настроение сдвигается от напряжённого к тёмному, но тип напряжения остаётся."],
[7,29,"Фильтр «Перерождение» включается как обязательный. Тот же сеттинг, но тон меняется с серьёзного на смешной, а темп ускоряется."],
[13,10,"Совпадают трогательность и неторопливое повествование: оба тайтла строятся на эмоциях, а не на действии. Жанр и темп получают высокий вес."],
[20,26,"Совпадают комедия, лёгкий тон и «умные» отношения героев. Романтика усиливается, темп чуть ускоряется, студия из той же эпохи даёт небольшой бонус."]
];

const $ = s => document.querySelector(s);
const F = {q:"",g:"",m:"",p:"",r:0,rb:"",y:"",s:"",l:"",sort:"top"};
const opened = new Set();
const favs = new Set(JSON.parse(localStorage.getItem("favs") || "[]"));
const uniq = f => [...new Set(A_all(f))].sort((a,b)=>a.localeCompare(b,"ru"));
const A_all = f => D().flatMap(f);
const D = () => A;

const yearBin = y => y < 2010 ? "до 2010" : y < 2020 ? "2010–2019" : "2020 и позже";
const lenBin = e => {
  if (e.startsWith("фильм")) return "Фильм";
  const n = parseInt(e);
  return n <= 13 ? "до 13 эп." : n <= 26 ? "14–26 эп." : n <= 50 ? "27–50 эп." : "более 50 эп.";
};

function fill(id, first, values) {
  $(id).innerHTML = `<option value="">${first}</option>` + values.map(v => `<option>${v}</option>`).join("");
}
fill("#f-g", "Любой", uniq(a => a.g));
fill("#f-m", "Любое", uniq(a => [a.m]));
fill("#f-p", "Любой", ["медленный","средний","быстрый"]);
fill("#f-y", "Любой", ["до 2010","2010–2019","2020 и позже"]);
fill("#f-s", "Любая", uniq(a => [a.s]));
fill("#f-l", "Любая", ["Фильм","до 13 эп.","14–26 эп.","27–50 эп.","более 50 эп."]);
$("#f-r").innerHTML = `<option value="0">Любой</option>` + [9,8.5,8,7.5].map(v => `<option value="${v}">${v}+</option>`).join("");

// Сходство: жанр 35%, настроение 25%, темп 15%, студия 10%, рейтинг 15%
function sim(a, b) {
  const inter = a.g.filter(x => b.g.includes(x)).length;
  const j = inter / new Set([...a.g, ...b.g]).size;
  return .35*j + .25*(a.m===b.m) + .15*(a.p===b.p) + .10*(a.s===b.s) + .15*(1 - Math.abs(a.r-b.r)/2);
}
const youScore = a => [...favs].reduce((s, i) => i === a.i ? s : s + sim(a, A[i]), 0);

function reason(a, b) {
  const r = [];
  const gs = a.g.filter(x => b.g.includes(x));
  if (gs.length) r.push("жанр: " + gs[0]);
  if (a.m === b.m) r.push("то же настроение");
  if (a.p === b.p) r.push("тот же темп");
  if (a.s === b.s) r.push("та же студия");
  return r.length ? "Совпадает: " + r.join(", ") : "Близкий по рейтингу и духу";
}

const cover = h => `background:linear-gradient(160deg,hsl(${h} 65% 42%),hsl(${(h+55)%360} 70% 16%))`;

function tags(a) {
  const t = [`<span class="tag">${a.g[0]}</span>`, `<span class="tag">${a.m}</span>`];
  t.push(a.rb ? `<span class="tag rb">${a.rb===1 ? "перерождение" : "перенос в другой мир"}</span>` : `<span class="tag">${a.p} темп</span>`);
  return t.join("");
}

function card(a) {
  const on = favs.has(a.i);
  const op = opened.has(a.i);
  const mt = favs.size && !on ? Math.round(Math.max(...[...favs].map(i => sim(a, A[i]))) * 100) : null;
  const rbText = ["нет", "да", "перенос в другой мир"][a.rb];
  return `<article class="card">
    <div class="cover">${art(a)}<img src="${POSTERS[a.i] || "images/" + (a.i + 1) + ".jpg"}" alt="" loading="lazy" onerror="this.remove()"><span class="rate">★ ${a.r}+</span><span class="ct">${a.t}</span></div>
    <div class="info">
      <h3>${a.t}</h3><div class="alt">${ALT[a.i]}</div>
      <div class="meta">${a.y}, ${a.e}</div>
      <div class="tags">${tags(a)}</div>
      <div class="more" id="more-${a.i}" ${op ? "" : "hidden"}>
      <p class="known"><b>Чем знаменит:</b> ${KNOWN[a.i]}</p>
      <p class="desc">${DESC[a.i]}</p>
      <dl class="det">
        <div><dt>Жанры</dt><dd>${a.g.join(", ")}</dd></div>
        <div><dt>Студия</dt><dd>${a.s}</dd></div>
        <div><dt>Настроение</dt><dd>${a.m}</dd></div>
        <div><dt>Темп</dt><dd>${a.p}</dd></div>
        <div><dt>Перерождение</dt><dd>${rbText}</dd></div>
      </dl>
      ${mt !== null ? `<div class="match" title="Сходство с самым близким тайтлом из избранного">Совпадение с вашим вкусом: ${mt}%</div>` : ""}
      </div>
      <div class="btns">
        <button class="more-btn" data-more="${a.i}" aria-expanded="${op}" aria-controls="more-${a.i}">${op ? "Свернуть" : "Подробнее"}</button>
        <button class="fav ${on?"on":""}" data-fav="${a.i}" aria-pressed="${on}">${on?"♥ В избранном":"♡ В избранное"}</button>
        <button class="sim" data-sim="${a.i}">✦ Рекомендовать похожее</button>
      </div>
    </div></article>`;
}

function render() {
  let list = A.filter(a =>
    (!F.q || [a.t, ALT[a.i], KNOWN[a.i], DESC[a.i]].join(" ").toLowerCase().includes(F.q)) && (!F.g || a.g.includes(F.g)) && (!F.m || a.m === F.m) && (!F.p || a.p === F.p) &&
    a.r >= F.r && (F.rb === "" || a.rb === +F.rb) &&
    (!F.y || yearBin(a.y) === F.y) && (!F.s || a.s === F.s) && (!F.l || lenBin(a.e) === F.l));
  list.sort(F.sort === "you" && favs.size ? (x, y) => youScore(y) - youScore(x) : (x, y) => y.r - x.r || x.i - y.i);
  $("#grid").innerHTML = list.map(card).join("");
  $("#empty").hidden = list.length > 0;
  $("#count").textContent = `Найдено: ${list.length} из ${A.length}`;
}

function openSim(i) {
  const a = A[i];
  const top = A.filter(b => b.i !== i).sort((x, y) => sim(a, y) - sim(a, x)).slice(0, 6);
  $("#panel-title").textContent = `Похоже на «${a.t}»`;
  $("#panel-list").innerHTML = top.map(b => `<div class="simrow"><div class="mini">${art(b, "m")}</div><div><strong>${b.t}</strong><span>${reason(a, b)}</span></div></div>`).join("");
  $("#panel").classList.add("open");
  $("#panel").setAttribute("aria-hidden", "false");
}

// события
document.addEventListener("click", e => {
  const f = e.target.closest("[data-fav]"), s = e.target.closest("[data-sim]");
  if (f) {
    const i = +f.dataset.fav;
    favs.has(i) ? favs.delete(i) : favs.add(i);
    localStorage.setItem("favs", JSON.stringify([...favs]));
    render();
  }
  if (s) openSim(+s.dataset.sim);
  const mo = e.target.closest("[data-more]");
  if (mo) {
    const i = +mo.dataset.more, box = $("#more-" + i), show = box.hidden;
    box.hidden = !show;
    show ? opened.add(i) : opened.delete(i);
    mo.textContent = show ? "Свернуть" : "Подробнее";
    mo.setAttribute("aria-expanded", String(show));
  }
});
$("#close").onclick = () => { $("#panel").classList.remove("open"); $("#panel").setAttribute("aria-hidden", "true"); };
for (const [id, k] of [["#f-g","g"],["#f-m","m"],["#f-p","p"],["#f-r","r"],["#f-y","y"],["#f-s","s"],["#f-l","l"],["#f-sort","sort"]])
  $(id).onchange = e => { F[k] = k === "r" ? +e.target.value : e.target.value; render(); };
document.querySelectorAll(".chip").forEach(c => c.onclick = () => {
  document.querySelectorAll(".chip").forEach(x => x.classList.remove("on"));
  c.classList.add("on"); F.rb = c.dataset.rb; render();
});
$("#f-q").oninput = e => { F.q = e.target.value.trim().toLowerCase(); render(); };
$("#adv-toggle").onclick = e => {
  const h = $("#adv").hidden = !$("#adv").hidden;
  e.target.setAttribute("aria-expanded", String(!h));
};
$("#reset").onclick = () => {
  Object.assign(F, {q:"",g:"",m:"",p:"",r:0,rb:"",y:"",s:"",l:"",sort:"top"});
  document.querySelectorAll("select").forEach(s => s.selectedIndex = 0);
  $("#f-q").value = "";
  document.querySelectorAll(".chip").forEach((c, i) => c.classList.toggle("on", i === 0));
  render();
};

$("#scen").innerHTML = SC.map(([x, y, why]) => `<div class="sc">
  <h4>Если любите «${A[x].t}», попробуйте «${A[y].t}»</h4><p>${why}</p>
  <button class="link" data-sim="${x}">Показать похожие</button></div>`).join("");

render();
