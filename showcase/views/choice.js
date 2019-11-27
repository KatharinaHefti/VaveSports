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

  return html `
    <article hidden=false>

    <h1>Element unit-choice</h1>

    <h2>Examples</h2>
    <h3>icons, item-width: 200px</h3>
    <unit-choice .state=${{
      "id": "symptom",
      "item-width": "200px",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen', 'icon1':boxes },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen' },
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h3>icons, height: 3em, font-size: 1.5em</h3>
    <unit-choice .state=${{
      "id": "syiptosm",
      "height": "3em",
      "font-size": "1.5em",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen', 'icon1':boxes },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen' },
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h3>icons, multi:true, class: prodigy</h3>
    <unit-choice class=prodigy .state=${{
      "id": "symptom",
      "multi": true,
      'items': [
        { 'label': 'Giemen', 'value': 'giemen', icon1: boxes },
        { 'label': 'Brummeasdfasdfasf', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfasdfasf', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfasdfasf', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfdfn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state == item.value
        return item
      })
    }}></unit-choice>

    <h2>Signature</h2>
    <unit-md .state=${{ raw: unitChoice.signature, theme:"tomorrow" }}></unit-md>

    </article>
    `
}