import { html, render } from 'lit-html'
import store from '../data-store'
// Layz import units
import Unit from 'view-base/unit-textarea/'
import 'view-base/unit-md/'

export function textarea() {

  const state = store.getState().textarea || ""

  const state1 = { "value": "value", label: "Label", spellcheck: true, "chars": 100, "font-size": "1.4rem", "placeholder": "Placeholder" }
  const state2 = { "value": state, label: "You can also type here", badge: false, "placeholder": "Placeholder", "wrap": "hard" }
  const state3 = { "value": state.split( "" ).reverse().join( "" ), disabled: true, label: "Mirror above area", "placeholder": "Placeholder" }
  const state4 = { "value": `Erste Zeil\nEin Satz zum Teilselektieren`, readonly: true, "placeholder": "Placeholder" }
  const state5 = { "value": state, label: "You can also type here", badge: false, "placeholder": "Placeholder" }
  const state6 = { "value": state.split( "" ).reverse().join( "" ), disabled: true, label: "Disabled", "placeholder": "It's disabled" }

  return html `
    <article class="textarea" hidden="false">

      <h1>Element unit-textarea</h1>

      <h2>Example</h2>

      <h3>value, chars: 100, font-size: 1.4rem, spellcheck: true, flex: 1</h3>
      <section style="display:flex">
        <unit-textarea style="flex:1" id="1" .state=${state1}></unit-textarea>
      </section>

      <h3>label: "You can also type here"</h3>
      <section style="display:flex">
        <unit-textarea id="2" .state=${state2}></unit-textarea>
        <unit-textarea style="padding-left: 20px" id="3" .state=${state3}></unit-textarea>
      </section>

      <h3>Unit-textarea class .dark</h3>
      <section style="display: flex; background-image: linear-gradient(#2B5779, #1C3659); padding-left: 20px; box-sizing: border-box;">
        <unit-textarea class="dark" id="5" .state=${state5}></unit-textarea>
        <unit-textarea style="padding-left: 20px" class="dark" id="6" .state=${state6}></unit-textarea>
      </section>

      <h3>readonly: true</h3>
      <unit-textarea id="4" .state=${state4}></unit-textarea>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `

}