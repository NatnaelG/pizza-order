import { Stack, Typography, Button } from "@mui/material";
import PizzaLogo from "./PizzaLogo";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <Stack
      width={"100%"}
      justifyContent={"space-between"}
      height={"75px"}
      direction={"row"}
    >
      <PizzaLogo />
      <Stack direction={"row"} spacing={3}>
        <Link href={"/"}>
          <Typography fontWeight={600} fontSize={"25px"} color="#000">
            Home
          </Typography>
        </Link>
        <Link href={"/order"}>
          <Typography fontWeight={600} fontSize={"25px"} color="#000">
            Order
          </Typography>
        </Link>
        <Link href={"/about-us"}>
          <Typography fontWeight={600} fontSize={"25px"} color="#000">
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
