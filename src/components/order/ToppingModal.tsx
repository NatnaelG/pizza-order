import * as React from "react";
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

export default function ToppingModal({
  toppingDialog,
  handleClose,
}: {
  toppingDialog: {
    row:
      | ({
          id: string;
          customerId: string;
          quantity: number;
          menuId: string;
          toppings: string[];
          status: string;
          updatedAt: Date;
          createdAt: Date;
        } & {
          menuName: string;
          customerNo: string;
        })
      | null;
    value: string[] | null;
    open: boolean;
  };
  handleClose: () => void;
}) {

  console.log("ToppiNG DATA", toppingDialog);

  return (
    <Dialog
      open={toppingDialog.open}
      sx={{
        "& .MuiPaper-elevation": {
          width: "457px",
          height: "283px",
          p: 3,
          borderRadius: "20px",
        },
      }}
      onClose={() => handleClose()}
    >
      <DialogTitle sx={{ m: "auto", fontWeight: 700, fontSize: "22px" }}>
        Order Details
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack
            direction={"row"}
            sx={{ fontWeight: 400, fontSize: "16px" }}
            spacing={4}
          >
            <Typography sx={{ color: "#00000080" }}>Name:</Typography>
            <Typography sx={{ color: "#000000DE" }}>
              {toppingDialog.row?.menuName}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", color: "#00000080" }}
            >
              Toppings:
            </Typography>
            {toppingDialog.value?.map((topping, index) => (
              <Chip
                key={topping + "" + index}
                label={topping}
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#fff",
                  background: `hsl(${Math.floor(Math.random() * 360)}deg, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 50)}%)`
                  // background: `#${Math.floor(Math.random() * 1777215).toString(
                  //   16
                  // )}`,
                }}
              />
            ))}
          </Stack>
          <Stack
            direction={"row"}
            sx={{ fontWeight: 400, fontSize: "16px" }}
            spacing={4}
          >
            <Typography sx={{ color: "#00000080" }}>Quantity:</Typography>
            <Typography sx={{ color: "#000000DE" }}>
              {toppingDialog.row?.quantity}
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
