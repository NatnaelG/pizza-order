"use client";

import * as React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";
import Grid from "@mui/material/Grid2";

import { styled } from "@mui/material/styles";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { addMenu } from "@/lib/menu/menu-management";
import Successmodal from "./SuccessModal";

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      sx={{
        background: "#FF8100",
        width: "321px",
        height: "74px",
        borderRadius: "20px",
      }}
      disabled={pending}
    >
      {pending ? loading : label}
    </Button>
  );
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddMenuForm() {
  const Status = useFormState(addMenu, undefined);
  const [state, formAction] = Status;

  const [toppings, setToppings] = React.useState<string[]>([]);
  const [successModalOpen, setSuccessModalOpen] =
    React.useState<boolean>(false);

  const [updatedToppings, setUpdatedToppings] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (state?.message === "success") {
      setSuccessModalOpen(true);
      (document.getElementById("add-menu-form") as HTMLFormElement)?.reset();
    }
  }, [state]);

  const handleSuccessModalClose = () => setSuccessModalOpen(false);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    topping: string
  ) => {
    if (e.target.checked) {
      setUpdatedToppings((prev) => [...prev, topping]);
    } else {
      setUpdatedToppings((prev) =>
        prev.filter((prevTopping) => prevTopping !== topping)
      );
    }
  };

  // console.log("to use setToppings", toppings, updatedToppings);
  return (
    <Stack
      //   open={roleDialog.open}
      sx={{
        width: "1040px",
        height: "535px",
        p: 3,
        m: "auto",
      }}
      id="add-menu-form"
      component="form"
      action={formAction}
    >
      <Typography
        sx={{
          color: "#525256",
          m: "auto",
          fontWeight: 500,
          fontSize: "22px",
        }}
      >
        Add Menu
      </Typography>
      <Stack
        width={"459px"}
        sx={{
          m: "auto",
        }}
        spacing={1}
      >
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
        />

        <Typography
          my={"10px"}
          color={"#00000080"}
          fontWeight={400}
          fontSize={"22px"}
        >
          Toppings
        </Typography>

        <TextField
          id="toppings"
          name="toppings"
          type="hidden"
          value={updatedToppings}
          sx={{ display: "none" }}
        />

        <FormGroup>
          <Grid container spacing={2}>
            {toppings.map((topping, index) => (
              <Grid key={topping + " " + index} size={{ xs: 4 }}>
                <FormControlLabel
                  key={topping + " " + index}
                  control={
                    <Checkbox
                      // defaultChecked
                      checked={updatedToppings.includes(topping)}
                      onChange={(e) => handleCheckboxChange(e, topping)}
                      sx={{
                        color: "#FF8100 !important",
                      }}
                    />
                  }
                  label={topping}
                />
              </Grid>
            ))}
            <Grid size={{ xs: 4 }}>
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
                    label={"Topping"}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        const newTopping = (event.target as HTMLInputElement)
                          .value;
                        setToppings((prev) => [...prev, newTopping]);
                        setUpdatedToppings((prev) => [...prev, newTopping]);

                        (event.target as HTMLInputElement).value = "";
                      }
                    }}
                  />
                }
              />
            </Grid>
          </Grid>
        </FormGroup>

        <TextField
          autoFocus
          required
          margin="dense"
          id="price"
          name="price"
          label="Price"
          fullWidth
          variant="outlined"
        />

        <Stack
          sx={{
            alignItems: "center",
          }}
          pt={1}
          spacing={2}
        >
          <Button
            component="label"
            variant="outlined"
            sx={{
              border: "dotted 1px #000",
              color: "#FF8100",
              width: "321px",
              height: "74px",
              fontWeight: 500,
              fontSize: "16px",
            }}
            tabIndex={-1}
            startIcon={<UpgradeIcon />}
          >
            Upload Pizza Photo
            <VisuallyHiddenInput type="file" />
          </Button>

          <SubmitButton label={"Submit"} loading={"Submitting ..."} />
        </Stack>
      </Stack>
      <Successmodal
        handleSuccessModalClose={handleSuccessModalClose}
        successModalOpen={successModalOpen}
        type="Menu"
      />
    </Stack>
  );
}
