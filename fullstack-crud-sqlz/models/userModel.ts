import db from "../utils/database";
import { DataTypes } from "sequelize"

const userModel = db.define("users",{
    username:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    lastname:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING}
})

export default userModel