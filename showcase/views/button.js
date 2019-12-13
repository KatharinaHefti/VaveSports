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

      <h3>Colors</h3>
      <section style="display:flex;align-items:center;flex-wrap:nowrap;">
        <unit-button .state=${ {
          id: "nothing",
          "label": "width 350px",
          "className": "blue",
        }}></unit-button>
        <unit-button style="padding-left:10px;" @action=${onFarben} data-idx="0" label="Klick for color" value="Klick for color" .state=${ {
          "id": "localFarben"
        }}></unit-button>
      </section>

      <h3>Attributes</h3>
      <section style="display:flex;">
        <unit-button style="padding-right: 1rem;" label="Set attribute value" value="Set attribute value"></unit-button>
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

      <i>Add CSS class "dark" to unit-button:</i>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 5px; box-sizing: border-box;">
        <unit-button .state=${{
          id: "link", href:"#", label: "This is a link-button", value: "link", className: "dark link"
        }}></unit-button>
      </section>

      <i>Add CSS class "blue", "green" or "pink" to achieve a different button color.</i>
      <section style="display:flex;">
        <unit-button .state=${{
          id: "link", href:"#", label: "Link blue", value: "link", className: "blue link"
        }}></unit-button>
        <unit-button .state=${{
          id: "link", href:"#", label: "Link pink", value: "link", className: "pink link"
        }}></unit-button>
        <unit-button .state=${{
          id: "link", href:"#", label: "Link green", value: "link", className: "green link"
        }}></unit-button>
      </section>

      <section style="background-image: linear-gradient(#2B5779, #1C3659); display:flex;">
        <unit-button .state=${{
          id: "link", href:"#", label: "Link pink", value: "link", className: "pink link"
        }}></unit-button>
        <unit-button .state=${{
          id: "link", href:"#", label: "Link green", value: "link", className: "green link"
        }}></unit-button>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitButton.signature, theme:"tomorrow" }}></unit-md>


    </article>
    `
}