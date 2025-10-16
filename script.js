// Pares de cartas: Conceitos de polímeros
const cardPairs = [
    {
        id: 1,
        pair: ['Polímero', 'Molécula de alto peso molecular formada pela repetição de pequenas unidades unidas por ligações covalentes'],
        icon: '🧬',
        explanation: 'Os polímeros são macromoléculas constituídas por unidades repetitivas (monômeros) conectadas por ligações covalentes. A natureza dos monômeros e do processo de polimerização determina propriedades como resistência mecânica, flexibilidade e resposta térmica.'
    },
    {
        id: 2,
        pair: ['Forças intermoleculares', 'Interações fracas entre cadeias poliméricas adjacentes que afetam resistência e temperatura de transição vítrea (Tg)'],
        icon: '🧲',
        explanation: 'Forças de Van der Waals, dipolo-dipolo e ligações de hidrogênio atuam entre cadeias distintas. Quanto mais fortes essas interações, maior a coesão do material, elevando Tg e resistência mecânica.'
    },
    {
        id: 3,
        pair: ['Forças intramoleculares', 'Ligações covalentes fortes que mantêm os átomos unidos dentro da cadeia polimérica'],
        icon: '🪢',
        explanation: 'As ligações intramoleculares determinam a integridade da cadeia. Elas são muito mais fortes que as forças intermoleculares e exigem ruptura de ligações covalentes para alterar a configuração do polímero.'
    },
    {
        id: 4,
        pair: ['Encadeamento', 'Modo como as unidades repetitivas se ligam sequencialmente ao longo da cadeia'],
        icon: '🔗',
        explanation: 'O encadeamento pode ser linear, ramificado ou reticulado, influenciando viscosidade, densidade e propriedades mecânicas do polímero final.'
    },
    {
        id: 5,
        pair: ['Taticidade', 'Ordenação espacial dos grupos laterais ao longo da cadeia principal do polímero'],
        icon: '🧩',
        explanation: 'A taticidade (isotática, syndiotática ou atática) está ligada à estereoquímica da cadeia. Ela influencia a cristalinidade e as propriedades ópticas e mecânicas.'
    },
    {
        id: 6,
        pair: ['Configuração', 'Arranjo espacial que só muda com ruptura de ligações covalentes'],
        icon: '🧱',
        explanation: 'Configuração diz respeito à disposição fixa de átomos em torno de uma ligação dupla ou centro quiral. Alterá-la exige quebra de ligações, diferindo de simples rotações.'
    },
    {
        id: 7,
        pair: ['Conformação', 'Formas assumidas pela cadeia por rotação em torno de ligações simples'],
        icon: '🌀',
        explanation: 'Conformações diferentes (estendida, enrolada) aparecem sem quebrar ligações, afetando propriedades como elasticidade e solubilidade.'
    },
    {
        id: 8,
        pair: ['Cadeias lineares', 'Estruturas poliméricas sem ramificações, associadas a maior densidade e cristalinidade'],
        icon: '📏',
        explanation: 'Cadeias lineares se empacotam com eficiência e cristalizam com facilidade, resultando em materiais rígidos e com Tg mais alta.'
    },
    {
        id: 9,
        pair: ['Cadeias reticuladas', 'Estruturas tridimensionais, unidas por ligações cruzadas, típicas de polímeros termorrígidos'],
        icon: '🕸️',
        explanation: 'A reticulação cria uma rede permanente que impede fusão ou dissolução. Termorrígidos são duros e mantêm forma mesmo em altas temperaturas.'
    },
    {
        id: 10,
        pair: ['Micela franjada', 'Modelo com regiões cristalinas e amorfas coexistindo na mesma cadeia'],
        icon: '🎀',
        explanation: 'As cadeias formam lamelas cristalinas interligadas por segmentos amorfos (franjas). Esse modelo explica propriedades semicristalinas de muitos polímeros.'
    },
    {
        id: 11,
        pair: ['Lamelas', 'Estruturas finas e planares formadas pelo empacotamento ordenado das cadeias poliméricas'],
        icon: '📐',
        explanation: 'Lamelas constituem as regiões cristalinas de polímeros semicristalinos, crucialmente influenciando o grau de cristalinidade e a resistência térmica.'
    },
    {
        id: 12,
        pair: ['Polimerização em etapas', 'Crescimento da cadeia por reações de condensação ou adição entre grupos funcionais'],
        icon: '⏳',
        explanation: 'Na polimerização em etapas, qualquer espécie reativa (monômero, dímero) pode reagir entre si. O peso molecular cresce lentamente e subprodutos podem ser liberados.'
    },
    {
        id: 13,
        pair: ['Polimerização em cadeia', 'Crescimento pela adição sequencial de monômeros a um centro ativo'],
        icon: '🚀',
        explanation: 'Iniciação, propagação e terminação definem essa polimerização. O peso molecular aumenta rapidamente e os monômeros são consumidos gradualmente.'
    },
    {
        id: 14,
        pair: ['Temperatura de transição vítrea (Tg)', 'Temperatura na qual o polímero amorfo passa de rígido para mais macio'],
        icon: '🌡️',
        explanation: 'A Tg marca a transição de um estado vítreo rígido para um estado borrachoso. Acima dela, há mobilidade segmentar suficiente para amortecer deformações.'
    },
    {
        id: 15,
        pair: ['Temperatura de cristalização', 'Temperatura onde cadeias se organizam em regiões ordenadas durante o resfriamento'],
        icon: '❄️',
        explanation: 'Ao resfriar um polímero semicristalino, as cadeias se reorganizam formando lamelas cristalinas. A taxa de resfriamento afeta o grau de cristalinidade alcançado.'
    },
    {
        id: 16,
        pair: ['Temperatura de fusão', 'Temperatura em que regiões cristalinas se desordenam passando ao estado líquido'],
        icon: '🔥',
        explanation: 'Acima da temperatura de fusão (Tm), a fase cristalina desaparece. Esse parâmetro define limites de processamento de termoplásticos.'
    },
    {
        id: 17,
        pair: ['Temperatura de amolecimento', 'Temperatura na qual o polímero começa a deformar sob força'],
        icon: '🧯',
        explanation: 'O amolecimento ocorre antes da fusão ou Tg, indicando quando o material se torna maleável sob carga, útil para aplicações de moldagem.'
    },
    {
        id: 18,
        pair: ['Monômero', 'Molécula pequena que se repete e se liga a outras para formar o polímero'],
        icon: '⚙️',
        iconImage: 'icones/image-Photoroom.png',
        explanation: 'Monômeros contêm grupos funcionais capazes de formar ligações repetitivas. A seleção do monômero determina propriedades do polímero final.'
    },
    {
        id: 19,
        pair: ['Grau de polimerização', 'Número médio de unidades repetitivas em uma cadeia de polímero'],
        icon: '📈',
        explanation: 'Quanto maior o grau de polimerização, maior o peso molecular e, geralmente, melhores propriedades mecânicas. É um parâmetro chave para desempenho.'
    },
    {
        id: 20,
        pair: ['Homopolímero', 'Polímero formado por apenas um tipo de monômero'],
        icon: '🟦',
        explanation: 'Homopolímeros apresentam cadeias uniformes e propriedades mais previsíveis. Ex.: polietileno, poliestireno.'
    },
    {
        id: 21,
        pair: ['Copolímero', 'Polímero formado por dois ou mais monômeros diferentes'],
        icon: '🟩',
        explanation: 'A disposição (alternada, em bloco, enxerto) dos monômeros em copolímeros permite combinar propriedades distintas em um mesmo material.'
    },
    {
        id: 22,
        pair: ['Elastômero', 'Polímero com alta elasticidade que retorna à forma original após estiramento'],
        icon: '🪀',
        explanation: 'Elastômeros apresentam cadeias flexíveis e levemente reticuladas, conferindo grande reversibilidade elástica. Borracha natural e silicone são exemplos.'
    },
    {
        id: 23,
        pair: ['Termoplástico', 'Polímero que amolece ao aquecer e solidifica ao resfriar, permitindo reciclagem'],
        icon: '♻️',
        explanation: 'Termoplásticos podem ser remodelados repetidamente porque não possuem reticulação permanente. Ex.: PET, PP, PVC.'
    },
    {
        id: 24,
        pair: ['Termorrígido', 'Polímero que endurece permanentemente após cura e não pode ser re-amolecido'],
        icon: '🧱',
        explanation: 'A extensa reticulação impede que termorrígidos amoleçam novamente. São resistentes a altas temperaturas, como epóxis e fenólicos.'
    },
    {
        id: 25,
        pair: ['Cristalinidade', 'Grau de ordenamento das cadeias poliméricas em estruturas compactas'],
        icon: '💎',
        explanation: 'Cristalinidade influencia densidade, rigidez e resistência térmica. Depende da estrutura do monômero e das condições de processamento.'
    },
    {
        id: 26,
        pair: ['Amorfo', 'Estado em que cadeias poliméricas estão desordenadas'],
        icon: '🌫️',
        explanation: 'Regiões amorfas possuem cadeias com pouca organização, conferindo transparência e flexibilidade. Vidros poliméricos são majoritariamente amorfos.'
    },
    {
        id: 27,
        pair: ['Inchamento', 'Aumento de volume do polímero ao absorver solvente sem dissolver completamente'],
        icon: '💧',
        explanation: 'O solvente penetra nas cadeias, provocando expansão. Importante em hidrogéis e aplicações de liberação controlada.'
    },
    {
        id: 28,
        pair: ['Reciclagem mecânica', 'Reprocessamento do polímero para obter um novo produto'],
        icon: '🔄',
        explanation: 'Na reciclagem mecânica o polímero é moído, fundido e remodelado. É economicamente viável para termoplásticos limpos e homogêneos.'
    },
    {
        id: 29,
        pair: ['Tg', 'Símbolo usual para temperatura de transição vítrea'],
        icon: '📊',
        explanation: 'Tg é a abreviação de temperatura de transição vítrea. Conhecer esse valor é essencial para definir faixas de operação do material.'
    },
    {
        id: 30,
        pair: ['Cadeias ramificadas', 'Cadeias poliméricas com ramificações laterais ligadas à cadeia principal'],
        icon: '🌿',
        explanation: 'Ramificações reduzem a eficiência de empacotamento, diminuindo a densidade e a cristalinidade. Ex.: polietileno de baixa densidade.'
    },
    {
        id: 31,
        pair: ['Polímeros Naturais', 'Incluem látex, proteínas, amido e celulose, obtidos diretamente de fontes biológicas'],
        icon: '🌱',
        explanation: 'Polímeros naturais apresentam biocompatibilidade, biodegradabilidade e estruturas complexas. Látex origina borrachas naturais, proteínas formam materiais estruturais e funcionais, enquanto amido e celulose são amplamente usados em embalagens e bioplásticos.'
    },
    {
        id: 32,
        pair: ['Polímeros Sintéticos', 'Plásticos e borrachas produzidos artificialmente, como polietileno e neoprene'],
        icon: '🏭',
        explanation: 'Produzidos por processos industriais controlados, polímeros sintéticos oferecem propriedades customizadas, alta durabilidade e ampla aplicabilidade em setores como construção, automotivo e eletrônicos.'
    }
];

