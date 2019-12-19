import { html, render } from 'lit-html'
import store from '../data-store'
import unitLink from 'view-base/unit-link/'
import 'view-base/unit-md/'

export function link() {

  const state = store.getState().link || 0

  return html `
    <article hidden=false>

      <h1>Element unit-link</h1>

      <h2>Examples</h2>

      <h3>Link</h3>
      <section>
        This is a body text with a <unit-link .state=${ {
          id: "link1", value: "#", label: "link"
        }}></unit-link>.
      </section>

      <h3>Dark theme link</h3>
      <i>Add class "dark" to unit-link in order for the style to be applied:</i>
      <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
        This is a body text with a dark theme <unit-link class="dark" .state=${ {
          id: "link2", value: "#", label: "link"
        }}></unit-link>.
      </section>
      <i>Add class "green" or "blue" to achieve different link colors. Use "dark green" or "dark blue" for the dark theme.</i>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitLink.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}