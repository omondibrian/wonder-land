import React from "react";
import { ProductEntity } from "state/entities";

const Product: React.FC<{ prd: ProductEntity }> = ({ prd }) => {
  return (
    <li className="w-full">
      <div className="relative h-64 w-full">
        {/* Content */}
        <img src={prd.url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-2">
        {/* About */}
        <p className="text-clip uppercase text-sm text-slate-400">{prd.name}</p>
        <div>
          <p className="truncate ">{prd.desc}</p>
          <p className="font-bold">{`$${prd.price}`}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
