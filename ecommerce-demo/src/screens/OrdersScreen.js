import React from "react";
import { useSelector } from "react-redux";

function OrdersScreen() {
  const orders = useSelector((state) => state.orders.list);

    return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Orders History</h2>

        {orders.length === 0 ? (
        <p className="text-gray-600">No orders yet</p>
        ) : (
        <div className="space-y-4">
            {orders.map((order) => (
            <div key={order.orderNo} className="border rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-lg">Order No: {order.orderNo}</h4>
                <p className="text-gray-600 text-sm">Date: {order.date}</p>
                <p className="font-bold mt-2">Total: ${order.total}</p>
            </div>
            ))}
        </div>
        )}
    </div>
    );
}

export default OrdersScreen;
