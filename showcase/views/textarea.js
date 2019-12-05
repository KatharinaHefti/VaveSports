import { html, render } from 'lit-html'
import store from '../data-store'
// Layz import units
import Unit from 'view-base/unit-textarea/'
import 'view-base/unit-md/'

export function textarea() {

  const state = store.getState().textarea || ""

  const state1 = { "value": state, label: "Label", spellcheck: true, "chars": 100, "font-size": "1.4rem", "placeholder": "Placeholder" }
  const state2 = { "value": state, label: "You can also type here", badge: false, "placeholder": "Placeholder" }
  const state3 = { "value": state.split( "" ).reverse().join( "" ), disabled: true, label: "Mirror above area", "placeholder": "Placeholder" }
  const state4 = { "value": `Erste Zeil\nEin Satz zum Teilselektieren`, readonly: true, "placeholder": "Placeholder" }

  return html `
    <article class="textarea" hidden="false">

      <h1>Element unit-textarea</h1>

      <h2>Example</h2>

      <h3>value, chars:100, font-size:1.4rem, spellcheck: true</h3>
      <unit-textarea id="1" .state=${state1}></unit-textarea>

      <h3>"label":"You can also type here"</h3>
      <unit-textarea id="2" .state=${state2}></unit-textarea>
      <unit-textarea id="3" .state=${state3}></unit-textarea>

      <h3>readonly: true</h3>
      <unit-textarea id="3" .state=${state4}></unit-textarea>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `

}