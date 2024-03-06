
const error_route=(req,res,next)=>{
    res.json({"Error":"OOPSS!"});
}


module.exports=error_route;