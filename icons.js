// Свои постеры (только с лицензией!): POSTERS[номер тайтла] = "images/название.jpg"
// Если файл задан, он показывается поверх значка; если не загрузился, остаётся значок.
const POSTERS = {};

// Оригинальные символы сюжета (простые контурные значки, без персонажей и логотипов).
const ICONS = [
/* 0 FMA: круг трансмутации */ '<circle cx="100" cy="130" r="52"/><circle cx="100" cy="130" r="44"/><polygon points="100,86 138,152 62,152"/><polygon points="100,174 62,108 138,108"/>',
/* 1 Steins;Gate: часы и обратная стрелка */ '<circle cx="100" cy="130" r="48"/><path d="M100 130V98M100 130L122 142"/><path d="M52 84A66 66 0 0 1 148 84M52 84V100M52 84H68"/>',
/* 2 Hunter x Hunter: карта охотника */ '<rect x="70" y="82" width="60" height="96" rx="6"/><path d="M100 108L112 130L100 152L88 130Z" fill="#fff" fill-opacity=".85"/>',
/* 3 Attack on Titan: скрещённые клинки */ '<path d="M68 82L132 178M132 82L68 178" stroke-width="5"/><path d="M58 92L78 72M142 92L122 72"/>',
/* 4 Death Note: тетрадь и яблоко */ '<rect x="64" y="80" width="68" height="96" rx="4"/><path d="M64 102H132M98 125L108 135L98 145L88 135Z"/><circle cx="150" cy="168" r="14" fill="#fff" fill-opacity=".85"/>',
/* 5 Cowboy Bebop: космический кораблик */ '<path d="M45 132L95 108L155 128L100 152Z"/><circle cx="100" cy="130" r="8"/><path d="M60 175H140M75 190H125"/>',
/* 6 Vinland Saga: ладья */ '<path d="M45 150Q100 192 155 150L146 140H54Z"/><path d="M100 140V78"/><polygon points="100,84 138,126 100,126"/><path d="M45 150Q40 135 50 125"/>',
/* 7 Mushoku Tensei: посох мага */ '<path d="M78 190L118 86"/><circle cx="123" cy="74" r="14" fill="#fff" fill-opacity=".85"/><path d="M150 100V116M142 108H158M70 110V122M64 116H76"/>',
/* 8 Re:Zero: замкнутый круг */ '<path d="M58 132A44 44 0 1 1 100 176"/><polygon points="100,176 84,164 84,188" fill="#fff"/>',
/* 9 Слизь: капля с лицом */ '<path d="M58 165Q56 112 100 82Q144 112 142 165Q100 186 58 165Z"/><circle cx="86" cy="138" r="5" fill="#fff"/><circle cx="114" cy="138" r="5" fill="#fff"/><path d="M90 154Q100 162 110 154"/>',
/* 10 Frieren: цветок */ '<ellipse cx="100" cy="100" rx="11" ry="20"/><ellipse cx="100" cy="100" rx="11" ry="20" transform="rotate(72 100 130)"/><ellipse cx="100" cy="100" rx="11" ry="20" transform="rotate(144 100 130)"/><ellipse cx="100" cy="100" rx="11" ry="20" transform="rotate(216 100 130)"/><ellipse cx="100" cy="100" rx="11" ry="20" transform="rotate(288 100 130)"/><circle cx="100" cy="130" r="8" fill="#fff"/><path d="M100 152V196"/>',
/* 11 Унесённые призраками: тории */ '<path d="M56 90H144M66 106H134M78 90V186M122 90V186"/>',
/* 12 Твоё имя: комета */ '<circle cx="128" cy="92" r="14" fill="#fff" fill-opacity=".85"/><path d="M118 102L58 160M124 106L78 178M112 98L52 140"/>',
/* 13 Violet Evergarden: письмо */ '<rect x="54" y="100" width="92" height="64" rx="4"/><path d="M54 104L100 140L146 104"/><circle cx="100" cy="142" r="6" fill="#fff"/>',
/* 14 Demon Slayer: клетчатый узор и клинок */ '<rect x="64" y="94" width="72" height="72"/><rect x="64" y="94" width="24" height="24" fill="#fff"/><rect x="112" y="94" width="24" height="24" fill="#fff"/><rect x="88" y="118" width="24" height="24" fill="#fff"/><rect x="64" y="142" width="24" height="24" fill="#fff"/><rect x="112" y="142" width="24" height="24" fill="#fff"/>',
/* 15 Jujutsu Kaisen: печать-талисман */ '<rect x="78" y="72" width="44" height="118" rx="3"/><path d="M88 96H112M88 116H112M92 136L108 152M108 136L92 152"/><circle cx="100" cy="174" r="5"/>',
/* 16 One Punch Man: кулак */ '<rect x="68" y="108" width="64" height="52" rx="12"/><path d="M80 108V96M94 108V92M108 108V92M122 108V96M72 176L56 192M100 176V196M128 176L144 192"/>',
/* 17 Mob Psycho 100: сто процентов */ '<circle cx="100" cy="130" r="56"/><text x="100" y="145" font-size="40" font-weight="700" text-anchor="middle" fill="#fff" stroke="none">100</text>',
/* 18 Haikyu!!: мяч и сетка */ '<circle cx="100" cy="108" r="36"/><path d="M64 108Q100 90 136 108M70 84Q100 112 130 84"/><path d="M40 164H160M40 184H160M60 164V196M100 164V196M140 164V196"/>',
/* 19 Bocchi the Rock!: гитара */ '<ellipse cx="82" cy="164" rx="30" ry="24"/><circle cx="82" cy="164" r="7"/><path d="M104 148L152 84" stroke-width="6"/><path d="M148 78L162 90"/>',
/* 20 Spy x Family: дом с глазом */ '<path d="M56 130L100 88L144 130V180H56Z"/><path d="M82 150Q100 134 118 150Q100 166 82 150Z"/><circle cx="100" cy="150" r="4" fill="#fff"/>',
/* 21 Chainsaw Man: цепь пилы */ '<rect x="50" y="110" width="100" height="40" rx="20" stroke-dasharray="6 7" stroke-width="5"/><rect x="62" y="122" width="76" height="16" rx="8"/><path d="M150 130H170"/>',
/* 22 Edgerunners: чип */ '<rect x="76" y="104" width="48" height="52"/><rect x="88" y="118" width="24" height="24"/><path d="M88 104V92M112 104V92M88 156V168M112 156V168M76 118H64M76 142H64M124 118H136M124 142H136"/>',
/* 23 Monster: двойственность */ '<circle cx="100" cy="130" r="44"/><path d="M100 86A44 44 0 0 1 100 174Z" fill="#fff" fill-opacity=".85"/>',
/* 24 Made in Abyss: бездна */ '<ellipse cx="100" cy="92" rx="62" ry="16"/><ellipse cx="100" cy="112" rx="50" ry="13"/><ellipse cx="100" cy="130" rx="38" ry="10"/><ellipse cx="100" cy="146" rx="26" ry="7"/><ellipse cx="100" cy="158" rx="14" ry="4" fill="#fff"/>',
/* 25 Delicious in Dungeon: котелок */ '<path d="M65 130H135V158Q135 182 100 182Q65 182 65 158Z"/><path d="M58 130H142M65 140H52M135 140H148"/><path d="M86 118Q78 104 90 92M112 118Q104 104 116 92"/>',
/* 26 Kaguya-sama: сердце и корона */ '<path d="M100 184C48 148 54 104 84 106C94 108 100 118 100 118C100 118 106 108 116 106C146 104 152 148 100 184Z"/><path d="M80 90L88 72L100 86L112 72L120 90Z"/>',
/* 27 Mushishi: гриб */ '<path d="M58 134Q100 66 142 134Z"/><path d="M92 134V176Q100 184 108 176V134"/><circle cx="82" cy="116" r="4" fill="#fff"/><circle cx="108" cy="104" r="4" fill="#fff"/>',
/* 28 Overlord: череп */ '<path d="M64 132Q64 82 100 82Q136 82 136 132V148H64Z"/><circle cx="84" cy="124" r="9" fill="#fff"/><circle cx="116" cy="124" r="9" fill="#fff"/><path d="M92 148V162H108V148M80 148V160M120 148V160"/>',
/* 29 Eminence in Shadow: полумесяц */ '<path d="M118 82A50 50 0 1 0 146 156A40 40 0 1 1 118 82Z" fill="#fff" fill-opacity=".85"/>'
];
