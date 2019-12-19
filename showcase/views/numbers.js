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
        <unit-numbers .state=${{
          "id": "numbers1",
          "label": "Atemfrequenz",
          "placeholder": "0",
          "min": "10",
          "max": "30",
          "step": "1"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers .state=${{
          "id": "numbers2",
          "label": "Herzfrequenz",
          "placeholder": "0",
          "min": "40",
          "max": "130",
          "step": "1"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers .state=${{
          "id": "numbers3",
          "label": "Temperatur",
          "placeholder": "0",
          "min": "35",
          "max": "45",
          "step": "0.1"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <unit-numbers .state=${{
          "id": "numbers4",
          "label": "Systolischer Blutdruck",
          "placeholder": "0",
          "min": "80",
          "max": "120",
          "step": "10"
        }}></unit-numbers>
      </section>

      <h3>Dark theme</h3>
      <i>Add class "dark" to unit-numbers.</i>

      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 20px; box-sizing: border-box; color: white">
        <unit-numbers class="dark" id="dark" .state=${{
          "value": "12.3",
          "label": "Nummer",
          "placeholder": "0",
          "min": "10",
          "max": "20",
          "step": "0.1"
        }}></unit-numbers>
        <unit-numbers class="dark" id="darktwo" .state=${{
          "label": "Nummer",
          "placeholder": "0",
          "disabled": true
        }}></unit-numbers>
        <span>Baseline</span>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitNumbers.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}