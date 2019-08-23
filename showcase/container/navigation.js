import { html, render } from 'lit-html'
import { store } from '../provider'
import 'view-units/unit-liste'

export function navigation( state ) {

  const onNavi = ( e ) => {
    const pathname = `/showcase/${e.detail.value}/`
    history.pushState( null, null, pathname )
    store.dispatch( { type: "LINKS_VALUE", data: e.detail.value } )
  }

  return html `
    <unit-liste @action=${onNavi} .state=${{
      items: state.paths.map(item => {
        return { ...item, selected: item.value == state.value }
      })
    }}></unit-liste>
  `

}