const glossaryReferences = new Map([
    [1, { label: 'Encyclopaedia Britannica - Polymer', url: 'https://www.britannica.com/science/polymer' }],
    [2, { label: 'LibreTexts - Intermolecular Forces', url: 'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Molecular_Interactions/Intermolecular_Forces' }],
    [3, { label: 'LibreTexts - Intramolecular Forces', url: 'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Molecular_Interactions/Intramolecular_Forces' }],
    [4, { label: 'ScienceDirect Topics - Polymer Architecture', url: 'https://www.sciencedirect.com/topics/materials-science/polymer-architecture' }],
    [5, { label: 'ScienceDirect Topics - Tacticity', url: 'https://www.sciencedirect.com/topics/chemistry/tacticity' }],
    [6, { label: 'ScienceDirect Topics - Polymer Configuration', url: 'https://www.sciencedirect.com/topics/chemistry/polymer-configuration' }],
    [7, { label: 'ScienceDirect Topics - Polymer Conformation', url: 'https://www.sciencedirect.com/topics/chemistry/polymer-conformation' }],
    [8, { label: 'ScienceDirect Topics - Linear Polymer', url: 'https://www.sciencedirect.com/topics/chemistry/linear-polymer' }],
    [9, { label: 'ScienceDirect Topics - Crosslinked Polymer', url: 'https://www.sciencedirect.com/topics/materials-science/crosslinked-polymer' }],
    [10, { label: 'ScienceDirect Topics - Fringed Micelle Model', url: 'https://www.sciencedirect.com/topics/engineered-materials/fringed-micelle-model' }],
    [11, { label: 'ScienceDirect Topics - Lamellae in Polymers', url: 'https://www.sciencedirect.com/topics/chemistry/lamellae' }],
    [12, { label: 'LibreTexts - Step-Growth Polymerization', url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(Morsch_et_al.)/28:_Polymers/28.3:_Step-Growth_Polymerization' }],
    [13, { label: 'LibreTexts - Chain-Growth Polymerization', url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(Morsch_et_al.)/28:_Polymers/28.2:_Chain-Growth_Polymerization' }],
    [14, { label: 'ScienceDirect Topics - Glass Transition Temperature', url: 'https://www.sciencedirect.com/topics/chemistry/glass-transition-temperature' }],
    [15, { label: 'ScienceDirect Topics - Polymer Crystallization', url: 'https://www.sciencedirect.com/topics/materials-science/polymer-crystallization' }],
    [16, { label: 'ScienceDirect Topics - Melting Temperature', url: 'https://www.sciencedirect.com/topics/chemistry/melting-temperature' }],
    [17, { label: 'ScienceDirect Topics - Softening Point', url: 'https://www.sciencedirect.com/topics/engineering/softening-point' }],
    [18, { label: 'Encyclopaedia Britannica - Monomer', url: 'https://www.britannica.com/science/monomer' }],
    [19, { label: 'ScienceDirect Topics - Degree of Polymerization', url: 'https://www.sciencedirect.com/topics/chemistry/degree-of-polymerization' }],
    [20, { label: 'ScienceDirect Topics - Homopolymer', url: 'https://www.sciencedirect.com/topics/chemistry/homopolymer' }],
    [21, { label: 'ScienceDirect Topics - Copolymer', url: 'https://www.sciencedirect.com/topics/chemistry/coplymer' }],
    [22, { label: 'Encyclopaedia Britannica - Elastomer', url: 'https://www.britannica.com/science/elastomer' }],
    [23, { label: 'Encyclopaedia Britannica - Thermoplastic', url: 'https://www.britannica.com/science/thermoplastic' }],
    [24, { label: 'Encyclopaedia Britannica - Thermosetting resin', url: 'https://www.britannica.com/science/thermosetting-resin' }],
    [25, { label: 'ScienceDirect Topics - Crystallinity', url: 'https://www.sciencedirect.com/topics/chemistry/crystallinity' }],
    [26, { label: 'Encyclopaedia Britannica - Amorphous Solid', url: 'https://www.britannica.com/science/amorphous-solid' }],
    [27, { label: 'ScienceDirect Topics - Polymer Swelling', url: 'https://www.sciencedirect.com/topics/chemical-engineering/polymer-swelling' }],
    [28, { label: 'ScienceDirect Topics - Mechanical Recycling', url: 'https://www.sciencedirect.com/topics/engineering/mechanical-recycling' }],
    [29, { label: 'ScienceDirect Topics - Glass Transition Temperature', url: 'https://www.sciencedirect.com/topics/materials-science/glass-transition-temperature' }],
    [30, { label: 'ScienceDirect Topics - Branched Polymer', url: 'https://www.sciencedirect.com/topics/chemistry/branched-polymer' }],
    [31, { label: 'Encyclopaedia Britannica - Natural polymer', url: 'https://www.britannica.com/science/natural-polymer' }],
    [32, { label: 'Encyclopaedia Britannica - Synthetic resin', url: 'https://www.britannica.com/science/synthetic-resin' }]
]);

function loadPlayers() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.players);
        if (!stored) return [];
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .slice(0, 6)
            .map(player => ({
                id: Number(player.id) || Date.now(),
                name: sanitizeNickname(player.name)
            }));
    } catch (error) {
        console.warn('Erro ao carregar jogadores:', error);
        return [];
    }
}

function savePlayers(list) {
    const payload = list.map(player => ({
        id: player.id,
        name: sanitizeNickname(player.name)
    }));
    localStorage.setItem(STORAGE_KEYS.players, JSON.stringify(payload));
}

function createPlayerRecord(name) {
    return {
        id: Date.now() + Math.floor(Math.random() * 1000),
        name: sanitizeNickname(name)
    };
}

function createActivePlayer(record) {
    return {
        id: record.id,
        name: record.name,
        score: 0,
        attempts: 0,
        matches: 0
    };
}

function refreshActivePlayers() {
    activePlayers = players.map(createActivePlayer);
    currentPlayerIndex = 0;
}

function ensurePlayersAvailable() {
    if (players.length === 0) {
        const fallbackName = sanitizeNickname(preferences.nickname);
        const fallbackRecord = createPlayerRecord(fallbackName);
        players = [fallbackRecord];
        savePlayers(players);
    }
    if (!activePlayers.length) {
        refreshActivePlayers();
    }
    updatePlayersUI();
}

const STORAGE_KEYS = {
    cards: 'nanoparticlesMemoryCustomCards',
    preferences: 'nanoparticlesMemoryPreferences',
    ranking: 'nanoparticlesMemoryRanking',
    players: 'nanoparticlesMemoryPlayers'
};

const defaultCardPairs = deepClonePairs(cardPairs);
applyCustomCards(loadCustomCards());

let pairLookup = buildPairLookup(cardPairs);

const defaultPreferences = {
    nickname: 'Jogador',
    accentColor: '#667eea'
};

const MAX_RANKING_ENTRIES = 10;

function sanitizeNickname(value) {
    const trimmed = (value ?? '').trim();
    return trimmed || defaultPreferences.nickname;
}

function sanitizeAccentColor(value) {
    if (typeof value !== 'string') return defaultPreferences.accentColor;
    const hex = value.trim();
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) {
        return hex.length === 4
            ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toLowerCase()
            : hex.toLowerCase();
    }
    return defaultPreferences.accentColor;
}

