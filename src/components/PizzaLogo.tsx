"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import SlicePizzaImage from "@/public/logo.png";

export default function PizzaLogo() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = React.useCallback(() => {
    const width = hasWindow ? window.innerWidth : 1000;
    const height = hasWindow ? window.innerHeight : 1000;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  // const [mounted, SetMounted] = React.useState("false");

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (hasWindow) {
      // SetMounted("true");
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return (
    <Box>
      <Image
        style={{
          width: windowDimensions.width > 900 ? "133px" : "65px",
          height: windowDimensions.width > 900 ? "50px" : "27px",
        }}
        src={SlicePizzaImage}
        alt="Slice Pizza Image"
        priority
      />
    </Box>
  );
}
// export function PizzaLogoMobile() {
//   return (
//     <Box width={"inherit"}>
//       <Image width={65} src={SlicePizzaImage} alt="Slice Pizza Image" priority />
//     </Box>
//   );
// }
