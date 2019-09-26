import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitDropdown from 'view-units/unit-dropdown/'
import 'view-units/unit-md/'

export function dropdown( state = 0 ) {

  const test = [ {
      "value": "1",
      "title": "Option one"
    },
    {
      "value": "2",
      "title": "Option two"
    },
    {
      "value": "3",
      "title": "Option three"
    },
    {
      "value": "4",
      "title": "Option four"
    },
    {
      "value": "5",
      "title": "Option five"
    },
    {
      "value": "6",
      "title": "Option six"
    }
  ]

  return html `
    <article hidden=false>

      <h1>Element unit-dropdown</h1>

      <h2>Examples</h2>

      <h3>Dropdown</h3>
      <section>
        <unit-dropdown .state=${{
          items: test.map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitDropdown.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}