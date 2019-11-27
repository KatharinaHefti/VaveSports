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

      <h3>Negative link</h3>
      <i>Add class "negative" to unit-link in order for the style to be applied.</i>
      <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
        This is a body text with a negative <unit-link class="negative" .state=${ {
          id: "link2", value: "#", label: "link",
        }}></unit-link>.
      </section>

      <h3>Prominent link</h3>
      <i>Add class "prominent" to unit-link.</i>
      <section>
        <unit-link class="prominent" .state=${ {
          id: "link3", value: "#", label: "Prominent link"
        }}></unit-link>
      </section>

      <h3>Disabled prominent link</h3>
      <section>
        <unit-link class="prominent" .state=${ {
          id: "link3", value: "#", label: "Disabled prominent", disabled: "true"
        }}></unit-link>
      </section>

      <h3>Prominent negative link</h3>
      <i>Add class "prominent negative" to unit-link.</i>
      <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
        <unit-link class="prominent negative" .state=${ {
          id: "link4", value: "#", label: "Prominent negative"
        }}></unit-link>
      </section>

      <h3>Prominent links in a row</h3>
      <i>Add class "prominent blue" or "prominent green" to unit-link in order to achieve a different prominent link color.</i>
      <section style="display: flex; align-items: center">
        <unit-link class="prominent" .state=${ {
          id: "link5", value: "#", label: "Abbrechen", width: "250px"
        }}></unit-link>
        <unit-link class="prominent blue" .state=${ {
          id: "link6", value: "#", label: "Link", width: "250px"
        }}></unit-link>
        <unit-link class="prominent green" .state=${ {
          id: "link7", value: "#", label: "Input", width: "250px"
        }}></unit-link>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitLink.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}