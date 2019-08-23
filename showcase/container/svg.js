import { html, render } from 'lit-html'

import 'view-units/unit-svg'
import { icon } from 'view-types'

export function svg( state ) {

  const createIcon = ( src, idx ) => {
    const state = {
      width: "42px",
      padding: "10px",
      background: "hsl(" + ( idx * 2 ) + ",50%,50%)",
      fill: "#ccc",
      stroke: "black",
      cursor: "pointer"
    }
    return html `<unit-svg src=${src} .state=${state}></unit-svg>`
  }

  return html `
    <article class=svg hidden="false">
      <h1>Element unit-svg</h1>
      <h3>with folder icon from view-types</h3>
      <section>
        ${
          Object.values(icon).map(createIcon)
        }
        <span>Baseline Text</span>
      </section>
      <h3>${state}</h3>
    </article>
    `
}