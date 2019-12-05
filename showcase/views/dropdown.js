import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitDropdown from 'view-base/unit-dropdown/'
import 'view-base/unit-md/'

export function dropdown() {

  const state = store.getState().dropdown || 0

  const items = [ {
      "id": "1",
      "value": "af",
      "label": "Afghanistan"
    },
    {
      "id": "2",
      "value": "be",
      "label": "Belgien"
    },
    {
      "id": "3",
      "value": "de",
      "label": "Deutschland"
    },
    {
      "id": "4",
      "value": "en",
      "label": "England"
    },
    {
      "id": "5",
      "value": "ca",
      "label": "Kanada"
    },
    {
      "id": "6",
      "value": "ch",
      "label": "Schweiz"
    }
  ]

  const negative = [ {
      "id": "one",
      "value": "one",
      "label": "Option one"
    },
    {
      "id": "two",
      "value": "two",
      "label": "Option two"
    },
    {
      "id": "three",
      "value": "three",
      "label": "Option three"
    }
  ]

  return html `
    <article hidden=false>

      <h1>Element unit-dropdown</h1>

      <h2>Examples</h2>

      <h3>Dropdown</h3>
      <section>
        <unit-dropdown .state=${{
          "placeholder": "Select country",
          "value": "de",
          "name": "countries",
          "items": items.map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>

      <h3>Dropdown .dark</h3>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 20px; box-sizing: border-box; height: 300px">
        <unit-dropdown class="dark" .state=${{
          "placeholder": "Select option",
          "name": "negative",
          "items": negative.map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitDropdown.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}