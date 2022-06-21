import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity, ProductCategory, Cart, PurchaseItems } from "state/entities";

import {products} from '../../../data/products';


type ProductStateType = {
  products: Array<ProductEntity>;
  category: Array<ProductCategory>;
  cart: Cart;
};

const initialState: ProductStateType = getInitialProductState();

function getInitialProductState(): ProductStateType {
  console.log(products)
  const category = products.shop.categories.map(
    (crt) => new ProductCategory(crt.id, crt.name)
  );

  const productsObj: Array<ProductEntity> = products.shop.products.map(
    (prd): ProductEntity =>
      new ProductEntity(
        prd.id,
        prd.name,
        prd.price,
        prd["category-id"],
        prd.url,
        prd.description
      )
  );

  return {
    products: productsObj,
    category,
    cart: new Cart(),
  };
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PurchaseItems>) => {
      state.cart.add(action.payload);
    },
    checkOut: (state) => {
      // state["profile"] = {
      //   role: "",
      //   isAuthenticated: false,
      //   username: "",
      // };
    },
    search(state, action) {},
    filter(state, action) {},
  },
});

export const { addToCart, checkOut, search, filter } = shopSlice.actions;
export default shopSlice.reducer;
