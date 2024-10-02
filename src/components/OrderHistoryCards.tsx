import React from "react";
// import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import PizzaCard from "./PizzaCard";
import OrderHistoryPizza from "./OrderHistoryPizza";

export default function OrderHistoryCards() {
  return (
    <>
      {/* <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "25px", lg: "50px" } }}
      >
        Popular Pizzas
      </Typography> */}

      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, lg: 4 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <OrderHistoryPizza />
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <OrderHistoryPizza />
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          // display={"flex"}
          justifyContent={"center"}
          display={{ xs: "none", lg: "flex" }}
        >
          <OrderHistoryPizza />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <OrderHistoryPizza />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <OrderHistoryPizza />
        </Grid>
        <Grid
          size={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <OrderHistoryPizza />
        </Grid>
      </Grid>
    </>
  );
}