function hexToRgba(hex, alpha = 1) {
    const sanitized = sanitizeAccentColor(hex).replace('#', '');
    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function loadPreferences() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.preferences);
        if (!stored) return { ...defaultPreferences };
        const parsed = JSON.parse(stored);
        return {
            nickname: sanitizeNickname(parsed.nickname),
            accentColor: sanitizeAccentColor(parsed.accentColor)
        };
    } catch (error) {
        console.warn('Erro ao carregar preferências:', error);
        return { ...defaultPreferences };
    }
}

function savePreferences(prefs) {
    const payload = {
        nickname: sanitizeNickname(prefs.nickname),
        accentColor: sanitizeAccentColor(prefs.accentColor)
    };
    localStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(payload));
}

function applyPreferences(prefs) {
    const accent = sanitizeAccentColor(prefs.accentColor);
    document.documentElement.style.setProperty('--accent-color', accent);
    document.documentElement.style.setProperty('--accent-color-soft', hexToRgba(accent, 0.25));
    document.documentElement.style.setProperty('--accent-glow', hexToRgba(accent, 0.45));
    if (accentColorInput) {
        accentColorInput.value = accent;
    }
}

function previewAccentColor(value) {
    const accent = sanitizeAccentColor(value);
    document.documentElement.style.setProperty('--accent-color', accent);
    document.documentElement.style.setProperty('--accent-color-soft', hexToRgba(accent, 0.25));
    document.documentElement.style.setProperty('--accent-glow', hexToRgba(accent, 0.45));
}

function loadRanking() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.ranking);
        if (!stored) return [];
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) return [];
        return parsed.map(entry => ({
            nickname: sanitizeNickname(entry.nickname),
            mode: entry.mode || 'marathon',
            score: Number(entry.score) || 0,
            attempts: Number(entry.attempts) || 0,
            time: Number(entry.time) || 0,
            timestamp: Number(entry.timestamp) || Date.now()
        }));
    } catch (error) {
        console.warn('Erro ao carregar ranking:', error);
        return [];
    }
}

function saveRanking(entries) {
    localStorage.setItem(STORAGE_KEYS.ranking, JSON.stringify(entries));
}

function compareRankingEntries(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    if (a.time !== b.time) return a.time - b.time;
    return a.attempts - b.attempts;
}

function addRankingEntry(entry) {
    rankingEntries.push(entry);
    const currentModeEntries = rankingEntries
        .filter(item => item.mode === entry.mode)
        .sort(compareRankingEntries)
        .slice(0, MAX_RANKING_ENTRIES);
    const otherEntries = rankingEntries.filter(item => item.mode !== entry.mode);
    rankingEntries = otherEntries.concat(currentModeEntries);
    saveRanking(rankingEntries);
}

