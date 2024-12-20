"use client";

import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import PizzaLogo from "./PizzaLogo";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { signout, User } from "@/lib/actions";
import { Role } from "@prisma/client";
import { usePathname } from "next/navigation";

export default function HeaderNav({
  loggedUser,
}: {
  loggedUser: (User & { Role: Role }) | null;
}) {
  const pathname = usePathname();

  return (
    <Stack
      width={"100%"}
      justifyContent={"space-between"}
      height={"75px"}
      // direction={{ xs: "column", lg: "row" }}
      direction={"row"}
      alignItems={"center"}
    >
      <PizzaLogo />
      <Stack
        // direction={{ xs: "column", lg: "row" }}
        direction={"row"}
        justifyContent={"space-between"}
        spacing={3}
        width={{ xs: "fit-content", lg: "605px" }}
      >
        <Link href={"/"}>
          <Typography
            fontWeight={500}
            fontSize={{ xs: "16px", lg: "25px" }}
            color={pathname === "/" ? "#FF8100" : "#000"}
          >
            Home
          </Typography>
        </Link>
        <Link href={"/order-history"}>
          <Typography
            fontWeight={500}
            fontSize={{ xs: "16px", lg: "25px" }}
            color={pathname === "/order-history" ? "#FF8100" : "#000"}
          >
            Order
          </Typography>
        </Link>
        {loggedUser?.restaurantId && (
          <Link href={"/order"}>
            <Typography
              fontWeight={500}
              fontSize={{ xs: "16px", lg: "25px" }}
              color="#000"
            >
              Dashboard
            </Typography>
          </Link>
        )}
        <Link href={"/about-us"}>
          <Typography
            fontWeight={500}
            fontSize={"25px"}
            display={{ xs: "none", lg: "block" }}
            color="#000"
          >
            Who we are
          </Typography>
        </Link>
        {/* <Typography
          fontWeight={500}
          fontSize={"25px"}
          display={{ xs: "block", lg: "none" }}
          color="#000"
        > */}
        <MenuIcon sx={{ display: { xs: "block", lg: "none" } }} />
        {/* </Typography> */}
      </Stack>
      {loggedUser === null ? (
        <Link href={"/register"}>
          <Button
            sx={{
              width: "168px",
              display: { xs: "none", lg: "block" },
              height: "56px",
              background: "#FF890F",
            }}
            variant={"contained"}
          >
            <Typography id={"register"}>Register</Typography>
          </Button>
        </Link>
      ) : (
        <Button
          sx={{
            width: "168px",
            display: { xs: "none", lg: "block" },
            height: "56px",
            background: "#FF890F",
          }}
          variant={"contained"}
          onClick={() => signout()}
        >
          <Typography id={"LogOut"}>LogOut</Typography>
        </Button>
      )}
    </Stack>
  );
}
