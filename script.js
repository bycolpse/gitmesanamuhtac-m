function getLogoFile(teamName) {
    const map = {
        "Ajax": "ajax",
        "Arsenal": "arsenal",
        "Atalanta": "atalanta",
        "Atlético Madrid": "atletico",
        "Barcelona": "barcelona",
        "Basel": "basel",
        "Bayern München": "bayern",
        "Benfica": "benf",
        "Athletic Bilbao": "bilbao",
        "Bodø/Glimt": "bodo",
        "Club Brugge": "brugge",
        "Celtic": "celtic",
        "Chelsea": "chealse",
        "Manchester City": "city",
        "Borussia Dortmund": "dortmund",
        "Fenerbahçe": "fenerbahçe",
        "Feyenoord": "feyenoord",
        "Eintracht Frankfurt": "frankfurt",
        "Galatasaray": "galatasaray",
        "Internazionale": "inter",
        "Juventus": "juventus",
        "Crvena Zvezda": "kızılyıldız",
        "Bayer Leverkusen": "leverkusen",
        "Liverpool": "liverpool",
        "Marseille": "marsilya",
        "Monaco": "monaco",
        "Napoli": "napoli",
        "Newcastle United": "newcastle",
        "Paris Saint-Germain": "paris",
        "PSV": "psv",
        "Real Madrid": "real madrid",
        "Slavia Praha": "slavia",
        "Sporting": "sporting",
        "Tottenham Hotspur": "tottenham",
        "Ferencvaros": "ferenvaros",
        "Union SG": "unionsiktir",
        "Villarreal": "vilereal",
        "Olimpiakos": "yunan",
        "Kopenhag": "kopenhag",
        "Freiburg": "freiburg"
    };
    const fileName = map[teamName];
    if (fileName) {
        return `logos/${fileName}.png`;
    }
    console.warn(`Logo not found for team: ${teamName}. Using default.`);
    return `logos/default.png`; // Fallback default logo
}

// Kullanıcının sağladığı potlara göre takımları tanımla
const pot1 = [
    { name: "Real Madrid", strength: 98, country: "Spain" },
    { name: "Manchester City", strength: 97, country: "England" },
    { name: "Bayern München", strength: 96, country: "Germany" },
    { name: "Liverpool", strength: 94, country: "England" },
    { name: "Internazionale", strength: 91, country: "Italy" },
    { name: "Paris Saint-Germain", strength: 93, country: "France" },
    { name: "Chelsea", strength: 89, country: "England" },
    { name: "Barcelona", strength: 94, country: "Spain" },
    { name: "Tottenham Hotspur", strength: 87, country: "England" }
];

const pot2 = [
    { name: "Arsenal", strength: 92, country: "England" },
    { name: "Atlético Madrid", strength: 89, country: "Spain" },
    { name: "Benfica", strength: 86, country: "Portugal" },
    { name: "Villarreal", strength: 79, country: "Spain" },
    { name: "Juventus", strength: 87, country: "Italy" },
    { name: "Atalanta", strength: 84, country: "Italy" },
    { name: "Eintracht Frankfurt", strength: 84, country: "Germany" },
    { name: "Club Brugge", strength: 70, country: "Belgium" },
    { name: "Bayer Leverkusen", strength: 90, country: "Germany" }
];

const pot3 = [
    { name: "Ajax", strength: 80, country: "Netherlands" },
    { name: "PSV", strength: 81, country: "Netherlands" },
    { name: "Napoli", strength: 85, country: "Italy" },
    { name: "Sporting", strength: 82, country: "Portugal" },
    { name: "Olimpiakos", strength: 72, country: "Greece" },
    { name: "Slavia Praha", strength: 70, country: "Czechia" },
    { name: "Bodø/Glimt", strength: 69, country: "Norway" },
    { name: "Marseille", strength: 75, country: "France" },
    { name: "Fenerbahçe", strength: 80, country: "Turkey" } // Fenerbahçe eklendi
];

const pot4 = [
    { name: "Crvena Zvezda", strength: 68, country: "Serbia" },
    { name: "Galatasaray", strength: 78, country: "Turkey" },
    { name: "Ferencvaros", strength: 65, country: "Hungary" },
    { name: "Celtic", strength: 76, country: "Scotland" },
    { name: "Union SG", strength: 74, country: "Belgium" },
    { name: "Athletic Bilbao", strength: 79, country: "Spain" },
    { name: "Newcastle United", strength: 85, country: "England" },
    { name: "Monaco", strength: 70, country: "France" },
    { name: "Freiburg", strength: 71, country: "Germany" }
];

// Tüm takımları potlardan tek bir diziye birleştir, logo yolu ve başlangıç istatistiklerini ekle
let allTeams = [...pot1, ...pot2, ...pot3, ...pot4].map(team => ({
    ...team,
    logo: getLogoFile(team.name),
    played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0, fixtures: []
}));

// Bir takımın pot numarasını (1-4) alma fonksiyonu
function getTeamPotNumber(teamName) {
    if (pot1.some(t => t.name === teamName)) return 1;
    if (pot2.some(t => t.name === teamName)) return 2;
    if (pot3.some(t => t.name === teamName)) return 3;
    if (pot4.some(t => t.name === teamName)) return 4;
    return null;
}

// Geçerli takım adlarının kümesi (oyuncu filtrelemesi için)
const validTeamNames = new Set(allTeams.map(team => team.name));

