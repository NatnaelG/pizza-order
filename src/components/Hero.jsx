import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import HeroPizzaImage from "@/public/hero-pizza.png";
import HeaderNav from "./HeaderNav";

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
          background: "linear-gradient(to bottom, #FFFFFF, #FFC993, #FFF8F1)",
        }}
        width={"100%"}
        height={"806px"}
        direction={"row"}
      >
        <HeaderNav />
        <Stack
          width={"766px"}
          height={"501px"}
          sx={{ pl: "60px", pt: "80px" }}
          justifyContent={"space-evenly"}
          spacing={3}
        >
          <Typography
            fontWeight={700}
            fontSize={"150px"}
            sx={{
              background: "linear-gradient(to right, #FF8100, #FFBE71)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Order us
          </Typography>
          <Typography fontWeight={400} fontSize={"26px"} color="#050505">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end" sx={{ pr: 2 }}>
                <IconButton
                  sx={{ background: "#FF890F", color: "#fff", fontSize: "70px" }}
                  aria-label="send"
                  edge="end"
                  size="large"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
            sx={{
              background: "#fff",
              width: "748px",
              height: "118px",
              fontSize: "xx-large",
              px: 1,
              borderRadius: "100px",
            }}
          />
        </Stack>
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              position: "relative",
              right: "-100px",
              top: "-100px",
            }}
            width={"794px"}
            height={"806px"}
          >
            <Image
              //   style={{ width: "665px", height: "658px" }}
              src={HeroPizzaImage}
              alt="Featured Pizza Image"
              priority
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
