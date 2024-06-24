import React from 'react'
import {useQuery} from '@tanstack/react-query';
import { viewImagesAPI } from '../apis/openaiAPI';

const ViewImages = () => {
  const {isError, isLoading, isSuccess, isPending, data, error} = useQuery({queryFn:viewImagesAPI,queryKey:['dalle-images']});

  return (
    <div className='bg-black min-h-screen flex flex-col '>
      <h1 className='bg-slate-900 text-white p-16 text-2xl lg:text-4xl font-bold text-center'>Dalle-3 Genertaed Images </h1>

      {
        isLoading ? <p className='text-white font-medium bg-red-500 p-12 text-center text-lg lg:2xl'>Pictures are Loading. Please Wait for a moment...</p> : ''
      }
      {
        isError ? <p className='text-white font-medium bg-red-500 p-12 text-center text-lg lg:2xl'>{error?.response?.data?.errorMessage}</p> : ''
      }

      {
        isSuccess ? 
        <div className='bg-slate-300 flex flex-col md:flex-row        md:flex-wrap justify-center md:items-center'>
          {
            data?.allImages?.map((image) => {
              <div key={image?.image_publicID} className='bg-blue-50 md:w-96 border-4 mx-12 md:mx-6 border-black my-2 text-center'>{image?.imageURL}</div>
            })
          }
        </div> : ''
      }

    </div>
  )
}

export default ViewImages