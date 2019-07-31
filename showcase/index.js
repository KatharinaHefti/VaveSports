import './index.css'
import 'core-js/stable'
import "regenerator-runtime/runtime"

import { html, render } from 'lit-html'
import { cache } from 'lit-html/directives/cache.js'
import { store } from './store'

// Showcases
import 'view-units/source/'
import 'view-units/source/unit-md'

// Load some example views
import './area-basic'
// view acticle.mdwon

import mds from './asset/*.mdown'

window.onload = async () => {

  const app = document.querySelector( "main" )

  const update = () => {
    console.time( "render" )
    render( createApp( store.getState() ), document.body )
    console.timeEnd( "render" )
  }

  const createApp = ( data ) => {

    const onNavi = ( e ) => {
      const pathname = `/showcase/${e.detail.value}/`
      history.pushState( null, null, pathname )
      store.dispatch( { type: "LINKS_VALUE", data: e.detail.value } )
    }

    return html `
      <nav @action=${onNavi}>
        <unit-column .state=${{
          id: "links", items: data.links.paths.map(item => {
            return { ...item, selected: item.value == data.links.value }
          })
        }}></unit-column>
      </nav>
      <main>${ createView(data) }</main>
    `
  }

  const createView = ( data ) => {

    const onBasic = ( e ) => {
      store.dispatch( { type: "BASIC", data: e.detail } )
    }

    switch ( data.links.value ) {

      case "basic":
        return cache( html `
          <area-basic @action=${onBasic} .state=${data.basic}></area-basic>
        ` )

      case "mdown":
        return cache( html `
          <article class=mdown hidden=false>
            <unit-md .state=${{
              value:mds.code,
              theme: Math.random() > 0.7 ? "twilight" : Math.random() > 0.5 ? "tomorrow" : "default"
            }}></unit-md>
            <unit-md .state=${{
              value:"https://epha.io/akte/recht/nutzung.md",
              hidden:"false"
            }}></unit-md>
          </article>
        ` )

      default:
        return ``

    }
  }


  store.subscribe( update )

  store.dispatch( {
    type: "LINKS",
    data: {
      value: location.pathname.split( "/" ).filter( p => !!p ).pop(),
      paths: [
        { label: "Basic Units", value: "basic" },
        { label: "Markdown", value: "mdown" }
      ]
    }
  } )

}