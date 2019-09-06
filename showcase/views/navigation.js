import { html, render } from 'lit-html'
import { store } from '../provider'
import { version } from '../../package.json'
import 'view-units/unit-liste/'
import 'view-units/unit-svg/'

export function navigation( state ) {

  const onNavi = ( e ) => {

    e.stopPropagation()

    if ( state.value == e.detail.value ) {
      const pathname = `/showcase/`
      history.pushState( null, null, pathname )
      state.value = "showcase"
    } else {
      const pathname = `/showcase/${e.detail.value}/`
      history.pushState( null, null, pathname )
      state.value = e.detail.value
      // Yeah no virtual dom
      if ( document.querySelector( "main>article" ) ) {
        document.querySelector( "main>article" ).scrollTop = 0
      }
    }

    store.dispatch( { type: "navigation", data: state } )

  }

  return html `
    <section style="min-height:80px;width:100%;color: white;padding:1rem; display:flex; align-items: center; justify-content: space-between;flex-wrap: wrap;">
      <span style="font-size:2rem; font-weight: 600;color:orange;">Showcase</span>
      <span style="font-size: .8rem; border:1px solid #fff;padding:0 .2rem;">${version}</span>
    </section>
    <unit-liste @action=${onNavi} .state=${{
      items: state.paths.map(item => {
        return { ...item, selected: item.value == state.value }
      })
    }}></unit-liste>
  `

}