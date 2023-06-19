import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)
  // console.log(categories, "categories ") // Categoriler doğru bir şekilde aldığımızdan emin olduk.


  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className='w-1/6  bg-gray-100 p-4 -my-4 max-h-screen'>
      <div className='border-b  px-2 pb- text-xl font-bold '>CATEGORY</div>
      {
        categories?.map((category, index) => (
          <div onClick={()=> setCategory(category)} key={index} className='text-lg p-2 cursor-pointer hover:bg-gray-200'> {category} </div>
        ))
      }
    </div>
  )
}

export default Category