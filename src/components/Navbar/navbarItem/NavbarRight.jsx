
import React, { useEffect, useState } from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cardSlice.js';
import { useNavigate } from 'react-router-dom';
import Search from '../../../pages/Search';
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector(state => state.carts)
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  const handleIconClick = () => {
    navigate(`/products/${keyword}`);
  }

  return (
    <div className='flex items-center gap-8 '>
      <div className='flex items-center border mx-3 p-3 rounded-full outline-none h-[50px] w-[250px]'>
        <Search setKeyword={setKeyword} />
      </div>
      <BsFillSearchHeartFill
        onClick={handleIconClick}
        className='flex -ml-20 cursor-pointer'
        size={30}
      />
      <div  onClick={() => navigate("/favorites")} className='cursor-pointer' size={25}>
        <AiTwotoneHeart size={25} />
        <div className='text-sm '>Favorites</div>
      </div>
      <div className='cursor-pointer'>
        <AiOutlineLogin size={25} />
        <div className='text-sm'>Acoount</div>
      </div>
      <div onClick={() => navigate("cart")} className='relative cursor-pointer'>
        <div className='flex items-center justify-center absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-5 h-5'>{itemCount}</div>
        <SlBasketLoaded className='' size={25} />
        <div onClick={() => navigate("cart")}  className='text-sm '>Cart</div>
      </div>
    </div>
  )
}

export default NavbarRight;