import { Link } from "react-router-dom";
import { useOrders } from "../src/context/OrderContext";
import Footer from "../src/components/Footer";

const Orders = () => {
    const { orders } = useOrders();

    if (orders.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-6 px-8">
                <div className="text-8xl">📦</div>
                <h2 className="text-3xl font-bold text-gray-800">No orders yet</h2>
                <p className="text-gray-500 text-center max-w-sm">
                    Once you place an order, it will appear here.
                </p>
                <Link
                    to="/"
                    className="bg-blue-700 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-5">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800">Your Orders</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col gap-6">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-2xl shadow overflow-hidden">
                        {/* Order header */}
                        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
                            <div className="flex gap-8">
                                <div>
                                    <span className="uppercase text-xs font-semibold text-gray-400 block">Order Placed</span>
                                    <span className="font-medium text-gray-800">
                                        {new Date(order.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                    </span>
                                </div>
                                <div>
                                    <span className="uppercase text-xs font-semibold text-gray-400 block">Total</span>
                                    <span className="font-bold text-gray-900">₹{Math.round(order.orderTotal).toLocaleString("en-IN")}</span>
                                </div>
                                <div>
                                    <span className="uppercase text-xs font-semibold text-gray-400 block">Items</span>
                                    <span className="font-medium text-gray-800">
                                        {order.items.reduce((s, i) => s + i.qty, 0)}
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">Order # {order.id}</span>
                        </div>

                        {/* Order items */}
                        <div className="divide-y divide-gray-100">
                            {order.items.map((item) => (
                                <div key={item.id} className="px-6 py-4 flex items-center gap-4">
                                    <div className={`${item.bg || "bg-gray-700"} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-2xl">{item.icon || "📦"}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                                        <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                                    </div>
                                    <span className="font-bold text-gray-900 text-sm">
                                        ₹{(parseFloat(item.price.replace(/[₹$,]/g, "")) * item.qty).toLocaleString("en-IN")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Orders;
