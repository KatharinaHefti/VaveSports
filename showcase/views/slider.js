import { html, render } from 'lit-html'
import store from '../data-store'
// Layz import units
import unitSlider from 'view-base/unit-slider/'
import 'view-base/unit-md/'

export function slider() {

  const state = store.getState().slider || 0

  return html `
    <article hidden=false>

      <h1>Element unit-slider</h1>

      <h2>Examples</h2>

      <h3>Range slider</h3>
      <section style="max-width: 600px">
        <unit-slider .state=${ {
          id: "slider1",
          min: "0",
          max: "100",
          step: "1",
          value: "73"
        }}></unit-slider>
      </section>

      <h3>Range slider .dark</h3>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 20px; box-sizing: border-box; max-width: 600px">
        <unit-slider class="dark" .state=${ {
          id: "slider2",
          min: "0",
          max: "10000",
          step: "100",
          value: "1500"
        }}></unit-slider>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitSlider.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}