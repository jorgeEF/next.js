import userModel from '../models/userModel.ts'

// CRUD

// mostrar todos los post: READ
export const getAllUsers = async (req: any,res: any)=>{
    try{
        const users = await userModel.findAll();
        res.json(users);

    } catch(error: any){
        res.json({message:error.message})
    }
}

// mostrar un post
export const getUser = async (req: any,res: any)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        res.json(user);

    } catch(error: any){
        res.json({message:error.message})
    }
}

// crear post
export const createUser = async (req: any,res: any)=>{
    try{        
        await userModel.create(req.body)
        res.json({
            "message": "Usuario creado correctamente"
        })

    } catch(error: any){
        res.json({message:error.message})
    }
}

// editar un post
export const updateUser = async (req: any,res: any)=>{
    try{        
        const post = await userModel.update(req.body,{
            where: {id:req.params.id}
        });
        res.json({
            "message": "Usuario editado correctamente"
        })
        

    } catch(error: any){
        res.json({message:error.message})
    }
}

// eliminar un post
export const deleteUser = async (req: any,res: any)=>{
    try{        
        await userModel.destroy({where: {id:req.params.id}})
        res.json({
            "message": "Usuario eliminado correctamente"
        })

    } catch(error: any){
        res.json({message:error.message})
    }
}