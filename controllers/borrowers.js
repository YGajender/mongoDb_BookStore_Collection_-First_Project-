import express from "express";
import BorrowersModel from "../models/borrowers.js";

export async function createBorrowers(req, res){
   const newBorrowers = new BorrowersModel(req.body);
   await newBorrowers.save();
   res.send("Borrwers Added");
}

export async function getBorrowers(req, res){
   try{
      const borrowers = await BorrowersModel.find().select;
      res.status(200).json(borrowers);
   }catch(err){
      console.log(err);
      res.status(500).json({error:'Failed to Add book'})
   }
}

export async function getByIdBorrowers(req, res) {
   console.log("first")
   const Borrowerss = await BorrowersModel.findById(req.params.id)
   console.log(Borrowerss)
   res.status(200).json(Borrowerss);
}


export async function deleteBorrowers(req, res){
   const deleteBorrowers = await BorrowersModel.findByIdAndDelete(req.params.id);
   console.log(deleteBorrowers);
   if (deleteBorrowers) {
      res.status(200).json({ message: 'Borrowers deleted successfully' });
   } else {
      res.status(404).json({ message: 'Borrowers not found' });
   }
}