function formatDate(timestamp) {
    try {
        const date = new Date(timestamp);
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (error) {
        return '';
    }
}

function formatSecondsDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateRankingTable() {
    if (!rankingTableBody) return;
    rankingTableBody.innerHTML = '';
    if (!rankingEntries.length) {
        const emptyRow = document.createElement('tr');
        emptyRow.className = 'ranking-empty-row';
        emptyRow.innerHTML = '<td colspan="7">Jogue uma partida para aparecer no ranking!</td>';
        rankingTableBody.appendChild(emptyRow);
        return;
    }

    const sorted = [...rankingEntries].sort((a, b) => {
        const modeOrder = a.mode.localeCompare(b.mode);
        if (modeOrder !== 0) return modeOrder;
        return compareRankingEntries(a, b);
    });

    sorted.forEach((entry, index) => {
        const row = document.createElement('tr');
        const modeInfo = gameModes[entry.mode] ?? { label: entry.mode };
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.nickname}</td>
            <td>${modeInfo.label}</td>
            <td>${entry.score}</td>
            <td>${entry.attempts}</td>
            <td>${formatSecondsDisplay(entry.time)}</td>
            <td>${formatDate(entry.timestamp)}</td>
        `;
        rankingTableBody.appendChild(row);
    });
}

// Personalização de Cartas
function deepClonePairs(pairs) {
    return pairs.map(pair => ({
        id: pair.id,
        pair: [...pair.pair],
        icon: pair.icon,
        explanation: pair.explanation
    }));
}

function buildPairLookup(pairs) {
    return new Map(pairs.map(pair => [pair.id, pair]));
}

function loadCustomCards() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.cards);
        if (!stored) return null;
        const data = JSON.parse(stored);
        if (!Array.isArray(data)) return null;
        return data;
    } catch (error) {
        console.warn('Erro ao carregar cartas personalizadas:', error);
        return null;
    }
}

function saveCustomCards() {
    const snapshot = deepClonePairs(cardPairs);
    localStorage.setItem(STORAGE_KEYS.cards, JSON.stringify(snapshot));
}

function applyCustomCards(customPairs) {
    if (!Array.isArray(customPairs)) return;
    customPairs.forEach(custom => {
        const target = cardPairs.find(pair => pair.id === custom.id);
        if (!target) return;
        if (Array.isArray(custom.pair) && custom.pair.length >= 2) {
            target.pair[0] = custom.pair[0];
            target.pair[1] = custom.pair[1];
        }
        if (typeof custom.icon === 'string' && custom.icon.trim()) {
            target.icon = custom.icon.trim();
        }
        if (typeof custom.explanation === 'string' && custom.explanation.trim()) {
            target.explanation = custom.explanation.trim();
        }
    });
}

function restoreCard(cardId) {
    const original = defaultCardPairs.find(pair => pair.id === cardId);
    if (!original) return;
    const target = cardPairs.find(pair => pair.id === cardId);
    if (!target) return;
    target.pair[0] = original.pair[0];
    target.pair[1] = original.pair[1];
    target.icon = original.icon;
    target.explanation = original.explanation;
}

function restoreAllCards() {
    defaultCardPairs.forEach(original => restoreCard(original.id));
    localStorage.removeItem(STORAGE_KEYS.cards);
}

function initializeCustomizer() {
    if (!modalCustomizer || !customizerCardSelect) return;

    populateCustomizerOptions();
    populateCustomizerForm(cardPairs[0]?.id ?? 1);

    btnOpenCustomizerIntro?.addEventListener('click', () => {
        modalCustomizer.classList.add('customizer-visible');
    });

    btnCloseCustomizer?.addEventListener('click', () => {
        modalCustomizer.classList.remove('customizer-visible');
    });

    modalCustomizer.addEventListener('click', event => {
        if (event.target === modalCustomizer) {
            modalCustomizer.classList.remove('customizer-visible');
            emojiPicker?.classList.remove('open');
        }
    });

    customizerCardSelect.addEventListener('change', () => {
        const cardId = Number(customizerCardSelect.value);
        populateCustomizerForm(cardId);
    });

    btnOpenEmojiPicker?.addEventListener('click', event => {
        event.stopPropagation();
        emojiPicker?.classList.toggle('open');
    });

    emojiPicker?.addEventListener('click', event => {
        const targetButton = event.target.closest('button[data-emoji]');
        if (!targetButton) return;
        customizerIconInput.value = targetButton.dataset.emoji;
        emojiPicker.classList.remove('open');
    });

    document.addEventListener('click', event => {
        if (!emojiPicker || !btnOpenEmojiPicker) return;
        const clickedButton = event.target === btnOpenEmojiPicker || btnOpenEmojiPicker.contains(event.target);
        const insidePicker = emojiPicker.contains(event.target);
        if (!clickedButton && !insidePicker) {
            emojiPicker.classList.remove('open');
        }
    });

    customizerForm?.addEventListener('submit', event => {
        event.preventDefault();
        const cardId = Number(customizerCardSelect.value);
        const card = cardPairs.find(pair => pair.id === cardId);
        if (!card) return;

        card.pair[0] = customizerTitleInput.value.trim();
        card.pair[1] = customizerDescriptionInput.value.trim();
        card.icon = (customizerIconInput.value.trim() || card.icon).slice(0, 2);
        card.explanation = customizerExplanationInput.value.trim();

        saveCustomCards();
        pairLookup = buildPairLookup(cardPairs);
        populateCustomizerOptions(cardId);
        initGame();
        showToast('Carta salva com sucesso!');
    });

    btnResetCustomizer?.addEventListener('click', () => {
        const cardId = Number(customizerCardSelect.value);
        openConfirmModal({
            title: 'Restaurar Carta',
            message: 'Essa ação irá restaurar a carta selecionada para o conteúdo original. Essa alteração é irreversível. Deseja continuar?',
            onConfirm: () => {
                restoreCard(cardId);
                saveCustomCards();
                pairLookup = buildPairLookup(cardPairs);
                populateCustomizerOptions(cardId);
                populateCustomizerForm(cardId);
                initGame();
                showToast('Carta restaurada para o padrão.');
            }
        });
    });

    btnResetAllCards?.addEventListener('click', () => {
        openConfirmModal({
            title: 'Restaurar Todas as Cartas',
            message: 'Essa ação irá restaurar todas as cartas para o conteúdo original. Todas as personalizações serão perdidas e não poderá ser desfeito. Deseja continuar?',
            onConfirm: () => {
                restoreAllCards();
                pairLookup = buildPairLookup(cardPairs);
                populateCustomizerOptions();
                populateCustomizerForm(cardPairs[0]?.id ?? 1);
                initGame();
                showToast('Todas as cartas foram restauradas.');
            }
        });
    });
}

function populateCustomizerOptions(selectedId) {
    customizerCardSelect.innerHTML = '';
    cardPairs.forEach(pair => {
        const option = document.createElement('option');
        option.value = String(pair.id);
        option.textContent = `${pair.icon} ${pair.pair[0]}`;
        if (selectedId && pair.id === selectedId) {
            option.selected = true;
        }
        customizerCardSelect.appendChild(option);
    });
}

function populateCustomizerForm(cardId) {
    const card = cardPairs.find(pair => pair.id === cardId);
    if (!card) return;
    customizerCardSelect.value = String(card.id);
    customizerTitleInput.value = card.pair[0];
    customizerDescriptionInput.value = card.pair[1];
    customizerExplanationInput.value = card.explanation;
    customizerIconInput.value = card.icon;
    customizerIdInput.value = card.id;
}

function openConfirmModal({ title, message, onConfirm }) {
    if (!modalConfirm) {
        if (typeof onConfirm === 'function') onConfirm();
        return;
    }
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;
    pendingConfirmAction = onConfirm;
    modalConfirm.classList.add('customizer-visible');
}

function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('visible');
    setTimeout(() => {
        toastElement.classList.remove('visible');
    }, 2500);
}

const gameModes = {
    sprint: {
        id: 'sprint',
        label: 'Sprint',
        pairCount: 6,
        timeLimit: 240 // segundos
    },
    marathon: {
        id: 'marathon',
        label: 'Maratona',
        pairCount: 16,
        timeLimit: null
    },
    legend: {
        id: 'legend',
        label: 'Doutorado',
        pairCount: 32,
        timeLimit: null
    }
};

let selectedMode = 'marathon';

// Estado do jogo
let gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    score: 0,
    attempts: 0,
    timer: 0,
    elapsedSeconds: 0,
    timerInterval: null,
    canFlip: true,
    mode: selectedMode,
    glossary: new Map(),
    activeGlossaryId: null
};

// Elementos DOM
const introScreen = document.getElementById('introScreen');
const btnStart = document.getElementById('btnStart');
const gameContainer = document.getElementById('gameContainer');
const gameBoard = document.getElementById('gameBoard');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const pairsElement = document.getElementById('pairs');
const btnRestart = document.getElementById('btnRestart');
const modeButtons = document.querySelectorAll('.mode-button');
const accentColorInput = document.getElementById('accentColor');
const newPlayerInput = document.getElementById('newPlayerName');
const btnAddPlayer = document.getElementById('btnAddPlayer');
const playersListElement = document.getElementById('playersList');
const playersScoreboardElement = document.getElementById('playersScoreboard');
const currentPlayerNameElement = document.getElementById('currentPlayerName');
const rankingTableBody = document.getElementById('rankingTableBody');
const glossaryListElement = document.getElementById('glossaryList');
const glossaryEmptyElement = document.getElementById('glossaryEmpty');
const glossaryTitleElement = document.getElementById('glossaryTitle');
const glossaryDescriptionElement = document.getElementById('glossaryDescription');
const modalExplanation = document.getElementById('modalExplanation');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const btnCloseModal = document.getElementById('btnCloseModal');
const modalFinish = document.getElementById('modalFinish');
const btnPlayAgain = document.getElementById('btnPlayAgain');
const finalScore = document.getElementById('finalScore');
const finalTime = document.getElementById('finalTime');
const finalAttempts = document.getElementById('finalAttempts');
const finalWinnerElement = document.getElementById('finalWinner');
const finalPlayersSummaryElement = document.getElementById('finalPlayersSummary');
const modalCustomizer = document.getElementById('modalCustomizer');
const btnOpenCustomizerIntro = document.getElementById('btnOpenCustomizerIntro');
const btnCloseCustomizer = document.getElementById('btnCloseCustomizer');
const customizerCardSelect = document.getElementById('customizerCardSelect');
const customizerForm = document.getElementById('customizerForm');
const customizerTitleInput = document.getElementById('customizerTitle');
const customizerDescriptionInput = document.getElementById('customizerDescription');
const customizerExplanationInput = document.getElementById('customizerExplanation');
const customizerIconInput = document.getElementById('customizerIcon');
const customizerIdInput = document.getElementById('customizerId');
const btnResetCustomizer = document.getElementById('btnResetCustomizer');
const btnResetAllCards = document.getElementById('btnResetAllCards');
const btnOpenEmojiPicker = document.getElementById('btnOpenEmojiPicker');
const emojiPicker = document.getElementById('emojiPicker');
const btnBackToIntro = document.getElementById('btnBackToIntro');
const btnClearRanking = document.getElementById('btnClearRanking');
const modalConfirm = document.getElementById('modalConfirm');
const confirmTitle = document.getElementById('confirmTitle');
const confirmMessage = document.getElementById('confirmMessage');
const btnConfirmYes = document.getElementById('btnConfirmYes');
const btnConfirmNo = document.getElementById('btnConfirmNo');
const toastElement = document.getElementById('customizerToast');

let pendingConfirmAction = null;
let preferences = loadPreferences();
let rankingEntries = loadRanking();
let players = loadPlayers();
let activePlayers = players.map(createActivePlayer);
let currentPlayerIndex = 0;

function getCurrentPlayer() {
    if (!activePlayers.length) return null;
    return activePlayers[currentPlayerIndex % activePlayers.length];
}

function updatePlayersUI() {
    if (!playersListElement) return;
    playersListElement.innerHTML = '';
    if (!players.length) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'players-empty';
        emptyItem.textContent = 'Nenhum jogador adicionado.';
        playersListElement.appendChild(emptyItem);
    } else {
        const fragment = document.createDocumentFragment();
        players.forEach((player, index) => {
            const item = document.createElement('li');
            item.innerHTML = `
                <span>${index + 1}º - ${player.name}</span>
                <button type="button" class="remove-player" data-player-id="${player.id}">✖</button>
            `;
            fragment.appendChild(item);
        });
        playersListElement.appendChild(fragment);
    }

    if (playersScoreboardElement) {
        playersScoreboardElement.innerHTML = '';
        if (activePlayers.length) {
            const fragment = document.createDocumentFragment();
            activePlayers.forEach((player, index) => {
                const card = document.createElement('div');
                card.className = 'player-score-card';
                if (index === currentPlayerIndex % activePlayers.length) {
                    card.classList.add('active');
                }
                card.innerHTML = `
                    <div class="player-score-name">${player.name}</div>
                    <div class="player-score-meta">
                        <span>Pontos: <strong>${player.score}</strong></span>
                        <span>Acertos: <strong>${player.matches}</strong></span>
                        <span>Tentativas: <strong>${player.attempts}</strong></span>
                    </div>
                `;
                fragment.appendChild(card);
            });
            playersScoreboardElement.appendChild(fragment);
        }
    }

    const currentPlayer = getCurrentPlayer();
    if (currentPlayerNameElement) {
        currentPlayerNameElement.textContent = currentPlayer ? currentPlayer.name : '—';
    }
}

function addPlayer(name) {
    const sanitized = sanitizeNickname(name);
    if (!sanitized) {
        showToast('Informe um nickname válido.');
        return;
    }
    if (players.some(player => player.name.toLowerCase() === sanitized.toLowerCase())) {
        showToast('Esse nickname já foi adicionado.');
        return;
    }
    if (players.length >= 6) {
        showToast('Limite máximo de 6 jogadores atingido.');
        return;
    }
    const newRecord = createPlayerRecord(sanitized);
    players.push(newRecord);
    savePlayers(players);
    refreshActivePlayers();
    updatePlayersUI();
}

function removePlayer(playerId) {
    const index = players.findIndex(player => player.id === playerId);
    if (index === -1) return;
    players.splice(index, 1);
    savePlayers(players);
    refreshActivePlayers();
    updatePlayersUI();
}

function resetPlayersStats() {
    activePlayers = activePlayers.map(player => ({
        ...player,
        score: 0,
        attempts: 0,
        matches: 0
    }));
    currentPlayerIndex = 0;
    updatePlayersUI();
}

function awardPointsToCurrentPlayer(points) {
    const player = getCurrentPlayer();
    if (!player) return;
    player.score += points;
    player.matches += 1;
    updatePlayersUI();
}

function registerAttemptForCurrentPlayer() {
    const player = getCurrentPlayer();
    if (!player) return;
    player.attempts += 1;
    updatePlayersUI();
}

function advanceTurn() {
    if (!activePlayers.length) return;
    currentPlayerIndex = (currentPlayerIndex + 1) % activePlayers.length;
    updatePlayersUI();
}

function clearRanking() {
    rankingEntries = [];
    localStorage.removeItem(STORAGE_KEYS.ranking);
    updateRankingTable();
    showToast('Ranking limpo com sucesso!');
}

function initGame() {
    ensurePlayersAvailable();
    refreshActivePlayers();
    resetPlayersStats();
    resetGameState();
    createCards();
    shuffleCards();
    renderCards();
    startTimer();
}

// Resetar estado do jogo
function resetGameState() {
    // Parar timer anterior se existir
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    gameState.mode = selectedMode;
    gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        score: 0,
        attempts: 0,
        timer: 0,
        elapsedSeconds: 0,
        timerInterval: null,
        canFlip: true,
        mode: selectedMode,
        glossary: new Map(),
        activeGlossaryId: null
    };
    
    updateUI();
    updatePlayersUI();
    modalExplanation.classList.remove('active');
    modalFinish.classList.remove('active');
    resetGlossaryUI();
}

// Criar cartas
function createCards() {
    gameState.cards = [];
    const modeConfig = gameModes[gameState.mode];
    const selectedPairs = getRandomPairs(modeConfig.pairCount);

    selectedPairs.forEach(pair => {
        gameState.cards.push({
            id: `${pair.id}-a`,
            pairId: pair.id,
            content: pair.pair[0],
            icon: pair.icon,
            iconImage: pair.iconImage ?? null,
            explanation: pair.explanation,
            isFlipped: false,
            isMatched: false
        });

        gameState.cards.push({
            id: `${pair.id}-b`,
            pairId: pair.id,
            content: pair.pair[1],
            icon: pair.icon,
            iconImage: pair.iconImage ?? null,
            explanation: pair.explanation,
            isFlipped: false,
            isMatched: false
        });
    });
}

function getRandomPairs(count) {
    const pool = [...cardPairs];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
}

// Embaralhar cartas (algoritmo Fisher-Yates)
function shuffleCards() {
    for (let i = gameState.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.cards[i], gameState.cards[j]] = [gameState.cards[j], gameState.cards[i]];
    }
}

// Renderizar cartas no tabuleiro
function renderCards() {
    gameBoard.innerHTML = '';
    gameBoard.classList.toggle('mode-sprint', gameState.mode === 'sprint');
    gameBoard.classList.toggle('mode-marathon', gameState.mode === 'marathon');
    gameBoard.classList.toggle('mode-legend', gameState.mode === 'legend');
    gameState.cards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        gameBoard.appendChild(cardElement);
    });
}

// Criar elemento de carta
function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.index = index;
    const iconMarkup = card.iconImage
        ? `<img src="${card.iconImage}" alt="${card.content} ícone">`
        : card.icon;
    
    cardDiv.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
            <div class="card-icon">${iconMarkup}</div>
            <div class="card-content">${card.content}</div>
        </div>
    `;
    
    cardDiv.addEventListener('click', () => handleCardClick(index));
    
    return cardDiv;
}

// Manipular clique na carta
function handleCardClick(index) {
    const card = gameState.cards[index];
    
    // Verificar se pode virar a carta
    if (!gameState.canFlip || card.isFlipped || card.isMatched) {
        return;
    }
    
    // Virar carta
    flipCard(index);
    
    // Adicionar às cartas viradas
    gameState.flippedCards.push(index);
    
    // Reproduzir som de flip (simulado)
    playSound('flip');
    
    // Se duas cartas foram viradas
    if (gameState.flippedCards.length === 2) {
        gameState.canFlip = false;
        gameState.attempts++;
        registerAttemptForCurrentPlayer();
        updateUI();
        
        setTimeout(() => checkMatch(), 1500);
    }
}

// Virar carta
function flipCard(index) {
    const card = gameState.cards[index];
    const cardElement = gameBoard.children[index];
    
    card.isFlipped = true;
    cardElement.classList.add('flipped');
}

// Desvirar carta
function unflipCard(index) {
    const card = gameState.cards[index];
    const cardElement = gameBoard.children[index];
    
    card.isFlipped = false;
    cardElement.classList.remove('flipped');
}

// Verificar se as cartas combinam
function checkMatch() {
    const [index1, index2] = gameState.flippedCards;
    const card1 = gameState.cards[index1];
    const card2 = gameState.cards[index2];
    
    if (card1.pairId === card2.pairId) {
        // Cartas combinam!
        handleMatch(index1, index2, card1);
    } else {
        // Cartas não combinam
        handleMismatch(index1, index2);
    }
}

// Manipular acerto
function handleMatch(index1, index2, card) {
    const cardElement1 = gameBoard.children[index1];
    const cardElement2 = gameBoard.children[index2];
    
    // Marcar cartas como combinadas
    gameState.cards[index1].isMatched = true;
    gameState.cards[index2].isMatched = true;
    
    cardElement1.classList.add('matched');
    cardElement2.classList.add('matched');
    
    // Atualizar pontuação e pares
    gameState.score += 10;
    gameState.matchedPairs++;
    awardPointsToCurrentPlayer(10);
    
    // Reproduzir som de sucesso
    playSound('success');
    
    // Mostrar explicação
    showExplanation(card.explanation);

    // Atualizar glossário
    addGlossaryEntry(card.pairId);
    
    // Resetar cartas viradas
    gameState.flippedCards = [];
    gameState.canFlip = true;
    
    updateUI();
    
    // Verificar se o jogo terminou
    if (gameState.matchedPairs === gameModes[gameState.mode].pairCount) {
        setTimeout(() => finishGame(), 1000);
    }
}

// Manipular erro
function handleMismatch(index1, index2) {
    const cardElement1 = gameBoard.children[index1];
    const cardElement2 = gameBoard.children[index2];
    
    // Adicionar animação de erro
    cardElement1.classList.add('error');
    cardElement2.classList.add('error');
    
    // Reproduzir som de erro
    playSound('error');
    
    setTimeout(() => {
        // Remover animação de erro
        cardElement1.classList.remove('error');
        cardElement2.classList.remove('error');
        
        // Desvirar cartas
        unflipCard(index1);
        unflipCard(index2);
        
        // Resetar cartas viradas
        gameState.flippedCards = [];
        gameState.canFlip = true;
        
        updateUI();
        advanceTurn();
    }, 1800);
}

// Mostrar explicação
function showExplanation(explanation) {
    modalTitle.textContent = '✅ Par Correto!';
    modalText.textContent = explanation;
    modalExplanation.classList.add('active');
}

// Fechar modal de explicação
btnCloseModal.addEventListener('click', () => {
    modalExplanation.classList.remove('active');
});

// Iniciar timer
function startTimer() {
    const modeConfig = gameModes[gameState.mode];

    // Inicializar timer
    if (modeConfig.timeLimit) {
        gameState.timer = modeConfig.timeLimit;
        gameState.elapsedSeconds = 0;
        updateTimerDisplay();
        gameState.timerInterval = setInterval(() => {
            if (gameState.timer <= 0) {
                clearInterval(gameState.timerInterval);
                handleTimeExpired();
                return;
            }
            gameState.timer--;
            gameState.elapsedSeconds++;
            updateTimerDisplay();
        }, 1000);
    } else {
        gameState.timer = 0;
        updateTimerDisplay();
        gameState.timerInterval = setInterval(() => {
            gameState.timer++;
            gameState.elapsedSeconds = gameState.timer;
            updateTimerDisplay();
        }, 1000);
    }
}

// Atualizar display do timer
function updateTimerDisplay() {
    const modeConfig = gameModes[gameState.mode];
    const value = modeConfig.timeLimit ? gameState.timer : gameState.timer;
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Atualizar UI
function updateUI() {
    scoreElement.textContent = gameState.score;
    const totalPairs = gameModes[gameState.mode].pairCount;
    pairsElement.textContent = `${gameState.matchedPairs}/${totalPairs}`;
}

// Calcular badge baseado no desempenho
function calculateBadge(score, attempts, time) {
    let badge = {
        icon: '',
        title: '',
        message: '',
        color: ''
    };
    
    // Pontuação máxima possível: 12 pares × 10 pontos = 120
    // Considerar tentativas e tempo
    const efficiency = score / attempts;
    const timeInSeconds = time;
    
    if (score >= 110 && attempts <= 15 && timeInSeconds <= 180) {
        // Desempenho excepcional
        badge = {
            icon: '👑',
            title: 'MESTRE SUPREMO',
            message: 'Desempenho PERFEITO! Você domina completamente a bioquímica dos nanopolímeros!',
            color: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)'
        };
    } else if (score >= 100 && attempts <= 20) {
        // Excelente
        badge = {
            icon: '🏆',
            title: 'EXPERT EM NANOCIÊNCIA',
            message: 'Incrível! Você tem conhecimento excepcional sobre biopolímeros e nanopartículas!',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        };
    } else if (score >= 85 && attempts <= 25) {
        // Muito bom
        badge = {
            icon: '⭐',
            title: 'CIENTISTA AVANÇADO',
            message: 'Muito bem! Seu domínio sobre materiais biocompatíveis é impressionante!',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        };
    } else if (score >= 70) {
        // Bom
        badge = {
            icon: '🎖️',
            title: 'PESQUISADOR COMPETENTE',
            message: 'Bom trabalho! Você está no caminho certo para dominar a nanobiotecnologia!',
            color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        };
    } else if (score >= 50) {
        // Regular
        badge = {
            icon: '🌟',
            title: 'ESTUDANTE DEDICADO',
            message: 'Continue praticando! Cada jogo melhora seu conhecimento sobre biomateriais!',
            color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        };
    } else {
        // Iniciante
        badge = {
            icon: '🎯',
            title: 'APRENDIZ INICIANTE',
            message: 'Ótimo começo! Jogue novamente para aprimorar seu conhecimento científico!',
            color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        };
    }
    
    return badge;
}

// Efeito de confetti
function launchConfetti() {
    if (typeof confetti === 'undefined') return;
    
    // Confetti explosão central
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4ade80', '#fbbf24']
    });
    
    // Confetti dos lados
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#667eea', '#764ba2', '#f093fb']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#667eea', '#764ba2', '#f093fb']
        });
    }, 200);
    
    // Confetti chuva
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0 },
            colors: ['#667eea', '#764ba2', '#f093fb', '#4ade80', '#fbbf24']
        });
    }, 400);
}

