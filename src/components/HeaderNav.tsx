import { Stack, Typography, Button } from "@mui/material";
import PizzaLogo from "./PizzaLogo";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <Stack
      width={"100%"}
      justifyContent={"space-between"}
      height={"75px"}
      direction={{xs: "column" , lg: "row"}}
      // direction={"row"}
    >
      <PizzaLogo />
      <Stack 
      direction={{xs: "column" , lg: "row"}}
      // direction={"row"}
       justifyContent={"space-between"} spacing={3} width={{xs: "100%", lg: "605px"}}>
        <Link href={"/"}>
          <Typography fontWeight={500} fontSize={"25px"} color="#FF8100">
            Home
          </Typography>
        </Link>
        <Link href={"/order"}>
          <Typography fontWeight={500} fontSize={"25px"} color="#000">
            Order
          </Typography>
        </Link>
        <Link href={"/about-us"}>
          <Typography fontWeight={500} fontSize={"25px"} color="#000">
            Who we are
          </Typography>
        </Link>
      </Stack>

      <Button
        sx={{ width: "168px", height: "56px", background: "#FF890F" }}
        variant={"contained"}
      >
        <Typography>Register</Typography>
      </Button>
    </Stack>
  );
}
