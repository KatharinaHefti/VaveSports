import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitDropdown from 'view-units/unit-dropdown/'
import 'view-units/unit-md/'

export function dropdown( state = 0 ) {

  const test = {
    "name": "countries",
    "items": [ {
        "id": "1",
        "value": "Afghanistan"
      },
      {
        "id": "2",
        "value": "Belgien"
      },
      {
        "id": "3",
        "value": "Deutschland"
      },
      {
        "id": "4",
        "value": "England"
      },
      {
        "id": "5",
        "value": "Kanada"
      },
      {
        "id": "6",
        "value": "Schweiz"
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
          items: test.items.map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitDropdown.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}