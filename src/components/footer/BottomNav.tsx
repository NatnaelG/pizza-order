import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import PizzaLogo from "../PizzaLogo";
import SendIcon from "@mui/icons-material/Send";

export default function BottomNav() {
  return (
    <Box sx={{ background: "#CCB691" }} height={"240px"} alignContent={"center"}>
      <Stack sx={{ p: { xs: 2, lg: 5 }, pt: 3 }} spacing={2}>
        <Box
          sx={{
            position: "relative",
            display: { xs: "none", lg: "flex" },
            justifyContent: "end",
            right: "150px",
            // pb: 2
          }}
        >
          <PizzaLogo />
        </Box>

        <Stack
          // direction={{xs: "column" , lg: "row"}}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          //   sx={{ mt: 2 }}
        >
          <Stack
            // direction={"row"}
            direction={{ xs: "column", lg: "row" }}
            spacing={3}
          >
            <Link href={"/"}>
              <Typography fontWeight={600} fontSize={{xs: "15px" , lg:"25px"}} color="#000">
                Home
              </Typography>
            </Link>
            <Link href={"/order"}>
              <Typography fontWeight={600} fontSize={{xs: "15px" , lg:"25px"}} color="#000">
                Order
              </Typography>
            </Link>
            <Link href={"/about-us"}>
              <Typography fontWeight={600} fontSize={{xs: "15px" , lg:"25px"}} color="#000">
                About us
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems={"center"}>
            <Box
              sx={{
                // position: "relative",
                display: { xs: "flex", lg: "none" },
                // justifyContent: "end",
                // right: "150px",
                // pb: 2
              }}
            >
              <PizzaLogo />
            </Box>

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
              placeholder="Your feedback..."
              sx={{
                background: "#fff",
                width: { xs: "206px", lg: "423px" },
                px: 1,
                borderRadius: "15px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
