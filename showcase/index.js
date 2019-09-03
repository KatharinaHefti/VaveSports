import 'regenerator-runtime/runtime'
import '@webcomponents/custom-elements'
import '@webcomponents/template'
//
import './index.css'
import 'view-types/style/hidden.css'
import 'view-types/style/color-fresh.css'
import 'view-types/font/ibm.css'
//
import { store } from './provider'
//
import { html, render } from 'lit-html'
import { cache } from 'lit-html/directives/cache.js'
import { until } from 'lit-html/directives/until.js'
import debounce from 'lodash/debounce'
//
import { navigation } from './views'
import { svg, md, choice, button, colors, literature, textarea, input } from './views'

window.onload = async () => {

  const app = ( state ) => {

    const onMain = ( e ) => {
      e.stopPropagation()

      if ( e.target.nodeName == "UNIT-SVG" ) {
        store.dispatch( { type: "svg", data: e.target.state.src } )
      }
      if ( e.target.nodeName == "UNIT-BUTTON" && e.target.id == "counter" ) {
        const value = parseInt( e.target.state.value ) + 1
        store.dispatch( { type: "button", data: value } )
      }
      if ( e.target.nodeName == "UNIT-CHOICE" ) {
        store.dispatch( { type: "choice", data: e.detail.value } )
      }
      if ( e.target.nodeName == "UNIT-TEXTAREA" ) {
        store.dispatch( { type: "textarea", data: e.detail.value } )
      }

    }

    return html `
      <nav>
        ${ navigation(state.navigation) }
      </nav>
      <main @action=${onMain}>
        ${
          ( state.navigation.value == "showcase" )
          ? colors() :

          ( state.navigation.value == "unit-svg")
          ? cache( svg(state.svg) ) :
          ( state.navigation.value == "unit-md")
          ? md( state.md ) :
          ( state.navigation.value == "unit-button")
          ? button( state.button ) :
          ( state.navigation.value == "unit-choice")
          ? choice( state.choice ) :
          ( state.navigation.value == "unit-literature")
          ? literature( state.literature ) :
          ( state.navigation.value == "unit-textarea")
          ? textarea( state.textarea ) :
          ( state.navigation.value == "unit-input")
          ? input( state.input ) : ''
        }
      </main>
    `
  }

  const refresh = async () => {
    console.time( "render app" )
    await render( app( store.getState() ), document.body )
    console.timeEnd( "render app" )
  }

  store.subscribe( refresh )

  store.dispatch( {
    type: "navigation",
    data: {
      value: location.pathname.split( "/" ).filter( p => !!p ).pop(),
      paths: [
        { label: "unit-svg", value: "unit-svg" },
        { label: "unit-md", value: "unit-md" },
        { label: "unit-button", value: "unit-button" },
        { label: "unit-choice", value: "unit-choice" },
        { label: "unit-literature", value: "unit-literature" },
        { label: "unit-textarea", value: "unit-textarea" },
        { label: "unit-input", value: "unit-input" }
      ]
    }
  } )

  // ---------------------------------------
  // Give some time for resources too load
  // and then try to scroll or reset hash
  // ---------------------------------------
  setTimeout( () => {
    if ( location.hash && document.querySelector( location.hash ) ) {
      document.querySelector( location.hash ).scrollIntoView( { block: "start", behavior: "smooth" } )
    } else {
      history.replaceState( null, null, location.pathname.split( "#" )[ 0 ] )
    }
  }, 250 )

}