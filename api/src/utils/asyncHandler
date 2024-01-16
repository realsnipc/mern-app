const apiError= require('./utils/apiError');


const asyncHandler= (fn)=>async (req,res,next)=>{
    try{
        return await fn(req,res,next)
    }catch{
        new apiError(500)
    }
};

exports.default= asyncHandler;