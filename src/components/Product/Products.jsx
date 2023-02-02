import React from "react";
import { Grid } from "@mui/material";
import ProductContent from "./ProductContent";

const Products = () => {
  return (
    <Grid container direction="column">
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ProductContent />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default Products;
