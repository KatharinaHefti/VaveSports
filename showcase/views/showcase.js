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
    <p>In body copy unit-link will be used for all "a" tags. If a link is placed before a punctuation mark please include it to the link.</p>
    <section class=row>
      <section class="positive">
      <section>
      This is a body text with a <unit-link id="link1" value="#" label="link."><!---->
        <a href="#"><!---->link<!----></a>
      ></unit-link>
    </section>
      </section>
      <section class=negative style=" color: white;">
        This is a body text with a&nbsp;<unit-link class="dark" .state=${ {
        id: "link2", value: "#", label: "link."
        }}></unit-link>
      </section>
    </section>

<!-- input-->
    <p>Unit-input</p>
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
    <p>Unit-textarea</p>
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
    <p>Unit-choice</p>
    <section class=row>
      <section class=positive>
        <unit-choice .state=${{
          "id": "symptom",
          "width": "7rem",
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
          <section>
            <unit-choice class="dark" .state=${{
              "id": "symptom",
              "width": "7rem",
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
    </section>

    <p>Unit-multi</p>
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
    <p>Unit-buttons "cancel" or "confirm" will appear after a user input.</p>
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
    <p>Unit-code</p>
    <section class=row>
      <section class=positive>
        <unit-code pattern="____"></unit-code>
      </section>
      <section class=negative>
        <unit-code class="dark" pattern="____"></unit-code>
      </section>
    </section>

<!-- slider -->
    <p>Unit-slider</p>
    <section class=row>
      <section class=positive>
        <unit-slider id="slider1" min="0" max="10" step="2" value="6"></unit-slider>
      </section>
      <section class=negative>
        <unit-slider class="dark" id="slider2" min="0" max="100" step="1" value="30"></unit-slider>
      </section>
    </section>

<!-- dropdown -->
    <p>Unit-dropdown</p>
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

<!-- bg -->


<i>Add CSS class "blue", "green", "orange" or "red" to achieve a different button color.</i>
<section style="display:flex;">
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link blue", value: "link", className: "blue link"
  }}></unit-button>
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link red", value: "link", className: "red link"
  }}></unit-button>
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link green", value: "link", className: "green link"
  }}></unit-button>
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link orange", value: "link", className: "orange link"
  }}></unit-button>
</section>

<section style="background-image: linear-gradient(#2B5779, #1C3659); display:flex;">
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link red", value: "link", className: "red link"
  }}></unit-button>
  <unit-button class="btn-pink" style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link green", value: "link", className: "green link"
  }}></unit-button>
  <unit-button style=padding-left:.5em .state=${{
    id: "link", href:"#", label: "Link new", value: "link", className: "orange link"
  }}></unit-button>
</section>
  </article>
  `
}