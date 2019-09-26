import { html, render } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import immu from 'object-path-immutable'

// Layz import units
import unitSidebar from 'view-units/unit-sidebar/'
import 'view-units/unit-md/'

export function sidebar( state ) {

  const test = {
    "general": {
      "logo": "logo.png",
      "name": "Company Name"
    },
    "navigation": [ {
        "heading": "Heading",
        "links": [ {
            "title": "Link one",
            "link": "link.html"
          },
          {
            "title": "Link two",
            "link": "link.html"
          },
          {
            "title": "Link three",
            "link": "link.html"
          }
        ]
      },
      {
        "heading": "Heading two",
        "links": [ {
            "title": "Link one",
            "link": "link.html"
          },
          {
            "title": "Link two",
            "link": "link.html"
          },
          {
            "title": "Link three",
            "link": "link.html"
          }
        ]
      },
      {
        "heading": "Heading three",
        "links": [ {
            "title": "Link one",
            "link": "link.html"
          },
          {
            "title": "Link two",
            "link": "link.html"
          },
          {
            "title": "Link three",
            "link": "link.html"
          }
        ]
      },
    ]
  }

  return html `
    <article hidden=false>

      <h1>Element unit-sidebar</h1>

      <h2>Examples</h2>

      <h3>Sidebar navigation</h3>
      <section>
        <unit-sidebar .state=${{
          items: test.navigation.map(item => {
            return { ...item }
          })
        }}></unit-sidebar>
      </section>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitSidebar.signature, theme:"tomorrow" }}></unit-md>

      <h2>Test</h2>
      <unit-md .state=${{ raw: unitSidebar.links }}></unit-md>

    </article>
  `
}