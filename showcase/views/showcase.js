import './showcase.css'
import { html } from 'lit-html'
import 'view-base/type-poster'
import 'view-base/unit-link'

export function showcase() {

  return html `
  <article class=showcase>
    <h1>Inventory</h1>

<!-- action button-->
    <h2>unit-link</h2>
    <p>Usually appears at the end of popup input.</p>
    <section class=row>
      <section class=positive>
        <unit-link label="Abbrechen" style="margin-right:1rem;"></unit-link>
        <unit-link label="Speichern" class="green"></unit-link>
      </section>
      <section class=negative>
        <unit-link label="Abbrechen" class="dark" style="margin-right:1rem;"></unit-link>
        <unit-link label="Speichern" class="green"></unit-link>
      </section>
    </section>

    <h2>unit-button</h2>
    <section class=row>
      <section class=positive style="display:block">
        <h2 style="border:none;margin-left:1rem">Was ist los?</h2>
        <unit-button label="Option 1" style="margin-left:1rem;"></unit-button>
        <unit-button label="Option 2" style="margin-left:1rem;"></unit-button>
        <unit-button label="Option 3" style="margin-left:1rem;"></unit-button>
      </section>
      <section class=negative style="display:block">
      <h2 style="border:none;color:white;margin-left:1rem">Was ist los?</h2>
        <unit-button label="Option 1" class="dark" style="margin-left:1rem;"></unit-button>
        <unit-button label="Option 2" class="dark" style="margin-left:1rem;"></unit-button>
        <unit-button label="Option 3" class="dark" style="margin-left:1rem;"></unit-button>
      </section>
    </section>

<!-- text-area -->

<!-- choice -->

<!-- buttons -->

<!-- colors -->

  </article>
  `
}