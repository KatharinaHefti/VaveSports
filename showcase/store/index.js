// Reducer
import cloneDeep from 'lodash/cloneDeep'
import immu from 'object-path-immutable'
// Middleware
import { applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// Store
import { createStore } from "redux"

const State = {
  links: {
    paths: [],
    value: null
  },
  basic: {
    counter: 0,
    symptom: null
  }
}
// ---------------------
// Reducer
// ---------------------
function reducer( state = cloneDeep( State ), action ) {

  if ( action.type === "BASIC" ) {
    return immu.set( state, 'basic', cloneDeep( action.data ) )
  }
  if ( action.type === "LINKS" ) {
    return immu.set( state, 'links', cloneDeep( action.data ) )
  }
  if ( action.type === "LINKS_VALUE" ) {
    return immu.set( state, 'links.value', cloneDeep( action.data ) )
  }
  if ( action.type === "RESET" ) {
    return cloneDeep( State )
  }

  return state

}
// ----------------------------------
// Create with logger in dev mode
// ----------------------------------
function middleware() {
  // Chrome logging
  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // Patched middleware
  return enhancers( applyMiddleware( thunk ) )
}

// ---------------------
// Store
// ---------------------
export const store = createStore( reducer, middleware() )