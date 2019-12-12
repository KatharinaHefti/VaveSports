import { html, render } from "lit-html"
import { styleMap } from "lit-html/directives/style-map.js"
import immu from "object-path-immutable"
import store from "../data-store"
// Lazy import units
import unitChoice from "view-base/unit-choice/"
import "view-base/unit-md/"

export function choice() {

  const state = store.getState().choice

  const onAction = ( e ) => {
    store.dispatch( { type: "choice", data: e.detail.value } )
  }

  return html `
    <article hidden=false @action=${onAction}>

    <h1>Element unit-choice</h1>

    <h2>Examples</h2>
    <p>Width is set to 200px, which gives each item a width of 200px.</p>
    <unit-choice .state=${{
      "id": "symptom",
      "width": "200px",
      "items": [
        { "label": "Giemen", "value": "giemen" },
        { "label": "Auskultation der Lunge", "value": "auskult" },
        { "label": "Pfeifen", "value": "pfeifen" },
        { "label": "Stridor", "value": "stridor" }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h3>Unit-choice .dark</h3>
    <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 10px; box-sizing: border-box">
    <unit-choice class="dark" .state=${{
      "id": "symptom",
      "width": "200px",
      "items": [
        { "label": "Giemen", "value": "giemen" },
        { "label": "Auskultation der Lunge", "value": "auskult" },
        { "label": "Pfeifen", "value": "pfeifen" },
        { "label": "Stridor", "value": "stridor" }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>
    </section>

    <h2>Signature</h2>
    <unit-md .state=${{ raw: unitChoice.signature, theme:"tomorrow" }}></unit-md>

    </article>
    `
}