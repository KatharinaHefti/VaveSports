import { html, render } from 'lit-html'
import Unit from 'view-units/unit-textarea/'
import 'view-units/unit-md'

export function textarea( state ) {

  state = state || `Show if value is empty`

  return html `
    <article class="textarea" hidden="false">

      <h1>Element unit-textarea</h1>

      <h2>Example</h2>
      <h3>value, chars:100, font-size:1.4rem, spellcheck: true</h3>
      <unit-textarea .state=${{ "value": state, spellcheck: true, "chars": 100, "font-size":"1.4rem"  }}></unit-textarea>
      <h3>placeholder: "Place", "label":1.4rem</h3>
      <unit-textarea .state=${{ label: "Place me", value:"X"} }></unit-textarea>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}