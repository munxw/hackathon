import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import productList from "../data/data";

const ProductContent = () => {
  const getProductCard = (productObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <ProductCard {...productObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {productList.map((productObj) => getProductCard(productObj))}
    </Grid>
  );
};

export default ProductContent;
