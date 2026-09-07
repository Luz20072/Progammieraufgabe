# Wer bin ich? – IT-Azubis Edition

Dieses Repository enthält eine kleine Web-Version des „Wer bin ich?“-Spiels,
bei dem die IT-Azubis selbst die Charaktere sind.

Die Website wird über GitHub Pages veröffentlicht. Ziel ist es, gemeinsam:
- ein kleines Spiel zu bauen,
- Git und GitHub praktisch zu nutzen,
- Merge-Konflikte bewusst zu erzeugen und zu lösen,
- und dabei die Azubis spielerisch vorzustellen.

---

## Technische Basis

Wir arbeiten mit:
- `index.html` für die Seite,
- `style.css` für das Aussehen,
- `game.js` für die Spiel-Logik und die Daten.

Die Seite wird über GitHub Pages ausgeliefert (Branch `main`, Folder `/`).

Es gibt **zwei Gruppen**, die an **zwei Teilen** der Aufgabe arbeiten:

- **Gruppe A:** Spielmechanik & Layout  
- **Gruppe B:** Inhalte & Spiel-Features  

Jede Gruppe arbeitet auf einem eigenen Branch und erstellt einen Pull Request.  
Im Verlauf sollen sie **mindestens einen Merge-Konflikt bewusst erzeugen und gemeinsam lösen**.

---

## Teil 1 – Gruppe A: Spielmechanik & Layout

### Ziel

Gruppe A baut die eigentliche „Wer bin ich?“-Logik und sorgt dafür,
dass das Spiel sinnvoll aussieht und bedienbar ist.

### Aufgaben von Gruppe A

1. **Branch anlegen**

   - Erstellt einen neuen Branch, z.B.:
     - `feature/game-mechanics`

2. **Datenstruktur definieren**

   - Legt in `game.js` die Struktur für die Personen fest, z.B.:

     ```js
     const persons = [
       // Beispielstruktur – Inhalte werden von Gruppe B ausgefüllt:
       // {
       //   name: "Name oder Spitzname",
       //   hints: [
       //     "Hinweis 1 ...",
       //     "Hinweis 2 ...",
       //     "Hinweis 3 ..."
       //   ],
       //   // optionale Felder für Zusatzfeatures, z.B.:
       //   // role: "Azubi",
       //   // year: 2024
       // }
     ];
     ```

   - Achtet darauf, dass `name` und `hints` sinnvoll definiert sind
     und später leicht von Gruppe B befüllt werden können.

3. **Grundlogik des Spiels bauen**

   Ergänzt in `game.js` (oder passt an) folgende Logik:

   - `startGame()`:
     - wählt zufällig eine Person aus `persons` aus (z.B. mit `Math.random()`),
     - setzt den Hinweis-Index auf 0,
     - zeigt den ersten Hinweis im Element `#hint-text`,
     - setzt `#answer-text` leer.

   - Event Listener für `#next-hint-btn`:
     - zeigt den nächsten Hinweis der aktuellen Person,
     - wenn keine weiteren Hinweise vorhanden sind:
       - zeigt eine Nachricht wie „Keine weiteren Hinweise, vielleicht die Auflösung anzeigen?“ im `#hint-text`.

   - Event Listener für `#reveal-btn`:
     - zeigt die Auflösung (den Namen der Person) im Element `#answer-text`,
       z.B. „Wer bin ich? -> [Name]“.

   - Stellt sicher, dass beim Laden der Seite einmal `startGame()` aufgerufen wird.

4. **Layout verbessern (HTML & CSS)**

   - Passt `index.html` so an, dass:
     - Überschrift und kurze Beschreibung zum Spiel erkennbar sind,
     - der „Spielbereich“ (Hinweise, Buttons, Auflösung, Score) gut strukturiert ist.

   - Verbessert das Layout in `style.css`:
     - Lesbarkeit (Abstände, Schriftgrößen),
     - ggf. Rahmen oder Hintergrund für den Spielbereich,
     - einfache Farbgestaltung für Buttons und Texte.

