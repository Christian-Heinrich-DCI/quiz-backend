# Quiz App

## Backend

### Routes

- GET: `/questions` - liefert ein Array mit allen Fragen (im Moment: 3 - 5 Antworten pro Frage) zurück
  - Format einer Frage:
  ```js
  {
    question: String,
    answers: [
      {
        answer: String,
        points: Number
      },
        (...)
    ]
  }
  ```
- GET: `/highscores` - liefert ein Array mit allen Highscores zurück
  - Format einer Highscore:
  ```js
  { player: String, points: Number }
  ```
- POST: `/highscores` - speichert eine Highscore in die Datenbank.
  - Erwartet Format, wie z.B.:
  ```js
  { player: "NAME", points: 10 }
  ```

## Offene / Geklärte Fragen

- Fragen werden nicht in einer bestimmten Reihenfolge angezeigt, sondern für jeden Gesamt-Quiz neu zufällig gemischt.
  - Gedankennotiz: Shuffle Array Funktion aus dem Internet raussuchen
- Es gibt nicht immer nur 3 Antworten, sondern (im Moment) bis zu 5.
- Design

## Frontend

### Texte

### Texte

#### Intro Screen

- Willkommen:

Teste dein Wissen um Webentwicklung! Als Spiel! Gar kein Druck! Bunte Knöpfe! Los gehts!

- Wie geht das Quiz:

Eine Frage, mindestens drei Antworten. Achtung, auch mehrere richtige Antworten sind möglich! Wähle deine Antwort(en) aus und klicke den “Nächste Frage”-Button. Nach 10 Fragen ist Schluss und du kannst dich in die Highscore eintragen. Viel Spaß!

#### Quiz-Ende

Du hast es geschafft und `<ERREICHT>` von `<GESAMT>` Punkten eingesammelt - das sind `<PROZENT>`%. (je nach erreichten Prozent:) Hurra! / Okay! / Ohjeh!

#### Highscore-Screen

Braucht keinen Text

#### Impressum

Webentwicklungs-Quiz

Entstanden im Mai 2022 im Rahmen eines SCRUM-Übungsprojektes. Sprintdauer: 1,5 Tage.

Frontend: Thomas (Link: https://github.com/Thomas-DCI/quiz-frontend)
Backend: Christian (Link: https://github.com/Christian-Heinrich-DCI/quiz-backend)

Die Dokumentation des Front-/Backends befindet sich in der README.md des jeweiligen Repositories.

## Christians 5 Fragen zum Thema Webentwicklung

- Was ist ein State (im Kontext der Webentwicklung)?

  - ein Bundesland
  - ein von React verwalteter Zustand (x)
  - ein Datentyp

- Was ist useEffect?

  - eine Animation-Funktion in React
  - ein Hook in React (x)
  - eine React-Funktion, die auf bestimmte Ereignisse reagiert (x)

- Was ist Middleware?

  - Funktionen die zwischen Anfrage und Antwort eines Requests ausgeführt werden (x)
  - optionale Zusatz-Bausteine für das Express-Backend (x)
  - das Mittelding zwischen Neuware und Second Hand

- Was bedeutet CORS?

  - Connected-Origin Resource Sourcing
  - Cross-Original Reference Sharing
  - Cross-Origin Resource Sharing (x)

- Warum lernen wir JavaScript?
  - weil es die einzige Programmiersprache ist, die der Browser versteht (x)
  - um euch sinnlos zu quälen
  - weil man damit Front- und Backend programmieren kann (x)
