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

<!-- action button-->
    <b>Action button</b>
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
    <b>unit-textarea</b>
    <p>limited Input field (max. 100 characters)</p>
    <section class=row>
      <section class=positive>
        <unit-textarea id="1" .state=${state1}></unit-textarea>
      </section>
      <section class=negative>
        <unit-textarea id="1" .state=${state1}></unit-textarea>
      </section>
    </section>

    <p>unlimited Input Field</p>
    <section class=row>
      <section class=positive>
        <unit-textarea id="2" .state=${state2}></unit-textarea>
      </section>
      <section class=negative>
        <unit-textarea id="2" .state=${state2}></unit-textarea>
      </section>
    </section>

    <p>mirror Input Field</p>
    <section class=row>
      <section class=positive>
        <unit-textarea id="3" .state=${state3}></unit-textarea>
      </section>
      <section class=negative>
        <unit-textarea id="3" .state=${state3}></unit-textarea>
      </section>
    </section>

    <p>readonly Field</p>
    <section class=row>
      <section class=positive>
        <unit-textarea id="3" .state=${state4}></unit-textarea>
      </section>
      <section class=negative>
        <unit-textarea id="3w" .state=${state4}></unit-textarea>
      </section>
    </section>

<!-- choice -->
    <b>unit-choice</b>
    <p>icons, item-width: 200px</p>

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


    <p>Link Buttons</p>
    <section class=row>
      <section class=positive>
      <unit-button .state=${{
        id: "link", href:"#", label: "Link Button", value: "link", className: "blue link"
      }}></unit-button>
      </section>
      <section class=negative>
      <unit-button .state=${{
        id: "link", href:"#", label: "Link Button", value: "link", className: "blue link"
      }}></unit-button>
      </section>
    </section>

    <p>Abort Buttons</p>
    <section class=row>
      <section class=positive>
      <unit-button .state=${{
        id: "link", href:"#", label: "Abort Button", value: "link", className: "link"
      }} ></unit-button>
      </section>
      <section class=negative>
      <unit-button style="Color:hotpink;" .state=${{
        id: "link", href:"#", label: "Abort Button", value: "link", className: "dark link"
      }}></unit-button>
      </section>
    </section>

<!-- colors -->
    <b>Colors</b>
    <p>This is our Color Palete.
    <br>Don't use navy or smoke in negative layouts because of low contrast.</p>
    <section class=row>
      <section class=positive>
        <div class="ColorBox" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBox" style="background-color:#6CBCFF;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E;">flamingo #F7679E</div>
        <div class="ColorBox" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5;">silver #B5B5B5</div>
        <div class="ColorBox" style="background-color:#EEEAEF;">snow #EEEAEF</div>
      </section>
      <section class=negative>
        <div class="ColorBoxNoGo" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBox" style="background-color:#6CBCFF;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E;">flamingo #F7679E</div>
        <div class="ColorBoxNoGo" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5;">silver #B5B5B5</div>
        <div class="ColorBox" style="background-color:#EEEAEF;">snow #EEEAEF</div>
      </section>
    </section>

  </article>
  `
}