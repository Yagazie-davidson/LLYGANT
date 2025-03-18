import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/store";

export default function Home() {
  const products: Product[] = [
    { id: 1, name: "Black", image: "/images/Black ++.png", price: 250000 },
    { id: 2, name: "White", image: "/images/White ++.png", price: 250000 },
  ];
  return (
    <div>
      <section className="bg-[#0A0A0A66] bg-blend-multiply text-white bg-[url(https://llygant.com/cdn/shop/files/IMG_4875.jpg)] h-[100vh] bg-cover bg-center flex justify-center items-center flex-col"></section>

      <div className="flex items-center justify-between px-6">
        <h2 className="font-normal text-[40px] tracking-[0.6px] my-8">
          Products
        </h2>
      </div>
      <section className="flex px-6">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          </div>
        ))}
      </section>
      <div className="h-80"></div>
    </div>
  );
}
