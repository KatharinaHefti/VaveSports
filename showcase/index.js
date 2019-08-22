import 'regenerator-runtime/runtime'
//
import './index.css'
import 'view-types/font/ibm.regular.css'
//
import { html, render } from 'lit-html'
import { cache } from 'lit-html/directives/cache.js'
import { until } from 'lit-html/directives/until.js'
import { store } from './provider'
// For navi
// import 'view-units/source/unit-liste'
// // For views
// import basic from './basic'
// import mdown from './mdown'
// import playground from './playground'
import edit from 'view-types/icon/edit.svg'
import boxes from 'view-types/icon/boxes.svg'

import 'view-units/unit-svg'

window.onload = async () => {

  const update = () => {
    console.time( "render" )
    render( createApp( store.getState() ), document.body )
    console.timeEnd( "render" )
  }


  const createApp = ( data ) => {
    const test = 500

    return html `<unit-svg id="14" src=${edit} .state=${data}></unit-svg>`

  }

  store.subscribe( update )

  setInterval( () => {
    console.log( "update" )
    store.dispatch( { type: "Hallo" } )
  }, 5000 )
  //
  //   const createApp = ( data ) => {
  //
  //     const onNavi = ( e ) => {
  //       const pathname = `/showcase/${e.detail.value}/`
  //       history.pushState( null, null, pathname )
  //       store.dispatch( { type: "LINKS_VALUE", data: e.detail.value } )
  //     }
  //
  //     const onBasic = ( e ) => {
  //       store.dispatch( { type: "BASIC", data: e.detail } )
  //     }
  //
  //     return html `
  //       <nav @action=${onNavi}>
  //         <unit-liste .state=${{
  //           id: "links", items: data.links.paths.map(item => {
  //             return { ...item, selected: item.value == data.links.value }
  //           })
  //         }}></unit-liste>
  //       </nav>
  //       <main @action=${onBasic}>${ createView(data) }</main>
  //     `
  //   }
  //
  //   const createView = ( data ) => {
  //     switch ( data.links.value ) {
  //       case "basic":
  //         return cache( until( basic( data ) ) )
  //       case "mdown":
  //         return cache( until( mdown( data ) ) )
  //       case "playground":
  //         return cache( until( playground( data ) ) )
  //       default:
  //         return ``
  //     }
  //   }
  //
  //
  //
  //   store.dispatch( {
  //     type: "LINKS",
  //     data: {
  //       value: location.pathname.split( "/" ).filter( p => !!p ).pop(),
  //       paths: [
  //         { label: "Basic Units", value: "basic" },
  //         { label: "Markdown", value: "mdown" },
  //         { label: "playground", value: "playground" }
  //       ]
  //     }
  //   } )
  //
}