# Wer bin ich? – IT-Azubis Edition

Dieses Repository enthält eine kleine Web-Version des „Wer bin ich?“-Spiels,
bei dem die IT-Azubis selbst die Charaktere sind.

Die Website wird über GitHub Pages veröffentlicht. Ziel ist es, gemeinsam:
- ein kleines Spiel zu bauen,
- Git und GitHub praktisch zu nutzen,
- und dabei die Azubis spielerisch vorzustellen.

---

## Allgemeine Hinweise

- Wir arbeiten mit:
  - `index.html` für die Seite,
  - `style.css` für das Aussehen,
  - `game.js` für die Spiel-Logik und die Daten.
- Am Ende soll das Spiel über GitHub Pages spielbar sein.
- Es gibt **zwei Gruppen**, die **an zwei Teilen der Aufgabe** arbeiten:

  - **Gruppe A:** Spielmechanik & Layout  
  - **Gruppe B:** Inhalte & Spiel-Features

Jede Gruppe arbeitet auf einem eigenen Branch und erstellt einen Pull Request.

---

## Teil 1 – Gruppe A: Spielmechanik & Layout

### Ziel

Gruppe A baut die eigentliche „Wer bin ich?“-Logik und sorgt dafür,
dass das Spiel sinnvoll aussieht und bedienbar ist.

### Aufgaben von Gruppe A

1. **Branch anlegen**

   - Erstellt einen neuen Branch z.B.:
     - `feature/game-mechanics`

2. **Datenstruktur anlegen**

   - Definiert in `game.js` eine Datenstruktur für Personen, z.B. ein Array von Objekten:

     ```js
     const persons = [
       // Beispielstruktur – Inhalte werden von euch (Gruppe B) ausgefüllt:
       // {
       //   name: "Name oder Spitzname",
       //   hints: [
       //     "Hinweis 1 ...",
       //     "Hinweis 2 ...",
       //     "Hinweis 3 ..."
       //   ]
       // }
     ];
     ```

   - Gruppe A legt nur die Struktur fest (z.B. Felder `name`, `hints`, optional `role`, `year`),
     die Inhalte füllt später Gruppe B.

3. **Grundlogik des Spiels schreiben**

   Implementiert in `game.js` folgende Funktionen:

   - `startGame()`:
     - wählt zufällig eine Person aus `persons` aus (z.B. mit `Math.random()`),
     - setzt den Hinweis-Index auf 0,
     - zeigt den ersten Hinweis im Element `#hint-text`,
     - leert den Text im Element `#answer-text`.

   - Event Listener für den Button `#next-hint-btn`:
     - zeigt den nächsten Hinweis der aktuellen Person,
     - wenn keine weiteren Hinweise mehr vorhanden sind:
       - zeigt eine Nachricht wie „Keine weiteren Hinweise, vielleicht die Auflösung anzeigen?“ im `#hint-text`.

   - Event Listener für den Button `#reveal-btn`:
     - zeigt die Auflösung (den Namen der Person) im Element `#answer-text`,
       z.B. „Wer bin ich? -> [Name]“.

   - Ruft `startGame()` beim Laden der Seite einmal auf, damit das Spiel startet.

4. **Layout verbessern (HTML & CSS)**

   - Passt `index.html` so an, dass:
     - Überschrift und Beschreibung zum Spiel klar sind,
     - die Buttons sinnvoll platziert sind,
     - der „Spielbereich“ (Hinweise + Auflösung) gut sichtbar ist.

   - Verbessert das Layout in `style.css`:
     - erhöht Lesbarkeit (Abstände, Font-Size),
     - ggf. Rahmen oder Hintergrund für den Spielbereich,
     - optional: einfache Farbgestaltung.

5. **Commits & Pull Request**

   - Legt sinnvolle Commits an, z.B.:

     - `feat: add basic wer-bin-ich game logic`
     - `style: improve layout for game area`

   - Erstellt einen Pull Request von `feature/game-mechanics` nach `main`.
   - Beschreibt im PR kurz, was ihr umgesetzt habt.
   - Verknüpft den PR mit diesem Teil der Aufgabe (z.B. über ein Issue).

---

## Teil 2 – Gruppe B: Inhalte & Spiel-Features

### Ziel

Gruppe B sorgt dafür, dass das Spiel mit echten Inhalten der IT-Azubis gefüllt wird
und ergänzt kleine Zusatz-Features, die das Spiel interessanter machen.

