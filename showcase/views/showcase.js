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

<!-- Cards -->
    <!-- <p>"Cards" will be used only in the white theme to store all information in it. Links will be seperated by a line at the very bottom of each card.</p>
    <div class="Card">
      <div>
        <b>2 factor authentication</b>
        <p>You can change the display language to your preferred language at any time. The language setting changes the language used for menu options, button labels, and other elements of the site’s user interface.</p>
      </div>
    <hr>
    <unit-link label="einrichten" class="negative prominent" style="margin-right:1em;"></unit-link>
    </div> -->

<!-- modal -->
<!-- <p>“Modal windows” will appear to show more information like the contact page.</p>
<div class="Modal">
  <div>
    <h3 class="Lora">Kontakt</h3>
    <b>Address</b>
    <p>EPha.ch AG Stadelhoferstrasse 40 8001 Zurich Switzerland</p>
    <b>Email</b>
    <p>General questions:<a href="mailto:kontakt@epha.ch"> kontakt@epha.ch </a> Technical questions:<a href="mailto:support@epha.ch"> support@epha.ch </a></p>
    <b>location plan</b>
    <div class="map"></div>
  </div>
  <svg class="Icon-Close" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><defs><style>.cls-1{fill:#707070;}</style></defs><title>close</title><path class="cls-1" d="M512.72,727l4.65-4.65a.5.5,0,0,0-.71-.71L512,726.32l-4.64-4.65a.51.51,0,0,0-.71,0,.5.5,0,0,0,0,.71l4.65,4.65-4.65,4.64a.5.5,0,0,0,0,.71.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15l4.64-4.65,4.65,4.65a.49.49,0,0,0,.35.15.51.51,0,0,0,.36-.15.51.51,0,0,0,0-.71Z" transform="translate(-506.51 -721.53)"/></svg>
</div> -->

<!-- gradient -->
    <!-- <p>The gradient will be used in the “dialog”.</p>
    <div class="Gradient"></div>
    <p>The footer also have a gradient with the same colors, but a bigger percentage of navy</p>
    <div class="Gradient-Footer"></div>
    <div class="Solid-Footer"></div> -->

<!-- colors -->
    <!-- <p>Color palette</p>
    <section class=row>
      <section class=positive style=display:flex;flex-wrap:wrap;>
        <div class="color-box" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="color-box" style="background-color:#2B5779;">steel #2B5779</div>
        <div class="color-box" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="color-box" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="color-box" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="color-box" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="color-box" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="color-box" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="color-box" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="color-box" style="background-color:#696969;">smoke #696969</div>
        <div class="color-box" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="color-box" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
      <section class=negative style=display:flex;flex-wrap:wrap;>
        <div class="color-box" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="color-box" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="color-box" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="color-box" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="color-box" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="color-box" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="color-box" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="color-box" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="color-box" style="background-color:#F8F8FF; color: black;">ghost #F8F8FF</div>
        <div class="color-box" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
    </section> -->
  </article>
  `
}