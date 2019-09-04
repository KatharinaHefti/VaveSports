import { polyfill } from 'view-utils'

console.time( "Polyfills" )
polyfill().then( async () => {
  await import( "./app.js" )
  console.timeEnd( "Polyfills" )
} )