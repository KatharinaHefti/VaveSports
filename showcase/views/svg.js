import { html, render } from 'lit-html'

import unitSVG from 'view-units/unit-svg/'
import 'view-units/unit-md/'
import { icon, team } from 'view-types'

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

  const createTeam = ( src ) => {
    const state = {
      width: "100px",
      height: "40px",
      distort: true,
      padding: "10px"
    }
    return html `<unit-svg src=${src} .state=${state}></unit-svg>`
  }



  return html `
    <article class=svg hidden="false">
      <h1>Element unit-svg</h1>

      <h2>Examples</h2>

      <h3>Folder Icon from view-types</h3>
      <p>Click on the icons to see the reference of the file name.</p>
      <section style="border: .5rem solid #ccc;border-radius:.5rem;">
        ${ Object.values(icon).map(createIcon) }
        <span>Baseline Text</span>
      </section>
      <p>${state}</p>

      <h3>Folder Team from view-types</h3>
      <section style="border: .5rem solid #ccc;border-radius:.5rem;">
        ${ Object.values(team).map(createTeam) }
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{raw:unitSVG.signature}}></unit-md>

    </article>
    `
}