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

... hier morgen mehr ...

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
