import { html, render } from 'lit-html'
import Unit from 'view-units/unit-input/'
import 'view-units/unit-md'
import { edit } from 'view-types/icon/'

export function input( state = "" ) {

  return html `
    <article class="input" hidden="false">

      <h1>Element unit-input</h1>

      <h2>Example</h2>

      <h3>Show value, chars:100, font-size:1.4rem, height: 30px</h3>
      <unit-input id="1" .state=${{
        "value": state,
        "height": "40px",
        "font-size": "1.4rem"
      }}></unit-input>

      <h3>Show label, value and display inline</h3>
      <unit-input id="2" .state=${{
        "value": state,
        "label": "You can also type here"
      }}></unit-input>
      <unit-input id="3" .state=${{
        "value": state.split( "" ).reverse().join( "" ),
        "disabled": true,
        "label": "Mirror above area"
      }}></unit-input>
      <span>Baseline</span>

      <h3>Show Icons</h3>
      <unit-input id="2" .state=${{
        "value": state,
        "icon1": edit,
        "icon2": { src: edit, fill: "tomato" },
        "badge": false,
        "width": "400px",
        "label": "You can also type here truncated truncated"
      }}></unit-input>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}