// Load styles and make bundlable
import './element.css'

// HTMLElement
import element from './element.js'

// Autoregister
customElements.define( __dirname.split( "/" ).pop(), element )