### Aufgaben von Gruppe B

1. **Branch anlegen**

   - Erstellt einen neuen Branch z.B.:
     - `feature/game-content`

2. **Personen und Hinweise sammeln**

   - Sammelt für alle IT-Azubis (und ggf. Ausbilder:innen oder Rollen) folgende Daten:

     - `name` oder Spitzname (z.B. „Max“, „Fachinformatiker-Azubi 2024“),
     - mindestens **2–3 Hinweise** pro Person, z.B.:
       - Berufsbezogenes (Ausbildungsjahr, Fachbereich),
       - Interessen (technisch oder privat, aber unkritisch),
       - Fun-Facts (humorvoll, aber respektvoll).

   - Achtet darauf:
     - keine sensiblen persönlichen Daten,
     - keine unangemessenen oder peinlichen Hinweise.

3. **Datenstruktur in `game.js` befüllen**

   - Tragt alle gesammelten Personen in das Array `persons` ein, z.B.:

     ```js
     const persons = [
       {
         name: "Azubi 1",
         hints: [
           "Ich bin im 2. Ausbildungsjahr.",
           "Ich mag Frontend.",
           "Ich trinke morgens immer Mate."
         ]
       },
       {
         name: "Azubi 2",
         hints: [
           "Ich bin frisch im 1. Lehrjahr.",
           "Ich finde Git spannend.",
           "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit."
         ]
       }
       // ... weitere Personen
     ];
     ```

   - Ziel: mindestens so viele Einträge, wie Azubis anwesend sind, plus optional Ausbilder:innen.

4. **Zusatz-Feature einbauen (optional, aber empfohlen)**

   Wählt mindestens **ein** Extra-Feature und baut es ein, z.B.:

   - **Punktesystem:**
     - führt eine Variable `score` ein,
     - Idee:
       - je weniger Hinweise man braucht, bevor man auf „Auflösung“ drückt, desto mehr Punkte,
       - zeigt den Punktestand im DOM, z.B. in einem Element `#score-text`.

   - **Kategorie-Anzeige:**
     - fügt pro Person Felder wie `role` (z.B. „Azubi“, „Ausbilder“) oder `year` (z.B. 2024) hinzu,
     - zeigt bei der Auflösung zusätzlich „Rolle: Azubi / Jahrgang: 2024“.

   - **„Neue Runde“-Button:**
     - zusätzlicher Button, der ein neues Rätsel startet, ohne die Seite neu zu laden,
     - ruft z.B. `startGame()` erneut auf und setzt alles zurück.

   Ihr könnt frei entscheiden, welches Feature ihr umsetzt, solange es das Spiel sinnvoll erweitert
und in der Zeit machbar bleibt.

5. **Commits & Pull Request**

   - Legt sinnvolle Commits an, z.B.:

     - `feat: add azubi persons and hints`
     - `feat: add score system for wer-bin-ich`

   - Erstellt einen Pull Request von `feature/game-content` nach `main`.
   - Beschreibt im PR:
     - welche Rollen/Personen ihr hinzugefügt habt,
     - welche Zusatz-Features ihr eingebaut habt.
   - Verknüpft den PR mit diesem Teil der Aufgabe (z.B. über ein Issue).

---

## Gemeinsamer Abschluss

Wenn beide Gruppen ihre Pull Requests erstellt haben:

1. **Code Review**

   - Gruppe A schaut sich den PR von Gruppe B an:
     - kontrolliert, ob die Datenstruktur korrekt ist,
     - gibt Feedback zu den Hinweisen (verständlich, fair, anonym genug?).

   - Gruppe B schaut sich den PR von Gruppe A an:
     - testet die Spielmechanik (Buttons, Hinweise, Auflösung),
     - gibt Feedback zum Layout und zur Bedienbarkeit.

2. **Merge & GitHub Pages**

   - Nach den Reviews werden beide PRs gemerged.
   - GitHub Pages baut automatisch neu.
   - Die fertige Wer-bin-ich-Seite ist dann unter der GitHub-Pages-URL spielbar.

3. **Gemeinsam spielen**

   - Öffnet die live Seite.
   - Klickt euch durch die Hinweise und versucht zu erraten, wer gemeint ist.
   - Diskutiert kurz:
     - Was hat gut funktioniert?
     - Was war an Git/GitHub neu oder hilfreich?

---
