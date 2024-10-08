import * as React from "react";
import { adduser } from "@/lib/user/user-management";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";

type RolesType = {
  id: string;
  name: string;
  status: string;
  updated_at: Date;
  created_at: Date;
  permissions: string[];
}[];

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
  rolesLength: number;
};

const SubmitButton = ({ label, loading, rolesLength }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      sx={{ background: "#FF8100" }}
      disabled={pending || rolesLength === 0}
    >
      {pending ? loading : label}
    </Button>
  );
};

export default function AddUserModal({
  open,
  handleClose,
  roles,
}: {
  open: boolean;
  handleClose: () => void;
  roles: RolesType;
}) {
  const Status = useFormState(adduser, undefined);
  const [state, formAction] = Status;

  const [inputValue, setInputValue] = React.useState("");

  console.log("inputValue", inputValue);
  React.useEffect(() => {
    if (state?.message === "success") {
      handleClose();
      state.message = "";
    }
  }, [state, handleClose]);
  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      PaperProps={{
        component: "form",
        action: formAction,
      }}
    >
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
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
        {state?.errors?.name && (
          <div>
            <p>Name must:</p>
            <ul>
              {state.errors.name.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        {state?.errors?.email && (
          <div>
            <p>Email must:</p>
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
          required
          margin="dense"
          id="phoneNumber"
          name="phoneNumber"
          label="Phone No"
          fullWidth
          variant="outlined"
        />
        {state?.errors?.phoneNumber && (
          <div>
            <p>Phone Number must:</p>
            <ul>
              {state.errors.phoneNumber.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <TextField
          required
          margin="dense"
          id="location"
          name="location"
          label="Location"
          fullWidth
          variant="outlined"
        />
        {state?.errors?.location && (
          <div>
            <p>Location must:</p>
            <ul>
              {state.errors.location.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <TextField
          required
          margin="dense"
          id="password"
          name="password"
          label="Password"
          type="Password"
          fullWidth
          variant="outlined"
        />

        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <TextField
          name="roleId"
          id="roleId"
          type="hidden"
          value={inputValue}
          label="Select Role"
        />

        {roles.length > 0 ? (
          <Autocomplete
            disablePortal
            // options={["Admin", "User", "Super Admin"]}
            options={roles}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            sx={{ width: 300 }}
            onChange={(event, newInputValue) => {
              setInputValue(newInputValue?.id || "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                name="role"
                id="role"
                label="Select Role"
              />
            )}
          />
        ) : (
          <Typography color="#f00">
            Please first add roles to choose from
          </Typography>
        )}
        {state?.errors?.role && (
          <div>
            <p>Role must:</p>
            <ul>
              {state.errors.role.map((error) => (
                <li style={{ color: "#f00" }} key={error}>
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <SubmitButton
          label="Add User"
          loading="Adding ..."
          rolesLength={roles.length}
        />
      </DialogActions>
    </Dialog>
  );
}
