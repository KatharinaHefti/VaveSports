import "./showcase.css"
import { html } from "lit-html"
import store from "../data-store"
import "view-base/type-poster"
import "view-base/unit-link"

export function showcase() {

  const state = store.getState()

  return html `
  <article class=showcase>
    <h1>Inventory</h1>

<!-- links-->
    <section class=row>
      <section class="positive">
      <section>
      This is a body text with a <unit-link id="link1" value="#" label="link."><!---->
        <a href="#"><!---->link<!----></a></unit-link>
    </section>
      </section>
      <section class=negative style=" color: white;">
        This is a body text with a&nbsp;<unit-link class="dark" .state=${ {
        id: "link2", value: "#", label: "link."
        }}></unit-link>
      </section>
    </section>

<!-- input-->
    <section class=row>
      <section class=positive>
        <unit-input id="2" value="" label="Name" type="text" placeholder="Placeholder" content="false"><!---->
          <section style="font-size: 1em; height: 2.5em;">
            <input spellcheck="false" type="text" value="" placeholder="Placeholder" style="">
            <label class=""><!---->Name<!----></label>
          </section>
        </unit-input>
      </section>
      <section class=negative>
        <unit-input class="dark" id="dark" value="" label="Name" type="text" placeholder="Placeholder" content="false"><!---->
          <section style="font-size: 1em; height: 2.5em;">
          <input spellcheck="false" type="text" value="" placeholder="Placeholder" style="">
          <label class=""><!---->Name<!----></label>
          </section>
        </unit-input>
      </section>
    </section>

<!-- text-area -->
    <section class=row>
      <section class=positive>
      <unit-textarea value="value" id="1" label="Textarea" spellcheck="true" placeholder="Placeholder" content="true"><!---->
        <section style="height: 190px;">
          <textarea autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" spellcheck="true" style="font-size: 1.4rem; line-height: 1.4; height: 150px;"></textarea>
          <label class="badge"><!---->Label<!----></label>
          <span class="remain">Zeichen: 100 / 100<!----></span>
        </section>
      </unit-textarea>
      </section>
      <section class=negative>
        <unit-textarea class="dark" id="5" label="Textarea" placeholder="Placeholder" content="false"><!---->
        <section>
          <textarea autocomplete="off" autocorrect="off" autocapitalize="off" placeholder="Placeholder" spellcheck="false" style="font-size: 1rem; line-height: 1.4; height: 112px;"></textarea>
          <label class="nobadge"><!---->You can also type here<!----></label>
        </section>
        </unit-textarea>
      </section>
    </section>

<!-- choice -->
    <section class=row>
      <section class=positive>
        <unit-choice .state=${{
          "id": "symptom",
          "items": [
            { "label": "yes", "value": "a" },
            { "label": "maybe", "value": "b" },
            { "label": "no", "value": "c" }
          ].map( item => {
            item.selected = state == item.value
            return item
          })
        }}></unit-choice>
      </section>
        <section class=negative>
            <unit-choice class="dark" .state=${{
              "id": "symptom",
              "items": [
                { "label": "yes", "value": "a" },
                { "label": "maybe", "value": "b" },
                { "label": "no", "value": "c" }
              ].map( item => {
                item.selected = state == item.value
                return item
              })
            }}></unit-choice>
      </section>
    </section>

    <section class=row>
      <section class=positive style=padding:0;flex-wrap:wrap>
        <h1 style="padding-left:.5rem;font-weight:200;font-size:2rem;line-height:3rem;margin:1em 0">Meine Frage wäre</h1>
        <unit-multi .state=${{
          "id": "symptom",
          "width": "150px",
          "items": [
            { "label": "Giemen", "value": "giemen"},
            { "label": "Auskultation der Lunge", "value": "auskult"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Auskultation der Lunge", "value": "auskult"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Brummen", "value": "brummen"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Brummen", "value": "brummen"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Stridor", "value": "stridor" }
          ].map( item => {
            item.selected = state == item.value
            return item
          })
        }}></unit-multi>
      </section>

      <section class=negative style=padding:0;flex-wrap:wrap>
        <h1 style="color:white;padding-left:.5rem;font-weight:200;font-size:2rem;line-height:3rem;margin:1em 0">Meine Frage wäre</h1>
        <unit-multi class="dark" .state=${{
          "id": "symptom",
          "width": "150px",
          "items": [
            { "label": "Giemen", "value": "giemen"},
            { "label": "Auskultation der Lunge", "value": "auskult"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Auskultation der Lunge", "value": "auskult"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Brummen", "value": "brummen"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Brummen", "value": "brummen"},
            { "label": "Pfeifen", "value": "pfeifen" },
            { "label": "Stridor", "value": "stridor" }
          ].map( item => {
            item.selected = state == item.value
            return item
          })
        }}></unit-multi>
      </section>
    </section>

<!-- buttons -->
    <section class=row>
      <section class=positive>
      <unit-button .state=${{
        id: "link", href:"#", label: "cancel", value: "link", className: "link"
      }} ></unit-button>
      </section>
      <section class=negative>
      <unit-button style="color:hotpink;" .state=${{
        id: "link", href:"#", label: "confirm", value: "link", className: "dark link"
      }}></unit-button>
      </section>
    </section>

<!-- code -->
    <section class=row>
      <section class=positive>
        <unit-code pattern="____"></unit-code>
      </section>
      <section class=negative>
        <unit-code class="dark" pattern="____"></unit-code>
      </section>
    </section>

<!-- slider -->
    <section class=row>
      <section class=positive>
        <unit-slider id="slider1" min="0" max="10" step="2" value="6"></unit-slider>
      </section>
      <section class=negative>
        <unit-slider class="dark" id="slider2" min="0" max="100" step="1" value="30"></unit-slider>
      </section>
    </section>

<!-- dropdown -->
    <section class=row>
      <section class=positive>
        <unit-dropdown .state=${{
          "placeholder": "Select option",
          "name": "options",
          "items": [ {
              "id": "one",
              "value": "one",
              "label": "Option one"
            },
            {
              "id": "two",
              "value": "two",
              "label": "Option two"
            },
            {
              "id": "three",
              "value": "three",
              "label": "Option three"
            }
          ].map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>
      <section class=negative>
        <unit-dropdown class="dark" .state=${{
          "placeholder": "Select option",
          "background-color": "#074880",
          "name": "optionsdark",
          "items": [ {
              "id": "eins",
              "value": "1",
              "label": "Option one"
            },
            {
              "id": "zwei",
              "value": "2",
              "label": "Option two"
            },
            {
              "id": "drei",
              "value": "3",
              "label": "Option three"
            }
          ].map(item => {
            return { ...item }
          })
        }}></unit-dropdown>
      </section>
    </section>

<!-- unit-numbers -->
    <section class=row>
      <section class=positive>
        <unit-numbers .state=${{
          "id": "numbers1",
          "label": "Temperatur",
          "placeholder": "0",
          "min": "35",
          "max": "45",
          "step": "0.1"
        }}></unit-numbers>
      </section>

      <section class=negative>
        <unit-numbers class=dark .state=${{
          "id": "numbers2",
          "label": "Temperatur",
          "placeholder": "0",
          "min": "35",
          "max": "45",
          "step": "0.1"
        }}></unit-numbers>
      </section>
    </section>

<!-- unit-date -->
    <section class=row>
      <section class=positive>
        <unit-date .state=${{
          "id": "date1",
          "label": "Datum",
          "placeholder": "dd.mm.yyyy",
          "type": "date"
        }}></unit-date>
      </section>

      <section class=negative>
        <unit-date class="dark" .state=${{
          "id": "date2",
          "label": "Datum",
          "placeholder": "dd.mm.yyyy",
          "type": "date"
        }}></unit-date>
      </section>
    </section>

<!-- button colors -->
    <section class=row>
      <section class=positive style=flex-wrap:wrap>
        <unit-button .state=${{
          id: "link", href:"#", label: "Link blue", value: "link", className: "blue link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Link pink", value: "link", className: "pink link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Link green", value: "link", className: "green link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Link orange", value: "link", className: "orange link"
        }}></unit-button>
      </section>

      <section class=negative style=flex-wrap:wrap>
      <unit-button .state=${{
        id: "link", href:"#", label: "Dark blue", value: "link", className: "dark blue link"
      }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Dark pink", value: "link", className: "dark pink link"
        }}></unit-button>
        <unit-button class="btn-pink" style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Dark green", value: "link", className: "dark green link"
        }}></unit-button>
        <unit-button style=padding-left:.5em .state=${{
          id: "link", href:"#", label: "Dark orange", value: "link", className: "dark orange link"
        }}></unit-button>
      </section>
    </section>

  </article>
  `
}