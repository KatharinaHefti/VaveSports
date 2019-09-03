import { html, render } from 'lit-html'
import unitMD from 'view-units/unit-md'
import mds from '../asset/*.mdown'

export function md( state ) {

  const onAction = ( e ) => {
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
      
      <h3>From assets</h3>
      <unit-md .state=${{ src: mds.default, theme: "default" }}></unit-md>

      <h3>From external resource</h3>
      <unit-md src="https://epha.io/akte/recht/nutzung.md" hidden="false"></unit-md>

      <h3>From assets</h3>
      <p>Code styling with theme twilight and loaded from assets.</p>
      <unit-md .state=${{ src: mds.twilight, theme: "twilight" }}></unit-md>


    </article>
  `

}