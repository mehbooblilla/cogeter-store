import React from 'react';

const ProductCard = ({ product, AddToCart }) => {
  return (
    <div className="border rounded overflow-hidden shadow-md hover:shadow-lg h-full relative">
      <div className='h-[70%] overflow-hidden relative group'>
        <img
          src={product.cover_image}
          alt={product.title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2 mb-1">
            {product.variants.map((variant) => (
              <button
                key={variant.size}
                onClick={() => AddToCart(product, variant)}
                className={`px-2 py-1 border rounded bg-white ${
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

      <div className='px-2 py-4 h-[30%] '>
        <h2 className="text-lg font-medium mb-2">{product.title}</h2>
        <h2 className='text-lg font-semibold'>
          {product?.regular_price} AED
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;