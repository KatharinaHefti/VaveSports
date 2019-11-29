export function init() {

  return async ( dispatch, getState ) => {

    // ---------------------------------------------------------
    // Get view from url by taking the last portion of the url
    // ---------------------------------------------------------
    const value = location.pathname.split( "/" ).filter( p => !!p ).pop()

    dispatch( {
      type: "navigation",
      data: value || ""
    } )

  }

}