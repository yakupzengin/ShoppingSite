import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cardSlice.js';
import CartComp from '../components/cart/CartComp';
import { Link } from 'react-router-dom';
import {RiShoppingCartLine} from "react-icons/ri"
const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, index) => (
            <CartComp key={index} cart={cart} />
          ))}
          <div className="mb-5 flex items-center justify-end text-2xl">
          Total amount: <span className="font-bold mx-5">$ {totalAmount} </span>
          </div>
        </div>
      ) : (

        <div className="flex flex-col items-center justify-center h-screen">

            <RiShoppingCartLine className="text-7xl text-gray-400 mb-4" />

          <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
          <p className="text-lg text-gray-600 text-center mb-6">
          No products have been added yet. 

          </p>
          <Link to="/">
          <button className="px-6 py-3 text-lg text-white bg-blue-500 rounded-md hover:bg-red-600">
            Lets Start Shopping 
          </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Cart;