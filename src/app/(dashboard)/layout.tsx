import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box height={"100vh"} sx={{ background: "#fff" }}>
      {children}
    </Box>
  );
}
