import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN } from "../../constants/misc";
// import { NavHeaderMobile } from "./menuMobile/NavHeaderMobile";
// import { NavHeaderTablet } from "./menuTablet/NavHeaderTablet";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../common/loader/Loader";
import Head from "next/head";

//  {size.width} <- bredde
//  {size.height} <- høyde

export default function ({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const size = useWindowSize();

  return (
    <>
      {/* {size.width <= SCREEN.tablet ? <NavHeaderMobile /> : <NavHeaderTablet />} */}
      {loading ? <Loader /> : children}
    </>
  );
}

{
  /* 
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,600;0,700;1,400&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>  */
}
