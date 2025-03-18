"use client";
import { Product, useCartStore } from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ image, name, price, id }: Product) => {
  const router = useRouter();
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    // <Link href={`product/${id}`}>
    <div className="flex flex-col items-center w-fit transition delay-100 duration-300 ease-in-out border-[0.5px] border-[#c1c1c1]">
      <div className="w-52 md:w-72 h-52 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt="Cropped Image"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="border-y-[0.5px] md:border-b-[none] border-[#c1c1c1] w-full p-3.5">
        <h3 className="text-[14px] font-normal text-[#121212BF] uppercase">
          {name}
        </h3>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-[14px] font-normal p-2.5">₦{price}</p>
        <div className="border-l-[0.5px] border-[#c1c1c1] p-2.5">d</div>
        <div className="hidden md:block">
          {/* <button
            className={`uppercase bg-black text-white max-w-1/2 p-3.5 text-center cursor-pointer ${
              hoverState ? "block" : "hidden"
            }`}
            onClick={() => handleAddToCart({ image, name, price, id })}
          >
            Add to Cart
          </button> */}
        </div>
      </div>
      <button
        className="uppercase bg-black text-white w-full p-3.5 text-center cursor-pointer block"
        onClick={() => handleAddToCart({ image, name, price, id })}
      >
        Add to Cart
      </button>
    </div>
    // </Link>
  );
};

export default ProductCard;
