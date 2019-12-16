import { html, render } from 'lit-html'
import store from '../data-store'
import { version } from '../../package.json'
import 'view-base/unit-liste/'
import 'view-base/unit-svg/'

export function navigation() {

  const state = store.getState()

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

  const changeFont = ( e ) => {
    document.querySelectorAll( ".font" ).forEach( item => item.style.textDecoration = "none" )
    document.querySelector( "html" ).style.fontSize = e.target.getAttribute( "data-size" ) + "px"
    e.target.style.textDecoration = "underline"
  }

  const items = [
    { label: "unit-svg", value: "svg" },
    { label: "unit-md", value: "md" },
    { label: "unit-button", value: "button" },
    { label: "unit-choice", value: "choice" },
    { label: "unit-multi", value: "multi" },
    { label: "unit-textarea", value: "textarea" },
    { label: "unit-input", value: "input" },
    { label: "unit-dropdown", value: "dropdown" },
    { label: "unit-numbers", value: "numbers" },
    { label: "unit-date", value: "date" },
    { label: "unit-code", value: "code" },
    { label: "unit-link", value: "link" },
    { label: "unit-slider", value: "slider" },
    { label: "colors", value: "colors" }

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
    <div style="display:flex;justify-content:flex-end;color:white;padding:0 1rem 0 0;box-sizing:border-box;font-size:.8rem">Font-size:</div>
    <div style="display:flex;justify-content:flex-end;color:white;padding:0 1rem .5rem 0;box-sizing:border-box;font-size:.8rem;cursor:pointer">
      <div class="font" @click=${changeFont} data-size="16" style="padding-right:1rem">16px</div>
      <div class="font" @click=${changeFont} data-size="18" style="padding-right:1rem">18px</div>
      <div class="font" @click=${changeFont} data-size="20" style="text-decoration:underline">20px</div>
    </div>
    <unit-liste @action=${onNavi} .state=${{ items }}></unit-liste>
  `

}