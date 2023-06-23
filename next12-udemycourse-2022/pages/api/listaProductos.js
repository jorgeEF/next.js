import {listaProductos} from "../../utils";


function handler(req,res){
    res.status(200).json({listaProductos})
}

export default handler;