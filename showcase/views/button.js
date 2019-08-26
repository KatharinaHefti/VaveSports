import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'

// Layz import units
import 'view-units/unit-button/'

// Assets
import { icon } from 'view-types'
const { boxes } = icon;

export function button( state = {} ) {

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
    <h1>Element unit-button</h1>
    <hr>
    <section style="display:flex;align-items:center;">
      <unit-button style="margin-right:10px;" .state=${{
        id: "counter", value: state.counter, width: "40px"
      }}></unit-button>
      <unit-button data-idx=0 .state=${ {
        id:"nothing", "value": "width 350px", "icon1": boxes, "icon2": { src: boxes, fill:"black", height: "50px" }
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
    </article>
    `
}