import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PizzaCard from "./PizzaCard";
import { Menu, Restaurant } from "@prisma/client";

export default function Popular({
  menus,
}: {
  menus: (Menu & { Restaurant: Restaurant })[] | [];
}) {
  return (
    <>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "25px", lg: "50px" } }}
      >
        Popular Pizzas
      </Typography>

      <Grid container spacing={3}>
        {menus.map((menu) => (
          <Grid
            key={menu.id}
            size={{ xs: 12, md: 6, lg: 4 }}
            display={"flex"}
            justifyContent={"center"}
          >
            <PizzaCard menu={menu} type="Popular" />
          </Grid>
        ))}
        {/* <Grid
          size={{ xs: 12, lg: 4 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <PizzaCard />
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <PizzaCard />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <PizzaCard />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <PizzaCard />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <PizzaCard />
        </Grid> */}
      </Grid>
    </>
  );
}
