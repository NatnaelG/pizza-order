import { Box, Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import PizzaCard from "./PizzaCard";

export default function Fasting() {
  return (
    <>
      <Typography sx={{ color: "text.secondary", fontWeight: 500, fontSize: {xs:"15px", lg: "50px"} }}>
        Fasting
      </Typography>
      <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll", pb: 1 }}
      >
      <Stack direction={"row"} spacing={3}>
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
        </Box>
        <Box>
          <PizzaCard />
        </Box>
        <Box>
          <PizzaCard />
        </Box>
      </Stack>
      </Box>
    </>
  );
}
