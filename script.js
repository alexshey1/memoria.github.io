// Pares de cartas: FOCO TOTAL EM NANOPARTÍCULAS
const cardPairs = [
    {
        id: 1,
        pair: ['Nanopartícula Polimérica', 'Estrutura com tamanho entre 1 e 1000 nm, formada por polímeros, projetada para encapsular e transportar substâncias ativas'],
        icon: '⚛️',
        explanation: 'Nanopartículas poliméricas são sistemas nanométricos versáteis capazes de carregar fármacos, proteínas, genes ou compostos bioativos. Suas propriedades podem ser ajustadas pela escolha do polímero, método de preparação e funcionalização de superfície, tornando-as ideais para drug delivery direcionado.'
    },
    {
        id: 2,
        pair: ['Nanoesfera', 'Tipo de nanopartícula onde o fármaco fica disperso ou dissolvido em uma matriz polimérica sólida, como uma pequena esfera maciça'],
        icon: '🔵',
        explanation: 'As nanoesferas possuem estrutura matriz, onde o ativo está homogeneamente distribuído dentro do polímero. A liberação do fármaco ocorre por difusão através da matriz e/ou erosão do polímero. São ideais para liberação sustentada e proteção de moléculas lábeis.'
    },
    {
        id: 3,
        pair: ['Nanocápsula', 'Tipo de nanopartícula com estrutura "núcleo-casca", onde um núcleo (geralmente oleoso) é revestido por uma membrana de polímero'],
        icon: '🎯',
        explanation: 'Nanocápsulas apresentam um núcleo líquido ou semi-sólido envolto por uma parede polimérica fina. O fármaco pode estar dissolvido no núcleo ou adsorvido na parede. Essa arquitetura permite alta capacidade de encapsulação e proteção superior contra degradação enzimática.'
    },
    {
        id: 4,
        pair: ['Micela Polimérica', 'Nanoestrutura formada por polímeros anfifílicos, com um núcleo hidrofóbico para carregar fármacos insolúveis e uma coroa hidrofílica'],
        icon: '🌀',
        explanation: 'Micelas poliméricas auto-organizam-se espontaneamente em meio aquoso acima da concentração micelar crítica (CMC). O núcleo hidrofóbico solubiliza fármacos lipofílicos, enquanto a coroa hidrofílica garante estabilidade coloidal e biocompatibilidade. Amplamente usadas para fármacos anticâncer.'
    },
    {
        id: 5,
        pair: ['Quitosana', 'Polímero natural catiônico usado para formar nanopartículas por gelificação iônica, com importantes propriedades mucoadesivas'],
        icon: '🦠',
        explanation: 'A quitosana forma nanopartículas pela interação eletrostática com poliânions (ex: TPP). Suas cargas positivas promovem mucoadesão, aumentando o tempo de residência em mucosas. É biodegradável, biocompatível e apresenta atividade antimicrobiana intrínseca, sendo ideal para administração oral, nasal e ocular.'
    },
    {
        id: 6,
        pair: ['PLA / PLGA', 'Poliésteres biodegradáveis e biocompatíveis, amplamente usados para criar nanopartículas para a liberação controlada de fármacos'],
        icon: '💊',
        explanation: 'PLA (ácido polilático) e PLGA (ácido poli-lático-co-glicólico) degradam-se por hidrólise em metabólitos naturais (ácidos lático e glicólico). A taxa de degradação pode ser controlada pela razão LA:GA. São aprovados pela FDA e extensivamente usados em formulações injetáveis de liberação prolongada.'
    },
    {
        id: 7,
        pair: ['Alginato', 'Polissacarídeo que forma nanogéis pela interação com íons de cálcio, usado para imobilizar células ou encapsular proteínas'],
        icon: '🌊',
        explanation: 'O alginato sofre gelificação iônica instantânea na presença de Ca²⁺, formando uma rede tridimensional suave. Essa propriedade permite o encapsulamento de células vivas, enzimas e proteínas em condições brandas, preservando sua atividade biológica. Muito usado em engenharia tecidual e terapia celular.'
    },
    {
        id: 8,
        pair: ['PEGilação', 'Processo de revestir nanopartículas com PEG (Polietilenoglicol) para "camuflá-las" do sistema imune e aumentar seu tempo na circulação sanguínea'],
        icon: '🛡️',
        explanation: 'A PEGilação cria uma camada hidrofílica que reduz a opsonização (adsorção de proteínas plasmáticas) e o reconhecimento pelo sistema reticuloendotelial (SRE). Isso prolonga significativamente a meia-vida circulatória das nanopartículas, permitindo acúmulo passivo em tumores pelo efeito EPR (Enhanced Permeability and Retention).'
    },
    {
        id: 9,
        pair: ['Nanopartículas de Prata (AgNPs)', 'Nanomaterial inorgânico com potente atividade antimicrobiana, frequentemente estabilizado por polímeros para evitar sua agregação'],
        icon: '⚪',
        explanation: 'AgNPs liberam íons Ag⁺ que interagem com membranas celulares bacterianas, DNA e proteínas, causando morte celular. Polímeros como PVP ou quitosana estabilizam as AgNPs, controlando sua liberação e distribuição. São incorporadas em curativos, cateteres e nanocompósitos antimicrobianos.'
    },
    {
        id: 10,
        pair: ['Nanopartículas de Óxido de Zinco (ZnO NPs)', 'Nanomaterial inorgânico muito usado como filtro UV em nanocompósitos poliméricos (protetores solares) e como agente antibacteriano'],
        icon: '☀️',
        explanation: 'ZnO NPs absorvem eficientemente radiação UV-A e UV-B devido ao seu bandgap (~3.3 eV). Também geram espécies reativas de oxigênio (ROS) que conferem atividade antimicrobiana. São incorporadas em formulações dérmicas, têxteis funcionais e embalagens ativas, frequentemente dispersas em matrizes poliméricas.'
    },
    {
        id: 11,
        pair: ['Nanocelulose', 'Nanomaterial derivado da celulose, usado como agente de reforço para criar nanocompósitos com melhores propriedades mecânicas e de barreira'],
        icon: '🌱',
        explanation: 'Nanocelulose (celulose nanocristalina - CNC ou celulose nanofibrilada - CNF) apresenta módulo de Young elevado (~140 GPa), baixa densidade e alta área superficial. Quando incorporada em matrizes poliméricas, melhora significativamente resistência à tração, rigidez e propriedades de barreira a gases, sendo ideal para embalagens sustentáveis.'
    },
    {
        id: 12,
        pair: ['Potencial Zeta', 'Medida da carga elétrica na superfície de uma nanopartícula. É um indicador crucial da estabilidade da suspensão, pois cargas altas evitam a aglomeração'],
        icon: '⚡',
        explanation: 'O potencial zeta (ζ) mede a carga efetiva na superfície da nanopartícula em solução. Valores absolutos acima de ±30 mV indicam boa estabilidade coloidal devido à repulsão eletrostática entre partículas. É essencial para prever agregação, interações com células e comportamento in vivo das nanopartículas.'
    }
];

