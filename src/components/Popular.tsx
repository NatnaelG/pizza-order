import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PizzaCard from "./PizzaCard";

export default function Popular() {
  return (
    <>
      <Typography sx={{ color: "text.secondary", fontSize: "50px" }}>
        Popular Pizzas
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{xs: 12, lg: 4}} display={"flex"} justifyContent={"center"}>
          <PizzaCard />
        </Grid>
        <Grid size={{xs: 12, lg: 4}} display={"flex"} justifyContent={"center"}>
          <PizzaCard />
        </Grid>
        <Grid size={{xs: 12, lg: 4}} display={"flex"} justifyContent={"center"}>
          <PizzaCard />
        </Grid>
        <Grid size={4} display={{xs: "none", lg: "flex"}} justifyContent={"center"} >
          <PizzaCard />
        </Grid>
        <Grid size={4} display={{xs: "none", lg: "flex"}} justifyContent={"center"}>
          <PizzaCard />
        </Grid>
        <Grid size={4} display={{xs: "none", lg: "flex"}} justifyContent={"center"}>
          <PizzaCard />
        </Grid>
      </Grid>
    </>
  );
}
