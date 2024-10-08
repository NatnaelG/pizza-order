import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeaderNav from "@/components/HeaderNav";
import { getUserBySession } from "@/lib/actions";
import OrderHistoryCards from "@/components/OrderHistoryCards";
import { getMyOrders } from "@/lib/order/order-management";

export default async function OrderHistory() {
  const loggedUserData = getUserBySession();
  const orderData = getMyOrders();

  // Initiate both requests in parallel
  const [loggedUser, orders] = await Promise.all([loggedUserData, orderData]);

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

      <Box width={{ xs: "fit-content", lg: "80%" }} sx={{ m: "auto" }}>
        <Typography
          sx={{ fontWeight: 500, fontSize: "50px", color: "#00000080" }}
        >
          Order History
        </Typography>

        <Box p={3}>
          <OrderHistoryCards
            orders={typeof orders === "string" || orders === null ? [] : orders}
          />
        </Box>
      </Box>
    </Stack>
  );
}
