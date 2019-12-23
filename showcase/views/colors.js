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

    // teal: hsl( 202 ),
    // steel: hsl( 205 ),
    // sky: hsl( 198 ),
    // ice: hsl( 183 ),
    // sage: hsl( 123 ),
    // sun: hsl( 42 ),
    // coral: hsl( 1 ),
    // flamingo: hsl( 327 ),
    // lavender: hsl( 263 ),
    // smoke: hsl( 0 ),
    // silver: hsl( 0 ),
    // snow: hsl( 207 )
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
        /* article.colors section {
        overflow-x: auto;
        padding: 2rem 0;
      }

      table.colors th, table.colors td {
        padding: 5px 20px;
        border:1px solid #555;
        color: #555;
      }
      */

      section .color-box {
        width: 100%;
        margin: 5px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      section .color-box-nogo {
        width: 100%;
        margin: 5px;
        padding: 15px;
        border: 1px solid hotpink;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      .positive p {
        margin: 0 5px 15px 5px;
      }

      .negative p {
        margin: 0 5px 15px 5px;
        color: #F8F8FF;
      }

    section.row {
        display: flex;
        flex-wrap: nowrap;
      }

      section.row>section {
        display: flex;
        width: 100%;
        min-height: 100px;
        flex-grow: 0;
        align-items: center;
        padding-left: .5rem;
        margin-bottom: .5rem;
      }

      section.row section.positive {
        border: 1px solid lightgrey;
        background: ghostwhite;
      }

      section.negative {
        background-image: linear-gradient(#02578a, #0c3977);
      }

      .pink{
        color: #F7679E;
      }

      .negative .pink{
              color: #F7679E;
            }

    </style>
    <article class=colors hidden=false>
      <h1>Colors</h1>

      <!-- colors -->
          <p>Color palette</p>
          <section class=row>
            <section class=positive style=display:flex;flex-wrap:wrap;>
              <div class="color-box" style="background-color:#0c3977;">sapphire</div>
              <p><b>Hex:&nbsp</b>#0c3977</p>
              <p><b>HSL:&nbsp</b>215, 82%, 26%</p>
              <p><b>RGB:&nbsp</b>12, 57, 119</p>
              <div class="color-box" style="background-color:#02578a;">steel</div>
              <p><b>Hex:&nbsp</b>#02578a</p>
              <p><b>HSL:&nbsp</b>203, 97%, 27%</p>
              <p><b>RGB:&nbsp</b>2, 87, 138</p>
              <div class="color-box" style="background-color:#88C6FA;">sky</div>
              <p><b>Hex:&nbsp</b>#88C6FA</p>
              <p><b>HSL:&nbsp</b>207, 92%, 76%</p>
              <p><b>RGB:&nbsp </b>136, 198, 250</p>
              <p class="pink">Don't use sky font color on ghost!</p>
              <div class="color-box" style="background-color:#2ED525;">kelly</div>
              <p><b>Hex:&nbsp</b>#2ED525</p>
              <p><b>HSL:&nbsp</b>117, 70%, 49%</p>
              <p><b>RGB:&nbsp</b>46, 213, 37</p>
              <div class="color-box" style="background-color:#FFBE5B;">sun</div>
              <p><b>Hex:&nbsp</b>#FFBE5B</p>
              <p><b>HSL:&nbsp</b>36, 100%, 68%</p>
              <p><b>RGB:&nbsp</b>255, 190, 91</p>
              <p class="pink">Don't use sun font color on ghost!</p>
              <div class="color-box" style="background-color:#FF952B;">tangerine</div>
              <p><b>Hex:&nbsp</b>#FF952B</p>
              <p><b>HSL:&nbsp</b>0, 100%, 58%</p>
              <p><b>RGB:&nbsp</b>255, 149, 43</p>
              <p class="pink">Don't use tangerine font color on ghost!</p>
              <div class="color-box" style="background-color:#F7679E;">flamingo</div>
              <p><b>Hex:&nbsp</b>#F7679E</p>
              <p><b>HSL:&nbsp</b>337, 90%, 69%</p>
              <p><b>RGB:&nbsp</b>247,103, 158</p>
              <div class="color-box" style="background-color:#606066;">smoke</div>
              <p><b>Hex:&nbsp</b>#606066</p>
              <p><b>HSL:&nbsp</b>240, 3%, 39%</p>
              <p><b>RGB:&nbsp</b>96, 96, 102</p>
              <div class="color-box" style="background-color:#b5b5bc; color:#606066">silver</div>
              <p><b>Hex:&nbsp</b>#b5b5bc</p>
              <p><b>HSL:&nbsp</b>218, 90%, 37%</p>
              <p><b>RGB:&nbsp</b>9, 72, 179</p>
              <p class="pink">Don't use silver font color on ghost!</p>
              <div class="color-box" style="background-color:#d9d9dd; color:#606066">snow</div>
              <p><b>Hex:&nbsp</b>#d9d9dd</p>
              <p><b>HSL:&nbsp</b>240, 6%, 86%</p>
              <p><b>RGB:&nbsp</b>217, 217, 221</p>
              <p class="pink">Don't use snow font color on ghost!</p>
              <div class="color-box-nogo" style="background-color:#F8F8FF; color: #606066;">ghost</div>
              <p><b>Hex:&nbsp</b>#F8F8FF</p>
              <p><b>HSL:&nbsp</b>240, 100%, 99%</p>
              <p><b>RGB:&nbsp</b>248, 248, 255</p>
              <p class="pink">Never use ghost in the light theme!</p>
            </section>


            <section class=negative style=display:flex;flex-wrap:wrap;>
              <div class="color-box-nogo" style="background-color:#0c3977;">sapphire</div>
              <p><b>Hex:&nbsp</b>#0c3977</p>
              <p><b>HSL:&nbsp</b>215, 82%, 26%</p>
              <p><b>RGB:&nbsp</b>12, 57, 119</p>
              <p class="pink">Never use sapphire in the dark theme!</p>
              <div class="color-box-nogo" style="background-color:#02578a;">steel</div>
              <p><b>Hex:&nbsp</b>#02578a</p>
              <p><b>HSL:&nbsp</b>203, 97%, 27%</p>
              <p><b>RGB:&nbsp</b>2, 87, 138</p>
              <div class="color-box" style="background-color:#6CBCFF;">sky</div>
              <p><b>Hex:&nbsp</b>#6CBCFF</p>
              <p><b>HSL:&nbsp</b>207, 100%, 71%</p>
              <p><b>RGB:&nbsp </b>108, 188, 255</p>
              <div class="color-box" style="background-color:#12C108;">kelly</div>
              <p><b>Hex:&nbsp</b>#12C108</p>
              <p><b>HSL:&nbsp</b>127, 90%, 37%</p>
              <p><b>RGB:&nbsp</b>9, 179, 30</p>
              <div class="color-box" style="background-color:#FFBE5B;">sun</div>
              <p><b>Hex:&nbsp</b>#FFBE5B</p>
              <p><b>HSL:&nbsp</b>36, 100%, 68%</p>
              <p><b>RGB:&nbsp</b>255, 190, 91</p>
              <div class="color-box" style="background-color:#FF8C19;">tangerine</div>
              <p><b>Hex:&nbsp</b>#FF8C19</p>
              <p><b>HSL:&nbsp</b>30, 100%, 55%</p>
              <p><b>RGB:&nbsp</b>255, 140, 25</p>
              <div class="color-box" style="background-color:#FA609B;">flamingo</div>
              <p><b>Hex:&nbsp</b>#FA609B</p>
              <p><b>HSL:&nbsp</b>337, 94%, 68%</p>
              <p><b>RGB:&nbsp</b>250, 96, 155</p>
              <div class="color-box-nogo" style="background-color:#606066;">smoke</div>
              <p><b>Hex:&nbsp</b>#606066</p>
              <p><b>HSL:&nbsp</b>240, 3%, 39%</p>
              <p><b>RGB:&nbsp</b>96, 96, 102</p>
              <p class="pink">Never use smoke in the dark theme!</p>
              <div class="color-box" style="background-color:#b5b5bc; color:#606066;">silver</div>
              <p><b>Hex:&nbsp</b>#b5b5bc</p>
              <p><b>HSL:&nbsp</b>218, 90%, 37%</p>
              <p><b>RGB:&nbsp</b>9, 72, 179</p>
              <div class="color-box" style="background-color:#d9d9dd; color:#606066">snow</div>
              <p><b>Hex:&nbsp</b>#d9d9dd</p>
              <p><b>HSL:&nbsp</b>240, 6%, 86%</p>
              <p><b>RGB:&nbsp</b>217, 217, 221</p>
              <div class="color-box" style="background-color:#F8F8FF; color: #606066;">ghost</div>
              <p><b>Hex:&nbsp</b>#F8F8FF</p>
              <p><b>HSL:&nbsp</b>240, 100%, 99%</p>
              <p><b>RGB:&nbsp</b>248, 248, 255</p>
            </section>

    <!--
      <section>
        <table class=colors>
          ${ rows }
        </table>
      </section>
      -->
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