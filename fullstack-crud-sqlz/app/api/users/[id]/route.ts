
import {getUser} from '../../../../controllers/userController.ts'

export async function GET(req: any,res: any) {
    try{        
        const user = await getUser;
        res.json(user);

    } catch(error: any){
        res.json({message:error.message})
    }
}