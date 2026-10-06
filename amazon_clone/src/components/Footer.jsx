import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-8 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Column 1 — Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-yellow-400 text-black font-extrabold text-lg px-2 py-0.5 rounded">
                            best buy
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your one-stop destination for the latest tech. Unbeatable deals, expert advice, and fast delivery — right to your door.
                    </p>
                    <div className="flex gap-3 mt-5">
                        {/* Social icons (SVG) */}
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter / X" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4.5" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2 — Quick Links */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-yellow-400">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/deals" className="hover:text-yellow-400 transition-colors">All Deals</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:text-yellow-400 transition-colors">Shopping Cart</Link>
                        </li>
                        <li>
                            <Link to="/orders" className="hover:text-yellow-400 transition-colors">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-yellow-400 transition-colors">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="hover:text-yellow-400 transition-colors">Create Account</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 — Shop by Category */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-yellow-400">
                        Shop by Category
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <Link to="/deals?category=TVs" className="hover:text-yellow-400 transition-colors">TVs &amp; Home Theater</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Laptops" className="hover:text-yellow-400 transition-colors">Laptops &amp; Computers</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Cell+Phones" className="hover:text-yellow-400 transition-colors">Cell Phones</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Gaming" className="hover:text-yellow-400 transition-colors">Gaming</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Audio" className="hover:text-yellow-400 transition-colors">Audio</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Cameras" className="hover:text-yellow-400 transition-colors">Cameras</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Appliances" className="hover:text-yellow-400 transition-colors">Appliances</Link>
                        </li>
                        <li>
                            <Link to="/deals?category=Wearables" className="hover:text-yellow-400 transition-colors">Wearables</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4 — Contact Info */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-yellow-400">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 mt-0.5 shrink-0 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>7601 Penn Ave S,<br />Richfield, MN 55423</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-4 h-4 shrink-0 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.87 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a href="tel:+18882372289" className="hover:text-yellow-400 transition-colors">1-888-BEST-BUY</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-4 h-4 shrink-0 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                            <a href="mailto:support@bestbuy.com" className="hover:text-yellow-400 transition-colors">support@bestbuy.com</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 mt-0.5 shrink-0 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>Mon – Fri: 9AM – 9PM<br />Sat – Sun: 10AM – 8PM</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 px-8 py-5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                    <span>© 2026 Best Buy Co., Inc. All rights reserved.</span>
                    <div className="flex gap-5">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
