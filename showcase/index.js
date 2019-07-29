import 'core-js/stable'
import "regenerator-runtime/runtime"

import { html, render } from 'lit-html'
import { cache } from 'lit-html/directives/cache.js'
import { store } from './store'

// Showcases
import 'view-element'
import 'view-element/view-md'

// Load some example views
import './view-links'
import './view-basic'


import mds from './asset/*.mdown'

window.onload = async () => {

  const app = document.querySelector( "article.app" )

  const onLinks = ( e ) => {
    const pathname = `/element/${e.detail.value}/`
    history.pushState( null, null, pathname )
    store.dispatch( { type: "LINKS_VALUE", data: e.detail.value } )
  }

  const onBasic = ( e ) => {
    store.dispatch( { type: "BASIC", data: e.detail } )
  }

  const update = () => {
    console.time( "render" )
    render( template( store.getState() ), app )
    console.timeEnd( "render" )
  }

  const showBasic = ( data ) => html `
    <view-basic @action=${onBasic} hidden="false" .state=${data.basic}></view-basic>
  `

  const showMDown = ( data ) => html `
    <view-md .state=${mds.test1}></view-md>
    <view-md .state=${{
      value:mds.test2,
      hidden:"false"
    }}></view-md>
  `

  const template = ( data ) => {

    return html `
      <article class=main>
        <view-links @action=${onLinks} .state=${data.links}></view-links>
        <section class=right>
        <!-- Changing Views -->
        ${ html`${ cache(data.links.value == "basic"
          ? showBasic(data)
          : ``)}`
        }
        ${ html`${ cache(data.links.value == "mdown"
          ? showMDown(data)
          : ``)}`
        }
        </section>
      </article>
    `
  }

  store.subscribe( update )

  store.dispatch( {
    type: "LINKS",
    data: {
      value: location.pathname.split( "/" ).filter( p => !!p ).pop(),
      paths: [ "basic", "mdown" ]
    }
  } )

}