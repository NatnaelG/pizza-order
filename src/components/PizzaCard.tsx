import {
  //   Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PizzaImage from "@/public/pizza.png";
import DefaultAvatar from "@/public/Ellipse 8.png";

export default function PizzaCard() {
  return (
    <>
      <Stack
        component={Paper}
        spacing={2}
        alignItems={"center"}
        sx={{ width: "390px", height: "655px", borderRadius: "25px" }}
      >
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            sx={{
              background: "#EA810033",
              borderRadius: "100%",
              p: "22px 10px 10px 22px;",
              m: 2,
            }}
          >
            <Image
              src={PizzaImage}
              alt="Pizza"
              width={275}
              height={280}
              priority
            />
          </Box>
        </Box>

        <Stack width={"330px"} height={"175px"} spacing={1}>
          <Typography fontWeight={700} fontSize={"25px"} variant="h6">
            Margherita
          </Typography>
          <Typography fontWeight={400} fontSize={"15px"} variant="subtitle2">
            Tomato, Mozzarella, Bell Peppers, Onions, Olives
          </Typography>
          <Stack
            height={"70px"}
            width={"330px"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack width={"111px"} direction={"row"} spacing={"3px"}>
              <Typography
                fontWeight={700}
                fontSize={"45px"}
                sx={{ color: "#01C550" }}
              >
                150
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                sx={{ lineHeight: 3 }}
              >
                Birr
              </Typography>
            </Stack>
            <Button
              sx={{
                width: "170px",
                height: "66px",
                p: "10px 20px",
                borderRadius: "10px",
                background: "#FF8100",
              }}
              variant={"contained"}
            >
              Order
            </Button>
          </Stack>
        </Stack>

        <Stack width={"330px"} spacing={2}>
          <Divider />

          {/* <Avatar> */}
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Image
              src={DefaultAvatar}
              width={65}
              height={65}
              alt="Default Avatar"
              priority
            />

            <Typography
              variant={"subtitle1"}
              fontWeight={700}
              fontSize={"20px"}
              sx={{ color: "#000" }}
            >
              Azmera Pizza
            </Typography>
          </Stack>
          {/* </Avatar> */}
        </Stack>
      </Stack>
    </>
  );
}
