import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className="border  rounded overflow-hidden shadow-md hover:shadow-lg">
    <img
      src={product.cover_image}
      alt={product.title}
      className="w-full h-auto object-cover transition hover:-translate-y-1 hover:scale-110"
    />
    <div className='p-2'>
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <div className="flex space-x-2 mt-2">
      {product.variants.map((variant) => (
        <button
          key={variant.size}
          // onClick={() => handleAddToCart(product, variant)}
          className={`px-2 py-1 border rounded ${
            variant.quantity === 0 ? "line-through" : ""
          }`}
          disabled={variant.quantity === 0}
        >
          {variant.size}
        </button>
      ))}
    </div>
    </div>
   
  </div>
  )
}

export default ProductCard