import { Schema, Types, model, Model  } from "mongoose";
import { User } from "../interfaces/user.interface";


const UserSchema = new Schema<User>(
  {
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    rol: {
        type: String,
        default: "user",
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const UserModel = model("users", UserSchema);
export default UserModel;