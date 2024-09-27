import {
  Box,
  Paper,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import HeroPizzaImage from "@/public/hero-pizza.png";

export default function Hero() {
  return (
    <>
      <Stack
        component={Paper}
        sx={{
        //   background: `${backgroundProp}`,
        //   borderRadius: "40px",
        //   pl: 5,
          overflow: "hidden",
        }}
        width={"100%"}
        height={"806px"}
        direction={"row"}
      >
        <Stack width={"766px"} height={"501px"} justifyContent={"space-evenly"}>
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
                  sx={{ color: "#FF8100" }}
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
              px: 1,
              borderRadius: "15px",
            }}
          />
        </Stack>
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              position: "relative",
              right: "-180px",
              top: "-125px",
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
