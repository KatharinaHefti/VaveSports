import { html, render } from 'lit-html'
import store from '../data-store'
import { version } from '../../package.json'
import 'view-base/unit-liste/'
import 'view-base/unit-svg/'

export function navigation( state ) {

  const onNavi = ( e ) => {

    e.stopPropagation()

    // Select
    if ( state.navigation != e.detail.value ) {
      history.pushState( null, null, `/showcase/${e.detail.value}/` )
      store.dispatch( { type: "navigation", data: e.detail.value } )
    }
    // Deselect
    else {
      history.pushState( null, null, '/showcase/' )
      store.dispatch( { type: "navigation", data: '' } )
    }

  }

  const items = [
    { label: "unit-svg", value: "svg" },
    { label: "unit-md", value: "md" },
    { label: "unit-button", value: "button" },
    { label: "unit-choice", value: "choice" },
    { label: "unit-textarea", value: "textarea" },
    { label: "unit-input", value: "input" },
    { label: "unit-toggle", value: "toggle" },
    { label: "unit-dropdown", value: "dropdown" },
    { label: "unit-numbers", value: "numbers" }
  ].map( item => {
    return { ...item, selected: item.value == state.navigation }
  } )

  return html `
    <section class=sidebar>
      <style>
        section.sidebar {
          min-height:80px;color:
          white;padding:1rem;
          display:flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      </style>
      <span style="font-size:2rem; font-weight: 600;color:orange;">Showcase</span>
      <span style="font-size: .8rem; border:1px solid #fff;padding:0 .2rem;">${version}</span>
    </section>
    <unit-liste @action=${onNavi} .state=${{ items }}></unit-liste>
  `

}