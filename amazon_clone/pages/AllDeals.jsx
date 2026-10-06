import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import Footer from "../src/components/Footer";

const categoryDeals = [
    {
        category: "TVs & Home Theater",
        icon: "📺",
        color: "bg-blue-100",
        bg: "bg-gray-800",
        products: [
            { id: 1,  name: 'Samsung 65" 4K QLED TV',       price: "₹67,199",   originalPrice: "₹1,00,799", discount: "33% off", tag: "Deal of the Day"  },
            { id: 2,  name: 'LG C3 55" OLED TV',            price: "₹83,999",   originalPrice: "₹1,17,599", discount: "29% off", tag: "Editor's Choice"  },
            { id: 3,  name: 'Sony Bravia XR 75" 4K TV',     price: "₹1,09,199", originalPrice: "₹1,51,199", discount: "28% off", tag: "Flash Sale"       },
            { id: 4,  name: 'TCL 50" 4K Smart TV',          price: "₹23,519",   originalPrice: "₹33,599",   discount: "30% off", tag: "Budget Pick"      },
            { id: 5,  name: 'Hisense 70" ULED 4K TV',       price: "₹46,199",   originalPrice: "₹67,199",   discount: "31% off", tag: "Top Rated"        },
        ],
    },
    {
        category: "Laptops & Computers",
        icon: "💻",
        color: "bg-indigo-100",
        bg: "bg-slate-700",
        products: [
            { id: 6,  name: 'Dell XPS 15" Laptop',          price: "₹92,399",   originalPrice: "₹1,25,999", discount: "27% off", tag: "Top Seller"       },
            { id: 7,  name: "Apple MacBook Air M3",          price: "₹92,399",   originalPrice: "₹1,09,199", discount: "15% off", tag: "Top Seller"       },
            { id: 8,  name: 'HP Spectre x360 14"',          price: "₹1,04,999", originalPrice: "₹1,34,399", discount: "22% off", tag: "Best Buy Pick"    },
            { id: 9,  name: "Lenovo ThinkPad X1 Carbon",    price: "₹96,599",   originalPrice: "₹1,34,399", discount: "28% off", tag: "Business Choice"  },
            { id: 10, name: "ASUS ZenBook 14 OLED",         price: "₹62,999",   originalPrice: "₹83,999",   discount: "25% off", tag: "Great Value"      },
        ],
    },
    {
        category: "Cell Phones",
        icon: "📱",
        color: "bg-sky-100",
        bg: "bg-zinc-800",
        products: [
            { id: 11, name: "Apple iPhone 16 Pro",          price: "₹83,999",   originalPrice: "₹92,399",   discount: "9% off",  tag: "New Arrival"      },
            { id: 12, name: "Samsung Galaxy S25 Ultra",     price: "₹96,599",   originalPrice: "₹1,09,199", discount: "12% off", tag: "New Arrival"      },
            { id: 13, name: "Google Pixel 9 Pro",           price: "₹75,599",   originalPrice: "₹83,999",   discount: "10% off", tag: "Editor's Pick"    },
            { id: 14, name: "OnePlus 13",                   price: "₹58,799",   originalPrice: "₹75,599",   discount: "22% off", tag: "Great Value"      },
            { id: 15, name: "Samsung Galaxy A55",           price: "₹29,399",   originalPrice: "₹37,799",   discount: "22% off", tag: "Budget Pick"      },
        ],
    },
    {
        category: "Gaming",
        icon: "🎮",
        color: "bg-purple-100",
        bg: "bg-gray-900",
        products: [
            { id: 16, name: "PlayStation 5 Console",        price: "₹37,799",   originalPrice: "₹41,999",   discount: "10% off", tag: "Limited Stock"    },
            { id: 17, name: "Xbox Series X",                price: "₹37,799",   originalPrice: "₹41,999",   discount: "10% off", tag: "Top Seller"       },
            { id: 18, name: "Nintendo Switch 2",            price: "₹33,599",   originalPrice: "₹37,799",   discount: "11% off", tag: "New Arrival"      },
            { id: 19, name: 'Razer Blade 15 Gaming Laptop', price: "₹1,51,199", originalPrice: "₹1,93,199", discount: "22% off", tag: "Gaming Beast"     },
            { id: 20, name: "SteelSeries Arctis Nova Pro",  price: "₹16,799",   originalPrice: "₹23,519",   discount: "29% off", tag: "Best Headset"     },
        ],
    },
    {
        category: "Audio",
        icon: "🎧",
        color: "bg-teal-100",
        bg: "bg-neutral-800",
        products: [
            { id: 21, name: "Sony WH-1000XM5 Headphones",  price: "₹23,519",   originalPrice: "₹33,599",   discount: "30% off", tag: "Best Seller"      },
            { id: 22, name: "JBL Flip 7 Speaker",           price: "₹10,919",   originalPrice: "₹15,119",   discount: "28% off", tag: "Best Seller"      },
            { id: 23, name: "Apple AirPods Pro 2",          price: "₹15,959",   originalPrice: "₹20,999",   discount: "24% off", tag: "Popular Pick"     },
            { id: 24, name: "Bose QuietComfort 45",         price: "₹19,319",   originalPrice: "₹27,719",   discount: "30% off", tag: "Premium Choice"   },
            { id: 25, name: "Sonos Era 300 Speaker",        price: "₹29,399",   originalPrice: "₹37,799",   discount: "22% off", tag: "Editor's Choice"  },
        ],
    },
    {
        category: "Cameras",
        icon: "📷",
        color: "bg-green-100",
        bg: "bg-stone-700",
        products: [
            { id: 26, name: "Canon EOS R50 Camera",         price: "₹57,119",   originalPrice: "₹75,599",   discount: "24% off", tag: "Flash Sale"       },
            { id: 27, name: "Sony A7 IV Mirrorless",        price: "₹1,93,199", originalPrice: "₹2,35,199", discount: "18% off", tag: "Pro Pick"         },
            { id: 28, name: "Nikon Z50 II",                 price: "₹71,399",   originalPrice: "₹92,399",   discount: "23% off", tag: "Great Value"      },
            { id: 29, name: "GoPro Hero 13 Black",          price: "₹29,399",   originalPrice: "₹33,599",   discount: "13% off", tag: "Adventure Cam"    },
            { id: 30, name: "Fujifilm X-T5",                price: "₹1,25,999", originalPrice: "₹1,59,599", discount: "21% off", tag: "Retro Design"     },
        ],
    },
    {
        category: "Appliances",
        icon: "🏠",
        color: "bg-yellow-100",
        bg: "bg-slate-600",
        products: [
            { id: 31, name: "LG Smart Refrigerator",        price: "₹1,00,799", originalPrice: "₹1,34,399", discount: "25% off", tag: "Weekend Deal"     },
            { id: 32, name: "Samsung Front Load Washer",    price: "₹67,199",   originalPrice: "₹92,399",   discount: "27% off", tag: "Top Seller"       },
            { id: 33, name: "Dyson V15 Detect Vacuum",      price: "₹46,199",   originalPrice: "₹62,999",   discount: "27% off", tag: "Best Vacuum"      },
            { id: 34, name: "Ninja Foodi 9-in-1",           price: "₹15,119",   originalPrice: "₹20,999",   discount: "28% off", tag: "Kitchen Essential"},
            { id: 35, name: "Instant Pot Duo 8Qt",          price: "₹7,559",    originalPrice: "₹10,919",   discount: "31% off", tag: "Fan Favorite"     },
        ],
    },
    {
        category: "Wearables",
        icon: "⌚",
        color: "bg-orange-100",
        bg: "bg-gray-700",
        products: [
            { id: 36, name: "Apple Watch Series 10",        price: "₹29,399",   originalPrice: "₹36,119",   discount: "19% off", tag: "Popular Pick"     },
            { id: 37, name: "Samsung Galaxy Watch 7",       price: "₹20,999",   originalPrice: "₹25,199",   discount: "17% off", tag: "Android Best"     },
            { id: 38, name: "Fitbit Charge 6",              price: "₹10,079",   originalPrice: "₹13,439",   discount: "25% off", tag: "Fitness Tracker"  },
            { id: 39, name: "Garmin Fenix 8",               price: "₹58,799",   originalPrice: "₹75,599",   discount: "22% off", tag: "Adventure Watch"  },
            { id: 40, name: "Google Pixel Watch 3",         price: "₹25,199",   originalPrice: "₹29,399",   discount: "14% off", tag: "New Arrival"      },
        ],
    },
];

