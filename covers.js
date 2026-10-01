// Оригинальные абстрактные обложки: рисуются кодом, без чужих изображений и персонажей.
function rnd(seed) { let s = seed * 9301 + 49297; return () => (s = (s * 9301 + 49297) % 233280) / 233280; }

function motifOf(a) {
  if (a.g.includes("музыка")) return "bars";
  if (a.g.includes("спорт")) return "ball";
  const g = a.g[0];
  if (g.startsWith("sci")) return "planet";
  return {"фэнтези":"moon","приключения":"mtn","экшен":"slash","драма":"rain","триллер":"eye",
    "психологическое":"rings","романтика":"petals","комедия":"burst","slice of life":"leaves",
    "мистика":"arcs","хоррор":"spikes"}[g] || "rings";
}

function art(a, p = "") {
  if (typeof SCENES !== "undefined" && SCENES[a.i]) {
    const k = p + "s" + a.i;
    return `<svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${k}v" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset=".4" stop-color="#000" stop-opacity="0"/></linearGradient></defs>${SCENES[a.i].replace(/@/g, k)}<rect width="200" height="300" fill="url(#${k}v)"/></svg>`;
  }
  const r = rnd(a.i + 7), h = a.h, h2 = (h + 55) % 360, id = p + "g" + a.i;
  const light = `hsl(${h2} 85% 78%)`, soft = `hsl(${h2} 85% 78% / .35)`;
  const stars = n => Array.from({length: n}, () => `<circle cx="${r()*200}" cy="${r()*160}" r="${.6+r()*1.6}" fill="#fff" opacity="${.4+r()*.5}"/>`).join("");
  const hills = (n, base, amp) => Array.from({length: n}, (_, k) => {
    let d = `M0 300 L0 ${base + k*28}`;
    for (let x = 0; x <= 200; x += 40) d += ` L${x} ${base + k*28 - r()*amp}`;
    return `<path d="${d} L200 300Z" fill="hsl(${h} 45% ${30 - k*8}%)"/>`;
  }).join("");
  let m = "";
  switch (motifOf(a)) {
    case "moon": m = stars(24) + `<circle cx="${70+r()*60}" cy="${70+r()*30}" r="34" fill="${light}"/>` + hills(3, 190, 60); break;
    case "mtn": m = `<circle cx="${60+r()*80}" cy="110" r="26" fill="${light}"/>` + hills(3, 175, 70); break;
    case "slash": m = Array.from({length: 6}, (_, i) => `<rect x="-60" y="${20+i*48}" width="320" height="${5+r()*16}" fill="${light}" opacity="${.25+r()*.6}" transform="rotate(-24 100 150)"/>`).join(""); break;
    case "rain": m = Array.from({length: 40}, () => { const x = r()*200, y = r()*220; return `<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y+18}" stroke="${light}" stroke-width="1.2" opacity=".5"/>`; }).join("") + `<circle cx="100" cy="215" r="44" fill="${soft}"/><rect y="215" width="200" height="90" fill="hsl(${h} 50% 12%)"/>`; break;
    case "planet": m = stars(30) + `<circle cx="100" cy="125" r="46" fill="${light}"/><ellipse cx="100" cy="125" rx="86" ry="18" fill="none" stroke="#fff" stroke-width="3" opacity=".7" transform="rotate(-18 100 125)"/>`; break;
    case "eye": m = `<path d="M15 140 Q100 55 185 140 Q100 225 15 140Z" fill="none" stroke="${light}" stroke-width="4"/><circle cx="100" cy="140" r="32" fill="${soft}"/><circle cx="100" cy="140" r="13" fill="#000" opacity=".8"/>`; break;
    case "rings": m = Array.from({length: 7}, (_, i) => `<circle cx="100" cy="135" r="${14+i*14}" fill="none" stroke="${light}" stroke-width="${1+r()*3}" opacity="${.9-i*.1}"/>`).join(""); break;
    case "petals": m = Array.from({length: 8}, (_, k) => `<ellipse cx="100" cy="92" rx="15" ry="38" fill="${soft}" stroke="${light}" transform="rotate(${k*45} 100 130)"/>`).join("") + `<circle cx="100" cy="130" r="10" fill="${light}"/>`; break;
    case "burst": m = Array.from({length: 18}, (_, k) => { const t = k*Math.PI/9; return `<line x1="${100+Math.cos(t)*38}" y1="${130+Math.sin(t)*38}" x2="${100+Math.cos(t)*(80+r()*30)}" y2="${130+Math.sin(t)*(80+r()*30)}" stroke="${light}" stroke-width="5" stroke-linecap="round" opacity=".8"/>`; }).join("") + `<circle cx="100" cy="130" r="30" fill="${light}"/>`; break;
    case "ball": m = `<circle cx="100" cy="130" r="56" fill="none" stroke="${light}" stroke-width="4"/><path d="M44 130 Q100 80 156 130 M44 130 Q100 180 156 130 M100 74 V186" fill="none" stroke="${light}" stroke-width="3" opacity=".8"/>`; break;
    case "bars": m = Array.from({length: 15}, (_, i) => { const hh = 20 + r()*110; return `<rect x="${10+i*12.5}" y="${135-hh/2}" width="8" height="${hh}" rx="4" fill="${light}" opacity=".85"/>`; }).join(""); break;
    case "leaves": m = Array.from({length: 11}, () => `<ellipse cx="${20+r()*160}" cy="${60+r()*160}" rx="${10+r()*14}" ry="${22+r()*20}" fill="hsl(${h2} 70% ${55+r()*25}%)" opacity=".6" transform="rotate(${r()*180} 100 130)"/>`).join(""); break;
    case "arcs": m = stars(14) + Array.from({length: 5}, (_, i) => `<circle cx="100" cy="135" r="${22+i*17}" fill="none" stroke="${light}" stroke-width="3" stroke-dasharray="${8+r()*30} ${8+r()*20}" opacity="${.9-i*.12}"/>`).join(""); break;
    case "spikes": m = Array.from({length: 7}, (_, i) => `<polygon points="${i*30-5},300 ${i*30+10},${200-r()*60} ${i*30+25},300" fill="hsl(${h} 40% 8%)"/>`).join("") + `<circle cx="100" cy="100" r="30" fill="hsl(${h2} 90% 55%)" opacity=".8"/>`; break;
  }
  return `<svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs><linearGradient id="${id}" x1="0" y1="0" x2=".6" y2="1"><stop offset="0" stop-color="hsl(${h} 65% 42%)"/><stop offset="1" stop-color="hsl(${h2} 70% 15%)"/></linearGradient>
<linearGradient id="${id}v" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset=".4" stop-color="#000" stop-opacity="0"/></linearGradient></defs>
<rect width="200" height="300" fill="url(#${id})"/><g opacity=".3">${m}</g><g fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(100 130) scale(1.3) translate(-100 -130)">${ICONS[a.i] || ""}</g><rect width="200" height="300" fill="url(#${id}v)"/></svg>`;
}
