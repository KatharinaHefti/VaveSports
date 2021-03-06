import { html, render } from 'lit-html'
import store from '../data-store'
import { navigation } from './navigation'
import { showcase } from './showcase'
import { svg } from './svg'
import { md } from './md'
import { button } from './button'
import { choice } from './choice'
import { textarea } from './textarea'
import { input } from './input'
import { dropdown } from './dropdown'
import { numbers } from './numbers'
import { colors } from './colors'
import { fonts } from './fonts'
import { link } from './link'
import { slider } from './slider'
import { code } from './code'
import { date } from './date'
import { multi } from './multi'
import { animations } from './animations'

export default function () {

  const state = store.getState()

  return html `
    <nav>
      ${ navigation(state) }
    </nav>
    <main>
      ${
        ( !state.navigation || state.navigation == "showcase" )
        ? showcase() :
        ( state.navigation == "svg")
        ? svg() :
        ( state.navigation == "md")
        ? md() :
        ( state.navigation == "button")
        ? button() :
        ( state.navigation == "choice")
        ? choice( ) :
        ( state.navigation == "textarea")
        ? textarea(  ) :
        ( state.navigation == "input")
        ? input() :
        ( state.navigation == "dropdown")
        ? dropdown() :
        ( state.navigation == "numbers")
        ? numbers() :
        ( state.navigation == "colors")
        ? colors() :
        ( state.navigation == "fonts")
        ? fonts( ) :
        ( state.navigation == "link")
        ? link( ) :
        ( state.navigation == "slider")
        ? slider( ) :
        ( state.navigation == "code")
        ? code( ) :
        ( state.navigation == "date")
        ? date( ) :
        ( state.navigation == "multi")
        ? multi( ) :
        ( state.navigation == "animations")
        ? animations( ) :
        ''
      }
    </main>
  `
}