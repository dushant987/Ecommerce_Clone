import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import { useOrders } from "../src/context/OrderContext";
import Footer from "../src/components/Footer";

const Cart = () => {
    const { cartItems, removeFromCart, updateQty, clearCart, totalPrice } = useCart();
    const { placeOrder } = useOrders();
    const navigate = useNavigate();

    const shipping = totalPrice === 0 ? 0 : totalPrice >= 2999 ? 0 : 499;
    const tax = totalPrice * 0.18;
    const orderTotal = totalPrice + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-6 px-8">
                <div className="text-8xl">🛒</div>
                <h2 className="text-3xl font-bold text-gray-800">Your cart is empty</h2>
                <p className="text-gray-500 text-center max-w-sm">
                    Looks like you haven't added anything yet. Browse our deals and find something you'll love!
                </p>
                <Link
                    to="/"
                    className="bg-blue-700 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Shopping Cart
                        <span className="ml-3 text-base font-normal text-gray-400">
                            ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
                        </span>
                    </h1>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={clearCart}
                            className="text-sm text-red-500 hover:text-red-700 font-semibold"
                        >
                            Clear cart
                        </button>
                        <Link to="/" className="text-sm text-blue-700 font-semibold hover:underline">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center gap-4"
                        >
                            {/* Icon + Info grouped so they share a row on mobile */}
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className={`${item.bg || "bg-gray-700"} w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center shrink-0`}>
                                    <span className="text-3xl sm:text-4xl">{item.icon || "📦"}</span>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-800 font-semibold text-sm leading-snug">{item.name}</p>
                                    <p className="text-xs text-blue-700 font-bold uppercase tracking-wide mt-0.5">{item.tag}</p>
                                    <div className="flex flex-wrap items-baseline gap-2 mt-1">
                                        <span className="text-base sm:text-lg font-bold text-gray-900">{item.price}</span>
                                        <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                                        <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                                            {item.discount}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Qty + Total grouped so they share the second row on mobile */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                {/* Qty Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateQty(item.id, item.qty - 1)}
                                        className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center text-lg leading-none"
                                    >
                                        −
                                    </button>
                                    <span className="w-8 text-center font-bold text-gray-800">{item.qty}</span>
                                    <button
                                        onClick={() => updateQty(item.id, item.qty + 1)}
                                        className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center text-lg leading-none"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Item total */}
                                <div className="text-right shrink-0 w-24">
                                    <p className="font-bold text-gray-900">
                                        ₹{(parseFloat(item.price.replace(/[₹$,]/g, "")) * item.qty).toLocaleString("en-IN")}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs text-red-400 hover:text-red-600 mt-1"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow p-6 sticky top-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-5">Order Summary</h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-800">₹{totalPrice.toLocaleString("en-IN")}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className={`font-semibold ${shipping === 0 ? "text-green-600" : "text-gray-800"}`}>
                                    {shipping === 0 ? "FREE" : `₹${shipping.toLocaleString("en-IN")}`}
                                </span>
                            </div>
                            {shipping === 0 && (
                                <p className="text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-lg">
                                    ✓ You qualify for free shipping!
                                </p>
                            )}
                            {shipping > 0 && (
                                <p className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg">
                                    Add ₹{(2999 - totalPrice).toLocaleString("en-IN")} more for free shipping
                                </p>
                            )}
                            <div className="flex justify-between text-gray-600">
                                <span>GST (18%)</span>
                                <span className="font-semibold text-gray-800">₹{Math.round(tax).toLocaleString("en-IN")}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3 flex justify-between">
                                <span className="font-bold text-gray-800 text-base">Order Total</span>
                                <span className="font-black text-xl text-gray-900">₹{Math.round(orderTotal).toLocaleString("en-IN")}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                placeOrder(cartItems, { subtotal: totalPrice, shipping, tax, orderTotal });
                                clearCart();
                                navigate("/orders");
                            }}
                            className="mt-6 w-full bg-yellow-400 text-black font-black py-3 rounded-full hover:bg-yellow-300 transition-colors text-base shadow"
                        >
                            Proceed to Checkout
                        </button>
                        <Link
                            to="/deals"
                            className="mt-3 w-full block text-center border-2 border-blue-700 text-blue-700 font-bold py-2.5 rounded-full hover:bg-blue-700 hover:text-white transition-colors text-sm"
                        >
                            Browse More Deals
                        </Link>

                        {/* Trust badges */}
                        <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-xs text-gray-400">
                            <div>🔒<br />Secure Checkout</div>
                            <div>🔄<br />Free Returns</div>
                            <div>🛡️<br />2yr Protection</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Cart;
