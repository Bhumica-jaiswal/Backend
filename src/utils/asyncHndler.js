const asyncHandler= (requestHandler)=>{
    (req,resizeBy,next)=>{
        Promise.resolve(requestHandler(req,resizeBy,next)).catch(err=>next(err))
    }
}





export{asyncHandler}

//higher order function
    // const asyncHandler=  ()=>{}
    // const asyncHandler=  (fn)=>{ ()=>{} }
    // const asyncHandler=  (fn)=> async()=>{}

// const asyncHandler= (fn)=> async(req,res,next)=> {
//     try {
//        await fn(req,res,next) 
//     } catch (error) {
//         res.status(error.code || 404).json({
//             success:false,
//             message:error.message,
//         })

//     }
// }