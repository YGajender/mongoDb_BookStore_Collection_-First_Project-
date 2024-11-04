import express from "express";
import { getBooks,getOneIdBooks,createBook,deleteBook, putOneBooks } from "../controllers/books.js";
import { getAuthors,getByIdAuthors,createAuthors,deleteAuthors, putOneAuthors } from "../controllers/authors.js"
import { getBorrowers,getByIdBorrowers,createBorrowers,putOneBorrowers,deleteBorrowers } from "../controllers/borrowers.js";

const router = express.Router();

//ROUTES
router.post("/createBook",createBook);//add a book
router.get("/getBooks",getBooks);//fetch all books  getByIdBooks
router.get("/getOneIdBooks/:id",getOneIdBooks)
router.get("/putOneBooks/:id",putOneBooks)
router.delete("/deleteBook/:id", deleteBook); //delete a book


//Authors Routes
router.post("/createAuthors",createAuthors); //add new Authors 
router.get("/getAuthors",getAuthors);    
router.get("/getByIdAuthors/:id",getByIdAuthors);
router.get("/putOneAuthors/:id",putOneAuthors)
router.delete("/deleteAuthors/:id", deleteAuthors);

//Borrowers Routes
router.post("/createBorrowers",createBorrowers);
router.get("/getBorrowers",getBorrowers);
router.get("/getByIdBorrowers/:id",getByIdBorrowers);
router.put("/putOneBorrowers/:id",putOneBorrowers);
router.delete("/deleteBorrowers/:id", deleteBorrowers);



export default router;