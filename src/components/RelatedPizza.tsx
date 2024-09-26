import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PizzaImage from "@/public/pizza.png";

export default function RelatedPizza() {
  return (
    <>
      <Stack
        component={Paper}
        spacing={2}
        alignItems={"center"}
        sx={{ width: "390px", height: "480px", borderRadius: "25px" }}
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

        <Stack
          width={"330px"}
          height={"175px"}
          alignItems={"center"}
          spacing={1}
        >
          <Typography fontWeight={700} fontSize={"25px"}>
            Margherita
          </Typography>
          <Typography fontWeight={400} fontSize={"15px"} sx={{textAlign: "center"}}>
            Tomato, Mozzarella, Bell Peppers, Onions, Olives
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
