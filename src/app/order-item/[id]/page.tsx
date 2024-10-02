import React from "react";
import Related from "@/components/OrderItem/Related";
import OrderItem from "@/components/OrderItem/OrderItem";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid2";
import { getMenu } from "@/lib/order-item/order-item-management";

export default async function MenuItem({ params }: { params: { id: string } }) {
  const menu = await getMenu(params.id);

  return (
    <>
      <Box p={3} width={"100%"}>
        <Grid container spacing={2}>
          <Grid
            //  key={permission + " " + index}
            size={{ xs: 12, lg: 6 }}
          ></Grid>

          <Grid
            //  key={permission + " " + index}
            size={{ xs: 12, lg: 6 }}
            sx={{ maxWidth: { xs: "600px", lg: "inherit" } }}
          >
            <OrderItem menu={typeof menu === "string" ? null : menu} />
          </Grid>
        </Grid>
      </Box>
      <Box p={3} width={"100%"}>
        <Related />
      </Box>
    </>
  );
}
