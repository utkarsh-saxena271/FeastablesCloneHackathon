import React from "react";

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div className="w-[260px] sm:w-[300px] min-h-[420px] rounded-2xl border-4 border-feastlavender bg-feastoffwhite shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
      {/* Product Image */}
      <div className="h-[200px] bg-gradient-to-br from-feastsky via-feastmint to-feastrose flex items-center justify-center p-4">
        <img
          src={image || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={name || "Product"}
          className="object-contain h-full w-full drop-shadow-[0_0_5px_var(--color-feastshadow)]"
          loading="lazy"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-200px)]">
        <h2 className="text-xl font-extrabold text-feastpurple mb-2 font-family-poppins italic tracking-wide">
          {name || "Unnamed Product"}
        </h2>

        <p className="text-sm text-feastdark flex-grow font-medium leading-relaxed">
          {description
            ? description.length > 80
              ? `${description.slice(0, 80)}...`
              : description
            : "No description available."}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-base font-bold text-feastorange">
            ₹{price || "--"}
          </span>
          <button className="bg-feastgreen hover:bg-feastorange text-feastdarker text-xs px-4 py-2 rounded-md transition-all duration-200 font-semibold shadow-md cursor-pointer">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;