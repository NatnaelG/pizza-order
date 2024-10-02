import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RelatedPizza from "../RelatedPizza";

export default function Related() {
  return (
    <>
      <Typography
        sx={{ fontWeight: 700, fontSize: "50px", color: "#00000080" }}
      >
        Related
      </Typography>

      <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll", pb: 1 }}
      >
        <Stack direction={"row"} spacing={3}>
          <Box>
            <RelatedPizza />
          </Box>
          <Box>
            <RelatedPizza />
          </Box>
          <Box>
            <RelatedPizza />
          </Box>
          <Box>
            <RelatedPizza />
          </Box>
          <Box>
            <RelatedPizza />
          </Box>
          <Box>
            <RelatedPizza />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
