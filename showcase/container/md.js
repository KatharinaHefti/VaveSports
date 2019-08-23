import { html, render } from 'lit-html'
import "view-units/unit-md"
import mds from '../asset/*.mdown'

export function md( state ) {

  const theme = Math.random() > 0.7 ? "twilight" : Math.random() > 0.5 ? "tomorrow" : "default"

  const manual = [
    "# Kapitel Manual",
    "Es ist möglich den String manuell zu übergehen.",
    "```javascript",
    "  console.log('hallo')",
    "```"
  ]

  return html `
    <article class=mdown hidden=false>

      <h1>unit-md with theme ${theme}</h1>
      <h3>Show some example mds - Width is limited for readability</h3>

      <hr>
      <unit-md .state=${{ raw: manual.join("\n") }}></unit-md>

      <hr>
      <unit-md .state=${{ src: mds.code, theme: theme }}></unit-md>

      <hr>
      <unit-md src="https://epha.io/akte/recht/nutzung.md" hidden="false"></unit-md>

    </article>
  `

}