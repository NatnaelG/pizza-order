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
        pl: 5,
        overflow: "hidden",
      }}
      width={"1270px"}
      height={"390px"}
      direction={"row"}
    >
      <Stack
        width={"582px"}
        sx={{ color: "#fff" }}
        justifyContent={"space-evenly"}
        height={"100%"}
      >
        <Box>
          <Typography
            component={Box}
            fontWeight={700}
            sx={{ display: "ruby", lineHeight: 1 }}
            fontSize={"45px"}
          >
            Make Your First Order and Get{" "}
            <Typography
              fontWeight={700}
              fontSize={"45px"}
              sx={{ color: "#FF9921", ml: 5 }}
            >
              50% Off
            </Typography>
          </Typography>
        </Box>

        <Box>
          <Typography
            fontWeight={400}
            fontSize={"17px"}
            sx={{ opacity: "90%" }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
        </Box>

        <Button
          sx={{ width: "250px", height: "60px", background: "#FF9921" }}
          variant={"contained"}
        >
          <Typography>Order Now</Typography>
        </Button>
      </Stack>
      <Box justifyContent={"center"} display={"flex"}>
        <Box
          sx={{
            position: "relative",
            right: "-180px",
            top: "-125px",
          }}
          width={`${imageSize.width}px`}
          height={`${imageSize.height}px`}
        >
          <Image
            style={{ width: "665px", height: "658px" }}
            src={image}
            alt="Featured Pizza Image"
            priority
          />
        </Box>
      </Box>
    </Stack>
  );
}