const STORAGE_KEYS = {
    cards: 'nanoparticlesMemoryCustomCards'
};

const defaultCardPairs = deepClonePairs(cardPairs);
applyCustomCards(loadCustomCards());

let pairLookup = buildPairLookup(cardPairs);

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
        pairCount: 12,
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
const attemptsElement = document.getElementById('attempts');
const timerElement = document.getElementById('timer');
const pairsElement = document.getElementById('pairs');
const btnRestart = document.getElementById('btnRestart');
const modeButtons = document.querySelectorAll('.mode-button');
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
const modalConfirm = document.getElementById('modalConfirm');
const confirmTitle = document.getElementById('confirmTitle');
const confirmMessage = document.getElementById('confirmMessage');
const btnConfirmYes = document.getElementById('btnConfirmYes');
const btnConfirmNo = document.getElementById('btnConfirmNo');
const toastElement = document.getElementById('customizerToast');

let pendingConfirmAction = null;

function initGame() {
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
            explanation: pair.explanation,
            isFlipped: false,
            isMatched: false
        });

        gameState.cards.push({
            id: `${pair.id}-b`,
            pairId: pair.id,
            content: pair.pair[1],
            icon: pair.icon,
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
    
    cardDiv.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
            <div class="card-icon">${card.icon}</div>
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
    attemptsElement.textContent = gameState.attempts;
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
}

// Event listener para botão de começar
btnStart.addEventListener('click', () => {
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
    updateModePreview();
    glossaryListElement.addEventListener('click', handleGlossaryClick);
    initializeCustomizer();
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
        icon: pairData.icon
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
    glossaryTitleElement.textContent = `${entry.icon} ${entry.title}`;
    glossaryDescriptionElement.innerHTML = `
        <strong>Descrição:</strong> ${entry.description}<br><br>
        <strong>Explicação:</strong> ${entry.explanation}
    `;

    renderGlossaryList();
}

function resetGlossaryUI() {
    glossaryListElement.innerHTML = '';
    glossaryEmptyElement.style.display = 'block';
    glossaryTitleElement.textContent = 'Selecione um termo';
    glossaryDescriptionElement.textContent = 'À medida que você acerta pares, os conceitos aparecerão aqui.';
}
