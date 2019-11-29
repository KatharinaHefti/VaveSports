import './showcase.css'
import { html } from 'lit-html'
import 'view-base/type-poster'
import 'view-base/unit-link'

export function showcase() {

  return html `
  <article class=showcase>
    <h1>Inventory</h1>

<!-- action button-->
    <h2>Action button</h2>
    <p>Usually appears at the end of popup input.</p>
    <section class=row>
      <section class=positive>
        <unit-link label="Abbrechen" class="prominent" style="margin-right:1rem;"></unit-link>
        <unit-link label="Speichern" class="prominent green"></unit-link>
      </section>
      <section class=negative>
        <unit-link label="Abbrechen" class="negative prominent" style="margin-right:1rem;"></unit-link>
        <unit-link label="Speichern" class="negative prominent green"></unit-link>
      </section>
    </section>

<!-- text-area -->

<!-- choice -->

<!-- buttons -->

<!-- colors -->

  </article>
  `
}