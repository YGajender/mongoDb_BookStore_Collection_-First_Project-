import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name:String,
    nationality:String,
    genres:String,
    totalcopies:Number
});

const AuthorModel = mongoose.model("Author", AuthorSchema);
export default AuthorModel;
