import mongoose from "mongoose";

const BookSchema =new mongoose.Schema({
    title:String,
    publicationDate:String,
    genres:String,
    totalCopies:Number,
    email:String,
    mobileNo:Number
    
});
const BookModel = mongoose.model("books", BookSchema);
export default BookModel;