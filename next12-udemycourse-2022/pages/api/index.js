


// función handler

function handler(req,res){
    // ver todas las propeidades que se pueden usar de req y res
    //console.log(req,res)
    res.status(200).json({mensaje : "Nuestra primera ruta API"});
}

export default handler;