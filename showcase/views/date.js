import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitDate from 'view-base/unit-date/'
import 'view-base/unit-md/'

export function date() {

  const state = store.getState().date || 0

  return html `
    <article hidden=false>

      <h1>Element unit-date</h1>

      <h2>Examples</h2>
      <p>Input for date.</p>
      <section style="padding-top:10px">
        <unit-date .state=${{
          "id": "date",
          "label": "Datum",
          "placeholder": "dd.mm.yyyy",
          "type": "date"
        }}></unit-date>
      </section>

      <h3>Dark theme</h3>
      <i>Add class "dark" to unit-date.</i>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 10px; box-sizing: border-box; color: white">
        <unit-date class="dark" .state=${{
          "id": "date",
          "label": "Datum",
          "placeholder": "dd.mm.yyyy",
          "type": "date"
        }}></unit-date>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitDate.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}