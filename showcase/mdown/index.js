import { html, render } from 'lit-html'
import mds from '../asset/*.mdown'

export default async function ( data ) {

  await import( "view-units/source/unit-md" )

  return html `
    <article class=mdown hidden=false>
      <unit-md .state=${{
        value: mds.code,
        theme: Math.random() > 0.7 ? "twilight" : Math.random() > 0.5 ? "tomorrow" : "default"
      }}></unit-md>
      <unit-md .state=${{
        value: "https://epha.io/akte/recht/nutzung.md",
        hidden:"false"
      }}></unit-md>
    </article>
  `

}