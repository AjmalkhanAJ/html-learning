import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { addOrder } from "../slices/ordersSlice";

function CartScreen() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const order = {
      orderNo: "ORD" + Date.now(),
      date: new Date().toLocaleString(),
      total,
      items: cart,
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    alert("Order placed!");
  };

  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>

        {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart</p>
        ) : (
        <>
            <div className="space-y-4">
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.qty} × ${item.price}</p>
                </div>
                <p className="font-bold">${item.qty * item.price}</p>
                </div>
            ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ${total}</h3>
            <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
                Checkout
            </button>
            </div>
        </>
        )}
    </div>
    );
}

export default CartScreen;
