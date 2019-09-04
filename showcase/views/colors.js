import { html } from 'lit-html'

export function colors() {

  const sat = [ 45, 54, 63 ]
  const hsl = ( h ) => sat.map( ( s, i ) => ( { h, s, l: s + i * 3 } ) )

  const colors = {
    // Computed colors
    green: hsl( 110 ),
    yellow: hsl( 60 ),
    orange: hsl( 25 ),
    red: hsl( 355 ),
    purple: hsl( 270 ),
    pink: hsl( 315 ),
    turkis: hsl( 180 ),
    blue: hsl( 210 )
  }

  const rows = [
    html `<tr>
      <th>Colors</th><th>color1</th><th>color2</th><th>color3</th>
    </tr>`
  ]

  for ( const color in colors ) {

    rows.push( html `
      <tr>
        <th>
          ${color}
        </th>
        ${ colors[color].map( (c,i ) => {
            const hsl = `hsl(${c.h},${c.s}%,${c.l}%)`
            const hex = HSLToHex(c.h,c.s,c.l)
            const con = ["#fff","#333","#555"]
            return html `
              <td>
                <span style="padding:2px 10px;background:${hsl};color:${con[i]};">${hsl}</span>
                <br>
                <span style="padding:2px 10px;background:${con[i]};color:${hex};">${hex}</span>
              </td>`
          })
        }
      </tr>` )
  }

  return html `
    <style>
      table.colors th, table.colors td {
        padding: 5px 20px;
        border:1px solid #555;
        color: #555;
      }
    </style>
    <article hidden=false>
      <h1>Colors</h1>
      <h2>Computed style guide</h2>
      <table class=colors>
        ${ rows }
      </table>
    </article>`
}

// -----------------------------------------------------------------
// Credits
// https://css-tricks.com/converting-color-spaces-in-javascript/
// -----------------------------------------------------------------
function HSLToHex( h, s, l ) {

  s /= 100;
  l /= 100;

  let c = ( 1 - Math.abs( 2 * l - 1 ) ) * s,
    x = c * ( 1 - Math.abs( ( h / 60 ) % 2 - 1 ) ),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if ( 0 <= h && h < 60 ) {
    r = c;
    g = x;
    b = 0;
  } else if ( 60 <= h && h < 120 ) {
    r = x;
    g = c;
    b = 0;
  } else if ( 120 <= h && h < 180 ) {
    r = 0;
    g = c;
    b = x;
  } else if ( 180 <= h && h < 240 ) {
    r = 0;
    g = x;
    b = c;
  } else if ( 240 <= h && h < 300 ) {
    r = x;
    g = 0;
    b = c;
  } else if ( 300 <= h && h < 360 ) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round( ( r + m ) * 255 ).toString( 16 );
  g = Math.round( ( g + m ) * 255 ).toString( 16 );
  b = Math.round( ( b + m ) * 255 ).toString( 16 );

  // Prepend 0s, if necessary
  if ( r.length == 1 )
    r = "0" + r;
  if ( g.length == 1 )
    g = "0" + g;
  if ( b.length == 1 )
    b = "0" + b;

  return "#" + r + g + b;
}