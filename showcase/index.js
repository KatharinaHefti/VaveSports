import { polyfill } from 'view-utils'

console.time( "Poly&Load" )
polyfill().then( async () => {
  await import( "./app.js" )
  console.timeEnd( "Poly&Load" )
} )