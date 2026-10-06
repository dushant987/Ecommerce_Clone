import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import bestbuy from '../assets/best-buy-icon.svg';
import Search from '../assets/Search.svg';
import CartIcon from '../assets/Cart.png'

const Navbar = () => {
    const { totalItems } = useCart();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);



    

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return(
        <nav className="bg-blue-700 h-16 md:h-20 flex items-center px-4 md:px-8">

            {/* LEFT: Logo + Menu */}
            <div className='flex items-center gap-4 md:gap-6 shrink-0'>
                <Link to='/'>
                    <img src={bestbuy} className='h-9 md:h-13'/>
                </Link>

                {/* Menu dropdown */}
                <div className='relative' ref={menuRef}>
                    <button
                        className='text-white font-semibold text-base md:text-lg hover:text-yellow-300 transition-colors'
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        ☰ Menu
                    </button>
                    {menuOpen && (
                        <div className='absolute top-10 left-0 bg-white rounded-xl shadow-xl z-50 w-48 py-2 overflow-hidden'>
                            {[
                                { label: '🏠 Home', to: '/' },
                                { label: '🔥 Deals', to: '/deals' },
                                { label: '🛒 Cart', to: '/cart' },
                                { label: '📦 Orders', to: '/orders' },
                            ].map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setMenuOpen(false)}
                                    className='block px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm'
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {/* Login / Sign Out — only in dropdown on mobile */}
                            {user ? (
                                <button
                                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                                    className='block w-full text-left px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm md:hidden'
                                >
                                    🚪 Sign Out
                                </button>
                            ) : (
                                <Link
                                    to='/login'
                                    onClick={() => setMenuOpen(false)}
                                    className='block px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm md:hidden'
                                >
                                    🔑 Login
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* CENTER: Search bar — grows to fill available space, hidden on mobile */}
            <div className='hidden md:flex flex-1 mx-6'>
                <input placeholder='Search Best Buy' className='bg-white w-full h-11 rounded-l-md pl-4 text-sm outline-none'/>
                <button>
                    <img src={Search} className='bg-slate-100 h-11 rounded-r-md p-2'/>
                </button>
            </div>

            {/* RIGHT: Orders, Cart, User/Login */}
            <div className='flex items-center gap-4 md:gap-6 ml-auto'>

                {/* Orders — hidden on mobile */}
                <Link to='/orders' className='hidden md:block text-white font-semibold text-base hover:text-yellow-300 transition-colors'>
                    Orders
                </Link>

                {/* Cart */}
                <Link to='/cart' className='flex items-center gap-1.5'>
                    <div className='relative'>
                        <img src={CartIcon} className='h-9 md:h-10'/>
                        {totalItems > 0 && (
                            <span className='absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center'>
                                {totalItems > 99 ? '99+' : totalItems}
                            </span>
                        )}
                    </div>
                    <span className='hidden md:inline text-white font-semibold text-base'>Cart</span>
                </Link>

                {/* User / Login — hidden on mobile */}
                {user ? (
                    <div className='hidden md:flex items-center gap-2'>
                        <span className='text-white flex flex-col leading-tight'>
                            <span className='text-xs font-medium'>Welcome</span>
                            <span className='font-black text-yellow-400 text-base'>{user.name ? user.name.split(' ')[0] : 'User'}</span>
                        </span>
                        <button
                            onClick={handleLogout}
                            className='text-sm text-blue-200 hover:text-white border border-blue-400 hover:border-white px-3 py-1 rounded-full transition-colors'
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to='/login' className='hidden md:block text-white font-semibold text-base hover:text-yellow-300 transition-colors'>
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar