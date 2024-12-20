import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import PizzaCard from "./PizzaCard";
import { Menu, Restaurant } from "@prisma/client";

export default function Fasting({
  menus,
}: {
  menus: (Menu & { Restaurant: Restaurant })[] | [];
}) {
  return (
    <>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 500,
          fontSize: { xs: "25px", lg: "50px" },
        }}
      >
        Fasting
      </Typography>
      <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll", pb: 1 }}
      >
        <Stack direction={"row"} spacing={3}>
          {menus.map((menu) => (
            <Box key={menu.id}>
              <PizzaCard menu={menu} type="Fasting" />
            </Box>
          ))}
          {/* <Box>
          <PizzaCard />
        </Box>
        <Box>
          <PizzaCard />
        </Box>
        <Box>
          <PizzaCard />
        </Box>
        <Box>
          <PizzaCard />
        </Box>
        <Box>
          <PizzaCard />
        </Box> */}
        </Stack>
      </Box>
    </>
  );
}
