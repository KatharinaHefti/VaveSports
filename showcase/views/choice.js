import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'

// Layz import units
import 'view-units/unit-button/'
import 'view-units/unit-choice/'

// Assets
import { boxes } from '../asset/*.svg'

export function choice( state = {} ) {

  const onAction = ( e ) => {
    e.stopPropagation()

    switch ( e.detail.id ) {
      case "counter":
        state.counter = parseInt( e.detail.value ) + 1
        break;
      case "symptom":
        state.symptom = e.detail.value
        break;
      default:
        return console.log( "Unknowm action from id", e.detail.id )
    }

    e.target.dispatchEvent( new CustomEvent( 'action', {
      bubbles: true,
      detail: { ...state }
    } ) )
  }

  const onFarben = ( e ) => {
    e.stopPropagation()
    const farben = [ "green", "blue", "orange", "red" ]

    if ( Number( e.target.dataset.idx ) > farben.length - 1 ) {
      e.target.dataset.idx = 0
    }
    e.target.className = farben[ e.target.dataset.idx ]
    e.target.state.value = farben[ e.target.dataset.idx ]
    e.target.dataset.idx++
  }


  return html `
    <article>
    <h1>Choice</h1>
    <hr>
    <unit-choice .state=${{
      "id": "symptom",
      "item-width": "150px",
      'items': [
        { 'label': 'Giemen', 'value': 'giemen', icon1:boxes },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state.symptom == item.value
        return item
      })
    }}></unit-choice>
    <hr>
    <unit-choice .state=${{
      "id": "symptom",
      "wrap": true,
      'items': [
        { 'label': 'Giemen', 'value': 'giemen', icon1:boxes },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Brummeasdfasdfasfdßn', 'value': 'brummen', icon2: boxes},
        { 'label': 'Pfeifen', 'value': 'pfeifen' },
        { 'label': 'Stridor', 'value': 'stridor' }
      ].map( item => {
        item.selected = state.symptom == item.value
        return item
      })
    }}></unit-choice>
    </article>
    `
}