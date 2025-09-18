import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slices/productsSlice";
import { addToCart } from "../slices/cartSlice";

function ProductsScreen() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const categories = ["all", ...new Set(items.map((p) => p.category))];
  const filtered = selectedCategory === "all"
    ? items
    : items.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Products</h2>

        {/* Categories */}
        <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
            <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${selectedCategory === cat ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
            {cat}
            </button>
        ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
            <div key={p.id} className="border rounded-lg shadow hover:shadow-lg p-4 transition">
            <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover rounded-md mb-3" />
            <h4 className="font-semibold text-lg mb-1">{p.title}</h4>
            <p className="text-gray-600 mb-2">${p.price}</p>
            <button
                onClick={() => dispatch(addToCart(p))}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                Add to Cart
            </button>
            </div>
        ))}
        </div>
    </div>
    );

}

export default ProductsScreen;
