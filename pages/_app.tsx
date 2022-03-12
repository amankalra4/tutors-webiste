import Router from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import LinearDeterminate from "@components/progress-bar";

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true));
        Router.events.on("routeChangeComplete", () => setLoading(false));
        Router.events.on("routeChangeError", () => setLoading(false));
        return () => {
            Router.events.off("routeChangeError", () => setLoading(false));
        };
    }, []);
    return (
        <div>
            {loading && <LinearDeterminate />}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
