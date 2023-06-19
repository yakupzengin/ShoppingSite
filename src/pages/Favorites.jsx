import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBagHeartFill } from 'react-icons/bs';
import Product from '../components/Home/Product';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(fetchedFavorites);
  }, []);

  const handleFavoriteChange = () => {
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h1 className="flex items-center  justify-center text-4xl  font-extrabold tracking-tight text-gray-900">Favorilerim</h1>
        {favorites.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favorites.map((product, index) => (
              <Product key={index} product={product} onFavoriteChange={handleFavoriteChange} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <Link to="/" >
            <BsBagHeartFill className="text-6xl text-red-400 mx-auto " />
            </Link>

            <div className="mt-4 text-xl text-gray-600">
            Your favorite list is empty. Click on heart to add product .{' '}

            </div>
            <div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;