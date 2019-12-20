import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'
import store from '../data-store'
// Layz import units
import unitButton from 'view-base/unit-button/'
import 'view-base/unit-md/'
// Assets
import boxes from 'view-base/type-icon/boxes.svg'
import close from 'view-base/type-icon/close.svg'
import right from 'view-base/type-icon/angle-right.svg'
import left from 'view-base/type-icon/angle-left.svg'
import paperclip from 'view-base/type-icon/paperclip.svg'

export function button() {

  const state = store.getState().button || 0

  // Only locally without state
  const onFarben = ( e ) => {
    e.stopPropagation()
    const farben = [ "green", "blue", "orange", "pink" ]

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

      <h3>Buttons</h3>
      <section style="display:flex;">
        <unit-button style="padding-right: 1rem;" label="This is a label" value="value"></unit-button>
        <unit-button style="flex:1" .state=${{
          id: "breite", label: "Set flex 1", value: "Set flex 1", className: "blue"
        }}></unit-button>
      </section>

      <h3>Button with icons</h3>
      <p>icon1 is set</p>
      <unit-button .state=${{
        id: "iconbutton", label: "Left", value: "icons", icon1: paperclip, className: "blue",
      }}></unit-button>
      <p>icon2 is set</p>
      <unit-button .state=${{
        id: "iconbutton", label: "Right", value: "icons", icon2: paperclip, className: "blue",
      }}></unit-button>

      <h3>Button with "href" attribute</h3>
      <section style="display:flex;">
        <unit-button .state=${{
          id: "link", href:"#", label: "This is a link-button", value: "link", className: "link"
        }}></unit-button>
      </section>

      <h3>Dark style</h3>
      <p>Add CSS class "dark" to unit-button.</p>
      <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 5px; box-sizing: border-box;">
      <unit-button .state=${{
        id: "link", label: "This is a button", value: "link", className: "dark link"
      }}></unit-button>
        <unit-button .state=${{
          id: "link", href:"#", label: "This is a link", value: "link", className: "dark link"
        }}></unit-button>
      </section>

      <h3>Colored buttons</h3>
      <p>Add class "blue", "pink", "green" or "orange" to unit-button or dark unit-button.</p>
      <section style="display:flex;">
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Blue", value: "link", className: "blue link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Pink", value: "link", className: "pink link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Green", value: "link", className: "green link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Orange", value: "link", className: "orange link"
        }}></unit-button>
      </section>

      <section style="background-image: linear-gradient(#2B5779, #1C3659); display:flex;">
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Blue", value: "link", className: "dark blue link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Pink", value: "link", className: "dark pink link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Green", value: "link", className: "dark green link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Orange", value: "link", className: "dark orange link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Default", value: "link", className: "dark link"
        }}></unit-button>
      </section>

      <h3>Close button</h3>
      <unit-button .state=${{
        id: "close", label: "", value: "", icon1: close, padding: "0", className: "close"
      }}></unit-button>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitButton.signature, theme:"tomorrow" }}></unit-md>


    </article>
    `
}