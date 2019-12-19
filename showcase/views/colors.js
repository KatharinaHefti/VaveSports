import { html } from 'lit-html'

export function colors() {

  const sat = [ 45, 54, 63 ]
  const hsl = ( h ) => sat.map( ( s, i ) => ( { h, s, l: s + i * 3 } ) )

  const colors = {
    // Computed colors
    // green: hsl( 110 ),
    // yellow: hsl( 60 ),
    // orange: hsl( 25 ),
    // red: hsl( 355 ),
    // purple: hsl( 270 ),
    // pink: hsl( 315 ),
    // turkis: hsl( 180 ),
    // blue: hsl( 210 )
    teal: hsl( 202 ),
    steel: hsl( 205 ),
    sky: hsl( 198 ),
    ice: hsl( 183 ),
    sage: hsl( 123 ),
    sun: hsl( 42 ),
    coral: hsl( 1 ),
    flamingo: hsl( 327 ),
    lavender: hsl( 263 ),
    smoke: hsl( 0 ),
    silver: hsl( 0 ),
    snow: hsl( 207 )
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
      article.colors section {
        overflow-x: auto;
        padding: 2rem 0;
      }

      table.colors th, table.colors td {
        padding: 5px 20px;
        border:1px solid #555;
        color: #555;
      }
    </style>
    <article class=colors hidden=false>
      <h1>Colors</h1>
      <h2>Computed style guide</h2>

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


      <section>
        <table class=colors>
          ${ rows }
        </table>
      </section>
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