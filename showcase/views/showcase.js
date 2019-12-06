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
    <p>“Unit-link” will be used in the Darktheme only for example the Footer. Multiple links are divided by an interpunct with 1em margin.</p>
    <section class=row>
      <section class=empty>
      </section>
      <section class=negative>
        <unit-link label="Abbrechen" class="negative prominent" style="margin-right:1em;"></unit-link>
        <p style="color: #fafafa;">&#183</p>
        <unit-link label="Speichern" class="negative prominent green" style="margin-left:1em;"></unit-link>
      </section>
    </section>

    <p>In body copy “unit-link” will be used for all a tags. If a link is placed before a punctuation mark please include it to the link!</p>
    <section class=row>
      <section class="positive" style="background-color: #696969; background: white;">
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
    <p>“unit-input” for all user input.</p>
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
    <p>“unit-textarea” will be used for long user inputs.</p>
    <section class=row>
      <section class=positive>
      <unit-textarea id="1" label="Textarea" spellcheck="true" placeholder="Placeholder" content="true"><!---->
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
    <p>“unit-choice” will be used to single select.</p>
    <section class=row>
      <section class=positive>
        <unit-choice id="symptom"><!---->
          <section style="font-size: 1.1rem; flex-wrap: nowrap;">
          <div class="item" data-value="giemen" style="width: 100px;">
            <span class="main"><!---->A<!----></span>
          </div>
          <div class="item" data-value="brummen" style="width: 100px;">
            <span class="main"><!---->B<!----></span>
          </div>
          <div class="item" data-value="pfeifen" style="width: 100px;">
            <span class="main"><!---->C<!----></span>
          </div>
          <div class="item" data-value="stridor" style="width: 100px;">
            <span class="main"><!---->D<!----></span>
          </div>
        </section>
        </unit-choice>
      </section>
        <section class=negative>
        <section style="background-image: linear-gradient(#2B5779, #1C3659); padding: 10px; box-sizing: border-box">
        <unit-choice class="dark" id="symptom"><!---->
          <section style="font-size: 1.1rem; flex-wrap: nowrap;">
            <div class="item" data-value="giemen" style="width: 100px;">
              <span class="main"><!---->A<!----></span>
            </div>
            <div class="item" data-value="brummen" style="width: 100px;">
              <span class="main"><!---->B<!----></span>
            </div>
            <div class="item" data-value="pfeifen" style="width: 100px;">
              <span class="main"><!---->C<!----></span>
            </div>
            <div class="item" data-value="stridor" style="width: 100px;">
              <span class="main"><!---->D<!----></span>
            </div>
      </section><!----></unit-choice>
    </section>
      </section>
    </section>

    <p>“unit choice” will be used as multiselect.</p>
    <section class=row>
      <section class=positive>
      <unit-choice class="multiselect" id="symptom"><!---->
      <section multi="" style="font-size: 1.1rem; flex-wrap: wrap;">
            <div class="item" data-value="giemen" style="">
              <span class="main"><!---->Option A<!----></span>
            </div>
            <div class="item" data-value="brummen" style="">
              <span class="main"><!---->Option B<!----></span>
            </div>
            <div class="item" data-value="pfeifen" style="">
              <span class="main"><!---->Option C<!----></span>
            </div>
            <div class="item" data-value="brummen" style="">
              <span class="main"><!---->Option D<!----></span>
            </div>
            <div class="item" data-value="pfeifen" style="">
              <span class="main"><!---->Option E<!----></span>
            </div>
            <div class="item" data-value="brummen" style="">
              <span class="main"><!---->Option F<!----></span>
            </div>
            <div class="item" data-value="pfeifen" style="">
              <span class="main"><!---->Option G<!----></span>
            </div>
            <div class="item" data-value="brummen" style="">
              <span class="main"><!---->Option H<!----></span>
            </div>
            <div class="item" data-value="pfeifen" style="">
              <span class="main"><!---->Option I<!----></span>
            </div>
            <div class="item" data-value="stridor" style="">
              <span class="main"><!---->Option J<!----></span>
            </div>
      </section><!----></unit-choice>
      </section>

      <section class=negative>
      <section style="background-image: linear-gradient(#2B5779, #1C3659)">
            <unit-choice class="multiselect dark" id="symptom"><!---->
            <section multi="" style="font-size: 1.1rem; flex-wrap: wrap;">
                  <div class="item" data-value="giemen" style="">
                    <span class="main"><!---->Option A<!----></span>
                  </div>
                  <div class="item" data-value="brummen" style="" selected="">
                    <span class="main"><!---->Option B<!----></span>
                  </div>
                  <div class="item" data-value="pfeifen" style="">
                    <span class="main"><!---->Option C<!----></span>
                  </div>
                  <div class="item" data-value="brummen" style="" selected="">
                    <span class="main"><!---->Option D<!----></span>
                  </div>
                  <div class="item" data-value="pfeifen" style="">
                    <span class="main"><!---->Option E<!----></span>
                  </div>
                  <div class="item" data-value="brummen" style="" selected="">
                    <span class="main"><!---->Option F<!----></span>
                  </div>
                  <div class="item" data-value="pfeifen" style="">
                    <span class="main"><!---->Option G<!----></span>
                  </div>
                  <div class="item" data-value="brummen" style="" selected="">
                    <span class="main"><!---->Option H<!----></span>
                  </div>
                  <div class="item" data-value="pfeifen" style="">
                    <span class="main"><!---->Option I<!----></span>
                  </div>
                  <div class="item" data-value="stridor" style="">
                    <span class="main"><!---->Option J<!----></span>
                  </div>
            </section><!----></unit-choice>
          </section>
      </section>
    </section>