// Finalizar jogo
function finishGame(options = {}) {
    const { reason = 'completed' } = options;
    // Parar timer
    clearInterval(gameState.timerInterval);
    
    if (reason === 'completed') {
        playSound('victory');
        launchConfetti();
    } else {
        playSound('error');
    }

    // Calcular badge
    const badge = calculateBadge(gameState.score, gameState.attempts, gameState.elapsedSeconds);
    
    // Atualizar estatísticas finais
    finalScore.textContent = gameState.score;
    const modeConfig = gameModes[gameState.mode];
    const timeDisplay = reason === 'completed'
        ? formatSeconds(gameState.elapsedSeconds)
        : 'Tempo esgotado';
    finalTime.textContent = timeDisplay;
    finalAttempts.textContent = gameState.attempts;
    
    // Atualizar badge no modal
    const badgeElement = document.getElementById('badgeIcon');
    const badgeTitleElement = document.getElementById('badgeTitle');
    const badgeMessageElement = document.getElementById('badgeMessage');
    const badgeContainerElement = document.querySelector('.badge-container');
    
    if (badgeElement) badgeElement.textContent = badge.icon;
    if (badgeTitleElement) badgeTitleElement.textContent = badge.title;
    if (badgeMessageElement) badgeMessageElement.textContent = badge.message;
    if (badgeContainerElement) badgeContainerElement.style.background = badge.color;
    
    // Mostrar modal de conclusão
    if (reason === 'timeout') {
        if (badgeElement) badgeElement.textContent = '⏱️';
        if (badgeTitleElement) badgeTitleElement.textContent = 'TEMPO ESGOTADO';
        if (badgeMessageElement) badgeMessageElement.textContent = 'O tempo acabou! Tente novamente no modo Sprint para melhorar sua agilidade.';
    }

    const sortedPlayers = [...activePlayers].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (a.attempts !== b.attempts) return a.attempts - b.attempts;
        return a.name.localeCompare(b.name);
    });

    if (sortedPlayers.length && finalPlayersSummaryElement && finalWinnerElement) {
        const topScore = sortedPlayers[0].score;
        const winners = sortedPlayers.filter(player => player.score === topScore && topScore > 0);
        if (winners.length) {
            finalWinnerElement.textContent = winners.map(player => player.name).join(', ');
        } else {
            finalWinnerElement.textContent = sortedPlayers[0].score === 0 ? 'Nenhum vencedor' : sortedPlayers[0].name;
        }

        finalPlayersSummaryElement.innerHTML = sortedPlayers.map((player, index) => {
            const isWinner = winners.some(winner => winner.id === player.id);
            return `
                <div class="final-player-card${isWinner ? ' winner' : ''}">
                    <div class="final-player-header">
                        <span class="final-player-rank">${index + 1}º</span>
                        <span class="final-player-name">${player.name}</span>
                    </div>
                    <div class="final-player-stats">
                        <span>Pontos: <strong>${player.score}</strong></span>
                        <span>Acertos: <strong>${player.matches}</strong></span>
                        <span>Tentativas: <strong>${player.attempts}</strong></span>
                        <span>Tempo: <strong>${formatSeconds(gameState.elapsedSeconds)}</strong></span>
                    </div>
                </div>
            `;
        }).join('');

        sortedPlayers.forEach(player => {
            addRankingEntry({
                nickname: player.name,
                mode: gameState.mode,
                score: player.score,
                attempts: player.attempts,
                time: gameState.elapsedSeconds,
                timestamp: Date.now()
            });
        });
        updateRankingTable();
    } else {
        if (finalWinnerElement) finalWinnerElement.textContent = '—';
        if (finalPlayersSummaryElement) {
            finalPlayersSummaryElement.innerHTML = '<p class="summary-empty">Nenhum jogador registrado.</p>';
        }
    }

    modalFinish.classList.add('active');
}

