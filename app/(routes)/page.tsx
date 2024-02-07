import HomeComp from "@/components/home/HomeComp";
import Product from "@/components/home/product";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
        <HomeComp />
        <Product />
      </main>
  );
}
