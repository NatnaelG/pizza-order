import { IconButton, Stack, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Stack
      direction={"row"}
      sx={{ height: "104px", background: "#000", color: "#fff", px: 5 }}
      justifyContent={"space-between"}
    >
      <Stack alignItems={"center"} spacing={5} direction={"row"}>
        <Typography fontWeight={500} fontSize={"16px"}>
          @2024 Pizza All Rights Reserved.
        </Typography>
        <Typography fontWeight={500} fontSize={"18px"}>
          Terms & Conditions
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <IconButton aria-label="facebook" size="large" sx={{background: "#141414"}}>
          <FacebookIcon sx={{color: "#fff", fontSize: "24px"}}  />
        </IconButton>
        <IconButton aria-label="linkedIn" size="large" sx={{background: "#141414"}}>
          <LinkedInIcon sx={{color: "#fff", fontSize: "24px"}}  />
        </IconButton>
        <IconButton aria-label="twitter" size="large" sx={{background: "#141414"}}>
          <TwitterIcon sx={{color: "#fff", fontSize: "24px"}}  />
        </IconButton>
        <IconButton aria-label="youtube" size="large" sx={{background: "#141414"}}>
          <YouTubeIcon sx={{color: "#fff", fontSize: "24px"}}  />
        </IconButton>
      </Stack>
    </Stack>
  );
}
