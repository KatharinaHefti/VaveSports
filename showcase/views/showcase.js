import './showcase.css'
import { html } from 'lit-html'
import store from '../data-store'
import 'view-base/type-poster'
import 'view-base/unit-link'

export function showcase() {

  // textarea
  // const state = store.getState().textarea || ""
  const state = store.getState().choice

  const state1 = { "value": "value", label: "Label", spellcheck: true, "chars": 100, "font-size": "1.4rem" }
  const state2 = { "value": "value", label: "You can also type here", badge: false }
  const state3 = { "value": "value", disabled: true, label: "Mirror above area" }
  const state4 = { "value": `Erste Zeil\nEin Satz zum Teilselektieren`, readonly: true }

  return html `
  <article class=showcase>
    <h1>Inventory</h1>

<!-- links-->
    <p>unit-link will be used in the Darktheme and the Footer.</p>
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

    <p>unit-link</p>
    <section class=row>
      <section class="positive" style="background-color: #696969; background: white;">
        This is a body text with a <unit-link class="dark" .state=${ {
        id: "link2", value: "#", label: "link"
        }}></unit-link>.
      </section>
      <section class=negative style=" color: white;">
        This is a body text with a <unit-link class="dark" .state=${ {
        id: "link2", value: "#", label: "link"
        }}></unit-link>.
      </section>
    </section>

<!-- text-area -->
    <p>unit-textarea</p>
    <section class=row>
      <section class=positive>
      <unit-input id="1" value="asdfasdfasdfasd" height="2.5em" type="text" placeholder="Placeholder" content="true"><!---->
      <section style="font-size: 1em; height: 2.5em;">

        <input spellcheck="false" type="text" value="asdfasdfasdfasd" placeholder="Placeholder" style="max-height: 2.5em;">


      </section>
    <!----></unit-input>

      </section>
      <section class=negative>
        <unit-textarea id="1" .state=${state1}></unit-textarea>
      </section>
    </section>

<!-- choice -->
    <p>unit-choice is used to single select</p>
    <section class=row>
      <section class=positive>
      <unit-choice .state=${{
        "id": "symptom",
        "item-width": "100px",
        'items': [
          { 'label': 'A', 'value': 'giemen' },
          { 'label': 'B', 'value': 'brummen' },
          { 'label': 'C', 'value': 'pfeifen' },
          { 'label': 'D', 'value': 'stridor' }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-choice>
      </section>

      <section class=negative>
      <unit-choice .state=${{
        "id": "symptom",
        "item-width": "100px",
        'items': [
          { 'label': 'A', 'value': 'giemen' },
          { 'label': 'B', 'value': 'brummen' },
          { 'label': 'C', 'value': 'pfeifen' },
          { 'label': 'D', 'value': 'stridor' }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-choice>
      </section>
    </section>

    <p>icons, multi:true, class: prodigy</p>
    <section class=row>
      <section class=positive>
      <unit-choice class=prodigy .state=${{
        "id": "symptom",
        "multi": true,
        'items': [
          { 'label': 'Giemen', 'value': 'giemen'},
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfdfn', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Stridor', 'value': 'stridor' }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-choice>
      </section>

      <section class=negative>
      <unit-choice class=prodigy .state=${{
        "id": "symptom",
        "multi": true,
        'items': [
          { 'label': 'Giemen', 'value': 'giemen'},
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfasdfasf', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Brummeasdfdfn', 'value': 'brummen'},
          { 'label': 'Pfeifen', 'value': 'pfeifen' },
          { 'label': 'Stridor', 'value': 'stridor' }
        ].map( item => {
          item.selected = state == item.value
          return item
        })
      }}></unit-choice>
      </section>
    </section>

<!-- buttons -->
    <p>Cancel or Confirm Buttons</p>
    <section class=row>
      <section class=positive>
      <unit-button .state=${{
        id: "link", href:"#", label: "cancel", value: "link", className: "link"
      }} ></unit-button>
      </section>
      <section class=negative>
      <unit-button style="Color:hotpink;" .state=${{
        id: "link", href:"#", label: "confirm", value: "link", className: "dark link"
      }}></unit-button>
      </section>
    </section>

<!-- Cards -->
    <p>Cards will be used only in the white theme to store all information in it. Links will be seperated by a line at the very bottom of each card.</p>
    <div class="Card">
      <div>
        <b>2 factor authentication</b>
        <p>You can change the display language to your preferred language at any time. The language setting changes the language used for menu options, button labels, and other elements of the site’s user interface.</p>
      </div>
      <div class="Circle"></div>
    </div>

<!-- modal -->
<p>Modal windows will appear to show more information like the contact page.</p>
<div class="Modal">
  <div>
    <h3 class="Lora">Kontakt</h3>
    <b>Address</b>
    <p>EPha.ch AG Stadelhoferstrasse 40 8001 Zurich Switzerland</p>
    <b>Email</b>
    <p>General questions:<a href="mailto:kontakt@epha.ch"> kontakt@epha.ch </a> Technical questions:<a href="mailto:support@epha.ch"> support@epha.ch </a></p>
    <b>location plan</b>
  </div>
  <svg class="Icon-Close" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><defs><style>.cls-1{fill:#707070;}</style></defs><title>close</title><path class="cls-1" d="M512.72,727l4.65-4.65a.5.5,0,0,0-.71-.71L512,726.32l-4.64-4.65a.51.51,0,0,0-.71,0,.5.5,0,0,0,0,.71l4.65,4.65-4.65,4.64a.5.5,0,0,0,0,.71.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15l4.64-4.65,4.65,4.65a.49.49,0,0,0,.35.15.51.51,0,0,0,.36-.15.51.51,0,0,0,0-.71Z" transform="translate(-506.51 -721.53)"/></svg>
</div>

<!-- gradient -->
    <p>The Gradient will be used in the Dialog.</p>
    <div class="Gradient"></div>
    <p>The Footer also have a Gradient with the same colors, but a bigger percentage of navy</p>
    <div class="Gradient-Footer"></div>
    <div class="Solid-Footer"></div>

<!-- colors -->
    <p>This is our Color Palette.
    <br>Don't use navy, steel or smoke in negative layouts because of low contrast.</p>
    <section class=row>
      <section class=positive>
        <div class="ColorBox" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBox" style="background-color:#2b5779;">steel #2b5779</div>
        <div class="ColorBox" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="ColorBox" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="ColorBox" style="background-color:#f8f8ff; color: black;">ghost #f8f8ff</div>
        <div class="ColorBoxNoGo" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
      <section class=negative>
        <div class="ColorBoxNoGo" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBoxNoGo" style="background-color:#2b5779;">steel #2b5779</div>
        <div class="ColorBox" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="ColorBoxNoGo" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="ColorBox" style="background-color:#f8f8ff; color: black;">ghost #f8f8ff</div>
        <div class="ColorBox" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
    </section>
  </article>
  `
}