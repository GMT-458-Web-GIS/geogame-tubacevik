[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)

# GeoGame - World Capitals Quiz 🌍

This game is an educational and entertaining geographical game in which players try to determine which country the capitals are on the map. Players answer questions about various capitals or countries by selecting one of the answer buttons, earning points for correct answers and receiving a final score based on their performance. A star icon appears on the map for countries with correct answers. Each question can only be answered once. If the total score is below the average; It says "Game Over!! Score:....", if it is above average; It says "Congratulations, You Earned Points:"


+----------------------------------------+
|               GeoGame                  |
|----------------------------------------|
|               Map Area                 |
|           (Powered by Leaflet)         |
|----------------------------------------|
| Question: What country is Paris in?    |
| [France]  [Germany]  [Italy]  [Spain]  |
|                                        |
|     Score: 30                          |
|     Next Question Button               |
+----------------------------------------+


## Table of Contents

1. [Project Description and Purpose](#project-description-and-purpose)
2. [Requirements](#requirements)
3. [Technologies Used](#technologies-used)
4. [Game Flow and Interactions](#game-flow-and-interactions)
5. [Project File Structure](#project-file-structure)
6. [Frontend Design](#frontend-design)
7. [Setup and Run Instructions](#setup-and-run-instructions)

---

### Project Description and Purpose

GeoGame is designed to enhance users' knowledge of world capitals through interactive map-based gameplay. The game combines visual map elements with a fun quiz format to create an engaging learning experience.

### Requirements

#### User Requirements

- The user should see marked capitals and countries on the map.
- The user is asked a question about a capital or country and given four options.
- Upon selecting the correct answer, the user earns points, and the correct location is marked with a star on the map.
- For incorrect answers, a notification appears, but no points are awarded.
- At the end of the game, the user’s total score and success status are displayed.

#### Technical Requirements

- **Leaflet.js**: Used for map functionalities, such as displaying markers and interactive map features.
- **D3.js**: Used to create visual feedback with animations when the user selects the correct answer.
- Dynamic changes to markers on the map should be handled based on user interaction.
- The project should be compatible with modern web browsers.

#### Hardware Requirements

- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- Internet connection (to load map data)

### Technologies Used

This project utilizes the following JavaScript libraries and technologies:

- **HTML** - Provides the structure of the content.
- **CSS** - Offers visual styling and layout.
- **JavaScript** - Powers the game flow and user interactions.
- **Leaflet.js** - Enables map interactions and marker placement on the map.
- **D3.js** - Provides graphical animations for feedback on correct answers.

### Game Flow and Interactions

1. **Question Display**: A question about a capital or country is presented to the user, along with four answer options.
2. **Answer Selection**: The user selects one of the answer options.
3. **Feedback and Scoring**:
   - **Correct Answer**: The user earns points and the location is marked with a star.
   - **Incorrect Answer**: The user receives feedback but does not earn points.
4. **End of Game**: Once all questions have been answered, the final score is displayed with a success or failure message.

### Project File Structure

```plaintext
GeoGame/
├── index.html           # Main HTML file
├── styles.css           # CSS for styling
├── script.js            # JavaScript for game logic (includes Leaflet and D3.js functionality)
├── images/              # Images (city photos and marker icons)
├── README.md            # Project documentation and description
└── LICENSE              # License information

