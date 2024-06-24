import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import { generatesAnImageAPI } from '../apis/openaiAPI';

const GenerateImage = () => {
  const navigate = useNavigate();
  const [prompt,setPrompt] = useState({
    prompt:''
  });
  const mutation = useMutation({mutationFn:generatesAnImageAPI,mutationKey:['dalle-3']});

  const handleChange = (e) => {
    const {value,name} = e.target;
    setPrompt({
      [name]:value
    })
  };

  const handleSubmit = () => {
    if(!prompt.prompt){
      alert('Please enter a prompt');
      return;
    }
    mutation.mutate(prompt);
  }


  useEffect(()=>{
    if(mutation?.isSuccess){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  },[mutation?.isSuccess])

  return (
    <>
      <div className='bg-orange-400 p-12 text-center min-h-screen
      flex flex-col justify-center items-center'>
        <p className='bg-slate-900 py-1 px-8 rounded-ss-lg rounded-se-lg font-bold text-white'>
        
        {
          mutation?.isPending ? 'Generating Image. Please wait for a moment...' : ''
        }
        {
          mutation?.isError ? mutation?.error?.response?.data?.errorMessage : ''
        }
        {
          mutation?.isSuccess ? mutation?.data?.message : ''
        }
        </p>
        <input onChange={handleChange} 
         name='prompt'
         id='prompt'
         className='w-full text-center rounded-md p-4 font-medium text-md focus:outline-offset-0
        focus:outline-none focus:outline-4 focus:outline-cyan-300'
        type='text' value={prompt.prompt}   placeholder='Write Your Prompt Here To Generate An Image' />
        <button onClick={handleSubmit} className='bg-slate-300 my-6 p-2 w-40 rounded-lg font-medium hover:font-bold transition-all hover:bg-white hover:transform hover:-translate-y-1 hover:shadow-lg lg:w-40'>Submit</button>
      </div>

      
    </>
  )
}

export default GenerateImage