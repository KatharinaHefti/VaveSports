import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'

// Layz import units
import 'view-units/unit-button/'
import 'view-units/unit-choice/'

// Assets
import { boxes } from '../asset/*.svg'

export function basic( state ) {

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
      <style>
        article.basic {
          display: block;
        }

        article.basic h1 {
          background: #555;
          color: white;
          padding: .5rem;
        }
      </style>
      <article class=basic @action=${onAction}>
      <h1>Custom Elements Blueprint</h1>
      <ol>
        <li>Add Event Listener</li>
        <li>Set internal state</li>
        <li>Reflect some attributes or props but only one way</li>
        <li>Update Template with data</li>
        <li>Render selectively into the dom</li>
        <li>Dispatch action with subset of state (detail)</li>
      </ol>

      <h1>Element SVG</h1>
      <hr>
      <unit-svg .state=${{
        id:"boxes", value: boxes, fill: "tomato", width: "40px"
      }}></unit-svg>
      <unit-svg .state=${{
        id:"boxes", value: boxes, fill: "blue", background: "green", width: "40px", cursor: "pointer"
      }}></unit-svg>
      <span style="line-height:44px;">Text</span>
      <hr>

      <h1>Element Button</h1>
      <hr>
      <section style="display:flex;align-items:center;">
        <unit-button style="margin-right:10px;" .state=${{
          id: "counter", value: state.counter, width: "40px"
        }}></unit-button>
        <unit-button data-idx=0 .state=${ {
          id:"nothing", "value": "width 350px", "icon1": boxes, "icon2": { value: boxes, height: "50px" }
        }}></unit-button>
        <unit-button @action=${onFarben} data-idx=0 .state=${ {
          "id": "localFarben", "value": "click for colors asdfasdfasdf", "icon2": boxes, width: "100px"
        }}></unit-button>
        <unit-button value="Set Attribute value not working"></unit-button>
        <span>Text</span>
      </section>
      <hr>
        <section style="display:flex;">
        <unit-button style="flex:1" data-idx=0 .state=${ state["breite"] || {
          id: "breite", value: "maximise width", icon1: boxes, className: "blue"
        }}></unit-button>
        </section>
      <hr>

      <h1>Check</h1>
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
      <hr>
      `
}