function handleTimeExpired() {
    finishGame({ reason: 'timeout' });
}

function formatSeconds(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Reiniciar jogo
btnRestart.addEventListener('click', () => {
    initGame();
});

btnPlayAgain.addEventListener('click', () => {
    initGame();
});

// Seleção de modo
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mode = button.dataset.mode;
        if (!mode || mode === selectedMode) return;

        selectedMode = mode;
        modeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));

        if (gameContainer.style.display !== 'none') {
            initGame();
        } else {
            updateModePreview();
        }
    });
});

function updateModePreview() {
    const totalPairs = gameModes[selectedMode].pairCount;
    pairsElement.textContent = `0/${totalPairs}`;
}

// Simular sons (console logs)
function playSound(type) {
    const sounds = {
        flip: '🔄',
        success: '✅',
        error: '❌',
        victory: '🎉'
    };
    console.log(`Sound: ${sounds[type]}`);
}

// Fechar modais ao clicar fora
modalExplanation.addEventListener('click', (e) => {
    if (e.target === modalExplanation) {
        modalExplanation.classList.remove('active');
    }
});

modalFinish.addEventListener('click', (e) => {
    if (e.target === modalFinish) {
        modalFinish.classList.remove('active');
    }
});

// Função para iniciar o jogo a partir da tela de introdução
function startGame() {
    // Esconder tela de introdução com animação
    introScreen.classList.add('fade-out');
    
    setTimeout(() => {
        introScreen.classList.remove('active', 'fade-out');
        gameContainer.style.display = 'block';
        
        // Inicializar o jogo
        selectedMode = selectedMode || 'marathon';
        modeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === selectedMode));
        initGame();
    }, 500);
}

