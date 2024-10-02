import React from "react";
import Related from "@/components/OrderItem/Related";
import OrderItem from "@/components/OrderItem/OrderItem";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid2";
import { getMenu } from "@/lib/order-item/order-item-management";
import OrderItemImages from "@/components/OrderItem/OrderItemImages";

export default async function MenuItem({ params }: { params: { id: string } }) {
  const menu = await getMenu(params.id);

  return (
    <>
      <Box p={3} width={"100%"}>
        <Grid container spacing={2}>
          <Grid
            //  key={permission + " " + index}
            size={{ xs: 12, lg: 6 }}
            display={"grid"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OrderItemImages />
          </Grid>

          <Grid
            //  key={permission + " " + index}
            size={{ xs: 12, lg: 6 }}
            sx={{ maxWidth: { xs: "600px", lg: "inherit" }, display: "flex", alignItems:"center" }}
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
