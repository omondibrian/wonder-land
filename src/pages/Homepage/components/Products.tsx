import React from "react";
import Product from "./Product";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { ProductEntity } from "state/entities";

const Products = () => {
  const products = useSelector(
    (state: RootState) => state.root.shop.products
  ) as Array<ProductEntity>;
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 p-8">
      {products.map((item) => (
        <Product key={item.id} prd={item} />
      ))}
    </ul>
  );
};

export default Products;
