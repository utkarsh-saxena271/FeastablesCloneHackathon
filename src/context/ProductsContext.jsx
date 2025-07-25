import { createContext, useContext } from "react";

// Create Context
const ProductContext = createContext();

// Sample Products
const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    description: "Smooth and creamy milk chocolate with a touch of sea salt.",
    price: 129,
    image: "",
  },
  {
    id: 2,
    name: "Dark Chocolate",
    description: "Rich 70% cacao dark chocolate with roasted almonds.",
    price: 149,
    image: "",
  },
  {
    id: 3,
    name: "Peanut Butter Chocolate",
    description: "Crunchy peanut butter swirled with sweet milk chocolate.",
    price: 159,
    image: "",
  },
  {
    id: 4,
    name: "Hazelnut Crunch",
    description: "Hazelnuts and crispy rice wrapped in milk chocolate.",
    price: 169,
    image: "",
  },
  {
    id: 5,
    name: "Salted Caramel",
    description: "Golden caramel and sea salt in rich chocolate.",
    price: 179,
    image: "",
  },
  {
    id: 6,
    name: "Coconut Bliss",
    description: "Toasted coconut shreds inside creamy milk chocolate.",
    price: 139,
    image: "",
  },
  {
    id: 7,
    name: "Mint Dark Chocolate",
    description: "Refreshing mint infused in intense dark chocolate.",
    price: 159,
    image: "",
  },
  {
    id: 8,
    name: "Cookies & Cream",
    description: "Crushed cookies in smooth white chocolate.",
    price: 149,
    image: "",
  },
  {
    id: 9,
    name: "Orange Zest Dark",
    description: "Citrusy orange blended into 65% dark chocolate.",
    price: 159,
    image: "",
  },
  {
    id: 10,
    name: "Raspberry Delight",
    description: "Sweet raspberry swirls in velvety chocolate.",
    price: 149,
    image: "",
  },
  {
    id: 11,
    name: "Almond Crunch",
    description: "Roasted almonds in silky milk chocolate.",
    price: 169,
    image: "",
  },
  {
    id: 12,
    name: "Matcha White",
    description: "Earthy matcha blended with creamy white chocolate.",
    price: 159,
    image: "",
  },
  {
    id: 13,
    name: "Coffee Crisp",
    description: "Crispy bits and a hint of espresso in dark chocolate.",
    price: 179,
    image: "",
  },
  {
    id: 14,
    name: "Triple Chocolate",
    description: "Dark, milk, and white chocolate layers.",
    price: 189,
    image: "",
  },
  {
    id: 15,
    name: "Cinnamon Spice",
    description: "Warm cinnamon blended with smooth chocolate.",
    price: 139,
    image: "",
  },
  {
    id: 16,
    name: "Blueberry Crunch",
    description: "Crunchy cereal and dried blueberries in white chocolate.",
    price: 149,
    image: "",
  },
  {
    id: 17,
    name: "Chili Dark",
    description: "Spicy chili kick in 70% dark chocolate.",
    price: 169,
    image: "",
  },
  {
    id: 18,
    name: "Lemon Zing",
    description: "Zesty lemon flavor with creamy milk chocolate.",
    price: 149,
    image: "",
  },
  {
    id: 19,
    name: "Toffee Swirl",
    description: "Buttery toffee bits swirled in chocolate.",
    price: 179,
    image: "",
  },
  {
    id: 20,
    name: "Strawberry Cream",
    description: "Luscious strawberry center in white chocolate.",
    price: 159,
    image: "",
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