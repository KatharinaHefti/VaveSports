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

  const svg = ( id, src, props = {} ) => {
    const onAction = ( e ) => {
      console.log( "action", e.target.state )
    }
    const onClick = ( e ) => {
      console.log( "click", e.target.state )
    }
    return html `
      <section @action="${onAction}" @click="${onClick}" style="border:1px solid grey; height:100px;">
        <style>
          unit-svg {
            border: 1px solid green;
          }
        </style>
        <unit-svg id="${id}" src=${src} .state=${props}></unit-svg>
        <span>Text Baseline</span>
        <unit-svg id="${id}" src=${src} .state=${props}></unit-svg>
      </section>`
  }

  console.time( "svg1" )
  render( svg( "11", edit, { cursor: "pointer", width: "42px", height: "42px" } ), document.body )
  console.timeEnd( "svg1" )

  await new Promise( resolve => setTimeout( resolve, 3000 ) )

  console.time( "svg2" )
  render( svg( "12", boxes ), document.body )
  console.timeEnd( "svg2" )

  await new Promise( resolve => setTimeout( resolve, 3000 ) )

  console.time( "svg3" )
  render( svg( "13", null, { src: edit, width: "60px", fill: "tomato", background: "blue" } ), document.body )
  console.timeEnd( "svg3" )
}
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