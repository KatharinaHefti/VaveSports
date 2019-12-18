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
<p>SVG animations</p>
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 1280 337" style="enable-background:new 0 0 1280 337;" xml:space="preserve">
<style type="text/css">
  .st0{clip-path:url(#SVGID_2_);fill:url(#SVGID_3_);}
  .st1{opacity:0.1;}
  .st2{fill:#2B5779;}
  .st3{opacity:0.2;fill:#6CBCFF;}
  .st4{opacity:0.3;}
  .st5{opacity:0.4;}
  .st6{opacity:0.5;}
  .st7{opacity:0.6;}
  .st8{opacity:0.7;}
  .st9{opacity:0.8;}
  .st10{opacity:0.9;fill:#6CBCFF;}
  .st11{fill:#6CBCFF;}
  .st12{opacity:0.2;}
  .st13{opacity:0.2;fill:#FFFFFF;}
  .st14{opacity:0.1;fill:#FFFFFF;}
  .st15{opacity:0.3;fill:#FFFFFF;}
  .st16{opacity:0.4;fill:#FFFFFF;}
  .st17{opacity:0.5;fill:#FFFFFF;}
  .st18{opacity:0.6;fill:#FFFFFF;}
  .st19{opacity:0.7;fill:#FFFFFF;}
  .st20{opacity:0.8;fill:#FFFFFF;}
  .st21{opacity:0.9;fill:#FFFFFF;}
  .st22{fill:#FFFFFF;}
  .st23{opacity:0.5;fill:#6CBCFF;}
  .st24{opacity:0.9;}
  .st25{opacity:0.3;fill:#6CBCFF;}
  .st26{fill:none;stroke:url(#SVGID_4_);stroke-miterlimit:10;}
  .st27{fill:none;stroke:url(#SVGID_5_);stroke-miterlimit:10;}
  .st28{fill:none;stroke:url(#SVGID_6_);stroke-miterlimit:10;}
  .st29{fill:none;stroke:url(#SVGID_7_);stroke-miterlimit:10;}
</style>
<g id="Layer_1">
  <g>
    <defs>
      <rect id="SVGID_1_" x="1" y="0.25" width="1281" height="337"/>
    </defs>
    <clipPath id="SVGID_2_">
      <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
    </clipPath>
    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="641.5" y1="0.25" x2="641.5" y2="337.25">
      <stop  offset="0" style="stop-color:#2B5779"/>
      <stop  offset="1" style="stop-color:#1C3659"/>
    </linearGradient>
    <rect x="1" y="0.25" class="st0" width="1281" height="337"/>
  </g>
  <g class="st1">
    <path class="st2" d="M447,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S463.57,138.75,447,138.75z M447,188.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S458.14,188.93,447,188.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <path class="st3" d="M517,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S533.57,138.75,517,138.75z M517,183.75
    c-8.28,0-15-6.72-15-15s6.72-15,15-15c8.28,0,15,6.72,15,15S525.28,183.75,517,183.75z"/>
  <g class="st4">
    <path class="st2" d="M587,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S603.57,138.75,587,138.75z M587,193.75
      c-13.81,0-25-11.19-25-25s11.19-25,25-25s25,11.19,25,25S600.81,193.75,587,193.75z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st5">
    <path class="st2" d="M657,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S673.57,138.75,657,138.75z M657,188.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S668.14,188.93,657,188.93z"/>
      <animate attributeName="opacity"
          values="0.2;1;0.2" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st6">
    <path class="st2" d="M727,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S743.57,138.75,727,138.75z M727,190.75
      c-12.15,0-22-9.85-22-22s9.85-22,22-22s22,9.85,22,22S739.15,190.75,727,190.75z"/>
      <animate attributeName="opacity"
          values="0.4;1;0.4" dur="4s"
          repeatCount="indefinite"/>
  </g>
  <g class="st7">
    <path class="st2" d="M797,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S813.57,138.75,797,138.75z M797,188.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S808.14,188.93,797,188.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st8">
    <path class="st2" d="M867,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S883.57,138.75,867,138.75z M867,188.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S878.14,188.93,867,188.93z"/>
      <animate attributeName="opacity"
          values="0.2;1;0.2" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st9">
    <path class="st2" d="M937,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S953.57,138.75,937,138.75z M937,183.75
      c-8.28,0-15-6.72-15-15s6.72-15,15-15s15,6.72,15,15S945.28,183.75,937,183.75z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <path class="st10" d="M1007,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1023.57,138.75,1007,138.75z
     M1007,193.75c-13.81,0-25-11.19-25-25s11.19-25,25-25s25,11.19,25,25S1020.81,193.75,1007,193.75z"/>
  <path class="st11" d="M1077,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1093.57,138.75,1077,138.75z
     M1077,188.93c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S1088.14,188.93,1077,188.93z"/>
  <g>
    <path class="st2" d="M1147,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1163.57,138.75,1147,138.75z
       M1147,190.75c-12.15,0-22-9.85-22-22s9.85-22,22-22s22,9.85,22,22S1159.15,190.75,1147,190.75z"/>
       <animate attributeName="opacity"
           values="0.2;1;0.2" dur="4s"
           repeatCount="indefinite"/>
  </g>
  <g class="st12">
    <path class="st2" d="M1217,138.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1233.57,138.75,1217,138.75z
       M1217,188.93c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S1228.14,188.93,1217,188.93z"/>
       <animate attributeName="opacity"
           values="0;1;0" dur="3s"
           repeatCount="indefinite"/>
  </g>
  <path class="st13" d="M517.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C512.83,166.3,514.8,164.35,517.22,164.36z"/>
  <path class="st14" d="M447.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C442.83,166.3,444.8,164.35,447.22,164.36z"/>
  <path class="st15" d="M587.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C582.83,166.3,584.8,164.35,587.22,164.36z"/>
  <path class="st16" d="M657.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C652.83,166.3,654.8,164.35,657.22,164.36z"/>
  <path class="st17" d="M727.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C722.83,166.3,724.8,164.35,727.22,164.36z"/>
  <path class="st18" d="M797.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C792.83,166.3,794.8,164.35,797.22,164.36z"/>
  <path class="st19" d="M867.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C862.83,166.3,864.8,164.35,867.22,164.36z"/>
  <path class="st20" d="M937.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C932.83,166.3,934.8,164.35,937.22,164.36z"/>
  <path class="st21" d="M1007.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36s-4.37-1.98-4.36-4.39
    C1002.83,166.3,1004.8,164.35,1007.22,164.36z"/>
  <path class="st22" d="M1077.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1072.83,166.3,1074.8,164.35,1077.22,164.36z"/>
  <path class="st22" d="M1147.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1142.83,166.3,1144.8,164.35,1147.22,164.36z"/>
  <path class="st22" d="M1217.22,164.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1212.83,166.3,1214.8,164.35,1217.22,164.36z"/>
  <g class="st4">
    <path class="st2" d="M587,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S603.57,68.75,587,68.75z M587,118.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S598.14,118.93,587,118.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st5">
    <path class="st2" d="M657,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S673.57,68.75,657,68.75z M657,113.75
      c-8.28,0-15-6.72-15-15s6.72-15,15-15s15,6.72,15,15S665.28,113.75,657,113.75z"/>
      <animate attributeName="opacity"
               values="0.2;1;0.2" dur="4s"
               repeatCount="indefinite"/>
  </g>
  <path class="st23" d="M727,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S743.57,68.75,727,68.75z M727,123.75
    c-13.81,0-25-11.19-25-25s11.19-25,25-25s25,11.19,25,25S740.81,123.75,727,123.75z"/>
  <g class="st7">
    <path class="st2" d="M797,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S813.57,68.75,797,68.75z M797,118.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S808.14,118.93,797,118.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st8">
    <path class="st2" d="M867,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S883.57,68.75,867,68.75z M867,120.75
      c-12.15,0-22-9.85-22-22s9.85-22,22-22s22,9.85,22,22S879.15,120.75,867,120.75z"/>
      <animate attributeName="opacity"
               values="0.4;1;0.4" dur="4s"
               repeatCount="indefinite"/>
  </g>
  <g class="st9">
    <path class="st2" d="M937,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S953.57,68.75,937,68.75z M937,118.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S948.14,118.93,937,118.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="4s"
          repeatCount="indefinite"/>
  </g>
  <g class="st24">
    <path class="st2" d="M1007,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1023.57,68.75,1007,68.75z M1007,118.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S1018.14,118.93,1007,118.93z"/>
      <animate attributeName="opacity"
               values="0.6;1;0.6" dur="4s"
               repeatCount="indefinite"/>
  </g>
  <path class="st11" d="M1077,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1093.57,68.75,1077,68.75z M1077,113.75
    c-8.28,0-15-6.72-15-15s6.72-15,15-15s15,6.72,15,15S1085.28,113.75,1077,113.75z"/>
  <g>
    <path class="st2" d="M1147,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1163.57,68.75,1147,68.75z M1147,123.75
      c-13.81,0-25-11.19-25-25s11.19-25,25-25s25,11.19,25,25S1160.81,123.75,1147,123.75z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <path class="st3" d="M1217,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S1233.57,68.75,1217,68.75z M1217,118.93
    c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18s20.18,9.03,20.18,20.18S1228.14,118.93,1217,118.93z"/>
  <g class="st1">
    <path class="st2" d="M447,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S463.57,68.75,447,68.75z M447,120.75
      c-12.15,0-22-9.85-22-22s9.85-22,22-22s22,9.85,22,22S459.15,120.75,447,120.75z"/>
      <animate attributeName="opacity"
          values="0.2;1;0.2" dur="3s"
          repeatCount="indefinite"/>
  </g>
  <g class="st12">
    <path class="st2" d="M517,68.75c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S533.57,68.75,517,68.75z M517,118.93
      c-11.14,0-20.18-9.03-20.18-20.18s9.03-20.18,20.18-20.18c11.14,0,20.18,9.03,20.18,20.18S528.14,118.93,517,118.93z"/>
      <animate attributeName="opacity"
          values="0;1;0" dur="4s"
          repeatCount="indefinite"/>
  </g>
  <path class="st16" d="M657.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C652.83,96.3,654.8,94.35,657.22,94.36z"/>
  <path class="st15" d="M587.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C582.83,96.3,584.8,94.35,587.22,94.36z"/>
  <path class="st17" d="M727.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C722.83,96.3,724.8,94.35,727.22,94.36z"/>
  <path class="st18" d="M797.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C792.83,96.3,794.8,94.35,797.22,94.36z"/>
  <path class="st19" d="M867.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C862.83,96.3,864.8,94.35,867.22,94.36z"/>
  <path class="st20" d="M937.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C932.83,96.3,934.8,94.35,937.22,94.36z"/>
  <path class="st21" d="M1007.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1002.83,96.3,1004.8,94.35,1007.22,94.36z"/>
  <path class="st22" d="M1077.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1072.83,96.3,1074.8,94.35,1077.22,94.36z"/>
  <path class="st22" d="M1147.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1142.83,96.3,1144.8,94.35,1147.22,94.36z"/>
  <path class="st22" d="M1217.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36
    c-2.42-0.01-4.37-1.98-4.36-4.39C1212.83,96.3,1214.8,94.35,1217.22,94.36z"/>
  <path class="st14" d="M447.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C442.83,96.3,444.8,94.35,447.22,94.36z"/>
  <path class="st13" d="M517.22,94.36c2.42,0.01,4.37,1.98,4.36,4.39c-0.01,2.42-1.98,4.37-4.39,4.36c-2.42-0.01-4.37-1.98-4.36-4.39
    C512.83,96.3,514.8,94.35,517.22,94.36z"/>
  <g class="st6">
    <path class="st2" d="M1217,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30S1200.43,268.75,1217,268.75z
       M1217,218.57c11.14,0,20.18,9.03,20.18,20.18s-9.03,20.18-20.18,20.18c-11.14,0-20.18-9.03-20.18-20.18
      S1205.86,218.57,1217,218.57z"/>
      <animate attributeName="opacity"
               values="0.2;1;0.2" dur="3s"
               repeatCount="indefinite"/>
  </g>
  <g class="st4">
    <path class="st2" d="M1147,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S1130.43,268.75,1147,268.75z
       M1147,223.75c8.28,0,15,6.72,15,15s-6.72,15-15,15c-8.28,0-15-6.72-15-15S1138.72,223.75,1147,223.75z"/>
       <animate attributeName="opacity"
                values="0;1;0" dur="3s"
                repeatCount="indefinite"/>
  </g>
  <path class="st11" d="M1077,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S1060.43,268.75,1077,268.75z
     M1077,213.75c13.81,0,25,11.19,25,25c0,13.81-11.19,25-25,25s-25-11.19-25-25S1063.19,213.75,1077,213.75z"/>
  <g class="st24">
    <path class="st2" d="M1007,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30S990.43,268.75,1007,268.75z
       M1007,218.57c11.14,0,20.18,9.03,20.18,20.18s-9.03,20.18-20.18,20.18c-11.14,0-20.18-9.03-20.18-20.18
      S995.86,218.57,1007,218.57z"/>

  </g>
  <g class="st9">
    <path class="st2" d="M937,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S920.43,268.75,937,268.75z M937,216.75
      c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22C915,226.6,924.85,216.75,937,216.75z"/>
      <animate attributeName="opacity"
               values="0.4;1;0.4" dur="4s"
               repeatCount="indefinite"/>
  </g>
  <g class="st8">
    <path class="st2" d="M867,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30S850.43,268.75,867,268.75z
       M867,218.57c11.14,0,20.18,9.03,20.18,20.18c0,11.14-9.03,20.18-20.18,20.18c-11.14,0-20.18-9.03-20.18-20.18
      S855.86,218.57,867,218.57z"/>
      <animate attributeName="opacity"
               values="0;1;0" dur="5s"
               repeatCount="indefinite"/>
  </g>
  <g class="st7">
    <path class="st2" d="M797,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30S780.43,268.75,797,268.75z
       M797,218.57c11.14,0,20.18,9.03,20.18,20.18s-9.03,20.18-20.18,20.18c-11.14,0-20.18-9.03-20.18-20.18
      C776.82,227.61,785.86,218.57,797,218.57z"/>
      <animate attributeName="opacity"
               values="0;1;0" dur="4s"
               repeatCount="indefinite"/>
  </g>
  <path id="circle" class="st23" d="M727,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30
    S710.43,268.75,727,268.75z M727,223.75c8.28,0,15,6.72,15,15s-6.72,15-15,15c-8.28,0-15-6.72-15-15S718.72,223.75,727,223.75z"/>
  <g class="st5">
    <animate attributeName="opacity"
             values="0.4;1;0.4" dur="4s"
             repeatCount="indefinite"/>
    <path class="st2" d="M657,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S640.43,268.75,657,268.75z M657,213.75
      c13.81,0,25,11.19,25,25c0,13.81-11.19,25-25,25s-25-11.19-25-25S643.19,213.75,657,213.75z"/>
  </g>
  <path class="st25" d="M587,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30c-16.57,0-30,13.43-30,30S570.43,268.75,587,268.75z
     M587,218.57c11.14,0,20.18,9.03,20.18,20.18s-9.03,20.18-20.18,20.18c-11.14,0-20.18-9.03-20.18-20.18
    C566.82,227.61,575.86,218.57,587,218.57z"/>
  <g class="st12">
    <path class="st2" d="M517,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S500.43,268.75,517,268.75z M517,216.75
      c12.15,0,22,9.85,22,22c0,12.15-9.85,22-22,22c-12.15,0-22-9.85-22-22C495,226.6,504.85,216.75,517,216.75z"/>
  </g>
  <g class="st1">
    <path class="st2" d="M447,268.75c16.57,0,30-13.43,30-30s-13.43-30-30-30s-30,13.43-30,30S430.43,268.75,447,268.75z M447,218.57
      c11.14,0,20.18,9.03,20.18,20.18c0,11.14-9.03,20.18-20.18,20.18s-20.18-9.03-20.18-20.18S435.86,218.57,447,218.57z"/>
  </g>
  <path class="st22" d="M1146.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36
    c2.42,0.01,4.37,1.98,4.36,4.39C1151.17,241.2,1149.2,243.15,1146.78,243.14z"/>
  <path class="st22" d="M1216.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36
    c2.42,0.01,4.37,1.98,4.36,4.39C1221.17,241.2,1219.2,243.15,1216.78,243.14z"/>
  <path class="st22" d="M1076.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36
    c2.42,0.01,4.37,1.98,4.36,4.39C1081.17,241.2,1079.2,243.15,1076.78,243.14z"/>
  <path class="st21" d="M1006.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36
    c2.42,0.01,4.37,1.98,4.36,4.39C1011.17,241.2,1009.2,243.15,1006.78,243.14z"/>
  <path class="st20" d="M936.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36s4.37,1.98,4.36,4.39
    C941.17,241.2,939.2,243.15,936.78,243.14z"/>
  <path class="st19" d="M866.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36c2.42,0.01,4.37,1.98,4.36,4.39
    C871.17,241.2,869.2,243.15,866.78,243.14z"/>
  <path class="st18" d="M796.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36c2.42,0.01,4.37,1.98,4.36,4.39
    C801.17,241.2,799.2,243.15,796.78,243.14z"/>
  <path class="st17" d="M726.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36s4.37,1.98,4.36,4.39
    C731.17,241.2,729.2,243.15,726.78,243.14z"/>
  <path class="st16" d="M656.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36c2.42,0.01,4.37,1.98,4.36,4.39
    C661.17,241.2,659.2,243.15,656.78,243.14z"/>
  <path class="st15" d="M586.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36s4.37,1.98,4.36,4.39
    C591.17,241.2,589.2,243.15,586.78,243.14z"/>
  <path class="st13" d="M516.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36s4.37,1.98,4.36,4.39
    C521.17,241.2,519.2,243.15,516.78,243.14z"/>
  <path class="st14" d="M446.78,243.14c-2.42-0.01-4.37-1.98-4.36-4.39c0.01-2.42,1.98-4.37,4.39-4.36c2.42,0.01,4.37,1.98,4.36,4.39
    C451.17,241.2,449.2,243.15,446.78,243.14z"/>
  <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="516.649" y1="168.6781" x2="1217" y2="168.6781">
    <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0"/>
    <stop  offset="1" style="stop-color:#FFFFFF"/>
  </linearGradient>
  <polyline class="st26" points="517,238.75 587.5,169.25 867.5,169.25 937,98.75 1077,98.75 1147,168.75 1217,168.75 	"/>
  <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="516.5" y1="168.9268" x2="587.3536" y2="168.9268">
    <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0"/>
    <stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0.2"/>
  </linearGradient>
  <polyline class="st27" points="587,238.75 517,168.75 517,98.75 	"/>
  <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="656.1469" y1="168.677" x2="1217.5" y2="168.677">
    <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.4"/>
    <stop  offset="1" style="stop-color:#FFFFFF"/>
  </linearGradient>
  <polyline class="st28" points="656.5,239.25 727.2,168.74 727.5,98.25 867.5,98.25 932.5,168.25 1077.5,168.25 1147.5,98.25
    1217.5,98.25 	"/>
  <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="726.5" y1="203.7493" x2="1216.5" y2="203.7493">
    <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.5"/>
    <stop  offset="1" style="stop-color:#FFFFFF"/>
  </linearGradient>
  <polyline class="st29" points="726.5,239.25 936.5,239.25 1007.2,168.74 1077.5,168.25 1146.5,239.25 1216.5,239.25 	"/>
</g>
<g id="Layer_2">
</g>
</svg>

<!-- Busy Indicator -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="400px" y="0px"
   viewBox="0 0 613.44 51.89" style="enable-background:new 0 0 613.44 51.89;" xml:space="preserve">
<style type="text/css">
  .st0{fill:#7CB6E3;}
</style>
<g>
<path class="st0" d="M49.74,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C64.74,34.6,58.02,41.32,49.74,41.32z"/>
  <animate attributeName="opacity"
          values="0.1;1;0.1" dur="4s"
          repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M117.31,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C132.31,34.6,125.6,41.32,117.31,41.32z"/>
  <animate attributeName="opacity"
          values="0.1;1;0.1" dur="4.1s"
          repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M184.88,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C199.88,34.6,193.17,41.32,184.88,41.32z"/>
  <animate attributeName="opacity"
          values="0.1;1;0.1" dur="4.2s"
          repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M252.46,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C267.46,34.6,260.74,41.32,252.46,41.32z"/>
  <animate attributeName="opacity"
          values="0.1;1;0.1" dur="4.3s"
          repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M320.03,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C335.03,34.6,328.31,41.32,320.03,41.32z"/>
  <animate attributeName="opacity"
          values="0.1;1;0.1" dur="4.4"
          repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M387.6,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C402.6,34.6,395.88,41.32,387.6,41.32z"/>
  <animate attributeName="opacity"
  values="0.1;1;0.1" dur="4.5s"
  repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M455.17,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C470.17,34.6,463.46,41.32,455.17,41.32z"/>
  <animate attributeName="opacity"
  values="0.1;1;0.1" dur="4.6s"
  repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M522.74,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C537.74,34.6,531.03,41.32,522.74,41.32z"/>
  <animate attributeName="opacity"
  values="0.1;1;0.1" dur="4.7s"
  repeatCount="indefinite"/>
</g>
<g>
  <path class="st0" d="M590.32,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
  C605.32,34.6,598.6,41.32,590.32,41.32z"/>
  <animate attributeName="opacity"
  values="0.1;1;0.1" dur="4.8s"
  repeatCount="indefinite"/>
</g>
</svg>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 613.44 51.89" style="enable-background:new 0 0 613.44 51.89;" xml:space="preserve">
<style type="text/css">
.st0{fill:#7CB6E3;}
</style>
<g>
<path class="st0" d="M49.74,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C64.74,34.6,58.02,41.32,49.74,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.2s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M117.31,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C132.31,34.6,125.6,41.32,117.31,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.3s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M184.88,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C199.88,34.6,193.17,41.32,184.88,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.4s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M252.46,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C267.46,34.6,260.74,41.32,252.46,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.5s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M320.03,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C335.03,34.6,328.31,41.32,320.03,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.6s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M387.6,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C402.6,34.6,395.88,41.32,387.6,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.7s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M455.17,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C470.17,34.6,463.46,41.32,455.17,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.8s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M522.74,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C537.74,34.6,531.03,41.32,522.74,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="1.9s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
<g>
<path class="st0" d="M590.32,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
C605.32,34.6,598.6,41.32,590.32,41.32z"/>
<animate
attributeName="opacity"
values="0;1;0"
begin="2s"
dur="4.8s"
repeatCount="indefinite"/>
</g>
</svg>

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