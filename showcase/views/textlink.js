import { html, render } from 'lit-html'
import store from '../data-store'
import unitTextLink from 'view-base/unit-text-link/'
import 'view-base/unit-md/'

export function textlink() {

  const state = store.getState().textlink || 0

  return html `
    <article hidden=false>

      <h1>Element unit-textlink</h1>

      <h2>Examples</h2>

      <h3>Link</h3>
      <section>
        This is a body text with a <unit-text-link .state=${ {
          id: "link1", value: "#", label: "link"
        }}></unit-text-link>.
      </section>

      <h3>Negative link</h3>
      <i>Add class "negative" to unit-textlink in order for the style to be applied.</i>
      <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
        This is a body text with a negative <unit-text-link class="dark" .state=${ {
          id: "link2", value: "#", label: "link"
        }}></unit-text-link>.
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitTextLink.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}