5. **Merge-Konflikt vorbereiten (gemeinsam mit Gruppe B)**

   Damit wir Merge-Konflikte üben können, soll Gruppe A:

   - Einen Abschnitt in `README.md` oder eine bestimmte Textstelle in `index.html`
     **bewusst verändern**, von der sie wissen, dass Gruppe B dort *auch* Änderungen machen wird.  
     Beispiel:
     - Gruppe A ergänzt in `README.md` einen Satz unter „Gemeinsamer Abschluss“.
     - Gruppe B passt denselben Satz anders an.

   - Diese Änderung normal committen (nicht absprechen, was genau drinsteht,
     nur absprechen, in **welchem Abschnitt** beide Gruppen etwas ändern).

   Ziel: Beim späteren Merge der zwei Branches entsteht ein echter Merge-Konflikt,
   den wir lösen können.

6. **Commits & Pull Request**

   - Legt sinnvolle Commits an, z.B.:

     - `feat: implement wer-bin-ich game mechanics`
     - `style: improve layout of game area`
     - `docs: update README with notes from group A`

   - Erstellt einen Pull Request von `feature/game-mechanics` nach `main`.
   - Beschreibt im PR kurz, was ihr umgesetzt habt.
   - Verknüpft den PR mit einem passenden Issue (Teil 1).

---

## Teil 2 – Gruppe B: Inhalte & Spiel-Features

### Ziel

Gruppe B füllt das Spiel mit echten Inhalten der IT-Azubis
und ergänzt mindestens ein Zusatz-Feature, das das Spiel interessanter macht.
Sie beteiligt sich ebenfalls aktiv an der Erzeugung eines Merge-Konflikts.

### Aufgaben von Gruppe B

1. **Branch anlegen**

   - Erstellt einen neuen Branch, z.B.:
     - `feature/game-content`

2. **Personen und Hinweise sammeln**

   - Sammelt für alle IT-Azubis (und ggf. Ausbilder:innen oder Rollen):

     - `name` oder Spitzname (z.B. „Max“, „Fachinformatiker-Azubi 2024“),
     - mindestens 2–3 Hinweise pro Person, z.B.:
       - Ausbildungsjahr / Fachrichtung,
       - technische Interessen (z.B. „mag Frontend“),
       - harmlose Fun-Facts (z.B. „kommt jeden Tag mit dem Rad“).

   - Wichtige Regeln:
     - keine sensiblen persönlichen Daten,
     - keine unangemessenen oder peinlichen Hinweise,
     - alles respektvoll formulieren.

3. **Datenstruktur in `game.js` befüllen**

   - Tragt alle gesammelten Personen in das `persons`-Array ein, z.B.:

     ```js
     const persons = [
       {
         name: "Azubi 1",
         hints: [
           "Ich bin im 2. Ausbildungsjahr.",
           "Ich mag Frontend-Entwicklung.",
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

   - Ziel: mindestens so viele Einträge wie Azubis teilnehmen,
     optional ergänzt um Ausbilder:innen oder Rollen.

4. **Zusatz-Feature einbauen (mindestens eins)**

   Wählt mindestens **ein** Extra-Feature und baut es ein, z.B.:

   - **Punktesystem:**
     - führt eine Variable `score` in `game.js` ein,
     - Idee:
       - bei Start einer neuen Runde beginnt score z.B. bei einer festen Punktzahl,
       - jede Nutzung des „Nächster Hinweis“-Buttons verringert score,
       - zeigt den Punktestand im Element `#score-text`.

   - **Kategorie-Anzeige:**
     - fügt pro Person optionale Felder wie `role` (z.B. „Azubi“, „Ausbilder“) oder `year` (z.B. 2024) hinzu,
     - zeigt bei der Auflösung zusätzlich „Rolle: Azubi / Jahrgang: 2024.“

   - **„Neue Runde“-Button (optional, falls Zeit):**
     - ergänzt einen Button in `index.html`, z.B. mit der ID `new-round-btn`,
     - dieser ruft eine Funktion auf, die ein neues Rätsel startet (erneuter Aufruf von `startGame()`).

