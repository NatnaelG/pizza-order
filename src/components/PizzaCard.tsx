import React from "react";
import {
  //   Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PizzaImage from "@/public/pizza.png";
import DefaultAvatar from "@/public/defaultImage.jpeg";
import Link from "next/link";
import { Menu, Restaurant } from "@prisma/client";

export default function PizzaCard({
  menu,
}: {
  menu: Menu & { Restaurant: Restaurant };
}) {
  return (
    <>
      <Stack
        component={Paper}
        spacing={2}
        alignItems={"center"}
        sx={{ width: "390px", height: "655px", borderRadius: "25px" }}
      >
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              background: "#EA810033",
              borderRadius: "100%",
              p: "22px 10px 10px 22px;",
              m: 2,
            }}
          >
            <Image
              src={PizzaImage}
              alt="Pizza"
              width={275}
              height={280}
              priority
            />
          </Box>
        </Box>

        <Stack width={"330px"} height={"175px"} spacing={1}>
          <Typography fontWeight={700} fontSize={"25px"} variant="h6">
            {menu.name}
          </Typography>
          <Typography fontWeight={400} fontSize={"15px"} variant="subtitle2">
            {/* Tomato, Mozzarella, Bell Peppers, Onions, Olives */}
            {menu.toppings.join(", ")}
          </Typography>
          <Stack
            height={"70px"}
            width={"330px"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack width={"111px"} direction={"row"} spacing={"3px"}>
              <Typography
                fontWeight={700}
                fontSize={"45px"}
                sx={{ color: "#01C550" }}
              >
                {`${menu.price}`}
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                sx={{ lineHeight: 3 }}
              >
                Birr
              </Typography>
            </Stack>
            <Link href={`order-item/${menu.id}`}>
              <Button
                sx={{
                  width: "170px",
                  height: "66px",
                  p: "10px 20px",
                  borderRadius: "10px",
                  background: "#FF8100",
                }}
                variant={"contained"}
                data-id={"order"}
              >
                Order
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Stack width={"330px"} spacing={2}>
          <Divider />

          {/* <Avatar> */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* <Box height={65} width={65}> */}

            <Image
              src={DefaultAvatar}
              width={65}
              height={65}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              alt="Default Avatar"
              priority
            />
            {/* </Box> */}

            <Typography
              variant={"subtitle1"}
              fontWeight={700}
              fontSize={"20px"}
              sx={{ color: "#000" }}
            >
              {menu.Restaurant.name}
            </Typography>
          </Stack>
          {/* </Avatar> */}
        </Stack>
      </Stack>
    </>
  );
}
