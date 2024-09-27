import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Hero() {
  return (
    <>
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
    </>
  );
}
