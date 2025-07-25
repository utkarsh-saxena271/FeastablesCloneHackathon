import React, { useRef } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "./ProductCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const containerRef = useRef();
  const cardsRef = useRef([]);

  // GSAP horizontal scroll-in animation for cards
  useGSAP(() => {
    gsap.from(cardsRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const { products } = useProducts();

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[100vh] py-16 px-6 md:px-20 bg-feastsky border-t-10 border-b-10 border-feastblue rounded-2xl shadow-lg my-5"
    >
      <h1 className="text-4xl md:text-5xl font-family-bangers italic text-center text-feastpurple mb-12">
        Our Products
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {products.map((product, index) => (
          <div key={product.id} ref={el => (cardsRef.current[index] = el)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;