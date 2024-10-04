import React from "react";
import { Box } from "@mui/material";

import ResponsiveDrawer from "@/components/dashboard/side-drawer";
import Toolbar from "@mui/material/Toolbar";

import { getUserBySession } from "@/lib/actions";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const loggedUser = await getUserBySession(); 


  const drawerWidth = 258;
  return (
    <Box height={"100vh"} sx={{ display: "flex", background: "#F8F8F8" }}>
      <ResponsiveDrawer drawerWidth={drawerWidth} loggedUser={loggedUser} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // mt: "10px",
          height: "-webkit-fill-available",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
