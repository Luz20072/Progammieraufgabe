// Wer bin ich? – IT-Azubis Edition
// Dieses Skript wird von beiden Gruppen bearbeitet.

// DOM-Elemente
const hintText = document.getElementById("hint-text");
const answerText = document.getElementById("answer-text");
const nextHintBtn = document.getElementById("next-hint-btn");
const revealBtn = document.getElementById("reveal-btn");
const scoreText = document.getElementById("score-text");
const revealPhoto = document.getElementById("reveal-photo");
const nextQuestionButton = document.getElementById("next-question-btn");

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
//   },
 
// ];

const persons = [
  {
    name: "Kevin",
    hints: [
      "Ich bin Dortmund Fan",
      "Ich bin 27 Jahre alt (unc)",
      "Ich spiele gerne CS2"
    ]
  },
    {
    name: "Almin",
    hints: [
      "Ich liebe Berserk",
      "Ich bin 25 Jahre alt",
      "Ich spiele gerne Valo"
    ]
  },
    {
    name: "Luka",
    hints: [
      "Ich mag ganz dolle Anime ",
      "Ich bin 17 Jahre alt",
      "Ich spiele gerne Valo"
    ]
  },
    {
    name: "Max",
    hints: [
      "Komme nicht aus Berlin",
      "Ich bin 26 Jahre alt",
      "Ich spiele gerne Stelaris"
    ]
  },
    {
    name: "Alex",
    hints: [
      "Ich bin stolzer Raucher",
      "Ich bin 23 Jahre alt",
      "Ich spiele gerne League of Legends"
    ]
  },
    {
    name: "Aaron",
    hints: [
      "Ich bin Wilhelm Tell Fan",
      "Ich bin 25 Jahre alt",
      "Ich spiele gerne Minecraft und Rainbow Six Siege"
    ]
  }
]; // wird von Gruppe B mit echten Personen/Hinweisen gefüllt

// Zustandsvariablen
let currentPersonIndex = 0;
let currentHintIndex = 0;

// Optionales Punktesystem (kann von Gruppe B erweitert werden)
let score = 0;

// Startet eine neue Runde
function startGame() {
  if (persons.length === 0) {
    hintText.textContent = "Es wurden noch keine Personen eingetragen. Gruppe B muss Inhalte hinzufügen.";
    answerText.textContent = "";
    scoreText.textContent = "";
    return;
  }

  // zufällige Person auswählen
  currentPersonIndex = Math.floor(Math.random() * persons.length);
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
  revealPhoto.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BdG1PUddzv8zNQNdF4toTR1NIu5HqNAjZtnmXahjQA&s=10")
  const person = persons[currentPersonIndex];
  answerText.textContent = "Wer bin ich? -> " + person.name;

  // Hier kann Gruppe B Zusatzinfos anzeigen, z.B. Rolle/Jahrgang:
  // if (person.role) { answerText.textContent += " (" + person.role + ")"; }

  // Und hier könnte das Punktesystem ausgewertet und angezeigt werden:
  // scoreText.textContent = "Dein Score: " + score;
});

nextQuestionButton.addEventListener("click", ()=> {
revealPhoto.setAttribute("src", "");
});

// Beim Laden der Seite Spiel starten
startGame();
