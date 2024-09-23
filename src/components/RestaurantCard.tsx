import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import DefaultAvatar from "@/public/Ellipse 8.png";
import Bolt from "@/public/bolt.png";
import Image from "next/image";

export default function RestaurantCard() {
  return (
    <Card sx={{ maxWidth: 550, p: 1, display: "flex", borderRadius: "10PX" }}>
      <Box sx={{ display: "flex", flexDirection: "row", p: 1 }}>
        <Box sx={{ maxWidth: 235, height: 110 }}>
          <CardHeader
            avatar={
              <Avatar>
                <Image src={DefaultAvatar} width={40} height={40} alt="Default Avatar" priority />
              </Avatar>
            }
            title="Azmera Pizza"
            sx={{ p: 1 }}
          />
          <CardContent sx={{ p: 1, pb: "0px !important" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive pizza is a perfect party dish and a fun meal to
              cook together with your guests...
            </Typography>
          </CardContent>
        </Box>
        <Stack
          height={90}
          width={265}
          sx={{ background: "#0080000D", borderRadius: "10px", p: "15px" }}
          direction={"row"}
          spacing={3}
        >
          <Avatar sx={{ background: "#FF810033", height: 84, width: 84 }}>
            <Image src={Bolt} alt="Bolt" width={45} height={45} priority />
          </Avatar>
          <Box>
            <Typography>Number of order</Typography>
            <Typography
              sx={{ fontWeight: "700", fontSize: "60px", color: "#FF8100" }}
            >
              2K
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
