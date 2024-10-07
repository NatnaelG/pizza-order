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
    <Grid container size={12} spacing={{ sm: 5, xs: 0, lg: 0 }}>
      {/* xsmall screens */}
      <>
        <Grid
          sx={{ display: { xs: "block", sm: "none" } }}
          size={{ xs: 12, lg: 6 }}
        >
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
                width={282}
                height={282}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          direction={"row"}
          sx={{ display: { xs: "flex", sm: "none" } }}
          container
          // width={"100%"}
          size={{ xs: 12, lg: 6 }}
        >
          <Grid
            onClick={() => setSelectedImage(FeaturedThirdPizzaImage)}
            size={{ xs: 6 }}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: "10px",
                  m: 2,
                  filter:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
                }}
              >
                <Image
                  src={FeaturedThirdPizzaImage}
                  width={150}
                  height={150}
                  alt={"Order Item Image"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            onClick={() => setSelectedImage(FeaturedSecondPizzaImage)}
            size={{ xs: 6 }}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: "10px",
                  m: 2,
                  filter:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
                }}
              >
                <Image
                  src={FeaturedSecondPizzaImage}
                  width={150}
                  height={150}
                  alt={"Order Item Image"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>

      {/* small screens */}
      <>
        <Grid
          sx={{ display: { xs: "none", sm: "block", lg: "none" } }}
          size={7}
        >
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: "#EA810033",
                borderRadius: "100%",
                p: {sm: "22px", md: "15px"},
                m: 2,
              }}
            >
              <Image
                src={selectedImage}
                width={282}
                height={282}
                alt={"Order Item Image"}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          direction={"column"}
          sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}
          container
          // width={"100%"}
          size={{ sm: 4, lg: 6 }}
        >
          <Grid
            onClick={() => setSelectedImage(FeaturedThirdPizzaImage)}
            size={{ xs: 6 }}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: {sm: "22px", md: "10px"},
                  m: 2,
                  filter:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
                }}
              >
                <Image
                  src={FeaturedThirdPizzaImage}
                  width={130}
                  height={130}
                  alt={"Order Item Image"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            onClick={() => setSelectedImage(FeaturedSecondPizzaImage)}
            size={{ xs: 6 }}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: {sm: "22px", md: "10px"},
                  m: 2,
                  filter:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
                }}
              >
                <Image
                  src={FeaturedSecondPizzaImage}
                  width={130}
                  height={130}
                  alt={"Order Item Image"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>

      {/* large screens */}
      <>
        <Grid
          sx={{ display: { xs: "none", lg: "flex" } }}
          size={{ lg: 7, xl: 8 }}
        >
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                background: "#EA810033",
                borderRadius: "100%",
                p: "15px;",
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
          sx={{ display: { xs: "none", lg: "flex" } }}
          size={{ lg: 5, xl: 4 }}
          container
        >
          <Grid onClick={() => setSelectedImage(FeaturedThirdPizzaImage)}>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: "10px;",
                  m: 2,
                  filter:
                    selectedImage === FeaturedThirdPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
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
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box
                sx={{
                  background:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "#D9D9D9"
                      : "#0201014D",
                  borderRadius: "100%",
                  p: "10px;",
                  m: 2,
                  filter:
                    selectedImage === FeaturedSecondPizzaImage
                      ? "brightness(1)"
                      : "brightness(0.5)",
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
      </>
    </Grid>
  );
}
