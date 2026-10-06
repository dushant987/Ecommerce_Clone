import { Link } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import Footer from "../src/components/Footer";

const deals = [
    {
        id: 1,
        name: "Samsung 65\" 4K QLED TV",
        price: "₹67,199",
        originalPrice: "₹1,00,799",
        discount: "33% off",
        tag: "Deal of the Day",
        bg: "bg-gray-800",
        icon: "📺",
        img: "https://images.unsplash.com/photo-1717295248299-74c084c31184?w=400&h=300&fit=crop&auto=format",
    },
    {
        id: 2,
        name: 'Dell XPS 15" Laptop',
        price: "₹92,399",
        originalPrice: "₹1,25,999",
        discount: "27% off",
        tag: "Top Seller",
        bg: "bg-slate-700",
        icon: "💻",
        img: "https://images.unsplash.com/photo-1589388107017-6f60aad8387f?w=400&h=300&fit=crop&auto=format",
    },
    {
        id: 3,
        name: "Apple iPhone 16 Pro",
        price: "₹83,999",
        originalPrice: "₹92,399",
        discount: "9% off",
        tag: "New Arrival",
        bg: "bg-zinc-800",
        icon: "📱",
        img: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=400&h=300&fit=crop&auto=format",
    },
    {
        id: 4,
        name: "Sony WH-1000XM5 Headphones",
        price: "₹23,519",
        originalPrice: "₹33,599",
        discount: "30% off",
        tag: "Best Seller",
        bg: "bg-neutral-800",
        icon: "🎧",
        img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&auto=format",
    },
];

const categories = [
    { name: "TVs & Home Theater", icon: "📺", color: "bg-blue-100" },
    { name: "Laptops & Computers", icon: "💻", color: "bg-indigo-100" },
    { name: "Cell Phones", icon: "📱", color: "bg-sky-100" },
    { name: "Gaming", icon: "🎮", color: "bg-purple-100" },
    { name: "Audio", icon: "🎧", color: "bg-teal-100" },
    { name: "Cameras", icon: "📷", color: "bg-green-100" },
    { name: "Appliances", icon: "🏠", color: "bg-yellow-100" },
    { name: "Wearables", icon: "⌚", color: "bg-orange-100" },
];

const Home = () => {
    const { addToCart } = useCart();
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Hero Banner */}
            <div className="mt-5 mx-3 sm:mx-6 rounded-2xl overflow-hidden shadow-xl relative" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)" }}>
                {/* decorative circles */}
                <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-indigo-400 opacity-20 rounded-full"></div>

                <div className="relative px-6 sm:px-10 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
                    {/* Left: text */}
                    <div className="flex-1 z-10">
                        <span className="bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow">
                            🔥 Limited Time Offer
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5 leading-tight text-white">
                            Spring <span className="text-yellow-400">Tech</span><br />Sale 2026
                        </h1>
                        <p className="text-blue-200 text-base mt-4 max-w-sm leading-relaxed">
                            Unbeatable deals on TVs, laptops, phones &amp; more.<br />
                            Save up to <span className="text-yellow-400 font-bold">40% off</span> top brands — today only.
                        </p>
                        <div className="flex gap-4 mt-7 flex-wrap">
                            <Link
                                to="/deals"
                                className="bg-yellow-400 text-black font-black text-base px-7 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
                            >
                                Shop All Deals
                            </Link>
                            <a
                                href=""
                                className="border-2 border-white text-white font-bold text-base px-7 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                            >
                                View Categories
                            </a>
                        </div>
                    </div>

                    {/* Right: stat cards */}
                    <div className="flex-1 flex justify-center z-10">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center">
                                <span className="text-4xl">📺</span>
                                <p className="text-white font-bold text-sm mt-2">TVs</p>
                                <p className="text-yellow-400 font-black text-lg">Up to 40% off</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center">
                                <span className="text-4xl">💻</span>
                                <p className="text-white font-bold text-sm mt-2">Laptops</p>
                                <p className="text-yellow-400 font-black text-lg">Up to 27% off</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center">
                                <span className="text-4xl">📱</span>
                                <p className="text-white font-bold text-sm mt-2">Phones</p>
                                <p className="text-yellow-400 font-black text-lg">Up to 20% off</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center">
                                <span className="text-4xl">🎧</span>
                                <p className="text-white font-bold text-sm mt-2">Audio</p>
                                <p className="text-yellow-400 font-black text-lg">Up to 30% off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Banner Strip */}
            <div className="bg-yellow-400">
                <div className="max-w-7xl mx-auto px-8 py-3 flex flex-wrap gap-6 items-center justify-center text-sm font-semibold text-black">
                    <span>🚚 Free shipping on orders over ₹2,999</span>
                    <span>|</span>
                    <span>🔄 Free 15-day returns</span>
                    <span>|</span>
                    <span>🛡️ 2-year Geek Squad protection available</span>
                    <span>|</span>
                    <span>💳 12-month financing on select items</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">

                {/* Shop by Category */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-5">Shop by Category</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {categories.map((cat) => (
                            <Link
                                to={`/deals?category=${encodeURIComponent(cat.name)}`}
                                key={cat.name}
                                className={`${cat.color} rounded-xl p-4 flex  items-center gap-2 hover:shadow-md transition-shadow cursor-pointer`}
                            >
                                <span className="text-4xl">{cat.icon}</span>
                                <span className="text-center text-xs font-semibold text-gray-700 leading-tight">
                                    {cat.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Deals of the Day */}
                <section className="mt-12">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-bold text-gray-800">Deals of the Day</h2>
                        <Link to="/deals" className="text-blue-700 font-semibold hover:underline text-sm">
                            See all deals →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {deals.map((deal) => (
                            <div
                                key={deal.id}
                                className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                            >
                                {/* Product image */}
                                <div className="h-44 overflow-hidden">
                                    <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="p-4 flex flex-col ">
                                    {/* Tag */}
                                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                                        {deal.tag}
                                    </span>

                                    {/* Name */}
                                    <p className="text-gray-800 font-semibold mt-1 text-sm leading-snug flex-1">
                                        {deal.name}
                                    </p>

                                    {/* Pricing */}
                                    <div className="mt-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-bold text-gray-900">{deal.price}</span>
                                            <span className="text-sm text-gray-400 line-through">
                                                {deal.originalPrice}
                                            </span>
                                        </div>
                                        <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                            {deal.discount}
                                        </span>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        onClick={() => addToCart(deal)}
                                        className="mt-4 block w-full text-center bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Promo Banners Row */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-700 rounded-2xl p-8 flex items-center justify-between text-white">
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">
                                New Arrivals
                            </p>
                            <h3 className="text-2xl font-bold mt-1">
                                Latest Gaming <br /> Gear Is Here
                            </h3>
                            <a
                                href=""
                                className="inline-block mt-4 border-2 border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-colors text-sm"
                            >
                                Shop Gaming
                            </a>
                        </div>
                        <div className="text-7xl">🎮</div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-8 flex items-center justify-between text-white">
                        <div>
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
                                Members Only
                            </p>
                            <h3 className="text-2xl font-bold mt-1">
                                Extra Savings <br /> For My Best Buy+
                            </h3>
                            <a
                                href=""
                                className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors text-sm"
                            >
                                Join Free
                            </a>
                        </div>
                        <div className="text-7xl">⭐</div>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Home;
