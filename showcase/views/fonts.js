import { html, render } from 'lit-html'

// Layz import units
import unitButton from 'view-units/unit-button/'

export function fontcombos( state = "" ) {

  return html `
    <article class="fontcombos" hidden="false">

      <h1>Font combinations</h1>

      <div class="lora">
        <h1>"Lora" header and text</h1>
        <h2>This is a smaller header</h2>

        <p>Dosierungen werden nur für die jeweilige Verordnungszeile überprüft. Die maximale Tagesdosis kann bei Doppelverordnungen überschritten sein, obwohl die einzelne Verordnung korrekt (Grad A) ist.
        Doppelverordnungen werden in der Kalenderübersicht sowie in Spielwiese und Verordnung <b>orange</b> markiert.</p>
        <p>Die Empfehlungen zur maximalen Dosierung und zur Anpassung bei Niereninsuffizienz gelten nur für Erwachsene (ab 18 Jahre) und für die Erhaltungsdosis.</p>

        <p>ä, Ä, ö, Ö, ü, Ü, @</p>

        <section style="display:flex;align-items:center;flex-wrap:nowrap;">
          <unit-button label="This is a button label" value="A button label"></unit-button>

        </section>
      <div>
      <hr/>

      <div class="ssp">
        <h1>"Source Serif Pro" header and text</h1>
        <h2>This is a smaller header</h2>

        <p>Dosierungen werden nur für die jeweilige Verordnungszeile überprüft. Die maximale Tagesdosis kann bei Doppelverordnungen überschritten sein, obwohl die einzelne Verordnung korrekt (Grad A) ist.
        Doppelverordnungen werden in der Kalenderübersicht sowie in Spielwiese und Verordnung <b>orange</b> markiert.</p>
        <p>Die Empfehlungen zur maximalen Dosierung und zur Anpassung bei Niereninsuffizienz gelten nur für Erwachsene (ab 18 Jahre) und für die Erhaltungsdosis.</p>

        <p>ä, Ä, ö, Ö, ü, Ü, @</p>

        <section style="display:flex;align-items:center;flex-wrap:nowrap;">
        <unit-button label="This is a button label" value="A button label"></unit-button>

        </section>
      <div>
      <hr/>

      <div class="lora-opensans">
        <h1>"Lora" header and "Open Sans" text</h1>
        <h2>This is a smaller header</h2>

        <p>Dosierungen werden nur für die jeweilige Verordnungszeile überprüft. Die maximale Tagesdosis kann bei Doppelverordnungen überschritten sein, obwohl die einzelne Verordnung korrekt (Grad A) ist.
        Doppelverordnungen werden in der Kalenderübersicht sowie in Spielwiese und Verordnung <b>orange</b> markiert.</p>
        <p>Die Empfehlungen zur maximalen Dosierung und zur Anpassung bei Niereninsuffizienz gelten nur für Erwachsene (ab 18 Jahre) und für die Erhaltungsdosis.</p>

        <p>ä, Ä, ö, Ö, ü, Ü, @</p>

        <section style="display:flex;align-items:center;flex-wrap:nowrap;">

        <unit-button label="This is a button label" value="A button label"></unit-button>

        </section>
      <div>
      <hr/>

      <div class="ssp-opensans">
        <h1>"Source Serif Pro" header and "Open Sans" text</h1>
        <h2>This is a smaller header</h2>

        <p>Dosierungen werden nur für die jeweilige Verordnungszeile überprüft. Die maximale Tagesdosis kann bei Doppelverordnungen überschritten sein, obwohl die einzelne Verordnung korrekt (Grad A) ist.
        Doppelverordnungen werden in der Kalenderübersicht sowie in Spielwiese und Verordnung <b>orange</b> markiert.</p>
        <p>Die Empfehlungen zur maximalen Dosierung und zur Anpassung bei Niereninsuffizienz gelten nur für Erwachsene (ab 18 Jahre) und für die Erhaltungsdosis.</p>

        <p>ä, Ä, ö, Ö, ü, Ü, @</p>

        <section style="display:flex;align-items:center;flex-wrap:nowrap;">

        <unit-button label="This is a button label" value="A button label"></unit-button>

        </section>
      <div>
    </article>
  `

}