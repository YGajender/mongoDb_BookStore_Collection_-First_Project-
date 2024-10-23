import mongoose from "mongoose";

const BorrowerSchema = new mongoose.Schema({
    name: String,
    email:String,
    borrowedBooks: String,
    borrowDate:String,
    returnDate:String
});

const BorrowerModel = mongoose.model("Borrower", BorrowerSchema);
export default BorrowerModel;
