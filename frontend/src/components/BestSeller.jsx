import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const besteProduct = products.filter((item) => item.bestseller);
    setBestSeller(besteProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 container mx-auto px-4">
      <div className="text-center text-3xl py-8">
        <Title Text1="BEST" Text2="SELLER" />
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          soluta maxime pariatur!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
        {bestseller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
