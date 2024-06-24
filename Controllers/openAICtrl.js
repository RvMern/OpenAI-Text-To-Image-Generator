import asyncHandler from 'express-async-handler';
import OpenAI from 'openai';
import {config, uploader} from 'cloudinary';
import OpenAIImages from '../../OpenAI Text To Image Converter/Models/openAIImageModel.js';
config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const genertaeImageCtrl = asyncHandler(async(req,res) => {
    try{
        const openai = new OpenAI({
            apiKey:process.env.OPENAI_SECRET_KEY
        });
        const {prompt} = req.body;
        const response = await openai.images.generate({
            model:'dall-e-3',
            prompt,
            n:1,
            size:'1024x1024'
        });
        if(!response){
            throw new Error('Image Generation Failed !')
        }
        const imageURL = response.data[0].url;
        const uploadedImage = await uploader.upload(imageURL,{
            folder:'ai-images',  
        });
        if(!uploadedImage){
            throw new Error('Image is not successfully uploaded on cloudinary')
        }
        const createImageInOpenAIImagesCollection = await OpenAIImages.create({
            imagePrompt: response.data[0]?.revised_prompt,
            imageURL:uploadedImage?.url,
            image_publicID:uploadedImage?.public_id
        });
        if(!createImageInOpenAIImagesCollection){
            throw new Error('Image was not able to store in database');
        }
        res.status(200).json({
            sucess:true,
            message:'Image Created Successfully',
            imageData:createImageInOpenAIImagesCollection
        });
    }
    catch(err){
        throw new Error(err.message);
    }
});


const getAllImagesCtrl = asyncHandler(async(req,res)=>{
    const getAllImages = await OpenAIImages.find();
    if(getAllImages?.length === 0){
        throw new Error('Sorry! No images found as not a single image has been created till now.');
    }
    res.status(200).json({
        success:true,
        message:'All images has been fetched successfully',
        allImages:getAllImages
    })
})



export {
    genertaeImageCtrl,
    getAllImagesCtrl
};