const productImages = {
    // TVs & Home Theater
    1:  "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop",
    2:  "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=800&auto=format&fit=crop",
    3:  "https://m.media-amazon.com/images/I/71LD1gonu1L._AC_UY327_FMwebp_QL65_.jpg",
    4:  "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=800&auto=format&fit=crop",
    5:  "https://images.unsplash.com/photo-1694032007593-8ead82259b11?q=80&w=800&auto=format&fit=crop",
    // Laptops & Computers
    6:  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    7:  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    8:  "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=800&auto=format&fit=crop",
    9:  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    10: "https://m.media-amazon.com/images/I/71n6Fs5KQPL._AC_UY327_FMwebp_QL65_.jpg",
    // Cell Phones
    11: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop",
    12: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    13: "https://m.media-amazon.com/images/I/51qG7EM6MZL._AC_UY327_FMwebp_QL65_.jpg",
    14: "https://m.media-amazon.com/images/I/61KXgizurpL._AC_UY327_FMwebp_QL65_.jpg",
    15: "https://m.media-amazon.com/images/I/71EeBkydf9L._AC_UY327_FMwebp_QL65_.jpg",
    // Gaming
    16: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    17: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=800&auto=format&fit=crop",
    18: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=800&auto=format&fit=crop",
    19: "https://m.media-amazon.com/images/I/71l3rBy8IPL._AC_UY327_FMwebp_QL65_.jpg",
    20: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    // Audio
    21: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    22: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop",
    23: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    24: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
    25: "https://m.media-amazon.com/images/I/81YPQ+l-Z6L._AC_UY327_FMwebp_QL65_.jpg",
    // Cameras
    26: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop",
    27: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    28: "https://images.unsplash.com/photo-1707849730179-06c69cf22acc?q=80&w=800&auto=format&fit=crop",
    29: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    30: "https://m.media-amazon.com/images/I/71aHBWzDBNL._AC_UY327_FMwebp_QL65_.jpg",
    // Appliances
    31: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop",
    32: "https://m.media-amazon.com/images/I/71FfzqsfwlL._AC_UY327_FMwebp_QL65_.jpg",
    33: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800&auto=format&fit=crop",
    34: "https://m.media-amazon.com/images/I/61+Llh3SkAL._AC_UY327_FMwebp_QL65_.jpg",
    35: "https://m.media-amazon.com/images/I/71Z401LjFFL._AC_UY327_FMwebp_QL65_.jpg",
    // Wearables
    36: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    37: "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=800&auto=format&fit=crop",
    38: "https://m.media-amazon.com/images/I/41M+F43gRJL._AC_UL480_FMwebp_QL65_.jpg",
    39: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop",
    40: "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=800&auto=format&fit=crop",
};

