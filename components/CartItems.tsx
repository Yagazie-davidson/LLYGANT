"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/lib/store";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";

const CartItems = () => {
  const { items, totalPrice, removeFromCart, updateQuantity } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-none">
            <TableHead className="w-[500px] text-[10px] font-normal tracking-[1.3px] pr-14">
              PRODUCT
            </TableHead>
            <TableHead className="text-[10px] font-normal tracking-[1.3px]">
              QUANTITY
            </TableHead>
            <TableHead className="text-right text-[10px] font-normal tracking-[1.3px]">
              TOTAL
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length === 0 ? (
            <TableRow className="bg-none hover:bg-none border-b-0">
              <TableCell className="" colSpan={3}>
                <div className="flex flex-col items-center justify-center h-40 text-center">
                  <ShoppingCart className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => (
              <TableRow
                key={item.product.id}
                className="bg-none hover:bg-none border-b-0"
              >
                <TableCell className="font-medium pr-14">
                  <div className="flex items-center space-x-10">
                    <div className="w-52 md:w-32 h-52 md:h-32 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt="Cropped Image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-black uppercase tracking-[0.6px]">
                        {item.product.name}
                      </h3>
                      <p className="text-[14px] font-normal text-[#121212BF] uppercase tracking-[0.6px]">
                        ₦{item.product.price}
                      </p>
                      <p className="text-[14px] font-normal text-[#121212BF] uppercase tracking-[0.6px]">
                        Size
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center border border-black">
                      <button
                        className="h-[47px] w-[44px] border-r border-black flex justify-center items-center cursor-pointer"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-[53px] text-center ">
                        {item.quantity}
                      </span>
                      <button
                        className="h-[47px] w-[44px] flex justify-center items-center border-l border-black cursor-pointer"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      className="h-16 w-16 text-destructive"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash className="h-4 w-4" color="#000" />
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-right font-normal text-[16px] tracking-[1px]">
                  ₦{item.product.price * item.quantity}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter className="mt-7">
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell className="text-right text-[20px] text-[#121212BF] font-normal tracking-[0.6px]">
              <div>
                {" "}
                <span className="pr-2 font-semibold text-[16px] text-black">
                  Estimated total
                </span>
                ₦ {totalPrice.toFixed(2)}
              </div>
              <div className="flex justify-end mt-5">
                <button className="uppercase bg-black text-white px-7 py-3.5 text-center cursor-pointer block">
                  Checkout
                </button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CartItems;
