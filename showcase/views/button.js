import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

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
    e.target.state = immu.set( e.target.state, "value", "FARBEN " + farben[ e.target.dataset.idx ].toUpperCase() )
    e.target.dataset.idx++
  }

  return html `
    <article hidden=false>

      <h1>Element unit-button</h1>

      <h2>Examples</h2>

      <h3>Default height will increment with store</h3>
      <section style="display:flex;align-items:center;">
        <unit-button style="margin-right:10px;" .state=${{
          id: "counter", value: state, width: "50px"
        }}></unit-button>
        <p style="padding-left:.5rem;">Paragraph</p>
        <span style="padding-left:.5rem;">Span</span>
      </section>

      <h3>Farben</h3>
      <section style="display:flex;align-items:center;flex-wrap:nowrap;">
        <unit-button .state=${ {
          id:"nothing", "value": "width 350px",
          "className": "blue",
          "icon1": { src: boxes, fill:"var(--red2)", height: "40px" },
          "icon2": { src: boxes, fill:"var(--green2)", height: "40px" }
        }}></unit-button>
        <unit-button style="padding-left:10px;" @action=${onFarben} data-idx="0" value="Klick for Color" .state=${ {
          "id": "localFarben", "icon2": boxes, "height": "70px"
        }}></unit-button>
      </section>

      <h3>Attributes</h3>
      <section style="display:flex;">
        <unit-button style="padding-right: 1rem;" value="Set Attribute Value"></unit-button>
        <unit-button style="flex:1" .state=${{
          id: "breite", value: "Set flex 1", icon1: boxes, icon2: boxes, className: "blue"
        }}></unit-button>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitButton.signature, theme:"tomorrow" }}></unit-md>


    </article>
    `
}