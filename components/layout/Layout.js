import Loader from "../common/loader/Loader";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN } from "../../constants/misc";
import { NavHeaderMobile } from "./menu/menuMobile/NavHeaderMobile";
import { NavHeaderTablet } from "./menu/menuTablet/NavHeaderTablet";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      {size.width <= SCREEN.tablet ? <NavHeaderMobile /> : <NavHeaderTablet />}
      {loading ? <Loader /> : children}
    </>
  );
}
