import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

export default function AddUserModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: {
          preventDefault: () => void;
          currentTarget: HTMLFormElement | undefined;
        }) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
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
        <TextField
          required
          margin="dense"
          id="phoneNo"
          name="phoneNo"
          label="Phone No"
          fullWidth
          variant="outlined"
        />

        <TextField
          required
          margin="dense"
          id="location"
          name="location"
          label="Location"
          fullWidth
          variant="outlined"
        />
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
        <Autocomplete
          disablePortal
          options={["Admin", "User", "Super Admin"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Role" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ background: "#FF8100" }}
        >
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
}
