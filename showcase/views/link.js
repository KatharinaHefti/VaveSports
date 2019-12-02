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

      <h3>Prominent link</h3>
      <i>Padding-attribute is set to "10px 20px" as an example.</i>
      <section>
        <unit-link class="prominent" .state=${ {
          id: "link3", value: "#", label: "Prominent link", padding: "10px 20px"
        }}></unit-link>
      </section>

      <h3>Disabled prominent link</h3>
      <section>
        <unit-link .state=${ {
          id: "link3", value: "#", label: "Disabled prominent", disabled: "true"
        }}></unit-link>
      </section>

      <h3>Prominent dark theme link</h3>
      <i>Add class "dark" to unit-link.</i>
      <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
        <unit-link class="dark" .state=${ {
          id: "link4", value: "#", label: "Prominent dark"
        }}></unit-link>
      </section>

      <h3>Prominent links in a row</h3>
      <i>Add class "blue" or "green" to unit-link in order to achieve a different prominent link color.</i>
      <section style="display: flex; align-items: center">
        <unit-link .state=${ {
          id: "link5", value: "#", label: "Abbrechen"
        }}></unit-link>
        <unit-link class="blue" .state=${ {
          id: "link6", value: "#", label: "Link"
        }}></unit-link>
        <unit-link class="green" .state=${ {
          id: "link7", value: "#", label: "Input"
        }}></unit-link>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitLink.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}