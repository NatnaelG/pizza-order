import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  // OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function OrderItem() {
  return (
    <Stack>
      <Typography sx={{ fontWeight: 700, fontSize: "80px", color: "#000" }}>
        Margherita
      </Typography>

      <FormGroup>
        <Grid container spacing={2}>
          {/* {permissions.map((permission, index) => ( */}
          <Grid
            //  key={permission + " " + index}
            size={{ xs: 6 }}
          >
            <FormControlLabel
              // key={permission + " " + index}
              control={
                <Checkbox
                  // defaultChecked
                  // checked={updatedPermissions.includes(permission)}
                  // onChange={(e) => handleCheckboxChange(e, permission)}
                  sx={{
                    color: "#FF8100 !important",
                  }}
                />
              }
              label={"permission"}
            />
          </Grid>
          {/* ))} */}
          {/* <Grid size={{ xs: 6 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#FF8100 !important",
                    }}
                  />
                }
                label={
                  <OutlinedInput
                    id="component-outlined"
                    // defaultValue=""
                    sx={{ "& .MuiInputBase-input": { py: "3px", px: 1 } }}
                    label="Permission"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        const newPermission = (event.target as HTMLInputElement)
                          .value;
                        setPermissions((prev) => [...prev, newPermission]);
                        setUpdatedPermissions((prev) => [
                          ...prev,
                          newPermission,
                        ]);

                        (event.target as HTMLInputElement).value = "";
                      }
                    }}
                  />
                }
              />
            </Grid> */}
        </Grid>
      </FormGroup>

      <Stack>
        <IconButton><AddIcon /></IconButton>
        <Typography
          sx={{ color: "#000000", fontWeight: 400, fontSize: "32px" }}
        >
          {1}
        </Typography>
        <IconButton><RemoveIcon /></IconButton>

        <Stack width={"111px"} direction={"row"} spacing={"3px"}>
              <Typography
                fontWeight={700}
                fontSize={"45px"}
                sx={{ color: "#01C550" }}
              >
                150
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                sx={{ lineHeight: 3 }}
              >
                Birr
              </Typography>
            </Stack>
      </Stack>

      <Button
        sx={{
          background: "#FF8100",
          width: "522px",
          height: "76px",
          borderRadius: "10px",
          justifyContent: "space-between",
          p: "15px 30px 15px 30px",
        }}
      >
        <Typography
          sx={{ color: "#FDFFFE", fontWeight: 700, fontSize: "32px" }}
        >
          {"Order"}
        </Typography>
      </Button>
    </Stack>
  );
}
