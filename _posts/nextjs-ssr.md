---
title: 'NextJS static & server-side Generation'
excerpt: 'Next JS ist aktuell das React-Framework der Stunde! Mit dem Anspruch das "Framework for Production" zu sein, bietet es mehr als genug Features out of the box, sodass man sich hauptsächlich auf die fachlichen Aspekte seiner Anwedung konzentrieren kann.'
date: '2021-04-04T09:35:05.322Z'
topics:
  description: javascript
  icon: '/assets/icons/jsicon.png'
ogImage:
  url: '/assets/dynamic-routing/cover.jpg'
---

Next.js bietet sowohl den statischen, als auch den dynamischen Websiteaufbau. Doch was genau bedeutet statisch oder dynamisch in diesem Fall? Vielleicht wird es deutlich, wenn man sich die Funktionen anschaut, die Next.js uns für die Handhabung dieser beiden Fälle zur Verfügung stellt.

## Staic Generation

Schauen wir uns zunänchst die "Static Generation" an. Diese Funktion wird nur während der "build time", also beim Seitenaufbau auf dem Server aufgerufen. Auf dem Client ist dieser Code noch nicht mal zusehen. So werden vor bzw. während dem Seitenaufbau alle notwendigen Daten für die Website abgerufen und dem User angezeigt. Auch wenn die Seite visuell dynamisch gestaltet ist, d.h. klickbare Elemente und ein dynamische Layout hat, so wurden die Daten einmalig vor dem Seitenaufbau geladen und sind somit statisch.

```js
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

## Server-Side Generation

Die server-side-props Funktion hingegen kommuniziert mit der Server von der Clientseite aus. Die Funktion wird nach dem "build" Prozess, also nach dem die vollständige Seite aufgebaut wurde, aufgerufen und während dem kompletten Lifecycle bereitstehen, um die Daten bei bei jeder jeder weiteren Anfrage zu aktualisiern.
Ein einprägsamer Anwendungsfall ist z.B. das Anzeigen von Börsenkursen. Da ist es wichtig die aktullen Kurse praktisch in Echtzeit anzuzeige und nicht erst bei dem nächsten Seitenneuaufruf.

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```
