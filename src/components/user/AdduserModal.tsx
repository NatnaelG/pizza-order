import { adduser } from "@/lib/user/user-management";
import {
  Autocomplete,
  // Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useFormState } from "react-dom";

export default function AddUserModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [state, formAction, isPending] = useFormState(adduser, undefined);
  console.log("check form", state, isPending);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        action: formAction,
        // onSubmit: (event: {
        //   preventDefault: () => void;
        //   currentTarget: HTMLFormElement | undefined;
        // }) => {
        //   // event.preventDefault();
        //   // const formData = new FormData(event.currentTarget);
        //   // const formJson = Object.fromEntries(formData.entries());
        //   // const email = formJson.email;
        //   // console.log(email);
        //   // handleClose();
        // },
      }}
    >
      {/* <Box component="form" > */}
      {/* <DialogTitle>Subscribe</DialogTitle> */}
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}

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
                <li key={error}>- {error}</li>
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
                <li key={error}>- {error}</li>
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
                <li key={error}>- {error}</li>
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
                <li key={error}>- {error}</li>
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
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <Autocomplete
          disablePortal
          options={["Admin", "User", "Super Admin"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} name="role" id="role" label="Select Role" />
          )}
        />
        {state?.errors?.role && (
          <div>
            <p>Role must:</p>
            <ul>
              {state.errors.role.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ background: "#FF8100" }}
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Add User"}
        </Button>
      </DialogActions>
      {/* </Box> */}
    </Dialog>
  );
}
