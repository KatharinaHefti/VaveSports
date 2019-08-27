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
    <h3>Icon, item-width and no multiline</h3>
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

    <h3>Icon, height and no multiline</h3>
    <unit-choice .state=${{
      "id": "symptom",
      "height": "70px",
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

    <h3>Icon and multiline</h3>
    <unit-choice .state=${{
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