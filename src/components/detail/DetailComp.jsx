import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice.js';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    if (quantity === 0) return; // Sayı 0 ise sepete ekleme işlemi yapma

    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
    setIsAddedToCart(true);

    setTimeout(() => {
      setIsAddedToCart(false);
      setQuantity(0);
    }, 500);
  };

  return (
    <div className="flex gap-10 py-20">
      <img className="w-[600px] object-cover" src={productDetail?.image} alt="" />
      <div className="">
        <div className="text-lg font-bold pt-20">{productDetail?.title}</div>
        <div className="my-2 text-md text-red-500">Rating: {productDetail?.rating?.rate}</div>
        <div className="my-2 text-md text-red-500">Count: {productDetail?.rating?.count}</div>
        <div className="text-3xl font-bold">
           <span className="text-2xl  ">$</span> {productDetail?.price}
        </div>
        <div className="flex gap-5 my-5">
          <div
            onClick={decrement}
            className="flex items-center justify-center  cursor-pointer flex w-10 h-10 text-center text-4xl  text-gray-500 hover:bg-gray-300"
          >
            -
          </div>
          <input className="w-10 text-3xl text-center " type="text" value={quantity} readOnly />
          <div
            onClick={increment}
            className="flex items-center justify-center  cursor-pointer w-10 h-10 text-4xl  text-gray-500 hover:bg-gray-300"
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className={`flex items-center justify-center w-40 h-12 mt-4 text-lg font-medium hover:bg-gray-200 cursor-pointer ${
            isAddedToCart ? 'bg-green-500 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'
          } ${quantity === 0 && 'opacity-50 cursor-not-allowed'}`}
        >
          {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
        </div>
        <div className="text-md my-8">{productDetail?.description}</div>
      </div>
    </div>
  );
};

export default DetailComp;