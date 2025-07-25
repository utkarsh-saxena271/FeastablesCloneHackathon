import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ id, name, description, price, image }) => {
  return (
    <div className="bg-white min-w-100 min-h-120 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-60 bg-feastmint flex items-center justify-center">
        <img
          src={image || "https://via.placeholder.com/300x200?text=Product+Image"}
          alt={name}
          className="object-contain h-full w-full p-4"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-bold text-feastorange">{name}</h1>
        <p className="text-sm text-gray-600">
          {description ? `${description.slice(0, 50)}...` : "No description available."}
        </p>
        <p className="text-lg font-semibold text-feastpurple">₹{price}</p>

        <NavLink
          to={`/product/${id}`}
          className="inline-block mt-2 text-sm font-medium text-white bg-feastorange px-4 py-2 rounded-md hover:bg-feastdark transition"
        >
          View Product
        </NavLink>
      </div>
    </div>
  )
}

export default ProductCard