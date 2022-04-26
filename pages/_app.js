import "../styles/globals.css";

import Layout from "./../components/Layout";
import AxeptioInjector from './../util/AxeptioInjector';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AxeptioInjector/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
