# GeoGame - World Capitals Quiz 🌍

GeoGame is an interactive educational game designed to help users learn world capitals through a fun and engaging map-based quiz. Players are presented with the name of a capital city, and their task is to identify the country it belongs to from four multiple-choice options. Points are awarded for each correct answer, and a final score determines the player's success at the end of the game.

## How to Play

- **Question Timer**: Each question has a countdown timer (e.g., 10 seconds) displayed on the screen. Players must select an answer before the time runs out.  
  - If the player selects the correct answer within the time limit, they earn 10 points, and the location is marked with a star icon on the map.
  - If the player does not answer within the allotted time, the question is considered incorrect, no points are awarded, and the game automatically proceeds to the next question.

- **Game Timer**: The game has a total timer (e.g., 120 seconds) which limits the overall playtime. This timer counts down throughout the game.  
  - If the game timer reaches zero before all questions are answered, the game ends immediately, and the player's final score is displayed.

- **End of Game**: Once all questions have been answered or the total game time runs out, the final score is displayed with a success or failure message:  
  - If the score is above average, a success message appears: "Congratulations, You Earned Points: [Score]".
  - If the score is below average, a failure message appears: "Game Over!! Score: [Score]".

This structure provides a time-based challenge, encouraging players to answer both quickly and accurately. The combination of question and game timers keeps the game fast-paced and engaging.

## Table of Contents

- [Project Description and Purpose](#project-description-and-purpose)
- [How to Play](#how-to-play)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Game Flow and Interactions](#game-flow-and-interactions)
- [Design and UI](#design-and-ui)
- [Project File Structure](#project-file-structure)
- [Setup and Run Instructions](#setup-and-run-instructions)

## Project Description and Purpose

GeoGame is designed to enhance users' geographical knowledge of world capitals through an interactive and timed map-based quiz. The game combines visual elements on a world map with a quiz format, making learning fun and engaging for players of all ages.

## Requirements

### User Requirements

- Players should see marked capitals and countries on the map.
- Players should be able to answer multiple-choice questions about capitals or countries.
- Players receive feedback on whether their answers are correct or incorrect.
- A score and a success/failure message are displayed at the end of the game.

### Technical Requirements

- **Leaflet.js**: Used for map functionalities, such as displaying markers and providing interactive map features.
- **D3.js**: Utilized to create visual animations that provide feedback for correct answers.
- Compatibility with modern web browsers.
- A geo-component, such as map interactions or geographical data visualization, is essential.

### Hardware Requirements

- A web browser (e.g., Chrome, Firefox, Safari, Edge).
- Internet connection (to load map data).

## Technologies Used

The project utilizes the following libraries and technologies:

- **HTML**: Provides the structure of the web page.
- **CSS**: Defines the visual styling and layout of the game interface.
- **JavaScript**: Manages game logic and user interactions.
- **Leaflet.js**: Provides interactive map functionality, enabling map navigation and marker placement.
- **D3.js**: Adds animations and graphical feedback when a correct answer is selected.

## Game Flow and Interactions

- **Question Display**: The game presents a question about a randomly selected capital city and four multiple-choice answers.
- **Answer Selection**: The player selects one of the options.
- **Feedback and Scoring**:  
  - **Correct Answer**: The player earns 10 points, and a star icon appears on the map to mark the correct location.
  - **Incorrect Answer or Timeout**: The player receives feedback, but no points are awarded, and the game moves on to the next question.
- **Timers**:  
  - **Question Timer**: Each question has a countdown timer (e.g., 10 seconds). If the player does not answer in time, the question is considered incorrect.
  - **Game Timer**: The game has a total time limit (e.g., 120 seconds). When the game timer reaches zero, the game ends.
- **End of Game**: When all questions are answered or the game timer runs out, the game displays the final score with a success or failure message based on the score.

## Design and UI

- **Map Area**: The main map area, powered by Leaflet.js, displays markers and allows players to interact with the quiz questions.
- **Question Box**: Positioned next to the map, the question box shows the current question, answer options, and score.
- **Timers**:  
  - **Game Timer**: Displays the remaining total game time at the top of the game area.
  - **Question Timer**: Shows the remaining time for the current question just below the question text.
- **Feedback Animations**: D3.js animations show visual feedback, such as circles or stars, for correct answers.

## Project File Structure
GeoGame/  ├── index.html # Main HTML file with the game layout and structure 
          ├── styles.css # CSS file for styling the game interface     
          ├── script.js # JavaScript file for game logic and map interactions   
          ├── images/ # Folder for images (city photos and marker icons) 
          ├── README.md # Project documentation and description └── LICENSE # License information


<div align="center">
  
###Dünya haritası üzerinde soru çıkacak
<a href="https://ibb.co/6wHJB0d"><img src="https://i.ibb.co/NC9nS24/Ekran-g-r-nt-s-2024-11-01-002728.jpg" alt="Ekran-g-r-nt-s-2024-11-01-002728" border="0"></a>


.....doğru cevap verdiğinde score +10 olucak
<a href="https://ibb.co/Qv24nyX"><img src="https://i.ibb.co/s90ZQ8t/a.jpg" alt="a" border="0"></a>
yanlış cevap verdiğinde yanlış cevap verdiniz uyarısı verip bir sonraki soruya geçecek
<a href="https://ibb.co/6rtDqvn"><img src="https://i.ibb.co/0m9YzBD/b.jpg" alt="b" border="0"></a>
belirtilen süre içerisinde cevap verilmediğinde süreniz doldu uyarısı verip bir sonraki soruya geçecek
<a href="https://ibb.co/CWm5X7N"><img src="https://i.ibb.co/XVjZdsN/c.jpg" alt="c" border="0"></a>

doğru cevap verilen tüm ülkelere yıldız simgesi koyacak
<a href="https://ibb.co/FK4wYpG"><img src="https://i.ibb.co/vH4Pd92/d.jpg" alt="d" border="0"></a>


<a href="https://ibb.co/927zJwZ"><img src="https://i.ibb.co/XpqN9yY/Ekran-g-r-nt-s-2024-11-01-002840.jpg" alt="Ekran-g-r-nt-s-2024-11-01-002840" border="0"></a>

<a href="https://ibb.co/2j1y2GM"><img src="https://i.ibb.co/9qkNXQ4/Ekran-g-r-nt-s-2024-11-01-002705.jpg" alt="Ekran-g-r-nt-s-2024-11-01-002705" border="0"></a>
<a href="https://ibb.co/WPR6cR5"><img src="https://i.ibb.co/hZTyKT9/son.jpg" alt="son" border="0"></a>
<a href="https://ibb.co/vZvNsPP"><img src="https://i.ibb.co/jgZCVMM/Ekran-g-r-nt-s-2024-10-31-232833.jpg" alt="Ekran-g-r-nt-s-2024-10-31-232833" border="0"></a>
<a href="https://ibb.co/dtmLmZB"><img src="https://i.ibb.co/5kKnKZT/Ekran-g-r-nt-s-2024-10-31-232748.jpg" alt="Ekran-g-r-nt-s-2024-10-31-232748" border="0"></a>
</div>

