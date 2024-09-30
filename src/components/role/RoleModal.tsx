import * as React from "react";
import { adduser } from "@/lib/user/user-management";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";

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
      sx={{ background: "#FF8100" }}
      disabled={pending}
    >
      {pending ? loading : label}
    </Button>
  );
};

export default function RoleModal({
  roleDialog,
  handleClose,
}: {
  roleDialog: {
    role: {
      name: string;
      id: string;
      permissions: string[];
      status: string;
      updated_at: Date;
      created_at: Date;
    } | null;
    type: "add" | "update";
    open: boolean;
  };
  handleClose: () => void;
}) {
  const Status = useFormState(adduser, undefined);
  const [state, formAction] = Status;

  const [permissions, setPermissions] = React.useState<string[]>(
    roleDialog.role?.permissions || []
  );
  console.log("to use setPermissions", setPermissions);
  React.useEffect(() => {
    if (state?.message === "success") {
      handleClose();
      state.message = "";
    }
  }, [state, handleClose]);
  return (
    <Dialog
      open={roleDialog.open}
      sx={{
        "& .MuiPaper-elevation": {
          width: "505px",
          height: "461px",
          p: 3,
          borderRadius: "20px",
        },
      }}
      onClose={() => handleClose()}
      PaperProps={{
        component: "form",
        action: formAction,
      }}
    >
      <DialogTitle
        sx={{
          color: "#00000080",
          m: "auto",
          fontWeight: 400,
          fontSize: "22px",
        }}
      >
        Role
      </DialogTitle>
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
          defaultValue={roleDialog.role?.name || ""}
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

        <Typography
          my={"10px"}
          color={"#00000080"}
          fontWeight={400}
          fontSize={"22px"}
        >
          Permissions
        </Typography>

        <FormGroup>
          {permissions.map((permission, index) => (
            <FormControlLabel
              key={permission + " " + index}
              control={<Checkbox defaultChecked />}
              label={permission}
            />
          ))}
          <FormControlLabel
            control={<Checkbox />}
            label={
              <OutlinedInput
                id="component-outlined"
                // defaultValue=""
                label="Permission"
              />
            }
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <SubmitButton
          label={roleDialog.type === "update" ? "Update" : "Add"}
          loading={roleDialog.type === "update" ? "Updating ..." : "Adding ..."}
        />
      </DialogActions>
    </Dialog>
  );
}
