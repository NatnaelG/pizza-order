import Image from "next/image";
import * as React from "react";
import HeroPizzaImage from "@/public/hero-pizza.png";
import { Box } from "@mui/material";

export default function ImageResponsive() {
  return (
    <>
      <Box display={{ xs: "none", lg: "block" }}>
        <Image
          width={1024}
          height={1024}
          src={HeroPizzaImage}
          alt="Featured Pizza Image"
          priority
        />
      </Box>

      {/* Medium screen */}

      <Box display={{ xs: "none", md: "block", lg: "none" }}>
        <Image
          width={804}
          height={804}
          src={HeroPizzaImage}
          alt="Featured Pizza Image"
          priority
        />
      </Box>


      {/* Small screen */}

      <Box display={{ xs: "none", sm: "block", md: "none", lg: "none" }}>
        <Image
          width={554}
          height={554}
          src={HeroPizzaImage}
          alt="Featured Pizza Image"
          priority
        />
      </Box>

      {/* small screen */}

      <Box display={{ xs: "block", lg: "none" }}>
        <Image
          width={350}
          height={350}
          src={HeroPizzaImage}
          alt="Featured Pizza Image"
          priority
        />
      </Box>

      {/* <Image src={SlicePizzaImage} alt="Slice Pizza Image" priority /> */}
    </>
  );
}
