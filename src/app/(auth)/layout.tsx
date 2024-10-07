import React from "react";
import { Box, Paper, Stack } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import LoginPizza from "@/public/auth_pizza.png";
import LoginOpenBook from "@/public/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <Box sx={{ display: "flex" }}>
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        size={{ sm: 6 }}
        display={{ xs: "none", sm: "grid" }}
        sx={{
          // height: "inherit",
          background: "#FF9921",
          justifyContent: "center",
          alignItems: "center",
          // ">img": {
          //   width: "305px",
          //   height: "300px",
          // },
        }}
      >
        <Image
          src={LoginPizza}
          alt="Login Pizza"
          // className={styles.vercelLogo}
            width={305}
          height={300}
          priority
        />
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        container
        direction={"column"}
        // sx={{ height: "inherit" }}
      >
        <Paper
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box p={{xs: 2, lg: "104px"}}>
            <Stack direction={"row"} spacing={2} alignItems={"center"} pb={3}>
              <Image
                src={LoginOpenBook}
                alt="Open Book"
                // className={styles.vercelLogo}
                width={133}
                height={50}
                priority
              />
              {/* <Typography variant="h4">Book Rent</Typography> */}
            </Stack>
            {children}
          </Box>
        </Paper>
      </Grid>
    </Grid>
    // </Box>
  );
}