// Oyuncu verileri (PNG yollarına dokunulmadı)
let players = [
    // Real Madrid
    { name: "Jude Bellingham", team: "Real Madrid", position: "CM", strength: 92, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "bellingham.jpg" },
    { name: "Vinicius Jr.", team: "Real Madrid", position: "LW", strength: 93, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "vinicius.jpg" },
    { name: "Rodrygo", team: "Real Madrid", position: "RW", strength: 89, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "rodrygo.jpg" },
    { name: "Federico Valverde", team: "Real Madrid", position: "CM", strength: 88, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "valverde.jpg" },

    // Manchester City
    { name: "Erling Haaland", team: "Manchester City", position: "ST", strength: 94, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "haaland.jpg" },
    { name: "Kevin De Bruyne", team: "Manchester City", position: "CM", strength: 92, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "kdb.jpg" },
    { name: "Phil Foden", team: "Manchester City", position: "LW", strength: 90, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "foden.jpg" },
    { name: "Rodri", team: "Manchester City", position: "CDM", strength: 91, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "rodri.jpg" },

    // Paris Saint-Germain
    { name: "Kylian Mbappé", team: "Paris Saint-Germain", position: "ST", strength: 95, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "mbappe.jpg" },
    { name: "Ousmane Dembélé", team: "Paris Saint-Germain", position: "RW", strength: 86, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "dembele.jpg" },

    // Bayern München
    { name: "Harry Kane", team: "Bayern München", position: "ST", strength: 93, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "kane.jpg" },
    { name: "Jamal Musiala", team: "Bayern München", position: "CAM", strength: 89, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "musiala.jpg" },

    // Liverpool
    { name: "Mohamed Salah", team: "Liverpool", position: "RW", strength: 91, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "salah.jpg" },
    { name: "Virgil van Dijk", team: "Liverpool", position: "CB", strength: 89, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "vandijk.jpg" },

    // Internazionale
    { name: "Lautaro Martínez", team: "Internazionale", position: "ST", strength: 90, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "lautaro.jpg" },

    // Barcelona
    { name: "Robert Lewandowski", team: "Barcelona", position: "ST", strength: 90, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "lewandowski.jpg" },
    { name: "Pedri", team: "Barcelona", position: "CM", strength: 87, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "pedri.jpg" },

    // Borussia Dortmund
    { name: "Serhou Guirassy", team: "Borussia Dortmund", position: "ST", strength: 84, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "serhou.png" },

    // Arsenal
    { name: "Bukayo Saka", team: "Arsenal", position: "RW", strength: 88, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "saka.jpg" },
    { name: "Martin Ødegaard", team: "Arsenal", position: "CAM", strength: 88, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "odegaard.jpg" },

    // Atlético Madrid
    { name: "Antoine Griezmann", team: "Atlético Madrid", position: "ST", strength: 89, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "griezmann.jpg" },

    // Chelsea
    { name: "Cole Palmer", team: "Chelsea", position: "CAM", strength: 85, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "palmer.jpg" },

    // Juventus
    { name: "Kenan Yıldız", team: "Juventus", position: "RW", strength: 86, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "kenan.png" },

    // Bayer Leverkusen
    { name: "Florian Wirtz", team: "Bayer Leverkusen", position: "CAM", strength: 88, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "wirtz.jpg" },

    // Benfica
    { name: "Pavlidis", team: "Benfica", position: "ST", strength: 84, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "vangel.png" },

    // Tottenham Hotspur
    { name: "Solanke", team: "Tottenham Hotspur", position: "ST", strength: 89, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "solanke.png" },

    // Napoli
    { name: "Scott McTominay", team: "Napoli", position: "CM", strength: 81, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "scott.png" },

    // Galatasaray
    { name: "Victor Osimhen", team: "Galatasaray", position: "ST", strength: 90, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "jamesosimhen.png" },

    // PSV
    { name: "Luuk de Jong", team: "PSV", position: "ST", strength: 83, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "dejong.png" },

    // Sporting
    { name: "Viktor Gyökeres", team: "Sporting", position: "ST", strength: 84, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "gyokeres.png" },

    // Newcastle United
    { name: "Alexander Isak", team: "Newcastle United", position: "ST", strength: 86, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "alexanderısak.png" },
    
    // Fenerbahçe (Yeni Eklendi)
    { name: "Edin Džeko", team: "Fenerbahçe", position: "ST", strength: 83, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "dzeko.jpg" },
    { name: "Dušan Tadić", team: "Fenerbahçe", position: "LW", strength: 84, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "tadic.jpg" },
    { name: "Sebastian Szymanski", team: "Fenerbahçe", position: "CAM", strength: 82, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "szymanski.jpg" },
    { name: "Fred", team: "Fenerbahçe", position: "CM", strength: 83, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "fred.jpg" },
    { name: "Cengiz Ünder", team: "Fenerbahçe", position: "RW", strength: 80, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "cengiz.jpg" },

    // Eintracht Frankfurt
    { name: "Filip Kostić", team: "Eintracht Frankfurt", position: "LM", strength: 82, goals: 0, assists: 0, yellowCards: 0, redCards: 0, image: "filip.png" },
];

// Oyuncuları, geçerli UCL takımlarından birine ait olup olmadıklarına göre filtrele
// Bu filtreleme, players dizisinin sadece UCL'deki takımların oyuncularını içermesini sağlar.
players = players.filter(player => validTeamNames.has(player.team));


// DOM Elementleri
const leagueTableBody = document.querySelector('#league-table tbody');
const simulateButton = document.getElementById('simulate-button');
const knockoutResultsDiv = document.getElementById('knockout-results');
const weeklyFixturesContainer = document.getElementById('weekly-fixtures-container');
const playerStatsContainer = document.getElementById('player-stats-container');
const topGoalScorersList = document.getElementById('top-goal-scorers-list');
const topAssistsList = document.getElementById('top-assists-list');
const cardLeadersList = document.getElementById('card-leaders-list');
const fixturePopup = document.getElementById('fixture-popup');
const matchStatsPopup = document.getElementById('match-stats-popup');
// Önemli Oyuncular ile ilgili DOM elementleri kaldırıldı
// const importantPlayersContainer = document.getElementById('important-players-container');
// const importantPlayersList = document.getElementById('important-players-list');

// Detaylı Kura Çekimi Modal'ı ve Elementleri
const detailedDrawLink = document.getElementById('detailed-draw-link');
const detailedDrawModal = document.getElementById('detailed-draw-modal');
const closeButton = detailedDrawModal.querySelector('.close-button');
const pot1Display = document.getElementById('pot1-display').querySelector('.pot-list');
const pot2Display = document.getElementById('pot2-display').querySelector('.pot-list');
const pot3Display = document.getElementById('pot3-display').querySelector('.pot-list');
const pot4Display = document.getElementById('pot4-display').querySelector('.pot-list');
const nextDrawButton = document.getElementById('next-draw-button');
const drawingTeamNameSpan = document.getElementById('drawing-team-name');
const drawingTeamLogoImg = document.getElementById('drawing-team-logo');
const drawnOpponentsList = document.getElementById('drawn-opponents-list');

// Özel Mesaj Kutusu Elementleri
const customMessageBox = document.getElementById('custom-message-box');
const messageText = document.getElementById('message-text');
const messageCloseButton = document.getElementById('message-close-button');

// Eleme aşaması maç detaylarını saklamak için global bir dizi
let knockoutMatchDetails = [];


let pots = [[], [], [], []]; // Torbalar için boş diziler
let leaguePhaseTeams = []; // Lig aşaması için seçilen 36 takım
let currentDrawIndex = 0; // Kura çekiminde kaç takımın çekildiğini takip eder
let drawnTeamsForLeaguePhase = []; // Lig aşaması için çekilen takımların listesi
let isDrawComplete = false; // Kura çekiminin tamamlanıp tamamlanmadığını takip eder

// --- Özel Mesaj Kutusu Fonksiyonları ---
function showMessage(message) {
    messageText.textContent = message;
    customMessageBox.style.display = 'block';
}

function hideMessage() {
    customMessageBox.style.display = 'none';
}

messageCloseButton.addEventListener('click', hideMessage);


// --- Kura Çekimi Fonksiyonları ---

// Torbaları oluştur ve karıştır
function initializePots() {
    pots = [[], [], [], []]; // Her yeni simülasyon için torbaları sıfırla
    pot1.forEach(team => pots[0].push({ ...team, originalPot: 1 }));
    pot2.forEach(team => pots[1].push({ ...team, originalPot: 2 }));
    pot3.forEach(team => pots[2].push({ ...team, originalPot: 3 }));
    pot4.forEach(team => pots[3].push({ ...team, originalPot: 4 }));

    // Her torbayı karıştır (sadece başlangıçta torbaları doldururken, kura çekim sırası için değil)
    pots.forEach(pot => shuffleArray(pot));
}

// Lig aşaması için takımları ata (36 takım)
function assignQualifiers() {
    initializePots(); // Torbaları her simülasyonda yeniden oluştur ve karıştır

    leaguePhaseTeams = [];
    drawnTeamsForLeaguePhase = [];
    currentDrawIndex = 0;
    isDrawComplete = false; // Yeni kura çekimi başladığında tamamlanma durumunu sıfırla

    // Kura çekilecek takımları sırayla belirlenmiş potlardan al
    // leaguePhaseTeams dizisi, kura çekim sırasını belirler.
    // Sıralama: pot1'in ilk takımından pot4'ün son takımına kadar sırayla olacak.
    leaguePhaseTeams = [
        ...pot1.map(team => ({ ...team, originalPot: 1 })),
        ...pot2.map(team => ({ ...team, originalPot: 2 })),
        ...pot3.map(team => ({ ...team, originalPot: 3 })),
        ...pot4.map(team => ({ ...team, originalPot: 4 }))
    ];
    // leaguePhaseTeams artık karıştırılmayacak, sırayla çekilecek.
}

