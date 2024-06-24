//  ! Load Functionalities
import asyncHandler from 'express-async-handler';

const userRegisterCtrl  = asyncHandler(async(req,res) => {
    res.json({
        success:true,
        message:'User Registration Went Successfully'
    })
});



const userLoginCtrl = asyncHandler(async(req,res) => {
    res.json({
        success:true,
        message:'User Login Went Successfully'
    })
});



const userProfileCtrl = asyncHandler(async(req,res,next) => {
    
    res.json({
        success:true,
        message:'User Profile Found Successfully'
    })
});


export {
    userProfileCtrl,
    userRegisterCtrl,
    userLoginCtrl
}