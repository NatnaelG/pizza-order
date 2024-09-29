import { Box, Stack, Typography } from "@mui/material";
import RestaurantCard from "./RestaurantCard";

export default function TopRestaurants() {
  return (
    <>
      <Typography sx={{color: "text.secondary", fontSize: {xs:"25px", lg: "50px"}}}>Top Restaurants</Typography>
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
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </Stack>
      </Box>
    </>
  );
}
