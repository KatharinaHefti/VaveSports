import 'regenerator-runtime/runtime'
import 'core-js/features/promise';

( async () => {

  if ( typeof Object.assign != 'function' ) {
    console.log( "Polyfill Object" )
    await import( 'core-js/features/object' )
  }

  if ( typeof Array.prototype.includes != 'function' ) {
    console.log( "Polyfill Array.includes" )
    await import( 'core-js/features/array/includes' )
  }

  if ( typeof Array.from != 'function' ) {
    console.log( "Polyfill Array.from" )
    await import( 'core-js/features/array/from' )
  }

  if ( typeof window[ "CustomEvent" ] !== "function" ) {
    console.log( "Polyfill CustomEvent" )
    await import( 'custom-event-polyfill' )
  }

  if ( !window[ 'fetch' ] ) {
    console.log( "Polyfill fetch" )
    await import( 'isomorphic-fetch' )
  }

  if ( !window[ "customElements" ] ) {
    console.log( "Polyfill CustomElements" )
    await import( '@webcomponents/custom-elements' )
  }

  if ( !( "scrollBehavior" in document.documentElement.style ) ) {
    console.log( "Polyfill scrollBehavior" )
    await import( "scroll-behavior-polyfill" );
  }

  if ( typeof HTMLTemplateElement === 'undefined' ) {
    console.log( "Polyfill Template" )
    await import( '@webcomponents/template' )
  }

  await import( "./app.js" )
} )()