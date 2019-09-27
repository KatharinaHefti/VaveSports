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
        "value": "1",
        "name": "Afghanistan"
      },
      {
        "value": "2",
        "name": "Belgien"
      },
      {
        "value": "3",
        "name": "Deustchland"
      },
      {
        "value": "4",
        "name": "England"
      },
      {
        "value": "5",
        "name": "Kanada"
      },
      {
        "value": "6",
        "name": "Schweiz"
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