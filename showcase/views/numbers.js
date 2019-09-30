import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitToggle from 'view-units/unit-numbers/'
import 'view-units/unit-md/'

export function numbers( state = 0 ) {
  return html `
    <article hidden=false>

      <h1>Element unit-numbers</h1>

      <h2>Examples</h2>
      <section style="padding-top:15px">
        <span>Atemfrequenz</span>
        <unit-numbers .state=${{
          "id": "numbers1",
          "items": [1,2,3]
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Herzfrequenz</span>
        <unit-numbers .state=${{
          "id": "numbers2",
          "items": [1,2,3]
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Temperatur</span>
        <unit-numbers .state=${{
          "id": "numbers3",
          "items": [1,2,3]
        }}></unit-numbers>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitToggle.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}