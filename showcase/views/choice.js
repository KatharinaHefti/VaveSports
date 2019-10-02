import { html, render } from 'lit-html'
import unitChoice from 'view-units/unit-choice/'
// Assets
import { icon } from 'view-types'
const { boxes } = icon;

export function choice( state ) {

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