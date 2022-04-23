import React from 'react'
import {AiOutlinePlus} from "@react-icons/all-files/ai/AiOutlinePlus"

function ProductItem({product:{id,title,image,alt,price}}) {
  return (
    <div className='relative bg-white flex flex-col gap-y-1 items-center text-center text-sm p-2'>
      <button className='absolute bg-white top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-primary-brand-color shadow-lg shadow-gray-500/10'>
        <AiOutlinePlus/>
      </button>
      <img src={image} alt={title} className='w-40'/>
      <h3 className='text-brand-color font-semibold items-center'>₺{price}</h3>
      <span className='font-sm font-[500] text-gray-900'>{title}</span>
      <span className='text-gray-400'>{alt}</span>
    </div>
  )
}

export default ProductItem
