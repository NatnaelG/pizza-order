import Fasting from "@/components/Fasting";
import FeaturedPizzaWrapper from "@/components/FeaturedPizzaWrapper";
import BottomNav from "@/components/footer/BottomNav";
import Footer from "@/components/footer/footer";
import Hero from "@/components/Hero";
// import OrderHistoryPizza from "@/components/OrderHistoryPizza";
// import PizzaCard from "@/components/PizzaCard";
// import RelatedPizza from "@/components/RelatedPizza";
import Popular from "@/components/Popular";
import TopRestaurants from "@/components/TopRestaurant";
import { Box } from "@mui/material";
import HeaderNav from "@/components/HeaderNav";

export default function Home() {
  return (
    <>
      <Box p={3} sx={{
          background: "linear-gradient(to bottom, #FFFFFF, #FFC993, #FFF8F1)",
      }}>
        <HeaderNav />
        <Hero />
      </Box>
      <Box p={3}>
        <FeaturedPizzaWrapper />
      </Box>
      <Box p={3}>
        <TopRestaurants />
      </Box>
      <Box p={3}>
        <Popular />
      </Box>
      <Box p={3}>
        <Fasting />
      </Box>
      <Box pt={3}>
        <BottomNav />
      </Box>
      <Box>
        <Footer />
      </Box>
      {/* <Box p={3}>
        <RelatedPizza />
      </Box>
      <Box p={3}>
        <PizzaCard />
      </Box>
      <Box p={3}>
        <OrderHistoryPizza />
      </Box> */}
    </>
  );
}
