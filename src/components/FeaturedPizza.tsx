import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FeaturedPizzaImage from "@/public/featured.png";

export default function FeaturedPizza({
  backgroundProp,
}: {
  backgroundProp: string;
}) {
  console.log("backGrou", backgroundProp);
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
            // background: "#EA810033",
            // borderRadius: "100%",
            // p: "22px 10px 10px 22px;",
            // m: 2,
            position: "relative",
            right: "-155px",
            top: "-125px",
          }}
          width={"658px"}
          height={"484px"}
        >
          <Image src={FeaturedPizzaImage} alt="Featured Pizza Image" priority />
        </Box>
      </Box>
    </Stack>
  );
}
