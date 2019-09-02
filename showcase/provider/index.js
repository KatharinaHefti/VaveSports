// Reducer
import cloneDeep from 'lodash/cloneDeep'
import immu from 'object-path-immutable'
// Middleware
import { applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// Store
import { createStore } from "redux"

// ---------------------
// Reducer
// ---------------------
function reducer( state = cloneDeep( {} ), action ) {
  // type state part
  return immu.set( state, action.type, cloneDeep( action.data ) )
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