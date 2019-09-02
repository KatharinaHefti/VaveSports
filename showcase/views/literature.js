import { html, render } from 'lit-html'
import unitLiterature from 'view-units/unit-literature'
import 'view-units/unit-md'

export function literature( state ) {

  const onAction = ( e ) => {
    window.open( e.detail.href, "_blank" )
  }

  return html `
    <article class="literature" hidden="false">

      <h1>Element unit-literature</h1>

      <h2>Example Theme nice (default)</h2>
      <unit-literature style="border:1px solid tomato;" @action=${onAction} .state=${{ auto:false, items:example }}></unit-literature>

      <h2>Example Theme pubmed</h2>
      <unit-literature style="border:1px solid tomato;" @action=${onAction} theme="pubmed" .state=${{ auto:false, items:example }}></unit-literature>

      <h2>Signature</h2>
      <unit-md .state=${{ raw: unitLiterature.signature, theme:"tomorrow" }}></unit-md>
    </article>
  `

}

var example = [ {
    "pmid": "1611900",
    "title": "Ofloxacin vs ciprofloxacin: a comparison.",
    "author": "Nicolau D, Quintiliani R, Nightingale CH",
    "last": "Nightingale CH",
    "monat": "May",
    "jahr": "1992",
    "jou": "Conn Med",
    "journal": "Connecticut medicine"
  },
  {
    "title": "Inhibition of drug metabolism by quinolone antibiotics.",
    "author": "Edwards DJ, Bowles SK, Svensson CK, Rybak MJ",
    "last": "Rybak MJ",
    "monat": "Sep",
    "jahr": "1988",
    "jou": "Clin Pharmacokinet",
    "journal": "Clinical pharmacokinetics",
    "pmid": "3052987"
  },
  {
    "title": "The influence of the 4-quinolones ciprofloxacin, pefloxacin and ofloxacin on the elimination of theophylline.",
    "author": "Wijnands WJ, Vree TB, Baars AM, van Herwaarden CL",
    "last": "van Herwaarden CL",
    "monat": "Dec",
    "jahr": "1987",
    "jou": "Pharm Weekbl Sci",
    "journal": "Pharmaceutisch weekblad. Scientific edition",
    "pmid": "3481439"
  }
]