// Detaylı kura çekimi modalını doldur
function populateDetailedDrawModal() {
    pot1Display.innerHTML = '';
    pot2Display.innerHTML = '';
    pot3Display.innerHTML = '';
    pot4Display.innerHTML = '';

    // Torbalardaki takımları göster (initializePots'tan gelen karıştırılmış halleriyle)
    pots[0].forEach(team => addTeamToPotDisplay(team, pot1Display));
    pots[1].forEach(team => addTeamToPotDisplay(team, pot2Display));
    pots[2].forEach(team => addTeamToPotDisplay(team, pot3Display));
    pots[3].forEach(team => addTeamToPotDisplay(team, pot4Display));

    // Daha önce çekilmiş takımları vurgula
    drawnTeamsForLeaguePhase.forEach(drawnTeam => {
        const teamInPot = document.querySelector(`#pot${drawnTeam.originalPot}-display li[data-team-name="${drawnTeam.name}"]`);
        if (teamInPot) {
            teamInPot.classList.add('drawn');
        }
    });

    drawingTeamNameSpan.textContent = '';
    drawingTeamLogoImg.src = '';
    drawnOpponentsList.innerHTML = '';

    nextDrawButton.style.display = 'block';
    nextDrawButton.textContent = 'Kura Çekimini Başlat';
    nextDrawButton.disabled = false;

    // Kura tamamlanana kadar kapatma butonunu ve modal dışına tıklamayı devre dışı bırak
    closeButton.classList.add('disabled-close-button');
    closeButton.removeEventListener('click', closeModalHandler); // Önceki listener'ı kaldır
    closeButton.addEventListener('click', preventModalClose);

    detailedDrawModal.style.display = 'block';

    // Eğer kura zaten tamamlanmışsa, buton metnini güncelle ve kapatmaya izin ver
    if (isDrawComplete) {
        nextDrawButton.textContent = 'Kura Çekimi Tamamlandı!';
        nextDrawButton.disabled = true;
        closeButton.classList.remove('disabled-close-button');
        closeButton.removeEventListener('click', preventModalClose);
        closeButton.addEventListener('click', closeModalHandler);
        displayLeagueTable(); // Kura tamamlandığında lig tablosunu doldur
    } else {
        // Eğer kura çekimi başlamadıysa, ilk takımı otomatik çek
        if (currentDrawIndex === 0) {
            drawNextTeam();
        }
    }
}

function addTeamToPotDisplay(team, potElement) {
    const li = document.createElement('li');
    li.dataset.teamName = team.name;
    li.innerHTML = `<img src="${getLogoFile(team.name)}" alt="${team.name} logosu" class="team-logo-small"> ${team.name}`;
    potElement.appendChild(li);
}

// Bir sonraki takımı çekme işlevi (detaylı kura çekimi için)
function drawNextTeam() {
    resetPotHighlights();

    if (currentDrawIndex < leaguePhaseTeams.length) {
        const currentTeam = leaguePhaseTeams[currentDrawIndex];

        // Takımın daha önce çekilip çekilmediğini kontrol et
        const existingDrawnTeam = drawnTeamsForLeaguePhase.find(t => t.name === currentTeam.name);
        if (!existingDrawnTeam) {
            drawnTeamsForLeaguePhase.push(currentTeam);
        }

        drawingTeamNameSpan.textContent = currentTeam.name;
        drawingTeamLogoImg.src = getLogoFile(currentTeam.name);
        drawingTeamLogoImg.alt = `${currentTeam.name} logosu`;

        const teamInPot = document.querySelector(`#pot${currentTeam.originalPot}-display li[data-team-name="${currentTeam.name}"]`);
        if (teamInPot) {
            teamInPot.classList.add('highlight-team');
            teamInPot.classList.add('drawn'); // Çekilen takımı kalıcı olarak işaretle
        }

        // Olası rakipleri belirle ve vurgula (her torbadan 2 tane, ülke kısıtlamalı)
        const possibleOpponents = calculatePossibleOpponents(currentTeam);
        drawnOpponentsList.innerHTML = '';
        possibleOpponents.forEach(opponent => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${getLogoFile(opponent.name)}" alt="${opponent.name} logosu" class="team-logo-small"> ${opponent.name} (${opponent.originalPot}. Torba)`;
            drawnOpponentsList.appendChild(li);

            const opponentInPot = document.querySelector(`#pot${opponent.originalPot}-display li[data-team-name="${opponent.name}"]`);
            if (opponentInPot) {
                opponentInPot.classList.add('highlight-opponent');
            }
        });

        currentDrawIndex++;
        nextDrawButton.textContent = `Sıradaki Takımı Çek (${currentDrawIndex}/${leaguePhaseTeams.length})`;

        if (currentDrawIndex === leaguePhaseTeams.length) {
            isDrawComplete = true;
            nextDrawButton.textContent = 'Kura Çekimi Tamamlandı!';
            nextDrawButton.disabled = true;
            showMessage('Lig Aşaması Kura Çekimi tamamlandı. Şimdi simülasyonu başlatabilirsiniz!');
            simulateButton.disabled = false;
            closeButton.classList.remove('disabled-close-button');
            closeButton.removeEventListener('click', preventModalClose);
            closeButton.addEventListener('click', closeModalHandler);
            displayLeagueTable(); // Kura tamamlandığında lig tablosunu doldur
        }

    } else {
        // Bu kısım normalde currentDrawIndex === leaguePhaseTeams.length olduğunda çalışır
        // ve yukarıdaki if bloğunda zaten ele alınmıştır.
    }
}

function resetPotHighlights() {
    document.querySelectorAll('.pot-list li').forEach(li => {
        li.classList.remove('highlight-team', 'highlight-opponent');
    });
    drawnOpponentsList.innerHTML = '';
}

// Olası rakipleri hesapla (her torbadan 2 tane, ülke kısıtlamalı)
function calculatePossibleOpponents(currentTeam) {
    const finalOpponents = [];
    const currentTeamCountry = getTeamCountry(currentTeam.name);
    const usedOpponentNames = new Set(); // Her takım için seçilen rakipleri takip et

    // Kendi torbasından 2 rakip seç (kendisi hariç, ülke kısıtlamalı)
    const ownPot = pots[currentTeam.originalPot - 1];
    const eligibleOwnPotOpponents = shuffleArray(
        ownPot.filter(opp => opp.name !== currentTeam.name && getTeamCountry(opp.name) !== currentTeamCountry)
    );
    for (let k = 0; k < 2 && k < eligibleOwnPotOpponents.length; k++) {
        finalOpponents.push(eligibleOwnPotOpponents[k]);
        usedOpponentNames.add(eligibleOwnPotOpponents[k].name);
    }

    // Diğer torbalardan 2'şer rakip seç (ülke kısıtlamalı)
    for (let i = 1; i <= 4; i++) { // 4 potun tamamında döngü (1-4)
        if (i === currentTeam.originalPot) continue; // Kendi torbasını atla

        const otherPot = pots[i - 1];
        const eligibleOpponentsInPot = shuffleArray(
            otherPot.filter(opp => getTeamCountry(opp.name) !== currentTeamCountry && !usedOpponentNames.has(opp.name))
        );

        let count = 0;
        for (const opponentCandidate of eligibleOpponentsInPot) {
            if (count < 2) { // Her potdan sadece 2 rakip al
                finalOpponents.push(opponentCandidate);
                usedOpponentNames.add(opponentCandidate.name);
                count++;
            } else {
                break;
            }
        }
    }
    return finalOpponents; // Bu, 8 olası rakip içermelidir (kendi torbasından 2, diğerlerinden 2'şer)
}

