"use client";

import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

import FeaturedSecondPizzaImage from "@/public/featured2.png";
import FeaturedThirdPizzaImage from "@/public/featured3.png";
import { Box } from "@mui/material";

export default function OrderItemImages() {
  const [selectedImage, setSelectedImage] = React.useState(
    FeaturedThirdPizzaImage
  );
  return (
    <Grid container width={"100%"}>
      <Grid sx={{ display: { xs: "block", lg: "none" } }}>
        <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              background: "#EA810033",
              borderRadius: "100%",
              p: "22px;",
              m: 2,
            }}
          >
            <Image
              src={selectedImage}
              width={232}
              height={232}
              alt={"Order Item Image"}
            />
          </Box>
        </Box>
      </Grid>

      <Grid sx={{ display: { xs: "none", lg: "block" } }}>
        <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              background: "#EA810033",
              borderRadius: "100%",
              p: "22px;",
              m: 2,
            }}
          >
            <Image
              src={selectedImage}
              width={360}
              height={360}
              alt={"Order Item Image"}
            />
          </Box>
        </Box>
      </Grid>

      <Grid
        direction={"column"}
        sx={{ display: { xs: "block", lg: "none" } }}
        container
      >
        <Grid onClick={() => setSelectedImage(FeaturedThirdPizzaImage)}>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: selectedImage === FeaturedThirdPizzaImage ? "#D9D9D9" : "#0201014D",
                borderRadius: "100%",
                p: "22px;",
                m: 2,
                filter: selectedImage === FeaturedThirdPizzaImage ? "brightness(1)" : "brightness(0.5)",
              }}
            >
              <Image
                src={FeaturedThirdPizzaImage}
                width={100}
                height={100}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid onClick={() => setSelectedImage(FeaturedSecondPizzaImage)}>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: selectedImage === FeaturedSecondPizzaImage ? "#D9D9D9" : "#0201014D",
                borderRadius: "100%",
                p: "22px;",
                m: 2,
                filter: selectedImage === FeaturedSecondPizzaImage ? "brightness(1)" : "brightness(0.5)",
              }}
            >
              <Image
                src={FeaturedSecondPizzaImage}
                width={100}
                height={100}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        direction={"column"}
        sx={{ display: { xs: "none", lg: "block" } }}
        container
      >
        <Grid onClick={() => setSelectedImage(FeaturedThirdPizzaImage)}>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: selectedImage === FeaturedThirdPizzaImage ? "#D9D9D9" : "#0201014D",
                borderRadius: "100%",
                p: "10px;",
                m: 2,
                filter: selectedImage === FeaturedThirdPizzaImage ? "brightness(1)" : "brightness(0.5)",
              }}
            >
              <Image
                src={FeaturedThirdPizzaImage}
                width={170}
                height={170}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid onClick={() => setSelectedImage(FeaturedSecondPizzaImage)}>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: selectedImage === FeaturedSecondPizzaImage ? "#D9D9D9" : "#0201014D",
                borderRadius: "100%",
                p: "10px;",
                m: 2,
                filter: selectedImage === FeaturedSecondPizzaImage ? "brightness(1)" : "brightness(0.5)",
              }}
            >
              <Image
                src={FeaturedSecondPizzaImage}
                width={170}
                height={170}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
