import Head from 'next/head';
import { Provider } from 'react-redux';

import 'styles/styles.scss';
/*
Components
 */
import Layout from 'components/Layout';
/*
Store
 */
import store from '~store/index';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
