import React from "react";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
// import Image from "next/image";
// import HeroPizzaImage from "@/public/hero-pizza.png";
import SearchIcon from "@mui/icons-material/Search";
import ImageResponsive from "./ImageResponsive";

export default function Hero() {
  return (
    <>
      <Stack
        // component={Paper}
        sx={{
          //   background: `${backgroundProp}`,
          //   borderRadius: "40px",
          //   pl: 5,
          overflow: "hidden",
        }}
        width={"100%"}
        height={{ xs: "338px", sm: "460px", md: "600px", lg: "806px" }}
        direction={"row"}
      >
        <Stack
          width={{ xs: "261px", sm: "400px", md: "560px", lg: "766px" }}
          height={{ xs: "183px", sm: "280px", md: "350px", lg: "501px" }}
          sx={{
            pl: { xs: 0, sm: "10px", md: "30px", lg: "60px" },
            pt: { xs: "40px", md: "60px", lg: "80px" },
          }}
          justifyContent={"space-evenly"}
          spacing={3}
        >
          <Typography
            fontWeight={700}
            fontSize={{ xs: "40px", sm: "70px", md: "100px", lg: "150px" }}
            sx={{
              background: "linear-gradient(to right, #FF8100, #FFBE71)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Order us
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ xs: "10px", sm: "15px", md: "20px", lg: "26px" }}
            color="#050505"
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end" sx={{ pr: 2 }}>
                <IconButton
                  sx={{
                    background: "#FF890F",
                    color: "#fff",
                    fontSize: {
                      xs: "15px",
                      sm: "25px",
                      md: "40px",
                      lg: "70px",
                    },
                  }}
                  aria-label="send"
                  edge="end"
                  size={"large"}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
            sx={{
              background: "#fff",
              width: { xs: "261px", sm: "380px", md: "500px", lg: "748px" },
              height: { xs: "57px", sm: "75px", md: "90px", lg: "118px" },
              fontSize: { xs: "large", lg: "xx-large" },
              px: 1,
              borderRadius: "100px",
            }}
          />
        </Stack>
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              position: "relative",
              right: { xs: "45px", sm: "-15px", md: "-35px", lg: "-100px" },
              top: { xs: "-20px", sm: "-40px", md: "-80px", lg: "-100px" },
            }}
            width={{ xs: "169px", sm: "300px", md: "460px", lg: "794px" }}
            height={{ xs: "300px", sm: "400px", md: "500px", lg: "806px" }}
            component={Container}
          >
            <ImageResponsive />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
