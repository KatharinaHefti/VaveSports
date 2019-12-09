import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitNumbers from 'view-base/unit-numbers/'
import 'view-base/unit-md/'

export function numbers() {

  const state = store.getState().numbers || 0

  return html `
    <article hidden=false>

      <h1>Element unit-numbers</h1>

      <h2>Examples</h2>
      <p>Inputs for number values.</p>
      <section style="padding-top:15px">
        <unit-numbers pattern="__" .state=${{
          "id": "numbers1",
          "label": "Atemfrequenz",
          "placeholder": "00"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers pattern="___" .state=${{
          "id": "numbers2",
          "label": "Herzfrequenz",
          "placeholder": "000"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers pattern="__._" .state=${{
          "id": "numbers3",
          "label": "Temperatur",
          "placeholder": "00.0",
          "min": "36.5",
          "max": "43"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers pattern="____.__" .state=${{
          "id": "numbers4",
          "label": "Systolischer Blutdruck",
          "placeholder": "0000.00"
        }}></unit-numbers>
      </section>

      <h3>Dark theme</h3>
      <i>Add class "dark" to unit-numbers.</i>

      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 20px; box-sizing: border-box; color: white">
        <unit-numbers class="dark" id="dark" .state=${{
          "value": "12.3",
          "label": "Nummer",
          "placeholder": "Placeholder"
        }}></unit-numbers>
        <unit-numbers class="dark" id="dark" .state=${{
          "label": "Nummer",
          "placeholder": "000.00",
          "disabled": true
        }}></unit-numbers>
        <span>Baseline</span>
      </section>

      <!-- <h2>Glass style</h2>
      <p>Add class ".glass" to element in order for the styles to be applied.</p>
      <section style="padding-top:15px">
        <span>Systolischer Blutdruck: </span>
        <unit-numbers pattern="____.__" class="glass" .state=${{
          "id": "numbers5"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Telefonnummer: </span>
        <unit-numbers pattern="___-___-__-__" class="glass" .state=${{
          "id": "numbers6"
        }}></unit-numbers>
      </section> -->

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitNumbers.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}