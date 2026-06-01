import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true }
]

const ProductList = ({ selectedCategory, addToCart, cartItems }) => {
  const filtered =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {filtered.length === 0 ? (
        <p>No products available</p>
      ) : (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            inCart={cartItems.some((item) => item.id === product.id)}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