// Geçici olarak ülke bilgisini döndüren fonksiyon (allTeams'ten alınır)
function getTeamCountry(teamName) {
    const team = allTeams.find(t => t.name === teamName);
    return team ? team.country : "Unknown";
}


// --- Oyun Mekaniği Fonksiyonları ---

// Diziyi karıştırmak için Fisher-Yates algoritması
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lig aşamasını çalıştır
function runLeaguePhase() {
    if (!isDrawComplete) {
        showMessage("Lütfen önce 'Detaylı Gör' kısmından kura çekimini tamamlayın!");
        return;
    }

    // Yeni simülasyon öncesi tüm takım istatistiklerini sıfırla
    allTeams.forEach(team => {
        team.played = 0;
        team.wins = 0;
        team.draws = 0;
        team.losses = 0;
        team.goalsFor = 0;
        team.goalsAgainst = 0;
        team.goalDiff = 0;
        team.points = 0;
        team.fixtures = [];
    });

    // Oyuncu istatistiklerini sıfırla
    players.forEach(player => {
        player.goals = 0;
        player.assists = 0;
        player.yellowCards = 0;
        player.redCards = 0;
    });

    const fixtures = generateLeagueFixtures(drawnTeamsForLeaguePhase); // drawnTeamsForLeaguePhase kullan
    const weeklyFixtures = [];

    fixtures.forEach((weekFixtures, weekIndex) => {
        const currentWeekFixtures = [];
        weekFixtures.forEach(match => {
            const homeTeam = allTeams.find(t => t.name === match.homeTeam);
            const awayTeam = allTeams.find(t => t.name === match.awayTeam);

            if (!homeTeam || !awayTeam) {
                console.error("Takım bulunamadı:", match.homeTeam, match.awayTeam);
                return;
            }

            const { homeGoals, awayGoals, scorers, assists, yellowCards, redCards } = simulateMatch(homeTeam, awayTeam);

            // Takım istatistiklerini güncelle
            homeTeam.played++;
            awayTeam.played++;
            homeTeam.goalsFor += homeGoals;
            homeTeam.goalsAgainst += awayGoals;
            awayTeam.goalsFor += awayGoals;
            awayTeam.goalsAgainst += homeGoals;

            if (homeGoals > awayGoals) {
                homeTeam.wins++;
                awayTeam.losses++;
                homeTeam.points += 3;
            } else if (homeGoals < awayGoals) {
                awayTeam.wins++;
                homeTeam.losses++;
                awayTeam.points += 3;
            } else {
                homeTeam.draws++;
                awayTeam.draws++;
                homeTeam.points += 1;
                awayTeam.points += 1;
            }
            homeTeam.goalDiff = homeTeam.goalsFor - homeTeam.goalsAgainst;
            awayTeam.goalDiff = awayTeam.goalsFor - awayTeam.goalsAgainst;

            const matchDetails = {
                week: weekIndex + 1,
                home: homeTeam.name,
                away: awayTeam.name,
                homeGoals: homeGoals,
                awayGoals: awayGoals,
                scorers: scorers,
                assists: assists,
                yellowCards: yellowCards,
                redCards: redCards
            };
            homeTeam.fixtures.push(matchDetails);
            awayTeam.fixtures.push(matchDetails);

            currentWeekFixtures.push(matchDetails);
        });
        weeklyFixtures.push(currentWeekFixtures);
    });

    displayLeagueTable();
    displayWeeklyFixtures(weeklyFixtures);
    displayPlayerLeaderboards();
    simulateButton.textContent = 'Tekrar Simüle Et';
}


// Lig aşaması fikstürlerini oluştur
function generateLeagueFixtures(teams) {
    const fixtures = [];
    const numMatchesPerTeam = 8; // Her takım 8 maç oynar
    const numWeeks = numMatchesPerTeam; // 8 hafta
    const matchesPerWeek = teams.length * numMatchesPerTeam / numWeeks / 2; // 36 * 8 / 8 / 2 = 18 maç/hafta

    const teamMatchups = new Map(); // teamName -> [{opponentTeam}]
    teams.forEach(team => teamMatchups.set(team.name, calculatePossibleOpponents(team)));

    const allMatchPairs = [];
    const addedMatchKeys = new Set(); // "TeamA-TeamB" (sorted)

    teams.forEach(teamA => {
        teamMatchups.get(teamA.name).forEach(teamB => {
            const matchKey = [teamA.name, teamB.name].sort().join('-');
            if (!addedMatchKeys.has(matchKey)) {
                allMatchPairs.push({ team1: teamA, team2: teamB });
                addedMatchKeys.add(matchKey);
            }
        });
    });

    // Her takımın kaç ev/deplasman maçı oynadığını takip et
    const teamHomeAwayCounts = new Map(teams.map(team => [team.name, { home: 0, away: 0 }]));
    const maxHomeAwayGames = numMatchesPerTeam / 2; // Her takım 4 ev, 4 deplasman

    // Fikstürleri haftalara dağıt
    for (let week = 0; week < numWeeks; week++) {
        const currentWeekFixtures = [];
        const teamsPlayingThisWeek = new Set();
        const availableMatchesForScheduling = shuffleArray([...allMatchPairs.filter(m => m !== null)]); // Kalan maçları karıştır

        for (const match of availableMatchesForScheduling) {
            if (currentWeekFixtures.length >= matchesPerWeek) break; // Haftanın maç sayısı dolduysa
            if (match === null) continue; // Zaten programlanmış

            const teamA = match.team1;
            const teamB = match.team2;

            // Bu hafta zaten oynamışlarsa veya tüm maçlarını tamamlamışlarsa atla
            if (teamsPlayingThisWeek.has(teamA.name) || teamsPlayingThisWeek.has(teamB.name) ||
                (teamHomeAwayCounts.get(teamA.name).home + teamHomeAwayCounts.get(teamA.name).away) >= numMatchesPerTeam ||
                (teamHomeAwayCounts.get(teamB.name).home + teamHomeAwayCounts.get(teamB.name).away) >= numMatchesPerTeam) {
                continue;
            }

            let homeTeam, awayTeam;
            const teamA_home = teamHomeAwayCounts.get(teamA.name).home;
            const teamA_away = teamHomeAwayCounts.get(teamA.name).away;
            const teamB_home = teamHomeAwayCounts.get(teamB.name).home;
            const teamB_away = teamHomeAwayCounts.get(teamB.name).away;

            // Ev sahibi/deplasman dengesini sağlamaya çalış
            if (teamA_home < maxHomeAwayGames && teamB_away < maxHomeAwayGames) {
                homeTeam = teamA;
                awayTeam = teamB;
            } else if (teamB_home < maxHomeAwayGames && teamA_away < maxHomeAwayGames) {
                homeTeam = teamB;
                awayTeam = teamA;
            } else {
                // Eğer denge sağlanamıyorsa, daha az toplam maç oynamış olanı ev sahibi yapmaya çalış
                if ((teamA_home + teamA_away) <= (teamB_home + teamB_away)) {
                    homeTeam = teamA;
                    awayTeam = teamB;
                } else {
                    homeTeam = teamB;
                    awayTeam = teamA;
                }
            }

            // Atamanın geçerli olup olmadığını kontrol et (ev sahibi/deplasman limitleri)
            if ((homeTeam === teamA && teamA_home >= maxHomeAwayGames) ||
                (homeTeam === teamB && teamB_home >= maxHomeAwayGames) ||
                (awayTeam === teamA && teamA_away >= maxHomeAwayGames) ||
                (awayTeam === teamB && teamB_away >= maxHomeAwayGames)) {
                continue; // Bu atama geçerli değil, başka bir maça bak
            }
            
            currentWeekFixtures.push({ homeTeam: homeTeam.name, awayTeam: awayTeam.name });
            teamsPlayingThisWeek.add(homeTeam.name);
            teamsPlayingThisWeek.add(awayTeam.name);

            teamHomeAwayCounts.get(homeTeam.name).home++;
            teamHomeAwayCounts.get(awayTeam.name).away++;

            // Programlanan maçı master listeden çıkar (null ile işaretle)
            const matchIndex = allMatchPairs.findIndex(m => m && 
                ((m.team1.name === teamA.name && m.team2.name === teamB.name) || 
                 (m.team1.name === teamB.name && m.team2.name === teamA.name)));
            if (matchIndex !== -1) {
                allMatchPairs[matchIndex] = null;
            }
        }
        fixtures.push(currentWeekFixtures);
    }

    // Her takımın 8 maç oynadığını ve 4 ev sahibi/4 deplasman dengesini kontrol et (isteğe bağlı)
    teams.forEach(team => {
        const totalPlayed = teamHomeAwayCounts.get(team.name).home + teamHomeAwayCounts.get(team.name).away;
        if (totalPlayed !== numMatchesPerTeam) {
            console.warn(`Uyarı: ${team.name} takımı ${numMatchesPerTeam} maçtan ${totalPlayed} maç oynadı.`);
        }
        if (teamHomeAwayCounts.get(team.name).home !== maxHomeAwayGames ||
            teamHomeAwayCounts.get(team.name).away !== maxHomeAwayGames) {
            console.warn(`Uyarı: ${team.name} takımı ev/deplasman dengesizliği yaşadı. Ev: ${teamHomeAwayCounts.get(team.name).home}, Deplasman: ${teamHomeAwayCounts.get(team.name).away}`);
        }
    });

    return fixtures.filter(week => week.length > 0); // Boş haftaları filtrele
}


