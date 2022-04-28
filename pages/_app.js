import "../styles/globals.css";
import Recaptcha from "../util/Recaptcha";
import Layout from "./../components/Layout";
import AxeptioInjector from "./../util/AxeptioInjector";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <AxeptioInjector />
        <Recaptcha />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
