import React from "react";
import { ProductEntity } from "state/entities";

const Product: React.FC<{ prd: ProductEntity }> = ({ prd }) => {
  return (
    <li className="w-full">
      <div className="flex justify-center align-middle">
        <img src={prd.url} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="font-bold uppercase">{prd.name}</h2>
        <p className=" truncate text-clip overflow-hidden "> {prd.desc}</p>
      </div>
      <div className="flex">
        <p className="font-bold">${prd.price}</p>
      </div>
    </li>
  );
};

export default Product;
