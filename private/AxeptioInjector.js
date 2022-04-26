import { useEffect } from "react";

const AxeptioInjector = () => {
  useEffect(() => {
    const el = document.createElement("script");
    el.setAttribute("src", "https://static.axept.io/sdk-slim.js");
    el.setAttribute("type", "text/javascript");
    el.setAttribute("async", "true");
    el.setAttribute("data-id", "6265f63e17a9a6c7340d8cd0");
    if (document.body !== null) {
      document.body.appendChild(el);
    }
  }, []);

  return null;
};

export default AxeptioInjector;