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
        height={{ xs: "338px", lg: "806px" }}
        direction={"row"}
      >
        <Stack
          width={{ xs: "261px", lg: "766px" }}
          height={{ xs: "183px", lg: "501px" }}
          sx={{ pl: { xs: 0, lg: "60px" }, pt: { xs: "40px", lg: "80px" } }}
          justifyContent={"space-evenly"}
          spacing={3}
        >
          <Typography
            fontWeight={700}
            fontSize={{ xs: "40px", lg: "150px" }}
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
            fontSize={{ xs: "10px", lg: "26px" }}
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
                    fontSize: { xs: "15px", lg: "70px" },
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
              width: { xs: "261px", lg: "748px" },
              height: { xs: "57px", lg: "118px" },
              fontSize:  "xx-large" ,
              px: 1,
              borderRadius: "100px",
            }}
          />
        </Stack>
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              position: "relative",
              right: { xs: "45px", lg: "-100px" },
              top: { xs: "-20px", lg: "-100px" },
            }}
            width={{ xs: "169px", lg: "794px" }}
            height={{ xs: "300px", lg: "806px" }}
            component={Container}
          >
            <ImageResponsive />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
