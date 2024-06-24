import express from 'express';
import { genertaeImageCtrl, getAllImagesCtrl } from '../../OpenAI Text To Image Converter/Controllers/openAICtrl.js';
const route = express.Router();

route.post('/generate-image',genertaeImageCtrl);
route.get('/get_all_images',getAllImagesCtrl);




export default route;