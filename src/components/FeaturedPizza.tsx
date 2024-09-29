import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function FeaturedPizza({
  backgroundProp,
  image,
  imageSize,
  largeScreen,
}: {
  backgroundProp: string;
  image: StaticImageData;
  imageSize: { width: number; height: number };
  largeScreen: boolean;
}) {
  return (
    <Stack
      component={Paper}
      sx={{
        background: `${backgroundProp}`,
        borderRadius: "40px",
        pl: { xs: 2, lg: 5 },
        overflow: "hidden",
      }}
      width={{ xxl: "1270px", xs: "90%" }}
      height={{ xs: "205px", lg: "390px" }}
      direction={"row"}
      m={"auto"}
    >
      <Stack
        width={{ xs: "192px", lg: "582px" }}
        sx={{ color: "#fff" }}
        justifyContent={"space-evenly"}
        height={"100%"}
      >
        <Box>
          <Typography
            component={Box}
            fontWeight={700}
            sx={{ display: "ruby", lineHeight: 1 }}
            fontSize={{ xs: "16px", lg: "45px" }}
          >
            Make Your First Order and Get{" "}
            <Typography
              fontWeight={700}
              fontSize={{ xs: "16px", lg: "45px" }}
              sx={{ color: "#FF9921", ml: 5 }}
            >
              50% Off
            </Typography>
          </Typography>
        </Box>

        <Box>
          <Typography
            fontWeight={400}
            fontSize={{ xs: "8px", lg: "17px" }}
            sx={{ opacity: "90%" }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "77px", lg: "250px" },
            height: { xs: "33px", lg: "60px" },
            background: "#FF9921",
          }}
          variant={"contained"}
        >
          <Typography sx={{fontSize:"10px"}}>Order Now</Typography>
        </Button>
      </Stack>
      <Box
        justifyContent={"center"}
        width={{ xs: "49px", lg: "inherit" }}
        display={"flex"}
      >
        <Box
          sx={{
            position: "relative",
            right: { xs: "-130px", lg: "-180px" },
            top: { xs: "-90px", lg: "-125px" },
          }}
          width={{ xs: "349px", lg: `${imageSize.width}px` }}
          height={{ xs: "258px", lg: `${imageSize.height}px` }}
        >
          <Image
            style={{
              width: largeScreen ? "665px" : "347px",
              height: largeScreen ? "658px" : "383px",
            }}
            src={image}
            alt="Featured Pizza Image"
            priority
          />
        </Box>
      </Box>
    </Stack>
  );
}
