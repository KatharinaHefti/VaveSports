import { polyfill } from 'view-utils'

polyfill().then( () => import( "./app.js" ) )