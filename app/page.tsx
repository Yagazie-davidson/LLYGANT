import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
// import { Product } from "@/lib/store";

export default function Home() {
  return (
    <div>
      <section className="bg-[#0A0A0A66] bg-blend-multiply text-white bg-[url(https://llygant.com/cdn/shop/files/IMG_4875.jpg)] h-[100vh] bg-cover bg-center flex justify-center items-center flex-col"></section>
      <Products />

      <div className="h-80"></div>
    </div>
  );
}