<!-- buttons -->
    <p>Cancel or Confirm “Buttons” appear after a user input.</p>
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
    <p>“Cards” will be used only in the white theme to store all information in it. Links will be seperated by a line at the very bottom of each card.</p>
    <div class="Card">
      <div>
        <b>2 factor authentication</b>
        <p>You can change the display language to your preferred language at any time. The language setting changes the language used for menu options, button labels, and other elements of the site’s user interface.</p>
      </div>
    <hr>
    <unit-link label="einrichten" class="negative prominent" style="margin-right:1em;"></unit-link>
    </div>

<!-- modal -->
<p>“Modal windows will appear to show more information like the contact page.</p>
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
</div>

<!-- gradient -->
    <p>The Gradient will be used in the “Dialog”.</p>
    <div class="Gradient"></div>
    <p>The Footer also have a Gradient with the same colors, but a bigger percentage of navy</p>
    <div class="Gradient-Footer"></div>
    <div class="Solid-Footer"></div>

<!-- colors -->
    <p>This is our “Color Palette”.
    <br>Don't use navy, steel or smoke in negative layouts because of low contrast.
    <br>You also can see what font color to use on what Hue for best Accessibility.
    </p>
    <section class=row>
      <section class=positive>
        <div class="ColorBox" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBox" style="background-color:#2B5779;">steel #2B5779</div>
        <div class="ColorBox" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="ColorBox" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="ColorBoxNoGo" style="background-color:#F8F8FF; color: black;">ghost #F8F8FF</div>
        <div class="ColorBox" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
      <section class=negative>
        <div class="ColorBoxNoGo" style="background-color:#1C3659;">navy #1C3659</div>
        <div class="ColorBoxNoGo" style="background-color:#2B5779;">steel #2B5779</div>
        <div class="ColorBox" style="background-color:#6CBCFF; color: black;">sky #6CBCFF</div>
        <div class="ColorBox" style="background-color:#9DF6FA; color: black;">ice #9DF6FA</div>
        <div class="ColorBox" style="background-color:#3EB147; color: black;">kelly #3EB147</div>
        <div class="ColorBox" style="background-color:#FFCB4E; color: black;">sun #FFCB4E</div>
        <div class="ColorBox" style="background-color:#FE8374; color: black;">coral #FE8374</div>
        <div class="ColorBox" style="background-color:#8C51ED;">lavender #8C51ED</div>
        <div class="ColorBox" style="background-color:#F7679E; color: black;">flamingo #F7679E</div>
        <div class="ColorBoxNoGo" style="background-color:#696969;">smoke #696969</div>
        <div class="ColorBox" style="background-color:#B5B5B5; color: black;">silver #B5B5B5</div>
        <div class="ColorBox" style="background-color:#F8F8FF; color: black;">ghost #F8F8FF</div>
        <div class="ColorBox" style="background-color:#EEEAEF; color: black;">snow #EEEAEF</div>
      </section>
    </section>
  </article>
  `
}
