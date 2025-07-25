import { createContext, useContext } from "react";

// Create Context
const ProductContext = createContext();

// Sample Products with proper image URLs
const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    description: "Classic silky-smooth milk chocolate that melts in your mouth.",
    price: 129,
    image: new URL("../assets/products/MilkChocolate.webp", import.meta.url).href,
  },
  {
    id: 2,
    name: "Dark Chocolate",
    description: "Bold and rich 70% dark chocolate for true cacao lovers.",
    price: 149,
    image: new URL("../assets/products/DarkChocolate.webp", import.meta.url).href,
  },
  {
    id: 3,
    name: "Peanut Butter Chocolate",
    description: "A heavenly combo of creamy peanut butter and sweet milk chocolate.",
    price: 159,
    image: new URL("../assets/products/PeanutButter.webp", import.meta.url).href,
  },
  {
    id: 4,
    name: "Dark Chocolate Sea Salt",
    description: "Intense dark chocolate balanced perfectly with a hint of sea salt.",
    price: 169,
    image: new URL("../assets/products/DarkChocolateSeaSalt.webp", import.meta.url).href,
  },
  {
    id: 5,
    name: "Milk Crunch",
    description: "Smooth milk chocolate loaded with crunchy, golden crisped rice.",
    price: 179,
    image: new URL("../assets/products/MilkCrunch.webp", import.meta.url).href,
  },
  {
    id: 6,
    name: "Almond Bar",
    description: "Roasted almonds enveloped in luscious milk chocolate for the perfect bite.",
    price: 139,
    image: new URL("../assets/products/Almonds.webp", import.meta.url).href,
  },
];
// Provider
export const ProductsContext = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook to use context
export const useProducts = () => useContext(ProductContext);