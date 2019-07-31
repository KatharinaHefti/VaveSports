import { html, render } from 'lit-html'

export default async function ( data ) {

  console.time( "init" )
  await import( 'view-units/source/unit-md' )
  console.timeEnd( "init" )

  return html `
      <p>hallo</p>
    `

}