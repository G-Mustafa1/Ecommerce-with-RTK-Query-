import React, { useState, } from 'react'
import { useGetAllProductQuery } from '../features/productApi'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { data: products, isError, isLoading } = useGetAllProductQuery();
  const navigate = useNavigate();

  if(isLoading){
    return <h1 className='text-4xl text-center'>Loading...</h1>
  }
  
  if (isError) {
    return <h1 className='text-4xl text-center'>Something Went Wrong ....</h1>
  }
  
  
  return (
    <>
    <div className='bg-blue-500 text-white mt-20'>
      <h1 className='text-4xl text-center'>All Product</h1>
    </div>
    <div className='flex flex-wrap mt-20 justify-center py-10  gap-7'>
      {
        products.map((p) => (
          <div key={p.id} className="w-[250px] h-auto pt-6 px-5 flex flex-col items-center justify-center bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className='flex justify-center'>
              <img src={p.image} alt="" className="h-[200px] w-auto " />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{p.title.slice(0,25)}</h3>
              <p className="text-blue-600 font-bold text-xl">${p.price}</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full transition"
              onClick={() => {
              navigate(`/product/${p.id}`)   
              console.log('id',p.id)
              }}
              >
                See Detail
              </button>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Home
