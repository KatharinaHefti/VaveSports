export function init() {

  return async ( dispatch, getState ) => {

    // Current view
    const value = location.pathname.split( "/" ).filter( p => !!p ).pop()

    dispatch( {
      type: "navigation",
      data: value || ""
    } )

  }

}