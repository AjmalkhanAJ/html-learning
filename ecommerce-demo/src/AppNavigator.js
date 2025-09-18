import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";

function AppNavigator() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <Router>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<ProductsScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
        </Routes>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-md py-3 border-t">
        <Link to="/" className="text-gray-700 font-medium hover:text-black">
          Products
        </Link>

        {/* Cart with badge */}
        <div className="relative">
          <Link to="/cart" className="text-gray-700 font-medium hover:text-black">
            Cart
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        <Link to="/orders" className="text-gray-700 font-medium hover:text-black">
          Orders
        </Link>
      </div>
    </Router>
  );
}

export default AppNavigator;
