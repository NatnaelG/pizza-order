import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

import FeaturedSecondPizzaImage from "@/public/featured2.png";
import FeaturedThirdPizzaImage from "@/public/featured3.png";

export default function OrderItemImages() {
  return (
    <Grid container width={"748px"}>
      <Grid sx={{ display: { xs: "block", lg: "none" } }}>
        <Image
          src={FeaturedThirdPizzaImage}
          width={252}
          height={252}
          alt={"Order Item Image"}
        />
      </Grid>

      <Grid sx={{ display: { xs: "none", lg: "block" } }}>
        <Image
          src={FeaturedThirdPizzaImage}
          width={252}
          height={252}
          alt={"Order Item Image"}
        />
      </Grid>

      <Grid
        direction={"column"}
        sx={{ display: { xs: "block", lg: "none" } }}
        container
      >
        <Grid>
          <Image
            src={FeaturedThirdPizzaImage}
            width={100}
            height={100}
            alt={"Order Item Image"}
          />
        </Grid>
        <Grid>
          <Image
            src={FeaturedSecondPizzaImage}
            width={100}
            height={100}
            alt={"Order Item Image"}
          />
        </Grid>
      </Grid>

      <Grid
        direction={"column"}
        sx={{ display: { xs: "none", lg: "block" } }}
        container
      >
        <Grid>
          <Image
            src={FeaturedThirdPizzaImage}
            width={100}
            height={100}
            alt={"Order Item Image"}
          />
        </Grid>
        <Grid>
          <Image
            src={FeaturedSecondPizzaImage}
            width={100}
            height={100}
            alt={"Order Item Image"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
