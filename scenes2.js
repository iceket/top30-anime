// Вторая партия сцен. Те же правила: предметы, пейзажи, свет, без персонажей и копий постеров.
const sky = (c1, c2, c3) => `<defs><linearGradient id="@a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/>${c3 ? `<stop offset=".6" stop-color="${c3}"/>` : ""}<stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="200" height="300" fill="url(#@a)"/>`;
const glow = c => `<defs><radialGradient id="@b"><stop offset="0" stop-color="${c}" stop-opacity=".85"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs>`;

Object.assign(SCENES, {

2: sky("#12372b", "#f0d98a", "#3c8a5a") + `<circle cx="100" cy="205" r="40" fill="#fff1b0"/>
<g fill="#0a2a1d"><circle cx="100" cy="95" r="45"/><circle cx="68" cy="112" r="30"/><circle cx="136" cy="112" r="32"/><rect x="94" y="130" width="12" height="85"/><path d="M0 300V235q50-18 100-5t100-12V300Z"/></g>
<g transform="rotate(-12 150 66)"><rect x="128" y="36" width="44" height="60" rx="4" fill="#e8e2c8"/><path d="M150 52l9 14-9 14-9-14Z" fill="#1b5e3f"/></g>`,

3: sky("#2a2f45", "#c77a4a") + `<circle cx="150" cy="165" r="28" fill="#ffcf7a" opacity=".85"/>
<path d="M60 40L120 110M120 40L60 110" stroke="#dfe6ee" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="110" r="4" fill="#7a5a3a"/><circle cx="120" cy="110" r="4" fill="#7a5a3a"/>
<rect y="170" width="200" height="130" fill="#5a5148"/><g stroke="#3d362f" stroke-width="2"><path d="M0 195h200M0 220h200M0 245h200M0 270h200M30 170v25M90 195v25M150 170v25M60 220v25M120 245v25"/></g>
<path d="M85 300V252a15 15 0 0 1 30 0V300Z" fill="#1a1512"/>`,

5: sky("#0b0f2a", "#3a1450") + `<circle cx="150" cy="70" r="34" fill="#f08a3c"/><circle cx="162" cy="62" r="30" fill="#0b0f2a" opacity=".55"/>
<g fill="#fff"><circle cx="30" cy="40" r="1.3"/><circle cx="70" cy="90" r="1"/><circle cx="40" cy="150" r="1.2"/><circle cx="170" cy="150" r="1"/><circle cx="110" cy="30" r="1"/><circle cx="25" cy="230" r="1.2"/></g>
<g stroke="#fff" opacity=".3"><path d="M10 190h60M30 206h50M20 222h40"/></g>
<path d="M85 180L150 165L172 180L150 195L85 190Z" fill="#e8e2d0"/><path d="M110 176l30 -6v14l-30 4Z" fill="#c8312b"/><circle cx="138" cy="180" r="4" fill="#2a2a3a"/>`,

6: sky("#1d2a3a", "#7a8a9a") + `<circle cx="150" cy="60" r="20" fill="#e8ecf0" opacity=".85"/>
<path d="M45 205Q100 240 155 205L146 192H54Z" fill="#0c0f14"/><path d="M45 205Q38 190 48 178" stroke="#0c0f14" stroke-width="4" fill="none"/><path d="M100 192V102" stroke="#0c0f14" stroke-width="3"/><polygon points="100,106 140,176 100,176" fill="#b5483a"/><path d="M100 126l28 50M100 146l16 30" stroke="#7a2a22"/>
<path d="M0 218q25-10 50 0t50 0 50 0 50 0V300H0Z" fill="#0f1a26"/><path d="M0 250q25-10 50 0t50 0 50 0 50 0V300H0Z" fill="#08111a"/>`,

8: sky("#1a1030", "#3a1a4a") + `<circle cx="100" cy="105" r="52" fill="#c9b8e8" opacity=".9"/>
<g fill="none" stroke="#e8d37a" stroke-width="3" stroke-linecap="round"><path d="M44 105A56 56 0 1 1 100 161"/></g><polygon points="100,161 86,150 86,172" fill="#e8d37a"/>
<path d="M0 300V235h30l10-20 10 20h30l10-30 10 30h30l10-20 10 20h50V300Z" fill="#0a0612"/><g fill="#ffd36a"><rect x="36" y="245" width="6" height="10"/><rect x="96" y="238" width="6" height="12"/><rect x="146" y="248" width="6" height="10"/></g>`,

10: sky("#12324a", "#cfe8d0", "#6aa8b8") + glow("#ffe27a") + `<path d="M150 40a16 16 0 1 0 14 22a12 12 0 1 1-14-22Z" fill="#f3efd8"/>
<path d="M0 220q60-30 120-5t80-15V300H0Z" fill="#2c6a58"/><path d="M0 255q70-25 140 0t60-8V300H0Z" fill="#3f8a6b"/>
<g fill="#cfe9ff"><circle cx="30" cy="262" r="3"/><circle cx="55" cy="280" r="3"/><circle cx="80" cy="258" r="3"/><circle cx="150" cy="262" r="3"/><circle cx="175" cy="282" r="3"/><circle cx="100" cy="292" r="3"/><circle cx="20" cy="292" r="3"/></g>
<path d="M110 268L118 150" stroke="#e6d5a8" stroke-width="3"/><circle cx="119" cy="140" r="26" fill="url(#@b)"/><circle cx="119" cy="140" r="8" fill="#ffe27a"/>`,

13: sky("#27406e", "#f3b9a0", "#a3689a") +
`<g stroke="#b8a68a"><g transform="translate(60 90) rotate(-18)"><rect x="-22" y="-14" width="44" height="28" rx="2" fill="#f4ecdc"/><path d="M-22 -14L0 4L22 -14" fill="none"/></g>
<g transform="translate(140 140) rotate(14)"><rect x="-22" y="-14" width="44" height="28" rx="2" fill="#f4ecdc"/><path d="M-22 -14L0 4L22 -14" fill="none"/></g>
<g transform="translate(80 200) rotate(-6)"><rect x="-22" y="-14" width="44" height="28" rx="2" fill="#f4ecdc"/><path d="M-22 -14L0 4L22 -14" fill="none"/></g></g>
<circle cx="60" cy="94" r="4" fill="#c8312b"/><circle cx="140" cy="144" r="4" fill="#c8312b"/><circle cx="80" cy="204" r="4" fill="#c8312b"/>
<g fill="#ffd6e0" opacity=".8"><ellipse cx="30" cy="60" rx="5" ry="3"/><ellipse cx="165" cy="80" rx="5" ry="3"/><ellipse cx="110" cy="30" rx="4" ry="2.5"/></g>
<path d="M0 300V265q50-20 100-5t100-12V300Z" fill="#1a2444"/>`,

14: sky("#0b1030", "#18102a") + `<circle cx="100" cy="80" r="40" fill="#e9eefc"/>
<g fill="#123a2a"><rect x="14" width="11" height="300"/><rect x="40" width="9" height="300"/><rect x="152" width="9" height="300"/><rect x="178" width="11" height="300"/></g>
<g stroke="#0b1a14" stroke-width="2"><path d="M14 90h11M14 180h11M40 130h9M152 60h9M152 160h9M178 110h11M178 210h11"/></g>
<g fill="none" stroke="#6fc3ff" stroke-width="3" stroke-linecap="round"><path d="M70 125q40-40 90 0"/><path d="M62 150q50-50 108 0" opacity=".6"/></g><path d="M62 250L150 112" stroke="#dfe8f5" stroke-width="4" stroke-linecap="round"/>
<defs><pattern id="@p" width="38" height="38" patternUnits="userSpaceOnUse"><rect width="19" height="19" fill="#1f7a5a"/><rect x="19" y="19" width="19" height="19" fill="#1f7a5a"/><rect x="19" width="19" height="19" fill="#0b1a14"/><rect y="19" width="19" height="19" fill="#0b1a14"/></pattern></defs><rect y="262" width="200" height="38" fill="url(#@p)"/>`,

15: sky("#0a0614", "#1d0f33") + glow("#b79bff") + `<circle cx="100" cy="175" r="70" fill="url(#@b)"/>
<g fill="none" stroke="#7b4dff" stroke-width="2.5"><circle cx="100" cy="175" r="30"/><circle cx="100" cy="175" r="45" stroke-dasharray="14 8"/><circle cx="100" cy="175" r="62" stroke-dasharray="4 10"/><circle cx="100" cy="175" r="80" stroke-dasharray="26 12" opacity=".6"/></g><circle cx="100" cy="175" r="10" fill="#e3d6ff"/>
<g fill="#e8e2c8"><rect x="26" width="22" height="70"/><rect x="89" width="22" height="48"/><rect x="152" width="22" height="82"/></g><g stroke="#b3202a" stroke-width="2"><path d="M32 14h10M32 28h10M34 42l6 8M40 42l-6 8M95 12h10M95 26h10M158 14h10M158 30h10M160 46l6 8M166 46l-6 8"/></g>`,

22: sky("#1a0b3a", "#0b0a1a", "#5a1a6a") + `<circle cx="100" cy="78" r="34" fill="#ff3ea5" opacity=".85"/><g stroke="#3a0a4a" stroke-width="3"><path d="M60 70h80M62 82h76M66 94h68"/></g>
<defs><g id="@g"><rect x="0" y="140" width="30" height="160"/><rect x="28" y="100" width="36" height="200"/><rect x="62" y="170" width="26" height="130"/><rect x="86" y="120" width="40" height="180"/><rect x="124" y="150" width="30" height="150"/><rect x="152" y="115" width="48" height="185"/></g><pattern id="@p" width="8" height="10" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="3" height="4" fill="#2ee6ff" opacity=".85"/></pattern></defs>
<use href="#@g" fill="#0d0820"/><use href="#@g" fill="url(#@p)"/>
<g stroke="#9fd8ff" opacity=".3"><path d="M20 20l-4 20M60 60l-4 20M110 10l-4 20M150 50l-4 20M180 110l-4 20M90 200l-4 20"/></g><rect y="284" width="200" height="16" fill="#ff3ea5" opacity=".35"/>`,

25: sky("#2a1c14", "#0f0a07") + glow("#ffb347") + `<path d="M20 300V110a80 80 0 0 1 160 0V300H150V115a50 50 0 0 0-100 0V300Z" fill="#4a3a30"/><g stroke="#2e231c" stroke-width="2"><path d="M20 160h30M20 220h30M150 180h30M150 240h30M30 100l16 4"/></g>
<circle cx="100" cy="235" r="70" fill="url(#@b)"/><path d="M62 262q8-24 16 0q6-30 14 0q8-26 16 0q6-18 14 0q6-22 14 0Z" fill="#ff8a1f"/>
<path d="M62 192h76v22q0 26-38 26t-38-26Z" fill="#1b1b1f" stroke="#8a8a96" stroke-width="2"/><ellipse cx="100" cy="192" rx="38" ry="7" fill="#3a3a44"/><g fill="none" stroke="#fff" stroke-linecap="round" opacity=".5"><path d="M88 182q-8-14 2-26"/><path d="M110 182q-8-14 2-26"/></g>`,

28: sky("#0b0b14", "#1a0a1f") + `<path d="M60 215V120Q60 60 100 40Q140 60 140 120V215Z" fill="#0a0a12" stroke="#3a2a4a"/>
<ellipse cx="100" cy="98" rx="16" ry="18" fill="#e8e4d8"/><rect x="92" y="108" width="16" height="12" rx="2" fill="#e8e4d8"/><circle cx="94" cy="98" r="4" fill="#0a0a12"/><circle cx="106" cy="98" r="4" fill="#0a0a12"/>
<g fill="#3a2a2a"><rect x="30" y="140" width="6" height="40"/><rect x="164" y="140" width="6" height="40"/></g>
<g fill="#a06bff"><path d="M33 140q-10-16 0-30q10 14 0 30Z"/><path d="M167 140q-10-16 0-30q10 14 0 30Z"/></g><circle cx="33" cy="124" r="22" fill="#a06bff" opacity=".2"/><circle cx="167" cy="124" r="22" fill="#a06bff" opacity=".2"/>
<path d="M60 300L90 215H110L140 300Z" fill="#6a1020"/>`
});
