import express from "express";
import BookModel from "../models/books.js";


export async function createBook(req, res) {
   try {
      console.log(req.body)
      const createnewBook = new BookModel(req.body);
      await createnewBook.save();
      res.status(201).json(createnewBook)
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add book' })
   }
}

export async function getBooks(req, res) {
   try {
      const books = await BookModel.find();
      res.status(200).json(books);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add book' })
   }
}

export async function getOneIdBooks(req, res) {
      console.log("first>>>>>>>>>>>>>>>>>")
      const books = await BookModel.findById(req.params.id)
      console.log(books)
      res.status(200).json(books);
}

export async function putOneBooks(req, res) {
   try {
      const updateOneBooks = await BorrowerModel.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true } 
      );
      if (!updateOneBooks)
         return res.status(404).json({ error: 'Borrower not found' });
         res.status(200).json(updateOneBooks);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update single data', details: err.message });
   }
}

export async function deleteBook(req, res) {
   const deleteBook = await BookModel.findByIdAndDelete(req.params.id);
   console.log(deleteBook);
   if (deleteBook) {
      res.status(200).json({ message: 'Book deleted successfully' });
   } else {
      res.status(404).json({ message: 'Book not found' });
   }
}

