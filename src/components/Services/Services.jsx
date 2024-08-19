import React from 'react';

import { useCart } from '../../contexts/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import axios from 'axios';




const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { addItemToCart, addToFavorites, getFavoriteItems } = useCart();
    const favoriteItems = getFavoriteItems(services);

    const handleAddToCart = (service) => {
        addItemToCart({ ...service, quantity: 1 });
    };

    const handleToggleFavorite = (item) => {
        addToFavorites(item);
    };

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/products');
            setServices(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices()
    }, [])



    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee For You</h1>
                    <p className="text-gray-600 mt-4">Discover our exclusive range of coffees</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {services.length > 0 && services.map((service) => (
                        <div key={service._id} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                            <div className="h-[122px]">
                                <img src={`http://localhost:5001/${service.img}`} alt={service.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
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
