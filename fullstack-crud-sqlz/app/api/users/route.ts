
import {getAllUsers} from '../../../controllers/userController.ts'

export async function GET(req: any,res: any) {
    try{
        const users = await getAllUsers;
        res.json(users);

    } catch(error: any){
        res.json({message:error.message})
    }
}
