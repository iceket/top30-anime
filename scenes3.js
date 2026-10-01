// Третья партия сцен (помощники sky() и glow() берутся из scenes2.js).
Object.assign(SCENES, {

7: sky("#2a4a7a", "#f4d49a", "#8fb0d8") + `<circle cx="140" cy="95" r="28" fill="#fff1c4"/>
<path d="M0 215q50-28 100-8t100-12V300H0Z" fill="#2f5a46"/><path d="M0 255q60-20 120 0t80-6V300H0Z" fill="#1f4034"/>
<rect x="128" y="205" width="36" height="26" fill="#5a3a2a"/><polygon points="122,205 146,185 170,205" fill="#8a3a2a"/><rect x="141" y="215" width="10" height="16" fill="#ffd36a"/>
<g fill="none" stroke="#7fd1ff" stroke-width="2"><circle cx="58" cy="118" r="34"/><circle cx="58" cy="118" r="26" stroke-dasharray="4 4"/><polygon points="58,96 77,129 39,129"/></g><circle cx="58" cy="118" r="34" fill="#7fd1ff" opacity=".18"/>
<path d="M30 250L48 160" stroke="#e8d8b0" stroke-width="3"/><circle cx="49" cy="154" r="6" fill="#7fd1ff"/>`,

9: sky("#0f3a4a", "#07171d", "#1a6a7a") + glow("#bff4ff") + `<polygon points="70,0 130,0 170,260 30,260" fill="#fff" opacity=".1"/><circle cx="100" cy="200" r="70" fill="url(#@b)"/>
<path d="M0 260q50-14 100-4t100-10V300H0Z" fill="#0a2a22"/><g fill="#9ff0ff"><path d="M20 250l8-30 8 30Z"/><path d="M170 255l6-24 8 24Z"/></g>
<path d="M58 245Q54 190 100 160Q146 190 142 245Q100 262 58 245Z" fill="#4fc3ff" stroke="#bff4ff" stroke-width="2"/><ellipse cx="82" cy="190" rx="9" ry="14" fill="#fff" opacity=".5" transform="rotate(20 82 190)"/>
<circle cx="86" cy="212" r="5" fill="#0a3a52"/><circle cx="114" cy="212" r="5" fill="#0a3a52"/><path d="M92 228Q100 236 108 228" stroke="#0a3a52" stroke-width="2" fill="none"/>`,

16: sky("#f2d44a", "#e8892a") + `<g stroke="#fff" stroke-width="10" opacity=".5"><path d="M100 140L0 0M100 140L100 0M100 140L200 0M100 140L0 140M100 140L200 140M100 140L0 300M100 140L200 300"/></g>
<circle cx="100" cy="140" r="62" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="10 8"/>
<ellipse cx="100" cy="258" rx="74" ry="18" fill="#3a1a10"/><path d="M60 258l-14-10M140 258l16-12M100 262l-4 20" stroke="#3a1a10" stroke-width="3"/>
<rect x="72" y="118" width="56" height="50" rx="12" fill="#fff3d0" stroke="#3a1a10" stroke-width="3"/><path d="M86 118v-10M100 118v-14M114 118v-10M80 150h40" stroke="#3a1a10" stroke-width="3" fill="none"/><rect x="82" y="166" width="36" height="60" fill="#e8d8b0" stroke="#3a1a10" stroke-width="3"/>`,

17: sky("#2a1a5a", "#ff9acb", "#a35fd8") + `<g fill="none" stroke="#fff"><circle cx="100" cy="140" r="38" stroke-width="3"/><circle cx="100" cy="140" r="58" stroke-width="2" opacity=".7"/><circle cx="100" cy="140" r="80" stroke-width="1.5" opacity=".5"/><circle cx="100" cy="140" r="104" stroke-width="1" opacity=".35"/></g>
<text x="100" y="160" font-family="Arial Black, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="#fff" opacity=".92">100</text>
<g fill="#ffe8f4" opacity=".85"><rect x="30" y="60" width="18" height="24" transform="rotate(-20 39 72)"/><rect x="150" y="50" width="16" height="22" transform="rotate(25 158 61)"/><rect x="40" y="220" width="20" height="14" transform="rotate(15 50 227)"/><rect x="146" y="226" width="18" height="24" transform="rotate(-30 155 238)"/></g>`,

18: `<rect width="200" height="300" fill="#14305c"/><g fill="#ffe9a8" opacity=".8"><circle cx="30" cy="20" r="6"/><circle cx="100" cy="14" r="6"/><circle cx="170" cy="20" r="6"/></g>
<rect y="236" width="200" height="64" fill="#c8843a"/><g stroke="#f4e6c0" stroke-width="2"><path d="M0 262h200M100 236v64"/></g>
<g stroke="#e8f0ff" stroke-width="1" opacity=".75"><path d="M0 170h200M0 182h200M0 194h200M0 206h200M0 218h200M20 160v66M60 160v66M100 160v66M140 160v66M180 160v66"/></g><g fill="#e8f0ff"><rect x="0" y="160" width="200" height="6"/><rect x="0" y="226" width="200" height="3"/><rect x="0" y="160" width="5" height="76"/><rect x="195" y="160" width="5" height="76"/></g>
<path d="M30 130Q80 40 130 80" stroke="#fff" stroke-width="2" stroke-dasharray="4 5" fill="none" opacity=".6"/>
<circle cx="132" cy="84" r="24" fill="#f3e6a8"/><path d="M110 76q22 4 44 0M114 100q20-16 36 4M120 66q4 22-6 36" stroke="#2a6ac8" stroke-width="2.5" fill="none"/>`,

19: sky("#2a0a2a", "#ff5aa5", "#7a1a5a") + `<polygon points="70,0 130,0 190,270 10,270" fill="#fff" opacity=".12"/>
<g fill="#16081a"><rect x="0" y="230" width="46" height="70"/><rect x="154" y="230" width="46" height="70"/></g><g fill="#3a1a44"><circle cx="23" cy="250" r="9"/><circle cx="177" cy="250" r="9"/></g>
<g transform="rotate(-28 100 200)"><ellipse cx="100" cy="215" rx="36" ry="30" fill="#ffd0e0" stroke="#7a1a5a" stroke-width="3"/><circle cx="100" cy="215" r="8" fill="#16081a"/><rect x="95" y="90" width="10" height="100" fill="#8a4a3a"/><rect x="92" y="70" width="16" height="22" rx="3" fill="#ffd0e0"/><path d="M96 100v110M100 100v110M104 100v110" stroke="#fff" stroke-width=".8" opacity=".7"/></g>
<g fill="#fff"><circle cx="40" cy="80" r="5"/><circle cx="165" cy="100" r="5"/><circle cx="150" cy="40" r="4"/></g><g stroke="#fff" stroke-width="2"><path d="M45 80V50M170 100V70M154 40V14"/></g>`,

20: sky("#ffd9a8", "#ffb0b0") + `<g fill="#6aa86a"><circle cx="28" cy="190" r="26"/><circle cx="176" cy="196" r="22"/></g><g fill="#7a5a3a"><rect x="25" y="205" width="6" height="40"/><rect x="173" y="208" width="6" height="36"/></g>
<rect x="56" y="170" width="88" height="74" fill="#fff3e0"/><polygon points="48,172 100,126 152,172" fill="#c8483a"/><rect x="90" y="206" width="20" height="38" fill="#8a5a3a"/><g fill="#ffd36a"><rect x="64" y="186" width="18" height="18"/><rect x="118" y="186" width="18" height="18"/></g>
<rect y="244" width="200" height="56" fill="#8ac07a"/><g fill="#e0364b"><path d="M100 118c-12-8-20 4-10 10l10 8 10-8c10-6 2-18-10-10Z" transform="translate(0 -20)"/></g>
<g fill="#e8c98a" stroke="#a8844a"><ellipse cx="40" cy="275" rx="9" ry="6"/><ellipse cx="155" cy="280" rx="9" ry="6"/></g>`,

21: sky("#2a0a0a", "#a31818") + `<circle cx="100" cy="95" r="55" fill="#e24a2a" opacity=".85"/>
<g transform="rotate(-18 100 150)"><rect x="24" y="136" width="150" height="26" rx="13" fill="#1a1a1a"/><path d="M34 136h130M34 162h130" stroke="#d8d8d8" stroke-width="4" stroke-dasharray="5 5"/><rect x="150" y="128" width="40" height="42" rx="6" fill="#c8312b"/></g>
<path d="M0 300V232l14-10v-16h18v28l14-14 12 14v-30h20v34l16-8 12 10v-26h22v36l14-12 16 8V300Z" fill="#0a0303"/><g fill="#ff7a5a"><circle cx="40" cy="60" r="3"/><circle cx="168" cy="48" r="2.5"/><circle cx="150" cy="180" r="2.5"/></g>`,

23: `<rect width="200" height="300" fill="#0f1618"/><polygon points="0,0 200,0 130,100 70,100" fill="#0d1417"/><polygon points="0,0 70,100 70,200 0,300" fill="#162126"/><polygon points="200,0 130,100 130,200 200,300" fill="#162126"/><polygon points="0,300 200,300 130,200 70,200" fill="#1d2a30"/><rect x="70" y="100" width="60" height="100" fill="#101a1e"/>
<g stroke="#2a3a40"><path d="M0 300L88 200M200 300L112 200M100 300V200M50 300L94 200M150 300L106 200M0 0L70 100M200 0L130 100"/></g>
<defs><radialGradient id="@b"><stop offset="0" stop-color="#ffd88a" stop-opacity=".8"/><stop offset="1" stop-color="#ffd88a" stop-opacity="0"/></radialGradient></defs><circle cx="100" cy="150" r="60" fill="url(#@b)"/><rect x="88" y="120" width="24" height="76" fill="#ffd88a"/>
<path d="M40 300l8-34h8l-8 34ZM150 300l8-34h8l-8 34Z" fill="#05080a"/>`,

26: sky("#4a1a3a", "#ffb0c8") + `<path d="M100 130C60 100 64 62 88 64C96 66 100 74 100 74C100 74 104 66 112 64C136 62 140 100 100 130Z" fill="#e0364b" stroke="#fff" stroke-width="2"/><path d="M82 52L88 36L100 48L112 36L118 52Z" fill="#ffd36a" stroke="#fff"/>
<defs><pattern id="@p" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#f4e8e0"/><rect x="20" y="20" width="20" height="20" fill="#f4e8e0"/><rect x="20" width="20" height="20" fill="#3a1a2a"/><rect y="20" width="20" height="20" fill="#3a1a2a"/></pattern></defs><rect y="210" width="200" height="90" fill="url(#@p)"/>
<g fill="#16081a" stroke="#fff" stroke-width="1.5"><circle cx="64" cy="170" r="12"/><path d="M52 218q12-34 24 0Z"/><circle cx="136" cy="170" r="12"/><path d="M124 218q12-34 24 0Z"/></g><path d="M70 160L100 140L130 160" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 4" fill="none"/>`,

27: sky("#0e2a24", "#1c4a3a", "#2a6a52") + `<path d="M120 300C110 240 70 200 90 140C100 100 80 70 110 0H150C130 60 140 100 130 150C120 200 160 240 170 300Z" fill="#0a1a14"/>
<g fill="none" stroke="#b9ffd0" stroke-linecap="round" opacity=".6"><path d="M30 250C60 210 20 170 60 130S50 70 90 40"/><path d="M180 220C150 190 190 150 160 110"/></g>
<g fill="#e8ffb0"><circle cx="40" cy="120" r="2"/><circle cx="70" cy="190" r="2.5"/><circle cx="160" cy="80" r="2"/><circle cx="180" cy="170" r="2.5"/><circle cx="55" cy="60" r="1.8"/><circle cx="110" cy="230" r="2"/><circle cx="150" cy="250" r="1.8"/><circle cx="20" cy="210" r="2"/></g>
<g fill="#fff" opacity=".12"><ellipse cx="60" cy="250" rx="80" ry="16"/><ellipse cx="150" cy="280" rx="80" ry="14"/></g>
<g fill="#d8c8a0"><path d="M70 285q10-16 20 0Z"/><path d="M96 290q8-12 16 0Z"/></g>`,

29: sky("#07060f", "#2a0f3a") + glow("#9a6bff") + `<circle cx="100" cy="100" r="85" fill="url(#@b)" opacity=".5"/>
<g transform="translate(-16 -6) scale(1.4)"><path d="M118 82A50 50 0 1 0 146 156A40 40 0 1 1 118 82Z" fill="#e8e0ff"/></g>
<path d="M0 300V250l20-16h20v-14h24v20l16-10v-12h26v30l14-10v-22h20v28l16-10 14 8V300Z" fill="#05040a"/>
<path d="M150 252V196M138 204H162" stroke="#cfd6ff" stroke-width="3"/>
<path d="M60 160q24-10 48 0q-4 16-16 12q-8-5-16 0q-12 4-16-12Z" fill="#0a0814" stroke="#9a6bff" stroke-width="1.5"/><g fill="#e8e0ff"><ellipse cx="76" cy="165" rx="4" ry="2"/><ellipse cx="92" cy="165" rx="4" ry="2"/></g>`
});
