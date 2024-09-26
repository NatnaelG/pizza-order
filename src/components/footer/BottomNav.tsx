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
    <Box sx={{ background: "#CCB691" }} height={"240px"}>
      <Stack sx={{ p: 5, pt: 3 }} spacing={2}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "end",
            right: "150px",
            // pb: 2
          }}
        >
          <PizzaLogo />
        </Box>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          //   sx={{ mt: 2 }}
        >
          <Stack direction={"row"} spacing={3}>
            <Link href={"/"}>
              <Typography fontWeight={600} fontSize={"25px"} color="#000">
                Home
              </Typography>
            </Link>
            <Link href={"/order"}>
              <Typography fontWeight={600} fontSize={"25px"} color="#000">
                Order
              </Typography>
            </Link>
            <Link href={"/about-us"}>
              <Typography fontWeight={600} fontSize={"25px"} color="#000">
                About us
              </Typography>
            </Link>
          </Stack>

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
              width: "423px",
              px: 1,
              borderRadius: "15px",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
