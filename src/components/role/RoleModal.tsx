import * as React from "react";
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
import Grid from "@mui/material/Grid2";
import { addRole } from "@/lib/role/role-management";

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
        borderRadius: "5px",
        width: "184px",
        height: "44px",
      }}
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
  const Status = useFormState(addRole, undefined);
  const [state, formAction] = Status;

  const [permissions, setPermissions] = React.useState<string[]>(
    roleDialog.role?.permissions || []
  );

  const [updatedPermissions, setUpdatedPermissions] = React.useState<string[]>(
    roleDialog.role?.permissions || []
  );

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    permission: string
  ) => {
    if (e.target.checked) {
      setUpdatedPermissions((prev) => [...prev, permission]);
    } else {
      setUpdatedPermissions((prev) =>
        prev.filter((prevPermission) => prevPermission !== permission)
      );
    }
  };

  console.log(
    "to use setPermissions",
    // setPermissions,
    // roleDialog.role?.permissions,
    permissions,
    updatedPermissions
  );
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
        {/* {state?.errors?.name && (
          <div>
            <p>Name must:</p>
            <ul>
              {state.errors.name.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )} */}

        <Typography
          my={"10px"}
          color={"#00000080"}
          fontWeight={400}
          fontSize={"22px"}
        >
          Permissions
        </Typography>

        <TextField
          id="permissions"
          name="permissions"
          type="hidden"
          value={updatedPermissions}
          sx={{ display: "none" }}
        />

        <TextField
          id="type"
          name="type"
          type="hidden"
          value={roleDialog.type}
          sx={{ display: "none" }}
        />

        {roleDialog.type === "update" && (
          <TextField
            id="id"
            name="id"
            type="hidden"
            value={roleDialog.role?.id}
            sx={{ display: "none" }}
          />
        )}

        <FormGroup>
          <Grid container spacing={2}>
            {permissions.map((permission, index) => (
              <Grid key={permission + " " + index} size={{ xs: 6 }}>
                <FormControlLabel
                  key={permission + " " + index}
                  control={
                    <Checkbox
                      // defaultChecked
                      checked={updatedPermissions.includes(permission)}
                      onChange={(e) => handleCheckboxChange(e, permission)}
                      sx={{
                        color: "#FF8100 !important",
                      }}
                    />
                  }
                  label={permission}
                />
              </Grid>
            ))}
            <Grid size={{ xs: 6 }}>
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
            </Grid>
          </Grid>
        </FormGroup>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <SubmitButton
          label={roleDialog.type === "update" ? "Update" : "Add"}
          loading={roleDialog.type === "update" ? "Updating ..." : "Adding ..."}
        />
      </DialogActions>
    </Dialog>
  );
}