// Maç simülasyonu
function simulateMatch(homeTeam, awayTeam) {
    const strengthDiff = homeTeam.strength - awayTeam.strength;
    let homeGoals = Math.max(0, Math.floor(Math.random() * 3) + Math.round(strengthDiff / 20));
    let awayGoals = Math.max(0, Math.floor(Math.random() * 3) - Math.round(strengthDiff / 20));

    homeGoals = Math.max(0, homeGoals);
    awayGoals = Math.max(0, awayGoals);

    if (Math.abs(homeGoals - awayGoals) > 2 && Math.random() < 0.3) {
        if (homeGoals > awayGoals) homeGoals--;
        else awayGoals--;
    } else if (Math.abs(homeGoals - awayGoals) === 0 && Math.random() < 0.2) {
        if (Math.random() < 0.5) homeGoals++;
        else awayGoals++;
    }

    const scorers = [];
    const assists = [];
    const yellowCards = [];
    const redCards = [];

    const homeTeamPlayers = players.filter(p => p.team === homeTeam.name);
    const awayTeamPlayers = players.filter(p => p.team === awayTeam.name);

    for (let i = 0; i < homeGoals; i++) {
        const scorer = pickPlayerByStrength(homeTeamPlayers, 'goals');
        if (scorer) {
            scorer.goals++;
            scorers.push(`${scorer.name} (${homeTeam.name})`);
            const assistant = pickPlayerByStrength(homeTeamPlayers.filter(p => p !== scorer), 'assists');
            if (assistant) {
                assistant.assists++;
                assists.push(`${assistant.name} (${homeTeam.name})`);
            }
        }
    }

    for (let i = 0; i < awayGoals; i++) {
        const scorer = pickPlayerByStrength(awayTeamPlayers, 'goals');
        if (scorer) {
            scorer.goals++;
            scorers.push(`${scorer.name} (${awayTeam.name})`);
            const assistant = pickPlayerByStrength(awayTeamPlayers.filter(p => p !== scorer), 'assists');
            if (assistant) {
                assistant.assists++;
                assists.push(`${assistant.name} (${awayTeam.name})`);
            }
        }
    }

    [...homeTeamPlayers, ...awayTeamPlayers].forEach(player => {
        if (Math.random() < 0.15) {
            player.yellowCards++;
            yellowCards.push(`${player.name} (${player.team})`);
            if (player.yellowCards >= 2 && Math.random() < 0.3) {
                player.redCards++;
                redCards.push(`${player.name} (${player.team}) (2. Sarı)`);
            }
        }
        if (Math.random() < 0.02) {
            player.redCards++;
            redCards.push(`${player.name} (${player.team}) (Direkt Kırmızı)`);
        }
    });

    return { homeGoals, awayGoals, scorers, assists, yellowCards, redCards };
}

// Oyuncuları güçlerine göre seç (golcü veya asistçi)
function pickPlayerByStrength(teamPlayers, type) {
    if (teamPlayers.length === 0) return null;

    const weightedPlayers = [];
    teamPlayers.forEach(player => {
        let weight = player.strength;
        if (type === 'goals' && (player.position === 'ST' || player.position === 'LW' || player.position === 'RW')) {
            weight *= 1.5;
        } else if (type === 'assists' && (player.position === 'CAM' || player.position === 'CM' || player.position === 'LW' || player.position === 'RW')) {
            weight *= 1.3;
        }
        for (let i = 0; i < weight; i++) {
            weightedPlayers.push(player);
        }
    });
    if (weightedPlayers.length === 0) return null;
    return weightedPlayers[Math.floor(Math.random() * weightedPlayers.length)];
}


