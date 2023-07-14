import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// import p/ validation
import PropTypes from 'prop-types'

export default function MyRoute({ component: Component, isClosed, ...rest }) {
   const isLoggedId = true

   if (isClosed && !isLoggedId) {
      return (
         <Redirect
            to={{
               pathname: '/login',
               state: {
                  prevPath: rest.location.pathname,
               },
            }}
         />
      )
   }
   return <Route {...rest} component={Component} />
}
MyRoute.defaultProps = {
   isClosed: false,
}

MyRoute.propTypes = {
   //valida components:
   component: PropTypes.oneOfType([
      // recebe 2 props para validar
      PropTypes.element,
      PropTypes.func,
   ]).isRequired,
   //valid closed
   isClosed: PropTypes.bool,
}
