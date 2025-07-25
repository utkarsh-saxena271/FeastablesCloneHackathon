import { createContext, useContext } from "react";

// Create Context
const ProductContext = createContext();

// Sample Products with proper image URLs
const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    description: "Smooth and creamy milk chocolate with a touch of sea salt.",
    price: 129,
    image: new URL("../assets/products/MilkChocolate.webp", import.meta.url).href,
  },
  {
    id: 2,
    name: "Dark Chocolate",
    description: "Rich 70% cacao dark chocolate with roasted almonds.",
    price: 149,
    image: new URL("../assets/products/DarkChocolate.webp", import.meta.url).href,
  },
  {
    id: 3,
    name: "Peanut Butter Chocolate",
    description: "Crunchy peanut butter swirled with sweet milk chocolate.",
    price: 159,
    image: new URL("../assets/products/PeanutButter.webp", import.meta.url).href,
  },
  {
    id: 4,
    name: "Dark Chocolate Sea Salt",
    description: "Hazelnuts and crispy rice wrapped in milk chocolate.",
    price: 169,
    image: new URL("../assets/products/DarkChocolateSeaSalt.webp", import.meta.url).href,
  },
  {
    id: 5,
    name: "Milk Crunch",
    description: "Golden caramel and sea salt in rich chocolate.",
    price: 179,
    image: new URL("../assets/products/MilkCrunch.webp", import.meta.url).href,
  },
  {
    id: 6,
    name: "Almond Bar",
    description: "Toasted coconut shreds inside creamy milk chocolate.",
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