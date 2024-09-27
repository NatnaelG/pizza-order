import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

export default function Hero() {
  return (
    <>
      <Stack width={"766px"} height={"333px"}>
        <Typography
          fontWeight={700}
          fontSize={"150px"}
          color="linear-gradient(to right, #FF8100, #FFBE71)"
        >
          Order us
        </Typography>
        <Typography fontWeight={400} fontSize={"25"} color="">
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
            placeholder="Your feedback..."
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
