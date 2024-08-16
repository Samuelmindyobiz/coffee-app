import React from 'react';
import Img2 from '../../assets/cup2.webp';
import { useCart } from '../../contexts/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ServicesData = [
    { id: 1, img: Img2, name: "Espresso", price: 5.99, description: "Delicious Espresso" },
    { id: 2, img: Img2, name: "Americano", price: 4.99, description: "Rich Americano" },
    { id: 3, img: Img2, name: "Cappuccino", price: 3.99, description: "Creamy Cappuccino" },
];

const Services = () => {
    const { addItemToCart, addToFavorites, getFavoriteItems } = useCart();
    const favoriteItems = getFavoriteItems(ServicesData);

    const handleAddToCart = (service) => {
        addItemToCart({ ...service, quantity: 1 }); // Adjust as needed for quantity
    };

    const handleToggleFavorite = (item) => {
        addToFavorites(item);
    };

    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee For You</h1>
                    <p className="text-gray-600 mt-4">Discover our exclusive range of coffees</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {ServicesData.map((service) => (
                        <div key={service.id} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                            <div className="h-[122px]">
                                <img src={service.img} alt={service.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{service.name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-high text-sm">{service.description}</p>
                                <p className="text-lg font-semibold mt-2">{service.price}€</p>
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        className="bg-green-300 text-black px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                                        onClick={() => handleAddToCart(service)}
                                    >
                                        Order Now
                                    </button>
                                    <button
                                        className="text-red-500 text-2xl"
                                        onClick={() => handleToggleFavorite(service)}
                                    >
                                        {favoriteItems.some(item => item.id === service.id) ? <FaHeart /> : <FaRegHeart />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
