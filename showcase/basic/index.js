// Load styles and make bundlable
import './element.css'
import { html, render } from 'lit-html'

export default async function ( data ) {

  await import( "./element" )

  return html `<area-basic .state=${data.basic}></area-basic>`

}