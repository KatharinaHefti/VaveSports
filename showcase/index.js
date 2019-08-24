import 'regenerator-runtime/runtime'
//
import './index.css'
import 'view-types/font/ibm.regular.css'
//
import { store } from './provider'
//
import { html, render } from 'lit-html'
import { cache } from 'lit-html/directives/cache.js'
import { until } from 'lit-html/directives/until.js'
//
import { navigation } from './views'
import { svg, md, choice, button } from './views'

window.onload = async () => {

  const app = ( state ) => {

    const onMain = ( e ) => {
      e.stopPropagation()

      if ( e.target.nodeName == "UNIT-SVG" ) {
        store.dispatch( { type: "svg", data: e.target.state.src } )
      }
      if ( e.target.nodeName == "UNIT-BUTTON" ) {
        store.dispatch( { type: "button", data: e.detail } )
      }
    }

    return html `
      <nav>
        ${ navigation(state.navigation) }
      </nav>
      <main @action=${onMain}>
        ${
          ( state.navigation.value == "showcase" )
          ? html `<article><h1>Showcase</h1></article>` :

          ( state.navigation.value == "unit-svg")
          ? cache( svg(state.svg) ) :
          ( state.navigation.value == "unit-md")
          ? md( state.md ) :
          ( state.navigation.value == "unit-button")
          ? button( state.button ) :
          ( state.navigation.value == "unit-choice")
          ? choice( state.choice ) : ''
        }
      </main>
    `
  }

  const refresh = () => {
    console.time( "render app" )
    render( app( store.getState() ), document.body )
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
        { label: "unit-choice", value: "unit-choice" }
      ]
    }
  } )

}