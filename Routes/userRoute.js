import express from 'express';
const route = express.Router();
import {userProfileCtrl,userRegisterCtrl,userLoginCtrl} from '../../OpenAI Text To Image Converter/Controllers/userCtrl.js';

route.get('/profile',userProfileCtrl)
route.post('/register',userRegisterCtrl)
route.post('/login',userLoginCtrl)




export default  route;