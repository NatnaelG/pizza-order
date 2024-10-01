"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import FeaturedPizza from "./FeaturedPizza";
import Carousel from "react-material-ui-carousel";
import FeaturedPizzaImage from "@/public/featured.png";
import FeaturedSecondPizzaImage from "@/public/featured2.png";
import FeaturedThirdPizzaImage from "@/public/featured3.png";
import { User } from "@/lib/actions";
import { Ability, AbilityBuilder } from "@casl/ability";
import { useAbilityContext } from "@/lib/AbilityContext";
import { Role } from "@prisma/client";

export default function FeaturedPizzaWrapper({
  user,
}: {
  user: (User & { Role: Role }) | null;
}) {
  const hasWindow = typeof window !== "undefined";

  const ability = useAbilityContext();

  const getWindowDimensions = React.useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  // const [mounted, SetMounted] = React.useState("false");



  const { can, rules } = new AbilityBuilder(Ability);
  // can("read", "all");
  // can("add-user", "user");
  // can(["read", "update"], ["Post", "Comment"]);
  // can(...permissions)

  user?.Role.permissions.map((permission) => {
    const [caslAction, caslModel] = permission.split(" | ");
    can(caslAction, caslModel);
    return permission;
  });

  ability.update(rules);
  
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (hasWindow) {
      // SetMounted("true");
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return (
    <>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "25px", lg: "50px" } }}
      >
        Featured Pizza
      </Typography>
      {/* <Box
        className="top-restaurant"
        sx={{ width: "100%", overflow: "scroll" }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "max-content",
          }}
          spacing={2}
          p={1}
        > */}
      <Box
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: { xs: "20px", lg: "40px" },
          },
        }}
      >
        <Carousel
          navButtonsAlwaysInvisible={true}
          animation="slide"
          height={windowDimensions.width > 900 ? 400 : 200}
          // sx={{
          //   height:{xs: "250px", lg: "400px"}

          // }}
          indicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "#B6B6B6",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "#FF9921",
            },
          }}
          // autoPlay={false}
        >
          <FeaturedPizza
            key={1}
            backgroundProp="#2F2F2F"
            image={FeaturedPizzaImage}
            imageSize={{ width: 658, height: 484 }}
            largeScreen={windowDimensions.width > 900}
          />
          <FeaturedPizza
            key={2}
            backgroundProp="#50482B"
            image={FeaturedSecondPizzaImage}
            imageSize={{ width: 590, height: 599 }}
            largeScreen={windowDimensions.width > 900}
          />
          <FeaturedPizza
            key={3}
            backgroundProp="#296D60"
            image={FeaturedThirdPizzaImage}
            imageSize={{ width: 613, height: 629 }}
            largeScreen={windowDimensions.width > 900}
          />
        </Carousel>
      </Box>
      {/* </Stack>
        </Box> */}
    </>
  );
}
