import React from 'react'

function Sorting( {setSort} ) {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={e => setSort(e.target.value)} className='bg-blue-200 rounded-md py-3 px-5 outline-none hover:bg-blue-500 ' name="" id="">
        <option value=""  > Select;</option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  )
}

export default Sorting