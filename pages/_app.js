import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import '../styles/globals.scss';

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ShopPay</title>
        <meta
          name="description"
          content="ShopPay - online shopping service for all of your needs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
