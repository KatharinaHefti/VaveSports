import './index.css'
import 'view-base/type-style/hidden.css'
import 'view-base/type-font/ibm.css'
import 'view-base/type-font/lora.css'
import 'view-base/type-font/opensans.css'
import 'view-base/type-font/sourceserifpro.css'
// Ensure customElement and runtime
import polyfill from 'view-base/util-polyfill'
//
import store from './data-store'
import { init } from './data-thunk'
import { html, render } from 'lit-html'
import debounce from 'lodash/debounce'
import views from './views'

window.onload = async () => {

  // Runtime for async & promises
  await polyfill()

  // Prepare store without painting
  await store.dispatch( init() )

  const painting = () => {
    console.time( "Rendering" )
    render( views(), document.body )
    console.timeEnd( "Rendering" )
  }

  // Trigger repainting on store change
  store.subscribe( debounce( painting ) )

  // Start painting for the first time
  painting()

}