import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeaderNav from "@/components/HeaderNav";
import { getUserBySession } from "@/lib/actions";
import OrderHistoryCards from "@/components/OrderHistoryCards";

export default async function OrderHistory() {
  const loggedUser = await getUserBySession();

  return (
    <Stack>
      <Box
        p={3}
        // sx={{
        //   background: "linear-gradient(to bottom, #FFFFFF, #FFC993, #FFF8F1)",
        // }}
      >
        <HeaderNav loggedUser={loggedUser} />
      </Box>

      <Box width={{ xs: "fit-content", lg: "75%" }} sx={{ m: "auto" }}>
        <Typography
          sx={{ fontWeight: 500, fontSize: "50px", color: "#00000080" }}
        >
          Order History
        </Typography>

        <Box p={3}>
          <OrderHistoryCards />
        </Box>
      </Box>
    </Stack>
  );
}
