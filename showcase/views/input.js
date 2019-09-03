import { html, render } from 'lit-html'
import Unit from 'view-units/unit-input/'
import 'view-units/unit-md'

export function input( state = "" ) {

  const state1 = { "value": state, "height": "40px", "font-size": "1.4rem" }
  const state2 = { "value": state, label: "You can also type here" }
  const state3 = { "value": state.split( "" ).reverse().join( "" ), disabled: true, label: "Mirror above area" }

  return html `
    <article class="input" hidden="false">

      <h1>Element unit-input</h1>

      <h2>Example</h2>
      <h3>value, chars:100, font-size:1.4rem, height: 30px</h3>
      <unit-input id="1" .state=${state1}></unit-input>
      <h3>"label":"You can also type here"</h3>
      <unit-input id="2" .state=${state2}></unit-input>
      <unit-input id="3" .state=${state3}></unit-input>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}