// Eleme aşamasını çalıştır
function runKnockoutPhase() {
    knockoutResultsDiv.style.display = 'block';
    knockoutResultsDiv.innerHTML = '<h2>Eleme Aşaması Sonuçları</h2>';
    knockoutMatchDetails = []; // Eleme maçı detaylarını sıfırla

    const sortedTeams = [...allTeams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        return b.goalsFor - a.goalsFor;
    });

    const directQualifiers = sortedTeams.slice(0, 8);
    const playoffTeams = sortedTeams.slice(8, 24);
    const eliminatedTeams = sortedTeams.slice(24);

    displayKnockoutStageTeams("Doğrudan Son 16'ya Yükselenler (İlk 8)", directQualifiers);

    const playoffRoundDiv = document.createElement('div');
    playoffRoundDiv.innerHTML = '<h3>Play-off Turu (Son 16\'ya Kalmak İçin)</h3>';
    knockoutResultsDiv.appendChild(playoffRoundDiv);

    const seededTeams = playoffTeams.slice(0, 8);
    const unseededTeams = playoffTeams.slice(8, 16);
    shuffleArray(seededTeams);
    shuffleArray(unseededTeams);

    let playoffWinners = [];
    for (let i = 0; i < seededTeams.length; i++) {
        const teamA = seededTeams[i];
        const teamB = unseededTeams[i];

        const match1 = simulateMatch(teamA, teamB);
        const match2 = simulateMatch(teamB, teamA);

        const totalGoalsA = match1.homeGoals + match2.awayGoals;
        const totalGoalsB = match1.awayGoals + match2.homeGoals;

        let winner = null;
        let summaryText = ''; // Penaltı durumunu belirtmek için
        let matchId = `playoff-${i}`;

        if (totalGoalsA > totalGoalsB) {
            winner = teamA;
        } else if (totalGoalsB > totalGoalsA) {
            winner = teamB;
        } else {
            winner = Math.random() > 0.5 ? teamA : teamB;
            summaryText = " (Penaltılarla)";
        }
        playoffWinners.push(winner);
        
        const matchDetails = {
            id: matchId,
            home: teamA.name,
            away: teamB.name,
            homeGoals: match1.homeGoals,
            awayGoals: match1.awayGoals,
            homeGoals2: match2.homeGoals, // İkinci maçın golleri
            awayGoals2: match2.awayGoals, // İkinci maçın golleri
            scorers: [...match1.scorers, ...match2.scorers],
            assists: [...match1.assists, ...match2.assists],
            yellowCards: [...match1.yellowCards, ...match2.yellowCards],
            redCards: [...match1.redCards, ...match2.redCards],
            winner: winner.name,
            round: "Play-off Turu"
        };
        knockoutMatchDetails.push(matchDetails);

        const matchResultEl = document.createElement('p');
        matchResultEl.innerHTML = `<span class="knockout-match-summary" data-match-id="${matchId}">
            <img src="${getLogoFile(teamA.name)}" class="team-logo-small"> ${teamA.name} ${match1.homeGoals} - ${match1.awayGoals} ${teamB.name} <img src="${getLogoFile(teamB.name)}" class="team-logo-small"> (İlk Maç)<br>
            <img src="${getLogoFile(teamB.name)}" class="team-logo-small"> ${teamB.name} ${match2.homeGoals} - ${match2.awayGoals} ${teamA.name} <img src="${getLogoFile(teamA.name)}" class="team-logo-small"> (İkinci Maç)
        </span><br><b>Kazanan: ${winner.name}${summaryText}</b>`; // Summary buraya eklendi
        playoffRoundDiv.appendChild(matchResultEl);
    }

    displayKnockoutStageTeams("Elenen Takımlar (25-36. Sıra)", eliminatedTeams);

    let currentRoundTeams = [...directQualifiers, ...playoffWinners];
    const roundNames = ["Son 16", "Çeyrek Final", "Yarı Final", "Final"];
    let roundIndex = 0;

    while (currentRoundTeams.length > 1 && roundIndex < roundNames.length) {
        const phase = roundNames[roundIndex];
        knockoutResultsDiv.innerHTML += `<h4>${phase}</h4>`;
        const nextPhaseTeams = [];
        shuffleArray(currentRoundTeams); // Her turda takımları karıştır

        for (let j = 0; j < currentRoundTeams.length; j += 2) {
            const teamA = currentRoundTeams[j];
            const teamB = currentRoundTeams[j + 1];

            if (!teamA || !teamB) continue;

            let winner = null;
            let matchSummaryText = ''; // Penaltı durumunu belirtmek için
            let matchId = `${phase.replace(/\s/g, '')}-${j/2}`;

            if (phase === "Final") {
                const finalMatch = simulateMatch(teamA, teamB);
                if (finalMatch.homeGoals > finalMatch.awayGoals) {
                    winner = teamA;
                } else if (finalMatch.awayGoals > finalMatch.homeGoals) {
                    winner = teamB;
                } else {
                    winner = Math.random() > 0.5 ? teamA : teamB;
                    matchSummaryText += " (Penaltılar)";
                }
                matchSummaryText = `<img src="${getLogoFile(teamA.name)}" class="team-logo-small"> ${teamA.name} ${finalMatch.homeGoals} - ${finalMatch.awayGoals} ${teamB.name} <img src="${getLogoFile(teamB.name)}" class="team-logo-small">`;

                const finalMatchDetails = {
                    id: matchId,
                    home: teamA.name,
                    away: teamB.name,
                    homeGoals: finalMatch.homeGoals,
                    awayGoals: finalMatch.awayGoals,
                    scorers: finalMatch.scorers,
                    assists: finalMatch.assists,
                    yellowCards: finalMatch.yellowCards,
                    redCards: finalMatch.redCards,
                    winner: winner.name,
                    round: phase
                };
                knockoutMatchDetails.push(finalMatchDetails);

            } else { // Son 16, Çeyrek Final, Yarı Final (iki ayaklı maçlar)
                const match1 = simulateMatch(teamA, teamB);
                const match2 = simulateMatch(teamB, teamA);

                const totalGoalsA = match1.homeGoals + match2.awayGoals;
                const totalGoalsB = match1.awayGoals + match2.homeGoals;

                if (totalGoalsA > totalGoalsB) {
                    winner = teamA;
                } else if (totalGoalsB > totalGoalsA) {
                    winner = teamB;
                } else {
                    winner = Math.random() > 0.5 ? teamA : teamB;
                    matchSummaryText += "<br>Toplam skor eşitliği. Penaltılarla kazanan: ";
                }
                matchSummaryText = `<img src="${getLogoFile(teamA.name)}" class="team-logo-small"> ${teamA.name} ${match1.homeGoals} - ${match1.awayGoals} ${teamB.name} <img src="${getLogoFile(teamB.name)}" class="team-logo-small"> (İlk Maç)<br>
                                <img src="${getLogoFile(teamB.name)}" class="team-logo-small"> ${teamB.name} ${match2.homeGoals} - ${match2.awayGoals} ${teamA.name} <img src="${getLogoFile(teamA.name)}" class="team-logo-small"> (İkinci Maç)`;
            
                const twoLegMatchDetails = {
                    id: matchId,
                    home: teamA.name,
                    away: teamB.name,
                    homeGoals: match1.homeGoals,
                    awayGoals: match1.awayGoals,
                    homeGoals2: match2.homeGoals,
                    awayGoals2: match2.awayGoals,
                    scorers: [...match1.scorers, ...match2.scorers],
                    assists: [...match1.assists, ...match2.assists],
                    yellowCards: [...match1.yellowCards, ...match2.yellowCards],
                    redCards: [...match1.redCards, ...match2.redCards],
                    winner: winner.name,
                    round: phase
                };
                knockoutMatchDetails.push(twoLegMatchDetails);
            }
            
            nextPhaseTeams.push(winner);

            const matchResultEl = document.createElement('p');
            matchResultEl.innerHTML = `<span class="knockout-match-summary" data-match-id="${matchId}">${matchSummaryText}</span><br><b>Kazanan: ${winner.name}</b>`;
            knockoutResultsDiv.appendChild(matchResultEl);
        }
        currentRoundTeams = nextPhaseTeams;
        roundIndex++;
    }

    const finalWinner = currentRoundTeams[0];
    if (finalWinner) {
        const championTitle = document.createElement('h2');
        championTitle.innerHTML = `🏆 Şampiyon: <img src="${getLogoFile(finalWinner.name)}" class="team-logo" style="width: 50px; height: 50px;">${finalWinner.name} 🏆`;
        championTitle.style.color = 'gold';
        knockoutResultsDiv.appendChild(championTitle);
    }

    // Eleme maçı özetlerine tıklama olayı ekle
    knockoutResultsDiv.querySelectorAll('.knockout-match-summary').forEach(summaryEl => {
        summaryEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const matchId = summaryEl.dataset.matchId;
            const match = knockoutMatchDetails.find(m => m.id === matchId);
            if (match) {
                displayKnockoutMatchStatsPopup(e.clientX, e.clientY, match);
            }
        });
    });
}

