import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
  closeCart,
  selectCartSubtotal,
} from "../Redux/cart/cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
const CartModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const subTotal = useSelector(selectCartSubtotal);
  console.log(subTotal, "open");
  const handleIncrement = (cart_id, item) => {
    console.log(item, "item");
    dispatch(incrementQuantity(cart_id));
  };

  const handleDecrement = (cart_id) => {
    dispatch(decrementQuantity(cart_id));
  };

  const handleRemove = (cart_id) => {
    dispatch(removeItemFromCart(cart_id));
  };
  //   const cartItems = [
  //     {
  //       cart_id: 46,

  //       cover_image:
  //         "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1171_44c7edecea.jpg",
  //       size: "M",
  //       price: 200,
  //       quantity: 2,
  //     },
  //     {
  //         cart_id: 47,

  //         cover_image:
  //           "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1171_44c7edecea.jpg",
  //         size: "S",
  //         price: 250,
  //         quantity: 1,
  //       },
  //       {
  //         cart_id: 48,

  //         cover_image:
  //           "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1171_44c7edecea.jpg",
  //         size: "L",
  //         price: 300,
  //         quantity: 3,
  //       },
  //   ];
  console.log(cartItems);
  return (
    <Drawer
      open={cartOpen}
      onClose={() => dispatch(closeCart())}
      placement={"right"}
      style={{ backgroundColor: "#f7fafc" }}
      /* onClose={closeCart} */
    >
          <div className="flex justify-between items-center mb-2 border-b top-0 sticky px-6 py-4 bg-white ">
            <h2 className="text-xl font-normal ">
              {cartItems ? cartItems?.length : 0} Products added to your basket
            </h2>
            <span className="flex items-center">
              <AiOutlineCloseCircle
                fontSize={25}
                onClick={() => dispatch(closeCart())}
                className="cursor-pointer"
              />
            </span>
          </div>

      <div className="py-4 px-6 rounded  min-h-full w-full flex flex-col justify-between">
        <div>
        
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center h-full flex-col mt-20">
              <img
                src="https://store-dev.cogeter.com/static/media/no_item_incart.4d5f8c17680437dd8f241a69a4b980be.svg"
                alt="no data"
              />
              <p className="text-xl font-bold">No Item in Cart</p>
            </div>
          ) : (
            <div className="mt-4">
              {cartItems.map((item) => (
                <div
                  key={item.cart_id}
                  className="flex justify-between items-center mb-4 gap-5"
                >
                  <div>
                    <img
                      src={item.cover_image}
                      alt={item.title}
                      className="w-20 h-auto object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="font-semibold">Size: {item.size}</p>
                      <p className="font-semibold">Price: {item.price} AED</p>
                    </div>
                    <div className="flex">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(item.cart_id)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(item.cart_id, item)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.cart_id)}
                        className="px-2 py-1 text-red-500"
                      >
                        <AiTwotoneDelete fontSize={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems?.length>0 &&
          <div className="py-2 my-8 flex justify-between border-t border-b">
            <span className="text-lg font-semibold">Sub Total</span>
            <span className="text-lg font-semibold">AED {subTotal}</span>
          </div>}
        </div>

      
      </div>
      <div className="flex  bottom-2 w-full sticky px-2">
          <button
            className="w-full py-2 font-bold text-2xl text-white"
            style={{
              background:
                " #0000 linear-gradient(270deg, #7089fb, #aa41fa) 0 0 no-repeat padding-box",
            }}
          >
            Checkout
          </button>
        </div>
    </Drawer>
  );
};

export default CartModal;
