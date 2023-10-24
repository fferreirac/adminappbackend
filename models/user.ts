import  {Schema, model} from 'mongoose';

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    login_code: {type: String, length: 8, required: true},
    roles: {
        type: {
        admin: Boolean,
        seller: Boolean,
    }, required: true,},   
});

export default model("User", userSchema, "users");
