import mongoose from 'mongoose';

const openAISchema = mongoose.Schema({
        imagePrompt:{
            type:String,
            required:[true,'Image Prompt is required']
        },
        imageURL:{
            type:String,
            required:[true,'Image URL is required']
        },
        image_publicID:{
            type:String,
            required:[true,'Image public ID is required']
        }
},{
    timestamps:true
});



export default mongoose.model('OpenAIImages',openAISchema)