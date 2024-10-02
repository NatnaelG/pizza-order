import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Menu as MenuType, Order, Restaurant } from "@prisma/client";
import RestaurantCard from "./RestaurantCard";

export default function TopRestaurants({
  restaurants,
}: {
  restaurants:
    | ({
        menus: ({
          Order: Order[];
        } & MenuType)[];
      } & Restaurant)[]
    | [];
}) {
  return (
    <>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "25px", lg: "50px" } }}
      >
        Top Restaurants
      </Typography>
      <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll" }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "max-content",
          }}
          spacing={2}
          p={1}
        >
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
          {/* <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard /> */}
        </Stack>
      </Box>
    </>
  );
}