// Eleme aşaması takımlarını göster
function displayKnockoutStageTeams(title, teams) {
    let html = `<h3>${title}</h3><div class="knockout-team-list">`;
    teams.forEach(team => {
        html += `<p><img src="${getLogoFile(team.name)}" alt="${team.name}" class="team-logo-small"> ${team.name}</p>`;
    });
    html += '</div>';
    knockoutResultsDiv.innerHTML += html;
}

// --- Görüntüleme Fonksiyonları ---

// Lig tablosunu görüntüle
function displayLeagueTable() {
    leagueTableBody.innerHTML = '';

    // allTeams'i sırala, çünkü istatistikler allTeams objelerinde tutulur.
    const sortedTeams = [...allTeams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        return b.goalsFor - a.goalsFor;
    });

    sortedTeams.forEach((team, index) => {
        const row = leagueTableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-name" data-team="${team.name}"><img src="${getLogoFile(team.name)}" alt="${team.name} logosu" class="team-logo-small"> ${team.name}</td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${team.goalDiff}</td>
            <td>${team.points}</td>
        `;
    });
}

// Haftalık fikstürleri görüntüle
function displayWeeklyFixtures(weeklyFixtures) {
    weeklyFixturesContainer.innerHTML = '<h3>Haftalık Fikstürler</h3><div id="weekly-fixtures"></div>';
    const weeklyFixturesDiv = document.getElementById('weekly-fixtures');

    weeklyFixtures.forEach((weekFixtures, weekIndex) => {
        const weekGroup = document.createElement('div');
        weekGroup.classList.add('weekly-fixture-group');
        weekGroup.innerHTML = `<h4>Hafta ${weekIndex + 1}</h4>`;

        weekFixtures.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('fixture-match');
            matchDiv.innerHTML = `
                <span class="fixture-team">
                    <img src="${getLogoFile(match.home)}" alt="${match.home}" class="team-logo-small">
                    ${match.home}
                </span>
                <span class="fixture-score">${match.homeGoals} - ${match.awayGoals}</span>
                <span class="fixture-team">
                    ${match.away}
                    <img src="${getLogoFile(match.away)}" alt="${match.away}" class="team-logo-small">
                </span>
            `;
            matchDiv.dataset.homeTeam = match.home;
            matchDiv.dataset.awayTeam = match.away;
            matchDiv.dataset.homeGoals = match.homeGoals;
            matchDiv.dataset.awayGoals = match.awayGoals;
            matchDiv.dataset.scorers = JSON.stringify(match.scorers);
            matchDiv.dataset.assists = JSON.stringify(match.assists);
            matchDiv.dataset.yellowCards = JSON.stringify(match.yellowCards);
            matchDiv.dataset.redCards = JSON.stringify(match.redCards);

            matchDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                displayMatchStatsPopup(e.clientX, e.clientY, matchDiv);
            });

            weekGroup.appendChild(matchDiv);
        });
        weeklyFixturesDiv.appendChild(weekGroup);
    });
}


// Oyuncu liderlik tablolarını görüntüle
function displayPlayerLeaderboards() {
    topGoalScorersList.innerHTML = '';
    const topGoalScorers = [...players].sort((a, b) => b.goals - a.goals).slice(0, 5);
    topGoalScorers.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}. ${player.name} (${player.team})</span> <span>${player.goals} Gol</span>`;
        topGoalScorersList.appendChild(listItem);
    });

    topAssistsList.innerHTML = '';
    const topAssisters = [...players].sort((a, b) => b.assists - a.assists).slice(0, 5);
    topAssisters.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}. ${player.name} (${player.team})</span> <span>${player.assists} Asist</span>`;
        topAssistsList.appendChild(listItem);
    });

    cardLeadersList.innerHTML = '';
    const cardPronePlayers = [...players].sort((a, b) => {
        if (b.redCards !== a.redCards) return b.redCards - a.redCards;
        return b.yellowCards - a.yellowCards;
    }).slice(0, 5);

    cardPronePlayers.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}. ${player.name} (${player.team})</span> <span> Sarı: ${player.yellowCards} Kırmızı: ${player.redCards}</span>`;
        cardLeadersList.appendChild(listItem);
    });
}

// Takım fikstür pop-up'ını görüntüle
function displayFixturePopup(teamName, x, y) {
    const team = allTeams.find(t => t.name === teamName);
    if (!team) return;

    fixturePopup.innerHTML = `<h4><img src="${getLogoFile(team.name)}" alt="${team.name}" class="team-logo-small">${team.name} Fikstürleri</h4>`;
    const ul = document.createElement('ul');

    team.fixtures.forEach(fixture => {
        const li = document.createElement('li');
        let resultClass = '';
        let resultText = '';

        if (fixture.home === team.name) {
            if (fixture.homeGoals > fixture.awayGoals) {
                resultClass = 'result-win';
                resultText = 'G';
            } else if (fixture.homeGoals < fixture.awayGoals) {
                resultClass = 'result-loss';
                resultText = 'M';
            } else {
                resultClass = 'result-draw';
                resultText = 'B';
            }
            li.innerHTML = `Hafta ${fixture.week}: vs ${fixture.away} <span class="fixture-score">${fixture.homeGoals}-${fixture.awayGoals}</span> <span class="${resultClass}">(${resultText})</span>`;
        } else {
            if (fixture.awayGoals > fixture.homeGoals) {
                resultClass = 'result-win';
                resultText = 'G';
            } else if (fixture.awayGoals < fixture.homeGoals) {
                resultClass = 'result-loss';
                resultText = 'M';
            } else {
                resultClass = 'result-draw';
                resultText = 'B';
            }
            li.innerHTML = `Hafta ${fixture.week}: @ ${fixture.home} <span class="fixture-score">${fixture.homeGoals}-${fixture.awayGoals}</span> <span class="${resultClass}">(${resultText})</span>`;
        }
        ul.appendChild(li);
    });

    fixturePopup.appendChild(ul);
    fixturePopup.style.left = `${x + 10}px`;
    fixturePopup.style.top = `${y + 10}px`;
    fixturePopup.style.display = 'block';
}

