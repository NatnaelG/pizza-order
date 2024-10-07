import * as React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import SlicePizzaImage from "@/public/logo.png";

export default function PizzaLogo() {
  return (
    <>
      <Box display={{ xs: "none", lg: "block" }}>
        <Image
          width={133}
          height={50}
          src={SlicePizzaImage}
          alt="Slice Pizza Image"
          priority
        />
      </Box>

      {/* small screen */}

      <Box display={{ xs: "block", lg: "none" }}>
        <Image
          width={65}
          height={27}
          src={SlicePizzaImage}
          alt="Slice Pizza Image"
          priority
        />
      </Box>
    </>
  );
}
// export function PizzaLogoMobile() {
//   return (
//     <Box width={"inherit"}>
//       <Image width={65} src={SlicePizzaImage} alt="Slice Pizza Image" priority />
//     </Box>
//   );
// }
