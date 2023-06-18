// React
import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import history from './services/history'
// imports components
import Header from './components/Header'
import store, { persistor } from './store'
//import Styles
import GlobalStyled from './styles/GlobalStyled'
// router - nav
import Routes from './routes'

//exports
export default function App() {
   return (
      <PersistGate persistor={persistor}>
         <Provider store={store}>
            <Router history={history}>
               <Header />
               <Routes />
               <GlobalStyled />
               <ToastContainer
                  autoClose={3000} //tempo das msg
                  className="toast-container"
               />
            </Router>
         </Provider>
      </PersistGate>
   )
}
