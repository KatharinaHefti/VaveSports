import { version } from '../../package.json'
import { html } from 'lit-html'

export function colors() {

  const sat = [ 45, 54, 63 ]
  const hsl = ( h ) => sat.map( ( s, i ) => ( { h, s, l: s + i * 3 } ) )

  const colors = {
    // Extra
    dark: [ { h: 0, s: 0, l: 30 }, { h: 0, s: 0, l: 40 }, { h: 0, s: 0, l: 50 } ],
    grey: [ { h: 0, s: 0, l: 70 }, { h: 0, s: 0, l: 80 }, { h: 0, s: 0, l: 90 } ],
    // Computed colors
    yellow: hsl( 60 ),
    orange: hsl( 25 ),
    red: hsl( 355 ),
    purple: hsl( 270 ),
    pink: hsl( 315 ),
    turkis: hsl( 180 ),
    green: hsl( 120 ),
    blue: hsl( 210 )
  }

  const rows = []
  const cssr = []

  cssr.push( "html {" )

  for ( const color in colors ) {

    rows.push( html `
      <tr>
        <th style="padding:20px;border:1px solid #555;">${color}</th>
        ${ colors[color].map( (c,i ) => {
            const background = `hsl(${c.h},${c.s}%,${c.l}%)`
            cssr.push(`  --${color}${i+1}: ${background};`)
            return html `<td style="padding:20px;background:${background};color:white;">${background}</td>`
          }) }
      </tr>` )
  }

  cssr.push( "}" )

  return html `
    <article hidden=false>
      <h1>Showcase</h1>
      <h2>Version: ${version}</h2>
      <table>
        ${ rows }
      </table>
      <h2>Color Variables (color-fresh)</h2>
      <pre>${ cssr.join("\n") }</pre>
    </article>`
}