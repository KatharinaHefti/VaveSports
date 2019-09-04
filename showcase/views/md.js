import { html, render } from 'lit-html'
import unitMD from 'view-units/unit-md'
import mds from '../asset/*.mdown'

export function md( state ) {

  const onAction = ( e ) => {
    e.stopPropagation()

    if ( e.detail.type == "hash" ) {
      location.hash = e.detail.href
    } else {
      console.log( "Detail", e.detail )
    }
  }

  return html `
    <article @action=${onAction} class="mdown" hidden="false">

      <h1>Element unit-md</h1>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitMD.signature, theme:"tomorrow" }}></unit-md>

      <h2>Example</h2>

      <h3>Show Markdown in Preview Mode</h3>
      <unit-md .state=${{ src: mds.default, theme: "default" }}></unit-md>
      <h3>Show Markdown in Edit Mode</h3>
      <unit-md .state=${{ edit: true, src: mds.default, theme: "default" }}></unit-md>

      <h3>Markdown from external resource</h3>
      <unit-md id=2 src="https://epha.io/akte/recht/nutzung.md" hidden="false"></unit-md>

      <h3>Code styling with theme twilight and loaded from assets.</h3>
      <unit-md id=3 .state=${{ src: mds.twilight, theme: "twilight" }}></unit-md>


    </article>
  `

}