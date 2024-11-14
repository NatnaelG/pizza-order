"use client";

import React from "react";
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

import { useFormState, useFormStatus } from "react-dom";

// const initialState = {
//   email: '',
//   password: ''
// }
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="contained"
      disabled={pending}
      sx={{
        background: "#FF8100",
        fontWeight: 500,
        fontSize: "15px",
        height: "42px",
      }}
      id={label}
      type="submit"
    >
      {pending ? loading : label}
    </Button>
  );
};

export default function AuthForm(prop: { type: "Login" | "Sign Up" }) {
  // const [errorMessage, formAction, isPending] = useActionState(
  //     authenticate,
  //     undefined
  // );

  const [state, formAction] = useFormState(authenticate, undefined);

  const [isRestaurantRegistration, setIsRestaurantRegistration] =
    React.useState(false);

  return (
    <Box component="form" action={formAction}>
      <Stack spacing={1} pt={2} pb={5}>
        <Typography sx={{ fontWeight: 400, fontSize: "24px" }}>
          {prop.type}
        </Typography>
        <Divider />
      </Stack>

      <Stack spacing={2}>
        {prop.type !== "Login" && (
          <>
            <TextField
              id="name"
              label={isRestaurantRegistration ? "Admin Name" : "Name"}
              name="name"
              required
              // type="email"
              variant="outlined"
            />
            {state?.errors?.name && (
              <div>
                <p data-id="error">Name must:</p>
                <ul>
                  {state.errors.name.map((error) => (
                    <li style={{ color: "#f00" }} key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        <TextField
          id="email"
          label="Email address"
          name="email"
          required
          type="email"
          variant="outlined"
        />
        {state?.errors?.email && (
          <div>
            <p data-id="error">Email must:</p>
            <ul>
              {state.errors.email.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
        <TextField
          id="password"
          label="Password"
          name="password"
          required
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        {state?.errors?.password && (
          <div>
            <p data-id="error">Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        {state?.message === "Invalid credentials!" && (
          <div>
            <p style={{ color: "#f00" }} data-id="error">{state.message}</p>
          </div>
        )}

        <TextField
          id="type"
          name="type"
          type="hidden"
          required
          value={prop.type}
          sx={{ display: "none" }}
        />

        {prop.type !== "Login" && (
          <>
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              required
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            {state?.errors?.confirmPassword && (
              <div>
                <p data-id="error">Confirm Password must:</p>
                <ul>
                  {state.errors.confirmPassword.map((error) => (
                    <li style={{ color: "#f00" }} key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <TextField
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              required
              variant="outlined"
            />

            {state?.errors?.phoneNumber && (
              <div>
                <p data-id="error">Phone number must:</p>
                <ul>
                  {state.errors.phoneNumber.map((error) => (
                    <li style={{ color: "#f00" }} key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isRestaurantRegistration && (
              <TextField
                id="restaurantName"
                label="Restaurant Name"
                name="restaurantName"
                required
                variant="outlined"
              />
            )}

            {state?.errors?.restaurantName && (
              <div>
                <p data-id="error">Restaurant Name must:</p>
                <ul>
                  {state.errors.restaurantName.map((error) => (
                    <li style={{ color: "#f00" }} key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <TextField
              id="location"
              label="Location"
              name="location"
              required
              variant="outlined"
            />

            {state?.errors?.location && (
              <div>
                <p data-id="error">Location must:</p>
                <ul>
                  {state.errors.location.map((error) => (
                    <li style={{ color: "#f00" }} key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {prop.type !== "Login" && (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="restaurant" id="restaurant" />}
              label={"Restaurant"}
              onChange={(e) =>
                setIsRestaurantRegistration(
                  (e as React.ChangeEvent<HTMLInputElement>).target.checked
                )
              }
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

        <SubmitButton label={prop.type} loading="Submitting ..." />

        {prop.type === "Login" ? (
          <>
            <Typography
              textAlign={"center"}
              sx={{
                ">a": { textDecoration: "none", color: "#FF8100" },
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Have no account? <Link href={"register"}>Sign up</Link>
            </Typography>
          </>
        ) : (
          <>
            <Typography
              textAlign={"center"}
              sx={{
                ">a": { textDecoration: "none", color: "#FF8100" },
                fontWeight: 400,
                fontSize: "16px",
              }}
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
