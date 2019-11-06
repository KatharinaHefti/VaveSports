import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitNumbers from 'view-units/unit-numbers/'
import 'view-units/unit-md/'

export function numbers( state = 0 ) {
  return html `
    <article hidden=false>

      <h1>Element unit-numbers</h1>

      <h2>Examples</h2>
      <section style="padding-top:15px">
        <span>Atemfrequenz: </span>
        <unit-numbers pattern="__" .state=${{
          "id": "numbers1"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Herzfrequenz: </span>
        <unit-numbers pattern="___" .state=${{
          "id": "numbers2"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Temperatur: </span>
        <unit-numbers pattern="__._" .state=${{
          "id": "numbers3"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Systolischer Blutdruck: </span>
        <unit-numbers pattern="____.__" .state=${{
          "id": "numbers4"
        }}></unit-numbers>
      </section>

      <h2>Glass style</h2>
      <p>Add class ".glass" to element in order for the styles to be applied.</p>
      <section style="padding-top:15px">
        <span>Systolischer Blutdruck: </span>
        <unit-numbers pattern="____.__" class="glass" .state=${{
          "id": "numbers5"
        }}></unit-numbers>
      </section>
      <section style="padding-top:15px">
        <span>Telefonnummer: </span>
        <unit-numbers pattern="___-___-__-__" class="glass" .state=${{
          "id": "numbers6"
        }}></unit-numbers>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitNumbers.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}