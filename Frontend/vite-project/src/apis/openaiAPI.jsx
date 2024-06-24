import axios from 'axios';

const generatesAnImageAPI = async (promptData) => {
    const response = await axios.post('http://127.0.0.1:5000/api/v1/openai/generate-image',promptData,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
}

const viewImagesAPI = async () => {
    const response = await axios.get('http://127.0.0.1:5000/api/v1/openai/get_all_images',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
}

export {
    generatesAnImageAPI,
    viewImagesAPI
}