function backToIntro() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    resetGameState();
    gameBoard.innerHTML = '';
    gameContainer.style.display = 'none';
    introScreen.classList.add('active');
    introScreen.classList.remove('fade-out');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    modalCustomizer?.classList.remove('customizer-visible');
    modalConfirm?.classList.remove('customizer-visible');
    emojiPicker?.classList.remove('open');
    applyPreferences(preferences);
    updateRankingTable();
}

// Event listener para botão de começar
btnStart.addEventListener('click', () => {
    const rawAccent = accentColorInput?.value ?? '';
    preferences = {
        nickname: getCurrentPlayer()?.name || defaultPreferences.nickname,
        accentColor: sanitizeAccentColor(rawAccent)
    };
    savePreferences(preferences);
    applyPreferences(preferences);
    startGame();
});

btnBackToIntro?.addEventListener('click', () => {
    backToIntro();
});

btnConfirmYes?.addEventListener('click', () => {
    modalConfirm?.classList.remove('customizer-visible');
    if (typeof pendingConfirmAction === 'function') {
        pendingConfirmAction();
    }
    pendingConfirmAction = null;
});

btnConfirmNo?.addEventListener('click', () => {
    modalConfirm?.classList.remove('customizer-visible');
    pendingConfirmAction = null;
});

