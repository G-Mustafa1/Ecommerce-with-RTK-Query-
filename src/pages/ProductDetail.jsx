import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../features/productApi'

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useGetSingleProductQuery(id)
  if (isLoading) {
    return <h1 className='text-4xl text-center mt-10'>Loading...</h1>
  }

  if (isError) {
    return <h1 className='text-4xl text-center mt-10'>Error loading product...</h1>
  }

  return (
    <div className='flex justify-center items-center py-40'>
      <div className=" flex items-center justify-between max-md:flex-col py-10 w-[80%] px-[60px] max-sm:px-[2px]  bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className=''>
          <img src={data.image} alt="" className="h-[200px] w-auto " />
        </div>
        <div className="p-4">
          <h2 className='text-2xl font-bold  mb-2 text-gray-900'>{data.category}</h2>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{data.title}</h3>
          <p className="text-gray-700 max-sm:hidden text-xl">{data.description.slice(0, 82)}</p>
          <p className="text-gray-700 text-xl hidden max-sm:block">{data.description.slice(0, 50)}</p>
          <div className='flex justify-between items-center my-2.5 text-orange-700 font-bold text-xl'>
            <p>{data.rating.rate}</p>
            <p>{data.rating.count}</p>
          </div>
          <p className="text-blue-600 font-bold text-xl">${data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