// Lig aşaması maç istatistikleri pop-up'ını görüntüle
function displayMatchStatsPopup(x, y, matchElement) {
    const homeTeam = matchElement.dataset.homeTeam;
    const awayTeam = matchElement.dataset.awayTeam;
    const homeGoals = matchElement.dataset.homeGoals;
    const awayGoals = matchElement.dataset.awayGoals;
    const scorers = JSON.parse(matchElement.dataset.scorers);
    const assists = JSON.parse(matchElement.dataset.assists);
    const yellowCards = JSON.parse(matchElement.dataset.yellowCards);
    const redCards = JSON.parse(matchElement.dataset.redCards);

    matchStatsPopup.innerHTML = `<h4>Maç Detayları</h4>`;
    matchStatsPopup.innerHTML += `<p><img src="${getLogoFile(homeTeam)}" alt="${homeTeam}" class="team-logo-small"> ${homeTeam} <span class="fixture-score">${homeGoals}</span> - <span class="fixture-score">${awayGoals}</span> ${awayTeam} <img src="${getLogoFile(awayTeam)}" alt="${awayTeam}" class="team-logo-small"></p>`;

    if (scorers.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Goller:</h5><ul>${scorers.map(s => `<li>${s}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Gol yok.</p>`;
    }
    if (assists.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Asistler:</h5><ul>${assists.map(a => `<li>${a}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Asist yok.</p>`;
    }
    if (yellowCards.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Sarı Kartlar:</h5><ul>${yellowCards.map(yc => `<li>${yc}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Sarı kart yok.</p>`;
    }
    if (redCards.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Kırmızı Kartlar:</h5><ul>${redCards.map(rc => `<li>${rc}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Kırmızı kart yok.</p>`;
    }

    matchStatsPopup.style.left = `${x + 10}px`;
    matchStatsPopup.style.top = `${y + 10}px`;
    matchStatsPopup.style.display = 'block';
}

// Eleme aşaması maç istatistikleri pop-up'ını görüntüle
function displayKnockoutMatchStatsPopup(x, y, match) {
    matchStatsPopup.innerHTML = `<h4>${match.round} Detayları</h4>`;
    matchStatsPopup.innerHTML += `<p><img src="${getLogoFile(match.home)}" alt="${match.home}" class="team-logo-small"> ${match.home} <span class="fixture-score">${match.homeGoals}</span> - <span class="fixture-score">${match.awayGoals}</span> ${match.away} <img src="${getLogoFile(match.away)}" alt="${match.away}" class="team-logo-small"></p>`;
    
    if (match.homeGoals2 !== undefined && match.awayGoals2 !== undefined) { // İki ayaklı maçlar için
        matchStatsPopup.innerHTML += `<p><img src="${getLogoFile(match.away)}" alt="${match.away}" class="team-logo-small"> ${match.away} <span class="fixture-score">${match.homeGoals2}</span> - <span class="fixture-score">${match.awayGoals2}</span> ${match.home} <img src="${getLogoFile(match.home)}" alt="${match.home}" class="team-logo-small"></p>`;
        matchStatsPopup.innerHTML += `<p><b>Toplam Skor: ${match.homeGoals + match.awayGoals2} - ${match.awayGoals + match.homeGoals2}</b></p>`;
    }

    matchStatsPopup.innerHTML += `<p><b>Kazanan: ${match.winner}</b></p>`;

    if (match.scorers && match.scorers.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Goller:</h5><ul>${match.scorers.map(s => `<li>${s}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Gol yok.</p>`;
    }
    if (match.assists && match.assists.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Asistler:</h5><ul>${match.assists.map(a => `<li>${a}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Asist yok.</p>`;
    }
    if (match.yellowCards && match.yellowCards.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Sarı Kartlar:</h5><ul>${match.yellowCards.map(yc => `<li>${yc}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Sarı kart yok.</p>`;
    }
    if (match.redCards && match.redCards.length > 0) {
        matchStatsPopup.innerHTML += `<h5>Kırmızı Kartlar:</h5><ul>${match.redCards.map(rc => `<li>${rc}</li>`).join('')}</ul>`;
    } else {
        matchStatsPopup.innerHTML += `<p>Kırmızı kart yok.</p>`;
    }

    matchStatsPopup.style.left = `${x + 10}px`;
    matchStatsPopup.style.top = `${y + 10}px`;
    matchStatsPopup.style.display = 'block';
}


// Önemli oyuncuları görüntüle (Bu fonksiyon artık çağrılmayacak ve HTML'den kaldırıldı)
/*
function displayImportantPlayers() {
    importantPlayersList.innerHTML = '';
    const importantPlayers = [
        "Kylian Mbappé", "Erling Haaland", "Jude Bellingham", "Harry Kane",
        "Mohamed Salah", "Kevin De Bruyne", "Vinicius Jr.", "Robert Lewandowski",
        "Lautaro Martínez", "Bukayo Saka", "Heung-Min Son", "Mauro Icardi", "Florian Wirtz",
        "Scott McTominay", "Khvicha Kvaratskhelia", "Alexander Isak", "Luuk de Jong", "Filip Kostić",
        "Lucas Torreira", "Davinson Sánchez", "Kerem Aktürkoğlu", "Edin Džeko", "Dušan Tadić", "Sebastian Szymanski", "Fred", "Cengiz Ünder", "Kenan Yıldız", "Pavlidis", "Solanke", "Serhou Guirassy", "Victor Osimhen"
    ];

    const filteredPlayers = players.filter(player => importantPlayers.includes(player.name));

    filteredPlayers.forEach(player => {
        const playerCard = document.createElement('li');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <img src="players/${player.image}" onerror="this.onerror=null;this.src='https://placehold.co/100x100/333/FFF?text=No+Image';" alt="${player.name}" class="player-image">
            <div class="player-info">
                <span class="player-name">${player.name}</span>
                <span class="player-team">${player.team}</span>
                <span class="player-position">${player.position}</span>
            </div>
        `;
        importantPlayersList.appendChild(playerCard);
    });
}
*/

// --- Olay Dinleyicileri ---

// Simülasyonu başlat/tekrar simüle et butonu
simulateButton.addEventListener('click', () => {
    runLeaguePhase();
    runKnockoutPhase();
    // displayImportantPlayers(); // Kaldırıldı
    displayPlayerLeaderboards();
});

// Takım adına tıklayınca fikstür popup'ını aç
leagueTableBody.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.team-name');
    if (target) {
        const teamName = target.dataset.team;
        displayFixturePopup(teamName, e.clientX, e.clientY);
    }
});

// Pop-up'ları gizle (vücudun herhangi bir yerine tıklayınca)
document.addEventListener('click', (e) => {
    if (!fixturePopup.contains(e.target) && !e.target.closest('.team-name')) {
        fixturePopup.style.display = 'none';
    }
    // matchStatsPopup için hem lig hem de eleme maçları için kontrol
    if (!matchStatsPopup.contains(e.target) && !e.target.closest('.fixture-match') && !e.target.closest('.knockout-match-summary')) {
        matchStatsPopup.style.display = 'none';
    }
});

// Modalı açmak için link
detailedDrawLink.addEventListener('click', () => {
    populateDetailedDrawModal();
});

// Modalı kapatma işleyicisi
function closeModalHandler() {
    detailedDrawModal.style.display = 'none';
}

// Kura tamamlanana kadar modalı kapatmayı engelle
function preventModalClose(event) {
    event.stopPropagation();
    showMessage("Kura çekimini tamamlamadan çıkamazsınız!");
}

// Modalı kapatma butonu
closeButton.addEventListener('click', preventModalClose);

// Modal dışına tıklayınca modalı kapatma
window.addEventListener('click', (event) => {
    if (event.target === detailedDrawModal) {
        if (!isDrawComplete) {
            preventModalClose(event);
        } else {
            closeModalHandler();
        }
    }
});

// Detaylı kura çekimi modundaki "Sıradaki Takımı Çek" butonu
nextDrawButton.addEventListener('click', drawNextTeam);

// Sayfa yüklendiğinde başlangıç görüntüsü
document.addEventListener('DOMContentLoaded', () => {
    assignQualifiers();
    displayLeagueTable(); // Başlangıçta boş tabloyu göster
    // displayImportantPlayers(); // Kaldırıldı
    displayPlayerLeaderboards();
    simulateButton.disabled = true; // Kura çekimi bitene kadar simülasyonu başlat butonunu devre dışı bırak
});
