import { Box, Paper, Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import LoginBook from "@/public/logo.png";
import LoginOpenBook from "@/public/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <Box sx={{ display: "flex" }}>
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        size={{ sm: 6 }}
        display={{ xs: "none", sm: "grid" }}
        sx={{
          height: "inherit",
          ">img": {
            width: "100%",
            height: "inherit",
          },
        }}
      >
        <Image
          src={LoginBook}
          alt="Login Book"
          // className={styles.vercelLogo}
        //   width={720}
          // height={1024}
          priority
        />
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        container
        direction={"column"}
        sx={{ height: "inherit" }}
      >
        <Paper
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box p={"104px"}>
            <Stack direction={"row"} spacing={2} alignItems={"center"} pb={3}>
              <Image
                src={LoginOpenBook}
                alt="Open Book"
                // className={styles.vercelLogo}
                width={60}
                height={35}
                priority
              />
              <Typography variant="h4">Book Rent</Typography>
            </Stack>
            {children}
          </Box>
        </Paper>
      </Grid>
    </Grid>
    // </Box>
  );
}
