import { html, render } from 'lit-html'
import store from '../data-store'
// Layz import units
import Unit from 'view-base/unit-input/'
import 'view-base/unit-md/'
// Assets
import { edit } from 'view-base/type-icon'

export function input() {
  const state = store.getState().input || ""

  return html `
    <article class="input" hidden="false">

      <h1>Element unit-input</h1>

      <h2>Example</h2>

      <h3>Flex: 1</h3>
      <section style="display:flex">
        <unit-input style="flex:1" id="1" .state=${{
          "value": state,
          "height": "2.5em",
          "font-size": "1em",
          "label": "Type here",
          "type": "text",
          "placeholder": "Placeholder"
        }}></unit-input>
      </section>

      <h3>Show label, value and display inline</h3>
      <unit-input id="2" .state=${{
        "value": "value",
        "label": "Name",
        "type": "text",
        "placeholder": "Placeholder"
      }}></unit-input>
      <unit-input id="22" .state=${{
        "value": "value",
        "label": "Familienname",
        "type": "text",
        "placeholder": "Placeholder"
      }}></unit-input>
      <unit-input id="3" .state=${{
        "disabled": true,
        "label": "Disabled",
        "type": "text",
        "placeholder": "Placeholder"
      }}></unit-input>
      <span>Baseline</span>

      <h3>Unit-input with class dark</h3>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding-left: 20px; box-sizing: border-box; color: white">
        <unit-input class="dark" id="dark" .state=${{
          "value": state,
          "label": "Name",
          "type": "text",
          "placeholder": "Placeholder"
        }}></unit-input>
        <unit-input id="dark-disabled" class="dark" .state=${{
          "value": state.split( "" ).reverse().join( "" ),
          "disabled": true,
          "label": "Disabled",
          "type": "text",
          "placeholder": "Placeholder"
        }}></unit-input>
        <span>Baseline</span>
      </section>

      <!-- <h3>Show Icons</h3>
      <unit-input id="4" .state=${{
        "value": state,
        "icon1": edit,
        "icon2": { src: edit, fill: "tomato" },
        "badge": false,
        "width": "400px",
        "label": "You can also type here truncated truncated",
        "type": "text"
      }}></unit-input> -->

      <!-- <h2>Number inputs</h2>
      <h3>Date input</h3>
      <unit-input id="1" .state=${{
        "value": state,
        "height": "2.5em",
        "font-size": "1em",
        "type": "date"
      }}></unit-input> -->

      <h2>Glass style</h2>
      <h3>Input</h3>
      <p>Add class ".glass" to unit-input in order for the styles to be applied.</p>
      <section>
        <unit-input id="1" class="glass" .state=${{
          "value": state,
          "height": "2.5em",
          "label": "Name",
          "font-size": "1em",
          "type": "text"
        }}></unit-input>
      </section>

      <section>
        <unit-input id="1" class="glass" .state=${{
          "value": state,
          "height": "2.5em",
          "label": "Password",
          "font-size": "1em",
          "type": "text"
        }}></unit-input>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: Unit.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}