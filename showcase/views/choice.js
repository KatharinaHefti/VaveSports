import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitChoice from 'view-base/unit-choice/'
import 'view-base/unit-md/'
// Assets
import * as boxes from 'view-base/type-icon'
import { icon } from 'view-base/type-icon'

export function choice() {

  const state = store.getState().choice

  const onAction = ( e ) => {
    store.dispatch( { type: "choice", data: e.detail.value } )
  }

  return html `
    <article hidden=false @action=${onAction}>

    <h1>Element unit-choice</h1>

    <h2>Examples</h2>
    <h3>icons, item-width: 200px</h3>
    <unit-choice .state=${{
      "id": "symptom",
      "item-width": "200px",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen' },
        { 'label': 'Auskultation der Lungedßn', 'value': 'brummen' },
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h3>Unit-choice .dark</h3>
    <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 10px; box-sizing: border-box">
    <unit-choice class="dark" .state=${{
      "id": "symptom",
      "item-width": "200px",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen' },
        { 'label': 'Auskultation der Lungedßn', 'value': 'brummen' },
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>
    </section>

    <h3>icons, height: 3em, font-size: 1.5em</h3>
    <unit-choice .state=${{
      "id": "syiptosm",
      "height": "3em",
      "font-size": "1.5em",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen' },
        { 'label': 'Auskultation der Lunge', 'value': 'brummen' },
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h3>icons, multi:true, class: multiselect</h3>
    <section>
      <unit-choice class="multiselect" .state=${{
        "id": "symptom",
        "multi": true,
        'items': [
          { 'label': 'Giemen', 'value': 'giemen'},
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummen', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Stridor', 'value': 'stridor' }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-choice>
      </section>

    <h3>Multiselect .dark</h3>
    <section style="background-image: linear-gradient(#2B5779, #1C3659)">
      <unit-choice class="multiselect dark" .state=${{
        "id": "symptom",
        "multi": true,
        'items': [
          { 'label': 'Giemen', 'value': 'giemen'},
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Auskultation der Lunge', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummen', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Stridor', 'value': 'stridor' }
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