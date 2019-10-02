import { html, render } from 'lit-html'
import Unit from 'view-units/unit-input/'
import 'view-units/unit-md'
import { edit } from 'view-types/icon/'

export function input( state = "" ) {

  return html `
    <article class="input" hidden="false">

      <h1>Element unit-input</h1>

      <h2>Example</h2>

      <h3>Show value, chars:100, font-size:1.4em, height: 30px</h3>
      <unit-input id="1" .state=${{
        "value": state,
        "height": "2.5em",
        "font-size": "1em",
        "type": "text"
      }}></unit-input>

      <h3>Show label, value and display inline</h3>
      <unit-input id="2" .state=${{
        "value": state,
        "label": "You can also type here",
        "type": "text"
      }}></unit-input>
      <unit-input id="3" .state=${{
        "value": state.split( "" ).reverse().join( "" ),
        "disabled": true,
        "label": "Mirror above area",
        "type": "text"
      }}></unit-input>
      <span>Baseline</span>

      <h3>Show Icons</h3>
      <unit-input id="2" .state=${{
        "value": state,
        "icon1": edit,
        "icon2": { src: edit, fill: "tomato" },
        "badge": false,
        "width": "400px",
        "label": "You can also type here truncated truncated",
        "type": "text"
      }}></unit-input>

      <h2>Helsana style example</h2>
      <p>Add class ".helsana" to unit-input tag for the styles to be applied.</p>
      <h3>Search input</h3>
      <unit-input id="4" class="helsana" .state=${{
        "value": state,
        "badge": false,
        "width": "400px",
        "label": "Search",
        "type": "text"
      }}></unit-input>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}