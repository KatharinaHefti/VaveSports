import { html, render } from 'lit-html'

import unitSVG from 'view-units/unit-svg'
import 'view-units/unit-md'
import { icon } from 'view-types'

export function svg( state ) {

  const createIcon = ( src, idx ) => {
    const state = {
      width: "42px",
      padding: "10px",
      fill: "hsl(" + ( idx * 2 ) + ",50%,50%)",
      cursor: "pointer"
    }
    return html `<unit-svg src=${src} .state=${state}></unit-svg>`
  }

  return html `
    <article class=svg hidden="false">
      <h1>Element unit-svg</h1>
      <unit-md .state=${{raw:unitSVG.documentation}}></unit-md>
      <h3>icon from view-types with variable fill</h3>
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