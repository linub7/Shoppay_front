import { Provider } from 'react-redux';
import store from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/globals.scss';

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
          }}
        />
        <PersistGate loading={null} persistor={persistor}>
          <PayPalScriptProvider deferLoading={true}>
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
