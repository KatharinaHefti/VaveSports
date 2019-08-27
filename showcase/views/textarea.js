import { html, render } from 'lit-html'
import Unit from 'view-units/unit-textarea/'
import 'view-units/unit-md'

export function textarea( state ) {

  state = state || `Hallo meine Name ist textarea`

  return html `
    <article class="textarea" hidden="false">

      <h1>Element unit-textarea</h1>

      <h2>Example</h2>
      <unit-textarea .state=${{ value: state }}></unit-textarea>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}