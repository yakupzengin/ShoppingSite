import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
  // etkilendi
  const Product = ({ product, onFavoriteChange }) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(favorite => favorite.id === product.id);
    const [isFilled, setIsFilled] = useState(isFavorite);

    const handleClick = () => {
      setIsFilled(!isFilled);
      if (!isFilled) {
        // Save the product to the user's favorites in local storage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
        // Remove the product from the user's favorites in local storage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(favorite => favorite.id !== product.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      if (onFavoriteChange) {
        onFavoriteChange();
      }
    };
    const navigate = useNavigate();
    return (
      <div className="w-[300px] p-3 mb-5 mx-6 border rounded-md relative">
        <img
          className="w-[200px] h-[200px] object-cover m-auto cursor-pointer hover:scale-105 hover:shadow-7xl transition duration-300" onClick={() => navigate(`products/${product?.id}`)}
          src={product?.image}
          // src={product?.images[0]}
          alt=""
        />
        <div className="px-3 my-7 text-sm font-semibold text-lg">{product.title}</div>
        <div className="absolute top-14 right-4 cursor-pointer" onClick={handleClick}>
          {isFilled ? <BsHeartFill size={23} className="w-8 h-8 text-red-600 transition duration-500 transform rotate-45" /> : <BsHeart size={22} className='w-6 h-6 hover:text-red-400 transition duration-300' />}
        </div>
        <div className="text-sm font-bold absolute rounded-md top-41 -mt-5 mx-3 text-black">
          <span className="text-md">$</span> {product?.price} 
        </div>
      </div>
    );
  }

  export default Product;
