// Leaflet haritasını başlatma
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const questionMarkerIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png', 
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const starIcon = L.icon({
  iconUrl: 'https://img.icons8.com/emoji/48/000000/star-emoji.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

// Sorular listesi
const questions = [
    { city: "Paris", country: "France", options: ["France", "Germany", "Italy", "Spain"], coordinates: [48.8566, 2.3522], image: "paris.jpg" },
    { city: "Tokyo", country: "Japan", options: ["China", "Japan", "South Korea", "Thailand"], coordinates: [35.6895, 139.6917], image: "tokyo.jpg" },
    { city: "New York", country: "USA", options: ["Canada", "Brazil", "USA", "Mexico"], coordinates: [40.7128, -74.0060], image: "newyork.jpg" },
    { city: "Cairo", country: "Egypt", options: ["Egypt", "Nigeria", "Kenya", "South Africa"], coordinates: [30.0444, 31.2357], image: "cairo.jpg" },
    { city: "Sydney", country: "Australia", options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], coordinates: [-33.8688, 151.2093], image: "sydney.jpg" },
    { city: "Rio de Janeiro", country: "Brazil", options: ["Argentina", "Brazil", "Peru", "Chile"], coordinates: [-22.9068, -43.1729], image: "rio.jpg" },
    { city: "Moscow", country: "Russia", options: ["Ukraine", "Belarus", "Russia", "Poland"], coordinates: [55.7558, 37.6176], image: "moscow.jpg" },
    { city: "Cape Town", country: "South Africa", options: ["South Africa", "Nigeria", "Kenya", "Egypt"], coordinates: [-33.9249, 18.4241], image: "cape_town.jpg" },
    { city: "Beijing", country: "China", options: ["Japan", "South Korea", "China", "Vietnam"], coordinates: [39.9042, 116.4074], image: "beijing.jpg" },
    { city: "Istanbul", country: "Turkey", options: ["Turkey", "Greece", "Cyprus", "Bulgaria"], coordinates: [41.0082, 28.9784], image: "istanbul.jpg" },
    { city: "Berlin", country: "Germany", options: ["Austria", "Germany", "Switzerland", "Poland"], coordinates: [52.52, 13.405], image: "berlin.jpg" },
    { city: "Mexico City", country: "Mexico", options: ["Colombia", "Argentina", "Mexico", "Brazil"], coordinates: [19.4326, -99.1332], image: "mexico_city.jpg" },
    { city: "London", country: "United Kingdom", options: ["Ireland", "United Kingdom", "France", "Belgium"], coordinates: [51.5074, -0.1278], image: "london.jpg" },
    { city: "Rome", country: "Italy", options: ["Italy", "Spain", "Greece", "Portugal"], coordinates: [41.9028, 12.4964], image: "rome.jpg" },
    { city: "Delhi", country: "India", options: ["Pakistan", "Nepal", "India", "Bangladesh"], coordinates: [28.6139, 77.209], image: "delhi.jpg" },
    { city: "Buenos Aires", country: "Argentina", options: ["Argentina", "Uruguay", "Chile", "Paraguay"], coordinates: [-34.6037, -58.3816], image: "buenos_aires.jpg" },
    { city: "Ottawa", country: "Canada", options: ["USA", "Canada", "France", "Australia"], coordinates: [45.4215, -75.6972], image: "ottawa.jpg" },
    { city: "Madrid", country: "Spain", options: ["Portugal", "Italy", "Spain", "Greece"], coordinates: [40.4168, -3.7038], image: "madrid.jpg" },
    { city: "Athens", country: "Greece", options: ["Italy", "Cyprus", "Turkey", "Greece"], coordinates: [37.9838, 23.7275], image: "athens.jpg" },
    { city: "Lisbon", country: "Portugal", options: ["Portugal", "Spain", "France", "Morocco"], coordinates: [38.7169, -9.1399], image: "lisbon.jpg" },
    { city: "Seoul", country: "South Korea", options: ["North Korea", "Japan", "China", "South Korea"], coordinates: [37.5665, 126.978], image: "seoul.jpg" },
    { city: "Jakarta", country: "Indonesia", options: ["Malaysia", "Philippines", "Indonesia", "Thailand"], coordinates: [-6.2088, 106.8456], image: "jakarta.jpg" },
    { city: "Bangkok", country: "Thailand", options: ["Vietnam", "Laos", "Thailand", "Cambodia"], coordinates: [13.7563, 100.5018], image: "bangkok.jpg" },
    { city: "Nairobi", country: "Kenya", options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], coordinates: [-1.2864, 36.8172], image: "nairobi.jpg" },
    { city: "Hanoi", country: "Vietnam", options: ["Cambodia", "Thailand", "Vietnam", "Laos"], coordinates: [21.0285, 105.8542], image: "hanoi.jpg" },
    { city: "Kuala Lumpur", country: "Malaysia", options: ["Malaysia", "Singapore", "Indonesia", "Thailand"], coordinates: [3.139, 101.6869], image: "kuala_lumpur.jpg" },
    { city: "Vienna", country: "Austria", options: ["Germany", "Austria", "Switzerland", "Hungary"], coordinates: [48.2082, 16.3738], image: "vienna.jpg" },
    { city: "Stockholm", country: "Sweden", options: ["Norway", "Finland", "Denmark", "Sweden"], coordinates: [59.3293, 18.0686], image: "stockholm.jpg" },
    { city: "Helsinki", country: "Finland", options: ["Estonia", "Finland", "Sweden", "Russia"], coordinates: [60.1699, 24.9384], image: "helsinki.jpg" },
    { city: "Warsaw", country: "Poland", options: ["Poland", "Germany", "Czech Republic", "Ukraine"], coordinates: [52.2297, 21.0122], image: "warsaw.jpg" },
    { city: "Oslo", country: "Norway", options: ["Norway", "Sweden", "Finland", "Denmark"], coordinates: [59.9139, 10.7522], image: "oslo.jpg" },
    { city: "Prague", country: "Czech Republic", options: ["Austria", "Germany", "Czech Republic", "Poland"], coordinates: [50.0755, 14.4378], image: "prague.jpg" },
    { city: "Brussels", country: "Belgium", options: ["Netherlands", "Luxembourg", "France", "Belgium"], coordinates: [50.8503, 4.3517], image: "brussels.jpg" },
    { city: "Budapest", country: "Hungary", options: ["Austria", "Hungary", "Romania", "Slovakia"], coordinates: [47.4979, 19.0402], image: "budapest.jpg" },
    { city: "Copenhagen", country: "Denmark", options: ["Sweden", "Norway", "Denmark", "Finland"], coordinates: [55.6761, 12.5683], image: "copenhagen.jpg" }
];

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let score = 0;
let questionTimeLeft = 10; // Her soru için süre (saniye cinsinden)
let gameTimeLeft = 120; // Oyun için toplam süre (saniye cinsinden)
let questionTimerInterval;
let gameTimerInterval;
let currentMarker;
const averageScore = (questions.length * 10) / 2; // Kazanmak için gereken ortalama skor

