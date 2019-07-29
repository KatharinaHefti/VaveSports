import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'

// ---------------------------
// Property .state
// ---------------------------
const State = {
  paths: [ "basic", "mdown" ],
  value: null
}

export default class Links extends HTMLElement {

  set state( state ) {
    // Quality check
    this._state = state
    // Update ui with state
    this.update()
  }

  get state() {
    return this._state || State
  }

  update() {
    render( this.template( this.state ), this, { eventContext: this } )
  }

  template( data ) {

    return html `
      <article>
        <view-column .state=${{
          id: "links", items: data.paths.map(item => {
            return { label: item, value: item, selected: item == data.value }
          })
        }}></view-column>
      </article>
      `
  }

}