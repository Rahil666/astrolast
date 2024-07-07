import "bootstrap/dist/css/bootstrap.css";
import "@/styles/elementor.css";
import "@/styles/formandpopup.css";
import "@/styles/globals.css";
import "@/styles/homepage.css";
import "@/styles/multiRangeSlider.css";
import "@/styles/timeline.css";
import "@/styles/responsive.css";
import "select2/dist/css/select2.min.css";
import "nprogress/nprogress.css";
import nextI18NextConfig from '../next-i18next.config.js';
import Layout from "@/components/Layout";
import NProgress from "nprogress";
import React, { useEffect } from "react";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";
import '../lib/i18n.js';

function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
    
    // Clean up the event listeners on unmount
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleRouteChangeStart = (url) => {
    NProgress.start();
  };

  const handleRouteChangeComplete = () => {
    NProgress.done();
  };

  const handleRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