// Timer göstergelerini güncellemek için fonksiyon
function updateTimers() {
    document.getElementById('question-timer').innerText = `Time Left for Question: ${questionTimeLeft}s`;
    document.getElementById('game-timer').innerText = `Total Game Time Left: ${gameTimeLeft}s`;
}

// Soru zamanlayıcısını başlatmak için fonksiyon
function startQuestionTimer() {
    clearInterval(questionTimerInterval); // Önceki zamanlayıcıyı sıfırla
    questionTimeLeft = 10; // Her soru için süreyi 10 saniye olarak ayarla
    updateTimers();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateTimers();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            alert("Time is over for this question!");
            nextQuestion(); // Süre dolduğunda otomatik olarak bir sonraki soruya geç
        }
    }, 1000);
}

// Oyun zamanlayıcısını başlatmak için fonksiyon
function startGameTimer() {
    clearInterval(gameTimerInterval); // Önceki oyun zamanlayıcısını sıfırla
    gameTimeLeft = 120; // Oyunun toplam süresini ayarla
    updateTimers();
    gameTimerInterval = setInterval(() => {
        gameTimeLeft--;
        updateTimers();
        if (gameTimeLeft <= 0) {
            clearInterval(gameTimerInterval);
            clearInterval(questionTimerInterval);
            alert("Game over! Time is over for the entire game.");
            endGame();
        }
    }, 1000);
}

// Soruyu Gösterme
function showQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = `Which country is ${question.city} located in?`;
  
    document.getElementById('city-image').src = question.image;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false;
        button.onclick = () => checkAnswer(question.options[index]);
    });

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    currentMarker = L.marker(question.coordinates, { icon: questionMarkerIcon })
        .addTo(map)
        .bindPopup(question.city)
        .openPopup();

    map.setView(question.coordinates, 4);

    startQuestionTimer(); // Her yeni soruda soru zamanlayıcısını başlat
}

// Cevabı Kontrol Etme
function checkAnswer(selectedOption) {
    const question = shuffledQuestions[currentQuestionIndex];
    clearInterval(questionTimerInterval); // Cevap verildiğinde soru zamanlayıcısını durdur

    if (selectedOption === question.country) {
        alert("Correct!");
        score += 10;
        document.getElementById('score-value').textContent = score;
        L.marker(question.coordinates, { icon: starIcon }).addTo(map);
    } else {
        alert("Wrong answer.");
    }

    nextQuestion();
}

// Sonraki Soruya Geçiş
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// Oyunu Sonlandırma
function endGame() {
    clearInterval(questionTimerInterval);
    clearInterval(gameTimerInterval);
    const message = score >= averageScore ? `Congratulations, you won!` : `Game over!`;
    alert(`${message} Your final score is: ${score}`);
}

// Oyunu Başlatma
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    startGameTimer(); // Oyun zamanlayıcısını başlat
    showQuestion(); // İlk soruyu göster
}

// Oyunu Başlat
startGame();
