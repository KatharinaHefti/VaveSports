import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitCode from 'view-base/unit-code/'
import 'view-base/unit-md/'

export function code() {

  const state = store.getState().code || 0

  return html `
    <article hidden=false>

      <h1>Element unit-code</h1>

      <h2>Examples</h2>

      <h3>Code</h3>
      <p>Input for telephone number or SMS code, for example.</p>
      <section>
        <unit-code pattern="___-___-__-__" .state=${{
          "id": "one",
          "label": "Telefonnummer",
        }}></unit-code>
      </section>

      <section style="padding-top: 30px;">
        <unit-code pattern="____" .state=${{
          "id": "one",
          "label": "SMS code",
        }}></unit-code>
      </section>

      <h3>Dark theme code</h3>
      <i>Add class "dark" to unit-code.</i>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 20px; box-sizing: border-box;">
        <section>
          <unit-code class="dark" pattern="___-___-__-__" .state=${{
            "id": "one",
            "label": "Telefonnummer",
          }}></unit-code>
        </section>

        <section style="padding-top: 30px;">
          <unit-code class="dark" pattern="____" .state=${{
            "id": "one",
            "label": "SMS code",
          }}></unit-code>
        </section>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitCode.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}