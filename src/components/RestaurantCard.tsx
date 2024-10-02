// "use client";

import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import DefaultAvatar from "@/public/defaultImage.jpeg";
import Bolt from "@/public/bolt.png";
import Image from "next/image";
import { Menu, Order, Restaurant } from "@prisma/client";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: {
    menus: ({
      Order: Order[];
    } & Menu)[];
  } & Restaurant;
}) {
  // console.log("restaurant, menus", restaurant, restaurant.menus);

  let count = 0;
  restaurant.menus.map((menu) =>
    menu.Order.map((order) => {
      count += 1;
      return order;
    })
  );
  return (
    <Card sx={{ maxWidth: 550, p: 1, display: "flex", borderRadius: "10PX" }}>
      <Box sx={{ display: "flex", flexDirection: "row", p: 1 }}>
        <Box sx={{ maxWidth: 235, height: 110 }}>
          <CardHeader
            avatar={
              <Image
                src={DefaultAvatar}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt="Default Avatar"
                priority
                width={50}
                height={50}
              />
            }
            title={
              <Typography
                variant={"subtitle1"}
                fontWeight={700}
                fontSize={"20px"}
                sx={{ color: "#000" }}
              >
                {restaurant.name}
              </Typography>
            }
            sx={{ p: 1 }}
          />
          <CardContent sx={{ p: 1, py: "0px !important" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive pizza is a perfect party dish and a fun meal to
              cook together with your guests...
            </Typography>
          </CardContent>
        </Box>
        <Stack
          height={90}
          width={265}
          sx={{ background: "#0080000D", borderRadius: "10px", p: "15px" }}
          direction={"row"}
          spacing={3}
        >
          <Avatar sx={{ background: "#FF810033", height: 84, width: 84 }}>
            <Image src={Bolt} alt="Bolt" width={45} height={45} priority />
          </Avatar>
          <Box pt={1}>
            <Typography sx={{ color: "text.secondary", lineHeight: "1" }}>
              Number of order
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "60px",
                color: "#FF8100",
                lineHeight: "1",
              }}
            >
              {`${count}K`}
              {/* {`${restaurant.menus.length > 0 && restaurant.menus.Order.length ?.Order?.length || 0}K`} */}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
