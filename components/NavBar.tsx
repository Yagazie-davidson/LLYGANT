"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store";

const NavBar = () => {
  const { totalItems } = useCartStore();
  return (
    <div className="flex justify-between items-center px-6 pt-3.5">
      <div className="bg-white p-3.5 flex  border border-black">
        <Link href="/" className="">
          <Image
            src="/images/PADI LIFESTYLE LOGO.png"
            alt="logo"
            width={120}
            height={17}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center justify-end bg-white border border-black p-2">
        <div className="block">
          <Link href={"/cart"} className="flex items-center">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute top-2 right-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
