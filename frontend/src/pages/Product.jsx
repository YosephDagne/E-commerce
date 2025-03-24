import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500  opacity-100">
      {/* --------------------------------Product Data---------------------------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -----------------------------product images----------------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* ----------Product Information---------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-5 rounded-lg text-gray-700 font-medium transition-all duration-600 ease-in-out ${
                    item === size
                      ? "border-orange-500 bg-orange-200 text-white"
                      : "hover:bg-green-200 focus:ring-2 focus:ring-yellow-500"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-gray-700 text-white px-4 py-2 text-md font-semibold rounded-full ring-2 ring-offset-gray-700 shadow-md border-2 border-black hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on the product.</p>
            <p>Easy return and exchange policy with in 7 days.</p>
          </div>
        </div>
      </div>
      {/*------------------ description and review section----------- */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            adipisci est amet, aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            totam similique in cupiditate porro{" "}
          </p>
        </div>
      </div>
      {/* ----------------------display related products------------------------------------- */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
