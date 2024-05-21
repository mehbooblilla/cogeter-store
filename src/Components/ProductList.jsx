import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../features/products/productsSlice";
// import { addItemToCart } from "../features/cart/cartSlice";

const ProductList = ({products}) => {
//   const dispatch = useDispatch();

//   const error = useSelector((state) => state.products.error);
// 
//   useEffect(() => {
//     if (productStatus === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [productStatus, dispatch]);

//   const handleAddToCart = (product, variant) => {
//     if (variant.quantity > 0) {
//       const item = {
//         cart_id: `${product.id}-${variant.size}`,
//         title: product.title,
//         coverImage: product.coverImage,
//         price: variant.sale_price || variant.regular_price,
//         size: variant.size,
//         regular_price: variant.regular_price,
//         sale_price: variant.sale_price,
//       };
//       dispatch(addItemToCart(item));
//     }
//   };

  return (
    <div className="py-4 px-8">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product) => (
        <ProductCard product={product}/>
          ))}
        </div>
     
    </div>
  );
};

export default ProductList;
