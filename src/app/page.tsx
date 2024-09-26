// import Image from "next/image";
// import styles from "./page.module.css";

import FeaturedPizza from "@/components/FeaturedPizza";
import OrderHistoryPizza from "@/components/OrderHistoryPizza";
import PizzaCard from "@/components/PizzaCard";
import RelatedPizza from "@/components/RelatedPizza";
import TopRestaurants from "@/components/TopRestaurant";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* <Box p={3}>
        <RelatedPizza />
      </Box>
      <Box p={3}>
        <PizzaCard />
      </Box>
      <Box p={3}>
        <OrderHistoryPizza />
      </Box>
      <TopRestaurants /> */}

      <Box p={3}>
        <FeaturedPizza />
      </Box>
    </>
  );
}
