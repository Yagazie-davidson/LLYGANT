"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { Product, useCartStore } from "@/lib/store";
import { toast } from "sonner";
const Products = () => {
  const products: Product[] = [
    {
      id: 1001,
      name: "Black",
      image: "/images/Black ++.png",
      price: 250000,
      availableSizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 1002,
      name: "White",
      image: "/images/White ++.png",
      price: 250000,
      availableSizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 1003,
      name: "New",
      image: "/images/4.png",
      price: 250000,
      availableSizes: ["S", "M", "L", "XL", "XXL"],
      comingSoon: true,
    },
    {
      id: 1004,
      name: "New",
      image: "/images/3.png",
      price: 250000,
      availableSizes: ["S", "M", "L", "XL", "XXL"],
      comingSoon: true,
    },
  ];
  const { addToCart } = useCartStore();
  return (
    <div>
      <div className="h-14"></div>

      <div className="flex items-center justify-between px-6">
        <h2 className="font-normal text-[40px] tracking-[0.6px] my-8">
          Products
        </h2>
      </div>
      <section className="px-6 md:justify-stretch items-center flex flex-wrap md:flex-nowrap md:grid md:grid-cols-3 lg:grid-cols-4 place-content-center gap-x-3 md:gap-x-5 lg:gap-x-10 gap-y-4   w-full">
        {products.map((product, index) => (
          <div key={index} className="md:w-full">
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product, size) => {
                addToCart(product, size);
                toast.message(`${product.name} added to cart!`);
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
