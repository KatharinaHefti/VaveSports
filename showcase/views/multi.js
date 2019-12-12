import { html, render } from "lit-html"
import { styleMap } from "lit-html/directives/style-map.js"
import immu from "object-path-immutable"
import store from "../data-store"
// Lazy import units
import unitMulti from "view-base/unit-multi/"
import "view-base/unit-md/"

export function multi() {

  const state = store.getState().multi

  const onAction = ( e ) => {
    store.dispatch( { type: "multi", data: e.detail.value } )
  }

  return html `
    <article hidden=false @action=${onAction}>

    <h1>Element unit-multi</h1>

    <h2>Examples</h2>
    <p>This is a multiselect. Width is set to 150px, which gives each item a width of 150px.</p>
    <section>
      <unit-multi .state=${{
        "id": "symptom",
        "width": "150px",
        "items": [
          { "label": "Giemen", "value": "giemen"},
          { "label": "Auskultation der Lunge", "value": "auskult"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Auskultation der Lunge", "value": "auskult"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Brummen", "value": "brummen"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Brummen", "value": "brummen"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Stridor", "value": "stridor" }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-multi>
      </section>

    <h3>Multiselect .dark</h3>
    <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 10px; box-sizing: border-box">
      <unit-multi class="dark" .state=${{
        "id": "symptom",
        "items": [
          { "label": "Giemen", "value": "giemen"},
          { "label": "Auskultation der Lunge", "value": "auskult"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Auskultation der Lunge", "value": "auskult"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Brummen", "value": "brummen"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Brummen", "value": "brummen"},
          { "label": "Pfeifen", "value": "pfeifen" },
          { "label": "Stridor", "value": "stridor" }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-multi>
    </section>

    <h2>Signature</h2>
    <unit-md .state=${{ raw: unitMulti.signature, theme:"tomorrow" }}></unit-md>

    </article>
    `
}