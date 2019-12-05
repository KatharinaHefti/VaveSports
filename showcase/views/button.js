import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitButton from 'view-base/unit-button/'
import 'view-base/unit-md/'
// Assets
import * as boxes from 'view-base/type-icon'

export function button() {

  const state = store.getState().button || 0

  // Only locally without state
  const onFarben = ( e ) => {
    e.stopPropagation()
    const farben = [ "green", "blue", "orange", "red" ]

    if ( Number( e.target.dataset.idx ) > farben.length - 1 ) {
      e.target.dataset.idx = 0
    }
    e.target.className = farben[ e.target.dataset.idx ]
    e.target.state = immu.set( e.target.state, "label", "FARBEN " + farben[ e.target.dataset.idx ].toUpperCase() )
    e.target.dataset.idx++
  }

  return html `
    <article hidden=false>

      <h1>Element unit-button</h1>

      <h2>Examples</h2>

      <h3>Default height will increment with store</h3>
      <section style="display:flex;align-items:center;">
        <unit-button style="margin-right:10px;" width="90px" .state=${{
          id: "counter", label: state
        }}></unit-button>
        <p style="padding-left:.5rem;">Paragraph</p>
        <span style="padding-left:.5rem;">Span</span>
      </section>

      <h3>Farben</h3>
      <section style="display:flex;align-items:center;flex-wrap:nowrap;">
        <unit-button .state=${ {
          id:"nothing",
          "label": "width 350px",
          "className": "blue",
          "icon1": { src: boxes, fill:"var(--red2)", height: "2rem" },
          "icon2": { src: boxes, fill:"var(--green2)", height: "2rem" }
        }}></unit-button>
        <unit-button style="padding-left:10px;" @action=${onFarben} data-idx="0" label="Klick for Color" value="Klick for Color" .state=${ {
          "id": "localFarben", "icon2": boxes
        }}></unit-button>
      </section>

      <h3>Attributes</h3>
      <section style="display:flex;">
        <unit-button style="padding-right: 1rem;" label="Set Attribute Value" value="Set Attribute Value"></unit-button>
        <unit-button style="flex:1" .state=${{
          id: "breite", label: "Set flex 1", value: "Set flex 1", icon1: boxes, icon2: boxes, className: "blue"
        }}></unit-button>
      </section>

      <h3>Button with "href" attribute</h3>
      <section style="display:flex;">
        <unit-button .state=${{
          id: "link", href:"#", label: "This is a link-button", value: "link", className: "link"
        }}></unit-button>
      </section>

      <section style="display:flex; background-color: #696969">
        <unit-button class="dark" .state=${{
          id: "link", href:"#", label: "This is a link-button", value: "link", className: "dark link"
        }}></unit-button>
      </section>

      <section style="display:flex;">
        <unit-button class="blue" .state=${{
          id: "link", href:"#", label: "This is a link-button", value: "link", className: "blue link"
        }}></unit-button>
      </section>

      <h3>White button (on a dark background)</h3>
      <section style="display:flex; background-color:purple; padding:10px;">
        <unit-button style="padding-right: 1rem;" width="200px" .state=${{label: "White Button", value: "white button", className: "dark"}}></unit-button>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitButton.signature, theme:"tomorrow" }}></unit-md>


    </article>
    `
}