if ( e.target.nodeName == "UNIT-BUTTON" && e.target.id == "counter" ) {
  const value = parseInt( e.target.state.label ) + 1
  store.dispatch( { type: "button", data: value } )
}
if ( e.target.nodeName == "UNIT-CHOICE" ) {
  store.dispatch( { type: "choice", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-TEXTAREA" ) {
  store.dispatch( { type: "textarea", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-INPUT" ) {
  store.dispatch( { type: "input", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-SIDEBAR" ) {
  store.dispatch( { type: "sidebar", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-DROPDOWN" ) {
  store.dispatch( { type: "dropdown", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-NUMBERS" ) {
  store.dispatch( { type: "numbers", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-PANEL" ) {
  store.dispatch( { type: "panel", data: e.detail.value } )
}
if ( e.target.nodeName == "FONTCOMBOS" ) {
  store.dispatch( { type: "fontcombos", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-LINK" ) {
  store.dispatch( { type: "link", data: e.detail.value } )
}
if ( e.target.nodeName == "UNIT-SLIDER" ) {
  store.dispatch( { type: "slider", data: e.detail.value } )
}