"use client";

import Image from "next/image";
import * as React from "react";
import HeroPizzaImage from "@/public/hero-pizza.png";

export default function ImageResponsive() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = React.useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
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
    <>
      <Image
        style={{
          width: windowDimensions.width > 900 ? "1024px" : "350px",
          height: windowDimensions.width > 900 ? "1024px" : "350px",
        }}
        src={HeroPizzaImage}
        alt="Featured Pizza Image"
        priority
      />
      {/* <Image src={SlicePizzaImage} alt="Slice Pizza Image" priority /> */}
    </>
  );
}
