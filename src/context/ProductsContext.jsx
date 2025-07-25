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
    image: "/images/MilkChocolate.webp",
  },
  {
    id: 2,
    name: "Dark Chocolate",
    description: "Rich 70% cacao dark chocolate with roasted almonds.",
    price: 149,
    image: "/images/DarkChocolate.webp",
  },
  {
    id: 3,
    name: "Peanut Butter Chocolate",
    description: "Crunchy peanut butter swirled with sweet milk chocolate.",
    price: 159,
    image: "/images/PeanutButter.webp",
  },
  {
    id: 4,
    name: "Dark Chocolate Sea Salt",
    description: "Intense dark chocolate balanced perfectly with a hint of sea salt.",
    price: 169,
    image: "/images/DarkChocolateSeaSalt.webp",
  },
  {
    id: 5,
    name: "Milk Crunch",
    description: "Golden caramel crisps folded into rich chocolate.",
    price: 179,
    image: "/images/MilkCrunch.webp",
  },
  {
    id: 6,
    name: "Almond Bar",
    description: "Toasted almonds coated in smooth milk chocolate.",
    price: 139,
    image: "/images/Almonds.webp",
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