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
// For navi
//
// // For views
// import basic from './basic'
// import mdown from './mdown'
// import playground from './playground'
import { navigation, basic, svg, md } from './container'

window.onload = async () => {

  const app = ( state ) => {

    const onMain = ( e ) => {
      e.stopPropagation()
      if ( e.target.nodeName == "UNIT-SVG" ) {
        store.dispatch( { type: "svg", data: e.target.state.src } )
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
          ? svg(state.svg) :
          ( state.navigation.value == "unit-md")
          ? md( state.md ) : ''
          // ( state.links.value == "basic")
          // ? cache( until( basic( state.basic ))) :
          // ( state.links.value == "playground")
          // ? cache( until( playground( data ))) :
          // ''
        }
      </main>
    `
  }

  const refresh = () => {
    render( app( store.getState() ), document.body )
  }

  store.subscribe( refresh )

  store.dispatch( {
    type: "navigation",
    data: {
      value: location.pathname.split( "/" ).filter( p => !!p ).pop(),
      paths: [
        { label: "unit-svg", value: "unit-svg" },
        { label: "unit-md", value: "unit-md" },
        { label: "Playground", value: "playground" }
      ]
    }
  } )

}