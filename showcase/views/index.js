import { html, render } from 'lit-html'
import store from '../data-store'
import { navigation } from './navigation'
import { showcase } from './showcase'
import { svg } from './svg'
import { md } from './md'
import { button } from './button'

// import { choice } from './choice'
// import { textarea } from './textarea'
// import { input } from './input'
// import { toggle } from './toggle'
// import { dropdown } from './dropdown'
// import { numbers } from './numbers'
// import { colors } from './colors'
// import { fonts } from './fonts'

export default function () {

  const state = store.getState()

  return html `
    <nav>
      ${ navigation(state) }
    </nav>
    <main>
      ${
        ( !state.navigation )
        ? showcase() :
        ( state.navigation == "svg")
        ? svg() :
        ( state.navigation == "md")
        ? md() :
        ( state.navigation == "button")
        ? button() :
        // ( state.navigation == "choice")
        // ? choice( ) :
        // ( state.navigation == "textarea")
        // ? textarea(  ) :
        // ( state.navigation == "input")
        // ? input() :
        // ( state.navigation == "toggle")
        // ? toggle( ) :
        // ( state.navigation == "dropdown")
        // ? dropdown() :
        // ( state.navigation == "numbers")
        // ? numbers() :
        // ( state.navigation == "colors")
        // ? colors() :
        // ( state.navigation == "fonts")
        // ? fonts( ) :''
        ''
      }
    </main>
  `
}