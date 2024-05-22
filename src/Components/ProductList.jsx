import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import CartModal from "./CardModel";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../features/products/productsSlice";
import { addItemToCart, openCart } from "../Redux/cart/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  // const error = useSelector((state) => state.products.error);

  // useEffect(() => {
  //   if (productStatus === "idle") {
  //     dispatch(fetchProducts());
  //   }
  // }, [productStatus, dispatch]);

  const handleAddToCart = (product, variant) => {
    console.log("product", product);
    console.log("variant", variant);
    if (variant.quantity > 0) {
      const item = {
        cart_id: `${product.id}-${variant.size}`,
        title: product.title,
        cover_image: product.cover_image,
        price: product.regular_price,
        size: variant.size,
        regular_price: product.regular_price,
        sale_price: product.sale_price,
      };
      dispatch(addItemToCart(item));
      dispatch(openCart());
    }
  };

  return (
    <div className="py-4 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} AddToCart={handleAddToCart} />
          </div>
        ))}
      </div>

      <CartModal />
    </div>
  );
};

export default ProductList;
