import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/coffee.svg';
import { FaCoffee, FaShoppingCart, FaUser, FaSignInAlt, FaHeart } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const Menus = [
    {
        id: 2,
        name: "Services",
        link: "/services",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
];

const Navbar = () => {
    const { cart } = useCart();

    return (
        <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
            <div className="container py-2">
                <div className="flex justify-between items-center gap-4">
                    {/* Logo section */}
                    <div className=''>
                        <Link to="/" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'>
                            <img src={Logo} alt="Logo" className='w-14' />
                            JES Coffee Shop
                        </Link>
                    </div>
                    {/* Links and buttons section */}
                    <div className='flex justify-between items-center gap-4'>
                        <ul className='hidden sm:flex items-center gap-4'>
                            {Menus.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>{data.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex items-center gap-4'>



                            <Link to="/favorites" className='text-xl px-4 py-2 text-white/70 hover:text-white duration-200'>
                                <FaHeart />
                            </Link>

                            <Link to="/cart" className='relative flex items-center text-white hover:text-gray-300'>
                                <FaShoppingCart className='text-xl' />
                                {cart.items.length > 0 && (
                                    <span className='absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2'>
                                        {cart.items.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="/signin" className='bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700 flex items-center gap-2'>
                                Sign In <FaSignInAlt />
                            </Link>

                            <Link to="/signup" className='bg-green-500 px-4 py-2 rounded-full hover:bg-green-700 flex items-center gap-2'>
                                Sign Up <FaUser />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
