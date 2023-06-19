import React from 'react'
import { removeFromCart } from '../../redux/cardSlice.js'
import { useDispatch } from 'react-redux'

const CartComp = ( {cart}) => {
  const dispatch = useDispatch()
  return (
    <div className='my-5 mt-20   flex items-center justify-between'>
      <img className='w-[130px]  object-cover '   src={cart?.image} alt="" />
      <div className='w-[476px]'> 
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold '><strong>$</strong> {cart?.price} x <span className='  text-lg '>{cart?.quantity} </span> </div>
      <div onClick={ () => dispatch(removeFromCart(cart?.id)) } className='flex items-center justify-center cursor-pointer rounded-md   bg-red-500 text-white w-[150px] text-2xl h-16  '>Remove </div>
    </div>
  )
}

export default CartComp