5. **Merge-Konflikt bewusst erzeugen (gemeinsam mit Gruppe A)**

   Um einen Merge-Konflikt zu üben, soll Gruppe B:

   - In **derselben Datei und im selben Abschnitt**, den Gruppe A anfasst (z.B. `README.md` im Abschnitt „Gemeinsamer Abschluss“ oder ein bestimmter Textblock in `index.html`),
     ebenfalls Änderungen vornehmen – aber mit **einem anderen Text**.

     Beispiel:
     - Gruppe A schreibt unter „Gemeinsamer Abschluss“ einen Satz,
       wie „Wir besprechen anschließend, was wir gelernt haben.“
     - Gruppe B schreibt im selben Abschnitt einen anderen Satz,
       z.B. „Zum Schluss halten wir fest, welche Herausforderungen es gab.“

   - Diese Änderung committen, ohne den Text mit Gruppe A abzugleichen.

   Dadurch wird beim Merge der Branches **bewusst ein Merge-Konflikt erzeugt**, den ihr später gemeinsam löst.

6. **Commits & Pull Request**

   - Legt sinnvolle Commits an, z.B.:

     - `feat: add azubi persons and hints`
     - `feat: add score feature to wer-bin-ich game`
     - `docs: update README with notes from group B`

   - Erstellt einen Pull Request von `feature/game-content` nach `main`.
   - Beschreibt im PR:
     - welche Personen/Hinweise ihr hinzugefügt habt,
     - welche Zusatz-Features ihr eingebaut habt.
   - Verknüpft den PR mit einem passenden Issue (Teil 2).

---

## Gemeinsamer Abschluss: Review, Merge-Konflikte, GitHub Pages

Wenn beide Gruppen ihre Pull Requests erstellt haben:

1. **Code Review**

   - Gruppe A reviewt den PR von Gruppe B:
     - prüft, ob die Datenstruktur korrekt ist,
     - gibt Feedback zu den Hinweisen (verständlich, respektvoll).

   - Gruppe B reviewt den PR von Gruppe A:
     - testet die Spielmechanik (Buttons, Hinweise, Auflösung),
     - gibt Feedback zum Layout und zur Bedienbarkeit.

2. **Merge-Konflikt bewusst herbeiführen**

   - Merged zunächst **einen** der beiden PRs (z.B. den von Gruppe A).
   - Versucht danach, den zweiten PR zu mergen (z.B. den von Gruppe B).
   - An der Stelle, an der beide Gruppen dieselbe Zeile in derselben Datei verändert haben,
     sollte ein **Merge-Konflikt** entstehen (GitHub zeigt das im PR an).

3. **Merge-Konflikt lösen**

   - Öffnet die betroffene Datei (z.B. `README.md` oder `index.html`) entweder:
     - lokal im Editor, oder
     - über den GitHub-Webeditor.
   - Sucht nach den Konflikt-Markern:

     ```text
     <<<<<<< HEAD
     ... Änderung aus dem bereits gemergten Branch ...
     =======
     ... Änderung aus dem zweiten Branch ...
     >>>>>>> feature/game-content
     ```

   - Entscheidet gemeinsam, **wie der finale Text aussehen soll**:
     - entweder eine der Versionen übernehmen,
     - oder beide sinnvoll zusammenführen.
   - Entfernt die Konflikt-Markierungen (`<<<<<<<`, `=======`, `>>>>>>>`),
     speichert die Datei und commitet die Konfliktlösung.

4. **Merge abschließen & GitHub Pages prüfen**

   - Nachdem der Konflikt gelöst und committed wurde, kann der PR vollständig gemerged werden.
   - GitHub Pages baut automatisch neu.
   - Die fertige Wer-bin-ich-Seite ist dann unter der GitHub-Pages-URL spielbar.

5. **Gemeinsam spielen & reflektieren**

   - Öffnet die live Seite.
   - Klickt euch durch die Hinweise und versucht zu erraten, wer gemeint ist.
   - Sprecht kurz darüber:
     - wie die Arbeit mit Branches, PRs und Merge-Konflikten lief,
     - was ihr über Git & GitHub gelernt habt.

---