const categoryFallbackImages = {
    "TVs & Home Theater": "https://images.unsplash.com/photo-1717295248299-74c084c31184?q=80&w=800&auto=format&fit=crop",
    "Laptops & Computers": "https://images.unsplash.com/photo-1589388107017-6f60aad8387f?q=80&w=800&auto=format&fit=crop",
    "Cell Phones": "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=800&auto=format&fit=crop",
    "Gaming": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "Audio": "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    "Cameras": "https://images.unsplash.com/photo-1707849730179-06c69cf22acc?q=80&w=800&auto=format&fit=crop",
    "Appliances": "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    "Wearables": "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop",
};

const AllDeals = () => {
    const [searchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState(() => searchParams.get("category") || null);
    const { addToCart } = useCart();

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat) setActiveFilter(cat);
    }, [searchParams]);


    const visibleCategories = activeFilter
        ? categoryDeals.filter((c) => c.category === activeFilter)
        : categoryDeals;

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Page Header */}
            <div
                className="mx-3 sm:mx-6 mt-5 rounded-2xl overflow-hidden shadow-xl relative px-6 sm:px-10 py-10 sm:py-12"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)" }}
            >
                <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-indigo-400 opacity-20 rounded-full"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow">
                            🔥 All Deals
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black mt-4 text-white leading-tight">
                            Shop All <span className="text-yellow-400">Deals</span>
                        </h1>
                        <p className="text-blue-200 mt-3 max-w-md leading-relaxed">
                            40 deals across 8 categories — TVs, laptops, phones, gaming &amp; more. Updated daily.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="flex-shrink-0 border-2 border-white text-white font-bold text-base px-7 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>

            {/* Yellow strip */}
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

                {/* Shop by Category — Filter Bar */}
                <section>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
                        {activeFilter && (
                            <button
                                onClick={() => setActiveFilter(null)}
                                className="text-sm text-blue-700 font-semibold hover:underline"
                            >
                                ✕ Clear filter
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {categoryDeals.map((cat) => (
                            <button
                                key={cat.category}
                                onClick={() =>
                                    setActiveFilter(
                                        activeFilter === cat.category ? null : cat.category
                                    )
                                }
                                className={`${
                                    activeFilter === cat.category
                                        ? "ring-4 ring-blue-500 ring-offset-2 scale-105"
                                        : activeFilter
                                        ? "opacity-50 hover:opacity-80"
                                        : "hover:shadow-md"
                                } ${cat.color} rounded-xl p-4 flex items-center gap-2 transition-all cursor-pointer`}
                            >
                                <span className="text-4xl">{cat.icon}</span>
                                <span className="text-center text-xs font-semibold text-gray-700 leading-tight">
                                    {cat.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Per-Category Deal Sections */}
                {visibleCategories.map((cat) => (
                    <section key={cat.category} id={cat.category} className="mt-12">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-3xl">{cat.icon}</span>
                            <h2 className="text-2xl font-bold text-gray-800">{cat.category}</h2>
                            <span className="ml-auto text-sm text-gray-400 font-medium">{cat.products.length} deals</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {cat.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                                >
                                    <div className="h-40 relative overflow-hidden bg-white p-2">
                                        <img
                                            src={productImages[product.id] || categoryFallbackImages[cat.category]}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = categoryFallbackImages[cat.category];
                                            }}
                                        />
                                        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                                            {product.discount}
                                        </span>
                                    </div>

                                    <div className="p-4 flex flex-col flex-1">
                                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                                            {product.tag}
                                        </span>
                                        <p className="text-gray-800 font-semibold mt-1 text-sm leading-snug flex-1">
                                            {product.name}
                                        </p>

                                        <div className="mt-3">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                                <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                                            </div>
                                            <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                                {product.discount}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => addToCart({ ...product, icon: cat.icon, bg: cat.bg })}
                                            className="mt-4 block w-full text-center bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AllDeals;