modalConfirm?.addEventListener('click', event => {
    if (event.target === modalConfirm) {
        modalConfirm.classList.remove('customizer-visible');
        pendingConfirmAction = null;
    }
});

// Esconder container do jogo inicialmente
window.addEventListener('DOMContentLoaded', () => {
    gameContainer.style.display = 'none';
    applyPreferences(preferences);
    updateRankingTable();
    updatePlayersUI();
    updateModePreview();
    glossaryListElement.addEventListener('click', handleGlossaryClick);
    initializeCustomizer();
    accentColorInput?.addEventListener('input', event => {
        previewAccentColor(event.target.value);
    });
    btnAddPlayer?.addEventListener('click', () => {
        const value = newPlayerInput?.value ?? '';
        addPlayer(value);
        if (newPlayerInput) {
            newPlayerInput.value = '';
            newPlayerInput.focus();
        }
    });
    newPlayerInput?.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addPlayer(event.target.value);
            event.target.value = '';
        }
    });
    playersListElement?.addEventListener('click', event => {
        const button = event.target.closest('.remove-player');
        if (!button) return;
        const id = Number(button.dataset.playerId);
        removePlayer(id);
    });
    btnClearRanking?.addEventListener('click', () => {
        openConfirmModal({
            title: 'Limpar Ranking',
            message: 'Tem certeza que deseja remover todos os registros de ranking? Essa ação não pode ser desfeita.',
            onConfirm: () => {
                clearRanking();
            }
        });
    });
});

// Glossário
function addGlossaryEntry(pairId) {
    if (gameState.glossary.has(pairId)) {
        return;
    }

    const pairData = pairLookup.get(pairId);
    if (!pairData) return;

    gameState.glossary.set(pairId, {
        title: pairData.pair[0],
        description: pairData.pair[1],
        explanation: pairData.explanation,
        icon: pairData.icon,
        reference: glossaryReferences.get(pairId) ?? null
    });

    renderGlossaryList();
    showGlossaryDetails(pairId);
}

function renderGlossaryList() {
    glossaryListElement.innerHTML = '';
    if (gameState.glossary.size === 0) {
        glossaryEmptyElement.style.display = 'block';
        return;
    }

    glossaryEmptyElement.style.display = 'none';

    const fragment = document.createDocumentFragment();
    gameState.glossary.forEach((value, key) => {
        const item = document.createElement('button');
        item.className = 'glossary-item';
        item.dataset.pairId = key;
        if (gameState.activeGlossaryId === key) {
            item.classList.add('active');
        }
        item.innerHTML = `
            <span class="glossary-item-icon">${value.icon}</span>
            <span class="glossary-item-text">${value.title}</span>
        `;
        fragment.appendChild(item);
    });

    glossaryListElement.appendChild(fragment);
}

function handleGlossaryClick(event) {
    const item = event.target.closest('.glossary-item');
    if (!item) return;
    const pairId = Number(item.dataset.pairId);
    showGlossaryDetails(pairId);
}

function showGlossaryDetails(pairId) {
    const entry = gameState.glossary.get(pairId);
    if (!entry) return;

    gameState.activeGlossaryId = pairId;
    glossaryTitleElement.textContent = entry.title;
    const extraLink = entry.reference ? `
        <p class="glossary-reference">
            <a href="${entry.reference.url}" target="_blank" rel="noopener noreferrer">🔗 ${entry.reference.label}</a>
        </p>` : '';
    glossaryDescriptionElement.innerHTML = `
        <p>${entry.description}</p>
        <p>${entry.explanation}</p>
        ${extraLink}
    `;

    renderGlossaryList();
}

function resetGlossaryUI() {
    glossaryListElement.innerHTML = '';
    glossaryEmptyElement.style.display = 'block';
    glossaryTitleElement.textContent = 'Selecione um termo';
    glossaryDescriptionElement.textContent = 'À medida que você acerta pares, os conceitos aparecerão aqui.';
}
