import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { updateOrderStatus } from "@/lib/order/order-management";

export default function StatusMenu({
  status,
  order,
  setIsLoading,
}: {
  status: "PREPARING" | "READY";
  order: {
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
  };
  setIsLoading: (temp: boolean) => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (
    newStatus: "PREPARING" | "READY" | "DELIVERED"
  ) => {
    setIsLoading(true);
    const updatedOrder = updateOrderStatus(order.id, newStatus);

    updatedOrder
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    setAnchorEl(null);

    return newStatus;
  };
  console.log("Order ", order);

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={
          open ? (
            <ArrowDropUpIcon fontSize="large" />
          ) : (
            <ArrowDropDownIcon fontSize="large" />
          )
        }
        sx={{
          background: status === "PREPARING" ? "#FFA500" : "#008000",
          color: "#fff",
        }}
      >
        {status}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleStatusChange("PREPARING")}>
          Preparing
        </MenuItem>
        <MenuItem onClick={() => handleStatusChange("READY")}>Ready</MenuItem>
        <MenuItem onClick={() => handleStatusChange("DELIVERED")}>
          Delivered
        </MenuItem>
      </Menu>
    </>
  );
}
