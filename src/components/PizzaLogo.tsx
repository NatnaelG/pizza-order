import { Box } from "@mui/material";
import Image from "next/image";
import SlicePizzaImage from "@/public/logo.png";

export default function PizzaLogo() {
  return (
    <Box>
      <Image src={SlicePizzaImage} alt="Slice Pizza Image" />
    </Box>
  );
}
