import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitDropdown from 'view-base/unit-dropdown/'
import 'view-base/unit-md/'

export function dropdown() {

  const state = store.getState().dropdown || 0

  const test = {
    "name": "countries",
    "items": [ {
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
  }

  return html `
    <article hidden=false>

      <h1>Element unit-dropdown</h1>

      <h2>Examples</h2>

      <h3>Dropdown</h3>
      <section>
        <unit-dropdown .state=${{
          "name": test.name,
          "items": test.items.map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitDropdown.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}