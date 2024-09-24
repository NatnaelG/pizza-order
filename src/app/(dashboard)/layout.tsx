import { Box } from "@mui/material";

import ResponsiveDrawer from "@/components/dashboard/side-drawer";
import Toolbar from "@mui/material/Toolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const drawerWidth = 279;
  return (
    <Box height={"100vh"} sx={{ display: "flex", background: "#fff" }}>
      <ResponsiveDrawer drawerWidth={drawerWidth} />
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
