import { html, render } from 'lit-html';

class Proto extends HTMLElement {

  constructor() {
    super()
    // Internal state
    this._state = {}
    // Handler
    Object.defineProperties( this._state, {
      "message": {
        set: ( value ) => {
          console.log( "value", value )
          this.setAttribute( "message", value )
        },
        get: () => this.getAttribute( "message" ),
        enumerable: true
      }
    } )

  }

  static get observedAttributes() {
    return [ "message" ]
  }

  attributeChangedCallback( key, oldVal, newVal ) {
    this.update()
  }

  set state( value ) {
    this._state[ message ] = value
  }

  get state() {
    return this._state
  }

  update() {
    console.time( "update" )
    render( this.template( this.state ), this, { eventContext: this } )
    console.timeEnd( "update" )
  }

  template( state ) {
    console.log( "template state", state )

    return html `
      <style>
        proto-typing {
          display: block;
          background: tomato;
          padding:1rem;
          font-size:2rem;
        }
        proto-typing>*{
          pointer-events:none;
        }
      </style>
      <div class="message">${state.message}</div>
    `
  }

  connectedCallback() {
    this.update()
  }

}

customElements.define( 'proto-typing', Proto );