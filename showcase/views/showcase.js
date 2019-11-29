import { html } from 'lit-html'
import 'view-base/type-poster'

export function showcase() {

  return html `
  <article>
  <!-- @todo list all input elements -->

<!-- unit-link -->
  <h1>Element unit-link</h1>
  <h2>Examples</h2>
  <!-- positive -->
  <h3>Link</h3>
  <section>
  This is a body text with a <span class="linkPos">link<span/>.
  </section>
  <!-- negative -->
  <h3>Negative link</h3>
  <section style="background-color: #696969; padding: 20px; box-sizing: border-box; color: white">
  This is a body text with a negative <unit-link class="negative" id="link2" value="#" label="link"><!---->
  <a href="#" style="padding: undefined"><!---->link<!----></a>
  <!----></unit-link>.
  </section>

<!-- unit-svg -->
  <h1>Logos from unit-svg</h1>
  <h2>Examples</h2>
  <h3>Logo Clinic</h3>

  <!-- change path -->
  <img src="/view-base/type-poster/logo_clinic.svg">
  <h3>Logo Status</h3>

  <!-- change path -->
  <img src="/view-base/type-poster/logo_status.svg">

<!-- unit-choice -->
  <h1>Element unit-choice</h1>
  <h2>Examples</h2>
  <h3>Multi Select</h3>
  <section class="multiSelect">
    <a href="#">first</a>
    <a href="#">second</a>
    <a href="#">third</a>
    <a href="#">fourth</a>
    <a href="#">fifth</a>
  </section>

<!-- unit-select -->
  <h3>Uni Select</h3>
  <section class="uniSelect">
    <a href="#"  style="padding: undefined">first</a>
    <a>|</a>
    <a href="#"  style="padding: undefined">second</a>
    <a>|</a>
    <a href="#"  style="padding: undefined">third</a>
    <a>|</a>
    <a href="#"  style="padding: undefined">fourth</a>
    <a>|</a>
    <a href="#"  style="padding: undefined">fifth</a>
  </section>

  <h1>Element unit-toggle</h1>
  <h2>Examples</h2>
  <h3>Toggle switch</h3>
  <section class="toggleSwitch">
    <a href="#" style="padding: undefined">on</a>
    <a>|</a>
    <a href="#" style="padding: undefined">off</a>
  </section>

<!-- colors -->
  <h1>Colors</h1>
  <h2>style guide</h2>
  <section>
    <table class="colors">
    <!----><tr>
      <th>Name</th><th>Value</th><th>usage</th><th>refrain</th>
      </tr><!---->
      <tr>
      <th>
      navy
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(214,52%,23%);color:#fff;"><!---->hsl(214,52%,23%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#1C3659;"><!---->#1C3659<!----></span>
      </td><!---->
      <td>
      <i>Background</i>
      </td>
      <td>
      </td>
      </tr><!---->
      <tr>
      <th>
      sky
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(207,100%,71%);color:#000;"><!---->hsl(207,100%,71%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#6CBCFF;"><!---->#6CBCFF<!----></span>
      </td><!---->
      <td>
      <i>Links</i>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      ice
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(183,90%,80%);color:#000;"><!---->hsl(183,90%,80%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#9DF6FA;"><!---->#9DF6FA<!----></span>
      </td><!---->
      <td>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      kelly
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(125,48%,47%);color:#000;"><!---->hsl(125,48%,47%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#3EB147;"><!---->#3EB147<!----></span>
      </td><!---->
      <td>
      <i>Input</i>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      sun
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(42,100%,65%);color:#000;"><!---->hsl(42,100%,65%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#FFCB4E;"><!---->#FFCB4E<!----></span>
      </td><!---->
      <td>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      coral
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(7,99%,73%);color:#000;"><!---->hsl(7,99%,73%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#FE8374;"><!---->#FE8374<!----></span>
      <td>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      lavender
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(263,81%,62%);color:#fff;"><!---->hsl(263,81%,62%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#8C51ED;"><!---->#8C51ED<!----></span>
      </td><!---->
      </tr><!---->
      <tr>
      <th>
      flamingo
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(337,90%,69%);color:#000;"><!---->hsl(337,90%,69%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#F7679E;"><!---->#F7679E<!----></span>
      </td><!---->
      <td>
      <i>Errors</i>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td>
      </tr><!---->
      <tr>
      <th>
      smoke
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(0,0%,41%);color:#fff;"><!---->hsl(0,0%,41%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#696969;"><!---->#696969<!----></span>
      </td><!---->
      <td>
      <i>Break</i>
      </td><!---->
      </tr><!---->

      <tr>
      <th>
      silver
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(0,0%,71%);color:#000;"><!---->hsl(0,0%,71%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#B5B5B5;"><!---->#B5B5B5<!----></span>
      <td>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td><!---->
      </tr><!---->
      <tr>
      <th>
      snow
      </th>
      <!---->
      <td>
      <span style="padding:2px 10px;background:hsl(288,14%,93%);color:#000;"><!---->hsl(288,14%,93%)<!----></span>
      <br>
      <span style="padding:2px 10px;background:#fff;color:#EEEAEF;"><!---->#EEEAEF<!----></span>
      <td>
      </td>
      <td>
      <i>Don't use for positive fonts.</i>
      </td><!---->
      </tr><!---->
    </table>
  </section>
  </article>
  `
}