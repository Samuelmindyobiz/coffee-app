import React from 'react';
import { useCart } from '../contexts/CartContext';
import Img2 from '../assets/cup2.webp';

const Favorites = () => {
    const { getFavoriteItems } = useCart();


    const services = [
        { id: 1, img: Img2, name: 'Espresso', price: 5.99, description: 'Delicious Espresso' },
        { id: 2, img: Img2, name: 'Americano', price: 4.99, description: 'Rich Americano' },
        { id: 3, img: Img2, name: 'Cappuccino', price: 3.99, description: 'Creamy Cappuccino' },
    ];

    const favoriteItems = getFavoriteItems(services);

    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">Your Favorite Coffees</h1>
                    <p className="text-gray-600 mt-4">Here are the coffees you love</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {favoriteItems.length === 0 ? (
                        <p className="text-center text-gray-600">No favorites yet!</p>
                    ) : (
                        favoriteItems.map((item) => (
                            <div key={item.id} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                                <div className="h-[122px]">
                                    <img src={item.img} alt={item.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                </div>
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold">{item.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm">{item.description}</p>
                                    <p className="text-lg font-semibold mt-2">{item.price}€</p>
                                    <button className="bg-green-300 text-black px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">Order Now</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
