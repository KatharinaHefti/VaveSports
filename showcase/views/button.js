import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'

// Layz import units
import unitButton from 'view-units/unit-button/'
import 'view-units/unit-md'
// Assets
import { icon } from 'view-types'
const { boxes } = icon;

export function button( state = 0 ) {

  // Only locally without state
  const onFarben = ( e ) => {
    e.stopPropagation()
    const farben = [ "green", "blue", "orange", "red" ]

    if ( Number( e.target.dataset.idx ) > farben.length - 1 ) {
      e.target.dataset.idx = 0
    }
    e.target.className = farben[ e.target.dataset.idx ]
    e.target.state = { ...state, value: "FARBEN " + farben[ e.target.dataset.idx ].toUpperCase() }
    e.target.dataset.idx++
  }

  return html `
    <article>

      <h1>Element unit-button</h1>
      <unit-md .state=${{ raw: unitButton.signature, theme:"tomorrow" }}></unit-md>

      <h2>Example Counter</h2>
      <section style="display:flex;align-items:center;">
        <unit-button style="margin-right:10px;" .state=${{
          id: "counter", value: state, width: "50px"
        }}></unit-button>
        <unit-button data-idx=0 .state=${ {
          id:"nothing", "value": "width 350px", "icon1": boxes, "icon2": { src: boxes, fill:"green", height: "50px" }
        }}></unit-button>
        <p style="padding-left:.5rem;">Paragraph</p>
        <span style="padding-left:.5rem;">Span</span>
      </section>

      <h2>Example Farben</h2>
        <unit-button @action=${onFarben} data-idx="0" value="Klick mich" .state=${ {
          "id": "localFarben", "icon2": boxes
        }}></unit-button>

      <h2>Example</h2>
      <section style="display:flex;">
        <unit-button style="padding-right: 1rem;" value="Set Attribute Value"></unit-button>
        <unit-button style="flex:1" .state=${{
          id: "breite", value: "Set flex 1", icon1: boxes, className: "blue"
        }}></unit-button>
      </section>

    </article>
    `
}