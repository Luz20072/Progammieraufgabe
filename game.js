// Wer bin ich? – IT-Azubis Edition
// Dieses Skript wird von beiden Gruppen bearbeitet.

import { initTheme } from "./lightDarkToggle.js";
initTheme("#btn-theme");
// DOM-Elemente
const hintText = document.getElementById("hint-text");
const answerText = document.getElementById("answer-text");
const nextHintBtn = document.getElementById("next-hint-btn");
const revealBtn = document.getElementById("reveal-btn");
const scoreText = document.getElementById("score-text");
const selectData = document.getElementById("dataset");
const nextQuestionButton = document.getElementById("next-question-btn");
const solutionDiv = document.getElementById("solution");
const solutionImg = document.getElementById("solutionImage");
let persons = [];
let ficChars = [];
let datasets = {};
let dataset;

// Datenstruktur für Personen
// Gruppe A definiert die Struktur (Felder), Gruppe B füllt die Inhalte.
// Beispielstruktur (INHALTE KOMMEN VON GRUPPE B):

// const persons = [
//   {
//     name: "Beispiel-Azubi",
//     hints: [
//       "Hinweis 1 ...",
//       "Hinweis 2 ...",
//       "Hinweis 3 ..."
//     ],
//     // optionale Felder für Zusatzfeatures:
//     // role: "Azubi",
//     // year: 2024
//   }
// ];


async function loadJson(str) {
  const response = await fetch(str);
  const personJson = await response.json();
  return personJson
}

// Zustandsvariablen
let currentPersonIndex = 0;
let currentHintIndex = 0;

// Optionales Punktesystem (kann von Gruppe B erweitert werden)
let score = 0;

// Startet eine neue Runde
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const currentDataset = () => datasets[dataset];

function newQuestion() {
  currentPersonIndex = getRandomIndex(dataset);
  currentHintIndex = 0;
  const person = dataset[currentPersonIndex];
  hintText.textContent = person.hints[currentHintIndex];
  answerText.textContent = "";
  solutionDiv.style.display="none"
  solutionImg.src = person.image || "icon_placeholder.svg";
}
async function startGame() {
  persons = await loadJson("data/persons.json");
  ficChars = await loadJson("data/fictional_characters.json");
  datasets = { persons, ficChars };
  const savedDatSet = localStorage.getItem("selectedDataset") || persons;
  dataset = datasets[savedDatSet];
  // zufällige Person auswählen
  newQuestion();

  // Punktestand zurücksetzen oder initialisieren (kann angepasst werden)
  scoreText.textContent = "";
}

// #region EventListeners
// Nächster Hinweis
nextHintBtn.addEventListener("click", () => {
  if (dataset.length === 0) {
    return;
  }

  const person = dataset[currentPersonIndex];

  if (currentHintIndex < person.hints.length - 1) {
    currentHintIndex++;
    hintText.textContent = person.hints[currentHintIndex];
  } else {
    hintText.textContent = "Keine weiteren Hinweise. Vielleicht die Auflösung anzeigen?";
  }

  // Hier könnte Gruppe B ein Punktesystem einbauen:
  // z.B. score reduzieren, je mehr Hinweise genutzt werden.
});

// Auflösung anzeigen
revealBtn.addEventListener("click", () => {
  if (dataset.length === 0) {
    return;
  }
  const person = dataset[currentPersonIndex];
  solutionDiv.style.display = "flex"
  answerText.textContent = person.name;

  // Hier kann Gruppe B Zusatzinfos anzeigen, z.B. Rolle/Jahrgang:
  // if (person.role) { answerText.textContent += " (" + person.role + ")"; }

  // Und hier könnte das Punktesystem ausgewertet und angezeigt werden:
  // scoreText.textContent = "Dein Score: " + score;
});
nextQuestionButton.addEventListener("click", () => newQuestion())

selectData.addEventListener("change", (event) => {
  const val = event.target.value;
  dataset = datasets[val];
  localStorage.setItem("selectedDataset", val);
  newQuestion();
})
// #endregion
// Beim Laden der Seite Spiel starten

startGame();
