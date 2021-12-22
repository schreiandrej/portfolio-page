---
title: 'Warum ist das Map Objekt nützlich?'
excerpt: 'Das Map Objekt ist eine einfache Schlüssel/Wert Zuordnung. Jeder Wert (Sowohl Objekte, als auch  primitive Datentypen) kann als Schlüssel/Wert verwendet werden.'
date: '2021-01-10T18:00:00.322Z'
topics:
  description: javascript
  icon: '/assets/icons/jsicon.png'
ogImage:
  url: '#'
---

[“Ein Set-Objekt speichert eindeutige Werte jedes beliebigen Typs, egal ob es sich dabei um primitive Werte oder Objektreferenzen handelt.”](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set 'MDN Web Docs')

Bei dieser Definition sollte vor allem die Eigenschaft der Eindeutigkeit der Werte ins Auge fallen. Dies ist ein wesentlicher Unterschied zum Array und zeichnet ein Set aus.
Im Grunde genommen dient das Set als einen Funktionserweiterung für das Array.

Aber zunächst erstmal zu den Grundmethoden eines Sets.

## Grundmethoden

```js
// Set erzeugen
const mySet = new Set([4, 5, 6, 8]);

// Der Rückgabewert lautet: Set {4, 5, 6, 8, 9}
mySet.add(9);

// Das Element wird gelöscht und
// man erhält true zurück
mySet.delete(9);

// Hier erhält man ein true oder ein false als Antwort
mySet.has(7);

// gibt die die Länge des Sets aus (size statt length)
mySet.size;

// der Rügabewert lautet 4, 5, 6, 8
for (let item of mySet) console.log(item);
```

## Anwendung

Kommen wir zu den Code Beispielen die füe dich nützlich sein könnten. Das Set kann natürlich für sich genommen als eine Entität mit einditigen Werten genutzt werden. Es kann aber auch, wie schon zuvor erwähnt, als eine Ergänzung zum Array verwendet werden.

Das naheligendenst Beispiel ist, das Entfernen von doppelten Werten!

```js
const arrayOne = [4, 6, 6, 6, 5, 4, 3, 2];
const arrayTwo = [6, 7, 7, 8, 9, 2, 1];

const mySet = new Set([...arrayOne, ...arrayTwo]);

console.log([...mySet]); // [4, 6, 5, 3, 2, 7, 8, 9]
```
