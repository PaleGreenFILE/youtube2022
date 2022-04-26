import { useEffect } from "react";

const AxeptioInjector = () => {
  useEffect(() => {
    const PRIVATE_KEY = process.env.REACT_APP_AXEPTIO_KEY;
    const el = document.createElement("script");
    el.setAttribute("src", "https://static.axept.io/sdk-slim.js");
    el.setAttribute("type", "text/javascript");
    el.setAttribute("async", "true");
    el.setAttribute("data-id", "62682a1f5ce7ffa2f023194a");
    if (document.body !== null) {
      document.body.appendChild(el);
    }
  }, []);

  return null;
};

export default AxeptioInjector;
