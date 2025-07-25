import React from 'react'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../context/ProductsContext'

const Products = () => {
  const { products } = useProducts()
  return (
    <div className='flex items-center gap-10 justify-around flex-wrap pt-22'>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Products