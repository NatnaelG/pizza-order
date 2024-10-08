import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function FeaturedPizza({
  backgroundProp,
  image,
  imageSize,
}: {
  backgroundProp: string;
  image: StaticImageData;
  imageSize: { width: number; height: number };
}) {
  return (
    <Stack
      component={Paper}
      sx={{
        background: `${backgroundProp}`,
        borderRadius: "40px",
        pl: { xs: 2, sm: 3, md: 4, lg: 5 },
        overflow: "hidden",
      }}
      width={{ xxl: "1270px", xs: "90%" }}
      height={{ xs: "205px", sm: "295px", lg: "390px" }}
      direction={"row"}
      m={"auto"}
    >
      <Stack
        width={{ xs: "192px", sm: "340px", md: "450px", lg: "582px" }}
        sx={{ color: "#fff" }}
        justifyContent={"space-evenly"}
        height={"100%"}
      >
        <Box>
          <Typography
            component={Box}
            fontWeight={700}
            sx={{ display: "ruby", lineHeight: 1 }}
            fontSize={{ xs: "16px", sm: "24px", md: "33px", lg: "45px" }}
          >
            Make Your First Order and Get{" "}
            <Typography
              fontWeight={700}
              fontSize={{ xs: "16px", sm: "24px", md: "33px", lg: "45px" }}
              sx={{ color: "#FF9921", ml: 5 }}
            >
              50% Off
            </Typography>
          </Typography>
        </Box>

        <Box>
          <Typography
            fontWeight={400}
            fontSize={{ xs: "8px", sm: "11px", md: "14px", lg: "17px" }}
            sx={{ opacity: "90%" }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "77px", sm: "125px", md: "185px", lg: "250px" },
            height: { xs: "33px", sm: "40px", md: "50px", lg: "60px" },
            background: "#FF9921",
          }}
          variant={"contained"}
        >
          <Typography sx={{ fontSize: "10px" }}>Order Now</Typography>
        </Button>
      </Stack>
      <Box
        justifyContent={"center"}
        width={{ xs: "49px", sm: "200px", md: "450px", lg: "inherit" }}
        display={"flex"}
      >
        <Box
          display={{ xs: "none", lg: "block" }}
          sx={{
            position: "relative",
            right: "-180px",
            top: "-125px",
          }}
          width={`${imageSize.width}px`}
          height={`${imageSize.height}px`}
        >
          <Image
            width={665}
            height={658}
            src={image}
            alt="Featured Pizza Image"
            priority
          />
        </Box>

        {/* small screen */}
        <Box
          display={{ xs: "none", sm: "block", lg: "none" }}
          sx={{
            position: "relative",
            right: "-160px",
            top: "-110px",
          }}
          width={"509px"}
          height={"458px"}
        >
          <Image
            width={507}
            height={503}
            src={image}
            alt="Featured Pizza Image"
            priority
          />
        </Box>

        {/* xsmall screen */}
        <Box
          display={{ xs: "block", sm: "none", lg: "none" }}
          sx={{
            position: "relative",
            right: "-130px",
            top: "-90px",
          }}
          width={"349px"}
          height={"258px"}
        >
          <Image
            width={347}
            height={383}
            src={image}
            alt="Featured Pizza Image"
            priority
          />
        </Box>
      </Box>
    </Stack>
  );
}
