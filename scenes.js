// Оригинальные сцены по мотивам сюжета: предметы, пейзажи, свет. Без персонажей и копий постеров.
// "@" заменяется на уникальный префикс id при отрисовке.
const SCENES = {

0: `<defs><radialGradient id="@a" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#7a1f1a"/><stop offset="1" stop-color="#120708"/></radialGradient><radialGradient id="@b"><stop offset="0" stop-color="#ffd978" stop-opacity=".9"/><stop offset="1" stop-color="#ffd978" stop-opacity="0"/></radialGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/><circle cx="100" cy="135" r="95" fill="url(#@b)" opacity=".5"/>
<g fill="none" stroke="#f4c25a" stroke-width="2.2" stroke-linejoin="round"><circle cx="100" cy="135" r="72"/><circle cx="100" cy="135" r="64" stroke-width="1"/><circle cx="100" cy="135" r="38" stroke-dasharray="4 4"/><polygon points="100,70 156,167 44,167"/><polygon points="100,200 44,103 156,103"/><circle cx="100" cy="135" r="12" fill="#f4c25a" fill-opacity=".8"/></g>
<g stroke="#ffd978" stroke-width="1.5" stroke-linecap="round" opacity=".8"><path d="M60 215l-4-14M82 222l2-18M120 220l-2-20M142 212l5-14M100 228v-20"/></g>
<path d="M0 300V250l25-12 20 10 30-14 25 12 30-10 28 12 25-8 17 8V300Z" fill="#0a0405"/>`,

1: `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2a33"/><stop offset="1" stop-color="#050b0e"/></linearGradient><radialGradient id="@b"><stop offset="0" stop-color="#ff8a1f" stop-opacity=".7"/><stop offset="1" stop-color="#ff8a1f" stop-opacity="0"/></radialGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/>
<circle cx="106" cy="110" r="58" fill="none" stroke="#ff2e63" stroke-width="2" opacity=".6"/><circle cx="94" cy="110" r="58" fill="none" stroke="#2ee6ff" stroke-width="2" opacity=".6"/>
<circle cx="100" cy="110" r="58" fill="none" stroke="#e8f6f8" stroke-width="3"/><path d="M100 110V68M100 110L130 126" stroke="#e8f6f8" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="110" r="4" fill="#e8f6f8"/>
<g fill="#1a1208" stroke="#7a4a1a"><rect x="24" y="200" width="32" height="56" rx="14"/><rect x="64" y="200" width="32" height="56" rx="14"/><rect x="104" y="200" width="32" height="56" rx="14"/><rect x="144" y="200" width="32" height="56" rx="14"/></g>
<circle cx="40" cy="228" r="26" fill="url(#@b)"/><circle cx="80" cy="228" r="26" fill="url(#@b)"/><circle cx="120" cy="228" r="26" fill="url(#@b)"/><circle cx="160" cy="228" r="26" fill="url(#@b)"/>
<g font-family="monospace" font-size="30" text-anchor="middle" fill="#ff8a1f"><text x="40" y="238">1</text><text x="80" y="238">0</text><text x="120" y="238">4</text><text x="160" y="238">8</text></g>`,

4: `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1226"/><stop offset="1" stop-color="#1b0d18"/></linearGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/><circle cx="130" cy="80" r="40" fill="#e9e6f2"/><circle cx="118" cy="70" r="6" fill="#cfcbe0"/><circle cx="142" cy="92" r="9" fill="#cfcbe0"/>
<path d="M0 100h90M120 120h80M20 140h130" stroke="#0d1226" stroke-width="9" opacity=".75"/><g stroke="#05060d" stroke-width="5"><path d="M40 0v200M100 0v200M160 0v200M0 70h200"/></g>
<rect y="200" width="200" height="100" fill="#0b0508"/>
<g transform="rotate(-8 90 235)"><rect x="42" y="205" width="96" height="62" rx="3" fill="#07070b" stroke="#6b6b80"/><path d="M52 215h76M52 257h76" stroke="#3a3a4a"/><path d="M90 225l8 10-8 10-8-10Z" fill="none" stroke="#c9c9d9"/></g>
<path d="M130 280C150 250 170 235 185 215 175 245 160 262 138 285Z" fill="#d8d4e6"/><circle cx="40" cy="268" r="14" fill="#b3202a"/><path d="M40 254q4-8 10-8-1 8-10 8Z" fill="#2c6b3a"/>`,

11: `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1b4a"/><stop offset=".6" stop-color="#1f6a7a"/><stop offset="1" stop-color="#0c2530"/></linearGradient><radialGradient id="@b"><stop offset="0" stop-color="#ffb347" stop-opacity=".8"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/><circle cx="150" cy="50" r="18" fill="#f3efd8"/>
<g fill="#d9392c"><rect x="52" y="90" width="96" height="9" rx="2"/><rect x="62" y="108" width="76" height="6"/><rect x="66" y="99" width="8" height="110"/><rect x="126" y="99" width="8" height="110"/></g><path d="M44 90q56-12 112 0" stroke="#d9392c" stroke-width="5" fill="none"/>
<path d="M30 300l25-90h90l25 90Z" fill="#0a1a22"/><g stroke="#2d6a78" stroke-width="2"><path d="M50 235h100M42 255h116M36 275h128"/></g>
<g stroke="#ffb347"><path d="M28 120v14M172 120v14"/></g><circle cx="28" cy="146" r="12" fill="url(#@b)"/><circle cx="28" cy="146" r="7" fill="#ff8c2b"/><circle cx="172" cy="146" r="12" fill="url(#@b)"/><circle cx="172" cy="146" r="7" fill="#ff8c2b"/><circle cx="100" cy="240" r="6" fill="#ff8c2b"/>
<g fill="#fff" opacity=".18"><ellipse cx="60" cy="215" rx="70" ry="12"/><ellipse cx="150" cy="245" rx="70" ry="14"/><ellipse cx="90" cy="280" rx="90" ry="14"/></g>`,

12: `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1a52"/><stop offset=".55" stop-color="#8a3f8c"/><stop offset="1" stop-color="#ffb07a"/></linearGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/>
<g fill="#fff"><circle cx="30" cy="30" r="1.4"/><circle cx="70" cy="18" r="1"/><circle cx="110" cy="52" r="1.3"/><circle cx="40" cy="80" r="1"/><circle cx="180" cy="20" r="1.2"/><circle cx="20" cy="130" r="1"/><circle cx="90" cy="100" r="1.1"/><circle cx="185" cy="120" r="1"/></g>
<g stroke-linecap="round" fill="none"><path d="M152 38L70 150" stroke="#fff" stroke-width="3"/><path d="M148 44L92 162" stroke="#ffd9a0" stroke-width="2" opacity=".7"/><path d="M176 70L124 142" stroke="#fff" stroke-width="2" opacity=".8"/></g>
<circle cx="153" cy="37" r="5" fill="#fff"/><circle cx="177" cy="69" r="3.5" fill="#fff"/>
<path d="M0 240l40-50 30 30 40-60 45 70 45-40V300H0Z" fill="#2b1d4a"/><rect y="258" width="200" height="42" fill="#4a2f6e"/><g stroke="#ffb07a" opacity=".5"><path d="M50 268h30M110 276h50M30 286h40"/></g>
<path d="M20 292C70 250 120 300 180 232" stroke="#e0364b" stroke-width="2" fill="none"/>`,

24: `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd98a"/><stop offset=".25" stop-color="#d98d4a"/><stop offset=".6" stop-color="#4a2a3a"/><stop offset="1" stop-color="#05070f"/></linearGradient></defs>
<rect width="200" height="300" fill="url(#@a)"/><circle cx="100" cy="40" r="22" fill="#fff3c4"/>
<path d="M0 70q40-10 70 10l10 50-25 40 18 50-30 80H0Z" fill="#2e1c22"/><path d="M200 70q-40-10-70 10l-10 40 22 40-14 45 26 95h46Z" fill="#241520"/>
<path d="M0 140l45 20-10 50 20 40-14 50H0Z" fill="#150d14"/><path d="M200 150l-38 20 8 40-18 30 16 60h32Z" fill="#0d0a12"/>
<g fill="#ffd98a"><circle cx="98" cy="170" r="2.5"/><circle cx="108" cy="205" r="2"/><circle cx="92" cy="240" r="2"/><circle cx="104" cy="272" r="1.5"/></g>
<path d="M100 60C95 120 105 180 98 280" stroke="#e8c88a" stroke-width="1" fill="none" stroke-dasharray="3 3" opacity=".7"/>`
};
