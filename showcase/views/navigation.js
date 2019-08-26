import { html, render } from 'lit-html'
import { store } from '../provider'
import 'view-units/unit-liste'

export function navigation( state ) {

  const onNavi = ( e ) => {
    e.stopPropagation()

    console.log( state.value, e.detail.value )
    if ( state.value == e.detail.value ) {
      const pathname = `/showcase/`
      history.pushState( null, null, pathname )
      state.value = "showcase"
    } else {
      const pathname = `/showcase/${e.detail.value}/`
      history.pushState( null, null, pathname )
      state.value = e.detail.value
    }
    store.dispatch( { type: "navigation", data: state } )

  }

  return html `
    <unit-liste @action=${onNavi} .state=${{
      items: state.paths.map(item => {
        return { ...item, selected: item.value == state.value }
      })
    }}></unit-liste>
  `

}