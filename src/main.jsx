import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/src/dropdown.js";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.js";
import OverlayLoader from './components/OverlayLoader/OverlayLoader.jsx';
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_en from './locales/en/global.json'
import global_tr from './locales/tr/global.json'

i18next.init({
  interpolation: { escapeValue: false },
   lng: 'auto',
   fallbackLng: 'en',
  resources: {
   en: {
    global: global_en,
   },
   tr: {
    global: global_tr,
   },
  },
 })

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </React.StrictMode>
  <Provider store={store}>
    {/* <OverlayLoader /> */}
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />


<I18nextProvider i18n={i18next}>
      <App />
      </I18nextProvider>
    </Router>
  </Provider>

)
