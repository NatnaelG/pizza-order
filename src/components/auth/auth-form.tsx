"use client";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

// import React, { useActionState } from "react";
import { authenticate } from "@/lib/actions";

import { useFormState } from "react-dom";

// const initialState = {
//   email: '',
//   password: ''
// }
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

export default function AuthForm(prop: { type: "Login" | "Sign Up" }) {
  // const [errorMessage, formAction, isPending] = useActionState(
  //     authenticate,
  //     undefined
  // );

  const [state, formAction, isPending] = useFormState(authenticate, undefined);
  return (
    <Box component="form" action={formAction}>
      <Stack spacing={1} pt={2} pb={5}>
        <Typography variant="h4">{prop.type}</Typography>
        <Divider />
      </Stack>

      <Stack spacing={2}>
        {prop.type !== "Login" && (
          <>
            <TextField
              id="name"
              label="Name"
              name="name"
              // type="email"
              variant="outlined"
            />
            {state?.errors?.name && <p>{state.errors.name}</p>}
          </>
        )}
        <TextField
          id="email"
          label="Email address"
          name="email"
          type="email"
          variant="outlined"
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <TextField
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <TextField
          id="type"
          name="type"
          type="hidden"
          value={prop.type}
          sx={{ display: "none" }}
        />

        {prop.type !== "Login" && (
          <>
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              id="location"
              label="Location"
              name="location"
              variant="outlined"
            />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
            />
          </>
        )}

        {prop.type !== "Login" && (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="isAdmin" id="isAdmin" />}
              label={"Admin"}
            />
          </FormGroup>
        )}

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              prop.type === "Login"
                ? "Remeber me"
                : "I accept the Terms and Conditions"
            }
          />
        </FormGroup>

        <Button variant="contained" disabled={isPending} type="submit">
          {isPending ? "Submitting..." : prop.type}
        </Button>
        {prop.type === "Login" ? (
          <>
            <Typography
              textAlign={"center"}
              sx={{ ">a": { textDecoration: "none" } }}
            >
              Have no account? <Link href={"register"}>Sign up</Link>
            </Typography>
          </>
        ) : (
          <>
            <Typography
              textAlign={"center"}
              sx={{ ">a": { textDecoration: "none" } }}
            >
              Already have an account <Link href={"login"}>Login</Link>
            </Typography>
          </>
        )}
      </Stack>
      {/* {errorMessage && (
        <> */}
      {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
      {/* <p className="text-sm text-red-500" style={{color: "#ff0000"}}>{errorMessage}</p>
        </>
      )} */}
    </Box>
  );
}
