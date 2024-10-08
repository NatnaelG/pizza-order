"use client";

import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  // OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Menu, Restaurant } from "@prisma/client";
import { addOrder } from "@/lib/order/order-management";
import Successmodal from "../add-menu/SuccessModal";

import { useRouter } from "next/navigation";

export default function OrderItem({
  menu,
}: {
  menu: (Menu & { Restaurant: Restaurant }) | null;
}) {
  // console.log("Menu Important check", menu);

  const router = useRouter();

  const [updatedToppings, setUpdatedToppings] = React.useState<string[]>(
    menu?.toppings || []
  );

  const [quantity, setQuantity] = React.useState<number>(1);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [successModalOpen, setSuccessModalOpen] =
    React.useState<boolean>(false);

  const handleSuccessModalClose = () => setSuccessModalOpen(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => {
      return prev === 1 ? prev : prev - 1;
    });

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

  console.log("topping Check", updatedToppings);

  if (menu === null) {
    return (
      <Typography sx={{ py: 5 }} variant="h4" color="warning">
        No menu found with the provided ID
      </Typography>
    );
  }
  return (
    <Stack spacing={2}  maxWidth={"-webkit-fill-available"}>
      <Typography sx={{ fontWeight: 700, fontSize: "80px", color: "#000" }}>
        {menu.name}
      </Typography>

      <FormGroup>
        <Grid container spacing={2}>
          {menu.toppings.map((topping, index) => (
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
        </Grid>
      </FormGroup>

      <Stack
        direction="row"
        alignItems={"center"}
        spacing={5}
      >
        <IconButton
          sx={{
            width: "70px",
            height: "60px",
            borderRadius: "10px",
            p: "10px 15px",
            border: "solid 2px #FF8100",
            background: "#fff",

            "& .MuiSvgIcon-root": {
              fontSize: "40px",
            },
          }}
          onClick={handleDecrement}
        >
          <RemoveIcon />
        </IconButton>

        <Typography
          sx={{ color: "#000000", fontWeight: 400, fontSize: "32px" }}
        >
          {quantity}
        </Typography>
        <IconButton
          sx={{
            width: "70px",
            height: "60px",
            borderRadius: "10px",
            p: "10px 15px",
            border: "solid 2px #FF8100",
            background: "#fff",

            "& .MuiSvgIcon-root": {
              fontSize: "40px",
            },
          }}
          onClick={handleIncrement}
        >
          <AddIcon />
        </IconButton>

        <Stack width={"111px"} direction={"row"} spacing={"3px"}>
          <Typography
            fontWeight={700}
            fontSize={"45px"}
            sx={{ color: "#01C550" }}
          >
            {`${parseInt(`${menu.price}`) * quantity}`}
          </Typography>
          <Typography fontWeight={400} fontSize={"15px"} sx={{ lineHeight: 3 }}>
            Birr
          </Typography>
        </Stack>
      </Stack>

      <Button
        // type="submit"
        variant="contained"
        sx={{
          background: "#FF8100",
          width: {xs: "100%", sm: "522px"},
          height: "76px",
          borderRadius: "10px",
          justifyContent: "space-between",
          p: "15px 30px 15px 30px",

          "& .MuiSvgIcon-root": {
            fontSize: "35px",
            color: "#fff",
          },
        }}
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
          const order = addOrder({
            menuId: menu.id,
            quantity: quantity,
            toppings: updatedToppings,
          });

          order
            .then((res) => {
              console.log("Response", res);
              if (res.message === "success") {
                setIsLoading(false);
                setSuccessModalOpen(true);

                setTimeout(
                  (() => {
                    router.push("/order-history");
                    return "";
                  })(),
                  3000
                );
              }
              return "Success";
            })
            .catch((err) => {
              console.log("error", err);
              setIsLoading(false);
            });
        }}
      >
        <Typography
          sx={{ color: "#FDFFFE", fontWeight: 700, fontSize: "32px" }}
        >
          {isLoading ? "Ordering ..." : "Order"}
        </Typography>

        <ArrowOutwardIcon />
      </Button>

      <Successmodal
        handleSuccessModalClose={handleSuccessModalClose}
        successModalOpen={successModalOpen}
        type="Order"
      />
    </Stack>
  );
}
