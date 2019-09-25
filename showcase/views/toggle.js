import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitToggle from 'view-units/unit-toggle/'
import 'view-units/unit-md/'

export function toggle( state = 0 ) {

  return html `
    <article hidden=false>

      <h1>Element unit-toggle</h1>

      <h2>Examples</h2>

      <h3>Toggle switch (on/off button)</h3>
      <section>
        <unit-toggle .state=${ {
          id:"toggle1"
        }}></unit-toggle>
      </section>

      <h3>Disabled toggle switch</h3>
      <section>
        <unit-toggle .state=${ {
          id:"toggle2",
          "disabled": true
        }}></unit-toggle>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitToggle.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}