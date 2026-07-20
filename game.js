// Wer bin ich? – IT-Azubis Edition
// Dieses Skript wird von beiden Gruppen bearbeitet.

// DOM-Elemente
const hintText = document.getElementById("hint-text");
const answerText = document.getElementById("answer-text");
const nextHintBtn = document.getElementById("next-hint-btn");
const revealBtn = document.getElementById("reveal-btn");
const scoreText = document.getElementById("score-text");
let persons = []
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


async function loadPersons() {
    const response = await fetch("data/persons.json");
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

async function startGame() {
  persons = await loadPersons();
  if (persons.length === 0) {
    hintText.textContent = "Es wurden noch keine Personen eingetragen. Gruppe B muss Inhalte hinzufügen.";
    answerText.textContent = "";
    scoreText.textContent = "";
    return;
  }

  // zufällige Person auswählen
  currentPersonIndex = getRandomIndex(persons);
  currentHintIndex = 0;

  const person = persons[currentPersonIndex];
  hintText.textContent = person.hints[currentHintIndex];
  answerText.textContent = "";

  // Punktestand zurücksetzen oder initialisieren (kann angepasst werden)
  scoreText.textContent = "";
}


// Nächster Hinweis
nextHintBtn.addEventListener("click", () => {
  if (persons.length === 0) {
    return;
  }

  const person = persons[currentPersonIndex];

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
  if (persons.length === 0) {
    return;
  }

  const person = persons[currentPersonIndex];
  answerText.textContent = "Wer bin ich? -> " + person.name;

  // Hier kann Gruppe B Zusatzinfos anzeigen, z.B. Rolle/Jahrgang:
  // if (person.role) { answerText.textContent += " (" + person.role + ")"; }

  // Und hier könnte das Punktesystem ausgewertet und angezeigt werden:
  // scoreText.textContent = "Dein Score: " + score;
});

// Beim Laden der Seite Spiel starten

startGame();
