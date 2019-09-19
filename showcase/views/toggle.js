import { html, render } from 'lit-html'
import Unit from 'view-units/unit-toggle/'

export function toggle( state = "" ) {

  return html `
    <article class="toggle" hidden="false">

      <h1>Toggle</h1>

    </article>

  `
}