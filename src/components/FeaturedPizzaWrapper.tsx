"use client";

import { Box, Typography } from "@mui/material";
import FeaturedPizza from "./FeaturedPizza";
import Carousel from "react-material-ui-carousel";
import FeaturedPizzaImage from "@/public/featured.png";
import FeaturedSecondPizzaImage from "@/public/featured2.png";
import FeaturedThirdPizzaImage from "@/public/featured3.png";

export default function FeaturedPizzaWrapper() {
  return (
    <>
      <Typography sx={{ color: "text.secondary", fontSize: "50px" }}>
        Featured Pizza
      </Typography>
      {/* <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll" }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "max-content",
          }}
          spacing={2}
          p={1}
        > */}
      <Box
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: "40px",
          },
        }}
      >
        <Carousel
          navButtonsAlwaysInvisible={true}
          animation="slide"
          height={400}
          indicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "#B6B6B6",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "#FF9921",
            },
          }}
        >
          <FeaturedPizza
            key={1}
            backgroundProp="#2F2F2F"
            image={FeaturedPizzaImage}
            imageSize={{ width: 658, height: 484 }}
          />
          <FeaturedPizza
            key={2}
            backgroundProp="#50482B"
            image={FeaturedSecondPizzaImage}
            imageSize={{ width: 590, height: 599 }}
          />
          <FeaturedPizza
            key={3}
            backgroundProp="#296D60"
            image={FeaturedThirdPizzaImage}
            imageSize={{ width: 613, height: 629 }}
          />
        </Carousel>
      </Box>
      {/* </Stack>
        </Box> */}
    </>
  );
}
