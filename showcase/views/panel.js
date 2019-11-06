import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitPanel from 'view-units/unit-panel/'
import 'view-units/unit-md/'

import { icon } from 'view-types'
const { boxes } = icon;

export function panel( state = 0 ) {

  return html `
    <article hidden=false>

      <h1>Element unit-panel</h1>

      <h2>Examples</h2>

      <h3>Panel with list</h3>
      <section>
        <unit-panel .state=${{
          id:"panelone",
          items: data.items.map(item => {
            return { ...item }
          })
        }}></unit-panel>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitPanel.signature, theme:"tomorrow" }}></unit-md>

    </article>
  `
}

const data = {
  id: "12345",
  className: 'list',
  disabled: false,
  placeholder: "Keine Einträge",
  invert: false,
  items: [ {
      heading: "Tamoxifen Farmos Tamoxifen Farmos",
      subheading: "Tamoxifen",
      value: "A",
      selected: false,
      icon1: { path: '/showcase/doctor.4130da6c.svg' },
      icon2: { path: '/showcase/trash.c2e9d31e.svg' }
    },

    {
      heading: "Paroxetin Actavis",
      subheading: "Paroxetin",
      value: "B",
      selected: false,
      disabled: true,
      icon1: { path: '/showcase/doctor.4130da6c.svg' }
    },

    {
      heading: "Losartan Sandoz",
      subheading: "Losartan",
      value: "C",
      selected: true
    },

    {
      heading: "Metoprolol Spirig",
      subheading: "Metoprolol",
      value: "D",
      selected: false,
    }
  ]
}