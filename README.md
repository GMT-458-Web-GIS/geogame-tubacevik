![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# GMT458 INTERNET BASED GEOGRAPHICAL INFORMATION SYSTEMS

* 2200674068 Tuba ÇEVİK

### Github-Pages of the Game

https://gmt-458-web-gis.github.io/geogame-tubacevik/

# GeoGame - World Capitals Quiz 🌍

GeoGame is an interactive educational game designed to enhance users' geographical knowledge of world capitals through a map-based quiz format. The game combines learning with entertainment by presenting players with questions about capital cities. Players are tasked with identifying the corresponding countries from four multiple-choice options. Points are awarded for correct answers, and a final score determines the player's success at the end of the game.

## Table of Contents

- [Project Description and Purpose](#project-description-and-purpose)
- [How to Play](#how-to-play)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Game Flow and Interactions](#game-flow-and-interactions)
- [Design and UI](#design-and-ui)
- [Project File Structure](#project-file-structure)
- [Setup and Run Instructions](#setup-and-run-instructions)
- [AI Contributions](#aı-contributions)
- [DOM Interaction](#dom-interaction)

## Project Description and Purpose

GeoGame is designed to enhance users' geographical knowledge of world capitals through an interactive and timed map-based quiz. The game combines visual elements on a world map with a quiz format, making learning fun and engaging for players of all ages.

## How to Play


- **Question Display**:
- The game starts with a randomly selected question about a capital city.
- Players are asked, "Which country is [capital] located in?" and presented with four answer options.
  
- **Question Timer**: Each question has a countdown timer (e.g., 10 seconds) displayed on the screen. Players must select an answer before the time runs out.  
  - If the player selects the correct answer within the time limit, they earn 10 points, and the location is marked with a star icon on the map.
  - If the player does not answer within the allotted time, the question is considered incorrect, no points are awarded, and the game automatically proceeds to the next question.

- **Game Timer**: The game has a total timer (e.g., 120 seconds) which limits the overall playtime. This timer counts down throughout the game.  
  - If the game timer reaches zero before all questions are answered, the game ends immediately, and the player's final score is displayed.
- **Scoring**:
  - Correct Answer: Awards 10 points and marks the correct capital on the map with a star icon.
  - Incorrect Answer or Timeout: No points are awarded, and the game automatically moves to the next question.

- **End of Game**:
  - The game concludes when all questions are answered or the total game time expires.
  - Final Score Evaluation:
     - Success: If the player's score is above the average, they see: "Congratulations, You Earned Points: [Score]".
     - Failure: If the player's score is below the average, they see: "Game Over!! Score: [Score]".

## Requirements
### Functional Requirements
- Display questions and multiple-choice options dynamically.
- Mark correct answers on the map with a star.
- Provide real-time feedback and scoring.
- Include visible question and game timers.
  
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

- A web browser (e.g., Chrome).
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


## AI Interaction

- **Timer Implementation**:ChatGPT assisted in creating both the question timer and the game timer, ensuring smooth countdown functionality and integration into the interface (https://chatgpt.com/c/6750ab9c-3cf0-8000-87e0-ac397470ca59).
    
- **Correct Answer Marking**:The feature to mark correct answers on the map with a star icon was implemented with guidance from ChatGPT (https://chatgpt.com/c/6750b49d-fe1c-8000-86ab-f81ab774c616).
      
## DOM Interaction
DOM manipulation is a key part of this project. Examples include:
 
- Dynamically updating the question and options.
- Modifying the map to reflect correct answers with markers.
- Displaying timers and score updates in real-time.

## Project File Structure
GeoGame/  
- ├── index.html # Main HTML file with the game layout and structure
- ├── styles.css # CSS file for styling the game interface     
- ├── script.js # JavaScript file for game logic and map interactions   
- ├── images/ # Folder for images (city photos and marker icons) 
- ├── README.md # Project documentation and description 


<div align="center">
  
### 1. Displaying Questions on the World Map

- A question about a capital city is displayed on the map, along with four multiple-choice options. Players have a set amount of time to select the correct answer.
  
![Question on world map](https://i.ibb.co/NC9nS24/Ekran-g-r-nt-s-2024-11-01-002728.jpg)




### 2. Score Increase on Correct Answer

- When a player selects the correct answer, they earn 10 points, and a star icon is added to mark the correct capital city on the map. This star serves as a visual indicator of the cities the player has correctly identified.
  
![Score increase on correct answer](https://i.ibb.co/7GzW1r2/a.jpg)



### 3. Warning and Progression on Wrong Answer

- If the player chooses the wrong answer, they will receive a "Wrong answer" notification and the game will automatically move on to the next question.

![Warning on wrong answer](https://i.ibb.co/1R6JbX4/bb.jpg)



### 4. Notification and Progression on Time Out

- If the player doesn’t answer within the allotted time, they receive a “Time’s up” notification, and the game moves to the next question without awarding any points.
  
![Notification on time out](https://i.ibb.co/XVjZdsN/c.jpg)



### 5. Marking Correctly Answered Capitals with Stars

- Each correctly answered capital city is marked with a star icon on the map, allowing the player to track their progress visually.

![Marking correct answers with stars](https://i.ibb.co/vH4Pd92/d.jpg)



### 6. End of Game Result Display
 
- The game ends when time runs out or all questions are answered. "Game Over!" A message appears saying Score: .... All cities answered correctly remain marked with stars on the map, providing a summary of the player's performance.
  
![End of game result](https://i.ibb.co/NsZwVhS/gg.jpg)

![End of game result](https://i.ibb.co/9qkNXQ4/Ekran-g-r-nt-s-2024-11-01-002705.jpg) 
</div>

